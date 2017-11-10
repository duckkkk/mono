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
				this.msgs=res.body.result.data[4].context
				document.getElementById('mask').style.display="none"
			})
		}
	}
</script>