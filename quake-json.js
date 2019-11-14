/*
 quake-json-ph.js
 
 Includes Leaflet V1.5.1, markercluster V1.4.1, esri-leaflet-debug V2.3.1 
 esri-leaflet-renderers v2.0.6, esri-leaflet-legend-compat-src
 and sorttable V2, 
 
 Version 1.00 - 29-Oct-2019 - initial release

*/
/* @preserve
 * Leaflet 1.5.1+build.2e3e0ff, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";var i=Object.freeze;function h(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++)for(i in o=arguments[e])t[i]=o[i];return t}Object.freeze=function(t){return t};var s=Object.create||function(t){return e.prototype=t,new e};function e(){}function a(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}var n=0;function u(t){return t._leaflet_id=t._leaflet_id||++n,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function r(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function l(){return!1}function c(t,i){return i=void 0===i?6:i,+(Math.round(t+"e+"+i)+"e-"+i)}function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function d(t){return _(t).split(/\s+/)}function p(t,i){for(var e in t.hasOwnProperty("options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}function m(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var f=/\{ *([\w_-]+) *\}/g;function g(t,n){return t.replace(f,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function y(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}var x="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var P=0;function b(t){var i=+new Date,e=Math.max(0,16-(i-P));return P=i+e,window.setTimeout(t,e)}var T=window.requestAnimationFrame||w("RequestAnimationFrame")||b,z=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,i,e){if(!e||T!==b)return T.call(window,a(t,i));t.call(i)}function C(t){t&&z.call(window,t)}var S=(Object.freeze||Object)({freeze:i,extend:h,create:s,bind:a,lastId:n,stamp:u,throttle:o,wrapNum:r,falseFn:l,formatNum:c,trim:_,splitWords:d,setOptions:p,getParamString:m,template:g,isArray:v,indexOf:y,emptyImageUrl:x,requestFn:T,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:C});function Z(){}Z.extend=function(t){function i(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var e=i.__super__=this.prototype,n=s(e);for(var o in(n.constructor=i).prototype=n,this)this.hasOwnProperty(o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);return t.statics&&(h(i,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=v(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=h(s(n.options),t.options)),h(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},Z.include=function(t){return h(this.prototype,t),this},Z.mergeOptions=function(t){return h(this.prototype.options,t),this},Z.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var E={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)return r.fn=l,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=l;delete this._events[t]}},fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&this._propagateEvent(n),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=a(function(){this.off(t,i,e).off(t,o,e)},this);return this.on(t,i,e).on(t,o,e)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};E.addEventListener=E.on,E.removeEventListener=E.clearAllEventListeners=E.off,E.addOneTimeEventListener=E.once,E.fireEvent=E.fire,E.hasEventListeners=E.listens;var k=Z.extend(E);function B(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}var A=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function I(t,i,e){return t instanceof B?t:v(t)?new B(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,i,e)}function O(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function R(t,i){return!t||t instanceof O?t:new O(t,i)}function N(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function D(t,i){return t instanceof N?t:new N(t,i)}function j(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function W(t,i,e){return t instanceof j?t:v(t)&&"object"!=typeof t[0]?3===t.length?new j(t[0],t[1],t[2]):2===t.length?new j(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new j(t,i,e)}B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},distanceTo:function(t){var i=(t=I(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},O.prototype={extend:function(t){return t=I(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new B(this.min.x,this.max.y)},getTopRight:function(){return new B(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof B?I(t):R(t))instanceof O?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},N.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof j)e=i=t;else{if(!(t instanceof N))return t?this.extend(W(t)||D(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new j(i.lat,i.lng),this._northEast=new j(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new N(new j(i.lat-n,i.lng-o),new j(e.lat+n,e.lng+o))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof j||"lat"in t?W(t):D(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof N?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=D(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}};var H,F={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new O(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!(j.prototype={equals:function(t,i){return!!t&&(t=W(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return U.distance(this,W(t))},wrap:function(){return U.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return D([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new j(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var i=this.wrapLng?r(t.lng,this.wrapLng,!0):t.lng;return new j(this.wrapLat?r(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new N(new j(s.lat-n,s.lng-o),new j(r.lat-n,r.lng-o))}},U=h({},F,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),V=6378137,q={R:V,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new B(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(H=V*Math.PI,new O([-H,-H],[H,H]))};function G(t,i,e,n){if(v(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function K(t,i,e,n){return new G(t,i,e,n)}G.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new B((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var Y,X=h({},U,{code:"EPSG:3857",projection:q,transformation:(Y=.5/(Math.PI*q.R),K(Y,.5,-Y,.5))}),J=h({},X,{code:"EPSG:900913"});function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)h+=(n?"L":"M")+(a=r[n]).x+" "+a.y;h+=i?Zt?"z":"x":""}return h||"M0 0"}var tt=document.documentElement.style,it="ActiveXObject"in window,et=it&&!document.addEventListener,nt="msLaunchUri"in navigator&&!("documentMode"in document),ot=kt("webkit"),st=kt("android"),rt=kt("android 2")||kt("android 3"),at=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ht=st&&kt("Google")&&at<537&&!("AudioNode"in window),ut=!!window.opera,lt=kt("chrome"),ct=kt("gecko")&&!ot&&!ut&&!it,_t=!lt&&kt("safari"),dt=kt("phantom"),pt="OTransition"in tt,mt=0===navigator.platform.indexOf("Win"),ft=it&&"transition"in tt,gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,vt="MozPerspective"in tt,yt=!window.L_DISABLE_3D&&(ft||gt||vt)&&!pt&&!dt,xt="undefined"!=typeof orientation||kt("mobile"),wt=xt&&ot,Pt=xt&&gt,bt=!window.PointerEvent&&window.MSPointerEvent,Lt=!(!window.PointerEvent&&!bt),Tt=!window.L_NO_TOUCH&&(Lt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),zt=xt&&ut,Mt=xt&&ct,Ct=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),St=!!document.createElement("canvas").getContext,Zt=!(!document.createElementNS||!$("svg").createSVGRect),Et=!Zt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();function kt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var Bt=(Object.freeze||Object)({ie:it,ielt9:et,edge:nt,webkit:ot,android:st,android23:rt,androidStock:ht,opera:ut,chrome:lt,gecko:ct,safari:_t,phantom:dt,opera12:pt,win:mt,ie3d:ft,webkit3d:gt,gecko3d:vt,any3d:yt,mobile:xt,mobileWebkit:wt,mobileWebkit3d:Pt,msPointer:bt,pointer:Lt,touch:Tt,mobileOpera:zt,mobileGecko:Mt,retina:Ct,canvas:St,svg:Zt,vml:Et}),At=bt?"MSPointerDown":"pointerdown",It=bt?"MSPointerMove":"pointermove",Ot=bt?"MSPointerUp":"pointerup",Rt=bt?"MSPointerCancel":"pointercancel",Nt=["INPUT","SELECT","OPTION"],Dt={},jt=!1,Wt=0;function Ht(t,i,e,n){return"touchstart"===i?function(t,i,e){var n=a(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(Nt.indexOf(t.target.tagName)<0))return;Di(t)}qt(t,i)});t["_leaflet_touchstart"+e]=n,t.addEventListener(At,n,!1),jt||(document.documentElement.addEventListener(At,Ft,!0),document.documentElement.addEventListener(It,Ut,!0),document.documentElement.addEventListener(Ot,Vt,!0),document.documentElement.addEventListener(Rt,Vt,!0),jt=!0)}(t,e,n):"touchmove"===i?function(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&qt(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(It,n,!1)}(t,e,n):"touchend"===i&&function(t,i,e){var n=function(t){qt(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(Ot,n,!1),t.addEventListener(Rt,n,!1)}(t,e,n),this}function Ft(t){Dt[t.pointerId]=t,Wt++}function Ut(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function Vt(t){delete Dt[t.pointerId],Wt--}function qt(t,i){for(var e in t.touches=[],Dt)t.touches.push(Dt[e]);t.changedTouches=[t],i(t)}var Gt=bt?"MSPointerDown":Lt?"pointerdown":"touchstart",Kt=bt?"MSPointerUp":Lt?"pointerup":"touchend",Yt="_leaflet_";function Xt(t,o,i){var s,r,a=!1;function e(t){var i;if(Lt){if(!nt||"mouse"===t.pointerType)return;i=Wt}else i=t.touches.length;if(!(1<i)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=0<n&&n<=250,s=e}}function n(t){if(a&&!r.cancelBubble){if(Lt){if(!nt||"mouse"===t.pointerType)return;var i,e,n={};for(e in r)i=r[e],n[e]=i&&i.bind?i.bind(r):i;r=n}r.type="dblclick",r.button=0,o(r),s=null}}return t[Yt+Gt+i]=e,t[Yt+Kt+i]=n,t[Yt+"dblclick"+i]=o,t.addEventListener(Gt,e,!1),t.addEventListener(Kt,n,!1),t.addEventListener("dblclick",o,!1),this}function Jt(t,i){var e=t[Yt+Gt+i],n=t[Yt+Kt+i],o=t[Yt+"dblclick"+i];return t.removeEventListener(Gt,e,!1),t.removeEventListener(Kt,n,!1),nt||t.removeEventListener("dblclick",o,!1),this}var $t,Qt,ti,ii,ei,ni=yi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oi=yi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),si="webkitTransition"===oi||"OTransition"===oi?oi+"End":"transitionend";function ri(t){return"string"==typeof t?document.getElementById(t):t}function ai(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function hi(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ui(t){var i=t.parentNode;i&&i.removeChild(t)}function li(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ci(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function _i(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function di(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=gi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function pi(t,i){if(void 0!==t.classList)for(var e=d(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!di(t,i)){var s=gi(t);fi(t,(s?s+" ":"")+i)}}function mi(t,i){void 0!==t.classList?t.classList.remove(i):fi(t,_((" "+gi(t)+" ").replace(" "+i+" "," ")))}function fi(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function gi(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function vi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}(t,i)}function yi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function xi(t,i,e){var n=i||new B(0,0);t.style[ni]=(ft?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function wi(t,i){t._leaflet_pos=i,yt?xi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Pi(t){return t._leaflet_pos||new B(0,0)}if("onselectstart"in document)$t=function(){Ei(window,"selectstart",Di)},Qt=function(){Bi(window,"selectstart",Di)};else{var bi=yi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);$t=function(){if(bi){var t=document.documentElement.style;ti=t[bi],t[bi]="none"}},Qt=function(){bi&&(document.documentElement.style[bi]=ti,ti=void 0)}}function Li(){Ei(window,"dragstart",Di)}function Ti(){Bi(window,"dragstart",Di)}function zi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Mi(),ei=(ii=t).style.outline,t.style.outline="none",Ei(window,"keydown",Mi))}function Mi(){ii&&(ii.style.outline=ei,ei=ii=void 0,Bi(window,"keydown",Mi))}function Ci(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Si(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Zi=(Object.freeze||Object)({TRANSFORM:ni,TRANSITION:oi,TRANSITION_END:si,get:ri,getStyle:ai,create:hi,remove:ui,empty:li,toFront:ci,toBack:_i,hasClass:di,addClass:pi,removeClass:mi,setClass:fi,getClass:gi,setOpacity:vi,testProp:yi,setTransform:xi,setPosition:wi,getPosition:Pi,disableTextSelection:$t,enableTextSelection:Qt,disableImageDrag:Li,enableImageDrag:Ti,preventOutline:zi,restoreOutline:Mi,getSizedParentNode:Ci,getScale:Si});function Ei(t,i,e,n){if("object"==typeof i)for(var o in i)Ai(t,o,i[o],e);else for(var s=0,r=(i=d(i)).length;s<r;s++)Ai(t,i[s],e,n);return this}var ki="_leaflet_events";function Bi(t,i,e,n){if("object"==typeof i)for(var o in i)Ii(t,o,i[o],e);else if(i)for(var s=0,r=(i=d(i)).length;s<r;s++)Ii(t,i[s],e,n);else{for(var a in t[ki])Ii(t,a,t[ki][a]);delete t[ki]}return this}function Ai(i,t,e,n){var o=t+u(e)+(n?"_"+u(n):"");if(i[ki]&&i[ki][o])return this;var s=function(t){return e.call(n||i,t||window.event)},r=s;Lt&&0===t.indexOf("touch")?Ht(i,t,s,o):!Tt||"dblclick"!==t||Lt&&lt?"addEventListener"in i?"mousewheel"===t?i.addEventListener("onwheel"in i?"wheel":"mousewheel",s,!1):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,Ki(i,t)&&r(t)},i.addEventListener("mouseenter"===t?"mouseover":"mouseout",s,!1)):("click"===t&&st&&(s=function(t){!function(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=Ui&&e-Ui;if(n&&100<n&&n<500||t.target._simulatedClick&&!t._simulated)return ji(t);Ui=e,i(t)}(t,r)}),i.addEventListener(t,s,!1)):"attachEvent"in i&&i.attachEvent("on"+t,s):Xt(i,s,o),i[ki]=i[ki]||{},i[ki][o]=s}function Ii(t,i,e,n){var o=i+u(e)+(n?"_"+u(n):""),s=t[ki]&&t[ki][o];if(!s)return this;Lt&&0===i.indexOf("touch")?function(t,i,e){var n=t["_leaflet_"+i+e];"touchstart"===i?t.removeEventListener(At,n,!1):"touchmove"===i?t.removeEventListener(It,n,!1):"touchend"===i&&(t.removeEventListener(Ot,n,!1),t.removeEventListener(Rt,n,!1))}(t,i,o):!Tt||"dblclick"!==i||Lt&&lt?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",s,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,s,!1):"detachEvent"in t&&t.detachEvent("on"+i,s):Jt(t,o),t[ki][o]=null}function Oi(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Gi(t),this}function Ri(t){return Ai(t,"mousewheel",Oi),this}function Ni(t){return Ei(t,"mousedown touchstart dblclick",Oi),Ai(t,"click",qi),this}function Di(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ji(t){return Di(t),Oi(t),this}function Wi(t,i){if(!i)return new B(t.clientX,t.clientY);var e=Si(i),n=e.boundingClientRect;return new B((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}var Hi=mt&&lt?2*window.devicePixelRatio:ct?window.devicePixelRatio:1;function Fi(t){return nt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Hi:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Ui,Vi={};function qi(t){Vi[t.type]=!0}function Gi(t){var i=Vi[t.type];return Vi[t.type]=!1,i}function Ki(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var Yi=(Object.freeze||Object)({on:Ei,off:Bi,stopPropagation:Oi,disableScrollPropagation:Ri,disableClickPropagation:Ni,preventDefault:Di,stop:ji,getMousePosition:Wi,getWheelDelta:Fi,fakeStop:qi,skipped:Gi,isExternalTarget:Ki,addListener:Ei,removeListener:Bi}),Xi=k.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pi(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),wi(this._el,e),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Ji=k.extend({options:{crs:X,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=p(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oi&&yt&&!zt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ei(this._proxy,si,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(W(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,i),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof B?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():D(t);var e=I(i.paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=D(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(i=i||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Xi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){pi(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!yt)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),i=this.getSize(),a=this._zoom;n=W(n),o=void 0===o?a:o;var h=Math.max(i.x,i.y),u=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,c=1.42,_=c*c;function e(t){var i=(u*u-h*h+(t?-1:1)*_*_*l*l)/(2*(t?u:h)*_*l),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return h*(p(m)*function(t){return d(t)/p(t)}(m+c*t)-d(m))/_}var g=Date.now(),v=(e(1)-m)/c,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i=(Date.now()-g)/y,e=function(t){return 1-Math.pow(1-t,1.5)}(i)*v;i<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e)/l)),a),this.getScaleZoom(h/function(t){return h*(p(m)/p(m+c*t))}(e),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=D(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,D(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e=I((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=R([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=I(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,0<l.x?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,0<l.y?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=a(this._handleGeolocationResponse,this),e=a(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new j(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ui(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)ui(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=hi("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new N(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=D(t),e=I(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=R(this.project(a,n),this.project(r,n)).getSize(),l=yt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new O(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(W(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(I(t),i)},layerPointToLatLng:function(t){var i=I(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(W(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(D(t))},distance:function(t,i){return this.options.crs.distance(W(t),W(i))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return Wi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=ri(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");Ei(i,"scroll",this._onScroll,this),this._containerId=u(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&yt,pi(t,"leaflet-container"+(Tt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(et?" leaflet-oldie":"")+(_t?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=ai(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),wi(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(pi(t.markerPane,"leaflet-zoom-hide"),pi(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){wi(this._mapPane,new B(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){wi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var i=t?Bi:Ei;i((this._targets[u(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),yt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[u(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){r=!0;break}if(e&&e.listens(i,!0)){if(o&&!Ki(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!Ki(s,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Gi(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||zi(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){if("click"===t.type){var n=h({},t);n.type="preclick",this._fireDOMEvent(n,n.type,e)}if(!t._stopped&&(e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&Di(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var r=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=r?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=r?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var a=0;a<e.length;a++)if(e[a].fire(i,s,!0),s.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==y(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Pi(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return R([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new O(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new O(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=R(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new B(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=yt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){mi(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=hi("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ni,e=this._proxy.style[i];xi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();xi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ui(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,pi(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&mi(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M(function(){this._moveEnd(!0)},this))}});function $i(t){return new Qi(t)}var Qi=Z.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return pi(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(ui(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});Ji.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=hi("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=hi("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ui(this._controlCorners[t]);ui(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var te=Qi.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in p(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Qi.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(u(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){pi(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(pi(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):mi(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return mi(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=hi("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Ni(i),Ri(i);var n=this._section=hi("section",t+"-list");e&&(this._map.on("click",this.collapse,this),st||Ei(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=hi("a",t+"-toggle",i);o.href="#",o.title="Layers",Tt?(Ei(o,"click",ji),Ei(o,"click",this.expand,this)):Ei(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=hi("div",t+"-base",n),this._separator=hi("div",t+"-separator",n),this._overlaysList=hi("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&u(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(a(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;li(this._baseLayersList),li(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&1<o,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(u(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+u(this),n),this._layerControlInputs.push(i),i.layerId=u(t.layer),Ei(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ie=Qi.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=hi("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=hi("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),Ni(s),Ei(s,"click",ji),Ei(s,"click",o,this),Ei(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";mi(this._zoomInButton,i),mi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||pi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||pi(this._zoomInButton,i)}});Ji.mergeOptions({zoomControl:!0}),Ji.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ie,this.addControl(this.zoomControl))});var ee=Qi.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=hi("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=hi("div",i,e)),t.imperial&&(this._iScale=hi("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),ne=Qi.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var i in(t.attributionControl=this)._container=hi("div","leaflet-control-attribution"),Ni(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});Ji.mergeOptions({attributionControl:!0}),Ji.addInitHook(function(){this.options.attributionControl&&(new ne).addTo(this)});Qi.Layers=te,Qi.Zoom=ie,Qi.Scale=ee,Qi.Attribution=ne,$i.layers=function(t,i,e){return new te(t,i,e)},$i.zoom=function(t){return new ie(t)},$i.scale=function(t){return new ee(t)},$i.attribution=function(t){return new ne(t)};var oe=Z.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});oe.addTo=function(t,i){return t.addHandler(i,this),this};var se,re={Events:E},ae=Tt?"touchstart mousedown":"mousedown",he={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},ue={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},le=k.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){p(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(Ei(this._dragStartTarget,ae,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(le._dragging===this&&this.finishDrag(),Bi(this._dragStartTarget,ae,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!di(this._element,"leaflet-zoom-anim")&&!(le._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((le._dragging=this)._preventOutline&&zi(this._element),Li(),$t(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=Ci(this._element);this._startPoint=new B(i.clientX,i.clientY),this._parentScale=Si(e),Ei(document,ue[t.type],this._onMove,this),Ei(document,he[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&1<t.touches.length)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new B(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Di(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Pi(this._element).subtract(e),pi(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),pi(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,C(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),wi(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in mi(document.body,"leaflet-dragging"),this._lastTarget&&(mi(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ue)Bi(document,ue[t],this._onMove,this),Bi(document,he[t],this._onUp,this);Ti(),Qt(),this._moved&&this._moving&&(C(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,le._dragging=!1}});function ce(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=fe(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)r=t[n],a=t[o],void 0,h=a.x-r.x,u=a.y-r.y,i<h*h+u*u&&(e.push(t[n]),o=n);var r,a,h,u;o<s-1&&e.push(t[s-1]);return e}(t,e),e)}function _e(t,i,e){return Math.sqrt(fe(t,i,e,!0))}function de(t,i,e,n,o){var s,r,a,h=n?se:me(t,e),u=me(i,e);for(se=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=me(r=pe(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function pe(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new B(s,r,o)}function me(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function fe(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new B(s,r)}function ge(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ve(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ge(t)}var ye=(Object.freeze||Object)({simplify:ce,pointToSegmentDistance:_e,closestPointOnSegment:function(t,i,e){return fe(t,i,e)},clipSegment:de,_getEdgeIntersection:pe,_getBitCode:me,_sqClosestPointOnSegment:fe,isFlat:ge,_flat:ve});function xe(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=me(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=pe(h,a,l,i,e))._code=me(c,i),n.push(c)):(h._code&l&&((c=pe(h,a,l,i,e))._code=me(c,i),n.push(c)),n.push(a));t=n}return t}var we,Pe=(Object.freeze||Object)({clipPolygon:xe}),be={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new O([-180,-90],[180,90])},Le={R:6378137,R_MINOR:6356752.314245179,bounds:new O([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new B(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new j(a*e,t.x*e/n)}},Te=(Object.freeze||Object)({LonLat:be,Mercator:Le,SphericalMercator:q}),ze=h({},U,{code:"EPSG:3395",projection:Le,transformation:(we=.5/(Math.PI*Le.R),K(we,.5,-we,.5))}),Me=h({},U,{code:"EPSG:4326",projection:be,transformation:K(1/180,1,-1/180,.5)}),Ce=h({},F,{projection:be,transformation:K(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});F.Earth=U,F.EPSG3395=ze,F.EPSG3857=X,F.EPSG900913=J,F.EPSG4326=Me,F.Simple=Ce;var Se=k.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});Ji.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=u(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var i=u(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return!!t&&u(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?v(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=u(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ze=Se.extend({initialize:function(t,i){var e,n;if(p(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return u(t)}}),Ee=Ze.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ze.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ze.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new N;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),ke=Z.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),s=I("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var Be=ke.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Be.imagePath||(Be.imagePath=this._detectIconPath()),(this.options.imagePath||Be.imagePath)+ke.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=hi("div","leaflet-default-icon-path",document.body),i=ai(t,"background-image")||ai(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ae=oe.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new le(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),pi(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&mi(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pi(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=R(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=I((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),wi(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Pi(i._icon),o=i._map.layerPointToLatLng(n);e&&wi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ie=Se.extend({options:{icon:new Be,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){p(this,i),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),pi(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(pi(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ui(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ui(this._shadow),this._shadow=null},_setPos:function(t){wi(this._icon,t),this._shadow&&wi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(pi(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ae)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ae(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&vi(this._icon,t),this._shadow&&vi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var Oe=Se.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Re=Oe.extend({options:{fill:!0,radius:10},initialize:function(t,i){p(this,i),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=W(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Oe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new O(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var Ne=Re.extend({initialize:function(t,i,e){if("number"==typeof i&&(i=h({},e,{radius:i})),p(this,i),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Oe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===U.distance){var o=Math.PI/180,s=this._mRadius/U.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;!isNaN(l)&&0!==l||(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}});var De=Oe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){p(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=fe,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=W(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ge(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=ge(t),n=0,o=t.length;n<o;n++)e?(i[n]=W(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new B(t,t);this._pxBounds=new O([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof j,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(n=i=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=de(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=ce(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&_e(t,a[o],a[n])<=h)return!0;return!1}});De._flat=ve;var je=De.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=De.prototype._convertLatLngs.call(this,t),e=i.length;return 2<=e&&i[0]instanceof j&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){De.prototype._setLatLngs.call(this,t),ge(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ge(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new B(i,i);if(t=new O(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=xe(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||De.prototype._containsPoint.call(this,t,!0)}});var We=Ee.extend({initialize:function(t,i){p(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=v(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=He(t,s);return r?(r.feature=Ke(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});function He(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Fe;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new Ie(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new Ie(e));return new Ee(h);case"LineString":case"MultiLineString":return n=Ue(a,"LineString"===r.type?0:1,l),new De(n,i);case"Polygon":case"MultiPolygon":return n=Ue(a,"Polygon"===r.type?1:2,l),new je(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=He({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ee(h);default:throw new Error("Invalid GeoJSON object.")}}function Fe(t){return new j(t[1],t[0],t[2])}function Ue(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Ue(t[s],i-1,e):(e||Fe)(t[s]),o.push(n);return o}function Ve(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[c(t.lng,i),c(t.lat,i),c(t.alt,i)]:[c(t.lng,i),c(t.lat,i)]}function qe(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?qe(t[s],i-1,e,n):Ve(t[s],n));return!i&&e&&o.push(o[0]),o}function Ge(t,i){return t.feature?h({},t.feature,{geometry:i}):Ke(i)}function Ke(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Ye={toGeoJSON:function(t){return Ge(this,{type:"Point",coordinates:Ve(this.getLatLng(),t)})}};function Xe(t,i){return new We(t,i)}Ie.include(Ye),Ne.include(Ye),Re.include(Ye),De.include({toGeoJSON:function(t){var i=!ge(this._latlngs);return Ge(this,{type:(i?"Multi":"")+"LineString",coordinates:qe(this._latlngs,i?1:0,!1,t)})}}),je.include({toGeoJSON:function(t){var i=!ge(this._latlngs),e=i&&!ge(this._latlngs[0]),n=qe(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Ge(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ze.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),Ge(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(n);if(o)s.push(i.geometry);else{var e=Ke(i);"FeatureCollection"===e.type?s.push.apply(s,e.features):s.push(e)}}}),o?Ge(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Je=Xe,$e=Se.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=D(i),p(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(pi(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ui(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ci(this._image),this},bringToBack:function(){return this._map&&_i(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=D(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:hi("img");pi(i,"leaflet-image-layer"),this._zoomAnimated&&pi(i,"leaflet-zoom-animated"),this.options.className&&pi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onload=a(this.fire,this,"load"),i.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;xi(this._image,e,i)},_reset:function(){var t=this._image,i=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();wi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){vi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),Qe=$e.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:hi("video");if(pi(i,"leaflet-image-layer"),this._zoomAnimated&&pi(i,"leaflet-zoom-animated"),i.onselectstart=l,i.onmousemove=l,i.onloadeddata=a(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&i.style.hasOwnProperty("objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var r=hi("source");r.src=this._url[s],i.appendChild(r)}}}});var tn=$e.extend({_initImage:function(){var t=this._image=this._url;pi(t,"leaflet-image-layer"),this._zoomAnimated&&pi(t,"leaflet-zoom-animated"),t.onselectstart=l,t.onmousemove=l}});var en=Se.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){p(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(vi(this._container,0),this._removeTimeout=setTimeout(a(ui,void 0,this._container),200)):ui(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ci(this._container),this},bringToBack:function(){return this._map&&_i(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Se||(e=i,i=t),i instanceof Ee)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}return this._source=i,this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=I(this.options.offset),e=this._getAnchor();this._zoomAnimated?wi(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),nn=en.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){en.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Oe||this._source.on("preclick",Oi))},onRemove:function(t){en.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Oe||this._source.off("preclick",Oi))},getEvents:function(){var t=en.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=hi("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=hi("div",t+"-content-wrapper",i);if(this._contentNode=hi("div",t+"-content",e),Ni(e),Ri(this._contentNode),Ei(e,"contextmenu",Oi),this._tipContainer=hi("div",t+"-tip-container",i),this._tip=hi("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=hi("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",Ei(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",pi(t,s)):mi(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();wi(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(ai(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new B(this._containerLeft,-e-this._containerBottom);o._add(Pi(this._container));var s=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||r),h=I(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),ji(t)},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Ji.mergeOptions({closePopupOnClick:!0}),Ji.include({openPopup:function(t,i,e){return t instanceof nn||(t=new nn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Se.include({bindPopup:function(t,i){return t instanceof nn?(p(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new nn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(ji(t),i instanceof Oe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var on=en.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){en.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){en.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=en.prototype.getEvents.call(this);return Tt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=hi("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=I(this.options.offset),u=this._getAnchor();t="top"===s?t.add(I(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t.subtract(I(r/2-h.x,-h.y,!0)):"center"===s?t.subtract(I(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t.add(I(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t.subtract(I(r+u.x-h.x,a/2-u.y-h.y,!0))),mi(e,"leaflet-tooltip-right"),mi(e,"leaflet-tooltip-left"),mi(e,"leaflet-tooltip-top"),mi(e,"leaflet-tooltip-bottom"),pi(e,"leaflet-tooltip-"+s),wi(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Ji.include({openTooltip:function(t,i,e){return t instanceof on||(t=new on(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Se.include({bindTooltip:function(t,i){return t instanceof on?(p(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new on(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Tt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(pi(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(mi(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var sn=ke.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(li(i),i.appendChild(e.html)):i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=I(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});ke.Default=Be;var rn=Se.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ui(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ci(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!et){vi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);vi(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=hi("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ui(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=hi("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ui(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new B(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new B(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();yt?xi(t.el,o,n):wi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new O(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new O(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new B(l.x,l.y))||(this._tiles[u].current=!1)}if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new B(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return D(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new N(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new B(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(ui(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){pi(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=l,t.onmousemove=l,et&&this.options.opacity<1&&vi(t,this.options.opacity),st&&!rt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&M(a(this._tileReady,this,t,null,o)),wi(o,e),this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(vi(e.el,0),C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(pi(e.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),et||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new B(this._wrapX?r(t.x,this._wrapX):t.x,this._wrapY?r(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new O(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var an=rn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=p(this,i)).detectRetina&&Ct&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),st||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var e=document.createElement("img");return Ei(e,"load",a(this._tileOnLoad,this,i,e)),Ei(e,"error",a(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),e.alt="",e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},getTileUrl:function(t){var i={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var e=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=e),i["-y"]=e}return g(this._url,h(i,this.options))},_tileOnLoad:function(t,i){et?setTimeout(a(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=l,i.onerror=l,i.complete||(i.src=x,ui(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return ht||i.el.setAttribute("src",x),rn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==x))return rn.prototype._tileReady.call(this,t,i,e)}});function hn(t,i){return new an(t,i)}var un=an.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=p(this,i)).detectRetina&&Ct?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,an.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=R(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===Me?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=an.prototype.getTileUrl.call(this,t);return a+m(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});an.WMS=un,hn.wms=function(t,i){return new un(t,i)};var ln=Se.extend({options:{padding:.1,tolerance:0},initialize:function(t){p(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&pi(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Pi(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);yt?xi(this._container,a,e):wi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new O(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),cn=ln.extend({getEvents:function(){var t=ln.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ln.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Ei(t,"mousemove",o(this._onMouseMove,32,this),this),Ei(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ei(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,ui(this._container),Bi(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){ln.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ct?2:1;wi(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ct&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){ln.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[u(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!=o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(qi(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(mi(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(pi(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&((e.prev=n)?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,(this._drawLast.next=i).next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&((n.next=e)?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}});function _n(t){return St?new cn(t):null}var dn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),pn={_initContainer:function(){this._container=hi("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ln.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=dn("shape");pi(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=dn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ui(i),t.removeInteractiveTarget(i),delete this._layers[u(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=dn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=dn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ci(t._container)},_bringToBack:function(t){_i(t._container)}},mn=Et?dn:$,fn=ln.extend({getEvents:function(){var t=ln.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=mn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=mn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ui(this._container),Bi(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){ln.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),wi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=mn("path");t.options.className&&pi(i,t.options.className),t.options.interactive&&pi(i,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ui(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,Q(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){ci(t._path)},_bringToBack:function(t){_i(t._path)}});function gn(t){return Zt||Et?new fn(t):null}Et&&fn.include(pn),Ji.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&_n(t)||gn(t)}});var vn=je.extend({initialize:function(t,i){je.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=D(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});fn.create=mn,fn.pointsToPath=Q,We.geometryToLayer=He,We.coordsToLatLng=Fe,We.coordsToLatLngs=Ue,We.latLngToCoords=Ve,We.latLngsToCoords=qe,We.getFeature=Ge,We.asFeature=Ke,Ji.mergeOptions({boxZoom:!0});var yn=oe.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Ei(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Bi(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ui(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),$t(),Li(),this._startPoint=this._map.mouseEventToContainerPoint(t),Ei(document,{contextmenu:ji,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=hi("div","leaflet-zoom-box",this._container),pi(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new O(this._point,this._startPoint),e=i.getSize();wi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ui(this._box),mi(this._container,"leaflet-crosshair")),Qt(),Ti(),Bi(document,{contextmenu:ji,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var i=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Ji.addInitHook("addHandler","boxZoom",yn),Ji.mergeOptions({doubleClickZoom:!0});var xn=oe.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});Ji.addInitHook("addHandler","doubleClickZoom",xn),Ji.mergeOptions({dragging:!0,inertia:!rt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var wn=oe.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new le(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}pi(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){mi(this._map._container,"leaflet-grab"),mi(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=D(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),M(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});Ji.addInitHook("addHandler","dragging",wn),Ji.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Pn=oe.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Ei(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Bi(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){Ei(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Bi(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=I(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}ji(t)}}});Ji.addInitHook("addHandler","keyboard",Pn),Ji.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var bn=oe.extend({addHooks:function(){Ei(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Bi(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Fi(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),n),ji(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});Ji.addInitHook("addHandler","scrollWheelZoom",bn),Ji.mergeOptions({tap:!0,tapTolerance:15});var Ln=oe.extend({addHooks:function(){Ei(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Bi(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Di(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new B(i.clientX,i.clientY),e.tagName&&"a"===e.tagName.toLowerCase()&&pi(e,"leaflet-active"),this._holdTimeout=setTimeout(a(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),Ei(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Bi(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&mi(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new B(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Tt&&!Lt&&Ji.addInitHook("addHandler","tap",Ln),Ji.mergeOptions({touchZoom:Tt&&!rt,bounceAtZoomLimits:!0});var Tn=oe.extend({addHooks:function(){pi(this._map._container,"leaflet-touch-zoom"),Ei(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){mi(this._map._container,"leaflet-touch-zoom"),Bi(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),Ei(document,"touchmove",this._onTouchMove,this),Ei(document,"touchend",this._onTouchEnd,this),Di(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var r=a(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),Di(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,C(this._animRequest),Bi(document,"touchmove",this._onTouchMove),Bi(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Ji.addInitHook("addHandler","touchZoom",Tn),Ji.BoxZoom=yn,Ji.DoubleClickZoom=xn,Ji.Drag=wn,Ji.Keyboard=Pn,Ji.ScrollWheelZoom=bn,Ji.Tap=Ln,Ji.TouchZoom=Tn,Object.freeze=i,t.version="1.5.1+build.2e3e0ffb",t.Control=Qi,t.control=$i,t.Browser=Bt,t.Evented=k,t.Mixin=re,t.Util=S,t.Class=Z,t.Handler=oe,t.extend=h,t.bind=a,t.stamp=u,t.setOptions=p,t.DomEvent=Yi,t.DomUtil=Zi,t.PosAnimation=Xi,t.Draggable=le,t.LineUtil=ye,t.PolyUtil=Pe,t.Point=B,t.point=I,t.Bounds=O,t.bounds=R,t.Transformation=G,t.transformation=K,t.Projection=Te,t.LatLng=j,t.latLng=W,t.LatLngBounds=N,t.latLngBounds=D,t.CRS=F,t.GeoJSON=We,t.geoJSON=Xe,t.geoJson=Je,t.Layer=Se,t.LayerGroup=Ze,t.layerGroup=function(t,i){return new Ze(t,i)},t.FeatureGroup=Ee,t.featureGroup=function(t){return new Ee(t)},t.ImageOverlay=$e,t.imageOverlay=function(t,i,e){return new $e(t,i,e)},t.VideoOverlay=Qe,t.videoOverlay=function(t,i,e){return new Qe(t,i,e)},t.SVGOverlay=tn,t.svgOverlay=function(t,i,e){return new tn(t,i,e)},t.DivOverlay=en,t.Popup=nn,t.popup=function(t,i){return new nn(t,i)},t.Tooltip=on,t.tooltip=function(t,i){return new on(t,i)},t.Icon=ke,t.icon=function(t){return new ke(t)},t.DivIcon=sn,t.divIcon=function(t){return new sn(t)},t.Marker=Ie,t.marker=function(t,i){return new Ie(t,i)},t.TileLayer=an,t.tileLayer=hn,t.GridLayer=rn,t.gridLayer=function(t){return new rn(t)},t.SVG=fn,t.svg=gn,t.Renderer=ln,t.Canvas=cn,t.canvas=_n,t.Path=Oe,t.CircleMarker=Re,t.circleMarker=function(t,i){return new Re(t,i)},t.Circle=Ne,t.circle=function(t,i,e){return new Ne(t,i,e)},t.Polyline=De,t.polyline=function(t,i){return new De(t,i)},t.Polygon=je,t.polygon=function(t,i){return new je(t,i)},t.Rectangle=vn,t.rectangle=function(t,i){return new vn(t,i)},t.Map=Ji,t.map=function(t,i){return new Ji(t,i)};var zn=window.L;t.noConflict=function(){return window.L=zn,this},window.L=t});

/*
 * Leaflet.markercluster 1.4.1+master.94f9815,
 * Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 * https://github.com/Leaflet/Leaflet.markercluster
 * (c) 2012-2017, Dave Leaver, smartrak
 */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(factory((global.Leaflet=global.Leaflet||{},global.Leaflet.markercluster=global.Leaflet.markercluster||{})));}(this,(function(exports){'use strict';var MarkerClusterGroup=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:true,showCoverageOnHover:true,zoomToBoundsOnClick:true,singleMarkerMode:false,disableClusteringAtZoom:null,removeOutsideVisibleBounds:true,animate:true,animateAddingMarkers:false,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:'#222',opacity:0.5},chunkedLoading:false,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(options){L.Util.setOptions(this,options);if(!this.options.iconCreateFunction){this.options.iconCreateFunction=this._defaultIconCreateFunction;}
this._featureGroup=L.featureGroup();this._featureGroup.addEventParent(this);this._nonPointGroup=L.featureGroup();this._nonPointGroup.addEventParent(this);this._inZoomAnimation=0;this._needsClustering=[];this._needsRemoving=[];this._currentShownBounds=null;this._queue=[];this._childMarkerEventHandlers={'dragstart':this._childMarkerDragStart,'move':this._childMarkerMoved,'dragend':this._childMarkerDragEnd,};var animate=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,animate?this._withAnimation:this._noAnimation);this._markerCluster=animate?L.MarkerCluster:L.MarkerClusterNonAnimated;},addLayer:function(layer){if(layer instanceof L.LayerGroup){return this.addLayers([layer]);}
if(!layer.getLatLng){this._nonPointGroup.addLayer(layer);this.fire('layeradd',{layer:layer});return this;}
if(!this._map){this._needsClustering.push(layer);this.fire('layeradd',{layer:layer});return this;}
if(this.hasLayer(layer)){return this;}
if(this._unspiderfy){this._unspiderfy();}
this._addLayer(layer,this._maxZoom);this.fire('layeradd',{layer:layer});this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();var visibleLayer=layer,currentZoom=this._zoom;if(layer.__parent){while(visibleLayer.__parent._zoom>=currentZoom){visibleLayer=visibleLayer.__parent;}}
if(this._currentShownBounds.contains(visibleLayer.getLatLng())){if(this.options.animateAddingMarkers){this._animationAddLayer(layer,visibleLayer);}else{this._animationAddLayerNonAnimated(layer,visibleLayer);}}
return this;},removeLayer:function(layer){if(layer instanceof L.LayerGroup){return this.removeLayers([layer]);}
if(!layer.getLatLng){this._nonPointGroup.removeLayer(layer);this.fire('layerremove',{layer:layer});return this;}
if(!this._map){if(!this._arraySplice(this._needsClustering,layer)&&this.hasLayer(layer)){this._needsRemoving.push({layer:layer,latlng:layer._latlng});}
this.fire('layerremove',{layer:layer});return this;}
if(!layer.__parent){return this;}
if(this._unspiderfy){this._unspiderfy();this._unspiderfyLayer(layer);}
this._removeLayer(layer,true);this.fire('layerremove',{layer:layer});this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();layer.off(this._childMarkerEventHandlers,this);if(this._featureGroup.hasLayer(layer)){this._featureGroup.removeLayer(layer);if(layer.clusterShow){layer.clusterShow();}}
return this;},addLayers:function(layersArray,skipLayerAddEvent){if(!L.Util.isArray(layersArray)){return this.addLayer(layersArray);}
var fg=this._featureGroup,npg=this._nonPointGroup,chunked=this.options.chunkedLoading,chunkInterval=this.options.chunkInterval,chunkProgress=this.options.chunkProgress,l=layersArray.length,offset=0,originalArray=true,m;if(this._map){var started=(new Date()).getTime();var process=L.bind(function(){var start=(new Date()).getTime();for(;offset<l;offset++){if(chunked&&offset%200===0){var elapsed=(new Date()).getTime()-start;if(elapsed>chunkInterval){break;}}
m=layersArray[offset];if(m instanceof L.LayerGroup){if(originalArray){layersArray=layersArray.slice();originalArray=false;}
this._extractNonGroupLayers(m,layersArray);l=layersArray.length;continue;}
if(!m.getLatLng){npg.addLayer(m);if(!skipLayerAddEvent){this.fire('layeradd',{layer:m});}
continue;}
if(this.hasLayer(m)){continue;}
this._addLayer(m,this._maxZoom);if(!skipLayerAddEvent){this.fire('layeradd',{layer:m});}
if(m.__parent){if(m.__parent.getChildCount()===2){var markers=m.__parent.getAllChildMarkers(),otherMarker=markers[0]===m?markers[1]:markers[0];fg.removeLayer(otherMarker);}}}
if(chunkProgress){chunkProgress(offset,l,(new Date()).getTime()-started);}
if(offset===l){this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds);}else{setTimeout(process,this.options.chunkDelay);}},this);process();}else{var needsClustering=this._needsClustering;for(;offset<l;offset++){m=layersArray[offset];if(m instanceof L.LayerGroup){if(originalArray){layersArray=layersArray.slice();originalArray=false;}
this._extractNonGroupLayers(m,layersArray);l=layersArray.length;continue;}
if(!m.getLatLng){npg.addLayer(m);continue;}
if(this.hasLayer(m)){continue;}
needsClustering.push(m);}}
return this;},removeLayers:function(layersArray){var i,m,l=layersArray.length,fg=this._featureGroup,npg=this._nonPointGroup,originalArray=true;if(!this._map){for(i=0;i<l;i++){m=layersArray[i];if(m instanceof L.LayerGroup){if(originalArray){layersArray=layersArray.slice();originalArray=false;}
this._extractNonGroupLayers(m,layersArray);l=layersArray.length;continue;}
this._arraySplice(this._needsClustering,m);npg.removeLayer(m);if(this.hasLayer(m)){this._needsRemoving.push({layer:m,latlng:m._latlng});}
this.fire('layerremove',{layer:m});}
return this;}
if(this._unspiderfy){this._unspiderfy();var layersArray2=layersArray.slice(),l2=l;for(i=0;i<l2;i++){m=layersArray2[i];if(m instanceof L.LayerGroup){this._extractNonGroupLayers(m,layersArray2);l2=layersArray2.length;continue;}
this._unspiderfyLayer(m);}}
for(i=0;i<l;i++){m=layersArray[i];if(m instanceof L.LayerGroup){if(originalArray){layersArray=layersArray.slice();originalArray=false;}
this._extractNonGroupLayers(m,layersArray);l=layersArray.length;continue;}
if(!m.__parent){npg.removeLayer(m);this.fire('layerremove',{layer:m});continue;}
this._removeLayer(m,true,true);this.fire('layerremove',{layer:m});if(fg.hasLayer(m)){fg.removeLayer(m);if(m.clusterShow){m.clusterShow();}}}
this._topClusterLevel._recalculateBounds();this._refreshClustersIcons();this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds);return this;},clearLayers:function(){if(!this._map){this._needsClustering=[];this._needsRemoving=[];delete this._gridClusters;delete this._gridUnclustered;}
if(this._noanimationUnspiderfy){this._noanimationUnspiderfy();}
this._featureGroup.clearLayers();this._nonPointGroup.clearLayers();this.eachLayer(function(marker){marker.off(this._childMarkerEventHandlers,this);delete marker.__parent;},this);if(this._map){this._generateInitialClusters();}
return this;},getBounds:function(){var bounds=new L.LatLngBounds();if(this._topClusterLevel){bounds.extend(this._topClusterLevel._bounds);}
for(var i=this._needsClustering.length-1;i>=0;i--){bounds.extend(this._needsClustering[i].getLatLng());}
bounds.extend(this._nonPointGroup.getBounds());return bounds;},eachLayer:function(method,context){var markers=this._needsClustering.slice(),needsRemoving=this._needsRemoving,thisNeedsRemoving,i,j;if(this._topClusterLevel){this._topClusterLevel.getAllChildMarkers(markers);}
for(i=markers.length-1;i>=0;i--){thisNeedsRemoving=true;for(j=needsRemoving.length-1;j>=0;j--){if(needsRemoving[j].layer===markers[i]){thisNeedsRemoving=false;break;}}
if(thisNeedsRemoving){method.call(context,markers[i]);}}
this._nonPointGroup.eachLayer(method,context);},getLayers:function(){var layers=[];this.eachLayer(function(l){layers.push(l);});return layers;},getLayer:function(id){var result=null;id=parseInt(id,10);this.eachLayer(function(l){if(L.stamp(l)===id){result=l;}});return result;},hasLayer:function(layer){if(!layer){return false;}
var i,anArray=this._needsClustering;for(i=anArray.length-1;i>=0;i--){if(anArray[i]===layer){return true;}}
anArray=this._needsRemoving;for(i=anArray.length-1;i>=0;i--){if(anArray[i].layer===layer){return false;}}
return!!(layer.__parent&&layer.__parent._group===this)||this._nonPointGroup.hasLayer(layer);},zoomToShowLayer:function(layer,callback){if(typeof callback!=='function'){callback=function(){};}
var showMarker=function(){if((layer._icon||layer.__parent._icon)&&!this._inZoomAnimation){this._map.off('moveend',showMarker,this);this.off('animationend',showMarker,this);if(layer._icon){callback();}else if(layer.__parent._icon){this.once('spiderfied',callback,this);layer.__parent.spiderfy();}}};if(layer._icon&&this._map.getBounds().contains(layer.getLatLng())){callback();}else if(layer.__parent._zoom<Math.round(this._map._zoom)){this._map.on('moveend',showMarker,this);this._map.panTo(layer.getLatLng());}else{this._map.on('moveend',showMarker,this);this.on('animationend',showMarker,this);layer.__parent.zoomToBounds();}},onAdd:function(map){this._map=map;var i,l,layer;if(!isFinite(this._map.getMaxZoom())){throw"Map has no maxZoom specified";}
this._featureGroup.addTo(map);this._nonPointGroup.addTo(map);if(!this._gridClusters){this._generateInitialClusters();}
this._maxLat=map.options.crs.projection.MAX_LATITUDE;for(i=0,l=this._needsRemoving.length;i<l;i++){layer=this._needsRemoving[i];layer.newlatlng=layer.layer._latlng;layer.layer._latlng=layer.latlng;}
for(i=0,l=this._needsRemoving.length;i<l;i++){layer=this._needsRemoving[i];this._removeLayer(layer.layer,true);layer.layer._latlng=layer.newlatlng;}
this._needsRemoving=[];this._zoom=Math.round(this._map._zoom);this._currentShownBounds=this._getExpandedVisibleBounds();this._map.on('zoomend',this._zoomEnd,this);this._map.on('moveend',this._moveEnd,this);if(this._spiderfierOnAdd){this._spiderfierOnAdd();}
this._bindEvents();l=this._needsClustering;this._needsClustering=[];this.addLayers(l,true);},onRemove:function(map){map.off('zoomend',this._zoomEnd,this);map.off('moveend',this._moveEnd,this);this._unbindEvents();this._map._mapPane.className=this._map._mapPane.className.replace(' leaflet-cluster-anim','');if(this._spiderfierOnRemove){this._spiderfierOnRemove();}
delete this._maxLat;this._hideCoverage();this._featureGroup.remove();this._nonPointGroup.remove();this._featureGroup.clearLayers();this._map=null;},getVisibleParent:function(marker){var vMarker=marker;while(vMarker&&!vMarker._icon){vMarker=vMarker.__parent;}
return vMarker||null;},_arraySplice:function(anArray,obj){for(var i=anArray.length-1;i>=0;i--){if(anArray[i]===obj){anArray.splice(i,1);return true;}}},_removeFromGridUnclustered:function(marker,z){var map=this._map,gridUnclustered=this._gridUnclustered,minZoom=Math.floor(this._map.getMinZoom());for(;z>=minZoom;z--){if(!gridUnclustered[z].removeObject(marker,map.project(marker.getLatLng(),z))){break;}}},_childMarkerDragStart:function(e){e.target.__dragStart=e.target._latlng;},_childMarkerMoved:function(e){if(!this._ignoreMove&&!e.target.__dragStart){var isPopupOpen=e.target._popup&&e.target._popup.isOpen();this._moveChild(e.target,e.oldLatLng,e.latlng);if(isPopupOpen){e.target.openPopup();}}},_moveChild:function(layer,from,to){layer._latlng=from;this.removeLayer(layer);layer._latlng=to;this.addLayer(layer);},_childMarkerDragEnd:function(e){var dragStart=e.target.__dragStart;delete e.target.__dragStart;if(dragStart){this._moveChild(e.target,dragStart,e.target._latlng);}},_removeLayer:function(marker,removeFromDistanceGrid,dontUpdateMap){var gridClusters=this._gridClusters,gridUnclustered=this._gridUnclustered,fg=this._featureGroup,map=this._map,minZoom=Math.floor(this._map.getMinZoom());if(removeFromDistanceGrid){this._removeFromGridUnclustered(marker,this._maxZoom);}
var cluster=marker.__parent,markers=cluster._markers,otherMarker;this._arraySplice(markers,marker);while(cluster){cluster._childCount--;cluster._boundsNeedUpdate=true;if(cluster._zoom<minZoom){break;}else if(removeFromDistanceGrid&&cluster._childCount<=1){otherMarker=cluster._markers[0]===marker?cluster._markers[1]:cluster._markers[0];gridClusters[cluster._zoom].removeObject(cluster,map.project(cluster._cLatLng,cluster._zoom));gridUnclustered[cluster._zoom].addObject(otherMarker,map.project(otherMarker.getLatLng(),cluster._zoom));this._arraySplice(cluster.__parent._childClusters,cluster);cluster.__parent._markers.push(otherMarker);otherMarker.__parent=cluster.__parent;if(cluster._icon){fg.removeLayer(cluster);if(!dontUpdateMap){fg.addLayer(otherMarker);}}}else{cluster._iconNeedsUpdate=true;}
cluster=cluster.__parent;}
delete marker.__parent;},_isOrIsParent:function(el,oel){while(oel){if(el===oel){return true;}
oel=oel.parentNode;}
return false;},fire:function(type,data,propagate){if(data&&data.layer instanceof L.MarkerCluster){if(data.originalEvent&&this._isOrIsParent(data.layer._icon,data.originalEvent.relatedTarget)){return;}
type='cluster'+type;}
L.FeatureGroup.prototype.fire.call(this,type,data,propagate);},listens:function(type,propagate){return L.FeatureGroup.prototype.listens.call(this,type,propagate)||L.FeatureGroup.prototype.listens.call(this,'cluster'+type,propagate);},_defaultIconCreateFunction:function(cluster){var childCount=cluster.getChildCount();var c=' marker-cluster-';if(childCount<10){c+='small';}else if(childCount<100){c+='medium';}else{c+='large';}
return new L.DivIcon({html:'<div><span>'+childCount+'</span></div>',className:'marker-cluster'+c,iconSize:new L.Point(40,40)});},_bindEvents:function(){var map=this._map,spiderfyOnMaxZoom=this.options.spiderfyOnMaxZoom,showCoverageOnHover=this.options.showCoverageOnHover,zoomToBoundsOnClick=this.options.zoomToBoundsOnClick;if(spiderfyOnMaxZoom||zoomToBoundsOnClick){this.on('clusterclick',this._zoomOrSpiderfy,this);}
if(showCoverageOnHover){this.on('clustermouseover',this._showCoverage,this);this.on('clustermouseout',this._hideCoverage,this);map.on('zoomend',this._hideCoverage,this);}},_zoomOrSpiderfy:function(e){var cluster=e.layer,bottomCluster=cluster;while(bottomCluster._childClusters.length===1){bottomCluster=bottomCluster._childClusters[0];}
if(bottomCluster._zoom===this._maxZoom&&bottomCluster._childCount===cluster._childCount&&this.options.spiderfyOnMaxZoom){cluster.spiderfy();}else if(this.options.zoomToBoundsOnClick){cluster.zoomToBounds();}
if(e.originalEvent&&e.originalEvent.keyCode===13){this._map._container.focus();}},_showCoverage:function(e){var map=this._map;if(this._inZoomAnimation){return;}
if(this._shownPolygon){map.removeLayer(this._shownPolygon);}
if(e.layer.getChildCount()>2&&e.layer!==this._spiderfied){this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions);map.addLayer(this._shownPolygon);}},_hideCoverage:function(){if(this._shownPolygon){this._map.removeLayer(this._shownPolygon);this._shownPolygon=null;}},_unbindEvents:function(){var spiderfyOnMaxZoom=this.options.spiderfyOnMaxZoom,showCoverageOnHover=this.options.showCoverageOnHover,zoomToBoundsOnClick=this.options.zoomToBoundsOnClick,map=this._map;if(spiderfyOnMaxZoom||zoomToBoundsOnClick){this.off('clusterclick',this._zoomOrSpiderfy,this);}
if(showCoverageOnHover){this.off('clustermouseover',this._showCoverage,this);this.off('clustermouseout',this._hideCoverage,this);map.off('zoomend',this._hideCoverage,this);}},_zoomEnd:function(){if(!this._map){return;}
this._mergeSplitClusters();this._zoom=Math.round(this._map._zoom);this._currentShownBounds=this._getExpandedVisibleBounds();},_moveEnd:function(){if(this._inZoomAnimation){return;}
var newBounds=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,newBounds);this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),newBounds);this._currentShownBounds=newBounds;return;},_generateInitialClusters:function(){var maxZoom=Math.ceil(this._map.getMaxZoom()),minZoom=Math.floor(this._map.getMinZoom()),radius=this.options.maxClusterRadius,radiusFn=radius;if(typeof radius!=="function"){radiusFn=function(){return radius;};}
if(this.options.disableClusteringAtZoom!==null){maxZoom=this.options.disableClusteringAtZoom-1;}
this._maxZoom=maxZoom;this._gridClusters={};this._gridUnclustered={};for(var zoom=maxZoom;zoom>=minZoom;zoom--){this._gridClusters[zoom]=new L.DistanceGrid(radiusFn(zoom));this._gridUnclustered[zoom]=new L.DistanceGrid(radiusFn(zoom));}
this._topClusterLevel=new this._markerCluster(this,minZoom-1);},_addLayer:function(layer,zoom){var gridClusters=this._gridClusters,gridUnclustered=this._gridUnclustered,minZoom=Math.floor(this._map.getMinZoom()),markerPoint,z;if(this.options.singleMarkerMode){this._overrideMarkerIcon(layer);}
layer.on(this._childMarkerEventHandlers,this);for(;zoom>=minZoom;zoom--){markerPoint=this._map.project(layer.getLatLng(),zoom);var closest=gridClusters[zoom].getNearObject(markerPoint);if(closest){closest._addChild(layer);layer.__parent=closest;return;}
closest=gridUnclustered[zoom].getNearObject(markerPoint);if(closest){var parent=closest.__parent;if(parent){this._removeLayer(closest,false);}
var newCluster=new this._markerCluster(this,zoom,closest,layer);gridClusters[zoom].addObject(newCluster,this._map.project(newCluster._cLatLng,zoom));closest.__parent=newCluster;layer.__parent=newCluster;var lastParent=newCluster;for(z=zoom-1;z>parent._zoom;z--){lastParent=new this._markerCluster(this,z,lastParent);gridClusters[z].addObject(lastParent,this._map.project(closest.getLatLng(),z));}
parent._addChild(lastParent);this._removeFromGridUnclustered(closest,zoom);return;}
gridUnclustered[zoom].addObject(layer,markerPoint);}
this._topClusterLevel._addChild(layer);layer.__parent=this._topClusterLevel;return;},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(c){if(c instanceof L.MarkerCluster&&c._iconNeedsUpdate){c._updateIcon();}});},_enqueue:function(fn){this._queue.push(fn);if(!this._queueTimeout){this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300);}},_processQueue:function(){for(var i=0;i<this._queue.length;i++){this._queue[i].call(this);}
this._queue.length=0;clearTimeout(this._queueTimeout);this._queueTimeout=null;},_mergeSplitClusters:function(){var mapZoom=Math.round(this._map._zoom);this._processQueue();if(this._zoom<mapZoom&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())){this._animationStart();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds());this._animationZoomIn(this._zoom,mapZoom);}else if(this._zoom>mapZoom){this._animationStart();this._animationZoomOut(this._zoom,mapZoom);}else{this._moveEnd();}},_getExpandedVisibleBounds:function(){if(!this.options.removeOutsideVisibleBounds){return this._mapBoundsInfinite;}else if(L.Browser.mobile){return this._checkBoundsMaxLat(this._map.getBounds());}
return this._checkBoundsMaxLat(this._map.getBounds().pad(1));},_checkBoundsMaxLat:function(bounds){var maxLat=this._maxLat;if(maxLat!==undefined){if(bounds.getNorth()>=maxLat){bounds._northEast.lat=Infinity;}
if(bounds.getSouth()<=-maxLat){bounds._southWest.lat=-Infinity;}}
return bounds;},_animationAddLayerNonAnimated:function(layer,newCluster){if(newCluster===layer){this._featureGroup.addLayer(layer);}else if(newCluster._childCount===2){newCluster._addToMap();var markers=newCluster.getAllChildMarkers();this._featureGroup.removeLayer(markers[0]);this._featureGroup.removeLayer(markers[1]);}else{newCluster._updateIcon();}},_extractNonGroupLayers:function(group,output){var layers=group.getLayers(),i=0,layer;output=output||[];for(;i<layers.length;i++){layer=layers[i];if(layer instanceof L.LayerGroup){this._extractNonGroupLayers(layer,output);continue;}
output.push(layer);}
return output;},_overrideMarkerIcon:function(layer){var icon=layer.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1;},getAllChildMarkers:function(){return[layer];}});return icon;}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-Infinity,-Infinity),new L.LatLng(Infinity,Infinity))});L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(previousZoomLevel,newZoomLevel){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),previousZoomLevel);this._topClusterLevel._recursivelyAddChildrenToMap(null,newZoomLevel,this._getExpandedVisibleBounds());this.fire('animationend');},_animationZoomOut:function(previousZoomLevel,newZoomLevel){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),previousZoomLevel);this._topClusterLevel._recursivelyAddChildrenToMap(null,newZoomLevel,this._getExpandedVisibleBounds());this.fire('animationend');},_animationAddLayer:function(layer,newCluster){this._animationAddLayerNonAnimated(layer,newCluster);}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=' leaflet-cluster-anim';this._inZoomAnimation++;},_animationZoomIn:function(previousZoomLevel,newZoomLevel){var bounds=this._getExpandedVisibleBounds(),fg=this._featureGroup,minZoom=Math.floor(this._map.getMinZoom()),i;this._ignoreMove=true;this._topClusterLevel._recursively(bounds,previousZoomLevel,minZoom,function(c){var startPos=c._latlng,markers=c._markers,m;if(!bounds.contains(startPos)){startPos=null;}
if(c._isSingleParent()&&previousZoomLevel+1===newZoomLevel){fg.removeLayer(c);c._recursivelyAddChildrenToMap(null,newZoomLevel,bounds);}else{c.clusterHide();c._recursivelyAddChildrenToMap(startPos,newZoomLevel,bounds);}
for(i=markers.length-1;i>=0;i--){m=markers[i];if(!bounds.contains(m._latlng)){fg.removeLayer(m);}}});this._forceLayout();this._topClusterLevel._recursivelyBecomeVisible(bounds,newZoomLevel);fg.eachLayer(function(n){if(!(n instanceof L.MarkerCluster)&&n._icon){n.clusterShow();}});this._topClusterLevel._recursively(bounds,previousZoomLevel,newZoomLevel,function(c){c._recursivelyRestoreChildPositions(newZoomLevel);});this._ignoreMove=false;this._enqueue(function(){this._topClusterLevel._recursively(bounds,previousZoomLevel,minZoom,function(c){fg.removeLayer(c);c.clusterShow();});this._animationEnd();});},_animationZoomOut:function(previousZoomLevel,newZoomLevel){this._animationZoomOutSingle(this._topClusterLevel,previousZoomLevel-1,newZoomLevel);this._topClusterLevel._recursivelyAddChildrenToMap(null,newZoomLevel,this._getExpandedVisibleBounds());this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),previousZoomLevel,this._getExpandedVisibleBounds());},_animationAddLayer:function(layer,newCluster){var me=this,fg=this._featureGroup;fg.addLayer(layer);if(newCluster!==layer){if(newCluster._childCount>2){newCluster._updateIcon();this._forceLayout();this._animationStart();layer._setPos(this._map.latLngToLayerPoint(newCluster.getLatLng()));layer.clusterHide();this._enqueue(function(){fg.removeLayer(layer);layer.clusterShow();me._animationEnd();});}else{this._forceLayout();me._animationStart();me._animationZoomOutSingle(newCluster,this._map.getMaxZoom(),this._zoom);}}}},_animationZoomOutSingle:function(cluster,previousZoomLevel,newZoomLevel){var bounds=this._getExpandedVisibleBounds(),minZoom=Math.floor(this._map.getMinZoom());cluster._recursivelyAnimateChildrenInAndAddSelfToMap(bounds,minZoom,previousZoomLevel+1,newZoomLevel);var me=this;this._forceLayout();cluster._recursivelyBecomeVisible(bounds,newZoomLevel);this._enqueue(function(){if(cluster._childCount===1){var m=cluster._markers[0];this._ignoreMove=true;m.setLatLng(m.getLatLng());this._ignoreMove=false;if(m.clusterShow){m.clusterShow();}}else{cluster._recursively(bounds,newZoomLevel,minZoom,function(c){c._recursivelyRemoveChildrenFromMap(bounds,minZoom,previousZoomLevel+1);});}
me._animationEnd();});},_animationEnd:function(){if(this._map){this._map._mapPane.className=this._map._mapPane.className.replace(' leaflet-cluster-anim','');}
this._inZoomAnimation--;this.fire('animationend');},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth);}});L.markerClusterGroup=function(options){return new L.MarkerClusterGroup(options);};var MarkerCluster=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(group,zoom,a,b){L.Marker.prototype.initialize.call(this,a?(a._cLatLng||a.getLatLng()):new L.LatLng(0,0),{icon:this,pane:group.options.clusterPane});this._group=group;this._zoom=zoom;this._markers=[];this._childClusters=[];this._childCount=0;this._iconNeedsUpdate=true;this._boundsNeedUpdate=true;this._bounds=new L.LatLngBounds();if(a){this._addChild(a);}
if(b){this._addChild(b);}},getAllChildMarkers:function(storageArray,ignoreDraggedMarker){storageArray=storageArray||[];for(var i=this._childClusters.length-1;i>=0;i--){this._childClusters[i].getAllChildMarkers(storageArray);}
for(var j=this._markers.length-1;j>=0;j--){if(ignoreDraggedMarker&&this._markers[j].__dragStart){continue;}
storageArray.push(this._markers[j]);}
return storageArray;},getChildCount:function(){return this._childCount;},zoomToBounds:function(fitBoundsOptions){var childClusters=this._childClusters.slice(),map=this._group._map,boundsZoom=map.getBoundsZoom(this._bounds),zoom=this._zoom+1,mapZoom=map.getZoom(),i;while(childClusters.length>0&&boundsZoom>zoom){zoom++;var newClusters=[];for(i=0;i<childClusters.length;i++){newClusters=newClusters.concat(childClusters[i]._childClusters);}
childClusters=newClusters;}
if(boundsZoom>zoom){this._group._map.setView(this._latlng,zoom);}else if(boundsZoom<=mapZoom){this._group._map.setView(this._latlng,mapZoom+1);}else{this._group._map.fitBounds(this._bounds,fitBoundsOptions);}},getBounds:function(){var bounds=new L.LatLngBounds();bounds.extend(this._bounds);return bounds;},_updateIcon:function(){this._iconNeedsUpdate=true;if(this._icon){this.setIcon(this);}},createIcon:function(){if(this._iconNeedsUpdate){this._iconObj=this._group.options.iconCreateFunction(this);this._iconNeedsUpdate=false;}
return this._iconObj.createIcon();},createShadow:function(){return this._iconObj.createShadow();},_addChild:function(new1,isNotificationFromChild){this._iconNeedsUpdate=true;this._boundsNeedUpdate=true;this._setClusterCenter(new1);if(new1 instanceof L.MarkerCluster){if(!isNotificationFromChild){this._childClusters.push(new1);new1.__parent=this;}
this._childCount+=new1._childCount;}else{if(!isNotificationFromChild){this._markers.push(new1);}
this._childCount++;}
if(this.__parent){this.__parent._addChild(new1,true);}},_setClusterCenter:function(child){if(!this._cLatLng){this._cLatLng=child._cLatLng||child._latlng;}},_resetBounds:function(){var bounds=this._bounds;if(bounds._southWest){bounds._southWest.lat=Infinity;bounds._southWest.lng=Infinity;}
if(bounds._northEast){bounds._northEast.lat=-Infinity;bounds._northEast.lng=-Infinity;}},_recalculateBounds:function(){var markers=this._markers,childClusters=this._childClusters,latSum=0,lngSum=0,totalCount=this._childCount,i,child,childLatLng,childCount;if(totalCount===0){return;}
this._resetBounds();for(i=0;i<markers.length;i++){childLatLng=markers[i]._latlng;this._bounds.extend(childLatLng);latSum+=childLatLng.lat;lngSum+=childLatLng.lng;}
for(i=0;i<childClusters.length;i++){child=childClusters[i];if(child._boundsNeedUpdate){child._recalculateBounds();}
this._bounds.extend(child._bounds);childLatLng=child._wLatLng;childCount=child._childCount;latSum+=childLatLng.lat*childCount;lngSum+=childLatLng.lng*childCount;}
this._latlng=this._wLatLng=new L.LatLng(latSum/totalCount,lngSum/totalCount);this._boundsNeedUpdate=false;},_addToMap:function(startPos){if(startPos){this._backupLatlng=this._latlng;this.setLatLng(startPos);}
this._group._featureGroup.addLayer(this);},_recursivelyAnimateChildrenIn:function(bounds,center,maxZoom){this._recursively(bounds,this._group._map.getMinZoom(),maxZoom-1,function(c){var markers=c._markers,i,m;for(i=markers.length-1;i>=0;i--){m=markers[i];if(m._icon){m._setPos(center);m.clusterHide();}}},function(c){var childClusters=c._childClusters,j,cm;for(j=childClusters.length-1;j>=0;j--){cm=childClusters[j];if(cm._icon){cm._setPos(center);cm.clusterHide();}}});},_recursivelyAnimateChildrenInAndAddSelfToMap:function(bounds,mapMinZoom,previousZoomLevel,newZoomLevel){this._recursively(bounds,newZoomLevel,mapMinZoom,function(c){c._recursivelyAnimateChildrenIn(bounds,c._group._map.latLngToLayerPoint(c.getLatLng()).round(),previousZoomLevel);if(c._isSingleParent()&&previousZoomLevel-1===newZoomLevel){c.clusterShow();c._recursivelyRemoveChildrenFromMap(bounds,mapMinZoom,previousZoomLevel);}else{c.clusterHide();}
c._addToMap();});},_recursivelyBecomeVisible:function(bounds,zoomLevel){this._recursively(bounds,this._group._map.getMinZoom(),zoomLevel,null,function(c){c.clusterShow();});},_recursivelyAddChildrenToMap:function(startPos,zoomLevel,bounds){this._recursively(bounds,this._group._map.getMinZoom()-1,zoomLevel,function(c){if(zoomLevel===c._zoom){return;}
for(var i=c._markers.length-1;i>=0;i--){var nm=c._markers[i];if(!bounds.contains(nm._latlng)){continue;}
if(startPos){nm._backupLatlng=nm.getLatLng();nm.setLatLng(startPos);if(nm.clusterHide){nm.clusterHide();}}
c._group._featureGroup.addLayer(nm);}},function(c){c._addToMap(startPos);});},_recursivelyRestoreChildPositions:function(zoomLevel){for(var i=this._markers.length-1;i>=0;i--){var nm=this._markers[i];if(nm._backupLatlng){nm.setLatLng(nm._backupLatlng);delete nm._backupLatlng;}}
if(zoomLevel-1===this._zoom){for(var j=this._childClusters.length-1;j>=0;j--){this._childClusters[j]._restorePosition();}}else{for(var k=this._childClusters.length-1;k>=0;k--){this._childClusters[k]._recursivelyRestoreChildPositions(zoomLevel);}}},_restorePosition:function(){if(this._backupLatlng){this.setLatLng(this._backupLatlng);delete this._backupLatlng;}},_recursivelyRemoveChildrenFromMap:function(previousBounds,mapMinZoom,zoomLevel,exceptBounds){var m,i;this._recursively(previousBounds,mapMinZoom-1,zoomLevel-1,function(c){for(i=c._markers.length-1;i>=0;i--){m=c._markers[i];if(!exceptBounds||!exceptBounds.contains(m._latlng)){c._group._featureGroup.removeLayer(m);if(m.clusterShow){m.clusterShow();}}}},function(c){for(i=c._childClusters.length-1;i>=0;i--){m=c._childClusters[i];if(!exceptBounds||!exceptBounds.contains(m._latlng)){c._group._featureGroup.removeLayer(m);if(m.clusterShow){m.clusterShow();}}}});},_recursively:function(boundsToApplyTo,zoomLevelToStart,zoomLevelToStop,runAtEveryLevel,runAtBottomLevel){var childClusters=this._childClusters,zoom=this._zoom,i,c;if(zoomLevelToStart<=zoom){if(runAtEveryLevel){runAtEveryLevel(this);}
if(runAtBottomLevel&&zoom===zoomLevelToStop){runAtBottomLevel(this);}}
if(zoom<zoomLevelToStart||zoom<zoomLevelToStop){for(i=childClusters.length-1;i>=0;i--){c=childClusters[i];if(c._boundsNeedUpdate){c._recalculateBounds();}
if(boundsToApplyTo.intersects(c._bounds)){c._recursively(boundsToApplyTo,zoomLevelToStart,zoomLevelToStop,runAtEveryLevel,runAtBottomLevel);}}}},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount;}});L.Marker.include({clusterHide:function(){var backup=this.options.opacity;this.setOpacity(0);this.options.opacity=backup;return this;},clusterShow:function(){return this.setOpacity(this.options.opacity);}});L.DistanceGrid=function(cellSize){this._cellSize=cellSize;this._sqCellSize=cellSize*cellSize;this._grid={};this._objectPoint={};};L.DistanceGrid.prototype={addObject:function(obj,point){var x=this._getCoord(point.x),y=this._getCoord(point.y),grid=this._grid,row=grid[y]=grid[y]||{},cell=row[x]=row[x]||[],stamp=L.Util.stamp(obj);this._objectPoint[stamp]=point;cell.push(obj);},updateObject:function(obj,point){this.removeObject(obj);this.addObject(obj,point);},removeObject:function(obj,point){var x=this._getCoord(point.x),y=this._getCoord(point.y),grid=this._grid,row=grid[y]=grid[y]||{},cell=row[x]=row[x]||[],i,len;delete this._objectPoint[L.Util.stamp(obj)];for(i=0,len=cell.length;i<len;i++){if(cell[i]===obj){cell.splice(i,1);if(len===1){delete row[x];}
return true;}}},eachObject:function(fn,context){var i,j,k,len,row,cell,removed,grid=this._grid;for(i in grid){row=grid[i];for(j in row){cell=row[j];for(k=0,len=cell.length;k<len;k++){removed=fn.call(context,cell[k]);if(removed){k--;len--;}}}}},getNearObject:function(point){var x=this._getCoord(point.x),y=this._getCoord(point.y),i,j,k,row,cell,len,obj,dist,objectPoint=this._objectPoint,closestDistSq=this._sqCellSize,closest=null;for(i=y-1;i<=y+1;i++){row=this._grid[i];if(row){for(j=x-1;j<=x+1;j++){cell=row[j];if(cell){for(k=0,len=cell.length;k<len;k++){obj=cell[k];dist=this._sqDist(objectPoint[L.Util.stamp(obj)],point);if(dist<closestDistSq||dist<=closestDistSq&&closest===null){closestDistSq=dist;closest=obj;}}}}}}
return closest;},_getCoord:function(x){var coord=Math.floor(x/this._cellSize);return isFinite(coord)?coord:x;},_sqDist:function(p,p2){var dx=p2.x-p.x,dy=p2.y-p.y;return dx*dx+dy*dy;}};(function(){L.QuickHull={getDistant:function(cpt,bl){var vY=bl[1].lat-bl[0].lat,vX=bl[0].lng-bl[1].lng;return(vX*(cpt.lat-bl[0].lat)+vY*(cpt.lng-bl[0].lng));},findMostDistantPointFromBaseLine:function(baseLine,latLngs){var maxD=0,maxPt=null,newPoints=[],i,pt,d;for(i=latLngs.length-1;i>=0;i--){pt=latLngs[i];d=this.getDistant(pt,baseLine);if(d>0){newPoints.push(pt);}else{continue;}
if(d>maxD){maxD=d;maxPt=pt;}}
return{maxPoint:maxPt,newPoints:newPoints};},buildConvexHull:function(baseLine,latLngs){var convexHullBaseLines=[],t=this.findMostDistantPointFromBaseLine(baseLine,latLngs);if(t.maxPoint){convexHullBaseLines=convexHullBaseLines.concat(this.buildConvexHull([baseLine[0],t.maxPoint],t.newPoints));convexHullBaseLines=convexHullBaseLines.concat(this.buildConvexHull([t.maxPoint,baseLine[1]],t.newPoints));return convexHullBaseLines;}else{return[baseLine[0]];}},getConvexHull:function(latLngs){var maxLat=false,minLat=false,maxLng=false,minLng=false,maxLatPt=null,minLatPt=null,maxLngPt=null,minLngPt=null,maxPt=null,minPt=null,i;for(i=latLngs.length-1;i>=0;i--){var pt=latLngs[i];if(maxLat===false||pt.lat>maxLat){maxLatPt=pt;maxLat=pt.lat;}
if(minLat===false||pt.lat<minLat){minLatPt=pt;minLat=pt.lat;}
if(maxLng===false||pt.lng>maxLng){maxLngPt=pt;maxLng=pt.lng;}
if(minLng===false||pt.lng<minLng){minLngPt=pt;minLng=pt.lng;}}
if(minLat!==maxLat){minPt=minLatPt;maxPt=maxLatPt;}else{minPt=minLngPt;maxPt=maxLngPt;}
var ch=[].concat(this.buildConvexHull([minPt,maxPt],latLngs),this.buildConvexHull([maxPt,minPt],latLngs));return ch;}};}());L.MarkerCluster.include({getConvexHull:function(){var childMarkers=this.getAllChildMarkers(),points=[],p,i;for(i=childMarkers.length-1;i>=0;i--){p=childMarkers[i].getLatLng();points.push(p);}
return L.QuickHull.getConvexHull(points);}});L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied===this||this._group._inZoomAnimation){return;}
var childMarkers=this.getAllChildMarkers(null,true),group=this._group,map=group._map,center=map.latLngToLayerPoint(this._latlng),positions;this._group._unspiderfy();this._group._spiderfied=this;if(childMarkers.length>=this._circleSpiralSwitchover){positions=this._generatePointsSpiral(childMarkers.length,center);}else{center.y+=10;positions=this._generatePointsCircle(childMarkers.length,center);}
this._animationSpiderfy(childMarkers,positions);},unspiderfy:function(zoomDetails){if(this._group._inZoomAnimation){return;}
this._animationUnspiderfy(zoomDetails);this._group._spiderfied=null;},_generatePointsCircle:function(count,centerPt){var circumference=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+count),legLength=circumference/this._2PI,angleStep=this._2PI/count,res=[],i,angle;legLength=Math.max(legLength,35);res.length=count;for(i=0;i<count;i++){angle=this._circleStartAngle+i*angleStep;res[i]=new L.Point(centerPt.x+legLength*Math.cos(angle),centerPt.y+legLength*Math.sin(angle))._round();}
return res;},_generatePointsSpiral:function(count,centerPt){var spiderfyDistanceMultiplier=this._group.options.spiderfyDistanceMultiplier,legLength=spiderfyDistanceMultiplier*this._spiralLengthStart,separation=spiderfyDistanceMultiplier*this._spiralFootSeparation,lengthFactor=spiderfyDistanceMultiplier*this._spiralLengthFactor*this._2PI,angle=0,res=[],i;res.length=count;for(i=count;i>=0;i--){if(i<count){res[i]=new L.Point(centerPt.x+legLength*Math.cos(angle),centerPt.y+legLength*Math.sin(angle))._round();}
angle+=separation/legLength+i*0.0005;legLength+=lengthFactor/angle;}
return res;},_noanimationUnspiderfy:function(){var group=this._group,map=group._map,fg=group._featureGroup,childMarkers=this.getAllChildMarkers(null,true),m,i;group._ignoreMove=true;this.setOpacity(1);for(i=childMarkers.length-1;i>=0;i--){m=childMarkers[i];fg.removeLayer(m);if(m._preSpiderfyLatlng){m.setLatLng(m._preSpiderfyLatlng);delete m._preSpiderfyLatlng;}
if(m.setZIndexOffset){m.setZIndexOffset(0);}
if(m._spiderLeg){map.removeLayer(m._spiderLeg);delete m._spiderLeg;}}
group.fire('unspiderfied',{cluster:this,markers:childMarkers});group._ignoreMove=false;group._spiderfied=null;}});L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(childMarkers,positions){var group=this._group,map=group._map,fg=group._featureGroup,legOptions=this._group.options.spiderLegPolylineOptions,i,m,leg,newPos;group._ignoreMove=true;for(i=0;i<childMarkers.length;i++){newPos=map.layerPointToLatLng(positions[i]);m=childMarkers[i];leg=new L.Polyline([this._latlng,newPos],legOptions);map.addLayer(leg);m._spiderLeg=leg;m._preSpiderfyLatlng=m._latlng;m.setLatLng(newPos);if(m.setZIndexOffset){m.setZIndexOffset(1000000);}
fg.addLayer(m);}
this.setOpacity(0.3);group._ignoreMove=false;group.fire('spiderfied',{cluster:this,markers:childMarkers});},_animationUnspiderfy:function(){this._noanimationUnspiderfy();}});L.MarkerCluster.include({_animationSpiderfy:function(childMarkers,positions){var me=this,group=this._group,map=group._map,fg=group._featureGroup,thisLayerLatLng=this._latlng,thisLayerPos=map.latLngToLayerPoint(thisLayerLatLng),svg=L.Path.SVG,legOptions=L.extend({},this._group.options.spiderLegPolylineOptions),finalLegOpacity=legOptions.opacity,i,m,leg,legPath,legLength,newPos;if(finalLegOpacity===undefined){finalLegOpacity=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity;}
if(svg){legOptions.opacity=0;legOptions.className=(legOptions.className||'')+' leaflet-cluster-spider-leg';}else{legOptions.opacity=finalLegOpacity;}
group._ignoreMove=true;for(i=0;i<childMarkers.length;i++){m=childMarkers[i];newPos=map.layerPointToLatLng(positions[i]);leg=new L.Polyline([thisLayerLatLng,newPos],legOptions);map.addLayer(leg);m._spiderLeg=leg;if(svg){legPath=leg._path;legLength=legPath.getTotalLength()+0.1;legPath.style.strokeDasharray=legLength;legPath.style.strokeDashoffset=legLength;}
if(m.setZIndexOffset){m.setZIndexOffset(1000000);}
if(m.clusterHide){m.clusterHide();}
fg.addLayer(m);if(m._setPos){m._setPos(thisLayerPos);}}
group._forceLayout();group._animationStart();for(i=childMarkers.length-1;i>=0;i--){newPos=map.layerPointToLatLng(positions[i]);m=childMarkers[i];m._preSpiderfyLatlng=m._latlng;m.setLatLng(newPos);if(m.clusterShow){m.clusterShow();}
if(svg){leg=m._spiderLeg;legPath=leg._path;legPath.style.strokeDashoffset=0;leg.setStyle({opacity:finalLegOpacity});}}
this.setOpacity(0.3);group._ignoreMove=false;setTimeout(function(){group._animationEnd();group.fire('spiderfied',{cluster:me,markers:childMarkers});},200);},_animationUnspiderfy:function(zoomDetails){var me=this,group=this._group,map=group._map,fg=group._featureGroup,thisLayerPos=zoomDetails?map._latLngToNewLayerPoint(this._latlng,zoomDetails.zoom,zoomDetails.center):map.latLngToLayerPoint(this._latlng),childMarkers=this.getAllChildMarkers(null,true),svg=L.Path.SVG,m,i,leg,legPath,legLength,nonAnimatable;group._ignoreMove=true;group._animationStart();this.setOpacity(1);for(i=childMarkers.length-1;i>=0;i--){m=childMarkers[i];if(!m._preSpiderfyLatlng){continue;}
m.closePopup();m.setLatLng(m._preSpiderfyLatlng);delete m._preSpiderfyLatlng;nonAnimatable=true;if(m._setPos){m._setPos(thisLayerPos);nonAnimatable=false;}
if(m.clusterHide){m.clusterHide();nonAnimatable=false;}
if(nonAnimatable){fg.removeLayer(m);}
if(svg){leg=m._spiderLeg;legPath=leg._path;legLength=legPath.getTotalLength()+0.1;legPath.style.strokeDashoffset=legLength;leg.setStyle({opacity:0});}}
group._ignoreMove=false;setTimeout(function(){var stillThereChildCount=0;for(i=childMarkers.length-1;i>=0;i--){m=childMarkers[i];if(m._spiderLeg){stillThereChildCount++;}}
for(i=childMarkers.length-1;i>=0;i--){m=childMarkers[i];if(!m._spiderLeg){continue;}
if(m.clusterShow){m.clusterShow();}
if(m.setZIndexOffset){m.setZIndexOffset(0);}
if(stillThereChildCount>1){fg.removeLayer(m);}
map.removeLayer(m._spiderLeg);delete m._spiderLeg;}
group._animationEnd();group.fire('unspiderfied',{cluster:me,markers:childMarkers});},200);}});L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments);},_spiderfierOnAdd:function(){this._map.on('click',this._unspiderfyWrapper,this);if(this._map.options.zoomAnimation){this._map.on('zoomstart',this._unspiderfyZoomStart,this);}
this._map.on('zoomend',this._noanimationUnspiderfy,this);if(!L.Browser.touch){this._map.getRenderer(this);}},_spiderfierOnRemove:function(){this._map.off('click',this._unspiderfyWrapper,this);this._map.off('zoomstart',this._unspiderfyZoomStart,this);this._map.off('zoomanim',this._unspiderfyZoomAnim,this);this._map.off('zoomend',this._noanimationUnspiderfy,this);this._noanimationUnspiderfy();},_unspiderfyZoomStart:function(){if(!this._map){return;}
this._map.on('zoomanim',this._unspiderfyZoomAnim,this);},_unspiderfyZoomAnim:function(zoomDetails){if(L.DomUtil.hasClass(this._map._mapPane,'leaflet-touching')){return;}
this._map.off('zoomanim',this._unspiderfyZoomAnim,this);this._unspiderfy(zoomDetails);},_unspiderfyWrapper:function(){this._unspiderfy();},_unspiderfy:function(zoomDetails){if(this._spiderfied){this._spiderfied.unspiderfy(zoomDetails);}},_noanimationUnspiderfy:function(){if(this._spiderfied){this._spiderfied._noanimationUnspiderfy();}},_unspiderfyLayer:function(layer){if(layer._spiderLeg){this._featureGroup.removeLayer(layer);if(layer.clusterShow){layer.clusterShow();}
if(layer.setZIndexOffset){layer.setZIndexOffset(0);}
this._map.removeLayer(layer._spiderLeg);delete layer._spiderLeg;}}});L.MarkerClusterGroup.include({refreshClusters:function(layers){if(!layers){layers=this._topClusterLevel.getAllChildMarkers();}else if(layers instanceof L.MarkerClusterGroup){layers=layers._topClusterLevel.getAllChildMarkers();}else if(layers instanceof L.LayerGroup){layers=layers._layers;}else if(layers instanceof L.MarkerCluster){layers=layers.getAllChildMarkers();}else if(layers instanceof L.Marker){layers=[layers];}
this._flagParentsIconsNeedUpdate(layers);this._refreshClustersIcons();if(this.options.singleMarkerMode){this._refreshSingleMarkerModeMarkers(layers);}
return this;},_flagParentsIconsNeedUpdate:function(layers){var id,parent;for(id in layers){parent=layers[id].__parent;while(parent){parent._iconNeedsUpdate=true;parent=parent.__parent;}}},_refreshSingleMarkerModeMarkers:function(layers){var id,layer;for(id in layers){layer=layers[id];if(this.hasLayer(layer)){layer.setIcon(this._overrideMarkerIcon(layer));}}}});L.Marker.include({refreshIconOptions:function(options,directlyRefreshClusters){var icon=this.options.icon;L.setOptions(icon,options);this.setIcon(icon);if(directlyRefreshClusters&&this.__parent){this.__parent._group.refreshClusters(this);}
return this;}});exports.MarkerClusterGroup=MarkerClusterGroup;exports.MarkerCluster=MarkerCluster;})));
//

