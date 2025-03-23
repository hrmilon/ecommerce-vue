<template>
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="container px-4 py-10 md:py-16 mx-auto">
        <!-- Newsletter Section -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">Stay updated</h2>
            <p class="text-gray-500 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive deals, new arrivals, and more.
            </p>
            <div class="flex w-full max-w-md gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              />
              <button 
                type="submit" 
                class="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="font-semibold mb-4 text-gray-900 dark:text-white">Payment Methods</h3>
            <div class="flex gap-3 flex-wrap">
              <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <CreditCard class="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <DollarSign class="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Bitcoin class="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="w-full h-px bg-gray-200 dark:bg-gray-800 mb-10"></div>
  
        <!-- Main Footer Links -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h2 class="font-semibold text-sm uppercase mb-6 text-gray-900 dark:text-white">Company</h2>
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Brand Center
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold text-sm uppercase mb-6 text-gray-900 dark:text-white">Help Center</h2>
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold text-sm uppercase mb-6 text-gray-900 dark:text-white">Legal</h2>
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold text-sm uppercase mb-6 text-gray-900 dark:text-white">Download</h2>
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
                  <Smartphone class="h-4 w-4" />
                  iOS App
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
                  <Smartphone class="h-4 w-4" />
                  Android App
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
                  <Laptop class="h-4 w-4" />
                  Windows
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
                  <Laptop class="h-4 w-4" />
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Bottom Section -->
        <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2">
              <ShoppingBag class="h-5 w-5 text-gray-900 dark:text-white" />
              <span class="font-semibold text-gray-900 dark:text-white">E-Order</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              © {{ new Date().getFullYear() }} E-Order. All Rights Reserved.
            </p>
            <div class="flex space-x-5">
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Facebook class="h-5 w-5" />
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Twitter class="h-5 w-5" />
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Instagram class="h-5 w-5" />
                <span class="sr-only">Instagram page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github class="h-5 w-5" />
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin class="h-5 w-5" />
                <span class="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Github, 
    Linkedin, 
    CreditCard, 
    DollarSign, 
    Bitcoin, 
    Smartphone, 
    Laptop, 
    ShoppingBag 
  } from 'lucide-vue-next'
  </script>
  
  