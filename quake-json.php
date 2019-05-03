<?php
// PHP script by Ken True, webmaster@saratoga-weather.org
// quake-json.php  
// Version 1.00 - 08-Sep-2012 - initial release as quake-json.php
// Version 1.01 - 09-Sep-2012 - fixed XHTML 1.0-Strict and removed ' GMT' from local time display
// Version 1.02 - 12-Sep-2012 - added diagnostics, map control translations and optional target="_blank" for links
// Version 1.03 - 04-Jan-2013 - added fix for USGS unix timestamp with trailing zero added
// Version 1.04 - 23-May-2013 - added 'home' pin, settings for lat/long via calling page
// Version 1.05 - 24-May-2013 - fixed a CSS styling error for white-space: spec
// Version 1.06 - 09-Dec-2014 - added unchunk of JSON data due to USGS website change
// Version 1.07 - 02-Jun-2015 - changes for new USGS GeoJSON source URL
// Version 1.08 - 06-Jul-2015 - added debugging code for time calculation+force JSON BIGINT as string
// Version 1.09 - 03-Jul-2016 - added Google API key support
// Version 1.10 - 07-Aug-2016 - fixed quake-json.js V1.01 for window.onload interference problem in sorttable script
// Version 1.11 - 14-Feb-2017 - added support for HTTPS access to USGS feed
// Version 1.12 - 21-Feb-2017 - corrected main USGS URL
// Version 1.13 - 30-May-2017 - USGS provided tz info incorrect .. switch to using PHP TZ for times
// Version 2.00 - 10-May-2018 - rewritten to use Leaflet/OpenStreetMaps + others for display

  $Version = 'quake-json.php V2.00 - 10-May-2018';
//  error_reporting(E_ALL);  // uncomment to turn on full error reporting
//
// script available at http://saratoga-weather.org/scripts.php
//  
// you may copy/modify/use this script as you see fit,
// no warranty is expressed or implied.
//
// Customized for: all earthquakes from the new GeoJSON feeds
//   http://earthquake.usgs.gov/earthquakes/feed/geojson/1.0/week
//  which displays all earthquakes > 1.0 magnitude in the past 7 days
//
//
// output: creates XHTML 1.0-Strict HTML page (default)
// Options on URL:
//      tablesonly=Y    -- returns only the body code for inclusion
//                         in other webpages.  Omit to return full HTML.
//      magnitude=N.N   -- screens results looking for Richter magnitudes of
//                          N.N or greater.
//      distance=MMM    -- display quakes with epicenters only within 
//                         MMM km of your location
// example URL:
//  http://your.website/quake-json.php?tablesonly=Y&magnitude=2.1&distance=45
//  would return data without HTML header/footer for earthquakes of
//  magnitude 2.1 or larger within a 45 mile radius of your location.
//
// Usage:
//  you can use this webpage standalone (customize the HTML portion below)
//  or you can include it in an existing page:
/*
<?php
  $doIncludeQuake = true;

# uncomment ONE of the $setDistanceDisplay lines to use as template for distance displays  
#  $setDistanceDisplay = 'mi (km)';
  $setDistanceDisplay = 'mi';
#  $setDistanceDisplay = 'km (mi)';
#  $setDistanceDisplay = 'km';

  $setDistanceRadius  = 200;  // same units as first unit in $setDistanceDisplay
# NOTE: quakes of magnitude 1.0+ are available for USA locations only.
#  non-USA location earthquakes of magnitude 4.0+ are the only ones available from the USGS
  $setMinMagnitude = '2.0';  // minimum Richter Magnitude to display
  $setHighMagnitude = '4.0';  // highlight this Magnitude and greater
  
  $setMapZoomDefault = 7;    // default zoom for Google Map 1=world to 13=street
# script will use your $SITE[] values for latitude, longitude, timezone and time display format

  $setDoLinkTarget = true;   // =true to have links open in new page, =false for XHTML 1.0-Strict
  include("quake-json.php");
?> 
*/
//  no parms:    include("quake-json.php"); 
//
//
// settings: --------------------------------------------------------------------
// if you are using www.mapbox.com for map tiles, you
// need to acquire an API ke from that service
//
//  put this in the CALLING page for quake-json.php script:
/*
  $mapboxAPIkey = '-replace-this-with-your-API-key-here-'; 
*/
// Note: if using the Saratoga template set, put a new entry in Settings.php
/*

$SITE['mapboxAPIkey'] = '-replace-this-with-your-API-key-here-';

*/
// and you won't need to change the $mapAPI value above (nor any of the other
// settings in the script below.
// 
//  change myLat, myLong to your station latitude/longitude, 
//  set $ourTZ to your time zone
//    other settings are optional
//
// minRichter= smallest quake to display (world is 4.0+, USA is 1.0+ on USGS
// cacheName is name of file used to store cached USGS webpage
// 
//  set to station latitude/longitude (decimal degrees)
  $myLat = 37.2746251;    //North=positive, South=negative decimal degrees
  $myLong = -122.0229656;   //East=positive, West=negative decimal degrees
// The above settings are for saratoga-weather.org location
  $ourLocationName = 'Saratoga, CA';  // city/town name for lat/long above
//
  $ourTZ = "America/Los_Angeles";  //NOTE: this *MUST* be set correctly to
// translate UTC times to your LOCAL time for the displays.
// Use http://www.php.net/manual/en/timezones.php to find the timezone suitable for
//  your location.
//
//  pick a format for the time to display ..uncomment one (or make your own)
//$timeFormat = 'D, Y-m-d H:i:s T';  // Fri, 2006-03-31 14:03:22 TZone
  $timeFormat = 'D, d-M-Y H:i:s T';  // Fri, 31-Mar-2006 14:03:22 TZone
  
// setting for how to display distances .. uncomment one below
// note: will be overridden by $SITE['distanceDisplay']  or $setDistanceDisplay if it exists
//
  $distanceDisplay = 'mi (km)';   // display for distances in 'N mi (K km)'
