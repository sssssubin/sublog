<template>
  <div class="articles">
    <nuxt-link v-for="(article, i) in articles" :key="i" :to="article.to" class="article">
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
          to: '/study/animation/shapeAni',
          src: '/motion1.png',
          alt: '',
          tit: '도형 애니메이션'
        },
        {
          to: '/study/animation/',
          src: '',
          alt: '',
          tit: ''
        },
      ]
    }
  }
}
</script>