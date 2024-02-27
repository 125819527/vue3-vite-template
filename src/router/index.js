import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, roleRoutes } from './routes.js'
import { menuStore } from '@/store/menu.js'

const route = [...routes, ...roleRoutes]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = menuStore()
  console.log('路由守卫')

  if (store.getMenuList.length == routes.length) {
    router.addRoute({
      path: '/roles',
      component: () => import('@/layout/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'User'
      },
      redirect: '/roles/index',
      children: [
        {
          path: '/roles/index',
          name: 'roles',
          component: () => import('@/views/roles/index.vue'),
          meta: {
            title: '用户管理',
            icon: 'User'
          }
        }
      ]
    })

    next()
  } else {
    next()
  }
})

export default router
