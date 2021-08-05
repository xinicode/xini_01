import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';
import xiniMixinAll from './mixins/index'
Vue.use(ViewUI);

Vue.mixin(xiniMixinAll)
// Mock.bootstrap();
console.log(process)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




//登录
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
      sessionStorage.removeItem('user');
  }
  let t:any = sessionStorage.getItem('user');
  let user:any = JSON.parse(t);
  if (!user && to.path != '/login') {
      next({ path: '/login' })
  } else {
      next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
