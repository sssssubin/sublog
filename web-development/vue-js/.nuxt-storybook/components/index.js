export const AppLogo = () => import('../..\\components\\AppLogo.vue' /* webpackChunkName: "components/app-logo" */).then(c => wrapFunctional(c.default || c))
export const Link = () => import('../..\\components\\Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c))
export const TextMoreView = () => import('../..\\components\\TextMoreView.vue' /* webpackChunkName: "components/text-more-view" */).then(c => wrapFunctional(c.default || c))
export const TheTermsAgree = () => import('../..\\components\\TheTermsAgree.vue' /* webpackChunkName: "components/the-terms-agree" */).then(c => wrapFunctional(c.default || c))
export const AccordionBaseAccordion = () => import('../..\\components\\accordion\\BaseAccordion.vue' /* webpackChunkName: "components/accordion-base-accordion" */).then(c => wrapFunctional(c.default || c))
export const FormBaseCheckBox = () => import('../..\\components\\form\\BaseCheckBox.vue' /* webpackChunkName: "components/form-base-check-box" */).then(c => wrapFunctional(c.default || c))
export const InteractionShapeAni = () => import('../..\\components\\interaction\\ShapeAni.vue' /* webpackChunkName: "components/interaction-shape-ani" */).then(c => wrapFunctional(c.default || c))
export const UtilWindowEvents = () => import('../..\\components\\util\\WindowEvents.vue' /* webpackChunkName: "components/util-window-events" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
