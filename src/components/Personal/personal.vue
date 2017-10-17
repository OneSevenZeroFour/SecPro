<template>
	<div>
		
		<div :class="'sideBar '+ classBack" @click.self="logback">
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
	</div>
</template>

<script>
	import { baseUrl } from '../../util/baseUrl';
	import { cookie } from '../../util/cookie';


	export default {
		mounted(){
			document.body.scrollTop = this.$route.meta.scrollLen
		},
		data() {
			return {
				//classBack: '',
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
				let data = this.$store.state.login.data;
				if(data.data){
					return data.data[0].nickname || data.data[0].elephone;
				}else{
					return '请先登录';
				}
			},
			personalImg() {
				let data = this.$store.state.login.data;
				if(data.data){
					return `${baseUrl}/src/assets/img/${data.data[0].avatar}` || `${baseUrl}/src/assets/img/touxiang.jpg`;
				}else{
					return `${baseUrl}/src/assets/img/touxiang.jpg`;
				}
			},
			classBack(){
				
				return this.$store.state.personal
			}
		},
		methods: {
			login() {
				if (!cookie.get('userId')) {
					this.$store.state.personal = 'classBack'
					this.$router.push({ name: 'login' });
				} else {
					this.$store.state.personal = 'classBack'
					this.$router.push({ name: 'personMsg' })
				}
			},
			logback() {
				
				this.$store.state.personal = 'classBack'
				console.log(this.$store.state.personal)
				//this.classBack = 'classBack';
			},
			open() {
				//console.log('122')
				this.$store.state.personal = 'classOpen'
				//this.classBack = 'classOpen';
			},
			getLocalPosition() {
				let self = this;
				//关于状态码
				//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
				//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
				//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
				//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
				//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
				//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
				//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
				//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
				//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)

				//根据浏览器定位
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r) {
					if (this.getStatus() == BMAP_STATUS_SUCCESS) {
						//根据坐标获取城市
						let point = new BMap.Point(r.point.lng, r.point.lat);
						let geoc = new BMap.Geocoder();
						geoc.getLocation(point, function(rs) {
							// console.log(rs);地址相关信息
							let city = rs.addressComponents.city;
							console.log(city)
							self.showWeathers(city);
						});
					}
					else {
						alert('failed' + this.getStatus());
					}
				}, { enableHighAccuracy: true })
			},
			showWeathers(city) {
				//console.log(this.axios)
				this.axios({
					method: 'get',
					url: `${baseUrl}/getWeathers`,
					data: {
						city:city
					}
				})
					.then(function(response) {
						//var weaArr = JSON.parse(response).data.forecast;
						console.log(response)
						//createHtml({ city, weaArr });
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
.sideBar {
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10999;
	left: -100%;
	top: 0;
	background: rgba(0, 0, 0, 0);
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

.classBack {
	background: rgba(0, 0, 0, 0);
	transition: all .3s linear;
	transform: translateX(0);
}

.classOpen {
	background: rgba(0, 0, 0, 0);
	transition: all .3s linear;
	transform: translateX(100%);
}
</style>
