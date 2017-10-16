<template>
	<div id="software_list_page">
		<!--<el-input icon="el-icon-arrow-left el-icon-arrow-right" />-->
		<!--<el-input icon="" />-->
		<el-tabs v-model="Value" @tab-click="clickTab" >
			
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
					content: "",
					title: "最热",
					url: "/softwarelist/hot",
					name: "1",
				}, {
					content: "最新",
					title: "分类",
					url: "/softwarelist/new",
					name: "2"
				}]
			};
		},
	mounted(){
			var currentRouter = this.$router.history.current.path;
			///software/ranking
			 if(currentRouter=="/softwarelist/hot"){
				this.Value="1"
			}else if(currentRouter=="/softwarelist/new"){
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

<style>
	
	
</style>