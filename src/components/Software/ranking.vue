<template>
	<div id="ranking_sote">
		<div class="soteList1" v-for="n in listDatas" :key="n.title">
			<!--n是两个排行榜模块-->
			<h4>{{n.title}}</h4>
			<!--三个子列表-->
			<div class="lists_box">

				<ul v-for="(t,index) in n.listData" :key="2">
				<!--	<h5>1111</h5>-->
					<li class="heng_li" v-for="i in t.list">
						<router-link class="totala" :to="'/details/'+i.title">
							<div class="soft_small_img">
								<img :src="i.avatarUrl" alt="" />
							</div>
							<div>
								<h5>{{i.title}}</h5>
								<h6>{{i.downloadCount}}人已下载</h6>
								<h6>{{i.subtitle}}</h6>
							</div>
						</router-link>
						<div class="download_bottom download_right">
							<a :href="i.fileOptions[0].url" download="t.com.yeezsoftky.tradermobile.qh">下载</a>
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
				page: 1,
				listDatas: [{
					title: "最热",
					ajaxUrl: "",
					listData: [{
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}],
					page: 1,
					listid: 1
				}, {
					title: "最新",
					listData: [{
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}, {
						list: [],
						key: ""
					}],
					page: 2,
					listid: 2,
				}],

			}
		},
		methods: {
			getSoteDate(rote, index, page) {
				var self = this
				var rote = encodeURI(rote)
				var urlStr = " http://120.76.205.241:8000/mobileapp/mobile360?sort=" + index + "&kw=" + rote + "&pageToken=" + page + "&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo"
				//				"http://120.76.205.241:8000/mobileapp/mobile360?sort="+index+"&catid=" + rote + "&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
				console.log(urlStr)
				this.axios.get('http://127.0.0.1:8080/agency', {
					params: {
						url: urlStr
					}
				}).then(function(response) {
					console.log(response.data, index);
					var data = response.data.data;

					self.listDatas[index].listData[0].list = data.splice(0, 4);
					self.listDatas[index].listData[1].list = data.splice(5, 4);
					self.listDatas[index].listData[2].list = data.splice(8, 4);
					console.log(self.listDatas)
				}).catch(function(response) {
					console.log(response);
				});
			}
		},

		mounted() {
			//			let keyrote = this.$route.params.list;
			//			this.rote = keyrote;
			let page = this.page;
			//			最新
			this.getSoteDate("[社交,视频,音乐]", 1, page)
			//最热
			let self = this
			setTimeout(function() {
				self.getSoteDate("[游戏,旅游,音乐]", 0, page)
			}, 1000)

		}
	}
</script>

<style>
	/*.lists_box{
		
	}*/
	
	.lists_box {
		/*width: 100%;*/
		overflow: hidden;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
		margin-bottom: -15px ;
		/*margin-left:1rem;*/
		/*padding:1rem;*/
	}
	
	.lists_box ul {
		/*padding: 1rem;*/
		/*width:82px;*/
		width: 100%;
		/*margin-right: 3rem ;*/
		float: left;
	}
	
	h6 {
		font-size: 1rem;
		color: #b4b4b4;
		text-align: center;
		width:18.4rem;
		overflow:hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	/*软件名称*/
	
	h5 {
		font-size: 1.2rem;
		color: #000;
		text-align: center;
	}
	/*每个主题标题*/
	
	h4 {
		font-size: 1.4rem;
		color: #000;
		padding: 1rem;
	}
	
	a {
		text-decoration: none;
		display: inline-block;
	}
	
	.soft_small_img {
		width: 5rem;
		height: 5rem;
		margin: 1rem auto;
		border-radius: 1rem;
		overflow: hidden;
	}
	.soft_small_img img {
		width: 5rem;
		height: 5rem;
		border: 0;
	}
	
	.download_bottom {
		margin-top: 1rem;
		text-align: center;
		border: none;
	}
	
	.download_bottom a {
		color: #20A0FF;
		width: 2.5rem;
		text-align: center;
		padding: .5rem 1rem;
		border-radius: 1rem;
		border: 1px solid #20A0FF;
	}
	
	.heng_li {
		width: 100%;
		margin-left: 1rem;
		margin-bottom: 1rem;
		display: flex;
	}
	
	.heng_li a {
		display: inline-block;
		flex: 4;
		display: flex;
	}
	
	.heng_li .soft_small_img {
		display: inline-block;
		text-align: center;
		margin: 0 2rem 0 0;
		/*flex:1;*/
	}
	
	.heng_li .soft_info {
		margin: 20px;
		flex: 4;
	}
	
	.heng_li h5,
	.heng_li h6 {
		text-align: left;
	}
	
	.heng_li .download_right {
		flex: 1;
		
	}
</style>