//  $distanceDisplay = 'mi';   // display for distances in 'N mi'
//  $distanceDisplay = 'km (mi)';   // display for distances in 'K km (N mi)'
//  $distanceDisplay = 'km';   // display for distances in 'K km'

  $minRichter = '2.0';   // minimum Richter scale earthquake to display
  $maxDistance = 200;    // quake must be within this number of miles/kilometers to location
                         // specified in $myLat, $myLong latitude/longitude
						 // and miles/kilometers chosen by first entry in $distanceDisplay above
  
  $highRichter = "5.0"; //change color for quakes >= this magnitude
  $mapZoomDefault = 7;  // default Google Map zoom entry for display (1=world, 13=street)


  $cacheFileDir = './';   // default cache file directory
  $cacheName = "quakesjson.txt";  // used to store the file so we don't have to
  //                          fetch it each time
  $refetchSeconds = 1800;     // refetch every nnnn seconds

  $imagesDir = './ajax-images/';
  $doLinkTarget = true; // =true; to have links open in new page, =false; for XHTML 1.0-Strict
	
	// see: http://leaflet-extras.github.io/leaflet-providers/preview/ for additional maps
	// select ONE map tile provider by uncommenting the values below.
	
	$mapProvider = 'Esri_WorldTopoMap'; // ESRI topo map - no key needed
	//$mapProvider = 'OSM';     // OpenStreetMap - no key needed
	//$mapProvider = 'Terrain'; // Terrain map by stamen.com - no key needed
	//$mapProvider = 'OpenTopo'; // OpenTopoMap.com - no key needed
	//$mapProvider = 'Wikimedia'; // Wikimedia map - no key needed
// 
	//$mapProvider = 'MapboxSat';  // Maps by Mapbox.com - API KEY needed in $mapboxAPIkey 
	//$mapProvider = 'MapboxTer';  // Maps by Mapbox.com - API KEY needed in $mapboxAPIkey 
	$mapboxAPIkey = '--mapbox-API-key--';  // use this for the API key to MapBox
	
// end of settings -------------------------------------------------------------

if (isset($_REQUEST['sce']) && strtolower($_REQUEST['sce']) == 'view' ) {
   //--self downloader --
   $filenameReal = __FILE__;
   $download_size = filesize($filenameReal);
   header('Pragma: public');
   header('Cache-Control: private');
   header('Cache-Control: no-cache, must-revalidate');
   header("Content-type: text/plain");
   header("Accept-Ranges: bytes");
   header("Content-Length: $download_size");
   header('Connection: close');
   
   readfile($filenameReal);
   exit;
}
// Constants
// don't change $baseURL or $fileName or script may break ;-)
  $mapMainURL = "https://earthquake.usgs.gov/earthquakes/";  //USGS website main link
  $fileName = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson";
// end of constants
// overrides from Settings.php if available
if(file_exists("Settings.php")) {include_once("Settings.php");}
//if(file_exists("common.php"))   {include_once("common.php");}
global $SITE,$missingTrans;
if (isset($SITE['latitude'])) 	     {$myLat = $SITE['latitude'];}
if (isset($SITE['longitude'])) 	     {$myLong = $SITE['longitude'];}
if (isset($SITE['cityname'])) 	     {$ourLocationName = $SITE['cityname'];}
if (isset($SITE['tz']))              {$ourTZ = $SITE['tz']; }
if (isset($SITE['timeFormat']))      {$timeFormat = $SITE['timeFormat'];}
if (isset($SITE['cacheFileDir']))    {$cacheFileDir = $SITE['cacheFileDir']; }
if (isset($SITE['distanceDisplay'])) {$distanceDisplay = $SITE['distanceDisplay']; }
if (isset($SITE['mapboxAPIkey']))    {$mapboxAPIkey = $SITE['mapboxAPIkey']; }
// end of overrides from Settings.php

# Shim function if run outside of AJAX/PHP template set
# these must be before the missing function is called in the source
if(!function_exists('langtransstr')) {
	function langtransstr($item) {
		return($item);
	}
}
if(!function_exists('langtrans')) {
	function langtrans($item) {
		print $item;
		return;
	}
}

// overrides from including page if any
if (isset($setDistanceDisplay)) { $distanceDisplay = $setDistanceDisplay; }
if (isset($setDistanceRadius))  { $maxDistance = $setDistanceRadius; }
if (isset($setMinMagnitude))    { $minRichter = $setMinMagnitude; }
if (isset($setHighMagnitude))   { $highRichter = $setHighMagnitude; }
if (isset($setMapZoomDefault))  { $mapZoomDefault = $setMapZoomDefault; }
if (isset($setDoLinkTarget))    { $doLinkTarget = $setDoLinkTarget; }
if (isset($setLatitude))        { $myLat = $setLatitude; }
if (isset($setLongitude))       { $myLong = $setLongitude; }
if (isset($setLocationName))    { $ourLocationName = $setLocationName; }
if (isset($setTimeZone))        { $ourTZ = $setTimeZone; }
if (isset($setTimeFormat))      { $timeFormat = $setTimeFormat; }
if (isset($setMapProvider))     { $mapProvider = $setMapProvider; }
if (isset($setMapboxAPIkey))    { $mapboxAPIkey = $setMapboxAPIkey; }

// ------ start of code -------

if(!isset($mapboxAPIkey)) {
	$mapboxAPIkey = '--mapbox-API-key--';
}

// table of available map tile providers
$mapTileProviders = array(
  'OSM' => array( 
	   'name' => 'Street',
	   'URL' =>'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		 'attrib' => '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ',
		 'maxzoom' => 18
		  ),
  'Wikimedia' => array(
	  'name' => 'Street2',
    'URL' =>'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
	  'attrib' =>  '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
	  'maxzoom' =>  18
    ),		
  'Esri_WorldTopoMap' =>  array(
	  'name' => 'Terrain',
    'URL' => 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
	  'attrib' =>  'Tiles &copy; <a href="https://www.esri.com/en-us/home" title="Sources: Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community">Esri</a>',
	  'maxzoom' =>  18
    ),
	'Terrain' => array(
	   'name' => 'Terrain2',
		 'URL' =>'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
		 'attrib' => '<a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> <a href="https://stamen.com">Stamen.com</a> | Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
		 'maxzoom' => 14
		  ),
	'OpenTopo' => array(
	   'name' => 'Topo',
		 'URL' =>'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
		 'attrib' => ' &copy; <a href="https://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) | Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
		 'maxzoom' => 15
		  ),
	'MapboxTer' => array(
	   'name' => 'Terrain3',
		 'URL' =>'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token='.
		 $mapboxAPIkey,
		 'attrib' => '&copy; <a href="https://mapbox.com">MapBox.com</a> | Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
		 'maxzoom' => 18
		  ),
	'MapboxSat' => array(
	   'name' => 'Satellite',
		 'URL' =>'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token='.
		 $mapboxAPIkey,
		 'attrib' => '&copy; <a href="https://mapbox.com">MapBox.com</a> | Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
		 'maxzoom' => 18
		  ),
			
	);

