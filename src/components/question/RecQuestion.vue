<template>
    <div class="recitem">
        <div class="title">
            // eslint-disable-next-line prettier/prettier
            <el-link :href="'/question/' + question.id" :underline="false" target="_blank">{{ question.title }}</el-link>
        </div>
        <div class="description" @click="loadDetail()">
            <template v-if="showAbstract">
                <div class="thumbnail" v-if="question.thumbnail">
                    {{ question.thumbnail }}
                </div>
                <div class="abstract">
                    {{ absractAnswer }}
                    <el-button type="text">
                        阅读全文
                        <i class="el-icon-arrow-down"></i>
                    </el-button>
                </div>
            </template>
            <template v-else>
                <div class="details">
                    <UserInfoCard :user="question.user" :style="{ display: displayUserInfoCard }"></UserInfoCard>
                    <div class="vote">
                        {{ question.topAnswer.voteCount }}人赞同了该回答
                    </div>
                    <div class="detail">{{ question.topAnswer.content }}</div>
                    <div class="date">编辑于{{ question.topAnswer.date }}</div>
                </div>
            </template>
        </div>

        <AnswerToolBar :voteData="voteData" @changeVoteCount="changeVoteCount" :commentCount="commentCount" @expandComment="expandComment"></AnswerToolBar>
        <el-card v-if="commentExpand" shadow="never">
            <div slot="header">
                <span>{{ commentCount }}条评论</span>
                <el-button type="text" class="toolIcon" icon="el-icon-sort" style="float: right; padding: 3px 0">切换为事件顺序</el-button>
            </div>
            <div>
                <span>评论({{ answerPanel.count }})</span>
                <RecAnswer v-for="ans in answerPanel.answers" :key="ans.id" :answer="ans"> </RecAnswer>
            </div>
        </el-card>
    </div>
</template>

<script>
import AnswerToolBar from '../toolbar/AnswerToolBar';
import UserInfoCard from '../popup/UserInfoCard';
import RecAnswer from '../answer/RecAnswer';
import { apiGetQuestionAnswers } from '@/axios/api';
export default {
    name: 'RecQuestion',
    components: { RecAnswer, AnswerToolBar, UserInfoCard },
    props: {
        question: Object
    },
    data() {
        return {
            btnText: '赞同',
            likeTagEffect: 'plain',
            hateTagEffect: 'plain',
            commentExpand: false,
            showAbstract: true,
            displayUserInfoCard: false,
            commentCount: this.question.topAnswer.commentCount + '条评论',
            voteData: {
                voteCount: this.question.topAnswer.voteCount,
                commentCount: this.question.topAnswer.commentCount,
                type: 0,
                targetId: this.question.id
            },
            answerPanel: {}
        };
    },
    computed: {
        absractAnswer() {
            if (this.question.topAnswer.content) {
                if (this.question.topAnswer.content.length > 120) {
                    return (
                        this.question.topAnswer.content.substring(0, 120) +
                        '...'
                    );
                } else {
                    return this.question.topAnswer.content + '...';
                }
            } else {
                return '';
            }
        }
    },
    methods: {
        expandComment(flag) {
            this.commentExpand = flag;
            if (flag) {
                const params = {
                    id: this.question.id,
                    offset: 0,
                    limit: 20,
                    order: 'normal'
                };
                apiGetQuestionAnswers(params).then(res => {
                    if (res.status == 200) {
                        this.answerPanel = res.data;
                    }
                });
            }
        },
        changeVoteCount(val) {
            this.question.voteCount = val;
        },
        loadDetail() {
            this.showAbstract = false;
        },
        showUserInfoCard(flag) {
            this.displayUserInfoCard = flag;
        }
    },
    mounted() {
        console.log(this.question);
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
        // .author {
        //     //cursor: pointer;
        // }
    }
}
</style>
