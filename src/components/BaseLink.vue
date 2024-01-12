<template>
  <RouterLink :to="to" :class="{ hidden }"><slot></slot></RouterLink>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    hidden: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