// Check parameters and force defaults/ranges
if ( ! isset($_REQUEST['tablesonly']) ) {
        $_REQUEST['tablesonly']="";
}
if (isset($doIncludeQuake) and $doIncludeQuake ) {
  $tablesOnly = "Y";
} else {
  $tablesOnly = $_REQUEST['tablesonly']; // any nonblank is ok
}

if ($tablesOnly) {$tablesOnly = "Y";}

if ( isset($_REQUEST['magnitude']) ) {
   $minRichter = preg_replace("/^[^\d\.]+$/",'',$_REQUEST['magnitude']);
}
if ($minRichter <= "1.0") {$minRichter = "1.0";}
if ($minRichter >= "9.0") {$minRichter = "9.0";}

if ( isset($_REQUEST['highmagnitude']) ) {
   $highRichter = preg_replace("/^[^\d\.]+$/",'',$_REQUEST['highmagnitude']);
}
if ($highRichter <= "1.0") {$highRichter = "1.0";}
if ($highRichter >= "9.0") {$highRichter = "9.0";}

if (isset($_REQUEST['distance']) ) {
    $maxDistance = preg_replace("/^[^\d]+$/",'',$_REQUEST['distance']);
}
if ($maxDistance <= "10") {$maxDistance = "10";}
if ($maxDistance >= "15000") {$maxDistance = "15000";}		

// for testing only 
if ( isset($_REQUEST['lat']) )     { $myLat = $_REQUEST['lat']; }
if ( isset($_REQUEST['lon']) )     { $myLong = $_REQUEST['lon']; }
if ( isset($_REQUEST['testloc']) ) { setTestLoc($_REQUEST['testloc']); } // allows for test override

if ( isset($_REQUEST['cache'])) {$refetchSeconds = 1; }

$Lang = 'en'; // default language
if ( isset($_REQUEST['lang']))  {$Lang = strtolower($_REQUEST['lang']); }

$Lang = QJ_ISO_Lang($Lang);  // use official abbreviation or 'en' as default

// omit HTML <HEAD>...</HEAD><BODY> if only tables wanted	
// --------------- customize HTML if you like -----------------------
if (! $tablesOnly) {
?>
<?php if($doLinkTarget) { // generate XHTML 1.0-Transitional ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php } else { // generate XHTML 1.0-Strict header ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<?php } // end DOCTYPE selector ?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Refresh" content="300" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title><?php langtrans('Earthquakes of magnitude'); ?> <?php print $minRichter; ?> <?php langtrans('within'); ?> <?php print $maxDistance; ?> <?php langtrans('km'); ?></title>
<style type="text/css">
body {
  margin: 0 auto;
  padding: 10px 20px 20px;
  width: 640px;
  font-family: Arial;
  font-size: 12pt;
  background-color: white;
  color: black;
}

#map-container {
  padding: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc #ccc #999 #ccc;
  -webkit-box-shadow: rgba(64, 64, 64, 0.5) 0 2px 5px;
  -moz-box-shadow: rgba(64, 64, 64, 0.5) 0 2px 5px;
  box-shadow: rgba(64, 64, 64, 0.1) 0 2px 5px;
  width: 620px;
  display: none;
}

#map {
  width: 620px;
  height: 480px;
}

#actions {
  list-style: none;
  padding: 0;
}

#inline-actions {
  padding-top: 10px;
}

.item {
  margin-left: 20px;
}

#progress {
  display: none;
  position: absolute;
  z-index: 1000;
  left: 400px;
  top: 300px;
  width: 200px;
  height: 20px;
  margin-top: -20px;
  margin-left: -100px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  padding: 2px;
}

#progress-bar {
  width: 0;
  height: 100%;
  background-color: #76A6FC;
  border-radius: 4px;
}
</style>
<link rel="stylesheet" href="quake-json.css"/>
<script type="text/javascript" src="quake-json.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="background-color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-size:12px">
<?php
}

# Set timezone in PHP5/PHP4 manner
if (!function_exists('date_default_timezone_set')) {
  putenv("TZ=" . $ourTZ);
  } else {
  date_default_timezone_set("$ourTZ");
 }
 print "<!-- $Version -->\n";
 print "<!-- lat=$myLat long=$myLong dist=$maxDistance mag=$minRichter distanceDisplay ='$distanceDisplay' -->\n";

// refresh cached copy of page if needed
// fetch/cache code by Tom at carterlake.org
$cacheName = $cacheFileDir.$cacheName;
global $Debug;
$Debug = '';