/* esri-leaflet - v2.3.1 - Thu Oct 10 2019 14:43:44 GMT-0500 (Central Daylight Time)
 * Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("leaflet")):"function"==typeof define&&define.amd?define(["exports","leaflet"],e):e((t.L=t.L||{},t.L.esri={}),t.L)}(this,function(t,e){"use strict";var i=window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest,s=""===document.documentElement.style.pointerEvents,r={cors:i,pointerEvents:s},n={attributionWidthOffset:55},o=0;function a(t){var e="";for(var i in t.f=t.f||"json",t)if(t.hasOwnProperty(i)){var s,r=t[i],n=Object.prototype.toString.call(r);e.length&&(e+="&"),s="[object Array]"===n?"[object Object]"===Object.prototype.toString.call(r[0])?JSON.stringify(r):r.join(","):"[object Object]"===n?JSON.stringify(r):"[object Date]"===n?r.valueOf():r,e+=encodeURIComponent(i)+"="+encodeURIComponent(s)}return e}function u(t,i){var s=new window.XMLHttpRequest;return s.onerror=function(r){s.onreadystatechange=e.Util.falseFn,t.call(i,{error:{code:500,message:"XMLHttpRequest error"}},null)},s.onreadystatechange=function(){var r,n;if(4===s.readyState){try{r=JSON.parse(s.responseText)}catch(t){r=null,n={code:500,message:"Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error."}}!n&&r.error&&(n=r.error,r=null),s.onerror=e.Util.falseFn,t.call(i,n,r)}},s.ontimeout=function(){this.onerror()},s}function l(t,e,i,s){var r=u(i,s);return r.open("POST",t),void 0!==s&&null!==s&&void 0!==s.options&&(r.timeout=s.options.timeout),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.send(a(e)),r}function h(t,e,i,s){var r=u(i,s);return r.open("GET",t+"?"+a(e),!0),void 0!==s&&null!==s&&void 0!==s.options&&(r.timeout=s.options.timeout),r.send(null),r}function p(t,e,i,s){var n=a(e),o=u(i,s),l=(t+"?"+n).length;if(l<=2e3&&r.cors?o.open("GET",t+"?"+n):l>2e3&&r.cors&&(o.open("POST",t),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")),void 0!==s&&null!==s&&void 0!==s.options&&(o.timeout=s.options.timeout),l<=2e3&&r.cors)o.send(null);else{if(!(l>2e3&&r.cors))return l<=2e3&&!r.cors?c(t,e,i,s):void q("a request to "+t+" was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html");o.send(n)}return o}function c(t,i,s,r){window._EsriLeafletCallbacks=window._EsriLeafletCallbacks||{};var n="c"+o;i.callback="window._EsriLeafletCallbacks."+n,window._EsriLeafletCallbacks[n]=function(t){if(!0!==window._EsriLeafletCallbacks[n]){var e,i=Object.prototype.toString.call(t);"[object Object]"!==i&&"[object Array]"!==i&&(e={error:{code:500,message:"Expected array or object as JSONP response"}},t=null),!e&&t.error&&(e=t,t=null),s.call(r,e,t),window._EsriLeafletCallbacks[n]=!0}};var u=e.DomUtil.create("script",null,document.body);return u.type="text/javascript",u.src=t+"?"+a(i),u.id=n,u.onerror=function(t){if(t&&!0!==window._EsriLeafletCallbacks[n]){s.call(r,{error:{code:500,message:"An unknown error occurred"}}),window._EsriLeafletCallbacks[n]=!0}},e.DomUtil.addClass(u,"esri-leaflet-jsonp"),o++,{id:n,url:u.src,abort:function(){window._EsriLeafletCallbacks._callback[n]({code:0,message:"Request aborted."})}}}var m=r.cors?h:c;m.CORS=h,m.JSONP=c;var d={request:p,get:m,post:l};function f(t){return function(t,e){for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}(t[0],t[t.length-1])||t.push(t[0]),t}function y(t){for(var e,i=0,s=0,r=t.length,n=t[s];s<r-1;s++)i+=((e=t[s+1])[0]-n[0])*(e[1]+n[1]),n=e;return i>=0}function g(t,e,i,s){var r=(s[0]-i[0])*(t[1]-i[1])-(s[1]-i[1])*(t[0]-i[0]),n=(e[0]-t[0])*(t[1]-i[1])-(e[1]-t[1])*(t[0]-i[0]),o=(s[1]-i[1])*(e[0]-t[0])-(s[0]-i[0])*(e[1]-t[1]);if(0!==o){var a=r/o,u=n/o;if(a>=0&&a<=1&&u>=0&&u<=1)return!0}return!1}function v(t,e){for(var i=0;i<t.length-1;i++)for(var s=0;s<e.length-1;s++)if(g(t[i],t[i+1],e[s],e[s+1]))return!0;return!1}function _(t,e){var i=v(t,e),s=function(t,e){for(var i=!1,s=-1,r=t.length,n=r-1;++s<r;n=s)(t[s][1]<=e[1]&&e[1]<t[n][1]||t[n][1]<=e[1]&&e[1]<t[s][1])&&e[0]<(t[n][0]-t[s][0])*(e[1]-t[s][1])/(t[n][1]-t[s][1])+t[s][0]&&(i=!i);return i}(t,e[0]);return!(i||!s)}function b(t){var e=[],i=t.slice(0),s=f(i.shift().slice(0));if(s.length>=4){y(s)||s.reverse(),e.push(s);for(var r=0;r<i.length;r++){var n=f(i[r].slice(0));n.length>=4&&(y(n)&&n.reverse(),e.push(n))}}return e}function x(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function S(t,e){var i={};if(t.features){i.type="FeatureCollection",i.features=[];for(var s=0;s<t.features.length;s++)i.features.push(S(t.features[s],e))}if("number"==typeof t.x&&"number"==typeof t.y&&(i.type="Point",i.coordinates=[t.x,t.y],"number"==typeof t.z&&i.coordinates.push(t.z)),t.points&&(i.type="MultiPoint",i.coordinates=t.points.slice(0)),t.paths&&(1===t.paths.length?(i.type="LineString",i.coordinates=t.paths[0].slice(0)):(i.type="MultiLineString",i.coordinates=t.paths.slice(0))),t.rings&&(i=function(t){for(var e,i,s=[],r=[],n=0;n<t.length;n++){var o=f(t[n].slice(0));if(!(o.length<4))if(y(o)){var a=[o.slice().reverse()];s.push(a)}else r.push(o.slice().reverse())}for(var u=[];r.length;){i=r.pop();var l=!1;for(e=s.length-1;e>=0;e--)if(_(s[e][0],i)){s[e].push(i),l=!0;break}l||u.push(i)}for(;u.length;){i=u.pop();var h=!1;for(e=s.length-1;e>=0;e--)if(v(s[e][0],i)){s[e].push(i),h=!0;break}h||s.push([i.reverse()])}return 1===s.length?{type:"Polygon",coordinates:s[0]}:{type:"MultiPolygon",coordinates:s}}(t.rings.slice(0))),"number"==typeof t.xmin&&"number"==typeof t.ymin&&"number"==typeof t.xmax&&"number"==typeof t.ymax&&(i.type="Polygon",i.coordinates=[[[t.xmax,t.ymax],[t.xmin,t.ymax],[t.xmin,t.ymin],[t.xmax,t.ymin],[t.xmax,t.ymax]]]),(t.geometry||t.attributes)&&(i.type="Feature",i.geometry=t.geometry?S(t.geometry):null,i.properties=t.attributes?x(t.attributes):null,t.attributes))try{i.id=function(t,e){for(var i=e?[e,"OBJECTID","FID"]:["OBJECTID","FID"],s=0;s<i.length;s++){var r=i[s];if(r in t&&("string"==typeof t[r]||"number"==typeof t[r]))return t[r]}throw Error("No valid id attribute found")}(t.attributes,e)}catch(t){}return JSON.stringify(i.geometry)===JSON.stringify({})&&(i.geometry=null),t.spatialReference&&t.spatialReference.wkid&&4326!==t.spatialReference.wkid&&console.warn("Object converted in non-standard crs - "+JSON.stringify(t.spatialReference)),i}function I(t,e){e=e||"OBJECTID";var i,s={wkid:4326},r={};switch(t.type){case"Point":r.x=t.coordinates[0],r.y=t.coordinates[1],r.spatialReference=s;break;case"MultiPoint":r.points=t.coordinates.slice(0),r.spatialReference=s;break;case"LineString":r.paths=[t.coordinates.slice(0)],r.spatialReference=s;break;case"MultiLineString":r.paths=t.coordinates.slice(0),r.spatialReference=s;break;case"Polygon":r.rings=b(t.coordinates.slice(0)),r.spatialReference=s;break;case"MultiPolygon":r.rings=function(t){for(var e=[],i=0;i<t.length;i++)for(var s=b(t[i]),r=s.length-1;r>=0;r--){var n=s[r].slice(0);e.push(n)}return e}(t.coordinates.slice(0)),r.spatialReference=s;break;case"Feature":t.geometry&&(r.geometry=I(t.geometry,e)),r.attributes=t.properties?x(t.properties):{},t.id&&(r.attributes[e]=t.id);break;case"FeatureCollection":for(r=[],i=0;i<t.features.length;i++)r.push(I(t.features[i],e));break;case"GeometryCollection":for(r=[],i=0;i<t.geometries.length;i++)r.push(I(t.geometries[i],e))}return r}function A(t,e){return I(t,e)}function T(t,e){return S(t,e)}function w(t){if("NaN"!==t.xmin&&"NaN"!==t.ymin&&"NaN"!==t.xmax&&"NaN"!==t.ymax){var i=e.latLng(t.ymin,t.xmin),s=e.latLng(t.ymax,t.xmax);return e.latLngBounds(i,s)}return null}function R(t){return{xmin:(t=e.latLngBounds(t)).getSouthWest().lng,ymin:t.getSouthWest().lat,xmax:t.getNorthEast().lng,ymax:t.getNorthEast().lat,spatialReference:{wkid:4326}}}var O=/^(OBJECTID|FID|OID|ID)$/i;function P(t){var e;if(t.objectIdFieldName)e=t.objectIdFieldName;else if(t.fields){for(var i=0;i<=t.fields.length-1;i++)if("esriFieldTypeOID"===t.fields[i].type){e=t.fields[i].name;break}if(!e)for(i=0;i<=t.fields.length-1;i++)if(t.fields[i].name.match(O)){e=t.fields[i].name;break}}return e}function C(t){for(var e in t.attributes)if(e.match(O))return e}function F(t,e){var i,s=t.features||t.results,r=s.length;i=e||P(t);var n={type:"FeatureCollection",features:[]};if(r)for(var o=s.length-1;o>=0;o--){var a=T(s[o],i||C(s[o]));n.features.push(a)}return n}function U(t){return"/"!==(t=e.Util.trim(t))[t.length-1]&&(t+="/"),t}function k(t){if(-1!==t.url.indexOf("?")){t.requestParams=t.requestParams||{};var e=t.url.substring(t.url.indexOf("?")+1);t.url=t.url.split("?")[0],t.requestParams=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}return t.url=U(t.url.split("?")[0]),t}function G(t){return/^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(t)}function M(t){var e;switch(t){case"Point":e="esriGeometryPoint";break;case"MultiPoint":e="esriGeometryMultipoint";break;case"LineString":case"MultiLineString":e="esriGeometryPolyline";break;case"Polygon":case"MultiPolygon":e="esriGeometryPolygon"}return e}function q(){console&&console.warn&&console.warn.apply(console,arguments)}function D(t){return t.getSize().x-n.attributionWidthOffset+"px"}function E(t){if(t.attributionControl&&!t.attributionControl._esriAttributionAdded){t.attributionControl.setPrefix('<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Powered by <a href="https://www.esri.com">Esri</a>');var i=document.createElement("style");i.type="text/css",i.innerHTML=".esri-truncated-attribution:hover {white-space: normal;}",document.getElementsByTagName("head")[0].appendChild(i),e.DomUtil.addClass(t.attributionControl._container,"esri-truncated-attribution:hover");var s=document.createElement("style");s.type="text/css",s.innerHTML=".esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: "+D(t)+";}",document.getElementsByTagName("head")[0].appendChild(s),e.DomUtil.addClass(t.attributionControl._container,"esri-truncated-attribution"),t.on("resize",function(e){t.attributionControl._container.style.maxWidth=D(e.target)}),t.attributionControl._esriAttributionAdded=!0}}function z(t){var i={geometry:null,geometryType:null};return t instanceof e.LatLngBounds?(i.geometry=R(t),i.geometryType="esriGeometryEnvelope",i):(t.getLatLng&&(t=t.getLatLng()),t instanceof e.LatLng&&(t={type:"Point",coordinates:[t.lng,t.lat]}),t instanceof e.GeoJSON&&(t=t.getLayers()[0].feature.geometry,i.geometry=A(t),i.geometryType=M(t.type)),t.toGeoJSON&&(t=t.toGeoJSON()),"Feature"===t.type&&(t=t.geometry),"Point"===t.type||"LineString"===t.type||"Polygon"===t.type||"MultiPolygon"===t.type?(i.geometry=A(t),i.geometryType=M(t.type),i):void q("invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object"))}function B(t,i){r.cors&&p(t,{},e.Util.bind(function(t,s){if(!t){i._esriAttributions=[];for(var r=0;r<s.contributors.length;r++)for(var n=s.contributors[r],o=0;o<n.coverageAreas.length;o++){var a=n.coverageAreas[o],u=e.latLng(a.bbox[0],a.bbox[1]),l=e.latLng(a.bbox[2],a.bbox[3]);i._esriAttributions.push({attribution:n.attribution,score:a.score,bounds:e.latLngBounds(u,l),minZoom:a.zoomMin,maxZoom:a.zoomMax})}i._esriAttributions.sort(function(t,e){return e.score-t.score}),N({target:i})}},this))}function N(t){var i=t.target,s=i._esriAttributions;if(i&&i.attributionControl){var r=i.attributionControl._container.querySelector(".esri-dynamic-attribution");if(r&&s){for(var n="",o=i.getBounds(),a=e.latLngBounds(o.getSouthWest().wrap(),o.getNorthEast().wrap()),u=i.getZoom(),l=0;l<s.length;l++){var h=s[l],p=h.attribution;!n.match(p)&&h.bounds.intersects(a)&&u>=h.minZoom&&u<=h.maxZoom&&(n+=", "+p)}n=n.substr(2),r.innerHTML=n,r.style.maxWidth=D(i),i.fire("attributionupdated",{attribution:n})}}}var Z={warn:q,cleanUrl:U,getUrlParams:k,isArcgisOnline:G,geojsonTypeToArcGIS:M,responseToFeatureCollection:F,geojsonToArcGIS:A,arcgisToGeoJSON:T,boundsToExtent:R,extentToBounds:w,calcAttributionWidth:D,setEsriAttribution:E,_setGeometry:z,_getAttributionData:B,_updateMapAttribution:N,_findIdAttributeFromFeature:C,_findIdAttributeFromResponse:P},j=e.Class.extend({options:{proxy:!1,useCors:i},generateSetter:function(t,i){return e.Util.bind(function(e){return this.params[t]=e,this},i)},initialize:function(t){if(t.request&&t.options?(this._service=t,e.Util.setOptions(this,t.options)):(e.Util.setOptions(this,t),this.options.url=U(t.url)),this.params=e.Util.extend({},this.params||{}),this.setters)for(var i in this.setters){var s=this.setters[i];this[i]=this.generateSetter(s,this)}},token:function(t){return this._service?this._service.authenticate(t):this.params.token=t,this},format:function(t){return this.params.returnUnformattedValues=!t,this},request:function(t,i){return this.options.requestParams&&e.Util.extend(this.params,this.options.requestParams),this._service?this._service.request(this.path,this.params,t,i):this._request("request",this.path,this.params,t,i)},_request:function(t,e,i,s,r){var n=this.options.proxy?this.options.proxy+"?"+this.options.url+e:this.options.url+e;return"get"!==t&&"request"!==t||this.options.useCors?d[t](n,i,s,r):d.get.JSONP(n,i,s,r)}});var W=j.extend({setters:{offset:"resultOffset",limit:"resultRecordCount",fields:"outFields",precision:"geometryPrecision",featureIds:"objectIds",returnGeometry:"returnGeometry",returnM:"returnM",transform:"datumTransformation",token:"token"},path:"query",params:{returnGeometry:!0,where:"1=1",outSR:4326,outFields:"*"},within:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelContains",this},intersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelIntersects",this},contains:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelWithin",this},crosses:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelCrosses",this},touches:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelTouches",this},overlaps:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelOverlaps",this},bboxIntersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelEnvelopeIntersects",this},indexIntersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelIndexIntersects",this},nearby:function(t,i){return t=e.latLng(t),this.params.geometry=[t.lng,t.lat],this.params.geometryType="esriGeometryPoint",this.params.spatialRel="esriSpatialRelIntersects",this.params.units="esriSRUnit_Meter",this.params.distance=i,this.params.inSr=4326,this},where:function(t){return this.params.where=t,this},between:function(t,e){return this.params.time=[t.valueOf(),e.valueOf()],this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},orderBy:function(t,e){return e=e||"ASC",this.params.orderByFields=this.params.orderByFields?this.params.orderByFields+",":"",this.params.orderByFields+=[t,e].join(" "),this},run:function(t,e){return this._cleanParams(),this.options.isModern||G(this.options.url)?(this.params.f="geojson",this.request(function(i,s){this._trapSQLerrors(i),t.call(e,i,s,s)},this)):this.request(function(i,s){this._trapSQLerrors(i),t.call(e,i,s&&F(s),s)},this)},count:function(t,e){return this._cleanParams(),this.params.returnCountOnly=!0,this.request(function(e,i){t.call(this,e,i&&i.count,i)},e)},ids:function(t,e){return this._cleanParams(),this.params.returnIdsOnly=!0,this.request(function(e,i){t.call(this,e,i&&i.objectIds,i)},e)},bounds:function(t,e){return this._cleanParams(),this.params.returnExtentOnly=!0,this.request(function(i,s){s&&s.extent&&w(s.extent)?t.call(e,i,w(s.extent),s):(i={message:"Invalid Bounds"},t.call(e,i,null,s))},e)},distinct:function(){return this.params.returnGeometry=!1,this.params.returnDistinctValues=!0,this},pixelSize:function(t){var i=e.point(t);return this.params.pixelSize=[i.x,i.y],this},layer:function(t){return this.path=t+"/query",this},_trapSQLerrors:function(t){t&&"400"===t.code&&q("one common syntax error in query requests is encasing string values in double quotes instead of single quotes")},_cleanParams:function(){delete this.params.returnIdsOnly,delete this.params.returnExtentOnly,delete this.params.returnCountOnly},_setGeometryParams:function(t){this.params.inSr=4326;var e=z(t);this.params.geometry=e.geometry,this.params.geometryType=e.geometryType}});function J(t){return new W(t)}var Q=j.extend({setters:{contains:"contains",text:"searchText",fields:"searchFields",spatialReference:"sr",sr:"sr",layers:"layers",returnGeometry:"returnGeometry",maxAllowableOffset:"maxAllowableOffset",precision:"geometryPrecision",dynamicLayers:"dynamicLayers",returnZ:"returnZ",returnM:"returnM",gdbVersion:"gdbVersion",token:"token"},path:"find",params:{sr:4326,contains:!0,returnGeometry:!0,returnZ:!0,returnM:!1},layerDefs:function(t,e){return this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"",this.params.layerDefs+=[t,e].join(":"),this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},run:function(t,e){return this.request(function(i,s){t.call(e,i,s&&F(s),s)},e)}});function V(t){return new Q(t)}var H=j.extend({path:"identify",between:function(t,e){return this.params.time=[t.valueOf(),e.valueOf()],this}});var K=H.extend({setters:{layers:"layers",precision:"geometryPrecision",tolerance:"tolerance",returnGeometry:"returnGeometry"},params:{sr:4326,layers:"all",tolerance:10,returnGeometry:!0},on:function(t){var e=R(t.getBounds()),i=t.getSize();return this.params.imageDisplay=[i.x,i.y,96],this.params.mapExtent=[e.xmin,e.ymin,e.xmax,e.ymax],this},at:function(t){return 2===t.length&&(t=e.latLng(t)),this._setGeometryParams(t),this},layerDef:function(t,e){return this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"",this.params.layerDefs+=[t,e].join(":"),this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},run:function(t,e){return this.request(function(i,s){if(i)t.call(e,i,void 0,s);else{var r=F(s);s.results=s.results.reverse();for(var n=0;n<r.features.length;n++){r.features[n].layerId=s.results[n].layerId}t.call(e,void 0,r,s)}})},_setGeometryParams:function(t){var e=z(t);this.params.geometry=e.geometry,this.params.geometryType=e.geometryType}});function X(t){return new K(t)}var Y=H.extend({setters:{setMosaicRule:"mosaicRule",setRenderingRule:"renderingRule",setPixelSize:"pixelSize",returnCatalogItems:"returnCatalogItems",returnGeometry:"returnGeometry"},params:{returnGeometry:!1},at:function(t){return t=e.latLng(t),this.params.geometry=JSON.stringify({x:t.lng,y:t.lat,spatialReference:{wkid:4326}}),this.params.geometryType="esriGeometryPoint",this},getMosaicRule:function(){return this.params.mosaicRule},getRenderingRule:function(){return this.params.renderingRule},getPixelSize:function(){return this.params.pixelSize},run:function(t,e){return this.request(function(i,s){t.call(e,i,s&&this._responseToGeoJSON(s),s)},this)},_responseToGeoJSON:function(t){var e=t.location,i=t.catalogItems,s=t.catalogItemVisibilities,r={pixel:{type:"Feature",geometry:{type:"Point",coordinates:[e.x,e.y]},crs:{type:"EPSG",properties:{code:e.spatialReference.wkid}},properties:{OBJECTID:t.objectId,name:t.name,value:t.value},id:t.objectId}};if(t.properties&&t.properties.Values&&(r.pixel.properties.values=t.properties.Values),i&&i.features&&(r.catalogItems=F(i),s&&s.length===r.catalogItems.features.length))for(var n=s.length-1;n>=0;n--)r.catalogItems.features[n].properties.catalogItemVisibility=s[n];return r}});function $(t){return new Y(t)}var tt=e.Evented.extend({options:{proxy:!1,useCors:i,timeout:0},initialize:function(t){t=t||{},this._requestQueue=[],this._authenticating=!1,e.Util.setOptions(this,t),this.options.url=U(this.options.url)},get:function(t,e,i,s){return this._request("get",t,e,i,s)},post:function(t,e,i,s){return this._request("post",t,e,i,s)},request:function(t,e,i,s){return this._request("request",t,e,i,s)},metadata:function(t,e){return this._request("get","",{},t,e)},authenticate:function(t){return this._authenticating=!1,this.options.token=t,this._runQueue(),this},getTimeout:function(){return this.options.timeout},setTimeout:function(t){this.options.timeout=t},_request:function(t,i,s,r,n){this.fire("requeststart",{url:this.options.url+i,params:s,method:t},!0);var o=this._createServiceCallback(t,i,s,r,n);if(this.options.token&&(s.token=this.options.token),this.options.requestParams&&e.Util.extend(s,this.options.requestParams),!this._authenticating){var a=this.options.proxy?this.options.proxy+"?"+this.options.url+i:this.options.url+i;return"get"!==t&&"request"!==t||this.options.useCors?d[t](a,s,o,n):d.get.JSONP(a,s,o,n)}this._requestQueue.push([t,i,s,r,n])},_createServiceCallback:function(t,i,s,r,n){return e.Util.bind(function(o,a){!o||499!==o.code&&498!==o.code||(this._authenticating=!0,this._requestQueue.push([t,i,s,r,n]),this.fire("authenticationrequired",{authenticate:e.Util.bind(this.authenticate,this)},!0),o.authenticate=e.Util.bind(this.authenticate,this)),r.call(n,o,a),o?this.fire("requesterror",{url:this.options.url+i,params:s,message:o.message,code:o.code,method:t},!0):this.fire("requestsuccess",{url:this.options.url+i,params:s,response:a,method:t},!0),this.fire("requestend",{url:this.options.url+i,params:s,method:t},!0)},this)},_runQueue:function(){for(var t=this._requestQueue.length-1;t>=0;t--){var e=this._requestQueue[t];this[e.shift()].apply(this,e)}this._requestQueue=[]}});var et=tt.extend({identify:function(){return X(this)},find:function(){return V(this)},query:function(){return J(this)}});function it(t){return new et(t)}var st=tt.extend({query:function(){return J(this)},identify:function(){return $(this)}});function rt(t){return new st(t)}var nt=tt.extend({options:{idAttribute:"OBJECTID"},query:function(){return J(this)},addFeature:function(t,e,i){this.addFeatures(t,e,i)},addFeatures:function(t,e,i){for(var s=t.features?t.features:[t],r=s.length-1;r>=0;r--)delete s[r].id;return t=A(t),t=s.length>1?t:[t],this.post("addFeatures",{features:t},function(t,s){var r=s&&s.addResults?s.addResults.length>1?s.addResults:s.addResults[0]:void 0;e&&e.call(i,t||s.addResults[0].error,r)},i)},updateFeature:function(t,e,i){this.updateFeatures(t,e,i)},updateFeatures:function(t,e,i){var s=t.features?t.features:[t];return t=A(t,this.options.idAttribute),t=s.length>1?t:[t],this.post("updateFeatures",{features:t},function(t,s){var r=s&&s.updateResults?s.updateResults.length>1?s.updateResults:s.updateResults[0]:void 0;e&&e.call(i,t||s.updateResults[0].error,r)},i)},deleteFeature:function(t,e,i){this.deleteFeatures(t,e,i)},deleteFeatures:function(t,e,i){return this.post("deleteFeatures",{objectIds:t},function(t,s){var r=s&&s.deleteResults?s.deleteResults.length>1?s.deleteResults:s.deleteResults[0]:void 0;e&&e.call(i,t||s.deleteResults[0].error,r)},i)}});function ot(t){return new nt(t)}var at="https:"!==window.location.protocol?"http:":"https:",ut=e.TileLayer.extend({statics:{TILES:{Streets:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/World_Street_Map"}},Topographic:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/World_Topo_Map"}},Oceans:{urlTemplate:at+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/Ocean_Basemap"}},OceansLabels:{urlTemplate:at+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},NationalGeographic:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."}},DarkGray:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"}},DarkGrayLabels:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Gray:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"}},GrayLabels:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Imagery:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:22,maxNativeZoom:22,downsampled:!1,subdomains:["server","services"],attribution:"DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",attributionUrl:"https://static.arcgis.com/attribution/World_Imagery"}},ImageryLabels:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},ImageryTransportation:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},ShadedRelief:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"USGS"}},ShadedReliefLabels:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:12,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Terrain:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"USGS, NOAA"}},TerrainLabels:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},USATopo:{urlTemplate:at+"//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:15,subdomains:["server","services"],attribution:"USGS, National Geographic Society, i-cubed"}},ImageryClarity:{urlTemplate:at+"//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"}},Physical:{urlTemplate:at+"//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:8,subdomains:["server","services"],attribution:"U.S. National Park Service"}},ImageryFirefly:{urlTemplate:at+"//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",attributionUrl:"https://static.arcgis.com/attribution/World_Imagery"}}}},initialize:function(t,i){var s;if("object"==typeof t&&t.urlTemplate&&t.options)s=t;else{if("string"!=typeof t||!ut.TILES[t])throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"');s=ut.TILES[t]}var r=e.Util.extend(s.options,i);e.Util.setOptions(this,r),this.options.token&&-1===s.urlTemplate.indexOf("token=")&&(s.urlTemplate+="?token="+this.options.token),this.options.proxy&&(s.urlTemplate=this.options.proxy+"?"+s.urlTemplate),e.TileLayer.prototype.initialize.call(this,s.urlTemplate,r)},onAdd:function(t){E(t),"esri-labels"===this.options.pane&&this._initPane(),this.options.attributionUrl&&B((this.options.proxy?this.options.proxy+"?":"")+this.options.attributionUrl,t),t.on("moveend",N),-1!==this._url.indexOf("World_Imagery")&&t.on("zoomanim",lt,this),e.TileLayer.prototype.onAdd.call(this,t)},onRemove:function(t){t.off("moveend",N),e.TileLayer.prototype.onRemove.call(this,t)},_initPane:function(){if(!this._map.getPane(this.options.pane)){var t=this._map.createPane(this.options.pane);t.style.pointerEvents="none",t.style.zIndex=500}},getAttribution:function(){if(this.options.attribution)var t='<span class="esri-dynamic-attribution">'+this.options.attribution+"</span>";return t}});function lt(t){var i=t.target;if(i){var s=i.getZoom(),r=t.zoom,n=i.wrapLatLng(t.center);if(r>s&&r>13&&!this.options.downsampled){var o=i.project(n,r).divideBy(256).floor(),a=e.Util.template(this._url,e.Util.extend({s:this._getSubdomain(o),x:o.x,y:o.y,z:r},this.options)).replace(/tile/,"tilemap")+"/8/8";L.esri.request(a,{},function(t,e){if(!t)for(var i=0;i<e.data.length;i++){if(!e.data[i]){this.options.maxNativeZoom=r-1,this.options.downsampled=!0;break}this.options.maxNativeZoom=22}},this)}else r<13&&(this.options.downsampled=!1)}}var ht=e.TileLayer.extend({options:{zoomOffsetAllowance:.1,errorTileUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg=="},statics:{MercatorZoomLevels:{0:156543.033928,1:78271.5169639999,2:39135.7584820001,3:19567.8792409999,4:9783.93962049996,5:4891.96981024998,6:2445.98490512499,7:1222.99245256249,8:611.49622628138,9:305.748113140558,10:152.874056570411,11:76.4370282850732,12:38.2185141425366,13:19.1092570712683,14:9.55462853563415,15:4.77731426794937,16:2.38865713397468,17:1.19432856685505,18:.597164283559817,19:.298582141647617,20:.14929107082381,21:.07464553541191,22:.0373227677059525,23:.0186613838529763}},initialize:function(t){t=k(t=e.Util.setOptions(this,t)),this.tileUrl=(t.proxy?t.proxy+"?":"")+t.url+"tile/{z}/{y}/{x}"+(t.requestParams&&Object.keys(t.requestParams).length>0?e.Util.getParamString(t.requestParams):""),-1!==t.url.indexOf("{s}")&&t.subdomains&&(t.url=t.url.replace("{s}",t.subdomains[0])),this.service=it(t),this.service.addEventParent(this),new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url)&&(this.tileUrl=this.tileUrl.replace("://tiles","://tiles{s}"),t.subdomains=["1","2","3","4"]),this.options.token&&(this.tileUrl+="?token="+this.options.token),e.TileLayer.prototype.initialize.call(this,this.tileUrl,t)},getTileUrl:function(t){var i=this._getZoomForUrl();return e.Util.template(this.tileUrl,e.Util.extend({s:this._getSubdomain(t),x:t.x,y:t.y,z:this._lodMap&&this._lodMap[i]?this._lodMap[i]:i},this.options))},createTile:function(t,i){var s=document.createElement("img");return e.DomEvent.on(s,"load",e.Util.bind(this._tileOnLoad,this,i,s)),e.DomEvent.on(s,"error",e.Util.bind(this._tileOnError,this,i,s)),this.options.crossOrigin&&(s.crossOrigin=""),s.alt="",!this._lodMap||this._lodMap&&this._lodMap[this._getZoomForUrl()]?s.src=this.getTileUrl(t):this.once("lodmap",function(){s.src=this.getTileUrl(t)},this),s},onAdd:function(t){E(t),this._lodMap||this.metadata(function(i,s){if(!i&&s.spatialReference){var r=s.spatialReference.latestWkid||s.spatialReference.wkid;if(!this.options.attribution&&t.attributionControl&&s.copyrightText&&(this.options.attribution=s.copyrightText,t.attributionControl.addAttribution(this.getAttribution())),t.options.crs!==e.CRS.EPSG3857||102100!==r&&3857!==r)t.options.crs&&t.options.crs.code&&t.options.crs.code.indexOf(r)>-1||q("L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html");else{this._lodMap={};for(var n=s.tileInfo.lods,o=ht.MercatorZoomLevels,a=0;a<n.length;a++){var u=n[a];for(var l in o){var h=o[l];if(this._withinPercentage(u.resolution,h,this.options.zoomOffsetAllowance)){this._lodMap[l]=u.level;break}}}this.fire("lodmap")}}},this),e.TileLayer.prototype.onAdd.call(this,t)},metadata:function(t,e){return this.service.metadata(t,e),this},identify:function(){return this.service.identify()},find:function(){return this.service.find()},query:function(){return this.service.query()},authenticate:function(t){var e="?token="+t;return this.tileUrl=this.options.token?this.tileUrl.replace(/\?token=(.+)/g,e):this.tileUrl+e,this.options.token=t,this.service.authenticate(t),this},_withinPercentage:function(t,e,i){return Math.abs(t/e-1)<i}});var pt=e.ImageOverlay.extend({onAdd:function(t){this._topLeft=t.getPixelBounds().min,e.ImageOverlay.prototype.onAdd.call(this,t)},_reset:function(){this._map.options.crs===e.CRS.EPSG3857?e.ImageOverlay.prototype._reset.call(this):e.DomUtil.setPosition(this._image,this._topLeft.subtract(this._map.getPixelOrigin()))}}),ct=e.Layer.extend({options:{opacity:1,position:"front",f:"image",useCors:i,attribution:null,interactive:!1,alt:""},onAdd:function(t){E(t),this.options.zIndex&&(this.options.position=null),this._update=e.Util.throttle(this._update,this.options.updateInterval,this),t.on("moveend",this._update,this),this._currentImage&&this._currentImage._bounds.equals(this._map.getBounds())?t.addLayer(this._currentImage):this._currentImage&&(this._map.removeLayer(this._currentImage),this._currentImage=null),this._update(),this._popup&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this.metadata(function(e,i){!e&&!this.options.attribution&&t.attributionControl&&i.copyrightText&&(this.options.attribution=i.copyrightText,t.attributionControl.addAttribution(this.getAttribution()))},this)},onRemove:function(t){this._currentImage&&this._map.removeLayer(this._currentImage),this._popup&&(this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._map.off("moveend",this._update,this)},bindPopup:function(t,i){return this._shouldRenderPopup=!1,this._lastClick=!1,this._popup=e.popup(i),this._popupFunction=t,this._map&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this},unbindPopup:function(){return this._map&&(this._map.closePopup(this._popup),this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._popup=!1,this},bringToFront:function(){return this.options.position="front",this._currentImage&&(this._currentImage.bringToFront(),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this.options.position="back",this._currentImage&&(this._currentImage.bringToBack(),this._setAutoZIndex(Math.min)),this},setZIndex:function(t){return this.options.zIndex=t,this._currentImage&&this._currentImage.setZIndex(t),this},_setAutoZIndex:function(t){if(this._currentImage){for(var e,i=this._currentImage.getPane().children,s=-t(-1/0,1/0),r=0,n=i.length;r<n;r++)e=i[r].style.zIndex,i[r]!==this._currentImage._image&&e&&(s=t(s,+e));isFinite(s)&&(this.options.zIndex=s+t(-1,1),this.setZIndex(this.options.zIndex))}},getAttribution:function(){return this.options.attribution},getOpacity:function(){return this.options.opacity},setOpacity:function(t){return this.options.opacity=t,this._currentImage&&this._currentImage.setOpacity(t),this},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(t,e){return this.options.from=t,this.options.to=e,this._update(),this},metadata:function(t,e){return this.service.metadata(t,e),this},authenticate:function(t){return this.service.authenticate(t),this},redraw:function(){this._update()},_renderImage:function(t,e,i){if(this._map){if(i&&(t="data:"+i+";base64,"+t),!t)return;var s=new pt(t,e,{opacity:0,crossOrigin:this.options.useCors,alt:this.options.alt,pane:this.options.pane||this.getPane(),interactive:this.options.interactive}).addTo(this._map),r=function(t){if(s.off("error",r,this),this._map){var i=t.target,n=this._currentImage;i._bounds.equals(e)&&i._bounds.equals(this._map.getBounds())?(this._currentImage=i,"front"===this.options.position?this.bringToFront():"back"===this.options.position&&this.bringToBack(),this.options.zIndex&&this.setZIndex(this.options.zIndex),this._map&&this._currentImage._map?this._currentImage.setOpacity(this.options.opacity):this._currentImage._map.removeLayer(this._currentImage),n&&this._map&&this._map.removeLayer(n),n&&n._map&&n._map.removeLayer(n)):this._map.removeLayer(i)}this.fire("load",{bounds:e})};s.once("error",function(){this._map.removeLayer(s),this.fire("error"),s.off("load",r,this)},this),s.once("load",r,this)}},_update:function(){if(this._map){var t=this._map.getZoom(),i=this._map.getBounds();if(!(this._animatingZoom||this._map._panTransition&&this._map._panTransition._inProgress))if(t>this.options.maxZoom||t<this.options.minZoom)this._currentImage&&(this._currentImage._map.removeLayer(this._currentImage),this._currentImage=null);else{var s=this._buildExportParams();e.Util.extend(s,this.options.requestParams),s?(this._requestExport(s,i),this.fire("loading",{bounds:i})):this._currentImage&&(this._currentImage._map.removeLayer(this._currentImage),this._currentImage=null)}}},_renderPopup:function(t,i,s,r){if(t=e.latLng(t),this._shouldRenderPopup&&this._lastClick.equals(t)){var n=this._popupFunction(i,s,r);n&&this._popup.setLatLng(t).setContent(n).openOn(this._map)}},_resetPopupState:function(t){this._shouldRenderPopup=!1,this._lastClick=t.latlng},_calculateBbox:function(){var t=this._map.getPixelBounds(),i=this._map.unproject(t.getBottomLeft()),s=this._map.unproject(t.getTopRight()),r=this._map.options.crs.project(s),n=this._map.options.crs.project(i),o=e.bounds(r,n);return[o.getBottomLeft().x,o.getBottomLeft().y,o.getTopRight().x,o.getTopRight().y].join(",")},_calculateImageSize:function(){var t=this._map.getPixelBounds(),e=this._map.getSize(),i=this._map.unproject(t.getBottomLeft()),s=this._map.unproject(t.getTopRight()),r=this._map.latLngToLayerPoint(s).y,n=this._map.latLngToLayerPoint(i).y;return(r>0||n<e.y)&&(e.y=n-r),e.x+","+e.y}}),mt=ct.extend({options:{updateInterval:150,format:"jpgpng",transparent:!0,f:"image"},query:function(){return this.service.query()},identify:function(){return this.service.identify()},initialize:function(t){t=k(t),this.service=rt(t),this.service.addEventParent(this),e.Util.setOptions(this,t)},setPixelType:function(t){return this.options.pixelType=t,this._update(),this},getPixelType:function(){return this.options.pixelType},setBandIds:function(t){return e.Util.isArray(t)?this.options.bandIds=t.join(","):this.options.bandIds=t.toString(),this._update(),this},getBandIds:function(){return this.options.bandIds},setNoData:function(t,i){return e.Util.isArray(t)?this.options.noData=t.join(","):this.options.noData=t.toString(),i&&(this.options.noDataInterpretation=i),this._update(),this},getNoData:function(){return this.options.noData},getNoDataInterpretation:function(){return this.options.noDataInterpretation},setRenderingRule:function(t){this.options.renderingRule=t,this._update()},getRenderingRule:function(){return this.options.renderingRule},setMosaicRule:function(t){this.options.mosaicRule=t,this._update()},getMosaicRule:function(){return this.options.mosaicRule},_getPopupData:function(t){var i=e.Util.bind(function(i,s,r){i||setTimeout(e.Util.bind(function(){this._renderPopup(t.latlng,i,s,r)},this),300)},this),s=this.identify().at(t.latlng);this.options.mosaicRule&&s.setMosaicRule(this.options.mosaicRule),s.run(i),this._shouldRenderPopup=!0,this._lastClick=t.latlng},_buildExportParams:function(){var t=parseInt(this._map.options.crs.code.split(":")[1],10),e={bbox:this._calculateBbox(),size:this._calculateImageSize(),format:this.options.format,transparent:this.options.transparent,bboxSR:t,imageSR:t};return this.options.from&&this.options.to&&(e.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this.options.pixelType&&(e.pixelType=this.options.pixelType),this.options.interpolation&&(e.interpolation=this.options.interpolation),this.options.compressionQuality&&(e.compressionQuality=this.options.compressionQuality),this.options.bandIds&&(e.bandIds=this.options.bandIds),(0===this.options.noData||this.options.noData)&&(e.noData=this.options.noData),this.options.noDataInterpretation&&(e.noDataInterpretation=this.options.noDataInterpretation),this.service.options.token&&(e.token=this.service.options.token),this.options.renderingRule&&(e.renderingRule=JSON.stringify(this.options.renderingRule)),this.options.mosaicRule&&(e.mosaicRule=JSON.stringify(this.options.mosaicRule)),e},_requestExport:function(t,i){"json"===this.options.f?this.service.request("exportImage",t,function(t,e){t||(this.options.token&&(e.href+="?token="+this.options.token),this.options.proxy&&(e.href=this.options.proxy+"?"+e.href),this._renderImage(e.href,i))},this):(t.f="image",this._renderImage(this.options.url+"exportImage"+e.Util.getParamString(t),i))}});var dt=ct.extend({options:{updateInterval:150,layers:!1,layerDefs:!1,timeOptions:!1,format:"png24",transparent:!0,f:"json"},initialize:function(t){t=k(t),this.service=it(t),this.service.addEventParent(this),(t.proxy||t.token)&&"json"!==t.f&&(t.f="json"),e.Util.setOptions(this,t)},getDynamicLayers:function(){return this.options.dynamicLayers},setDynamicLayers:function(t){return this.options.dynamicLayers=t,this._update(),this},getLayers:function(){return this.options.layers},setLayers:function(t){return this.options.layers=t,this._update(),this},getLayerDefs:function(){return this.options.layerDefs},setLayerDefs:function(t){return this.options.layerDefs=t,this._update(),this},getTimeOptions:function(){return this.options.timeOptions},setTimeOptions:function(t){return this.options.timeOptions=t,this._update(),this},query:function(){return this.service.query()},identify:function(){return this.service.identify()},find:function(){return this.service.find()},_getPopupData:function(t){var i,s=e.Util.bind(function(i,s,r){i||setTimeout(e.Util.bind(function(){this._renderPopup(t.latlng,i,s,r)},this),300)},this);if((i=this.options.popup?this.options.popup.on(this._map).at(t.latlng):this.identify().on(this._map).at(t.latlng)).params.maxAllowableOffset||i.simplify(this._map,.5),this.options.popup&&this.options.popup.params&&this.options.popup.params.layers||(this.options.layers?i.layers("visible:"+this.options.layers.join(",")):i.layers("visible")),this.options.layerDefs&&"string"!=typeof this.options.layerDefs&&!i.params.layerDefs)for(var r in this.options.layerDefs)this.options.layerDefs.hasOwnProperty(r)&&i.layerDef(r,this.options.layerDefs[r]);i.run(s),this._shouldRenderPopup=!0,this._lastClick=t.latlng},_buildExportParams:function(){var t=parseInt(this._map.options.crs.code.split(":")[1],10),e={bbox:this._calculateBbox(),size:this._calculateImageSize(),dpi:96,format:this.options.format,transparent:this.options.transparent,bboxSR:t,imageSR:t};if(this.options.dynamicLayers&&(e.dynamicLayers=this.options.dynamicLayers),this.options.layers){if(0===this.options.layers.length)return;e.layers="show:"+this.options.layers.join(",")}return this.options.layerDefs&&(e.layerDefs="string"==typeof this.options.layerDefs?this.options.layerDefs:JSON.stringify(this.options.layerDefs)),this.options.timeOptions&&(e.timeOptions=JSON.stringify(this.options.timeOptions)),this.options.from&&this.options.to&&(e.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this.service.options.token&&(e.token=this.service.options.token),this.options.proxy&&(e.proxy=this.options.proxy),this.options.disableCache&&(e._ts=Date.now()),e},_requestExport:function(t,i){"json"===this.options.f?this.service.request("export",t,function(t,e){t||(this.options.token&&e.href&&(e.href+="?token="+this.options.token),this.options.proxy&&e.href&&(e.href=this.options.proxy+"?"+e.href),e.href?this._renderImage(e.href,i):this._renderImage(e.imageData,i,e.contentType))},this):(t.f="image",this._renderImage(this.options.url+"export"+e.Util.getParamString(t),i))}});var ft=e.Layer.extend({options:{cellSize:512,updateInterval:150},initialize:function(t){t=e.setOptions(this,t),this._zooming=!1},onAdd:function(t){this._map=t,this._update=e.Util.throttle(this._update,this.options.updateInterval,this),this._reset(),this._update()},onRemove:function(){this._map.removeEventListener(this.getEvents(),this),this._removeCells()},getEvents:function(){return{moveend:this._update,zoomstart:this._zoomstart,zoomend:this._reset}},addTo:function(t){return t.addLayer(this),this},removeFrom:function(t){return t.removeLayer(this),this},_zoomstart:function(){this._zooming=!0},_reset:function(){this._removeCells(),this._cells={},this._activeCells={},this._cellsToLoad=0,this._cellsTotal=0,this._cellNumBounds=this._getCellNumBounds(),this._resetWrap(),this._zooming=!1},_resetWrap:function(){var t=this._map,e=t.options.crs;if(!e.infinite){var i=this._getCellSize();e.wrapLng&&(this._wrapLng=[Math.floor(t.project([0,e.wrapLng[0]]).x/i),Math.ceil(t.project([0,e.wrapLng[1]]).x/i)]),e.wrapLat&&(this._wrapLat=[Math.floor(t.project([e.wrapLat[0],0]).y/i),Math.ceil(t.project([e.wrapLat[1],0]).y/i)])}},_getCellSize:function(){return this.options.cellSize},_update:function(){if(this._map){var t=this._map.getPixelBounds(),i=this._getCellSize(),s=e.bounds(t.min.divideBy(i).floor(),t.max.divideBy(i).floor());this._removeOtherCells(s),this._addCells(s),this.fire("cellsupdated")}},_addCells:function(t){var i,s,r,n=[],o=t.getCenter(),a=this._map.getZoom();for(i=t.min.y;i<=t.max.y;i++)for(s=t.min.x;s<=t.max.x;s++)(r=e.point(s,i)).z=a,this._isValidCell(r)&&n.push(r);var u=n.length;if(0!==u)for(this._cellsToLoad+=u,this._cellsTotal+=u,n.sort(function(t,e){return t.distanceTo(o)-e.distanceTo(o)}),s=0;s<u;s++)this._addCell(n[s])},_isValidCell:function(t){var i=this._map.options.crs;if(!i.infinite){var s=this._cellNumBounds;if(!s)return!1;if(!i.wrapLng&&(t.x<s.min.x||t.x>s.max.x)||!i.wrapLat&&(t.y<s.min.y||t.y>s.max.y))return!1}if(!this.options.bounds)return!0;var r=this._cellCoordsToBounds(t);return e.latLngBounds(this.options.bounds).intersects(r)},_cellCoordsToBounds:function(t){var i=this._map,s=this.options.cellSize,r=t.multiplyBy(s),n=r.add([s,s]),o=i.wrapLatLng(i.unproject(r,t.z)),a=i.wrapLatLng(i.unproject(n,t.z));return e.latLngBounds(o,a)},_cellCoordsToKey:function(t){return t.x+":"+t.y},_keyToCellCoords:function(t){var i=t.split(":"),s=parseInt(i[0],10),r=parseInt(i[1],10);return e.point(s,r)},_removeOtherCells:function(t){for(var e in this._cells)t.contains(this._keyToCellCoords(e))||this._removeCell(e)},_removeCell:function(t){var e=this._activeCells[t];e&&(delete this._activeCells[t],this.cellLeave&&this.cellLeave(e.bounds,e.coords),this.fire("cellleave",{bounds:e.bounds,coords:e.coords}))},_removeCells:function(){for(var t in this._cells){var e=this._cells[t].bounds,i=this._cells[t].coords;this.cellLeave&&this.cellLeave(e,i),this.fire("cellleave",{bounds:e,coords:i})}},_addCell:function(t){this._wrapCoords(t);var e=this._cellCoordsToKey(t),i=this._cells[e];i&&!this._activeCells[e]&&(this.cellEnter&&this.cellEnter(i.bounds,t),this.fire("cellenter",{bounds:i.bounds,coords:t}),this._activeCells[e]=i),i||(i={coords:t,bounds:this._cellCoordsToBounds(t)},this._cells[e]=i,this._activeCells[e]=i,this.createCell&&this.createCell(i.bounds,t),this.fire("cellcreate",{bounds:i.bounds,coords:t}))},_wrapCoords:function(t){t.x=this._wrapLng?e.Util.wrapNum(t.x,this._wrapLng):t.x,t.y=this._wrapLat?e.Util.wrapNum(t.y,this._wrapLat):t.y},_getCellNumBounds:function(){var t=this._map.getPixelWorldBounds(),i=this._getCellSize();return t?e.bounds(t.min.divideBy(i).floor(),t.max.divideBy(i).ceil().subtract([1,1])):null}});function yt(t){this.values=[].concat(t||[])}yt.prototype.query=function(t){var e=this.getIndex(t);return this.values[e]},yt.prototype.getIndex=function(t){this.dirty&&this.sort();for(var e,i,s=0,r=this.values.length-1;s<=r;)if(e=(s+r)/2|0,+(i=this.values[Math.round(e)]).value<+t)s=e+1;else{if(!(+i.value>+t))return e;r=e-1}return Math.abs(~r)},yt.prototype.between=function(t,e){var i=this.getIndex(t),s=this.getIndex(e);if(0===i&&0===s)return[];for(;this.values[i-1]&&this.values[i-1].value===t;)i--;for(;this.values[s+1]&&this.values[s+1].value===e;)s++;return this.values[s]&&this.values[s].value===e&&this.values[s+1]&&s++,this.values.slice(i,s)},yt.prototype.insert=function(t){return this.values.splice(this.getIndex(t.value),0,t),this},yt.prototype.bulkAdd=function(t,e){return this.values=this.values.concat([].concat(t||[])),e?this.sort():this.dirty=!0,this},yt.prototype.sort=function(){return this.values.sort(function(t,e){return+e.value-+t.value}).reverse(),this.dirty=!1,this};var gt=ft.extend({options:{attribution:null,where:"1=1",fields:["*"],from:!1,to:!1,timeField:!1,timeFilterMode:"server",simplifyFactor:0,precision:6},initialize:function(t){if(ft.prototype.initialize.call(this,t),t=k(t),t=e.Util.setOptions(this,t),this.service=ot(t),this.service.addEventParent(this),"*"!==this.options.fields[0]){for(var i=!1,s=0;s<this.options.fields.length;s++)this.options.fields[s].match(/^(OBJECTID|FID|OID|ID)$/i)&&(i=!0);!1===i&&q("no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.")}this.options.timeField.start&&this.options.timeField.end?(this._startTimeIndex=new yt,this._endTimeIndex=new yt):this.options.timeField&&(this._timeIndex=new yt),this._cache={},this._currentSnapshot=[],this._activeRequests=0},onAdd:function(t){return E(t),this.service.metadata(function(e,i){if(!e){var s=i.supportedQueryFormats,r=!1;!1===this.service.options.isModern&&(r=!0),!r&&s&&-1!==s.indexOf("geoJSON")&&(this.service.options.isModern=!0),i.objectIdField&&(this.service.options.idAttribute=i.objectIdField),!this.options.attribution&&t.attributionControl&&i.copyrightText&&(this.options.attribution=i.copyrightText,t.attributionControl.addAttribution(this.getAttribution()))}},this),t.on("zoomend",this._handleZoomChange,this),ft.prototype.onAdd.call(this,t)},onRemove:function(t){return t.off("zoomend",this._handleZoomChange,this),ft.prototype.onRemove.call(this,t)},getAttribution:function(){return this.options.attribution},createCell:function(t,e){this._visibleZoom()&&this._requestFeatures(t,e)},_requestFeatures:function(t,i,s){return this._activeRequests++,1===this._activeRequests&&this.fire("loading",{bounds:t},!0),this._buildQuery(t).run(function(r,n,o){o&&o.exceededTransferLimit&&this.fire("drawlimitexceeded"),!r&&n&&n.features.length&&e.Util.requestAnimFrame(e.Util.bind(function(){this._addFeatures(n.features,i),this._postProcessFeatures(t)},this)),r||!n||n.features.length||this._postProcessFeatures(t),r&&this._postProcessFeatures(t),s&&s.call(this,r,n)},this)},_postProcessFeatures:function(t){this._activeRequests--,this._activeRequests<=0&&this.fire("load",{bounds:t})},_cacheKey:function(t){return t.z+":"+t.x+":"+t.y},_addFeatures:function(t,e){var i=this._cacheKey(e);this._cache[i]=this._cache[i]||[];for(var s=t.length-1;s>=0;s--){var r=t[s].id;-1===this._currentSnapshot.indexOf(r)&&this._currentSnapshot.push(r),-1===this._cache[i].indexOf(r)&&this._cache[i].push(r)}this.options.timeField&&this._buildTimeIndexes(t),this.createLayers(t)},_buildQuery:function(t){var i=this.service.query().intersects(t).where(this.options.where).fields(this.options.fields).precision(this.options.precision);return this.options.requestParams&&e.Util.extend(i.params,this.options.requestParams),this.options.simplifyFactor&&i.simplify(this._map,this.options.simplifyFactor),"server"===this.options.timeFilterMode&&this.options.from&&this.options.to&&i.between(this.options.from,this.options.to),i},setWhere:function(t,i,s){this.options.where=t&&t.length?t:"1=1";for(var r=[],n=[],o=0,a=null,u=e.Util.bind(function(t,u){if(t&&(a=t),u)for(var l=u.features.length-1;l>=0;l--)n.push(u.features[l].id);--o<=0&&this._visibleZoom()&&(this._currentSnapshot=n,e.Util.requestAnimFrame(e.Util.bind(function(){this.removeLayers(r),this.addLayers(n),i&&i.call(s,a)},this)))},this),l=this._currentSnapshot.length-1;l>=0;l--)r.push(this._currentSnapshot[l]);for(var h in this._activeCells){o++;var p=this._keyToCellCoords(h),c=this._cellCoordsToBounds(p);this._requestFeatures(c,h,u)}return this},getWhere:function(){return this.options.where},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(t,i,s,r){var n=this.options.from,o=this.options.to,a=0,u=null,l=e.Util.bind(function(e){e&&(u=e),this._filterExistingFeatures(n,o,t,i),a--,s&&a<=0&&s.call(r,u)},this);if(this.options.from=t,this.options.to=i,this._filterExistingFeatures(n,o,t,i),"server"===this.options.timeFilterMode)for(var h in this._activeCells){a++;var p=this._keyToCellCoords(h),c=this._cellCoordsToBounds(p);this._requestFeatures(c,h,l)}return this},refresh:function(){for(var t in this._activeCells){var e=this._keyToCellCoords(t),i=this._cellCoordsToBounds(e);this._requestFeatures(i,t)}this.redraw&&this.once("load",function(){this.eachFeature(function(t){this._redraw(t.feature.id)},this)},this)},_filterExistingFeatures:function(t,i,s,r){var n=t&&i?this._getFeaturesInTimeRange(t,i):this._currentSnapshot,o=this._getFeaturesInTimeRange(s,r);if(o.indexOf)for(var a=0;a<o.length;a++){var u=n.indexOf(o[a]);u>=0&&n.splice(u,1)}e.Util.requestAnimFrame(e.Util.bind(function(){this.removeLayers(n),this.addLayers(o)},this))},_getFeaturesInTimeRange:function(t,e){var i,s=[];if(this.options.timeField.start&&this.options.timeField.end){var r=this._startTimeIndex.between(t,e),n=this._endTimeIndex.between(t,e);i=r.concat(n)}else{if(!this._timeIndex)return q("You must set timeField in the layer constructor in order to manipulate the start and end time filter."),[];i=this._timeIndex.between(t,e)}for(var o=i.length-1;o>=0;o--)s.push(i[o].id);return s},_buildTimeIndexes:function(t){var e,i;if(this.options.timeField.start&&this.options.timeField.end){var s=[],r=[];for(e=t.length-1;e>=0;e--)i=t[e],s.push({id:i.id,value:new Date(i.properties[this.options.timeField.start])}),r.push({id:i.id,value:new Date(i.properties[this.options.timeField.end])});this._startTimeIndex.bulkAdd(s),this._endTimeIndex.bulkAdd(r)}else{var n=[];for(e=t.length-1;e>=0;e--)i=t[e],n.push({id:i.id,value:new Date(i.properties[this.options.timeField])});this._timeIndex.bulkAdd(n)}},_featureWithinTimeRange:function(t){if(!this.options.from||!this.options.to)return!0;var e=+this.options.from.valueOf(),i=+this.options.to.valueOf();if("string"==typeof this.options.timeField){var s=+t.properties[this.options.timeField];return s>=e&&s<=i}if(this.options.timeField.start&&this.options.timeField.end){var r=+t.properties[this.options.timeField.start],n=+t.properties[this.options.timeField.end];return r>=e&&r<=i||n>=e&&n<=i}},_visibleZoom:function(){if(!this._map)return!1;var t=this._map.getZoom();return!(t>this.options.maxZoom||t<this.options.minZoom)},_handleZoomChange:function(){if(this._visibleZoom())for(var t in this._activeCells){var e=this._activeCells[t].coords,i=this._cacheKey(e);this._cache[i]&&this.addLayers(this._cache[i])}else this.removeLayers(this._currentSnapshot),this._currentSnapshot=[]},authenticate:function(t){return this.service.authenticate(t),this},metadata:function(t,e){return this.service.metadata(t,e),this},query:function(){return this.service.query()},_getMetadata:function(t){this._metadata?t(void 0,this._metadata):this.metadata(e.Util.bind(function(e,i){this._metadata=i,t(e,this._metadata)},this))},addFeature:function(t,e,i){this.addFeatures(t,e,i)},addFeatures:function(t,i,s){this._getMetadata(e.Util.bind(function(r,n){if(r)i&&i.call(this,r,null);else{var o=t.features?t.features:[t];this.service.addFeatures(t,e.Util.bind(function(t,e){if(!t){for(var r=o.length-1;r>=0;r--)o[r].properties[n.objectIdField]=o.length>1?e[r].objectId:e.objectId,o[r].id=o.length>1?e[r].objectId:e.objectId;this.createLayers(o)}i&&i.call(s,t,e)},this))}},this))},updateFeature:function(t,e,i){this.updateFeatures(t,e,i)},updateFeatures:function(t,e,i){var s=t.features?t.features:[t];this.service.updateFeatures(t,function(t,r){if(!t){for(var n=s.length-1;n>=0;n--)this.removeLayers([s[n].id],!0);this.createLayers(s)}e&&e.call(i,t,r)},this)},deleteFeature:function(t,e,i){this.deleteFeatures(t,e,i)},deleteFeatures:function(t,e,i){return this.service.deleteFeatures(t,function(t,s){var r=s.length?s:[s];if(!t&&r.length>0)for(var n=r.length-1;n>=0;n--)this.removeLayers([r[n].objectId],!0);e&&e.call(i,t,s)},this)}}),vt=gt.extend({options:{cacheLayers:!0},initialize:function(t){gt.prototype.initialize.call(this,t),this._originalStyle=this.options.style,this._layers={}},onRemove:function(t){for(var e in this._layers)t.removeLayer(this._layers[e]),this.fire("removefeature",{feature:this._layers[e].feature,permanent:!1},!0);return gt.prototype.onRemove.call(this,t)},createNewLayer:function(t){var i=e.GeoJSON.geometryToLayer(t,this.options);return i&&(i.defaultOptions=i.options),i},_updateLayer:function(t,i){var s=[],r=this.options.coordsToLatLng||e.GeoJSON.coordsToLatLng;switch(i.properties&&(t.feature.properties=i.properties),i.geometry.type){case"Point":s=e.GeoJSON.coordsToLatLng(i.geometry.coordinates),t.setLatLng(s);break;case"LineString":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,0,r),t.setLatLngs(s);break;case"MultiLineString":case"Polygon":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,1,r),t.setLatLngs(s);break;case"MultiPolygon":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,2,r),t.setLatLngs(s)}},createLayers:function(t){for(var e=t.length-1;e>=0;e--){var i,s=t[e],r=this._layers[s.id];!this._visibleZoom()||!r||this._map.hasLayer(r)||this.options.timeField&&!this._featureWithinTimeRange(s)||(this._map.addLayer(r),this.fire("addfeature",{feature:r.feature},!0)),r&&this.options.simplifyFactor>0&&(r.setLatLngs||r.setLatLng)&&this._updateLayer(r,s),r||((i=this.createNewLayer(s))?(i.feature=s,i.addEventParent(this),this.options.onEachFeature&&this.options.onEachFeature(i.feature,i),this._layers[i.feature.id]=i,this.setFeatureStyle(i.feature.id,this.options.style),this.fire("createfeature",{feature:i.feature},!0),this._visibleZoom()&&(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(s))&&this._map.addLayer(i)):q("invalid GeoJSON encountered"))}},addLayers:function(t){for(var e=t.length-1;e>=0;e--){var i=this._layers[t[e]];!i||this.options.timeField&&!this._featureWithinTimeRange(i.feature)||this._map.addLayer(i)}},removeLayers:function(t,e){for(var i=t.length-1;i>=0;i--){var s=t[i],r=this._layers[s];r&&(this.fire("removefeature",{feature:r.feature,permanent:e},!0),this._map.removeLayer(r)),r&&e&&delete this._layers[s]}},cellEnter:function(t,i){this._visibleZoom()&&!this._zooming&&this._map&&e.Util.requestAnimFrame(e.Util.bind(function(){var t=this._cacheKey(i),e=this._cellCoordsToKey(i),s=this._cache[t];this._activeCells[e]&&s&&this.addLayers(s)},this))},cellLeave:function(t,i){this._zooming||e.Util.requestAnimFrame(e.Util.bind(function(){if(this._map){var t=this._cacheKey(i),e=this._cellCoordsToKey(i),s=this._cache[t],r=this._map.getBounds();if(!this._activeCells[e]&&s){for(var n=!0,o=0;o<s.length;o++){var a=this._layers[s[o]];a&&a.getBounds&&r.intersects(a.getBounds())&&(n=!1)}n&&this.removeLayers(s,!this.options.cacheLayers),!this.options.cacheLayers&&n&&(delete this._cache[t],delete this._cells[e],delete this._activeCells[e])}}},this))},resetStyle:function(){return this.options.style=this._originalStyle,this.eachFeature(function(t){this.resetFeatureStyle(t.feature.id)},this),this},setStyle:function(t){return this.options.style=t,this.eachFeature(function(e){this.setFeatureStyle(e.feature.id,t)},this),this},resetFeatureStyle:function(t){var i=this._layers[t],s=this._originalStyle||e.Path.prototype.options;return i&&(e.Util.extend(i.options,i.defaultOptions),this.setFeatureStyle(t,s)),this},setFeatureStyle:function(t,e){var i=this._layers[t];return"function"==typeof e&&(e=e(i.feature)),i.setStyle&&i.setStyle(e),this},eachActiveFeature:function(t,e){if(this._map){var i=this._map.getBounds();for(var s in this._layers)-1!==this._currentSnapshot.indexOf(this._layers[s].feature.id)&&("function"==typeof this._layers[s].getLatLng&&i.contains(this._layers[s].getLatLng())?t.call(e,this._layers[s]):"function"==typeof this._layers[s].getBounds&&i.intersects(this._layers[s].getBounds())&&t.call(e,this._layers[s]))}return this},eachFeature:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getFeature:function(t){return this._layers[t]},bringToBack:function(){this.eachFeature(function(t){t.bringToBack&&t.bringToBack()})},bringToFront:function(){this.eachFeature(function(t){t.bringToFront&&t.bringToFront()})},redraw:function(t){return t&&this._redraw(t),this},_redraw:function(t){var i=this._layers[t],s=i.feature;if(i&&i.setIcon&&this.options.pointToLayer&&this.options.pointToLayer){var r=this.options.pointToLayer(s,e.latLng(s.geometry.coordinates[1],s.geometry.coordinates[0])).options.icon;i.setIcon(r)}if(i&&i.setStyle&&this.options.pointToLayer){var n=this.options.pointToLayer(s,e.latLng(s.geometry.coordinates[1],s.geometry.coordinates[0])).options;this.setFeatureStyle(s.id,n)}i&&i.setStyle&&this.options.style&&this.resetStyle(s.id)}});t.VERSION="2.3.1",t.Support=r,t.options=n,t.Util=Z,t.get=m,t.post=l,t.request=p,t.Task=j,t.task=function(t){return t=k(t),new j(t)},t.Query=W,t.query=J,t.Find=Q,t.find=V,t.Identify=H,t.identify=function(t){return new H(t)},t.IdentifyFeatures=K,t.identifyFeatures=X,t.IdentifyImage=Y,t.identifyImage=$,t.Service=tt,t.service=function(t){return t=k(t),new tt(t)},t.MapService=et,t.mapService=it,t.ImageService=st,t.imageService=rt,t.FeatureLayerService=nt,t.featureLayerService=ot,t.BasemapLayer=ut,t.basemapLayer=function(t,e){return new ut(t,e)},t.TiledMapLayer=ht,t.tiledMapLayer=function(t,e){return new ht(t,e)},t.RasterLayer=ct,t.ImageMapLayer=mt,t.imageMapLayer=function(t,e){return new mt(t,e)},t.DynamicMapLayer=dt,t.dynamicMapLayer=function(t,e){return new dt(t,e)},t.FeatureManager=gt,t.FeatureLayer=vt,t.featureLayer=function(t){return new vt(t)},Object.defineProperty(t,"__esModule",{value:!0})});

/* sorttable.js  */

