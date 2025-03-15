<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { RouterLink } from 'vue-router';
import SearchVue from './SearchVue.vue';
import { ShoppingCart, LogIn, Menu } from 'lucide-vue-next';

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>

  <div>

  </div>

  <div class="flex justify-center items-center py-3">
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem class="mr-32">
          <NavigationMenuLink>
            <RouterLink class="flex justify-center items-center" to="/">
              <div class="font-extrabold italic">
                E-Order
              </div>
            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            <!-- <RouterLink to="#">Products</RouterLink> -->
            <SearchVue />
          </NavigationMenuLink>
        </NavigationMenuItem>

        <!-- category -->
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <RouterLink :to="component.href"
                    class=" block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </RouterLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            <RouterLink to="#">Products</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            <RouterLink to="cart">
              <ShoppingCart class="size-6 text-muted-foreground" />
            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            <RouterLink to="login">
              <div class="flex gap-x-2">
                <div>
                  <LogIn class="size-6 text-muted-foreground" />
                </div>
                <div>Sign In</div>
              </div>

            </RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger></NavigationMenuTrigger>
          <NavigationMenuContent>

            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] divide-x-2">
              <li>
                <NavigationMenuLink as-child>
                  <RouterLink to="admin"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Admin Login</div>
                  </RouterLink>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <RouterLink to="admin"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Seller Login</div>
                  </RouterLink>
                </NavigationMenuLink>
              </li>
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </div>

</template>