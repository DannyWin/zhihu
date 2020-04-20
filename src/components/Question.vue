<template>
  <div class="popContainer">
    <div class="content">
      <div class="questionCard">
        <el-row type="flex" justify="space-between">
          <el-col :span="2">
            <img src alt />
          </el-col>
          <el-col :span="22">
            <el-input
              placeholder="写下你的问题，准确地问题描述更容易得到解答"
              v-model="question"
              @input="handleInput"
              @change="handleChange"
            ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end">
          <span class="tip">{{tip}}</span>
        </el-row>
        <el-row type="flex" justify="end">
          <el-col :span="24"></el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="24">
            <el-input
              v-if="showDesc"
              type="textarea"
              :autosize="{ minRows: 3 }"
              placeholder="请输入问题背景、条件等详细信息（选填）"
              v-model="description"
            ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="24">
            <el-link
              v-for="(item, index) in topics"
              :underline="false"
              :key="index"
              :href="item.link"
            >
              {{ item.name }}
              <i class="el-icon-close" @click.prevent="closeTag(index)"></i>
            </el-link>

            <el-autocomplete
              ref="searchBox"
              type="text"
              v-show="showSearch"
              suffix-icon="el-icon-search"
              value-key="name"
              v-model="selectedTopic"
              :fetch-suggestions="querySearch"
              :trigger-on-focus="false"
              @select="handleSelect"
              @blur="lostFocus"
            ></el-autocomplete>

            <el-button
              v-if="showDesc"
              v-show="showBtn"
              type="text"
              icon="el-icon-plus"
              @click="addTopic"
            >{{btnText}}</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="4">
            <el-checkbox label="匿名提问"></el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-button type="primary" :disabled="btnStatus" @click="publishQuestion">发布问题</el-button>
          </el-col>
        </el-row>
      </div>
      <i class="el-icon-close close" @click="close"></i>
    </div>
  </div>
</template>

<script>
import { apiGetTopics, apiAddQuestion } from "../axios/api.js";
export default {
  name: "Question",
  props: {
    data: Object
  },
  data() {
    return {
      question: "",
      description: "",
      topics: [],
      selectedTopic: "",
      btnText: "添加话题（至少添加一个话题）",
      tip: "",
      showSearch: false,
      showBtn: true,
      showDesc: false,
      btnStatus: true
    };
  },
  methods: {
    close() {
      this.$emit("closeQuestionCard");
    },
    handleInput(val) {
      this.showDesc = val != "";
      if (val.length >= 4 && val.indexOf("?") == -1) {
        this.tip = "你还没有给问题添加问号";
      } else {
        this.tip = "";
      }
    },
    handleChange(val) {
      this.showDesc = val != "";
      if (val.length < 4) {
        this.tip = "至少输入 4 个字";
      } else if (val.length >= 4 && val.indexOf("?") == -1) {
        this.tip = "你还没有给问题添加问号";
      } else {
        this.tip = "";
      }
    },
    querySearch(keyword, cb) {
      let params = { keyword };
      apiGetTopics(params).then(res => {
        if (res.status == 200) {
          cb(res.data);
        }
      });
    },
    handleSelect(val) {
      this.topics.push(val);
      this.showSearch = false;
      if (this.topics.length < 5) {
        this.btnText = `添加话题（${this.topics.length}/5）`;
        this.showBtn = true;
        this.btnStatus = false;
      }
    },
    lostFocus() {
      this.showSearch = false;
      if (this.topics.length == 0) {
        this.btnText = `添加话题（至少添加一个话题）`;
        this.showBtn = true;
        return;
      }
      if (this.topics.length < 5) {
        this.btnText = `添加话题（${this.topics.length}/5）`;
        this.showBtn = true;
      }
    },
    addTopic() {
      this.showSearch = true;
      this.showBtn = false;
      this.selectedTopic = "";
      this.$nextTick(function() {
        this.$refs.searchBox.focus();
      });
    },
    closeTag(index) {
      this.topics.splice(index, 1);
      if (this.topics.length > 0) {
        this.btnText = `添加话题（${this.topics.length}/5）`;
      } else {
        this.btnText = `添加话题（至少添加一个话题）`;
      }
    },
    publishQuestion() {
      let params = {
        title: this.question,
        content: this.description,
        topics: this.topics
      };
      apiAddQuestion(params).then(res => {
        if (res.status == 201) {
          this.$emit("closeQuestionCard");
          this.$router.push(`/question/${res.data.id}`);
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    .questionCard {
      width: 500px;
      padding: 30px;
      background: white;
      .el-row {
        margin: 10px 0;
        .tip {
          color: #f1403c;
          text-align: right;
        }
        .el-link {
          display: inline-block;
          background: rgba(0, 132, 255, 0.1);
          height: 30px;
          padding: 0 12px;
          font-size: 14px;
          line-height: 30px;
          color: #0084ff;
          border-radius: 100px;
          margin: 10px 5px;
          .el-icon-close {
          }
          &:hover {
            background: rgba(0, 132, 255, 0.2);
          }
        }
        .el-input__inner {
          height: 20px;
          line-height: 20px;
          border-radius: 100px;
        }
      }
    }
    .close {
      align-self: flex-start;
      color: white;
      font-size: 25px;
      margin-top: 30px;
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