/*
  SortTable
  version 2
  7th April 2007
  Stuart Langridge, http://www.kryogenix.org/code/browser/sorttable/
  
  Instructions:
  Download this file
  Add <script src="sorttable.js"></script> to your HTML
  Add class="sortable" to any table you'd like to make sortable
  Click on the headers to sort
  
  Thanks to many, many people for contributions and suggestions.
  Licenced as X11: http://www.kryogenix.org/code/browser/licence.html
  This basically means: do what you want with it.
*/
var stIsIE=false;var sorttable={init:function(){if(arguments.callee.done)return;arguments.callee.done=true;if(_timer)clearInterval(_timer);if(!document.createElement||!document.getElementsByTagName)return;sorttable.DATE_RE=/^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;forEach(document.getElementsByTagName('table'),function(table){if(table.className.search(/\bsortable\b/)!=-1){sorttable.makeSortable(table);}});},makeSortable:function(table){if(table.getElementsByTagName('thead').length==0){the=document.createElement('thead');the.appendChild(table.rows[0]);table.insertBefore(the,table.firstChild);}
if(table.tHead==null)table.tHead=table.getElementsByTagName('thead')[0];if(table.tHead.rows.length!=1)return;sortbottomrows=[];for(var i=0;i<table.rows.length;i++){if(table.rows[i].className.search(/\bsortbottom\b/)!=-1){sortbottomrows[sortbottomrows.length]=table.rows[i];}}
if(sortbottomrows){if(table.tFoot==null){tfo=document.createElement('tfoot');table.appendChild(tfo);}
for(var i=0;i<sortbottomrows.length;i++){tfo.appendChild(sortbottomrows[i]);}
delete sortbottomrows;}
headrow=table.tHead.rows[0].cells;for(var i=0;i<headrow.length;i++){if(!headrow[i].className.match(/\bsorttable_nosort\b/)){mtch=headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);if(mtch){override=mtch[1];}
if(mtch&&typeof sorttable["sort_"+override]=='function'){headrow[i].sorttable_sortfunction=sorttable["sort_"+override];}else{headrow[i].sorttable_sortfunction=sorttable.guessType(table,i);}
headrow[i].sorttable_columnindex=i;headrow[i].sorttable_tbody=table.tBodies[0];dean_addEvent(headrow[i],"click",function(e){if(this.className.search(/\bsorttable_sorted\b/)!=-1){sorttable.reverse(this.sorttable_tbody);this.className=this.className.replace('sorttable_sorted','sorttable_sorted_reverse');this.removeChild(document.getElementById('sorttable_sortfwdind'));sortrevind=document.createElement('span');sortrevind.id="sorttable_sortrevind";sortrevind.innerHTML=stIsIE?'&nbsp<font face="webdings">5</font>':'&nbsp;<span style="font-size: 16px">&#x25B4;</span>';this.appendChild(sortrevind);return;}
if(this.className.search(/\bsorttable_sorted_reverse\b/)!=-1){sorttable.reverse(this.sorttable_tbody);this.className=this.className.replace('sorttable_sorted_reverse','sorttable_sorted');this.removeChild(document.getElementById('sorttable_sortrevind'));sortfwdind=document.createElement('span');sortfwdind.id="sorttable_sortfwdind";sortfwdind.innerHTML=stIsIE?'&nbsp<font face="webdings">6</font>':'&nbsp;<span style="font-size: 16x">&#x25BE;</span>';this.appendChild(sortfwdind);return;}
theadrow=this.parentNode;forEach(theadrow.childNodes,function(cell){if(cell.nodeType==1){cell.className=cell.className.replace('sorttable_sorted_reverse','');cell.className=cell.className.replace('sorttable_sorted','');}});sortfwdind=document.getElementById('sorttable_sortfwdind');if(sortfwdind){sortfwdind.parentNode.removeChild(sortfwdind);}
sortrevind=document.getElementById('sorttable_sortrevind');if(sortrevind){sortrevind.parentNode.removeChild(sortrevind);}
this.className+=' sorttable_sorted';sortfwdind=document.createElement('span');sortfwdind.id="sorttable_sortfwdind";sortfwdind.innerHTML=stIsIE?'&nbsp<font face="webdings">6</font>':'&nbsp;<span style="font-size: 16px">&#x25BE;</span>';this.appendChild(sortfwdind);row_array=[];col=this.sorttable_columnindex;rows=this.sorttable_tbody.rows;for(var j=0;j<rows.length;j++){row_array[row_array.length]=[sorttable.getInnerText(rows[j].cells[col]),rows[j]];}
sorttable.shaker_sort(row_array,this.sorttable_sortfunction);row_array.reverse();tb=this.sorttable_tbody;for(var j=0;j<row_array.length;j++){tb.appendChild(row_array[j][1]);}
delete row_array;});}}},guessType:function(table,column){sortfn=sorttable.sort_alpha;for(var i=0;i<table.tBodies[0].rows.length;i++){text=sorttable.getInnerText(table.tBodies[0].rows[i].cells[column]);if(text!=''){if(text.match(/^-?[£$¤]?[\d,.]+%?$/)){return sorttable.sort_numeric;}
possdate=text.match(sorttable.DATE_RE)
if(possdate){first=parseInt(possdate[1]);second=parseInt(possdate[2]);if(first>12){return sorttable.sort_ddmm;}else if(second>12){return sorttable.sort_mmdd;}else{sortfn=sorttable.sort_ddmm;}}}}
return sortfn;},getInnerText:function(node){hasInputs=(typeof node.getElementsByTagName=='function')&&node.getElementsByTagName('input').length;if(node.getAttribute("sorttable_customkey")!=null){return node.getAttribute("sorttable_customkey");}
else if(typeof node.textContent!='undefined'&&!hasInputs){return node.textContent.replace(/^\s+|\s+$/g,'');}
else if(typeof node.innerText!='undefined'&&!hasInputs){return node.innerText.replace(/^\s+|\s+$/g,'');}
else if(typeof node.text!='undefined'&&!hasInputs){return node.text.replace(/^\s+|\s+$/g,'');}
else{switch(node.nodeType){case 3:if(node.nodeName.toLowerCase()=='input'){return node.value.replace(/^\s+|\s+$/g,'');}
case 4:return node.nodeValue.replace(/^\s+|\s+$/g,'');break;case 1:case 11:var innerText='';for(var i=0;i<node.childNodes.length;i++){innerText+=sorttable.getInnerText(node.childNodes[i]);}
return innerText.replace(/^\s+|\s+$/g,'');break;default:return'';}}},reverse:function(tbody){newrows=[];for(var i=0;i<tbody.rows.length;i++){newrows[newrows.length]=tbody.rows[i];}
for(var i=newrows.length-1;i>=0;i--){tbody.appendChild(newrows[i]);}
delete newrows;},sort_numeric:function(a,b){aa=parseFloat(a[0].replace(/[^0-9.-]/g,''));if(isNaN(aa))aa=0;bb=parseFloat(b[0].replace(/[^0-9.-]/g,''));if(isNaN(bb))bb=0;return aa-bb;},sort_alpha:function(a,b){if(a[0]==b[0])return 0;if(a[0]<b[0])return-1;return 1;},sort_ddmm:function(a,b){mtch=a[0].match(sorttable.DATE_RE);y=mtch[3];m=mtch[2];d=mtch[1];if(m.length==1)m='0'+m;if(d.length==1)d='0'+d;dt1=y+m+d;mtch=b[0].match(sorttable.DATE_RE);y=mtch[3];m=mtch[2];d=mtch[1];if(m.length==1)m='0'+m;if(d.length==1)d='0'+d;dt2=y+m+d;if(dt1==dt2)return 0;if(dt1<dt2)return-1;return 1;},sort_mmdd:function(a,b){mtch=a[0].match(sorttable.DATE_RE);y=mtch[3];d=mtch[2];m=mtch[1];if(m.length==1)m='0'+m;if(d.length==1)d='0'+d;dt1=y+m+d;mtch=b[0].match(sorttable.DATE_RE);y=mtch[3];d=mtch[2];m=mtch[1];if(m.length==1)m='0'+m;if(d.length==1)d='0'+d;dt2=y+m+d;if(dt1==dt2)return 0;if(dt1<dt2)return-1;return 1;},shaker_sort:function(list,comp_func){var b=0;var t=list.length-1;var swap=true;while(swap){swap=false;for(var i=b;i<t;++i){if(comp_func(list[i],list[i+1])>0){var q=list[i];list[i]=list[i+1];list[i+1]=q;swap=true;}}
t--;if(!swap)break;for(var i=t;i>b;--i){if(comp_func(list[i],list[i-1])<0){var q=list[i];list[i]=list[i-1];list[i-1]=q;swap=true;}}
b++;}}}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",sorttable.init,false);}
if(/WebKit/i.test(navigator.userAgent)){var _timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){sorttable.init();}},10);}
window.onload=sorttable.init;function dean_addEvent(element,type,handler){if(element.addEventListener){element.addEventListener(type,handler,false);}else{if(!handler.$$guid)handler.$$guid=dean_addEvent.guid++;if(!element.events)element.events={};var handlers=element.events[type];if(!handlers){handlers=element.events[type]={};if(element["on"+type]){handlers[0]=element["on"+type];}}
handlers[handler.$$guid]=handler;element["on"+type]=handleEvent;}};dean_addEvent.guid=1;function removeEvent(element,type,handler){if(element.removeEventListener){element.removeEventListener(type,handler,false);}else{if(element.events&&element.events[type]){delete element.events[type][handler.$$guid];}}};function handleEvent(event){var returnValue=true;event=event||fixEvent(((this.ownerDocument||this.document||this).parentWindow||window).event);var handlers=this.events[event.type];for(var i in handlers){this.$$handleEvent=handlers[i];if(this.$$handleEvent(event)===false){returnValue=false;}}
return returnValue;};function fixEvent(event){event.preventDefault=fixEvent.preventDefault;event.stopPropagation=fixEvent.stopPropagation;return event;};fixEvent.preventDefault=function(){this.returnValue=false;};fixEvent.stopPropagation=function(){this.cancelBubble=true;}
if(!Array.forEach){Array.forEach=function(array,block,context){for(var i=0;i<array.length;i++){block.call(context,array[i],i,array);}};}
Function.prototype.forEach=function(object,block,context){for(var key in object){if(typeof this.prototype[key]=="undefined"){block.call(context,object[key],key,object);}}};String.forEach=function(string,block,context){Array.forEach(string.split(""),function(chr,index){block.call(context,chr,index,string);});};var forEach=function(object,block,context){if(object){var resolve=Object;if(object instanceof Function){resolve=Function;}else if(object.forEach instanceof Function){object.forEach(block,context);return;}else if(typeof object=="string"){resolve=String;}else if(typeof object.length=="number"){resolve=Array;}
resolve.forEach(object,block,context);}};

