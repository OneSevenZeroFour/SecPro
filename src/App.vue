<template>
	<div id="app">
		<xheader></xheader>
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import xheader from './components/header/header.vue';
	import xfooter from './components/footer/footer.vue';
	export default{
		data(){
			return{
				
			}	
		},
		components:{
			xheader,
			xfooter
		}
	}
</script>

<style scoped>
#app{
	width: 100%;
	height: 100%;
}
</style>
