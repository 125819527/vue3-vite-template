import { defineStore } from 'pinia'
export const resStore = defineStore({
  id: 'resouce', // id必填，且需要唯一
  state: () => {
    return {
      // 搜索
      form: {
        page: 1,
        size: 10,
        hasValid: '',
        status: '',
        saleId: '',
        fromDate: '',
        toDate: '',
        sort: '',
        visitGroup: ''
      }
    }
  },
  getters: {
    getForm: (state) => state.form
  },
  actions: {
    saveData(info) {
      this.form = { ...this.form, ...info }
    }
  }
})
