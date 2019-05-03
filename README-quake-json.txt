Readme file for quake-json.php
Version 1.00 - 08-Sep-2012 - initial release
Version 1.01 - 03-Jul-2016 - updates for mandatory Google Browser JavaScript Map API key
Version 2.00 - 10-May-2018 - rewrite to use Leaflet/OpenStreetMaps+other tile providers

With Version 2.00, you no longer need an API key for multiple map tile providers to use the script.

If you wish to use the OPTIONAL Mapbox.com tiles (terrain3, Satellite maps), you will need a Mapbox.com API key
which can be acquired (for free with 50K accesses usage/month) at:

https://www.mapbox.com/signup/?

in the quakes.php script you can put

$setMapboxAPIkey = '-replace-this-with-your-API-key-here-'; 

 Note: if using the Saratoga template set, put a new entry in Settings.php

$SITE['mapboxAPIkey'] = '-replace-this-with-your-API-key-here-';

Note: a Mapbox API key is OPTIONAL .. you do not need it to use maps from 5 included free map tile providers.

The quake-json package will read the GeoJSON file from the US Geological Survey for earthquakes worldwide over the last 7 days.
For the USA, magnitude 1.0+ quake information is available.
Outside the USA, only quake information of magnitude 4.0+ are available.

Package contents:
./ajax-images/*.png   contains markers for use with the quake-json.php script
quake-json.php        main script
quake-json.js         support JavaScript (contains markerclusterer and sorttable scripts)
quakes.php            sample script for calling the quake-json.php script with arguments
wxquake.php           sample AJAX/PHP template page using quake-json.php script for data
README-quake-json.txt  this file.
quakesjson.txt        sample cache file of page returned from USGS GeoGSON query

If at all possible, consider NOT modifying the quake-json.php script when doing customizations .. it
will make it easier on you to just replace the quake-json.php script when updates are available.


For AJAX/PHP template users, the following entries should be added to the language-LL.txt
translation file (LL= language translation id)

Note: the |of| entry below is used in the reports for quake location as in:
  20 mi NNW of Saratoga, California

The cardinal wind direction will be automatically translated ot other languages.



langlookup|Update time|Update time|
langlookup|of|of|
langlookup|No earthquakes of magnitude|No earthquakes of magnitude|
langlookup|or greater within|or greater within|
langlookup|reported in last 7 days|reported in last 7 days|
langlookup|Cluster - click to expand details|Cluster - click to expand details|
langlookup|Enable JavaScript to view the Google Map.|Enable JavaScript to view the Google Map.|
langlookup|Earthquakes in the past 7 days of magnitude|Earthquakes in the past 7 days of magnitude|
langlookup|or greater within|or greater within|
langlookup|Epicenter Near|Epicenter Near|
langlookup|Magnitude|Magnitude|
langlookup|Distance to Epicenter|Distance to Epicenter|
langlookup|Local Time|Local Time|
langlookup|Link|Link|
langlookup|map|map|
langlookup|Note: Click on column heading marked with|Note: Click on column heading marked with|
langlookup|to sort column contents.|to sort column contents.|
langlookup|earthquakes found. Click on location or map links for more details from the <a href="http://earthquake.usgs.gov/earthquakes/map/">USGS</a>|earthquakes found. Click on location or map links for more details from the <a href="http://earthquake.usgs.gov/earthquakes/map/">USGS</a>|
langlookup|Depth|Depth|
langlookup|Distance to epicenter|Distance to epicenter|
langlookup|Map and data courtesy of|Map and data courtesy of|
langlookup|United States Geological Survey|United States Geological Survey|

Ken True
http://saratoga-weather.org/
