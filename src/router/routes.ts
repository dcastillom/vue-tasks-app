import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

export const routes = [
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
  {
    path: '/login',
    component: async () => await Login,
  },
]
