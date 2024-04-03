<template>
  <div id="app" :data-breakpoint-mode="isMobile ? 'mobile' : 'pc'">
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    currentLayout() {
      const matchedRoute = this.$route.matched.find(route => route.meta.layout);
      return matchedRoute ? matchedRoute.meta.layout : "div";
    },
  },
};
</script>