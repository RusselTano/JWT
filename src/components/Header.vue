<template>
<nav class="nav d-flex flex-row align-items-center px-20 g-20">
  <rooter-link to="/">
    <h1>Application</h1>
  </rooter-link>
  <ul class="nav__links d-flex align-items-center g-10">
    <template v-if="isLoggedIn">
      <li>
        <RouterLink  to="/profile">Mon profile</RouterLink >
      </li>
      <li @click="emit('logout')">
        Deconnexion
      </li>
    </template>
    <template v-else>
      <li>
        <RouterLink  to="/signin">Connexion</RouterLink >
      </li>
      <li>
        <RouterLink  to="/login">Incription</RouterLink >
      </li>
    </template>
  </ul>
</nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoggedIn: boolean;
}>();

const emit = defineEmits<{
  (e: 'logout'): void;
}>();

</script>

<style scoped lang="scss">
.nav{
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
