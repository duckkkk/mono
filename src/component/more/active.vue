<template>
	<main>
		<div class="chead">
			<router-link to='com'>
				<span> < </span>
			</router-link>
				<input type="text" placeholder="搜索小组、活动" /><br />
			<router-link to='more'>小组</router-link>
			<router-link to='active'>活动</router-link>
		</div>
		<div class="ccontext">
			<p>今日推荐</p>
			<router-link to='/detail'>
				<div class="ctext">
					<img src="../../assets/img/find/one04.png"/>
					<div>
						<p>全球著名景点</p>
						<p>细数公元前所有文明于世的景点</p><br />
						<p>7062人加入</p>
					</div>
				</div>
			</router-link>
			
			<p>全部活动</p>
			
			<router-link to='/detail'>
				<div class="ctext" v-for='v in msg'>
					<img v-lazy="v.src"/>
					<div>
						<p>{{v.name}}</p>
						<p>{{v.title}}</p><br />
						<p>{{v.count}}</p>
					</div>
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
				this.msg=res.body.result.data[3].context
			})
		}
	}
</script>
