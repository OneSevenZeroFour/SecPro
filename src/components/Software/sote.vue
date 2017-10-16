<template>
	<div id="software_sote">
		<li class="software_sote_list" v-for="n in cont">
			<div class="list_one" >
				<div class="sote_img"><img :src="n.img" alt="" /></div>
				<h5 class="sote_title">{{n.title}}<i class="el-icon-arrow-right"></i></h5>
			</div>
			<div class="detail_sote_list">
				<router-link v-for="t in n.sote" :to="'/softwarelist/'+t+'/hot'" :key="t">

					{{t}}
				</router-link>
			</div>

		</li>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				data: "",

				cont: [{
					title: "生活服务",
					img: require('../../assets/images/roteone1.png'),
					toUrl: "/softwarelist/living",
					listData: "",
					listid: 1,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "购物",
					img: require('../../assets/images/roteone2.png'),
					toUrl: "/softwarelist/shopping",
					listData:"",
					listid: 1,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "运动健康",
					img: require('../../assets/images/roteone3.png'),
					toUrl: "/softwarelist/exercice",
					listData: "",
					listid: 2,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "理财",
					img: require('../../assets/images/roteone4.png'),
					toUrl: "/softwarelist/money",
					listData: "",
					listid: 3,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}, {
					title: "社交",
					img: require('../../assets/images/roteone5.png'),
					toUrl: "/softwarelist/relations",
					listData: "",
					listId: 4,
					sote: ["求职招聘", "电影演出", "代驾", "查违章", "外卖", "卖车买车"]
				}]
			};
		},
		mounted() {



		},
		
	}
</script>

<style>
.sotes_list {
	overflow: hidden;
}

.software_sote_list {
	display: flex;
	padding: 1rem 0;
	border-bottom: 7px solid #D9D9D9;
}

.list_one {
	flex: 3;
}


/*左边*/

.sote_title {
	color: rgb(32, 160, 255);
	font-size: 1.6rem;
	text-align: center;
	margin-top: 0.5rem
}

.sote_img {
	width: 5rem;
	height: 5rem;
	margin: auto;
}

.sote_img img {
	width: 5rem;
	height: 5rem;
}

.sote_list {
	float: left;
}


/*右边*/

.detail_sote_list {
	float: right;
	flex: 8;
	padding: 1rem 1rem;
}

.detail_sote_list a {
	color: #3E5268;
	font-size: 1.4rem;
	width: 7rem;
	height: 2rem;
	line-height: 2rem;
	display: inline-block;
	padding: 0.6rem
}
</style>