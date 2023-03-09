import { defineStore } from 'pinia'

const USER_INFO = {}

export const useUserStore = defineStore('userInfo', () => {

  const userInfo = reactive(USER_INFO)

  return {
    userInfo,
  }
})