<template>
	<div class="software_recommend">
		<div><img class="topimg" src="../../assets/images/software1.jpg" alt="" /></div>
		<!--我们都在用-->
		<h4 @click="creatSoftware">{{firstlistData.title}}</h4>		
		<div class="warp">
		<ul class="we_use">
			<!--v-for="(n,index) in firstlistData.listData" :key="index" v-if="irstlistData.listData"-->

			<li v-for="(n,index) in firstlistData.listData" :key="index">
				<router-link class="totala" :to="'/details/'+n.title" >

			
					<div class="soft_small_img">
						<img :src="n.avatarUrl" alt="" />
					</div>
					<h5>{{n.title}}</h5>
					<h6>3.14亿人在用</h6>
				</router-link>
				<!--下载按钮-->
				<div class="download_bottom">
						<a :href="n.fileOptions[0].url" download="n.com.yeezsoftky.tradermobile.qh">
							下载</a>
				</div>

			</li>
			
		</ul>
		</div>
		<!--轮播图（暂时不做）+小列表-->
		<div class="allwarelist">
			<div class="soteList1" v-for="n in cont">
				<h4 @click="creatSoftware">{{n.title}}</h4>
					<ul>
					<li class="heng_li" v-for="t in n.listData">
							<router-link class="totala" :to="'/details/'+t.title" >
							<div class="soft_small_img">
								<img :src="t.avatarUrl" alt="" />
							</div>
							<div>
								<h5>{{t.tilte}}</h5>
								<h6>3.14亿人在用</h6>
								<h6>超过4亿用户的新闻客户端</h6>
							</div>
							</router-link>
		
						<div class="download_bottom download_right">

							
								<a :href="t.fileOptions[0].url" download="t.com.yeezsoftky.tradermobile.qh">下载</a>
							

						</div>
					</li>
				</ul>
			
				</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				ajaxData:[],
				firstlistData: {
					title: "大家都在用",
					ajaxUrl: "*",
					listData: "",
					listid: 0,

				},
				cont: [{
					title: "小编推荐",
					ajaxUrl: "社交",
					listData: "",
					listid: 1
				}, {
					title: "会过日子从省钱开始",
					ajaxUrl: "理财",
					listData: "",
					listid: 2
				}, {
					title: "喂马劈材，周游世界",
					ajaxUrl: "旅游",
					listData: "",
					listid: 3
				}, {
					title: "猜你喜欢",
					ajaxUrl: "音乐",
					listData: "",
					listId: 4

				}]
			}
		},
		
		methods: {
			//ajax请求，获取数据后附给对应的listdata
			creatSoftware() {
				console.log(this.firstlistData)
				console.log(this.firstlistData.listData);
			},
			getSoteDate(rote, index) {

				var self = this
				var rote = encodeURI(rote)
				var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=" + rote + "&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";

				this.axios.get('http://127.0.0.1:8080/agency', {
					params: {
						url: urlStr
					}
				}).then(function(response) {
					console.log(response.data, index);
					if(index == 0) {
//						console.log(self)
						var data = response.data.data;
//						self.ajaxData=data.splice(0,4);
						self.firstlistData.listData  =data.splice(0,8);
						console.log(self.firstlistData)
					}
					//由于线束每次只能获取一个数据
					else{
						var data=response.data.data
						 self.cont[index].listData =data.splice(0,4);
						console.log(self.cont[index].listData)

					}

				}).catch(function(response) {

				});
			}
		},

		mounted() {
//			console.log(2)
			var self=this;
			self.getSoteDate("生活", 0);
			setTimeout(function() {
				self.getSoteDate("社交", 1)
			}, 1000);
			setTimeout(function() {
				self.getSoteDate("理财", 2)
			}, 2000);
			setTimeout(function() {
				self.getSoteDate("旅游", 3)
			}, 3000);
			setTimeout(function() {
				self.getSoteDate("音乐", 4)
			}, 4000)
		}
	}
</script>

<style>
<<<<<<< HEAD
body{
		/*width: 125%;*/
		
	}
	h6{
		font-size: 1rem;
		color:#b4b4b4;
		text-align: center;
		
	}
	/*软件名称*/
	h5{
		font-size: 1.2rem;
		color:#000;
		text-align: center;
	}
	/*每个主题标题*/
	h4{
		font-size: 1.4rem;
		color:#000;
		padding:1rem;
	}
		
			a {
		text-decoration: none;
		display: inline-block;
	}
	.topimg{
		width: 100%;
	}
		.soft_small_img {
			width:5rem;
			height:5rem;
			margin:1rem auto;
		}
		.soft_small_img img{
			width:5rem;
			height:5rem;
			border:0;
		}
		/*每一个软件信息盒子*/
		.warp{
			width:100%;
			 height:18rem;
			 overflow: hidden;
		}
		.we_use{
			 width: 100%;
			
		    overflow: hidden;
		    overflow-x: scroll;
		    /*overflow-y: hidden;*/
		    white-space: nowrap;
		    /*-webkit-overflow-scrolling: touch;*/
			    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    margin-bottom: -15px;
			}
		.we_use li{
			padding:1rem;
			width:82px;
			float:left;
		}
		.download_bottom{
			margin-top:1rem;
			text-align:center;
			border:none;
		}
			
		.totala{
			width:100%;
			overflow: hidden;
		}
		.download_bottom a{
			color:#20A0FF;
			width:2.5rem;
			text-align: center;
			padding: .5rem 1rem;
			border-radius: 1rem;
			border:1px solid #20A0FF;
		}
		/*下面横排版的软件列表，可写为公共模板*/
		.software_recommend{
			width: 100%;
		}
		.heng_li{
			
			margin-left:2rem;
			display: flex;
		}
		.heng_li a{
			display:inline-block;
			flex:4;
			display:flex;
		}
		.heng_li .soft_small_img {
			display:inline-block;
			text-align: center;
		
			
			margin:0 1rem 0 0;
			/*flex:1;*/
		}	
		.heng_li .soft_info {
			margin:20px;
			flex:3;
			
		}
		.heng_li h5,.heng_li h6{
			text-align: left;
			
		}
		.heng_li .download_right{
			flex:1;
			
		}	

</style>