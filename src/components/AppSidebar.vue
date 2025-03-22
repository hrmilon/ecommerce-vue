<script setup>
import NavMain from '@/components/Sidebar07/NavMain.vue';
import NavProjects from '@/components/Sidebar07/NavProjects.vue';
import NavUser from '@/components/Sidebar07/NavUser.vue';
import TeamSwitcher from '@/components/Sidebar07/TeamSwitcher.vue';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ShoppingCart,
  LayoutDashboard,
  LayoutDashboardIcon,
  ChartBarStacked,
  Ship,
  Truck,
  Users,
  Component
} from 'lucide-vue-next';

import SidebarGroup from './ui/sidebar/SidebarGroup.vue';
import SidebarGroupLabel from './ui/sidebar/SidebarGroupLabel.vue';
import SidebarGroupContent from './ui/sidebar/SidebarGroupContent.vue';
import SidebarMenu from './ui/sidebar/SidebarMenu.vue';
import SidebarMenuItem from './ui/sidebar/SidebarMenuItem.vue';
import SidebarMenuButton from './ui/sidebar/SidebarMenuButton.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue'

const props = defineProps({
  side: { type: String, required: false },
  variant: { type: String, required: false },
  collapsible: { type: String, required: false, default: 'icon' },
  class: { type: null, required: false },
});

// This is sample data.
const data = {
  user: {
    name: 'steve',
    email: 'steve@example.com',
    avatar: '/avatars/shadcn.jpg',
  }
};

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Products",
    url: "products",
    icon: ShoppingCart,
  },
  {
    title: "Categories",
    url: "categories",
    icon: ChartBarStacked,
  },
  {
    title: "Orders",
    url: "orders",
    icon: Truck,
  },
  {
    title: "Customer",
    url: "#",
    icon: Users,
  },
  {
    title: "Coupon",
    url: "#",
    icon: Component,
  },
];

</script>

<template>
  <Sidebar v-bind="props">

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Adminstrator</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <RouterLink :to="`/admin/${item.url}`"> 
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
