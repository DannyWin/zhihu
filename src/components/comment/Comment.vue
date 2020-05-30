<template>
    <div class="comment">
        <UserInfoCard :user="this.comment.user" :replyToUser="this.comment.replyToUser" :simple="true"></UserInfoCard>
        <div class="content">{{this.comment.content}}</div>
    </div>
</template>

<script>
//import { apiGetTopics, apiAddQuestion } from "@/axios/api.js";
import UserInfoCard from '../popup/UserInfoCard';
export default {
    name: 'Comment',
    components: { UserInfoCard },
    props: {
        comment: Object
    },
    data() {
        return {};
    },
    methods: {}
};
</script>
<style scoped lang="less">
.comment {
    margin-left: 40px;
    .content {
        margin-left: 40px;
    }
}
</style>
