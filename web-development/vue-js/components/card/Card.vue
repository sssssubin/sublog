<template>
  <div class="cards" v-if="cards">
    <div :class="`card card${i + 1}`" v-for="(card, i) in cards" :key="i">
      <strong v-html="card.tit"></strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-card",
  props: {
    cards: { type: Array },
  },
};
</script>

<style lang="scss">
.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #eee;
    border-radius: 10px;
    height: 150px;
  }
}
</style>
