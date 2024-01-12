<template>
  <button v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

import { mapState } from 'pinia'

import { useUserStore } from '@/stores/user'

export default {
  name: 'LogoutButton',

  setup() {
    const router = useRouter()
  },

  data() {
    return {
      auth: null,
    }
  },

  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
  },

  mounted() {
    this.auth = getAuth()
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
