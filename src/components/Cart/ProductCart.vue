<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-vue-next'
import { useCartStore } from '@/stores/useCartStore'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
let route = useRouter()

let productId = JSON.parse(localStorage.getItem('ProductsId') || '[]')
let cartStore = useCartStore()
let cartItems = computed(() => cartStore.getCarts)

// Selected items for subtotal
const selectedItems = ref<Record<number, boolean>>({})

// Ensure each item has a valid quantity (default to 1)
onMounted(() => {
    cartStore.cartProducts(productId)
})

// Ensure quantity is always valid when cartItems are updated
watch(cartItems, (items) => {
    items.forEach(item => {
        item.quantity = item.quantity && !isNaN(item.quantity) ? parseInt(item.quantity) : 1
    })
},)

// Compute total of selected items
const selectedTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
        if (selectedItems.value[item.id]) {
            const price = parseFloat(item.price) || 0
            const quantity = parseInt(item.quantity) || 1
            return total + price * quantity
        }
        return total
    }, 0)
})

// Increase quantity
const increaseQuantity = (item) => {
    item.quantity = (parseInt(item.quantity) || 1) + 1
}

// Decrease quantity (min 1)
const decreaseQuantity = (item) => {
    item.quantity = Math.max(1, (parseInt(item.quantity) || 1) - 1)
}

// Remove item
const removeItem = (id) => {
    cartStore.removeFromCart(id)
    delete selectedItems.value[id]
}

const selectedIds = computed(() => 
  Object.keys(selectedItems.value)
    .filter(id => selectedItems.value[id])
    .map(Number)
)

//checkout page 
 let proccedToCheckout = async() => {
    await cartStore.SetProductsCheckout(cartItems, selectedTotal, selectedIds)
    route.push('/checkout')
}
</script>

<template>
    {{ selectedIds }}
    <div class="flex items-center justify-center mt-6 py-10 px-4">
        <Card class="w-full max-w-3xl shadow-lg p-10">
            <CardHeader class="border-b">
                <CardTitle class="text-2xl flex items-center gap-2">
                    <ShoppingBag class="h-6 w-6" />
                    Shopping Cart
                </CardTitle>
            </CardHeader>

            <CardContent class="p-0">
                <div v-if="cartItems.length === 0" class="p-8 text-center">
                    <ShoppingBag class="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 class="text-lg font-medium">Your cart is empty</h3>
                    <p class="text-muted-foreground mt-1">Add some products to see them here.</p>
                </div>

                <div v-else>
                    <div class="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead class="w-[40px]"></TableHead>
                                    <TableHead class="w-[40%]">Product</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Subtotal</TableHead>
                                    <TableHead class="w-[80px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="item in cartItems" :key="item.id">
                                    <TableCell>
                                        <input type="checkbox" v-model="selectedItems[item.id]" />
                                    </TableCell>
                                    <TableCell>
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="h-16 w-16 rounded bg-muted flex items-center justify-center overflow-hidden">
                                                <img :src="item.image || `/placeholder.svg?height=64&width=64&text=${item.name.charAt(0)}`"
                                                    :alt="item.name" class="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <div class="font-medium">{{ item.name }}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>${{ parseFloat(item.price).toFixed(2) }}</TableCell>
                                    <TableCell>
                                        <div class="flex items-center border rounded-md w-[104px]">
                                            <button @click="decreaseQuantity(item)"
                                                class="h-8 w-8 flex items-center justify-center hover:bg-muted">
                                                <Minus class="h-4 w-4" />
                                            </button>
                                            <div class="h-8 w-8 flex items-center justify-center font-medium">
                                                {{ item.quantity }}
                                            </div>
                                            <button @click="increaseQuantity(item)"
                                                class="h-8 w-8 flex items-center justify-center hover:bg-muted">
                                                <Plus class="h-4 w-4" />
                                            </button>
                                        </div>
                                    </TableCell>
                                    <TableCell class="font-medium">
                                        ${{ (parseFloat(item.price) * item.quantity).toFixed(2) }}
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon" @click="removeItem(item.id)"
                                            class="text-destructive hover:text-destructive/90">
                                            <Trash2 class="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div class="p-6 border-t">
                        <div class="flex justify-between mb-2">
                            <span class="text-muted-foreground">Subtotal (Selected)</span>
                            <span class="font-medium">${{ selectedTotal.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between mb-6">
                            <span class="text-muted-foreground">Shipping</span>
                            <span class="font-medium">Calculated at checkout</span>
                        </div>
                        <div class="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${{ selectedTotal.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter class="flex flex-col sm:flex-row justify-between gap-4 p-6 border-t">
                <Button variant="outline" class="w-full sm:w-auto">Continue Shopping</Button>
                <Button @click="proccedToCheckout" class="w-full sm:w-auto" :disabled="selectedTotal === 0">Proceed to
                    Checkout</Button>
            </CardFooter>
        </Card>
    </div>
</template>
