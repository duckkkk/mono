<template>
	<main>
		<div class="head">
			<p><span @click='back'> < </span>往期早午茶</p>
		</div>
		<div class="context" v-for="v in 7">
			<router-link to='/lunch'>
				<div>
					<br />
					<p>{{time}}{{times}}星期{{xq-v | aa}}</p>
					<h1><strong>{{day-v | bb}}</strong></h1>
					<img src="../../assets/img/moon.png" />
					<p>下午茶</p>
				</div>
			</router-link>
			<router-link to='/lunch'>
				<div>
					<br />
					<p>{{time}}{{times}}星期{{xq-v | aa}}</p>
					<h1><strong>{{day-v | bb}}</strong></h1>
					<img src="../../assets/img/sun.png" />
					<p>早茶</p>
				</div>
			</router-link>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return {
				time:"",
				times:"",
				xq:"",
				day:""
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var now =new Date();
			this.time=now.getFullYear()+" "
			this.times=(now.getMonth()+1)+" "
    		this.xq=now.getDay()+1
    		this.day=now.getDate()+1
		},
		filters:{
			aa(n){
				return n<1?7+n:n
			},
			bb(n){
				return n<1?30+n:n
			}
		}
	}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 40px;
		color: white;
		background-color: black;
		text-align: center;
		line-height: 40px;
		position: fixed;
		left: 0;
		top: 0;
	}
	.head span{
		position: absolute;
		left: 10px;
		cursor: pointer;
	}
	
	.context{
		margin-top: 40px;
	}
	.context a{
		color: black;
		text-decoration: none;
	}
	.context>a{
		width: 49%;
		height: 150px;
		border-bottom: 1px solid gainsboro;
		border-left: 1px solid gainsboro;
		float: left;
		text-align: center;
	}
	.context a h1{
		font-size:40px;
	}
</style>