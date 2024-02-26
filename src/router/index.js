import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('路由守卫')
  next()
})

console.log(router)
export default router
