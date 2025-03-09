import axios from "axios";
import { defineStore } from "pinia";

export let useCartStore = defineStore("cart", {
    state: () => {
        return {
            items: []
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
        }
    },

    getters: {
        getCartList(state) {
            return state.items;
        }
    }

})