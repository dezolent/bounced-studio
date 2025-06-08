<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-custom border-b border-dark-800">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="hover:scale-105 transition-transform duration-300">
          <img 
            src="/bounced-text-blue-750px-width.png" 
            alt="Bounced" 
            class="h-8 w-auto"
          >
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-100 hover:text-primary-400 transition-colors duration-300">
            Home
          </NuxtLink>
          <NuxtLink to="/products" class="text-gray-100 hover:text-primary-400 transition-colors duration-300">
            Products
          </NuxtLink>
<!--          <NuxtLink to="https://app.bounced.studio" class="text-gray-100 hover:text-primary-400 transition-colors duration-300">-->
<!--            Bounced Studio App-->
<!--          </NuxtLink>-->
          <NuxtLink to="/about" class="text-gray-100 hover:text-primary-400 transition-colors duration-300">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-100 hover:text-primary-400 transition-colors duration-300">
            Contact
          </NuxtLink>
        </div>

        <!-- Cart & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Cart Button -->
          <button 
            @click="toggleCart"
            class="relative p-2 text-gray-100 hover:text-primary-400 transition-colors duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9"></path>
            </svg>
            <ClientOnly>
              <span 
                v-if="cartStore.itemCount > 0"
                class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartStore.itemCount }}
              </span>
            </ClientOnly>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-100 hover:text-primary-400 transition-colors duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden mt-4 pb-4 border-t border-dark-800 pt-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/" class="text-gray-100 hover:text-primary-400 transition-colors duration-300" @click="closeMobileMenu">
            Home
          </NuxtLink>
          <NuxtLink to="/products" class="text-gray-100 hover:text-primary-400 transition-colors duration-300" @click="closeMobileMenu">
            Products
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-100 hover:text-primary-400 transition-colors duration-300" @click="closeMobileMenu">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-100 hover:text-primary-400 transition-colors duration-300" @click="closeMobileMenu">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const cartStore = useCartStore()
const showMobileMenu = ref(false)

const toggleCart = () => {
  // This will be handled by the CartSidebar component
  const event = new CustomEvent('toggle-cart')
  window.dispatchEvent(event)
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>
