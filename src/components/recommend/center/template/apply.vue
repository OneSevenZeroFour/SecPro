<template>
	<swiper :options='swiperOption'>
		<swiper-slide v-for="slide in swiperSlides" class='box'>
			<div v-for="i in xm1" v-show="slide==0">
				<div class="wbox" >
					<a :href="i.url">
						<img :src="i.avatarUrl" alt="" />
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
			<div v-for="i in xm2" v-show="slide==1">
				<div class="wbox">
					<a :href="i.url">
						<img :src="i.avatarUrl" alt="" />
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
			<div v-for="i in xm3" v-show="slide==2">
				<div class="wbox">
					<a :href="i.url">
						<img :src="i.avatarUrl" alt="" />
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
	export default {
		props:["data"],
		data() {
			return {
				swiperOption: {
					autoplay: false,
					setWrapperSize: false,
					paginationClickable: false,
					mousewheelControl: false,
					observeParents: false,
				},
				swiperSlides: [0,1,2],
			}
		},
		mounted() {
		},
		computed:{
			xm1(){
				if(this.data){
					 return this.data.slice(0,4);
				}
			},
			xm2(){
				if(this.data){
					return this.data.slice(4,8);
				}
			},
			xm3(){
				if(this.data){
					return this.data.slice(8,12);
				}
			}
		}
	}
</script>

<style scoped>
	.lb{
		display: block;
		width: 100%;
		height: 150px;
	}
	.wbox{
		float: left;
		margin-left: 15px;
	}
	.wbox a{
		text-decoration: none;
		color: black;
	}
	.wbox img{
		width: 72px;
	}
	.wbox p{
		font-size: 12px;
		width: 72px;
		text-align: center;
		height: 40px;
		line-height: 20px;
	}
	.box{
		border-bottom: 1px solid #D3DCE6;
	}
</style>