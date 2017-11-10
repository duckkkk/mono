<template>
	<div class="main">
		<img src="../../assets/img/load.png" class="bgpic"/>
		<div class="set">
			<!--<router-link to='/setting'>-->
			<img  src="../../assets/img/set.jpg" @click='changes'/>
			<!--</router-link>-->
		</div>
		
		<div class="load">
			<p @click='change'>登录MONO</p>
		</div>
		
		<transition name='fade'>
		<div class="big" v-if='msg'>
			<div id='loading'>
				<h2>登录MON</h2><span @click='close'>x</span><br />
				<img src="../../assets/img/phone.png"/>
				<input type="tel" placeholder="   请输入手机号码" /><br />
				<img src="../../assets/img/lock.png"/>
				<input type="text" placeholder="   请输入密码" /><br />
				<span>立即注册</span>
				<span>忘记密码?</span><br />
				<button>登录</button>
				<p>绑定后意味着同意MONO的<使用协议> </p>
			</div>
			<div class="ways">
				<hr /><span>你还可以用一下方式登录</span><hr />
				<br></br>
				<img src="../../assets/img/load03.png"/>
			</div>
		</div>
		</transition>
		
		<p>这是世界疯狂，没人性，腐败。您却一直清醒，温柔，一尘不染</p>
		<span>现在就登录MONO吧</span>
		<v-footer></v-footer>
		
		<!---->
		<transition name='slide'>
		<div class="mains" v-if=show>
			<div class="shezhi">
				<span @click='back'>&lt;</span>
				<span>设置</span> 
			</div>
			<span>&nbsp;</span>
			<p class="a" @click='change'>去登录吧</p>
			
			<span class="span">推送提醒设置</span>
			<p><img src="../../assets/img/icon1.png" />关注主题站时的推送开关</p>
			<p>
				<img src="../../assets/img/icon2.png" />MONO早午茶推送
			    <mt-switch ></mt-switch>
			</p>
			 
			<span class="span">性能与流量</span>
			<p>
				<img src="../../assets/img/icon3.png" />始终开启阅读模式
				<mt-switch></mt-switch>
			</p>
			<p><img src="../../assets/img/icon4.png" />清理缓存</p>
			<p>
				<img src="../../assets/img/icon2.png" />省流量模式
			    <mt-switch></mt-switch>
			</p>
			
			<span class="span">其他</span>
			<p><img src="../../assets/img/icon5.png" />最近浏览</p>
			<p><img src="../../assets/img/icon6.png" />MONO动画</p>
			<p><img src="../../assets/img/icon7.png" />帮助和反馈</p>
			<p><img src="../../assets/img/icon8.png" />站长指南</p>
			<p><img src="../../assets/img/icon9.png" />去AppStore给MONO个好评</p>
		</div>
		</transition>	

	</div>
</template>

<script>
	import vfooter from '../index/footer.vue'
	export default {
		data(){
			return{
				msg:false,
				show:false
			}
		},
		methods:{
			change(){
				this.msg=true
			},
			changes(){
				this.show=true
			},
			close(){
				this.msg=false
			},
			back(){
				this.show=false
			}
		},
		components:{
			'v-footer':vfooter
		}
	}
</script>

<style scoped>
	.bgpic{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
	} 
	.set{
		position: fixed;
		right: 10px;
		top: 10px;;
	}
	.set img{
		width: 30px;
	}
	.load{
		width: 80px;
		height: 80px;
		background-color: teal;
		border-radius: 50%;
		position: fixed;
		left: 50%;
		top: 50%;
		margin-left: -40px;
		margin-top: -55px;
		color: white;
		text-align: center;
	}
	.load p{
		padding-top: 20px;
	}
	
	.big{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.9);
		z-index: 222;
	}
	#loading{
		width: 90%;
		text-align: center;
		border: 1px solid black;
		border-radius: 5px;
		position: fixed;
		top: 10%;
		left: 5%;
		background-color: white;
		padding: 20px;
		box-sizing: border-box;
	}
	#loading>h2{
		float: left;
		margin-bottom: 20px;
		font-size: 18px;
	}
	#loading span:nth-of-type(1){
		float: right;
		width: 20px;
		height: 20px;
		border: 1px solid black;
		border-radius: 50px;
		text-align: center;
	}
	#loading span:nth-of-type(2){
		float: left;
		color: lightseagreen;
		margin: 20px 0;
		font-size: 14px;
	} 
	#loading span:nth-of-type(3){
		float: right;
		margin: 20px 0;
		font-size: 14px;
	}
	#loading>img{
		position: absolute;
		left: 13px;
	}
	#loading>img:nth-of-type(1){
		top: 65px;
	}
	#loading>input{
		width: 90%;
		height: 35px;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid gainsboro;
		line-height: 35px;
		font-size: 15px;
	}
	#loading>button{
		width: 100%;
		height: 30px;
		color: white;
		background-color: lightseagreen;
		border: none;
		border-radius: 15px;
	}
	#loading>p{
		font-size: 12px;
		margin-top: 20px;
	}
	.ways{
		width: 90%;
		text-align: center;
		position: fixed;
		top: 65%;
		left: 5%;
		color: white;
		font-size: 12px;
	}
	.way span{
		float: left;
	}
	.ways>hr{
		width: 20%;
	}
	.ways>hr:nth-of-type(1){
		float: left;
	}
	.ways>hr:nth-of-type(2){
		float: right;
	}
	.ways>img{
		width: 95%;
	}
	
	.main>p{
		width: 90%;
		position: fixed;
		top: 60%;
		left: 5%;
		text-align: center;
		font-size: 15px;
	}
	.main>span{
		width: 100%;
		position: fixed;
		top: 70%;
		left: 0; 
		text-align: center;
		font-size: 15px;
	}
	
	.fade-enter-active{
		animation: show 1s;
	}
	.fade-leave-active{
		animation: leave .5s;
	}
	@keyframes show{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	@keyframes leave{
		from{
			opacity: 1;
		}
		to{
			opacity: 0;
		}
	}
	
	/*设置页面*/
	.mains{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #ecf0f3;
		/*z-index: 444;*/
	}
	.shezhi{
		width: 100%;
		height: 35px;
		color: white;
		font-size: 13px;
		background-color: black;
		line-height: 35px;
		text-align: center;
	}
	.shezhi span:nth-of-type(1){
		position: absolute;
		left: 10px;
	}
	.a {
		text-align: center;
		color: darkgrey;
		text-decoration: none;
	}
	.mains p{
		height: 30px;
		font-size: 13px;
		background-color: white;
		border: 1px solid #d2d2d2;
		margin-top: -1px;
		line-height: 30px;
	}
	.mains p img{
		float: left;
	}
	.span{
		display: block;
		width: 100%;
		font-size: 12px;
		padding-top: 18px;
		margin-bottom: 5px;
		padding-left: 10px;
		background-color: #ecf0f3;
		box-sizing: border-box;
	}
	.mint-switch{
		float: right;
		margin-right: 5px;
	}
	.slide-enter-active{
		animation: show1 0.7s;
	}
	.slide-leave-active{
		animation: leave1 0.7s;
	}
	@keyframes show1{
		from{
			left: 100%;
		}
		to{
			left: 0;
		}
	}
	@keyframes leave1{
		from{
			left: 0;
		}
		to{
			left: 100%;
		}
	}
	
	.mint-switch-core{
		height: 25px !important;
	}
	.mint-switch-core::after{
		height: 25px !important;
	}
</style>