<template>
  <p><RouterLink to="/">Home</RouterLink></p>
  <p><RouterLink to="/about">About</RouterLink></p>
  <p><RouterLink to="/register">Register</RouterLink></p>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: 'AppComponent',

  data() {
    return {}
  },

  computed: {},

  methods: {},
}
</script>

<style module></style>
