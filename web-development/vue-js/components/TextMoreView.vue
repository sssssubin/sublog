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
