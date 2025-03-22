<script setup>
import { ref } from 'vue';
import {
    Search as SearchIcon,
    Bell as BellIcon,
    DollarSign as DollarSignIcon,
    ShoppingCart as ShoppingCartIcon,
    CreditCard as CreditCardIcon,
    Users as UsersIcon,
    BarChart as BarChartIcon,
    PieChart as PieChartIcon,
    Eye as EyeIcon,
    Edit as EditIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { RouterView } from 'vue-router';

</script>

<template>
    <div v-if="$route.matched.length == 1">
        <div class="p-6 space-y-6">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold tracking-tight">Dashboard</h1>
                <div class="flex items-center gap-4">
                    <Input placeholder="Search..." class="w-[200px]">
                    <template #prefix>
                        <SearchIcon class="h-4 w-4 text-muted-foreground" />
                    </template>
                    </Input>
                    <Button>
                        <BellIcon class="h-4 w-4 mr-2" />
                        Notifications
                    </Button>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div class="flex items-center">
                            <DollarSignIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle class="text-sm font-medium">Total Revenue</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">$45,231.89</div>
                        <p class="text-xs text-muted-foreground">
                            <span class="text-emerald-500 font-medium">+20.1%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div class="flex items-center">
                            <ShoppingCartIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle class="text-sm font-medium">New Orders</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">+12,234</div>
                        <p class="text-xs text-muted-foreground">
                            <span class="text-emerald-500 font-medium">+19%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div class="flex items-center">
                            <CreditCardIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle class="text-sm font-medium">Sales</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">+573</div>
                        <p class="text-xs text-muted-foreground">
                            <span class="text-rose-500 font-medium">-2%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div class="flex items-center">
                            <UsersIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle class="text-sm font-medium">Active Customers</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">+2350</div>
                        <p class="text-xs text-muted-foreground">
                            <span class="text-emerald-500 font-medium">+180</span> new customers
                        </p>
                    </CardContent>
                </Card>
            </div>

            <!-- Charts Section -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card class="md:col-span-4">
                    <CardHeader>
                        <div class="flex items-center">
                            <BarChartIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle>Revenue Over Time</CardTitle>
                        </div>
                        <CardDescription>Monthly revenue for the current year</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                            <BarChartIcon class="h-16 w-16 text-muted-foreground/50" />
                        </div>
                    </CardContent>
                </Card>

                <Card class="md:col-span-3">
                    <CardHeader>
                        <div class="flex items-center">
                            <PieChartIcon class="h-4 w-4 text-muted-foreground mr-2" />
                            <CardTitle>Sales by Category</CardTitle>
                        </div>
                        <CardDescription>Distribution of sales by product category</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                            <PieChartIcon class="h-16 w-16 text-muted-foreground/50" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
    <RouterView />
</template>
