<template>
	<div class="box">
		<div>
			<img class="logo" src="../../../logo.png" alt="" @click="personal"/>
		</div>
		<div class="seach">
			<input type="" name="" id="" value="" v-model="val"/>
			<button style="height: 30px;" @click="btn"></button>
		</div>
	</div>
</template>
<script>
	import personal from '../Personal/personal.vue';
	export default {
		data() {
			return {
				val:''
			}
		},
		computed: {
			
		},
		components:{
			//rsonal
		},
		methods: {
			personal(){
				console.log(123)
				this.$store.state.personal = 'classOpen'
			},
			btn(){
				if(this.val != ''){
					var xthis = this
					var url = encodeURI(this.val)
					setTimeout(function(){
						xthis.axios.get('http://127.0.0.1:8080/agency',{
							params:{
								url:'http://120.76.205.241:8000/mobileapp/mobile360?&kw='+url+'&pageToken=1&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo'
							}
						}).then(response => {
								xthis.$store.state.xsearch = response.data.data
						}, response => {});
					},5000);
					window.location.href = 'http://127.0.0.1:8080/#/search'
				}
			}
		}
	}
</script>
<style scoped>
	button{ outline:none; }
	.box{height: 45px; position: fixed; top: 0;left: 0; z-index: 10000; background: white;width: 100%;}
	.box .logo{height:45px;padding-left: 10px;}
	.seach{border: 1px solid #D3DCE6; border-radius: 15px;margin-left: 20px; margin-top: 5px;padding: 0 10px;}
	.box div{float: left;}
	.box div input{width: 200px;height: 30px; margin: 0; padding: 0;float: left;border: none;font-size: 16px;}
	.box div button{border: none;float: left;width: 40px;height: 40px; background: url(../../../sereach.png) no-repeat center; background-size: 20px;}
</style>
