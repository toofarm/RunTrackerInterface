import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LandingPage from './views/LandingPage.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import Details from './views/Details.vue'
import Dashboard from './views/Dashboard.vue'
import store from './store/'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile-details',
      name: 'profileDetails',
      component: Details
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.token &&
      to.path !== '/sign-up' &&
      to.path !== '/login' &&
      to.path !== '/welcome') {
        next('/welcome')
  } else {
    next()
  }
})


