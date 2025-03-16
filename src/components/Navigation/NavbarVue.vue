<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { 
  ShoppingCart, 
  User,
  Home,
  Store,
  LayoutGrid,
  Shield,
  Building
} from 'lucide-vue-next'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

// Cart items count
const cartItemsCount = ref(3)
</script>

<template>
  <header class="bg-white">
    <!-- Top Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="font-bold text-2xl">
        <span class="font-extrabold ml-1">E-Order</span>
      </RouterLink>
      
      <!-- Search Bar -->
      <div class="flex-1 max-w-3xl mx-6">
        <div class="flex">
          <Input 
            type="text" 
            placeholder="Search in E-Order" 
            class="w-full rounded-r-none bg-gray-100 border-0 focus:ring-0"
          />
          <Button class="bg-gray-900 hover:bg-gray-800 text-white px-6 rounded-l-none">
            Search
          </Button>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex items-center gap-6">
        <!-- Cart -->
        <RouterLink to="/cart" class="relative">
          <ShoppingCart class="h-6 w-6" />
          <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {{ cartItemsCount }}
          </span>
        </RouterLink>
        
        <!-- User Account -->
        <RouterLink to="/login" class="flex items-center gap-2">
          <User class="h-6 w-6" />
          <span class="hidden sm:inline">Sign in</span>
        </RouterLink>
      </div>
    </div>
    
    <!-- Secondary Navigation -->
    <div class="border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <!-- Main Navigation Links -->
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <RouterLink to="/" class="flex items-center gap-2 py-3 px-4 hover:text-blue-500 transition-colors">
                    <Home class="h-5 w-5" />
                    <span>Home</span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <RouterLink to="/shops" class="flex items-center gap-2 py-3 px-4 hover:text-blue-500 transition-colors">
                    <Store class="h-5 w-5" />
                    <span>Shops</span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <RouterLink to="/categories" class="flex items-center gap-2 py-3 px-4 hover:text-blue-500 transition-colors">
                    <LayoutGrid class="h-5 w-5" />
                    <span>Categories</span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <!-- Admin/Seller Links -->
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <RouterLink to="/admin" class="flex items-center gap-2 py-3 px-4 text-gray-600 hover:text-blue-500 transition-colors">
                    <Shield class="h-4 w-4" />
                    <span class="text-sm">Admin Login</span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink as-child>
                  <RouterLink to="/seller" class="flex items-center gap-2 py-3 px-4 text-gray-600 hover:text-blue-500 transition-colors">
                    <Building class="h-4 w-4" />
                    <span class="text-sm">Seller Login</span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  </header>
</template>