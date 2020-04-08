// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import topBar from './../src/components/topBar.vue'
import bottomBar from './../src/components/bottomBar.vue'
import {Cascader, Carousel, CarouselItem,} from 'element-ui'

Vue.component(Cascader.name, Cascader)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component('topBar', topBar)
Vue.component('bottomBar', bottomBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
