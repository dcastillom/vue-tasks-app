<template>
  <button @click="increments">increments</button>
  <button @click="decrements">decrements</button>
  <p>{{ count }}</p>
</template>

<script>
export default {
  name: 'BaseButton',

  data() {
    return {
      count: 0,
    }
  },

  methods: {
    increments() {
      this.count++
    },
    decrements() {
      this.count--
    },
  },
}
</script>

<style module></style>
