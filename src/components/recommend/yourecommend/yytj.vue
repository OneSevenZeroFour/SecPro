<template>
	<div>
		<h5>YouYou推荐</h5>
		<div v-for="i in data" class="box">
			<div class="left">
				<img :src="i.avatarUrl" alt="" />
			</div>
			<div class='conter'>
				<h6>{{i.title}}</h6>
				<p><span>评论数:{{i.commentCount}}</span><span>大小:{{i.fileOptions[0].sizeM}}</span></p>
			</div>
			<div class='right'>
				<a :href="i.fileOptions[0].url">下 载</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sj:null,
			}
		},
		methods:{
			
		},
		mounted(){
			var xthis = this
			setTimeout(function(){
				xthis.axios.get('http://127.0.0.1:8080/agency',{
					params:{
						url:'http://120.76.205.241:8000/mobileapp/mobile360?sort=0&catid=%E5%A8%B1%E4%B9%90&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo'
					}
				}).then(response => {
						xthis.sj = response.data.data
						console.log(xthis.sj)
				}, response => {});
			},5000);
		},
		computed:{
			data(){
				if(this.sj){
					return this.sj					
				}
			}
		}
	}
</script>

<style scoped>
	h5{text-align: center;line-height: 40px;font-size: 16px;}
	.box{width: 100%-20px; padding: 10px;margin: 10px;border:1px solid #D3DCE6;overflow: hidden;}
	.box div{float: left;}
	.box .left{margin-right: 10px;}
	.box .left img{width: 72px;}
	.box .conter{width: 60%;}
	.box .conter h6{font-size: 16px; font-weight: normal; margin-top: 5px;}
	.box .conter p{font-size: 12px;margin-top: 10px;}
	.box .conter p span{margin: 0 10px;}
	.box .right{width: 10%;}
	.box .right a{display:block;background: #7fc31e; width: 52px; height: 32px;color: white;text-decoration: none;font-size: 12px;text-align: center;line-height: 32px;margin-top: 20px;border-radius: 5px;}
</style>