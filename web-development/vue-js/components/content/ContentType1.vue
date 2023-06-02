<template>
  <div class="cont-wrap">
    <!-- // content -->
    <div :class="`cont cont${i + 1}`" v-for="(detail, i) in cont" :key="i">
      <!-- // Card style -->
      <Card :cards="detail.cards" />

      <!-- // Sub Swiper -->
      <SubSlider :subSlides="detail.subSlides">
        <swiper-slide v-for="(slide, i) in detail.subSlides" :key="i">
          <Card :cards="slide.cards" />
        </swiper-slide>
      </SubSlider>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SubSlider from "~/components/slider/SubSlider";
import Card from "~/components/card/Card";

export default {
  name: "content-type1",
  components: { Swiper, SwiperSlide, SubSlider, Card },
  props: {
    cont: { type: Array },
  },
};
</script>

<style lang="scss">
.cont-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
