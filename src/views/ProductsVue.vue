<script setup>
import { useProductsStore } from '@/stores/useProductsStore';
import { computed, onMounted } from 'vue';
import ProductVue from '@/components/ProductVue.vue';

let productsStore = useProductsStore();
let getAllProducts = computed(() => productsStore.getProductsList)

onMounted(() => {
	productsStore.apiGetProducts()
})
</script>

<template>
	<hr class="h-px bg-gray-200 border-0">
	<div class="font-bold text-3xl ml-7 p-3">Explore</div>
	<div class="grid grid-cols-4 gap-4 p-3 ms-4">
		<ProductVue v-for="product in getAllProducts" :key="product.id" :product="product" />
	</div>
</template>
