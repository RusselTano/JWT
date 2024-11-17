<template>
  <div class="d-flex flex-column app-container">
    <Header :is-logged-in="userStore.isLoggedIn" @logout="logout" />
    <RouterView class="flex-fill" />
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import { useUser } from './shared/stores'
import {useRouter} from 'vue-router'

const userStore = useUser()
const router = useRouter()

async function logout() {
  await userStore.signout()
  router.push('/signin')
}
</script>
<style scoped>
.app-container {
  min-height: 100vh;
}
</style>
