<template>
  <div class="d-flex flex-column app-container">
    <Header :is-logged-in="userStore.isLoggedIn" @logout="logout"/>
    <RouterView class="flex-fill"/>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import { useUser } from './shared/stores'


const userStore = useUser();

function logout() {

}



</script>
<style scoped>
.app-container{
  min-height: 100vh;
}
</style>
