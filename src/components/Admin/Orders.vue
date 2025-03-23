<script setup>
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon, EditIcon, EyeIcon, ShoppingCartIcon } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';

const recentOrders = ref([
    {
        id: '1234',
        customer: 'John Smith',
        status: 'Completed',
        date: 'Mar 22, 2025',
        amount: 125.99
    },
    {
        id: '1235',
        customer: 'Sarah Johnson',
        status: 'Processing',
        date: 'Mar 21, 2025',
        amount: 243.50
    },
    {
        id: '1236',
        customer: 'Michael Brown',
        status: 'Pending',
        date: 'Mar 21, 2025',
        amount: 89.99
    },
    {
        id: '1237',
        customer: 'Emily Davis',
        status: 'Shipped',
        date: 'Mar 20, 2025',
        amount: 175.25
    },
    {
        id: '1238',
        customer: 'Robert Wilson',
        status: 'Cancelled',
        date: 'Mar 19, 2025',
        amount: 349.99
    }
]);

const getStatusVariant = (status) => {
    switch (status) {
        case 'Completed':
            return 'success';
        case 'Processing':
            return 'default';
        case 'Pending':
            return 'warning';
        case 'Shipped':
            return 'secondary';
        case 'Cancelled':
            return 'destructive';
        default:
            return 'outline';
    }
};
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center">
                <ShoppingCartIcon class="h-4 w-4 text-muted-foreground mr-2" />
                <CardTitle>Recent Orders</CardTitle>
            </div>
            <CardDescription>Latest customer orders</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="order in recentOrders" :key="order.id">
                        <TableCell class="font-medium">#{{ order.id }}</TableCell>
                        <TableCell>{{ order.customer }}</TableCell>
                        <TableCell>
                            <Badge :variant="getStatusVariant(order.status)">
                                {{ order.status }}
                            </Badge>
                        </TableCell>
                        <TableCell>{{ order.date }}</TableCell>
                        <TableCell>${{ order.amount.toFixed(2) }}</TableCell>
                        <TableCell>
                            <div class="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <EyeIcon class="h-4 w-4" />
                                    <span class="sr-only">View</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <EditIcon class="h-4 w-4" />
                                    <span class="sr-only">Edit</span>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
        <CardFooter class="flex justify-end space-x-2 mr-16">
            <Button variant="outline" size="sm">
                <ChevronLeftIcon class="h-4 w-4 mr-1" />
                Previous
            </Button>
            <Button variant="outline" size="sm">
                <ChevronRightIcon class="h-4 w-4 mr-1" />
                Next
            </Button>
        </CardFooter>
    </Card>
</template>