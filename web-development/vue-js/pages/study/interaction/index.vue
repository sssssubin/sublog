<template>
  <div class="articles">
    <nuxt-link
      v-for="(article, i) in articles"
      :key="i"
      :to="article.to"
      class="article"
    >
      <div class="thumbnail-img">
        <img class="thumbnail-img" :alt="article.alt" :src="article.src" />
      </div>
      <p>{{ article.tit }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          to: "/study/interaction/moreView",
          src: "thumbnail1.png",
          alt: "",
          tit: "텍스트 더 보기",
        },
        {
          to: "/study/interaction/theTermAgree",
          src: "thumbnail2.png",
          alt: "",
          tit: "전체 동의 & 버튼 활성화",
        },
        {
          to: "/study/interaction/slider",
          src: "",
          alt: "",
          tit: "slider",
        },
      ],
    }
  },
}
</script>
