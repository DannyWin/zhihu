<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
<style lang="less">
@bgcolor: white;
.header {
  background-color: @bgcolor;
}
.content {
  width: 100%;
}
</style>
