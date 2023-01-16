<template>
  <div class="articles">
    <article class="article" style="max-width: 200px;">
      <strong class="article-tit">더보기 기능</strong>
      <TextMoreViewVue />
    </article>
  </div>
</template>

<script>
import TextMoreViewVue from "~/components/TextMoreView.vue"

export default {
  components: {
    TextMoreViewVue,
  },
}
</script>
