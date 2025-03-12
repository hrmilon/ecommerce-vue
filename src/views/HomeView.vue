<script setup>
import { onMounted } from 'vue';
import HeroSection from '../components/Hero/HeroSection.vue'
import ProductsVue from './ProductsVue.vue'
import { useCartStore } from '@/stores/useCartStore';

let cart = useCartStore()

// onMounted(() => {
//     cart.apiPostCart()
// })
</script>

<template>
  <main>
    <!-- <HeroSection /> -->
    <ProductsVue />
  </main>
</template>