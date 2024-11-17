<template>
  <nav class="nav d-flex flex-row align-items-center px-20 g-20">
    <RouterLink to="/">
      <img src="../assets/images/logo_white.png" alt="">
    </RouterLink>
    <ul class="nav__links d-flex align-items-center g-10">
      <template v-if="isLoggedIn">
        <li>
          <RouterLink to="/profile">Profile</RouterLink>
        </li>
        <li @click="emit('logout')">
         Log out
        </li>
      </template>
      <template v-else>
        <li>
          <RouterLink to="/signin">Sign in</RouterLink>
        </li>
        <li>
          <RouterLink to="/signup">Sign up</RouterLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoggedIn: boolean
}>()

const emit = defineEmits<{
  (e: 'logout'): void
}>()
</script>

<style scoped lang="scss">
* {
  color: #f1f1f1;
}
.nav {
  background-color: var(--primary-1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  justify-content: space-between;

  img {
    height: 40px;
    color: #f1f1f1;
  }
}
</style>
