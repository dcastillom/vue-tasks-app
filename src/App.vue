<template>
  <p><RouterLink to="/">Home</RouterLink></p>
  <p><RouterLink to="/about">About</RouterLink></p>
  <p><RouterLink to="/register">Register</RouterLink></p>
  <p><RouterLink to="/login">Login</RouterLink></p>
  <button v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
export default {
  name: 'AppComponent',

  data() {
    return {
      auth: null,
      isLoggedIn: false,
    }
  },

  methods: {
    handleSignOut() {
      signOut(this.auth)
        .then(() => {
          console.log('signOut')
        })
        .catch((error) => {
          console.log('error', error)
        })
    },
  },

  mounted() {
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (user) => (this.isLoggedIn = !!user))
  },
}
</script>

<style module></style>
