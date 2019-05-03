<?php
############################################################################
# A Project of TNET Services, Inc. and Saratoga-Weather.org (World-ML template set)
############################################################################
#
#   Project:    Sample Included Website Design
#   Module:     sample.php
#   Purpose:    Sample Page
#   Authors:    Kevin W. Reed <kreed@tnet.com>
#               TNET Services, Inc.
#
# 	Copyright:	(c) 1992-2007 Copyright TNET Services, Inc.
############################################################################
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA
############################################################################
#	This document uses Tab 4 Settings
############################################################################
// Version 1.01 - 08-Sep-2012 - initial release with quake-json.php script
// Version 1.02 - 12-Sep-2012 - added translation for Google Map controls
// Version 1.03 - 23-May-2013 - removed USGS maps (no longer available), added 'home' pin
// Version 1.04 - 24-May-2013 - fixed HTML error in attribution
// Version 1.05 - 03-Jul-2016 - added Google Browser JavaScript MAP API support
// Version 2.00 - 10-May-2018 - replaced Google map with Leaflet/OpenStreetMap+other tile providers
require_once("Settings.php");
require_once("common.php");
############################################################################
$TITLE= langtransstr($SITE['organ']) . " - " . langtransstr("Earthquakes");
$showGizmo = true;  // set to false to exclude the gizmo
include("top.php");
############################################################################
?>
<style type="text/css">
.quake {
  width: 620px;
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

</style>
<?php
$lang = $SITE['lang'];
if(isset($SITE['ISOLang'][$lang])) { $lang = $SITE['ISOLang'][$lang]; }
?>
  <link rel="stylesheet" href="quake-json.css"/>
  <script type="text/javascript" src="quake-json.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<?php
############################################################################
include("header.php");
############################################################################
include("menubar.php");
############################################################################
?>

<div id="main-copy">
  
  <?php 
  $doIncludeQuake = true;
# uncomment ONE of the $setDistanceDisplay lines to use as template for distance displays  
#  $setDistanceDisplay = 'mi (km)';
  $setDistanceDisplay = 'mi';
#  $setDistanceDisplay = 'km (mi)';
#  $setDistanceDisplay = 'km';

  $setDistanceRadius  = 200;  // same units as first unit in $setDistanceDisplay
# NOTE: quakes of magnitude 1.0+ are available for USA locations only.
#    non-USA location earthquakes of magnitude 4.0+ are the only ones available from the USGS
  $setMinMagnitude = '2.0';  // minimum Richter Magnitude to display
  $setHighMagnitude = '4.0';  // highlight this Magnitude and greater
  
  $setMapZoomDefault = 7;    // default zoom for Google Map 1=world to 13=street

# script will use your $SITE[] values for latitude, longitude, cityname, timezone and time display format
# but you can override them if you with with the commented statements below:
#  $setLatitude  = 37.2746251;    //North=positive, South=negative decimal degrees
#  $setLongitude = -122.0229656;   //East=positive, West=negative decimal degrees
# The above settings are for saratoga-weather.org location
#  $setLocationName = 'Saratoga, CA'; // city/town name for lat/long above 
#
#  $setTimeZone = "America/Los_Angeles";  //NOTE: this *MUST* be set correctly to
# translate UTC times to your LOCAL time for the displays.
# Use http://www.php.net/manual/en/timezones.php to find the timezone suitable for
#  your location.

#  pick a format for the time to display ..uncomment one (or make your own)
# $setTimeFormat = 'D, Y-m-d H:i:s T';  // Fri, 2006-03-31 14:03:22 TZone
#  $setTimeFormat = 'D, d-M-Y H:i:s T';  // Fri, 31-Mar-2006 14:03:22 TZone


  $setDoLinkTarget = 1;   // =1 to have links open in new page, =0 for XHTML 1.0-Strict
  

  include_once("quake-json.php");
  ?>
  <p class="quake" style="text-align: center"><?php langtrans('Map and data courtesy of');?> 
  <a href="https://earthquake.usgs.gov/earthquakes/map/"><?php langtrans('United States Geological Survey');?></a>.</p>

</div><!-- end main-copy -->

<?php
############################################################################
include("footer.php");
############################################################################
# End of Page
############################################################################
?>