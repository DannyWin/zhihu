<template>
  <div class="recitem">
    <div class="title">
       <el-link :href="'/question/'+data.id" :underline="false" target="_blank">{{ data.title }}</el-link>
      </div>
    <div class="description" @click="loadDetail()">
      <template v-if="showAbstract">
        <div class="thumbnail" v-if="data.thumbnail">{{ data.thumbnail }}</div>
        <div class="abstract">
          {{
          data.content.length > 120
          ? data.content.substring(0, 120) + "..."
          : data.content + "..."
          }}
          <el-button type="text">
            阅读全文
            <i class="el-icon-arrow-down"></i>
          </el-button>
        </div>
      </template>
      <template v-else>
        <div class="details">
          <UserInfoCard :user="data.user" :style="{display:displayUserInfoCard}"></UserInfoCard>
          <div class="agree">{{ data.agreeCount }}人赞同了该回答</div>
          <!-- <div class="detail">{{ data.detail }}</div> -->
          <div class="date">编辑于{{ data.date }}</div>
        </div>
      </template>
    </div>

    <CommentToolBar
      :agreeCount="this.data.agreeCount"
      @changeAgreeCount="changeAgreeCount"
      :commentCount="this.data.comments.length"
      @expandComment="expandComment"
    ></CommentToolBar>
    <el-card v-if="commentExpand" shadow="never">
      <div slot="header">
        <span>{{ comments.length }}条评论</span>
        <el-button
          type="text"
          class="toolIcon"
          icon="el-icon-sort"
          style="float: right; padding: 3px 0"
        >切换为事件顺序</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import CommentToolBar from "./toolbar/CommentToolBar";
import UserInfoCard from "./popup/UserInfoCard";
export default {
  name: "RecommandItem",
  components: { CommentToolBar, UserInfoCard },
  props: {
    data: Object
  },
  data() {
    return {
      btnText: "赞同",
      likeTagEffect: "plain",
      hateTagEffect: "plain",
      commentExpand: false,
      showAbstract: true,
      displayUserInfoCard: false,
      comments: this.data.comments.length + "条评论"
    };
  },
  computed: {},
  methods: {
    expandComment(flag) {
      this.commentExpand = flag;
    },
    changeAgreeCount(val) {
      this.data.agreeCount += val;
    },
    loadDetail() {
      this.showAbstract = false;
    },
    showUserInfoCard(flag) {
      this.displayUserInfoCard = flag;
    }
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.recitem {
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
  .title {
    font-size: 17px;
    font-weight: bold;
    display: table;
    cursor: pointer;
    &:hover {
      color: #175199;
    }
  }
  .description {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
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
  .details {
    cursor: default;
    .author {
      //cursor: pointer;
    }
  }
}
</style>
