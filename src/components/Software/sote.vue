<template>
	<div id="software_sote">
		<li class="software_sote_list" v-for="n in cont">
			<div class="list_one" @click=getSoteDate(n.title)>
				<div class="sote_img"><img alt="" /></div>
				<h5 class="sote_title">{{n.title}}<i class="el-icon-arrow-right"></i></h5>
			</div>
			<div class="detail_sote_list">
				<a v-for="t in n.sote" @click=getSoteDate(t)>
					{{t}}</a>
				</a>
			</div>

		</li>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				data: "",

				cont: [{
					title: "生活服务",
					img: "",
					ajaxUrl: "",
					listData: "",
					listid: 1,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "购物",
					img: "",
					ajaxUrl: "",
					listData: "",
					listid: 1,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "运动健康",
					img: "",
					ajaxUrl: "",
					listData: "",
					listid: 2,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "理财",
					img: "",
					ajaxUrl: "",
					listData: "",
					listid: 3,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "社交",
					img: "",
					ajaxUrl: "",
					listData: "",
					listId: 4,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}]
			};
		},
		mounted() {
			
			//  http://120.76.205.241:8000/mobileapp/mobile360?sort={0是最热1是最新}&catid={类名}&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo

		},
		methods: {
			getSoteDate(rote) {
//				console.log(encodeURI(rote));
				var rote=encodeURI(rote)
				var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=1&catid="+rote+"&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
//				console.log(urlStr)
				this.axios.get('http://127.0.0.1:8080/agency', {
					params: {
						url:urlStr
					}
				}).then(function(response) {
					console.log(response) ;
					console.log(response.data.data);
				}).catch(function(response) {
					console.log(response);
				});
			}
		}
	}
</script>

<style>
	
	.sotes_list {
		overflow: hidden;
	}
	
	.software_sote_list {
		display: flex;
		padding: 1rem 0;
		border-bottom: 7px solid #D9D9D9;
	}
	
	.list_one {
		flex: 3;
	}
	/*左边*/
	
	.sote_title {
		color: rgb(32, 160, 255);
		font-size: 1.6rem;
		text-align: center;
		margin-top: 0.5rem
	}
	
	.sote_img {
		width: 5rem;
		height: 5rem;
		margin: auto;
	}
	
	.sote_img img {
		width: 5rem;
		height: 5rem;
	}
	
	.sote_list {
		float: left;
	}
	/*右边*/
	
	.detail_sote_list {
		float: right;
		flex: 8;
		padding: 1rem 1rem;
	}
	
	.detail_sote_list a {
		color: #3E5268;
		font-size: 1.4rem;
		width: 7rem;
		height: 2rem;
		line-height: 2rem;
		display: inline-block;
		padding: 0.6rem
	}
</style>