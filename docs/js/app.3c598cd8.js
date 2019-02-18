(function(t){function e(e){for(var s,r,o=e[0],l=e[1],p=e[2],c=0,u=[];c<o.length;c++)r=o[c],a[r]&&u.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(u.length)u.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/splitpanes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0312":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),a=n("ce5b"),i=n.n(a);n("bf40"),n("15f5");s["default"].use(i.a,{iconfont:["md","fa"],theme:{primary:"#42b983",lightgrey:"#eee"}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"white"},[s("v-container",[s("div",{staticClass:"text-xs-center"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05"),height:"40"}}),s("h1",{staticClass:"mb-3 headline"},[t._v("Vue Split Panes")]),s("p",{staticClass:"subheading"},[t._v("A Vue JS reliable, simple and touch-ready panes splitter / resizer.")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",[s("h2",{staticClass:"mt-5 mb-2 title"},[t._v("Features")]),s("ul",[s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Nesting supported")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Light weight & no dependencies other than Vue JS")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Responsive")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Support for touch devices")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Push other panes or not")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Double click a splitter to maximize pane")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Adding panes on the fly automatically adds splitters")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Don't bother with verbose children syntax, it's automatic")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Simple yet efficient")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("More features to come, like pane labels.")],1)])]),s("div",[s("div",{staticClass:"mt-5 mb-3 title"},[t._v("Github project")]),s("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[s("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[t._v("fab fa-github")]),s("a",{attrs:{href:"https://github.com/antoniandre/splitpanes",target:"_blank"}},[t._v("//github.com/antoniandre/splitpanes "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)],1)],1)],1),s("h2",{staticClass:"mt-5 mb-2 subheading"},[t._v("# Demo - try it yourself:"),s("a",{staticClass:"ml-2 d-inline-flex align-center",attrs:{href:"https://codepen.io/antoniandre/pen/XybPKP",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/XybPKP"),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"default-theme example example1",staticStyle:{height:"400px"}},[s("span",{attrs:{"splitpanes-min":"20"}},[t._v("1"),s("br"),s("em",{staticClass:"specs"},[t._v("I have a min width of 20%")])]),s("splitpanes",{staticClass:"default-theme example",attrs:{horizontal:""}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes style="height: 400px">\n  <span splitpanes-min="20">1</span>\n  <splitpanes horizontal>\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>')]),s("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes__pane {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes__pane span {\n  font-family: Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-size: 5em;\n  opacity: 0.6;\n}\n")]),s("h2",{staticClass:"mt-5 mb-2 headline"},[s("a",{attrs:{href:"#installation"}},[t._v("Installation")]),s("a",{attrs:{name:"installation"}})]),s("p",[t._v("You have two options: "),s("em",[t._v("NPM")]),s("strong",{staticClass:"mx-2"},[t._v("or")]),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag.")]),s("h3",[t._v("Via NPM")]),s("ssh-pre",{attrs:{language:"shell",label:"Shell"}},[t._v("npm i --S splitpanes")]),s("p",[t._v("Then import the component and CSS:")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your VueJS component.\nimport Splitpanes from 'splitpanes'\nimport 'splitpanes/dist/splitpanes.css'\n\nexport default {\n  components: { Splitpanes },\n  ...\n}\n")]),s("h3",[t._v("Via "),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag")]),s("p",[t._v("Include the Splitpanes script in your document "),s("span",{staticClass:"code"},[t._v("<head>")]),t._v(" as follows:")]),s("ssh-pre",{attrs:{language:"html",label:"HTML"}},[t._v('<head>\n  ...\n  <script src="https://unpkg.com/vue"><\/script>\n  <script src="https://unpkg.com/splitpanes"><\/script>\n  <link href="https://unpkg.com/splitpanes/dist/splitpanes.css" rel="stylesheet">\n</head>\n')]),s("h2",{staticClass:"mt-5 mb-2"},[s("a",{staticClass:"headline",attrs:{href:"#how-to-use"}},[t._v("How to use")]),s("a",{attrs:{name:"how-to-use"}})]),s("p",[t._v("Once included in your project, use as follows.\n")]),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes class="default-theme">\n  <div v-for="i in 3" :key="i">'+t._s("{{ i }}")+"</div>\n</splitpanes>\n")]),s("highlight-message",{attrs:{type:"success"}},[s("strong",[t._v("Have you noticed? No splitter tags and just use your own tags as you want,\nsplitpanes will do the rest!"),s("br")]),s("span",[t._v("All the direct children of the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag will be\nwrapped into panes & the splitters will be added automatically between them.\n")])]),s("highlight-message",{attrs:{type:"tips"}},[t._v("By default the layout is 'column' (vertical), if you need you can set the attribute\n"),s("span",{staticClass:"code"},[t._v("horizontal")]),t._v(" on the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag to change the layout to rows.\n")]),s("highlight-message",{attrs:{type:"tips"}},[t._v("The CSS is external so you can easily override or choose not to include it at all."),s("br"),t._v("\nIf you want to use it, you can also optionally use the CSS class "),s("span",{staticClass:"code"},[t._v("default-theme")]),t._v("\nat the root of your splitpanes to apply the default theme like on this page."),s("br"),t._v("\nIf you want to go with your own style, you can check the "),s("a",{attrs:{href:"#do-your-own-style"}},[t._v("Do Your Own Style example")]),t._v(".\n")]),s("h2",{staticClass:"mt-5 mb-2 headline"},[s("a",{attrs:{href:"#more-examples"}},[t._v("More examples")]),s("a",{attrs:{name:"more-examples"}})]),s("h3",{staticClass:"mb-2 subheading"},[s("a",{attrs:{href:"#horizontal-layout"}},[t._v("# Horizontal layout, push other panes, min & max use")]),s("a",{attrs:{name:"horizontal-layout"}})]),s("p",[t._v("You can also double click a splitter to maximize the next pane! (First pane splitter will be an option soon)")]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("span",{attrs:{"splitpanes-min":"20","splitpanes-max":"70"}},[t._v("1"),s("br"),s("em",{staticClass:"specs"},[t._v("I have a min height of 20% & max height of 70%")])]),s("span",[t._v("2")]),s("span",{attrs:{"splitpanes-max":"70"}},[t._v("3"),s("br"),s("em",{staticClass:"specs"},[t._v("I have a max height of 70%")])])]),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" horizontal style="height:400px">\n  <span splitpanes-min="20" splitpanes-max="70">1</span>\n  <span>2</span>\n  <span splitpanes-max="70">3</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#default-pane-width"}},[t._v("# Default pane width or height")]),s("a",{attrs:{name:"default-pane-width"}})]),s("p",[t._v("Provide dimension of your panes when they first load (will be used for the width or height respectively for the vertical or horizontal layout)."),s("br"),t._v("\nIf you provide a default width or height, make sure you provide it for all the panes and the total equals 100%."),s("br"),t._v("\nNote that default value is different than setting a min or max value.\n")]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("span",{attrs:{"splitpanes-default":"65"}},[t._v("1")]),s("span",{attrs:{"splitpanes-default":"10"}},[t._v("2")]),s("span",{attrs:{"splitpanes-default":"25"}},[t._v("3")])]),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" horizontal style="height:400px">\n  <span splitpanes-default="65">1</span>\n  <span splitpanes-default="10">2</span>\n  <span splitpanes-default="25">3</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#nested-splitpanes"}},[t._v("# Mix layout with nested splitpanes & prevent pushing other panes")]),s("a",{attrs:{name:"nested-splitpanes"}})]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/PypgKY",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/PypgKY "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:"","push-other-panes":!1}},[s("span",[t._v("1")]),s("splitpanes",{attrs:{"push-other-panes":!1}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" horizontal :push-other-panes="false" style="height:400px">\n  <span>1</span>\n  <splitpanes :push-other-panes="false">\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#lots-of-splitters"}},[t._v("# Lots of splitters & push other panes - all panes have a min width of 5%")]),s("a",{attrs:{name:"lots-of-splitters"}})]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"}},t._l(8,function(e){return s("span",{key:e,attrs:{"splitpanes-min":"5"}},[t._v(t._s(e))])}),0),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" style="height:400px">\n  <span v-for="i in 8" :key="i" splitpanes-min="5">'+t._s("{{ i }}")+"</span>\n</splitpanes>\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#adding-splitters-on-the-fly"}},[t._v("# Adding splitters on the fly")]),s("a",{attrs:{name:"adding-splitters-on-the-fly"}})]),s("p",[t._v("This example shows the reactivity when you add a new element dynamically in splitpanes."),s("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){t.panesNumber++}}},[s("v-icon",[t._v("add")]),t._v("Add pane")],1)],1),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"}},t._l(t.panesNumber,function(e){return s("span",{key:e},[t._v(t._s(e))])}),0),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<button @click="panesNumber++">Add pane</button>\n\n<splitpanes class="default-theme" style="height:400px">\n  <span v-for="i in panesNumber" :key="i">'+t._s("{{ i }}")+"</span>\n</splitpanes>\n")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your Vue component.\ndata: () => ({\n  panesNumber: 3\n})\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#in-depth-reactivity"}},[t._v("# In-depth reactivity")]),s("a",{attrs:{name:"in-depth-reactivity"}})]),s("p",[t._v("This example shows the reactivity when you modify anything in your component inside splitpanes."),s("br"),s("strong",[t._v("By default and for performance, the reactivity is limited to slot deletion and slot creation."),s("br"),t._v("\nWith the option "),s("span",{staticClass:"code"},[t._v("watchSlots")]),t._v(" you can also track any change on the slots."),s("br")]),t._v("If a reactive property is set outside of splitpanes it will be updated inside splitpanes, and accessible from all the panes."),s("br"),t._v("\nYou can also update a property that resides outside of splitpanes from inside a pane like in this example."),s("v-btn",{attrs:{color:"primary",small:""},on:{click:t.generateRandomNumber}},[s("v-icon",{staticClass:"mr-1",attrs:{size:"20"}},[t._v("sync")]),t._v("Generate 3 random numbers")],1),s("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){return t.incrementNumber(3)}}},[s("v-icon",{staticClass:"mr-1",attrs:{size:"20"}},[t._v("add")]),t._v("Increment pane #3")],1)],1),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:"","watch-slots":""}},[s("splitpanes",{attrs:{"watch-slots":""}},t._l(3,function(e){return s("div",{key:e,staticClass:"text-xs-center"},[s("span",[t._v(t._s(e)),s("br")]),s("em",[t._v("Number is: "+t._s(t.randomNums[e])),s("br")]),2===e?s("em",[t._v("Number on the left is: "+t._s(t.randomNums[1])),s("br"),t._v("\nNumber on the right is: "+t._s(t.randomNums[3])),s("br")]):t._e(),2!==e?s("v-btn",{staticClass:"align-center",staticStyle:{"min-width":"0"},attrs:{small:"",color:"primary"},on:{click:function(n){t.randomNums[e]=t.randomNums[e]+1}}},[s("v-icon",{attrs:{size:"20"}},[t._v("add")]),t._v("1")],1):t._e()],1)}),0),s("div",{staticClass:"text-xs-center"},[s("span",[t._v("4"),s("br")]),s("em",[t._v("- Nested splitpanes -"),s("br"),t._v("\n["+t._s(t.randomNums[1])+", "+t._s(t.randomNums[2])+", "+t._s(t.randomNums[3])+"]\n")])])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<v-btn @click="generateRandomNumber">Generate 3 random numbers</v-btn>\n<v-btn @click="incrementNumber(3)">Increment pane #3</v-btn>\n\n<splitpanes watch-slots horizontal class="default-theme" style="height:400px">\n  <splitpanes watch-slots>\n    <div v-for="i in 3" :key="i">\n      <span>'+t._s("{{ i }}")+"</span><br>\n      <em>Number is: "+t._s("{{ randomNums[i] }}")+'</em><br>\n      <em v-if="i === 2">\n        Number on the left is: '+t._s("{{ randomNums[1] }}")+"<br>\n        Number on the right is: "+t._s("{{ randomNums[3] }}")+'<br>\n      </em>\n      <v-btn(v-if="i !== 2" @click="randomNums[i] = randomNums[i] + 1">+1</v-btn>\n    </div>\n  </splitpanes>\n</splitpanes>\n  <div>\n    <span>4</span><br>\n    <em>\n      - Nested splitpanes -<br>\n      ['+t._s("{{ randomNums[1] }}")+", "+t._s("{{ randomNums[2] }}")+", "+t._s("{{ randomNums[1] }}")+"]\n    </em>\n  </div>\n")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your Vue component.\ndata: () => ({\n  randomNums: { 1: 0, 2: 0, 3: 0 }\n}),\nmethods: {\n  generateRandomNumber () {\n    this.randomNums = Object.assign(this.randomNums, {\n      1: Math.round(Math.random() * 100),\n      2: Math.round(Math.random() * 100),\n      3: Math.round(Math.random() * 100)\n    })\n  },\n  incrementNumber (i) {\n    this.randomNums[i]++\n  }\n}\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#emitted-events"}},[t._v("# Listening to emitted events")]),s("a",{attrs:{name:"emitted-events"}})]),s("p",[t._v("Four events are currently emitted from splitpanes: "),s("span",{staticClass:"code"},[t._v("ready")]),t._v(", "),s("span",{staticClass:"code"},[t._v("resize")]),t._v(", "),s("span",{staticClass:"code"},[t._v("pane-click")]),t._v(" & "),s("span",{staticClass:"code"},[t._v("pane-maximize")]),t._v(".")]),s("ul"),s("li",[s("span",{staticClass:"code"},[t._v("ready")]),t._v(" has no parameter and fires when splitpanes is ready")]),s("li",[s("span",{staticClass:"code"},[t._v("resize")]),t._v(" returns an array of all the panes objects with their dimensions, and fires while resizing (on mousemove/touchmove)")]),s("li",[s("span",{staticClass:"code"},[t._v("resized")]),t._v(" returns an array of all the panes objects with their dimensions, and fires once when the resizing stops (on mouseup/touchend)")]),s("li",[s("span",{staticClass:"code"},[t._v("pane-click")]),t._v(" returns the clicked pane object with its dimensions.")]),s("li",[s("span",{staticClass:"code"},[t._v("pane-maximize")]),t._v(" returns the maximized pane object with its dimensions."),s("br")]),s("p",[t._v("Try resizing panes and check the logs bellow.")]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},on:{resize:function(e){return t.log("resize",e)},resized:function(e){return t.log("resized",e)},"pane-maximize":function(e){return t.log("pane-maximize",e)},"pane-click":function(e){return t.log("pane-click",e)},ready:function(e){return t.log("ready",e)}}},t._l(3,function(e){return s("span",{key:e,attrs:{"splitpanes-min":"10"}},[t._v(t._s(e))])}),0),s("pre",{staticClass:"ssh-pre",attrs:{"data-label":"Logs"}},[s("div",{staticClass:"grey--text"},[t._v("// "),s("strong",[t._v("Event name: ")]),s("span",[t._v("Event params")])]),t._l(t.logs,function(e,n){return s("div",{key:n},[s("strong",[t._v(t._s(e.name)+": ")]),s("span",[t._v(t._s(e.params))])])})],2),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes\n  class="default-theme"\n  @resize="log(\'resize\', $event)"\n  @resized="log(\'resized\', $event)"\n  @pane-maximize="log(\'pane-maximize\', $event)"\n  @pane-click="log(\'pane-click\', $event)"\n  @ready="log(\'ready\', $event)"\n  style="height:400px">\n  <span v-for="i in 3" :key="i" splitpanes-min="10">'+t._s("{{ i }}")+"</span>\n</splitpanes>\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#increased-touch-zone"}},[t._v("# Increased reactive touch zone for touch devices")]),s("a",{attrs:{name:"increased-touch-zone"}})]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/XxRZmB",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/XxRZmB "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"touch-example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{staticClass:"touch-example"},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("div",{staticClass:"text"},[s("p",[t._v("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!\n"),s("em",[t._v("Hover a splitter to see the Fat-fingers reactive zone. ")])])])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme touch-example" horizontal style="height:400px">\n  <splitpanes :push-other-panes="false">\n    <span>1</span>\n    <span>2</span>\n    <span>3</span>\n  </splitpanes>\n  <p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>\n</splitpanes>\n')]),s("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {background-color: #f8f8f8;}\n\n.splitpanes__splitter {background-color: #ccc;position: relative;}\n.splitpanes__splitter:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: opacity 0.4s;\n  background-color: rgba(255, 0, 0, 0.3);\n  opacity: 0;\n  z-index: 1;\n}\n.splitpanes__splitter:hover:before {opacity: 1;}\n.splitpanes--vertical > .splitpanes__splitter:before {left: -30px;right: -30px;height: 100%;}\n.splitpanes--horizontal > .splitpanes__splitter:before {top: -30px;bottom: -30px;width: 100%;}\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#do-your-own-style"}},[t._v("# Do your own style")]),s("a",{attrs:{name:"do-your-own-style"}})]),s("p",[t._v("If you don't want to use the default style, here is how to do your own.")]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/mzGZXR",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/mzGZXR "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"example-own-style",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{attrs:{vertical:""}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("span",[t._v("4")])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes horizontal style="height:400px">\n  <splitpanes vertical>\n    <span>1</span>\n    <span>2</span>\n    <span>3</span>\n  </splitpanes>\n  <span>4</span>\n</splitpanes>\n')]),s("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {\n  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);\n}\n\n.splitpanes__pane {\n  box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes--vertical > .splitpanes__splitter {\n  min-width: 6px;\n  background: linear-gradient(90deg, #ccc, #111);\n}\n\n.splitpanes--horizontal > .splitpanes__splitter {\n  min-height: 6px;\n  background: linear-gradient(0deg, #ccc, #111);\n}\n")]),s("h2",{staticClass:"headline mt-5 pt-5 mb-2"},[s("a",{attrs:{href:"#release-notes"}},[t._v("Release Notes")]),s("a",{attrs:{name:"release-notes"}})]),s("div",[s("strong",[t._v("Version 1.11.0")]),t._v(" Persist panes size after slots changed")]),s("div",[s("strong",[t._v("Version 1.10.0")]),t._v(" Add maximum size feature on panes")]),s("div",[s("strong",[t._v("Version 1.9.0")]),t._v(" Emit event on resize & watch slots optional"),s("highlight-message",{attrs:{type:"success"}},[s("strong",[t._v("The "),s("span",{staticClass:"code"},[t._v("resize")]),t._v(" event - previously firing after resize end - is now firing on resize."),s("br"),t._v("\nA new "),s("span",{staticClass:"code"},[t._v("resized")]),t._v(" event is emitted on resize end. Check out the\n"),s("a",{attrs:{href:"#emitted-events"}},[t._v("# Listening to emitted events")]),t._v(" example.")])]),s("highlight-message",{attrs:{type:"success"}},[s("strong",[t._v("By default and for performance, the reactivity is now limited to slot deletion and slot creation."),s("br"),t._v("\nWith the option "),s("span",{staticClass:"code"},[t._v("watchSlots")]),t._v(" you can also track any change on the slots."),s("br")])])],1),s("div",[s("strong",[t._v("Version 1.8.0")]),t._v(" Watch slots")]),s("div",[s("strong",[t._v("Version 1.7.0")]),t._v(" Double click splitter to maximize next pane")]),s("div",[s("strong",[t._v("Version 1.6.0")]),t._v(" Emit events")]),s("div",[s("strong",[t._v("Version 1.5.0")]),t._v(" Add default size feature on panes")]),s("div",[s("strong",[t._v("Version 1.4.0")]),t._v(" Add minimum size feature on panes")]),s("div",[s("strong",[t._v("Version 1.3.0")]),t._v(" Splitpanes slots are now reactive (add/remove on the fly)")]),s("div",[s("strong",[t._v("Version 1.2.0")]),t._v(" Add a `default-theme` CSS class to load default theme")]),s("div",[s("strong",[t._v("Version 1.1.0")]),t._v(" Allow pushing other panes while dragging splitter")]),s("div",[s("strong",[t._v("Version 1.0.0")]),t._v(" First public release\n")])],1),s("v-footer",{staticClass:"mt-5 pa-2 mb-3",attrs:{color:"white"}},[s("v-layout",{staticClass:"max-widthed",attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[s("v-flex",{staticClass:"xs12 sm6 text-xs-center text-sm-left copyright"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" Antoni André, all rights reserved.")]),s("v-flex",{staticClass:"xs12 sm6 text-xs-center text-sm-right made-with"},[s("div",{staticClass:"mb-1"},[t._v("This documentation is made with "),s("v-icon",{attrs:{small:""}},[t._v("fab fa-vuejs")]),t._v(", "),s("v-icon",{attrs:{small:""}},[t._v("fab fa-html5")]),t._v(", "),s("v-icon",{attrs:{small:""}},[t._v("fab fa-css3")]),t._v(",\n"),s("v-icon",{attrs:{small:""}},[t._v("fab fa-sass")]),t._v(" & "),s("v-icon",{staticClass:"heart",attrs:{small:""}},[t._v("favorite")])],1),t._v("View project on "),s("a",{attrs:{href:"https://github.com/antoniandre/splitpanes",target:"_blank"}},[s("v-icon",{attrs:{small:""}},[t._v("fab fa-github")]),t._v(" Github")],1),t._v(".")])],1)],1)],1)},o=[];function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return d(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var m,v,f={props:{watchSlots:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},pushOtherPanes:{type:Boolean,default:!0}},data:function(){return{container:{vnode:null,offsetLeft:null,offsetTop:null},slotsCount:0,vnodes:[],panes:[],splitters:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},slotsCopy:""}},methods:{bindEvents:function(){var t="ontouchstart"in window;document.addEventListener(t?"touchmove":"mousemove",this.onMouseMove,{passive:!1}),document.addEventListener(t?"touchend":"mouseup",this.onMouseUp)},onMouseDown:function(t,e){this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove:function(t){this.touch.mouseDown&&(t.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(t)),this.$emit("resize",this.panes.map(function(t){return{min:t.min,max:t.max,width:t.width}})))},onMouseUp:function(){this.touch.dragging&&this.$emit("resized",this.panes.map(function(t){return{min:t.min,max:t.max,width:t.width}})),this.touch.mouseDown=!1,this.touch.dragging=!1},onSplitterDblClick:function(t,e){var n=0;this.panes=this.panes.map(function(t,s){return t.width=s===e?t.max:t.min,s!==e&&(n+=t.min),t}),this.panes[e].width-=n,this.$emit("pane-maximize",this.panes[e])},getCurrentMouseDrag:function(t){return{x:"ontouchstart"in window?t.touches[0].clientX:t.clientX,y:"ontouchstart"in window?t.touches[0].clientY:t.clientY}},getContainerOffsetTop:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetTop||t){var e=this.container.vnode,n=e.offsetTop;while(e=e.offsetParent)n+=e.offsetTop;this.container.offsetTop=n}return this.container.offsetTop},getContainerOffsetLeft:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetLeft||t){var e=this.container.vnode,n=e.offsetLeft;while(e=e.offsetParent)n+=e.offsetLeft;this.container.offsetLeft=n}return this.container.offsetLeft},getCurrentDragPercentage:function(t){var e=this.touch.activeSplitter,n=document.documentElement,s=this.horizontal?(window.pageYOffset||n.scrollTop)-(n.clientTop||0):null,a=this["getContainerOffset".concat(this.horizontal?"Top":"Left")]();t=t[this.horizontal?"y":"x"]-a+s;var i=this.container.vnode[this.horizontal?"clientHeight":"clientWidth"],r=0;return this.panes.forEach(function(t,n){return r+=n<e?t.width:0}),100*t/i},calculatePanesSize:function(t){var e=this.touch.activeSplitter,n={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0},s=0+(this.pushOtherPanes?0:n.prevPanesSize),a=100-(this.pushOtherPanes?0:n.nextPanesSize),i=Math.max(Math.min(this.getCurrentDragPercentage(t),a),s),r=[e,e+1],o=this.panes[r[0]]||null,l=this.panes[r[1]]||null,p=o.max<100&&i>=o.max+n.prevPanesSize,h=l.max<100&&i<=100-(l.max+this.sumNextPanesSize(e+1));if(p||h)p?(o.width=o.max,l.width=Math.max(100-o.max-n.prevPanesSize-n.nextPanesSize,0)):(o.width=Math.max(100-l.max-n.prevPanesSize-this.sumNextPanesSize(e+1),0),l.width=l.max);else{if(this.pushOtherPanes){var c=this.doPushOtherPanes(n,i);if(!c)return;n=c.sums,r=c.panesToResize,o=this.panes[r[0]]||null,l=this.panes[r[1]]||null}null!==o&&(o.width=Math.min(Math.max(i-n.prevPanesSize-n.prevReachedMinPanes,o.min),o.max)),null!==l&&(l.width=Math.min(Math.max(100-i-n.nextPanesSize-n.nextReachedMinPanes,l.min),l.max))}},doPushOtherPanes:function(t,e){var n=this,s=this.touch.activeSplitter,a=[s,s+1];return e<t.prevPanesSize+this.panes[a[0]].min&&(a[0]=this.findPrevExpandedPane(s).index,t.prevReachedMinPanes=0,a[0]<s&&this.panes.forEach(function(e,n){n>a[0]&&n<=s&&(e.width=e.min,t.prevReachedMinPanes+=e.min)}),t.prevPanesSize=this.sumPrevPanesSize(a[0]),void 0===a[0])?(t.prevReachedMinPanes=0,this.panes[0].width=this.panes[0].min,this.panes.forEach(function(e,n){n>0&&n<=s&&(e.width=e.min,t.prevReachedMinPanes+=e.min)}),this.panes[a[1]].width=100-t.prevReachedMinPanes-this.panes[0].min-t.prevPanesSize-t.nextPanesSize,null):e>100-t.nextPanesSize-this.panes[a[1]].min&&(a[1]=this.findNextExpandedPane(s).index,t.nextReachedMinPanes=0,a[1]>s+1&&this.panes.forEach(function(e,n){n>s&&n<a[1]&&(e.width=e.min,t.nextReachedMinPanes+=e.min)}),t.nextPanesSize=this.sumNextPanesSize(a[1]-1),void 0===a[1])?(t.nextReachedMinPanes=0,this.panes[this.panes.length-1].width=this.panes[this.panes.length-1].min,this.panes.forEach(function(e,a){a<n.panes.length-1&&a>=s+1&&(e.width=e.min,t.nextReachedMinPanes+=e.min)}),this.panes[a[0]].width=100-t.prevPanesSize-t.nextReachedMinPanes-this.panes[this.panes.length-1].min-t.nextPanesSize,null):{sums:t,panesToResize:a}},sumPrevPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s<t?n.width:0)},0)},sumNextPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s>t+1?n.width:0)},0)},findPrevExpandedPane:function(t){var e={},n=h(this.panes);return n.reverse().some(function(n){return n.index<t&&n.width>n.min&&(e=n),n.index<t&&n.width>n.min}),e},findNextExpandedPane:function(t){var e={};return this.panes.some(function(n){return n.index>t+1&&n.width>n.min&&(e=n),n.index>t+1&&n.width>n.min}),e}},mounted:function(){this.container.vnode=this.$refs.container,this.bindEvents(),this.$emit("ready")},beforeDestroy:function(){document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp),document.removeEventListener("mouseup",this.onMouseUp)},computed:{defaultWidth:function(){return 100/this.vnodes.length}},beforeUpdate:function(){var t=this;this.panes.length&&this.$slots.default.filter(function(t){return t.tag||(t.text||"").trim()}).forEach(function(e,n){var s=e.elm;s=void 0===s?{}:s;var a=s.parentNode,i=void 0===a?{}:a,r=null;i&&"splitpanes__pane"===i.className&&i.style&&(r=i.id.replace("pane_",""))&&t.panes[r]&&(i.style.width||i.style.height)&&(t.panes[r].savedWidth=parseFloat(i.style.width||i.style.height))})},render:function(t){var e=this,n=[];if(this.$slots.default){var s=!1;if(this.watchSlots){var a=["$options","$parent","$root","$el","$refs","$slots","$scopedSlots","$vnode","_data","__vue__","_self","_vnode","_watcher","_watchers","_computedWatchers","_renderProxy","vnodes","container","Ctor","context","parent","componentInstance","componentOptions","fnContext","fnOptions"],i=JSON.stringify(this.$slots.default,function(t,e){return a.indexOf(t)>-1?void 0:e});s=this.slotsCopy!==i,s&&(this.slotsCopy=i)}(this.slotsCount!==this.$slots.default.length||s)&&(this.vnodes=this.$slots.default.filter(function(t){return t.tag||(t.text||"").trim()}),this.vnodes.forEach(function(t,n){var s=t.data;s=void 0===s?{}:s;var a=s.attrs,i=void 0===a?{}:a,r=i["splitpanes-min"],o=void 0===r?0:r,l=i["splitpanes-max"],p=void 0===l?100:l,h=i["splitpanes-default"],c=void 0===h?e.defaultWidth:h;e.$set(e.panes,n,{width:e.panes[n]&&(e.panes[n].savedWidth||0===e.panes[n].savedWidth)||parseFloat(c),index:n,min:parseFloat(o),max:parseFloat(p)}),n&&e.$set(e.splitters,n-1,{id:"splitter-".concat(n-1),index:n-1})}),this.slotsCount=this.$slots.default.length),this.vnodes.forEach(function(s,a){if(a){var i,r={id:a-1,class:"splitpanes__splitter",ref:"splitter-".concat(a-1),on:(i={},p(i,"ontouchstart"in window?"touchstart":"mousedown",function(t){return e.onMouseDown(t,a-1)}),p(i,"dblclick",function(t){return e.onSplitterDblClick(t,a)}),i)};n.push(t("div",r))}var o={attrs:{id:"pane_".concat(a)},class:"splitpanes__pane",style:l({},e.horizontal?{height:"".concat(e.panes[a].width,"%")}:null,e.horizontal?null:{width:"".concat(e.panes[a].width,"%")}),on:{click:function(t){return e.$emit("pane-click",e.panes[a])}}};n.push(t("div",o,[s]))})}else n.push(t("div","Splitpanes needs some content here."));var r={class:["splitpanes","splitpanes--".concat(this.horizontal?"horizontal":"vertical"),this.touch.dragging?"splitpanes--dragging":""],ref:"container"};return t("div",r,n)}},_=f,g=(n("5b84"),n("2877")),y=Object(g["a"])(_,m,v,!1,null,null,null),b=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:"highlight "+t.type},[n("v-icon",[t._v(t._s(t.icon))]),t._t("default")],2)},w=[],z={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"}},computed:{icon:function(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}}},C=z,S=(n("aef5"),Object(g["a"])(C,x,w,!1,null,null,null)),P=S.exports,k=n("29ec"),M=n.n(k),N=(n("737e"),{name:"app",components:{Splitpanes:b,sshPre:M.a,HighlightMessage:P},data:function(){return{panesNumber:3,logs:[],randomNums:{1:0,2:0,3:0}}},methods:{log:function(t,e){this.logs.push({name:t,params:JSON.stringify(e)})},generateRandomNumber:function(){this.randomNums=Object.assign(this.randomNums,{1:Math.round(100*Math.random()),2:Math.round(100*Math.random()),3:Math.round(100*Math.random())})},incrementNumber:function(t){this.randomNums[t]++}}}),O=N,T=(n("6294"),Object(g["a"])(O,r,o,!1,null,null,null)),j=T.exports;n("d5e8"),n("d1e7");s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(j)}}).$mount("#app")},"5b84":function(t,e,n){"use strict";var s=n("7ba0"),a=n.n(s);a.a},6294:function(t,e,n){"use strict";var s=n("7fba"),a=n.n(s);a.a},"7ba0":function(t,e,n){},"7fba":function(t,e,n){},aef5:function(t,e,n){"use strict";var s=n("0312"),a=n.n(s);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3c598cd8.js.map