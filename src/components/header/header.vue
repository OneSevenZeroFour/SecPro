<template>
	<div class="box">
		<div>
			<img class="logo" src="../../../logo.png" alt="" @click="personal"/>
		</div>
		<div class="seach">
			<input type="" name="" id="" value="" v-model="val"/>
			<button style="height: 2.564103rem;" @click="btn"></button>
		</div>
	</div>
</template>
<script>
	import personal from '../Personal/personal.vue';
    import { baseUrl} from '../../util/baseUrl';
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
						xthis.axios.get(`${baseUrl}/agency`,{
							params:{
								url:'http://120.76.205.241:8000/mobileapp/mobile360?&kw='+url+'&pageToken=1&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo'
							}
						}).then(response => {
								xthis.$store.state.xsearch = response.data.data
						}, response => {});
					},5000);
					window.location.href = `${baseUrl}/#/search`
				}
			}
		}
	}
</script>
<style scoped>
	button{ outline:none; }
	.box{height: 3.846154rem; position: fixed; top: 0;left: 0; z-index: 10000; background: white;width: 100%;}
	.box .logo{height:3.846154rem;padding-left: .854701rem;}
	.seach{border: .08547rem solid #D3DCE6; border-radius: 1.282051rem;margin-left: .854701rem; margin-top: .42735rem;padding: 0 .854701rem;}
	.box div{float: left;}
	.box div input{width: 13.675214rem;height: 2.564103rem; margin: 0; padding: 0;float: left;border: none;font-size: 1.367521rem;}
	.box div button{border: none;float: left;width: 3.418803rem;height: 3.418803rem; background: url(../../../sereach.png) no-repeat center; background-size: 1.709402rem;}
</style>
