import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Cloneflix`;
  if (to.path !== '/login' && !store.getters['auth/hasToken']) {
    next('/login');
  } else {
    next();
  }
});

export default router;
