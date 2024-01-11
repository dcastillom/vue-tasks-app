import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: async () => await Home,
  },
  {
    name: 'About',
    path: '/about',
    component: async () => await About,
  },
  {
    name: 'Register',
    path: '/register',
    component: async () => await Register,
  },
  {
    name: 'Login',
    path: '/login',
    component: async () => await Login,
  },
]
