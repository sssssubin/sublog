export { default as AppLogo } from '../..\\components\\AppLogo.vue'
export { default as Link } from '../..\\components\\Link.vue'
export { default as TextMoreView } from '../..\\components\\TextMoreView.vue'
export { default as TheTermsAgree } from '../..\\components\\TheTermsAgree.vue'
export { default as AccordionBaseAccordion } from '../..\\components\\accordion\\BaseAccordion.vue'
export { default as FormBaseCheckBox } from '../..\\components\\form\\BaseCheckBox.vue'
export { default as InteractionShapeAni } from '../..\\components\\interaction\\ShapeAni.vue'
export { default as UtilWindowEvents } from '../..\\components\\util\\WindowEvents.vue'

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
