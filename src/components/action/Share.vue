<template>
  <!-- <el-button type="text" class="toolIcon" icon="el-icon-s-promotion" @click="shareIt"></el-button> -->
  <el-dropdown trigger="click" class="toolIcon">
    <span class="el-dropdown-link">
      <i class="el-icon-s-promotion"></i> 分享
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-plus">复制链接</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus">新浪微博</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus">微信扫一扫</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "Share",
  props: {
    msg: String
  },
  methods: {
    shareIt() {}
  }
};
</script>

<style scoped lang="less">
</style>
