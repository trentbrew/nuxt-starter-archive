import { defineStore } from 'pinia'

export const useItemsStore = defineStore({
  id: 'items-store',
  state: () => {
    return {
        items: [],
    }
  },
  actions: {},
  getters: {},
})