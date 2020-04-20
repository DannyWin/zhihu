<template>
  <div class="toolbar">
    <el-button
      class="actionBtn"
      :type="btnType"
      @click="followTopic"
      @mouseenter.native="enterBtn"
      @mouseleave.native="leaveBtn"
      >{{ btnText }}</el-button
    >
    <el-button class="actionBtn" ype="primary" plain>写回答</el-button>
    <el-button class="actionBtn" plain>邀请回答</el-button>
    <Comment
      v-if="insert('Comment')"
      :commentCount="commentCount"
      @expandComment="expandComment"
    ></Comment>
    <Share v-if="insert('Share')"></Share>
    <Accuse v-if="insert('Accuse')"></Accuse>
  </div>
</template>

<script>
import Comment from "../action/Comment";
import Share from "../action/Share";
import Accuse from "../action/Accuse";
export default {
  name: "QuestionToolBar",
  components: { Comment, Share, Accuse },
  props: {
    agreeCount: [String, Number],
    commentCount: [String, Number],
    actions: {
      type: Array,
      default() {
        return ["Accuse", "Comment", "Share"];
      }
    }
  },
  methods: {
    insert(compo) {
      return (
        this.actions.map(a => a.toLowerCase()).indexOf(compo.toLowerCase()) !==
        -1
      );
    },
    expandComment(flag) {
      this.$emit("expandComment", flag);
    },
    changeAgreeCount(val) {
      this.$emit("changeAgreeCount", val);
    },
    enterBtn() {
      if (this.btnText == "已关注") {
        this.btnText = "取消关注";
      }
    },
    leaveBtn() {
      if (this.btnText == "取消关注") {
        this.btnText = "已关注";
      }
    },
    followTopic() {
      if (this.btnText == "关注问题") {
        this.btnText = "已关注";
        this.btnType = "info";
      } else {
        this.btnText = "关注问题";
        this.btnType = "primary";
      }
    }
  },
  data() {
    return {
      btnType: "primary",
      btnText: "关注问题"
    };
  }
};
</script>

<style scoped lang="less">
.toolbar {
  .actionBtn {
    width: 100px;
    padding: 10px 5px;
  }
  .toolIcon {
    color: #646464;
    margin: 5px 20px;
    cursor: pointer;
    &:hover {
      color: #8590a6;
    }
  }
}
</style>
