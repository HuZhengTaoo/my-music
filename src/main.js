import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import 'common/stylus/index.styl'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  loading:require('common/images/default.png')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
