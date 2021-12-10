import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compare from '../views/Compare.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import userinfo from '../views/userinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/build',
    name: 'Build',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Build.vue')
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare,
    // beforeEnter: (to, from, next) => {
    //   if (this.$store.state.isLogged == false) {
    //     next(false);
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: userinfo
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router