<template>
  <div class="articles">
    <nuxt-link  v-for="(article, i) in articles" :key="i" :to="article.to" class="article">
      <div class="thumbnail-img">
        <img class="thumbnail-img" :alt="article.alt" :src="article.src" />
      </div>
      <p>{{article.tit}}</p>
    </nuxt-link>   
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          to: '',
          src: '',
          alt: '',
          tit: 'sample'
        },
      ]
    }
  }
}
</script>