/* esri-leaflet-renderers-debug.js */

/* esri-leaflet-renderers - v2.0.6 - Fri Jun 02 2017 10:33:20 GMT-0700 (PDT)
 * Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('leaflet'), require('esri-leaflet')) :
	typeof define === 'function' && define.amd ? define(['exports', 'leaflet', 'esri-leaflet'], factory) :
	(factory((global.L = global.L || {}, global.L.esri = global.L.esri || {}, global.L.esri.Renderers = global.L.esri.Renderers || {}),global.L,global.L.esri));
}(this, function (exports,L,Esri) { 'use strict';

	L = 'default' in L ? L['default'] : L;
	Esri = 'default' in Esri ? Esri['default'] : Esri;

	var version = "2.0.6";

	var Symbol = L.Class.extend({
	  initialize: function (symbolJson, options) {
	    this._symbolJson = symbolJson;
	    this.val = null;
	    this._styles = {};
	    this._isDefault = false;
	    this._layerTransparency = 1;
	    if (options && options.layerTransparency) {
	      this._layerTransparency = 1 - (options.layerTransparency / 100.0);
	    }
	  },

	  // the geojson values returned are in points
	  pixelValue: function (pointValue) {
	    return pointValue * 1.333;
	  },

	  // color is an array [r,g,b,a]
	  colorValue: function (color) {
	    return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
	  },

	  alphaValue: function (color) {
	    var alpha = color[3] / 255.0;
	    return alpha * this._layerTransparency;
	  },

	  getSize: function (feature, sizeInfo) {
	    var attr = feature.properties;
	    var field = sizeInfo.field;
	    var size = 0;
	    var featureValue = null;

	    if (field) {
	      featureValue = attr[field];
	      var minSize = sizeInfo.minSize;
	      var maxSize = sizeInfo.maxSize;
	      var minDataValue = sizeInfo.minDataValue;
	      var maxDataValue = sizeInfo.maxDataValue;
	      var featureRatio;
	      var normField = sizeInfo.normalizationField;
	      var normValue = attr ? parseFloat(attr[normField]) : undefined;

	      if (featureValue === null || (normField && ((isNaN(normValue) || normValue === 0)))) {
	        return null;
	      }

	      if (!isNaN(normValue)) {
	        featureValue /= normValue;
	      }

	      if (minSize !== null && maxSize !== null && minDataValue !== null && maxDataValue !== null) {
	        if (featureValue <= minDataValue) {
	          size = minSize;
	        } else if (featureValue >= maxDataValue) {
	          size = maxSize;
	        } else {
	          featureRatio = (featureValue - minDataValue) / (maxDataValue - minDataValue);
	          size = minSize + (featureRatio * (maxSize - minSize));
	        }
	      }
	      size = isNaN(size) ? 0 : size;
	    }
	    return size;
	  },

	  getColor: function (feature, colorInfo) {
	    // required information to get color
	    if (!(feature.properties && colorInfo && colorInfo.field && colorInfo.stops)) {
	      return null;
	    }

	    var attr = feature.properties;
	    var featureValue = attr[colorInfo.field];
	    var lowerBoundColor, upperBoundColor, lowerBound, upperBound;
	    var normField = colorInfo.normalizationField;
	    var normValue = attr ? parseFloat(attr[normField]) : undefined;
	    if (featureValue === null || (normField && ((isNaN(normValue) || normValue === 0)))) {
	      return null;
	    }

	    if (!isNaN(normValue)) {
	      featureValue /= normValue;
	    }

	    if (featureValue <= colorInfo.stops[0].value) {
	      return colorInfo.stops[0].color;
	    }
	    var lastStop = colorInfo.stops[colorInfo.stops.length - 1];
	    if (featureValue >= lastStop.value) {
	      return lastStop.color;
	    }

	    // go through the stops to find min and max
	    for (var i = 0; i < colorInfo.stops.length; i++) {
	      var stopInfo = colorInfo.stops[i];

	      if (stopInfo.value <= featureValue) {
	        lowerBoundColor = stopInfo.color;
	        lowerBound = stopInfo.value;
	      } else if (stopInfo.value > featureValue) {
	        upperBoundColor = stopInfo.color;
	        upperBound = stopInfo.value;
	        break;
	      }
	    }

	    // feature falls between two stops, interplate the colors
	    if (!isNaN(lowerBound) && !isNaN(upperBound)) {
	      var range = upperBound - lowerBound;
	      if (range > 0) {
	        // more weight the further it is from the lower bound
	        var upperBoundColorWeight = (featureValue - lowerBound) / range;
	        if (upperBoundColorWeight) {
	          // more weight the further it is from the upper bound
	          var lowerBoundColorWeight = (upperBound - featureValue) / range;
	          if (lowerBoundColorWeight) {
	            // interpolate the lower and upper bound color by applying the
	            // weights to each of the rgba colors and adding them together
	            var interpolatedColor = [];
	            for (var j = 0; j < 4; j++) {
	              interpolatedColor[j] = Math.round((lowerBoundColor[j] * lowerBoundColorWeight) + (upperBoundColor[j] * upperBoundColorWeight));
	            }
	            return interpolatedColor;
	          } else {
	            // no difference between featureValue and upperBound, 100% of upperBoundColor
	            return upperBoundColor;
	          }
	        } else {
	          // no difference between featureValue and lowerBound, 100% of lowerBoundColor
	          return lowerBoundColor;
	        }
	      }
	    }
	    // if we get to here, none of the cases apply so return null
	    return null;
	  }
	});

	var ShapeMarker = L.Path.extend({

	  initialize: function (latlng, size, options) {
	    L.setOptions(this, options);
	    this._size = size;
	    this._latlng = L.latLng(latlng);
	    this._svgCanvasIncludes();
	  },

	  toGeoJSON: function () {
	    return L.GeoJSON.getFeature(this, {
	      type: 'Point',
	      coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
	    });
	  },

	  _svgCanvasIncludes: function () {
	    // implement in sub class
	  },

	  _project: function () {
	    this._point = this._map.latLngToLayerPoint(this._latlng);
	  },

	  _update: function () {
	    if (this._map) {
	      this._updatePath();
	    }
	  },

	  _updatePath: function () {
	    // implement in sub class
	  },

	  setLatLng: function (latlng) {
	    this._latlng = L.latLng(latlng);
	    this.redraw();
	    return this.fire('move', {latlng: this._latlng});
	  },

	  getLatLng: function () {
	    return this._latlng;
	  },

	  setSize: function (size) {
	    this._size = size;
	    return this.redraw();
	  },

	  getSize: function () {
	    return this._size;
	  }
	});

	var CrossMarker = ShapeMarker.extend({

	  initialize: function (latlng, size, options) {
	    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
	  },

	  _updatePath: function () {
	    this._renderer._updateCrossMarker(this);
	  },

	  _svgCanvasIncludes: function () {
	    L.Canvas.include({
	      _updateCrossMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;
	        var ctx = this._ctx;

	        ctx.beginPath();
	        ctx.moveTo(latlng.x, latlng.y + offset);
	        ctx.lineTo(latlng.x, latlng.y - offset);
	        this._fillStroke(ctx, layer);

	        ctx.moveTo(latlng.x - offset, latlng.y);
	        ctx.lineTo(latlng.x + offset, latlng.y);
	        this._fillStroke(ctx, layer);
	      }
	    });

	    L.SVG.include({
	      _updateCrossMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;

	        if (L.Browser.vml) {
	          latlng._round();
	          offset = Math.round(offset);
	        }

	        var str = 'M' + latlng.x + ',' + (latlng.y + offset) +
	          'L' + latlng.x + ',' + (latlng.y - offset) +
	          'M' + (latlng.x - offset) + ',' + latlng.y +
	          'L' + (latlng.x + offset) + ',' + latlng.y;

	        this._setPath(layer, str);
	      }
	    });
	  }
	});

	var crossMarker = function (latlng, size, options) {
	  return new CrossMarker(latlng, size, options);
	};

	var XMarker = ShapeMarker.extend({

	  initialize: function (latlng, size, options) {
	    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
	  },

	  _updatePath: function () {
	    this._renderer._updateXMarker(this);
	  },

	  _svgCanvasIncludes: function () {
	    L.Canvas.include({
	      _updateXMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;
	        var ctx = this._ctx;

	        ctx.beginPath();

	        ctx.moveTo(latlng.x + offset, latlng.y + offset);
	        ctx.lineTo(latlng.x - offset, latlng.y - offset);
	        this._fillStroke(ctx, layer);
	      }
	    });

	    L.SVG.include({
	      _updateXMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;

	        if (L.Browser.vml) {
	          latlng._round();
	          offset = Math.round(offset);
	        }

	        var str = 'M' + (latlng.x + offset) + ',' + (latlng.y + offset) +
	          'L' + (latlng.x - offset) + ',' + (latlng.y - offset) +
	          'M' + (latlng.x - offset) + ',' + (latlng.y + offset) +
	          'L' + (latlng.x + offset) + ',' + (latlng.y - offset);

	        this._setPath(layer, str);
	      }
	    });
	  }
	});

	var xMarker = function (latlng, size, options) {
	  return new XMarker(latlng, size, options);
	};

	var SquareMarker = ShapeMarker.extend({
	  options: {
	    fill: true
	  },

	  initialize: function (latlng, size, options) {
	    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
	  },

	  _updatePath: function () {
	    this._renderer._updateSquareMarker(this);
	  },

	  _svgCanvasIncludes: function () {
	    L.Canvas.include({
	      _updateSquareMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;
	        var ctx = this._ctx;

	        ctx.beginPath();

	        ctx.moveTo(latlng.x + offset, latlng.y + offset);
	        ctx.lineTo(latlng.x - offset, latlng.y + offset);
	        ctx.lineTo(latlng.x - offset, latlng.y - offset);
	        ctx.lineTo(latlng.x + offset, latlng.y - offset);

	        ctx.closePath();

	        this._fillStroke(ctx, layer);
	      }
	    });

	    L.SVG.include({
	      _updateSquareMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;

	        if (L.Browser.vml) {
	          latlng._round();
	          offset = Math.round(offset);
	        }

	        var str = 'M' + (latlng.x + offset) + ',' + (latlng.y + offset) +
	          'L' + (latlng.x - offset) + ',' + (latlng.y + offset) +
	          'L' + (latlng.x - offset) + ',' + (latlng.y - offset) +
	          'L' + (latlng.x + offset) + ',' + (latlng.y - offset);

	        str = str + (L.Browser.svg ? 'z' : 'x');

	        this._setPath(layer, str);
	      }
	    });
	  }
	});

	var squareMarker = function (latlng, size, options) {
	  return new SquareMarker(latlng, size, options);
	};

	var DiamondMarker = ShapeMarker.extend({
	  options: {
	    fill: true
	  },

	  initialize: function (latlng, size, options) {
	    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
	  },

	  _updatePath: function () {
	    this._renderer._updateDiamondMarker(this);
	  },

	  _svgCanvasIncludes: function () {
	    L.Canvas.include({
	      _updateDiamondMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;
	        var ctx = this._ctx;

	        ctx.beginPath();

	        ctx.moveTo(latlng.x, latlng.y + offset);
	        ctx.lineTo(latlng.x - offset, latlng.y);
	        ctx.lineTo(latlng.x, latlng.y - offset);
	        ctx.lineTo(latlng.x + offset, latlng.y);

	        ctx.closePath();

	        this._fillStroke(ctx, layer);
	      }
	    });

	    L.SVG.include({
	      _updateDiamondMarker: function (layer) {
	        var latlng = layer._point;
	        var offset = layer._size / 2.0;

	        if (L.Browser.vml) {
	          latlng._round();
	          offset = Math.round(offset);
	        }

	        var str = 'M' + latlng.x + ',' + (latlng.y + offset) +
	          'L' + (latlng.x - offset) + ',' + latlng.y +
	          'L' + latlng.x + ',' + (latlng.y - offset) +
	          'L' + (latlng.x + offset) + ',' + latlng.y;

	        str = str + (L.Browser.svg ? 'z' : 'x');

	        this._setPath(layer, str);
	      }
	    });
	  }
	});

	var diamondMarker = function (latlng, size, options) {
	  return new DiamondMarker(latlng, size, options);
	};

	var PointSymbol = Symbol.extend({

	  statics: {
	    MARKERTYPES: ['esriSMSCircle', 'esriSMSCross', 'esriSMSDiamond', 'esriSMSSquare', 'esriSMSX', 'esriPMS']
	  },

	  initialize: function (symbolJson, options) {
	    var url;
	    Symbol.prototype.initialize.call(this, symbolJson, options);
	    if (options) {
	      this.serviceUrl = options.url;
	    }
	    if (symbolJson) {
	      if (symbolJson.type === 'esriPMS') {
	        var imageUrl = this._symbolJson.url;
	        if ((imageUrl && imageUrl.substr(0, 7) === 'http://') || (imageUrl.substr(0, 8) === 'https://')) {
	          // web image
	          url = this.sanitize(imageUrl);
	          this._iconUrl = url;
	        } else {
	          url = this.serviceUrl + 'images/' + imageUrl;
	          this._iconUrl = options && options.token ? url + '?token=' + options.token : url;
	        }
	        if (symbolJson.imageData) {
	          this._iconUrl = 'data:' + symbolJson.contentType + ';base64,' + symbolJson.imageData;
	        }
	        // leaflet does not allow resizing icons so keep a hash of different
	        // icon sizes to try and keep down on the number of icons created
	        this._icons = {};
	        // create base icon
	        this.icon = this._createIcon(this._symbolJson);
	      } else {
	        this._fillStyles();
	      }
	    }
	  },

	  // prevent html injection in strings
	  sanitize: function (str) {
	    if (!str) {
	      return '';
	    }
	    var text;
	    try {
	      // removes html but leaves url link text
	      text = str.replace(/<br>/gi, '\n');
	      text = text.replace(/<p.*>/gi, '\n');
	      text = text.replace(/<a.*href='(.*?)'.*>(.*?)<\/a>/gi, ' $2 ($1) ');
	      text = text.replace(/<(?:.|\s)*?>/g, '');
	    } catch (ex) {
	      text = null;
	    }
	    return text;
	  },

	  _fillStyles: function () {
	    if (this._symbolJson.outline && this._symbolJson.size > 0 && this._symbolJson.outline.style !== 'esriSLSNull') {
	      this._styles.stroke = true;
	      this._styles.weight = this.pixelValue(this._symbolJson.outline.width);
	      this._styles.color = this.colorValue(this._symbolJson.outline.color);
	      this._styles.opacity = this.alphaValue(this._symbolJson.outline.color);
	    } else {
	      this._styles.stroke = false;
	    }
	    if (this._symbolJson.color) {
	      this._styles.fillColor = this.colorValue(this._symbolJson.color);
	      this._styles.fillOpacity = this.alphaValue(this._symbolJson.color);
	    } else {
	      this._styles.fillOpacity = 0;
	    }

	    if (this._symbolJson.style === 'esriSMSCircle') {
	      this._styles.radius = this.pixelValue(this._symbolJson.size) / 2.0;
	    }
	  },

	  _createIcon: function (options) {
	    var width = this.pixelValue(options.width);
	    var height = width;
	    if (options.height) {
	      height = this.pixelValue(options.height);
	    }
	    var xOffset = width / 2.0;
	    var yOffset = height / 2.0;

	    if (options.xoffset) {
	      xOffset += this.pixelValue(options.xoffset);
	    }
	    if (options.yoffset) {
	      yOffset += this.pixelValue(options.yoffset);
	    }

	    var icon = L.icon({
	      iconUrl: this._iconUrl,
	      iconSize: [width, height],
	      iconAnchor: [xOffset, yOffset]
	    });
	    this._icons[options.width.toString()] = icon;
	    return icon;
	  },

	  _getIcon: function (size) {
	    // check to see if it is already created by size
	    var icon = this._icons[size.toString()];
	    if (!icon) {
	      icon = this._createIcon({width: size});
	    }
	    return icon;
	  },

	  pointToLayer: function (geojson, latlng, visualVariables, options) {
	    var size = this._symbolJson.size || this._symbolJson.width;
	    if (!this._isDefault) {
	      if (visualVariables.sizeInfo) {
	        var calculatedSize = this.getSize(geojson, visualVariables.sizeInfo);
	        if (calculatedSize) {
	          size = calculatedSize;
	        }
	      }
	      if (visualVariables.colorInfo) {
	        var color = this.getColor(geojson, visualVariables.colorInfo);
	        if (color) {
	          this._styles.fillColor = this.colorValue(color);
	          this._styles.fillOpacity = this.alphaValue(color);
	        }
	      }
	    }

	    if (this._symbolJson.type === 'esriPMS') {
	      var layerOptions = L.extend({}, {icon: this._getIcon(size)}, options);
	      return L.marker(latlng, layerOptions);
	    }
	    size = this.pixelValue(size);

	    switch (this._symbolJson.style) {
	      case 'esriSMSSquare':
	        return squareMarker(latlng, size, L.extend({}, this._styles, options));
	      case 'esriSMSDiamond':
	        return diamondMarker(latlng, size, L.extend({}, this._styles, options));
	      case 'esriSMSCross':
	        return crossMarker(latlng, size, L.extend({}, this._styles, options));
	      case 'esriSMSX':
	        return xMarker(latlng, size, L.extend({}, this._styles, options));
	    }
	    this._styles.radius = size / 2.0;
	    return L.circleMarker(latlng, L.extend({}, this._styles, options));
	  }
	});

	function pointSymbol (symbolJson, options) {
	  return new PointSymbol(symbolJson, options);
	}

	var LineSymbol = Symbol.extend({
	  statics: {
	    // Not implemented 'esriSLSNull'
	    LINETYPES: ['esriSLSDash', 'esriSLSDot', 'esriSLSDashDotDot', 'esriSLSDashDot', 'esriSLSSolid']
	  },
	  initialize: function (symbolJson, options) {
	    Symbol.prototype.initialize.call(this, symbolJson, options);
	    this._fillStyles();
	  },

	  _fillStyles: function () {
	    // set the defaults that show up on arcgis online
	    this._styles.lineCap = 'butt';
	    this._styles.lineJoin = 'miter';
	    this._styles.fill = false;
	    this._styles.weight = 0;

	    if (!this._symbolJson) {
	      return this._styles;
	    }

	    if (this._symbolJson.color) {
	      this._styles.color = this.colorValue(this._symbolJson.color);
	      this._styles.opacity = this.alphaValue(this._symbolJson.color);
	    }

	    if (!isNaN(this._symbolJson.width)) {
	      this._styles.weight = this.pixelValue(this._symbolJson.width);

	      var dashValues = [];

	      switch (this._symbolJson.style) {
	        case 'esriSLSDash':
	          dashValues = [4, 3];
	          break;
	        case 'esriSLSDot':
	          dashValues = [1, 3];
	          break;
	        case 'esriSLSDashDot':
	          dashValues = [8, 3, 1, 3];
	          break;
	        case 'esriSLSDashDotDot':
	          dashValues = [8, 3, 1, 3, 1, 3];
	          break;
	      }

	      // use the dash values and the line weight to set dash array
	      if (dashValues.length > 0) {
	        for (var i = 0; i < dashValues.length; i++) {
	          dashValues[i] *= this._styles.weight;
	        }

	        this._styles.dashArray = dashValues.join(',');
	      }
	    }
	  },

	  style: function (feature, visualVariables) {
	    if (!this._isDefault && visualVariables) {
	      if (visualVariables.sizeInfo) {
	        var calculatedSize = this.pixelValue(this.getSize(feature, visualVariables.sizeInfo));
	        if (calculatedSize) {
	          this._styles.weight = calculatedSize;
	        }
	      }
	      if (visualVariables.colorInfo) {
	        var color = this.getColor(feature, visualVariables.colorInfo);
	        if (color) {
	          this._styles.color = this.colorValue(color);
	          this._styles.opacity = this.alphaValue(color);
	        }
	      }
	    }
	    return this._styles;
	  }
	});

	function lineSymbol (symbolJson, options) {
	  return new LineSymbol(symbolJson, options);
	}

	var PolygonSymbol = Symbol.extend({
	  statics: {
	    // not implemented: 'esriSFSBackwardDiagonal','esriSFSCross','esriSFSDiagonalCross','esriSFSForwardDiagonal','esriSFSHorizontal','esriSFSNull','esriSFSVertical'
	    POLYGONTYPES: ['esriSFSSolid']
	  },
	  initialize: function (symbolJson, options) {
	    Symbol.prototype.initialize.call(this, symbolJson, options);
	    if (symbolJson) {
	      if (symbolJson.outline && symbolJson.outline.style === 'esriSLSNull') {
	        this._lineStyles = { weight: 0 };
	      } else {
	        this._lineStyles = lineSymbol(symbolJson.outline, options).style();
	      }
	      this._fillStyles();
	    }
	  },

	  _fillStyles: function () {
	    if (this._lineStyles) {
	      if (this._lineStyles.weight === 0) {
	        // when weight is 0, setting the stroke to false can still look bad
	        // (gaps between the polygons)
	        this._styles.stroke = false;
	      } else {
	        // copy the line symbol styles into this symbol's styles
	        for (var styleAttr in this._lineStyles) {
	          this._styles[styleAttr] = this._lineStyles[styleAttr];
	        }
	      }
	    }

	    // set the fill for the polygon
	    if (this._symbolJson) {
	      if (this._symbolJson.color &&
	          // don't fill polygon if type is not supported
	          PolygonSymbol.POLYGONTYPES.indexOf(this._symbolJson.style >= 0)) {
	        this._styles.fill = true;
	        this._styles.fillColor = this.colorValue(this._symbolJson.color);
	        this._styles.fillOpacity = this.alphaValue(this._symbolJson.color);
	      } else {
	        this._styles.fill = false;
	        this._styles.fillOpacity = 0;
	      }
	    }
	  },

	  style: function (feature, visualVariables) {
	    if (!this._isDefault && visualVariables && visualVariables.colorInfo) {
	      var color = this.getColor(feature, visualVariables.colorInfo);
	      if (color) {
	        this._styles.fillColor = this.colorValue(color);
	        this._styles.fillOpacity = this.alphaValue(color);
	      }
	    }
	    return this._styles;
	  }
	});

	function polygonSymbol (symbolJson, options) {
	  return new PolygonSymbol(symbolJson, options);
	}

	var Renderer = L.Class.extend({
	  options: {
	    proportionalPolygon: false,
	    clickable: true
	  },

	  initialize: function (rendererJson, options) {
	    this._rendererJson = rendererJson;
	    this._pointSymbols = false;
	    this._symbols = [];
	    this._visualVariables = this._parseVisualVariables(rendererJson.visualVariables);
	    L.Util.setOptions(this, options);
	  },

	  _parseVisualVariables: function (visualVariables) {
	    var visVars = {};
	    if (visualVariables) {
	      for (var i = 0; i < visualVariables.length; i++) {
	        visVars[visualVariables[i].type] = visualVariables[i];
	      }
	    }
	    return visVars;
	  },

	  _createDefaultSymbol: function () {
	    if (this._rendererJson.defaultSymbol) {
	      this._defaultSymbol = this._newSymbol(this._rendererJson.defaultSymbol);
	      this._defaultSymbol._isDefault = true;
	    }
	  },

	  _newSymbol: function (symbolJson) {
	    if (symbolJson.type === 'esriSMS' || symbolJson.type === 'esriPMS') {
	      this._pointSymbols = true;
	      return pointSymbol(symbolJson, this.options);
	    }
	    if (symbolJson.type === 'esriSLS') {
	      return lineSymbol(symbolJson, this.options);
	    }
	    if (symbolJson.type === 'esriSFS') {
	      return polygonSymbol(symbolJson, this.options);
	    }
	  },

	  _getSymbol: function () {
	    // override
	  },

	  attachStylesToLayer: function (layer) {
	    if (this._pointSymbols) {
	      layer.options.pointToLayer = L.Util.bind(this.pointToLayer, this);
	    } else {
	      layer.options.style = L.Util.bind(this.style, this);
	      layer._originalStyle = layer.options.style;
	    }
	  },

	  pointToLayer: function (geojson, latlng) {
	    var sym = this._getSymbol(geojson);
	    if (sym && sym.pointToLayer) {
	      // right now custom panes are the only option pushed through
	      return sym.pointToLayer(geojson, latlng, this._visualVariables, this.options);
	    }
	    // invisible symbology
	    return L.circleMarker(latlng, {radius: 0, opacity: 0});
	  },

	  style: function (feature) {
	    var userStyles;
	    if (typeof this.options.userDefinedStyle == 'function') {
	      userStyles = this.options.userDefinedStyle(feature);
	    }
	    // find the symbol to represent this feature
	    var sym = this._getSymbol(feature);
	    if (sym) {
	      return this.mergeStyles(sym.style(feature, this._visualVariables), userStyles);
	    } else {
	      // invisible symbology
	      return this.mergeStyles({opacity: 0, fillOpacity: 0}, userStyles);
	    }
	  },

	  mergeStyles: function (styles, userStyles) {
	    var mergedStyles = {};
	    var attr;
	    // copy renderer style attributes
	    for (attr in styles) {
	      if (styles.hasOwnProperty(attr)) {
	        mergedStyles[attr] = styles[attr];
	      }
	    }
	    // override with user defined style attributes
	    if (userStyles) {
	      for (attr in userStyles) {
	        if (userStyles.hasOwnProperty(attr)) {
	          mergedStyles[attr] = userStyles[attr];
	        }
	      }
	    }
	    return mergedStyles;
	  }
	});

	var SimpleRenderer = Renderer.extend({
	  initialize: function (rendererJson, options) {
	    Renderer.prototype.initialize.call(this, rendererJson, options);
	    this._createSymbol();
	  },

	  _createSymbol: function () {
	    if (this._rendererJson.symbol) {
	      this._symbols.push(this._newSymbol(this._rendererJson.symbol));
	    }
	  },

	  _getSymbol: function () {
	    return this._symbols[0];
	  }
	});

	function simpleRenderer (rendererJson, options) {
	  return new SimpleRenderer(rendererJson, options);
	}

	var ClassBreaksRenderer = Renderer.extend({
	  initialize: function (rendererJson, options) {
	    Renderer.prototype.initialize.call(this, rendererJson, options);
	    this._field = this._rendererJson.field;
	    if (this._rendererJson.normalizationType && this._rendererJson.normalizationType === 'esriNormalizeByField') {
	      this._normalizationField = this._rendererJson.normalizationField;
	    }
	    this._createSymbols();
	  },

	  _createSymbols: function () {
	    var symbol;
	    var classbreaks = this._rendererJson.classBreakInfos;

	    this._symbols = [];

	    // create a symbol for each class break
	    for (var i = classbreaks.length - 1; i >= 0; i--) {
	      if (this.options.proportionalPolygon && this._rendererJson.backgroundFillSymbol) {
	        symbol = this._newSymbol(this._rendererJson.backgroundFillSymbol);
	      } else {
	        symbol = this._newSymbol(classbreaks[i].symbol);
	      }
	      symbol.val = classbreaks[i].classMaxValue;
	      this._symbols.push(symbol);
	    }
	    // sort the symbols in ascending value
	    this._symbols.sort(function (a, b) {
	      return a.val > b.val ? 1 : -1;
	    });
	    this._createDefaultSymbol();
	    this._maxValue = this._symbols[this._symbols.length - 1].val;
	  },

	  _getSymbol: function (feature) {
	    var val = feature.properties[this._field];
	    if (this._normalizationField) {
	      var normValue = feature.properties[this._normalizationField];
	      if (!isNaN(normValue) && normValue !== 0) {
	        val = val / normValue;
	      } else {
	        return this._defaultSymbol;
	      }
	    }

	    if (val > this._maxValue) {
	      return this._defaultSymbol;
	    }
	    var symbol = this._symbols[0];
	    for (var i = this._symbols.length - 1; i >= 0; i--) {
	      if (val > this._symbols[i].val) {
	        break;
	      }
	      symbol = this._symbols[i];
	    }
	    return symbol;
	  }
	});

	function classBreaksRenderer (rendererJson, options) {
	  return new ClassBreaksRenderer(rendererJson, options);
	}

	var UniqueValueRenderer = Renderer.extend({
	  initialize: function (rendererJson, options) {
	    Renderer.prototype.initialize.call(this, rendererJson, options);
	    this._field = this._rendererJson.field1;
	    this._createSymbols();
	  },

	  _createSymbols: function () {
	    var symbol;
	    var uniques = this._rendererJson.uniqueValueInfos;

	    // create a symbol for each unique value
	    for (var i = uniques.length - 1; i >= 0; i--) {
	      symbol = this._newSymbol(uniques[i].symbol);
	      symbol.val = uniques[i].value;
	      this._symbols.push(symbol);
	    }
	    this._createDefaultSymbol();
	  },

	  _getSymbol: function (feature) {
	    var val = feature.properties[this._field];
	    // accumulate values if there is more than one field defined
	    if (this._rendererJson.fieldDelimiter && this._rendererJson.field2) {
	      var val2 = feature.properties[this._rendererJson.field2];
	      if (val2) {
	        val += this._rendererJson.fieldDelimiter + val2;
	        var val3 = feature.properties[this._rendererJson.field3];
	        if (val3) {
	          val += this._rendererJson.fieldDelimiter + val3;
	        }
	      }
	    }

	    var symbol = this._defaultSymbol;
	    for (var i = this._symbols.length - 1; i >= 0; i--) {
	      // using the === operator does not work if the field
	      // of the unique renderer is not a string
	      /*eslint-disable */
	      if (this._symbols[i].val == val) {
	        symbol = this._symbols[i];
	      }
	      /*eslint-enable */
	    }
	    return symbol;
	  }
	});

	function uniqueValueRenderer (rendererJson, options) {
	  return new UniqueValueRenderer(rendererJson, options);
	}

	Esri.FeatureLayer.addInitHook(function () {
	  if (this.options.ignoreRenderer) {
	    return;
	  }
	  var oldOnAdd = L.Util.bind(this.onAdd, this);
	  var oldUnbindPopup = L.Util.bind(this.unbindPopup, this);
	  var oldOnRemove = L.Util.bind(this.onRemove, this);
	  L.Util.bind(this.createNewLayer, this);

	  this.onAdd = function (map) {
	    this.metadata(function (error, response) {
	      if (error) {
	        console.warn('failed to load metadata from the service.');
	        return;
	      } if (response && response.drawingInfo) {
	        if (this.options.drawingInfo) {
	          // allow L.esri.webmap (and others) to override service symbology with info provided in layer constructor
	          response.drawingInfo = this.options.drawingInfo;
	        }

	        // the default pane for lines and polygons is 'overlayPane', for points it is 'markerPane'
	        if (this.options.pane === 'overlayPane' && response.geometryType === 'esriGeometryPoint') {
	          this.options.pane = 'markerPane';
	        }

	        this._setRenderers(response);
	        oldOnAdd(map);
	        this._addPointLayer(map);
	      }
	    }, this);
	  };

	  this.onRemove = function (map) {
	    oldOnRemove(map);
	    if (this._pointLayer) {
	      var pointLayers = this._pointLayer.getLayers();
	      for (var i in pointLayers) {
	        map.removeLayer(pointLayers[i]);
	      }
	    }
	  };

	  this.unbindPopup = function () {
	    oldUnbindPopup();
	    if (this._pointLayer) {
	      var pointLayers = this._pointLayer.getLayers();
	      for (var i in pointLayers) {
	        pointLayers[i].unbindPopup();
	      }
	    }
	  };

	  this._addPointLayer = function (map) {
	    if (this._pointLayer) {
	      this._pointLayer.addTo(map);
	      this._pointLayer.bringToFront();
	    }
	  };

	  this._createPointLayer = function () {
	    if (!this._pointLayer) {
	      this._pointLayer = L.geoJson();
	      // store the feature ids that have already been added to the map
	      this._pointLayerIds = {};

	      if (this._popup) {
	        var popupFunction = function (feature, layer) {
	          layer.bindPopup(this._popup(feature, layer), this._popupOptions);
	        };
	        this._pointLayer.options.onEachFeature = L.Util.bind(popupFunction, this);
	      }
	    }
	  };

	  this.createNewLayer = function (geojson) {
	    var fLayer = L.GeoJSON.geometryToLayer(geojson, this.options);

	    // add a point layer when the polygon is represented as proportional marker symbols
	    if (this._hasProportionalSymbols) {
	      var centroid = this.getPolygonCentroid(geojson.geometry.coordinates);
	      if (!(isNaN(centroid[0]) || isNaN(centroid[0]))) {
	        this._createPointLayer();

	        var featureId = geojson.id.toString();
	        // only add the feature if it does not already exist on the map
	        if (!this._pointLayerIds[featureId]) {
	          var pointjson = this.getPointJson(geojson, centroid);

	          this._pointLayer.addData(pointjson);
	          this._pointLayerIds[featureId] = true;
	        }

	        this._pointLayer.bringToFront();
	      }
	    }
	    return fLayer;
	  };

	  this.getPolygonCentroid = function (coordinates) {
	    var pts = coordinates[0][0];
	    if (pts.length === 2) {
	      pts = coordinates[0];
	    }

	    var twicearea = 0;
	    var x = 0;
	    var y = 0;
	    var nPts = pts.length;
	    var p1;
	    var p2;
	    var f;

	    for (var i = 0, j = nPts - 1; i < nPts; j = i++) {
	      p1 = pts[i]; p2 = pts[j];
	      twicearea += p1[0] * p2[1];
	      twicearea -= p1[1] * p2[0];
	      f = p1[0] * p2[1] - p2[0] * p1[1];
	      x += (p1[0] + p2[0]) * f;
	      y += (p1[1] + p2[1]) * f;
	    }
	    f = twicearea * 3;
	    return [x / f, y / f];
	  };

	  this.getPointJson = function (geojson, centroid) {
	    return {
	      type: 'Feature',
	      properties: geojson.properties,
	      id: geojson.id,
	      geometry: {
	        type: 'Point',
	        coordinates: [centroid[0], centroid[1]]
	      }
	    };
	  };

	  this._checkForProportionalSymbols = function (geometryType, renderer) {
	    this._hasProportionalSymbols = false;
	    if (geometryType === 'esriGeometryPolygon') {
	      if (renderer.backgroundFillSymbol) {
	        this._hasProportionalSymbols = true;
	      }
	      // check to see if the first symbol in the classbreaks is a marker symbol
	      if (renderer.classBreakInfos && renderer.classBreakInfos.length) {
	        var sym = renderer.classBreakInfos[0].symbol;
	        if (sym && (sym.type === 'esriSMS' || sym.type === 'esriPMS')) {
	          this._hasProportionalSymbols = true;
	        }
	      }
	    }
	  };

	  this._setRenderers = function (serviceInfo) {
	    var rend;
	    var rendererInfo = serviceInfo.drawingInfo.renderer;

	    var options = {
	      url: this.options.url
	    };

	    if (this.options.token) {
	      options.token = this.options.token;
	    }

	    if (this.options.pane) {
	      options.pane = this.options.pane;
	    }

	    if (serviceInfo.drawingInfo.transparency) {
	      options.layerTransparency = serviceInfo.drawingInfo.transparency;
	    }

	    if (this.options.style) {
	      options.userDefinedStyle = this.options.style;
	    }

	    switch (rendererInfo.type) {
	      case 'classBreaks':
	        this._checkForProportionalSymbols(serviceInfo.geometryType, rendererInfo);
	        if (this._hasProportionalSymbols) {
	          this._createPointLayer();
	          var pRend = classBreaksRenderer(rendererInfo, options);
	          pRend.attachStylesToLayer(this._pointLayer);
	          options.proportionalPolygon = true;
	        }
	        rend = classBreaksRenderer(rendererInfo, options);
	        break;
	      case 'uniqueValue':
	        rend = uniqueValueRenderer(rendererInfo, options);
	        break;
	      default:
	        rend = simpleRenderer(rendererInfo, options);
	    }
	    rend.attachStylesToLayer(this);
	  };
	});

	exports.VERSION = version;
	exports.Renderer = Renderer;
	exports.SimpleRenderer = SimpleRenderer;
	exports.simpleRenderer = simpleRenderer;
	exports.ClassBreaksRenderer = ClassBreaksRenderer;
	exports.classBreaksRenderer = classBreaksRenderer;
	exports.UniqueValueRenderer = UniqueValueRenderer;
	exports.uniqueValueRenderer = uniqueValueRenderer;
	exports.Symbol = Symbol;
	exports.PointSymbol = PointSymbol;
	exports.pointSymbol = pointSymbol;
	exports.LineSymbol = LineSymbol;
	exports.lineSymbol = lineSymbol;
	exports.PolygonSymbol = PolygonSymbol;
	exports.polygonSymbol = polygonSymbol;

}));

