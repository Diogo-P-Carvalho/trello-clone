import Vue from 'vue'
import Router from 'vue-router'
import Board from '../views/Board.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
