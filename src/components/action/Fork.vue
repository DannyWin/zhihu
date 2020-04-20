<template>
    <el-button type="text" class="toolIcon" icon="el-icon-chat-round" @click="forkIt">收藏</el-button>
</template>

<script>
export default {
  name: "Fork",
  props: {
    msg: String
  },
  methods: {
    forkIt() {
      const h = this.$createElement;
      this.$msgbox({
        title: "添加收藏",
        center: true,
        showConfirmButton:false,
        message: h('div',null,[h('div',null,'你可以创建多个收藏夹，将答案分类收藏'),h('el-button',{},'创建收藏夹'),h('el-button',{},'取消')])
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>
