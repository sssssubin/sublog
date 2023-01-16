<template>
  <div class="comment-info">
    <div class="comment-container">
      <p v-html="convertComment" id="commentText" ref="infoBox"></p>
    </div>
    <a id="moreViewBtn" @click="moreViewClick" class="more-btn button--grey">
      {{ moreViewBtnVal }}
    </a>
  </div>
</template>

<script>
export default {
  // props: {
  //   reportDataList: { type: String },
  // },
  data() {
    return {
      moreViewBtnVal: "더보기",
      convertComment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga consequatur quam voluptatem nisi aliquam doloremque nemo nobis dignissimos? Excepturi vero, atque eius molestiae molestias a aperiam dicta quis sunt.",
    }
  },
  // created(){
  //     this.convertComment=this.reportDataList.replaceAll('\r\n','<br>')
  // },
  mounted() {
    this.infoHeight()
  },
  methods: {
    infoHeight() {
      const moreViewBtn = document.getElementById("moreViewBtn")
      const commentText = document.getElementById("commentText")
      let infoBoxHeight = this.$refs.infoBox.clientHeight

      if (infoBoxHeight < 60) {
        moreViewBtn.style.display = "none"
      } else {
        moreViewBtn.style.display = "block"
        commentText.classList.add("fix-height")
      }
    },
    moreViewClick() {
      const commentText = document.getElementById("commentText")
      commentText.classList.toggle("opened")
      if (commentText.classList.contains("opened")) {
        this.moreViewBtnVal = "접기"
        commentText.classList.remove("fix-height")
      } else {
        this.moreViewBtnVal = "더보기"
        commentText.classList.add("fix-height")
      }
    },
  },
}
</script>
<style lang="scss">
// 더보기 기능
.comment-info {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 5rem auto;
  .comment-container {
    width: 100%;
  }

  .fix-height {
    @include lineBreak(4);
  }

  .more-btn {
    width: 100%;
    margin: 0;
    cursor: pointer;
    text-align: center;
  }
}
</style>
