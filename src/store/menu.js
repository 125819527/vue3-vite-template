import { defineStore } from 'pinia'
import { routes, roleRoutes } from '@/router/routes'
import { deepClone } from '@/utils/clone'
import router from '@/router/index'
export const menuStore = defineStore({
  id: 'menu', // id必填，且需要唯一
  state: () => {
    return {
      menuList: deepClone(routes) || []
    }
  },
  getters: {
    getMenuList: (state) => state.menuList
  },
  actions: {
    addMenuList(info) {
      this.menuList = [...this.menuList, ...roleRoutes]
    },
    initMenuList() {
      this.menuList = deepClone(routes) || []
    }
  }
})
