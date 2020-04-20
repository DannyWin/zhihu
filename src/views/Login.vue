<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px" class="loginForm">
    <el-form-item label="用户名" prop="uid">
      <el-input v-model="loginForm.uid" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="loginForm.pwd" show-password placeholder="密码"></el-input>
    </el-form-item>

    <el-button type="primary" @click="login()" class="loginBtn">登录</el-button>
  </el-form>
</template>

<script>
import { apiLogin } from "../axios/api";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        uid: "",
        pwd: ""
      },
      rules: {
        uid: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          let param = { uid: this.loginForm.uid, pwd: this.loginForm.pwd };
          apiLogin(param).then(res => {
            if (res.status == 200) {
              this.$store.commit("saveToken", res.data.token);
              this.$router.push("Recommand");
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.loginForm {
  width: 300px;
  margin: 300px auto;
  .loginBtn {
    width: 100%;
  }
}
</style>
