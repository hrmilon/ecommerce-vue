import { apiServices } from "@/services/apiServices";
import axios from "axios";
import { defineStore } from "pinia";

export let useCartStore = defineStore("cart", {
    state: () => {
        return {
            items: [],
            cartFetched: [],
            cartCheckoutDetails: [],
            isSelectedCartItem: []
        }
    },

    actions: {
        async apiPostCart() {
            // let cartItems = localStorage.getItem('ProductsId')
            // let cartFromLocal = JSON.parse(cartItems);
            try {
                let cart = await axios.post('http://localhost:4000/cart', {
                    "items": [1]
                });
                return this.items = cart.data
            } catch (error) {
                console.log(error);

            }
        },

        async cartProducts(ids) {
            try {
                let arr = await Promise.all(
                    ids.map(data => apiServices.products.getProuductsId(data).then(r => r.data))
                );

                // console.log(arr);
                return this.$state.cartFetched = arr;
            } catch (error) {
                console.log(error)
            }
        },

        async SetProductsCheckout(items, totalPrice, selectedItems) {
                   this.$state.isSelectedCartItem = selectedItems;
            return this.$state.cartCheckoutDetails = items;
        }
    },

    getters: {
        getCartList(state) {
            return state.items;
        },

        getCarts(state) {
            return state.cartFetched;
        },

        getCheckoutPage(state) {
           return state.cartCheckoutDetails.filter( el => state.isSelectedCartItem.includes(el.id))
        }
    }

})