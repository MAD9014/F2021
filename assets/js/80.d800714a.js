(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{458:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"week-6-elements-attributes-imports-xml-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-6-elements-attributes-imports-xml-json"}},[t._v("#")]),t._v(" Week 6 - Elements, Attributes, Imports, XML & JSON")]),t._v(" "),a("h2",{attrs:{id:"styling-with-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styling-with-javascript"}},[t._v("#")]),t._v(" Styling with JavaScript")]),t._v(" "),a("p",[t._v("We can use JavaScript to change the appearance of a page. This is useful when you want to change the look of elements, or make things appear or disappear as the user interacts with them.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week6/style.html"}},[t._v("Learn about styling with JS")])],1),t._v(" "),a("h2",{attrs:{id:"element-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-attributes"}},[t._v("#")]),t._v(" Element Attributes")]),t._v(" "),a("p",[t._v("Elements have tag names, ids and classes that we use with CSS to target them. However, they also have other attributes. Many of the attributes have matching JS properties too. Even if they don't have a matching property we can access the value of the property or add new ones.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week6/attr.html"}},[t._v("Learn about Element Attributes")])],1),t._v(" "),a("h2",{attrs:{id:"how-to-import-data-in-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-import-data-in-nodejs"}},[t._v("#")]),t._v(" How to Import Data in NodeJS")]),t._v(" "),a("p",[t._v("When you are writing JavaScript in NodeJS you can import either "),a("code",[t._v("JavaScript")]),t._v(" objects or "),a("code",[t._v("JSON")]),t._v(" objects from another file into your current JS file.")]),t._v(" "),a("p",[a("code",[t._v("JSON")]),t._v(" files will be saved with a "),a("code",[t._v(".json")]),t._v(" file extension. They must comply with all the rules for JSON. That means, no variable names, no semi-colons, no comments, etc. We can import them directly from the other file into our JavaScript as follows:")]),t._v(" "),a("p",[t._v("Here is the contents of a sample "),a("code",[t._v("JSON")]),t._v(" file called "),a("code",[t._v("class.json")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"class"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MAD9014"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"professor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Steve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"year"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"students"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tony"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rashad"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Adam"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Su Cheng"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vladimir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("If we have that "),a("code",[t._v("JSON")]),t._v(" file in the same folder, we can import it like this into our "),a("code",[t._v("sample.js")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./class.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The "),a("code",[t._v("./")]),t._v(" in front of the name of the "),a("code",[t._v("JSON")]),t._v(" file is important.")]),t._v(" "),a("p",[a("strong",[t._v("THIS IS ONLY FOR NODE JS. IT DOES NOT WORK IN THE BROWSER")])]),t._v(" "),a("p",[t._v("Alternatively, you could "),a("code",[t._v("require")]),t._v(" another JavaScript file. However, that would require you adding an "),a("code",[t._v("export")]),t._v(" command to the JavaScript file that you plan to import.")]),t._v(" "),a("p",[t._v("Here is a sample of the "),a("code",[t._v("class.js")]),t._v(" file with the data")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MAD9014'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  professor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Steve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  students"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tony'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Rashad'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Adam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Su Cheng'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vladimir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("and here is how we could import that data into our "),a("code",[t._v("sample.js")]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./class.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("You can learn more about importing and exporting for the browser in this video.")]),t._v(" "),a("YouTube",{attrs:{title:"ES6 modules!",url:"https://youtube.com/embed/BLak5aR4qXw"}}),t._v(" "),a("p",[t._v("And more about importing and exporting for NodeJS in this browser.")]),t._v(" "),a("YouTube",{attrs:{title:"Node require method",url:"https://youtube.com/embed/pP4kjXykbio"}}),t._v(" "),a("h2",{attrs:{id:"cloning-and-copying-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloning-and-copying-html"}},[t._v("#")]),t._v(" Cloning and Copying HTML")]),t._v(" "),a("p",[t._v("When you tell an Element that it is being Appended to a specific place on a webpage, this usually means that you are appending an Element that you just created. However, you can append elements that already exist on the page.")]),t._v(" "),a("p",[t._v("If you append an element that already exists, that means you will actually move the Element from its old position to the new one.")]),t._v(" "),a("p",[t._v("If you want to add a duplicate of the Element then you need to use the "),a("code",[t._v("cloneNode")]),t._v(" method.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week6/clone.html"}},[t._v("Learn about cloning HTML")])],1),t._v(" "),a("p",[t._v("Here "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=O6BNfJz3rgs&list=PLyuRouwmQCjlrOdLPmPMr04lARwMicfLe",target:"_blank",rel:"noopener noreferrer"}},[t._v("is the full playlist of DOM videos"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[t._v("#")]),t._v(" XML")]),t._v(" "),a("p",[t._v("XML is a data format that is designed to be human readable first.")]),t._v(" "),a("p",[t._v("It is a markup language like HTML except you get to decide on the tags yourself.")]),t._v(" "),a("p",[t._v("Most importantly, it is for "),a("strong",[t._v("DATA NOT PRESENTATION")]),t._v(".")]),t._v(" "),a("YouTube",{attrs:{title:"XML Intro",url:"https://youtube.com/embed/CiXeEkbj_yg"}}),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/standards/xml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official reference for XML"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("There are four special characters that need to always be handled in your XML files - "),a("code",[t._v("<")]),t._v(", "),a("code",[t._v(">")]),t._v(", "),a("code",[t._v("&")]),t._v(", and "),a("code",[t._v('"')]),t._v(". These four must be written as character entities - "),a("code",[t._v("&lt;")]),t._v(" "),a("code",[t._v("&gt;")]),t._v(" "),a("code",[t._v("&amp;")]),t._v(" and "),a("code",[t._v("&quot;")]),t._v(".")]),t._v(" "),a("p",[t._v("Lynda.com video about "),a("a",{attrs:{href:"https://www.lynda.com/CSS-tutorials/Working-Data-Web/133326-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("working with data formats like XML and JSON"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week6/xml.html"}},[t._v("Learn more about Reading from XML files")])],1),t._v(" "),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),a("p",[t._v("JSON stands for JavaScript Object Notation. It is similar to XML in that it is a data file format but it is a slightly more compressed format. The reduced size means that your data files are smaller but it also means that they can be a little harder to read.")]),t._v(" "),a("YouTube",{attrs:{title:"JSON Intro",url:"https://youtube.com/embed/P2LdhPpqSiU"}}),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official reference site for JSON"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("All the unicode characters can be found on "),a("a",{attrs:{href:"http://www.unicode.org/charts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Unicode charts"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Lynda.com video about "),a("a",{attrs:{href:"https://www.lynda.com/CSS-tutorials/Working-Data-Web/133326-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("working with data formats like XML and JSON"),a("OutboundLink")],1)]),t._v(" "),a("YouTube",{attrs:{title:"JSON vs JavaScript Objects",url:"https://www.youtube.com/embed/912_cPllMyg"}}),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week6/json.html"}},[t._v("Learn about Reading JSON with JavaScript")])],1),t._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("TODO Before next week")]),t._v(" "),a("ul",[a("li",[t._v("If you have not read all these notes and watched the videos from this week, do that first.")]),t._v(" "),a("li",[t._v("Finish and submit the exercises "),a("code",[t._v("Exercise 9 - Array Looping")]),t._v(" and "),a("code",[t._v("Exercise 10 - XML-JSON")]),t._v(" before 5pm on this Thursday.\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/assignments/exer.html"}},[t._v("Exercises page")])],1)])]),t._v(" "),a("li",[t._v("Complete "),a("strong",[t._v("Hybrid 8 - Arrays of Objects")]),t._v(" before next Monday at 5pm.\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/assignments/hybrid.html"}},[t._v("Hybrid page")])],1)])]),t._v(" "),a("li",[t._v("Read ahead the notes for "),a("RouterLink",{attrs:{to:"/modules/week7/"}},[t._v("week 7")]),t._v(" to prepare for class.")],1),t._v(" "),a("li",[t._v("Read the description for "),a("RouterLink",{attrs:{to:"/assignments/assign.html#_1-data-import-and-process"}},[t._v("Assignment 1")]),t._v(" which is due on Friday Oct 23rd.")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);