if (file_exists($cacheName) and filemtime($cacheName) + $refetchSeconds > time()) {
      print "<!-- using Cached version of $cacheName -->\n";
      $rawhtml = implode('', file($cacheName));
    } else {
	  if($refetchSeconds == 1) { print "<!-- force cache reload -->\n"; }
      print "<!-- loading $cacheName from $fileName -->\n";
      $rawhtml = QJ_fetchUrlWithoutHanging($fileName);
	  print $Debug;
	  $i = strpos($rawhtml,"\r\n\r\n");
	  $headers = substr($rawhtml,0,$i-1);
	  $content = substr($rawhtml,$i+2);
      $RC = '';
	  if (preg_match("|^HTTP\/\S+ (.*)\r\n|",$rawhtml,$matches)) {
	    $RC = trim($matches[1]);
	  }
	  if(!preg_match('|200 |',$RC)) {
         print "<!-- fetch returns RC='".$RC."' for $fileName -->\n";
	  } else {
		$fp = fopen($cacheName, "w");
		if ($fp) {
		  $write = fputs($fp, $rawhtml);
		  fclose($fp);
		} else {
		  print "<!-- unable to write cache file $cacheName -->\n";
		}
	  }
      print "<!-- loading finished. -->\n";
	}

  $i = strpos($rawhtml,"\r\n\r\n");
  $headers = substr($rawhtml,0,$i-1);
  $content = substr($rawhtml,$i+4);
  
  $utctimestamp = '';
  if(preg_match('|\nLast-Modified: (.*)\n|Ui',$headers,$match)) {
	$udate = trim($match[1]);
	$utimestamp = strtotime($udate);
	print "<!-- data last modified $udate -->\n";
  } elseif (file_exists($cacheName)) {
	$utimestamp = filemtime($cacheName);
	print "<!-- cache data saved ".gmdate($timeFormat,$utimestamp)." UTC -->\n";
  } else {
	$utimestamp = time();  // get unix time for date
	print "<!-- using now as last modified date ".gmdate($timeFormat,$utimestamp)." UTC -->\n";
  }

  $updatedUTC = langtransstr('Update time') . " = " . gmdate($timeFormat,$utimestamp);
  $updated = langtransstr('Update time') . " = " . date($timeFormat,$utimestamp);
  print "<!-- $updatedUTC UTC-->\n"; 
  print "<!-- $updated  Local-->\n";
  print "<!-- content length=".strlen($content)." -->\n";
  $quakeJSON = array();
  if(strlen($content) > 10) {
	if(version_compare(PHP_VERSION, '5.4.0') >= 0) {
	  $quakeJSON = json_decode($content,true,512,JSON_BIGINT_AS_STRING);
	} else {
	  $quakeJSON = json_decode($content,true,512);
	}
  } else {
	print "<!-- no content to parse -->\n";
	print "<!-- USGS feed for earthquakes was not available at this time. See error messages above -->\n";
  }
  if(strlen($content > 10) and function_exists('json_last_error')) { // report status, php >= 5.3.0 only
	switch (json_last_error()) {
	  case JSON_ERROR_NONE:           $error = '- No errors';                                                break;
	  case JSON_ERROR_DEPTH:          $error = '- Maximum stack depth exceeded';                             break;
	  case JSON_ERROR_STATE_MISMATCH: $error = '- Underflow or the modes mismatch';                          break;
	  case JSON_ERROR_CTRL_CHAR:      $error = '- Unexpected control character found';                       break;
	  case JSON_ERROR_SYNTAX:         $error = '- Syntax error, malformed JSON';                             break;
	  case JSON_ERROR_UTF8:           $error = '- Malformed UTF-8 characters, possibly incorrectly encoded'; break;
	  default:                        $error = '- Unknown error';                                            break;
	}
  print  "<!-- JSON decode $error -->\n";
 }
 $JQUAKES = array(); 
 if(isset($quakeJSON['features'])) {$JQUAKES = $quakeJSON['features']; }
 print "<!-- found ".count($JQUAKES)." earthquake records -->\n";

 if(isset($mapTileProviders[$mapProvider]) ) {
		print "<!-- using \$mapProvider = '$mapProvider' as default map tiles. -->\n";
	} else {
		print "<!-- invalid \$mapProvider = '$mapProvider' - using OSM for map tiles instead. -->\n";
		$mapProvider = 'OSM';
 }
 $mapTilesAttrib = ' | Script by <a href="https://saratoga-weather.org/scripts-quake.php#quakePHP">Saratoga-weather.org</a>';

 /*  JSON returned format as associative array:
 Array
(
    [type] => FeatureCollection
    [features] => Array
        (
            [0] => Array
                (
                    [type] => Feature
                    [properties] => Array
                        (
                            [mag] => 2.2
                            [place] => 4km NNW of Brawley, California
                            [time] => 1346625108  (UTC timestamp)
                            [tz] => -420   (minutes offset from UTC for local time)
                            [url] => http://earthquake.usgs.gov/earthquakes/eventpage/ci15209889
                            [felt] => 1
                            [cdi] => 2
                            [mmi] => 
                            [alert] => 
                            [status] => AUTOMATIC
                            [tsunami] => 
                            [sig] => 75
                            [net] => ci
                            [code] => 15209889
                            [ids] => ,ci15209889,
                            [sources] => ,ci,
                            [types] => ,dyfi,general-link,geoserve,nearby-cities,origin,scitech-link,
                        )

                    [geometry] => Array
                        (
                            [type] => Point
                            [coordinates] => Array
                                (
                                    [0] => -115.5453 (longitude)
                                    [1] => 33.013   (latitude)
                                    [2] => 12.6  (depth in km)
                                )

                        )

                    [id] => ci15209889
                )

            [1] => Array
                (
                    [type] => Feature
                    [properties] => Array
                        (
                            [mag] => 4.8
                            [place] => 80km SSW of Adak, Alaska
                            [time] => 1346621542
                            [tz] => -720
                            [url] => http://earthquake.usgs.gov/earthquakes/eventpage/usc000cdrv
                            [felt] => 
                            [cdi] => 
                            [mmi] => 
                            [alert] => 
                            [status] => REVIEWED
                            [tsunami] => 
                            [sig] => 354
                            [net] => us
                            [code] => c000cdrv
                            [ids] => ,usc000cdrv,
                            [sources] => ,us,
                            [types] => ,eq-location-map,general-link,geoserve,historical-moment-tensor-map,historical-seismicity-map,nearby-cities,origin,p-wave-travel-times,phase-data,scitech-link,tectonic-summary,
                        )

                    [geometry] => Array
                        (
                            [type] => Point
                            [coordinates] => Array
                                (
                                    [0] => -176.947
                                    [1] => 51.1786
                                    [2] => 46.34
                                )

                        )

                    [id] => usc000cdrv
                )
*/ 
 // examine, process and format each line -- omit quakes not
 //   meeting the $minRichter and $maxDistance criteria
  $quakesFound = 0;
  $doneHeader = false;
  $comma = '';
  $dmaxDist = $distanceDisplay; // load template
  if(preg_match('|^km|',$dmaxDist)) {
    $maxDistanceMi = round($maxDistance/1.609344,0);
	  $maxDistanceKm = $maxDistance;
  } else {
    $maxDistanceMi = $maxDistance;
	  $maxDistanceKm = round($maxDistance*1.609344,0);
  }
  $dmaxDist = preg_replace('|mi|',"$maxDistanceMi mi",$dmaxDist);
  $dmaxDist = preg_replace('|km|',"$maxDistanceKm km",$dmaxDist);
  $JSONout = "var data = {\"markers\": [\n"; 
  $tgt = '';
  if($doLinkTarget) {$tgt = ' target="_blank"';}

  foreach ($JQUAKES as $key => $onequake) {
	  $tStatus = '';
      $magnitude = $onequake['properties']['mag'];
      $magnitude = sprintf("%1.1F",$magnitude);  // ensure one decimal point displayed
	  
      if ($magnitude >= "$minRichter")  {  // lets process it

      // load local variables
 	  $mapURL = $onequake['properties']['url'];
      // format quake date/time as local time at epicenter
	  $Qtimestamp = $onequake['properties']['time'];
	  $tStatus .= "<!-- ts='$Qtimestamp' tz='".$onequake['properties']['tz']."'";
	  if(strlen($Qtimestamp) > 10) {$Qtimestamp = substr($Qtimestamp,0,10); }
		// Note: USGS tz values not correct.. using TZ of script instead
//  $Qtimestamp = $Qtimestamp+$onequake['properties']['tz']*60;
	  $QDateTime = date($timeFormat,$Qtimestamp);
//	  $QDateTime = preg_replace('| GMT$|i','',$QDateTime); // Remove GMT string from local time text
	  $tStatus .= " ts-adj-tz='$Qtimestamp' timeFormat='$timeFormat' QDateTime='$QDateTime' -->\n";
	  // extract lat/long/depth
	  list($longitude,$latitude,$depth) = $onequake['geometry']['coordinates'];
	  $kmDepth = round($depth,1);
      $miDepth = round($kmDepth/1.609344,1);
	  $depth = $distanceDisplay;
	  $depth = preg_replace('|mi|',"$miDepth mi",$depth);
	  $depth = preg_replace('|km|',"$kmDepth km",$depth);
	  

	  preg_match('!^(\d+)km (\S+) of (.*)$!',$onequake['properties']['place'],$matches);
	  if(isset($matches[2])) {
		  $kmLoc = $matches[1];
		  $locDir = langtransstr($matches[2]);
		  $locText = $matches[3];
		  $miLoc = round($kmLoc/1.609344,0);
		  $location = $distanceDisplay; // load template
		  $location = preg_replace('|mi|',"$miLoc mi",$location);
		  $location = preg_replace('|km|',"$kmLoc km",$location);
		  $location .= " $locDir ".langtransstr('of')." ".$locText;
	  } else {
		  $location = $onequake['properties']['place'];
	  }
	  // provide highlighting for quakes >= $highRichter
	  if ($magnitude >= $highRichter) {
	     $magnitude = "<span style=\"color: red\">$magnitude</span>";
	     $location = "<span style=\"color: red;\">$location</span>";
	  }
	  
	  $distanceM = round(distance($myLat,$myLong,$latitude,$longitude,"M"));
	  $distanceK = round(distance($myLat,$myLong,$latitude,$longitude,"K"));
	  $distKsort = sprintf("%06d",$distanceK); // make an alpha sort key
	  
	  $dText = $distanceDisplay; // load template
	  $dText = preg_replace('|mi|',"$distanceM mi",$dText);
	  $dText = preg_replace('|km|',"$distanceK km",$dText);
	  $compareDistance = preg_match('|^km|',$distanceDisplay)?$distanceK:$distanceM;

      if ($compareDistance <= $maxDistance) { // only print 'close' ones
	  $quakesFound++;    // keep a tally of quakes for summary
	  
	  if (! $doneHeader) {  // print the header if needed
// --------------- customize HTML if you like -----------------------
?>
    <div id="map-container">
      <div id="map"></div>
    </div>
<?php if(count($JQUAKES) > 0) { // only do the legend if there is a map to produce ?>
    <script type="text/javascript">
// <![CDATA[
     document.getElementById("map-container").style.display="block"; // got JavaScript enabled.. display map
	// only write the map legend if JavaScript is enabled
    var legend = '<p class="quake" style="text-align: center"><img src="<?php print $imagesDir; ?>mma_20_green.png" height="20" width="12" alt="Home" style="vertical-align:middle"/> <?php echo $ourLocationName;?> | '+"\n"+ 
'<img src="<?php print $imagesDir; ?>mma_20_yellow.png" height="20" width="12" alt="Quake" style="vertical-align:middle"/> M<?php print $minRichter;?> - &lt; M<?php print $highRichter; ?> | '+"\n"+ 
'<img src="<?php print $imagesDir; ?>mma_20_red.png" height="20" width="12" alt="Quake" style="vertical-align:middle"/> M<?php print $highRichter; ?>+ | '+
'<span style="width: 25px; height: 25px; background-color: rgba(110, 204, 57, 0.6); border-radius: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <?php langtrans("Cluster - click to expand details"); ?>'+"</p>\n";
    document.write(legend);
// ]]>
	</script>
<?php } // end of produce legend if a map is produced  ?>
    <noscript><p>
<b><?php langtrans('Enable JavaScript to view the Google Map.'); ?></b>
</p>
    </noscript>
<?php
	    print "
<p class=\"quake\" style=\"text-align: center;\"><strong>
".langtransstr('Earthquakes in the past 7 days of magnitude')." $minRichter ".langtransstr('or greater within')." $dmaxDist <br/>$updated</strong></p>
<table class=\"sortable quake\" cellpadding=\"1\" cellspacing=\"1\" border=\"0\">
<thead>
  <tr>
	<th class=\"sorttable_nosort\">".langtransstr('Epicenter Near')."</th>
	<th style=\"cursor: n-resize;\"><script type=\"text/javascript\">document.write('&#8593;&#8595;');</script>".langtransstr('Magnitude')."</th>
	<th style=\"cursor: n-resize; text-align: center;\"><script type=\"text/javascript\">document.write('&#8593;&#8595;');</script>".langtransstr('Distance to Epicenter')."</th>
	<th style=\"cursor: n-resize;\"><script type=\"text/javascript\">document.write('&#8593;&#8595;');</script>".langtransstr('Time')."</th>
	<th class=\"sorttable_nosort\">".langtransstr('Link')."</th>
  </tr>
</thead>
<tbody>
";
	    $doneHeader = 1;
	  } // end doneHeader
// --------------- customize HTML if you like -----------------------
	    print "$tStatus
<tr>
  <td align=\"left\" style=\"white-space:normal\"><a href=\"$mapURL\"$tgt>$location</a></td>
  <td align=\"center\"><b>$magnitude</b></td>
  <td align=\"center\" style=\"white-space:nowrap\"><span style=\"display:none\">$distKsort</span><b>$dText</b></td>
  <td align=\"left\" style=\"white-space:nowrap\"><span style=\"display: none\">$Qtimestamp</span>$QDateTime</td>
  <td align=\"center\"><a href=\"$mapURL\"$tgt>".langtransstr('map')."</a></td>
</tr>\n";
      $JSONout .= "$comma";
	  $Jloc = strip_tags($location);
	  $Jmag = strip_tags($magnitude);
	   $JSONout .= " {\"loc\":\"$Jloc\",\"lat\":\"$latitude\",\"long\":\"$longitude\",\"mag\":\"$Jmag\",\"url\":\"$mapURL\",\"time\":\"$QDateTime\",\"dist\":\"$dText\",\"depth\":\"$depth\"}";
       $comma = ",\n";

	  } /* else {print "<!-- lat='$latitude' long='$longitude' reject distance $distanceK > $maxDistance for $location -->\n"; } */// end maxdistance
	
	 } // end minRichter
		 
		 
  } // end foreach loop

