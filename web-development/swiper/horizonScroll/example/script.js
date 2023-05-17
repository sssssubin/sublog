"use strict";

/* ------------------- 
      new2023 
-------------------*/
const MAIN_SWIPER = new Swiper(".main-swiper-intro", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  loop: true,
  allowTouchMove : true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
  pagination: {
    el: ".swiper-pagination.main-con",
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      const BULLETS = document.querySelectorAll(".main-swiper-intro .swiper-slide[data-slide-title]");
      let BULLET_TITLE = BULLETS[index + 1].dataset.slideTitle;
      return `<span class="${className}">${BULLET_TITLE}</span>`;
    }
  }, 
  breakpoints: {
    1200: {}
  },
  on: {
    init: function(MAIN_SWIPER) {
      var mainIdx2 = $("#mainIdx2").val();
      var mainIdx3 = $("#mainIdx3").val();

      if(MAIN_SWIPER.currentBreakpoint !== 'max') { // PC
        // 카운팅
        $({ val : 0 }).animate({ val : mainIdx3 }, {
          duration: 1500,
          step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num").text(num);
          },
          complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num").text(num);
          }
        });
    
        $({ val : 0 }).animate({ val : mainIdx2 }, {
          duration: 1000,
          step: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $(".count_num2").text(num);
          },
          complete: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $(".count_num2").text(num);
          }
        }); 
      } 

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    slideChange: function(MAIN_SWIPER) {
      var mainIdx2 = $("#mainIdx2").val();
      var mainIdx3 = $("#mainIdx3").val();

      if(MAIN_SWIPER.currentBreakpoint === 'max') { // Mobile
         // 카운팅
        if ( this.realIndex == 2 ) {
          $({ val : 0 }).animate({ val : mainIdx3 }, {
            duration: 1500,
            step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".count_num").text(num);
            },
            complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".count_num").text(num);
            }
          });
        } else if( this.realIndex == 1) {
          $({ val : 0 }).animate({ val : mainIdx2 }, {
            duration: 1000,
            step: function() {
              var num = numberWithCommas(this.val.toFixed(1));
              $(".count_num2").text(num);
            },
            complete: function() {
              var num = numberWithCommas(this.val.toFixed(1));
              $(".count_num2").text(num);
            }
          });
        }
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },    
    resize: function(MAIN_SWIPER) {
      var mainIdx2 = $("#mainIdx2").val();
      var mainIdx3 = $("#mainIdx3").val();      

      if(MAIN_SWIPER.currentBreakpoint !== 'max') { // PC   
        // 카운팅
        $({ val : 0 }).animate({ val : mainIdx3 }, {
         duration: 1500,
         step: function() {
           var num = numberWithCommas(Math.floor(this.val));
           $(".count_num").text(num);
         },
         complete: function() {
           var num = numberWithCommas(Math.floor(this.val));
           $(".count_num").text(num);
         }
       });
   
       $({ val : 0 }).animate({ val : mainIdx2 }, {
         duration: 1000,
         step: function() {
           var num = numberWithCommas(this.val.toFixed(1));
           $(".count_num2").text(num);
         },
         complete: function() {
           var num = numberWithCommas(this.val.toFixed(1));
           $(".count_num2").text(num);
         }
       });  
      } else { // Mobile
        MAIN_SWIPER.slideTo(1, 100) 
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }
});

const CON1_SWIPER = new Swiper(".con1-swiper", {
  slidesPerView: 1, // Mobile 해상도 : ~ 1200px
  spaceBetween: 39,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, 
  },
  loop: false,  
  allowTouchMove : true,
  watchOverflow : true, 
  pagination: {
      el: '.swiper-pagination.con1',
      type: 'bullets',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next.con1',
      prevEl: '.swiper-button-prev.con1',
  },
  breakpoints: {
      1200: { // PC 해상도 : 1200px ~
          slidesPerView: 3,
          spaceBetween: 30,
      }
  },
})

