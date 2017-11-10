<template>
	<main>
		<div class="head">
			社区<img src="../../assets/img/Plus.png" />
		</div>
		<div class="context">
			<div class="one"> 
				<p>热门小组、活动
					<router-link to='/more'>
						<span>查看全部</span>
					</router-link>
				</p>
				<div>
					<mt-swipe :auto="0">
					  <mt-swipe-item><img src="../../assets/img/com/lunboPic.png"/></mt-swipe-item>
					  <mt-swipe-item><img src="../../assets/img/com/lunboPic.png"/></mt-swipe-item>
					  <mt-swipe-item><img src="../../assets/img/com/lunboPic.png"/></mt-swipe-item>
					  <!--<mt-swipe-item><img src="../../assets/img/com/lunboPic.png"/></mt-swipe-item>-->
					</mt-swipe>
					<!--<img src="../../assets/img/com/lunboPic.png"/>
					<img src="../../assets/img/com/lunboPic.png"/>
					<img src="../../assets/img/com/lunboPic.png"/>-->
				</div>
			</div>
			
			<div class="two">
				<p>我参加的小组和活动</p>
				<router-link to='/more'>
					<p>还没参加任何小组和活动，点我发现更多</p>
					<p>٩(˃̶͈̀௰˂̶͈́)و<</p>
				</router-link>
			</div>
			
			<div class="three">
				<mt-swipe :auto="4000">
				 	<mt-swipe-item><img src="../../assets/img/find/banner04.png"/></mt-swipe-item>
				    <mt-swipe-item><img src="../../assets/img/find/banner07.png"/></mt-swipe-item>
				    <mt-swipe-item><img src="../../assets/img/find/banner05.png"/></mt-swipe-item>
				</mt-swipe>
			</div>
			
			<div class="four">
				<router-link to='detail'>
					<div>
						<img src="../../assets/img/com01.png"/>
					    <span class="p1">做日签</span>	
					</div>
				</router-link>
				<router-link to='detail'>
					<div>
						<img src="../../assets/img/com02.png"/>
						<span class="p2">做海报</span>
					</div>
				</router-link>
			</div>
			
		</div>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import vfooter from '../index/footer.vue'
	export default {
		components:{
			'v-footer':vfooter
		}
	}
</script>

<style scoped>
	.context{
		background-color: #e1e8eb;
	}
	.head{
		width: 100%;
		height: 35px;
		color: white;
		font-size: 13px;
		background-color: black;
		line-height: 35px;
		text-align: center;
		position: fixed;
		left: 0;
		top: 0;
	}
	.head img{
		width: 15px;
		position: absolute;
		right: 20px;
		top: 10px;
	}
	
	.context{
		margin-top: 35px;
	}
	.context>div{
		color: darkgrey;
		font-size: 13px;
		margin-bottom: 10px;
		background-color: white; 
	}
	
	.one{
		padding: 0 10px;
		line-height: 30px;
	}
	.one span{
		color: deepskyblue;
		position: absolute;
		right: 10px;
	}
	.one>div{
		width: 100%;
		height: 90px;
	}
	.one img{
		width: 90%;
		margin-left: 5%;
	}
	
	.two{
		text-align: center;
	}
	.two>p{
		font-size: 12px;
		background-color: ghostwhite;
		height: 30px;
		line-height: 30px;
	}
	.two p:nth-of-type(2){
		padding: 15px;
	}
	.two a{
		display: block;
		text-decoration: none;
		color: darkgrey;
		line-height: 5px;
		padding-top: 15px;
	}
	
	.three{
		width: 100%;
		height: 140px;
	}
	.three img{
		width: 100%;
	}
	.el-carousel__item img{
	    font-size: 14px;
	    line-height: 150px;
	    margin: 0;
	}
	
	.four{
		margin-top: 30px;
	}	
	.four div{
		width: 45%;
		height: 60px;
		float: left;
		color: white;
		margin-left: 2.5%;
		line-height: 60px;
	}
	.four img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.p1{
		position: absolute;
		left: 20%;
	}
	.p2{
		position: absolute;
		left: 65%;
	}
</style>