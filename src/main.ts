import './style.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'

import App from './App.vue'

import { plugin, defaultConfig } from '@formkit/vue'

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
  {
    path: '/register',
    component: async () => await Register,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)
// @ts-ignore
app.use(plugin, defaultConfig)
app.mount('#app')
