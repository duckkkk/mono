<template>
	<main>
		<div class="chead">
			<router-link to='com'>
				<span> < </span>
			</router-link>
				<input type="text" placeholder="搜索小组、活动" @keydown.enter="search" id="search"/><br />
			<router-link to='more'>小组</router-link>
			<router-link to='active'>活动</router-link>
		</div>
		<div class="ccontext">
			<p>今日推荐</p>
			<router-link to='/detail'>
				<div class="ctext">
					<img src="../../assets/img/find/one03.png"/>
					<div>
						<p>全球著名景点</p>
						<p>细数公元前所有文明于世的景点</p><br />
						<p>7062人加入</p>
					</div>
					<span><img src="../../assets/img/find/plus.png"/></span>
				</div>
			</router-link>
			
			<p>全部活动</p>
			
			<router-link to='/detail'>
				<div class="ctext" v-for='v in msg'>
					<img v-lazy="v.src"/>
					<div>
						<p class="name">{{v.name}}</p>
						<p>{{v.title | limit}}</p><br />
						<p>{{v.count}}</p>
					</div>
					<span><img src="../../assets/img/find/plus.png"/></span>
				</div>
			</router-link>
			
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:[]
			}
		},
		mounted(){
			this.$http.get('src/json/my.json').then(function(res){
				this.msg=res.body.result.data[2].context
			})
		},
		//字数过滤器
		filters:{
			limit(value){
				return value.length>12?value.substr(0,10)+"……":value;
			}
		},
		//搜索功能
		methods:{
			search(){
				var ipt=document.getElementById('search')
				var name=document.getElementsByClassName('name')
	
//				var cont=document.getElementsByClassName('ctext')
//				for(var i=0;i<name.length;i++){
//					//输入框内容
//					var iptTxt=ipt.value.toUpperCase()
//					//页面内容小标题
//					var nameTxt=name.text.toUpperCase()
//					
//					if(nameTxt.search(iptTxt)!==-1){
//						cont[i].style.display="block"
//						break;
//					}else{
//						cont[i].style.display="none"
//					}
//				}
//				name.style.backgroundColor="yellow"
				
			}
		}
	}
</script>

<style >
	.chead{
		width: 100%;
		height: 40px;
		/*padding: 0 10px;*/
		background-color: black;
		color: white;
		line-height: 40px;
		font-size: 13px;
		position: fixed;
		left: 0;
		top: 0;
	}
	.chead input{
		width: 85%;
		height: 30px;
		border: none;
		border-radius: 5px;
		margin-left: 5px;
	}
	.chead a:nth-of-type(1){
		display: block;
		width: 15px;
		margin-left: 10px;
		color: white;
		background-color: black;
	}
	.chead a{
		height: 40px;
		display: block;
		width: 50%;
		color: darkgray;
		float: left;
		text-align: center;
		text-decoration: none;
		background-color: white;
	}
	
	.ccontext{
		margin-top: 80px;
		background-color: #e1e8eb;
	}
	.ccontext>p{
		width: 100%;
		height: 40px;
		font-size: 13px;
		background-color: #e1e8eb;
		line-height: 40px;
		padding: 0 10px;
		box-sizing: border-box;
	}
	
	.ctext{
		width: 100%;
		height: 80px;
		padding:10px;
		margin-bottom: 10px;
		box-sizing: border-box;
		background-color: white;
	}
	.ctext>img{
		float: left;
		width: 60px;
	}
	.ctext div{
		float: left;
		font-size: 12px;
		color: darkgray;
		margin-left: 5px;
	}
	.ctext div p:nth-of-type(1){
		color: black;
		font-size: 14px;
	}
	.ctext span{
		float: right;
	}
	.chead .router-link-active {
		color: black !important;
	}
	
	/*搜索框*/
	.search{
		width: 85%;
		height: 50px;
		border: 1px solid black;
		position: fixed;
		top: 40px;
		left: 30px;
		background-color: white;
		display: none;
	}
</style>