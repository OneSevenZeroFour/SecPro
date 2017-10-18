<template>
	<div id="software_list_page">
		<h4 class="list_title"><a  herf="/#/software/sote">&lt; </a>{{this.rote}}</h4>
		<div class="listtwo">
			<div class="btntwo" v-for="(item, index) in list" :key="item.name" :name="item.name" @click="setIndex(index)">
				<router-link :class="{'now':Value==index}" :to="'/softwarelist/'+rote+'/'+item.url" :name="item.name">{{item.title}} </router-link>
			</div>
		</div>
		<router-view :key="key"></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rote: "",
				Value: 0,
				//头部数据
				list: [{
					content: "",
					title: "最热",
					url: "hot",
					name: "1",
				}, {
					content: "",
					title: "最新",
					url: "new",
					name: "2"
				}]
			};
		},
		computed:{
			key() {
				return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
			}
		},
		mounted() {

			document.body.scrollTop = this.$router.history.current.meta.scrollLen;
			var currentRouter = this.$router.history.current.path;
			console.log(currentRouter.indexOf("hot"))
			if(currentRouter.indexOf("hot") > 0) {
				this.Value = 0
			} else {
				this.Value = 1
			}
			let keyrote = this.$route.params.list;
			this.rote = keyrote;

		},
		methods: {
			setIndex(index) {
				this.Value = index;
			},
			goBack() {
				this.$router.go(-1);
			}

		}
	}
</script>

<style scoped>
	.list_title a {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		font-size: 1.8rem;
		padding-right: 1rem;
		text-align: center;
	}
	
	.listtwo {
		display: flex;
	}
	
	.btntwo {
		flex: 1;
		overflow: hidden;
	}
	
	.listtwo .btntwo:nth-child(1) a {
		float: right;
		border-radius: 1rem 0 0 1rem;
	}
	
	.listtwo .btntwo:nth-child(2) a {
		border-radius: 0 1rem 1rem 0;
	}
	
	.btntwo a {
		color: #3E5268;
		background-color: #D9D9D9;
		display: inline-block;
		width: 4rem;
		text-align: center;
	}
	
	.btntwo .now {
		color: #fff;
		background-color: #20A0FF;
	}
</style>