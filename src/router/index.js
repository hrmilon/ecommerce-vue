import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductID from '@/components/Products/ProductID.vue'
import NotFoundVue from '@/components/NotFoundVue.vue'
import Dashbord from '@/components/Admin/Dashbord.vue'
import DashbordProducts from '@/components/Admin/DashbordProducts.vue'
import AuthVue from '@/components/Auth/AuthVue.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { handleAuthNavigation } from './middleware/auth'
import Orders from '@/components/Admin/Orders.vue'
import ProductCart from '../components/Cart/ProductCart.vue'
import CheckoutCart from '@/components/Cart/CheckoutCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { public: true }
    },
    {
      path: '/products/:id',
      name: 'products',
      component: ProductID,
      meta: { public: true }
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthVue,
      meta: { public: true },
      children: [
        {
          path: 'admin',
          component: () => import('@/components/Auth/AuthVue.vue'),
        },
        {
          path: 'seller',
          component: () => import('@/components/Auth/AuthVue.vue'),
        },
        {
          path: 'login',
          name: 'customer-login',
          component: () => import('@/components/Auth/AuthVue.vue'),
        }
      ]
    },

    {
      path: '/admin',
      name: 'admin',
      component: Dashbord,
      meta: {
        layout: 'admin',
      },
      children: [
        {
          path: 'products', component: DashbordProducts,
          meta: { layout: 'admin' }
        },
        {
          path: 'orders', component: Orders,
          meta: { layout: 'admin' }
        },
      ],
    },


    {
      path: '/cart',
      name: 'cart',
      component: ProductCart,
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutCart
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundVue
    }

  ],
})

router.beforeEach(async (to, from) => {
  const auth = useAuthStore()
  return handleAuthNavigation(to, auth)
})

export default router
