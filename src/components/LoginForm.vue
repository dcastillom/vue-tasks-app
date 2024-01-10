<template>
  <FormKit
    type="form"
    :plugins="[zodPlugin]"
    :config="{ validationVisibility: 'dirty' }"
    @submit="submitHandler"
  >
    <FormKit type="email" name="email" label="email" />
    <FormKit type="password" name="password" label="password" />
  </FormKit>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { createZodPlugin } from '@formkit/zod'
import { loginSchema } from '@/schemas/login'

const [zodPlugin, submitHandler] = createZodPlugin(
  loginSchema,
  async (formData) => {
    const { email, password } = formData
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Loged in
        const user = userCredential.user
        console.log('user', user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }
)

export default {
  name: 'LoginForm',

  data() {
    return {
      loginSchema,
      submitHandler,
      zodPlugin,
    }
  },

  methods: {},
}
</script>

<style module></style>
