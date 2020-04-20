<template>
  <el-popover placement="bottom" width="350" height="200" trigger="hover">
    <div slot="reference" class="popupHeader">
      <el-avatar shape="square" :size="30" fit="fit" :src="user.avatar"></el-avatar>
      <div>{{user.name}}</div>
      <div>{{user.introduce}}</div>
    </div>
    <div class="popupContent">
      <el-row>
        <el-col>
          <el-avatar shape="square" :size="60" fit="fit" :src="user.avatar"></el-avatar>
          <div>{{user.name}}</div>
          <div>{{user.introduce}}</div>
        </el-col>
      </el-row>
      <el-row class="extend">
        <el-col :span="8">
          <el-link :href="'/user/'+user.id+'/answer'" :underline="false">
            回答
            <p>111</p>
          </el-link>
        </el-col>
        <el-col :span="8">
          <el-link :href="'/user/'+user.id+'/article'" :underline="false">
            文章
            <p>111</p>
          </el-link>
        </el-col>
        <el-col :span="8">
          <el-link :href="'/user/'+user.id+'/follower'" :underline="false">
            关注者
            <p>111</p>
          </el-link>
        </el-col>
      </el-row>
      <el-row class="action">
        <el-col>
          <el-button type="primary">关注他</el-button>
          <el-button>发私信</el-button>
        </el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: "UserInfoCard",
  props: {
    user: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.popupHeader {
  .el-avatar {
    float: left;
    margin-right: 10px;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.popupContent {
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
}
// .userInfoCard {
//   width: 350px;
//   height: 200px;
//   position: absolute;
//   background: white;
//   z-index: 2;
//   margin-top: 20px;
//   border: 1px solid black;
//   padding: 10px;
//   a {
//     text-decoration: none;
//     &:hover,
//     &:focus {
//       color: #175199;
//     }
//     //   &:visited{
//     //       color: #646464;
//     //   }
//   }
//   .basic {
//     overflow: hidden;
//     .img {
//       width: 70px;
//       height: 70px;
//       position: absolute;
//       border: 1px solid red;
//       left: 10px;
//       top: -20px;
//     }
//     .name {
//       margin-left: 90px;
//       line-height: 25px;
//     }
//     &:after {
//       content: "";
//       display: block;
//       height: 1px;
//       width: 100%;
//       background: #f0f2f7;
//       margin-bottom: 10px;
//     }
//   }
//   .extend {
//     color: #646464;
//     text-align: center;
//     font-size: 14px;
//     margin-bottom: 20px;
//     .answer,
//     .article,
//     .follower {
//       width: 33.3%;
//       line-height: 20px;
//       display: inline-block;
//       //   &:hover {
//       //     color: #175199;
//       //   }
//       p {
//         font-size: 20px;
//         font-weight: bold;
//       }
//     }
//   }
//   .operate {
//     text-align: center;
//     .fork {
//       display: inline-block;
//       color: white;
//       background: #0084ff;
//       border: 1px solid #0084ff;
//       width: 120px;
//       height: 30px;
//       line-height:30px;
//       padding:0;
//       cursor: pointer;
//       margin-right: 20px;
//       &:hover {
//         background: #0077e6;
//       }
//     }
//     .message {
//       display: inline-block;
//       color: #8590a6;
//       border: 1px solid #8590a6;
//       width: 120px;
//       height: 30px;
//       line-height:30px;
//       padding:0;
//       cursor: pointer;
//       &:hover {
//         background: rgba(133, 144, 166, 0.06);
//       }
//     }
//   }
// }
</style>
