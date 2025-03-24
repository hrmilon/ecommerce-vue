<script>
export const description = 'A login page with a muted background color.';
</script>

<script setup>
import LoginForm from '@/components/Auth/AuthForm.vue';
import { GalleryVerticalEnd } from 'lucide-vue-next';
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-zinc-100 p-6 md:p-10 dark:bg-zinc-800">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <LoginForm />
    </div>
  </div>
</template>
