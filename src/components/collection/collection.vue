<template>
	<div class="collection">
		<div></div>
	</div>
</template>

<script>
export default {
	mounted(){
		document.body.scrollTop = this.$route.meta.scrollLen;
	}
}
</script>

<style>

</style>

