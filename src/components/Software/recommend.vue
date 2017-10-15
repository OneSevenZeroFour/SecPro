<template>
	<div class="software_recommend">
		<div><img src="../../assets/images/software1.jpg" alt="" /></div>
		<!--我们都在用-->
		<ul class="we_use">
			<h4>{{cont.title}}</h4>
			<li v-for="n in ">
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
				cont: [{
					title: "大家都在用",
					ajaxUrl: "",
					listData: "",
					listid: 0,

				}, {
					title: "小编推荐",
					ajaxUrl: "",
					listData: "",
					listid: 1
				}, {
					title: "会过日子从省钱开始",
					ajaxUrl: "",
					listData: "",
					listid: 2
				}, {
					title: "喂马劈材，周游世界",
					ajaxUrl: "",
					listData: "",
					listid: 3
				}, {
					title: "猜你喜欢",
					ajaxUrl: "",
					listData: "",
					listId: 4

				}]
			}
		},
		methods: {
//			//ajax请求，获取数据后附给对应的listdata
			getListData(id){
				var self = this;
//				$.ajax({
//						type: "get",
//						url: self.cont[id].ajaxUrl,
//						success: function(data) {
//							self.cont[id].listdata = data
//						}
//
//				}
			}
		}
	}
</script>

<style>

</style>