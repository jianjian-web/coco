<template>
	<el-form class="login-form-content" ref="registForm" :model="registForm" :rules="registFormRule">
		<!-- <span class="item-title">手机号码</span>
        <Form-item prop="phone">
            <Input type="text" v-model="registForm.phone" placeholder="请输入手机号码"></Input>
        </Form-item>
        <span class="item-title">验证码</span>
        <Form-item prop="code" class="relative-item">
            <Input type="text" v-model="registForm.code" placeholder="请输入短信验证码"> </Input>
            <span class="send-code">发送验证码</span>
        </Form-item>
        <span class="item-title">密码</span>
        <Form-item prop="password">
            <Input type="password" v-model="registForm.password" placeholder="请设置密码"></Input>
        </Form-item> -->
        <el-form-item>
            <el-input v-model="registForm.companyName" size="medium" placeholder="公司名称"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="registForm.userName" size="medium" placeholder="姓名"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="registForm.mailbox" size="medium" placeholder="邮箱"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="registForm.phone" size="medium" placeholder="联系电话"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="registForm.password" size="medium" placeholder="设置密码"/>
        </el-form-item>
        <!-- <el-button type="primary" class="regist-sub" @click="handleSubmit('registForm')">立即注册</el-button> -->
        <el-button type="primary" class="regist-sub" @click="handleSubmit('registForm')" style="background-color:#ccc;border-color:#ccc;">目前产品处于内测期，暂不开放注册。</el-button>
        <div class="agree">
          <p>点击 “注册” 即表示您同意并愿意遵守</p>
          <p><router-link to="" class="aBtn">用户协议</router-link> 和 <router-link to="" class="aBtn">隐私政策</router-link></p>
        </div>
    </el-form>
</template>

<script>
/* eslint-disable */
// import { validatePhone } from '@/tool/regx';
export default {
  data() {
    return {
      remember: false, // 记住密码
      registForm: {
        companyName: "",
        userName: "",
        mailbox: "",
        phone: "",
        password: ""
      },
      registFormRule: {
        // 先暂时注释
        // phone: [
        //   { required: true, message: '请输入联系电话', trigger: 'blur' },
        //   { validator: '', trigger: 'blur' },
        // ],
        // companyName: [{ required: true, message: '公司名称不能为空', trigger: 'blur' }],
        // userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        // mailbox: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
        // ],
      }
    };
  },
  methods: {
    handleSubmit(name) {
      // eslint-disable-next-line
      this.$refs[name].validate(valid => {});
    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import url("../css/base.less");

.agree > span,
.agree > a {
  display: block;
  text-align: center;
}
.agree {
  margin-top: 16px;
}
.send-code {
  position: absolute;
  right: 0px;
  background-color: #57a3f3;
  color: @white;
  border-bottom-right-radius: @br;
  border-top-right-radius: @br;
  padding: 0 5px;
  top: 1px;
  z-index: 10;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  line-height: 32px;
}
.relative-item {
  position: relative;
}
.item-title {
  margin-bottom: 2px;
  display: block;
  font-size: 12px;
  color: #7d7675;
  letter-spacing: 0.1px;
}
.regist-sub {
  width: 100%;
  // 将按钮颜色设为官网主色
  background-color: @color;
  border-color: @color;
}
.el-form-item {
  margin-bottom: 13px;
}
p {
  text-align: center;
}
.aBtn {
  color: @color;
}
.agree > span[data-v-6f904caf],
.agree > a[data-v-6f904caf] {
  display: inline;
}
</style>