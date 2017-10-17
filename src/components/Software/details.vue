<template>
	<div id="details">
		<div class="az_slider_1 az_slider_title">
			<h3 class="az_icon_title"><a href="/">&lt;</a><span>{{data.title}}</span></h3>
			<ul class="az_app_items_list" id="applistbox">
				<li>
					<div class="az_itmes_icon"><img :src="data.avatarUrl" alt=""></div>
					<div class="az_items_info" style="overflow:hidden;">
						<h4 class="az_items_title_110">{{data.title}}</h4>
						<div class="az_items_score">
							<span class="az_items_score" v-for="(i,index) in good" :key="'good'+index">
								<img  :src="goodStar" >
							</span>
							<span class="az_items_score" v-for="(i,index) in justsoso" :key="'just'+index">
								<img  :src="justStar" >
							</span>
							<span class="az_items_score" v-for="(i,index) in bad" :key="'bad'+index">
							<img  :src="badStar" ></span>
							<span class="az_items_score" style="display:flex"><img style=" padding:2px 0 0 7px" src="/images/icon_office.png">&nbsp;<font style="color:#69b124;"></font></span> </div>
						<div class="clear"></div>
						<div class="az_items_score" style="overflow:hidden; margin-top:5px;width:100%">
							<div style="color:#000;width: 260px; font-size: 14px;">
								<p style="width:50%; height:20px; float:left;"><span>下载：{{data.downloadCount}}+</span></p>
								<p style="width:50%; height:20px; float:left;"><span>时间：2017-10-14</span></p>
							</div><br/>
							<div style="color:#000;width: 260px; font-size: 14px;">
								<p style="width:40%; height:20px; float:left; margin-bottom:10px;"><span>大小：{{data.fileOptions[0].sizeM}}M</span>
								</p>
								<p style="width:60%; height:20px; float:left;"><span>版本：{{data.fileOptions[0].version}}</span></p>
							</div>
						</div>
					</div>

				</li>
			</ul>
		</div>
		<div class="az_cnt_1">
			<div class="az_down_btn1">
				<a class="az_down_btn1" :href="data.fileOptions[0].url">极速下载</a>
			</div>

		</div>
		<div class="az_cnt_ul">
			<h5>简介</h5>
			<div id="az_appcntlist1" :class="{'az_appcntlist':extend}">
				<p>{{data.description}}</p>
			</div>

			<div class="az_toggle_btn" style="display: block;" @click="extend('extend1')">
				<span id="az_open" class="{'az_up':!extend1}"></span>
			</div>
		</div>
	
		<div class="az_cnt_ul">
			<h5>更新说明</h5>
			<div id="az_appcntlist2" :class="{'az_appcntlist':extend}">
				<p>{{data.updateItems}}</p>
			</div>

			<div class="az_toggle_btn" style="display: block;" @click="extend('extend2')">
				<span id="az_open" class="{'az_up':!extend2}"></span>
			</div>

		</div>
		<div class="az_cnt_ul">
			<h5><a>评论(共{{data.commentCount}}条)</a></h5> 
			<div class="az_comment_cnt" v-for="n in commentData" :key="n.id">
				<div class="az_comment_top">
					<span>{{n.commenterScreenName}}&nbsp;{{n.publishDateStr}}</span>
					<span style="float:right;">
							<img alt="" src="/images/star_01.png">
							<img alt="" src="/images/star_01.png">
							<img alt="" src="/images/star_01.png">
							<img alt="" src="/images/star_03.png">
							<img alt="" src="/images/star_03.png">
						</span>
				</div>
				<p id="az_comment_as">{{n.content}}</p>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				data: "",
				thisId: "",
				good: 3,
				bad: 1,
				justsoso: 1,
				goodStar: require('../../assets/images/star_01.png'),
				badStar: require('../../assets/images/star_03.png'),
				justStar: require('../../assets/images/star_02.png'),
				extend1: false,
				extend2: false,
				commentData: ""
			}
		},
		methods: {
			extend(index) {
				this.index = !this.index;
				//				console.log(this.index)
			}
		},
		mounted() {
			console.log(6666)
			console.log(this.$route.params.name);
			var self = this
			var softwareName = this.$route.params.name
			var keyname = encodeURI(softwareName)
			var urlStr = "http://120.76.205.241:8000/mobileapp/mobile360?sort=0&kw=" + keyname + "&pageToken=1&apikey=p6LUkr1ZHWw3urhe6bXuTBIQ48ApGN5K3Xqvyiz3BWNuVeTWFWK6JVIBxJaPhuHo";
			console.log(urlStr)
			this.axios.get('http://127.0.0.1:8080/agency', {
				params: {
					url: urlStr
				}
			}).then(function(response) {
				self.data = response.data.data[0];
				//				console.log(self.data)
				//平均星级
				var coms = response.data.data[0].ratingDist;
				var good = coms["好评"]
				var bad = coms["差评"]
				var justsoso = coms["中评"]
				var total = good + bad + justsoso
				console.log(good / total)
				var average = (good / total).toFixed(0);
				var residue = (good / total).toFixed(1);
				//				this.good = average;
				//				this.bad = 5 - average;
				//				console.log(average, residue)
				if(average == residue) {
					self.good = average;
					self.justsoso = 0;
					self.bad = 5 - average;
				} else if(average < residue) {
					self.good = average;
					self.justsoso = 1;
					self.bad = 4 - average;
				} else {
					self.good = Number(average); + Number(1)
					self.justsoso = 1;
					self.bad = 4 - self.good;
				}
				self.thisId = response.data.data[0].id
				console.log(self.thisId)
				//	//评论数据请求
				var idencord = encodeURI(self.thisId)
			console.log(idencord)
			self.axios.get('http://127.0.0.1:8080/agency', {
				params: {
					url: "http://120.76.205.241:8000/comment/mobile360?id=" + idencord + "&pageToken=1&apikey=ZIZJCfxUFdV2NBW4EKeHhLzOewKuJM2w8cyYSSz3cUgYhAQwkprkubdVgRcFKsH5"
				}
			}).then(function(response) {
				var allData = response.data.data;
				self.commentData = allData.splice(0,10)
				console.log(response)
			}).catch(function(response) {
				console.log(response);
			});
			}).catch(function(response) {
				console.log(response);
			});
		
			
			
		}

	}
