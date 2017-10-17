<template>
	<div class="login">
		<div class="linkTo">
			<router-link :to="{name:'register'}">快速注册</router-link>
		</div>
		<div class="l-pic">
			<div class="pic-box">
				<img src="../../assets/img/touxiang.jpg" alt="">
			</div>
		</div>
		<div class="l-form" v-loading.body="loading">
			<el-input class="l-input" v-model="username" placeholder="请输入手机号或email" :autofocus="true"></el-input>
			<el-input class="l-input" type="password" v-model="password" placeholder="请输入密码"></el-input>
			<el-button type="primary" @click="login" class="l-btn">登录</el-button>
		</div>

	</div>
</template>
<script>
	import { cookie } from '../../util/cookie';
	import {baseUrl} from '../../util/baseUrl';

	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		computed: {
			loading() {
				return this.$store.state.dialog;
			},
			msg() {
				return this.$store.state.login.data;
			}
		},
		methods: {
			login() {
				var eleReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				var obj = {};
				if (eleReg.test(this.username)) {
					obj.elephone = this.username;

				} else if (emailReg.test(this.username)) {
					obj.email = this.username;

				} else {
					this.$message({
						type: 'warning',
						message: '你输入的用户名不正确'
					})
					return;
				}
				if (!this.password) {
					this.$message({
						type: 'warning',
						message: '密码不能为空'
					})
					return;
				}
				obj.password = this.password;

				this.$store.dispatch('login/login', obj);
			}
		},
		watch: {
			msg(val, oldVal) {
				//console.log(val, baseUrl)
				if (val.status) {
					
					this.$message({
						message: '登录成功',
						type: 'success'
					});
					cookie.set({
						name: 'username',
						val: val.data[0].nickname || val.data[0].elephone
					})
					cookie.set({
						name: 'userImg',
						val: `${baseUrl}/src/assets/img/${val.data[0].avatar}` || baseUrl + '/src/assets/img/touxiang.jpg'
					})
					cookie.set({
						name: 'userId',
						val: val.data[0].id
					})
				} else {
					this.$message({
						message: val.msg,
						type: 'error'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100%;
}

.linkTo {
	padding: 20px 40px 0 0;
	font-size: 16px;
	a {
		color: #20a0ff;
		float: right;
	}
}

.l-pic {
	padding-top: 70px;
	text-align: center;
	.pic-box {
		display: inline-block;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
	}
}

.l-form {
	padding-top: 30px;
	padding-left: 40px;
	padding-right: 40px;
	text-align: center; //overflow: hidden;
	.l-input {
		margin: 10px 0;
	}
	.l-btn {
		display: inline-block;
		margin-top: 20px;
		width: 90%;
	}
}
</style>