/* esri-leaflet-legend-compat-src.js   */

(function (factory) {
  //define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
    define(['leaflet', 'esri-leaflet'], function (L, EsriLeaflet) {
      return factory(L, EsriLeaflet);
    });
  //define a common js module that relies on 'leaflet'
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('leaflet'), require('esri-leaflet'));
  }

  if(typeof window !== 'undefined' && window.L){
    factory(window.L, L.esri);
  }
}(function (L, EsriLeaflet) {

/**
 * @example
 * <code>
 * L.esri.Util.queue(
 *   [1, 2, 3], [], function(curr, item, cb){
 *     setTimeout(function(){
 *       cb(null, curr.concat([item + 10]));
 *     }, 200);
 *   }, function(err, result) {
 *     console.log(result); // [11, 12, 13]
 * });
 * </code>
 * @param  {Array.<*>} values
 * @param  {*}         initial
 * @param  {Function}  fn       process item fn(memo, item, callback)
 * @param  {Function}  done     queue complete
 * @param  {*=}        context
 */
EsriLeaflet.Util.reduce = function(values, initial, fn, cb, context) {
  var curr = initial;

  function next(index) {
    var sync = true;
    for (var i = index; i < values.length; i++) {
      var done = false;
      fn(curr, values[i], function(err, val) {
        if (err) {
          return cb.call(context, err, curr);
        }
        done = true;
        curr = val;
        if (!sync) {
          next(i + 1);
        }
      });
      sync = done;
      if (!sync) {
        return;
      }
    }
    cb.call(context, null, curr);
  }

  next(0);
};


EsriLeaflet.MapService.include({

  legend: function(callback, context) {
    return new EsriLeaflet.Legend(this).run(callback, context);
  }

});


EsriLeaflet.FeatureLayerService.include({

  legend: function(callback, context) {
    return new L.esri.Legend(this).run(callback, context);
  }

});


EsriLeaflet.Legend = EsriLeaflet.Task.extend({
  path: 'legend',

  params: {
    f: 'json'
  },

  run: function(callback, context) {
    if (this._service) {
      return this._service.request(this.path, this.params, callback, context);
    } else {
      return this._request('request', this.path, this.params, callback, context);
    }
  }

});

EsriLeaflet.legend = function(params) {
  return new EsriLeaflet.Legend(params);
};


EsriLeaflet.Legend.include({

  initialize: function(endpoint) {
    this._renderer = new EsriLeaflet.Legend.SymbolRenderer();
    EsriLeaflet.Task.prototype.initialize.call(this, endpoint);
  },

  run: function(callback, context) {
    function cb(error, response) {
      if (error && error.code === 400) { // ArcGIS server >=10.0
        this._collectLegendFromLayers(callback, context);
      } else if (response && response.drawingInfo) {
        this._symbolsToLegends([response], function(err, result) {
          callback.call(context, err, {
            layers: result
          });
        });
      } else {
        callback.call(context, error, response);
      }
    }

    if (this._service) {
      return this._service.request(this.path, this.params, cb, this);
    } else {
      return this._request('request', this.path, this.params, cb, this);
    }
  },

  _collectLegendFromLayers: function(callback, context) {
    this._service.metadata(function(error, response) {
      if (error) {
        return callback.call(context, error);
      }

      var layers = [];
      for (var i = 0, len = response.layers.length; i < len; i++) {
        if (!response.layers[i].subLayerIds) {
          layers.push(response.layers[i]);
        }
      }

      this._getLayersLegends(layers, function(err, layerData) {
        if (err) {
          callback.call(context, err);
        } else {
          this._symbolsToLegends(layerData, function(err, result) {
            callback.call(context, err, {
              layers: result
            });
          });
        }
      }, this);
    }, this);
  },

  _getLayersLegends: function(layerDefs, callback, context) {
    var layerData = [];
    var self = this;

    EsriLeaflet.Util.reduce(layerDefs, [], function(curr, layer, cb) {
      self._getLayerLegend(layer, function(err, data) {
        if (err) {
          return cb(err, null);
        }
        cb(null, curr.concat(data));
      }, self);
    }, function(err, result) {
      callback.call(context, err, result);
    });
  },

  _getLayerLegend: function(layer, callback, context) {
    this._service.request(layer.id, {
      f: 'json'
    }, callback, context);
  },

  _symbolsToLegends: function(layerData, callback, context) {
    var self = this;
    EsriLeaflet.Util.reduce(layerData, [], function(curr, layer, cb) {
      self._drawingInfoToLegend(layer.drawingInfo, function(err, legend) {
        if (err) {
          return cb(err, null);
        }
        cb(null, curr.concat([{
          layerId: layer.id,
          layerType: layer.type,
          layerName: layer.name,
          maxScale: layer.maxScale,
          minScale: layer.minScale,
          legend: legend
        }]));
      }, self);
    }, function(err, result) {
      callback.call(context, err, result);
    });
  },

  _getRendererSymbols: function(renderer) {
    var symbols;
    if (renderer.type === 'uniqueValue') {
      symbols = renderer.uniqueValueInfos.slice();
    } else if (renderer.type === 'classBreaks') {
      symbols = renderer.classBreakInfos.slice();
    } else if (renderer.type === 'simple') {
      symbols = [{
        symbol: renderer.symbol,
        label: renderer.label,
        description: renderer.description,
        value: renderer.value
      }];
    }
    if (renderer.defaultSymbol) {
      symbols.push({
        symbol: renderer.defaultSymbol,
        label: renderer.defaultLabel,
        description: '',
        value: null
      });
    }
    return symbols;
  },

  _drawingInfoToLegend: function(drawingInfo, callback, context) {
    var self = this;
    EsriLeaflet.Util.reduce(
      this._getRendererSymbols(drawingInfo.renderer), [],
      function(curr, symbol, cb) {
        self._renderSymbol(symbol, function(err, image) {
          if (err) {
            return cb(err, curr);
          }
          cb(null, curr.concat([{
            label: symbol.label,
            height: image.height,
            url: symbol.symbol.url,
            imageData: image.imageData,
            contentType: image.contentType,
            width: image.width,
            values: [symbol.value || '']
          }]));
        }, self);
      },
      function(err, legend) {
        callback.call(context, err, legend);
      });
  },

  _renderSymbol: function(symbol, callback, context) {
    return this._renderer.render(symbol.symbol, callback, context);
  }

});


EsriLeaflet.Legend.SymbolRenderer = L.Class.extend({

  statics: {
    SYMBOL_TYPES: {
      MARKER: 'esriSMS',
      LINE: 'esriSLS',
      FILL: 'esriSFS',
      PICTURE_MARKER: 'esriPMS',
      PICTURE_FILL: 'esriPFS',
      TEXT: 'esriTS'
    },
    DEFAULT_SIZE: 20
  },

  render: function(symbol, callback, context) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imageData = symbol.imageData;
    this._setSize(canvas, symbol);

    function done(error, imageData) {
      if (error) {
        callback.call(context, error);
      } else {
        callback.call(context, null, {
          width: canvas.width || EsriLeaflet.Tasks.Legend.SymbolRenderer.DEFAULT_SIZE,
          height: canvas.height || EsriLeaflet.Tasks.Legend.SymbolRenderer.DEFAULT_SIZE,
          imageData: imageData.replace('data:image/png;base64,', ''),
          url: null,
          contentType: 'image/png'
        });
      }
    }

    if (symbol.imageData) {
      return done(null, symbol.imageData);
    }

    switch (symbol.type) {
      case 'esriSMS':
        this._renderMarker(ctx, symbol, done);
        break;
      case 'esriSLS':
        this._renderLine(ctx, symbol, done);
        break;
      case 'esriSFS':
        this._renderFill(ctx, symbol, done);
        break;
      case 'esriPMS':
        this._renderImageMarker(ctx, symbol, done);
        break;
      case 'esriPFS':
        this._renderImageFill(ctx, symbol, done);
        break;
      case 'esriST':
        this._renderText(ctx, symbol, done);
        break;
      default:
        break;
    }
  },

  _renderText: function(ctx, symbol, callback) {
    callback(null, ctx.canvas.toDataURL());
  },

  _renderFill: function(ctx, symbol, callback) {
    var size = EsriLeaflet.Tasks.Legend.SymbolRenderer.DEFAULT_SIZE;
    var lineWidth = symbol.outline ? symbol.outline.width : 1;
    var lineOffset = Math.max(5, lineWidth * 3);
    switch (symbol.style) {

      case 'esriSFSVertical':
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSHorizontal':
        this._setRotation(ctx, 90);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSBackwardDiagonal':
        this._setRotation(ctx, -45);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSForwardDiagonal':
        this._setRotation(ctx, 45);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSCross':
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        this._setRotation(ctx, 90);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSDiagonalCross':
        this._setRotation(ctx, 45);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        this._setRotation(ctx, 45);
        this._hatchCanvas(ctx, size, symbol.color, lineWidth, lineOffset);
        break;

      case 'esriSFSSolid':
        ctx.fillStyle = this._formatColor(symbol.color);
        ctx.fillRect(0, 0, size, size);
        break;

      case 'esriSFSNull':
        break;

      default:
        throw new Error('Unknown SFS style: ' + symbol.style);
    }

    if (symbol.outline) {
      ctx.strokeStyle = this._formatColor(symbol.outline.color);
      ctx.lineWidth = symbol.outline.width;
      ctx.fillStyle = this._formatColor([0, 0, 0, 0]);
      this._setDashArray(ctx, symbol.outline);
      ctx.rect(symbol.outline.width, symbol.outline.width,
        size - symbol.outline.width, size - symbol.outline.width);
      ctx.stroke();
    }

    callback(null, ctx.canvas.toDataURL());
  },

  _renderLine: function(ctx, symbol, callback) {
    var size = EsriLeaflet.Legend.SymbolRenderer.DEFAULT_SIZE;
    ctx.beginPath();
    ctx.lineWidth = symbol.width;
    ctx.strokeStyle = this._formatColor(symbol.color);
    this._setDashArray(ctx, symbol); //

    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);

    ctx.closePath();
    ctx.stroke();
    callback(null, ctx.canvas.toDataURL());
  },

  _renderMarker: function(ctx, symbol, callback) {
    var xoffset = 0;
    var yoffset = 0;
    var size = symbol.size;
    var r, rx, ry;

    ctx.beginPath();

    if (symbol.outline) {
      ctx.strokeStyle = this._formatColor(symbol.outline.color);
      ctx.lineWidth = symbol.outline.width;
      xoffset += symbol.outline.width;
      yoffset += symbol.outline.width;
    }

    this._setRotation(ctx, symbol.angle);

    switch (symbol.style) {
      case 'esriSMSCircle':
        ctx.fillStyle = this._formatColor(symbol.color);
        r = (size - 2 * xoffset) / 2;
        ctx.arc(r + xoffset, r + xoffset, r, 0, 2 * Math.PI, false);
        ctx.fill();
        break;

      case 'esriSMSX':
        ctx.moveTo(xoffset, yoffset);
        ctx.lineTo(size - xoffset, size - yoffset);
        ctx.moveTo(size - xoffset, yoffset);
        ctx.lineTo(xoffset, size - yoffset);
        break;

      case 'esriSMSCross':
        ctx.moveTo(xoffset, size / 2);
        ctx.lineTo(size - xoffset, size / 2);
        ctx.moveTo(size / 2, yoffset);
        ctx.lineTo(size / 2, size - yoffset);
        break;

      case 'esriSMSDiamond':
        ctx.fillStyle = this._formatColor(symbol.color);
        rx = (size - 2 * xoffset) / 2;
        ry = (size - 2 * yoffset) / 2;

        ctx.moveTo(xoffset, yoffset + ry);
        ctx.lineTo(xoffset + rx, yoffset);
        ctx.lineTo(xoffset + rx * 2, yoffset + ry);
        ctx.lineTo(xoffset + rx, yoffset + 2 * ry);
        ctx.lineTo(xoffset, yoffset + ry);
        ctx.fill();
        break;

      case 'esriSMSSquare':
        ctx.rect(xoffset, yoffset, size - 2 * xoffset, size - 2 * yoffset);
        break;

      case 'esriSMSTriangle':
        ctx.fillStyle = this._formatColor(symbol.color);
        rx = (size - 2 * xoffset) / 2;
        ry = (size - 2 * yoffset) / 2;
        ctx.moveTo(xoffset, yoffset + ry * 2);
        ctx.lineTo(xoffset + rx, yoffset);
        ctx.lineTo(xoffset + rx * 2, yoffset + ry * 2);
        ctx.lineTo(xoffset, yoffset + ry * 2);
        ctx.fill();
        break;

      default:
        throw new Error('Unknown esriSMS style: ' + symbol.style);
    }

    ctx.closePath();
    if (symbol.outline) {
      ctx.stroke();
    }
    callback(null, ctx.canvas.toDataURL());
  },

  _renderImageFill: function(ctx, symbol, callback) {
    this._setRotation(ctx, symbol.angle);
    if (symbol.imageData) {
      this._fillImage(ctx, symbol.imageData, symbol, symbol.contentType);
      callback(null, ctx.toDataURL());
    } else {
      this._loadImage(symbol.url, function(err, image) {
        this._fillImage(ctx, null, symbol, symbol.contentType, image);
        callback(null, ctx.canvas.toDataURL());
      }, this);
    }
  },

  _renderImageMarker: function(ctx, symbol, callback) {
    this._setRotation(ctx, symbol.angle);
    if (symbol.imageData) {
      this._drawImage(ctx, symbol.imageData, symbol.contentType);
      callback(null, ctx.toDataURL());
    } else {
      this._loadImage(symbol.url, function(err, image) {
        ctx.drawImage(image, 0, 0);
        callback(null, ctx.canvas.toDataURL());
      }, this);
    }
  },

  _setSize: function(ctx, symbol) {
    if (symbol.size) {
      ctx.width = ctx.height = symbol.size;
    } else if (symbol.type === 'esriSLS' ||
      symbol.type === 'esriSFS') {
      ctx.width = ctx.height = EsriLeaflet.Legend.SymbolRenderer.DEFAULT_SIZE;
    } else {
      ctx.width = symbol.width;
      ctx.height = symbol.height;
    }
  },

  _setRotation: function(ctx, angle) {
    ctx.rotate(-parseFloat(angle) * Math.PI / 180);
  },

  _setDashArray: function(ctx, symbol) {
    var dashArray = this._formatDashArray(symbol);
    if (dashArray.length) {
      ctx.setLineDash(dashArray);
    }
  },

  _drawCross: function(ctx, xoffset, yoffset, size) {
    ctx.moveTo(xoffset, yoffset);
    ctx.lineTo(size - xoffset, size - yoffset);
    ctx.moveTo(size - xoffset, yoffset);
    ctx.lineTo(xoffset, size - yoffset);
  },

  _hatchCanvas: function(ctx, size, color, width, offset) {
    var w = size * 2;
    var h = size * 2;

    for (var i = -w; i < w; i += offset) {
      ctx.moveTo(i, -h);
      ctx.lineTo(i, h);
    }

    ctx.lineWidth = width;
    ctx.strokeStyle = this._formatColor(color);
    ctx.stroke();
  },

  _formatColor: function(color) {
    return 'rgba(' + color.slice(0, 3).join(',') + ',' + color[3] / 255 + ')';
  },

  _formatDashArray: function(symbol) {
    var dashValues = [];

    switch (symbol.style) {
      case 'esriSLSDash':
        dashValues = [4, 3];
        break;
      case 'esriSLSDot':
        dashValues = [1, 3];
        break;
      case 'esriSLSDashDot':
        dashValues = [8, 3, 1, 3];
        break;
      case 'esriSLSDashDotDot':
        dashValues = [8, 3, 1, 3, 1, 3];
        break;
    }

    //use the dash values and the line weight to set dash array
    if (dashValues.length > 0) {
      for (var i = 0, len = dashValues.length; i < len; i++) {
        dashValues[i] *= symbol.width;
      }
    }

    return dashValues;
  },

  _getImageData: function(ctx, symbol) {
    return ctx.toDImageData(0, 0, symbol.width, symbol.height);
  },

  _fillImage: function(ctx, imageData, symbol, contentType, image) {
    var size = L.esri.Legend.DEFAULT_SIZE;
    var w = symbol.width || size;
    var h = symbol.height || size;
    if (imageData) {
      image = new Image();
      image.src = 'data:' + contentType + ';base64,' + imageData;
    }

    var pattern = ctx.createPattern(image, 'repeat');
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = pattern;
    ctx.fill();

    if (symbol.outline) {
      ctx.strokeStyle = this._formatColor(symbol.outline.color);
      ctx.lineWidth = symbol.outline.width;
      ctx.fillStyle = this._formatColor([0, 0, 0, 0]);
      this._setDashArray(ctx, symbol.outline);
      ctx.rect(symbol.outline.width, symbol.outline.width,
        w - symbol.outline.width, h - symbol.outline.width);
      ctx.stroke();
    }
  },

  _drawImage: function(ctx, imageData, contentType) {
    var image = new Image();
    image.src = 'data:' + contentType + ';base64,' + imageData;
    ctx.drawImage(image, 0, 0);
  },

  _loadImage: function(url, callback, context) {
    var image = new Image();
    image.crossOrigin = '';
    image.onload = function() {
      callback.call(context, null, this);
    };
    image.onerror = function(e) {
      callback.call(context, {
        code: 500
      });
    };
    image.src = url + (url.indexOf('?') === -1 ? '?' : '&') +
      'nc=' + (new Date()).getTime();
  }

});


