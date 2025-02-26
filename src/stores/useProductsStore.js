import axios from "axios";
import { defineStore } from "pinia";

export let useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsAll: []
    }
  },
  actions: {
    async apiGetProducts() {
      let products = await axios.get('http://localhost:4000/products');
      this.$state.productsAll = products.data
    }
  },
  getters: {
    getProductsList(state) {
      return state.productsAll;
    }
  }
})