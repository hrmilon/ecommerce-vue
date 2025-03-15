<script setup>
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import { useAdminStore } from '@/stores/useAdminStore';
import { computed, onMounted, reactive, ref } from 'vue';
import Button from '../ui/button/Button.vue';
import ProductDialog from './ProductDialog.vue';

let adminStore = useAdminStore()
let pendingProducts = computed(() => adminStore.getPending)

let actionStates = reactive({})

let approved = (id) => {
    adminStore.adminApproval(id);
    actionStates[id] = true;
};

onMounted(() => {
    adminStore.adminPendings()
})

</script>

<template>
    <Table class="w-11/12 ml-8">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>
                    ID
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>
                    Category
                </TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="product in pendingProducts" :key="product.id">
                <TableCell class="font-medium">
                    {{ product.id }}
                </TableCell>
                <TableCell>{{ product.name }}</TableCell>
                <TableCell>{{ product.price }}</TableCell>
                <TableCell>
                    {{ product.category }}
                </TableCell>

                <!-- action -->
                <TableCell>
                    <Dialog v-if="!actionStates[product.id]">
                        <DialogTrigger>
                            <Button>Action</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <ProductDialog :single-products="product" />
                            <DialogFooter>
                                <Button variant="destructive">Delete</Button>
                                <Button @click="approved(product.id)">Approve</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <!-- <Dialog v-else> -->
                    <Button v-else disabled class="bg-green-600 w-[71px] p-2">Approved</Button>
                    <!-- </Dialog> -->
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>