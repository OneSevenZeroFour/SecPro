<template>
	<div class="setMsg" v-loading.body="loading">
		<div class="sm-header">
			<i class="el-icon-arrow-left" @click="backTo"></i>
			<p>{{headerTitle}}</p>
		</div>
		<div>
			<component :placeMsg="placeMsg" :type="type" :is="changeTemp" @setmsg="vSetMsg"></component>
		</div>
	</div>
</template>

<script>
	import { cookie } from '../../util/cookie';
	import { baseUrl } from '../../util/baseUrl';
	//import vRadio from './radio.vue';

	export default {
		data() {
			return {
				changeTemp: 'vText',
				headerTitle: '头部信息',
				placeMsg: '请输入信息',
				type: 'elephone'
			}
		},
		computed: {
			loading() {
				return this.$store.state.dialog;
			},
			changeMsg() {
				return this.$store.state.personMsg.changeMsg;
			}
		},
		methods: {
			vSetMsg(data) {
				//console.log(data)
				this.$store.dispatch('personMsg/update', data);
			},
			backTo() {
				this.$router.go(-1);
			}
		},
		watch: {
			changeMsg(val, oVal) {
				if (val.status) {
					this.$router.push({ name: 'personMsg' })
				}
			}
		},
		mounted() {
			let self = this;
			//console.log(this.$route.params.index)
			switch (this.$route.params.index) {
				case 0:
					self.changeTemp = 'vText';
					self.type = 'nickname';
					self.placeMsg = '请输入您的昵称';
					self.headerTitle = '个人信息 昵称';
					break;
				case 1:
					self.changeTemp = 'vText';
					self.type = 'elephone';
					self.placeMsg = '请输入您的手机号';
					self.headerTitle = '个人信息 手机号';
					break;
				case 2:
					self.changeTemp = 'vRadio';
					self.type = 'gender';
					self.placeMsg = '请输入您的手机号';
					self.headerTitle = '个人信息 性别';
					break;
				case 3:
					self.changeTemp = 'vDate';
					self.type = 'birthday';
					self.placeMsg = '请输入您的生日';
					self.headerTitle = '个人信息 生日';
					break;
				case 4:
					self.changeTemp = 'vText';
					self.type = 'email';
					self.placeMsg = '请输入您的邮箱';
					self.headerTitle = '个人信息 邮箱';
					break;
				case 5:
					self.changeTemp = 'vPassword';
					self.type = 'password';
					self.placeMsg = '请输入您的密码';
					self.headerTitle = '个人信息 密码';
					break;
				case 6:
					self.changeTemp = 'vUpload';
					self.type = 'avatar';
					self.placeMsg = '请输入您的生日';
					self.headerTitle = '个人信息 头像';
					break;
			}
		},
		components: {
			vRadio: {
				template: `
				<div class="tempLink">
					<div>
						<el-radio class="radio" v-model="radio" label="男">男</el-radio>
						<el-radio class="radio" v-model="radio" label="女">女</el-radio>
					</div>
					<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
				</div>
				`,
				data() {
					return {
						radio: '女'
					}
				},
				props: ['placeMsg', 'type'],
				methods: {
					updated() {
						let obj = {};
						obj[this.type] = this.radio;
						obj.id = cookie.get('userId');
						//console.log(obj)
						this.$emit('setmsg', obj)
						//this.$store.dispatch('personMsg/update', obj);
					}
				}
			},
			vText: {
				template: `
				<div class="tempLink">
					<el-input v-model="input" :placeholder="placeMsg"></el-input>
					<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
				</div>
				`,
				props: ['placeMsg', 'type'],
				data() {
					return {
						input: ''
					}
				},
				methods: {
					updated() {
						if (this.type == 'elephone') {
							let eleReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
							if (!eleReg.test(this.input)) {
								this.$message({
									type: 'warning',
									message: '你输入的手机号格式不正确'
								})
								return;
							}
						}
						if (this.type == 'nickname') {
							let nickReg = /^[\u4e00-\u9fff\w]{3,8}$/;
							if (!nickReg.test(this.input)) {
								this.$message({
									type: 'warning',
									message: '昵称由 3-8 中文字母数字下划线组成'
								})
								return;
							}
						}
						if (this.type == 'email') {
							let emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
							if (!emailReg.test(this.input)) {
								this.$message({
									type: 'warning',
									message: '邮箱格式不正确'
								})
								return;
							}
						}

						let obj = {};
						obj[this.type] = this.input;
						obj.id = cookie.get('userId');
						//console.log(obj)
						this.$emit('setmsg', obj)
						//this.$emit('setmsg', obj);
					}
				}

			},
			vPassword: {
				template: `
				<div class="tempLink">
					<el-input class="pwdarea" type="password" v-model="pwd1" placeholder="请输入您要修改的密码" ></el-input>
					<el-input class="pwdarea" type="password" v-model="pwd2" placeholder="请再次确认您的密码"></el-input>
					<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
				</div>
				`,
				props: ['placeMsg', 'type'],
				data() {
					return {
						pwd1: '',
						pwd2: ''
					}
				},
				methods: {
					updated() {
						let pwdReg = /^[a-z0-9_-]{6,12}$/i;
						if (!pwdReg.test(this.pwd1)) {
							this.$message({
								type: 'warning',
								message: '密码有6-12位数字字母下划线组成'
							})
							return;
						} else if (this.pwd1 != this.pwd2) {
							this.$message({
								type: 'warning',
								message: '两次密码不一致'
							})
							return;
						}
						let obj = {};
						obj[this.type] = this.pwd1;
						obj.id = cookie.get('userId');
						//console.log(obj)
						this.$emit('setmsg', obj)
						//this.$emit('setmsg', obj);
					}
				}

			},
			vDate: {
				template: `
				<div class="tempLink">
					<div class="block">
						<span class="demonstration">默认</span>
						<el-date-picker
						v-model="value1"
						type="date"
						placeholder="选择日期">
						</el-date-picker>
					</div>
					<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
				</div>
				`,

				data() {
					return {
						value1: '',

					}
				},
				props: ['placeMsg', 'type'],
				methods: {
					updated() {
						let obj = {};
						let date = this.value1;

						obj[this.type] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

						obj.id = cookie.get('userId');
						//console.log(obj)
						this.$emit('setmsg', obj)
						//this.$emit('setmsg', obj);
					}
				}
			},
			vUpload: {
				template: `
				<div class="tempLink">
					<el-upload
					class="avatar-uploader"
					action="${baseUrl}/fileupload"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
				</div>
				`,
				data() {
					return {
						imageUrl: '',
						realImg: ''
					};
				},
				props: ['placeMsg', 'type'],

				methods: {
					updated() {
						let obj = {};
						obj[this.type] = this.realImg;
						obj.id = cookie.get('userId');
						//console.log(obj)
						this.$emit('setmsg', obj)
						//this.$emit('setmsg', obj);
					},
					handleAvatarSuccess(res, file) {
						console.log(res, file)
						this.imageUrl = URL.createObjectURL(file.raw);
						this.realImg = res.data[0]
					},
					beforeAvatarUpload(file) {
						const isJPG = file.type === 'image/jpeg';
						const isLt2M = file.size / 1024 / 1024 < 2;

						if (!isJPG) {
							this.$message.error('上传头像图片只能是 JPG 格式!');
						}
						if (!isLt2M) {
							this.$message.error('上传头像图片大小不能超过 2MB!');
						}
						return isJPG && isLt2M;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

.setMsg {
	width: 100%;
	font-size: 1.196581rem;
	color: #333;
}

.sm-header {
	font-size: 1.367521rem;
	line-height: 2.136752rem;
	padding: .854701rem 0;
	text-align: center;
	margin-bottom: 2.136752rem;
	position: relative;
	border-bottom: .08547rem solid #ccc;
	i {
		position: absolute;
		left: .854701rem;
		top: 1.282051rem;
	}
}

.tempLink {
	padding: 0 1.709402rem;
}
</style>

<style>
.avatar-uploader .el-upload {
	border: .08547rem dashed #d9d9d9;
	border-radius: .512821rem;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}

.avatar-uploader .el-upload:hover {
	border-color: #20a0ff;
}

.avatar-uploader-icon {
	font-size: 2.393162rem;
	color: #8c939d;
	width: 15.213675rem;
	height: 15.213675rem;
	line-height: 15.213675rem;
	text-align: center;
}

.avatar {
	width: 15.213675rem;
	height: 15.213675rem;
	display: block;
}

.update_btn {
	margin: 1.282051rem .854701rem;
	width: 90%;
}

.pwdarea {
	margin: .854701rem 0;
}
</style>