// finish up.  Write trailer info
 
	  if ($doneHeader) {
// --------------- customize HTML if you like -----------------------
	     print "</tbody>\n</table>\n";
?>
		     <script type="text/javascript">
// <![CDATA[
	// only write the map legend if JavaScript is enabled
    var footnote = '<p class="quake" style="text-align: center"><small>'+
	'<?php langtrans("Note: Click on column heading marked with"); ?> &#8593;&#8595; '+
	'<?php langtrans("to sort column contents."); ?>'+
	"</small></p>\n";
    document.write(footnote);
// ]]>
	</script>
<?php
		 print "<p class=\"quake\">$quakesFound ".
		 langtransstr("earthquakes found. Click on location or map links for more details from the <a href=\"$mapMainURL\">USGS</a>")."</p>\n";
	  print "<p class=\"quake\" style=\"text-align: center\"><small>Script by <a href=\"https://saratoga-weather.org/scripts-quake.php#quakePHP\">Saratoga-weather.org</a></small></p>\n";
		 
	  
	  } else {
// --------------- customize HTML if you like -----------------------
     if(strlen($content) > 10) {
  	   print "<p>".langtransstr("No earthquakes of magnitude")." $minRichter ".langtransstr("or greater within")." $dmaxDist ".langtransstr("reported in last 7 days").".</p>\n";
		  } else {
		   print "<h3>".langtransstr('The USGS feed for earthquakes was not available at this time.')."</h3>\n";
		}
 }	 
	  
	$JSONout .= "\n]}\n";

  print "<script type=\"text/javascript\">\n// <![CDATA[\n";
	print $JSONout;
	$useLinkTarget = $doLinkTarget?'1':'0';
	print '// Leaflet/OpenStreetMap+other tile providers MAP production code
