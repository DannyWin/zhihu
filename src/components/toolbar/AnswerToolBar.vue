<template>
    <div class="toolbar">
        <Vote v-if="insert('Vote')" :voteData="voteData" @changeVoteCount="changeVoteCount"></Vote>
        <Comment v-if="insert('Comment')" :commentCount="voteData.commentCount" @expandComment="expandComment"></Comment>
        <Share v-if="insert('Share')"></Share>
        <Fork v-if="insert('Fork')"></Fork>
        <Enjoy v-if="insert('Enjoy')"></Enjoy>
        <More></More>
    </div>
</template>

<script>
import Vote from '../action/Vote';
import Comment from '../action/Comment';
import Fork from '../action/Fork';
import Share from '../action/Share';
import Enjoy from '../action/Enjoy';
import More from '../action/More';
export default {
    name: 'AnswerToolBar',
    components: { Vote, Comment, Fork, Share, Enjoy, More },
    props: {
        voteData: Object,
        actions: {
            type: Array,
            default() {
                return ['Vote', 'Comment', 'Share', 'Fork', 'Enjoy', 'More'];
            }
        }
    },
    methods: {
        insert(compo) {
            return (
                this.actions
                    .map(a => a.toLowerCase())
                    .indexOf(compo.toLowerCase()) !== -1
            );
        },
        expandComment(flag) {
            this.$emit('expandComment', flag);
        },
        changeVoteCount(val) {
            this.$emit('changeVoteCount', val);
        }
    },
    data() {
        return {};
    }
};
</script>

<style scoped lang="less">
.toolbar {
    background: white;
    .toolIcon {
        color: #646464;
        margin: 0 10px;
        cursor: pointer;
        &:hover {
            color: #8590a6;
        }
    }
}
</style>
