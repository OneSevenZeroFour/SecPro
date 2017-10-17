<template>
	<div class="login">
		<div class="linkTo">
			<router-link :to="{name:'login'}">前往登录</router-link>
		</div>
		<div class="l-pic">
			<div class="pic-box">
			</div>
		</div>
		<div class="l-form" v-loading.body="loading">
			<el-input class="l-input" v-model="username" placeholder="请输入手机号" :autofocus="true"></el-input>
			<el-input class="l-input" type="password" v-model="password" placeholder="请输入密码"></el-input>
			<el-input class="l-input" type="password" v-model="rePwd" placeholder="请再次密码"></el-input>
			<el-button type="primary" @click="register" class="l-btn">注册</el-button>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				rePwd: '',
				yanzheng: ''
			}
		},
		computed: {
			loading() {
				return this.$store.state.dialog;
			},
			msg() {
				return this.$store.state.register.data;
			}
		},
		methods: {
			register() {
				var eleReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				var pwdReg = /^[a-z0-9_-]{6,12}$/i;
				if (!eleReg.test(this.username)) {
					this.$message({
						type: 'warning',
						message: '你输入的手机号格式不正确'
					})
					return ;
				} else if (this.password != this.rePwd) {
					this.$message({
						type: 'warning',
						message: '你输入的两次密码不一致'
					})
					return ;
				}else if(!pwdReg.test(this.password)){
					this.$message({
						type: 'warning',
						message: '密码必须是 6-12 位数字字母组成'
					})
					return ;
				}
				let obj = {
					elephone: this.username,
					password: this.password
				}

				this.$store.dispatch('register/register', obj);
			}
		},
		watch:{
			msg(val, oldVal) {
				if (val.status) {
					this.$message({
						message: '注册成功',
						type: 'success'
					});
					this.$router.push({name:'recommend'})
				} else {
					this.$message({
						message: val.msg,
						type: 'error'
					})
					//console.log(val)
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
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: url('../../assets/img/touxiangv2.jpg') no-repeat;
		background-position: -120px -140px;
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
		width: 97%;
	}
}
</style>
