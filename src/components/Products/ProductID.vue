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

// let skeleton = ref(true);

// setTimeout(() => {
//     skeleton.value = false
// }, 5000);


</script>

<template>
    <!-- skeleton -->
    <div v-if="productsStore.loading">
        <div class="flex flex-col space-y-3 justify-center">
            <Card class="md:w-[900px] md:h-[400px] md:mx-24 p-10 md:mt-4 flex justify-center items-center gap-x-20">
                <Skeleton class="h-[300px] w-[350px] rounded-xl" />
                <div class="space-y-2">
                    <div class="mb-5 space-y-4">
                        <Skeleton class="h-4 w-[250px]" />
                        <Skeleton class="h-4 w-[200px]" />
                    </div>
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                </div>
            </Card>
        </div>
    </div>

    <!-- data showing -->
    <div v-else class="flex justify-center">
        <Card class="md:w-[900px] md:h-[400px] md:mx-24 p-10 md:mt-4">
            <div class="flex">
                <div class="w-1/2">
                    <div>
                        <img loading="lazy" :src="singleProducts.image" class="w-9/12 rounded-md" :alt="singleProducts.name">
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="pb-4">
                        <div class="font-inter font-bold text-3xl">
                            {{ singleProducts.name }}
                        </div>
                        <div>
                            <span class="font-semibold font-inter to-gray-600">Category:</span>
                            <span class="font-inter font-extralight mx-2">{{ singleProducts.category }}</span>
                        </div>
                    </div>
                    <div>
                        <ul class="text-gray-600">
                            <li><span class="font-semibold font-inter">Product Type:</span> Electric Kettle</li>
                            <li><span class="font-semibold font-inter">Material:</span> Stainless Steel</li>
                            <li><span class="font-semibold font-inter">Voltage:</span> 230 Volts</li>
                            <li><span class="font-semibold font-inter">Wattage:</span> 1500 Watts</li>
                            <li><span class="font-semibold font-inter">Capacity:</span> 1.8 liters</li>
                            <li><span class="font-semibold font-inter">Warranty: </span>3 Month Replacement</li>
                            <li><span class="font-semibold font-inter">Delivery Time:</span> Delivery in 72 Hours</li>
                        </ul>
                    </div>
                    <div class="flex flex-col py-2 gap-y-2">
                        <Button>Add to Cart</Button>
                        <Button variant="destructive">Place Order</Button>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>