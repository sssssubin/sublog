(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{"./components/TextMoreView.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_TextMoreViewvue_type_script_lang_js_={data:function data(){return{moreViewBtnVal:"더보기",convertComment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga consequatur quam voluptatem nisi aliquam doloremque nemo nobis dignissimos? Excepturi vero, atque eius molestiae molestias a aperiam dicta quis sunt."}},mounted:function mounted(){this.infoHeight()},methods:{infoHeight:function infoHeight(){var moreViewBtn=document.getElementById("moreViewBtn"),commentText=document.getElementById("commentText");this.$refs.infoBox.clientHeight<60?moreViewBtn.style.display="none":(moreViewBtn.style.display="block",commentText.classList.add("fix-height"))},moreViewClick:function moreViewClick(){var commentText=document.getElementById("commentText");commentText.classList.toggle("opened"),commentText.classList.contains("opened")?(this.moreViewBtnVal="접기",commentText.classList.remove("fix-height")):(this.moreViewBtnVal="더보기",commentText.classList.add("fix-height"))}}},componentNormalizer=(__webpack_require__("./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&"),__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_TextMoreViewvue_type_script_lang_js_,(function render(){var _c=this._self._c;return _c("div",{staticClass:"comment-info"},[_c("div",{staticClass:"comment-container"},[_c("p",{ref:"infoBox",attrs:{id:"commentText"},domProps:{innerHTML:this._s(this.convertComment)}})]),this._v(" "),_c("a",{staticClass:"more-btn button--grey",attrs:{id:"moreViewBtn"},on:{click:this.moreViewClick}},[this._v("\n    "+this._s(this.moreViewBtnVal)+"\n  ")])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"TextMoreView",description:"",tags:{}}},"./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/vue-docgen-loader/lib/index.js?!./node_modules/vue-style-loader/index.js?!./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/@nuxt/components/dist/loader.js?!./node_modules/vue-loader/lib/index.js?!./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&")},"./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/@nuxt/components/dist/loader.js?!./node_modules/vue-loader/lib/index.js?!./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".comment-info{width:250px;display:flex;flex-direction:column;gap:20px;margin:5rem auto}.comment-info .comment-container{width:100%}.comment-info .fix-height{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.comment-info .more-btn{width:100%;margin:0;cursor:pointer;text-align:center}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/vue-docgen-loader/lib/index.js?!./node_modules/vue-style-loader/index.js?!./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/@nuxt/components/dist/loader.js?!./node_modules/vue-loader/lib/index.js?!./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/@nuxt/postcss8/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@nuxt/postcss8/node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/@nuxt/components/dist/loader.js?!./node_modules/vue-loader/lib/index.js?!./components/TextMoreView.vue?vue&type=style&index=0&id=24938e8b&prod&lang=scss&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("61228226",content,!0,{sourceMap:!1})},"./pages/study/interaction/moreView.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var interaction_moreViewvue_type_script_lang_js_={components:{TextMoreViewVue:__webpack_require__("./components/TextMoreView.vue").default}},componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(interaction_moreViewvue_type_script_lang_js_,(function render(){return(0,this._self._c)("TextMoreViewVue")}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"moreView",description:"",tags:{}}}}]);