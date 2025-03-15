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

defineProps({
    singleProducts: Array
})
</script>

<template>
    <!-- data showing -->
    <div class="flex justify-center">
        <Card class="p-5">
            <div class="flex">
                <div class="w-1/2">
                    <div>
                        <img loading="lazy" :src="singleProducts.image" class="w-9/12 rounded-md"
                            :alt="singleProducts.name">
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
                        <div>
                            <span class="font-semibold font-inter to-gray-600">Seller:</span>
                            <span class="font-inter font-extralight mx-2">{{ singleProducts.id }}</span>
                        </div>
                    </div>
                    <div>
                        <ul class="text-gray-600">
                            <li><span class="font-semibold font-inter">Product Type:</span> Electric Kettle</li>
                            <li><span class="font-semibold font-inter">Material:</span> Stainless Steel</li>
                            <li><span class="font-semibold font-inter">Voltage:</span> 230 Volts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>