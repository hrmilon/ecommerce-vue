<script setup>
import { useProductsStore } from '@/stores/useProductsStore';
import { computed, onMounted } from 'vue';
import ProductVue from '@/components/Products/ProductVue.vue';
import Skeleton from '@/components/ui/skeleton/Skeleton.vue';

let productsStore = useProductsStore();
let getAllProducts = computed(() => productsStore.getProductsList)

onMounted(() => {
	productsStore.apiGetProducts()
})
</script>

<template>
	<hr class="h-px bg-gray-200 border-0">
	<div class="font-inter text-2xl ml-7 p-3 font-extralight">Explore</div>
	<div v-if="productsStore.loading" class="flex justify-center">
		<div class="h-[300px] w-[350px] rounded-xl flex items-center">
			<div class="mb-5 space-y-4">
				<Skeleton class="h-4 w-[250px]" />
				<Skeleton class="h-4 w-[200px]" />
			</div>
		</div>
	</div>
	<div v-else class="px-12 flex flex-wrap max-w-screen-xl mx-auto">
		<ProductVue v-for="product in getAllProducts" :key="product.id" :product="product" />
	</div>
</template>
