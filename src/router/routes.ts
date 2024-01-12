import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: async () => await Home,
  },
  {
    name: 'about',
    path: '/about',
    component: async () => await About,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'register',
    path: '/register',
    component: async () => await Register,
  },
  {
    name: 'login',
    path: '/login',
    component: async () => await Login,
  },
]
