<template>
  <div class="d-flex flex-column app-container">
    <Header @logout="logout" :is-logged-in="false"/>
    <RouterView class="flex-fill"/>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'

function logout(){
  console.log('logout')
}
</script>
<style scoped>
.app-container{
  min-height: 100vh;
}
</style>
