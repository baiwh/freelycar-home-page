// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navigation from './../src/components/nav.vue'
import bottomNav from './../src/components/navFotter.vue'
import { Cascader} from 'element-ui'
Vue.component(Cascader.name, Cascader)
Vue.component('navigation', navigation)
Vue.component('bottomNav', bottomNav)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
