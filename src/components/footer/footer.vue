<template>
	<div class="footer">
		<div class="lu" v-for="(i,index) in arr" :key="index" @click="cf(index)" :class="{'cb':index==xid}">
			<a :href="i.url">
				<!--<span :class="{'bh':index==xid}"></span>-->
				<p :class="{'ys':index==xid}">{{i.title}}</p>				
			</a>
		</div>
	</div>
</template>
<script>
import { baseUrl} from '../../util/baseUrl';
export default {
	data(){
		return {
			arr:[{
				id:0,
				title:'推荐',
				url:`${baseUrl}/#/recommend`
			},{
				id:1,
				title:'软件',
				url:`${baseUrl}/#/software/recommend`
			},{
				id:2,
				title:'游戏',
				url:`${baseUrl}/#/game`
			},{
				id:3,
				title:'个人中心',
				url:`${baseUrl}/#/personMsg`
			},],
			xid:null
		}
	},
	methods:{
		cf(id){
			this.xid = id;
		}
	},
	mounted(){
		switch(window.location.href){
			case this.arr[0].url:this.xid = 0; break;
			case this.arr[1].url:this.xid = 1; break;
			case this.arr[2].url:this.xid = 2; break;
			case this.arr[3].url:this.xid = 3; break;
			default:this.xid = 0; break;
		}
	}
}
</script>

<style lang="scss" scoped>
	.footer{z-index: 10000;width: 100%;height: 3.846154rem;position: fixed;bottom: 0;left: 0;background: white;border:.08547rem solid #D3DCE6;}
	.lu{width: 25%;box-sizing:border-box; height: 3.846154rem; float: left; border-right: .08547rem solid #D3DCE6;}
	.lu a{text-decoration: none; color: black;}
	.lu span{width: 100%;border: .08547rem solid white;display: block;}
	.lu .bh{border: .08547rem solid orangered;}
	.cb{background: #20a0ff;}
	.ys{color: white;}
	.lu p{font-size: 1.367521rem; text-align: center;line-height: 3.675214rem;}
</style>