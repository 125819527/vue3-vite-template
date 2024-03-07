import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes.js'
import { userStore } from '@/store/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = userStore()
  console.log('路由守卫')
  let token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    if (!user.getInfo?.id) {
      user.saveInfo(JSON.parse(localStorage.getItem('user')))
    }
    next()
  }
})

export default router
