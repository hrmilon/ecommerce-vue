<script setup>
import { ref, watch } from 'vue';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Button from '../ui/button/Button.vue';
import { useToast } from '@/components/ui/toast/use-toast'
import { Heart, ShoppingCart } from 'lucide-vue-next'

const { toast } = useToast()

let isHovered = ref(false)

let addedToCart = (id) => {
	let arr = JSON.parse(localStorage.getItem("ProductsId")) || [];
	arr.push(id)
	localStorage.setItem("ProductsId", JSON.stringify(arr))
	let local = localStorage.getItem("ProductsId")
	console.log(JSON.parse(local));
}

let addedToFav = () => console.log("Favourite added")

const props = defineProps({
	product: Object
})

let toastedMsg = () => {
	toast({
		title: 'Added to cart',
		description: 'Checkout in the cart',
	});
}
</script>

<template>
	<div class="px-4">
		<Card class="w-52 my-4 overflow-hidden transition-all duration-300 hover:shadow-lg relative group"
			@mouseenter="isHovered = true" @mouseleave="isHovered = false">
			<!-- Favorite button overlay -->
			<button @click.prevent="addedToFav"
				class="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/10">
				<Heart class="h-4 w-4 text-primary" />
			</button>

			<RouterLink :to="{ name: 'products', params: { id: product.id } }">
				<div class="overflow-hidden">
					<img loading="lazy"
						class="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						:src="product.image" :alt="product.name">
				</div>

				<CardHeader class="p-4 pb-2">
					<CardTitle class="text-sm font-medium">{{ product.name }}</CardTitle>
					<CardDescription class="font-semibold text-primary text-lg">${{ product.price }}</CardDescription>
				</CardHeader>
			</RouterLink>

			<CardFooter class="p-4 pt-0">
				<Button @click="toastedMsg" class="w-full transition-all duration-300 group-hover:bg-primary/90">
					<ShoppingCart class="h-4 w-4 mr-2" />
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>
