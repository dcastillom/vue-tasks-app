<template>
  <FormKit
    type="form"
    :plugins="[zodPlugin]"
    :config="{ validationVisibility: 'dirty' }"
    @submit="submitHandler"
  >
    <FormKit
      type="email"
      name="email"
      label="email"
      value="vuetasksapp@yopmail.com"
    />
    <FormKit
      type="password"
      name="password"
      label="password"
      value="12341234"
    />
  </FormKit>
</template>

<script>
import { createZodPlugin } from '@formkit/zod'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

import { loginSchema } from '@/schemas/login'

export default {
  name: 'LoginForm',

  setup() {
    const router = useRouter()
    const [zodPlugin, submitHandler] = createZodPlugin(
      loginSchema,
      async ({ email, password }) => {
        signInWithEmailAndPassword(getAuth(), email, password)
          .then((userCredential) => {
            const user = userCredential.user
            router.push('/')
          })
          .catch(async (error) => {
            const errorCode = error.code
            const errorMessage = error.message
          })
      }
    )

    return {
      zodPlugin,
      submitHandler,
    }
  },
}
</script>
