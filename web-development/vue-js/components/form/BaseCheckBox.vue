<template>
  <div class="base-checkbox">
    <div class="checkbox">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :class="['input-checkbox', stateClasses]"
        :value="value"
        :checked="isSelected"
        :disabled="disabled"
        @change="toggleCheck"
        @focus="focused = true"
        @blur="focused = false"
      />
      <div class="checkbox__inner">
        <span class="checkbox__text"></span>
      </div>
    </div>
    <label :class="['label-checkbox']" :for="id" v-html="label"></label>
  </div>
</template>
<script>
export default {
  name: "BaseCheckBox",
  model: {
    prop: "model",
    event: "change",
  },
  props: {
    model: {
      type: [String, Boolean, Object, Number, Array],
      required: true,
    },
    value: {
      type: [String, Boolean, Object, Number],
      required: true,
    },
    falseValue: {
      default: false,
    },
    id: String,
    name: String,
    label: String,
    disabled: Boolean,
    checked: Boolean,
    desc: String,
  },
  data() {
    return {
      focused: false,
      checkedList: [],
    }
  },
  computed: {
    isModelArray() {
      return Array.isArray(this.model)
    },
    isValueObject() {
      return this.value !== null && typeof this.value === "object"
    },
    isSelected() {
      const { model, value, isEqual, isValueObject, isModelArray } = this

      if (isModelArray) {
        if (isValueObject) {
          return model.some((obj) => isEqual(obj, value))
        } else {
          return model.includes(value)
        }
      }

      if (isValueObject) {
        return isEqual(model, value)
      }

      return model === value
    },
    stateClasses() {
      return {
        checked: this.isSelected,
        focused: this.focused,
        disabled: this.disabled,
      }
    },
    checkAll: {
      get: function () {
        return this.terms ? this.checked.length == this.terms.length : false
      },
      set: function (value) {
        var checkedList = []
        if (value) {
          this.terms.forEach(function (item) {
            checkedList.push(item.title)
          })
        }
        this.checked = checkedList
      },
    },
  },
  methods: {
    toggleCheck() {
      if (!this.disabled) {
        if (this.isModelArray) {
          this.handleArrayCheckbox()
        } else {
          this.handleSingleSelectCheckbox()
        }
      }
    },
    handleArrayCheckbox() {
      const newModel = this.model
      if (!this.isSelected) {
        this.addValueToModel(newModel)
      } else {
        this.removeValueFromModel(newModel)
      }
    },
    handleSingleSelectCheckbox() {
      this.$emit("change", this.isSelected ? this.falseValue : this.value)
    },
    removeValueFromModel(newModel) {
      if (this.isValueObject) {
        newModel = newModel.filter((obj) => !this.isEqual(obj, this.value))
      } else {
        const index = newModel.indexOf(this.value)
        if (index !== -1) {
          newModel.splice(index, 1)
        }
      }
      this.$emit("change", newModel)
    },
    addValueToModel(newModel) {
      newModel.push(this.value)
      this.$emit("change", newModel)
    },
    isEqual(a, b) {
      return JSON.stringify(a) === JSON.stringify(b)
    },
  },
}
</script>
<style lang="scss">
.base-checkbox {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  >label {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.02em;
    color: #333333;
  }
}
.checkbox {
  position: relative;
  overflow: hidden;
}

.input-checkbox {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.input-checkbox:checked+.checkbox__inner {
  background-color: #333;
}

.checkbox__inner {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 0 !important;
  border: 2px solid #E5E5E5;
  background: #fff no-repeat center;
background-image: url("~/static/images/check-icon.png");
  background-size: 10px 7px;
}

.checkbox__text {
  display: block;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #242424;
}

</style>
