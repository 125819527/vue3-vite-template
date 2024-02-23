import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('路由守卫')
})
export default router
