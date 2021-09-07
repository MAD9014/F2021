(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{399:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"async-and-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-and-await"}},[t._v("#")]),t._v(" Async and Await")]),t._v(" "),a("p",[t._v("One of the features added in ES6 was "),a("code",[t._v("async")]),t._v(" and "),a("code",[t._v("await")]),t._v(". The combination of these keywords lets us use asynchronous features like "),a("code",[t._v("fetch")]),t._v(" inside a function but in a synchronous way.")]),t._v(" "),a("p",[t._v("Here is an example.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.example.com/items/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now we have the actual response object in our response variable")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now we actually have the JSON data inside the data variable")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("This works by wrapping the asynchronous call in a Promise and making the rest of the function wait for the result before continuing. Without the "),a("code",[t._v("await")]),t._v(" the variables "),a("code",[t._v("response")]),t._v(" and "),a("code",[t._v("data")]),t._v(" would not work properly. "),a("code",[t._v("response")]),t._v(" would hold the Promise object which is the fetch waiting for a response. The next line, where we call the "),a("code",[t._v("json()")]),t._v(" method would fail because that is not a valid method to call on a fetch or promise object.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("await")]),t._v(" is what solves the problem and makes the code wait for the result of the "),a("code",[t._v("fetch()")]),t._v(" and the "),a("code",[t._v("json()")]),t._v(" methods.")]),t._v(" "),a("YouTube",{attrs:{title:"Intro to async and await",url:"https://www.youtube.com/embed/BTDeq5HC5bU"}}),t._v(" "),a("YouTube",{attrs:{title:"Combining async and await with Promises",url:"https://www.youtube.com/embed/lGJbPSI-12E"}}),t._v(" "),a("YouTube",{attrs:{title:"JS interview async question",url:"https://www.youtube.com/embed/j1ykOrC2f0A"}}),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week10/"}},[t._v("Back to Week main page")])],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);