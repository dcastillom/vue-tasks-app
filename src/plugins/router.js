import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from '@/router/routes'

export default function (app) {
  app.use(
    createRouter({
      history: createWebHashHistory(),
      routes,
    })
  )
}
