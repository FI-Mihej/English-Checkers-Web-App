// Compiled by ClojureScript 1.9.89 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__18769_SHARP_){
var and__6239__auto__ = pred.call(null,u,p1__18769_SHARP_);
if(cljs.core.truth_(and__6239__auto__)){
return fdb.pred.call(null,p1__18769_SHARP_);
} else {
return and__6239__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__18770_SHARP_){
return pred.call(null,db,p1__18770_SHARP_);
}),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args18771 = [];
var len__7326__auto___18774 = arguments.length;
var i__7327__auto___18775 = (0);
while(true){
if((i__7327__auto___18775 < len__7326__auto___18774)){
args18771.push((arguments[i__7327__auto___18775]));

var G__18776 = (i__7327__auto___18775 + (1));
i__7327__auto___18775 = G__18776;
continue;
} else {
}
break;
}

var G__18773 = args18771.length;
switch (G__18773) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18771.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args18778 = [];
var len__7326__auto___18781 = arguments.length;
var i__7327__auto___18782 = (0);
while(true){
if((i__7327__auto___18782 < len__7326__auto___18781)){
args18778.push((arguments[i__7327__auto___18782]));

var G__18783 = (i__7327__auto___18782 + (1));
i__7327__auto___18782 = G__18783;
continue;
} else {
}
break;
}

var G__18780 = args18778.length;
switch (G__18780) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18778.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args18785 = [];
var len__7326__auto___18788 = arguments.length;
var i__7327__auto___18789 = (0);
while(true){
if((i__7327__auto___18789 < len__7326__auto___18788)){
args18785.push((arguments[i__7327__auto___18789]));

var G__18790 = (i__7327__auto___18789 + (1));
i__7327__auto___18789 = G__18790;
continue;
} else {
}
break;
}

var G__18787 = args18785.length;
switch (G__18787) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18785.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__6239__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__6239__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__6239__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args18796 = [];
var len__7326__auto___18799 = arguments.length;
var i__7327__auto___18800 = (0);
while(true){
if((i__7327__auto___18800 < len__7326__auto___18799)){
args18796.push((arguments[i__7327__auto___18800]));

var G__18801 = (i__7327__auto___18800 + (1));
i__7327__auto___18800 = G__18801;
continue;
} else {
}
break;
}

var G__18798 = args18796.length;
switch (G__18798) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18796.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args18803 = [];
var len__7326__auto___18806 = arguments.length;
var i__7327__auto___18807 = (0);
while(true){
if((i__7327__auto___18807 < len__7326__auto___18806)){
args18803.push((arguments[i__7327__auto___18807]));

var G__18808 = (i__7327__auto___18807 + (1));
i__7327__auto___18807 = G__18808;
continue;
} else {
}
break;
}

var G__18805 = args18803.length;
switch (G__18805) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18803.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args18810 = [];
var len__7326__auto___18823 = arguments.length;
var i__7327__auto___18824 = (0);
while(true){
if((i__7327__auto___18824 < len__7326__auto___18823)){
args18810.push((arguments[i__7327__auto___18824]));

var G__18825 = (i__7327__auto___18824 + (1));
i__7327__auto___18824 = G__18825;
continue;
} else {
}
break;
}

