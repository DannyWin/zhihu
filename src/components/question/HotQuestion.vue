<template>
  <div>
    <div class="title">
      {{ data.title }}
    </div>
    <div class="content">
      <div class="thumbnail">
        {{ data.thumbnail }}
      </div>
      <div class="abstract">
        {{ data.abstract }}
      </div>
    </div>
    <div class="toolbar">
      <el-button icon="el-icon-caret-top">赞同</el-button>
      <el-button icon="el-icon-caret-bottom"></el-button>
      <el-button type="text" icon="el-icon-chat-round"
        >{{ data.commentCount }}条评论</el-button
      >
      <el-button type="text" icon="el-icon-s-promotion">分享</el-button>
      <el-button type="text" icon="el-icon-chat-round">收藏</el-button>
      <el-button type="text" icon="el-icon-chat-round">喜欢</el-button>
      <el-dropdown>
        <span><i class="el-icon-more"></i></span>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotItem",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  display: flex;
  .thumbnail {
    flex: 2;
  }
  .abstract {
    flex: 1;
  }
}
.toolbar {
}
</style>
