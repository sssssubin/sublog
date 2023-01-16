<template>
  <div class="cards">
    <nuxt-link to="/motion/motion1" class="card">
      <img class="thumbnail-img" alt="" src="~/static/motion1.png" />
      <p>도형 모션</p>
    </nuxt-link>
    <nuxt-link to="/motion/textmoreview" class="card">
      <img class="thumbnail-img" alt="" src="" />
      <p>텍스트 더 보기</p>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.cards {
  width: 100%;
  display: flex;
  gap: 20px;
}
.card {
  width: calc(100% / 5);
  text-decoration: none;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    background-size: contain;
    display: block;
  }
  p {
    width: 100%;
    background-color: bisque;
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
    text-align: center;
  }
}
</style>
