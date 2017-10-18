<template>
	<swiper :options='swiperOption'>
		<swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class='box'>
			<div v-for="(i, index) in xm1" :key="index" v-show="slide==0">
				<div class="wbox" >
					<a :href="'#/details/'+i.title">
						<img :src="i.avatarUrl" alt="" />
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
			<div v-for="(i, index) in xm2" :key="index" v-show="slide==1">
				<div class="wbox">
					<a :href="'#/details/'+i.title">
						<img :src="i.avatarUrl" alt="" />
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
			<div v-for="(i, index) in xm3" :key="index" v-show="slide==2">
				<div class="wbox">
					<a :href="'#/details/'+i.title">
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

<style scoped lang="scss">
	.lb{
		display: block;
		width: 100%;
		height: 12.820513rem;
	}
	.wbox{
		float: left;
		margin-left: 1.282051rem;
	}
	.wbox a{
		text-decoration: none;
		color: black;
	}
	.wbox img{
		width: 6.153846rem;
	}
	.wbox p{
		font-size: 14px;
		width: 6.153846rem;
		text-align: center;
		//height: 3.418803rem;
        line-height: 1.6;
        color: #233;
	}
	.box{
		border-bottom: .08547rem solid #D3DCE6;
	}
</style>