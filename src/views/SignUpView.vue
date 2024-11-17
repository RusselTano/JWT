<template>
  <main>
    <div class="hero__section">
      <div class="logo"><img src="../assets/images/logo.png" /></div>
      <div class="title">
        <h1>Sign Up</h1>
        <p>Please signup to use platform</p>
      </div>
      <form>
        <div class="box">
          <input type="text" placeholder="Enter your name" />
          <p class="form-error"></p>
        </div>
        <div class="box">
          <input type="email" placeholder="Enter your email">
          <p class="form-error"></p>
        </div>
        <div class="box">
          <input type="password" placeholder="Enter your password" />
          <p class="form-error"></p>
        </div>
        <button class="btn-primary ">Sign Up</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import {z} from 'zod'
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
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
  height: 560px;
  padding: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transform: translateY(-100px);
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
}
</style>
