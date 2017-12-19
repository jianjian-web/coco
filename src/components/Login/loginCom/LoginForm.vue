<template>
  <el-form class="login-form-content" ref="loginForm" :model="loginForm" >
    <!-- <span class="item-title">账号</span> -->
    <el-form-item >
      <el-input type="text" v-model="loginForm.username" placeholder="请输入登录账号"/>
    </el-form-item>
    <!-- <span class="item-title" style="margin-top: 30px;display: block;">密码</span> -->
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码" @keyup.enter.native="handleSubmit('loginForm')"/>
    </el-form-item>
    <div class="operate clearfix">
      <el-checkbox v-model="remember" class="fl">记住密码</el-checkbox>
      <span class="fr forgot-pwd" @click="forgetPwd(0)">忘记密码？</span>
    </div>
    <el-form-item>
      <el-button type="primary" class="login-sub" @click="handleSubmit">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/* eslint-disable */
  import {mapMutations} from 'vuex'
  import { USER_INFO } from '../../../store/mutation-types';

  export default {
    data () {
      return {
        remember: false,  // 记住密码
        loginForm: {
          username: '',
          password: '',
        },
        loginFormRule: {
          username: [
            { required: true, message: '请填写账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
          ],
        },
      };
    },
    computed: {},
    methods: {
      ...mapMutations([
        USER_INFO
      ]),
      handleSubmit() {
        const obj = {
          username: this.loginForm.username,
          password: this.loginForm.password,
        };

        this.$http.post('/api/auth/login',{params: obj}).then(res => {
          if (res.data.code === 'SUCCESS') {
            this.$message.success('登录成功');
            this[USER_INFO](res.data.data[0])
            this.$router.push('/')
          }else {
            this.$message.error(res.data.message);
          }
        }).catch(err => {
          console.dir(err)
        })
      },
      forgetPwd (code) {
        this.$emit('formChange', code);
      },
    },
    mounted () {
      try {
        const quickLogin = JSON.parse(localStorage.getItem('quickLogin'));
        this.remember = true;
        this.loginForm.username = quickLogin.username;
        this.loginForm.password = quickLogin.password;
      } catch (e) {
        this.loginForm.username = '';
        this.remember = false;
        this.loginForm.password = '';
      }
    },
  };
</script>

<style scoped="scoped" lang="less">
  @import url("../css/base.less");

  .operate {
    margin-top: 30px;
  }

  .forgot-pwd {
    cursor: pointer;
  }

  .item-title {
    margin-top: 20px;
    margin-bottom: 6px;
    display: block;
    font-size: 12px;
    color: #7D7675;
    letter-spacing: 0.1px;
  }

  .login-sub {
    width: 100%;
    margin-top: 30px;
    // 将按钮颜色设为 官网主色
    background-color: @color;
    border-color:@color;
  }
</style>
