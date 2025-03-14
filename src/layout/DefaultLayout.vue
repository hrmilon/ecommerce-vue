<script setup>
import FooterVue from '@/components/Navigation/FooterVue.vue';
import NavbarVue from '@/components/Navigation/NavbarVue.vue';
import SalesTop from '@/components/Navigation/SalesTop.vue';
import Toaster from '@/components/ui/toast/Toaster.vue';

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