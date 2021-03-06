import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';
import xiniMixinAll from './mixins/index';
import { bts } from './bootstrap';

import "./app.css";

Vue.use(ViewUI);



Vue.mixin(xiniMixinAll)
// Mock.bootstrap();
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

Vue.prototype.$EventBus = new Vue();
Vue.prototype.$cuihao = bts;

//登录
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('userName');
  }
  const user: any = sessionStorage.getItem('userName');
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})


let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue;
