<template>
  <button v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'LogoutButton',

  setup() {
    const router = useRouter()
    return { router }
  },

  data() {
    return {
      auth: null,
      isLoggedIn: false,
    }
  },

  mounted() {
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.router.push('/')
        this.isLoggedIn = false
      }
    })
  },

  methods: {
    handleSignOut() {
      signOut(this.auth)
        .then(() => {
          console.log(' signOut')
        })
        .catch((error) => {
          console.log('error signOut', error)
        })
    },
  },
}
</script>
