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
var args11879 = [];
var len__7326__auto___11885 = arguments.length;
var i__7327__auto___11886 = (0);
while(true){
if((i__7327__auto___11886 < len__7326__auto___11885)){
args11879.push((arguments[i__7327__auto___11886]));

var G__11887 = (i__7327__auto___11886 + (1));
i__7327__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var G__11881 = args11879.length;
switch (G__11881) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11879.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11882 = (function (f,blockable,meta11883){
this.f = f;
this.blockable = blockable;
this.meta11883 = meta11883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11884,meta11883__$1){
var self__ = this;
var _11884__$1 = this;
return (new cljs.core.async.t_cljs$core$async11882(self__.f,self__.blockable,meta11883__$1));
});

cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11884){
var self__ = this;
var _11884__$1 = this;
return self__.meta11883;
});

cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11883","meta11883",-398099566,null)], null);
});

cljs.core.async.t_cljs$core$async11882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11882";

cljs.core.async.t_cljs$core$async11882.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11882");
});

cljs.core.async.__GT_t_cljs$core$async11882 = (function cljs$core$async$__GT_t_cljs$core$async11882(f__$1,blockable__$1,meta11883){
return (new cljs.core.async.t_cljs$core$async11882(f__$1,blockable__$1,meta11883));
});

}

return (new cljs.core.async.t_cljs$core$async11882(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args11891 = [];
var len__7326__auto___11894 = arguments.length;
var i__7327__auto___11895 = (0);
while(true){
if((i__7327__auto___11895 < len__7326__auto___11894)){
args11891.push((arguments[i__7327__auto___11895]));

var G__11896 = (i__7327__auto___11895 + (1));
i__7327__auto___11895 = G__11896;
continue;
} else {
}
break;
}

var G__11893 = args11891.length;
switch (G__11893) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11891.length)].join('')));

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
var args11898 = [];
var len__7326__auto___11901 = arguments.length;
var i__7327__auto___11902 = (0);
while(true){
if((i__7327__auto___11902 < len__7326__auto___11901)){
args11898.push((arguments[i__7327__auto___11902]));

var G__11903 = (i__7327__auto___11902 + (1));
i__7327__auto___11902 = G__11903;
continue;
} else {
}
break;
}

var G__11900 = args11898.length;
switch (G__11900) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11898.length)].join('')));

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
var args11905 = [];
var len__7326__auto___11908 = arguments.length;
var i__7327__auto___11909 = (0);
while(true){
if((i__7327__auto___11909 < len__7326__auto___11908)){
args11905.push((arguments[i__7327__auto___11909]));

var G__11910 = (i__7327__auto___11909 + (1));
i__7327__auto___11909 = G__11910;
continue;
} else {
}
break;
}

var G__11907 = args11905.length;
switch (G__11907) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11905.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11912 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11912);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11912,ret){
return (function (){
return fn1.call(null,val_11912);
});})(val_11912,ret))
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
var args11913 = [];
var len__7326__auto___11916 = arguments.length;
var i__7327__auto___11917 = (0);
while(true){
if((i__7327__auto___11917 < len__7326__auto___11916)){
args11913.push((arguments[i__7327__auto___11917]));

var G__11918 = (i__7327__auto___11917 + (1));
i__7327__auto___11917 = G__11918;
continue;
} else {
}
break;
}

var G__11915 = args11913.length;
switch (G__11915) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11913.length)].join('')));

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
var n__7166__auto___11920 = n;
var x_11921 = (0);
while(true){
if((x_11921 < n__7166__auto___11920)){
(a[x_11921] = (0));

var G__11922 = (x_11921 + (1));
x_11921 = G__11922;
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

var G__11923 = (i + (1));
i = G__11923;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11927 = (function (alt_flag,flag,meta11928){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11928 = meta11928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11929,meta11928__$1){
var self__ = this;
var _11929__$1 = this;
return (new cljs.core.async.t_cljs$core$async11927(self__.alt_flag,self__.flag,meta11928__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11929){
var self__ = this;
var _11929__$1 = this;
return self__.meta11928;
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11928","meta11928",36241119,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11927";

cljs.core.async.t_cljs$core$async11927.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11927");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11927 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11927(alt_flag__$1,flag__$1,meta11928){
return (new cljs.core.async.t_cljs$core$async11927(alt_flag__$1,flag__$1,meta11928));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11927(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11933 = (function (alt_handler,flag,cb,meta11934){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11934 = meta11934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11935,meta11934__$1){
var self__ = this;
var _11935__$1 = this;
return (new cljs.core.async.t_cljs$core$async11933(self__.alt_handler,self__.flag,self__.cb,meta11934__$1));
});

cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11935){
var self__ = this;
var _11935__$1 = this;
return self__.meta11934;
});

cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11934","meta11934",-679441145,null)], null);
});

cljs.core.async.t_cljs$core$async11933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11933";

cljs.core.async.t_cljs$core$async11933.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async11933");
});

cljs.core.async.__GT_t_cljs$core$async11933 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11933(alt_handler__$1,flag__$1,cb__$1,meta11934){
return (new cljs.core.async.t_cljs$core$async11933(alt_handler__$1,flag__$1,cb__$1,meta11934));
});

}

