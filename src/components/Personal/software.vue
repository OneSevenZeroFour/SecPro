<template>
	<el-tabs v-model="Value" @tab-click="clickTab">
		<el-tab-pane v-for="(item, index) in editableTabs2" 
		:key="item.name" 
		:label="item.title" 
		:name="item.name">
			{{item.content}}
		</el-tab-pane>
	</el-tabs>
</template>


<script>
	export default {
		data() {
			return {
				Value: '2',
				editableTabs2: [{
					title: 'Tab 1',
					name: '1',
					content: 'Tab 1 content',
					url: { name: 'login' }
				}, {
					title: 'Tab 2',
					name: '2',
					content: 'Tab 2 content',
					url: { name: 'register' }
				}],
				tabIndex: 2
			}
		},
		methods: {
			clickTab(targetName) {
				let self = this;
				let tabs = this.editableTabs2;
				setTimeout(function() {
					tabs.forEach(function(item) {
						if (item.name == targetName.name) {
							self.$router.push(item.url)
						}
					})
				}, 0)

			}
		}
	}
</script>