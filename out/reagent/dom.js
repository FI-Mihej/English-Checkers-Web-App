// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6251__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_10379 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_10379){
return (function (){
var _STAR_always_update_STAR_10380 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10380;
}});})(_STAR_always_update_STAR_10379))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10379;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args10381 = [];
var len__7326__auto___10384 = arguments.length;
var i__7327__auto___10385 = (0);
while(true){
if((i__7327__auto___10385 < len__7326__auto___10384)){
args10381.push((arguments[i__7327__auto___10385]));

var G__10386 = (i__7327__auto___10385 + (1));
i__7327__auto___10385 = G__10386;
continue;
} else {
}
break;
}

var G__10383 = args10381.length;
switch (G__10383) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10381.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__10392_10396 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__10393_10397 = null;
var count__10394_10398 = (0);
var i__10395_10399 = (0);
while(true){
if((i__10395_10399 < count__10394_10398)){
var v_10400 = cljs.core._nth.call(null,chunk__10393_10397,i__10395_10399);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_10400);

var G__10401 = seq__10392_10396;
var G__10402 = chunk__10393_10397;
var G__10403 = count__10394_10398;
var G__10404 = (i__10395_10399 + (1));
seq__10392_10396 = G__10401;
chunk__10393_10397 = G__10402;
count__10394_10398 = G__10403;
i__10395_10399 = G__10404;
continue;
} else {
var temp__4657__auto___10405 = cljs.core.seq.call(null,seq__10392_10396);
if(temp__4657__auto___10405){
var seq__10392_10406__$1 = temp__4657__auto___10405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10392_10406__$1)){
var c__7062__auto___10407 = cljs.core.chunk_first.call(null,seq__10392_10406__$1);
var G__10408 = cljs.core.chunk_rest.call(null,seq__10392_10406__$1);
var G__10409 = c__7062__auto___10407;
var G__10410 = cljs.core.count.call(null,c__7062__auto___10407);
var G__10411 = (0);
seq__10392_10396 = G__10408;
chunk__10393_10397 = G__10409;
count__10394_10398 = G__10410;
i__10395_10399 = G__10411;
continue;
} else {
var v_10412 = cljs.core.first.call(null,seq__10392_10406__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_10412);

var G__10413 = cljs.core.next.call(null,seq__10392_10406__$1);
var G__10414 = null;
var G__10415 = (0);
var G__10416 = (0);
seq__10392_10396 = G__10413;
chunk__10393_10397 = G__10414;
count__10394_10398 = G__10415;
i__10395_10399 = G__10416;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map