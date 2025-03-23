    <script setup lang="ts">
    import { ref, computed } from 'vue'
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'
    import { CreditCard, Package } from 'lucide-vue-next'
    import { useCartStore } from '@/stores/useCartStore'

    let cartStore = useCartStore()
    let cartItems = computed(() => cartStore.getCheckoutPage)
    // Assume cart data is passed from previous page
    // const cartItems = ref([
    //     { id: 1, name: 'Basic T-Shirt', price: 19.99, quantity: 2 },
    //     { id: 2, name: 'Premium Hoodie', price: 49.99, quantity: 1 },
    //     { id: 3, name: 'Denim Jeans', price: 39.99, quantity: 1 },
    // ])

    // Address form data
    const address = ref({
        name: '',
        street: '',
        city: '',
        zip: '',
        country: ''
    })

    // Computed properties
    const subtotal = computed(() =>
        cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    )

    const shipping = 5.99
    const total = computed(() => subtotal.value + shipping)

    const placeOrder = () => {
        alert('Order placed successfully!')
    }
</script>

    <template>
        <div class="max-w-3xl mx-auto p-4 grid gap-4 md:grid-cols-2">
            <!-- Address Card -->
            <Card>
                <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                    <CardDescription>Enter your shipping details</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4">
                    <div class="space-y-2">
                        <Label for="name">Full Name</Label>
                        <Input id="name" v-model="address.name" placeholder="John Doe" />
                    </div>
                    <div class="space-y-2">
                        <Label for="street">Street Address</Label>
                        <Input id="street" v-model="address.street" placeholder="123 Main St" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <Label for="city">City</Label>
                            <Input id="city" v-model="address.city" placeholder="New York" />
                        </div>
                        <div class="space-y-2">
                            <Label for="zip">ZIP Code</Label>
                            <Input id="zip" v-model="address.zip" placeholder="10001" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <Label for="country">Country</Label>
                        <Input id="country" v-model="address.country" placeholder="United States" />
                    </div>
                </CardContent>
            </Card>

            <!-- Order Summary Card -->
            <div class="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                        <CardDescription>Review your items</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul class="space-y-3">
                            <li v-for="item in cartItems" :key="item.id" class="flex justify-between border-b pb-2">
                                <div>
                                    <div class="font-medium">{{ item.name }}</div>
                                    <div class="text-sm text-gray-500">Qty: {{ item.quantity }}</div>
                                </div>
                                <div class="font-medium">${{ (item.price * item.quantity).toFixed(2) }}</div>
                            </li>
                        </ul>

                        <div class="mt-4 space-y-2">
                            <div class="flex justify-between">
                                <span>Subtotal</span>
                                <span>${{ subtotal.toFixed(2) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Shipping</span>
                                <span>${{ shipping.toFixed(2) }}</span>
                            </div>
                            <div class="flex justify-between font-bold pt-2 border-t">
                                <span>Total</span>
                                <span>${{ total.toFixed(2) }}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-center justify-center p-4 border rounded-md bg-gray-50">
                            <CreditCard class="mr-2 h-5 w-5" />
                            <span>Payment details will be collected next</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button class="w-full" @click="placeOrder">
                            <Package class="mr-2 h-4 w-4" />
                            Place Order
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </template>