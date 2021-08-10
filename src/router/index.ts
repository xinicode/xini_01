import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '导航一',
    iconCls: 'ios-paw',
    component: Home,
    children: [
      {
        path: '/main', component: Main, name: '主页'
      }
    ]
  },
  {
    path: '/',
    name: '导航二',
    iconCls: 'ios-paw',
    component: Home,
    children: [
      {
        path: '/about', component: About, name: '关于'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]


export default routes;
