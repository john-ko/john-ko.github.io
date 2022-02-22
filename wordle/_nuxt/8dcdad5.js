(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,5,6],{257:function(n,t,e){var content=e(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(81).default)("1e90c9e3",content,!0,{sourceMap:!1})},258:function(n,t,e){var content=e(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(81).default)("524a55dc",content,!0,{sourceMap:!1})},259:function(n,t,e){var content=e(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(81).default)("76fd8d01",content,!0,{sourceMap:!1})},260:function(n,t,e){var content=e(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(81).default)("6ccad582",content,!0,{sourceMap:!1})},261:function(n,t,e){"use strict";e(257)},262:function(n,t,e){var r=e(80)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n.row[data-v-dc8f26de]{\n  margin:10px 0;\n  display:grid;\n  grid-template-columns:repeat(5,1fr);\n  grid-gap:5px\n}\n.tile[data-v-dc8f26de]:before{\n  content:"";\n  display:inline-block;\n  padding-bottom:100%\n}\n.tile[data-v-dc8f26de]{\n  width:100%;\n  display:inline-flex;\n  justify-content:center;\n  align-items:center;\n  font-size:2rem;\n  line-height:2rem;\n  font-weight:700;\n  vertical-align:middle;\n  box-sizing:border-box;\n  text-transform:uppercase;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  border:2px solid #ccc;\n  color:#eee\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},263:function(n,t,e){"use strict";e(258)},264:function(n,t,e){var r=e(80)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.game-keyboard[data-v-d7e41db6]{\n  margin:0 auto;\n  width:100%\n}\n.row[data-v-d7e41db6]{\n  width:100%;\n  margin:0 auto 8px;\n  touch-action:manipulation\n}\n.row[data-v-d7e41db6],button[data-v-d7e41db6]{\n  display:flex\n}\nbutton[data-v-d7e41db6]{\n  font-family:inherit;\n  font-weight:700;\n  border:0;\n  padding:0;\n  margin:0 6px 0 0;\n  height:58px;\n  border-radius:4px;\n  cursor:pointer;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  background:#9e9e9e;\n  color:#eee;\n  flex:1;\n  justify-content:center;\n  align-items:center;\n  text-transform:uppercase\n}\n.half[data-v-d7e41db6]{\n  flex:0.5\n}\n.one-and-a-half[data-v-d7e41db6]{\n  flex:1.5;\n  font-size:12px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},265:function(n,t,e){"use strict";e(259)},266:function(n,t,e){var r=e(80)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.letter-selector[data-v-75333c66]{\n  width:300px;\n  margin:0 auto\n}\n.row[data-v-75333c66]{\n  display:grid;\n  grid-template-columns:repeat(3,1fr);\n  grid-gap:5px\n}\n.letter[data-v-75333c66]{\n  width:100%;\n  height:92px;\n  display:inline-flex;\n  justify-content:center;\n  align-items:center;\n  font-size:2rem;\n  line-height:2rem;\n  font-weight:700;\n  vertical-align:middle;\n  box-sizing:border-box;\n  text-transform:uppercase;\n  color:#fff;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},267:function(n,t,e){"use strict";e.r(t);var r={name:"SolutionSet",props:{currentList:{type:Array,default:function(){return[]}},currentGuess:{type:Array,default:function(){return[]}}},computed:{guessLength:function(){return[0,1,2,3,4]}},methods:{getClass:function(n){var t,e;return null!==(t=null===(e=this.currentGuess[n])||void 0===e?void 0:e.type.toLowerCase())&&void 0!==t?t:""},getLetter:function(n){var t,e;return null!==(t=null===(e=this.currentGuess[n])||void 0===e?void 0:e.letter)&&void 0!==t?t:""}}},o=(e(261),e(51)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"solution-set"},[n._l(n.currentList,(function(t,r){return e("div",{key:r,staticClass:"row"},n._l(t,(function(t){return e("div",{key:t.letter,staticClass:"tile",class:t.type.toLowerCase()},[n._v("\n      "+n._s(t.letter)+"\n   ")])})),0)})),n._v(" "),e("div",{staticClass:"row"},n._l(n.guessLength,(function(t){return e("div",{key:t,staticClass:"tile",class:n.getClass(t)},[n._v("\n      "+n._s(n.getLetter(t))+"\n    ")])})),0)],2)}),[],!1,null,"dc8f26de",null);t.default=component.exports},268:function(n,t,e){"use strict";e.r(t);var r={name:"GameKeyboard",methods:{onClickHandler:function(n){this.$emit("key-clicked",n)},backHandler:function(){this.$emit("back-clicked")},enterhandler:function(){this.$emit("enter-clicked")}}},o=(e(263),e(51)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"game-keyboard"},[e("div",{staticClass:"row"},[e("button",{on:{click:function(t){return n.onClickHandler("q")}}},[n._v("q")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("w")}}},[n._v("w")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("e")}}},[n._v("e")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("r")}}},[n._v("r")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("t")}}},[n._v("t")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("y")}}},[n._v("y")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("u")}}},[n._v("u")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("i")}}},[n._v("i")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("o")}}},[n._v("o")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("p")}}},[n._v("p")])]),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"spacer half"}),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("a")}}},[n._v("a")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("s")}}},[n._v("s")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("d")}}},[n._v("d")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("f")}}},[n._v("f")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("g")}}},[n._v("g")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("h")}}},[n._v("h")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("j")}}},[n._v("j")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("k")}}},[n._v("k")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("l")}}},[n._v("l")]),n._v(" "),e("div",{staticClass:"spacer half"})]),n._v(" "),e("div",{staticClass:"row"},[e("button",{staticClass:"one-and-a-half",on:{click:n.enterhandler}},[n._v("ENTER")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("z")}}},[n._v("z")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("x")}}},[n._v("x")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("c")}}},[n._v("c")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("v")}}},[n._v("v")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("b")}}},[n._v("b")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("n")}}},[n._v("n")]),n._v(" "),e("button",{on:{click:function(t){return n.onClickHandler("m")}}},[n._v("m")]),n._v(" "),e("button",{staticClass:"one-and-a-half",on:{click:n.backHandler}},[n._v("\n      ←\n    ")])])])}),[],!1,null,"d7e41db6",null);t.default=component.exports},269:function(n,t,e){"use strict";e.r(t);var r={name:"letter-selector",props:{letter:{type:String}},methods:{clickHandler:function(n){console.log("clicked",this.letter,n),this.$emit("color-clicked",n)}}},o=(e(265),e(51)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.letter?e("div",{staticClass:"letter-selector"},[e("div",{staticClass:"row"},[e("button",{staticClass:"letter grey",on:{click:function(t){return n.clickHandler("GREY")}}},[n._v(n._s(n.letter))]),n._v(" "),e("button",{staticClass:"letter yellow",on:{click:function(t){return n.clickHandler("YELLOW")}}},[n._v(n._s(n.letter))]),n._v(" "),e("button",{staticClass:"letter green",on:{click:function(t){return n.clickHandler("GREEN")}}},[n._v(n._s(n.letter))])])]):n._e()}),[],!1,null,"75333c66",null);t.default=component.exports},270:function(n,t,e){"use strict";e(260)},271:function(n,t,e){var r=e(80)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.solver{\n  margin:0 auto;\n  width:500px\n}\n.yellow{\n  background:#d9c457\n}\n.grey{\n  background:#646464\n}\n.green{\n  background:#538d4a\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},273:function(n,t,e){"use strict";e.r(t);var r={name:"Solver",data:function(){return{letter:"",guesses:[],currentGuess:[]}},computed:{words:function(){return this.$store.state.solver.filtered_words}},methods:{clicktest:function(a){},letterHandler:function(a){console.log(a),this.letter=a},backHandler:function(){this.currentGuess.pop()},enterHandler:function(){this.guesses.push(this.currentGuess),this.$store.dispatch("solver/submit_guess",this.currentGuess),this.currentGuess=[]},colorHandler:function(n){this.letter,this.currentGuess.push({letter:this.letter,type:n,position:this.currentGuess.length}),this.letter="",console.log(this.currentGuess)}}},o=(e(270),e(51)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"solver"},[e("solution-set",{attrs:{"current-list":n.guesses,"current-guess":n.currentGuess}}),n._v(" "),e("div",{staticClass:"a"},[e("game-keyboard",{on:{"key-clicked":n.letterHandler,"back-clicked":n.backHandler,"enter-clicked":n.enterHandler}}),n._v(" "),e("letter-selector",{attrs:{letter:n.letter},on:{"color-clicked":n.colorHandler}})],1),n._v("\n  "+n._s(n.words)+"\n")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SolutionSet:e(267).default,GameKeyboard:e(268).default,LetterSelector:e(269).default})},288:function(n,t,e){"use strict";e.r(t);var r=e(2).a.extend({name:"IndexPage"}),o=e(51),component=Object(o.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"main"},[t("solver")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Solver:e(273).default})}}]);