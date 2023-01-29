import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c25af472 = () => interopDefault(import('..\\pages\\study.vue' /* webpackChunkName: "pages/study" */))
const _2f9a10db = () => interopDefault(import('..\\pages\\study\\index.vue' /* webpackChunkName: "pages/study/index" */))
const _5abda1d5 = () => interopDefault(import('..\\pages\\study\\animation\\index.vue' /* webpackChunkName: "pages/study/animation/index" */))
const _74582a72 = () => interopDefault(import('..\\pages\\study\\interaction\\index.vue' /* webpackChunkName: "pages/study/interaction/index" */))
const _71fb3071 = () => interopDefault(import('..\\pages\\study\\sample\\index.vue' /* webpackChunkName: "pages/study/sample/index" */))
const _14554448 = () => interopDefault(import('..\\pages\\study\\animation\\shapeAni.vue' /* webpackChunkName: "pages/study/animation/shapeAni" */))
const _703fe896 = () => interopDefault(import('..\\pages\\study\\interaction\\moreView.vue' /* webpackChunkName: "pages/study/interaction/moreView" */))
const _2181f84a = () => interopDefault(import('..\\pages\\study\\interaction\\theTermAgree.vue' /* webpackChunkName: "pages/study/interaction/theTermAgree" */))
const _39881760 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/sublog/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/study",
    component: _c25af472,
    children: [{
      path: "",
      component: _2f9a10db,
      name: "study"
    }, {
      path: "animation",
      component: _5abda1d5,
      name: "study-animation"
    }, {
      path: "interaction",
      component: _74582a72,
      name: "study-interaction"
    }, {
      path: "sample",
      component: _71fb3071,
      name: "study-sample"
    }, {
      path: "animation/shapeAni",
      component: _14554448,
      name: "study-animation-shapeAni"
    }, {
      path: "interaction/moreView",
      component: _703fe896,
      name: "study-interaction-moreView"
    }, {
      path: "interaction/theTermAgree",
      component: _2181f84a,
      name: "study-interaction-theTermAgree"
    }]
  }, {
    path: "/",
    component: _39881760,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
