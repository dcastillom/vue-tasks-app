<template>
  <p><RouterLink to="/">Home</RouterLink></p>
  <p><RouterLink to="/about">About</RouterLink></p>
  <p><RouterLink to="/register">Register</RouterLink></p>
  <p><RouterLink to="/login">Login</RouterLink></p>
  <LogoutButton />
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue'
export default {
  name: 'AppComponent',

  components: {
    LogoutButton,
  },
}
</script>

<style module></style>
