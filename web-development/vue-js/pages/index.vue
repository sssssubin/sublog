<template>
  <section class="container">
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
  </section>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
.title {
  width: 100%;
  display: block;
  font-weight: 700;
  font-size: 25vw;
  line-height: 100%;
  margin-bottom: 60px;
  color: #35495e;
  letter-spacing: 1px;
  @include desktop {    
    font-size: 10vw;
    margin-bottom: 80px;
  }
}
.links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  > a {
    width: 100%;
    flex-grow: 1;
    &:first-child {
      width: 100%;
      flex-grow: 3;
    }
  }
}
</style>