var G__18812 = args18810.length;
switch (G__18812) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18810.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__18813_18827 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__18814_18828 = null;
var count__18815_18829 = (0);
var i__18816_18830 = (0);
while(true){
if((i__18816_18830 < count__18815_18829)){
var vec__18817_18831 = cljs.core._nth.call(null,chunk__18814_18828,i__18816_18830);
var __18832 = cljs.core.nth.call(null,vec__18817_18831,(0),null);
var callback_18833 = cljs.core.nth.call(null,vec__18817_18831,(1),null);
callback_18833.call(null,report);

var G__18834 = seq__18813_18827;
var G__18835 = chunk__18814_18828;
var G__18836 = count__18815_18829;
var G__18837 = (i__18816_18830 + (1));
seq__18813_18827 = G__18834;
chunk__18814_18828 = G__18835;
count__18815_18829 = G__18836;
i__18816_18830 = G__18837;
continue;
} else {
var temp__4657__auto___18838 = cljs.core.seq.call(null,seq__18813_18827);
if(temp__4657__auto___18838){
var seq__18813_18839__$1 = temp__4657__auto___18838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18813_18839__$1)){
var c__7062__auto___18840 = cljs.core.chunk_first.call(null,seq__18813_18839__$1);
var G__18841 = cljs.core.chunk_rest.call(null,seq__18813_18839__$1);
var G__18842 = c__7062__auto___18840;
var G__18843 = cljs.core.count.call(null,c__7062__auto___18840);
var G__18844 = (0);
seq__18813_18827 = G__18841;
chunk__18814_18828 = G__18842;
count__18815_18829 = G__18843;
i__18816_18830 = G__18844;
continue;
} else {
var vec__18820_18845 = cljs.core.first.call(null,seq__18813_18839__$1);
var __18846 = cljs.core.nth.call(null,vec__18820_18845,(0),null);
var callback_18847 = cljs.core.nth.call(null,vec__18820_18845,(1),null);
callback_18847.call(null,report);

var G__18848 = cljs.core.next.call(null,seq__18813_18839__$1);
var G__18849 = null;
var G__18850 = (0);
var G__18851 = (0);
seq__18813_18827 = G__18848;
chunk__18814_18828 = G__18849;
count__18815_18829 = G__18850;
i__18816_18830 = G__18851;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args18853 = [];
var len__7326__auto___18866 = arguments.length;
var i__7327__auto___18867 = (0);
while(true){
if((i__7327__auto___18867 < len__7326__auto___18866)){
args18853.push((arguments[i__7327__auto___18867]));

var G__18868 = (i__7327__auto___18867 + (1));
i__7327__auto___18867 = G__18868;
continue;
} else {
}
break;
}

var G__18855 = args18853.length;
switch (G__18855) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18853.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__18852_SHARP_){
return cljs.core.assoc.call(null,p1__18852_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__18856_18870 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__18857_18871 = null;
var count__18858_18872 = (0);
var i__18859_18873 = (0);
while(true){
if((i__18859_18873 < count__18858_18872)){
var vec__18860_18874 = cljs.core._nth.call(null,chunk__18857_18871,i__18859_18873);
var __18875 = cljs.core.nth.call(null,vec__18860_18874,(0),null);
var callback_18876 = cljs.core.nth.call(null,vec__18860_18874,(1),null);
callback_18876.call(null,report);

var G__18877 = seq__18856_18870;
var G__18878 = chunk__18857_18871;
var G__18879 = count__18858_18872;
var G__18880 = (i__18859_18873 + (1));
seq__18856_18870 = G__18877;
chunk__18857_18871 = G__18878;
count__18858_18872 = G__18879;
i__18859_18873 = G__18880;
continue;
} else {
var temp__4657__auto___18881 = cljs.core.seq.call(null,seq__18856_18870);
if(temp__4657__auto___18881){
var seq__18856_18882__$1 = temp__4657__auto___18881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18856_18882__$1)){
var c__7062__auto___18883 = cljs.core.chunk_first.call(null,seq__18856_18882__$1);
var G__18884 = cljs.core.chunk_rest.call(null,seq__18856_18882__$1);
var G__18885 = c__7062__auto___18883;
var G__18886 = cljs.core.count.call(null,c__7062__auto___18883);
var G__18887 = (0);
seq__18856_18870 = G__18884;
chunk__18857_18871 = G__18885;
count__18858_18872 = G__18886;
i__18859_18873 = G__18887;
continue;
} else {
var vec__18863_18888 = cljs.core.first.call(null,seq__18856_18882__$1);
var __18889 = cljs.core.nth.call(null,vec__18863_18888,(0),null);
var callback_18890 = cljs.core.nth.call(null,vec__18863_18888,(1),null);
callback_18890.call(null,report);

var G__18891 = cljs.core.next.call(null,seq__18856_18882__$1);
var G__18892 = null;
var G__18893 = (0);
var G__18894 = (0);
seq__18856_18870 = G__18891;
chunk__18857_18871 = G__18892;
count__18858_18872 = G__18893;
i__18859_18873 = G__18894;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args18895 = [];
var len__7326__auto___18898 = arguments.length;
var i__7327__auto___18899 = (0);
while(true){
if((i__7327__auto___18899 < len__7326__auto___18898)){
args18895.push((arguments[i__7327__auto___18899]));

var G__18900 = (i__7327__auto___18899 + (1));
i__7327__auto___18899 = G__18900;
continue;
} else {
}
break;
}

var G__18897 = args18895.length;
switch (G__18897) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18895.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__18902_18912 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__18903_18913 = null;
var count__18904_18914 = (0);
var i__18905_18915 = (0);
while(true){
if((i__18905_18915 < count__18904_18914)){
var vec__18906_18916 = cljs.core._nth.call(null,chunk__18903_18913,i__18905_18915);
var tag_18917 = cljs.core.nth.call(null,vec__18906_18916,(0),null);
var cb_18918 = cljs.core.nth.call(null,vec__18906_18916,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_18917,cb_18918);

var G__18919 = seq__18902_18912;
var G__18920 = chunk__18903_18913;
var G__18921 = count__18904_18914;
var G__18922 = (i__18905_18915 + (1));
seq__18902_18912 = G__18919;
chunk__18903_18913 = G__18920;
count__18904_18914 = G__18921;
i__18905_18915 = G__18922;
continue;
} else {
var temp__4657__auto___18923 = cljs.core.seq.call(null,seq__18902_18912);
if(temp__4657__auto___18923){
var seq__18902_18924__$1 = temp__4657__auto___18923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18902_18924__$1)){
var c__7062__auto___18925 = cljs.core.chunk_first.call(null,seq__18902_18924__$1);
var G__18926 = cljs.core.chunk_rest.call(null,seq__18902_18924__$1);
var G__18927 = c__7062__auto___18925;
var G__18928 = cljs.core.count.call(null,c__7062__auto___18925);
var G__18929 = (0);
seq__18902_18912 = G__18926;
chunk__18903_18913 = G__18927;
count__18904_18914 = G__18928;
i__18905_18915 = G__18929;
continue;
} else {
var vec__18909_18930 = cljs.core.first.call(null,seq__18902_18924__$1);
var tag_18931 = cljs.core.nth.call(null,vec__18909_18930,(0),null);
var cb_18932 = cljs.core.nth.call(null,vec__18909_18930,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_18931,cb_18932);

var G__18933 = cljs.core.next.call(null,seq__18902_18924__$1);
var G__18934 = null;
var G__18935 = (0);
var G__18936 = (0);
seq__18902_18912 = G__18933;
chunk__18903_18913 = G__18934;
count__18904_18914 = G__18935;
i__18905_18915 = G__18936;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args18937 = [];
var len__7326__auto___18940 = arguments.length;
var i__7327__auto___18941 = (0);
while(true){
if((i__7327__auto___18941 < len__7326__auto___18940)){
args18937.push((arguments[i__7327__auto___18941]));

var G__18942 = (i__7327__auto___18941 + (1));
i__7327__auto___18941 = G__18942;
continue;
} else {
}
break;
}

var G__18939 = args18937.length;
switch (G__18939) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18937.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args18944 = [];
var len__7326__auto___18950 = arguments.length;
var i__7327__auto___18951 = (0);
while(true){
if((i__7327__auto___18951 < len__7326__auto___18950)){
args18944.push((arguments[i__7327__auto___18951]));

var G__18952 = (i__7327__auto___18951 + (1));
i__7327__auto___18951 = G__18952;
continue;
} else {
}
break;
}

var G__18946 = args18944.length;
switch (G__18946) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18944.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core18947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core18947 = (function (conn,tx_data,tx_meta,res,meta18948){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta18948 = meta18948;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core18947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_18949,meta18948__$1){
var self__ = this;
var _18949__$1 = this;
return (new datascript.core.t_datascript$core18947(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta18948__$1));
});})(res))
;

datascript.core.t_datascript$core18947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_18949){
var self__ = this;
var _18949__$1 = this;
return self__.meta18948;
});})(res))
;

