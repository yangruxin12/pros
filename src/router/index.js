import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/seen',
    name: 'Seen',
    component: () => import(/* webpackChunkName: "about" */ '../views/seen.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "about" */ '../views/me.vue')
  },
  {
  	path:'/detail',
  	name:"Detail",
  	component:()=>import ("../views/Detail.vue"),
	
  },
  {
  	path:'/searth',
  	name:"Searth",
  	component:()=>import ("../views/Searth.vue")
  },
  {
  	path:'/site',
  	name:"site",
  	component:()=>import ("../views/Site.vue")
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
