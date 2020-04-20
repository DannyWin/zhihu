<template>
  <div class="vote">
    <el-tag class="voteBtn" :effect="likeTagEffect" @click="likeIt">
      <i class="el-icon-caret-top"></i>
      {{ btnText }}{{ count }}
    </el-tag>
    <el-tag class="voteBtn" :effect="hateTagEffect" @click="hateIt">
      <i class="el-icon-caret-bottom"></i>
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "Agree",
  props: {
    agreeCount: [String,Number]
  },
  data() {
    return {
      btnText: "赞同",
      likeTagEffect: "plain",
      hateTagEffect: "plain",
      curCount:this.agreeCount
    };
  },
  computed: {
    count() {
      if (this.curCount) {
        return parseInt(this.curCount) >= 10000
          ? (parseInt(this.curCount) / 10000).toFixed(1) + "万"
          : this.curCount;
      } else {
        return "";
      }
    }
  },
  methods: {
    likeIt() {
      if (this.btnText == "赞同") {
        this.btnText = "已赞同";
        this.likeTagEffect = "dark";
        this.hateTagEffect = "plain";
        this.curCount++;
        this.$emit('changeAgreeCount',1);
      } else {
        this.btnText = "赞同";
        this.likeTagEffect = "plain";
        this.curCount--;
        this.$emit('changeAgreeCount',-1);
      }
    },
    hateIt() {
      if (this.hateTagEffect == "dark") {
        this.hateTagEffect = "plain";
      } else {
        this.hateTagEffect = "dark";
        this.likeTagEffect = "plain";
      }
    }
  }
};
</script>

<style scoped lang="less">
.vote {
  display: inline-block;
  .voteBtn {
    margin: 0 5px 0 0;
    cursor: pointer;
  }
}
</style>