const CON2_SWIPER = new Swiper(".con2-swiper", {
  slidesPerView: 1,
  spaceBetween: 39,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, 
  },
  loop: false,  
  allowTouchMove : true,
  watchOverflow : true, 
  pagination: {
      el: '.swiper-pagination.con2',
      type: 'bullets',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next.con2',
      prevEl: '.swiper-button-prev.con2',
  },
  breakpoints: {
      1200: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
  },
})

const CON3_SWIPER = new Swiper(".con3-swiper", {
  slidesPerView: 1,
  spaceBetween: 39,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, 
  },
  loop: false,
  allowTouchMove : true,
  watchOverflow : true, 
  pagination: {
      el: '.swiper-pagination.con3',
      type: 'bullets',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next.con3',
      prevEl: '.swiper-button-prev.con3',
  },
  breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
  },
})

const TEACHER_SWIPER = new Swiper(".teacher-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove : true,
  watchOverflow : true, 
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next.con4",
    prevEl: ".swiper-button-prev.con4",
  },
  pagination: {
    el: ".swiper-pagination.con4",
    clickable: true,
    renderBullet: function (index, className) {
      const BULLETS = document.querySelectorAll(".con4 .teacher-swiper .swiper-slide[data-slide-title]");
      let BULLET_TITLE = BULLETS[index].dataset.slideTitle;
      return `<a href="#" class="${className} horizonScroll__item"><span class="horizonScroll__itemText">${BULLET_TITLE}</span></a>`;
    }
  },
  breakpoints: {
    1200: {}
  },
  on: {
    init: function(TEACHER_SWIPER) {
      const BOX_ITEM = document.querySelector(".horizonScroll .swiper-pagination");
      BOX_ITEM.style.width = 'max-content';
      
      if(TEACHER_SWIPER.currentBreakpoint === 'max') { // Mobile
        BOX_ITEM.style.gap = '5px';
      } else { // PC        
        BOX_ITEM.style.gap = '15px';
      }
    },
    realIndexChange: function(TEACHER_SWIPER) {              
      const BOX_WIDTH = BOX.clientWidth;
      const BOX_WIDTH_HARF = BOX_WIDTH / 2; 
      const BOX_ITEM_WIDTH = BOX_ITEM.clientWidth;        
      let target = BOX_ITEM_LIST[this.realIndex];
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
      }, 200);
    },
    resize: function(TEACHER_SWIPER) { 
      TEACHER_SWIPER.slideTo(0, 100); 
      if(TEACHER_SWIPER.currentBreakpoint === 'max') { // Mobile
        BOX_ITEM.style.gap = '5px';
      } else {        
        BOX_ITEM.style.gap = '15px';
      }
    }
  }
});
// TEACHER_SWIPER
const BOX = document.querySelector('.horizonScroll');
const BOX_ITEM = document.querySelector(".horizonScroll .swiper-pagination");
const BOX_ITEM_LIST = document.querySelectorAll('.horizonScroll .swiper-pagination .swiper-pagination-bullet');

// 하단 고정 배너 On & Off
const fixBanner = document.querySelector('#divLayerPop');
const fixBannerClose = document.getElementById("id_InputChkDay_Popup");

fixBannerClose.addEventListener("click", function() {
  fixBanner.classList.remove("show");
});

function bannerToggle() {
    //  default : On
    fixBanner.classList.add('show');

    if (window.innerWidth < 1200) { // Mobile ver
      fixBanner.classList.remove('show');  //  On -> Off
    }
}

let timer = null;
function reportWindowSize() {
    if (timer) {
      clearTimeout(timer); // 3초 이전에 이벤트가 발생하면 이전 타이머는 취소하고 새로운 타이머를 다시 설정
    }
    
    timer = setTimeout(bannerToggle, 300); // 타이머가 만료된 뒤 실행
}

window.addEventListener('load', bannerToggle, {capture: false, once: true, passive: false});
window.addEventListener("resize", reportWindowSize, false);
