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
	<div class="px-4 grid grid-cols-4 gap-2">
		<Card class="w-60 my-2">
			<RouterLink :to="{ name: 'products', params: { id: product.id } }">
				<CardContent class="flex justify-center items-center">
					<div>
						<div class="">
							<img loading="lazy" class="h-[150px] w-[200px] mt-4 rounded-sm" :src="product.image" alt="" srcset="">
						</div>
					</div>
				</CardContent>
				<CardContent>
					<div class="flex flex-col items-center">
						<div class="font-inter font-extralight">{{ product.name }}</div>
						<div class="font-inter font-light">${{ product.price }}</div>
					</div>
				</CardContent>
			</RouterLink>
			<CardFooter class="flex justify-center">
				<Button @click="toastedMsg">
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	</div>

</template>
