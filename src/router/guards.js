import { getAuth } from 'firebase/auth'

export const setAuthGuard = (router) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      next(getAuth().currentUser ? null : '/')
      return
    }
    next()
  })
}
