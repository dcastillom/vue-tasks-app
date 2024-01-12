<template>
  <slot></slot>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'

export default {
  name: 'UserGuard',

  setup() {
    const router = useRouter()
    const { setUser, clearUser } = useUserStore()
    return { router, setUser, clearUser }
  },

  mounted() {
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (session) => {
      if (session) {
        this.setUser(session)
      } else {
        this.clearUser()
        this.router.push('/')
      }
    })
  },
}
</script>
