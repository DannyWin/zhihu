<template>
    <el-button type="text" class="toolIcon" icon="el-icon-upload2" @click="likeIt">{{likeCount}}</el-button>
</template>

<script>
import { apiLike } from '@/axios/api.js';
export default {
    name: 'Like',
    props: {
        likeData: Object
    },
    data() {
        return {};
    },
    computed: {
        likeCount() {
            return this.likeData.count == 0 ? '' : this.likeData.count;
        }
    },
    methods: {
        likeIt() {
            if (this.text == '喜欢') {
                this.like(1);
            } else {
                this.like(0);
            }
        },
        like(downUp) {
            const type = 1;
            const targetId = this.likeData.targetId;
            apiLike({ type, targetId, downUp }).then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                }
            });
        }
    }
};
</script>

<style scoped lang="less">
</style>
