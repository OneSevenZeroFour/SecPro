<template>
	<div class="tempLink">
		<div>
			<el-radio class="radio" v-model="radio" label="男">男</el-radio>
  			<el-radio class="radio" v-model="radio" label="女">女</el-radio>
			  <input v-model="radio" />
		</div>
		<el-button type="primary" class="update_btn" @click="updated">提交</el-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				radio: '男'
			}
		},
		props: ['placeMsg', 'type'],
		methods: {
			updated() {
				let obj = {};
				obj[this.type] = this.radio1;
				obj.id = cookie.get('userId');
				//console.log(obj)
				//this.$emit('setmsg', obj)
				this.$store.dispatch('personMsg/update', obj);
			}
		},
		computed: {
			radioed(){
				console.log(this.radio)
			}
		}
	}
</script>

