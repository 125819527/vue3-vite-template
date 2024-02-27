import { defineStore } from 'pinia'
export const userStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      userInfo: {}
    }
  },
  getters: {
    getInfo: (state) => state.userInfo
  },
  actions: {
    saveInfo(info) {
      this.userInfo = info
    },
    clearInfo() {
      this.userInfo = {}
    }
  }
})
