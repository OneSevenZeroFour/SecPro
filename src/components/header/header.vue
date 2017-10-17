<template>
	<div class="box">
		<div>
			<img class="logo" src="../../../logo.png" alt="" />
		</div>
		<div class="seach">
			<input type="" name="" id="" value="" />
			<button style="height: 30px;"></button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>
<style scoped>
	.box{height: 45px; position: fixed; top: 0;left: 0; z-index: 10000; background: white;width: 100%;}
	.box .logo{height:45px;padding-left: 10px;}
	.seach{border: 1px solid #D3DCE6; border-radius: 15px;margin-left: 20px; margin-top: 5px;padding: 0 10px;}
	.box div{float: left;}
	.box div input{width: 200px;height: 30px; margin: 0; padding: 0;float: left;border: none;font-size: 16px;}
	.box div button{border: none;float: left;width: 40px;height: 40px; background: url(../../../sereach.png) no-repeat center; background-size: 20px;}
</style>
