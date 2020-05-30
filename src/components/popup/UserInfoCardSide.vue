<template>
    <div class="userInfoCardSide">
        <div class="title">
            <h5>关于作者</h5>
            <hr />
        </div>
        <div class="basic">
            <div class="img">
                <img :src="user.avatar" alt />
            </div>
            <div class="name">
                <div>
                    <h3>{{user.name}}</h3>
                </div>
                <div>{{user.introduce}}</div>
            </div>
        </div>
        <div class="extend">
            <div class="answer">
                <el-link :href="''" :underline="false">
                    回答
                    <p>111</p>
                </el-link>
            </div>
            <div class="article">
                <el-link :href="''" :underline="false">
                    文章
                    <p>111</p>
                </el-link>
            </div>
            <div class="follower">
                <el-link :href="''" :underline="false">
                    关注者
                    <p>111</p>
                </el-link>
            </div>
        </div>
        <div class="operate">
            <el-button class="fork">关注他</el-button>
            <el-button class="message">发私信</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfoCardSide',
    props: {
        user: Object
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userInfoCardSide {
    width: 280px;
    height: 280px;
    background: white;
    padding: 10px;
    a {
        text-decoration: none;
        &:hover,
        &:focus {
            color: #175199;
        }
        //   &:visited{
        //       color: #646464;
        //   }
    }
    .title {
        h5 {
            padding: 10px;
        }
        hr {
            color: lightgray;
        }
    }
    .basic {
        padding: 20px;
        line-height: 10px;
        .img {
            width: 70px;
            height: 70px;
            display: inline-block;
        }
        .name {
            vertical-align: top;
            margin-left: 20px;
            display: inline-block;
        }
        &:after {
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            background: #f0f2f7;
            margin-bottom: 10px;
        }
    }
    .extend {
        color: #646464;
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
        .answer,
        .article,
        .follower {
            width: 33.3%;
            line-height: 20px;
            display: inline-block;
            //   &:hover {
            //     color: #175199;
            //   }
            p {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
    .operate {
        text-align: center;
        .fork {
            display: inline-block;
            color: white;
            background: #0084ff;
            border: 1px solid #0084ff;
            width: 100px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            cursor: pointer;
            margin-right: 20px;
            &:hover {
                background: #0077e6;
            }
        }
        .message {
            display: inline-block;
            color: #8590a6;
            border: 1px solid #8590a6;
            width: 100px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            cursor: pointer;
            &:hover {
                background: rgba(133, 144, 166, 0.06);
            }
        }
    }
}
</style>
