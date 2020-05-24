<template>
  <div class="vote">
    <el-tag class="voteBtn" :effect="likeTagEffect" @click="likeIt">
      <i class="el-icon-caret-top"></i>
      {{ btnText }} {{ count }}
    </el-tag>
    <el-tag class="voteBtn" :effect="hateTagEffect" @click="hateIt">
      <i class="el-icon-caret-bottom"></i>
    </el-tag>
  </div>
</template>

<script>
import { apiVote } from "@/axios/api.js";
export default {
  name: "Vote",
  props: {
    voteData: Object,
    voteCount: [String, Number]
  },
  data() {
    return {
      btnText: "赞同",
      likeTagEffect: "plain",
      hateTagEffect: "plain",
      curCount: this.voteData.voteCount
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
        this.vote(1);
        this.$emit("changeVoteCount", this.curCount);
      } else {
        this.btnText = "赞同";
        this.likeTagEffect = "plain";
        this.vote(0);
        this.$emit("changeVoteCount", this.curCount);
      }
    },
    hateIt() {
      if (this.hateTagEffect == "dark") {
        this.hateTagEffect = "plain";
        this.vote(0);
      } else {
        this.hateTagEffect = "dark";
        this.likeTagEffect = "plain";
        if (this.curCount > 0) {
          this.vote(-1);
        }
        this.btnText = "赞同";
      }
    },
    vote(downUp) {
      const type = this.voteData.type;
      const targetId = this.voteData.targetId;
      apiVote({ type, targetId, downUp }).then(res => {
        if (res.status == 200) {
          console.log(res.data)
          this.curCount=res.data.voteCount;
        }
      });
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
