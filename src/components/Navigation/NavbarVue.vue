<script>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="bg-white text-black py-6 px-5">
    <!-- main container -->
    <div class="flex justify-between h-[24px]">

      <!-- second container -->
      <div class="flex justify-start w-[675px] h-[24px] px-2">
        <div class=" font-black">
          Exclusive
        </div>
        <div class="absolute left-[200px]">
          <ul class="flex gap-x-6 font-light">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>

      <!-- third container -->
      <div class="flex justify-center items-center gap-x-4 w-[347px] h-[24px]">
        <div class="flex justify-center items-center gap-x-4 rounded w-[243px] h-[38px] bg-gray-300/20">
          <div class="self-center text-black/40 font-light">
            What are you looking for?</div>
          <div><img class="" src="@/assets/search.png" alt=""></div>
        </div>
        <div>
          <div><img class="w-[32px] h-[32px]" src="@/assets/Wishlist.png" alt=""></div>
        </div>
        <div>
          <div><img class="w-[32px] h-[32px]" src="@/assets/cart.png" alt=""></div>
        </div>
      </div>

    </div>
  </nav>
  <hr class="h-px bg-gray-200 border-0">
</template>
