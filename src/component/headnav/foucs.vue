<template>
	<main>
		<!--加载动画-->
		<div id="mask">
			<img src="../../assets/img/loading.gif"/>
		</div>
		
		<v-header></v-header>
		
		<div class="Hcontext">
			
			<div class="Hicon" v-for='v in msgs'>
				<router-link to='/detail'>
					<div class="Hdetails"></div>
				</router-link>
				
				<p>
					<span><img :src="v.head" /></span> 
					<span>{{v.name}}</span>
					<span>{{v.title}}</span>
				</p>
				<img v-lazy="v.src" />
				<h2>{{v.icon}}</h2>
				<p>{{v.text}}</p>
				
				<span @click='send'><img src="../../assets/img/tzhuanfa.png"/>234</span>
				<span><img src="../../assets/img/tshoucang.png"/>54</span>
				<span><img src="../../assets/img/tdianzan.png"/>533</span>
				<span><img src="../../assets/img/tpinlun.png"/>546</span>
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
				msgs:[],
				daohang:[]
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
				this.msgs=res.body.result.data[1].context
				document.getElementById('mask').style.display="none"
//				if(this.$route.params.id==0){
//					this.msgs=res.body.result.data[0].context
//				}else if(this.$route.params.id==1){
//					this.msgs=res.body.result.data[1].context
//				}else if(this.$route.params.id==2){
//					this.msgs=res.body.result.data[2].context
//				}else if(this.$route.params.id==3){
//					this.msgs=res.body.result.data[3].context
//				}else if(this.$route.params.id==4){
//					this.msgs=res.body.result.data[4].context
//				}else if(this.$route.params.id==5){
//					this.msgs=res.body.result.data[5].context
//				}
			})
		}
	}
</script>

<style >
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
	.Hcontext{
		margin: 45px 0;
		background-color: #e1e8eb;
	}
	/*每个小模块*/
	.Hicon{ 
		width: 100%;
		padding: 0 10px;
		margin: 10px 0;
		box-sizing: border-box;
		background-color: white;
	}
	.Hicon p img{
		height: 40px;
	}
	.Hicon>img{
		width: 100%;
	}
	.Hicon p span{
		line-height: 40px;
		float: left;
		font-size: 12px;
	}
	.Hicon p span:nth-of-type(3){
		position: absolute;
		right: 10px;
	}
	.Hicon>h2{
		margin: 5px 0;
	}
	.Hicon p:nth-of-type(2){
		font-size: 13px;
		color: darkgray;
		padding-bottom: 10px;
		border-bottom: 1px solid gainsboro;
		margin-bottom: 5px;
	}
	.Hicon>span img{
		width: 20px;
		margin-right: 3px;
	}
	.Hicon>span{
		font-size: 12px;
		color: gainsboro;
	}
	.Hdetails{
		width: 90%;
		height: 150px;
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