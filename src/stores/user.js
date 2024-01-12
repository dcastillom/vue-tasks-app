import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    email: 'joder',
  }),
  getters: {
    getUser: (state) => {
      console.log('state', state)
      return state
    },
    isLoggedIn: (state) => state.email !== null,
  },
  actions: {
    setUser(user) {
      this.email = user.email
    },
    clearUser() {
      this.email = null
    },
  },
})
