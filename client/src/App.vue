<template>
  <div class="d-flex flex-column app-container">
    <Header @logout="logout" :is-logged-in="isLoggedIn"/>
    <RouterView class="flex-fill"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue'

const isLoggedIn = ref(false)
function logout(){
  isLoggedIn.value = false
}
</script>
<style scoped>
.app-container{
  min-height: 100vh;
}
</style>
