<template>
  <div class="base-swiper sub" v-if="subSlides">
    <!-- // Sub Swiper -->
    <swiper ref="subMySwiper" class="swiper sub" :options="subSwiperOption">
      <slot></slot>

      <div class="swiper-pagination sub" slot="pagination"></div>
      <div class="swiper-button-prev sub" slot="button-prev"></div>
      <div class="swiper-button-next sub" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "sub-swiper",
  components: { Swiper, SwiperSlide },
  props: {
    subSlides: { type: Array },
  },
  data() {
    return {
      subSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination.sub",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.sub",
          prevEl: ".swiper-button-prev.sub",
        },
      },
    };
  },
};
</script>
