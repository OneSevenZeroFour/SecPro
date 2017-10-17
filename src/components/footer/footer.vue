<template>
	<div class="footer">
		<div class="lu" v-for="(i,index) in arr" @click="cf(index)" :class="{'cb':index==xid}">
			<a :href="i.url">
				<!--<span :class="{'bh':index==xid}"></span>-->
				<p :class="{'ys':index==xid}">{{i.title}}</p>				
			</a>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			arr:[{
				id:0,
				title:'推荐',
				url:'http://127.0.0.1:8080/#/recommend'
			},{
				id:1,
				title:'软件',
				url:'http://127.0.0.1:8080/#/software/recommend'
			},{
				id:2,
				title:'游戏',
				url:'http://127.0.0.1:8080/#/game'
			},{
				id:3,
				title:'个人中心',
				url:'http://127.0.0.1:8080/#/personMsg'
			},],
			xid:0
		}
	},
	methods:{
		cf(id){
			this.xid = id;
		}
	}
}
</script>

<style lang="scss" scoped>
	.footer{width: 100%;height: 45px;position: fixed;bottom: 0;left: 0;background: white;border:1px solid #D3DCE6;}
	.lu{width: (98.8%)/4;height: 45px; float: left; border-right: 1px solid #D3DCE6;}
	.lu a{text-decoration: none; color: black;}
	.lu span{width: 100%;border: 1px solid white;display: block;}
	.lu .bh{border: 1px solid orangered;}
	.cb{background: #20a0ff;}
	.ys{color: white;}
	.lu p{font-size: 16px; text-align: center;line-height: 43px;}
</style>