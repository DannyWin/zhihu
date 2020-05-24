<template>
  <el-button type="text" class="toolIcon" icon="el-icon-chat-round" @click="likeIt">{{text}}</el-button>
</template>

<script>
export default {
  name: "Enjoy",
  props: {
    msg: String
  },
  data() {
    return {
      text: "喜欢"
    };
  },
  methods: {
    likeIt() {
      if (this.text == "喜欢") {
        this.text = "取消喜欢";
      } else {
        this.text = "喜欢";
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
