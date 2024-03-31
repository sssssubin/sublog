<template>
  <div id="app">
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentLayout() {
      const matchedRoute = this.$route.matched.find(route => route.meta.layout);
      return matchedRoute ? matchedRoute.meta.layout : "div";
    },
  },
};
</script>