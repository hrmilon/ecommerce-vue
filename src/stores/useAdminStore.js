import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useAdminStore = defineStore("products", {
  state: () => {
    return {
      pending: [],
      singleProduct: [],
      loading: false
    }
  },
  actions: {
    async adminPendings() {
      try {
        this.loading = true
        let products = await apiServices.products.adminPendingProducts();
        return this.$state.pending = products.data
      }
      catch (error) {
        return error;
      } finally {
        this.loading = false;
      }
    },

    async adminApproval(id) {
      try {
        this.loading = true
        let product = await apiServices.products.adminApproveProducts(id);
        return this.$state.singleProduct = product.data
      } catch (error) {
        return error;
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getPending(state) {
      return state.pending;
    },

    getProductsId(state) {
      return state.singleProduct;
    }
  }
})