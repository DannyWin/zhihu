<template>
  <div class="toolbar">
    <Like v-if="insert('Like')" :likeData="likeData" @changeLikeCount="changeLikeCount"></Like>
    <More></More>
  </div>
</template>

<script>
// import Vote from "../action/Vote";
// import Comment from "../action/Comment";
// import Fork from "../action/Fork";
// import Share from "../action/Share";
import Like from "../action/Like";
import More from "../action/More";
export default {
  name: "AnswerToolBar",
  components: { Like, More },
  props: {
    likeData: Object,
    actions: {
      type: Array,
      default() {
        return ["Vote", "Comment", "Share", "Fork", "Enjoy", "More"];
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
    changeLikeCount(val) {
      this.$emit("changeVoteCount", val);
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
