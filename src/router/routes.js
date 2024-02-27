export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '网站首页',
          icon: 'Sunrise'
        }
      }
    ],
    redirect: '/home/index'
  },
  {
    path: '/hotelDetail',
    name: 'hotel-detail',
    component: () => import('@/views/index/hotelDetail.vue'),
    meta: {
      title: '酒店详情'
    }
  },
  {
    path: '/scenicDetail',
    name: 'scenic-detail',
    component: () => import('@/views/index/scenicDetail.vue'),
    meta: {
      title: '景点详情'
    }
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: () => import('@/layout/index.vue'),
    redirect: '/order-list/hotel',
    meta: {
      title: '订单列表',
      icon: 'OfficeBuilding'
    },
    children: [
      {
        path: '/order-list/scenic',
        name: 'scenic',
        component: () => import('@/views/order-list/scenic.vue'),
        meta: {
          title: '景点订单',
          icon: 'Guide'
        }
      },
      {
        path: '/order-list/hotel',
        name: 'hotel',
        component: () => import('@/views/order-list/hotel.vue'),
        meta: {
          title: '酒店订单',
          icon: 'School'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/user/index',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'User'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

export const roleRoutes = [
  {
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
        name: 'user',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      }
    ]
  }
]
