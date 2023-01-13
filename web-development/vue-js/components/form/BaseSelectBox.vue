<template>
  <div class="base-form">
    <p :class="[selectInfo.required === true ? 'label-required' : '', 'label-text font-caption1 display-block mb5']">{{selectInfo.label}}</p>
    <div 
      class="base-ipt" 
      :class="[selectInfo.error?.show === true ? 'error' : '', selectInfo.class]"
      :style="selectInfo.iptWidth ? { width: selectInfo?.iptWidth + 'px' } : { width: '100%' }"
    >
      <select name="" id="" class="ipt ipt-select" @change="onSelectChange($event)">
        <option 
          v-for="(option, i) of selectInfo.list"
          :key="i"
          :value="option.code"
          class="item"
          :selected="selected === option.value ? selected : null"
        >{{ option.value }}</option>
      </select>
      <!-- 에러있는 경우 -->
      <p v-if="selectInfo.error?.show" class="err-message mt5">{{ selectInfo.error.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: this.selectInfo.default ? this.selectInfo.default : this.selectInfo.list.length > 0 ? this.selectInfo.list[0].value : null,
    }
  },
  mounted() {
    this.$emit("input", this.selected)
  },
  methods: {
    onSelectChange (event) {
      this.$emit('input', {selected: event.target.value})
  }
  }
}
</script>