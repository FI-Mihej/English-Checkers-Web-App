// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args11191 = [];
var len__7326__auto___11197 = arguments.length;
var i__7327__auto___11198 = (0);
while(true){
if((i__7327__auto___11198 < len__7326__auto___11197)){
args11191.push((arguments[i__7327__auto___11198]));

var G__11199 = (i__7327__auto___11198 + (1));
i__7327__auto___11198 = G__11199;
continue;
} else {
}
break;
}

var G__11193 = args11191.length;
switch (G__11193) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11191.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11194 = (function (f,blockable,meta11195){
this.f = f;
this.blockable = blockable;
this.meta11195 = meta11195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11196,meta11195__$1){
var self__ = this;
var _11196__$1 = this;
return (new cljs.core.async.t_cljs$core$async11194(self__.f,self__.blockable,meta11195__$1));
});

cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11196){
var self__ = this;
var _11196__$1 = this;
return self__.meta11195;
});

cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11195","meta11195",579089184,null)], null);
});

cljs.core.async.t_cljs$core$async11194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11194";

cljs.core.async.t_cljs$core$async11194.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11194");
});

cljs.core.async.__GT_t_cljs$core$async11194 = (function cljs$core$async$__GT_t_cljs$core$async11194(f__$1,blockable__$1,meta11195){
return (new cljs.core.async.t_cljs$core$async11194(f__$1,blockable__$1,meta11195));
});

}

