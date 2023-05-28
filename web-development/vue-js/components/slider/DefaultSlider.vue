<template>
  <div class="slide__wrap">
    <div class="slide">
      <div class="slide_item" v-for="(slide, index) in slides" :key="index">{{slide.tit}}</div>
    </div>
    
    <ul class="slide_pagination"></ul>
    <div class="slide_prev_button slide_button" @click="prevMove()">◀</div>
    <div class="slide_next_button slide_button" @click="nextMove()">▶</div>
  </div>
</template>

<script>
export default {
  name: "default-slider",
  data() {
    return {
      slides: [
        {tit: 'slide 1'},
        {tit: 'slide 2'},
        {tit: 'slide 3'},
        {tit: 'slide 4'},
        {tit: 'slide 5'},
      ],
      currSlide: 1, // 현재 슬라이드
    }
  },
  mounted() {
    const slide = document.querySelector(".slide");
    slide.style.transform = 'translate3d(0, 0, 0)';

    // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
    window.addEventListener("resize", this.changeSlideWidth);       

    // 페이지네이션 생성
    const slideItems = document.querySelectorAll(".slide_item");
    const maxSlide = slideItems.length;
    const pagination = document.querySelector(".slide_pagination");

    for (let i = 0; i < maxSlide; i++) {
      if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
      else pagination.innerHTML += `<li>•</li>`;
    }

    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    const paginationItems = document.querySelectorAll(".slide_pagination > li");
    
    for (let i = 0; i < maxSlide; i++) {
      // 각 페이지네이션마다 클릭 이벤트 추가하기
      paginationItems[i].addEventListener("click", () => {
        // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
        this.currSlide = i + 1;

        this.moveTo(this.currSlide);

        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        this.changeActive(this.currSlide)
      });
    }
  },
  methods: {
    changeActive(currSlide) {
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      const paginationItems = document.querySelectorAll(".slide_pagination > li");
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    },
    moveTo(currSlide) {
      // 슬라이크 전체 크기(width 구하기)
      const slide = document.querySelector(".slide");
      let slideWidth = slide.clientWidth;

      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * (currSlide - 1);
      slide.style.transform = `translate3d(${-offset}px, 0, 0)`;

      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      this.changeActive(this.currSlide)

      // transition-duration 이용하여 slide 기능 부드럽게 하기
      let timer = 300;
      slide.style.transitionDuration = `${timer}ms`;    
  
      setTimeout(() => {
        if(slide.style.transitionDuration == `${timer}ms`){
          slide.style.transitionDuration = '0ms';              
        }     
      }, timer); // 타이머가 만료된 뒤 실행
    },
    nextMove() {
      // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
      const slideItems = document.querySelectorAll(".slide_item");
      // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
      const maxSlide = slideItems.length;

      // 이후 버튼 누를 경우 현재 슬라이드를 변경
      this.currSlide++;
      // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
      if (this.currSlide <= maxSlide) {
        this.moveTo(this.currSlide);
      } else {
        this.currSlide--;
      }
    },
    prevMove() {      
      // 이전 버튼 누를 경우 현재 슬라이드를 변경
      this.currSlide--;
      // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
      if (this.currSlide > 0) {
        this.moveTo(this.currSlide);
      } else {
        this.currSlide++;
      }
    },
    changeSlideWidth() {      
      this.moveTo(this.currSlide);
    }
  }  
}

</script>
<style lang="scss">
.slide {
  &__wrap {
    /* position */
    /* slide_button의 position absolute가 컨테이너 안쪽에서 top, left, right offset이 적용될 수 있도록 relative를 준다. (기본값이 static인데, static인 경우 그 상위 컨테이너로 나가면서 현재 코드에선 html을 기준으로 offset을 적용시키기 때문) */
    position: relative;
      
    /* 컨테이너의 내용물이 컨테이너 크기(width, height)를 넘어설 때 보이지 않도록 하기 위해 hidden을 준다. */
    overflow: hidden;
  }
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

  /* backface hidden */
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
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
    height: 300px;
    /* flex item의 flex-shrink는 기본값이 1이므로 컨테이너 크기에 맞게 줄어드는데, 슬라이드를 구현할 것이므로 줄어들지 않도록 0을 준다. */
    flex-shrink: 0;

    /* transition */
    transition: left 0.15s;

    /* 각 슬라이드가 변경되는 것을 시각적으로 확인하기 쉽도록 각 슬라이드별 색상 적용 */
    &:nth-child(1) {
      background-color: darkgoldenrod;
    }
    &:nth-child(2) {
      background-color: aqua;
    }
    &:nth-child(3) {
      background-color: blueviolet;
    }
    &:nth-child(4) {
      background-color: burlywood;
    }
    &:nth-child(5) {
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