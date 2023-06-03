<template>
  <MainSlider :mainSlides="mainSlides">
    <swiper-slide v-for="(slide, i) in mainSlides" :key="i">
      <span v-if="slide.tit" class="screen-out">{{ slide.tit }}</span>
      <ContentType1 v-if="slide.cont" :cont="slide.cont" />
    </swiper-slide>
  </MainSlider>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import MainSlider from "~/components/slider/MainSlider";
import ContentType1 from "~/components/content/ContentType1.vue";

export default {
  name: "learning-systems",
  components: { Swiper, SwiperSlide, MainSlider, ContentType1 },
  data() {
    return {
      mainSlides: [
        {
          tit: "학습시스템",
          cont: [
            {
              cards: [{ tit: "card 1" }],
              subSlides: [
                { cards: [{ tit: "slide 1" }] },
                { cards: [{ tit: "slide 2" }] },
                { cards: [{ tit: "slide 3" }] },
                { cards: [{ tit: "slide 4" }] },
                { cards: [{ tit: "slide 5" }] },
              ],
            },
            {
              cards: [{ tit: "card 2" }, { tit: "card 3" }, { tit: "card 4" }],
            },
          ],
        },
        {
          tit: "관리시스템",
        },
        {
          tit: "독서특강 프로그램",
        },
      ],
    };
  },
};
</script>
