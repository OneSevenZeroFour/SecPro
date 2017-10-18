<template>
	<div class="personMsg" v-loading.body="loading">
		<div class="pmsg-header">
			<i class="el-icon-arrow-left" @click="backTo"></i>
			<span class="pmsg-h-title">个人信息</span>
		</div>
		<div class="first-link-img" @click="changeMsg(6)">
			<span class="list-item-title">头像</span>
			<div class="list-item-img">
				<img :src="personImg" alt="">
			</div>
			<i class="el-icon-arrow-right"></i>
		</div>
		<div class="sec-link">
			<div v-for="(item, index) in listArr" :key="index" class="list-item" @click="changeMsg(index)">
				<span class="list-item-title">{{item.title}}</span>
				<p class="list-item-value">{{item.value}}</p>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="thr-link" @click="changeMsg(5)">
			<span class="list-item-title">修改密码</span>
			<i class="el-icon-arrow-right"></i>
		</div>
		<div class="out-link">
			<el-button type="danger" class="out-btn" @click="outLogin">退出登录</el-button>
		</div>
	</div>
</template>
<script>
	import { baseUrl } from '../../util/baseUrl';
	import { cookie } from '../../util/cookie';

	export default {
		computed: {
			personImg(){
				let avatar = this.$store.state.personMsg.data.avatar;
				return `${baseUrl}/src/assets/img/${avatar || 'touxiang.jpg'}`;
			},
			listArr() {

				let data = this.$store.state.personMsg.data;
				let elephone = data.elephone;
				let ele = elephone && elephone.slice(0, 3) + '******' + elephone.slice(elephone.length - 2, elephone.length);

				let arr = [{
					title: '昵称',
					value: data.nickname || '请设置您的昵称',
				}, {
					title: '绑定手机号',
					value: ele,
				}, {
					title: '性别',
					value: data.gender || '男',
				}, {
					title: '生日',
					value: data.birthday || '让我们记住您的生日吧',
				}, {
					title: '邮箱地址',
					value: data.email || '请设置您的邮箱',
				}]

				return arr;
			},
			loading(){
				return this.$store.state.dialog;
			}
		},
		methods: {
			backTo() {
				
				this.$router.push({name: 'recommend'});
			},
			changeMsg(index) {
				//console.log(index)
				this.$router.push({ name: 'setMsg', params: { index } });
			},
			outLogin(){
				
			}

		},


		mounted() {
			//document.body.scrollTop = this.$route.meta.scrollLen;

			let obj = {};
			obj.id = cookie.get('userId');
			this.$store.dispatch('personMsg/login', obj);
		},

	}
</script>

<style scoped lang="scss">
.personMsg {
	width: 100%;
	height: 100%;
	font-size: 1.111111rem;
	color: #333;
	background: #efefef;
}

.pmsg-header {
	background: #fff;
	padding: .854701rem;
	border-bottom: .08547rem solid #ccc;
	.pmsg-h-title {
		font-size: 1.367521rem;
		margin-left: 1.709402rem;
	}
}

.first-link-img {
	background: #fff;
	padding: .854701rem;
	position: relative;
	margin-bottom: .854701rem;
	.list-item-img {
		float: right;
		margin-right: 1.709402rem;
		img {
			width: 5.128205rem;
			height: 5.128205rem;
			border-radius: 50%;
		}
	}
	.list-item-title {
		line-height: 5.982906rem;
	}
	i {
		position: absolute;
		right: .854701rem;
		top: 3.418803rem;
	}
}

.sec-link {
	background: #fff;
	margin-bottom: .854701rem;
	.list-item {
		padding: 1.367521rem .854701rem;
		position: relative;
	}
	.list-item-value {
		float: right;
		margin-right: 1.709402rem;
		color: #999;
	}
	i {
		font-size: .854701rem;
		position: absolute;
		right: .854701rem;
		top: 1.538462rem;
	}
}

.thr-link {
	background: #fff;
	margin-bottom: .854701rem;
	padding: 1.367521rem .854701rem;
	position: relative;

	i {
		font-size: .854701rem;
		position: absolute;
		right: .854701rem;
		top: 1.538462rem;
	}
}

.out-link {
	margin-top: .854701rem;
	.out-btn {
		margin-left: .854701rem;
		width: 90%;
	}
}
</style>
