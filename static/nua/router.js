import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1381a140 = () => interopDefault(import('../../pages/Administrador/index.vue' /* webpackChunkName: "pages/Administrador/index" */))
const _3409365a = () => interopDefault(import('../../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _5ef111cb = () => interopDefault(import('../../pages/retina.vue' /* webpackChunkName: "pages/retina" */))
const _058860d0 = () => interopDefault(import('../../pages/Administrador/nuevapelicula.vue' /* webpackChunkName: "pages/Administrador/nuevapelicula" */))
const _42cd87f9 = () => interopDefault(import('../../pages/Administrador/salidas.vue' /* webpackChunkName: "pages/Administrador/salidas" */))
const _47f4fb1a = () => interopDefault(import('../../pages/Estadisticas/base.vue' /* webpackChunkName: "pages/Estadisticas/base" */))
const _ffe2ac2a = () => interopDefault(import('../../pages/Estadisticas/paises.vue' /* webpackChunkName: "pages/Estadisticas/paises" */))
const _600f1170 = () => interopDefault(import('../../pages/Estadisticas/peliculas.vue' /* webpackChunkName: "pages/Estadisticas/peliculas" */))
const _aa989f7a = () => interopDefault(import('../../pages/Estadisticas/peliculasmes.vue' /* webpackChunkName: "pages/Estadisticas/peliculasmes" */))
const _3a3101c0 = () => interopDefault(import('../../pages/Estadisticas/publicadas.vue' /* webpackChunkName: "pages/Estadisticas/publicadas" */))
const _6257054e = () => interopDefault(import('../../pages/Pais/_id/index.vue' /* webpackChunkName: "pages/Pais/_id/index" */))
const _2f568a52 = () => interopDefault(import('../../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Administrador",
      component: _1381a140,
      name: "Administrador"
    }, {
      path: "/inspire",
      component: _3409365a,
      name: "inspire"
    }, {
      path: "/retina",
      component: _5ef111cb,
      name: "retina"
    }, {
      path: "/Administrador/nuevapelicula",
      component: _058860d0,
      name: "Administrador-nuevapelicula"
    }, {
      path: "/Administrador/salidas",
      component: _42cd87f9,
      name: "Administrador-salidas"
    }, {
      path: "/Estadisticas/base",
      component: _47f4fb1a,
      name: "Estadisticas-base"
    }, {
      path: "/Estadisticas/paises",
      component: _ffe2ac2a,
      name: "Estadisticas-paises"
    }, {
      path: "/Estadisticas/peliculas",
      component: _600f1170,
      name: "Estadisticas-peliculas"
    }, {
      path: "/Estadisticas/peliculasmes",
      component: _aa989f7a,
      name: "Estadisticas-peliculasmes"
    }, {
      path: "/Estadisticas/publicadas",
      component: _3a3101c0,
      name: "Estadisticas-publicadas"
    }, {
      path: "/Pais/:id?",
      component: _6257054e,
      name: "Pais-id"
    }, {
      path: "/",
      component: _2f568a52,
      name: "index"
    }],

    fallback: false
  })
}
