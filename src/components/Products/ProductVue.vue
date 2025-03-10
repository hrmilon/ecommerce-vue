<script setup>
import { ref, watch } from 'vue';
let isHovered = ref(false)


let addedToCart = (id) => {
	let arr = JSON.parse(localStorage.getItem("ProductsId")) || [];
	arr.push(id)
	localStorage.setItem("ProductsId", JSON.stringify(arr))
	let local = localStorage.getItem("ProductsId")
	console.log(JSON.parse(local));
}


let addedToFav = () => console.log("Favourite added")
defineProps({
	product: Object
})
</script>

<template>
	<RouterLink to="#" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
		<div class="grid grid-rows-4 w-[210px] h-[260px] cursor-pointer" :class="{ 'shadow-2xl': isHovered }">
			<div class="flex justify-center items-center bg-gray-200 row-span-3 rounded">
				<img v-if="!isHovered" class="rounded" :src="product.image" alt="">
				<div v-else class="text-black font-bold">
					<RouterLink class="flex flex-col" to="#">
						<button @click="addedToCart(product.id)"
							class="bg-blue-700 text-white font-extralight px-2 rounded hover:bg-black cursor-pointer">
							Add to Cart
						</button>
						<button @click="addedToFav"
							class="bg-blue-700 text-white font-extralight px-2 rounded hover:bg-black cursor-pointer">
							Favourite
						</button>
					</RouterLink>
				</div>
			</div>
			<div class="flex flex-col justify-center px-1 font-mono">
				<div class="font-semibold">{{ product.name }}</div>
				<div class="flex gap-x-2">
					<div class="font-light">${{ product.price }}</div>
					<div>⭐⭐⭐⭐</div>
					<div>(326)</div>
				</div>
			</div>
		</div>
	</RouterLink>
</template>
