<template>
  <div class="terms">
    <div class="contents-wrap">
      <form action="" method="POST" id="form__wrap">
        <input type="hidden" name="memberType" id="memberType" value="${userInfo.memberType}" />
        <div class="checkbox-all">
          <input class="input-checkbox" type="checkbox" v-model="checkAll" />
          <label for="checkAll">모든 약관 동의</label>
        </div>
        <!-- // 모든 약관 동의 선택 -->

        <div class="accordion__wrapper terms__list">      
          <BaseAccordion v-for="(item, i) in accordions" :key="item.id" :id="i">
            <template v-slot:header>
              <BaseCheckBox
                :id="item.id"
                :name="item.name"
                :label="item.label"
                v-bind:value="item.label"
                v-model="chkExampleArrObj"
              />
              <input v-if="item.termsInput" type="text" placeholder="특약 조건1" class="terms__input" />                  
            </template>
            <template v-slot:content>
              <p>{{ item.text }}</p>
            </template>
          </BaseAccordion>
        </div>

        <div class="btns">
          <button id="prevBtn" class="btn prev-btn" :disabled="this.checkAll ? true : false"
            >이전</button
          >
          <button id="nextBtn" class="btn next-btn" :disabled="this.checkAll ? false : true"
            >다음</button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseCheckBox from "~/components/form/BaseCheckBox"
import BaseAccordion from "../components/accordion/BaseAccordion.vue"

export default {
  components: { BaseCheckBox, BaseAccordion },
  data() {
    return {
      accordions: [
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis tempora perspiciatis incidunt veritatis rerum quibusdam ea consectetur tenetur eos. Dolores necessitatibus excepturi sit error magni perferendis maiores suscipit. Nihil?",
          id: "terms1", name: "terms-agree1", label: "[필수] 이용약관", termsBtn: true
        },
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis tempora perspiciatis incidunt veritatis rerum quibusdam ea consectetur tenetur eos. Dolores necessitatibus excepturi sit error magni perferendis maiores suscipit. Nihil?",
          id: "terms2", name: "terms-agree2", label: "[필수] 개인정보취급방침", termsBtn: true         
        },
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis tempora perspiciatis incidunt veritatis rerum quibusdam ea consectetur tenetur eos. Dolores necessitatibus excepturi sit error magni perferendis maiores suscipit. Nihil?",
          id: "terms3", name: "terms-agree3", label: "[필수] 개인정보 수집 및 이용 동의", termsBtn: true
        },
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis tempora perspiciatis incidunt veritatis rerum quibusdam ea consectetur tenetur eos. Dolores necessitatibus excepturi sit error magni perferendis maiores suscipit. Nihil?",
          id: "terms4", name: "terms-agree4", label: "[선택] 마케팅 정보 수신", /*termsInput: true*/ ermsBtn: true
        },
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis tempora perspiciatis incidunt veritatis rerum quibusdam ea consectetur tenetur eos. Dolores necessitatibus excepturi sit error magni perferendis maiores suscipit. Nihil?",
          id: "terms5", name: "terms-agree5", label: "[필수] 수집한 개인정보의 취급 위탁", ermsBtn: true
        }
      ],
      chkExampleArrObj: [],
    }
  },
  computed: {
    checkAll: {
      get: function () {
        return this.accordions ? this.chkExampleArrObj.length == this.accordions.length : false
      },
      set: function (value) {
        var checked = []
        if (value) {
          this.accordions.forEach(function (item) {
            checked.push(item.label)
          })
        }
        this.chkExampleArrObj = checked
      },
    },
  },
}
</script>
<style lang="scss">
.contents-wrap {
  width: 100%;
  max-width: 506px;
  margin: 0 auto;
  font-family: 'Noto Sans KR', sans-serif;
}
.terms { width: 100%; max-width: 506px; margin: 0 auto;
  &__list { display: flex; flex-direction: column; }
  .terms__list { padding: 0; }
  // 모든 약관 동의 버튼
  .checkbox-all { 
    > label { display: block; padding: 18px 0; width: 100%; text-align: center; background: color(black); border-radius: 8px; 
      > img { position: absolute; top: 50%; left: 14px; transform: translateY(-50%); width: 28px; height: 28px; opacity: 0; }
    }
    &__input { width: 100%; height: 100%; margin: 0; border-radius: 8px; opacity: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
      &:checked + label { 
        > img { opacity: 1; }
      }
    }      
  }
  &__item { display: flex; justify-content: space-between; align-items: center; width: auto;
    > .base-form { display: flex; align-items: center; width: 100%;
      >.checkbox-default { width: 100%; }        
      > button { width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;
          > img { width: 6.18px; height: 10px; display: block; background-size: contain; }
      }
    }
    &:last-child {
      > .base-form {
          > .checkbox-default { width: calc(100% - 172px);
            &::after{ display: none; }
          }
          > input { width: 172px; background: #FFFFFF; border: 1px solid color(outline); border-radius: 8px; padding: 10px; @include font($type: primary2); }
      }
    }
  }  
  .btns { margin-top: 50px; display: flex; justify-content: space-between; align-items: center;
    .prev-btn { width: 91px; height: 46px; 
        &[disabled] { opacity: 0.3; cursor: auto; }
    }
    .next-btn { width: 91px; height: 46px;
        &[disabled] { opacity: 0.3; cursor: auto; }
    }
    .btn {
      padding: 16px 0;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      background-color: #242222;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      transition-duration: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  /* 약관 선택 */
  .checkbox-all {
    display: flex;
    margin: 60px 0 50px;
    position: relative;
  }

  .checkbox-all .input-checkbox {
    top: 0;
    left: 0;
    transform: unset;
    width: 100%;
    height: 100%;
  }

  .checkbox-all label {
    display: block;
    padding: 16px 0;
    width: 100%;
    color: #fff;
    text-align: center;
    background: #333333;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.03em;
  }
}
</style>