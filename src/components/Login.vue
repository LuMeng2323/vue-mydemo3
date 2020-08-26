<template>
  <div class="login_container">
    <div class="login_box">
      <div class="nv_box">
        <!-- <img src="../assets/icon.png" alt /> -->
        <span>欢迎登录甜茶后台管理</span>
      </div>
      <el-form
        ref="LoginFromRef"
        :rules="LoginRules"
        :model="LoginForm"
        class="login_form"
        label-width="0px"
      >
        <!-- 用户名 -->
        <el-form-item prop="user">
          <el-input prefix-icon="el-icon-user-solid" v-model="LoginForm.user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pwd">
          <el-input prefix-icon="el-icon-s-goods" type="password" v-model="LoginForm.pwd"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="Login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      LoginForm: {
        user: "",
        pwd: "",
      },
      LoginRules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到5个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.LoginFromRef.resetFields();
    },
    Login() {
      // console.log(this);
      this.$refs.LoginFromRef.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功');
          this.$router.push('/');
          //axios.get  发送get请求
          // 参数一：表示请求地址
          // 参数二：表示配置信息
          // params：表示传递到服务器端的数据，以URL参数形式拼接在请求地址后面
          // {page:1,per:3}
          // 域名+api/v1/XXX
          // 比如：https://api.cat-shop.penkuoer.com/api/v1/products
          // 最终生成的地址为
          // https://api.cat-shop.penkuoer.com/api/v1/products?page=1&per=3
          // headers 表示请求头
          // axios.get("https://api.cat-shop.penkuoer.com/api/v1/products",{
          //  params:{
          //    page:3,
          //    per:2
          //  },
          //  headers:{}
          // })
          // .then(res=>console.log(res));
          //post请求传递三个参数
          // 请求地址
          // 传递的数据  在请求体中传递
          // axios默认发送的数据是json格式的
          // 配置信息
          // headers
          //    conttent-type:'application/json' 默认
          // 登录
          // axios.post("/{domain}/user/email/login",{
          //   deviceid:'12',
          //   deviveName:'lm',
          //   email:"2413434696@qq.com",
          //   pwd:"123123"
          // },{}).then(res=>console.log(res)).catch(err=>console.log(err));
        } else {
          
          return this.$message.error('登录失败');
        }
      });
    },
  },
};
</script>
<style scoped>
.login_container {
  background-color: darkcyan;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 350px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.nv_box {
  width: 100%;
  height: 130px;
  /* border-radius: 50%; */
  /* border: 1px solid #eee; */
  /* box-shadow: 0 0 10px #ddd; */
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
}
.nv_box img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #fff;
}
.nv_box span{
  font-family: "微软雅黑";
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  height: 100%;
  line-height: 130px;
  /* border: 1px solid saddlebrown; */
  font-size: 25px;
  font-weight: bold;
  color: rgb(0,139,139);
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>