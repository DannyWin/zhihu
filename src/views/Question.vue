<template>
  <div>
    <div class="questionHeader">
      <div class="questionHeader-content">
        <div class="questionHeader-main">
          <div class="questionHeader-topic">
            <TopicCard v-for="(item, index) in question.topics" :key="index" :topic="item"></TopicCard>
          </div>
          <div class="questionHeader-title">
            <h2>{{question.title}}</h2>
          </div>
          <div class="questionHeader-user" v-if="user">
            <UserInfoCard :user="user"></UserInfoCard>
          </div>
          <div class="questionHeader-description">
            <div class="thumbnail" v-if="question.thumbnail">{{ question.thumbnail }}</div>
            <div class="abstract">
              {{abstract }}
              <el-button type="text" v-if="btnShow" @click="readAll">
                阅读全文
                <i class="el-icon-arrow-down"></i>
              </el-button>
            </div>
          </div>
          <div class="questionHeader-action">
            <QuestionToolBar
              :agreeCount="this.data.agreeCount"
              @changeAgreeCount="changeAgreeCount"
              :commentCount="this.data.comment.length"
              @expandComment="expandComment"
            ></QuestionToolBar>
          </div>
        </div>
        <div class="questionHeader-side">
          <div class="followCount">
            <div>关注者</div>
            <span>123</span>
          </div>
          <div class="readCount">
            <div>被浏览</div>
            <span>1234</span>
          </div>
        </div>
      </div>
    </div>
    <div class="questionContent">
      <div class="questionContent-main">
        <div class="readAllAnswer" v-if="showTopAnswer" @click="showAllAnswer">查看全部7666个回答</div>
        <div class="allAnswer">
          <el-row class="allAnswerHeader" type="flex" justify="space-between">
            <el-col :span="3">7777个回答</el-col>
            <el-col :span="3">默认排序</el-col>
          </el-row>
          <el-row class="allAnswerContent">
            <Answer
              v-for="(answer) in question.answers"
              :key="answer.id"
              :answer="answer"
              :user="user"
            ></Answer>
          </el-row>
        </div>
      </div>
      <div class="questionContent-side">
        <UserInfoCardSide :user="user"></UserInfoCardSide>
      </div>
    </div>
  </div>
</template>

<script>
import TopicCard from "../components/popup/TopicCard";
import UserInfoCard from "../components/popup/UserInfoCard";
import UserInfoCardSide from "../components/popup/UserInfoCardSide";
import QuestionToolBar from "../components/toolbar/QuestionToolBar";
import Answer from "../components/Answer";
import { apiGetQuestion, apiGetQuestionAnswers } from "../axios/api";
export default {
  name: "Question",
  components: {
    TopicCard,
    UserInfoCard,
    QuestionToolBar,
    UserInfoCardSide,
    Answer
  },
  data() {
    return {
      abstract: "",
      btnShow: true,
      commentExpand: false,
      showTopAnswer: true,
      data: {
        agreeCount: 1000,
        comment: []
      },
      question: {
        title: "怎么学习",
        content:
          "怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习怎么学习",
        topics: [
          { name: "笑话", link: "/xiaohua", introduce: "各类笑话" },
          { name: "笑话1", link: "/xiaohua1", introduce: "各类笑话1" }
        ],
        answers: [
          {
            content:
              "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          },
          {
            content: "啊啊啊啊啊啊",
            date: "2020-04-15",
            agreeCount: 100,
            commentCount: 1000
          }
        ]
      },
      user: {
        name: "zs",
        introduce: "sdsadsada",
        avatar: ""
      }
    };
  },
  methods: {
    readAll() {
      this.abstract = this.question.content;
      this.btnShow = false;
    },
    expandComment(flag) {
      this.commentExpand = flag;
    },
    changeAgreeCount(val) {
      this.data.agreeCount += val;
    },
    showAllAnswer() {
      this.showTopAnswer = false;
      let params = { id: this.$route.params.id };
      apiGetQuestionAnswers(params).then(res => {
        if (res.status == 200) {
          this.question.answers = res.data.answers;
        }
      });
    }
  },
  mounted() {
    let params = { id: this.$route.params.id };
    apiGetQuestion(params).then(res => {
      if (res.status == 200) {
        console.log(res.data.question);
        this.question = Object.assign({}, this.question, res.data.question);
        this.abstract =
          this.question.content.length > 120
            ? this.question.content.substring(0, 120) + "..."
            : this.question.content + "...";
      }
    });
  }
};
</script>
<style lang="less">
@bgColor: white;
.questionHeader {
  margin: 3px auto;
  width: 100%;
  background-color: @bgColor;
}
.questionHeader-content {
  width: 68%;
  margin: auto;
  background-color: @bgColor;
  display: flex;
  .questionHeader-main {
    flex: 2;
    div {
      margin: 5px 5px;
    }
    .questionHeader-topic {
    }
    .questionHeader-description {
      display: flex;
      .thumbnail {
        flex: 0;
        width: 200px;
        height: 100px;
        margin-right: 10px;
        border: 1px solid red;
      }
      .abstract {
        margin-top: 5px;
        flex: 1;
        &:hover {
          color: rgb(90, 90, 90);
        }
        .el-button {
          color: #175199;
          &:hover {
            color: gray;
          }
        }
      }
    }
    .questionHeader-action {
    }
  }
  .questionHeader-side {
    flex: 1;
    padding: 5px;
    text-align: center;
    .followCount,
    .readCount {
      display: inline-block;
      padding: 15px;
      div {
        color: gray;
      }
      span {
        font-size: 25px;
        font-weight: bolder;
      }
    }
    .readCount {
      border-left: 1px solid lightgray;
    }
  }
}
.questionContent {
  margin: 10px auto;
  width: 68%;
  display: flex;
  .questionContent-main {
    flex: 2;

    margin-right: 10px;
    // background-color: @bgColor;
    .readAllAnswer {
      text-align: center;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      color: lightblue;
      background-color: @bgColor;
      &:hover {
        color: blue;
      }
    }
    .allAnswer {
      margin-top:10px;
      padding: 15px;
      background-color: @bgColor;
      .allAnswerHeader {
      }
    }
  }
  .questionContent-side {
    flex: 1;
    // background-color: @bgColor;
  }
}
</style>