return (new cljs.core.async.t_cljs$core$async11933(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11936_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11936_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11937_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11937_SHARP_,port], null));
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
var G__11938 = (i + (1));
i = G__11938;
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
var len__7326__auto___11944 = arguments.length;
var i__7327__auto___11945 = (0);
while(true){
if((i__7327__auto___11945 < len__7326__auto___11944)){
args__7333__auto__.push((arguments[i__7327__auto___11945]));

var G__11946 = (i__7327__auto___11945 + (1));
i__7327__auto___11945 = G__11946;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11941){
var map__11942 = p__11941;
var map__11942__$1 = ((((!((map__11942 == null)))?((((map__11942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11942):map__11942);
var opts = map__11942__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11939){
var G__11940 = cljs.core.first.call(null,seq11939);
var seq11939__$1 = cljs.core.next.call(null,seq11939);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11940,seq11939__$1);
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
var args11947 = [];
var len__7326__auto___11997 = arguments.length;
var i__7327__auto___11998 = (0);
while(true){
if((i__7327__auto___11998 < len__7326__auto___11997)){
args11947.push((arguments[i__7327__auto___11998]));

var G__11999 = (i__7327__auto___11998 + (1));
i__7327__auto___11998 = G__11999;
continue;
} else {
}
break;
}

var G__11949 = args11947.length;
switch (G__11949) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11947.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11834__auto___12001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___12001){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___12001){
return (function (state_11973){
var state_val_11974 = (state_11973[(1)]);
if((state_val_11974 === (7))){
var inst_11969 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
var statearr_11975_12002 = state_11973__$1;
(statearr_11975_12002[(2)] = inst_11969);

(statearr_11975_12002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (1))){
var state_11973__$1 = state_11973;
var statearr_11976_12003 = state_11973__$1;
(statearr_11976_12003[(2)] = null);

(statearr_11976_12003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (4))){
var inst_11952 = (state_11973[(7)]);
var inst_11952__$1 = (state_11973[(2)]);
var inst_11953 = (inst_11952__$1 == null);
var state_11973__$1 = (function (){var statearr_11977 = state_11973;
(statearr_11977[(7)] = inst_11952__$1);

return statearr_11977;
})();
if(cljs.core.truth_(inst_11953)){
var statearr_11978_12004 = state_11973__$1;
(statearr_11978_12004[(1)] = (5));

} else {
var statearr_11979_12005 = state_11973__$1;
(statearr_11979_12005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (13))){
var state_11973__$1 = state_11973;
var statearr_11980_12006 = state_11973__$1;
(statearr_11980_12006[(2)] = null);

(statearr_11980_12006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (6))){
var inst_11952 = (state_11973[(7)]);
var state_11973__$1 = state_11973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11973__$1,(11),to,inst_11952);
} else {
if((state_val_11974 === (3))){
var inst_11971 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11973__$1,inst_11971);
} else {
if((state_val_11974 === (12))){
var state_11973__$1 = state_11973;
var statearr_11981_12007 = state_11973__$1;
(statearr_11981_12007[(2)] = null);

(statearr_11981_12007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (2))){
var state_11973__$1 = state_11973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11973__$1,(4),from);
} else {
if((state_val_11974 === (11))){
var inst_11962 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
if(cljs.core.truth_(inst_11962)){
var statearr_11982_12008 = state_11973__$1;
(statearr_11982_12008[(1)] = (12));

} else {
var statearr_11983_12009 = state_11973__$1;
(statearr_11983_12009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (9))){
var state_11973__$1 = state_11973;
var statearr_11984_12010 = state_11973__$1;
(statearr_11984_12010[(2)] = null);

(statearr_11984_12010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (5))){
var state_11973__$1 = state_11973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11985_12011 = state_11973__$1;
(statearr_11985_12011[(1)] = (8));

} else {
var statearr_11986_12012 = state_11973__$1;
(statearr_11986_12012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (14))){
var inst_11967 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
var statearr_11987_12013 = state_11973__$1;
(statearr_11987_12013[(2)] = inst_11967);

(statearr_11987_12013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (10))){
var inst_11959 = (state_11973[(2)]);
var state_11973__$1 = state_11973;
var statearr_11988_12014 = state_11973__$1;
(statearr_11988_12014[(2)] = inst_11959);

(statearr_11988_12014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11974 === (8))){
var inst_11956 = cljs.core.async.close_BANG_.call(null,to);
var state_11973__$1 = state_11973;
var statearr_11989_12015 = state_11973__$1;
(statearr_11989_12015[(2)] = inst_11956);

(statearr_11989_12015[(1)] = (10));


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
});})(c__11834__auto___12001))
;
return ((function (switch__11722__auto__,c__11834__auto___12001){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_11993 = [null,null,null,null,null,null,null,null];
(statearr_11993[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_11993[(1)] = (1));

return statearr_11993;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_11973){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_11973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e11994){if((e11994 instanceof Object)){
var ex__11726__auto__ = e11994;
var statearr_11995_12016 = state_11973;
(statearr_11995_12016[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12017 = state_11973;
state_11973 = G__12017;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_11973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_11973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___12001))
})();
var state__11836__auto__ = (function (){var statearr_11996 = f__11835__auto__.call(null);
(statearr_11996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12001);

return statearr_11996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___12001))
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
return (function (p__12205){
var vec__12206 = p__12205;
var v = cljs.core.nth.call(null,vec__12206,(0),null);
var p = cljs.core.nth.call(null,vec__12206,(1),null);
var job = vec__12206;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11834__auto___12392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results){
return (function (state_12213){
var state_val_12214 = (state_12213[(1)]);
if((state_val_12214 === (1))){
var state_12213__$1 = state_12213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12213__$1,(2),res,v);
} else {
if((state_val_12214 === (2))){
var inst_12210 = (state_12213[(2)]);
var inst_12211 = cljs.core.async.close_BANG_.call(null,res);
var state_12213__$1 = (function (){var statearr_12215 = state_12213;
(statearr_12215[(7)] = inst_12210);

return statearr_12215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12213__$1,inst_12211);
} else {
return null;
}
}
});})(c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results))
;
return ((function (switch__11722__auto__,c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_12219 = [null,null,null,null,null,null,null,null];
(statearr_12219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__);

(statearr_12219[(1)] = (1));

return statearr_12219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1 = (function (state_12213){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12220){if((e12220 instanceof Object)){
var ex__11726__auto__ = e12220;
var statearr_12221_12393 = state_12213;
(statearr_12221_12393[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12394 = state_12213;
state_12213 = G__12394;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = function(state_12213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1.call(this,state_12213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results))
})();
var state__11836__auto__ = (function (){var statearr_12222 = f__11835__auto__.call(null);
(statearr_12222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12392);

return statearr_12222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___12392,res,vec__12206,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12223){
var vec__12224 = p__12223;
var v = cljs.core.nth.call(null,vec__12224,(0),null);
var p = cljs.core.nth.call(null,vec__12224,(1),null);
var job = vec__12224;
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
var n__7166__auto___12395 = n;
var __12396 = (0);
while(true){
if((__12396 < n__7166__auto___12395)){
var G__12227_12397 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12227_12397) {
case "compute":
var c__11834__auto___12399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12396,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (__12396,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function (state_12240){
var state_val_12241 = (state_12240[(1)]);
if((state_val_12241 === (1))){
var state_12240__$1 = state_12240;
var statearr_12242_12400 = state_12240__$1;
(statearr_12242_12400[(2)] = null);

(statearr_12242_12400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (2))){
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12240__$1,(4),jobs);
} else {
if((state_val_12241 === (3))){
var inst_12238 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12240__$1,inst_12238);
} else {
if((state_val_12241 === (4))){
var inst_12230 = (state_12240[(2)]);
var inst_12231 = process.call(null,inst_12230);
var state_12240__$1 = state_12240;
if(cljs.core.truth_(inst_12231)){
var statearr_12243_12401 = state_12240__$1;
(statearr_12243_12401[(1)] = (5));

} else {
var statearr_12244_12402 = state_12240__$1;
(statearr_12244_12402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (5))){
var state_12240__$1 = state_12240;
var statearr_12245_12403 = state_12240__$1;
(statearr_12245_12403[(2)] = null);

(statearr_12245_12403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (6))){
var state_12240__$1 = state_12240;
var statearr_12246_12404 = state_12240__$1;
(statearr_12246_12404[(2)] = null);

(statearr_12246_12404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (7))){
var inst_12236 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12247_12405 = state_12240__$1;
(statearr_12247_12405[(2)] = inst_12236);

(statearr_12247_12405[(1)] = (3));


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
});})(__12396,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
;
return ((function (__12396,switch__11722__auto__,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_12251 = [null,null,null,null,null,null,null];
(statearr_12251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__);

(statearr_12251[(1)] = (1));

return statearr_12251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1 = (function (state_12240){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12252){if((e12252 instanceof Object)){
var ex__11726__auto__ = e12252;
var statearr_12253_12406 = state_12240;
(statearr_12253_12406[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12407 = state_12240;
state_12240 = G__12407;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = function(state_12240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1.call(this,state_12240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__;
})()
;})(__12396,switch__11722__auto__,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
})();
var state__11836__auto__ = (function (){var statearr_12254 = f__11835__auto__.call(null);
(statearr_12254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12399);

return statearr_12254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(__12396,c__11834__auto___12399,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
);


break;
case "async":
var c__11834__auto___12408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12396,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (__12396,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function (state_12267){
var state_val_12268 = (state_12267[(1)]);
if((state_val_12268 === (1))){
var state_12267__$1 = state_12267;
var statearr_12269_12409 = state_12267__$1;
(statearr_12269_12409[(2)] = null);

(statearr_12269_12409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (2))){
var state_12267__$1 = state_12267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12267__$1,(4),jobs);
} else {
if((state_val_12268 === (3))){
var inst_12265 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12267__$1,inst_12265);
} else {
if((state_val_12268 === (4))){
var inst_12257 = (state_12267[(2)]);
var inst_12258 = async.call(null,inst_12257);
var state_12267__$1 = state_12267;
if(cljs.core.truth_(inst_12258)){
var statearr_12270_12410 = state_12267__$1;
(statearr_12270_12410[(1)] = (5));

} else {
var statearr_12271_12411 = state_12267__$1;
(statearr_12271_12411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (5))){
var state_12267__$1 = state_12267;
var statearr_12272_12412 = state_12267__$1;
(statearr_12272_12412[(2)] = null);

(statearr_12272_12412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (6))){
var state_12267__$1 = state_12267;
var statearr_12273_12413 = state_12267__$1;
(statearr_12273_12413[(2)] = null);

(statearr_12273_12413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12268 === (7))){
var inst_12263 = (state_12267[(2)]);
var state_12267__$1 = state_12267;
var statearr_12274_12414 = state_12267__$1;
(statearr_12274_12414[(2)] = inst_12263);

(statearr_12274_12414[(1)] = (3));


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
});})(__12396,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
;
return ((function (__12396,switch__11722__auto__,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_12278 = [null,null,null,null,null,null,null];
(statearr_12278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__);

(statearr_12278[(1)] = (1));

return statearr_12278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1 = (function (state_12267){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12279){if((e12279 instanceof Object)){
var ex__11726__auto__ = e12279;
var statearr_12280_12415 = state_12267;
(statearr_12280_12415[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12267;
state_12267 = G__12416;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = function(state_12267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1.call(this,state_12267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__;
})()
;})(__12396,switch__11722__auto__,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
})();
var state__11836__auto__ = (function (){var statearr_12281 = f__11835__auto__.call(null);
(statearr_12281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12408);

return statearr_12281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(__12396,c__11834__auto___12408,G__12227_12397,n__7166__auto___12395,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12417 = (__12396 + (1));
__12396 = G__12417;
continue;
} else {
}
break;
}

var c__11834__auto___12418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___12418,jobs,results,process,async){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___12418,jobs,results,process,async){
return (function (state_12303){
var state_val_12304 = (state_12303[(1)]);
if((state_val_12304 === (1))){
var state_12303__$1 = state_12303;
var statearr_12305_12419 = state_12303__$1;
(statearr_12305_12419[(2)] = null);

(statearr_12305_12419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (2))){
var state_12303__$1 = state_12303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12303__$1,(4),from);
} else {
if((state_val_12304 === (3))){
var inst_12301 = (state_12303[(2)]);
var state_12303__$1 = state_12303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12303__$1,inst_12301);
} else {
if((state_val_12304 === (4))){
var inst_12284 = (state_12303[(7)]);
var inst_12284__$1 = (state_12303[(2)]);
var inst_12285 = (inst_12284__$1 == null);
var state_12303__$1 = (function (){var statearr_12306 = state_12303;
(statearr_12306[(7)] = inst_12284__$1);

return statearr_12306;
})();
if(cljs.core.truth_(inst_12285)){
var statearr_12307_12420 = state_12303__$1;
(statearr_12307_12420[(1)] = (5));

} else {
var statearr_12308_12421 = state_12303__$1;
(statearr_12308_12421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (5))){
var inst_12287 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12303__$1 = state_12303;
var statearr_12309_12422 = state_12303__$1;
(statearr_12309_12422[(2)] = inst_12287);

(statearr_12309_12422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (6))){
var inst_12289 = (state_12303[(8)]);
var inst_12284 = (state_12303[(7)]);
var inst_12289__$1 = cljs.core.async.chan.call(null,(1));
var inst_12290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12291 = [inst_12284,inst_12289__$1];
var inst_12292 = (new cljs.core.PersistentVector(null,2,(5),inst_12290,inst_12291,null));
var state_12303__$1 = (function (){var statearr_12310 = state_12303;
(statearr_12310[(8)] = inst_12289__$1);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12303__$1,(8),jobs,inst_12292);
} else {
if((state_val_12304 === (7))){
var inst_12299 = (state_12303[(2)]);
var state_12303__$1 = state_12303;
var statearr_12311_12423 = state_12303__$1;
(statearr_12311_12423[(2)] = inst_12299);

(statearr_12311_12423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (8))){
var inst_12289 = (state_12303[(8)]);
var inst_12294 = (state_12303[(2)]);
var state_12303__$1 = (function (){var statearr_12312 = state_12303;
(statearr_12312[(9)] = inst_12294);

return statearr_12312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12303__$1,(9),results,inst_12289);
} else {
if((state_val_12304 === (9))){
var inst_12296 = (state_12303[(2)]);
var state_12303__$1 = (function (){var statearr_12313 = state_12303;
(statearr_12313[(10)] = inst_12296);

return statearr_12313;
})();
var statearr_12314_12424 = state_12303__$1;
(statearr_12314_12424[(2)] = null);

(statearr_12314_12424[(1)] = (2));


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
});})(c__11834__auto___12418,jobs,results,process,async))
;
return ((function (switch__11722__auto__,c__11834__auto___12418,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_12318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__);

(statearr_12318[(1)] = (1));

return statearr_12318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1 = (function (state_12303){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12319){if((e12319 instanceof Object)){
var ex__11726__auto__ = e12319;
var statearr_12320_12425 = state_12303;
(statearr_12320_12425[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12426 = state_12303;
state_12303 = G__12426;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = function(state_12303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1.call(this,state_12303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___12418,jobs,results,process,async))
})();
var state__11836__auto__ = (function (){var statearr_12321 = f__11835__auto__.call(null);
(statearr_12321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12418);

return statearr_12321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___12418,jobs,results,process,async))
);


var c__11834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto__,jobs,results,process,async){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto__,jobs,results,process,async){
return (function (state_12359){
var state_val_12360 = (state_12359[(1)]);
if((state_val_12360 === (7))){
var inst_12355 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12361_12427 = state_12359__$1;
(statearr_12361_12427[(2)] = inst_12355);

(statearr_12361_12427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (20))){
var state_12359__$1 = state_12359;
var statearr_12362_12428 = state_12359__$1;
(statearr_12362_12428[(2)] = null);

(statearr_12362_12428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (1))){
var state_12359__$1 = state_12359;
var statearr_12363_12429 = state_12359__$1;
(statearr_12363_12429[(2)] = null);

(statearr_12363_12429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (4))){
var inst_12324 = (state_12359[(7)]);
var inst_12324__$1 = (state_12359[(2)]);
var inst_12325 = (inst_12324__$1 == null);
var state_12359__$1 = (function (){var statearr_12364 = state_12359;
(statearr_12364[(7)] = inst_12324__$1);

return statearr_12364;
})();
if(cljs.core.truth_(inst_12325)){
var statearr_12365_12430 = state_12359__$1;
(statearr_12365_12430[(1)] = (5));

} else {
var statearr_12366_12431 = state_12359__$1;
(statearr_12366_12431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (15))){
var inst_12337 = (state_12359[(8)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12359__$1,(18),to,inst_12337);
} else {
if((state_val_12360 === (21))){
var inst_12350 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12367_12432 = state_12359__$1;
(statearr_12367_12432[(2)] = inst_12350);

(statearr_12367_12432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (13))){
var inst_12352 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12368 = state_12359;
(statearr_12368[(9)] = inst_12352);

return statearr_12368;
})();
var statearr_12369_12433 = state_12359__$1;
(statearr_12369_12433[(2)] = null);

(statearr_12369_12433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (6))){
var inst_12324 = (state_12359[(7)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12359__$1,(11),inst_12324);
} else {
if((state_val_12360 === (17))){
var inst_12345 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
if(cljs.core.truth_(inst_12345)){
var statearr_12370_12434 = state_12359__$1;
(statearr_12370_12434[(1)] = (19));

} else {
var statearr_12371_12435 = state_12359__$1;
(statearr_12371_12435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (3))){
var inst_12357 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12359__$1,inst_12357);
} else {
if((state_val_12360 === (12))){
var inst_12334 = (state_12359[(10)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12359__$1,(14),inst_12334);
} else {
if((state_val_12360 === (2))){
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12359__$1,(4),results);
} else {
if((state_val_12360 === (19))){
var state_12359__$1 = state_12359;
var statearr_12372_12436 = state_12359__$1;
(statearr_12372_12436[(2)] = null);

(statearr_12372_12436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (11))){
var inst_12334 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12373 = state_12359;
(statearr_12373[(10)] = inst_12334);

return statearr_12373;
})();
var statearr_12374_12437 = state_12359__$1;
(statearr_12374_12437[(2)] = null);

(statearr_12374_12437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (9))){
var state_12359__$1 = state_12359;
var statearr_12375_12438 = state_12359__$1;
(statearr_12375_12438[(2)] = null);

(statearr_12375_12438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (5))){
var state_12359__$1 = state_12359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12376_12439 = state_12359__$1;
(statearr_12376_12439[(1)] = (8));

} else {
var statearr_12377_12440 = state_12359__$1;
(statearr_12377_12440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (14))){
var inst_12339 = (state_12359[(11)]);
var inst_12337 = (state_12359[(8)]);
var inst_12337__$1 = (state_12359[(2)]);
var inst_12338 = (inst_12337__$1 == null);
var inst_12339__$1 = cljs.core.not.call(null,inst_12338);
var state_12359__$1 = (function (){var statearr_12378 = state_12359;
(statearr_12378[(11)] = inst_12339__$1);

(statearr_12378[(8)] = inst_12337__$1);

return statearr_12378;
})();
if(inst_12339__$1){
var statearr_12379_12441 = state_12359__$1;
(statearr_12379_12441[(1)] = (15));

} else {
var statearr_12380_12442 = state_12359__$1;
(statearr_12380_12442[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (16))){
var inst_12339 = (state_12359[(11)]);
var state_12359__$1 = state_12359;
var statearr_12381_12443 = state_12359__$1;
(statearr_12381_12443[(2)] = inst_12339);

(statearr_12381_12443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (10))){
var inst_12331 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12382_12444 = state_12359__$1;
(statearr_12382_12444[(2)] = inst_12331);

(statearr_12382_12444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (18))){
var inst_12342 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12383_12445 = state_12359__$1;
(statearr_12383_12445[(2)] = inst_12342);

(statearr_12383_12445[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (8))){
var inst_12328 = cljs.core.async.close_BANG_.call(null,to);
var state_12359__$1 = state_12359;
var statearr_12384_12446 = state_12359__$1;
(statearr_12384_12446[(2)] = inst_12328);

(statearr_12384_12446[(1)] = (10));


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
});})(c__11834__auto__,jobs,results,process,async))
;
return ((function (switch__11722__auto__,c__11834__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_12388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__);

(statearr_12388[(1)] = (1));

return statearr_12388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1 = (function (state_12359){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12389){if((e12389 instanceof Object)){
var ex__11726__auto__ = e12389;
var statearr_12390_12447 = state_12359;
(statearr_12390_12447[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12448 = state_12359;
state_12359 = G__12448;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__ = function(state_12359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1.call(this,state_12359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto__,jobs,results,process,async))
})();
var state__11836__auto__ = (function (){var statearr_12391 = f__11835__auto__.call(null);
(statearr_12391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto__);

return statearr_12391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto__,jobs,results,process,async))
);

return c__11834__auto__;
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
var args12449 = [];
var len__7326__auto___12452 = arguments.length;
var i__7327__auto___12453 = (0);
while(true){
if((i__7327__auto___12453 < len__7326__auto___12452)){
args12449.push((arguments[i__7327__auto___12453]));

var G__12454 = (i__7327__auto___12453 + (1));
i__7327__auto___12453 = G__12454;
continue;
} else {
}
break;
}

var G__12451 = args12449.length;
switch (G__12451) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12449.length)].join('')));

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
var args12456 = [];
var len__7326__auto___12459 = arguments.length;
var i__7327__auto___12460 = (0);
while(true){
if((i__7327__auto___12460 < len__7326__auto___12459)){
args12456.push((arguments[i__7327__auto___12460]));

var G__12461 = (i__7327__auto___12460 + (1));
i__7327__auto___12460 = G__12461;
continue;
} else {
}
break;
}

var G__12458 = args12456.length;
switch (G__12458) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12456.length)].join('')));

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
var args12463 = [];
var len__7326__auto___12516 = arguments.length;
var i__7327__auto___12517 = (0);
while(true){
if((i__7327__auto___12517 < len__7326__auto___12516)){
args12463.push((arguments[i__7327__auto___12517]));

var G__12518 = (i__7327__auto___12517 + (1));
i__7327__auto___12517 = G__12518;
continue;
} else {
}
break;
}

var G__12465 = args12463.length;
switch (G__12465) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12463.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11834__auto___12520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___12520,tc,fc){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___12520,tc,fc){
return (function (state_12491){
var state_val_12492 = (state_12491[(1)]);
if((state_val_12492 === (7))){
var inst_12487 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
var statearr_12493_12521 = state_12491__$1;
(statearr_12493_12521[(2)] = inst_12487);

(statearr_12493_12521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (1))){
var state_12491__$1 = state_12491;
var statearr_12494_12522 = state_12491__$1;
(statearr_12494_12522[(2)] = null);

(statearr_12494_12522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (4))){
var inst_12468 = (state_12491[(7)]);
var inst_12468__$1 = (state_12491[(2)]);
var inst_12469 = (inst_12468__$1 == null);
var state_12491__$1 = (function (){var statearr_12495 = state_12491;
(statearr_12495[(7)] = inst_12468__$1);

return statearr_12495;
})();
if(cljs.core.truth_(inst_12469)){
var statearr_12496_12523 = state_12491__$1;
(statearr_12496_12523[(1)] = (5));

} else {
var statearr_12497_12524 = state_12491__$1;
(statearr_12497_12524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (13))){
var state_12491__$1 = state_12491;
var statearr_12498_12525 = state_12491__$1;
(statearr_12498_12525[(2)] = null);

(statearr_12498_12525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (6))){
var inst_12468 = (state_12491[(7)]);
var inst_12474 = p.call(null,inst_12468);
var state_12491__$1 = state_12491;
if(cljs.core.truth_(inst_12474)){
var statearr_12499_12526 = state_12491__$1;
(statearr_12499_12526[(1)] = (9));

} else {
var statearr_12500_12527 = state_12491__$1;
(statearr_12500_12527[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (3))){
var inst_12489 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12491__$1,inst_12489);
} else {
if((state_val_12492 === (12))){
var state_12491__$1 = state_12491;
var statearr_12501_12528 = state_12491__$1;
(statearr_12501_12528[(2)] = null);

(statearr_12501_12528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (2))){
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12491__$1,(4),ch);
} else {
if((state_val_12492 === (11))){
var inst_12468 = (state_12491[(7)]);
var inst_12478 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12491__$1,(8),inst_12478,inst_12468);
} else {
if((state_val_12492 === (9))){
var state_12491__$1 = state_12491;
var statearr_12502_12529 = state_12491__$1;
(statearr_12502_12529[(2)] = tc);

(statearr_12502_12529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (5))){
var inst_12471 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12472 = cljs.core.async.close_BANG_.call(null,fc);
var state_12491__$1 = (function (){var statearr_12503 = state_12491;
(statearr_12503[(8)] = inst_12471);

return statearr_12503;
})();
var statearr_12504_12530 = state_12491__$1;
(statearr_12504_12530[(2)] = inst_12472);

(statearr_12504_12530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (14))){
var inst_12485 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
var statearr_12505_12531 = state_12491__$1;
(statearr_12505_12531[(2)] = inst_12485);

(statearr_12505_12531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (10))){
var state_12491__$1 = state_12491;
var statearr_12506_12532 = state_12491__$1;
(statearr_12506_12532[(2)] = fc);

(statearr_12506_12532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12492 === (8))){
var inst_12480 = (state_12491[(2)]);
var state_12491__$1 = state_12491;
if(cljs.core.truth_(inst_12480)){
var statearr_12507_12533 = state_12491__$1;
(statearr_12507_12533[(1)] = (12));

} else {
var statearr_12508_12534 = state_12491__$1;
(statearr_12508_12534[(1)] = (13));

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
});})(c__11834__auto___12520,tc,fc))
;
return ((function (switch__11722__auto__,c__11834__auto___12520,tc,fc){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_12512 = [null,null,null,null,null,null,null,null,null];
(statearr_12512[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_12512[(1)] = (1));

return statearr_12512;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_12491){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12513){if((e12513 instanceof Object)){
var ex__11726__auto__ = e12513;
var statearr_12514_12535 = state_12491;
(statearr_12514_12535[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12536 = state_12491;
state_12491 = G__12536;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_12491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_12491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___12520,tc,fc))
})();
var state__11836__auto__ = (function (){var statearr_12515 = f__11835__auto__.call(null);
(statearr_12515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___12520);

return statearr_12515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___12520,tc,fc))
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
var c__11834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto__){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto__){
return (function (state_12600){
var state_val_12601 = (state_12600[(1)]);
if((state_val_12601 === (7))){
var inst_12596 = (state_12600[(2)]);
var state_12600__$1 = state_12600;
var statearr_12602_12623 = state_12600__$1;
(statearr_12602_12623[(2)] = inst_12596);

(statearr_12602_12623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (1))){
var inst_12580 = init;
var state_12600__$1 = (function (){var statearr_12603 = state_12600;
(statearr_12603[(7)] = inst_12580);

return statearr_12603;
})();
var statearr_12604_12624 = state_12600__$1;
(statearr_12604_12624[(2)] = null);

(statearr_12604_12624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (4))){
var inst_12583 = (state_12600[(8)]);
var inst_12583__$1 = (state_12600[(2)]);
var inst_12584 = (inst_12583__$1 == null);
var state_12600__$1 = (function (){var statearr_12605 = state_12600;
(statearr_12605[(8)] = inst_12583__$1);

return statearr_12605;
})();
if(cljs.core.truth_(inst_12584)){
var statearr_12606_12625 = state_12600__$1;
(statearr_12606_12625[(1)] = (5));

} else {
var statearr_12607_12626 = state_12600__$1;
(statearr_12607_12626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (6))){
var inst_12587 = (state_12600[(9)]);
var inst_12583 = (state_12600[(8)]);
var inst_12580 = (state_12600[(7)]);
var inst_12587__$1 = f.call(null,inst_12580,inst_12583);
var inst_12588 = cljs.core.reduced_QMARK_.call(null,inst_12587__$1);
var state_12600__$1 = (function (){var statearr_12608 = state_12600;
(statearr_12608[(9)] = inst_12587__$1);

return statearr_12608;
})();
if(inst_12588){
var statearr_12609_12627 = state_12600__$1;
(statearr_12609_12627[(1)] = (8));

} else {
var statearr_12610_12628 = state_12600__$1;
(statearr_12610_12628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (3))){
var inst_12598 = (state_12600[(2)]);
var state_12600__$1 = state_12600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12600__$1,inst_12598);
} else {
if((state_val_12601 === (2))){
var state_12600__$1 = state_12600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12600__$1,(4),ch);
} else {
if((state_val_12601 === (9))){
var inst_12587 = (state_12600[(9)]);
var inst_12580 = inst_12587;
var state_12600__$1 = (function (){var statearr_12611 = state_12600;
(statearr_12611[(7)] = inst_12580);

return statearr_12611;
})();
var statearr_12612_12629 = state_12600__$1;
(statearr_12612_12629[(2)] = null);

(statearr_12612_12629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (5))){
var inst_12580 = (state_12600[(7)]);
var state_12600__$1 = state_12600;
var statearr_12613_12630 = state_12600__$1;
(statearr_12613_12630[(2)] = inst_12580);

(statearr_12613_12630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (10))){
var inst_12594 = (state_12600[(2)]);
var state_12600__$1 = state_12600;
var statearr_12614_12631 = state_12600__$1;
(statearr_12614_12631[(2)] = inst_12594);

(statearr_12614_12631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12601 === (8))){
var inst_12587 = (state_12600[(9)]);
var inst_12590 = cljs.core.deref.call(null,inst_12587);
var state_12600__$1 = state_12600;
var statearr_12615_12632 = state_12600__$1;
(statearr_12615_12632[(2)] = inst_12590);

(statearr_12615_12632[(1)] = (10));


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
});})(c__11834__auto__))
;
return ((function (switch__11722__auto__,c__11834__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11723__auto____0 = (function (){
var statearr_12619 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12619[(0)] = cljs$core$async$reduce_$_state_machine__11723__auto__);

(statearr_12619[(1)] = (1));

return statearr_12619;
});
var cljs$core$async$reduce_$_state_machine__11723__auto____1 = (function (state_12600){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12620){if((e12620 instanceof Object)){
var ex__11726__auto__ = e12620;
var statearr_12621_12633 = state_12600;
(statearr_12621_12633[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12634 = state_12600;
state_12600 = G__12634;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11723__auto__ = function(state_12600){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11723__auto____1.call(this,state_12600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11723__auto____0;
cljs$core$async$reduce_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11723__auto____1;
return cljs$core$async$reduce_$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto__))
})();
var state__11836__auto__ = (function (){var statearr_12622 = f__11835__auto__.call(null);
(statearr_12622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto__);

return statearr_12622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto__))
);

return c__11834__auto__;
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
var args12635 = [];
var len__7326__auto___12687 = arguments.length;
var i__7327__auto___12688 = (0);
while(true){
if((i__7327__auto___12688 < len__7326__auto___12687)){
args12635.push((arguments[i__7327__auto___12688]));

var G__12689 = (i__7327__auto___12688 + (1));
i__7327__auto___12688 = G__12689;
continue;
} else {
}
break;
}

var G__12637 = args12635.length;
switch (G__12637) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12635.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto__){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto__){
return (function (state_12662){
var state_val_12663 = (state_12662[(1)]);
if((state_val_12663 === (7))){
var inst_12644 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12664_12691 = state_12662__$1;
(statearr_12664_12691[(2)] = inst_12644);

(statearr_12664_12691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (1))){
var inst_12638 = cljs.core.seq.call(null,coll);
var inst_12639 = inst_12638;
var state_12662__$1 = (function (){var statearr_12665 = state_12662;
(statearr_12665[(7)] = inst_12639);

return statearr_12665;
})();
var statearr_12666_12692 = state_12662__$1;
(statearr_12666_12692[(2)] = null);

(statearr_12666_12692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (4))){
var inst_12639 = (state_12662[(7)]);
var inst_12642 = cljs.core.first.call(null,inst_12639);
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12662__$1,(7),ch,inst_12642);
} else {
if((state_val_12663 === (13))){
var inst_12656 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12667_12693 = state_12662__$1;
(statearr_12667_12693[(2)] = inst_12656);

(statearr_12667_12693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (6))){
var inst_12647 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
if(cljs.core.truth_(inst_12647)){
var statearr_12668_12694 = state_12662__$1;
(statearr_12668_12694[(1)] = (8));

} else {
var statearr_12669_12695 = state_12662__$1;
(statearr_12669_12695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (3))){
var inst_12660 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12662__$1,inst_12660);
} else {
if((state_val_12663 === (12))){
var state_12662__$1 = state_12662;
var statearr_12670_12696 = state_12662__$1;
(statearr_12670_12696[(2)] = null);

(statearr_12670_12696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (2))){
var inst_12639 = (state_12662[(7)]);
var state_12662__$1 = state_12662;
if(cljs.core.truth_(inst_12639)){
var statearr_12671_12697 = state_12662__$1;
(statearr_12671_12697[(1)] = (4));

} else {
var statearr_12672_12698 = state_12662__$1;
(statearr_12672_12698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (11))){
var inst_12653 = cljs.core.async.close_BANG_.call(null,ch);
var state_12662__$1 = state_12662;
var statearr_12673_12699 = state_12662__$1;
(statearr_12673_12699[(2)] = inst_12653);

(statearr_12673_12699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (9))){
var state_12662__$1 = state_12662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12674_12700 = state_12662__$1;
(statearr_12674_12700[(1)] = (11));

} else {
var statearr_12675_12701 = state_12662__$1;
(statearr_12675_12701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (5))){
var inst_12639 = (state_12662[(7)]);
var state_12662__$1 = state_12662;
var statearr_12676_12702 = state_12662__$1;
(statearr_12676_12702[(2)] = inst_12639);

(statearr_12676_12702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (10))){
var inst_12658 = (state_12662[(2)]);
var state_12662__$1 = state_12662;
var statearr_12677_12703 = state_12662__$1;
(statearr_12677_12703[(2)] = inst_12658);

(statearr_12677_12703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12663 === (8))){
var inst_12639 = (state_12662[(7)]);
var inst_12649 = cljs.core.next.call(null,inst_12639);
var inst_12639__$1 = inst_12649;
var state_12662__$1 = (function (){var statearr_12678 = state_12662;
(statearr_12678[(7)] = inst_12639__$1);

return statearr_12678;
})();
var statearr_12679_12704 = state_12662__$1;
(statearr_12679_12704[(2)] = null);

(statearr_12679_12704[(1)] = (2));


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
});})(c__11834__auto__))
;
return ((function (switch__11722__auto__,c__11834__auto__){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_12683 = [null,null,null,null,null,null,null,null];
(statearr_12683[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_12683[(1)] = (1));

return statearr_12683;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_12662){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_12662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e12684){if((e12684 instanceof Object)){
var ex__11726__auto__ = e12684;
var statearr_12685_12705 = state_12662;
(statearr_12685_12705[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12706 = state_12662;
state_12662 = G__12706;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_12662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_12662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto__))
})();
var state__11836__auto__ = (function (){var statearr_12686 = f__11835__auto__.call(null);
(statearr_12686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto__);

return statearr_12686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto__))
);

return c__11834__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async12932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12932 = (function (mult,ch,cs,meta12933){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12933 = meta12933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12934,meta12933__$1){
var self__ = this;
var _12934__$1 = this;
return (new cljs.core.async.t_cljs$core$async12932(self__.mult,self__.ch,self__.cs,meta12933__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12934){
var self__ = this;
var _12934__$1 = this;
return self__.meta12933;
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12933","meta12933",771388448,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12932";

cljs.core.async.t_cljs$core$async12932.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async12932");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12932 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12932(mult__$1,ch__$1,cs__$1,meta12933){
return (new cljs.core.async.t_cljs$core$async12932(mult__$1,ch__$1,cs__$1,meta12933));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12932(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11834__auto___13157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___13157,cs,m,dchan,dctr,done){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___13157,cs,m,dchan,dctr,done){
return (function (state_13069){
var state_val_13070 = (state_13069[(1)]);
if((state_val_13070 === (7))){
var inst_13065 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13071_13158 = state_13069__$1;
(statearr_13071_13158[(2)] = inst_13065);

(statearr_13071_13158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (20))){
var inst_12968 = (state_13069[(7)]);
var inst_12980 = cljs.core.first.call(null,inst_12968);
var inst_12981 = cljs.core.nth.call(null,inst_12980,(0),null);
var inst_12982 = cljs.core.nth.call(null,inst_12980,(1),null);
var state_13069__$1 = (function (){var statearr_13072 = state_13069;
(statearr_13072[(8)] = inst_12981);

return statearr_13072;
})();
if(cljs.core.truth_(inst_12982)){
var statearr_13073_13159 = state_13069__$1;
(statearr_13073_13159[(1)] = (22));

} else {
var statearr_13074_13160 = state_13069__$1;
(statearr_13074_13160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (27))){
var inst_12937 = (state_13069[(9)]);
var inst_13012 = (state_13069[(10)]);
var inst_13017 = (state_13069[(11)]);
var inst_13010 = (state_13069[(12)]);
var inst_13017__$1 = cljs.core._nth.call(null,inst_13010,inst_13012);
var inst_13018 = cljs.core.async.put_BANG_.call(null,inst_13017__$1,inst_12937,done);
var state_13069__$1 = (function (){var statearr_13075 = state_13069;
(statearr_13075[(11)] = inst_13017__$1);

return statearr_13075;
})();
if(cljs.core.truth_(inst_13018)){
var statearr_13076_13161 = state_13069__$1;
(statearr_13076_13161[(1)] = (30));

} else {
var statearr_13077_13162 = state_13069__$1;
(statearr_13077_13162[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (1))){
var state_13069__$1 = state_13069;
var statearr_13078_13163 = state_13069__$1;
(statearr_13078_13163[(2)] = null);

(statearr_13078_13163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (24))){
var inst_12968 = (state_13069[(7)]);
var inst_12987 = (state_13069[(2)]);
var inst_12988 = cljs.core.next.call(null,inst_12968);
var inst_12946 = inst_12988;
var inst_12947 = null;
var inst_12948 = (0);
var inst_12949 = (0);
var state_13069__$1 = (function (){var statearr_13079 = state_13069;
(statearr_13079[(13)] = inst_12947);

(statearr_13079[(14)] = inst_12948);

(statearr_13079[(15)] = inst_12946);

(statearr_13079[(16)] = inst_12987);

(statearr_13079[(17)] = inst_12949);

return statearr_13079;
})();
var statearr_13080_13164 = state_13069__$1;
(statearr_13080_13164[(2)] = null);

(statearr_13080_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (39))){
var state_13069__$1 = state_13069;
var statearr_13084_13165 = state_13069__$1;
(statearr_13084_13165[(2)] = null);

(statearr_13084_13165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (4))){
var inst_12937 = (state_13069[(9)]);
var inst_12937__$1 = (state_13069[(2)]);
var inst_12938 = (inst_12937__$1 == null);
var state_13069__$1 = (function (){var statearr_13085 = state_13069;
(statearr_13085[(9)] = inst_12937__$1);

return statearr_13085;
})();
if(cljs.core.truth_(inst_12938)){
var statearr_13086_13166 = state_13069__$1;
(statearr_13086_13166[(1)] = (5));

} else {
var statearr_13087_13167 = state_13069__$1;
(statearr_13087_13167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (15))){
var inst_12947 = (state_13069[(13)]);
var inst_12948 = (state_13069[(14)]);
var inst_12946 = (state_13069[(15)]);
var inst_12949 = (state_13069[(17)]);
var inst_12964 = (state_13069[(2)]);
var inst_12965 = (inst_12949 + (1));
var tmp13081 = inst_12947;
var tmp13082 = inst_12948;
var tmp13083 = inst_12946;
var inst_12946__$1 = tmp13083;
var inst_12947__$1 = tmp13081;
var inst_12948__$1 = tmp13082;
var inst_12949__$1 = inst_12965;
var state_13069__$1 = (function (){var statearr_13088 = state_13069;
(statearr_13088[(13)] = inst_12947__$1);

(statearr_13088[(14)] = inst_12948__$1);

(statearr_13088[(18)] = inst_12964);

(statearr_13088[(15)] = inst_12946__$1);

(statearr_13088[(17)] = inst_12949__$1);

return statearr_13088;
})();
var statearr_13089_13168 = state_13069__$1;
(statearr_13089_13168[(2)] = null);

(statearr_13089_13168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (21))){
var inst_12991 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13093_13169 = state_13069__$1;
(statearr_13093_13169[(2)] = inst_12991);

(statearr_13093_13169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (31))){
var inst_13017 = (state_13069[(11)]);
var inst_13021 = done.call(null,null);
var inst_13022 = cljs.core.async.untap_STAR_.call(null,m,inst_13017);
var state_13069__$1 = (function (){var statearr_13094 = state_13069;
(statearr_13094[(19)] = inst_13021);

return statearr_13094;
})();
var statearr_13095_13170 = state_13069__$1;
(statearr_13095_13170[(2)] = inst_13022);

(statearr_13095_13170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (32))){
var inst_13009 = (state_13069[(20)]);
var inst_13011 = (state_13069[(21)]);
var inst_13012 = (state_13069[(10)]);
var inst_13010 = (state_13069[(12)]);
var inst_13024 = (state_13069[(2)]);
var inst_13025 = (inst_13012 + (1));
var tmp13090 = inst_13009;
var tmp13091 = inst_13011;
var tmp13092 = inst_13010;
var inst_13009__$1 = tmp13090;
var inst_13010__$1 = tmp13092;
var inst_13011__$1 = tmp13091;
var inst_13012__$1 = inst_13025;
var state_13069__$1 = (function (){var statearr_13096 = state_13069;
(statearr_13096[(20)] = inst_13009__$1);

(statearr_13096[(21)] = inst_13011__$1);

(statearr_13096[(10)] = inst_13012__$1);

(statearr_13096[(12)] = inst_13010__$1);

(statearr_13096[(22)] = inst_13024);

return statearr_13096;
})();
var statearr_13097_13171 = state_13069__$1;
(statearr_13097_13171[(2)] = null);

(statearr_13097_13171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (40))){
var inst_13037 = (state_13069[(23)]);
var inst_13041 = done.call(null,null);
var inst_13042 = cljs.core.async.untap_STAR_.call(null,m,inst_13037);
var state_13069__$1 = (function (){var statearr_13098 = state_13069;
(statearr_13098[(24)] = inst_13041);

return statearr_13098;
})();
var statearr_13099_13172 = state_13069__$1;
(statearr_13099_13172[(2)] = inst_13042);

(statearr_13099_13172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (33))){
var inst_13028 = (state_13069[(25)]);
var inst_13030 = cljs.core.chunked_seq_QMARK_.call(null,inst_13028);
var state_13069__$1 = state_13069;
if(inst_13030){
var statearr_13100_13173 = state_13069__$1;
(statearr_13100_13173[(1)] = (36));

} else {
var statearr_13101_13174 = state_13069__$1;
(statearr_13101_13174[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (13))){
var inst_12958 = (state_13069[(26)]);
var inst_12961 = cljs.core.async.close_BANG_.call(null,inst_12958);
var state_13069__$1 = state_13069;
var statearr_13102_13175 = state_13069__$1;
(statearr_13102_13175[(2)] = inst_12961);

(statearr_13102_13175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (22))){
var inst_12981 = (state_13069[(8)]);
var inst_12984 = cljs.core.async.close_BANG_.call(null,inst_12981);
var state_13069__$1 = state_13069;
var statearr_13103_13176 = state_13069__$1;
(statearr_13103_13176[(2)] = inst_12984);

(statearr_13103_13176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (36))){
var inst_13028 = (state_13069[(25)]);
var inst_13032 = cljs.core.chunk_first.call(null,inst_13028);
var inst_13033 = cljs.core.chunk_rest.call(null,inst_13028);
var inst_13034 = cljs.core.count.call(null,inst_13032);
var inst_13009 = inst_13033;
var inst_13010 = inst_13032;
var inst_13011 = inst_13034;
var inst_13012 = (0);
var state_13069__$1 = (function (){var statearr_13104 = state_13069;
(statearr_13104[(20)] = inst_13009);

(statearr_13104[(21)] = inst_13011);

(statearr_13104[(10)] = inst_13012);

(statearr_13104[(12)] = inst_13010);

return statearr_13104;
})();
var statearr_13105_13177 = state_13069__$1;
(statearr_13105_13177[(2)] = null);

(statearr_13105_13177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (41))){
var inst_13028 = (state_13069[(25)]);
var inst_13044 = (state_13069[(2)]);
var inst_13045 = cljs.core.next.call(null,inst_13028);
var inst_13009 = inst_13045;
var inst_13010 = null;
var inst_13011 = (0);
var inst_13012 = (0);
var state_13069__$1 = (function (){var statearr_13106 = state_13069;
(statearr_13106[(20)] = inst_13009);

(statearr_13106[(21)] = inst_13011);

(statearr_13106[(10)] = inst_13012);

(statearr_13106[(12)] = inst_13010);

(statearr_13106[(27)] = inst_13044);

return statearr_13106;
})();
var statearr_13107_13178 = state_13069__$1;
(statearr_13107_13178[(2)] = null);

(statearr_13107_13178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (43))){
var state_13069__$1 = state_13069;
var statearr_13108_13179 = state_13069__$1;
(statearr_13108_13179[(2)] = null);

(statearr_13108_13179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (29))){
var inst_13053 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13109_13180 = state_13069__$1;
(statearr_13109_13180[(2)] = inst_13053);

(statearr_13109_13180[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (44))){
var inst_13062 = (state_13069[(2)]);
var state_13069__$1 = (function (){var statearr_13110 = state_13069;
(statearr_13110[(28)] = inst_13062);

return statearr_13110;
})();
var statearr_13111_13181 = state_13069__$1;
(statearr_13111_13181[(2)] = null);

(statearr_13111_13181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (6))){
var inst_13001 = (state_13069[(29)]);
var inst_13000 = cljs.core.deref.call(null,cs);
var inst_13001__$1 = cljs.core.keys.call(null,inst_13000);
var inst_13002 = cljs.core.count.call(null,inst_13001__$1);
var inst_13003 = cljs.core.reset_BANG_.call(null,dctr,inst_13002);
var inst_13008 = cljs.core.seq.call(null,inst_13001__$1);
var inst_13009 = inst_13008;
var inst_13010 = null;
var inst_13011 = (0);
var inst_13012 = (0);
var state_13069__$1 = (function (){var statearr_13112 = state_13069;
(statearr_13112[(20)] = inst_13009);

(statearr_13112[(21)] = inst_13011);

(statearr_13112[(30)] = inst_13003);

(statearr_13112[(29)] = inst_13001__$1);

(statearr_13112[(10)] = inst_13012);

(statearr_13112[(12)] = inst_13010);

return statearr_13112;
})();
var statearr_13113_13182 = state_13069__$1;
(statearr_13113_13182[(2)] = null);

(statearr_13113_13182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (28))){
var inst_13028 = (state_13069[(25)]);
var inst_13009 = (state_13069[(20)]);
var inst_13028__$1 = cljs.core.seq.call(null,inst_13009);
var state_13069__$1 = (function (){var statearr_13114 = state_13069;
(statearr_13114[(25)] = inst_13028__$1);

return statearr_13114;
})();
if(inst_13028__$1){
var statearr_13115_13183 = state_13069__$1;
(statearr_13115_13183[(1)] = (33));

} else {
var statearr_13116_13184 = state_13069__$1;
(statearr_13116_13184[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (25))){
var inst_13011 = (state_13069[(21)]);
var inst_13012 = (state_13069[(10)]);
var inst_13014 = (inst_13012 < inst_13011);
var inst_13015 = inst_13014;
var state_13069__$1 = state_13069;
if(cljs.core.truth_(inst_13015)){
var statearr_13117_13185 = state_13069__$1;
(statearr_13117_13185[(1)] = (27));

} else {
var statearr_13118_13186 = state_13069__$1;
(statearr_13118_13186[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (34))){
var state_13069__$1 = state_13069;
var statearr_13119_13187 = state_13069__$1;
(statearr_13119_13187[(2)] = null);

(statearr_13119_13187[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (17))){
var state_13069__$1 = state_13069;
var statearr_13120_13188 = state_13069__$1;
(statearr_13120_13188[(2)] = null);

(statearr_13120_13188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (3))){
var inst_13067 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13069__$1,inst_13067);
} else {
if((state_val_13070 === (12))){
var inst_12996 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13121_13189 = state_13069__$1;
(statearr_13121_13189[(2)] = inst_12996);

(statearr_13121_13189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (2))){
var state_13069__$1 = state_13069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13069__$1,(4),ch);
} else {
if((state_val_13070 === (23))){
var state_13069__$1 = state_13069;
var statearr_13122_13190 = state_13069__$1;
(statearr_13122_13190[(2)] = null);

(statearr_13122_13190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (35))){
var inst_13051 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13123_13191 = state_13069__$1;
(statearr_13123_13191[(2)] = inst_13051);

(statearr_13123_13191[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (19))){
var inst_12968 = (state_13069[(7)]);
var inst_12972 = cljs.core.chunk_first.call(null,inst_12968);
var inst_12973 = cljs.core.chunk_rest.call(null,inst_12968);
var inst_12974 = cljs.core.count.call(null,inst_12972);
var inst_12946 = inst_12973;
var inst_12947 = inst_12972;
var inst_12948 = inst_12974;
var inst_12949 = (0);
var state_13069__$1 = (function (){var statearr_13124 = state_13069;
(statearr_13124[(13)] = inst_12947);

(statearr_13124[(14)] = inst_12948);

(statearr_13124[(15)] = inst_12946);

(statearr_13124[(17)] = inst_12949);

return statearr_13124;
})();
var statearr_13125_13192 = state_13069__$1;
(statearr_13125_13192[(2)] = null);

(statearr_13125_13192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (11))){
var inst_12946 = (state_13069[(15)]);
var inst_12968 = (state_13069[(7)]);
var inst_12968__$1 = cljs.core.seq.call(null,inst_12946);
var state_13069__$1 = (function (){var statearr_13126 = state_13069;
(statearr_13126[(7)] = inst_12968__$1);

return statearr_13126;
})();
if(inst_12968__$1){
var statearr_13127_13193 = state_13069__$1;
(statearr_13127_13193[(1)] = (16));

} else {
var statearr_13128_13194 = state_13069__$1;
(statearr_13128_13194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (9))){
var inst_12998 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13129_13195 = state_13069__$1;
(statearr_13129_13195[(2)] = inst_12998);

(statearr_13129_13195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (5))){
var inst_12944 = cljs.core.deref.call(null,cs);
var inst_12945 = cljs.core.seq.call(null,inst_12944);
var inst_12946 = inst_12945;
var inst_12947 = null;
var inst_12948 = (0);
var inst_12949 = (0);
var state_13069__$1 = (function (){var statearr_13130 = state_13069;
(statearr_13130[(13)] = inst_12947);

(statearr_13130[(14)] = inst_12948);

(statearr_13130[(15)] = inst_12946);

(statearr_13130[(17)] = inst_12949);

return statearr_13130;
})();
var statearr_13131_13196 = state_13069__$1;
(statearr_13131_13196[(2)] = null);

(statearr_13131_13196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (14))){
var state_13069__$1 = state_13069;
var statearr_13132_13197 = state_13069__$1;
(statearr_13132_13197[(2)] = null);

(statearr_13132_13197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (45))){
var inst_13059 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13133_13198 = state_13069__$1;
(statearr_13133_13198[(2)] = inst_13059);

(statearr_13133_13198[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (26))){
var inst_13001 = (state_13069[(29)]);
var inst_13055 = (state_13069[(2)]);
var inst_13056 = cljs.core.seq.call(null,inst_13001);
var state_13069__$1 = (function (){var statearr_13134 = state_13069;
(statearr_13134[(31)] = inst_13055);

return statearr_13134;
})();
if(inst_13056){
var statearr_13135_13199 = state_13069__$1;
(statearr_13135_13199[(1)] = (42));

} else {
var statearr_13136_13200 = state_13069__$1;
(statearr_13136_13200[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (16))){
var inst_12968 = (state_13069[(7)]);
var inst_12970 = cljs.core.chunked_seq_QMARK_.call(null,inst_12968);
var state_13069__$1 = state_13069;
if(inst_12970){
var statearr_13137_13201 = state_13069__$1;
(statearr_13137_13201[(1)] = (19));

} else {
var statearr_13138_13202 = state_13069__$1;
(statearr_13138_13202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (38))){
var inst_13048 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13139_13203 = state_13069__$1;
(statearr_13139_13203[(2)] = inst_13048);

(statearr_13139_13203[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (30))){
var state_13069__$1 = state_13069;
var statearr_13140_13204 = state_13069__$1;
(statearr_13140_13204[(2)] = null);

(statearr_13140_13204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (10))){
var inst_12947 = (state_13069[(13)]);
var inst_12949 = (state_13069[(17)]);
var inst_12957 = cljs.core._nth.call(null,inst_12947,inst_12949);
var inst_12958 = cljs.core.nth.call(null,inst_12957,(0),null);
var inst_12959 = cljs.core.nth.call(null,inst_12957,(1),null);
var state_13069__$1 = (function (){var statearr_13141 = state_13069;
(statearr_13141[(26)] = inst_12958);

return statearr_13141;
})();
if(cljs.core.truth_(inst_12959)){
var statearr_13142_13205 = state_13069__$1;
(statearr_13142_13205[(1)] = (13));

} else {
var statearr_13143_13206 = state_13069__$1;
(statearr_13143_13206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (18))){
var inst_12994 = (state_13069[(2)]);
var state_13069__$1 = state_13069;
var statearr_13144_13207 = state_13069__$1;
(statearr_13144_13207[(2)] = inst_12994);

(statearr_13144_13207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (42))){
var state_13069__$1 = state_13069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13069__$1,(45),dchan);
} else {
if((state_val_13070 === (37))){
var inst_13028 = (state_13069[(25)]);
var inst_12937 = (state_13069[(9)]);
var inst_13037 = (state_13069[(23)]);
var inst_13037__$1 = cljs.core.first.call(null,inst_13028);
var inst_13038 = cljs.core.async.put_BANG_.call(null,inst_13037__$1,inst_12937,done);
var state_13069__$1 = (function (){var statearr_13145 = state_13069;
(statearr_13145[(23)] = inst_13037__$1);

return statearr_13145;
})();
if(cljs.core.truth_(inst_13038)){
var statearr_13146_13208 = state_13069__$1;
(statearr_13146_13208[(1)] = (39));

} else {
var statearr_13147_13209 = state_13069__$1;
(statearr_13147_13209[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13070 === (8))){
var inst_12948 = (state_13069[(14)]);
var inst_12949 = (state_13069[(17)]);
var inst_12951 = (inst_12949 < inst_12948);
var inst_12952 = inst_12951;
var state_13069__$1 = state_13069;
if(cljs.core.truth_(inst_12952)){
var statearr_13148_13210 = state_13069__$1;
(statearr_13148_13210[(1)] = (10));

} else {
var statearr_13149_13211 = state_13069__$1;
(statearr_13149_13211[(1)] = (11));

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
});})(c__11834__auto___13157,cs,m,dchan,dctr,done))
;
return ((function (switch__11722__auto__,c__11834__auto___13157,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11723__auto__ = null;
var cljs$core$async$mult_$_state_machine__11723__auto____0 = (function (){
var statearr_13153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13153[(0)] = cljs$core$async$mult_$_state_machine__11723__auto__);

(statearr_13153[(1)] = (1));

return statearr_13153;
});
var cljs$core$async$mult_$_state_machine__11723__auto____1 = (function (state_13069){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e13154){if((e13154 instanceof Object)){
var ex__11726__auto__ = e13154;
var statearr_13155_13212 = state_13069;
(statearr_13155_13212[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13213 = state_13069;
state_13069 = G__13213;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11723__auto__ = function(state_13069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11723__auto____1.call(this,state_13069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11723__auto____0;
cljs$core$async$mult_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11723__auto____1;
return cljs$core$async$mult_$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___13157,cs,m,dchan,dctr,done))
})();
var state__11836__auto__ = (function (){var statearr_13156 = f__11835__auto__.call(null);
(statearr_13156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___13157);

return statearr_13156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___13157,cs,m,dchan,dctr,done))
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
var args13214 = [];
var len__7326__auto___13217 = arguments.length;
var i__7327__auto___13218 = (0);
while(true){
if((i__7327__auto___13218 < len__7326__auto___13217)){
args13214.push((arguments[i__7327__auto___13218]));

var G__13219 = (i__7327__auto___13218 + (1));
i__7327__auto___13218 = G__13219;
continue;
} else {
}
break;
}

var G__13216 = args13214.length;
switch (G__13216) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13214.length)].join('')));

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
var len__7326__auto___13231 = arguments.length;
var i__7327__auto___13232 = (0);
while(true){
if((i__7327__auto___13232 < len__7326__auto___13231)){
args__7333__auto__.push((arguments[i__7327__auto___13232]));

var G__13233 = (i__7327__auto___13232 + (1));
i__7327__auto___13232 = G__13233;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13225){
var map__13226 = p__13225;
var map__13226__$1 = ((((!((map__13226 == null)))?((((map__13226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13226):map__13226);
var opts = map__13226__$1;
var statearr_13228_13234 = state;
(statearr_13228_13234[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13226,map__13226__$1,opts){
return (function (val){
var statearr_13229_13235 = state;
(statearr_13229_13235[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13226,map__13226__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13230_13236 = state;
(statearr_13230_13236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13221){
var G__13222 = cljs.core.first.call(null,seq13221);
var seq13221__$1 = cljs.core.next.call(null,seq13221);
var G__13223 = cljs.core.first.call(null,seq13221__$1);
var seq13221__$2 = cljs.core.next.call(null,seq13221__$1);
var G__13224 = cljs.core.first.call(null,seq13221__$2);
var seq13221__$3 = cljs.core.next.call(null,seq13221__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13222,G__13223,G__13224,seq13221__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13402 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13403){
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
this.meta13403 = meta13403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13404,meta13403__$1){
var self__ = this;
var _13404__$1 = this;
return (new cljs.core.async.t_cljs$core$async13402(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13403__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13404){
var self__ = this;
var _13404__$1 = this;
return self__.meta13403;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13402.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13403","meta13403",1564401901,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13402";

cljs.core.async.t_cljs$core$async13402.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13402");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13402 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13402(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13403){
return (new cljs.core.async.t_cljs$core$async13402(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13403));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13402(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11834__auto___13567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13504){
var state_val_13505 = (state_13504[(1)]);
if((state_val_13505 === (7))){
var inst_13420 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13506_13568 = state_13504__$1;
(statearr_13506_13568[(2)] = inst_13420);

(statearr_13506_13568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (20))){
var inst_13432 = (state_13504[(7)]);
var state_13504__$1 = state_13504;
var statearr_13507_13569 = state_13504__$1;
(statearr_13507_13569[(2)] = inst_13432);

(statearr_13507_13569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (27))){
var state_13504__$1 = state_13504;
var statearr_13508_13570 = state_13504__$1;
(statearr_13508_13570[(2)] = null);

(statearr_13508_13570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (1))){
var inst_13408 = (state_13504[(8)]);
var inst_13408__$1 = calc_state.call(null);
var inst_13410 = (inst_13408__$1 == null);
var inst_13411 = cljs.core.not.call(null,inst_13410);
var state_13504__$1 = (function (){var statearr_13509 = state_13504;
(statearr_13509[(8)] = inst_13408__$1);

return statearr_13509;
})();
if(inst_13411){
var statearr_13510_13571 = state_13504__$1;
(statearr_13510_13571[(1)] = (2));

} else {
var statearr_13511_13572 = state_13504__$1;
(statearr_13511_13572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (24))){
var inst_13455 = (state_13504[(9)]);
var inst_13464 = (state_13504[(10)]);
var inst_13478 = (state_13504[(11)]);
var inst_13478__$1 = inst_13455.call(null,inst_13464);
var state_13504__$1 = (function (){var statearr_13512 = state_13504;
(statearr_13512[(11)] = inst_13478__$1);

return statearr_13512;
})();
if(cljs.core.truth_(inst_13478__$1)){
var statearr_13513_13573 = state_13504__$1;
(statearr_13513_13573[(1)] = (29));

} else {
var statearr_13514_13574 = state_13504__$1;
(statearr_13514_13574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (4))){
var inst_13423 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13423)){
var statearr_13515_13575 = state_13504__$1;
(statearr_13515_13575[(1)] = (8));

} else {
var statearr_13516_13576 = state_13504__$1;
(statearr_13516_13576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (15))){
var inst_13449 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13449)){
var statearr_13517_13577 = state_13504__$1;
(statearr_13517_13577[(1)] = (19));

} else {
var statearr_13518_13578 = state_13504__$1;
(statearr_13518_13578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (21))){
var inst_13454 = (state_13504[(12)]);
var inst_13454__$1 = (state_13504[(2)]);
var inst_13455 = cljs.core.get.call(null,inst_13454__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13456 = cljs.core.get.call(null,inst_13454__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13457 = cljs.core.get.call(null,inst_13454__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13504__$1 = (function (){var statearr_13519 = state_13504;
(statearr_13519[(13)] = inst_13456);

(statearr_13519[(12)] = inst_13454__$1);

(statearr_13519[(9)] = inst_13455);

return statearr_13519;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13504__$1,(22),inst_13457);
} else {
if((state_val_13505 === (31))){
var inst_13486 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13486)){
var statearr_13520_13579 = state_13504__$1;
(statearr_13520_13579[(1)] = (32));

} else {
var statearr_13521_13580 = state_13504__$1;
(statearr_13521_13580[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (32))){
var inst_13463 = (state_13504[(14)]);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13504__$1,(35),out,inst_13463);
} else {
if((state_val_13505 === (33))){
var inst_13454 = (state_13504[(12)]);
var inst_13432 = inst_13454;
var state_13504__$1 = (function (){var statearr_13522 = state_13504;
(statearr_13522[(7)] = inst_13432);

return statearr_13522;
})();
var statearr_13523_13581 = state_13504__$1;
(statearr_13523_13581[(2)] = null);

(statearr_13523_13581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (13))){
var inst_13432 = (state_13504[(7)]);
var inst_13439 = inst_13432.cljs$lang$protocol_mask$partition0$;
var inst_13440 = (inst_13439 & (64));
var inst_13441 = inst_13432.cljs$core$ISeq$;
var inst_13442 = (inst_13440) || (inst_13441);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13442)){
var statearr_13524_13582 = state_13504__$1;
(statearr_13524_13582[(1)] = (16));

} else {
var statearr_13525_13583 = state_13504__$1;
(statearr_13525_13583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (22))){
var inst_13463 = (state_13504[(14)]);
var inst_13464 = (state_13504[(10)]);
var inst_13462 = (state_13504[(2)]);
var inst_13463__$1 = cljs.core.nth.call(null,inst_13462,(0),null);
var inst_13464__$1 = cljs.core.nth.call(null,inst_13462,(1),null);
var inst_13465 = (inst_13463__$1 == null);
var inst_13466 = cljs.core._EQ_.call(null,inst_13464__$1,change);
var inst_13467 = (inst_13465) || (inst_13466);
var state_13504__$1 = (function (){var statearr_13526 = state_13504;
(statearr_13526[(14)] = inst_13463__$1);

(statearr_13526[(10)] = inst_13464__$1);

return statearr_13526;
})();
if(cljs.core.truth_(inst_13467)){
var statearr_13527_13584 = state_13504__$1;
(statearr_13527_13584[(1)] = (23));

} else {
var statearr_13528_13585 = state_13504__$1;
(statearr_13528_13585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (36))){
var inst_13454 = (state_13504[(12)]);
var inst_13432 = inst_13454;
var state_13504__$1 = (function (){var statearr_13529 = state_13504;
(statearr_13529[(7)] = inst_13432);

return statearr_13529;
})();
var statearr_13530_13586 = state_13504__$1;
(statearr_13530_13586[(2)] = null);

(statearr_13530_13586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (29))){
var inst_13478 = (state_13504[(11)]);
var state_13504__$1 = state_13504;
var statearr_13531_13587 = state_13504__$1;
(statearr_13531_13587[(2)] = inst_13478);

(statearr_13531_13587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (6))){
var state_13504__$1 = state_13504;
var statearr_13532_13588 = state_13504__$1;
(statearr_13532_13588[(2)] = false);

(statearr_13532_13588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (28))){
var inst_13474 = (state_13504[(2)]);
var inst_13475 = calc_state.call(null);
var inst_13432 = inst_13475;
var state_13504__$1 = (function (){var statearr_13533 = state_13504;
(statearr_13533[(7)] = inst_13432);

(statearr_13533[(15)] = inst_13474);

return statearr_13533;
})();
var statearr_13534_13589 = state_13504__$1;
(statearr_13534_13589[(2)] = null);

(statearr_13534_13589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (25))){
var inst_13500 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13535_13590 = state_13504__$1;
(statearr_13535_13590[(2)] = inst_13500);

(statearr_13535_13590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (34))){
var inst_13498 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13536_13591 = state_13504__$1;
(statearr_13536_13591[(2)] = inst_13498);

(statearr_13536_13591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (17))){
var state_13504__$1 = state_13504;
var statearr_13537_13592 = state_13504__$1;
(statearr_13537_13592[(2)] = false);

(statearr_13537_13592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (3))){
var state_13504__$1 = state_13504;
var statearr_13538_13593 = state_13504__$1;
(statearr_13538_13593[(2)] = false);

(statearr_13538_13593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (12))){
var inst_13502 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13504__$1,inst_13502);
} else {
if((state_val_13505 === (2))){
var inst_13408 = (state_13504[(8)]);
var inst_13413 = inst_13408.cljs$lang$protocol_mask$partition0$;
var inst_13414 = (inst_13413 & (64));
var inst_13415 = inst_13408.cljs$core$ISeq$;
var inst_13416 = (inst_13414) || (inst_13415);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13416)){
var statearr_13539_13594 = state_13504__$1;
(statearr_13539_13594[(1)] = (5));

} else {
var statearr_13540_13595 = state_13504__$1;
(statearr_13540_13595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (23))){
var inst_13463 = (state_13504[(14)]);
var inst_13469 = (inst_13463 == null);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13469)){
var statearr_13541_13596 = state_13504__$1;
(statearr_13541_13596[(1)] = (26));

} else {
var statearr_13542_13597 = state_13504__$1;
(statearr_13542_13597[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (35))){
var inst_13489 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13489)){
var statearr_13543_13598 = state_13504__$1;
(statearr_13543_13598[(1)] = (36));

} else {
var statearr_13544_13599 = state_13504__$1;
(statearr_13544_13599[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (19))){
var inst_13432 = (state_13504[(7)]);
var inst_13451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13432);
var state_13504__$1 = state_13504;
var statearr_13545_13600 = state_13504__$1;
(statearr_13545_13600[(2)] = inst_13451);

(statearr_13545_13600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (11))){
var inst_13432 = (state_13504[(7)]);
var inst_13436 = (inst_13432 == null);
var inst_13437 = cljs.core.not.call(null,inst_13436);
var state_13504__$1 = state_13504;
if(inst_13437){
var statearr_13546_13601 = state_13504__$1;
(statearr_13546_13601[(1)] = (13));

} else {
var statearr_13547_13602 = state_13504__$1;
(statearr_13547_13602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (9))){
var inst_13408 = (state_13504[(8)]);
var state_13504__$1 = state_13504;
var statearr_13548_13603 = state_13504__$1;
(statearr_13548_13603[(2)] = inst_13408);

(statearr_13548_13603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (5))){
var state_13504__$1 = state_13504;
var statearr_13549_13604 = state_13504__$1;
(statearr_13549_13604[(2)] = true);

(statearr_13549_13604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (14))){
var state_13504__$1 = state_13504;
var statearr_13550_13605 = state_13504__$1;
(statearr_13550_13605[(2)] = false);

(statearr_13550_13605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (26))){
var inst_13464 = (state_13504[(10)]);
var inst_13471 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13464);
var state_13504__$1 = state_13504;
var statearr_13551_13606 = state_13504__$1;
(statearr_13551_13606[(2)] = inst_13471);

(statearr_13551_13606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (16))){
var state_13504__$1 = state_13504;
var statearr_13552_13607 = state_13504__$1;
(statearr_13552_13607[(2)] = true);

(statearr_13552_13607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (38))){
var inst_13494 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13553_13608 = state_13504__$1;
(statearr_13553_13608[(2)] = inst_13494);

(statearr_13553_13608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (30))){
var inst_13456 = (state_13504[(13)]);
var inst_13455 = (state_13504[(9)]);
var inst_13464 = (state_13504[(10)]);
var inst_13481 = cljs.core.empty_QMARK_.call(null,inst_13455);
var inst_13482 = inst_13456.call(null,inst_13464);
var inst_13483 = cljs.core.not.call(null,inst_13482);
var inst_13484 = (inst_13481) && (inst_13483);
var state_13504__$1 = state_13504;
var statearr_13554_13609 = state_13504__$1;
(statearr_13554_13609[(2)] = inst_13484);

(statearr_13554_13609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (10))){
var inst_13408 = (state_13504[(8)]);
var inst_13428 = (state_13504[(2)]);
var inst_13429 = cljs.core.get.call(null,inst_13428,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13430 = cljs.core.get.call(null,inst_13428,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13431 = cljs.core.get.call(null,inst_13428,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13432 = inst_13408;
var state_13504__$1 = (function (){var statearr_13555 = state_13504;
(statearr_13555[(7)] = inst_13432);

(statearr_13555[(16)] = inst_13429);

(statearr_13555[(17)] = inst_13430);

(statearr_13555[(18)] = inst_13431);

return statearr_13555;
})();
var statearr_13556_13610 = state_13504__$1;
(statearr_13556_13610[(2)] = null);

(statearr_13556_13610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (18))){
var inst_13446 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13557_13611 = state_13504__$1;
(statearr_13557_13611[(2)] = inst_13446);

(statearr_13557_13611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (37))){
var state_13504__$1 = state_13504;
var statearr_13558_13612 = state_13504__$1;
(statearr_13558_13612[(2)] = null);

(statearr_13558_13612[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (8))){
var inst_13408 = (state_13504[(8)]);
var inst_13425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13408);
var state_13504__$1 = state_13504;
var statearr_13559_13613 = state_13504__$1;
(statearr_13559_13613[(2)] = inst_13425);

(statearr_13559_13613[(1)] = (10));


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
});})(c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11722__auto__,c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11723__auto__ = null;
var cljs$core$async$mix_$_state_machine__11723__auto____0 = (function (){
var statearr_13563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13563[(0)] = cljs$core$async$mix_$_state_machine__11723__auto__);

(statearr_13563[(1)] = (1));

return statearr_13563;
});
var cljs$core$async$mix_$_state_machine__11723__auto____1 = (function (state_13504){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e13564){if((e13564 instanceof Object)){
var ex__11726__auto__ = e13564;
var statearr_13565_13614 = state_13504;
(statearr_13565_13614[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13615 = state_13504;
state_13504 = G__13615;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11723__auto__ = function(state_13504){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11723__auto____1.call(this,state_13504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11723__auto____0;
cljs$core$async$mix_$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11723__auto____1;
return cljs$core$async$mix_$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11836__auto__ = (function (){var statearr_13566 = f__11835__auto__.call(null);
(statearr_13566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___13567);

return statearr_13566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args13616 = [];
var len__7326__auto___13619 = arguments.length;
var i__7327__auto___13620 = (0);
while(true){
if((i__7327__auto___13620 < len__7326__auto___13619)){
args13616.push((arguments[i__7327__auto___13620]));

var G__13621 = (i__7327__auto___13620 + (1));
i__7327__auto___13620 = G__13621;
continue;
} else {
}
break;
}

var G__13618 = args13616.length;
switch (G__13618) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13616.length)].join('')));

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
var args13624 = [];
var len__7326__auto___13749 = arguments.length;
var i__7327__auto___13750 = (0);
while(true){
if((i__7327__auto___13750 < len__7326__auto___13749)){
args13624.push((arguments[i__7327__auto___13750]));

var G__13751 = (i__7327__auto___13750 + (1));
i__7327__auto___13750 = G__13751;
continue;
} else {
}
break;
}

var G__13626 = args13624.length;
switch (G__13626) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13624.length)].join('')));

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
return (function (p1__13623_SHARP_){
if(cljs.core.truth_(p1__13623_SHARP_.call(null,topic))){
return p1__13623_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13623_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13627 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13628){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13628 = meta13628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13629,meta13628__$1){
var self__ = this;
var _13629__$1 = this;
return (new cljs.core.async.t_cljs$core$async13627(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13628__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13629){
var self__ = this;
var _13629__$1 = this;
return self__.meta13628;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13628","meta13628",1412225105,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13627";

cljs.core.async.t_cljs$core$async13627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async13627");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13627 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13628){
return (new cljs.core.async.t_cljs$core$async13627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13628));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13627(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11834__auto___13753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___13753,mults,ensure_mult,p){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___13753,mults,ensure_mult,p){
return (function (state_13701){
var state_val_13702 = (state_13701[(1)]);
if((state_val_13702 === (7))){
var inst_13697 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13703_13754 = state_13701__$1;
(statearr_13703_13754[(2)] = inst_13697);

(statearr_13703_13754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (20))){
var state_13701__$1 = state_13701;
var statearr_13704_13755 = state_13701__$1;
(statearr_13704_13755[(2)] = null);

(statearr_13704_13755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (1))){
var state_13701__$1 = state_13701;
var statearr_13705_13756 = state_13701__$1;
(statearr_13705_13756[(2)] = null);

(statearr_13705_13756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (24))){
var inst_13680 = (state_13701[(7)]);
var inst_13689 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13680);
var state_13701__$1 = state_13701;
var statearr_13706_13757 = state_13701__$1;
(statearr_13706_13757[(2)] = inst_13689);

(statearr_13706_13757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (4))){
var inst_13632 = (state_13701[(8)]);
var inst_13632__$1 = (state_13701[(2)]);
var inst_13633 = (inst_13632__$1 == null);
var state_13701__$1 = (function (){var statearr_13707 = state_13701;
(statearr_13707[(8)] = inst_13632__$1);

return statearr_13707;
})();
if(cljs.core.truth_(inst_13633)){
var statearr_13708_13758 = state_13701__$1;
(statearr_13708_13758[(1)] = (5));

} else {
var statearr_13709_13759 = state_13701__$1;
(statearr_13709_13759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (15))){
var inst_13674 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13710_13760 = state_13701__$1;
(statearr_13710_13760[(2)] = inst_13674);

(statearr_13710_13760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (21))){
var inst_13694 = (state_13701[(2)]);
var state_13701__$1 = (function (){var statearr_13711 = state_13701;
(statearr_13711[(9)] = inst_13694);

return statearr_13711;
})();
var statearr_13712_13761 = state_13701__$1;
(statearr_13712_13761[(2)] = null);

(statearr_13712_13761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (13))){
var inst_13656 = (state_13701[(10)]);
var inst_13658 = cljs.core.chunked_seq_QMARK_.call(null,inst_13656);
var state_13701__$1 = state_13701;
if(inst_13658){
var statearr_13713_13762 = state_13701__$1;
(statearr_13713_13762[(1)] = (16));

} else {
var statearr_13714_13763 = state_13701__$1;
(statearr_13714_13763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (22))){
var inst_13686 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
if(cljs.core.truth_(inst_13686)){
var statearr_13715_13764 = state_13701__$1;
(statearr_13715_13764[(1)] = (23));

} else {
var statearr_13716_13765 = state_13701__$1;
(statearr_13716_13765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (6))){
var inst_13632 = (state_13701[(8)]);
var inst_13682 = (state_13701[(11)]);
var inst_13680 = (state_13701[(7)]);
var inst_13680__$1 = topic_fn.call(null,inst_13632);
var inst_13681 = cljs.core.deref.call(null,mults);
var inst_13682__$1 = cljs.core.get.call(null,inst_13681,inst_13680__$1);
var state_13701__$1 = (function (){var statearr_13717 = state_13701;
(statearr_13717[(11)] = inst_13682__$1);

(statearr_13717[(7)] = inst_13680__$1);

return statearr_13717;
})();
if(cljs.core.truth_(inst_13682__$1)){
var statearr_13718_13766 = state_13701__$1;
(statearr_13718_13766[(1)] = (19));

} else {
var statearr_13719_13767 = state_13701__$1;
(statearr_13719_13767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (25))){
var inst_13691 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13720_13768 = state_13701__$1;
(statearr_13720_13768[(2)] = inst_13691);

(statearr_13720_13768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (17))){
var inst_13656 = (state_13701[(10)]);
var inst_13665 = cljs.core.first.call(null,inst_13656);
var inst_13666 = cljs.core.async.muxch_STAR_.call(null,inst_13665);
var inst_13667 = cljs.core.async.close_BANG_.call(null,inst_13666);
var inst_13668 = cljs.core.next.call(null,inst_13656);
var inst_13642 = inst_13668;
var inst_13643 = null;
var inst_13644 = (0);
var inst_13645 = (0);
var state_13701__$1 = (function (){var statearr_13721 = state_13701;
(statearr_13721[(12)] = inst_13645);

(statearr_13721[(13)] = inst_13642);

(statearr_13721[(14)] = inst_13667);

(statearr_13721[(15)] = inst_13644);

(statearr_13721[(16)] = inst_13643);

return statearr_13721;
})();
var statearr_13722_13769 = state_13701__$1;
(statearr_13722_13769[(2)] = null);

(statearr_13722_13769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (3))){
var inst_13699 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13701__$1,inst_13699);
} else {
if((state_val_13702 === (12))){
var inst_13676 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13723_13770 = state_13701__$1;
(statearr_13723_13770[(2)] = inst_13676);

(statearr_13723_13770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (2))){
var state_13701__$1 = state_13701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13701__$1,(4),ch);
} else {
if((state_val_13702 === (23))){
var state_13701__$1 = state_13701;
var statearr_13724_13771 = state_13701__$1;
(statearr_13724_13771[(2)] = null);

(statearr_13724_13771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (19))){
var inst_13632 = (state_13701[(8)]);
var inst_13682 = (state_13701[(11)]);
var inst_13684 = cljs.core.async.muxch_STAR_.call(null,inst_13682);
var state_13701__$1 = state_13701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13701__$1,(22),inst_13684,inst_13632);
} else {
if((state_val_13702 === (11))){
var inst_13656 = (state_13701[(10)]);
var inst_13642 = (state_13701[(13)]);
var inst_13656__$1 = cljs.core.seq.call(null,inst_13642);
var state_13701__$1 = (function (){var statearr_13725 = state_13701;
(statearr_13725[(10)] = inst_13656__$1);

return statearr_13725;
})();
if(inst_13656__$1){
var statearr_13726_13772 = state_13701__$1;
(statearr_13726_13772[(1)] = (13));

} else {
var statearr_13727_13773 = state_13701__$1;
(statearr_13727_13773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (9))){
var inst_13678 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13728_13774 = state_13701__$1;
(statearr_13728_13774[(2)] = inst_13678);

(statearr_13728_13774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (5))){
var inst_13639 = cljs.core.deref.call(null,mults);
var inst_13640 = cljs.core.vals.call(null,inst_13639);
var inst_13641 = cljs.core.seq.call(null,inst_13640);
var inst_13642 = inst_13641;
var inst_13643 = null;
var inst_13644 = (0);
var inst_13645 = (0);
var state_13701__$1 = (function (){var statearr_13729 = state_13701;
(statearr_13729[(12)] = inst_13645);

(statearr_13729[(13)] = inst_13642);

(statearr_13729[(15)] = inst_13644);

(statearr_13729[(16)] = inst_13643);

return statearr_13729;
})();
var statearr_13730_13775 = state_13701__$1;
(statearr_13730_13775[(2)] = null);

(statearr_13730_13775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (14))){
var state_13701__$1 = state_13701;
var statearr_13734_13776 = state_13701__$1;
(statearr_13734_13776[(2)] = null);

(statearr_13734_13776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (16))){
var inst_13656 = (state_13701[(10)]);
var inst_13660 = cljs.core.chunk_first.call(null,inst_13656);
var inst_13661 = cljs.core.chunk_rest.call(null,inst_13656);
var inst_13662 = cljs.core.count.call(null,inst_13660);
var inst_13642 = inst_13661;
var inst_13643 = inst_13660;
var inst_13644 = inst_13662;
var inst_13645 = (0);
var state_13701__$1 = (function (){var statearr_13735 = state_13701;
(statearr_13735[(12)] = inst_13645);

(statearr_13735[(13)] = inst_13642);

(statearr_13735[(15)] = inst_13644);

(statearr_13735[(16)] = inst_13643);

return statearr_13735;
})();
var statearr_13736_13777 = state_13701__$1;
(statearr_13736_13777[(2)] = null);

(statearr_13736_13777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (10))){
var inst_13645 = (state_13701[(12)]);
var inst_13642 = (state_13701[(13)]);
var inst_13644 = (state_13701[(15)]);
var inst_13643 = (state_13701[(16)]);
var inst_13650 = cljs.core._nth.call(null,inst_13643,inst_13645);
var inst_13651 = cljs.core.async.muxch_STAR_.call(null,inst_13650);
var inst_13652 = cljs.core.async.close_BANG_.call(null,inst_13651);
var inst_13653 = (inst_13645 + (1));
var tmp13731 = inst_13642;
var tmp13732 = inst_13644;
var tmp13733 = inst_13643;
var inst_13642__$1 = tmp13731;
var inst_13643__$1 = tmp13733;
var inst_13644__$1 = tmp13732;
var inst_13645__$1 = inst_13653;
var state_13701__$1 = (function (){var statearr_13737 = state_13701;
(statearr_13737[(12)] = inst_13645__$1);

(statearr_13737[(13)] = inst_13642__$1);

(statearr_13737[(15)] = inst_13644__$1);

(statearr_13737[(16)] = inst_13643__$1);

(statearr_13737[(17)] = inst_13652);

return statearr_13737;
})();
var statearr_13738_13778 = state_13701__$1;
(statearr_13738_13778[(2)] = null);

(statearr_13738_13778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (18))){
var inst_13671 = (state_13701[(2)]);
var state_13701__$1 = state_13701;
var statearr_13739_13779 = state_13701__$1;
(statearr_13739_13779[(2)] = inst_13671);

(statearr_13739_13779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13702 === (8))){
var inst_13645 = (state_13701[(12)]);
var inst_13644 = (state_13701[(15)]);
var inst_13647 = (inst_13645 < inst_13644);
var inst_13648 = inst_13647;
var state_13701__$1 = state_13701;
if(cljs.core.truth_(inst_13648)){
var statearr_13740_13780 = state_13701__$1;
(statearr_13740_13780[(1)] = (10));

} else {
var statearr_13741_13781 = state_13701__$1;
(statearr_13741_13781[(1)] = (11));

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
});})(c__11834__auto___13753,mults,ensure_mult,p))
;
return ((function (switch__11722__auto__,c__11834__auto___13753,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_13745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13745[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_13745[(1)] = (1));

return statearr_13745;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_13701){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e13746){if((e13746 instanceof Object)){
var ex__11726__auto__ = e13746;
var statearr_13747_13782 = state_13701;
(statearr_13747_13782[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13783 = state_13701;
state_13701 = G__13783;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_13701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_13701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___13753,mults,ensure_mult,p))
})();
var state__11836__auto__ = (function (){var statearr_13748 = f__11835__auto__.call(null);
(statearr_13748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___13753);

return statearr_13748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___13753,mults,ensure_mult,p))
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
var args13784 = [];
var len__7326__auto___13787 = arguments.length;
var i__7327__auto___13788 = (0);
while(true){
if((i__7327__auto___13788 < len__7326__auto___13787)){
args13784.push((arguments[i__7327__auto___13788]));

var G__13789 = (i__7327__auto___13788 + (1));
i__7327__auto___13788 = G__13789;
continue;
} else {
}
break;
}

var G__13786 = args13784.length;
switch (G__13786) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13784.length)].join('')));

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
var args13791 = [];
var len__7326__auto___13794 = arguments.length;
var i__7327__auto___13795 = (0);
while(true){
if((i__7327__auto___13795 < len__7326__auto___13794)){
args13791.push((arguments[i__7327__auto___13795]));

var G__13796 = (i__7327__auto___13795 + (1));
i__7327__auto___13795 = G__13796;
continue;
} else {
}
break;
}

var G__13793 = args13791.length;
switch (G__13793) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13791.length)].join('')));

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
var args13798 = [];
var len__7326__auto___13869 = arguments.length;
var i__7327__auto___13870 = (0);
while(true){
if((i__7327__auto___13870 < len__7326__auto___13869)){
args13798.push((arguments[i__7327__auto___13870]));

var G__13871 = (i__7327__auto___13870 + (1));
i__7327__auto___13870 = G__13871;
continue;
} else {
}
break;
}

var G__13800 = args13798.length;
switch (G__13800) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13798.length)].join('')));

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
var c__11834__auto___13873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13839){
var state_val_13840 = (state_13839[(1)]);
if((state_val_13840 === (7))){
var state_13839__$1 = state_13839;
var statearr_13841_13874 = state_13839__$1;
(statearr_13841_13874[(2)] = null);

(statearr_13841_13874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (1))){
var state_13839__$1 = state_13839;
var statearr_13842_13875 = state_13839__$1;
(statearr_13842_13875[(2)] = null);

(statearr_13842_13875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (4))){
var inst_13803 = (state_13839[(7)]);
var inst_13805 = (inst_13803 < cnt);
var state_13839__$1 = state_13839;
if(cljs.core.truth_(inst_13805)){
var statearr_13843_13876 = state_13839__$1;
(statearr_13843_13876[(1)] = (6));

} else {
var statearr_13844_13877 = state_13839__$1;
(statearr_13844_13877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (15))){
var inst_13835 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
var statearr_13845_13878 = state_13839__$1;
(statearr_13845_13878[(2)] = inst_13835);

(statearr_13845_13878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (13))){
var inst_13828 = cljs.core.async.close_BANG_.call(null,out);
var state_13839__$1 = state_13839;
var statearr_13846_13879 = state_13839__$1;
(statearr_13846_13879[(2)] = inst_13828);

(statearr_13846_13879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (6))){
var state_13839__$1 = state_13839;
var statearr_13847_13880 = state_13839__$1;
(statearr_13847_13880[(2)] = null);

(statearr_13847_13880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (3))){
var inst_13837 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13839__$1,inst_13837);
} else {
if((state_val_13840 === (12))){
var inst_13825 = (state_13839[(8)]);
var inst_13825__$1 = (state_13839[(2)]);
var inst_13826 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13825__$1);
var state_13839__$1 = (function (){var statearr_13848 = state_13839;
(statearr_13848[(8)] = inst_13825__$1);

return statearr_13848;
})();
if(cljs.core.truth_(inst_13826)){
var statearr_13849_13881 = state_13839__$1;
(statearr_13849_13881[(1)] = (13));

} else {
var statearr_13850_13882 = state_13839__$1;
(statearr_13850_13882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (2))){
var inst_13802 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13803 = (0);
var state_13839__$1 = (function (){var statearr_13851 = state_13839;
(statearr_13851[(9)] = inst_13802);

(statearr_13851[(7)] = inst_13803);

return statearr_13851;
})();
var statearr_13852_13883 = state_13839__$1;
(statearr_13852_13883[(2)] = null);

(statearr_13852_13883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (11))){
var inst_13803 = (state_13839[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13839,(10),Object,null,(9));
var inst_13812 = chs__$1.call(null,inst_13803);
var inst_13813 = done.call(null,inst_13803);
var inst_13814 = cljs.core.async.take_BANG_.call(null,inst_13812,inst_13813);
var state_13839__$1 = state_13839;
var statearr_13853_13884 = state_13839__$1;
(statearr_13853_13884[(2)] = inst_13814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (9))){
var inst_13803 = (state_13839[(7)]);
var inst_13816 = (state_13839[(2)]);
var inst_13817 = (inst_13803 + (1));
var inst_13803__$1 = inst_13817;
var state_13839__$1 = (function (){var statearr_13854 = state_13839;
(statearr_13854[(7)] = inst_13803__$1);

(statearr_13854[(10)] = inst_13816);

return statearr_13854;
})();
var statearr_13855_13885 = state_13839__$1;
(statearr_13855_13885[(2)] = null);

(statearr_13855_13885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (5))){
var inst_13823 = (state_13839[(2)]);
var state_13839__$1 = (function (){var statearr_13856 = state_13839;
(statearr_13856[(11)] = inst_13823);

return statearr_13856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13839__$1,(12),dchan);
} else {
if((state_val_13840 === (14))){
var inst_13825 = (state_13839[(8)]);
var inst_13830 = cljs.core.apply.call(null,f,inst_13825);
var state_13839__$1 = state_13839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13839__$1,(16),out,inst_13830);
} else {
if((state_val_13840 === (16))){
var inst_13832 = (state_13839[(2)]);
var state_13839__$1 = (function (){var statearr_13857 = state_13839;
(statearr_13857[(12)] = inst_13832);

return statearr_13857;
})();
var statearr_13858_13886 = state_13839__$1;
(statearr_13858_13886[(2)] = null);

(statearr_13858_13886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (10))){
var inst_13807 = (state_13839[(2)]);
var inst_13808 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13839__$1 = (function (){var statearr_13859 = state_13839;
(statearr_13859[(13)] = inst_13807);

return statearr_13859;
})();
var statearr_13860_13887 = state_13839__$1;
(statearr_13860_13887[(2)] = inst_13808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (8))){
var inst_13821 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
var statearr_13861_13888 = state_13839__$1;
(statearr_13861_13888[(2)] = inst_13821);

(statearr_13861_13888[(1)] = (5));


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
});})(c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11722__auto__,c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_13865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13865[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_13865[(1)] = (1));

return statearr_13865;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_13839){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e13866){if((e13866 instanceof Object)){
var ex__11726__auto__ = e13866;
var statearr_13867_13889 = state_13839;
(statearr_13867_13889[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13890 = state_13839;
state_13839 = G__13890;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_13839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_13839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11836__auto__ = (function (){var statearr_13868 = f__11835__auto__.call(null);
(statearr_13868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___13873);

return statearr_13868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___13873,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13892 = [];
var len__7326__auto___13950 = arguments.length;
var i__7327__auto___13951 = (0);
while(true){
if((i__7327__auto___13951 < len__7326__auto___13950)){
args13892.push((arguments[i__7327__auto___13951]));

var G__13952 = (i__7327__auto___13951 + (1));
i__7327__auto___13951 = G__13952;
continue;
} else {
}
break;
}

var G__13894 = args13892.length;
switch (G__13894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13892.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___13954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___13954,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___13954,out){
return (function (state_13926){
var state_val_13927 = (state_13926[(1)]);
if((state_val_13927 === (7))){
var inst_13906 = (state_13926[(7)]);
var inst_13905 = (state_13926[(8)]);
var inst_13905__$1 = (state_13926[(2)]);
var inst_13906__$1 = cljs.core.nth.call(null,inst_13905__$1,(0),null);
var inst_13907 = cljs.core.nth.call(null,inst_13905__$1,(1),null);
var inst_13908 = (inst_13906__$1 == null);
var state_13926__$1 = (function (){var statearr_13928 = state_13926;
(statearr_13928[(7)] = inst_13906__$1);

(statearr_13928[(8)] = inst_13905__$1);

(statearr_13928[(9)] = inst_13907);

return statearr_13928;
})();
if(cljs.core.truth_(inst_13908)){
var statearr_13929_13955 = state_13926__$1;
(statearr_13929_13955[(1)] = (8));

} else {
var statearr_13930_13956 = state_13926__$1;
(statearr_13930_13956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (1))){
var inst_13895 = cljs.core.vec.call(null,chs);
var inst_13896 = inst_13895;
var state_13926__$1 = (function (){var statearr_13931 = state_13926;
(statearr_13931[(10)] = inst_13896);

return statearr_13931;
})();
var statearr_13932_13957 = state_13926__$1;
(statearr_13932_13957[(2)] = null);

(statearr_13932_13957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (4))){
var inst_13896 = (state_13926[(10)]);
var state_13926__$1 = state_13926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13926__$1,(7),inst_13896);
} else {
if((state_val_13927 === (6))){
var inst_13922 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13933_13958 = state_13926__$1;
(statearr_13933_13958[(2)] = inst_13922);

(statearr_13933_13958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (3))){
var inst_13924 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13926__$1,inst_13924);
} else {
if((state_val_13927 === (2))){
var inst_13896 = (state_13926[(10)]);
var inst_13898 = cljs.core.count.call(null,inst_13896);
var inst_13899 = (inst_13898 > (0));
var state_13926__$1 = state_13926;
if(cljs.core.truth_(inst_13899)){
var statearr_13935_13959 = state_13926__$1;
(statearr_13935_13959[(1)] = (4));

} else {
var statearr_13936_13960 = state_13926__$1;
(statearr_13936_13960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (11))){
var inst_13896 = (state_13926[(10)]);
var inst_13915 = (state_13926[(2)]);
var tmp13934 = inst_13896;
var inst_13896__$1 = tmp13934;
var state_13926__$1 = (function (){var statearr_13937 = state_13926;
(statearr_13937[(11)] = inst_13915);

(statearr_13937[(10)] = inst_13896__$1);

return statearr_13937;
})();
var statearr_13938_13961 = state_13926__$1;
(statearr_13938_13961[(2)] = null);

(statearr_13938_13961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (9))){
var inst_13906 = (state_13926[(7)]);
var state_13926__$1 = state_13926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13926__$1,(11),out,inst_13906);
} else {
if((state_val_13927 === (5))){
var inst_13920 = cljs.core.async.close_BANG_.call(null,out);
var state_13926__$1 = state_13926;
var statearr_13939_13962 = state_13926__$1;
(statearr_13939_13962[(2)] = inst_13920);

(statearr_13939_13962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (10))){
var inst_13918 = (state_13926[(2)]);
var state_13926__$1 = state_13926;
var statearr_13940_13963 = state_13926__$1;
(statearr_13940_13963[(2)] = inst_13918);

(statearr_13940_13963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13927 === (8))){
var inst_13906 = (state_13926[(7)]);
var inst_13905 = (state_13926[(8)]);
var inst_13896 = (state_13926[(10)]);
var inst_13907 = (state_13926[(9)]);
var inst_13910 = (function (){var cs = inst_13896;
var vec__13901 = inst_13905;
var v = inst_13906;
var c = inst_13907;
return ((function (cs,vec__13901,v,c,inst_13906,inst_13905,inst_13896,inst_13907,state_val_13927,c__11834__auto___13954,out){
return (function (p1__13891_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13891_SHARP_);
});
;})(cs,vec__13901,v,c,inst_13906,inst_13905,inst_13896,inst_13907,state_val_13927,c__11834__auto___13954,out))
})();
var inst_13911 = cljs.core.filterv.call(null,inst_13910,inst_13896);
var inst_13896__$1 = inst_13911;
var state_13926__$1 = (function (){var statearr_13941 = state_13926;
(statearr_13941[(10)] = inst_13896__$1);

return statearr_13941;
})();
var statearr_13942_13964 = state_13926__$1;
(statearr_13942_13964[(2)] = null);

(statearr_13942_13964[(1)] = (2));


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
});})(c__11834__auto___13954,out))
;
return ((function (switch__11722__auto__,c__11834__auto___13954,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_13946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13946[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_13946[(1)] = (1));

return statearr_13946;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_13926){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e13947){if((e13947 instanceof Object)){
var ex__11726__auto__ = e13947;
var statearr_13948_13965 = state_13926;
(statearr_13948_13965[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13966 = state_13926;
state_13926 = G__13966;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_13926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_13926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___13954,out))
})();
var state__11836__auto__ = (function (){var statearr_13949 = f__11835__auto__.call(null);
(statearr_13949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___13954);

return statearr_13949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___13954,out))
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
var args13967 = [];
var len__7326__auto___14016 = arguments.length;
var i__7327__auto___14017 = (0);
while(true){
if((i__7327__auto___14017 < len__7326__auto___14016)){
args13967.push((arguments[i__7327__auto___14017]));

var G__14018 = (i__7327__auto___14017 + (1));
i__7327__auto___14017 = G__14018;
continue;
} else {
}
break;
}

var G__13969 = args13967.length;
switch (G__13969) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13967.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___14020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___14020,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___14020,out){
return (function (state_13993){
var state_val_13994 = (state_13993[(1)]);
if((state_val_13994 === (7))){
var inst_13975 = (state_13993[(7)]);
var inst_13975__$1 = (state_13993[(2)]);
var inst_13976 = (inst_13975__$1 == null);
var inst_13977 = cljs.core.not.call(null,inst_13976);
var state_13993__$1 = (function (){var statearr_13995 = state_13993;
(statearr_13995[(7)] = inst_13975__$1);

return statearr_13995;
})();
if(inst_13977){
var statearr_13996_14021 = state_13993__$1;
(statearr_13996_14021[(1)] = (8));

} else {
var statearr_13997_14022 = state_13993__$1;
(statearr_13997_14022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (1))){
var inst_13970 = (0);
var state_13993__$1 = (function (){var statearr_13998 = state_13993;
(statearr_13998[(8)] = inst_13970);

return statearr_13998;
})();
var statearr_13999_14023 = state_13993__$1;
(statearr_13999_14023[(2)] = null);

(statearr_13999_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (4))){
var state_13993__$1 = state_13993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13993__$1,(7),ch);
} else {
if((state_val_13994 === (6))){
var inst_13988 = (state_13993[(2)]);
var state_13993__$1 = state_13993;
var statearr_14000_14024 = state_13993__$1;
(statearr_14000_14024[(2)] = inst_13988);

(statearr_14000_14024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (3))){
var inst_13990 = (state_13993[(2)]);
var inst_13991 = cljs.core.async.close_BANG_.call(null,out);
var state_13993__$1 = (function (){var statearr_14001 = state_13993;
(statearr_14001[(9)] = inst_13990);

return statearr_14001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13993__$1,inst_13991);
} else {
if((state_val_13994 === (2))){
var inst_13970 = (state_13993[(8)]);
var inst_13972 = (inst_13970 < n);
var state_13993__$1 = state_13993;
if(cljs.core.truth_(inst_13972)){
var statearr_14002_14025 = state_13993__$1;
(statearr_14002_14025[(1)] = (4));

} else {
var statearr_14003_14026 = state_13993__$1;
(statearr_14003_14026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (11))){
var inst_13970 = (state_13993[(8)]);
var inst_13980 = (state_13993[(2)]);
var inst_13981 = (inst_13970 + (1));
var inst_13970__$1 = inst_13981;
var state_13993__$1 = (function (){var statearr_14004 = state_13993;
(statearr_14004[(10)] = inst_13980);

(statearr_14004[(8)] = inst_13970__$1);

return statearr_14004;
})();
var statearr_14005_14027 = state_13993__$1;
(statearr_14005_14027[(2)] = null);

(statearr_14005_14027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (9))){
var state_13993__$1 = state_13993;
var statearr_14006_14028 = state_13993__$1;
(statearr_14006_14028[(2)] = null);

(statearr_14006_14028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (5))){
var state_13993__$1 = state_13993;
var statearr_14007_14029 = state_13993__$1;
(statearr_14007_14029[(2)] = null);

(statearr_14007_14029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (10))){
var inst_13985 = (state_13993[(2)]);
var state_13993__$1 = state_13993;
var statearr_14008_14030 = state_13993__$1;
(statearr_14008_14030[(2)] = inst_13985);

(statearr_14008_14030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13994 === (8))){
var inst_13975 = (state_13993[(7)]);
var state_13993__$1 = state_13993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13993__$1,(11),out,inst_13975);
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
});})(c__11834__auto___14020,out))
;
return ((function (switch__11722__auto__,c__11834__auto___14020,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_14012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14012[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_14012[(1)] = (1));

return statearr_14012;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_13993){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_13993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14013){if((e14013 instanceof Object)){
var ex__11726__auto__ = e14013;
var statearr_14014_14031 = state_13993;
(statearr_14014_14031[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14032 = state_13993;
state_13993 = G__14032;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_13993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_13993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___14020,out))
})();
var state__11836__auto__ = (function (){var statearr_14015 = f__11835__auto__.call(null);
(statearr_14015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___14020);

return statearr_14015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___14020,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14040 = (function (map_LT_,f,ch,meta14041){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14041 = meta14041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14042,meta14041__$1){
var self__ = this;
var _14042__$1 = this;
return (new cljs.core.async.t_cljs$core$async14040(self__.map_LT_,self__.f,self__.ch,meta14041__$1));
});

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14042){
var self__ = this;
var _14042__$1 = this;
return self__.meta14041;
});

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14043 = (function (map_LT_,f,ch,meta14041,_,fn1,meta14044){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14041 = meta14041;
this._ = _;
this.fn1 = fn1;
this.meta14044 = meta14044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14045,meta14044__$1){
var self__ = this;
var _14045__$1 = this;
return (new cljs.core.async.t_cljs$core$async14043(self__.map_LT_,self__.f,self__.ch,self__.meta14041,self__._,self__.fn1,meta14044__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14045){
var self__ = this;
var _14045__$1 = this;
return self__.meta14044;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14033_SHARP_){
return f1.call(null,(((p1__14033_SHARP_ == null))?null:self__.f.call(null,p1__14033_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14041","meta14041",170389346,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14040","cljs.core.async/t_cljs$core$async14040",829937921,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14044","meta14044",837326151,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14043";

cljs.core.async.t_cljs$core$async14043.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async14043");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14043 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14043(map_LT___$1,f__$1,ch__$1,meta14041__$1,___$2,fn1__$1,meta14044){
return (new cljs.core.async.t_cljs$core$async14043(map_LT___$1,f__$1,ch__$1,meta14041__$1,___$2,fn1__$1,meta14044));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14043(self__.map_LT_,self__.f,self__.ch,self__.meta14041,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14041","meta14041",170389346,null)], null);
});

cljs.core.async.t_cljs$core$async14040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14040";

cljs.core.async.t_cljs$core$async14040.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async14040");
});

cljs.core.async.__GT_t_cljs$core$async14040 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14040(map_LT___$1,f__$1,ch__$1,meta14041){
return (new cljs.core.async.t_cljs$core$async14040(map_LT___$1,f__$1,ch__$1,meta14041));
});

}

return (new cljs.core.async.t_cljs$core$async14040(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14049 = (function (map_GT_,f,ch,meta14050){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14050 = meta14050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14051,meta14050__$1){
var self__ = this;
var _14051__$1 = this;
return (new cljs.core.async.t_cljs$core$async14049(self__.map_GT_,self__.f,self__.ch,meta14050__$1));
});

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14051){
var self__ = this;
var _14051__$1 = this;
return self__.meta14050;
});

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14050","meta14050",1640878147,null)], null);
});

cljs.core.async.t_cljs$core$async14049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14049";

cljs.core.async.t_cljs$core$async14049.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async14049");
});

cljs.core.async.__GT_t_cljs$core$async14049 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14049(map_GT___$1,f__$1,ch__$1,meta14050){
return (new cljs.core.async.t_cljs$core$async14049(map_GT___$1,f__$1,ch__$1,meta14050));
});

}

return (new cljs.core.async.t_cljs$core$async14049(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14055 = (function (filter_GT_,p,ch,meta14056){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14056 = meta14056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14057,meta14056__$1){
var self__ = this;
var _14057__$1 = this;
return (new cljs.core.async.t_cljs$core$async14055(self__.filter_GT_,self__.p,self__.ch,meta14056__$1));
});

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14057){
var self__ = this;
var _14057__$1 = this;
return self__.meta14056;
});

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14056","meta14056",-1652033110,null)], null);
});

cljs.core.async.t_cljs$core$async14055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14055";

cljs.core.async.t_cljs$core$async14055.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async14055");
});

cljs.core.async.__GT_t_cljs$core$async14055 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14055(filter_GT___$1,p__$1,ch__$1,meta14056){
return (new cljs.core.async.t_cljs$core$async14055(filter_GT___$1,p__$1,ch__$1,meta14056));
});

}

return (new cljs.core.async.t_cljs$core$async14055(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14058 = [];
var len__7326__auto___14102 = arguments.length;
var i__7327__auto___14103 = (0);
while(true){
if((i__7327__auto___14103 < len__7326__auto___14102)){
args14058.push((arguments[i__7327__auto___14103]));

var G__14104 = (i__7327__auto___14103 + (1));
i__7327__auto___14103 = G__14104;
continue;
} else {
}
break;
}

var G__14060 = args14058.length;
switch (G__14060) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14058.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___14106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___14106,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___14106,out){
return (function (state_14081){
var state_val_14082 = (state_14081[(1)]);
if((state_val_14082 === (7))){
var inst_14077 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14083_14107 = state_14081__$1;
(statearr_14083_14107[(2)] = inst_14077);

(statearr_14083_14107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (1))){
var state_14081__$1 = state_14081;
var statearr_14084_14108 = state_14081__$1;
(statearr_14084_14108[(2)] = null);

(statearr_14084_14108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (4))){
var inst_14063 = (state_14081[(7)]);
var inst_14063__$1 = (state_14081[(2)]);
var inst_14064 = (inst_14063__$1 == null);
var state_14081__$1 = (function (){var statearr_14085 = state_14081;
(statearr_14085[(7)] = inst_14063__$1);

return statearr_14085;
})();
if(cljs.core.truth_(inst_14064)){
var statearr_14086_14109 = state_14081__$1;
(statearr_14086_14109[(1)] = (5));

} else {
var statearr_14087_14110 = state_14081__$1;
(statearr_14087_14110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (6))){
var inst_14063 = (state_14081[(7)]);
var inst_14068 = p.call(null,inst_14063);
var state_14081__$1 = state_14081;
if(cljs.core.truth_(inst_14068)){
var statearr_14088_14111 = state_14081__$1;
(statearr_14088_14111[(1)] = (8));

} else {
var statearr_14089_14112 = state_14081__$1;
(statearr_14089_14112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (3))){
var inst_14079 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14081__$1,inst_14079);
} else {
if((state_val_14082 === (2))){
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14081__$1,(4),ch);
} else {
if((state_val_14082 === (11))){
var inst_14071 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14090_14113 = state_14081__$1;
(statearr_14090_14113[(2)] = inst_14071);

(statearr_14090_14113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (9))){
var state_14081__$1 = state_14081;
var statearr_14091_14114 = state_14081__$1;
(statearr_14091_14114[(2)] = null);

(statearr_14091_14114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (5))){
var inst_14066 = cljs.core.async.close_BANG_.call(null,out);
var state_14081__$1 = state_14081;
var statearr_14092_14115 = state_14081__$1;
(statearr_14092_14115[(2)] = inst_14066);

(statearr_14092_14115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (10))){
var inst_14074 = (state_14081[(2)]);
var state_14081__$1 = (function (){var statearr_14093 = state_14081;
(statearr_14093[(8)] = inst_14074);

return statearr_14093;
})();
var statearr_14094_14116 = state_14081__$1;
(statearr_14094_14116[(2)] = null);

(statearr_14094_14116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (8))){
var inst_14063 = (state_14081[(7)]);
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14081__$1,(11),out,inst_14063);
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
});})(c__11834__auto___14106,out))
;
return ((function (switch__11722__auto__,c__11834__auto___14106,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_14098 = [null,null,null,null,null,null,null,null,null];
(statearr_14098[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_14098[(1)] = (1));

return statearr_14098;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_14081){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_14081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14099){if((e14099 instanceof Object)){
var ex__11726__auto__ = e14099;
var statearr_14100_14117 = state_14081;
(statearr_14100_14117[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14118 = state_14081;
state_14081 = G__14118;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_14081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_14081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___14106,out))
})();
var state__11836__auto__ = (function (){var statearr_14101 = f__11835__auto__.call(null);
(statearr_14101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___14106);

return statearr_14101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___14106,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14119 = [];
var len__7326__auto___14122 = arguments.length;
var i__7327__auto___14123 = (0);
while(true){
if((i__7327__auto___14123 < len__7326__auto___14122)){
args14119.push((arguments[i__7327__auto___14123]));

var G__14124 = (i__7327__auto___14123 + (1));
i__7327__auto___14123 = G__14124;
continue;
} else {
}
break;
}

var G__14121 = args14119.length;
switch (G__14121) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14119.length)].join('')));

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
var c__11834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto__){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto__){
return (function (state_14291){
var state_val_14292 = (state_14291[(1)]);
if((state_val_14292 === (7))){
var inst_14287 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14293_14334 = state_14291__$1;
(statearr_14293_14334[(2)] = inst_14287);

(statearr_14293_14334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (20))){
var inst_14257 = (state_14291[(7)]);
var inst_14268 = (state_14291[(2)]);
var inst_14269 = cljs.core.next.call(null,inst_14257);
var inst_14243 = inst_14269;
var inst_14244 = null;
var inst_14245 = (0);
var inst_14246 = (0);
var state_14291__$1 = (function (){var statearr_14294 = state_14291;
(statearr_14294[(8)] = inst_14268);

(statearr_14294[(9)] = inst_14244);

(statearr_14294[(10)] = inst_14245);

(statearr_14294[(11)] = inst_14246);

(statearr_14294[(12)] = inst_14243);

return statearr_14294;
})();
var statearr_14295_14335 = state_14291__$1;
(statearr_14295_14335[(2)] = null);

(statearr_14295_14335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (1))){
var state_14291__$1 = state_14291;
var statearr_14296_14336 = state_14291__$1;
(statearr_14296_14336[(2)] = null);

(statearr_14296_14336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (4))){
var inst_14232 = (state_14291[(13)]);
var inst_14232__$1 = (state_14291[(2)]);
var inst_14233 = (inst_14232__$1 == null);
var state_14291__$1 = (function (){var statearr_14297 = state_14291;
(statearr_14297[(13)] = inst_14232__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14233)){
var statearr_14298_14337 = state_14291__$1;
(statearr_14298_14337[(1)] = (5));

} else {
var statearr_14299_14338 = state_14291__$1;
(statearr_14299_14338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (15))){
var state_14291__$1 = state_14291;
var statearr_14303_14339 = state_14291__$1;
(statearr_14303_14339[(2)] = null);

(statearr_14303_14339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (21))){
var state_14291__$1 = state_14291;
var statearr_14304_14340 = state_14291__$1;
(statearr_14304_14340[(2)] = null);

(statearr_14304_14340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (13))){
var inst_14244 = (state_14291[(9)]);
var inst_14245 = (state_14291[(10)]);
var inst_14246 = (state_14291[(11)]);
var inst_14243 = (state_14291[(12)]);
var inst_14253 = (state_14291[(2)]);
var inst_14254 = (inst_14246 + (1));
var tmp14300 = inst_14244;
var tmp14301 = inst_14245;
var tmp14302 = inst_14243;
var inst_14243__$1 = tmp14302;
var inst_14244__$1 = tmp14300;
var inst_14245__$1 = tmp14301;
var inst_14246__$1 = inst_14254;
var state_14291__$1 = (function (){var statearr_14305 = state_14291;
(statearr_14305[(9)] = inst_14244__$1);

(statearr_14305[(10)] = inst_14245__$1);

(statearr_14305[(14)] = inst_14253);

(statearr_14305[(11)] = inst_14246__$1);

(statearr_14305[(12)] = inst_14243__$1);

return statearr_14305;
})();
var statearr_14306_14341 = state_14291__$1;
(statearr_14306_14341[(2)] = null);

(statearr_14306_14341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (22))){
var state_14291__$1 = state_14291;
var statearr_14307_14342 = state_14291__$1;
(statearr_14307_14342[(2)] = null);

(statearr_14307_14342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (6))){
var inst_14232 = (state_14291[(13)]);
var inst_14241 = f.call(null,inst_14232);
var inst_14242 = cljs.core.seq.call(null,inst_14241);
var inst_14243 = inst_14242;
var inst_14244 = null;
var inst_14245 = (0);
var inst_14246 = (0);
var state_14291__$1 = (function (){var statearr_14308 = state_14291;
(statearr_14308[(9)] = inst_14244);

(statearr_14308[(10)] = inst_14245);

(statearr_14308[(11)] = inst_14246);

(statearr_14308[(12)] = inst_14243);

return statearr_14308;
})();
var statearr_14309_14343 = state_14291__$1;
(statearr_14309_14343[(2)] = null);

(statearr_14309_14343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (17))){
var inst_14257 = (state_14291[(7)]);
var inst_14261 = cljs.core.chunk_first.call(null,inst_14257);
var inst_14262 = cljs.core.chunk_rest.call(null,inst_14257);
var inst_14263 = cljs.core.count.call(null,inst_14261);
var inst_14243 = inst_14262;
var inst_14244 = inst_14261;
var inst_14245 = inst_14263;
var inst_14246 = (0);
var state_14291__$1 = (function (){var statearr_14310 = state_14291;
(statearr_14310[(9)] = inst_14244);

(statearr_14310[(10)] = inst_14245);

(statearr_14310[(11)] = inst_14246);

(statearr_14310[(12)] = inst_14243);

return statearr_14310;
})();
var statearr_14311_14344 = state_14291__$1;
(statearr_14311_14344[(2)] = null);

(statearr_14311_14344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (3))){
var inst_14289 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14291__$1,inst_14289);
} else {
if((state_val_14292 === (12))){
var inst_14277 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14312_14345 = state_14291__$1;
(statearr_14312_14345[(2)] = inst_14277);

(statearr_14312_14345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (2))){
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14291__$1,(4),in$);
} else {
if((state_val_14292 === (23))){
var inst_14285 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14313_14346 = state_14291__$1;
(statearr_14313_14346[(2)] = inst_14285);

(statearr_14313_14346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (19))){
var inst_14272 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14314_14347 = state_14291__$1;
(statearr_14314_14347[(2)] = inst_14272);

(statearr_14314_14347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (11))){
var inst_14257 = (state_14291[(7)]);
var inst_14243 = (state_14291[(12)]);
var inst_14257__$1 = cljs.core.seq.call(null,inst_14243);
var state_14291__$1 = (function (){var statearr_14315 = state_14291;
(statearr_14315[(7)] = inst_14257__$1);

return statearr_14315;
})();
if(inst_14257__$1){
var statearr_14316_14348 = state_14291__$1;
(statearr_14316_14348[(1)] = (14));

} else {
var statearr_14317_14349 = state_14291__$1;
(statearr_14317_14349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (9))){
var inst_14279 = (state_14291[(2)]);
var inst_14280 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14291__$1 = (function (){var statearr_14318 = state_14291;
(statearr_14318[(15)] = inst_14279);

return statearr_14318;
})();
if(cljs.core.truth_(inst_14280)){
var statearr_14319_14350 = state_14291__$1;
(statearr_14319_14350[(1)] = (21));

} else {
var statearr_14320_14351 = state_14291__$1;
(statearr_14320_14351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (5))){
var inst_14235 = cljs.core.async.close_BANG_.call(null,out);
var state_14291__$1 = state_14291;
var statearr_14321_14352 = state_14291__$1;
(statearr_14321_14352[(2)] = inst_14235);

(statearr_14321_14352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (14))){
var inst_14257 = (state_14291[(7)]);
var inst_14259 = cljs.core.chunked_seq_QMARK_.call(null,inst_14257);
var state_14291__$1 = state_14291;
if(inst_14259){
var statearr_14322_14353 = state_14291__$1;
(statearr_14322_14353[(1)] = (17));

} else {
var statearr_14323_14354 = state_14291__$1;
(statearr_14323_14354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (16))){
var inst_14275 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14324_14355 = state_14291__$1;
(statearr_14324_14355[(2)] = inst_14275);

(statearr_14324_14355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (10))){
var inst_14244 = (state_14291[(9)]);
var inst_14246 = (state_14291[(11)]);
var inst_14251 = cljs.core._nth.call(null,inst_14244,inst_14246);
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14291__$1,(13),out,inst_14251);
} else {
if((state_val_14292 === (18))){
var inst_14257 = (state_14291[(7)]);
var inst_14266 = cljs.core.first.call(null,inst_14257);
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14291__$1,(20),out,inst_14266);
} else {
if((state_val_14292 === (8))){
var inst_14245 = (state_14291[(10)]);
var inst_14246 = (state_14291[(11)]);
var inst_14248 = (inst_14246 < inst_14245);
var inst_14249 = inst_14248;
var state_14291__$1 = state_14291;
if(cljs.core.truth_(inst_14249)){
var statearr_14325_14356 = state_14291__$1;
(statearr_14325_14356[(1)] = (10));

} else {
var statearr_14326_14357 = state_14291__$1;
(statearr_14326_14357[(1)] = (11));

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
});})(c__11834__auto__))
;
return ((function (switch__11722__auto__,c__11834__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____0 = (function (){
var statearr_14330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__);

(statearr_14330[(1)] = (1));

return statearr_14330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____1 = (function (state_14291){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_14291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14331){if((e14331 instanceof Object)){
var ex__11726__auto__ = e14331;
var statearr_14332_14358 = state_14291;
(statearr_14332_14358[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14359 = state_14291;
state_14291 = G__14359;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__ = function(state_14291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____1.call(this,state_14291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto__))
})();
var state__11836__auto__ = (function (){var statearr_14333 = f__11835__auto__.call(null);
(statearr_14333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto__);

return statearr_14333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto__))
);

return c__11834__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14360 = [];
var len__7326__auto___14363 = arguments.length;
var i__7327__auto___14364 = (0);
while(true){
if((i__7327__auto___14364 < len__7326__auto___14363)){
args14360.push((arguments[i__7327__auto___14364]));

var G__14365 = (i__7327__auto___14364 + (1));
i__7327__auto___14364 = G__14365;
continue;
} else {
}
break;
}

var G__14362 = args14360.length;
switch (G__14362) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14360.length)].join('')));

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
var args14367 = [];
var len__7326__auto___14370 = arguments.length;
var i__7327__auto___14371 = (0);
while(true){
if((i__7327__auto___14371 < len__7326__auto___14370)){
args14367.push((arguments[i__7327__auto___14371]));

var G__14372 = (i__7327__auto___14371 + (1));
i__7327__auto___14371 = G__14372;
continue;
} else {
}
break;
}

var G__14369 = args14367.length;
switch (G__14369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14367.length)].join('')));

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
var args14374 = [];
var len__7326__auto___14425 = arguments.length;
var i__7327__auto___14426 = (0);
while(true){
if((i__7327__auto___14426 < len__7326__auto___14425)){
args14374.push((arguments[i__7327__auto___14426]));

var G__14427 = (i__7327__auto___14426 + (1));
i__7327__auto___14426 = G__14427;
continue;
} else {
}
break;
}

var G__14376 = args14374.length;
switch (G__14376) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14374.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___14429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___14429,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___14429,out){
return (function (state_14400){
var state_val_14401 = (state_14400[(1)]);
if((state_val_14401 === (7))){
var inst_14395 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
var statearr_14402_14430 = state_14400__$1;
(statearr_14402_14430[(2)] = inst_14395);

(statearr_14402_14430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (1))){
var inst_14377 = null;
var state_14400__$1 = (function (){var statearr_14403 = state_14400;
(statearr_14403[(7)] = inst_14377);

return statearr_14403;
})();
var statearr_14404_14431 = state_14400__$1;
(statearr_14404_14431[(2)] = null);

(statearr_14404_14431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (4))){
var inst_14380 = (state_14400[(8)]);
var inst_14380__$1 = (state_14400[(2)]);
var inst_14381 = (inst_14380__$1 == null);
var inst_14382 = cljs.core.not.call(null,inst_14381);
var state_14400__$1 = (function (){var statearr_14405 = state_14400;
(statearr_14405[(8)] = inst_14380__$1);

return statearr_14405;
})();
if(inst_14382){
var statearr_14406_14432 = state_14400__$1;
(statearr_14406_14432[(1)] = (5));

} else {
var statearr_14407_14433 = state_14400__$1;
(statearr_14407_14433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (6))){
var state_14400__$1 = state_14400;
var statearr_14408_14434 = state_14400__$1;
(statearr_14408_14434[(2)] = null);

(statearr_14408_14434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (3))){
var inst_14397 = (state_14400[(2)]);
var inst_14398 = cljs.core.async.close_BANG_.call(null,out);
var state_14400__$1 = (function (){var statearr_14409 = state_14400;
(statearr_14409[(9)] = inst_14397);

return statearr_14409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14400__$1,inst_14398);
} else {
if((state_val_14401 === (2))){
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14400__$1,(4),ch);
} else {
if((state_val_14401 === (11))){
var inst_14380 = (state_14400[(8)]);
var inst_14389 = (state_14400[(2)]);
var inst_14377 = inst_14380;
var state_14400__$1 = (function (){var statearr_14410 = state_14400;
(statearr_14410[(7)] = inst_14377);

(statearr_14410[(10)] = inst_14389);

return statearr_14410;
})();
var statearr_14411_14435 = state_14400__$1;
(statearr_14411_14435[(2)] = null);

(statearr_14411_14435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (9))){
var inst_14380 = (state_14400[(8)]);
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14400__$1,(11),out,inst_14380);
} else {
if((state_val_14401 === (5))){
var inst_14377 = (state_14400[(7)]);
var inst_14380 = (state_14400[(8)]);
var inst_14384 = cljs.core._EQ_.call(null,inst_14380,inst_14377);
var state_14400__$1 = state_14400;
if(inst_14384){
var statearr_14413_14436 = state_14400__$1;
(statearr_14413_14436[(1)] = (8));

} else {
var statearr_14414_14437 = state_14400__$1;
(statearr_14414_14437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (10))){
var inst_14392 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
var statearr_14415_14438 = state_14400__$1;
(statearr_14415_14438[(2)] = inst_14392);

(statearr_14415_14438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (8))){
var inst_14377 = (state_14400[(7)]);
var tmp14412 = inst_14377;
var inst_14377__$1 = tmp14412;
var state_14400__$1 = (function (){var statearr_14416 = state_14400;
(statearr_14416[(7)] = inst_14377__$1);

return statearr_14416;
})();
var statearr_14417_14439 = state_14400__$1;
(statearr_14417_14439[(2)] = null);

(statearr_14417_14439[(1)] = (2));


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
});})(c__11834__auto___14429,out))
;
return ((function (switch__11722__auto__,c__11834__auto___14429,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_14421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14421[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_14421[(1)] = (1));

return statearr_14421;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_14400){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_14400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14422){if((e14422 instanceof Object)){
var ex__11726__auto__ = e14422;
var statearr_14423_14440 = state_14400;
(statearr_14423_14440[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14441 = state_14400;
state_14400 = G__14441;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_14400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_14400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___14429,out))
})();
var state__11836__auto__ = (function (){var statearr_14424 = f__11835__auto__.call(null);
(statearr_14424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___14429);

return statearr_14424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___14429,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14442 = [];
var len__7326__auto___14512 = arguments.length;
var i__7327__auto___14513 = (0);
while(true){
if((i__7327__auto___14513 < len__7326__auto___14512)){
args14442.push((arguments[i__7327__auto___14513]));

var G__14514 = (i__7327__auto___14513 + (1));
i__7327__auto___14513 = G__14514;
continue;
} else {
}
break;
}

var G__14444 = args14442.length;
switch (G__14444) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14442.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___14516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___14516,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___14516,out){
return (function (state_14482){
var state_val_14483 = (state_14482[(1)]);
if((state_val_14483 === (7))){
var inst_14478 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14484_14517 = state_14482__$1;
(statearr_14484_14517[(2)] = inst_14478);

(statearr_14484_14517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (1))){
var inst_14445 = (new Array(n));
var inst_14446 = inst_14445;
var inst_14447 = (0);
var state_14482__$1 = (function (){var statearr_14485 = state_14482;
(statearr_14485[(7)] = inst_14446);

(statearr_14485[(8)] = inst_14447);

return statearr_14485;
})();
var statearr_14486_14518 = state_14482__$1;
(statearr_14486_14518[(2)] = null);

(statearr_14486_14518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (4))){
var inst_14450 = (state_14482[(9)]);
var inst_14450__$1 = (state_14482[(2)]);
var inst_14451 = (inst_14450__$1 == null);
var inst_14452 = cljs.core.not.call(null,inst_14451);
var state_14482__$1 = (function (){var statearr_14487 = state_14482;
(statearr_14487[(9)] = inst_14450__$1);

return statearr_14487;
})();
if(inst_14452){
var statearr_14488_14519 = state_14482__$1;
(statearr_14488_14519[(1)] = (5));

} else {
var statearr_14489_14520 = state_14482__$1;
(statearr_14489_14520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (15))){
var inst_14472 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14490_14521 = state_14482__$1;
(statearr_14490_14521[(2)] = inst_14472);

(statearr_14490_14521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (13))){
var state_14482__$1 = state_14482;
var statearr_14491_14522 = state_14482__$1;
(statearr_14491_14522[(2)] = null);

(statearr_14491_14522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (6))){
var inst_14447 = (state_14482[(8)]);
var inst_14468 = (inst_14447 > (0));
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14468)){
var statearr_14492_14523 = state_14482__$1;
(statearr_14492_14523[(1)] = (12));

} else {
var statearr_14493_14524 = state_14482__$1;
(statearr_14493_14524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (3))){
var inst_14480 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14482__$1,inst_14480);
} else {
if((state_val_14483 === (12))){
var inst_14446 = (state_14482[(7)]);
var inst_14470 = cljs.core.vec.call(null,inst_14446);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14482__$1,(15),out,inst_14470);
} else {
if((state_val_14483 === (2))){
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14482__$1,(4),ch);
} else {
if((state_val_14483 === (11))){
var inst_14462 = (state_14482[(2)]);
var inst_14463 = (new Array(n));
var inst_14446 = inst_14463;
var inst_14447 = (0);
var state_14482__$1 = (function (){var statearr_14494 = state_14482;
(statearr_14494[(7)] = inst_14446);

(statearr_14494[(10)] = inst_14462);

(statearr_14494[(8)] = inst_14447);

return statearr_14494;
})();
var statearr_14495_14525 = state_14482__$1;
(statearr_14495_14525[(2)] = null);

(statearr_14495_14525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (9))){
var inst_14446 = (state_14482[(7)]);
var inst_14460 = cljs.core.vec.call(null,inst_14446);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14482__$1,(11),out,inst_14460);
} else {
if((state_val_14483 === (5))){
var inst_14450 = (state_14482[(9)]);
var inst_14446 = (state_14482[(7)]);
var inst_14455 = (state_14482[(11)]);
var inst_14447 = (state_14482[(8)]);
var inst_14454 = (inst_14446[inst_14447] = inst_14450);
var inst_14455__$1 = (inst_14447 + (1));
var inst_14456 = (inst_14455__$1 < n);
var state_14482__$1 = (function (){var statearr_14496 = state_14482;
(statearr_14496[(11)] = inst_14455__$1);

(statearr_14496[(12)] = inst_14454);

return statearr_14496;
})();
if(cljs.core.truth_(inst_14456)){
var statearr_14497_14526 = state_14482__$1;
(statearr_14497_14526[(1)] = (8));

} else {
var statearr_14498_14527 = state_14482__$1;
(statearr_14498_14527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (14))){
var inst_14475 = (state_14482[(2)]);
var inst_14476 = cljs.core.async.close_BANG_.call(null,out);
var state_14482__$1 = (function (){var statearr_14500 = state_14482;
(statearr_14500[(13)] = inst_14475);

return statearr_14500;
})();
var statearr_14501_14528 = state_14482__$1;
(statearr_14501_14528[(2)] = inst_14476);

(statearr_14501_14528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (10))){
var inst_14466 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14502_14529 = state_14482__$1;
(statearr_14502_14529[(2)] = inst_14466);

(statearr_14502_14529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14483 === (8))){
var inst_14446 = (state_14482[(7)]);
var inst_14455 = (state_14482[(11)]);
var tmp14499 = inst_14446;
var inst_14446__$1 = tmp14499;
var inst_14447 = inst_14455;
var state_14482__$1 = (function (){var statearr_14503 = state_14482;
(statearr_14503[(7)] = inst_14446__$1);

(statearr_14503[(8)] = inst_14447);

return statearr_14503;
})();
var statearr_14504_14530 = state_14482__$1;
(statearr_14504_14530[(2)] = null);

(statearr_14504_14530[(1)] = (2));


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
});})(c__11834__auto___14516,out))
;
return ((function (switch__11722__auto__,c__11834__auto___14516,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_14508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14508[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_14508[(1)] = (1));

return statearr_14508;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_14482){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_14482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14509){if((e14509 instanceof Object)){
var ex__11726__auto__ = e14509;
var statearr_14510_14531 = state_14482;
(statearr_14510_14531[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14532 = state_14482;
state_14482 = G__14532;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_14482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_14482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___14516,out))
})();
var state__11836__auto__ = (function (){var statearr_14511 = f__11835__auto__.call(null);
(statearr_14511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___14516);

return statearr_14511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___14516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14533 = [];
var len__7326__auto___14607 = arguments.length;
var i__7327__auto___14608 = (0);
while(true){
if((i__7327__auto___14608 < len__7326__auto___14607)){
args14533.push((arguments[i__7327__auto___14608]));

var G__14609 = (i__7327__auto___14608 + (1));
i__7327__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var G__14535 = args14533.length;
switch (G__14535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14533.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11834__auto___14611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___14611,out){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___14611,out){
return (function (state_14577){
var state_val_14578 = (state_14577[(1)]);
if((state_val_14578 === (7))){
var inst_14573 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14579_14612 = state_14577__$1;
(statearr_14579_14612[(2)] = inst_14573);

(statearr_14579_14612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (1))){
var inst_14536 = [];
var inst_14537 = inst_14536;
var inst_14538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14577__$1 = (function (){var statearr_14580 = state_14577;
(statearr_14580[(7)] = inst_14537);

(statearr_14580[(8)] = inst_14538);

return statearr_14580;
})();
var statearr_14581_14613 = state_14577__$1;
(statearr_14581_14613[(2)] = null);

(statearr_14581_14613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (4))){
var inst_14541 = (state_14577[(9)]);
var inst_14541__$1 = (state_14577[(2)]);
var inst_14542 = (inst_14541__$1 == null);
var inst_14543 = cljs.core.not.call(null,inst_14542);
var state_14577__$1 = (function (){var statearr_14582 = state_14577;
(statearr_14582[(9)] = inst_14541__$1);

return statearr_14582;
})();
if(inst_14543){
var statearr_14583_14614 = state_14577__$1;
(statearr_14583_14614[(1)] = (5));

} else {
var statearr_14584_14615 = state_14577__$1;
(statearr_14584_14615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (15))){
var inst_14567 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14585_14616 = state_14577__$1;
(statearr_14585_14616[(2)] = inst_14567);

(statearr_14585_14616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (13))){
var state_14577__$1 = state_14577;
var statearr_14586_14617 = state_14577__$1;
(statearr_14586_14617[(2)] = null);

(statearr_14586_14617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (6))){
var inst_14537 = (state_14577[(7)]);
var inst_14562 = inst_14537.length;
var inst_14563 = (inst_14562 > (0));
var state_14577__$1 = state_14577;
if(cljs.core.truth_(inst_14563)){
var statearr_14587_14618 = state_14577__$1;
(statearr_14587_14618[(1)] = (12));

} else {
var statearr_14588_14619 = state_14577__$1;
(statearr_14588_14619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (3))){
var inst_14575 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14577__$1,inst_14575);
} else {
if((state_val_14578 === (12))){
var inst_14537 = (state_14577[(7)]);
var inst_14565 = cljs.core.vec.call(null,inst_14537);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14577__$1,(15),out,inst_14565);
} else {
if((state_val_14578 === (2))){
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14577__$1,(4),ch);
} else {
if((state_val_14578 === (11))){
var inst_14545 = (state_14577[(10)]);
var inst_14541 = (state_14577[(9)]);
var inst_14555 = (state_14577[(2)]);
var inst_14556 = [];
var inst_14557 = inst_14556.push(inst_14541);
var inst_14537 = inst_14556;
var inst_14538 = inst_14545;
var state_14577__$1 = (function (){var statearr_14589 = state_14577;
(statearr_14589[(11)] = inst_14557);

(statearr_14589[(7)] = inst_14537);

(statearr_14589[(12)] = inst_14555);

(statearr_14589[(8)] = inst_14538);

return statearr_14589;
})();
var statearr_14590_14620 = state_14577__$1;
(statearr_14590_14620[(2)] = null);

(statearr_14590_14620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (9))){
var inst_14537 = (state_14577[(7)]);
var inst_14553 = cljs.core.vec.call(null,inst_14537);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14577__$1,(11),out,inst_14553);
} else {
if((state_val_14578 === (5))){
var inst_14545 = (state_14577[(10)]);
var inst_14541 = (state_14577[(9)]);
var inst_14538 = (state_14577[(8)]);
var inst_14545__$1 = f.call(null,inst_14541);
var inst_14546 = cljs.core._EQ_.call(null,inst_14545__$1,inst_14538);
var inst_14547 = cljs.core.keyword_identical_QMARK_.call(null,inst_14538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14548 = (inst_14546) || (inst_14547);
var state_14577__$1 = (function (){var statearr_14591 = state_14577;
(statearr_14591[(10)] = inst_14545__$1);

return statearr_14591;
})();
if(cljs.core.truth_(inst_14548)){
var statearr_14592_14621 = state_14577__$1;
(statearr_14592_14621[(1)] = (8));

} else {
var statearr_14593_14622 = state_14577__$1;
(statearr_14593_14622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (14))){
var inst_14570 = (state_14577[(2)]);
var inst_14571 = cljs.core.async.close_BANG_.call(null,out);
var state_14577__$1 = (function (){var statearr_14595 = state_14577;
(statearr_14595[(13)] = inst_14570);

return statearr_14595;
})();
var statearr_14596_14623 = state_14577__$1;
(statearr_14596_14623[(2)] = inst_14571);

(statearr_14596_14623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (10))){
var inst_14560 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14597_14624 = state_14577__$1;
(statearr_14597_14624[(2)] = inst_14560);

(statearr_14597_14624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (8))){
var inst_14545 = (state_14577[(10)]);
var inst_14537 = (state_14577[(7)]);
var inst_14541 = (state_14577[(9)]);
var inst_14550 = inst_14537.push(inst_14541);
var tmp14594 = inst_14537;
var inst_14537__$1 = tmp14594;
var inst_14538 = inst_14545;
var state_14577__$1 = (function (){var statearr_14598 = state_14577;
(statearr_14598[(7)] = inst_14537__$1);

(statearr_14598[(14)] = inst_14550);

(statearr_14598[(8)] = inst_14538);

return statearr_14598;
})();
var statearr_14599_14625 = state_14577__$1;
(statearr_14599_14625[(2)] = null);

(statearr_14599_14625[(1)] = (2));


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
});})(c__11834__auto___14611,out))
;
return ((function (switch__11722__auto__,c__11834__auto___14611,out){
return (function() {
var cljs$core$async$state_machine__11723__auto__ = null;
var cljs$core$async$state_machine__11723__auto____0 = (function (){
var statearr_14603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14603[(0)] = cljs$core$async$state_machine__11723__auto__);

(statearr_14603[(1)] = (1));

return statearr_14603;
});
var cljs$core$async$state_machine__11723__auto____1 = (function (state_14577){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_14577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e14604){if((e14604 instanceof Object)){
var ex__11726__auto__ = e14604;
var statearr_14605_14626 = state_14577;
(statearr_14605_14626[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14627 = state_14577;
state_14577 = G__14627;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
cljs$core$async$state_machine__11723__auto__ = function(state_14577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11723__auto____1.call(this,state_14577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11723__auto____0;
cljs$core$async$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11723__auto____1;
return cljs$core$async$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___14611,out))
})();
var state__11836__auto__ = (function (){var statearr_14606 = f__11835__auto__.call(null);
(statearr_14606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___14611);

return statearr_14606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___14611,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map