import './style.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HelloComponent from './components/HelloComponent.vue'
import HomeComponent from './components/HomeComponent.vue'

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/hello',
    component: HelloComponent,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
