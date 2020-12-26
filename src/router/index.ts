import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'
import Demo5 from '../views/Demo5.vue'
import Demo6 from '../views/Demo6.vue'
import Demo7 from '../views/Demo7.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'Demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'Demo7',
    component: Demo7
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
