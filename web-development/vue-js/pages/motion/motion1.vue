<template>
  <div>    
    <!-- {{ isMobile }} -->
    <MainVisualAnimation />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import MainVisualAnimation from "~/components/mainContainers/container_1.vue"

export default {
  components: {
    MainVisualAnimation
  },
  computed: {
    ...mapGetters("ui", {
      isMobile: "getIsMobile",
    })
  }
}
</script>