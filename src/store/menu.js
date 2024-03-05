import { defineStore } from 'pinia'

export const menuStore = defineStore({
  id: 'menu', // id必填，且需要唯一
  state: () => {
    return {
      menuList: []
    }
  },
  getters: {
    getMenuList: (state) => state.menuList
  },
  actions: {
    addMenuList(list) {
      this.menuList = list
    },
    clearMenuList() {
      this.menuList = []
    }
  }
})
