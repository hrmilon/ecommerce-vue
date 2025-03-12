<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from '@/components/Navigation/NavbarVue.vue';
import SalesTop from './components/Navigation/SalesTop.vue';
import Toaster from './components/ui/toast/Toaster.vue';
import FooterVue from './components/Navigation/FooterVue.vue';
</script>

<template>
  <header>
    <SalesTop />
    <div class="wrapper">
      <NavbarVue />
    </div>
  </header>
  <Toaster />
  <RouterView />
  <FooterVue />

</template>

<style scoped></style>
