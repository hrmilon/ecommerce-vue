<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from '@/components/Navigation/NavbarVue.vue';
import SalesTop from './components/SalesTop.vue';
</script>

<template>
  <header>
    <SalesTop />
    <div class="wrapper">
      <NavbarVue />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
