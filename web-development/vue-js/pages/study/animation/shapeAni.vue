<template>
  <!-- {{ isMobile }} -->
  <MainVisualAnimation />
</template>

<script>
import { mapGetters } from "vuex"
import MainVisualAnimation from "~/components/interaction/shapeAni.vue"

export default {
  components: {
    MainVisualAnimation,
  },
  computed: {
    ...mapGetters("ui", {
      isMobile: "getIsMobile",
    }),
  },
}
</script>
