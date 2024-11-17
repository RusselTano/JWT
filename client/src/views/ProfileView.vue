<template>
  <div>
    <h3>Profile</h3>
    <div class="card">
      <pre>{{ userStore.currentUser }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUser } from '@/shared/stores';
const userStore = useUser();
</script>

<style scoped lang="scss">

</style>
