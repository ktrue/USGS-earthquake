<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Sample Page for quake-json.php</title>
<style type="text/css">
body {
  margin: 0 auto;
  padding: 10px 20px 20px;
  width: 640px;
  font-family: Arial;
  font-size: 12pt;
  background-color: white;
  color: black;
  text-align: left;
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
  text-align: left;
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

<body>
 <div style="text-align: center">
  <h1 style="text-align: center">Nearby Earthquakes</h1>
  <?php
# settings -------------------------- 
  $doIncludeQuake = true;
# uncomment ONE of the $setDistanceDisplay lines to use as template for distance displays  
#  $setDistanceDisplay = 'mi (km)';
  $setDistanceDisplay = 'mi';
#  $setDistanceDisplay = 'km (mi)';
#  $setDistanceDisplay = 'km';

  $setDistanceRadius  = 1000;  // same units as first unit in $setDistanceDisplay
# NOTE: quakes of magnitude 1.0+ are available for USA locations only.
#    non-USA location earthquakes of magnitude 4.0+ are the only ones available from the USGS
  $setMinMagnitude = '2.0';  // minimum Richter Magnitude to display
  $setHighMagnitude = '4.0';  // highlight this Magnitude and greater
  
# script will use your $SITE[] values for latitude, longitude, cityname, timezone and time display format
# but you can override them if you with with the commented statements below:
  $setLatitude  = 37.2746251;    //North=positive, South=negative decimal degrees
  $setLongitude = -122.0229656;   //East=positive, West=negative decimal degrees
# The above settings are for saratoga-weather.org location
#  $setLocationName = 'Saratoga, CA'; // city/town name for lat/long above 
#
  $setTimeZone = "America/Los_Angeles";  //NOTE: this *MUST* be set correctly to
# translate UTC times to your LOCAL time for the displays.
# Use http://www.php.net/manual/en/timezones.php to find the timezone suitable for
#  your location.

#  pick a format for the time to display ..uncomment one (or make your own)
 $setTimeFormat = 'D, Y-m-d H:i:s T';  // Fri, 2006-03-31 14:03:22 TZone
#  $setTimeFormat = 'D, d-M-Y H:i:s T';  // Fri, 31-Mar-2006 14:03:22 TZone

  $setDoLinkTarget = false;   // =true; to have links open in new page, =false; for XHTML 1.0-Strict

	$setMapProvider = 'Esri_WorldTopoMap'; // ESRI topo map - no key needed
# $setMapProvider = 'OSM';     // OpenStreetMap - no key needed
# $setMapProvider = 'Terrain'; // Terrain map by stamen.com - no key needed
# $setMapProvider = 'OpenTopo'; // OpenTopoMap.com - no key needed
# $setMapProvider = 'Wikimedia'; // Wikimedia map - no key needed
# $setMapProvider = 'NatGeo';  // National Geographic world map -no key needed  
# $setMapProvider = 'Delorme';  // Garmin world map -no key needed  
# $mapProvider = 'MapboxSat';  // Map by Mapbox.com - API KEY needed in $setMapboxAPIkey 
# $mapProvider = 'MapboxTer';  // Map by Mapbox.com - API KEY needed in $setMapboxAPIkey 
 $setMapboxAPIkey = '--mapbox-API-key--';  // use this for the API key to MapBox
 
# for fault displays
 $setFaultDisplay = 'USGS'; // ='' for none, see below for more choices
# Note: not all fault displays have entries for all countries. You'll need to choose the one that
#   displays the information for your geography.
#
# 'PH' covers the Phillipines only
# 'USGS' covers the lower-48 CONUS states only but with fault types/names/ages
# 'USGS2' covers all 50 US states, but with only small/medium/large fault types (no descriptions)
# 'USGS3' covers the mostly western CONUS lower-48 states only  with fault names and types only
# 'GEM' covers much of the world (omitting Canada, Scandanavia and UK/Ireland)
# 'WORLD' covers most of the world with 4 fault types (  rift, step, tectonic contact, thrust-fault)
# 'BGS' convers the UK (England, Wales, Scotland, Northern Ireland) 
#

 $setPlateDisplay = true;  // =true; show tectonic plates ; =false; suppress tectonic plate display
 
  include_once("quake-json.php");
  ?>
  <p class="quakes" style="text-align: center">Map and data courtesy of 
  <a href="https://earthquake.usgs.gov/earthquakes/map/">United States Geological Survey</a>.</p>
 </div>
</body>
</html>