datascript.core.t_datascript$core18947.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core18947.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core18947.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core18947.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta18948","meta18948",-1290578369,null)], null);
});})(res))
;

datascript.core.t_datascript$core18947.cljs$lang$type = true;

datascript.core.t_datascript$core18947.cljs$lang$ctorStr = "datascript.core/t_datascript$core18947";

datascript.core.t_datascript$core18947.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"datascript.core/t_datascript$core18947");
});})(res))
;

datascript.core.__GT_t_datascript$core18947 = ((function (res){
return (function datascript$core$__GT_t_datascript$core18947(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta18948){
return (new datascript.core.t_datascript$core18947(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta18948));
});})(res))
;

}

return (new datascript.core.t_datascript$core18947(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core18957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core18957 = (function (future_call,f,res,realized,meta18958){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta18958 = meta18958;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core18957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_18959,meta18958__$1){
var self__ = this;
var _18959__$1 = this;
return (new datascript.core.t_datascript$core18957(self__.future_call,self__.f,self__.res,self__.realized,meta18958__$1));
});})(res,realized))
;

datascript.core.t_datascript$core18957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_18959){
var self__ = this;
var _18959__$1 = this;
return self__.meta18958;
});})(res,realized))
;

datascript.core.t_datascript$core18957.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core18957.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core18957.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core18957.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta18958","meta18958",-665712088,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core18957.cljs$lang$type = true;

datascript.core.t_datascript$core18957.cljs$lang$ctorStr = "datascript.core/t_datascript$core18957";

datascript.core.t_datascript$core18957.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"datascript.core/t_datascript$core18957");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core18957 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core18957(future_call__$1,f__$1,res__$1,realized__$1,meta18958){
return (new datascript.core.t_datascript$core18957(future_call__$1,f__$1,res__$1,realized__$1,meta18958));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core18957(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args18960 = [];
var len__7326__auto___18963 = arguments.length;
var i__7327__auto___18964 = (0);
while(true){
if((i__7327__auto___18964 < len__7326__auto___18963)){
args18960.push((arguments[i__7327__auto___18964]));

var G__18965 = (i__7327__auto___18964 + (1));
i__7327__auto___18964 = G__18965;
continue;
} else {
}
break;
}

var G__18962 = args18960.length;
switch (G__18962) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18960.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args18967 = [];
var len__7326__auto___18970 = arguments.length;
var i__7327__auto___18971 = (0);
while(true){
if((i__7327__auto___18971 < len__7326__auto___18970)){
args18967.push((arguments[i__7327__auto___18971]));

var G__18972 = (i__7327__auto___18971 + (1));
i__7327__auto___18971 = G__18972;
continue;
} else {
}
break;
}

var G__18969 = args18967.length;
switch (G__18969) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18967.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map