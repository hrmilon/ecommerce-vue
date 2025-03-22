import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useAuthStore = defineStore('auth', {
    state: () => {
        return {
            adminAuth: true,
            sellerAuth: false,
            customerAuth: false,
        }
    },

    actions: {

    },

    getters: {
        isAdminAuthenticated(state) {
            return state.adminAuth
        }
    }
})