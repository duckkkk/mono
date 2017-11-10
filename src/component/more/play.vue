<template>
	<main>
		<div class="head"> 
			音乐播放器
			<span @click='back'><img src="../../assets/img/iconup.png"/></span>
		</div>
		<div class="context">
			<mt-swipe :auto="0"  v-for='v in msgs'>
				
			  <mt-swipe-item>
			  	<div class="ge">
			  		<p>{{v.name}}</p>
			  		<p>{{v.songer}}</p>
			  	</div>
			  	<div :class="{big:true,active:msg}"> 
			  		<img :src="v.src"/>
					<div class="small">
						<div></div>
					</div>
				</div>
			  </mt-swipe-item>
			  
			  <!--<mt-swipe-item> 
			  	<div class="main">
			  		<div :class="{words:true,top:msg}" >
				  		<p  v-for='n in msgs'>{{n.songs}}</p>
				  	</div>
			  	</div>
			  </mt-swipe-item>-->
			  
			</mt-swipe>
			
			<!--<audio src="../../static/Bandari - 满天星 - 班得瑞.mp3"></audio>-->
			<div class="play" >
				<img src="../../assets/img/play.png" @click='play'/>
				<!--进度条-->
				<!--<mt-progress :value="value" :bar-height="5">
					<div slot="start">{{star}}</div>
					<div slot="end" v-for='v in msgs'>{{v.time}}</div>
				</mt-progress>-->
				
				
			</div>
		</div>
		<div class="foot">
			<img  src='../../assets/img/tdianzanv.png' />
			<img  src="../../assets/img/tshoucangv.png" />
			<img  src="../../assets/img/tpinlunv.png" />
		</div>
	</main>
</template>

<script>
	export default { 
		data(){
			return{
//				src1:'../../assets/img/tdianzanv.png',
//				src2:'../../assets/img/tshoucangv.png'
				msg:false, 
				msgs:[],
				star:"00:00",
				value:0,
				n:0
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			play(){
				this.msg=!this.msg
//				setInterval(function(){
					n++
//					var m=parseInt(n/60);
//         			var s=parseInt(n%60);
           			this.star="12:32"
//				},1000)
			}
		},
		filters:{
			timer(n){
				return n<10?'0'+n:+n
			}
		},
		mounted(){
			this.$http.get('src/json/music.json').then(function(res){
				this.msgs=res.body.result.data[0].context
			})
		}
	}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 40px;
		background-color: black;
		color: white;
		text-align: center;
		line-height: 40px;
		font-size: 13px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 111;
	}
	.head span{
		position: absolute;
		right: 10px;
	}
	
	.context{
		width: 100%;
		height: 100%;
		background-color:wheat ;
		position: fixed;
	}
	
	.ge>p{
		width: 40%;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 30%;
		font-size: 15px;
		margin-left: -20%;
	}
	.ge>p:nth-of-type(1){
		top: 23%;
		font-size: 20px;
	}
	.big{
		width: 100px;
		height: 100px;
		border-radius: 50px;
		position: absolute;
		left: 50%;
		top: 40%;
		margin-left: -50px;
	}
	.big>img{
		width: 100%;
		height: 100%;
		border-radius: 50px;
	}
	.active{
		animation: circle 10s linear infinite;
	}
	@keyframes circle{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}
		
	.small{
		width: 50px;
		height: 50px;
		border: 1px solid black;
		border-radius: 50px;
		position: absolute;
		left: 50%;
		top: 25%;
		margin-left: -25px;
		background-color: rgba(0,0,0,0.8);
	}
	.small>div{
		width: 40px;
		height: 40px;
		border-radius: 50px;
		background-color: black;
		position: absolute;
		left: 50%;
		top: 15%;
		margin-left: -20px;
	}
	
	/*歌词*/
	.main{
		width: 100%;
		height: 55%;
		position: absolute;
		top: 15%;
		overflow: hidden;
	}
	.words{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0 !important;
		text-align: center;
		padding: 0 10px;
		box-sizing: border-box;
		font-size: 14px;
		line-height: 30px;
	}
	.top{
		animation: up 215s linear infinite;
	}
	@keyframes up{
		0%{top:0;}
		100%{top:-570px;}
	}
	
	/*音乐*/
	audio{
		position: absolute;
	}
	
	.play{
		width: 100%;
		position: fixed;
		bottom: 10%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.play img{
		margin-left: 43%;
	}
	
	.foot{
		width: 100%;
		height: 40px;
		background-color: black;
		position: fixed;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
		z-index: 111;
	}
	.foot img{
		position: absolute;
		margin-top: 10px;
		height: 20px;
	}
	.foot img:nth-of-type(1){
		left: 3%;
	}
	.foot img:nth-of-type(2){
		left: 45%;
	}
	.foot img:nth-of-type(3){
		left: 90%;
	}
</style>