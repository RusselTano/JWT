<template>
  <main>
    <div class="hero__section">
      <div class="logo"><img src="../assets/images/logo.png" /></div>
      <div class="title">
        <h1>Sign Up</h1>
        <p>Please signup to use platform</p>
      </div>
      <form @submit="submit">
        <div class="box">
          <input type="text" placeholder="Enter your name" v-model="nameValue" />
          <p v-if="nameError" class="form-error">{{ nameError }}</p>
        </div>
        <div class="box">
          <input type="email" placeholder="Enter your email" v-model="emailValue" />
          <p v-if="emailError" class="form-error">{{ emailError }}</p>
        </div>
        <div class="box">
          <input type="password" placeholder="Enter your password" v-model="passwordValue" />
          <p v-if="passwordError" class="form-error">{{ passwordError }}</p>
        </div>
        <button class="btn-primary">Sign Up</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import type { UserForm } from '@/shared/interface'
import { createUser } from '@/shared/services/UserService'
import { useRouter } from 'vue-router'

const router = useRouter()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z
      .string({ required_error: 'password is required' })
      .min(8, 'le mot de passe doit faire au moin 8 caractere'),
  }),
)

const { handleSubmit, setErrors } = useForm({
  validationSchema,
})

const submit = handleSubmit(async (formValue: UserForm) => {
  try {
    await createUser(formValue)
    router.push('/signin')
  } catch (error) {
    console.log(error)
  }
})

const { value: nameValue, errorMessage: nameError } = useField('name')
const { value: emailValue, errorMessage: emailError } = useField('email')
const { value: passwordValue, errorMessage: passwordError } = useField('password')
</script>

<style scoped lang="scss">
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a {
  color: var(--primary-2);
}

input {
  border: 2px solid var(--gray-1);
}

.hero__section {
  width: 400px;
  padding: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 70px;
  }
}

.title {
  margin-bottom: 50px;

  p {
    font-size: 14px;
  }
}

form {
  display: grid;
  gap: 20px;
}

.box input {
  width: 100%;
  padding: 15px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
}

input[type='checkbox'] {
  accent-color: var(--primary-2);
}

button {
  border-radius: 999px;
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 50px;
}
.form-error {
  color: var(--danger-1);
  text-align: left;
  margin-left: 15px;
}
</style>