</script>

<style scoped>
	.az_slider_title .az_icon_title {
		/*background: url(../images/body_bg.png) no-repeat left;*/
		padding-left: 10px;
		/* margin-left: 10px; */
		margin-top: 10px;
		margin-left: 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.az_slider_title h3 {
		font-weight: normal;
		color: #666666;
		font-size: 18px;
		line-height: 22px;
		margin-left: 1px;
	}
	
	.az_app_items_list li {
		border: 1px solid #ececec;
		position: relative;
		margin: 10px;
	}
	
	.az_itmes_icon {
		position: absolute;
		width: 48px;
		height: 48px;
		border-radius: 5px;
		left: 8px;
		top: 9px;
	}
	
	.az_items_info {
		position: relative;
		min-height: 58px;
		margin-right: 5px;
		padding: 6px 0px 0 65px;
	}
	
	.az_itmes_icon img {
		width: 48px;
		height: 48px;
		display: block;
		font-size: 12px;
		overflow: hidden;
	}
	
	.az_items_info h4.az_items_title_110 {
		height: 28px;
		margin-bottom: 2px;
		line-height: 28px;
		font-size: 16px;
		color: #3e3e3e;
		font-weight: normal;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 95%;
	}
	
	.az_items_score {
		float: left;
	}
	
	.clear {
		clear: both;
		height: 0;
		line-height: 0;
		font-size: 0;
		overflow: hidden;
	}
	
	.az_items_info p {
		color: #3e3e3e;
		font-size: 14px;
		line-height: 24px;
		margin-bottom: 5px;
	}
	
	.az_items_score span {
		/* color: #598527; */
		/* padding-right: 3px; */
		height: 22px;
		line-height: 28px;
		font-size: 13px;
	}
	/*下载按钮*/
	
	.az_cnt_1 {
		margin: 10px;
		min-height: 80px;
		border-bottom: 1px solid #efefef;
	}
	
	.az_down_btn1 {
		display: block;
		width: 65%;
		height: 37px;
		line-height: 37px;
		margin: 20px auto 0;
		text-align: center;
		font-size: 18px;
		color: #fff;
		background-color: #7fc31e;
	}
	
	.az_cnt_ul {
		margin: 10px;
		border-bottom: 1px solid #efefef;
	}
	
	.az_cnt_ul h5 {
		padding-left: 10px;
		margin-bottom: 10px;
		font-weight: normal;
		font-size: 16px;
		color: #666666;
		border-left: 3px solid #7fc31e;
	}
	
	.az_appcntlist {
		height: 70px;
		overflow: hidden;
	}
	
	.az_cnt_ul p {
		padding-left: 13px;
		font-size: 14px;
		color: #000;
		line-height: 24px;
	}
	
	.az_toggle_btn span.az_up {
		background: url(../../assets/images/arrow_03.png) no-repeat;
	}
	
	.az_toggle_btn {
		height: 28px;
		position: relative;
	}
	
	.az_toggle_btn span {
		display: block;
		height: 20px;
		width: 22px;
		position: absolute;
		right: 3px;
		top: 6px;
		/*相对于当前路径引入*/
		background: url(../../assets/images/arrow_01.png) no-repeat;
	}
	.az_cnt_ul {
    margin: 10px;
    border-bottom: 1px solid #efefef;
}
.az_cnt_ul h5 {
    padding-left: 10px;
    margin-bottom: 10px;
    font-weight: normal;
    font-size: 16px;
    color: #666666;
    border-left: 3px solid #7fc31e;
}
.az_cnt_ul h5 a {
    color: #666666;
}
.az_comment_cnt {
    border-bottom: 1px dashed #efefef;
}
.az_comment_top {
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    color: #676767;
}
.az_comment_top span {
    float: left;
}



.az_cnt_ul p {
    padding-left: 13px;
    font-size: 1.2rem;
    color: #000;
    line-height: 24px;
}
.az_comment_cnt{
	margin-bottom: 1rem;
}
</style>