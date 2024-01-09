import './style.css'

import { generateClasses } from '@formkit/themes'
import { defaultConfig, plugin } from '@formkit/vue'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'

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
app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses({
        global: {
          outer: 'mb-5',
          label: 'block mb-1 font-bold text-sm',
          inner:
            'bg-white max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
          input:
            'w-full h-10 px-3 bg-transparent border-none focus:outline-none text-base text-gray-700 placeholder-gray-400 focus:outline-none',
          help: 'text-xs text-gray-500',
          messages: 'list-none p-0 mt-1 mb-0',
          message: 'text-red-500 mb-1 text-xs',
        },
      }),
    },
  })
)
app.mount('#app')
