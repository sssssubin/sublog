<template>
  <div class="dashboard">
    <div class="dashboard__container">대쉬보드 화면입니다.</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

.dashboard {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    background: url(../assets/imgs/home-background.png) center/cover no-repeat rgba(255, 255, 255, 0.25);
    width: 92%;
    max-width: 1440px;
    @include ratio(92%, ratio-type1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
}
</style>
