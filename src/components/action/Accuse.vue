<template>
  <div class="accuse">
    <el-button type="text" class="toolIcon" icon="el-icon-s-flag" @click="accuseIt">举报</el-button>
  </div>
</template>

<script>
export default {
  name: "Accuse",
  props: {},
  data() {
    return {
      
    };
  },
  methods: {
    accuseIt() {
      this.$emit("accuseIt");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="less">
.accuse {
  display: inline-block;
  .toolIcon {
    color: #646464;
    margin: 0 0px;
    cursor: pointer;
    &:hover {
      color: #8590a6;
    }
  }
  
}
</style>
