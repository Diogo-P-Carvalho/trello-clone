import Vue from 'vue'
import Router from 'vue-router'
import Board from '../views/Board.vue'
import Task from '../views/Task.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'task/:id',
        name: 'task',
        component: Task
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
