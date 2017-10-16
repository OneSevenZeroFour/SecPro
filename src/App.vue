<template>
	<div id="app">
		<transition :name="transitionName" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				transitionName: ''
			}
		},
		watch: {
			$route(to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth >= fromDepth ? 'slide-right' : 'slide-left'
			}
		}
	}
</script>

<style scoped>
#app {
	width: 100%;
	height: 100%;
}

.slide-right-leave-active, .slide-right-enter-active{
	transition: all .4s linear;
}
.slide-right-leave-to{
	transform: translateX(100%);
  	opacity: 0;
}
.slide-right-enter, .slide-left-leave{
	transform: translateX(-100%);
	opacity: 0;
}
.slide-right-enter-to, .slide-left-leave-to{
	transform: translateX(0);
	opacity: 1;
}
.slide-left-enter{
	transform: translateX(100%);
  	opacity: 0;
}
.slide-left-leave-to{
	transform: translateX(-100%);
	opacity: 0;
}
.slide-left-enter-active, .slide-left-leave-active{ 
	transition: all .4s linear;
}
.slide-left-enter-to, .slide-left-leave{
	transform: translateX(0);
	opacity: 1;
}
</style>
