(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6e6d"],{"1ead":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",{attrs:{type:"card"}},[a("template",{slot:"header"},[t._v("导入 csv")]),a("div",{staticClass:"d2-mb"},[a("el-button",{on:{click:t.download}},[a("d2-icon",{attrs:{name:"download"}}),t._v(" 下载演示 .csv 表格 ")],1)],1),a("div",{staticClass:"d2-mb"},[a("el-upload",{attrs:{"before-upload":t.handleUpload,action:"default"}},[a("el-button",{attrs:{type:"success"}},[a("d2-icon",{attrs:{name:"file-o"}}),t._v(" 选择要导入的 .csv 表格 ")],1)],1)],1),a("el-table",t._b({},"el-table",t.table,!1),t._l(t.table.columns,(function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})})),1)],2)},o=[],l=(a("d81d"),a("b64b"),a("8bbf")),s=a.n(l),c=a("b0416"),d=a.n(c);s.a.use(d.a);var i={data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{handleUpload:function(t){var e=this;return this.$import.csv(t).then((function(t){e.table.columns=Object.keys(t.data[0]).map((function(t){return{label:t,prop:t}})),e.table.data=t.data})),!1},download:function(){window.location.href="http://fairyever.qiniudn.com/d2-admin-import-csv-demo.csv"}}},r=i,u=a("2877"),b=function(t){t.options.__source="src/views/demo/plugins/import/csv.vue"},p=b,m=Object(u["a"])(r,n,o,!1,null,null,null);"function"===typeof p&&p(m);e["default"]=m.exports}}]);