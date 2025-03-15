<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
    <div v-if="$route.matched.length == 1">
        Welcome from Dashboard
    </div>
    <RouterView />
</template>