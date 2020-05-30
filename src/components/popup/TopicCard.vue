<template>
    <el-popover placement="bottom" width="400" trigger="hover">
        <el-tag slot="reference" :href="topic.link" @mouseenter="showCard=true">{{ topic.name }}</el-tag>
        <div>
            <el-row>
                <el-col>
                    <el-avatar shape="square" :size="60" :fit="fit" :src="url"></el-avatar>
                    <div>{{ topic.name }}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <div>{{ topic.introduce }}</div>
                </el-col>
            </el-row>
            <el-row class="extend">
                <el-col :span="8">
                    <el-link :href="'/topic/'+topic.id+'/question'" :underline="false">
                        问题
                        <p>111</p>
                    </el-link>
                </el-col>
                <el-col :span="8">
                    <el-link :href="'/topic/'+topic.id+'/top-answer'" :underline="false">
                        精华
                        <p>111</p>
                    </el-link>
                </el-col>
                <el-col :span="8">
                    <el-link :href="'/topic/'+topic.id+'/follower'" :underline="false">
                        关注者
                        <p>111</p>
                    </el-link>
                </el-col>
            </el-row>
            <div class="action">
                <el-button type="primary" class="fork">关注话题</el-button>
            </div>
        </div>
    </el-popover>
</template>

<script>
export default {
    name: 'topicCard',
    props: {
        topic: Object
    },
    data() {
        return {
            showCard: false
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-tag {
    cursor: pointer;
}
.el-avatar {
    float: left;
    margin-top: -30px;
    margin-right: 10px;
}
.el-row {
    margin-bottom: 20px;
}
.extend,
.action {
    text-align: center;
}
</style>
