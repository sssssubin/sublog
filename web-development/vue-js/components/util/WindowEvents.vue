<script>
export default {
  methods: {
    reSizeEvent() {
      const desktopSize = 768
      this.$store.dispatch("ui/setMobile", window.innerWidth < desktopSize)
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.reSizeEvent)
    window.scrollTo(0, 0)
    this.reSizeEvent()
  },
}
</script>

<template>
  <div>
    
  </div>
</template>
