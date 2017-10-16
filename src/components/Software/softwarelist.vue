<template>
	<div id="software_list_page">
		<h4 class="list_title"><a href="#/software/sote">&lt </a>{{this.rote}}</h4>
		<div class="listtwo">
			<div class="btntwo" v-for="(item, index) in list" :key="item.name" :name="item.name"><router-link :to="'/softwarelist/'+rote+'/'+item.url" :name="item.name">{{item.title}} </router-link></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rote:"",
				Value: '1',
				//头部数据
				list: [{
					content: "",
					title: "最热",
					url: "hot",
					name: "1",
				}, {
					content: "",
					title: "分类",
					url: "new",
					name: "2"
				}]
			};
		},
		updated(){
			let keyrote = this.$route.params.list;
			this.rote = keyrote;
			console.log(this.rote)
		},
	mounted(){
			var currentRouter = this.$router.history.current.path;
			///software/ranking
			 if(currentRouter=="/softwarelist/hot"){
				this.Value="1"
			}else if(currentRouter=="/softwarelist/new"){
				this.Value="2"
			}
			let keyrote = this.$route.params.list;
			this.rote = keyrote;
			console.log(this.rote)
		},
		methods: {
			
	
		}
	}
</script>

<style>
	.list_title a{
		display:inline-block;
		font-size:1.8rem;
		padding-right:1rem;
	}
	.listtwo{
		display:flex;
		
	}
	.btntwo{
		flex:1;
		overflow:hidden;
		
	}
	.listtwo .btntwo:nth-child(1) a{
		display: inline-block;
		width: 4rem;
		text-align: center;
		background-color:#f8f8f8;
		float:right;
	}
</style>