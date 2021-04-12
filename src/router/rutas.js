import Vue from 'vue'
import VueRouter from 'vue-router'

/* CONTROL */

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/convenios'
    },
    {
      path: '/convenios',
      name: 'Convenios',
      component: () => import('../components/Convenios.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  //let user = firebase.auth().currentUser;
  //let authenticated = to.matched.some(record => record.meta.authenticated);
  next();
  //if(authenticated && !user){
  //  next('session');
  //}else if(!authenticated && user){
  //  next('home');
  //}else{
  //  next();
  //}
});

export default router