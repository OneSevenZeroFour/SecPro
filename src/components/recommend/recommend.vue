<template>
	<div>
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark">
		  		<Carousel :data=Carousel></Carousel>
		  		<center :data=center[0]></center>
		  		<center :data=center[1]></center>
		  		<center :data=center[2]></center>
		  		<yytj></yytj>
		  </div></el-col>
		</el-row>	
	</div>
</template>

<script>
	import Carousel from './Carousel/Carousel.vue';
	import Center from './center/center.vue';
	import Yytj from './yourecommend/yytj.vue';
	export default {
		data(){
			return {
				center:[{
					id:1,
					title:'必备软件',
					url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=%E7%94%9F%E6%B4%BB&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo',
					data:null
				},{
					id:2,
					title:'热门游戏',
					url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=91%3A75946%3A%E8%A7%92%E8%89%B2%E6%89%AE%E6%BC%94&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo',
					data:null
				},{
					id:3,
					title:'小小造型师',
					url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=%E7%85%A7%E7%89%87%E7%BE%8E%E5%8C%96&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo',
					data:null
				}],
				Carousel:[{
					url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=91%3A75957%3A%E8%A5%BF%E6%96%B9%E7%A5%9E%E8%AF%9D&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo',
					data:null
				}]
			}
		},
		methods:{
			ajax(data){
				this.axios.get('http://127.0.0.1:8080/agency',{
					params:{
						url:data.url
					}
				}).then(response => {
						data.data = response.data.data
				}, response => {});
			}
		},
		computed:{

		},
		mounted(){
			var xthis = this;
			setTimeout(function(){
				xthis.ajax(xthis.Carousel[0])
			},1000);
			setTimeout(function(){
				xthis.ajax(xthis.center[0])
			},2000);
			setTimeout(function(){
				xthis.ajax(xthis.center[1])
			},3000);
			setTimeout(function(){
				xthis.ajax(xthis.center[2])
			},4000);
		},
		components: {
			Carousel,
			Center,
			Yytj
		}
	}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>