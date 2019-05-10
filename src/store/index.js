import Vue from 'vue'
import Vuex from 'vuex'
import VueJsonp from 'vue-jsonp'

Vue.use(Vuex)
import listt from './list.js'
import Modular from './shoe.js'
export default new Vuex.Store({
	state:{
		
	},
	modules:{
		listt,
		Modular
	}
})
