<template>
	<div id="app">
		<p>{{name}}</p>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			name: '1567111' 
		}
	}
}
</script>
