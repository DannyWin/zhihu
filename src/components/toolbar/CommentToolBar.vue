<template>
    <div class="toolbar">
        <Like v-if="insert('Like')" :likeData="likeData" @changeVoteCount="changeVoteCount"></Like>
    </div>
</template>

<script>
import Like from '../action/Like';

export default {
    name: 'CommentToolBar',
    components: { Like },
    props: {
        likeData: Object,
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
