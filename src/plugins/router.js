import { createRouter, createWebHashHistory } from 'vue-router'

import { setAuthGuard } from '@/router/guards'
import { routes } from '@/router/routes'

export default function (app) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  setAuthGuard(router)
  app.use(router)
}
