<template>
  <p><BaseLink to="/">Home</BaseLink></p>
  <p><BaseLink to="/register" :hidden="isLoggedIn">Register</BaseLink></p>
  <p><BaseLink to="/about" :hidden="!isLoggedIn">About</BaseLink></p>
  <p><BaseLink to="/login" :hidden="isLoggedIn">Login</BaseLink></p>
  <LogoutButton />
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { RouterLink } from 'vue-router'
import LogoutButton from '@/components/LogoutButton.vue'
import BaseLink from '@/components/BaseLink.vue'
export default {
  name: 'AppComponent',

  components: {
    LogoutButton,
    BaseLink,
  },

  data() {
    return {
      isLoggedIn: false,
    }
  },

  mounted() {
    this.auth = getAuth()
    onAuthStateChanged(this.auth, (user) => {
      this.isLoggedIn = !!user
    })
  },
}
</script>

<style module></style>
