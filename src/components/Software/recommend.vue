<template>
	<div class="software_recommend">
		<div><img src="../../assets/images/software1.jpg" alt="" /></div>
		<!--我们都在用-->
		<ul class="we_use">
			<h4>{{cont.title}}</h4>
			<li v-for="n in cont[0].listDate">
				<a href="">
					<div class="soft_small_img">
						<img src="" alt="" />
					</div>
					<h5>今日头条</h5>
					<h6>3.14亿人在用</h6>
				</a>

				<!--下载按钮-->
				<div class="download_bottom">
					<a href="">
						<el-button>下载</el-button>
					</a>
				</div>

			</li>
		</ul>
		<!--轮播图（暂时不做）+小列表-->
		<div class="allwarelist">
			<div class="soteList1" v-for="n in cont">
				<h4>{{n.title}}</h4>
				<ul>
					<li v-for="n in cont.listData">
						<a href="">
							<div class="soft_small_img">
								<img src="" alt="" />
							</div>
							<div>
								<h5>今日头条</h5>
								<h6>3.14亿人在用</h6>
								<h6>超过4亿用户的新闻客户端</h6>
							</div>
						</a>
						<div class="download_right">
							<a href="">
								<el-button>下载</el-button>
							</a>
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
				weUse: "",
				listDate:"",
				cont: [{
					title: "大家都在用",
					ajaxUrl: "*",
					listData: "",
					listid: 0,

				}, {
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
		computed:{
			
		},
		methods: {
//			//ajax请求，获取数据后附给对应的listdata
			getSoteDate(rote,index){
//				console.log(rote,index)
//				console.log(encodeURI(rote));
				var self=this
				var rote=encodeURI(rote)
				var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=1&catid="+rote+"&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
				console.log(urlStr,index)
				this.axios.get('http://127.0.0.1:8080/agency', {
					params: {
						url:urlStr
					}
				}).then(function(response) {
					console.log(response.data,index);
					this.listDate=response.data
					//由于线束每次只能获取一个数据
//					self.cont[index].listData=response.data.data
				}).catch(function(response) {
//					console.log(response);
				});
			}
		},
		mounted(){
            var self = this;
//          this.getSoteDate("生活",0);
            this.getSoteDate("社交",1)
            this.getSoteDate("*",2)
            
			this.cont.forEach(function(item,index){
//				console.log(item.ajaxUrl,index)
					if(item<=0){
						self.getSoteDate(item.ajaxUrl,index) ;
					}else{
						setTimeout(function(){
					self.getSoteDate(item.ajaxUrl,index) ;
				},index*1000)
					}
					
			
				
					
//				
				console.log(item.ajaxUrl,index,"----------------------------------")
			
			})
				
		}
	}
</script>

<style>

</style>