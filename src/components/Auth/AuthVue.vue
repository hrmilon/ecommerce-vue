<script>
export const description = 'A login page with a muted background color.';
</script>

<script setup>
import LoginForm from '@/components/Auth/AuthForm.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { GalleryVerticalEnd } from 'lucide-vue-next';
import { onMounted } from 'vue';
let authStore = useAuthStore()

</script>

<template>
  <div v-if="!authStore.isCustomerAuthenticated" class="flex min-h-svh flex-col items-center justify-center gap-6 bg-zinc-100 p-6 md:p-10 dark:bg-zinc-800">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <LoginForm />
    </div>
  </div>
  <div v-else>
  {{ $router.push("/") }}
  </div>
</template>
