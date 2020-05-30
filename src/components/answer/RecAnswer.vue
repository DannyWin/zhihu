<template>
    <div class="answer">
        <UserInfoCard :user="this.answer.user" :simple="true"></UserInfoCard>
        <div>{{this.answer.date}}</div>
        <div class="answerMain">
            <div class="answerContent">{{this.answer.content}}</div>
            <!-- <div class="answerDate">{{answerDate}}</div> -->
            <Comment v-for="cmt in this.answer.comments" :key="cmt.id" :comment="cmt">
            </Comment>
        </div>
        <!-- <div class="answerToolBar">
      <AnswerToolBar :voteCount="answer.voteCount" :commentCount="answer.commentCount" @answerContract="answerContract"></AnswerToolBar>
        </div>-->
        <div class="answerSplit"></div>
    </div>
</template>

<script>
import UserInfoCard from '../popup/UserInfoCard';
import Comment from '../comment/Comment';
import dateHelper from '@/common/dateHelper';
//import AnswerToolBar from "../toolbar/AnswerToolBar";
export default {
    name: 'RecAnswer',
    components: { UserInfoCard, Comment },
    props: {
        answer: Object,
        user: Object
    },
    data() {
        return {};
    },
    computed: {
        answerDate() {
            return dateHelper(this.answer.date);
        }
    },
    methods: {},
    mounted() {
        console.log(this.answer);
    }
};
</script>

<style scoped lang="less">
.answer {
    @color: #8590a6;
    position: relative;
    .answerVote,
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