EsriLeaflet.DynamicMapLayer.include({

  legend: function(callback, context) {
    return this.service.legend(callback, context);
  }

});


EsriLeaflet.FeatureLayer.include({

  legend: function(callback, context) {
    return this.service.legend(callback, context);
  }

});


EsriLeaflet.LegendControl = L.Control.extend({

  options: {
    listTemplate: '<ul>{layers}</ul>',
    layerTemplate: '<li><strong>{layerName}</strong><ul>{legends}</ul></li>',
    listRowTemplate: '<li><img width="{width}" height="{height}" src="data:{contentType};base64,{imageData}"><span>{label}</span></li>',
    emptyLabel: '<all values>',
    container: null
  },

  initialize: function(layers, options) {
    this._layers = L.Util.isArray(layers) ? layers : [layers];
    L.Control.prototype.initialize.call(this, options);
  },

  onAdd: function(map) {
    var container = this.options.container ||
        L.DomUtil.create('div', 'leaflet-legend-control leaflet-bar');
    L.DomEvent
      .disableScrollPropagation(container)
      .disableClickPropagation(container);

    if (this._layers.length) {
      this._load();
    }
    return container;
  },

  _load: function() {
    L.esri.Util.reduce(this._layers, {
      layers: []
    }, function(curr, layer, cb) {
      layer.legend(function(err, legend) {
        if (err) {
          return cb(err, curr);
        }
        curr.layers = curr.layers.concat(legend.layers);
        cb(null, curr);
      });
    }, this._onLoad, this);
  },

  _onLoad: function(error, legend) {
    if (!error) {
      var layersHtml = '';
      for (var i = 0, len = legend.layers.length; i < len; i++) {
        var layer = legend.layers[i];
        var legendsHtml = '';
        for (var j = 0, jj = layer.legend.length; j < jj; j++) {
          var layerLegend = JSON.parse(JSON.stringify(layer.legend[j]));
          this._validateLegendLabel(layerLegend);
          legendsHtml += L.Util.template(this.options.listRowTemplate, layerLegend);
        }
        layersHtml += L.Util.template(this.options.layerTemplate, {
          layerName: layer.layerName,
          legends: legendsHtml
        });
      }
      this._container.innerHTML = L.Util.template(this.options.listTemplate, {
        layers: layersHtml
      });
    }
  },

  _validateLegendLabel: function(layerLegend) {
    if (!layerLegend.label && this.options.emptyLabel) {
      layerLegend.label = this.options.emptyLabel;
    }
    layerLegend.label = layerLegend.label.replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

});

EsriLeaflet.legendControl = function(layers, options) {
  return new L.esri.LegendControl(layers, options);
};


  return EsriLeaflet;
}));