return (new cljs.core.async.t_cljs$core$async11194(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11203 = [];
var len__7326__auto___11206 = arguments.length;
var i__7327__auto___11207 = (0);
while(true){
if((i__7327__auto___11207 < len__7326__auto___11206)){
args11203.push((arguments[i__7327__auto___11207]));

var G__11208 = (i__7327__auto___11207 + (1));
i__7327__auto___11207 = G__11208;
continue;
} else {
}
break;
}

var G__11205 = args11203.length;
switch (G__11205) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11203.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args11210 = [];
var len__7326__auto___11213 = arguments.length;
var i__7327__auto___11214 = (0);
while(true){
if((i__7327__auto___11214 < len__7326__auto___11213)){
args11210.push((arguments[i__7327__auto___11214]));

var G__11215 = (i__7327__auto___11214 + (1));
i__7327__auto___11214 = G__11215;
continue;
} else {
}
break;
}

var G__11212 = args11210.length;
switch (G__11212) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11210.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11217 = [];
var len__7326__auto___11220 = arguments.length;
var i__7327__auto___11221 = (0);
while(true){
if((i__7327__auto___11221 < len__7326__auto___11220)){
args11217.push((arguments[i__7327__auto___11221]));

var G__11222 = (i__7327__auto___11221 + (1));
i__7327__auto___11221 = G__11222;
continue;
} else {
}
break;
}

var G__11219 = args11217.length;
switch (G__11219) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11217.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11224 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11224);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11224,ret){
return (function (){
return fn1.call(null,val_11224);
});})(val_11224,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11225 = [];
var len__7326__auto___11228 = arguments.length;
var i__7327__auto___11229 = (0);
while(true){
if((i__7327__auto___11229 < len__7326__auto___11228)){
args11225.push((arguments[i__7327__auto___11229]));

var G__11230 = (i__7327__auto___11229 + (1));
i__7327__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var G__11227 = args11225.length;
switch (G__11227) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11225.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7166__auto___11232 = n;
var x_11233 = (0);
while(true){
if((x_11233 < n__7166__auto___11232)){
(a[x_11233] = (0));

var G__11234 = (x_11233 + (1));
x_11233 = G__11234;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11235 = (i + (1));
i = G__11235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11239 = (function (alt_flag,flag,meta11240){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11240 = meta11240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11241,meta11240__$1){
var self__ = this;
var _11241__$1 = this;
return (new cljs.core.async.t_cljs$core$async11239(self__.alt_flag,self__.flag,meta11240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11241){
var self__ = this;
var _11241__$1 = this;
return self__.meta11240;
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11240","meta11240",-2035725857,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11239";

cljs.core.async.t_cljs$core$async11239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11239(alt_flag__$1,flag__$1,meta11240){
return (new cljs.core.async.t_cljs$core$async11239(alt_flag__$1,flag__$1,meta11240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11239(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11245 = (function (alt_handler,flag,cb,meta11246){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11246 = meta11246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11247,meta11246__$1){
var self__ = this;
var _11247__$1 = this;
return (new cljs.core.async.t_cljs$core$async11245(self__.alt_handler,self__.flag,self__.cb,meta11246__$1));
});

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11247){
var self__ = this;
var _11247__$1 = this;
return self__.meta11246;
});

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11246","meta11246",384176761,null)], null);
});

cljs.core.async.t_cljs$core$async11245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11245";

cljs.core.async.t_cljs$core$async11245.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11245");
});

cljs.core.async.__GT_t_cljs$core$async11245 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11245(alt_handler__$1,flag__$1,cb__$1,meta11246){
return (new cljs.core.async.t_cljs$core$async11245(alt_handler__$1,flag__$1,cb__$1,meta11246));
});

}

return (new cljs.core.async.t_cljs$core$async11245(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11248_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11248_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11249_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11249_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6251__auto__ = wport;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11250 = (i + (1));
i = G__11250;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6251__auto__ = ret;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6239__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6239__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___11256 = arguments.length;
var i__7327__auto___11257 = (0);
while(true){
if((i__7327__auto___11257 < len__7326__auto___11256)){
args__7333__auto__.push((arguments[i__7327__auto___11257]));

var G__11258 = (i__7327__auto___11257 + (1));
i__7327__auto___11257 = G__11258;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11253){
var map__11254 = p__11253;
var map__11254__$1 = ((((!((map__11254 == null)))?((((map__11254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11254):map__11254);
var opts = map__11254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11251){
var G__11252 = cljs.core.first.call(null,seq11251);
var seq11251__$1 = cljs.core.next.call(null,seq11251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11252,seq11251__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11259 = [];
var len__7326__auto___11309 = arguments.length;
var i__7327__auto___11310 = (0);
while(true){
if((i__7327__auto___11310 < len__7326__auto___11309)){
args11259.push((arguments[i__7327__auto___11310]));

var G__11311 = (i__7327__auto___11310 + (1));
i__7327__auto___11310 = G__11311;
continue;
} else {
}
break;
}

var G__11261 = args11259.length;
switch (G__11261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11259.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11146__auto___11313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___11313){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___11313){
return (function (state_11285){
var state_val_11286 = (state_11285[(1)]);
if((state_val_11286 === (7))){
var inst_11281 = (state_11285[(2)]);
var state_11285__$1 = state_11285;
var statearr_11287_11314 = state_11285__$1;
(statearr_11287_11314[(2)] = inst_11281);

(statearr_11287_11314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (1))){
var state_11285__$1 = state_11285;
var statearr_11288_11315 = state_11285__$1;
(statearr_11288_11315[(2)] = null);

(statearr_11288_11315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (4))){
var inst_11264 = (state_11285[(7)]);
var inst_11264__$1 = (state_11285[(2)]);
var inst_11265 = (inst_11264__$1 == null);
var state_11285__$1 = (function (){var statearr_11289 = state_11285;
(statearr_11289[(7)] = inst_11264__$1);

return statearr_11289;
})();
if(cljs.core.truth_(inst_11265)){
var statearr_11290_11316 = state_11285__$1;
(statearr_11290_11316[(1)] = (5));

} else {
var statearr_11291_11317 = state_11285__$1;
(statearr_11291_11317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (13))){
var state_11285__$1 = state_11285;
var statearr_11292_11318 = state_11285__$1;
(statearr_11292_11318[(2)] = null);

(statearr_11292_11318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (6))){
var inst_11264 = (state_11285[(7)]);
var state_11285__$1 = state_11285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11285__$1,(11),to,inst_11264);
} else {
if((state_val_11286 === (3))){
var inst_11283 = (state_11285[(2)]);
var state_11285__$1 = state_11285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11285__$1,inst_11283);
} else {
if((state_val_11286 === (12))){
var state_11285__$1 = state_11285;
var statearr_11293_11319 = state_11285__$1;
(statearr_11293_11319[(2)] = null);

(statearr_11293_11319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (2))){
var state_11285__$1 = state_11285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11285__$1,(4),from);
} else {
if((state_val_11286 === (11))){
var inst_11274 = (state_11285[(2)]);
var state_11285__$1 = state_11285;
if(cljs.core.truth_(inst_11274)){
var statearr_11294_11320 = state_11285__$1;
(statearr_11294_11320[(1)] = (12));

} else {
var statearr_11295_11321 = state_11285__$1;
(statearr_11295_11321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (9))){
var state_11285__$1 = state_11285;
var statearr_11296_11322 = state_11285__$1;
(statearr_11296_11322[(2)] = null);

(statearr_11296_11322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (5))){
var state_11285__$1 = state_11285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11297_11323 = state_11285__$1;
(statearr_11297_11323[(1)] = (8));

} else {
var statearr_11298_11324 = state_11285__$1;
(statearr_11298_11324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (14))){
var inst_11279 = (state_11285[(2)]);
var state_11285__$1 = state_11285;
var statearr_11299_11325 = state_11285__$1;
(statearr_11299_11325[(2)] = inst_11279);

(statearr_11299_11325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (10))){
var inst_11271 = (state_11285[(2)]);
var state_11285__$1 = state_11285;
var statearr_11300_11326 = state_11285__$1;
(statearr_11300_11326[(2)] = inst_11271);

(statearr_11300_11326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11286 === (8))){
var inst_11268 = cljs.core.async.close_BANG_.call(null,to);
var state_11285__$1 = state_11285;
var statearr_11301_11327 = state_11285__$1;
(statearr_11301_11327[(2)] = inst_11268);

(statearr_11301_11327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___11313))
;
return ((function (switch__11034__auto__,c__11146__auto___11313){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_11285){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11306){if((e11306 instanceof Object)){
var ex__11038__auto__ = e11306;
var statearr_11307_11328 = state_11285;
(statearr_11307_11328[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11329 = state_11285;
state_11285 = G__11329;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_11285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_11285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___11313))
})();
var state__11148__auto__ = (function (){var statearr_11308 = f__11147__auto__.call(null);
(statearr_11308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11313);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___11313))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11517){
var vec__11518 = p__11517;
var v = cljs.core.nth.call(null,vec__11518,(0),null);
var p = cljs.core.nth.call(null,vec__11518,(1),null);
var job = vec__11518;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11146__auto___11704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results){
return (function (state_11525){
var state_val_11526 = (state_11525[(1)]);
if((state_val_11526 === (1))){
var state_11525__$1 = state_11525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11525__$1,(2),res,v);
} else {
if((state_val_11526 === (2))){
var inst_11522 = (state_11525[(2)]);
var inst_11523 = cljs.core.async.close_BANG_.call(null,res);
var state_11525__$1 = (function (){var statearr_11527 = state_11525;
(statearr_11527[(7)] = inst_11522);

return statearr_11527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11525__$1,inst_11523);
} else {
return null;
}
}
});})(c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results))
;
return ((function (switch__11034__auto__,c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_11531 = [null,null,null,null,null,null,null,null];
(statearr_11531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__);

(statearr_11531[(1)] = (1));

return statearr_11531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1 = (function (state_11525){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11532){if((e11532 instanceof Object)){
var ex__11038__auto__ = e11532;
var statearr_11533_11705 = state_11525;
(statearr_11533_11705[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11706 = state_11525;
state_11525 = G__11706;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = function(state_11525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1.call(this,state_11525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results))
})();
var state__11148__auto__ = (function (){var statearr_11534 = f__11147__auto__.call(null);
(statearr_11534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11704);

return statearr_11534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___11704,res,vec__11518,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11535){
var vec__11536 = p__11535;
var v = cljs.core.nth.call(null,vec__11536,(0),null);
var p = cljs.core.nth.call(null,vec__11536,(1),null);
var job = vec__11536;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7166__auto___11707 = n;
var __11708 = (0);
while(true){
if((__11708 < n__7166__auto___11707)){
var G__11539_11709 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11539_11709) {
case "compute":
var c__11146__auto___11711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11708,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (__11708,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function (state_11552){
var state_val_11553 = (state_11552[(1)]);
if((state_val_11553 === (1))){
var state_11552__$1 = state_11552;
var statearr_11554_11712 = state_11552__$1;
(statearr_11554_11712[(2)] = null);

(statearr_11554_11712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (2))){
var state_11552__$1 = state_11552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11552__$1,(4),jobs);
} else {
if((state_val_11553 === (3))){
var inst_11550 = (state_11552[(2)]);
var state_11552__$1 = state_11552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11552__$1,inst_11550);
} else {
if((state_val_11553 === (4))){
var inst_11542 = (state_11552[(2)]);
var inst_11543 = process.call(null,inst_11542);
var state_11552__$1 = state_11552;
if(cljs.core.truth_(inst_11543)){
var statearr_11555_11713 = state_11552__$1;
(statearr_11555_11713[(1)] = (5));

} else {
var statearr_11556_11714 = state_11552__$1;
(statearr_11556_11714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (5))){
var state_11552__$1 = state_11552;
var statearr_11557_11715 = state_11552__$1;
(statearr_11557_11715[(2)] = null);

(statearr_11557_11715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (6))){
var state_11552__$1 = state_11552;
var statearr_11558_11716 = state_11552__$1;
(statearr_11558_11716[(2)] = null);

(statearr_11558_11716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11553 === (7))){
var inst_11548 = (state_11552[(2)]);
var state_11552__$1 = state_11552;
var statearr_11559_11717 = state_11552__$1;
(statearr_11559_11717[(2)] = inst_11548);

(statearr_11559_11717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11708,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
;
return ((function (__11708,switch__11034__auto__,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_11563 = [null,null,null,null,null,null,null];
(statearr_11563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__);

(statearr_11563[(1)] = (1));

return statearr_11563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1 = (function (state_11552){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object)){
var ex__11038__auto__ = e11564;
var statearr_11565_11718 = state_11552;
(statearr_11565_11718[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11719 = state_11552;
state_11552 = G__11719;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = function(state_11552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1.call(this,state_11552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__;
})()
;})(__11708,switch__11034__auto__,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
})();
var state__11148__auto__ = (function (){var statearr_11566 = f__11147__auto__.call(null);
(statearr_11566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11711);

return statearr_11566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(__11708,c__11146__auto___11711,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
);


break;
case "async":
var c__11146__auto___11720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11708,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (__11708,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function (state_11579){
var state_val_11580 = (state_11579[(1)]);
if((state_val_11580 === (1))){
var state_11579__$1 = state_11579;
var statearr_11581_11721 = state_11579__$1;
(statearr_11581_11721[(2)] = null);

(statearr_11581_11721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (2))){
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11579__$1,(4),jobs);
} else {
if((state_val_11580 === (3))){
var inst_11577 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11579__$1,inst_11577);
} else {
if((state_val_11580 === (4))){
var inst_11569 = (state_11579[(2)]);
var inst_11570 = async.call(null,inst_11569);
var state_11579__$1 = state_11579;
if(cljs.core.truth_(inst_11570)){
var statearr_11582_11722 = state_11579__$1;
(statearr_11582_11722[(1)] = (5));

} else {
var statearr_11583_11723 = state_11579__$1;
(statearr_11583_11723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (5))){
var state_11579__$1 = state_11579;
var statearr_11584_11724 = state_11579__$1;
(statearr_11584_11724[(2)] = null);

(statearr_11584_11724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (6))){
var state_11579__$1 = state_11579;
var statearr_11585_11725 = state_11579__$1;
(statearr_11585_11725[(2)] = null);

(statearr_11585_11725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (7))){
var inst_11575 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11586_11726 = state_11579__$1;
(statearr_11586_11726[(2)] = inst_11575);

(statearr_11586_11726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11708,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
;
return ((function (__11708,switch__11034__auto__,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_11590 = [null,null,null,null,null,null,null];
(statearr_11590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__);

(statearr_11590[(1)] = (1));

return statearr_11590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1 = (function (state_11579){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11591){if((e11591 instanceof Object)){
var ex__11038__auto__ = e11591;
var statearr_11592_11727 = state_11579;
(statearr_11592_11727[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11728 = state_11579;
state_11579 = G__11728;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__;
})()
;})(__11708,switch__11034__auto__,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
})();
var state__11148__auto__ = (function (){var statearr_11593 = f__11147__auto__.call(null);
(statearr_11593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11720);

return statearr_11593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(__11708,c__11146__auto___11720,G__11539_11709,n__7166__auto___11707,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11729 = (__11708 + (1));
__11708 = G__11729;
continue;
} else {
}
break;
}

var c__11146__auto___11730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___11730,jobs,results,process,async){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___11730,jobs,results,process,async){
return (function (state_11615){
var state_val_11616 = (state_11615[(1)]);
if((state_val_11616 === (1))){
var state_11615__$1 = state_11615;
var statearr_11617_11731 = state_11615__$1;
(statearr_11617_11731[(2)] = null);

(statearr_11617_11731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11616 === (2))){
var state_11615__$1 = state_11615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11615__$1,(4),from);
} else {
if((state_val_11616 === (3))){
var inst_11613 = (state_11615[(2)]);
var state_11615__$1 = state_11615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11615__$1,inst_11613);
} else {
if((state_val_11616 === (4))){
var inst_11596 = (state_11615[(7)]);
var inst_11596__$1 = (state_11615[(2)]);
var inst_11597 = (inst_11596__$1 == null);
var state_11615__$1 = (function (){var statearr_11618 = state_11615;
(statearr_11618[(7)] = inst_11596__$1);

return statearr_11618;
})();
if(cljs.core.truth_(inst_11597)){
var statearr_11619_11732 = state_11615__$1;
(statearr_11619_11732[(1)] = (5));

} else {
var statearr_11620_11733 = state_11615__$1;
(statearr_11620_11733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11616 === (5))){
var inst_11599 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11615__$1 = state_11615;
var statearr_11621_11734 = state_11615__$1;
(statearr_11621_11734[(2)] = inst_11599);

(statearr_11621_11734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11616 === (6))){
var inst_11601 = (state_11615[(8)]);
var inst_11596 = (state_11615[(7)]);
var inst_11601__$1 = cljs.core.async.chan.call(null,(1));
var inst_11602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11603 = [inst_11596,inst_11601__$1];
var inst_11604 = (new cljs.core.PersistentVector(null,2,(5),inst_11602,inst_11603,null));
var state_11615__$1 = (function (){var statearr_11622 = state_11615;
(statearr_11622[(8)] = inst_11601__$1);

return statearr_11622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11615__$1,(8),jobs,inst_11604);
} else {
if((state_val_11616 === (7))){
var inst_11611 = (state_11615[(2)]);
var state_11615__$1 = state_11615;
var statearr_11623_11735 = state_11615__$1;
(statearr_11623_11735[(2)] = inst_11611);

(statearr_11623_11735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11616 === (8))){
var inst_11601 = (state_11615[(8)]);
var inst_11606 = (state_11615[(2)]);
var state_11615__$1 = (function (){var statearr_11624 = state_11615;
(statearr_11624[(9)] = inst_11606);

return statearr_11624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11615__$1,(9),results,inst_11601);
} else {
if((state_val_11616 === (9))){
var inst_11608 = (state_11615[(2)]);
var state_11615__$1 = (function (){var statearr_11625 = state_11615;
(statearr_11625[(10)] = inst_11608);

return statearr_11625;
})();
var statearr_11626_11736 = state_11615__$1;
(statearr_11626_11736[(2)] = null);

(statearr_11626_11736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___11730,jobs,results,process,async))
;
return ((function (switch__11034__auto__,c__11146__auto___11730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_11630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__);

(statearr_11630[(1)] = (1));

return statearr_11630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1 = (function (state_11615){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11631){if((e11631 instanceof Object)){
var ex__11038__auto__ = e11631;
var statearr_11632_11737 = state_11615;
(statearr_11632_11737[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11738 = state_11615;
state_11615 = G__11738;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = function(state_11615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1.call(this,state_11615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___11730,jobs,results,process,async))
})();
var state__11148__auto__ = (function (){var statearr_11633 = f__11147__auto__.call(null);
(statearr_11633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11730);

return statearr_11633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___11730,jobs,results,process,async))
);


var c__11146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto__,jobs,results,process,async){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto__,jobs,results,process,async){
return (function (state_11671){
var state_val_11672 = (state_11671[(1)]);
if((state_val_11672 === (7))){
var inst_11667 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
var statearr_11673_11739 = state_11671__$1;
(statearr_11673_11739[(2)] = inst_11667);

(statearr_11673_11739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (20))){
var state_11671__$1 = state_11671;
var statearr_11674_11740 = state_11671__$1;
(statearr_11674_11740[(2)] = null);

(statearr_11674_11740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (1))){
var state_11671__$1 = state_11671;
var statearr_11675_11741 = state_11671__$1;
(statearr_11675_11741[(2)] = null);

(statearr_11675_11741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (4))){
var inst_11636 = (state_11671[(7)]);
var inst_11636__$1 = (state_11671[(2)]);
var inst_11637 = (inst_11636__$1 == null);
var state_11671__$1 = (function (){var statearr_11676 = state_11671;
(statearr_11676[(7)] = inst_11636__$1);

return statearr_11676;
})();
if(cljs.core.truth_(inst_11637)){
var statearr_11677_11742 = state_11671__$1;
(statearr_11677_11742[(1)] = (5));

} else {
var statearr_11678_11743 = state_11671__$1;
(statearr_11678_11743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (15))){
var inst_11649 = (state_11671[(8)]);
var state_11671__$1 = state_11671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11671__$1,(18),to,inst_11649);
} else {
if((state_val_11672 === (21))){
var inst_11662 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
var statearr_11679_11744 = state_11671__$1;
(statearr_11679_11744[(2)] = inst_11662);

(statearr_11679_11744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (13))){
var inst_11664 = (state_11671[(2)]);
var state_11671__$1 = (function (){var statearr_11680 = state_11671;
(statearr_11680[(9)] = inst_11664);

return statearr_11680;
})();
var statearr_11681_11745 = state_11671__$1;
(statearr_11681_11745[(2)] = null);

(statearr_11681_11745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (6))){
var inst_11636 = (state_11671[(7)]);
var state_11671__$1 = state_11671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11671__$1,(11),inst_11636);
} else {
if((state_val_11672 === (17))){
var inst_11657 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
if(cljs.core.truth_(inst_11657)){
var statearr_11682_11746 = state_11671__$1;
(statearr_11682_11746[(1)] = (19));

} else {
var statearr_11683_11747 = state_11671__$1;
(statearr_11683_11747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (3))){
var inst_11669 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11671__$1,inst_11669);
} else {
if((state_val_11672 === (12))){
var inst_11646 = (state_11671[(10)]);
var state_11671__$1 = state_11671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11671__$1,(14),inst_11646);
} else {
if((state_val_11672 === (2))){
var state_11671__$1 = state_11671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11671__$1,(4),results);
} else {
if((state_val_11672 === (19))){
var state_11671__$1 = state_11671;
var statearr_11684_11748 = state_11671__$1;
(statearr_11684_11748[(2)] = null);

(statearr_11684_11748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (11))){
var inst_11646 = (state_11671[(2)]);
var state_11671__$1 = (function (){var statearr_11685 = state_11671;
(statearr_11685[(10)] = inst_11646);

return statearr_11685;
})();
var statearr_11686_11749 = state_11671__$1;
(statearr_11686_11749[(2)] = null);

(statearr_11686_11749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (9))){
var state_11671__$1 = state_11671;
var statearr_11687_11750 = state_11671__$1;
(statearr_11687_11750[(2)] = null);

(statearr_11687_11750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (5))){
var state_11671__$1 = state_11671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11688_11751 = state_11671__$1;
(statearr_11688_11751[(1)] = (8));

} else {
var statearr_11689_11752 = state_11671__$1;
(statearr_11689_11752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (14))){
var inst_11649 = (state_11671[(8)]);
var inst_11651 = (state_11671[(11)]);
var inst_11649__$1 = (state_11671[(2)]);
var inst_11650 = (inst_11649__$1 == null);
var inst_11651__$1 = cljs.core.not.call(null,inst_11650);
var state_11671__$1 = (function (){var statearr_11690 = state_11671;
(statearr_11690[(8)] = inst_11649__$1);

(statearr_11690[(11)] = inst_11651__$1);

return statearr_11690;
})();
if(inst_11651__$1){
var statearr_11691_11753 = state_11671__$1;
(statearr_11691_11753[(1)] = (15));

} else {
var statearr_11692_11754 = state_11671__$1;
(statearr_11692_11754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (16))){
var inst_11651 = (state_11671[(11)]);
var state_11671__$1 = state_11671;
var statearr_11693_11755 = state_11671__$1;
(statearr_11693_11755[(2)] = inst_11651);

(statearr_11693_11755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (10))){
var inst_11643 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
var statearr_11694_11756 = state_11671__$1;
(statearr_11694_11756[(2)] = inst_11643);

(statearr_11694_11756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (18))){
var inst_11654 = (state_11671[(2)]);
var state_11671__$1 = state_11671;
var statearr_11695_11757 = state_11671__$1;
(statearr_11695_11757[(2)] = inst_11654);

(statearr_11695_11757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11672 === (8))){
var inst_11640 = cljs.core.async.close_BANG_.call(null,to);
var state_11671__$1 = state_11671;
var statearr_11696_11758 = state_11671__$1;
(statearr_11696_11758[(2)] = inst_11640);

(statearr_11696_11758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto__,jobs,results,process,async))
;
return ((function (switch__11034__auto__,c__11146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_11700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__);

(statearr_11700[(1)] = (1));

return statearr_11700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1 = (function (state_11671){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11701){if((e11701 instanceof Object)){
var ex__11038__auto__ = e11701;
var statearr_11702_11759 = state_11671;
(statearr_11702_11759[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11760 = state_11671;
state_11671 = G__11760;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__ = function(state_11671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1.call(this,state_11671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto__,jobs,results,process,async))
})();
var state__11148__auto__ = (function (){var statearr_11703 = f__11147__auto__.call(null);
(statearr_11703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto__);

return statearr_11703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto__,jobs,results,process,async))
);

return c__11146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11761 = [];
var len__7326__auto___11764 = arguments.length;
var i__7327__auto___11765 = (0);
while(true){
if((i__7327__auto___11765 < len__7326__auto___11764)){
args11761.push((arguments[i__7327__auto___11765]));

var G__11766 = (i__7327__auto___11765 + (1));
i__7327__auto___11765 = G__11766;
continue;
} else {
}
break;
}

var G__11763 = args11761.length;
switch (G__11763) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11761.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11768 = [];
var len__7326__auto___11771 = arguments.length;
var i__7327__auto___11772 = (0);
while(true){
if((i__7327__auto___11772 < len__7326__auto___11771)){
args11768.push((arguments[i__7327__auto___11772]));

var G__11773 = (i__7327__auto___11772 + (1));
i__7327__auto___11772 = G__11773;
continue;
} else {
}
break;
}

var G__11770 = args11768.length;
switch (G__11770) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11768.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11775 = [];
var len__7326__auto___11828 = arguments.length;
var i__7327__auto___11829 = (0);
while(true){
if((i__7327__auto___11829 < len__7326__auto___11828)){
args11775.push((arguments[i__7327__auto___11829]));

var G__11830 = (i__7327__auto___11829 + (1));
i__7327__auto___11829 = G__11830;
continue;
} else {
}
break;
}

var G__11777 = args11775.length;
switch (G__11777) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11775.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11146__auto___11832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___11832,tc,fc){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___11832,tc,fc){
return (function (state_11803){
var state_val_11804 = (state_11803[(1)]);
if((state_val_11804 === (7))){
var inst_11799 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
var statearr_11805_11833 = state_11803__$1;
(statearr_11805_11833[(2)] = inst_11799);

(statearr_11805_11833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (1))){
var state_11803__$1 = state_11803;
var statearr_11806_11834 = state_11803__$1;
(statearr_11806_11834[(2)] = null);

(statearr_11806_11834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (4))){
var inst_11780 = (state_11803[(7)]);
var inst_11780__$1 = (state_11803[(2)]);
var inst_11781 = (inst_11780__$1 == null);
var state_11803__$1 = (function (){var statearr_11807 = state_11803;
(statearr_11807[(7)] = inst_11780__$1);

return statearr_11807;
})();
if(cljs.core.truth_(inst_11781)){
var statearr_11808_11835 = state_11803__$1;
(statearr_11808_11835[(1)] = (5));

} else {
var statearr_11809_11836 = state_11803__$1;
(statearr_11809_11836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (13))){
var state_11803__$1 = state_11803;
var statearr_11810_11837 = state_11803__$1;
(statearr_11810_11837[(2)] = null);

(statearr_11810_11837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (6))){
var inst_11780 = (state_11803[(7)]);
var inst_11786 = p.call(null,inst_11780);
var state_11803__$1 = state_11803;
if(cljs.core.truth_(inst_11786)){
var statearr_11811_11838 = state_11803__$1;
(statearr_11811_11838[(1)] = (9));

} else {
var statearr_11812_11839 = state_11803__$1;
(statearr_11812_11839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (3))){
var inst_11801 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11803__$1,inst_11801);
} else {
if((state_val_11804 === (12))){
var state_11803__$1 = state_11803;
var statearr_11813_11840 = state_11803__$1;
(statearr_11813_11840[(2)] = null);

(statearr_11813_11840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (2))){
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11803__$1,(4),ch);
} else {
if((state_val_11804 === (11))){
var inst_11780 = (state_11803[(7)]);
var inst_11790 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11803__$1,(8),inst_11790,inst_11780);
} else {
if((state_val_11804 === (9))){
var state_11803__$1 = state_11803;
var statearr_11814_11841 = state_11803__$1;
(statearr_11814_11841[(2)] = tc);

(statearr_11814_11841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (5))){
var inst_11783 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11784 = cljs.core.async.close_BANG_.call(null,fc);
var state_11803__$1 = (function (){var statearr_11815 = state_11803;
(statearr_11815[(8)] = inst_11783);

return statearr_11815;
})();
var statearr_11816_11842 = state_11803__$1;
(statearr_11816_11842[(2)] = inst_11784);

(statearr_11816_11842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (14))){
var inst_11797 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
var statearr_11817_11843 = state_11803__$1;
(statearr_11817_11843[(2)] = inst_11797);

(statearr_11817_11843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (10))){
var state_11803__$1 = state_11803;
var statearr_11818_11844 = state_11803__$1;
(statearr_11818_11844[(2)] = fc);

(statearr_11818_11844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (8))){
var inst_11792 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
if(cljs.core.truth_(inst_11792)){
var statearr_11819_11845 = state_11803__$1;
(statearr_11819_11845[(1)] = (12));

} else {
var statearr_11820_11846 = state_11803__$1;
(statearr_11820_11846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___11832,tc,fc))
;
return ((function (switch__11034__auto__,c__11146__auto___11832,tc,fc){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_11824 = [null,null,null,null,null,null,null,null,null];
(statearr_11824[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_11824[(1)] = (1));

return statearr_11824;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_11803){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11825){if((e11825 instanceof Object)){
var ex__11038__auto__ = e11825;
var statearr_11826_11847 = state_11803;
(statearr_11826_11847[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11848 = state_11803;
state_11803 = G__11848;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_11803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_11803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___11832,tc,fc))
})();
var state__11148__auto__ = (function (){var statearr_11827 = f__11147__auto__.call(null);
(statearr_11827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___11832);

return statearr_11827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___11832,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto__){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto__){
return (function (state_11912){
var state_val_11913 = (state_11912[(1)]);
if((state_val_11913 === (7))){
var inst_11908 = (state_11912[(2)]);
var state_11912__$1 = state_11912;
var statearr_11914_11935 = state_11912__$1;
(statearr_11914_11935[(2)] = inst_11908);

(statearr_11914_11935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (1))){
var inst_11892 = init;
var state_11912__$1 = (function (){var statearr_11915 = state_11912;
(statearr_11915[(7)] = inst_11892);

return statearr_11915;
})();
var statearr_11916_11936 = state_11912__$1;
(statearr_11916_11936[(2)] = null);

(statearr_11916_11936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (4))){
var inst_11895 = (state_11912[(8)]);
var inst_11895__$1 = (state_11912[(2)]);
var inst_11896 = (inst_11895__$1 == null);
var state_11912__$1 = (function (){var statearr_11917 = state_11912;
(statearr_11917[(8)] = inst_11895__$1);

return statearr_11917;
})();
if(cljs.core.truth_(inst_11896)){
var statearr_11918_11937 = state_11912__$1;
(statearr_11918_11937[(1)] = (5));

} else {
var statearr_11919_11938 = state_11912__$1;
(statearr_11919_11938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (6))){
var inst_11899 = (state_11912[(9)]);
var inst_11895 = (state_11912[(8)]);
var inst_11892 = (state_11912[(7)]);
var inst_11899__$1 = f.call(null,inst_11892,inst_11895);
var inst_11900 = cljs.core.reduced_QMARK_.call(null,inst_11899__$1);
var state_11912__$1 = (function (){var statearr_11920 = state_11912;
(statearr_11920[(9)] = inst_11899__$1);

return statearr_11920;
})();
if(inst_11900){
var statearr_11921_11939 = state_11912__$1;
(statearr_11921_11939[(1)] = (8));

} else {
var statearr_11922_11940 = state_11912__$1;
(statearr_11922_11940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (3))){
var inst_11910 = (state_11912[(2)]);
var state_11912__$1 = state_11912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11912__$1,inst_11910);
} else {
if((state_val_11913 === (2))){
var state_11912__$1 = state_11912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11912__$1,(4),ch);
} else {
if((state_val_11913 === (9))){
var inst_11899 = (state_11912[(9)]);
var inst_11892 = inst_11899;
var state_11912__$1 = (function (){var statearr_11923 = state_11912;
(statearr_11923[(7)] = inst_11892);

return statearr_11923;
})();
var statearr_11924_11941 = state_11912__$1;
(statearr_11924_11941[(2)] = null);

(statearr_11924_11941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (5))){
var inst_11892 = (state_11912[(7)]);
var state_11912__$1 = state_11912;
var statearr_11925_11942 = state_11912__$1;
(statearr_11925_11942[(2)] = inst_11892);

(statearr_11925_11942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (10))){
var inst_11906 = (state_11912[(2)]);
var state_11912__$1 = state_11912;
var statearr_11926_11943 = state_11912__$1;
(statearr_11926_11943[(2)] = inst_11906);

(statearr_11926_11943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11913 === (8))){
var inst_11899 = (state_11912[(9)]);
var inst_11902 = cljs.core.deref.call(null,inst_11899);
var state_11912__$1 = state_11912;
var statearr_11927_11944 = state_11912__$1;
(statearr_11927_11944[(2)] = inst_11902);

(statearr_11927_11944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto__))
;
return ((function (switch__11034__auto__,c__11146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11035__auto____0 = (function (){
var statearr_11931 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11931[(0)] = cljs$core$async$reduce_$_state_machine__11035__auto__);

(statearr_11931[(1)] = (1));

return statearr_11931;
});
var cljs$core$async$reduce_$_state_machine__11035__auto____1 = (function (state_11912){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11932){if((e11932 instanceof Object)){
var ex__11038__auto__ = e11932;
var statearr_11933_11945 = state_11912;
(statearr_11933_11945[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11946 = state_11912;
state_11912 = G__11946;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11035__auto__ = function(state_11912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11035__auto____1.call(this,state_11912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11035__auto____0;
cljs$core$async$reduce_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11035__auto____1;
return cljs$core$async$reduce_$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto__))
})();
var state__11148__auto__ = (function (){var statearr_11934 = f__11147__auto__.call(null);
(statearr_11934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto__);

return statearr_11934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto__))
);

return c__11146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11947 = [];
var len__7326__auto___11999 = arguments.length;
var i__7327__auto___12000 = (0);
while(true){
if((i__7327__auto___12000 < len__7326__auto___11999)){
args11947.push((arguments[i__7327__auto___12000]));

var G__12001 = (i__7327__auto___12000 + (1));
i__7327__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var G__11949 = args11947.length;
switch (G__11949) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11947.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto__){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto__){
return (function (state_11974){
var state_val_11975 = (state_11974[(1)]);
if((state_val_11975 === (7))){
var inst_11956 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_11976_12003 = state_11974__$1;
(statearr_11976_12003[(2)] = inst_11956);

(statearr_11976_12003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (1))){
var inst_11950 = cljs.core.seq.call(null,coll);
var inst_11951 = inst_11950;
var state_11974__$1 = (function (){var statearr_11977 = state_11974;
(statearr_11977[(7)] = inst_11951);

return statearr_11977;
})();
var statearr_11978_12004 = state_11974__$1;
(statearr_11978_12004[(2)] = null);

(statearr_11978_12004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (4))){
var inst_11951 = (state_11974[(7)]);
var inst_11954 = cljs.core.first.call(null,inst_11951);
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11974__$1,(7),ch,inst_11954);
} else {
if((state_val_11975 === (13))){
var inst_11968 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_11979_12005 = state_11974__$1;
(statearr_11979_12005[(2)] = inst_11968);

(statearr_11979_12005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (6))){
var inst_11959 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11959)){
var statearr_11980_12006 = state_11974__$1;
(statearr_11980_12006[(1)] = (8));

} else {
var statearr_11981_12007 = state_11974__$1;
(statearr_11981_12007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (3))){
var inst_11972 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11974__$1,inst_11972);
} else {
if((state_val_11975 === (12))){
var state_11974__$1 = state_11974;
var statearr_11982_12008 = state_11974__$1;
(statearr_11982_12008[(2)] = null);

(statearr_11982_12008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (2))){
var inst_11951 = (state_11974[(7)]);
var state_11974__$1 = state_11974;
if(cljs.core.truth_(inst_11951)){
var statearr_11983_12009 = state_11974__$1;
(statearr_11983_12009[(1)] = (4));

} else {
var statearr_11984_12010 = state_11974__$1;
(statearr_11984_12010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (11))){
var inst_11965 = cljs.core.async.close_BANG_.call(null,ch);
var state_11974__$1 = state_11974;
var statearr_11985_12011 = state_11974__$1;
(statearr_11985_12011[(2)] = inst_11965);

(statearr_11985_12011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (9))){
var state_11974__$1 = state_11974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11986_12012 = state_11974__$1;
(statearr_11986_12012[(1)] = (11));

} else {
var statearr_11987_12013 = state_11974__$1;
(statearr_11987_12013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (5))){
var inst_11951 = (state_11974[(7)]);
var state_11974__$1 = state_11974;
var statearr_11988_12014 = state_11974__$1;
(statearr_11988_12014[(2)] = inst_11951);

(statearr_11988_12014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (10))){
var inst_11970 = (state_11974[(2)]);
var state_11974__$1 = state_11974;
var statearr_11989_12015 = state_11974__$1;
(statearr_11989_12015[(2)] = inst_11970);

(statearr_11989_12015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11975 === (8))){
var inst_11951 = (state_11974[(7)]);
var inst_11961 = cljs.core.next.call(null,inst_11951);
var inst_11951__$1 = inst_11961;
var state_11974__$1 = (function (){var statearr_11990 = state_11974;
(statearr_11990[(7)] = inst_11951__$1);

return statearr_11990;
})();
var statearr_11991_12016 = state_11974__$1;
(statearr_11991_12016[(2)] = null);

(statearr_11991_12016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto__))
;
return ((function (switch__11034__auto__,c__11146__auto__){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_11995 = [null,null,null,null,null,null,null,null];
(statearr_11995[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_11995[(1)] = (1));

return statearr_11995;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_11974){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_11974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e11996){if((e11996 instanceof Object)){
var ex__11038__auto__ = e11996;
var statearr_11997_12017 = state_11974;
(statearr_11997_12017[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12018 = state_11974;
state_11974 = G__12018;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto__))
})();
var state__11148__auto__ = (function (){var statearr_11998 = f__11147__auto__.call(null);
(statearr_11998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto__);

return statearr_11998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto__))
);

return c__11146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6914__auto__ = (((_ == null))?null:_);
var m__6915__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,_);
} else {
var m__6915__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6915__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m);
} else {
var m__6915__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12244 = (function (mult,ch,cs,meta12245){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12245 = meta12245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12246,meta12245__$1){
var self__ = this;
var _12246__$1 = this;
return (new cljs.core.async.t_cljs$core$async12244(self__.mult,self__.ch,self__.cs,meta12245__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12246){
var self__ = this;
var _12246__$1 = this;
return self__.meta12245;
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12245","meta12245",-801567801,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12244";

cljs.core.async.t_cljs$core$async12244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async12244");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12244 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12244(mult__$1,ch__$1,cs__$1,meta12245){
return (new cljs.core.async.t_cljs$core$async12244(mult__$1,ch__$1,cs__$1,meta12245));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12244(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11146__auto___12469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___12469,cs,m,dchan,dctr,done){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___12469,cs,m,dchan,dctr,done){
return (function (state_12381){
var state_val_12382 = (state_12381[(1)]);
if((state_val_12382 === (7))){
var inst_12377 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12383_12470 = state_12381__$1;
(statearr_12383_12470[(2)] = inst_12377);

(statearr_12383_12470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (20))){
var inst_12280 = (state_12381[(7)]);
var inst_12292 = cljs.core.first.call(null,inst_12280);
var inst_12293 = cljs.core.nth.call(null,inst_12292,(0),null);
var inst_12294 = cljs.core.nth.call(null,inst_12292,(1),null);
var state_12381__$1 = (function (){var statearr_12384 = state_12381;
(statearr_12384[(8)] = inst_12293);

return statearr_12384;
})();
if(cljs.core.truth_(inst_12294)){
var statearr_12385_12471 = state_12381__$1;
(statearr_12385_12471[(1)] = (22));

} else {
var statearr_12386_12472 = state_12381__$1;
(statearr_12386_12472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (27))){
var inst_12329 = (state_12381[(9)]);
var inst_12249 = (state_12381[(10)]);
var inst_12324 = (state_12381[(11)]);
var inst_12322 = (state_12381[(12)]);
var inst_12329__$1 = cljs.core._nth.call(null,inst_12322,inst_12324);
var inst_12330 = cljs.core.async.put_BANG_.call(null,inst_12329__$1,inst_12249,done);
var state_12381__$1 = (function (){var statearr_12387 = state_12381;
(statearr_12387[(9)] = inst_12329__$1);

return statearr_12387;
})();
if(cljs.core.truth_(inst_12330)){
var statearr_12388_12473 = state_12381__$1;
(statearr_12388_12473[(1)] = (30));

} else {
var statearr_12389_12474 = state_12381__$1;
(statearr_12389_12474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (1))){
var state_12381__$1 = state_12381;
var statearr_12390_12475 = state_12381__$1;
(statearr_12390_12475[(2)] = null);

(statearr_12390_12475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (24))){
var inst_12280 = (state_12381[(7)]);
var inst_12299 = (state_12381[(2)]);
var inst_12300 = cljs.core.next.call(null,inst_12280);
var inst_12258 = inst_12300;
var inst_12259 = null;
var inst_12260 = (0);
var inst_12261 = (0);
var state_12381__$1 = (function (){var statearr_12391 = state_12381;
(statearr_12391[(13)] = inst_12259);

(statearr_12391[(14)] = inst_12299);

(statearr_12391[(15)] = inst_12261);

(statearr_12391[(16)] = inst_12258);

(statearr_12391[(17)] = inst_12260);

return statearr_12391;
})();
var statearr_12392_12476 = state_12381__$1;
(statearr_12392_12476[(2)] = null);

(statearr_12392_12476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (39))){
var state_12381__$1 = state_12381;
var statearr_12396_12477 = state_12381__$1;
(statearr_12396_12477[(2)] = null);

(statearr_12396_12477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (4))){
var inst_12249 = (state_12381[(10)]);
var inst_12249__$1 = (state_12381[(2)]);
var inst_12250 = (inst_12249__$1 == null);
var state_12381__$1 = (function (){var statearr_12397 = state_12381;
(statearr_12397[(10)] = inst_12249__$1);

return statearr_12397;
})();
if(cljs.core.truth_(inst_12250)){
var statearr_12398_12478 = state_12381__$1;
(statearr_12398_12478[(1)] = (5));

} else {
var statearr_12399_12479 = state_12381__$1;
(statearr_12399_12479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (15))){
var inst_12259 = (state_12381[(13)]);
var inst_12261 = (state_12381[(15)]);
var inst_12258 = (state_12381[(16)]);
var inst_12260 = (state_12381[(17)]);
var inst_12276 = (state_12381[(2)]);
var inst_12277 = (inst_12261 + (1));
var tmp12393 = inst_12259;
var tmp12394 = inst_12258;
var tmp12395 = inst_12260;
var inst_12258__$1 = tmp12394;
var inst_12259__$1 = tmp12393;
var inst_12260__$1 = tmp12395;
var inst_12261__$1 = inst_12277;
var state_12381__$1 = (function (){var statearr_12400 = state_12381;
(statearr_12400[(13)] = inst_12259__$1);

(statearr_12400[(18)] = inst_12276);

(statearr_12400[(15)] = inst_12261__$1);

(statearr_12400[(16)] = inst_12258__$1);

(statearr_12400[(17)] = inst_12260__$1);

return statearr_12400;
})();
var statearr_12401_12480 = state_12381__$1;
(statearr_12401_12480[(2)] = null);

(statearr_12401_12480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (21))){
var inst_12303 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12405_12481 = state_12381__$1;
(statearr_12405_12481[(2)] = inst_12303);

(statearr_12405_12481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (31))){
var inst_12329 = (state_12381[(9)]);
var inst_12333 = done.call(null,null);
var inst_12334 = cljs.core.async.untap_STAR_.call(null,m,inst_12329);
var state_12381__$1 = (function (){var statearr_12406 = state_12381;
(statearr_12406[(19)] = inst_12333);

return statearr_12406;
})();
var statearr_12407_12482 = state_12381__$1;
(statearr_12407_12482[(2)] = inst_12334);

(statearr_12407_12482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (32))){
var inst_12324 = (state_12381[(11)]);
var inst_12321 = (state_12381[(20)]);
var inst_12323 = (state_12381[(21)]);
var inst_12322 = (state_12381[(12)]);
var inst_12336 = (state_12381[(2)]);
var inst_12337 = (inst_12324 + (1));
var tmp12402 = inst_12321;
var tmp12403 = inst_12323;
var tmp12404 = inst_12322;
var inst_12321__$1 = tmp12402;
var inst_12322__$1 = tmp12404;
var inst_12323__$1 = tmp12403;
var inst_12324__$1 = inst_12337;
var state_12381__$1 = (function (){var statearr_12408 = state_12381;
(statearr_12408[(11)] = inst_12324__$1);

(statearr_12408[(20)] = inst_12321__$1);

(statearr_12408[(21)] = inst_12323__$1);

(statearr_12408[(12)] = inst_12322__$1);

(statearr_12408[(22)] = inst_12336);

return statearr_12408;
})();
var statearr_12409_12483 = state_12381__$1;
(statearr_12409_12483[(2)] = null);

(statearr_12409_12483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (40))){
var inst_12349 = (state_12381[(23)]);
var inst_12353 = done.call(null,null);
var inst_12354 = cljs.core.async.untap_STAR_.call(null,m,inst_12349);
var state_12381__$1 = (function (){var statearr_12410 = state_12381;
(statearr_12410[(24)] = inst_12353);

return statearr_12410;
})();
var statearr_12411_12484 = state_12381__$1;
(statearr_12411_12484[(2)] = inst_12354);

(statearr_12411_12484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (33))){
var inst_12340 = (state_12381[(25)]);
var inst_12342 = cljs.core.chunked_seq_QMARK_.call(null,inst_12340);
var state_12381__$1 = state_12381;
if(inst_12342){
var statearr_12412_12485 = state_12381__$1;
(statearr_12412_12485[(1)] = (36));

} else {
var statearr_12413_12486 = state_12381__$1;
(statearr_12413_12486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (13))){
var inst_12270 = (state_12381[(26)]);
var inst_12273 = cljs.core.async.close_BANG_.call(null,inst_12270);
var state_12381__$1 = state_12381;
var statearr_12414_12487 = state_12381__$1;
(statearr_12414_12487[(2)] = inst_12273);

(statearr_12414_12487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (22))){
var inst_12293 = (state_12381[(8)]);
var inst_12296 = cljs.core.async.close_BANG_.call(null,inst_12293);
var state_12381__$1 = state_12381;
var statearr_12415_12488 = state_12381__$1;
(statearr_12415_12488[(2)] = inst_12296);

(statearr_12415_12488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (36))){
var inst_12340 = (state_12381[(25)]);
var inst_12344 = cljs.core.chunk_first.call(null,inst_12340);
var inst_12345 = cljs.core.chunk_rest.call(null,inst_12340);
var inst_12346 = cljs.core.count.call(null,inst_12344);
var inst_12321 = inst_12345;
var inst_12322 = inst_12344;
var inst_12323 = inst_12346;
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12416 = state_12381;
(statearr_12416[(11)] = inst_12324);

(statearr_12416[(20)] = inst_12321);

(statearr_12416[(21)] = inst_12323);

(statearr_12416[(12)] = inst_12322);

return statearr_12416;
})();
var statearr_12417_12489 = state_12381__$1;
(statearr_12417_12489[(2)] = null);

(statearr_12417_12489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (41))){
var inst_12340 = (state_12381[(25)]);
var inst_12356 = (state_12381[(2)]);
var inst_12357 = cljs.core.next.call(null,inst_12340);
var inst_12321 = inst_12357;
var inst_12322 = null;
var inst_12323 = (0);
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12418 = state_12381;
(statearr_12418[(27)] = inst_12356);

(statearr_12418[(11)] = inst_12324);

(statearr_12418[(20)] = inst_12321);

(statearr_12418[(21)] = inst_12323);

(statearr_12418[(12)] = inst_12322);

return statearr_12418;
})();
var statearr_12419_12490 = state_12381__$1;
(statearr_12419_12490[(2)] = null);

(statearr_12419_12490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (43))){
var state_12381__$1 = state_12381;
var statearr_12420_12491 = state_12381__$1;
(statearr_12420_12491[(2)] = null);

(statearr_12420_12491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (29))){
var inst_12365 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12421_12492 = state_12381__$1;
(statearr_12421_12492[(2)] = inst_12365);

(statearr_12421_12492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (44))){
var inst_12374 = (state_12381[(2)]);
var state_12381__$1 = (function (){var statearr_12422 = state_12381;
(statearr_12422[(28)] = inst_12374);

return statearr_12422;
})();
var statearr_12423_12493 = state_12381__$1;
(statearr_12423_12493[(2)] = null);

(statearr_12423_12493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (6))){
var inst_12313 = (state_12381[(29)]);
var inst_12312 = cljs.core.deref.call(null,cs);
var inst_12313__$1 = cljs.core.keys.call(null,inst_12312);
var inst_12314 = cljs.core.count.call(null,inst_12313__$1);
var inst_12315 = cljs.core.reset_BANG_.call(null,dctr,inst_12314);
var inst_12320 = cljs.core.seq.call(null,inst_12313__$1);
var inst_12321 = inst_12320;
var inst_12322 = null;
var inst_12323 = (0);
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12424 = state_12381;
(statearr_12424[(11)] = inst_12324);

(statearr_12424[(30)] = inst_12315);

(statearr_12424[(20)] = inst_12321);

(statearr_12424[(21)] = inst_12323);

(statearr_12424[(29)] = inst_12313__$1);

(statearr_12424[(12)] = inst_12322);

return statearr_12424;
})();
var statearr_12425_12494 = state_12381__$1;
(statearr_12425_12494[(2)] = null);

(statearr_12425_12494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (28))){
var inst_12340 = (state_12381[(25)]);
var inst_12321 = (state_12381[(20)]);
var inst_12340__$1 = cljs.core.seq.call(null,inst_12321);
var state_12381__$1 = (function (){var statearr_12426 = state_12381;
(statearr_12426[(25)] = inst_12340__$1);

return statearr_12426;
})();
if(inst_12340__$1){
var statearr_12427_12495 = state_12381__$1;
(statearr_12427_12495[(1)] = (33));

} else {
var statearr_12428_12496 = state_12381__$1;
(statearr_12428_12496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (25))){
var inst_12324 = (state_12381[(11)]);
var inst_12323 = (state_12381[(21)]);
var inst_12326 = (inst_12324 < inst_12323);
var inst_12327 = inst_12326;
var state_12381__$1 = state_12381;
if(cljs.core.truth_(inst_12327)){
var statearr_12429_12497 = state_12381__$1;
(statearr_12429_12497[(1)] = (27));

} else {
var statearr_12430_12498 = state_12381__$1;
(statearr_12430_12498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (34))){
var state_12381__$1 = state_12381;
var statearr_12431_12499 = state_12381__$1;
(statearr_12431_12499[(2)] = null);

(statearr_12431_12499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (17))){
var state_12381__$1 = state_12381;
var statearr_12432_12500 = state_12381__$1;
(statearr_12432_12500[(2)] = null);

(statearr_12432_12500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (3))){
var inst_12379 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12381__$1,inst_12379);
} else {
if((state_val_12382 === (12))){
var inst_12308 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12433_12501 = state_12381__$1;
(statearr_12433_12501[(2)] = inst_12308);

(statearr_12433_12501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (2))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12381__$1,(4),ch);
} else {
if((state_val_12382 === (23))){
var state_12381__$1 = state_12381;
var statearr_12434_12502 = state_12381__$1;
(statearr_12434_12502[(2)] = null);

(statearr_12434_12502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (35))){
var inst_12363 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12435_12503 = state_12381__$1;
(statearr_12435_12503[(2)] = inst_12363);

(statearr_12435_12503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (19))){
var inst_12280 = (state_12381[(7)]);
var inst_12284 = cljs.core.chunk_first.call(null,inst_12280);
var inst_12285 = cljs.core.chunk_rest.call(null,inst_12280);
var inst_12286 = cljs.core.count.call(null,inst_12284);
var inst_12258 = inst_12285;
var inst_12259 = inst_12284;
var inst_12260 = inst_12286;
var inst_12261 = (0);
var state_12381__$1 = (function (){var statearr_12436 = state_12381;
(statearr_12436[(13)] = inst_12259);

(statearr_12436[(15)] = inst_12261);

(statearr_12436[(16)] = inst_12258);

(statearr_12436[(17)] = inst_12260);

return statearr_12436;
})();
var statearr_12437_12504 = state_12381__$1;
(statearr_12437_12504[(2)] = null);

(statearr_12437_12504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (11))){
var inst_12258 = (state_12381[(16)]);
var inst_12280 = (state_12381[(7)]);
var inst_12280__$1 = cljs.core.seq.call(null,inst_12258);
var state_12381__$1 = (function (){var statearr_12438 = state_12381;
(statearr_12438[(7)] = inst_12280__$1);

return statearr_12438;
})();
if(inst_12280__$1){
var statearr_12439_12505 = state_12381__$1;
(statearr_12439_12505[(1)] = (16));

} else {
var statearr_12440_12506 = state_12381__$1;
(statearr_12440_12506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (9))){
var inst_12310 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12441_12507 = state_12381__$1;
(statearr_12441_12507[(2)] = inst_12310);

(statearr_12441_12507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (5))){
var inst_12256 = cljs.core.deref.call(null,cs);
var inst_12257 = cljs.core.seq.call(null,inst_12256);
var inst_12258 = inst_12257;
var inst_12259 = null;
var inst_12260 = (0);
var inst_12261 = (0);
var state_12381__$1 = (function (){var statearr_12442 = state_12381;
(statearr_12442[(13)] = inst_12259);

(statearr_12442[(15)] = inst_12261);

(statearr_12442[(16)] = inst_12258);

(statearr_12442[(17)] = inst_12260);

return statearr_12442;
})();
var statearr_12443_12508 = state_12381__$1;
(statearr_12443_12508[(2)] = null);

(statearr_12443_12508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (14))){
var state_12381__$1 = state_12381;
var statearr_12444_12509 = state_12381__$1;
(statearr_12444_12509[(2)] = null);

(statearr_12444_12509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (45))){
var inst_12371 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12445_12510 = state_12381__$1;
(statearr_12445_12510[(2)] = inst_12371);

(statearr_12445_12510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (26))){
var inst_12313 = (state_12381[(29)]);
var inst_12367 = (state_12381[(2)]);
var inst_12368 = cljs.core.seq.call(null,inst_12313);
var state_12381__$1 = (function (){var statearr_12446 = state_12381;
(statearr_12446[(31)] = inst_12367);

return statearr_12446;
})();
if(inst_12368){
var statearr_12447_12511 = state_12381__$1;
(statearr_12447_12511[(1)] = (42));

} else {
var statearr_12448_12512 = state_12381__$1;
(statearr_12448_12512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (16))){
var inst_12280 = (state_12381[(7)]);
var inst_12282 = cljs.core.chunked_seq_QMARK_.call(null,inst_12280);
var state_12381__$1 = state_12381;
if(inst_12282){
var statearr_12449_12513 = state_12381__$1;
(statearr_12449_12513[(1)] = (19));

} else {
var statearr_12450_12514 = state_12381__$1;
(statearr_12450_12514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (38))){
var inst_12360 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12451_12515 = state_12381__$1;
(statearr_12451_12515[(2)] = inst_12360);

(statearr_12451_12515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (30))){
var state_12381__$1 = state_12381;
var statearr_12452_12516 = state_12381__$1;
(statearr_12452_12516[(2)] = null);

(statearr_12452_12516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (10))){
var inst_12259 = (state_12381[(13)]);
var inst_12261 = (state_12381[(15)]);
var inst_12269 = cljs.core._nth.call(null,inst_12259,inst_12261);
var inst_12270 = cljs.core.nth.call(null,inst_12269,(0),null);
var inst_12271 = cljs.core.nth.call(null,inst_12269,(1),null);
var state_12381__$1 = (function (){var statearr_12453 = state_12381;
(statearr_12453[(26)] = inst_12270);

return statearr_12453;
})();
if(cljs.core.truth_(inst_12271)){
var statearr_12454_12517 = state_12381__$1;
(statearr_12454_12517[(1)] = (13));

} else {
var statearr_12455_12518 = state_12381__$1;
(statearr_12455_12518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (18))){
var inst_12306 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12456_12519 = state_12381__$1;
(statearr_12456_12519[(2)] = inst_12306);

(statearr_12456_12519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (42))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12381__$1,(45),dchan);
} else {
if((state_val_12382 === (37))){
var inst_12349 = (state_12381[(23)]);
var inst_12340 = (state_12381[(25)]);
var inst_12249 = (state_12381[(10)]);
var inst_12349__$1 = cljs.core.first.call(null,inst_12340);
var inst_12350 = cljs.core.async.put_BANG_.call(null,inst_12349__$1,inst_12249,done);
var state_12381__$1 = (function (){var statearr_12457 = state_12381;
(statearr_12457[(23)] = inst_12349__$1);

return statearr_12457;
})();
if(cljs.core.truth_(inst_12350)){
var statearr_12458_12520 = state_12381__$1;
(statearr_12458_12520[(1)] = (39));

} else {
var statearr_12459_12521 = state_12381__$1;
(statearr_12459_12521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (8))){
var inst_12261 = (state_12381[(15)]);
var inst_12260 = (state_12381[(17)]);
var inst_12263 = (inst_12261 < inst_12260);
var inst_12264 = inst_12263;
var state_12381__$1 = state_12381;
if(cljs.core.truth_(inst_12264)){
var statearr_12460_12522 = state_12381__$1;
(statearr_12460_12522[(1)] = (10));

} else {
var statearr_12461_12523 = state_12381__$1;
(statearr_12461_12523[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___12469,cs,m,dchan,dctr,done))
;
return ((function (switch__11034__auto__,c__11146__auto___12469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11035__auto__ = null;
var cljs$core$async$mult_$_state_machine__11035__auto____0 = (function (){
var statearr_12465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12465[(0)] = cljs$core$async$mult_$_state_machine__11035__auto__);

(statearr_12465[(1)] = (1));

return statearr_12465;
});
var cljs$core$async$mult_$_state_machine__11035__auto____1 = (function (state_12381){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_12381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e12466){if((e12466 instanceof Object)){
var ex__11038__auto__ = e12466;
var statearr_12467_12524 = state_12381;
(statearr_12467_12524[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12525 = state_12381;
state_12381 = G__12525;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11035__auto__ = function(state_12381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11035__auto____1.call(this,state_12381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11035__auto____0;
cljs$core$async$mult_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11035__auto____1;
return cljs$core$async$mult_$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___12469,cs,m,dchan,dctr,done))
})();
var state__11148__auto__ = (function (){var statearr_12468 = f__11147__auto__.call(null);
(statearr_12468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___12469);

return statearr_12468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___12469,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12526 = [];
var len__7326__auto___12529 = arguments.length;
var i__7327__auto___12530 = (0);
while(true){
if((i__7327__auto___12530 < len__7326__auto___12529)){
args12526.push((arguments[i__7327__auto___12530]));

var G__12531 = (i__7327__auto___12530 + (1));
i__7327__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12528 = args12526.length;
switch (G__12528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12526.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m);
} else {
var m__6915__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,state_map);
} else {
var m__6915__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,mode);
} else {
var m__6915__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___12543 = arguments.length;
var i__7327__auto___12544 = (0);
while(true){
if((i__7327__auto___12544 < len__7326__auto___12543)){
args__7333__auto__.push((arguments[i__7327__auto___12544]));

var G__12545 = (i__7327__auto___12544 + (1));
i__7327__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12537){
var map__12538 = p__12537;
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);
var opts = map__12538__$1;
var statearr_12540_12546 = state;
(statearr_12540_12546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12538,map__12538__$1,opts){
return (function (val){
var statearr_12541_12547 = state;
(statearr_12541_12547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12538,map__12538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12542_12548 = state;
(statearr_12542_12548[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12533){
var G__12534 = cljs.core.first.call(null,seq12533);
var seq12533__$1 = cljs.core.next.call(null,seq12533);
var G__12535 = cljs.core.first.call(null,seq12533__$1);
var seq12533__$2 = cljs.core.next.call(null,seq12533__$1);
var G__12536 = cljs.core.first.call(null,seq12533__$2);
var seq12533__$3 = cljs.core.next.call(null,seq12533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12534,G__12535,G__12536,seq12533__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12714 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12715){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12715 = meta12715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12716,meta12715__$1){
var self__ = this;
var _12716__$1 = this;
return (new cljs.core.async.t_cljs$core$async12714(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12715__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12716){
var self__ = this;
var _12716__$1 = this;
return self__.meta12715;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12715","meta12715",-2064888098,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12714";

cljs.core.async.t_cljs$core$async12714.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async12714");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12714 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12714(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12715){
return (new cljs.core.async.t_cljs$core$async12714(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12715));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12714(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11146__auto___12879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12816){
var state_val_12817 = (state_12816[(1)]);
if((state_val_12817 === (7))){
var inst_12732 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
var statearr_12818_12880 = state_12816__$1;
(statearr_12818_12880[(2)] = inst_12732);

(statearr_12818_12880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (20))){
var inst_12744 = (state_12816[(7)]);
var state_12816__$1 = state_12816;
var statearr_12819_12881 = state_12816__$1;
(statearr_12819_12881[(2)] = inst_12744);

(statearr_12819_12881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (27))){
var state_12816__$1 = state_12816;
var statearr_12820_12882 = state_12816__$1;
(statearr_12820_12882[(2)] = null);

(statearr_12820_12882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (1))){
var inst_12720 = (state_12816[(8)]);
var inst_12720__$1 = calc_state.call(null);
var inst_12722 = (inst_12720__$1 == null);
var inst_12723 = cljs.core.not.call(null,inst_12722);
var state_12816__$1 = (function (){var statearr_12821 = state_12816;
(statearr_12821[(8)] = inst_12720__$1);

return statearr_12821;
})();
if(inst_12723){
var statearr_12822_12883 = state_12816__$1;
(statearr_12822_12883[(1)] = (2));

} else {
var statearr_12823_12884 = state_12816__$1;
(statearr_12823_12884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (24))){
var inst_12776 = (state_12816[(9)]);
var inst_12790 = (state_12816[(10)]);
var inst_12767 = (state_12816[(11)]);
var inst_12790__$1 = inst_12767.call(null,inst_12776);
var state_12816__$1 = (function (){var statearr_12824 = state_12816;
(statearr_12824[(10)] = inst_12790__$1);

return statearr_12824;
})();
if(cljs.core.truth_(inst_12790__$1)){
var statearr_12825_12885 = state_12816__$1;
(statearr_12825_12885[(1)] = (29));

} else {
var statearr_12826_12886 = state_12816__$1;
(statearr_12826_12886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (4))){
var inst_12735 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12735)){
var statearr_12827_12887 = state_12816__$1;
(statearr_12827_12887[(1)] = (8));

} else {
var statearr_12828_12888 = state_12816__$1;
(statearr_12828_12888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (15))){
var inst_12761 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12761)){
var statearr_12829_12889 = state_12816__$1;
(statearr_12829_12889[(1)] = (19));

} else {
var statearr_12830_12890 = state_12816__$1;
(statearr_12830_12890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (21))){
var inst_12766 = (state_12816[(12)]);
var inst_12766__$1 = (state_12816[(2)]);
var inst_12767 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12768 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12769 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12816__$1 = (function (){var statearr_12831 = state_12816;
(statearr_12831[(13)] = inst_12768);

(statearr_12831[(12)] = inst_12766__$1);

(statearr_12831[(11)] = inst_12767);

return statearr_12831;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12816__$1,(22),inst_12769);
} else {
if((state_val_12817 === (31))){
var inst_12798 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12798)){
var statearr_12832_12891 = state_12816__$1;
(statearr_12832_12891[(1)] = (32));

} else {
var statearr_12833_12892 = state_12816__$1;
(statearr_12833_12892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (32))){
var inst_12775 = (state_12816[(14)]);
var state_12816__$1 = state_12816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12816__$1,(35),out,inst_12775);
} else {
if((state_val_12817 === (33))){
var inst_12766 = (state_12816[(12)]);
var inst_12744 = inst_12766;
var state_12816__$1 = (function (){var statearr_12834 = state_12816;
(statearr_12834[(7)] = inst_12744);

return statearr_12834;
})();
var statearr_12835_12893 = state_12816__$1;
(statearr_12835_12893[(2)] = null);

(statearr_12835_12893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (13))){
var inst_12744 = (state_12816[(7)]);
var inst_12751 = inst_12744.cljs$lang$protocol_mask$partition0$;
var inst_12752 = (inst_12751 & (64));
var inst_12753 = inst_12744.cljs$core$ISeq$;
var inst_12754 = (inst_12752) || (inst_12753);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12754)){
var statearr_12836_12894 = state_12816__$1;
(statearr_12836_12894[(1)] = (16));

} else {
var statearr_12837_12895 = state_12816__$1;
(statearr_12837_12895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (22))){
var inst_12775 = (state_12816[(14)]);
var inst_12776 = (state_12816[(9)]);
var inst_12774 = (state_12816[(2)]);
var inst_12775__$1 = cljs.core.nth.call(null,inst_12774,(0),null);
var inst_12776__$1 = cljs.core.nth.call(null,inst_12774,(1),null);
var inst_12777 = (inst_12775__$1 == null);
var inst_12778 = cljs.core._EQ_.call(null,inst_12776__$1,change);
var inst_12779 = (inst_12777) || (inst_12778);
var state_12816__$1 = (function (){var statearr_12838 = state_12816;
(statearr_12838[(14)] = inst_12775__$1);

(statearr_12838[(9)] = inst_12776__$1);

return statearr_12838;
})();
if(cljs.core.truth_(inst_12779)){
var statearr_12839_12896 = state_12816__$1;
(statearr_12839_12896[(1)] = (23));

} else {
var statearr_12840_12897 = state_12816__$1;
(statearr_12840_12897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (36))){
var inst_12766 = (state_12816[(12)]);
var inst_12744 = inst_12766;
var state_12816__$1 = (function (){var statearr_12841 = state_12816;
(statearr_12841[(7)] = inst_12744);

return statearr_12841;
})();
var statearr_12842_12898 = state_12816__$1;
(statearr_12842_12898[(2)] = null);

(statearr_12842_12898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (29))){
var inst_12790 = (state_12816[(10)]);
var state_12816__$1 = state_12816;
var statearr_12843_12899 = state_12816__$1;
(statearr_12843_12899[(2)] = inst_12790);

(statearr_12843_12899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (6))){
var state_12816__$1 = state_12816;
var statearr_12844_12900 = state_12816__$1;
(statearr_12844_12900[(2)] = false);

(statearr_12844_12900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (28))){
var inst_12786 = (state_12816[(2)]);
var inst_12787 = calc_state.call(null);
var inst_12744 = inst_12787;
var state_12816__$1 = (function (){var statearr_12845 = state_12816;
(statearr_12845[(15)] = inst_12786);

(statearr_12845[(7)] = inst_12744);

return statearr_12845;
})();
var statearr_12846_12901 = state_12816__$1;
(statearr_12846_12901[(2)] = null);

(statearr_12846_12901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (25))){
var inst_12812 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
var statearr_12847_12902 = state_12816__$1;
(statearr_12847_12902[(2)] = inst_12812);

(statearr_12847_12902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (34))){
var inst_12810 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
var statearr_12848_12903 = state_12816__$1;
(statearr_12848_12903[(2)] = inst_12810);

(statearr_12848_12903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (17))){
var state_12816__$1 = state_12816;
var statearr_12849_12904 = state_12816__$1;
(statearr_12849_12904[(2)] = false);

(statearr_12849_12904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (3))){
var state_12816__$1 = state_12816;
var statearr_12850_12905 = state_12816__$1;
(statearr_12850_12905[(2)] = false);

(statearr_12850_12905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (12))){
var inst_12814 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12816__$1,inst_12814);
} else {
if((state_val_12817 === (2))){
var inst_12720 = (state_12816[(8)]);
var inst_12725 = inst_12720.cljs$lang$protocol_mask$partition0$;
var inst_12726 = (inst_12725 & (64));
var inst_12727 = inst_12720.cljs$core$ISeq$;
var inst_12728 = (inst_12726) || (inst_12727);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12728)){
var statearr_12851_12906 = state_12816__$1;
(statearr_12851_12906[(1)] = (5));

} else {
var statearr_12852_12907 = state_12816__$1;
(statearr_12852_12907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (23))){
var inst_12775 = (state_12816[(14)]);
var inst_12781 = (inst_12775 == null);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12781)){
var statearr_12853_12908 = state_12816__$1;
(statearr_12853_12908[(1)] = (26));

} else {
var statearr_12854_12909 = state_12816__$1;
(statearr_12854_12909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (35))){
var inst_12801 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
if(cljs.core.truth_(inst_12801)){
var statearr_12855_12910 = state_12816__$1;
(statearr_12855_12910[(1)] = (36));

} else {
var statearr_12856_12911 = state_12816__$1;
(statearr_12856_12911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (19))){
var inst_12744 = (state_12816[(7)]);
var inst_12763 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12744);
var state_12816__$1 = state_12816;
var statearr_12857_12912 = state_12816__$1;
(statearr_12857_12912[(2)] = inst_12763);

(statearr_12857_12912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (11))){
var inst_12744 = (state_12816[(7)]);
var inst_12748 = (inst_12744 == null);
var inst_12749 = cljs.core.not.call(null,inst_12748);
var state_12816__$1 = state_12816;
if(inst_12749){
var statearr_12858_12913 = state_12816__$1;
(statearr_12858_12913[(1)] = (13));

} else {
var statearr_12859_12914 = state_12816__$1;
(statearr_12859_12914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (9))){
var inst_12720 = (state_12816[(8)]);
var state_12816__$1 = state_12816;
var statearr_12860_12915 = state_12816__$1;
(statearr_12860_12915[(2)] = inst_12720);

(statearr_12860_12915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (5))){
var state_12816__$1 = state_12816;
var statearr_12861_12916 = state_12816__$1;
(statearr_12861_12916[(2)] = true);

(statearr_12861_12916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (14))){
var state_12816__$1 = state_12816;
var statearr_12862_12917 = state_12816__$1;
(statearr_12862_12917[(2)] = false);

(statearr_12862_12917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (26))){
var inst_12776 = (state_12816[(9)]);
var inst_12783 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12776);
var state_12816__$1 = state_12816;
var statearr_12863_12918 = state_12816__$1;
(statearr_12863_12918[(2)] = inst_12783);

(statearr_12863_12918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (16))){
var state_12816__$1 = state_12816;
var statearr_12864_12919 = state_12816__$1;
(statearr_12864_12919[(2)] = true);

(statearr_12864_12919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (38))){
var inst_12806 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
var statearr_12865_12920 = state_12816__$1;
(statearr_12865_12920[(2)] = inst_12806);

(statearr_12865_12920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (30))){
var inst_12768 = (state_12816[(13)]);
var inst_12776 = (state_12816[(9)]);
var inst_12767 = (state_12816[(11)]);
var inst_12793 = cljs.core.empty_QMARK_.call(null,inst_12767);
var inst_12794 = inst_12768.call(null,inst_12776);
var inst_12795 = cljs.core.not.call(null,inst_12794);
var inst_12796 = (inst_12793) && (inst_12795);
var state_12816__$1 = state_12816;
var statearr_12866_12921 = state_12816__$1;
(statearr_12866_12921[(2)] = inst_12796);

(statearr_12866_12921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (10))){
var inst_12720 = (state_12816[(8)]);
var inst_12740 = (state_12816[(2)]);
var inst_12741 = cljs.core.get.call(null,inst_12740,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12742 = cljs.core.get.call(null,inst_12740,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12743 = cljs.core.get.call(null,inst_12740,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12744 = inst_12720;
var state_12816__$1 = (function (){var statearr_12867 = state_12816;
(statearr_12867[(16)] = inst_12741);

(statearr_12867[(17)] = inst_12743);

(statearr_12867[(18)] = inst_12742);

(statearr_12867[(7)] = inst_12744);

return statearr_12867;
})();
var statearr_12868_12922 = state_12816__$1;
(statearr_12868_12922[(2)] = null);

(statearr_12868_12922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (18))){
var inst_12758 = (state_12816[(2)]);
var state_12816__$1 = state_12816;
var statearr_12869_12923 = state_12816__$1;
(statearr_12869_12923[(2)] = inst_12758);

(statearr_12869_12923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (37))){
var state_12816__$1 = state_12816;
var statearr_12870_12924 = state_12816__$1;
(statearr_12870_12924[(2)] = null);

(statearr_12870_12924[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12817 === (8))){
var inst_12720 = (state_12816[(8)]);
var inst_12737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12720);
var state_12816__$1 = state_12816;
var statearr_12871_12925 = state_12816__$1;
(statearr_12871_12925[(2)] = inst_12737);

(statearr_12871_12925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11034__auto__,c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11035__auto__ = null;
var cljs$core$async$mix_$_state_machine__11035__auto____0 = (function (){
var statearr_12875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12875[(0)] = cljs$core$async$mix_$_state_machine__11035__auto__);

(statearr_12875[(1)] = (1));

return statearr_12875;
});
var cljs$core$async$mix_$_state_machine__11035__auto____1 = (function (state_12816){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_12816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e12876){if((e12876 instanceof Object)){
var ex__11038__auto__ = e12876;
var statearr_12877_12926 = state_12816;
(statearr_12877_12926[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12927 = state_12816;
state_12816 = G__12927;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11035__auto__ = function(state_12816){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11035__auto____1.call(this,state_12816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11035__auto____0;
cljs$core$async$mix_$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11035__auto____1;
return cljs$core$async$mix_$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11148__auto__ = (function (){var statearr_12878 = f__11147__auto__.call(null);
(statearr_12878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___12879);

return statearr_12878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___12879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6915__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12928 = [];
var len__7326__auto___12931 = arguments.length;
var i__7327__auto___12932 = (0);
while(true){
if((i__7327__auto___12932 < len__7326__auto___12931)){
args12928.push((arguments[i__7327__auto___12932]));

var G__12933 = (i__7327__auto___12932 + (1));
i__7327__auto___12932 = G__12933;
continue;
} else {
}
break;
}

var G__12930 = args12928.length;
switch (G__12930) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12928.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args12936 = [];
var len__7326__auto___13061 = arguments.length;
var i__7327__auto___13062 = (0);
while(true){
if((i__7327__auto___13062 < len__7326__auto___13061)){
args12936.push((arguments[i__7327__auto___13062]));

var G__13063 = (i__7327__auto___13062 + (1));
i__7327__auto___13062 = G__13063;
continue;
} else {
}
break;
}

var G__12938 = args12936.length;
switch (G__12938) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12936.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6251__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6251__auto__,mults){
return (function (p1__12935_SHARP_){
if(cljs.core.truth_(p1__12935_SHARP_.call(null,topic))){
return p1__12935_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12935_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12939 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12940){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12940 = meta12940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12941,meta12940__$1){
var self__ = this;
var _12941__$1 = this;
return (new cljs.core.async.t_cljs$core$async12939(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12940__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12941){
var self__ = this;
var _12941__$1 = this;
return self__.meta12940;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12940","meta12940",-114401671,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12939";

cljs.core.async.t_cljs$core$async12939.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async12939");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12939 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12940){
return (new cljs.core.async.t_cljs$core$async12939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12940));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12939(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11146__auto___13065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13065,mults,ensure_mult,p){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13065,mults,ensure_mult,p){
return (function (state_13013){
var state_val_13014 = (state_13013[(1)]);
if((state_val_13014 === (7))){
var inst_13009 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13015_13066 = state_13013__$1;
(statearr_13015_13066[(2)] = inst_13009);

(statearr_13015_13066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (20))){
var state_13013__$1 = state_13013;
var statearr_13016_13067 = state_13013__$1;
(statearr_13016_13067[(2)] = null);

(statearr_13016_13067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (1))){
var state_13013__$1 = state_13013;
var statearr_13017_13068 = state_13013__$1;
(statearr_13017_13068[(2)] = null);

(statearr_13017_13068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (24))){
var inst_12992 = (state_13013[(7)]);
var inst_13001 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12992);
var state_13013__$1 = state_13013;
var statearr_13018_13069 = state_13013__$1;
(statearr_13018_13069[(2)] = inst_13001);

(statearr_13018_13069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (4))){
var inst_12944 = (state_13013[(8)]);
var inst_12944__$1 = (state_13013[(2)]);
var inst_12945 = (inst_12944__$1 == null);
var state_13013__$1 = (function (){var statearr_13019 = state_13013;
(statearr_13019[(8)] = inst_12944__$1);

return statearr_13019;
})();
if(cljs.core.truth_(inst_12945)){
var statearr_13020_13070 = state_13013__$1;
(statearr_13020_13070[(1)] = (5));

} else {
var statearr_13021_13071 = state_13013__$1;
(statearr_13021_13071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (15))){
var inst_12986 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13022_13072 = state_13013__$1;
(statearr_13022_13072[(2)] = inst_12986);

(statearr_13022_13072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (21))){
var inst_13006 = (state_13013[(2)]);
var state_13013__$1 = (function (){var statearr_13023 = state_13013;
(statearr_13023[(9)] = inst_13006);

return statearr_13023;
})();
var statearr_13024_13073 = state_13013__$1;
(statearr_13024_13073[(2)] = null);

(statearr_13024_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (13))){
var inst_12968 = (state_13013[(10)]);
var inst_12970 = cljs.core.chunked_seq_QMARK_.call(null,inst_12968);
var state_13013__$1 = state_13013;
if(inst_12970){
var statearr_13025_13074 = state_13013__$1;
(statearr_13025_13074[(1)] = (16));

} else {
var statearr_13026_13075 = state_13013__$1;
(statearr_13026_13075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (22))){
var inst_12998 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
if(cljs.core.truth_(inst_12998)){
var statearr_13027_13076 = state_13013__$1;
(statearr_13027_13076[(1)] = (23));

} else {
var statearr_13028_13077 = state_13013__$1;
(statearr_13028_13077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (6))){
var inst_12944 = (state_13013[(8)]);
var inst_12994 = (state_13013[(11)]);
var inst_12992 = (state_13013[(7)]);
var inst_12992__$1 = topic_fn.call(null,inst_12944);
var inst_12993 = cljs.core.deref.call(null,mults);
var inst_12994__$1 = cljs.core.get.call(null,inst_12993,inst_12992__$1);
var state_13013__$1 = (function (){var statearr_13029 = state_13013;
(statearr_13029[(11)] = inst_12994__$1);

(statearr_13029[(7)] = inst_12992__$1);

return statearr_13029;
})();
if(cljs.core.truth_(inst_12994__$1)){
var statearr_13030_13078 = state_13013__$1;
(statearr_13030_13078[(1)] = (19));

} else {
var statearr_13031_13079 = state_13013__$1;
(statearr_13031_13079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (25))){
var inst_13003 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13032_13080 = state_13013__$1;
(statearr_13032_13080[(2)] = inst_13003);

(statearr_13032_13080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (17))){
var inst_12968 = (state_13013[(10)]);
var inst_12977 = cljs.core.first.call(null,inst_12968);
var inst_12978 = cljs.core.async.muxch_STAR_.call(null,inst_12977);
var inst_12979 = cljs.core.async.close_BANG_.call(null,inst_12978);
var inst_12980 = cljs.core.next.call(null,inst_12968);
var inst_12954 = inst_12980;
var inst_12955 = null;
var inst_12956 = (0);
var inst_12957 = (0);
var state_13013__$1 = (function (){var statearr_13033 = state_13013;
(statearr_13033[(12)] = inst_12956);

(statearr_13033[(13)] = inst_12979);

(statearr_13033[(14)] = inst_12957);

(statearr_13033[(15)] = inst_12954);

(statearr_13033[(16)] = inst_12955);

return statearr_13033;
})();
var statearr_13034_13081 = state_13013__$1;
(statearr_13034_13081[(2)] = null);

(statearr_13034_13081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (3))){
var inst_13011 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13013__$1,inst_13011);
} else {
if((state_val_13014 === (12))){
var inst_12988 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13035_13082 = state_13013__$1;
(statearr_13035_13082[(2)] = inst_12988);

(statearr_13035_13082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (2))){
var state_13013__$1 = state_13013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13013__$1,(4),ch);
} else {
if((state_val_13014 === (23))){
var state_13013__$1 = state_13013;
var statearr_13036_13083 = state_13013__$1;
(statearr_13036_13083[(2)] = null);

(statearr_13036_13083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (19))){
var inst_12944 = (state_13013[(8)]);
var inst_12994 = (state_13013[(11)]);
var inst_12996 = cljs.core.async.muxch_STAR_.call(null,inst_12994);
var state_13013__$1 = state_13013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13013__$1,(22),inst_12996,inst_12944);
} else {
if((state_val_13014 === (11))){
var inst_12954 = (state_13013[(15)]);
var inst_12968 = (state_13013[(10)]);
var inst_12968__$1 = cljs.core.seq.call(null,inst_12954);
var state_13013__$1 = (function (){var statearr_13037 = state_13013;
(statearr_13037[(10)] = inst_12968__$1);

return statearr_13037;
})();
if(inst_12968__$1){
var statearr_13038_13084 = state_13013__$1;
(statearr_13038_13084[(1)] = (13));

} else {
var statearr_13039_13085 = state_13013__$1;
(statearr_13039_13085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (9))){
var inst_12990 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13040_13086 = state_13013__$1;
(statearr_13040_13086[(2)] = inst_12990);

(statearr_13040_13086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (5))){
var inst_12951 = cljs.core.deref.call(null,mults);
var inst_12952 = cljs.core.vals.call(null,inst_12951);
var inst_12953 = cljs.core.seq.call(null,inst_12952);
var inst_12954 = inst_12953;
var inst_12955 = null;
var inst_12956 = (0);
var inst_12957 = (0);
var state_13013__$1 = (function (){var statearr_13041 = state_13013;
(statearr_13041[(12)] = inst_12956);

(statearr_13041[(14)] = inst_12957);

(statearr_13041[(15)] = inst_12954);

(statearr_13041[(16)] = inst_12955);

return statearr_13041;
})();
var statearr_13042_13087 = state_13013__$1;
(statearr_13042_13087[(2)] = null);

(statearr_13042_13087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (14))){
var state_13013__$1 = state_13013;
var statearr_13046_13088 = state_13013__$1;
(statearr_13046_13088[(2)] = null);

(statearr_13046_13088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (16))){
var inst_12968 = (state_13013[(10)]);
var inst_12972 = cljs.core.chunk_first.call(null,inst_12968);
var inst_12973 = cljs.core.chunk_rest.call(null,inst_12968);
var inst_12974 = cljs.core.count.call(null,inst_12972);
var inst_12954 = inst_12973;
var inst_12955 = inst_12972;
var inst_12956 = inst_12974;
var inst_12957 = (0);
var state_13013__$1 = (function (){var statearr_13047 = state_13013;
(statearr_13047[(12)] = inst_12956);

(statearr_13047[(14)] = inst_12957);

(statearr_13047[(15)] = inst_12954);

(statearr_13047[(16)] = inst_12955);

return statearr_13047;
})();
var statearr_13048_13089 = state_13013__$1;
(statearr_13048_13089[(2)] = null);

(statearr_13048_13089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (10))){
var inst_12956 = (state_13013[(12)]);
var inst_12957 = (state_13013[(14)]);
var inst_12954 = (state_13013[(15)]);
var inst_12955 = (state_13013[(16)]);
var inst_12962 = cljs.core._nth.call(null,inst_12955,inst_12957);
var inst_12963 = cljs.core.async.muxch_STAR_.call(null,inst_12962);
var inst_12964 = cljs.core.async.close_BANG_.call(null,inst_12963);
var inst_12965 = (inst_12957 + (1));
var tmp13043 = inst_12956;
var tmp13044 = inst_12954;
var tmp13045 = inst_12955;
var inst_12954__$1 = tmp13044;
var inst_12955__$1 = tmp13045;
var inst_12956__$1 = tmp13043;
var inst_12957__$1 = inst_12965;
var state_13013__$1 = (function (){var statearr_13049 = state_13013;
(statearr_13049[(12)] = inst_12956__$1);

(statearr_13049[(14)] = inst_12957__$1);

(statearr_13049[(17)] = inst_12964);

(statearr_13049[(15)] = inst_12954__$1);

(statearr_13049[(16)] = inst_12955__$1);

return statearr_13049;
})();
var statearr_13050_13090 = state_13013__$1;
(statearr_13050_13090[(2)] = null);

(statearr_13050_13090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (18))){
var inst_12983 = (state_13013[(2)]);
var state_13013__$1 = state_13013;
var statearr_13051_13091 = state_13013__$1;
(statearr_13051_13091[(2)] = inst_12983);

(statearr_13051_13091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13014 === (8))){
var inst_12956 = (state_13013[(12)]);
var inst_12957 = (state_13013[(14)]);
var inst_12959 = (inst_12957 < inst_12956);
var inst_12960 = inst_12959;
var state_13013__$1 = state_13013;
if(cljs.core.truth_(inst_12960)){
var statearr_13052_13092 = state_13013__$1;
(statearr_13052_13092[(1)] = (10));

} else {
var statearr_13053_13093 = state_13013__$1;
(statearr_13053_13093[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13065,mults,ensure_mult,p))
;
return ((function (switch__11034__auto__,c__11146__auto___13065,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13057[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13057[(1)] = (1));

return statearr_13057;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13013){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13058){if((e13058 instanceof Object)){
var ex__11038__auto__ = e13058;
var statearr_13059_13094 = state_13013;
(statearr_13059_13094[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13095 = state_13013;
state_13013 = G__13095;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13065,mults,ensure_mult,p))
})();
var state__11148__auto__ = (function (){var statearr_13060 = f__11147__auto__.call(null);
(statearr_13060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13065);

return statearr_13060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13065,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13096 = [];
var len__7326__auto___13099 = arguments.length;
var i__7327__auto___13100 = (0);
while(true){
if((i__7327__auto___13100 < len__7326__auto___13099)){
args13096.push((arguments[i__7327__auto___13100]));

var G__13101 = (i__7327__auto___13100 + (1));
i__7327__auto___13100 = G__13101;
continue;
} else {
}
break;
}

var G__13098 = args13096.length;
switch (G__13098) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13096.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13103 = [];
var len__7326__auto___13106 = arguments.length;
var i__7327__auto___13107 = (0);
while(true){
if((i__7327__auto___13107 < len__7326__auto___13106)){
args13103.push((arguments[i__7327__auto___13107]));

var G__13108 = (i__7327__auto___13107 + (1));
i__7327__auto___13107 = G__13108;
continue;
} else {
}
break;
}

var G__13105 = args13103.length;
switch (G__13105) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13103.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13110 = [];
var len__7326__auto___13181 = arguments.length;
var i__7327__auto___13182 = (0);
while(true){
if((i__7327__auto___13182 < len__7326__auto___13181)){
args13110.push((arguments[i__7327__auto___13182]));

var G__13183 = (i__7327__auto___13182 + (1));
i__7327__auto___13182 = G__13183;
continue;
} else {
}
break;
}

var G__13112 = args13110.length;
switch (G__13112) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13110.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11146__auto___13185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13151){
var state_val_13152 = (state_13151[(1)]);
if((state_val_13152 === (7))){
var state_13151__$1 = state_13151;
var statearr_13153_13186 = state_13151__$1;
(statearr_13153_13186[(2)] = null);

(statearr_13153_13186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (1))){
var state_13151__$1 = state_13151;
var statearr_13154_13187 = state_13151__$1;
(statearr_13154_13187[(2)] = null);

(statearr_13154_13187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (4))){
var inst_13115 = (state_13151[(7)]);
var inst_13117 = (inst_13115 < cnt);
var state_13151__$1 = state_13151;
if(cljs.core.truth_(inst_13117)){
var statearr_13155_13188 = state_13151__$1;
(statearr_13155_13188[(1)] = (6));

} else {
var statearr_13156_13189 = state_13151__$1;
(statearr_13156_13189[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (15))){
var inst_13147 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13157_13190 = state_13151__$1;
(statearr_13157_13190[(2)] = inst_13147);

(statearr_13157_13190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (13))){
var inst_13140 = cljs.core.async.close_BANG_.call(null,out);
var state_13151__$1 = state_13151;
var statearr_13158_13191 = state_13151__$1;
(statearr_13158_13191[(2)] = inst_13140);

(statearr_13158_13191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (6))){
var state_13151__$1 = state_13151;
var statearr_13159_13192 = state_13151__$1;
(statearr_13159_13192[(2)] = null);

(statearr_13159_13192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (3))){
var inst_13149 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13151__$1,inst_13149);
} else {
if((state_val_13152 === (12))){
var inst_13137 = (state_13151[(8)]);
var inst_13137__$1 = (state_13151[(2)]);
var inst_13138 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13137__$1);
var state_13151__$1 = (function (){var statearr_13160 = state_13151;
(statearr_13160[(8)] = inst_13137__$1);

return statearr_13160;
})();
if(cljs.core.truth_(inst_13138)){
var statearr_13161_13193 = state_13151__$1;
(statearr_13161_13193[(1)] = (13));

} else {
var statearr_13162_13194 = state_13151__$1;
(statearr_13162_13194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (2))){
var inst_13114 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13115 = (0);
var state_13151__$1 = (function (){var statearr_13163 = state_13151;
(statearr_13163[(7)] = inst_13115);

(statearr_13163[(9)] = inst_13114);

return statearr_13163;
})();
var statearr_13164_13195 = state_13151__$1;
(statearr_13164_13195[(2)] = null);

(statearr_13164_13195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (11))){
var inst_13115 = (state_13151[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13151,(10),Object,null,(9));
var inst_13124 = chs__$1.call(null,inst_13115);
var inst_13125 = done.call(null,inst_13115);
var inst_13126 = cljs.core.async.take_BANG_.call(null,inst_13124,inst_13125);
var state_13151__$1 = state_13151;
var statearr_13165_13196 = state_13151__$1;
(statearr_13165_13196[(2)] = inst_13126);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (9))){
var inst_13115 = (state_13151[(7)]);
var inst_13128 = (state_13151[(2)]);
var inst_13129 = (inst_13115 + (1));
var inst_13115__$1 = inst_13129;
var state_13151__$1 = (function (){var statearr_13166 = state_13151;
(statearr_13166[(7)] = inst_13115__$1);

(statearr_13166[(10)] = inst_13128);

return statearr_13166;
})();
var statearr_13167_13197 = state_13151__$1;
(statearr_13167_13197[(2)] = null);

(statearr_13167_13197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (5))){
var inst_13135 = (state_13151[(2)]);
var state_13151__$1 = (function (){var statearr_13168 = state_13151;
(statearr_13168[(11)] = inst_13135);

return statearr_13168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13151__$1,(12),dchan);
} else {
if((state_val_13152 === (14))){
var inst_13137 = (state_13151[(8)]);
var inst_13142 = cljs.core.apply.call(null,f,inst_13137);
var state_13151__$1 = state_13151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13151__$1,(16),out,inst_13142);
} else {
if((state_val_13152 === (16))){
var inst_13144 = (state_13151[(2)]);
var state_13151__$1 = (function (){var statearr_13169 = state_13151;
(statearr_13169[(12)] = inst_13144);

return statearr_13169;
})();
var statearr_13170_13198 = state_13151__$1;
(statearr_13170_13198[(2)] = null);

(statearr_13170_13198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (10))){
var inst_13119 = (state_13151[(2)]);
var inst_13120 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13151__$1 = (function (){var statearr_13171 = state_13151;
(statearr_13171[(13)] = inst_13119);

return statearr_13171;
})();
var statearr_13172_13199 = state_13151__$1;
(statearr_13172_13199[(2)] = inst_13120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13152 === (8))){
var inst_13133 = (state_13151[(2)]);
var state_13151__$1 = state_13151;
var statearr_13173_13200 = state_13151__$1;
(statearr_13173_13200[(2)] = inst_13133);

(statearr_13173_13200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11034__auto__,c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13177[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13177[(1)] = (1));

return statearr_13177;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13151){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13178){if((e13178 instanceof Object)){
var ex__11038__auto__ = e13178;
var statearr_13179_13201 = state_13151;
(statearr_13179_13201[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13202 = state_13151;
state_13151 = G__13202;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11148__auto__ = (function (){var statearr_13180 = f__11147__auto__.call(null);
(statearr_13180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13185);

return statearr_13180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13185,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13204 = [];
var len__7326__auto___13262 = arguments.length;
var i__7327__auto___13263 = (0);
while(true){
if((i__7327__auto___13263 < len__7326__auto___13262)){
args13204.push((arguments[i__7327__auto___13263]));

var G__13264 = (i__7327__auto___13263 + (1));
i__7327__auto___13263 = G__13264;
continue;
} else {
}
break;
}

var G__13206 = args13204.length;
switch (G__13206) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13204.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13266,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13266,out){
return (function (state_13238){
var state_val_13239 = (state_13238[(1)]);
if((state_val_13239 === (7))){
var inst_13218 = (state_13238[(7)]);
var inst_13217 = (state_13238[(8)]);
var inst_13217__$1 = (state_13238[(2)]);
var inst_13218__$1 = cljs.core.nth.call(null,inst_13217__$1,(0),null);
var inst_13219 = cljs.core.nth.call(null,inst_13217__$1,(1),null);
var inst_13220 = (inst_13218__$1 == null);
var state_13238__$1 = (function (){var statearr_13240 = state_13238;
(statearr_13240[(9)] = inst_13219);

(statearr_13240[(7)] = inst_13218__$1);

(statearr_13240[(8)] = inst_13217__$1);

return statearr_13240;
})();
if(cljs.core.truth_(inst_13220)){
var statearr_13241_13267 = state_13238__$1;
(statearr_13241_13267[(1)] = (8));

} else {
var statearr_13242_13268 = state_13238__$1;
(statearr_13242_13268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (1))){
var inst_13207 = cljs.core.vec.call(null,chs);
var inst_13208 = inst_13207;
var state_13238__$1 = (function (){var statearr_13243 = state_13238;
(statearr_13243[(10)] = inst_13208);

return statearr_13243;
})();
var statearr_13244_13269 = state_13238__$1;
(statearr_13244_13269[(2)] = null);

(statearr_13244_13269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (4))){
var inst_13208 = (state_13238[(10)]);
var state_13238__$1 = state_13238;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13238__$1,(7),inst_13208);
} else {
if((state_val_13239 === (6))){
var inst_13234 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13245_13270 = state_13238__$1;
(statearr_13245_13270[(2)] = inst_13234);

(statearr_13245_13270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (3))){
var inst_13236 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13238__$1,inst_13236);
} else {
if((state_val_13239 === (2))){
var inst_13208 = (state_13238[(10)]);
var inst_13210 = cljs.core.count.call(null,inst_13208);
var inst_13211 = (inst_13210 > (0));
var state_13238__$1 = state_13238;
if(cljs.core.truth_(inst_13211)){
var statearr_13247_13271 = state_13238__$1;
(statearr_13247_13271[(1)] = (4));

} else {
var statearr_13248_13272 = state_13238__$1;
(statearr_13248_13272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (11))){
var inst_13208 = (state_13238[(10)]);
var inst_13227 = (state_13238[(2)]);
var tmp13246 = inst_13208;
var inst_13208__$1 = tmp13246;
var state_13238__$1 = (function (){var statearr_13249 = state_13238;
(statearr_13249[(10)] = inst_13208__$1);

(statearr_13249[(11)] = inst_13227);

return statearr_13249;
})();
var statearr_13250_13273 = state_13238__$1;
(statearr_13250_13273[(2)] = null);

(statearr_13250_13273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (9))){
var inst_13218 = (state_13238[(7)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13238__$1,(11),out,inst_13218);
} else {
if((state_val_13239 === (5))){
var inst_13232 = cljs.core.async.close_BANG_.call(null,out);
var state_13238__$1 = state_13238;
var statearr_13251_13274 = state_13238__$1;
(statearr_13251_13274[(2)] = inst_13232);

(statearr_13251_13274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (10))){
var inst_13230 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13252_13275 = state_13238__$1;
(statearr_13252_13275[(2)] = inst_13230);

(statearr_13252_13275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (8))){
var inst_13219 = (state_13238[(9)]);
var inst_13208 = (state_13238[(10)]);
var inst_13218 = (state_13238[(7)]);
var inst_13217 = (state_13238[(8)]);
var inst_13222 = (function (){var cs = inst_13208;
var vec__13213 = inst_13217;
var v = inst_13218;
var c = inst_13219;
return ((function (cs,vec__13213,v,c,inst_13219,inst_13208,inst_13218,inst_13217,state_val_13239,c__11146__auto___13266,out){
return (function (p1__13203_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13203_SHARP_);
});
;})(cs,vec__13213,v,c,inst_13219,inst_13208,inst_13218,inst_13217,state_val_13239,c__11146__auto___13266,out))
})();
var inst_13223 = cljs.core.filterv.call(null,inst_13222,inst_13208);
var inst_13208__$1 = inst_13223;
var state_13238__$1 = (function (){var statearr_13253 = state_13238;
(statearr_13253[(10)] = inst_13208__$1);

return statearr_13253;
})();
var statearr_13254_13276 = state_13238__$1;
(statearr_13254_13276[(2)] = null);

(statearr_13254_13276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13266,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13266,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13258[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13258[(1)] = (1));

return statearr_13258;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13238){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13259){if((e13259 instanceof Object)){
var ex__11038__auto__ = e13259;
var statearr_13260_13277 = state_13238;
(statearr_13260_13277[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13278 = state_13238;
state_13238 = G__13278;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13266,out))
})();
var state__11148__auto__ = (function (){var statearr_13261 = f__11147__auto__.call(null);
(statearr_13261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13266);

return statearr_13261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13266,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13279 = [];
var len__7326__auto___13328 = arguments.length;
var i__7327__auto___13329 = (0);
while(true){
if((i__7327__auto___13329 < len__7326__auto___13328)){
args13279.push((arguments[i__7327__auto___13329]));

var G__13330 = (i__7327__auto___13329 + (1));
i__7327__auto___13329 = G__13330;
continue;
} else {
}
break;
}

var G__13281 = args13279.length;
switch (G__13281) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13279.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13332,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13332,out){
return (function (state_13305){
var state_val_13306 = (state_13305[(1)]);
if((state_val_13306 === (7))){
var inst_13287 = (state_13305[(7)]);
var inst_13287__$1 = (state_13305[(2)]);
var inst_13288 = (inst_13287__$1 == null);
var inst_13289 = cljs.core.not.call(null,inst_13288);
var state_13305__$1 = (function (){var statearr_13307 = state_13305;
(statearr_13307[(7)] = inst_13287__$1);

return statearr_13307;
})();
if(inst_13289){
var statearr_13308_13333 = state_13305__$1;
(statearr_13308_13333[(1)] = (8));

} else {
var statearr_13309_13334 = state_13305__$1;
(statearr_13309_13334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (1))){
var inst_13282 = (0);
var state_13305__$1 = (function (){var statearr_13310 = state_13305;
(statearr_13310[(8)] = inst_13282);

return statearr_13310;
})();
var statearr_13311_13335 = state_13305__$1;
(statearr_13311_13335[(2)] = null);

(statearr_13311_13335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (4))){
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13305__$1,(7),ch);
} else {
if((state_val_13306 === (6))){
var inst_13300 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13312_13336 = state_13305__$1;
(statearr_13312_13336[(2)] = inst_13300);

(statearr_13312_13336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (3))){
var inst_13302 = (state_13305[(2)]);
var inst_13303 = cljs.core.async.close_BANG_.call(null,out);
var state_13305__$1 = (function (){var statearr_13313 = state_13305;
(statearr_13313[(9)] = inst_13302);

return statearr_13313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13305__$1,inst_13303);
} else {
if((state_val_13306 === (2))){
var inst_13282 = (state_13305[(8)]);
var inst_13284 = (inst_13282 < n);
var state_13305__$1 = state_13305;
if(cljs.core.truth_(inst_13284)){
var statearr_13314_13337 = state_13305__$1;
(statearr_13314_13337[(1)] = (4));

} else {
var statearr_13315_13338 = state_13305__$1;
(statearr_13315_13338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (11))){
var inst_13282 = (state_13305[(8)]);
var inst_13292 = (state_13305[(2)]);
var inst_13293 = (inst_13282 + (1));
var inst_13282__$1 = inst_13293;
var state_13305__$1 = (function (){var statearr_13316 = state_13305;
(statearr_13316[(8)] = inst_13282__$1);

(statearr_13316[(10)] = inst_13292);

return statearr_13316;
})();
var statearr_13317_13339 = state_13305__$1;
(statearr_13317_13339[(2)] = null);

(statearr_13317_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (9))){
var state_13305__$1 = state_13305;
var statearr_13318_13340 = state_13305__$1;
(statearr_13318_13340[(2)] = null);

(statearr_13318_13340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (5))){
var state_13305__$1 = state_13305;
var statearr_13319_13341 = state_13305__$1;
(statearr_13319_13341[(2)] = null);

(statearr_13319_13341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (10))){
var inst_13297 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13320_13342 = state_13305__$1;
(statearr_13320_13342[(2)] = inst_13297);

(statearr_13320_13342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (8))){
var inst_13287 = (state_13305[(7)]);
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13305__$1,(11),out,inst_13287);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13332,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13332,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13324[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13324[(1)] = (1));

return statearr_13324;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13305){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13325){if((e13325 instanceof Object)){
var ex__11038__auto__ = e13325;
var statearr_13326_13343 = state_13305;
(statearr_13326_13343[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13344 = state_13305;
state_13305 = G__13344;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13332,out))
})();
var state__11148__auto__ = (function (){var statearr_13327 = f__11147__auto__.call(null);
(statearr_13327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13332);

return statearr_13327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13332,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13352 = (function (map_LT_,f,ch,meta13353){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13353 = meta13353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13354,meta13353__$1){
var self__ = this;
var _13354__$1 = this;
return (new cljs.core.async.t_cljs$core$async13352(self__.map_LT_,self__.f,self__.ch,meta13353__$1));
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13354){
var self__ = this;
var _13354__$1 = this;
return self__.meta13353;
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13355 = (function (map_LT_,f,ch,meta13353,_,fn1,meta13356){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13353 = meta13353;
this._ = _;
this.fn1 = fn1;
this.meta13356 = meta13356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13357,meta13356__$1){
var self__ = this;
var _13357__$1 = this;
return (new cljs.core.async.t_cljs$core$async13355(self__.map_LT_,self__.f,self__.ch,self__.meta13353,self__._,self__.fn1,meta13356__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13357){
var self__ = this;
var _13357__$1 = this;
return self__.meta13356;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13345_SHARP_){
return f1.call(null,(((p1__13345_SHARP_ == null))?null:self__.f.call(null,p1__13345_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13353","meta13353",1140867791,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13352","cljs.core.async/t_cljs$core$async13352",1097509148,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13356","meta13356",-376158939,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13355";

cljs.core.async.t_cljs$core$async13355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13355");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13355(map_LT___$1,f__$1,ch__$1,meta13353__$1,___$2,fn1__$1,meta13356){
return (new cljs.core.async.t_cljs$core$async13355(map_LT___$1,f__$1,ch__$1,meta13353__$1,___$2,fn1__$1,meta13356));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13355(self__.map_LT_,self__.f,self__.ch,self__.meta13353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6239__auto__ = ret;
if(cljs.core.truth_(and__6239__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6239__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13353","meta13353",1140867791,null)], null);
});

cljs.core.async.t_cljs$core$async13352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13352";

cljs.core.async.t_cljs$core$async13352.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13352");
});

cljs.core.async.__GT_t_cljs$core$async13352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13352(map_LT___$1,f__$1,ch__$1,meta13353){
return (new cljs.core.async.t_cljs$core$async13352(map_LT___$1,f__$1,ch__$1,meta13353));
});

}

return (new cljs.core.async.t_cljs$core$async13352(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13361 = (function (map_GT_,f,ch,meta13362){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13362 = meta13362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13363,meta13362__$1){
var self__ = this;
var _13363__$1 = this;
return (new cljs.core.async.t_cljs$core$async13361(self__.map_GT_,self__.f,self__.ch,meta13362__$1));
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13363){
var self__ = this;
var _13363__$1 = this;
return self__.meta13362;
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13362","meta13362",-1440819362,null)], null);
});

cljs.core.async.t_cljs$core$async13361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13361";

cljs.core.async.t_cljs$core$async13361.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13361");
});

cljs.core.async.__GT_t_cljs$core$async13361 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13361(map_GT___$1,f__$1,ch__$1,meta13362){
return (new cljs.core.async.t_cljs$core$async13361(map_GT___$1,f__$1,ch__$1,meta13362));
});

}

return (new cljs.core.async.t_cljs$core$async13361(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13367 = (function (filter_GT_,p,ch,meta13368){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13368 = meta13368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13369,meta13368__$1){
var self__ = this;
var _13369__$1 = this;
return (new cljs.core.async.t_cljs$core$async13367(self__.filter_GT_,self__.p,self__.ch,meta13368__$1));
});

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13369){
var self__ = this;
var _13369__$1 = this;
return self__.meta13368;
});

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13368","meta13368",425437702,null)], null);
});

cljs.core.async.t_cljs$core$async13367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13367";

cljs.core.async.t_cljs$core$async13367.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13367");
});

cljs.core.async.__GT_t_cljs$core$async13367 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13367(filter_GT___$1,p__$1,ch__$1,meta13368){
return (new cljs.core.async.t_cljs$core$async13367(filter_GT___$1,p__$1,ch__$1,meta13368));
});

}

return (new cljs.core.async.t_cljs$core$async13367(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13370 = [];
var len__7326__auto___13414 = arguments.length;
var i__7327__auto___13415 = (0);
while(true){
if((i__7327__auto___13415 < len__7326__auto___13414)){
args13370.push((arguments[i__7327__auto___13415]));

var G__13416 = (i__7327__auto___13415 + (1));
i__7327__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var G__13372 = args13370.length;
switch (G__13372) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13370.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13418,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13418,out){
return (function (state_13393){
var state_val_13394 = (state_13393[(1)]);
if((state_val_13394 === (7))){
var inst_13389 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13395_13419 = state_13393__$1;
(statearr_13395_13419[(2)] = inst_13389);

(statearr_13395_13419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (1))){
var state_13393__$1 = state_13393;
var statearr_13396_13420 = state_13393__$1;
(statearr_13396_13420[(2)] = null);

(statearr_13396_13420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (4))){
var inst_13375 = (state_13393[(7)]);
var inst_13375__$1 = (state_13393[(2)]);
var inst_13376 = (inst_13375__$1 == null);
var state_13393__$1 = (function (){var statearr_13397 = state_13393;
(statearr_13397[(7)] = inst_13375__$1);

return statearr_13397;
})();
if(cljs.core.truth_(inst_13376)){
var statearr_13398_13421 = state_13393__$1;
(statearr_13398_13421[(1)] = (5));

} else {
var statearr_13399_13422 = state_13393__$1;
(statearr_13399_13422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (6))){
var inst_13375 = (state_13393[(7)]);
var inst_13380 = p.call(null,inst_13375);
var state_13393__$1 = state_13393;
if(cljs.core.truth_(inst_13380)){
var statearr_13400_13423 = state_13393__$1;
(statearr_13400_13423[(1)] = (8));

} else {
var statearr_13401_13424 = state_13393__$1;
(statearr_13401_13424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (3))){
var inst_13391 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13393__$1,inst_13391);
} else {
if((state_val_13394 === (2))){
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13393__$1,(4),ch);
} else {
if((state_val_13394 === (11))){
var inst_13383 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13402_13425 = state_13393__$1;
(statearr_13402_13425[(2)] = inst_13383);

(statearr_13402_13425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (9))){
var state_13393__$1 = state_13393;
var statearr_13403_13426 = state_13393__$1;
(statearr_13403_13426[(2)] = null);

(statearr_13403_13426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (5))){
var inst_13378 = cljs.core.async.close_BANG_.call(null,out);
var state_13393__$1 = state_13393;
var statearr_13404_13427 = state_13393__$1;
(statearr_13404_13427[(2)] = inst_13378);

(statearr_13404_13427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (10))){
var inst_13386 = (state_13393[(2)]);
var state_13393__$1 = (function (){var statearr_13405 = state_13393;
(statearr_13405[(8)] = inst_13386);

return statearr_13405;
})();
var statearr_13406_13428 = state_13393__$1;
(statearr_13406_13428[(2)] = null);

(statearr_13406_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (8))){
var inst_13375 = (state_13393[(7)]);
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13393__$1,(11),out,inst_13375);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13418,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13418,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13410 = [null,null,null,null,null,null,null,null,null];
(statearr_13410[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13410[(1)] = (1));

return statearr_13410;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13393){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13411){if((e13411 instanceof Object)){
var ex__11038__auto__ = e13411;
var statearr_13412_13429 = state_13393;
(statearr_13412_13429[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13430 = state_13393;
state_13393 = G__13430;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13418,out))
})();
var state__11148__auto__ = (function (){var statearr_13413 = f__11147__auto__.call(null);
(statearr_13413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13418);

return statearr_13413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13418,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13431 = [];
var len__7326__auto___13434 = arguments.length;
var i__7327__auto___13435 = (0);
while(true){
if((i__7327__auto___13435 < len__7326__auto___13434)){
args13431.push((arguments[i__7327__auto___13435]));

var G__13436 = (i__7327__auto___13435 + (1));
i__7327__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var G__13433 = args13431.length;
switch (G__13433) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13431.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto__){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto__){
return (function (state_13603){
var state_val_13604 = (state_13603[(1)]);
if((state_val_13604 === (7))){
var inst_13599 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13605_13646 = state_13603__$1;
(statearr_13605_13646[(2)] = inst_13599);

(statearr_13605_13646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (20))){
var inst_13569 = (state_13603[(7)]);
var inst_13580 = (state_13603[(2)]);
var inst_13581 = cljs.core.next.call(null,inst_13569);
var inst_13555 = inst_13581;
var inst_13556 = null;
var inst_13557 = (0);
var inst_13558 = (0);
var state_13603__$1 = (function (){var statearr_13606 = state_13603;
(statearr_13606[(8)] = inst_13555);

(statearr_13606[(9)] = inst_13558);

(statearr_13606[(10)] = inst_13557);

(statearr_13606[(11)] = inst_13580);

(statearr_13606[(12)] = inst_13556);

return statearr_13606;
})();
var statearr_13607_13647 = state_13603__$1;
(statearr_13607_13647[(2)] = null);

(statearr_13607_13647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (1))){
var state_13603__$1 = state_13603;
var statearr_13608_13648 = state_13603__$1;
(statearr_13608_13648[(2)] = null);

(statearr_13608_13648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (4))){
var inst_13544 = (state_13603[(13)]);
var inst_13544__$1 = (state_13603[(2)]);
var inst_13545 = (inst_13544__$1 == null);
var state_13603__$1 = (function (){var statearr_13609 = state_13603;
(statearr_13609[(13)] = inst_13544__$1);

return statearr_13609;
})();
if(cljs.core.truth_(inst_13545)){
var statearr_13610_13649 = state_13603__$1;
(statearr_13610_13649[(1)] = (5));

} else {
var statearr_13611_13650 = state_13603__$1;
(statearr_13611_13650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (15))){
var state_13603__$1 = state_13603;
var statearr_13615_13651 = state_13603__$1;
(statearr_13615_13651[(2)] = null);

(statearr_13615_13651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (21))){
var state_13603__$1 = state_13603;
var statearr_13616_13652 = state_13603__$1;
(statearr_13616_13652[(2)] = null);

(statearr_13616_13652[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (13))){
var inst_13555 = (state_13603[(8)]);
var inst_13558 = (state_13603[(9)]);
var inst_13557 = (state_13603[(10)]);
var inst_13556 = (state_13603[(12)]);
var inst_13565 = (state_13603[(2)]);
var inst_13566 = (inst_13558 + (1));
var tmp13612 = inst_13555;
var tmp13613 = inst_13557;
var tmp13614 = inst_13556;
var inst_13555__$1 = tmp13612;
var inst_13556__$1 = tmp13614;
var inst_13557__$1 = tmp13613;
var inst_13558__$1 = inst_13566;
var state_13603__$1 = (function (){var statearr_13617 = state_13603;
(statearr_13617[(8)] = inst_13555__$1);

(statearr_13617[(9)] = inst_13558__$1);

(statearr_13617[(10)] = inst_13557__$1);

(statearr_13617[(12)] = inst_13556__$1);

(statearr_13617[(14)] = inst_13565);

return statearr_13617;
})();
var statearr_13618_13653 = state_13603__$1;
(statearr_13618_13653[(2)] = null);

(statearr_13618_13653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (22))){
var state_13603__$1 = state_13603;
var statearr_13619_13654 = state_13603__$1;
(statearr_13619_13654[(2)] = null);

(statearr_13619_13654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (6))){
var inst_13544 = (state_13603[(13)]);
var inst_13553 = f.call(null,inst_13544);
var inst_13554 = cljs.core.seq.call(null,inst_13553);
var inst_13555 = inst_13554;
var inst_13556 = null;
var inst_13557 = (0);
var inst_13558 = (0);
var state_13603__$1 = (function (){var statearr_13620 = state_13603;
(statearr_13620[(8)] = inst_13555);

(statearr_13620[(9)] = inst_13558);

(statearr_13620[(10)] = inst_13557);

(statearr_13620[(12)] = inst_13556);

return statearr_13620;
})();
var statearr_13621_13655 = state_13603__$1;
(statearr_13621_13655[(2)] = null);

(statearr_13621_13655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (17))){
var inst_13569 = (state_13603[(7)]);
var inst_13573 = cljs.core.chunk_first.call(null,inst_13569);
var inst_13574 = cljs.core.chunk_rest.call(null,inst_13569);
var inst_13575 = cljs.core.count.call(null,inst_13573);
var inst_13555 = inst_13574;
var inst_13556 = inst_13573;
var inst_13557 = inst_13575;
var inst_13558 = (0);
var state_13603__$1 = (function (){var statearr_13622 = state_13603;
(statearr_13622[(8)] = inst_13555);

(statearr_13622[(9)] = inst_13558);

(statearr_13622[(10)] = inst_13557);

(statearr_13622[(12)] = inst_13556);

return statearr_13622;
})();
var statearr_13623_13656 = state_13603__$1;
(statearr_13623_13656[(2)] = null);

(statearr_13623_13656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (3))){
var inst_13601 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13603__$1,inst_13601);
} else {
if((state_val_13604 === (12))){
var inst_13589 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13624_13657 = state_13603__$1;
(statearr_13624_13657[(2)] = inst_13589);

(statearr_13624_13657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (2))){
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13603__$1,(4),in$);
} else {
if((state_val_13604 === (23))){
var inst_13597 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13625_13658 = state_13603__$1;
(statearr_13625_13658[(2)] = inst_13597);

(statearr_13625_13658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (19))){
var inst_13584 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13626_13659 = state_13603__$1;
(statearr_13626_13659[(2)] = inst_13584);

(statearr_13626_13659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (11))){
var inst_13569 = (state_13603[(7)]);
var inst_13555 = (state_13603[(8)]);
var inst_13569__$1 = cljs.core.seq.call(null,inst_13555);
var state_13603__$1 = (function (){var statearr_13627 = state_13603;
(statearr_13627[(7)] = inst_13569__$1);

return statearr_13627;
})();
if(inst_13569__$1){
var statearr_13628_13660 = state_13603__$1;
(statearr_13628_13660[(1)] = (14));

} else {
var statearr_13629_13661 = state_13603__$1;
(statearr_13629_13661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (9))){
var inst_13591 = (state_13603[(2)]);
var inst_13592 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13603__$1 = (function (){var statearr_13630 = state_13603;
(statearr_13630[(15)] = inst_13591);

return statearr_13630;
})();
if(cljs.core.truth_(inst_13592)){
var statearr_13631_13662 = state_13603__$1;
(statearr_13631_13662[(1)] = (21));

} else {
var statearr_13632_13663 = state_13603__$1;
(statearr_13632_13663[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (5))){
var inst_13547 = cljs.core.async.close_BANG_.call(null,out);
var state_13603__$1 = state_13603;
var statearr_13633_13664 = state_13603__$1;
(statearr_13633_13664[(2)] = inst_13547);

(statearr_13633_13664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (14))){
var inst_13569 = (state_13603[(7)]);
var inst_13571 = cljs.core.chunked_seq_QMARK_.call(null,inst_13569);
var state_13603__$1 = state_13603;
if(inst_13571){
var statearr_13634_13665 = state_13603__$1;
(statearr_13634_13665[(1)] = (17));

} else {
var statearr_13635_13666 = state_13603__$1;
(statearr_13635_13666[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (16))){
var inst_13587 = (state_13603[(2)]);
var state_13603__$1 = state_13603;
var statearr_13636_13667 = state_13603__$1;
(statearr_13636_13667[(2)] = inst_13587);

(statearr_13636_13667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13604 === (10))){
var inst_13558 = (state_13603[(9)]);
var inst_13556 = (state_13603[(12)]);
var inst_13563 = cljs.core._nth.call(null,inst_13556,inst_13558);
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13603__$1,(13),out,inst_13563);
} else {
if((state_val_13604 === (18))){
var inst_13569 = (state_13603[(7)]);
var inst_13578 = cljs.core.first.call(null,inst_13569);
var state_13603__$1 = state_13603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13603__$1,(20),out,inst_13578);
} else {
if((state_val_13604 === (8))){
var inst_13558 = (state_13603[(9)]);
var inst_13557 = (state_13603[(10)]);
var inst_13560 = (inst_13558 < inst_13557);
var inst_13561 = inst_13560;
var state_13603__$1 = state_13603;
if(cljs.core.truth_(inst_13561)){
var statearr_13637_13668 = state_13603__$1;
(statearr_13637_13668[(1)] = (10));

} else {
var statearr_13638_13669 = state_13603__$1;
(statearr_13638_13669[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto__))
;
return ((function (switch__11034__auto__,c__11146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____0 = (function (){
var statearr_13642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__);

(statearr_13642[(1)] = (1));

return statearr_13642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____1 = (function (state_13603){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13643){if((e13643 instanceof Object)){
var ex__11038__auto__ = e13643;
var statearr_13644_13670 = state_13603;
(statearr_13644_13670[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13671 = state_13603;
state_13603 = G__13671;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__ = function(state_13603){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____1.call(this,state_13603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto__))
})();
var state__11148__auto__ = (function (){var statearr_13645 = f__11147__auto__.call(null);
(statearr_13645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto__);

return statearr_13645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto__))
);

return c__11146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13672 = [];
var len__7326__auto___13675 = arguments.length;
var i__7327__auto___13676 = (0);
while(true){
if((i__7327__auto___13676 < len__7326__auto___13675)){
args13672.push((arguments[i__7327__auto___13676]));

var G__13677 = (i__7327__auto___13676 + (1));
i__7327__auto___13676 = G__13677;
continue;
} else {
}
break;
}

var G__13674 = args13672.length;
switch (G__13674) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13672.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13679 = [];
var len__7326__auto___13682 = arguments.length;
var i__7327__auto___13683 = (0);
while(true){
if((i__7327__auto___13683 < len__7326__auto___13682)){
args13679.push((arguments[i__7327__auto___13683]));

var G__13684 = (i__7327__auto___13683 + (1));
i__7327__auto___13683 = G__13684;
continue;
} else {
}
break;
}

var G__13681 = args13679.length;
switch (G__13681) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13679.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13686 = [];
var len__7326__auto___13737 = arguments.length;
var i__7327__auto___13738 = (0);
while(true){
if((i__7327__auto___13738 < len__7326__auto___13737)){
args13686.push((arguments[i__7327__auto___13738]));

var G__13739 = (i__7327__auto___13738 + (1));
i__7327__auto___13738 = G__13739;
continue;
} else {
}
break;
}

var G__13688 = args13686.length;
switch (G__13688) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13686.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13741,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13741,out){
return (function (state_13712){
var state_val_13713 = (state_13712[(1)]);
if((state_val_13713 === (7))){
var inst_13707 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
var statearr_13714_13742 = state_13712__$1;
(statearr_13714_13742[(2)] = inst_13707);

(statearr_13714_13742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (1))){
var inst_13689 = null;
var state_13712__$1 = (function (){var statearr_13715 = state_13712;
(statearr_13715[(7)] = inst_13689);

return statearr_13715;
})();
var statearr_13716_13743 = state_13712__$1;
(statearr_13716_13743[(2)] = null);

(statearr_13716_13743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (4))){
var inst_13692 = (state_13712[(8)]);
var inst_13692__$1 = (state_13712[(2)]);
var inst_13693 = (inst_13692__$1 == null);
var inst_13694 = cljs.core.not.call(null,inst_13693);
var state_13712__$1 = (function (){var statearr_13717 = state_13712;
(statearr_13717[(8)] = inst_13692__$1);

return statearr_13717;
})();
if(inst_13694){
var statearr_13718_13744 = state_13712__$1;
(statearr_13718_13744[(1)] = (5));

} else {
var statearr_13719_13745 = state_13712__$1;
(statearr_13719_13745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (6))){
var state_13712__$1 = state_13712;
var statearr_13720_13746 = state_13712__$1;
(statearr_13720_13746[(2)] = null);

(statearr_13720_13746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (3))){
var inst_13709 = (state_13712[(2)]);
var inst_13710 = cljs.core.async.close_BANG_.call(null,out);
var state_13712__$1 = (function (){var statearr_13721 = state_13712;
(statearr_13721[(9)] = inst_13709);

return statearr_13721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13712__$1,inst_13710);
} else {
if((state_val_13713 === (2))){
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13712__$1,(4),ch);
} else {
if((state_val_13713 === (11))){
var inst_13692 = (state_13712[(8)]);
var inst_13701 = (state_13712[(2)]);
var inst_13689 = inst_13692;
var state_13712__$1 = (function (){var statearr_13722 = state_13712;
(statearr_13722[(7)] = inst_13689);

(statearr_13722[(10)] = inst_13701);

return statearr_13722;
})();
var statearr_13723_13747 = state_13712__$1;
(statearr_13723_13747[(2)] = null);

(statearr_13723_13747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (9))){
var inst_13692 = (state_13712[(8)]);
var state_13712__$1 = state_13712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13712__$1,(11),out,inst_13692);
} else {
if((state_val_13713 === (5))){
var inst_13689 = (state_13712[(7)]);
var inst_13692 = (state_13712[(8)]);
var inst_13696 = cljs.core._EQ_.call(null,inst_13692,inst_13689);
var state_13712__$1 = state_13712;
if(inst_13696){
var statearr_13725_13748 = state_13712__$1;
(statearr_13725_13748[(1)] = (8));

} else {
var statearr_13726_13749 = state_13712__$1;
(statearr_13726_13749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (10))){
var inst_13704 = (state_13712[(2)]);
var state_13712__$1 = state_13712;
var statearr_13727_13750 = state_13712__$1;
(statearr_13727_13750[(2)] = inst_13704);

(statearr_13727_13750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13713 === (8))){
var inst_13689 = (state_13712[(7)]);
var tmp13724 = inst_13689;
var inst_13689__$1 = tmp13724;
var state_13712__$1 = (function (){var statearr_13728 = state_13712;
(statearr_13728[(7)] = inst_13689__$1);

return statearr_13728;
})();
var statearr_13729_13751 = state_13712__$1;
(statearr_13729_13751[(2)] = null);

(statearr_13729_13751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13741,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13741,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13733[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13733[(1)] = (1));

return statearr_13733;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13712){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13734){if((e13734 instanceof Object)){
var ex__11038__auto__ = e13734;
var statearr_13735_13752 = state_13712;
(statearr_13735_13752[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13753 = state_13712;
state_13712 = G__13753;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13741,out))
})();
var state__11148__auto__ = (function (){var statearr_13736 = f__11147__auto__.call(null);
(statearr_13736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13741);

return statearr_13736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13754 = [];
var len__7326__auto___13824 = arguments.length;
var i__7327__auto___13825 = (0);
while(true){
if((i__7327__auto___13825 < len__7326__auto___13824)){
args13754.push((arguments[i__7327__auto___13825]));

var G__13826 = (i__7327__auto___13825 + (1));
i__7327__auto___13825 = G__13826;
continue;
} else {
}
break;
}

var G__13756 = args13754.length;
switch (G__13756) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13754.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13828,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13828,out){
return (function (state_13794){
var state_val_13795 = (state_13794[(1)]);
if((state_val_13795 === (7))){
var inst_13790 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
var statearr_13796_13829 = state_13794__$1;
(statearr_13796_13829[(2)] = inst_13790);

(statearr_13796_13829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (1))){
var inst_13757 = (new Array(n));
var inst_13758 = inst_13757;
var inst_13759 = (0);
var state_13794__$1 = (function (){var statearr_13797 = state_13794;
(statearr_13797[(7)] = inst_13758);

(statearr_13797[(8)] = inst_13759);

return statearr_13797;
})();
var statearr_13798_13830 = state_13794__$1;
(statearr_13798_13830[(2)] = null);

(statearr_13798_13830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (4))){
var inst_13762 = (state_13794[(9)]);
var inst_13762__$1 = (state_13794[(2)]);
var inst_13763 = (inst_13762__$1 == null);
var inst_13764 = cljs.core.not.call(null,inst_13763);
var state_13794__$1 = (function (){var statearr_13799 = state_13794;
(statearr_13799[(9)] = inst_13762__$1);

return statearr_13799;
})();
if(inst_13764){
var statearr_13800_13831 = state_13794__$1;
(statearr_13800_13831[(1)] = (5));

} else {
var statearr_13801_13832 = state_13794__$1;
(statearr_13801_13832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (15))){
var inst_13784 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
var statearr_13802_13833 = state_13794__$1;
(statearr_13802_13833[(2)] = inst_13784);

(statearr_13802_13833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (13))){
var state_13794__$1 = state_13794;
var statearr_13803_13834 = state_13794__$1;
(statearr_13803_13834[(2)] = null);

(statearr_13803_13834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (6))){
var inst_13759 = (state_13794[(8)]);
var inst_13780 = (inst_13759 > (0));
var state_13794__$1 = state_13794;
if(cljs.core.truth_(inst_13780)){
var statearr_13804_13835 = state_13794__$1;
(statearr_13804_13835[(1)] = (12));

} else {
var statearr_13805_13836 = state_13794__$1;
(statearr_13805_13836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (3))){
var inst_13792 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13794__$1,inst_13792);
} else {
if((state_val_13795 === (12))){
var inst_13758 = (state_13794[(7)]);
var inst_13782 = cljs.core.vec.call(null,inst_13758);
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13794__$1,(15),out,inst_13782);
} else {
if((state_val_13795 === (2))){
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13794__$1,(4),ch);
} else {
if((state_val_13795 === (11))){
var inst_13774 = (state_13794[(2)]);
var inst_13775 = (new Array(n));
var inst_13758 = inst_13775;
var inst_13759 = (0);
var state_13794__$1 = (function (){var statearr_13806 = state_13794;
(statearr_13806[(10)] = inst_13774);

(statearr_13806[(7)] = inst_13758);

(statearr_13806[(8)] = inst_13759);

return statearr_13806;
})();
var statearr_13807_13837 = state_13794__$1;
(statearr_13807_13837[(2)] = null);

(statearr_13807_13837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (9))){
var inst_13758 = (state_13794[(7)]);
var inst_13772 = cljs.core.vec.call(null,inst_13758);
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13794__$1,(11),out,inst_13772);
} else {
if((state_val_13795 === (5))){
var inst_13767 = (state_13794[(11)]);
var inst_13762 = (state_13794[(9)]);
var inst_13758 = (state_13794[(7)]);
var inst_13759 = (state_13794[(8)]);
var inst_13766 = (inst_13758[inst_13759] = inst_13762);
var inst_13767__$1 = (inst_13759 + (1));
var inst_13768 = (inst_13767__$1 < n);
var state_13794__$1 = (function (){var statearr_13808 = state_13794;
(statearr_13808[(11)] = inst_13767__$1);

(statearr_13808[(12)] = inst_13766);

return statearr_13808;
})();
if(cljs.core.truth_(inst_13768)){
var statearr_13809_13838 = state_13794__$1;
(statearr_13809_13838[(1)] = (8));

} else {
var statearr_13810_13839 = state_13794__$1;
(statearr_13810_13839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (14))){
var inst_13787 = (state_13794[(2)]);
var inst_13788 = cljs.core.async.close_BANG_.call(null,out);
var state_13794__$1 = (function (){var statearr_13812 = state_13794;
(statearr_13812[(13)] = inst_13787);

return statearr_13812;
})();
var statearr_13813_13840 = state_13794__$1;
(statearr_13813_13840[(2)] = inst_13788);

(statearr_13813_13840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (10))){
var inst_13778 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
var statearr_13814_13841 = state_13794__$1;
(statearr_13814_13841[(2)] = inst_13778);

(statearr_13814_13841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (8))){
var inst_13767 = (state_13794[(11)]);
var inst_13758 = (state_13794[(7)]);
var tmp13811 = inst_13758;
var inst_13758__$1 = tmp13811;
var inst_13759 = inst_13767;
var state_13794__$1 = (function (){var statearr_13815 = state_13794;
(statearr_13815[(7)] = inst_13758__$1);

(statearr_13815[(8)] = inst_13759);

return statearr_13815;
})();
var statearr_13816_13842 = state_13794__$1;
(statearr_13816_13842[(2)] = null);

(statearr_13816_13842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13828,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13828,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13820[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13820[(1)] = (1));

return statearr_13820;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13794){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13821){if((e13821 instanceof Object)){
var ex__11038__auto__ = e13821;
var statearr_13822_13843 = state_13794;
(statearr_13822_13843[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13844 = state_13794;
state_13794 = G__13844;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13828,out))
})();
var state__11148__auto__ = (function (){var statearr_13823 = f__11147__auto__.call(null);
(statearr_13823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13828);

return statearr_13823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13828,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13845 = [];
var len__7326__auto___13919 = arguments.length;
var i__7327__auto___13920 = (0);
while(true){
if((i__7327__auto___13920 < len__7326__auto___13919)){
args13845.push((arguments[i__7327__auto___13920]));

var G__13921 = (i__7327__auto___13920 + (1));
i__7327__auto___13920 = G__13921;
continue;
} else {
}
break;
}

var G__13847 = args13845.length;
switch (G__13847) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13845.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11146__auto___13923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11146__auto___13923,out){
return (function (){
var f__11147__auto__ = (function (){var switch__11034__auto__ = ((function (c__11146__auto___13923,out){
return (function (state_13889){
var state_val_13890 = (state_13889[(1)]);
if((state_val_13890 === (7))){
var inst_13885 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13891_13924 = state_13889__$1;
(statearr_13891_13924[(2)] = inst_13885);

(statearr_13891_13924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (1))){
var inst_13848 = [];
var inst_13849 = inst_13848;
var inst_13850 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13889__$1 = (function (){var statearr_13892 = state_13889;
(statearr_13892[(7)] = inst_13850);

(statearr_13892[(8)] = inst_13849);

return statearr_13892;
})();
var statearr_13893_13925 = state_13889__$1;
(statearr_13893_13925[(2)] = null);

(statearr_13893_13925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (4))){
var inst_13853 = (state_13889[(9)]);
var inst_13853__$1 = (state_13889[(2)]);
var inst_13854 = (inst_13853__$1 == null);
var inst_13855 = cljs.core.not.call(null,inst_13854);
var state_13889__$1 = (function (){var statearr_13894 = state_13889;
(statearr_13894[(9)] = inst_13853__$1);

return statearr_13894;
})();
if(inst_13855){
var statearr_13895_13926 = state_13889__$1;
(statearr_13895_13926[(1)] = (5));

} else {
var statearr_13896_13927 = state_13889__$1;
(statearr_13896_13927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (15))){
var inst_13879 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13897_13928 = state_13889__$1;
(statearr_13897_13928[(2)] = inst_13879);

(statearr_13897_13928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (13))){
var state_13889__$1 = state_13889;
var statearr_13898_13929 = state_13889__$1;
(statearr_13898_13929[(2)] = null);

(statearr_13898_13929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (6))){
var inst_13849 = (state_13889[(8)]);
var inst_13874 = inst_13849.length;
var inst_13875 = (inst_13874 > (0));
var state_13889__$1 = state_13889;
if(cljs.core.truth_(inst_13875)){
var statearr_13899_13930 = state_13889__$1;
(statearr_13899_13930[(1)] = (12));

} else {
var statearr_13900_13931 = state_13889__$1;
(statearr_13900_13931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (3))){
var inst_13887 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13889__$1,inst_13887);
} else {
if((state_val_13890 === (12))){
var inst_13849 = (state_13889[(8)]);
var inst_13877 = cljs.core.vec.call(null,inst_13849);
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13889__$1,(15),out,inst_13877);
} else {
if((state_val_13890 === (2))){
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13889__$1,(4),ch);
} else {
if((state_val_13890 === (11))){
var inst_13853 = (state_13889[(9)]);
var inst_13857 = (state_13889[(10)]);
var inst_13867 = (state_13889[(2)]);
var inst_13868 = [];
var inst_13869 = inst_13868.push(inst_13853);
var inst_13849 = inst_13868;
var inst_13850 = inst_13857;
var state_13889__$1 = (function (){var statearr_13901 = state_13889;
(statearr_13901[(7)] = inst_13850);

(statearr_13901[(11)] = inst_13867);

(statearr_13901[(12)] = inst_13869);

(statearr_13901[(8)] = inst_13849);

return statearr_13901;
})();
var statearr_13902_13932 = state_13889__$1;
(statearr_13902_13932[(2)] = null);

(statearr_13902_13932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (9))){
var inst_13849 = (state_13889[(8)]);
var inst_13865 = cljs.core.vec.call(null,inst_13849);
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13889__$1,(11),out,inst_13865);
} else {
if((state_val_13890 === (5))){
var inst_13853 = (state_13889[(9)]);
var inst_13850 = (state_13889[(7)]);
var inst_13857 = (state_13889[(10)]);
var inst_13857__$1 = f.call(null,inst_13853);
var inst_13858 = cljs.core._EQ_.call(null,inst_13857__$1,inst_13850);
var inst_13859 = cljs.core.keyword_identical_QMARK_.call(null,inst_13850,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13860 = (inst_13858) || (inst_13859);
var state_13889__$1 = (function (){var statearr_13903 = state_13889;
(statearr_13903[(10)] = inst_13857__$1);

return statearr_13903;
})();
if(cljs.core.truth_(inst_13860)){
var statearr_13904_13933 = state_13889__$1;
(statearr_13904_13933[(1)] = (8));

} else {
var statearr_13905_13934 = state_13889__$1;
(statearr_13905_13934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (14))){
var inst_13882 = (state_13889[(2)]);
var inst_13883 = cljs.core.async.close_BANG_.call(null,out);
var state_13889__$1 = (function (){var statearr_13907 = state_13889;
(statearr_13907[(13)] = inst_13882);

return statearr_13907;
})();
var statearr_13908_13935 = state_13889__$1;
(statearr_13908_13935[(2)] = inst_13883);

(statearr_13908_13935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (10))){
var inst_13872 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13909_13936 = state_13889__$1;
(statearr_13909_13936[(2)] = inst_13872);

(statearr_13909_13936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (8))){
var inst_13853 = (state_13889[(9)]);
var inst_13857 = (state_13889[(10)]);
var inst_13849 = (state_13889[(8)]);
var inst_13862 = inst_13849.push(inst_13853);
var tmp13906 = inst_13849;
var inst_13849__$1 = tmp13906;
var inst_13850 = inst_13857;
var state_13889__$1 = (function (){var statearr_13910 = state_13889;
(statearr_13910[(7)] = inst_13850);

(statearr_13910[(14)] = inst_13862);

(statearr_13910[(8)] = inst_13849__$1);

return statearr_13910;
})();
var statearr_13911_13937 = state_13889__$1;
(statearr_13911_13937[(2)] = null);

(statearr_13911_13937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11146__auto___13923,out))
;
return ((function (switch__11034__auto__,c__11146__auto___13923,out){
return (function() {
var cljs$core$async$state_machine__11035__auto__ = null;
var cljs$core$async$state_machine__11035__auto____0 = (function (){
var statearr_13915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13915[(0)] = cljs$core$async$state_machine__11035__auto__);

(statearr_13915[(1)] = (1));

return statearr_13915;
});
var cljs$core$async$state_machine__11035__auto____1 = (function (state_13889){
while(true){
var ret_value__11036__auto__ = (function (){try{while(true){
var result__11037__auto__ = switch__11034__auto__.call(null,state_13889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11037__auto__;
}
break;
}
}catch (e13916){if((e13916 instanceof Object)){
var ex__11038__auto__ = e13916;
var statearr_13917_13938 = state_13889;
(statearr_13917_13938[(5)] = ex__11038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13939 = state_13889;
state_13889 = G__13939;
continue;
} else {
return ret_value__11036__auto__;
}
break;
}
});
cljs$core$async$state_machine__11035__auto__ = function(state_13889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11035__auto____1.call(this,state_13889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11035__auto____0;
cljs$core$async$state_machine__11035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11035__auto____1;
return cljs$core$async$state_machine__11035__auto__;
})()
;})(switch__11034__auto__,c__11146__auto___13923,out))
})();
var state__11148__auto__ = (function (){var statearr_13918 = f__11147__auto__.call(null);
(statearr_13918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11146__auto___13923);

return statearr_13918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11148__auto__);
});})(c__11146__auto___13923,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map