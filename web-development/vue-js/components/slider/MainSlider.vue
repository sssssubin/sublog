<template>
  <client-only v-if="mainSlides">
    <div class="base-swiper main">
      <div class="horizonScroll" slot="pagination">
        <div class="swiper-pagination main"></div>
      </div>

      <!-- // Main Swiper -->
      <swiper ref="mySwiper" class="swiper main" :options="mainSwiperOption">
        <slot></slot>
      </swiper>

      <!-- <div class="swiper-button-prev main" slot="button-prev"></div>
      <div class="swiper-button-next main" slot="button-next"></div> -->
    </div>
  </client-only>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "main-swiper",
  components: { Swiper, SwiperSlide },
  props: {
    mainSlides: { type: Array },
  },
  data() {
    return {
      mainSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        allowTouchMove: true, // 스와이프 작동 X
        pagination: {
          el: ".swiper-pagination.main",
          clickable: true,
          renderBullet: function (index, className) {
            const bullets = document.querySelectorAll(
              ".swiper.main > .swiper-wrapper > .swiper-slide"
            );
            let bulletTitle = bullets[index].dataset.slideTitle;
            return `<a href="#" class="${className} horizonScroll__item"><span class="horizonScroll__itemText">${bulletTitle}</span></a>`;
          },
        },
        // navigation: {
        //   nextEl: ".swiper-button-next.main",
        //   prevEl: ".swiper-button-prev.main",
        // },
        on: {
          init: () => {
            const BOX = this.$refs.mySwiper.$el.previousElementSibling;
            const BOX_ITEM = BOX.childNodes[0];
            BOX_ITEM.style.width = "max-content";
            BOX_ITEM.style.gap = "15px";
          },
          realIndexChange: () => {
            const MAIN_SWIPER = this.$refs.mySwiper.$el.swiper;
            const BOX = this.$refs.mySwiper.$el.previousElementSibling;
            const BOX_ITEM = BOX.childNodes[0];
            const BOX_ITEM_LIST = BOX_ITEM.childNodes;
            const BOX_WIDTH = BOX.clientWidth;
            const BOX_WIDTH_HARF = BOX_WIDTH / 2;
            const BOX_ITEM_WIDTH = BOX_ITEM.clientWidth;
            let index = MAIN_SWIPER.realIndex;
            let target = BOX_ITEM_LIST[index];
            let targetLeft = target.offsetLeft;
            let targetWidth = target.clientWidth;
            let selectTargetPos = targetLeft + targetWidth / 2;
            let pos;
            if (selectTargetPos <= BOX_WIDTH_HARF) {
              // left
              pos = 0;
            } else if (BOX_ITEM_WIDTH - selectTargetPos <= BOX_WIDTH_HARF) {
              //right : target 절반 이후 영역이 BOX_WIDTH_HARF 보다 작을경우 right 정렬
              pos = BOX_ITEM_WIDTH - BOX_WIDTH;
            } else {
              pos = selectTargetPos - BOX_WIDTH_HARF; // 중앙정렬
            }
            setTimeout(function () {
              BOX.scroll({
                left: pos,
                top: 0,
                behavior: "smooth",
              });
            }, 300);
          },
        },
        breakpoints: {
          1260: {
            allowTouchMove: false, // 스와이프 작동 X
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.base-swiper {
  .swiper {
    width: 100%;
    height: auto;
    .swiper-slide {
      height: auto;
      text-align: center;
      font-size: 18px;
      color: #333;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;

      // ios 깜빡임 문제 해결 (.swiper-backface-hidden 빠짐)
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
  }
  .horizonScroll {
    overflow-x: auto;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 9999;
    padding-bottom: 25px;
    .swiper-pagination {
      padding: 0 15px;
      box-sizing: border-box;
      display: flex;
      position: unset;
      .swiper-pagination-bullet {
        width: auto;
        height: 50px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
        padding: 0 20px;
        border-radius: 8px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        .horizonScroll__itemText {
          display: block;
          position: relative;
        }
      }
      .swiper-pagination-bullet-active {
        color: #fff;
        background: #007aff;
      }
    }
  }

  &.main {
    width: 100%;
    height: auto;
    position: relative;
    background: #00a791;
    padding-top: 130px;
    .swiper {
      &.main {
        > .swiper-wrapper {
          > .swiper-slide {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
            gap: 20px;
            padding: 20px;
          }
        }
      }
    }
  }
}
.screen-out {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}
</style>
