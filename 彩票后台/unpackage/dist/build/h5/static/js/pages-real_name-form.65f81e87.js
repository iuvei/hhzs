(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-real_name-form"],{"0137":function(t,a,i){"use strict";i.r(a);var e=i("7ae7"),n=i("100a");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("e44c");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"213555cc",null,!1,e["a"],c);a["default"]=r.exports},"100a":function(t,a,i){"use strict";i.r(a);var e=i("478a"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"431f":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("0137")),o=e(i("87c6")),c={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};a.default=c},"44d0":function(t,a,i){var e=i("9bed");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("ceafadae",e,!0,{sourceMap:!1,shadowMode:!1})},"478a":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},6298:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-213555cc]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-213555cc]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-213555cc]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-213555cc]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-213555cc]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-213555cc]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-213555cc]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"7abd":function(t,a,i){"use strict";var e=i("44d0"),n=i.n(e);n.a},"7ae7":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},"9bed":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-bb7cd402]{background:#fff}.zaiui-title-view[data-v-bb7cd402]{position:relative;padding:%?18.18?%}.zaiui-content-view[data-v-bb7cd402]{position:relative;padding:0 %?18.18?%}.cu-form-view[data-v-bb7cd402]{position:relative;margin:0 %?27.27?%;padding:%?18.18?% 0;border-bottom:%?2?% solid rgba(0,0,0,.1)}.cu-form-view.margin-top-lg[data-v-bb7cd402]{margin-top:%?40?%}.zaiui-btn-view[data-v-bb7cd402]{position:fixed;width:100%;bottom:0}.zaiui-btn-view .flex[data-v-bb7cd402]{padding:%?18.18?%}body.?%PAGE?%[data-v-bb7cd402]{background:#fff}",""]),t.exports=a},b081:function(t,a,i){"use strict";i.r(a);var e=i("431f"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},d34a:function(t,a,i){var e=i("6298");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("9f3f100a",e,!0,{sourceMap:!1,shadowMode:!1})},e32d:function(t,a,i){"use strict";i.r(a);var e=i("f4a0"),n=i("b081");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("7abd");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"bb7cd402",null,!1,e["a"],c);a["default"]=r.exports},e44c:function(t,a,i){"use strict";var e=i("d34a"),n=i.n(e);n.a},f4a0:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("实人认证")])],2),i("v-uni-view",{staticClass:"text-black text-xl zaiui-title-view"},[t._v("为提升交易可靠性，请进行实人认证")]),i("v-uni-view",{staticClass:"text-gray zaiui-content-view"},[t._v("实人认证是由转转合作的第三方提供的一项个人身份\n\t\t认证服务,通过与公安网数据校验并使用全球领先的\n\t\t人脸识别技术,保障个人身份真实性。转转平台将逐\n\t\t步推进全平台实人认证，为用户创造更加安全的交易\n\t\t环境。")]),i("v-uni-view",{staticClass:"cu-form-view margin-top-lg"},[i("v-uni-input",{attrs:{placeholder:"请输入真实姓名"}})],1),i("v-uni-view",{staticClass:"cu-form-view"},[i("v-uni-input",{attrs:{placeholder:"请输入18位身份证号"}})],1),i("v-uni-view",{staticClass:"bg-white zaiui-btn-view zaiui-foot-padding-bottom"},[i("v-uni-view",{staticClass:"flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-red"},[t._v("开始验证")])],1)],1)],1)},o=[]}}]);