<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useProductsStore } from '@/stores/useProductsStore';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Button from '../ui/button/Button.vue';

let productsStore = useProductsStore();
let singleProducts = computed(() => productsStore.getProductsId)

const route = useRoute();
const productId = route.params.id;

onMounted(() => {
    productsStore.apiGetProductsId(productId)
})
</script>

<template>
    <!-- skeleton -->
    <div v-if="productsStore.loading" class="container mx-auto px-4 py-8">
        <div class="flex flex-col space-y-3 justify-center">
            <Card class="w-full max-w-5xl mx-auto overflow-hidden shadow-lg rounded-xl">
                <div class="flex flex-col md:flex-row p-6 gap-8">
                    <Skeleton class="h-[350px] w-full md:w-[350px] rounded-xl" />
                    <div class="space-y-6 flex-1">
                        <div class="space-y-4">
                            <Skeleton class="h-8 w-3/4" />
                            <Skeleton class="h-6 w-1/2" />
                        </div>
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-5/6" />
                        <Skeleton class="h-4 w-4/6" />
                        <Skeleton class="h-4 w-3/6" />
                        <div class="pt-4 space-y-3">
                            <Skeleton class="h-10 w-full md:w-2/3" />
                            <Skeleton class="h-10 w-full md:w-2/3" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>

    <!-- data showing -->
    <div v-else class="container mx-auto px-4 py-8">
        <Card class="w-full max-w-5xl mx-auto overflow-hidden shadow-lg rounded-xl">
            <div class="flex flex-col md:flex-row p-6 gap-8">
                <div class="w-full md:w-1/2 flex justify-center items-center">
                    <div class="relative group">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img loading="lazy" :src="singleProducts.image"
                            class="w-full max-w-md rounded-xl shadow-md object-contain h-[350px] transition-transform duration-300 group-hover:scale-105"
                            :alt="singleProducts.name">
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="pb-6">
                        <div class="font-inter font-bold text-3xl text-gray-800 mb-2">
                            {{ singleProducts.name }}
                        </div>
                        <div class="flex items-center mb-4">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                {{ singleProducts.category }}
                            </span>
                            <div class="ml-4 flex items-center">
                                <div class="flex items-center">
                                    <svg v-for="i in 5" :key="i" class="w-4 h-4"
                                        :class="i <= 4 ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <span class="text-gray-600 text-sm ml-1">4.0 (24 reviews)</span>
                            </div>
                        </div>
                        <div class="text-2xl font-bold text-primary mb-4">$129.99</div>
                    </div>
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold mb-2 text-gray-700">Specifications</h3>
                        <ul class="text-gray-600 space-y-2">
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Product Type:</span>
                                <span class="font-inter">Electric Kettle</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Material:</span>
                                <span class="font-inter">Stainless Steel</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Voltage:</span>
                                <span class="font-inter">230 Volts</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Wattage:</span>
                                <span class="font-inter">1500 Watts</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Capacity:</span>
                                <span class="font-inter">1.8 liters</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Warranty:</span>
                                <span class="font-inter">3 Month Replacement</span>
                            </li>
                            <li class="flex items-center">
                                <span class="font-semibold font-inter w-32">Delivery Time:</span>
                                <span class="font-inter">Delivery in 72 Hours</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button class="flex-1 py-3 transition-transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                        </Button>
                        <Button variant="destructive" class="flex-1 py-3 transition-transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Place Order
                        </Button>
                    </div>
                    <div class="mt-6 text-sm text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-green-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        In stock and ready to ship
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<style scoped>
.font-inter {
    font-family: 'Inter', sans-serif;
}
</style>
