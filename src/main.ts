import './style.css'

import { About, Home } from '@views'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

const app = createApp(App)

const routes = [
  {
    path: '/',
    component: async () => await Home,
  },
  {
    path: '/about',
    component: async () => await About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)
app.mount('#app')
