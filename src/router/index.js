import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aboutUs from '@/components/aboutUs'
import ark from '@/components/ark'
import model from '@/components/model'
import application from '@/components/application'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },{
      path: '/ark',
      name: 'ark',
      component: ark
    },{
      path: '/model',
      name: 'model',
      component: model
    },{
      path: '/application',
      name: 'application',
      component: application
    },
  ],
  mode: 'history',
})
