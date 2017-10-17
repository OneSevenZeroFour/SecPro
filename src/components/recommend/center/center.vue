<template>
	<div>
		<div>
			<el-row>
				<el-col :span="12">
						<h5>{{title}}</h5>
				</el-col>
				<el-col :span="12">
					<a class="xsqb" href="">
						显示全部 >
					</a>
				</el-col>
			</el-row>
		</div>
		<xapply :data='conter'></xapply>
	</div>
</template>

<script>
	import xapply from './template/apply.vue';
	export default{
		props:["data"],
		data(){
			return{
			}
		},
		methods:{
			
		},
		mounted(){
			
		},
		computed:{
			conter(){
				if(this.data.data){
					return this.data.data
				}
			},
			title(){
				if(this.data.title){
					return this.data.title
				}
			}
		},
		components:{
			xapply
		}
	}
</script>

<style scoped>
	.el-row {
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
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	h5 {
		text-indent: 20px;
		line-height: 36px;
		font-weight: normal;
		font-size: 16px;
	}
	
	.xsqb {
		float: right;
		font-size: 12px;
		line-height: 36px;
		text-decoration: none;
		text-align: right;
		margin-right: 20px;
	}
	.wbox{
		overflow: hidden;
	}
	.nbox{
		width: 9999px;
	}
</style>