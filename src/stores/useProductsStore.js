import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsAll: Array,
      singleProduct: Array,
      loading: false
    }
  },
  actions: {
    async apiGetProducts() {
      try {
        this.loading = true
        let products = await apiServices.products.getProuducts();
        return this.$state.productsAll = products.data
      }
      catch (error) {
        return error;
      } finally {
        this.loading = false;
      }
    },

    async apiGetProductsId(id) {
      try {
        this.loading = true
        let product = await apiServices.products.getProuductsId(id);
        return this.$state.singleProduct = product.data
      } catch (error) {
        return error;
      } finally {
        this.loading = false;
      }

    }
  },
  getters: {
    getProductsList(state) {
      return state.productsAll;
    },

    getProductsId(state) {
      return state.singleProduct;
    }
  }
})