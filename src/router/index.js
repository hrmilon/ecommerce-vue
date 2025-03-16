import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import ProductID from '@/components/Products/ProductID.vue'
import NotFoundVue from '@/components/NotFoundVue.vue'
import ApprovedProducts from '@/components/Admin/ApprovedProducts.vue'
import Dashbord from '@/components/Admin/Dashbord.vue'
import DashbordProducts from '@/components/Admin/DashbordProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products/:id',
      name: 'products',
      component: ProductID
    },


    {
      path: '/admin',
      name: 'admin',
      component: Dashbord,
      meta: { layout: 'admin' },
      children: [
        {
          path: 'products', component: DashbordProducts,
          meta: { layout: 'admin' }
        },
        {
          path: 'orders', component: ApprovedProducts,
          meta: { layout: 'admin' }
        },
      ],
    },


    {
      path: '/components',
      name: 'components',
      component: ComponentsView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundVue
    }

  ],
})

export default router
