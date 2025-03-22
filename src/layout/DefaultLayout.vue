<script setup>
import FooterVue from '@/components/Navigation/FooterVue.vue';
import NavbarVue from '@/components/Navigation/NavbarVue.vue';
import SalesTop from '@/components/Navigation/SalesTop.vue';
import Toaster from '@/components/ui/toast/Toaster.vue';

</script>

<template>
  <!-- if error comes from admin url -->
  <div v-if="$route.path.startsWith('/admin/')">
    <RouterView />
  </div>


  <!-- regular layout -->
  <div v-else>
    <header>
      <SalesTop />
      <div class="wrapper">
        <NavbarVue />
      </div>
    </header>
    <Toaster />
    <RouterView />
    <FooterVue />
  </div>

</template>