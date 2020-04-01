import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aboutUs from '@/components/aboutUs'
import ark from '@/components/ark'
import model from '@/components/model'
import application from '@/components/application'
import show from '@/components/show'
import homePageIndex from '@/router/homePageIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show',
      name: '展示平台',
      component: show
    },{
      path: '/',
      name: '首页',
      component: homePageIndex,
      children:[
        {
          path: '/',
          name: '首页',
          component: HelloWorld
        },{
          path: '/aboutUs',
          name: '关于我们',
          component: aboutUs
        },{
          path: '/service',
          name: '智能服务',
          component: ark
        },{
          path: '/business',
          name: '商业模式',
          component: model
        },{
          path: '/contact',
          name: '申请合作',
          component: application
        }
      ]
    },
  ],
  mode: 'history',
})
