(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{375:function(e,t,r){e.exports=r.p+"assets/img/ScreenShot.56c65496.png"},415:function(e,t,r){"use strict";r.r(t);var a=r(28),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"darksky-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#darksky-api"}},[e._v("#")]),e._v(" DarkSky API")]),e._v(" "),a("p",[e._v("DarkSky (formerly forecast.io) is a great weather data API. To use it you need to register as a developer with the website.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://darksky.net/dev/register",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://darksky.net/dev/register"),a("OutboundLink")],1),e._v(" - register here.")]),e._v(" "),a("p",[e._v("Once you have registered then you will be able to make up to 1000 calls per day to the API for free.")]),e._v(" "),a("p",[e._v("After logging in, you will see a page that looks like this. The important thing on this page is the Secret Key. This image shows an old version of my key. You will get a unique key that is valid for your account. You will need that key for every call you make to the API.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(375),alt:"Screen Shot"}})]),e._v(" "),a("p",[e._v("A basic call to the API consists of a URL with the endpoint for the API, your secret key, and a latitude and longitude.")]),e._v(" "),a("p",[e._v("Eg: "),a("code",[e._v("https://api.darksky.net/forecast/[your secret key here]/37.8267,-122.4233")])]),e._v(" "),a("p",[e._v("This page has an example of the JSON response you get back. - "),a("a",{attrs:{href:"https://darksky.net/dev/docs/forecast",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://darksky.net/dev/docs/forecast"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The key, latitude, and longitude are the required parameters.")]),e._v(" "),a("p",[e._v("There are also several optional parameters. All the optional parameters must be added as query string parameters.")]),e._v(" "),a("p",[a("code",[e._v("https://api.darksky.net/forecast/[your secret key here]/37.8267,-122.4233?units=ca&lang=de")])]),e._v(" "),a("p",[e._v("This example has set the language as German (de - Deutsch) and the units for reporting the data as Canadian (metric).")]),e._v(" "),a("p",[e._v('Another optional parameter is "excludes". It is used to remove some of the blocks from the response, which reduces the size of the returned data and speeds things up and makes it easier to cache results.')]),e._v(" "),a("p",[a("a",{attrs:{href:"https://darksky.net/45.4207,-75.7023",target:"_blank",rel:"noopener noreferrer"}},[e._v("DarkSky Website"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://darksky.net/dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer reference"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://api.darksky.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API endpoint"),a("OutboundLink")],1),e._v(" needs API key to work")]),e._v(" "),a("YouTube",{attrs:{title:"DarkSky API",url:"https://www.youtube.com/embed/6f7EJ6GcD8Q"}}),e._v(" "),a("h2",{attrs:{id:"important-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[e._v("#")]),e._v(" Important Notes")]),e._v(" "),a("p",[e._v("Currently, DarkSky does NOT allow CORS requests from the browser.")]),e._v(" "),a("p",[e._v("You can place the URL for the call you want to make in the location bar of your browser to view the data.")]),e._v(" "),a("p",[e._v("However, if you want to get the data to your JavaScript then you need to:")]),e._v(" "),a("p",[e._v("Use a CURL call from a PHP page to pass the data from DarkSky back to your JavaScript. The PHP CURL call must reside on the same server as your JavaScript.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week11/"}},[e._v("Back to Week main page")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);