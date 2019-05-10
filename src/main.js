import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
