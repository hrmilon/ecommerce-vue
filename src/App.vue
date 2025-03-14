<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AdminView from './views/AdminView.vue';
import { computed } from 'vue';
import DefaultLayout from './layout/DefaultLayout.vue';

const route = useRoute();
const layoutComponent = computed(() =>
  route.meta.layout === 'admin' ? AdminView : DefaultLayout
);
</script>

<template>
 <component :is="layoutComponent" />

 <!-- reason task delgated to individual layout components -->
<!-- <header>
  <SalesTop />
  <div class="wrapper">
    <NavbarVue />
  </div>
</header>
<Toaster />
<RouterView />
<FooterVue /> -->

</template>