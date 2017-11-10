import VueRouter from 'vue-router'
 
import recom from '../component/nav/recom.vue'
		import data from '../component/more/data.vue'
		import play from '../component/more/play.vue'
		import detail from '../component/more/detail.vue'
	import foucs from '../component/headnav/foucs.vue'
	import like from '../component/headnav/like.vue'
	import movie from '../component/headnav/movie.vue'
	import music from '../component/headnav/music.vue'
	import pic from '../component/headnav/pic.vue'
import find from '../component/nav/find.vue'
import com from '../component/nav/com.vue'
import my from '../component/nav/my.vue'
//	import setting from '../component/more/setting.vue'
	import more from '../component/more/more.vue'
	import active from '../component/more/active.vue'

export default new VueRouter({
	routes:[
		{path:'*',redirect:'/recom'}, 
		{path:'/recom',component:recom},
				{path:'/data',component:data},
				{path:'/play',component:play},
				{path:'/detail',component:detail},
			{path:'/foucs',component:foucs},
//			{path:'/foucs',component:foucs,name:'page'},
			{path:'/movie',component:movie},
			{path:'/like',component:like},
			{path:'/music',component:music},
			{path:'/pic',component:pic},
		{path:'/find',component:find}, 
		{path:'/com',component:com}, 
		{path:'/my',component:my},
//			{path:'/setting',component:setting},
			{path:'/more',component:more},
			{path:'/active',component:active}
	]
})
