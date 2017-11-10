<template>
	<main>
		<div class="head">
			<input placeholder="搜索你感兴趣的内容" />
		</div>
		<div class="context">
			<div class="banner">
				<mt-swipe :auto="4000" class="ban">
				 	<mt-swipe-item><img src="../../assets/img/find/banner01.png"/></mt-swipe-item>
				    <mt-swipe-item><img src="../../assets/img/find/banner02.png"/></mt-swipe-item>
				    <mt-swipe-item><img src="../../assets/img/find/banner03.png"/></mt-swipe-item>
				</mt-swipe>
				
				<div class="pics">
					<p>分类查看主题站</p>
					<div>
						<img src="../../assets/img/pic02.jpg"/> 
						<p>阅读<br />Books</p>
					</div>
					<div>
						<img src="../../assets/img/pic02.jpg"/>
						<p>音乐<br />Music</p>
					</div>
					<div>
						<img src="../../assets/img/pic02.jpg"/>
						<p>运动<br />Sports</p>
					</div>
					<div>
						<img src="../../assets/img/pic02.jpg"/>
						<p>社会<br />Society</p>
					</div>
				</div>
				<!--此div是为了清除上面div浮动脱离标准留的问题-->
				<div style="clear:both;"></div>
			</div>
			
			<div class="one">
				<p>
					编辑推荐
					<router-link to='/more'>
						<span>更多> </span>
					</router-link>
				</p>
				
				<router-link to='/detail'>
					<div v-for='v in msg'>
						<p>
							{{v.name}}
							<span><img src="../../assets/img/find/plus.png"/></span>
						</p>
						<img v-lazy="v.src" />
						<p>{{v.title}}</p><br />
						<p>{{v.count}}</p><br />
						<hr />
					</div>
				</router-link>
				
				<div style="clear:both;"></div>
			</div>
			
			<div class="two">
				<p>
					专题精选
					<router-link to='/more'>
						<span>更多> </span>
					</router-link>
				</p>
				<div>
					<img src="../../assets/img/find/two01.png" />
				</div>
				<div>
					<img src="../../assets/img/find/two02.png"/>
				</div>
				<div style="clear:both;"></div>
			</div>
			
			<div class="three" >
				<p>更多主题站</p>
				
				<router-link to='/detail'>
					<div v-for='v in msgs'>
						<p>
							{{v.name}}
							<span><img src="../../assets/img/find/plus.png"/></span>
						</p>
						<img v-lazy="v.src" />
						<p>{{v.title}}</p><br />
						<p>{{v.count}}</p><br />
						<hr />
					</div>
				</router-link>
				
				<div style="clear:both;"></div>
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
		},
		data(){
			return{
				msg:[],
				msgs:[]
			}
		},
		mounted(){
			this.$http.get('src/json/my.json').then(function(res){
				this.msg=res.body.result.data[0].context
				this.msgs=res.body.result.data[1].context
			})
		}
	}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 35px;
		background-color: #000;
		text-align: center;
		line-height: 35px;
		padding: 0 5px;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 111;
	}
	.head input{
		width: 96%;
		height: 25px;
		font-size: 13px;
		text-align: center;
		border-radius: 5px;
	}
	.context{
		background-color: #e1e8eb;
		margin-top: 35px;
		margin-bottom: 45px;
	}
	.context>div{
		background-color: white;
		margin-bottom: 10px;
	}
	
	/*轮播part*/
	.banner{
		width: 100%;
		/*height: 250px;*/
	}
	.ban{
		width: 100%;
		height: 150px;
	}
	 
	.pics{
		padding: 0 20px;
		box-sizing: border-box;
		font-size: 12px;
		margin-bottom: 10px;
	}
	.pics>p{
		margin: 10px 0;
	}
	.pics>div{
		float: left;
		width: 22%;
		margin-bottom: 10px;
	}
	.pics img{
		width: 100%;
		border-radius: 5px;
	}
	.pics div{
		position: relative;
		margin-right: 5px;
	}
	.pics div p{
		color: white;
		position: absolute;
		left: 25%;
		top: 25%;
		font-size: 12px;
		text-align: center;
	}
	
	/*编辑推荐part*/
	.one,.two,.three{
		padding:20px;
		box-sizing: border-box;
	}
	.one>p,.two>p,.three>p{
		font-size: 12px;
		display: block;
	}
	.one>p>span,.two>p>span{
		float: right;
		/*color: deepskyblue !important;*/
	}
	.one>p>a,.two>p>a{
		float: right;
		text-decoration: none;
	}
	.one div,.three div{
		padding: 10px 0;
	}
	.one div p,.three div p{
		height: 20px;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.one div p img,.three div p img{
		height: 20px;
	}
	.one div p span,.three div p span{
		float: right;
		cursor: pointer;
	}
	.one div>img,.three div>img{
		width: 26%;
		float: left;
		margin-right: 5px;
	}
	.one a,.three a{
		text-decoration: none;
		color: black;
	}
	
	.two img{
		width: 48%;
		float: left;
		margin: 10px 2px;
	}
</style>