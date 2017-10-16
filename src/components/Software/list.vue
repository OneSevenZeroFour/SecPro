<template>
	<div class="allwarelist">
			<div class="soteList1" >
				<h4 ></h4>
				<ul>
					<li class="heng_li">
						<!--v-for="n in cont.listData"-->
						<a href="">
							<div class="soft_small_img">
								<img src="" alt="" />
							</div>
							<div>
								<h5>今日头条</h5>
								<h6>3.14亿人在用</h6>
								<h6>超过4亿用户的新闻客户端</h6>
							</div>
						</a>
						<div class="download_bottom download_right">
							
								<a href="">下载</a>
							
						</div>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
</script>

<style>
		h6{
		font-size: 1rem;
		color:#b4b4b4;
		text-align: center;
		
	}
	/*软件名称*/
	h5{
		font-size: 1.2rem;
		color:#000;
		text-align: center;
	}
	/*每个主题标题*/
	h4{
		font-size: 1.4rem;
		color:#000;
		padding:1rem;
	}
		
			a {
		text-decoration: none;
		display: inline-block;
	}
	.soft_small_img {
			width:7rem;
			height:7rem;
			margin:1rem auto;
		}
		.soft_small_img img{
			width:7rem;
			height:7rem;
			border:0;
		}
		.download_bottom{
			margin-top:1rem;
			text-align:center;
			border:none;
		}
			
	
		.download_bottom a{
			color:#20A0FF;
			width:2.5rem;
			text-align: center;
			padding: .5rem 1rem;
			border-radius: 1rem;
			border:1px solid #20A0FF;
		}
		.heng_li{
			
			
			display: flex;
		}
		.heng_li a{
			display:inline-block;
			flex:4;
			display:flex;
		}
		.heng_li .soft_small_img {
			display:inline-block;
			text-align: center;
		
			
			margin:0 1rem 0 0;
			/*flex:1;*/
		}	
		.heng_li .soft_info {
			margin:20px;
			flex:3;
			
		}
		.heng_li h5,.heng_li h6{
			text-align: left;
		}
		.heng_li .download_right{
			flex:1;
			
		}
</style>