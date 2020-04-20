<template>
  <div class="toolbar">
    <Agree v-if="insert('Agree')" :agreeCount="agreeCount" @changeAgreeCount="changeAgreeCount"></Agree>
    <Comment v-if="insert('Comment')" :commentCount="commentCount" @expandComment="expandComment"></Comment>
    <Share v-if="insert('Share')"></Share>
    <Fork v-if="insert('Fork')"></Fork>
    <Like v-if="insert('Like')"></Like>
    <More></More>
  </div>
</template>

<script>
import Agree from "../action/Agree";
import Comment from "../action/Comment";
import Fork from "../action/Fork";
import Share from "../action/Share";
import Like from "../action/Like";
import More from "../action/More";
export default {
  name: "CommentToolBar",
  components: { Agree, Comment, Fork, Share, Like, More },
  props: {
    agreeCount: [String, Number],
    commentCount: [String, Number],
    actions: {
      type: Array,
      default() {
        return ["Agree", "Comment", "Share", "Fork", "Like", "More"];
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
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.toolbar {
  background: white;
  .toolIcon {
    color: #646464;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: #8590a6;
    }
  }
}
</style>
