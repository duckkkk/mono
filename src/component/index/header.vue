<template>
	<header>
		<router-link to='/recom'>早午茶</router-link>
		<router-link to='/foucs'>我的关注</router-link>
		<router-link to='/like'>猜你喜欢</router-link>
		<router-link to='/movie'>视频</router-link>
		<router-link to='/music'>音乐</router-link>
		<router-link to='/pic'>画册</router-link>
		<router-link to='/play' class="play">
			<div class="a">
				<div class="b">
					<div class="c"></div>
				</div>
			</div>
		</router-link>
		
		<!--<ul class="nav">
			<li v-for='v in msg'>
				<router-link :to="{name:'page',params:{id:v.id}}">
					{{v.page}}
				</router-link>
			</li>
			
			<router-link to='/play' class="hplay">
				<div class="a">
					<div class="b">
						<div class="c"></div>
					</div>
				</div>
			</router-link>
		</ul>-->
	</header>
</template>

<script>
	export default {
		data(){
			return{
				msg:[]
			}
		},
		mounted(){
			this.$http.get('src/json/headnav.json').then(function(res){
				this.msg=res.body.result.data
			})
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		height: 40px;
		background-color: #000000;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 111;
	}
	header a{
		width:16%;
		color: white;
		font-size: 11px;
		float: left;
		text-align: center;
		text-decoration: none;
		line-height: 40px;
	}
	.play{
		position: absolute;
		right: -9%;
		top: 28%;
	}
	.a{
		width: 15px;
		height: 15px;
		border: 1px solid white;
		border-radius: 50px;
	}
	.b{
		width: 10px;
		height: 10px;
		border: 1px solid white;
		border-radius: 50px;
		margin: 1px;
	}
	.c{
		width: 6px;
		height: 6px;
		background-color: white;
		border-radius: 50px;
		margin: 2px;
	}
	.router-link-active {
		color: #00BFFF;
	}
</style>