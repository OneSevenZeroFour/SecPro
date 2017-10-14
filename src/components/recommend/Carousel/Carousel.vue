<template>
	<div>
	  <el-carousel :interval="5000" arrow="never" height='150px'>
	    <el-carousel-item v-for="(item,index) in lbt">
	    	<a :href="item.url">
		      <img :src="item.imageUrls[0]" alt="" />
	    	</a>
	    </el-carousel-item>
	  </el-carousel>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				lb:[],
			}
		},
		methods:{
			
		},
		computed:{
			lbt(){
				return this.lb
			}
		},
		mounted(){
			this.axios.get('http://127.0.0.1:3000/agency',{
				params:{
					url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=91%3A75957%3A%E8%A5%BF%E6%96%B9%E7%A5%9E%E8%AF%9D&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo'
				}
			}).then(response => {
				for(var i = 0; i < 3; i++){
					this.lb.push(response.data.data[i])
				}
				console.log(this.lb)
			}, response => {
	//			 error callback
			});
		}
	}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>