import axios from "axios";
const apiUrl = import.meta.env.VITE_LARAVEL_BACKEND_API;

class ApiServices {

    axiosInstance = axios.create({
        baseURL: apiUrl
    })

    constructor() {
        this.axiosInstance.interceptors.request.use(function (config) {
            // const token = localStorage.getItem('customerToken');
            // if (!customerToken) {
            //     return config;
            // }
            // config.headers.Authorization = `Bearer ${customerToken}`;

            // hard coded token
            // let token = "1|oxsuNsJbIWIE8qCmx0x4x9PbRyXRNJn3LfZAVu5u52c6b03b"
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        //error response
        this.axiosInstance.interceptors.response.use(function (response) {
            // console.log(response.data.errors);
            return response.data;
        }, function (error) {
            return Promise.reject(error.response.data);
        });
    }

    // test apiService
    test = {
        get: async () => {
            return await this.axiosInstance.get('/2')
        }
    }

    //authentication
    auth = {
        customerLogin: (payload) => this.axiosInstance.post('/api/auth/customer/login', payload, {
            headers: { "Content-Type": "multipart/form-data" }
        }),

        logout: () => this.axiosInstance.post('/auth/logout'),
    }

    //app api
    products = {
        getProuducts: (page) => this.axiosInstance.get('/api/products'),
        getProuductsId: (id) => this.axiosInstance.get('/api/products/' + id),
        adminPendingProducts: () => this.axiosInstance.get('/api/admin/pending'),
        adminApproveProducts: (id) => this.axiosInstance.post('api/admin/approve/' + id),
    }
}

export const apiServices = new ApiServices();