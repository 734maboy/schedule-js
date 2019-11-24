import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../views/Settings.vue'
import ScheduleLoad from '../views/ScheduleLoad.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'load',
    component: ScheduleLoad
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
