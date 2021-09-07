(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{413:function(e,t,r){"use strict";r.r(t);var o=r(28),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bitwise-operators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-operators"}},[e._v("#")]),e._v(" Bitwise Operators")]),e._v(" "),r("p",[e._v("The Bitwise operators allow us to use JavaScript and work with numbers at the binary level.")]),e._v(" "),r("h2",{attrs:{id:"the-bitwise-and-operator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-bitwise-and-operator"}},[e._v("#")]),e._v(" The Bitwise AND operator")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("& - binary AND operator\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("The binary & operator is used to AND two numbers at the binary level")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  11001010\n& 00001111  //the result of this is 00001010\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("For each bit we compare the matching positions if both are a 1 then the result in that position is 1.")]),e._v(" "),r("h2",{attrs:{id:"the-bitwise-shift-operators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-bitwise-shift-operators"}},[e._v("#")]),e._v(" The Bitwise Shift Operators")]),e._v(" "),r("p",[e._v("Sometimes we want to trim off the last few digits of a binary number or we want to add some more digits. The shift operators let us do that. The best example of this is when we want to extract the red, green, and blue parts of a colour value.")]),e._v(" "),r("p",[e._v("Hex colours are made up of three values "),r("code",[e._v("00-FF")]),e._v(", "),r("code",[e._v("00-FF")]),e._v(", and "),r("code",[e._v("00-FF")]),e._v(". Each one is a number between 0 and 255.")]),e._v(" "),r("p",[e._v("In binary, 255 is "),r("code",[e._v("11111111")]),e._v(". That is 8 ones. So, for each colour there are 8 bits. The colour white is (255, 255, 255) or "),r("code",[e._v("#FFFFFF")]),e._v(".")]),e._v(" "),r("p",[e._v("In binary white would be "),r("code",[e._v("11111111 11111111 11111111")]),e._v(". That is why Jpegs are called 24 bit images. Each pixel is a colour made up of 24 bits. Black would be represented by 24 zeroes - "),r("code",[e._v("00000000 00000000 00000000")]),e._v(".")]),e._v(" "),r("p",[e._v("If you write 24 ones as a decimal number it is 2 to the power of 24 or 16,777,216.")]),e._v(" "),r("p",[e._v("A random colour would be a value between 0 and 16,777,216.")]),e._v(" "),r("p",[e._v("So, if we had the random number 1,654,344, in binary that would be "),r("code",[e._v("00011001 00111110 01001000")]),e._v(". The first 8 bits represent the red colour, the middle 8 bits are the green value, and the last 8 bits are the blue value.")]),e._v(" "),r("p",[e._v("If you want to extract those three parts of the one colour, we will use the shift operator.")]),e._v(" "),r("p",[e._v("For the red colour, we will shift the bits 16 places to the right. Basically, we are stripping off the rightmost 16 bits. Leaving us only the first 8 bits "),r("code",[e._v("00011001")]),e._v(". In decimal, that would be - 25.")]),e._v(" "),r("p",[e._v("For the blue colour, we will use the AND operator. We AND the whole number with 255 (or "),r("code",[e._v("11111111")]),e._v("). This will make the left most 16 bits zero. Only the 8 right most bits could possibly line up with our 255. The result will be "),r("code",[e._v("01001000")]),e._v(" or 72.")]),e._v(" "),r("p",[e._v("For the green colour we need to do both things - shift over 8 bits and then AND the right most 8 bits with "),r("code",[e._v("11111111")]),e._v(" (255). The green portion "),r("code",[e._v("00111110")]),e._v(" is 62.")]),e._v(" "),r("p",[e._v("So, the RGB version of "),r("code",[e._v("00011001 00111110 01001000")]),e._v(" is rgb(25, 62, 72).")]),e._v(" "),r("h2",{attrs:{id:"codepen-samples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#codepen-samples"}},[e._v("#")]),e._v(" Codepen Samples")]),e._v(" "),r("p",[e._v("Here are some CodePens using the Bitwise operators.")]),e._v(" "),r("h3",{attrs:{id:"generating-a-random-colour-displaying-it-in-rgb-with-contrasting-text"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-random-colour-displaying-it-in-rgb-with-contrasting-text"}},[e._v("#")]),e._v(" Generating a Random Colour, Displaying it in RGB with Contrasting Text")]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/mad-d/embed/rrmJOv/?height=465&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[e._v(".")]),e._v(" "),r("h3",{attrs:{id:"converting-from-hex-to-decimal-numbers-for-colours"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#converting-from-hex-to-decimal-numbers-for-colours"}},[e._v("#")]),e._v(" Converting from HEX to decimal numbers for Colours")]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/mad-d/embed/wzdpXG/?height=439&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"439",allowfullscreen:"allowfullscreen"}},[e._v(".")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://s.codepen.io/mad-d/debug/RGVQBK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Codepen calculating Odd and Even"),r("OutboundLink")],1),e._v(" - open this one in a new page and open the development tools console to see the results.")]),e._v(" "),r("YouTube",{attrs:{title:"Tutorial about Bitwise Operators",url:"https://youtube.com/embed/RRyxCmLX_ag"}}),e._v(" "),r("p",[e._v("A practical use for Bitwise operators, beyond calculating odd or even, is saving user permissions inside a single number.")]),e._v(" "),r("YouTube",{attrs:{title:"bitwise permissions",url:"https://www.youtube.com/embed/EVvZLfJtAK8"}}),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN reference for Bitwise operators"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/modules/week11/"}},[e._v("Back to Week main page")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);