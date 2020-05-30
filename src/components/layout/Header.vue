<template>
    <div class="header">
        <AskQuestion v-if="showQuestionCard" @closeQuestionCard="closeQuestionCard"> </AskQuestion>
        <div v-if="top" style="margin:auto;border:1px solid red;text-align:center;">
            <el-menu mode="horizontal" router :default-active="'/'" style="width:80%;margin:auto;border:1px solid red;">
                <el-menu-item>
                    <el-link type="primary" href="/" :underline="false" style="font-size:30px;color:#0084FF">知乎</el-link>
                </el-menu-item>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/explore">发现</el-menu-item>
                <el-menu-item index="/question/waiting">等你来答</el-menu-item>
                <el-menu-item>
                    <el-input placeholder="内容" @focus="showHotSearch()">
                        <i class="search" />
                    </el-input>
                    <el-button type="primary" @click="popQuestionCard()">提问</el-button>

                </el-menu-item>
            </el-menu>
            <!-- <el-dropdown>
        <i class="el-icon-message-solid"></i>
    </el-dropdown>
    <el-dropdown>
        <i class="el-icon-message-solid"></i>
    </el-dropdown>
    <el-dropdown>
        <i class="el-icon-message-solid"></i>
      </el-dropdown>-->
            <!-- <el-card>
        <span slot="header">知乎热搜</span>
        <div ></div>
      </el-card> -->
        </div>
        <div v-else id="nav">
            <el-link type="primary" href="/" :underline="false" style="font-size:30px;color:#0084FF">知乎</el-link>
            <router-link to="/recommand">推荐</router-link>
            <router-link to="/follow">关注</router-link>
            <router-link to="/hot">热榜</router-link>
        </div>
    </div>
</template>

<script>
import AskQuestion from '../question/AskQuestion.vue';
export default {
    name: 'HelloWorld',
    components: { AskQuestion },
    props: {
        msg: String
    },
    data() {
        return {
            top: true,
            showQuestionCard: false
        };
    },
    methods: {
        showHotSearch() {},
        popQuestionCard() {
            this.showQuestionCard = true;
        },
        closeQuestionCard() {
            this.showQuestionCard = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
    margin: auto;
    width: 1000px; //68%
    #nav {
        height: 50px;
        line-height: 50px;
        a {
            padding: 0 20px;
        }
    }
}
</style>

