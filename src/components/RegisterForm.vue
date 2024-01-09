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
    <FormKit type="text" name="userName" label="userName" />
  </FormKit>
</template>

<script>
import { createZodPlugin } from '@formkit/zod'

import { registerSchema } from '@/schemas/register'

const [zodPlugin, submitHandler] = createZodPlugin(
  registerSchema,
  async (formData) => {
    console.log('formData', formData)
  }
)

export default {
  name: 'RegisterForm',

  data() {
    return {
      registerSchema,
      submitHandler,
      zodPlugin,
    }
  },

  methods: {},
}
</script>

<style module></style>