var imagesDir = \''.$imagesDir.'\';  // our marker/cluster images locations
var highMag = '.$highRichter.';      // highlight quakes >= this value
var doLinkTarget = '.$useLinkTarget.';    // generate target="_blank" option
';
	// Generate map options
	$mOpts = array();
	$mList = '';  
	$mFirstMap = '';
	$mSelMap = '';
	$swxAttrib = ' | Script by <a href="https://saratoga-weather.org/scripts-quake.php#quakePHP">Saratoga-weather.org</a>';
	$mScheme = $_SERVER['SERVER_PORT']==443?'https':'http';
	foreach ($mapTileProviders as $n => $M ) {
		$name = $M['name'];
		$vname = 'M'.strtolower($name);
		if(empty($mFirstMap)) {$mFirstMap = $vname; }  // default map is first in list
		if(strpos($n,'Mapbox') !== false and 
		   strpos($mapboxAPIkey,'-API-key-') !== false) { 
			 $mList .= "\n".'// skipping Mapbox - '.$name.' since $mapboxAPIkey is not set'."\n\n"; 
			 continue;
		}
		if($mScheme == 'https' and parse_url($M['URL'],PHP_URL_SCHEME) == 'http') {
			$mList .= "\n".'// skipping '.$name.' due to http only map tile link while our page is https'."\n\n";
			continue;
		}
		if($mapProvider == $n) {$mSelMap = $vname;}
		$mList .= 'var '.$vname.' = L.tileLayer(\''.$M['URL'].'\', {
			maxZoom: '.$M['maxzoom'].',
			attribution: \''.$M['attrib'].$swxAttrib.'\'
			});
';
		$mOpts[$name] = $vname;
		
	}
	print "// Map tile providers:\n";
  print $mList;
	print "// end of map tile providers\n\n";
	print "var baseLayers = {\n";
  $mtemp = '';
	foreach ($mOpts as $n => $v) {
		$mtemp .= '  "'.$n.'": '.$v.",\n";
	}
	$mtemp = substr($mtemp,0,strlen($mtemp)-2)."\n";
	print $mtemp;
	print "};	\n";
	if(empty($mSelMap)) {$mSelMap = $mFirstMap;}
	// end Generate map tile options
	print '

var map = L.map(\'map\', {
		center: new L.latLng('.$myLat.','.$myLong.'), 
		zoom: '.$mapZoomDefault.',
		layers: ['.$mSelMap.'],
		scrollWheelZoom: false
		});

var markers = L.markerClusterGroup( { maxClusterRadius: 15 });

var markerImageRed    = new L.icon({ 
		iconUrl: imagesDir+"mma_20_red.png",
		iconSize: [12, 20],
		iconAnchor: [6, 20]
    });
var markerImageBlue   = new L.icon({ 
		iconUrl: imagesDir+"mma_20_blue.png",
		iconSize: [12, 20],
		iconAnchor: [6, 20]
    });
var markerImageGreen  = new L.icon({ 
		iconUrl: imagesDir+"mma_20_green.png",
		iconSize: [12, 20],
		iconAnchor: [6, 20]
    });

var markerImageYellow = new L.icon({ 
		iconUrl: imagesDir+"mma_20_yellow.png",
		iconSize: [12, 20],
		iconAnchor: [6, 20]
    });
	
// Generate the markers from the extracted JSON data

