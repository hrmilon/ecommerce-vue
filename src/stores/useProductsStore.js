import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsAll: Array
    }
  },
  actions: {
    async apiGetProducts() {
      let products = await apiServices.products.getProuducts();
      this.$state.productsAll = products.data
    }
  },
  getters: {
    getProductsList(state) {
      return state.productsAll;
    }
  }
})