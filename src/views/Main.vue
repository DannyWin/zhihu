<template>
  <div class="main">
    <div class="mainLeft">
      <div id="nav">
        <router-link to="/recommand">推荐</router-link>
        <router-link to="/follow">关注</router-link>
        <router-link to="/hot">热榜</router-link>
      </div>
      <router-view></router-view>
    </div>
    <el-aside class="mainRight">
      dsadas
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="less">
.main {
  margin: 10px auto;
  width: 1000px; //80%
  .mainLeft {
    width:800px;
    margin-right: 10px;
    background-color: white;
    overflow: hidden;
  }
  .mainRight {
    width:200px;
    float:right;
  }
  &:after{
    content: '';
    display:table;
    clear:both;
  }
}
#nav {
  a {
    color: #000000;
    text-decoration: none;
    padding: 20px 20px;
    display: inline-block;
    &.router-link-exact-active {
      color: #0084ff;
      // &:hover {
      //   color: #0084ff;
      // }
    }
    &:not(.router-link-exact-active):hover {
      color: #3a76d0;
    }
  }
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background: #f0f2f7;
  }
}
</style>
