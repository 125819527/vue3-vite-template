import { createRouter, createWebHashHistory } from 'vue-router'
const index = () => import('')
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/index',
        name: 'scenic-detail',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/index/hotelDetail',
        name: 'hotel-detail',
        component: () => import('@/views/index/hotelDetail.vue')
      },
      {
        path: '/index/scenicDetail',
        name: 'scenic-detail',
        component: () => import('@/views/index/scenicDetail.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index.vue')
      },
      {
        path: '/order-list/hotel',
        name: 'hotel',
        component: () => import('@/views/order-list/hotel.vue')
      },
      {
        path: '/order-list/scenic.vue',
        name: 'hotel',
        component: () => import('@/views/order-list/scenic.vue')
      }
    ],
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('路由守卫')
})
export default router
