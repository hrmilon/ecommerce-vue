import axios from "axios";
const apiUrl = import.meta.env.VITE_LARAVEL_BACKEND_API;

class ApiServices {

    axiosInstance = axios.create({
        baseURL: apiUrl
    })

    constructor() {
        this.axiosInstance.interceptors.request.use(function (config) {
            // const token = localStorage.getItem('token');
            // if (!token) {
            //     return config;
            // }

            // hard coded token
            let token = "1|oxsuNsJbIWIE8qCmx0x4x9PbRyXRNJn3LfZAVu5u52c6b03b"
            // console.log(token);
            config.headers.Authorization = `Bearer ${token}`;
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
        login: (payload) => this.axiosInstance.post('/api/login', payload),
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