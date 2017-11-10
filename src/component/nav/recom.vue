<template>
	<main>
		<!--加载动画-->
		<div id="mask">
			<img src="../../assets/img/loading.gif"/>
		</div>
		
		<v-header></v-header>
		<div class="context">
			<div class="one">
				<p><strong>早茶 17.10.28</strong></p>
				<p>MONO今日编辑精选</p>
			</div>
			<div class="data">
				<router-link to='/data'>
					<img src="../../assets/img/data.png"/>
				</router-link>
			</div>
			
			<div class="icon" v-for='v in msgs'>
				<router-link to='/detail'>
					<div class="details"></div>
				</router-link>
				
				<p >
					<span><img v-lazy="v.src" /></span> 
					<span>{{v.name}}</span>
					<span>{{v.type}}</span>
				</p>
				<img v-lazy="v.src1" />
				<h2>{{v.icon}}</h2>
				<p>{{v.text}}</p>
				
				<span @click='send'><img src="../../assets/img/tzhuanfa.png" /></span>
				<span><img src="../../assets/img/tshoucang.png"/></span>
				<span><img src="../../assets/img/tdianzan.png"/></span>
				<span><img src="../../assets/img/tpinlun.png"/></span>
			</div>
		</div>
		<v-footer></v-footer>
		
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
		
	</main>
</template>

<script>
	import vheader from '../index/header.vue'
	import vfooter from '../index/footer.vue'
	export default {
		data(){
			return{
				msg:false,
				msgs:[]
			}
		},
		methods:{
			send(){
				this.msg=true
			},
			close(){ 
				this.msg=false
			}
		},
		components:{
			'v-header':vheader,
			'v-footer':vfooter
		},
		mounted(){
			this.$http.get('src/json/headnav.json').then(function(res){
				this.msgs=res.body.result.data[0].context
				document.getElementById('mask').style.display="none"
			})
		}
	}
</script>

<style scoped>
	/*加载动画*/
	#mask{
		width:100%;
		height: 86%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(200,200,200,0.9);
		z-index: 222;
		margin-top: 40px;
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
	
	/*中间主体*/
	.context{
		margin: 45px 0;
		background-color: #e1e8eb;
	}
	/*早茶part*/
	.one{
		width: 100%;
		height: 60px;
		text-align: center;
		line-height: 30px;
		background-color: white;
	}
	.one p:nth-of-type(1){
		font-size: 25px;
	}
	.one p:nth-of-type(2){
		font-size: 13px;
	}
	/*日历*/
	.data{
		position: fixed;
		right: 0;
		top: 45px;
	}
	
	/*每个小模块*/
	.icon{
		width: 100%;
		padding: 0 10px;
		margin: 10px 0;
		box-sizing: border-box;
		background-color: white;
	}
	.icon p img{
		height: 40px;
	}
	.icon>img{
		width: 100%;
	}
	.icon p span{
		line-height: 40px;
		float: left;
		font-size: 12px;
	}
	.icon p span:nth-of-type(3){
		position: absolute;
		right: 10px;
	}
	.icon>span img{
		width: 20px;
		margin-right: 3px;
	}
	.icon>h2{
		margin: 5px 0;
	}
	.icon p:nth-of-type(2){
		font-size: 13px;
		color: darkgray;
		padding-bottom: 10px;
		border-bottom: 1px solid gainsboro;
		margin-bottom: 5px;
	}
	
	.details{
		width: 95%;
		padding-bottom: 150px;
		position: absolute;
	}
	
	.send{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.9);
		color: white;
		z-index: 222;
	}
	.send>div{
		position: fixed;
		top: 40%;
	}
	.send>div>div{
		float: left;
		text-align: center;
		font-size: 13px;
		margin-bottom: 40px;
	}
	.send img{
		margin: 3px 24px;
	}
	
	.fade-enter-active{
		animation: show 1s;
	}
	.fade-leave-active{
		animation: leave .5s;
	}
	@keyframes show{
		from{
			opacity: 0.3;
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
			opacity: 0.3;
		}
	}
</style>