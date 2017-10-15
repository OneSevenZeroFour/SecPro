<template>
	<div id="software_page">
		<el-tabs v-model="Value" @tab-click="clickTab">
			<el-tab-pane v-for="(item, index) in softwareHeader" :key="item.name" :label="item.title" :name="item.name">
				<router-view></router-view>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>


<script>
	export default {
		data() {
			return {

				Value: '1',
				
				//头部数据
				softwareHeader: [{
					content: "推荐",
					title: "推荐",
					url: "/software/recommend",
					name: "1",
				}, {
					content: "分类",
					title: "分类",
					url: "/software/sote",
					name: "2"
				}, {
					content: "排行",
					title: "排行",
					url: "/software/ranking",
					name: "3",
				}]
			};
		},
		mounted(){
			var currentRouter = this.$router.history.current.path;
			///software/ranking
			if(currentRouter=="/software/ranking"){
				this.Value="3"
			}else if(currentRouter=="/software/recommend"){
				this.Value="1"
			}else if(currentRouter=="/software/sote"){
				this.Value="2"
			}
		},
		methods: {
			clickTab(targetName) {
				let self = this;

				let tabs = this.softwareHeader;
				setTimeout(function() {
					tabs.forEach(function(item) {
						if(item.name == targetName.name) {
							self.$router.push(item.url)
							self.Value=item.name
						}
					})
				}, 0)
			}
		}
	}
</script>
<style type="text/css">
	.software_header {
		width: 180px;
		margin: auto;
	}
	
	.el-tabs__nav-scroll {
		text-align: center;
		position:relative;
	}
	
	.el-tabs__nav {
		top:0;
		left:50%;
		transform:translateX(-50%) ;
	}
</style>


