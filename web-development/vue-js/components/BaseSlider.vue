<template>
    <div class="base-swiper">
        <client-only>
            <swiper
                ref="mySwiper"
                class="swiper"
                :options="swiperOption"
            >
                <swiper-slide v-for="(slide, index) in slides" :key="index">{{ slide.tit }}</swiper-slide>  

                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
         </client-only>        

        <div class="horizonScroll" slot="pagination">
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
	components:	{
       Swiper,
       SwiperSlide
	},
    data() {
        return {
            slides: [
                {tit: 'Slide 1'},
                {tit: 'Slide 2'},
                {tit: 'Slide 3'},
                {tit: 'Slide 4'},
                {tit: 'Slide 5'},
                {tit: 'Slide 6'},
                {tit: 'Slide 7'},
            ],
            swiperOption: { 
                slidesPerView: 1, 
                spaceBetween: 0, 
                loop: true, 
                pagination: { 
                    el: '.swiper-pagination', 
                    clickable: true,
                    renderBullet: function (index, className) {
                        const bullets = document.querySelectorAll(".swiper > .swiper-wrapper > .swiper-slide");
                        let bulletTitle = bullets[index + 1].innerText;
                        return `<a href="#" class="${className} horizonScroll__item"><span class="horizonScroll__itemText">${bulletTitle}</span></a>`;
                    }
                }, 
                navigation: { 
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev' 
                },
                on: {
                    init: () => {                     
                        const BOX = this.$refs.mySwiper.$el.nextElementSibling;         
                        const BOX_ITEM = BOX.childNodes[0];       

                        BOX_ITEM.style.width = 'max-content';
                        BOX_ITEM.style.gap = '15px';
                    },
                    realIndexChange: () => {
                        const MAIN_SWIPER = this.$refs.mySwiper.$el.swiper;
                        const BOX = this.$refs.mySwiper.$el.nextElementSibling;         
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
                                behavior: 'smooth'
                            })
                        }, 300);
                    }
                    
                }
            },
        }
    },
    // mounted() {},
    // methods: {},
}
</script>

<style lang="scss">
.base-swiper {
    position: relative;
    height: 100%;
    .swiper {
        width: 100%;
        height: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: powderblue;
            color: #333;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;

            // ios 깜빡임 문제 해결
            -webkit-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
        }  
    }
    
    .horizonScroll {
        overflow-x: auto;
        margin: 0 auto;
        padding: 0 3px;
        box-sizing: border-box;
        background: powderblue;
        width: 100%;
        position: absolute;
        top: 10px;
        z-index: 9999;
        padding: 0;
        .swiper-pagination {
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
}
</style>