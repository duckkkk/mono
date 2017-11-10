<template>
	<main>
		<router-link to='/recom' >
			<p >M</p>
			<p>推荐</p>
		</router-link>
		<router-link to='/find'>
			<p>O</p>
			<p>发现</p>
		</router-link>
		<router-link to='/com'>
			<p>N</p>
			<p>社区</p>
		</router-link>
		<router-link to='/my'>
			<p >O</p>
			<p>我的</p>
		</router-link>
	</main>
</template>

<script>
//	export default {
//		medthos:{
//			change(e){
//				e.target.style.color='red'
//			}
//		}
//	}
</script>

<style scoped>
	main{
		width: 100%;
		height: 40px;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #000000;
	}
	main a{
		width: 25%;
		font-size: 13px;
		color: white;
		float: left;
		text-decoration: none;
		text-align: center;
		line-height: 20px;
	}
	.router-link-active {
		color: #00BFFF;
	}
</style>