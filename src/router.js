import Vue from 'vue'
import Router from 'vue-router'

import shouye from './views/shouye.vue'
import youhui from './views/youhui.vue'
import faxian from './views/faxian.vue'
import zhuangbei from './views/zhuangbei.vue'
import gengduo from './views/gengduo.vue'
import rexiao from './views/zhuangbei/rexiao.vue'
import rexiaolist from './components/rexiaolist.vue'
import rexiaolist2 from './components/rexiaolist2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
		{
		  path: '/shouye',
		  name: 'shouye',
		  component: shouye
		},
		{
		  path: '/youhui',
		  name: 'youhui',
		  component: youhui
		},
		{
		  path: '/faxian',
		  name: 'faxian',
		  component: faxian
		},
		{
		  path: '/zhuangbei',
		  name: 'zhuangbei',
		  component: zhuangbei,
		},
		{
		  path: '/gengduo',
		  name: 'gengduo',
		  component: gengduo
		},
    
		{
		  path: '/rexiao',
		  name: 'rexiao',
		  component: rexiao,
			redirect:{"name":"rexiaolist"},
			children:[
				{
					path:'/rexiao/rexiaolist',
					name:"rexiaolist",
					component:rexiaolist,
					
				},
				{
					path:'/rexiao/:type',
					name:"rexiaolist2",
					component:rexiaolist2
				}
			]
		},
  ]
})
