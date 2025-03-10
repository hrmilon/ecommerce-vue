import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { apiServices } from './services/apiServices'


const app = createApp(App)

app.provide('ApiServices', apiServices)
app.use(createPinia())
app.use(router)


app.mount('#app')

//checking api response
// apiServices.products.getProuducts()
// .then(r => console.log(r.data))