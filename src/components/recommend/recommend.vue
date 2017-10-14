<template>
	<div>
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark">
		  		
		  </div></el-col>
		</el-row>	
	</div>
</template>

<script>
	export default {
	data(){
		return {
			
		}
	},
	methods:{
		
	},
	computed:{
		
	},
	mounted(){
		this.$http.get('http://127.0.0.1:3000/agency?id=123',{params:'params'}).then(response => {
			console.log(response)
		}, response => {
//			 error callback
		});
	},
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>