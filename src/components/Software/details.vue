<template>
	
</template>

<script>
	export default{
		data(){
			return{
				data:""
			}
		},
		methods:{
			
		},
		mounted(){
			console.log(6666)
			console.log(this.$route.params.name);
			var self = this
			var softwareName = this.$route.params.name
				var keyname = encodeURI(softwareName)
				var urlStr =  "http://120.76.205.241:8000/mobileapp/mobile360?sort=0&kw="+keyname+"&pageToken=1&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
				console.log(urlStr)
				this.axios.get('http://127.0.0.1:8080/agency',{
					params: {
						url: urlStr
					}
				}).then(function(response){
					console.log(response.data);
						var data = response.data.data;
//						self.ajaxData=data.splice(0,4);
						self.data  =data.splice(0,1);
						console.log(self.data)
					
				}).catch(function(response) {
										console.log(response);
				});
		}
		
	}
</script>

<style>
	
</style>