import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, roleRoutes } from './routes.js'

const route = [...routes, ...roleRoutes]
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
