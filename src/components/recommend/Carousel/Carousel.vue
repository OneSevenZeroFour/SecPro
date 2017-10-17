<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="slide in lbt">
			<a :href="slide.url" class="lb">
		      <img :src="slide.imageUrls[0]" alt="" />
	    	</a>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	export default {
		props:["data"],
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					autoplay: 2000,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
				},
				swiperSlides: []
			}
		},
		mounted() {
			setInterval(() => {
				let swiperSlides = this.swiperSlides
				if(swiperSlides.length < 3) swiperSlides.push(swiperSlides.length + 1)
			}, 3000)
		},
		computed:{
			lbt(){
				if(this.data[0].data){
					var arr = this.data[0].data.slice(0,3)
					return arr;					
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
</style>