(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{457:function(t,e,r){"use strict";r.r(e);var o=r(25),n=r(47),l={middleware:["check-auth","auth"],name:"estadisticas_base",data:function(){return{}},computed:Object(o.a)({},Object(n.b)(["peliculasCargadas"]),{activas:function(){return this.lodash.filter(this.peliculasCargadas,["activa","SI"])},inactivas:function(){return this.lodash.filter(this.peliculasCargadas,["activa","NO"])}}),methods:{muestradatos:function(t){var e=[];return e.push({cantidad:t.length}),e.push({largos:this.lodash.filter(t,["formato","Largometraje"]).length}),e.push({cortos:this.lodash.filter(t,["formato","Cortometraje"]).length}),e.push({documentales:this.lodash.filter(t,["genero","Documental"]).length}),e.push({ficciones:this.lodash.filter(t,["genero","Ficción"]).length}),e.push({minutos:this.lodash.sumBy(t,"duracion")}),e}},mounted:function(){if(this.peliculasCargadas.length<=0)return this.$nuxt.error({statusCode:666,message:"Mala carga"});this.tituloSeccion("Ensayo")}},c=r(22),h=r(34),d=r.n(h),f=r(116),m=r(117),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.activas))+" ")])]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.peliculasCargadas))+" ")])]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.inactivas))+" ")])])],1)},[],!1,null,"4bfdd55d",null);e.default=component.exports;d()(component,{VFlex:f.a,VLayout:m.a})}}]);