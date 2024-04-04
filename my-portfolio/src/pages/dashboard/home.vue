<template>
  <div class="dashboard">
    <div class="dashboard__container">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

.dashboard {
  background: url(../../assets/imgs/dashboard-main-bg.png) center/cover no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    width: 84%;
    max-width: 2000px;
    @include ratio(84%, ratio-type1);
    max-height: 1300px;
    border-radius: 95px;
    background-color: rgba(255, 255, 255, 0.271);
    box-shadow: 0px 65px 68px 0px rgba(129, 129, 129, 0.16);
  }
}
</style>
