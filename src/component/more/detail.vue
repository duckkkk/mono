<template>
	<div>
		<!--加载动画-->
		<div id="mask">
			<img src="../../assets/img/loading.gif"/>
		</div>
		
		<!--关注弹框-->
		<transition name='slide'>
		<div class="foucs" v-if=foucs>
			<div>
				<img src="../../assets/img/detail.png"/>
				<hr /><span>关注成功</span><hr /><br />
				<p>你已关注此主题站，开启推送可以第一时间看到他的更新</p>
				<button @click='unfoucs'>开启关注</button>
				<button @click='unfoucs'>暂不</button>
			</div>
		</div>
		</transition>
		
		<div class="head">
			<img src="../../assets/img/find/p03.png"/>
			<span>煎蛋</span><br />
			<span>2014.11.25</span>
			<button @click='add'>+关注</button>
		</div>
		
		<div class="context">
			<img src="../../assets/img/find/p1.png"/>
			<h1><b>扫荡上海23店68碗拉面，吃出9碗真爱</b><br />
				<small>Let's Ramen！</small><hr />
			</h1>
			<p class="arth">作者：美伢</p>
			<p class="text">
				<b>上海最全日本拉面评测：23家店68碗面，吃出9碗真爱</b><br /> <br />
				渐入深秋、天气转凉，夜里总是想来碗热气腾腾的拉面，配上入味的厚切叉烧、奶油般质感的溏心蛋、甘甜的笋干，撇一小撮葱丝，撒一小把芝麻，美味又温暖、简单又治愈。
				<img src="../../assets/img/egg.png"/>
				最近香港的豚王、日本的博多一幸舍接连在上海开店。豚王试营业时引发排队潮，有些宝宝排队3－4小时才吃上一碗面…然而坊间风评却是毁誉参半。“到底要不要排队吃这碗面？”
				<br /><br />
				
				<b>上海的日本拉面店多如牛毛，那么，最好吃的拉面到底在谁家？为了解决这个问题，企鹅吃喝指南力邀了多位美食家一同测（sao）评（dang）沪上拉面店。
				<br /><br />参与本次拉面测评的胖友们（不是按食量排序的！）
				<img src="../../assets/img/egg1.png"/>
				以及不时加入吃面队伍、防止我们吃不完浪费粮食的：志伟、饼干、花胖、momo、大博、Jason、Elena。
				<br /><br />我们去了23家店，吃了68碗面，其中有大失所望的、意外惊喜的、加香菜的、全是葱的、放柠檬的。</b> 
				<br /><br />
				
				<b>23家清单地图如下，各位可按图索骥（★为评委推荐）：<br /><br />
				静安区：</b><br />
				豚王 ｜ ★ 面屋武士 龍 ｜★ 一风堂拉面<br /><br />
				<b>卢湾区：</b><br />
				大福屋日本拉面专门店｜Ramen Shop｜富山面家<br /><br />
				福烤锦花｜★ 和乐日本料理<br /><br />
				<b>徐汇区：</b><br />
				★ 博多一幸舍｜面屋武藏<br /><br />
				<b>长宁区：</b><br />
				★ 研串麵坊｜纪州豚骨酱油拉面｜面屋毘沙门天
				诚家日本料理｜★维心日面｜博多豚骨拉面
				利通面屋｜ ★ 酉一 ｜ ★ 一步一步名古屋拉面
				活力一番<br /><br />
				<b>闵行区：</b><br />
				万来轩<br /><br />
				<b>浦东新区：</b><br />
				一真拉面｜屯京拉面<br />
				
				<img src="../../assets/img/map.png"/>
				<img src="../../assets/img/map0.png"/>
				
				<b>每个人的口味都有差异，比如我们吃面的一行人都各有偏好。所以本文不打分，但是每碗面综合我们的意见都给出了描述，文末会推荐我们最爱的9碗面（仅代表我司意见）<br />
				<br />描述纬度<br /><br />
				汤底＋着味：</b>好汤才能养面，调味可以提鲜。<br />
				<b>配菜：</b>叉烧笋干溏心蛋！葱花豆芽木耳丝！<br />
				<b>拉面：</b>弯直粗细，口感软硬，韧性优良。<br />
				<b>颜值：</b>以貌取面极其肤浅，但貌可悦人不是吗。<br /><br />
				
				拉面，简单又饱含心血，汤底取自于海洋、陆地，配菜包含了动物、植物。伊丹十三的《蒲公英》中有一段讲述仪式般的吃面方法，对拉面致以高度的敬意。虽然每一碗面都有各自的骄傲，还是想推荐我们最爱的几碗拉面给你们：<br /><br>
				<b>重口味最爱：<br /><br>
				麵屋武士 龍｜黑龙拉面<br /><br>
				唯心日面｜极品唯心拉面<br /><br>
				博多一幸舍｜红拉面<br /><br>
				喝一碗鲜汤：<br /><br>
				研串麵坊｜乌鸡淡酱油拉面<br /><br>
				酉一｜黑酱油拉面<br /><br>
				和乐日本料理｜和乐拉面<br /><br>
				吃一口好肉：<br /><br>
				一步一步名古屋拉面｜特制猪骨拉面<br /><br>
				大福屋日本拉面专门店｜豚骨酱油拉面<br /><br>
				一風堂拉面｜特制白丸拉面</b>
			</p>
		</div>
		
		<div class="pinglun">
			<p>评论</p>
			<div>
				<img src="../../assets/img/icon01.jpg"/>
				<span>aaa</span>
				<span>10月27日</span><br /><br />
				<p>太贵</p>
			</div>
			<div>
				<img src="../../assets/img/icon01.jpg"/>
				<span>bbb</span>
				<span>9月24日</span><br /><br />
				<p>文章不错，就是吃不起</p>
			</div>
			<div>
				<img src="../../assets/img/icon01.jpg"/>
				<span>ccc</span>
				<span>5月30日</span><br /><br />
				<p>不喜欢</p>
			</div>
			<img src="../../assets/img/egg2.png" class="bott"/>
		</div>
		
		<div class="foot"> 
			<span @click='back'> < </span>
			<img src="../../assets/img/tpinlun.png"/>
			<img src="../../assets/img/tdianzan.png"/>
			<img src="../../assets/img/tshoucang.png"/>
			<img src="../../assets/img/tzhuanfa.png" @click='send'/>
		</div>
		
		<div class="top" @click='up'>&#x2191</div>
		
		<transition name='fade'>
		<div class="send" v-if=msg @click='close'>
			<div> 
				<div>
					<img src="../../assets/img/find/zf1.png"/><br />
					<span>朋友圈</span>
				</div>
				<div>
					<img src="../../assets/img/find/zf2.png"/><br />
					<span>微信</span>
				</div>
				<div>
					<img src="../../assets/img/find/zf3.png"/><br />
					<span>QQ/空间</span>
				</div>
				<div>
					<img src="../../assets/img/find/zf4.png"/><br />
					<span>新浪微博</span>
				</div>
				<div>
					<img src="../../assets/img/find/zf5.png"/><br />
					<span>复制链接</span>
				</div>
				<div>
					<img src="../../assets/img/find/zf6.png"/><br />
					<span>更多</span>
				</div>
			</div>
		</div>
		</transition>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg:false,
				foucs:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			send(){
				this.msg=true
			},
			close(){
				this.msg=false
			},
			add(){
				this.foucs=true
			},
			unfoucs(){
				this.foucs=false
			},
			up(){
				document.body.scrollTop=document.documentElement.scrollTop=0;
//				this.body.animate({scrollTop:0},1000)
			}
		},
		mounted(){
			setTimeout(function(){
				document.getElementById('mask').style.display="none"
			},600)
			document.onscroll=function(){
				var sTop = document.body.scrollTop||document.documentElement.scrollTop;   		
				if(sTop>0){
					document.getElementsByClassName('head')[0].style.display="none"
					document.getElementsByClassName('foot')[0].style.display="none"
					document.getElementsByClassName('top')[0].style.display="block"
				}else if(sTop<=0){
					document.getElementsByClassName('head')[0].style.display="block"
					document.getElementsByClassName('foot')[0].style.display="block"
					document.getElementsByClassName('top')[0].style.display="none"
				}
			}

//			document.onmousewheel = function(ev){
//				var e = ev || window.event; 
////					e.wheelDelta>0:滚轮向上滚
//				if(e.wheelDelta>=0){
//					document.getElementsByClassName('head')[0].style.display="block"
//					document.getElementsByClassName('foot')[0].style.display="block"
//				}else{
//					document.getElementsByClassName('head')[0].style.display="none"
//					document.getElementsByClassName('foot')[0].style.display="none"
//				}
//				
//			}
			
		}
	}
