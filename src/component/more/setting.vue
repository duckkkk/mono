<template>
	<div class="mains">
		<div class="shezhi">
			<span @click='back'>&lt;</span>
			<span>设置</span> 
		</div>
		<span>&nbsp;</span>
		<p class="a" @click='change'>去登录吧</p>
		
		<span class="span">推送提醒设置</span>
		<p><img src="../../assets/img/icon1.png" />关注主题站时的推送开关</p>
		<p>
			<img src="../../assets/img/icon2.png" />
			<span class="p">MONO早午茶推送</span> 
			<span :class='{active:show1,btn:true}' @click='change1()'></span>
		</p>
		 
		<span class="span">性能与流量</span>
		<p>
			<img src="../../assets/img/icon3.png" />始终开启阅读模式
			<span :class='{active:show2,btn:true}' @click='change2()'></span>
		</p>
		<p>
			<img src="../../assets/img/icon2.png" />省流量模式
			<span :class='{active:show3,btn:true}' @click='change3()'></span>
		</p>
		<p><img src="../../assets/img/icon4.png" />清理缓存</p>
		
		<span class="span">其他</span>
		<p><img src="../../assets/img/icon5.png" />最近浏览</p>
		<p><img src="../../assets/img/icon6.png" />MONO动画</p>
		<p><img src="../../assets/img/icon7.png" />帮助和反馈</p>
		<p><img src="../../assets/img/icon8.png" />站长指南</p>
		<p><img src="../../assets/img/icon9.png" />去AppStore给MONO个好评</p>
		
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
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				show1:false,
				show2:false,
				show3:false,
				msg:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			change1(){
				this.show1=!this.show1
			},
			change2(){
				this.show2=!this.show2
			},
			change3(){
				this.show3=!this.show3
			},
			change(){
				this.msg=true
			},
			close(){
				this.msg=false
			}
		}
	}
</script>

<style scoped>
	.mains{
		width: 100%;
		background-color: #ecf0f3;
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
		cursor: pointer;
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
	.btn{
		width: 40px;
		height: 24px;
		float: right;
		cursor: pointer;
		border: 1px solid gainsboro;
		border-radius: 30px;
		margin-top: 3px;
	}
	.active{
		width: 40px;
		height: 24px;
		float: right;
		cursor: pointer;
		border: 1px solid gainsboro;
		border-radius: 30px;
		margin-top: 3px;
		background-color: lightseagreen;
	}
	
	.big{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.9);
		z-index: 111;
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
		border:none;
	}
	.ways{
		width: 90%;
		text-align: center;
		position: fixed;
		top: 68%;
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
</style>