// spin.js, leaflet.spin.js

//fgnass.github.com/spin.js#v1.2.5
(function(a,b,c){function g(a,c){var d=b.createElement(a||"div"),e;for(e in c)d[e]=c[e];return d}function h(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function j(a,b,c,d){var g=["opacity",b,~~(a*100),c,d].join("-"),h=.01+c/d*100,j=Math.max(1-(1-a)/b*(100-h),a),k=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=k&&"-"+k+"-"||"";return e[g]||(i.insertRule("@"+l+"keyframes "+g+"{"+"0%{opacity:"+j+"}"+h+"%{opacity:"+a+"}"+(h+.01)+"%{opacity:1}"+(h+b)%100+"%{opacity:"+a+"}"+"100%{opacity:"+j+"}"+"}",0),e[g]=1),g}function k(a,b){var e=a.style,f,g;if(e[b]!==c)return b;b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<d.length;g++){f=d[g]+b;if(e[f]!==c)return f}}function l(a,b){for(var c in b)a.style[k(a,c)||c]=b[c];return a}function m(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function n(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var d=["webkit","Moz","ms","O"],e={},f,i=function(){var a=g("style");return h(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},p=function q(a){if(!this.spin)return new q(a);this.opts=m(a||{},q.defaults,o)};p.defaults={},m(p.prototype,{spin:function(a){this.stop();var b=this,c=b.opts,d=b.el=l(g(0,{className:c.className}),{position:"relative",zIndex:c.zIndex}),e=c.radius+c.length+c.width,h,i;a&&(a.insertBefore(d,a.firstChild||null),i=n(a),h=n(d),l(d,{left:(c.left=="auto"?i.x-h.x+(a.offsetWidth>>1):c.left+e)+"px",top:(c.top=="auto"?i.y-h.y+(a.offsetHeight>>1):c.top+e)+"px"})),d.setAttribute("aria-role","progressbar"),b.lines(d,b.opts);if(!f){var j=0,k=c.fps,m=k/c.speed,o=(1-c.opacity)/(m*c.trail/100),p=m/c.lines;!function q(){j++;for(var a=c.lines;a;a--){var e=Math.max(1-(j+a*p)%m*o,c.opacity);b.opacity(d,c.lines-a,e,c)}b.timeout=b.el&&setTimeout(q,~~(1e3/k))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function e(a,d){return l(g(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:d,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*c+b.rotate)+"deg) translate("+b.radius+"px"+",0)",borderRadius:(b.width>>1)+"px"})}var c=0,d;for(;c<b.lines;c++)d=l(g(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:f&&j(b.opacity,b.trail,c,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&h(d,l(e("#000","0 0 4px #000"),{top:"2px"})),h(a,h(d,e(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),!function(){function a(a,b){return g("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=l(g("group"),{behavior:"url(#default#VML)"});!k(b,"transform")&&b.adj?(i.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function f(){return l(a("group",{coordsize:e+" "+e,coordorigin:-d+" "+ -d}),{width:e,height:e})}function k(b,e,g){h(i,h(l(f(),{rotation:360/c.lines*b+"deg",left:~~e}),h(l(a("roundrect",{arcsize:1}),{width:d,height:c.width,left:c.radius,top:-c.width>>1,filter:g}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var d=c.length+c.width,e=2*d,g=-(c.width+c.length)*2+"px",i=l(f(),{position:"absolute",top:g,left:g}),j;if(c.shadow)for(j=1;j<=c.lines;j++)k(j,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(j=1;j<=c.lines;j++)k(j);return h(b,i)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}):f=k(b,"animation")}(),a.Spinner=p})(window,document);

// leaflet.spin.js
!function(n){var i={spin:function(n,i){n?(this._spinner||(this._spinner=new Spinner(i).spin(this._container),this._spinning=0),this._spinning++):(this._spinning--,this._spinning<=0&&this._spinner&&(this._spinner.stop(),this._spinner=null))}},t=function(){this.on("layeradd",function(n){n.layer.loading&&this.spin(!0),"function"==typeof n.layer.on&&(n.layer.on("data:loading",function(){this.spin(!0)},this),n.layer.on("data:loaded",function(){this.spin(!1)},this))},this),this.on("layerremove",function(n){n.layer.loading&&this.spin(!1),"function"==typeof n.layer.on&&(n.layer.off("data:loaded"),n.layer.off("data:loading"))},this)}
"function"==typeof define&&define.amd?(define(["leaflet"],i),define(["leaflet"],t)):"object"==typeof exports&&(module.exports={SpinMapMixin:i,SpinMapInitHook:t}),"undefined"!=typeof n&&n.L&&(L.Map.include(i),L.Map.addInitHook(t))}(window)

// leaflet-easybutton.2.4.0.js

!function(n){

// This is for grouping buttons into a bar
// takes an array of `L.easyButton`s and
// then the usual `.addTo(map)`
L.Control.EasyBar = L.Control.extend({

  options: {
    position:       'topleft',  // part of leaflet's defaults
    id:             null,       // an id to tag the Bar with
    leafletClasses: true        // use leaflet classes?
  },


  initialize: function(buttons, options){

    if(options){
      L.Util.setOptions( this, options );
    }

    this._buildContainer();
    this._buttons = [];

    for(var i = 0; i < buttons.length; i++){
      buttons[i]._bar = this;
      buttons[i]._container = buttons[i].button;
      this._buttons.push(buttons[i]);
      this.container.appendChild(buttons[i].button);
    }

  },


  _buildContainer: function(){
    this._container = this.container = L.DomUtil.create('div', '');
    this.options.leafletClasses && L.DomUtil.addClass(this.container, 'leaflet-bar easy-button-container leaflet-control');
    this.options.id && (this.container.id = this.options.id);
  },


  enable: function(){
    L.DomUtil.addClass(this.container, 'enabled');
    L.DomUtil.removeClass(this.container, 'disabled');
    this.container.setAttribute('aria-hidden', 'false');
    return this;
  },


  disable: function(){
    L.DomUtil.addClass(this.container, 'disabled');
    L.DomUtil.removeClass(this.container, 'enabled');
    this.container.setAttribute('aria-hidden', 'true');
    return this;
  },


  onAdd: function () {
    return this.container;
  },

  addTo: function (map) {
    this._map = map;

    for(var i = 0; i < this._buttons.length; i++){
      this._buttons[i]._map = map;
    }

    var container = this._container = this.onAdd(map),
        pos = this.getPosition(),
        corner = map._controlCorners[pos];

    L.DomUtil.addClass(container, 'leaflet-control');

    if (pos.indexOf('bottom') !== -1) {
      corner.insertBefore(container, corner.firstChild);
    } else {
      corner.appendChild(container);
    }

    return this;
  }

});

L.easyBar = function(){
  var args = [L.Control.EasyBar];
  for(var i = 0; i < arguments.length; i++){
    args.push( arguments[i] );
  }
  return new (Function.prototype.bind.apply(L.Control.EasyBar, args));
};

// L.EasyButton is the actual buttons
// can be called without being grouped into a bar
L.Control.EasyButton = L.Control.extend({

  options: {
    position:  'topleft',       // part of leaflet's defaults

    id:        null,            // an id to tag the button with

    type:      'replace',       // [(replace|animate)]
                                // replace swaps out elements
                                // animate changes classes with all elements inserted

    states:    [],              // state names look like this
                                // {
                                //   stateName: 'untracked',
                                //   onClick: function(){ handle_nav_manually(); };
                                //   title: 'click to make inactive',
                                //   icon: 'fa-circle',    // wrapped with <a>
                                // }

    leafletClasses:   true,     // use leaflet styles for the button
    tagName:          'button',
  },



  initialize: function(icon, onClick, title, id){

    // clear the states manually
    this.options.states = [];

    // add id to options
    if(id != null){
      this.options.id = id;
    }

    // storage between state functions
    this.storage = {};

    // is the last item an object?
    if( typeof arguments[arguments.length-1] === 'object' ){

      // if so, it should be the options
      L.Util.setOptions( this, arguments[arguments.length-1] );
    }

    // if there aren't any states in options
    // use the early params
    if( this.options.states.length === 0 &&
        typeof icon  === 'string' &&
        typeof onClick === 'function'){

      // turn the options object into a state
      this.options.states.push({
        icon: icon,
        onClick: onClick,
        title: typeof title === 'string' ? title : ''
      });
    }

    // curate and move user's states into
    // the _states for internal use
    this._states = [];

    for(var i = 0; i < this.options.states.length; i++){
      this._states.push( new State(this.options.states[i], this) );
    }

    this._buildButton();

    this._activateState(this._states[0]);

  },

  _buildButton: function(){

    this.button = L.DomUtil.create(this.options.tagName, '');

    if (this.options.tagName === 'button') {
        this.button.setAttribute('type', 'button');
    }

    if (this.options.id ){
      this.button.id = this.options.id;
    }

    if (this.options.leafletClasses){
      L.DomUtil.addClass(this.button, 'easy-button-button leaflet-bar-part leaflet-interactive');
    }

    // don't let double clicks and mousedown get to the map
    L.DomEvent.addListener(this.button, 'dblclick', L.DomEvent.stop);
    L.DomEvent.addListener(this.button, 'mousedown', L.DomEvent.stop);
    L.DomEvent.addListener(this.button, 'mouseup', L.DomEvent.stop);

    // take care of normal clicks
    L.DomEvent.addListener(this.button,'click', function(e){
      L.DomEvent.stop(e);
      this._currentState.onClick(this, this._map ? this._map : null );
      this._map && this._map.getContainer().focus();
    }, this);

    // prep the contents of the control
    if(this.options.type == 'replace'){
      this.button.appendChild(this._currentState.icon);
    } else {
      for(var i=0;i<this._states.length;i++){
        this.button.appendChild(this._states[i].icon);
      }
    }
  },


  _currentState: {
    // placeholder content
    stateName: 'unnamed',
    icon: (function(){ return document.createElement('span'); })()
  },



  _states: null, // populated on init



  state: function(newState){

    // when called with no args, it's a getter
    if (arguments.length === 0) {
      return this._currentState.stateName;
    }

    // activate by name
    if(typeof newState == 'string'){

      this._activateStateNamed(newState);

    // activate by index
    } else if (typeof newState == 'number'){

      this._activateState(this._states[newState]);
    }

    return this;
  },


  _activateStateNamed: function(stateName){
    for(var i = 0; i < this._states.length; i++){
      if( this._states[i].stateName == stateName ){
        this._activateState( this._states[i] );
      }
    }
  },

  _activateState: function(newState){

    if( newState === this._currentState ){

      // don't touch the dom if it'll just be the same after
      return;

    } else {

      // swap out elements... if you're into that kind of thing
      if( this.options.type == 'replace' ){
        this.button.appendChild(newState.icon);
        this.button.removeChild(this._currentState.icon);
      }

      if( newState.title ){
        this.button.title = newState.title;
      } else {
        this.button.removeAttribute('title');
      }

      // update classes for animations
      for(var i=0;i<this._states.length;i++){
        L.DomUtil.removeClass(this._states[i].icon, this._currentState.stateName + '-active');
        L.DomUtil.addClass(this._states[i].icon, newState.stateName + '-active');
      }

      // update classes for animations
      L.DomUtil.removeClass(this.button, this._currentState.stateName + '-active');
      L.DomUtil.addClass(this.button, newState.stateName + '-active');

      // update the record
      this._currentState = newState;

    }
  },

  enable: function(){
    L.DomUtil.addClass(this.button, 'enabled');
    L.DomUtil.removeClass(this.button, 'disabled');
    this.button.setAttribute('aria-hidden', 'false');
    return this;
  },

  disable: function(){
    L.DomUtil.addClass(this.button, 'disabled');
    L.DomUtil.removeClass(this.button, 'enabled');
    this.button.setAttribute('aria-hidden', 'true');
    return this;
  },

  onAdd: function(map){
    var bar = L.easyBar([this], {
      position: this.options.position,
      leafletClasses: this.options.leafletClasses
    });
    this._anonymousBar = bar;
    this._container = bar.container;
    return this._anonymousBar.container;
  },

  removeFrom: function (map) {
    if (this._map === map)
      this.remove();
    return this;
  },

});

L.easyButton = function(/* args will pass automatically */){
  var args = Array.prototype.concat.apply([L.Control.EasyButton],arguments);
  return new (Function.prototype.bind.apply(L.Control.EasyButton, args));
};

/*************************
 *
 * util functions
 *
 *************************/

// constructor for states so only curated
// states end up getting called
function State(template, easyButton){

  this.title = template.title;
  this.stateName = template.stateName ? template.stateName : 'unnamed-state';

  // build the wrapper
  this.icon = L.DomUtil.create('span', '');

  L.DomUtil.addClass(this.icon, 'button-state state-' + this.stateName.replace(/(^\s*|\s*$)/g,''));
  this.icon.innerHTML = buildIcon(template.icon);
  this.onClick = L.Util.bind(template.onClick?template.onClick:function(){}, easyButton);
}

function buildIcon(ambiguousIconString) {

  var tmpIcon;

  // does this look like html? (i.e. not a class)
  if( ambiguousIconString.match(/[&;=<>"']/) ){

    // if so, the user should have put in html
    // so move forward as such
    tmpIcon = ambiguousIconString;

  // then it wasn't html, so
  // it's a class list, figure out what kind
  } else {
      ambiguousIconString = ambiguousIconString.replace(/(^\s*|\s*$)/g,'');
      tmpIcon = L.DomUtil.create('span', '');

      if( ambiguousIconString.indexOf('fa-') === 0 ){
        L.DomUtil.addClass(tmpIcon, 'fa '  + ambiguousIconString)
      } else if ( ambiguousIconString.indexOf('glyphicon-') === 0 ) {
        L.DomUtil.addClass(tmpIcon, 'glyphicon ' + ambiguousIconString)
      } else {
        L.DomUtil.addClass(tmpIcon, /*rollwithit*/ ambiguousIconString)
      }

      // make this a string so that it's easy to set innerHTML below
      tmpIcon = tmpIcon.outerHTML;
  }

  return tmpIcon;
}

}();


// leaflet-clicktolerance 1.0.1.js
/*
!function (L, proj4) {
    L.Path.include({
        _clickTolerance: function() {
            return (this.options.clickTolerance ? this.options.clickTolerance : 0) + (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0);
        }
    });
};
*/
// ----- end of quake-json-ph.js bundle ------