</script>

<style scoped>
	/*加载动画*/
	#mask{
		width:100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(200,200,200,0.9);
		z-index: 111;
	}
	#mask img{
		width: 50%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		border-radius: 20px;
	}
	/*关注弹框*/
	.foucs{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.7);
		z-index: 222;
	}
	.foucs>div{
		width: 70%;
		height: 40%;
		background-color: white;
		border-radius: 10px;
		position: absolute;
		left: 15%; 
		top: 25%;
		padding: 2%;
		box-sizing: border-box;
	}
	.foucs img{
		margin-left: 20%;
	}
	.foucs hr{
		width: 30%;
		color: gainsboro;
		float: left;
	}
	.foucs span{
		float: left;
		font-size: 12px;
		color: gray;
		margin: 0 10px;
	}
	.foucs p{
		text-align: center;
		font-size: 12px;
		margin: 8px 0; 
	}
	.foucs button{
		width: 48%;
		height: 35px;
		border: none;
		color: white;
		border-radius: 5px;
	}
	.foucs button:nth-of-type(1){
		background-color: #00BFFF;
	}
	.foucs button:nth-of-type(2){
		color: dimgrey;
	}
	
	
	.head{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid gainsboro;
		padding: 3px 10px;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		background-color: white;
	}
	.head>img{
		width: 35px;
		float: left;
	}
	.head>span{
		font-size: 11px;
		float: left;
	}
	.head>button{
		width: 60px;
		height: 30px;
		color: white;
		float: right;
		margin-top: -15px;
		border: none;
		border-radius: 5px;
		background-color: lightseagreen;
	}
	
	.context{
		width: 100%;
		margin-top: 30px;
	}
	.context img{
		width: 100%;
		margin: 10px 0;
	}
	.context>h1{
		width: 100%;
		padding: 0 12px;
		box-sizing: border-box;
		font-size: 23px;
		text-align: center;
		margin: 15px 0;
	}
	small{
		color: darkgray;
		font-size: 15px;
	}
	.context hr{
		width: 30%;
		color: darkgray;
	}
	.arth{
		text-align: center;
		font-size: 15px;
		color: darkgray;
		margin-bottom: 15px;
	}
	
	.text{
		padding: 0 10px;	
		box-sizing: border-box;
		line-height: 25px;
	}
	
	.pinglun{
		width: 100%;
		margin-top: 10px;
		margin-bottom: 40px;
		background-color: #e1e8eb;
		padding-top: 20px;
	}
	.bott{
		width: 100% !important; 
		margin-top: 10px;
	}
	.pinglun>div{
		background-color: white;
		padding: 10px;
		box-sizing: border-box;
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
		margin-top: -1px; 
	}
	.pinglun img{
		width: 50px;
		float: left;
	}
	.pinglun>p{
		color: gray;
		background-color: white;
		padding: 5px 10px;
		box-sizing: border-box;
	}
	.pinglun>div>span:nth-of-type(1){
		float: left;
		color: limegreen;
	}
	.pinglun>div>span:nth-of-type(2){
		font-size: 13px;
		color: gray;
		float: right;
	}
	
	.foot{
		width: 100%;
		height: 40px;
		color: gainsboro;
		font-size: 22px;
		line-height: 40px;
		border-top: 1px solid gainsboro;
		padding: 0 10px;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: white;
	}
	.foot>img{
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}
	
	.send{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.9);
		color: white;
	}
	.send>div{
		position: absolute;
		top: 40%;
	}
	.send>div div{
		float: left;
		text-align: center;
		font-size: 13px;
		margin-bottom: 40px;
		z-index: 111;
	}
	.send img{
		margin: 3px 24px;
	}
	
	/*回到顶部*/
	.top{
		width:20px;
		height: 20px;
		border: 1px solid gainsboro;
		background-color: white;
		position: fixed;
		top: 85%;
		left: 90%;
		text-align: center;
		display: none;
	}
	
	/*转发*/
	.fade-enter-active{
		animation: show 0.3s;
	}
	.fade-leave-active{
		animation: leave 1s;
	}
	@keyframes show{ 
		0%{opacity: 0;top: 100%;}
		100%{opacity: 1;top:0%;}
	}
	@keyframes leave{
		from{opacity: 1;top: 0;}
		to{opacity: 0;top: 100%;}
	}
	
	/*关注*/
	.slide-enter-active{
		animation: show1 0.2s;
	}
	.slide-leave-active{
		animation: leave1 0.5s;
	}
	@keyframes show1{ 
		0%{
			opacity: 0;
			transform: scale(0.2);
			border-radius: 1000px;
		}
		100%{
			opacity: 1;
			transform: scale(1);
			border-radius: 0;
		}
	}
	@keyframes leave1{
		0%{
			opacity: 1;
			transform: scale(1);
			border-radius: 0;
		}
		100%{
			opacity: 0;
			transform: scale(0);
			border-radius: 1000px;
		}
	}
</style>