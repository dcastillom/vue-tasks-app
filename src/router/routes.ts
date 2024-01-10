import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'

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
]
