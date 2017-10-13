<template>
	<div>
		<div>这是一个头部</div>
		<button @click="sendMsg">sendMsg</button>
		<div>{{getMsg}}</div>
		<div>123</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			getMsg(){
				//console.log()
				console.log(this.$store.getters)
				return this.$store.state.header.header
			}
		},
		methods: {
			sendMsg() {
				this.$store.dispatch('header/headerSend');
			}
		}
	}
</script>
