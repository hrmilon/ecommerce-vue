import axios from "axios";
import { apiServices } from "@/services/apiServices";
import { defineStore } from "pinia";

export let useAuthStore = defineStore('auth', {
    state: () => {
        return {
            adminAuth: true,
            sellerAuth: false,
            customerAuth: false,

            customerAuthError: []
        }
    },

    actions: {
        async customerLogin(payload) {
            try {
                let login = await apiServices.auth.customerLogin(payload)
                if (login.data) {
                    console.log(login)
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
            return state.customerAuth;
        },

        doesCustomerAuthHasError(state) {
            return state.customerAuthError;
        }
    }
})