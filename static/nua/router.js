import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4da560d0 = () => interopDefault(import('../../pages/Administrador/index.vue' /* webpackChunkName: "pages/Administrador/index" */))
const _0ccbe06c = () => interopDefault(import('../../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _57af1eec = () => interopDefault(import('../../pages/recursos.vue' /* webpackChunkName: "pages/recursos" */))
const _7fb16b4a = () => interopDefault(import('../../pages/retina.vue' /* webpackChunkName: "pages/retina" */))
const _e3c3bb80 = () => interopDefault(import('../../pages/Administrador/nuevapelicula.vue' /* webpackChunkName: "pages/Administrador/nuevapelicula" */))
const _596d1d69 = () => interopDefault(import('../../pages/Administrador/salidas.vue' /* webpackChunkName: "pages/Administrador/salidas" */))
const _25ad603a = () => interopDefault(import('../../pages/Estadisticas/base.vue' /* webpackChunkName: "pages/Estadisticas/base" */))
const _5116494a = () => interopDefault(import('../../pages/Estadisticas/paises.vue' /* webpackChunkName: "pages/Estadisticas/paises" */))
const _e568e050 = () => interopDefault(import('../../pages/Estadisticas/peliculas.vue' /* webpackChunkName: "pages/Estadisticas/peliculas" */))
const _d8a9e49a = () => interopDefault(import('../../pages/Estadisticas/peliculasmes.vue' /* webpackChunkName: "pages/Estadisticas/peliculasmes" */))
const _60110ee0 = () => interopDefault(import('../../pages/Estadisticas/publicadas.vue' /* webpackChunkName: "pages/Estadisticas/publicadas" */))
const _0e5db42e = () => interopDefault(import('../../pages/Pais/_id/index.vue' /* webpackChunkName: "pages/Pais/_id/index" */))
const _092effc2 = () => interopDefault(import('../../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Administrador",
    component: _4da560d0,
    name: "Administrador"
  }, {
    path: "/inspire",
    component: _0ccbe06c,
    name: "inspire"
  }, {
    path: "/recursos",
    component: _57af1eec,
    name: "recursos"
  }, {
    path: "/retina",
    component: _7fb16b4a,
    name: "retina"
  }, {
    path: "/Administrador/nuevapelicula",
    component: _e3c3bb80,
    name: "Administrador-nuevapelicula"
  }, {
    path: "/Administrador/salidas",
    component: _596d1d69,
    name: "Administrador-salidas"
  }, {
    path: "/Estadisticas/base",
    component: _25ad603a,
    name: "Estadisticas-base"
  }, {
    path: "/Estadisticas/paises",
    component: _5116494a,
    name: "Estadisticas-paises"
  }, {
    path: "/Estadisticas/peliculas",
    component: _e568e050,
    name: "Estadisticas-peliculas"
  }, {
    path: "/Estadisticas/peliculasmes",
    component: _d8a9e49a,
    name: "Estadisticas-peliculasmes"
  }, {
    path: "/Estadisticas/publicadas",
    component: _60110ee0,
    name: "Estadisticas-publicadas"
  }, {
    path: "/Pais/:id?",
    component: _0e5db42e,
    name: "Pais-id"
  }, {
    path: "/",
    component: _092effc2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
