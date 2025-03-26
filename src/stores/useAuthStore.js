import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useAuthStore = defineStore('auth', {
    state: () => {
        return {
            adminAuth: true,
            sellerAuth: false,
            // customerAuth: false,
            token: localStorage.getItem('customerToken') || null,
            customerAuthError: []
        }
    },

    actions: {
        async customerLogin(payload) {
            try {
                let login = await apiServices.auth.customerLogin(payload)
                if (login.data) {
                    localStorage.setItem('customerToken', login.data.token)
                    return this.token = login.data.token;
                    // console.log(login.data.token)
                    // this.customerAuth = true
                } else {
                    throw new Error("Credentials Error has occured")
                }

            } catch (error) {
                console.log(error)
                return this.$state.customerAuthError = error
            }
        }
    },

    getters: {
        isAdminAuthenticated(state) {
            return state.adminAuth
        },

        isCustomerAuthenticated(state) {
            return state.token || null;
        },

        doesCustomerAuthHasError(state) {
            return state.customerAuthError;
        },
    }
})