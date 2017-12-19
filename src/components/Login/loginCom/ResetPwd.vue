<template>
	<div class="form-content-wrap">
		<span class="login-title">重置密码</span>
		<el-form class="login-form-content" ref="resetpwdForm" :model="resetpwdForm" :rules="resetFormRule">
	        <el-form-item prop="phone">
	            <el-input type="text" v-model="resetpwdForm.phone" placeholder="请输入手机号"></el-input>
	        </el-form-item>
	        <el-form-item prop="code" class="relative-item">
	            <el-input type="password" v-model="resetpwdForm.code" placeholder="短信验证码" ></el-input>
	            <span class="send-code">发送验证码</span>
	        </el-form-item>
	        <el-form-item prop="password">
	            <el-input type="password" v-model="resetpwdForm.password" placeholder="请输入新密码"></el-input>
	        </el-form-item>
	        <el-form-item prop="password">
	            <el-input type="password" v-model="resetpwdForm.password" placeholder="请确认新密码"></el-input>
	        </el-form-item>
	        <el-form-item>
	            <!-- <el-button type="primary" class="reset-sub" @click="handleSubmit('resetpwdForm')">重置密码</el-button> -->
              <el-button type="primary" class="reset-sub" style="background-color:#ccc;border-color:#ccc;">暂不开放重置</el-button>
	        </el-form-item>
	        <div style="text-align: center;">
	        	<span class="to-login" @click="toLogin(1)">返回登录</span>
	        </div>
	    </el-form>
	</div>	
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      wantLogin: false, // 登陆或者找回密码， 0:登陆，1:找回密码，3:注册
      fullHeightStyle: { height: `${document.documentElement.clientHeight}px` },
      remember: false, // 记住密码
      resetpwdForm: {
        phone: '',
        code: '',
        password: '',
        confirmPwd: '',
      },
      resetFormRule: {
        // 先暂时注释
        // phone: [{ required: true, message: '手机号码不能为空', trigger: 'blur' }],
        // code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
        // password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        // confirmPwd: [{ required: true, message: '请再次确认密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
	// eslint-disable-next-line
        if (valid) {
        }
      });
    },
    toLogin(code) {
      this.$emit('formChange', code);
    },
  },
};
</script>

<style scoped="scoped" lang="less">
  @import url("../css/base.less");

.send-code {
  position: absolute;
  right: 0px;
  background-color: #57a3f3;
  color: @white;
  border-bottom-right-radius: @br;
  border-top-right-radius: @br;
  padding: 0 5px;
  top: 0px;
  z-index: 10;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.relative-item {
  position: relative;
}
.to-login {
  cursor: pointer;
}
.login-form-content {
  margin-top: 20px;
}
.login-title {
  font-size: 18px;
  color: #141414;
  margin-top: 20px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  letter-spacing: 0.15px;
}
.reset-sub {
  width: 100%;
  margin-top: 10px;
}

// 把按钮颜色调成官网主色
.send-code,.reset-sub{
  background-color:@color;
  border-color:@color;
}
</style>