<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">sublog</h1>
      <div class="links">
        <nuxt-link to="/study/interaction/" class="button--green"
          >study</nuxt-link
        >
        <a href="https://nuxtjs.org/" target="_blank" class="button--grey"
          >Documentation</a
        >
        <a
          href="https://github.com/k-forest/sublog.git"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a
          href="https://www.notion.so/k-forest/Javascript-a3bcb7f19dd6422e8c8cc3cd027ffdf4"
          target="_blank"
          class="button--grey"
        >
          Notion
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue"
export default {
  components: {
    AppLogo,
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  display: block;
  font-weight: 700;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  > a {
    flex-grow: 1;
    &:first-child {
      flex-grow: 3;
      width: 100%;
    }
  }
}
</style>
