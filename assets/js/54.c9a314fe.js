(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{432:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"week-2-conditionals-and-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#week-2-conditionals-and-functions"}},[t._v("#")]),t._v(" Week 2 - Conditionals and Functions")]),t._v(" "),s("h2",{attrs:{id:"object-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-basics"}},[t._v("#")]),t._v(" Object Basics")]),t._v(" "),s("p",[t._v("As discussed last week, when you create a variable and put something inside it, the thing that you are putting inside is either a Primitive value OR an Object.")]),t._v(" "),s("p",[t._v("JavaScript comes with lots of pre-built objects, but we can also create our own generic objects to hold any information we want. Here is a sample bit of JavaScript that creates an Object with four properties inside it.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" steve "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  job"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Professor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'griffis@algonquincollege.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("Two of the property values hold String primitive values, one holds a number primitive value, and the last holds a Boolean primitive value.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/object.html"}},[t._v("Learn more about Object in JavaScript")])],1),t._v(" "),s("h2",{attrs:{id:"booleans"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#booleans"}},[t._v("#")]),t._v(" Booleans")]),t._v(" "),s("p",[t._v("Booleans are one of the Primitive types. They can have a value of "),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")]),t._v(". The value must be written in lowercase and have no quotation marks around it. However, other values in JavaScript will also be considered either "),s("code",[t._v("truthy")]),t._v(" or "),s("code",[t._v("falsy")]),t._v(".")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/falsy.html"}},[t._v("Learn about truthy and falsy")])],1),t._v(" "),s("h2",{attrs:{id:"if-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-statements"}},[t._v("#")]),t._v(" if Statements")]),t._v(" "),s("p",[t._v("When your program needs to make a decision and carry out different tasks based on the value of one or more variables, then an "),s("code",[t._v("if")]),t._v(" statement is how we do this.")]),t._v(" "),s("p",[t._v("They are known as Control Flow statements. Here is a simple example:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x is less than 100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x is more than or equal to 100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/if.html"}},[t._v("Learn more about if statements")])],1),t._v(" "),s("h2",{attrs:{id:"ternary-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ternary-statements"}},[t._v("#")]),t._v(" Ternary Statements")]),t._v(" "),s("p",[t._v("The ternary statement allows us to write simple logic statements similar to an "),s("code",[t._v("if..else")]),t._v(" statement but one one line, with less syntax. Here is a simple example of one:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//y will be assigned either the value 50 or the value 150")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//depending on the value of x.")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/ternary.html"}},[t._v("Learn about ternary statments")])],1),t._v(" "),s("h2",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),s("p",[t._v("In JavaScript, functions are a way to bundle together a series of commands so that they can be called all together at the same time. Here is an example of what a function declaration looks like.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//generate a random number between 0 and 0.99999999")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//tell the  doSomething function to run")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/functions.html"}},[t._v("Learn more about functions")])],1),t._v(" "),s("h2",{attrs:{id:"scope-and-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope-and-hoisting"}},[t._v("#")]),t._v(" Scope and Hoisting")]),t._v(" "),s("p",[t._v("Scope is a term that describes the area in your code where each variable and function is visible to other parts of your code.")]),t._v(" "),s("p",[t._v("When variables and functions are declared, they are actually hoisted to the top of their scope. This is done before any of your code is executed.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week2/scope.html"}},[t._v("Learn more about scope and hoisting")])],1),t._v(" "),s("h2",{attrs:{id:"future-video-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-video-reference"}},[t._v("#")]),t._v(" Future Video Reference")]),t._v(" "),s("p",[t._v("When trying to find one of Steve's videos on a certain topic, go to the "),s("a",{attrs:{href:"https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ/videos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Channel Home page Video Tab"),s("OutboundLink")],1),t._v(" and click on the Search icon beside the About tab. You can type in the name of the video title or part of it.")]),t._v(" "),s("p",[t._v("Alternatively, you can go to the "),s("a",{attrs:{href:"https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ/playlists",target:"_blank",rel:"noopener noreferrer"}},[t._v("playlist page"),s("OutboundLink")],1),t._v(" The videos are grouped by topic into playlists. Eg: Arrays, DOM, Events, Functions, etc.")]),t._v(" "),s("h2",{attrs:{id:"special-character-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#special-character-reference"}},[t._v("#")]),t._v(" Special Character Reference")]),t._v(" "),s("p",[t._v("Here is a list of the special characters that you will use in programming and what they are each called. Some have multiple names")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(': colon\n; semi-colon\n{ } curly braces\n[ ] square-brackets\n( ) parentheses\n` backtick\n\' single quotes\n" double quotes\n< > angle brackets (less than, greater than)\n! not operator or bang operator\n& ampersand\n# hashtag, pound sign, octothorpe\n- dash, hyphen, subtraction operator\n+ addition operator\n* asterix, multiplication operator\n% percentage sign, modulus operator\n/ forward slash, division operator\n\\ back slash\n_ underscore\n~ tilde\n, comma\n. period, dot operator\n? question mark\n^ caret (pronounced like "Carrot")\n@ at-sign\n| pipe character, pipe operator\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h2",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("TODO Before next week")]),t._v(" "),s("ul",[s("li",[t._v("If you have not read all these notes and watched the videos from this week, do that first.")]),t._v(" "),s("li",[t._v("Finish and submit the exercises "),s("code",[t._v("Exercise 1 - variables")]),t._v(" and "),s("code",[t._v("Exercise 2 - objects")]),t._v(" this week, before 5pm on Tuesday.\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/assignments/exer.html"}},[t._v("Exercises page")])],1)])]),t._v(" "),s("li",[t._v("Complete "),s("strong",[t._v("Hybrid 4 - Websites")]),t._v(" before next Monday at 5pm.\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/assignments/hybrid.html"}},[t._v("Hybrid page")])],1)])]),t._v(" "),s("li",[t._v("Read ahead the notes for "),s("RouterLink",{attrs:{to:"/modules/week3/"}},[t._v("week 3")]),t._v(" to prepare for class and the quiz.")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);