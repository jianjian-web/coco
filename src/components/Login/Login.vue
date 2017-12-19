<template>
	<transition>
		<div class="login-wrap" :style="fullHeightStyle">
			<div class="rso-solgan fl">
				<div class="rso-logo" style='top:-100px;' >
					<router-link to="">
						<!-- <img class="logo-img" src="../../assets/login/logo1.svg" alt="" style='margin-bottom:30px;'/> -->
						<img class="logo-img" src="../../assets/login/logo.png" alt="" />
					</router-link>
				</div>
			</div>
			<div class="login-form fr">
				<div class="loign-box">
					<!--登陆部分-->
					<div class="form-content-wrap" v-if="wantLogin === 1 ||  wantLogin === 2">
						<div class="oprate-switch">
							<span class="login-title login-login" :class="{active: wantLogin === 1}" @click="formChange(1)">登录</span>
							<span class="login-title" :class="{active: wantLogin === 2}" @click="formChange(2)">注册</span>
						</div>
						<LoginForm @formChange ="formChange" v-if="wantLogin === 1"/>
						<RegistForm v-if="wantLogin === 2"/>
					    <!--<div class="to-regist">
					    	<span class="regist-text">没有账号登陆？<router-link to="regist">现在注册！</router-link></span>
					    </div>-->
					</div>
					<!--找回密码部分-->
					<ResetPwd @formChange ="formChange" v-else/>

				</div>
				<!-- 向右的箭头 -->
				<!-- <div class="triangle_border_right"></div> -->
			</div>
		</div>
	</transition>
</template>

<script>
/* eslint-disable */
import LoginForm from './loginCom/LoginForm.vue';
import ResetPwd from './loginCom/ResetPwd.vue';
import RegistForm from './loginCom/RegistForm.vue';

export default {
  data() {
    return {
      wantLogin: 1, // 登陆或者找回密码， 0:重置密码，1:登陆，2:注册
      fullHeightStyle: { height: `${document.documentElement.clientHeight}px` },
    };
  },
  methods: {
    formChange (code) {
      this.wantLogin = code;
    },
  },
  mounted () {
  },
  components: {
    LoginForm,
    ResetPwd,
    RegistForm,
  },
};
</script>


<style scoped="scoped" lang="less">
@import url("./css/base.less");

/*向右*/
.triangle_border_right{
    width:0;
    height:0;
    border-width:15px 0 15px 15px;
    border-style:solid;
    // border-color:transparent transparent transparent #bba2c5;/*透明 透明 透明 灰*/
    border-color:transparent transparent transparent #fee6e4;/*透明 透明 透明 灰*/
    margin:40px auto;
    position:absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
}
.login-dot{
	display: inline-block;
	width: 10px;
	height: 10px;
	vertical-align: 3px;
	margin-right: 10px;
	background-color: #666666;
	border-radius: 50%;
}
.forgot-pwd{
	cursor: pointer;
	color: @linkc;
}
.to-regist{
	text-align: center;
}

.login-form-content{
	margin-top: 20px;
	overflow: hidden;
}

// 登录|注册居中
.oprate-switch{
	text-align: center;
}
.login-title.active{
	// color: @linkc;
	color:@color; // 官网主色
}
.login-login{
	padding-right: 20px;
	border-right: 1px solid #dddee1;
}
.login-title{
	font-size: 18px;
	height: 16px;
	line-height: 16px;
	color: #141414;
	margin-right: 20px;
	margin-top: 30px;
	display: inline-block;
	cursor: pointer;
	letter-spacing: 0.15px;
}
.form-content-wrap{
	width: 280px;
	margin-left: auto;
	margin-right: auto;
}
.loign-box{
	width: 350px;
	// height: 450px;
	padding-bottom: 20px;
	background-color: @white;
	border-radius: @br;
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);
	box-shadow: #666 0px 0px 10px;
}
.contact-phone:before{
	width: 20px;
	height: 20px;
	content: '';
	display: inline-block;
	// background-image: url(../../assets/login/bg.png);
	vertical-align: -5px;
	margin-right: 5px;
}
.contact-text,.contact-phone{
	font-size: @fz;
	color: @white;
	letter-spacing: 0.1px;
}
.contact-us{
    display: block;
	text-align: center;
	position: absolute;
	bottom: 24px;
	width: 100%;
}
.logo-img{
	display: block;
	margin-left: auto;
	margin-right: auto;
	// width:200px;
	height: auto;
}

.logo-text{
	display: block;
	text-align: center;
	margin-top: 30px;
	font-size: 24px;
	color: #FFFFFF;
	letter-spacing: 0.2px;
}
.rso-logo{
	width: 500px;
	height: 250px;
	margin-left: auto;
	margin-right: auto;
	position: absolute;
	margin-top: auto;
	margin-bottom: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
.login-wrap{
  display: flex;
	background-color: gainsboro;
}
.login-form{
	width: 50%;
	background-color: #F4F4F4;
	min-height: 100%;
	position: relative;
}
.rso-solgan{
	position: relative;
	width: 50%;
	// background-color: #387DC1;
	background-image: url(../../assets/login/abg.jpg);
	background-size: cover;
	min-height: 100%;
}

</style>
