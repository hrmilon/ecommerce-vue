<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
import DefaultLayout from './layout/DefaultLayout.vue';
import DashbordLayout from './layout/DashbordLayout.vue';

const route = useRoute();
const layoutComponent = computed(() =>
  route.meta.layout === 'admin' ? DashbordLayout : DefaultLayout
);
</script>

<template>
 <component :is="layoutComponent" />

</template>