<template>
	<div class="sideBar">
		<div class="side">
			<div class="side-header">
				<div class="side-header-bor">
					<div class="side-h-img" @click="login">
						<img :src="personalImg" alt="">
					</div>
					<div class="side-h-title">{{loginTick}}</div>
				</div>
			</div>
			<div class="side-nav">
				<ul>
					<li v-for="(item, index) in sideArr" :index="index">
						<router-link :to="item.link">
							<i :class="'iconfont ' + item.icon "></i>
							<span class="side-nav-item-title">{{item.name}}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { baseUrl } from '../../util/baseUrl';
	import { cookie } from '../../util/cookie';

	export default {
		data() {
			return {
				sideArr: [{
					name: '我的收藏',
					icon: 'icon-shoucang',
					link: '#'
				}, {
					name: '我的游戏',
					icon: 'icon-youxi',
					link: '#'
				}, {
					name: '我的钱包',
					icon: 'icon-iconfuzhifuzhi03',
					link: '#'
				}, {
					name: '我的红包',
					icon: 'icon-hongbao',
					link: '#'
				}, {
					name: '安装历史',
					icon: 'icon-ccgl-anzhuangfeiyong-4',
					link: '#'
				}]
			}
		},
		computed: {
			loginTick() {
				return cookie.get('username') || '请先登录';
			},
			personalImg(){
				//console.log(cookie.get('userImg'))
				return cookie.get('userImg');
			}
		},
		methods: {
			login() {
				if(!cookie.get('userId')){
					this.$router.push({name:'login'});
				}else{
					this.$router.push({name:'personMsg'})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.sideBar {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 999;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, .1);
	.side {
		width: 240px;
		height: 100%;
		background: #fff;
		.side-header {
			box-sizing: border-box;
			height: 140px;
			width: 100%;
			border-bottom: 1px solid #ccc;
			background: url('../../assets/img/beijing2.jpg') no-repeat;
			background-position: center center;
			.side-header-bor {
				padding-top: 50px;
				padding-left: 20px;
				overflow: hidden;
				.side-h-img {
					float: left;
					img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
					}
				}
				.side-h-title {
					float: left;
					color: #666;
					font-size: 18px;
					margin-left: 10px;
					line-height: 50px;
				}
			}
			.sid-h-diy {
				font-size: 12px;
				line-height: 20px;
				padding-left: 20px;
				color: #fff;
			}
		}
		.side-nav {
			ul {
				padding-left: 10px;
			}
			li {
				padding: 10px;
				a {
					color: #666;
					i {
						font-size: 20px;
					}
					span {
						font-size: 16px;
						margin-left: 8px;
					}
				}
			}
		}
	}
}
</style>
