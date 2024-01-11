<template>
  <FormKit
    type="form"
    :plugins="[zodPlugin]"
    :config="{ validationVisibility: 'dirty' }"
    @submit="submitHandler"
  >
    <FormKit type="email" name="email" label="email" />
    <FormKit type="password" name="password" label="password" />
    <FormKit type="password" name="confirmPassword" label="confirmPassword" />
  </FormKit>
</template>

<script>
import { createZodPlugin } from '@formkit/zod'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { registerSchema } from '@/schemas/register'

export default {
  name: 'RegisterForm',

  setup() {
    const [zodPlugin, submitHandler] = createZodPlugin(
      registerSchema,
      async ({ email, password }) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
          .then((userCredential) => {
            const user = userCredential.user
          })
          .catch((error) => {
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
