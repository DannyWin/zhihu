<template>
  <div class="answer">
    <UserInfoCard :user="user"></UserInfoCard>
    <div class="answerAgree">{{answer.agreeCount}}人赞同了该回答</div>
    <div class="answerMain">
      <div class="answerContent">{{content}}</div>
      <div class="answerDate">{{answer.date}}</div>
    </div>
    <div class="answerExpand" v-if="showlimitedContent" @click="showAllContent">
      <span>展开阅读全文</span>
    </div>
    <div class="answerToolBar">
      <CommentToolBar :agreeCount="answer.agreeCount" :commentCount="answer.commentCount" @answerContract="answerContract"></CommentToolBar>
    </div>
    <div class="answerSplit"></div>
  </div>
</template>

<script>
import UserInfoCard from "../components/popup/UserInfoCard";
import CommentToolBar from "../components/toolbar/CommentToolBar";
export default {
  name: "Answer",
  components: { UserInfoCard, CommentToolBar },
  props: {
    answer: Object,
    user: Object
  },
  data() {
    return {
      showlimitedContent: true,
      content: ""
    };
  },
  methods: {
    showAllContent() {
      this.showlimitedContent = false;
      this.content=this.answer.content;
    },
    answerContract(){
        this.content=this.answer.content.substring(0,300);
        this.showlimitedContent = true;
    }
  }
};
</script>

<style scoped lang="less">
.answer {
  @color: #8590a6;
  position: relative;
  .answerAgree,
  .answerDate {
    color: @color;
  }
  .answerToolBar {
    position: sticky;
    bottom: 0;
  }
  .answerExpand {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 60px;
    text-align: center;
    color: lightblue;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  .answerSplit {
    width: 100%;
    height: 1px;
    position: sticky;
    bottom: 40px;
    background: lightgray;
  }
  //   &:after {
  //     width: 100%;
  //     height: 1px;
  //     content: "";
  //     display: block;
  //     background: lightgray;
  //   }
}
</style>