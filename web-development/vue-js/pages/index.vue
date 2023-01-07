<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">sublog</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a
          href="https://www.notion.so/k-forest/Javascript-a3bcb7f19dd6422e8c8cc3cd027ffdf4"
          target="_blank"
          class="button--primary"
        >
          Notion
        </a>
      </div>
      <div class="articles">
        <article class="article">
          <strong class="article-tit">더보기 기능</strong>
          <TextMoreViewVue/>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue"
import TextMoreViewVue from "../components/TextMoreView.vue"

export default {
  components: {
    AppLogo, TextMoreViewVue
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
  max-width: $max-width;
  margin: 0 auto;
}

.subtitle {
  @include font($type: sub-tit);
  color: color(secondary);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--primary {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid color(primary);
  color: color(primary);
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--primary:hover {
  color: #fff;
  background-color: color(primary);
}
</style>
