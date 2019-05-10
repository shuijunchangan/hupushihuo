import Vue from 'vue'
import Router from 'vue-router'

import shouye from './views/shouye.vue'
import youhui from './views/youhui.vue'
import faxian from './views/faxian.vue'
import zhuangbei from './views/zhuangbei.vue'
import gengduo from './views/gengduo.vue'

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
		  component: zhuangbei
		},
		{
		  path: '/gengduo',
		  name: 'gengduo',
		  component: gengduo
		},
    
  ]
})
