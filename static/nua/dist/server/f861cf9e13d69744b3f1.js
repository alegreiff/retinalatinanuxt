exports.ids=[1],exports.modules={232:function(t,e,r){"use strict";r.r(e);var o=r(13),l={middleware:["check-auth","auth"],name:"estadisticas_base",data:()=>({}),computed:{...Object(o.mapGetters)(["peliculasCargadas"]),activas(){return this.lodash.filter(this.peliculasCargadas,["activa","SI"])},inactivas(){return this.lodash.filter(this.peliculasCargadas,["activa","NO"])}},methods:{muestradatos(t){let e=[];return e.push({cantidad:t.length}),e.push({largos:this.lodash.filter(t,["formato","Largometraje"]).length}),e.push({cortos:this.lodash.filter(t,["formato","Cortometraje"]).length}),e.push({documentales:this.lodash.filter(t,["genero","Documental"]).length}),e.push({ficciones:this.lodash.filter(t,["genero","Ficción"]).length}),e.push({minutos:this.lodash.sumBy(t,"duracion")}),e}},mounted(){if(this.peliculasCargadas.length<=0)return this.$nuxt.error({statusCode:666,message:"Mala carga"});this.tituloSeccion("Ensayo")}},c=r(9),h=r(11),n=r.n(h),d=r(43),m=r(44);var component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.activas))+" ")])]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.peliculasCargadas))+" ")])]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("pre",[t._v(" "+t._s(t.muestradatos(t.inactivas))+" ")])])],1)},[],!1,function(t){},"9b8572ce","5a6ee6ec");e.default=component.exports;n()(component,{VFlex:d.a,VLayout:m.a})}};
//# sourceMappingURL=f861cf9e13d69744b3f1.js.map