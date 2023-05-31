<template>
  <div class="slide__wrap">
    <div class="slide">
      <div :class="`slide_item ${slide.class}`" v-for="(slide, index) in slides" :key="index">{{slide.tit}}</div>
    </div>
    
    <ul class="slide_pagination"></ul>
    <div class="slide_prev_button slide_button" @click="prevBtn()">◀</div>
    <div class="slide_next_button slide_button" @click="nextBtn()">▶</div>
  </div>
</template>

<script>
export default {
  name: "vanilla-js-slider",
  data() {
    return {
      slides: [
        {class: 'item1', tit: 'slide 1'},
        {class: 'item2', tit: 'slide 2'},
        {class: 'item3', tit: 'slide 3'},
        {class: 'item4', tit: 'slide 4'},
        {class: 'item5', tit: 'slide 5'},
      ],
      currentSlide: 1, // 현재 슬라이드
      slide: {},
      slideItems: [],
      currentSlideItems: [],
      slideWidth: '',
      maxSlide: 0,
      paginationItems: [],
      offset: 0,
      gesture: {
        x: [],
        y: [],
      },
      tolerance: 50,
      xTravel: 0,
      yTravel: 0,
    }
  },
  mounted() {
    // 슬라이크 전체 크기(width 구하기)
    const slide = document.querySelector(".slide");
    let slideWidth = slide.clientWidth;
    this.slide =  slide; 
    this.slideWidth = slideWidth;

    // 슬라이드 전체 가져오기
    let slideItems = document.querySelectorAll(".slide_item");
    slideItems.forEach(element => {
      this.slideItems.push(element);      
    });

    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = this.slideItems.length;
    this.maxSlide = maxSlide;

    // 페이지네이션 생성
    this.createPagination();

    // 무한 슬라이드를 위해 슬라이드 복사하기 
    this.copySlide();  

    // 슬라이드 복사 이후 슬라이드 전체 가져오기
    let currentSlideItems = document.querySelectorAll(".slide_item");
    currentSlideItems.forEach(element => {
      this.currentSlideItems.push(element);      
    });
    
    // 슬라이드를 이동시키기 위한 offset 값 초기화   
    this.offset = this.slideWidth * this.currentSlide;
    this.currentSlideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-this.offset}px`);
    });

      
    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    this.clickPageNationItem();  

    // PC 클릭 이벤트 (드래그)
    slide.addEventListener("mousedown", (e) => {     
      e.preventDefault();
      // 마우스 드래그 시작 위치 저장      
      this.gesture.x.push(e.clientX);
      this.gesture.y.push(e.clientY);
    });
    slide.addEventListener("mousemove", (e) => {      
      if(e.buttons === 1) {  // mousedown 한 상태에서 이동      
        e.preventDefault();     
        // this.xTravel = this.gesture.x[this.gesture.x.length-1] - this.gesture.x[0];
        // this.offset = this.slideWidth * this.currentSlide;
        // this.currentSlideItems.forEach((i) => {
        //   i.setAttribute("style", `left: ${-this.offset + this.xTravel}px`);
        // });
        // this.slide.style.transform = `translate3d(${-this.offset + this.xTravel}px, 0, 0)`; 
        // 마우스 드래그 이동 위치 저장      
        this.gesture.x.push(e.clientX);
        this.gesture.y.push(e.clientY);
      }
    });
    slide.addEventListener("mouseup", (e) => {      
      e.preventDefault();

      // 마우스 드래그 끝 위치 저장      
      this.xTravel = this.gesture.x[this.gesture.x.length-1] - this.gesture.x[0]; 
      this.yTravel = this.gesture.y[this.gesture.y.length-1] - this.gesture.y[0]; 
      let x = (this.yTravel<this.tolerance) && (this.yTravel>-this.tolerance);
      let y = (this.xTravel<this.tolerance) && (this.xTravel>-this.tolerance);
      
      // 슬라이드 이동      
      if (y && this.yTravel<-this.tolerance){
        console.log('Swiped Up')
      }
      if (y && this.yTravel>this.tolerance){
        console.log('Swiped Down')
      }
      if (x && this.xTravel<-this.tolerance){
        // 마우스가 왼쪽으로 드래그 된 경우
        console.log('Swiped Left')
        this.moveNext();
      }
      if (x && this.xTravel>this.tolerance){        
        // 마우스가 오른쪽으로 드래그 된 경우
        console.log('Swiped Right')
        this.movePrev();
      }

      // 슬라이드 이동을 안 했을 때 제자리로 원위치
      setTimeout(() => {          
        this.moveSlidePosition(this.offset, this.currentSlide);
      }, 0);

      // 위치 값 초기화
      this.gesture.x = [];
      this.gesture.y = [];
      this.xTravel = '';
      this.yTravel = '';
    });

    // 모바일 터치 이벤트 (스와이프), 참고) https://www.codehim.com/vanilla-javascript/touch-swipe-detection-in-pure-javascript/
    slide.addEventListener("touchstart", (e) => {
      e.preventDefault();
      // 터치가 시작되는 위치 저장
      for (let i=0;i<e.touches.length;i++){
        this.gesture.x.push(e.touches[i].clientX);
        this.gesture.y.push(e.touches[i].clientY);
      }      
    });
    slide.addEventListener("touchmove", (e) => {      
      e.preventDefault();
      for (let i=0; i<e.touches.length; i++) {
        // this.xTravel = this.gesture.x[this.gesture.x.length-1] - this.gesture.x[0];
        // this.offset = this.slideWidth * this.currentSlide;
        // this.currentSlideItems.forEach((i) => {
        //   i.setAttribute("style", `left: ${-this.offset + this.xTravel}px`);
        // });
        // this.slide.style.transform = `translate3d(${-this.offset + this.xTravel}px, 0, 0)`; 
        // 터치 이동 위치 저장      
        this.gesture.x.push(e.touches[i].clientX);
        this.gesture.y.push(e.touches[i].clientY);
      }
    });
    slide.addEventListener("touchend", (e) => {   
      e.preventDefault();     

      // 터치가 끝나는 위치 저장
      this.xTravel = this.gesture.x[this.gesture.x.length-1] - this.gesture.x[0]; 
      this.yTravel = this.gesture.y[this.gesture.y.length-1] - this.gesture.y[0]; 
      let x = (this.yTravel<this.tolerance) && (this.yTravel>-this.tolerance);
      let y = (this.xTravel<this.tolerance) && (this.xTravel>-this.tolerance);
      
      // 슬라이드 이동      
      if (y && this.yTravel<-this.tolerance){
        console.log('Swiped Up')
      }
      if (y && this.yTravel>this.tolerance){
        console.log('Swiped Down')
      }
      if (x && this.xTravel<-this.tolerance){
        // 마우스가 왼쪽으로 드래그 된 경우
        console.log('Swiped Left')
        this.moveNext();
      }
      if (x && this.xTravel>this.tolerance){        
        // 마우스가 오른쪽으로 드래그 된 경우
        console.log('Swiped Right')
        this.movePrev();
      } 
      
      // 슬라이드 이동을 안 했을 때 제자리로 원위치
      setTimeout(() => {          
        this.moveSlidePosition(this.offset, this.currentSlide);
      }, 0);

      // 위치 값 초기화
      this.gesture.x = [];
      this.gesture.y = [];
      this.xTravel = '';
      this.yTravel = '';
    });
  
    // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
    window.addEventListener("resize", (this.changeSlideWidth)); 
  },
  methods: {
    createPagination() {
      const pagination = document.querySelector(".slide_pagination");

      this.slideItems.forEach((slide, i) => {
        if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
        else pagination.innerHTML += `<li>•</li>`;
      });

      const paginationItems = document.querySelectorAll(".slide_pagination > li")
      paginationItems.forEach(element => {
        this.paginationItems.push(element);
      });
    },
    copySlide() {
      // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
      const startSlide = this.slideItems[0];
      const endSlide = this.slideItems[this.slideItems.length - 1];

      // 엘리먼트 생성
      const startElem = document.createElement(startSlide.tagName);
      const endElem = document.createElement(endSlide.tagName);

      // 엘리먼트에 클래스 적용, 내용 복사 동일하게 하기
      endSlide.classList.forEach((c) => endElem.classList.add(c));
      endElem.innerHTML = endSlide.innerHTML;
      startSlide.classList.forEach((c) => startElem.classList.add(c));
      startElem.innerHTML = startSlide.innerHTML;

      // 각 복제한 엘리먼트를 각 위치에 추가하기
      this.slideItems[0].before(endElem);
      this.slideItems[this.slideItems.length - 1].after(startElem);
    },
    changeActive(currentSlide) { 
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      this.paginationItems.forEach((item) => item.classList.remove("active"));
      this.paginationItems[currentSlide - 1].classList.add("active");
    },
    getOffsetValue(offset, currentSlide) { 
      // 슬라이드를 이동시키기 위한 offset 값 구하기
      offset = this.slideWidth * currentSlide;
      this.currentSlideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
      // this.slide.style.transform = `translate3d(${-offset}px, 0, 0)`;   
    },
    // smoothSlide() { 
    //   // transition-duration 이용하여 slide 기능 부드럽게 하기
    //   let timer = 300;
    //   this.slide.style.transitionDuration = `${timer}ms`   

    //   setTimeout(() => {
    //     if(this.slide.style.transitionDuration == `${timer}ms`){
    //       this.slide.style.transitionDuration = '0ms'   
    //     }     
    //   }, timer); // 타이머가 만료된 뒤 실행   
    // },
    moveSlidePosition(offset, currentSlide) {
      this.getOffsetValue(offset, currentSlide);
      this.changeActive(currentSlide); 
      // this.smoothSlide(); 
    },
    moveNext() {
      // 이후 버튼 누를 경우 현재 슬라이드를 변경
      this.currentSlide++;      
      // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
      if (this.currentSlide <= this.maxSlide) {
        this.moveSlidePosition(this.offset, this.currentSlide);
      } else {
        // 마지막 슬라이드에서 첫 슬라이드로 넘어가는 경우        
        this.currentSlide = 0;

        this.offset = this.slideWidth * this.currentSlide;
        this.currentSlideItems.forEach((i) => {
          i.setAttribute("style", `transition: ${0}s; left: ${-this.offset}px`);
        });

        this.currentSlide++;

        // setTimeout을 사용하는 이유는 비동기 처리를 이용해 transform이 제대로 적용되게 하기 위함
        setTimeout(() => {
          this.offset = this.slideWidth * this.currentSlide;
          this.currentSlideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.15}s; left: ${-this.offset}px`);
          });
          this.changeActive(this.currentSlide); 
        }, 0);
      }
    },
    movePrev() {            
      // 이전 버튼 누를 경우 현재 슬라이드를 변경
      this.currentSlide--;      
      // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
      if (this.currentSlide > 0) {
        this.moveSlidePosition(this.offset, this.currentSlide);
      } else {     
        // 첫 슬라이드에서 마지막 슬라이드로 넘어가는 경우    
        this.currentSlide = this.maxSlide + 1;

        this.offset = this.slideWidth * this.currentSlide;
        this.currentSlideItems.forEach((i) => {
          i.setAttribute("style", `transition: ${0}s; left: ${-this.offset}px`);
        });

        this.currentSlide--;

        setTimeout(() => {          
          this.offset = this.slideWidth * this.currentSlide;
          this.currentSlideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.15}s; left: ${-this.offset}px`);
          });
          this.changeActive(this.currentSlide); 
        }, 0);
      }
    },
    nextBtn() {
      this.moveNext();
    },
    prevBtn() {
      this.movePrev();
    },
    clickPageNationItem() {
      this.paginationItems.forEach((item, i) => {
        // 각 페이지네이션마다 클릭 이벤트 추가하기
        item.addEventListener("click", () => {
          // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currentSlide는 시작 위치가 1이기 때문에 + 1)
          this.currentSlide = i + 1;

          // 슬라이드를 이동시키기 위한 offset 계산
          this.moveSlidePosition(this.offset, this.currentSlide);
        });
      });
    },        
    // moveEvent(element) {
    //   this.gesture.x.push(element.clientX);
    //   this.gesture.y.push(element.clientY);
    // },
    // moveEndEvent() {
    //   // 이동 종료 위치 저장
    //   this.xTravel = this.gesture.x[this.gesture.x.length-1] - this.gesture.x[0];
    //   this.yTravel = this.gesture.y[this.gesture.y.length-1] - this.gesture.y[0];  

    //   // 슬라이드 이동
    //   this.movePrevOrNext();

    //   // 위치 값 초기화
    //   this.gesture.x = [];
    //   this.gesture.y = [];
    //   this.xTravel = '';
    //   this.yTravel = '';
    // },
    // movePrevOrNext() {
    //   let y = (this.xTravel<this.tolerance) && (this.xTravel>-this.tolerance);
    //   let x = (this.yTravel<this.tolerance) && (this.yTravel>-this.tolerance);
      
    //   if (y && this.yTravel<-this.tolerance){
    //     console.log('Swiped Up')
    //   }
    //   if (y && this.yTravel>this.tolerance){
    //     console.log('Swiped Down')
    //   }
    //   if (x && this.xTravel<-this.tolerance){
    //     // 마우스가 왼쪽으로 드래그 된 경우
    //     console.log('Swiped Left')
    //     this.moveNext();
    //   }
    //   if (x && this.xTravel>this.tolerance){        
    //     // 마우스가 오른쪽으로 드래그 된 경우
    //     console.log('Swiped Right')
    //     this.movePrev();
    //   }
    // },
    changeSlideWidth() {
      // 슬라이크 전체 크기(width 구하기)    
      const slide = document.querySelector(".slide");
      let slideWidth = slide.clientWidth;
      this.slide =  slide; 
      this.slideWidth = slideWidth;

      // 슬라이드를 이동시키기 위한 offset 값 구하기
      // this.getOffsetValue(this.offset, this.currentSlide);  
      this.offset = this.slideWidth * this.currentSlide;
      this.currentSlideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-this.offset}px`);
      });
    },
  }  
}

