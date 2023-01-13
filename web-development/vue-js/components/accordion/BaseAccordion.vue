<template>
  <div class="accordion">
    <div class="accordion__header">
      <slot name="header"></slot>
    </div>
    <div class="accordion__button" @click="toggleItem" v-bind:class="[isActive ? activeClass : '']">
      <img src="~/static/images/check-icon-b.png" class="accordion-btn" />
    </div>
    <div v-show="show" class="accordion__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import BaseCheckBox from "~/components/form/BaseCheckBox"
export default {
  components: { BaseCheckBox },
  props: {
    title: { type: String },
  },
  data() {
    return {
      show: false,
      isActive: false,
      activeClass: "active",
      terms: [
        { id: "terms1", name: "terms-agree1", label: "개인정보 수집", termsBtn: true },
        { id: "terms2", name: "terms-agree1", label: "3자 제공에 대한 동의", termsBtn: true },
        { id: "terms3", name: "terms-agree1", label: "마케팅 정보 수신", termsBtn: true },
        { id: "terms4", name: "terms-agree1", label: "특약란", termsInput: true },
      ],
    }
  },
  methods: {
    toggleItem: function () {
      this.show = !this.show
      this.isActive = !this.isActive
    },
  },
}
</script>
<style lang="scss">
// accordion 
.accordion { 
  &__header {   
    &.active .accordion-btn { transform: rotate(180deg); }
  }    
  &__content { width: 100%; @include font($type: primary2); }
}
/* 아코디언 */
.accordion__wrapper {
  padding: 0;
}

.accordion {
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin: 0 0 20px;
  }
  .checkbox {
    margin-top: 2px;
    width: auto;
    display: inline-block;
    margin-right: 10px;
  }
  .accordion__button {
    width: auto;
    &.active img {
      transform: rotate(-180deg);
    }
    &:hover {
      cursor: pointer;
    }
    &.active {
      + .accordion__content {
        max-height: 116px;
      }
    }

  }
  .accordion__content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    >p {
      padding: 10px;
      font-size: 15px;
      margin-top: 10px;
      background: #f5f5f5;
      border-radius: 5%;
    }
  }
}
</style>