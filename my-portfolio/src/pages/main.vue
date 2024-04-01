<template>
  <main>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Work></Work>
  </main>
</template>

<script>
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Skills from "../components/Skills.vue"
import Work from "../components/Work.vue"

export default {
  components: {
    Home,
    About,
    Skills,
    Work,
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
</style>
