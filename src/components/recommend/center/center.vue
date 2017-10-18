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

<style scoped lang="scss">
	.el-row {
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: .34188rem;
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
		border-radius: .34188rem;
		min-height: 3.076923rem;
	}
	
	.row-bg {
		padding: .854701rem 0;
		background-color: #f9fafc;
	}
	
	h5 {
		text-indent: 1.709402rem;
		line-height: 3.076923rem;
		font-weight: normal;
		font-size: 1.367521rem;
	}
	
	.xsqb {
		float: right;
		font-size: 1.025641rem;
		line-height: 3.076923rem;
		text-decoration: none;
		text-align: right;
		margin-right: 1.709402rem;
	}
	.wbox{
		overflow: hidden;
	}
	.nbox{
		width: 854.615385rem;
	}
</style>