for (var i = 0; i < data.markers.length; i++) {
	var latLng = new L.LatLng(data.markers[i].lat,data.markers[i].long);
	var loc = data.markers[i].loc;
	var mag = data.markers[i].mag;
	var url = data.markers[i].url;
	var qtime = data.markers[i].time;
	var dist = data.markers[i].dist;
	var depth = data.markers[i].depth;
	var label = "<b>M"+mag+"</b>";
	var useMarkerIcon = markerImageYellow;  // default to WX marker
	if (mag >= highMag) { useMarkerIcon = markerImageRed; }
	var title = "M"+mag+" - "+qtime;
	
	var tgt = \'\';
	if(doLinkTarget > 0) {tgt = \' target="_blank"\'; }
	var popupHtml = "<small><a href=\""+url+"\""+tgt+"><strong>M"+mag+"</strong></a> - "+
	qtime+" - '.langtransstr("Depth").': "+depth+"<br/>"+
	loc+" <br/>"+
	"'.langtransstr("Distance to epicenter").': "+dist+
		"<br clear=\"left\"/></small>";
	
	createMarker(map,latLng,useMarkerIcon,title,popupHtml,label);  
	
} // end of loop to create markers

if (data.markers.length > 0 ) {
	title = "'.$ourLocationName.'";
	var marker = new L.marker(new L.LatLng('.$myLat.','.$myLong.'),{
		clickable: true,
		draggable: false,
		icon: markerImageGreen,
		title: title,
	});
	marker.bindPopup(title);
	markers.addLayer(marker);
	
}

function  createMarker (map,latLng, useMarkerIcon, title, popupHtml,label) {

	var marker = new L.marker(latLng,{
	clickable: true,
	draggable: false,
	icon: useMarkerIcon,
	title: title,
	});

	marker.bindPopup(popupHtml);
	marker.bindTooltip(label, 
		{ noHide: true,
			permanent: true,
			direction: "bottom",
			offset: [0,0]
		 }).openTooltip();
	markers.addLayer(marker);
}

map.addLayer(markers);
L.control.scale().addTo(map);
L.control.layers(baseLayers).addTo(map);

// end of map generation script	
// ]]>
';
	print "</script>\n";
?>
<?php
// print footer of page if needed    
// --------------- customize HTML if you like -----------------------
if (! $tablesOnly ) {   
?>

</body>
</html>

<?php
}


// ----------------------------functions ----------------------------------- 
 
// get contents from one URL and return as string 
 function QJ_fetchUrlWithoutHanging($url,$useFopen=false) {
// get contents from one URL and return as string 
  global $Debug, $needCookie;
  $useFopen = false;
  $overall_start = time();
  if (! $useFopen) {
   // Set maximum number of seconds (can have floating-point) to wait for feed before displaying page without feed
   $numberOfSeconds=6;   

// Thanks to Curly from ricksturf.com for the cURL fetch functions

  $data = '';
  $domain = parse_url($url,PHP_URL_HOST);
  $theURL = str_replace('nocache','?'.$overall_start,$url);        // add cache-buster to URL if needed
  $Debug .= "<!-- curl fetching '$theURL' -->\n";
  $ch = curl_init();                                           // initialize a cURL session
  curl_setopt($ch, CURLOPT_URL, $theURL);                         // connect to provided URL
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);                 // don't verify peer certificate
  curl_setopt($ch, CURLOPT_USERAGENT, 
    'Mozilla/5.0 (quake-json.php - saratoga-weather.org)');

  curl_setopt($ch,CURLOPT_HTTPHEADER,                          // request LD-JSON format
     array (
         "Accept: text/html,text/plain"
     ));

  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $numberOfSeconds);  //  connection timeout
  curl_setopt($ch, CURLOPT_TIMEOUT, $numberOfSeconds);         //  data timeout
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);              // return the data transfer
  curl_setopt($ch, CURLOPT_NOBODY, false);                     // set nobody
  curl_setopt($ch, CURLOPT_HEADER, true);                      // include header information
//  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);              // follow Location: redirect
//  curl_setopt($ch, CURLOPT_MAXREDIRS, 1);                      //   but only one time
  if (isset($needCookie[$domain])) {
    curl_setopt($ch, $needCookie[$domain]);                    // set the cookie for this request
    curl_setopt($ch, CURLOPT_COOKIESESSION, true);             // and ignore prior cookies
    $Debug .=  "<!-- cookie used '" . $needCookie[$domain] . "' for GET to $domain -->\n";
  }

  $data = curl_exec($ch);                                      // execute session

  if(curl_error($ch) <> '') {                                  // IF there is an error
   $Debug .= "<!-- curl Error: ". curl_error($ch) ." -->\n";        //  display error notice
  }
  $cinfo = curl_getinfo($ch);                                  // get info on curl exec.
/*
curl info sample
Array
(
[url] => http://saratoga-weather.net/clientraw.txt
[content_type] => text/plain
[http_code] => 200
[header_size] => 266
[request_size] => 141
[filetime] => -1
[ssl_verify_result] => 0
[redirect_count] => 0
  [total_time] => 0.125
  [namelookup_time] => 0.016
  [connect_time] => 0.063
[pretransfer_time] => 0.063
[size_upload] => 0
[size_download] => 758
[speed_download] => 6064
[speed_upload] => 0
[download_content_length] => 758
[upload_content_length] => -1
  [starttransfer_time] => 0.125
[redirect_time] => 0
[redirect_url] =>
[primary_ip] => 74.208.149.102
[certinfo] => Array
(
)

[primary_port] => 80
[local_ip] => 192.168.1.104
[local_port] => 54156
)
*/
  $Debug .= "<!-- HTTP stats: " .
    " RC=".$cinfo['http_code'] .
    " dest=".$cinfo['primary_ip'] ;
	if(isset($cinfo['primary_port'])) { 
	  $Debug .= " port=".$cinfo['primary_port'] ;
	}
	if(isset($cinfo['local_ip'])) {
	  $Debug .= " (from sce=" . $cinfo['local_ip'] . ")";
	}
	$Debug .= 
	"\n      Times:" .
    " dns=".sprintf("%01.3f",round($cinfo['namelookup_time'],3)).
    " conn=".sprintf("%01.3f",round($cinfo['connect_time'],3)).
    " pxfer=".sprintf("%01.3f",round($cinfo['pretransfer_time'],3));
	if($cinfo['total_time'] - $cinfo['pretransfer_time'] > 0.0000) {
	  $Debug .=
	  " get=". sprintf("%01.3f",round($cinfo['total_time'] - $cinfo['pretransfer_time'],3));
	}
    $Debug .= " total=".sprintf("%01.3f",round($cinfo['total_time'],3)) .
    " secs -->\n";

  //$Debug .= "<!-- curl info\n".print_r($cinfo,true)." -->\n";
  curl_close($ch);                                              // close the cURL session
  //$Debug .= "<!-- raw data\n".$data."\n -->\n"; 
  $i = strpos($data,"\r\n\r\n");
  $headers = substr($data,0,$i);
  $content = substr($data,$i+4);
  if($cinfo['http_code'] <> '200') {
    $Debug .= "<!-- headers returned:\n".$headers."\n -->\n"; 
  }
  return $data;                                                 // return headers+contents

 } else {
//   print "<!-- using file_get_contents function -->\n";
   $STRopts = array(
	  'http'=>array(
	  'method'=>"GET",
	  'protocol_version' => 1.1,
	  'header'=>"Cache-Control: no-cache, must-revalidate\r\n" .
				"Cache-control: max-age=0\r\n" .
				"Connection: close\r\n" .
				"User-agent: Mozilla/5.0 (quake-json.php - saratoga-weather.org)\r\n" .
				"Accept: application/ld+json\r\n"
	  ),
	  'https'=>array(
	  'method'=>"GET",
	  'protocol_version' => 1.1,
	  'header'=>"Cache-Control: no-cache, must-revalidate\r\n" .
				"Cache-control: max-age=0\r\n" .
				"Connection: close\r\n" .
				"User-agent: Mozilla/5.0 (quake-json.php - saratoga-weather.org)\r\n" .
				"Accept: application/ld+json\r\n"
	  )
	);
	
   $STRcontext = stream_context_create($STRopts);

   $T_start = QJ_fetch_microtime();
   $xml = file_get_contents($url,false,$STRcontext);
   $T_close = QJ_fetch_microtime();
   $headerarray = get_headers($url,0);
   $theaders = join("\r\n",$headerarray);
   $xml = $theaders . "\r\n\r\n" . $xml;

   $ms_total = sprintf("%01.3f",round($T_close - $T_start,3)); 
   $Debug .= "<!-- file_get_contents() stats: total=$ms_total secs -->\n";
   $Debug .= "<-- get_headers returns\n".$theaders."\n -->\n";
//   print " file() stats: total=$ms_total secs.\n";
   $overall_end = time();
   $overall_elapsed =   $overall_end - $overall_start;
   $Debug .= "<!-- fetch function elapsed= $overall_elapsed secs. -->\n"; 
//   print "fetch function elapsed= $overall_elapsed secs.\n"; 
   return($xml);
 }

}    // end ECF_fetch_URL

