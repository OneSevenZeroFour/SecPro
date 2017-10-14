<template>
	<div>
		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark">
		  		<Carousel></Carousel>
		  </div></el-col>
		</el-row>	
	</div>
</template>

<script>
	import Carousel from './Carousel/Carousel.vue';
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
			
		},
		components: {
			Carousel
		}
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
    background: white;
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