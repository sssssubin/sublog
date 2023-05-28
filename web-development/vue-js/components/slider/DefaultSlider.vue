<template>
    <div class="slide">
      <div class="slide_item">1</div>
      <div class="slide_item">2</div>
      <div class="slide_item">3</div>
      <div class="slide_item">4</div>
      <div class="slide_item">5</div>
      <div class="slide_prev_button slide_button" @click="prevBtn()">◀</div>
      <div class="slide_next_button slide_button" @click="nextBtn()">▶</div>
    </div>
</template>

<script>
export default {
  name: "default-slider",
  data() {
    return {
      currSlide: 1, // 현재 슬라이드
    }
  },
  mounted() {
    window.addEventListener("resize", this.changeSlideWidth);
  },
  methods: {
    moveToLeft(currSlide) {
      // 슬라이크 전체 크기(width 구하기)
      const slide = document.querySelector(".slide");
      let slideWidth = slide.clientWidth;

      // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
      const slideItems = document.querySelectorAll(".slide_item");

      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * (currSlide - 1);
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
    },
    nextBtn() {
      // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
      const slideItems = document.querySelectorAll(".slide_item");
      // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
      const maxSlide = slideItems.length;

      // 이후 버튼 누를 경우 현재 슬라이드를 변경
      this.currSlide++;
      // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
      if (this.currSlide <= maxSlide) {
        this.moveToLeft(this.currSlide);
      } else {
        this.currSlide--;
      }
    },
    prevBtn() {      
      // 이전 버튼 누를 경우 현재 슬라이드를 변경
      this.currSlide--;
      // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
      if (this.currSlide > 0) {
        this.moveToLeft(this.currSlide);
      } else {
        this.currSlide++;
      }
    },
    changeSlideWidth() {      
      // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
      this.moveToLeft(this.currSlide);
    }
  }  
}

</script>
<style lang="scss">
.slide {
  /* layout */
  display: flex;
  flex-wrap: nowrap;
  /* 컨테이너의 내용물이 컨테이너 크기(width, height)를 넘어설 때 보이지 않도록 하기 위해 hidden을 준다. */
  overflow: hidden;

  /* position */
  /* slide_button의 position absolute가 컨테이너 안쪽에서 top, left, right offset이 적용될 수 있도록 relative를 준다. (기본값이 static인데, static인 경우 그 상위 컨테이너로 나가면서 현재 코드에선 html을 기준으로 offset을 적용시키기 때문) */
  position: relative;

  /* size */
  width: 100%;
  
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
}
</style>