</script>
<style lang="scss">
.study-container {
  display: flex;
  flex-direction: column;
}
.slide {
  &__wrap {
    height: auto;

    /* position */
    /* slide_button의 position absolute가 컨테이너 안쪽에서 top, left, right offset이 적용될 수 있도록 relative를 준다. (기본값이 static인데, static인 경우 그 상위 컨테이너로 나가면서 현재 코드에선 html을 기준으로 offset을 적용시키기 때문) */
    position: relative;
      
    /* 컨테이너의 내용물이 컨테이너 크기(width, height)를 넘어설 때 보이지 않도록 하기 위해 hidden을 준다. */
    overflow: hidden;
  }
  height: 300px;

  /* layout */
  display: flex;
  flex-wrap: nowrap;

  /* size */
  width: 100%;

  /* transition */
  transition-property: transform;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  // transition-duration: 300ms;
  
  box-sizing: content-box;

  /* slide drag를 위해 DOM요소가 드래그로 선택되는것을 방지 */
  user-select: none;
  
  .slide_item {
    /* layout */
    display: flex;
    align-items: center;
    justify-content: center;

    /* position - 버튼 클릭시 left offset값을 적용시키기 위해 */
    position: relative;
    left: 0px;

    /* size */
    width: 100%;
    height: 100%;
    /* flex item의 flex-shrink는 기본값이 1이므로 컨테이너 크기에 맞게 줄어드는데, 슬라이드를 구현할 것이므로 줄어들지 않도록 0을 준다. */
    flex-shrink: 0;

    /* backface hidden */
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    /* transition */
    transition: left 0.15s;
      
    /* 각 슬라이드가 변경되는 것을 시각적으로 확인하기 쉽도록 각 슬라이드별 색상 적용 */
    &.item1 {
      background-color: darkgoldenrod;
    }
    &.item2 {
      background-color: aqua;
    }
    &.item3 {
      background-color: blueviolet;
    }
    &.item4 {
      background-color: burlywood;
    }
    &.item5 {
      background-color: cornflowerblue;
    }
  }
}    
.slide_button {
  /* layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* position */
  position: absolute;
  /* 버튼이 중앙에 위치하게 하기위해 계산 */
  top: 50%;
  transform: translateY(-50%);

  /* size */
  width: 32px;
  height: 32px;

  /* style */
  border-radius: 100%;
  background-color: #cccc;
  cursor: pointer;    

  &.slide_prev_button {
    left: 10px;
  }
  &.slide_next_button {
    right: 10px;
  }
}  

/* 페이지네이션 스타일 */
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.slide_pagination {
  /* layout */
  display: flex;
  gap: 5px;

  /* position */
  position: absolute;
  bottom: 0;
  /* left:50%, translateX(-50%)를 하면 가로 가운데로 위치시킬 수 있다. */
  left: 50%;
  transform: translateX(-50%);
}
.slide_pagination > li {
  /* 현재 슬라이드가 아닌 것은 투명도 부여 */
  color: #7fb5ff88;
  cursor: pointer;
  font-size: 25px;
}
.slide_pagination > li.active {
  /* 현재 슬라이드 색상은 투명도 없이 */
  color: #7fb5ff;
}
</style>