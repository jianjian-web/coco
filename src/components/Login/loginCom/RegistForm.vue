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
        <!-- <el-form-item>
            <el-input v-model="registForm.companyName" size="medium" placeholder="公司名称"/>
        </el-form-item> -->
        <!-- <el-form-item>
            <el-input v-model="registForm.userName" size="medium" placeholder="姓名"/>
        </el-form-item> -->
        <!-- <el-form-item>
            <el-input v-model="registForm.mailbox" size="medium" placeholder="邮箱"/>
        </el-form-item> -->
        <el-form-item prop='phone'>
            <el-input v-model="registForm.phone" size="medium" placeholder="手机号码"/>
        </el-form-item>
        <el-form-item prop='Imgcode'>
            <el-input class='Imgcode' @change='handleCodeChange' v-model="registForm.Imgcode" size="medium" placeholder="验证码"/>
            <div class='codeImage'>
              <img :src="codeImg" alt="验证码" @click='handleClickRegist'>
            </div>
        </el-form-item>
        <el-form-item prop='code'>
          <div class='codeWrapper'>
            <el-input type="text" placeholder='短信验证码' class='code' v-model='registForm.code'/>
            <!-- <el-button @click='handleSendCode' class='code-btn'>发送验证码</el-button> -->
          </div>
        </el-form-item>
        <el-form-item prop='password'>
            <el-input v-model="registForm.password" size="medium" placeholder="设置密码" type='password'/>
        </el-form-item>
        <!-- <el-button type="primary" class="regist-sub" @click="handleSubmit('registForm')">立即注册</el-button> -->
        <el-button type="primary" class="regist-sub" @click="handleSubmit('registForm')">注册</el-button>
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
      /*自定义验证*/
      var checkPhone = (rule, value, callback) => {
        console.log(value)
        if(/^1[3|4|5|8][0-9]{9}$/.test(value)){
          this.phoneOk = true
          callback()
        }else{
          this.phoneOk = false
          callback(new Error('请输入正确的手机号码'));
        }
      }
      var checkImgCode = (rule, value, callback) => {
        if (!this.phoneOk) {
          callback(new Error('请先输入正确的手机号'));
        }else if(this.ImgCodeOk) {
          callback()
          return
        } else {
          this.$http.post(`/api/code/${value}/${this.registForm.phone}`).then(res => {
            console.dir(res)
            if(res){
              this.ImgCodeOk = true
              this.$message.success('验证码发送成功')
              callback()
            }else{
              this.handleGetCodeImg()
            }
          }).catch(err => {
            console.dir(err)
          })
        }
      }
    return {
      remember: false, // 记住密码
      phoneOk: false, //手机号码是否验证通过
      ImgCodeOk: false, //图片验证码验证成功
      registForm: {
        phone: "",
        password: "",
        code: '',
        Imgcode: ''   //图片验证码
      },
      codeImg: '',
      registFormRule: {
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        Imgcode: [
          { required: true, message: '请输入图片验证码', trigger: 'blur' },
          {validator: checkImgCode, trigger: 'blur'}
          ],
        code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ]
        // mailbox: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
        // ],
      }
    };
  },
  created () {
    this.handleGetCodeImg()
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$http.post('/api/auth/regist/WEB',{
            params: this.registForm
          }).then(res => {
            console.dir(res)
            if (res) {
              this.$message.success('注册成功，请登录')
              this.$emit('success')
            }
          }).catch(err => {
            this.$message.error('注册失败，请重试')            
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleGetCodeImg () {
      this.$http.get('/api/code').then(res => {
        this.codeImg = res.data.data[0]
    }).catch(err => {
        this.$message.error('获取验证码失败')
        console.dir(err)
    })
    },
    handleClickRegist(){
      this.ImgCodeOk = false
      this.handleGetCodeImg()
    },
    handleCodeChange () {
      // this.$http
    },
    handleSendCode () {

    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import url("../css/base.less");
.login-form-content{
  .agree > span,
  .agree > a {
    display: block;
    text-align: center;
  }
  .agree {
    margin-top: 16px;
  }
  .Imgcode{
    width:45%;
  }
  .codeWrapper{
    display: flex;
    justify-content: space-between;
    .code{
      width:100%;
      // border:1px solid #DCDFE6;
      // border-radius: 5px;
      // padding:0 10px;
    }
    .code-btn{
      width:45%;
    }
  }
  .codeImage{
    float: right;
    width:45%;
    border:1px solid #DCDFE6;
    height:36px;
    border-radius: 5px;
    img{
      width:100%;
      height:100%;
      cursor: pointer;
    }
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
}
</style>