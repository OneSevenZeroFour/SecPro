<template>
	<div class="father">这是底部
		<p class="children">这是儿子</p>
	</div>
</template>
<script>
export default {
	data(){
		return {
			list: [{
				title: '',
				img: '',
				
			},{}],
		}
	}
}
</script>

<style lang="scss" scoped>
	.father{
		color:red;
		.children{
			color:green;
		}
	}
</style>