<template>
  <el-button
    type="text"
    class="toolIcon"
    icon="el-icon-chat-round"
    @click="showComment"
  >{{ comment }}</el-button>
</template>

<script>
export default {
  name: "Comment",
  props: {
    commentCount: [String,Number]
  },
  data() {
    return {
      commentExpand:false,
      comment: this.commentCount+"条评论"
    };
  },
  methods: {
    showComment() {
      if (!this.commentExpand) {
        this.commentExpand = true;
        this.comment = "收起评论";
        this.$emit('expandComment',true);
      } else {
        this.commentExpand = false;
        this.comment = this.commentCount + "条评论";
        this.$emit('expandComment',false);
      }
    }
  }
};
</script>

<style scoped lang="less">
// .toolIcon {
//   color: #646464;
//   margin: 0 10px;
//   &:hover {
//     color: #8590a6;
//   }
//}
</style>
