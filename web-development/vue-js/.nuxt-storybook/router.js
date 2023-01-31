import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _416f33c5 = () => interopDefault(import('..\\pages\\study.vue' /* webpackChunkName: "pages/study" */))
const _3b896dc6 = () => interopDefault(import('..\\pages\\study\\index.vue' /* webpackChunkName: "pages/study/index" */))
const _41760c53 = () => interopDefault(import('..\\pages\\study\\animation\\index.vue' /* webpackChunkName: "pages/study/animation/index" */))
const _3fc8a476 = () => interopDefault(import('..\\pages\\study\\interaction\\index.vue' /* webpackChunkName: "pages/study/interaction/index" */))
const _258906b3 = () => interopDefault(import('..\\pages\\study\\sample\\index.vue' /* webpackChunkName: "pages/study/sample/index" */))
const _4305e10a = () => interopDefault(import('..\\pages\\study\\animation\\shapeAni.vue' /* webpackChunkName: "pages/study/animation/shapeAni" */))
const _0cdc7ff7 = () => interopDefault(import('..\\pages\\study\\interaction\\moreView.vue' /* webpackChunkName: "pages/study/interaction/moreView" */))
const _227308e8 = () => interopDefault(import('..\\pages\\study\\interaction\\theTermAgree.vue' /* webpackChunkName: "pages/study/interaction/theTermAgree" */))
const _f44ebb64 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _416f33c5,
    children: [{
      path: "",
      component: _3b896dc6,
      name: "study"
    }, {
      path: "animation",
      component: _41760c53,
      name: "study-animation"
    }, {
      path: "interaction",
      component: _3fc8a476,
      name: "study-interaction"
    }, {
      path: "sample",
      component: _258906b3,
      name: "study-sample"
    }, {
      path: "animation/shapeAni",
      component: _4305e10a,
      name: "study-animation-shapeAni"
    }, {
      path: "interaction/moreView",
      component: _0cdc7ff7,
      name: "study-interaction-moreView"
    }, {
      path: "interaction/theTermAgree",
      component: _227308e8,
      name: "study-interaction-theTermAgree"
    }]
  }, {
    path: "/",
    component: _f44ebb64,
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