// ------------------------------------------------------------------

function QJ_fetch_microtime()
{
   list($usec, $sec) = explode(" ", microtime());
   return ((float)$usec + (float)$sec);
}

//------------------------------------------------------------------------------------------
  
// ------------ distance calculation function ---------------------
   
    //**************************************
    //     
    // Name: Calculate Distance and Radius u
    //     sing Latitude and Longitude in PHP
    // Description:This function calculates 
    //     the distance between two locations by us
    //     ing latitude and longitude from ZIP code
    //     , postal code or postcode. The result is
    //     available in miles, kilometers or nautic
    //     al miles based on great circle distance 
    //     calculation. 
    // By: ZipCodeWorld
    //
    //This code is copyrighted and has
	// limited warranties.Please see http://
    //     www.Planet-Source-Code.com/vb/scripts/Sh
    //     owCode.asp?txtCodeId=1848&lngWId=8    //for details.    //**************************************
    //     
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*:: :*/
    /*:: This routine calculates the distance between two points (given the :*/
    /*:: latitude/longitude of those points). It is being used to calculate :*/
    /*:: the distance between two ZIP Codes or Postal Codes using our:*/
    /*:: ZIPCodeWorld(TM) and PostalCodeWorld(TM) products. :*/
    /*:: :*/
    /*:: Definitions::*/
    /*::South latitudes are negative, east longitudes are positive:*/
    /*:: :*/
    /*:: Passed to function::*/
    /*::lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees) :*/
    /*::lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees) :*/
    /*::unit = the unit you desire for results:*/
    /*::where: 'M' is statute miles:*/
    /*:: 'K' is kilometers (default):*/
    /*:: 'N' is nautical miles :*/
    /*:: United States ZIP Code/ Canadian Postal Code databases with latitude & :*/
    /*:: longitude are available at http://www.zipcodeworld.com :*/
    /*:: :*/
    /*:: For enquiries, please contact sales@zipcodeworld.com:*/
    /*:: :*/
    /*:: Official Web site: http://www.zipcodeworld.com :*/
    /*:: :*/
    /*:: Hexa Software Development Center © All Rights Reserved 2004:*/
    /*:: :*/
    /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    function distance($lat1, $lon1, $lat2, $lon2, $unit) { 
    $theta = $lon1 - $lon2; 
    $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta)); 
    $dist = acos($dist); 
    $dist = rad2deg($dist); 
    $miles = $dist * 60 * 1.1515;
    $unit = strtoupper($unit);
    if ($unit == "K") {
    return ($miles * 1.609344); 
    } else if ($unit == "N") {
    return ($miles * 0.8684);
    } else {
    return $miles;
    }
  }
  
// ------------------------------------------------------------------
//  testing function to safely set location/distance/zone using testloc= parm 
function setTestLoc ( $LOC )
{
  global $myLat,$myLong,$ourTZ,$maxDistance;
  
  if ($LOC == 'NZ') {
    $myLat = -37.07;   
    $myLong = 174.35; 
    $ourTZ = "Pacific/Auckland";  
	$maxDistance = 1000;
// Yes, the above settings are for Brian Hamilton's Grahams Beach, NZ station
// in honor of his outstanding work as author of Weather-Display software
  } elseif ($LOC == 'JP') {
    $myLat = 35.8499;   
    $myLong = 139.97; 
    $ourTZ = "Asia/Tokyo";  
	$maxDistance = 1000;
  } elseif ($LOC == 'MX') {
     $myLat = 19.3999;   
    $myLong = -99.1999; 
    $ourTZ = "America/Mexico_City";  
	$maxDistance = 1000;
  } elseif ($LOC == 'PR') {
    $myLat = 18.467248;   
    $myLong = -66.108963; 
    $ourTZ = "America/Puerto_Rico";  
	$maxDistance = 2000;
  } elseif ($LOC == 'AK') {
     $myLat = 61.21574783;   
    $myLong = -149.86894226; 
    $ourTZ = "America/Anchorage";  
	$maxDistance = 2000;
  } elseif ($LOC == 'IR') {
     $myLat = 35.68;   
    $myLong = 51.3499; 
    $ourTZ = "Asia/Tehran";  
	$maxDistance = 1000;
  } elseif ($LOC == 'GR') {
     $myLat = 37.983056;   
    $myLong = 23.733056; 
    $ourTZ = "Europe/Athens";  
	$maxDistance = 1000;
  } elseif ($LOC == 'SU') {
     $myLat = 3.0;   
    $myLong = 100.0; 
    $ourTZ = "Asia/Jakarta";  
	$maxDistance = 1000;
  }

} 
// ------------------------------------------------------------------

function QJ_ISO_Lang ( $inLang) {
  global $SITE;
  if(isset($SITE['ISOLang'])) { 
    $ISOlang = $SITE['ISOLang']; 
  } else {
    $ISOlang =  array ( // ISO 639-1 2-character language abbreviations from country domain 
	'af' => 'af',
	'bg' => 'bg',
	'ct' => 'ca',
	'dk' => 'da',
	'nl' => 'nl',
	'en' => 'en',
	'fi' => 'fi',
	'fr' => 'fr',
	'de' => 'de',
	'el' => 'el',
	'ga' => 'ga',
	'it' => 'it',
	'he' => 'he',
	'hu' => 'hu',
	'no' => 'no',
	'pl' => 'pl',
	'pt' => 'pt',
	'ro' => 'ro',
	'es' => 'es',
	'se' => 'sv',
	'si' => 'sl',
  );
	  
  }

  if(isset($ISOlang[$inLang])) {
	  return($ISOlang[$inLang]);
  } else {
	  return('en');
  }
}
  
// --------------end of functions ---------------------------------------

?>