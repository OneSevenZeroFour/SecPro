<template>
	<div id="software_page">
		<el-menu id="software_header"  :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item v-for="n in software_header" :index="n.index">
				<a :href=frontUrl(n.url) target="_blank">{{n.name}}</a>
			</el-menu-item>
		</el-menu>
	</div>
	
</template>
<script>
export default {
	data() {
		return {
			activeIndex2: '1',
			//头部数据
			softwareHeader: [{
				name: "推荐",
				url: "/recoment",
				index: 1
			}, {
				name: "分类",
				url: "/sote",
				index: 2
			}, {
				name: "排行",
				url: "/ranking",
				index: 3
			}]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		
	},
	computed:{
	//生成头部跳转路由
		frontUrl(a){
			return window.location.href+"/"+a
		}
	}
	
	
}</script>