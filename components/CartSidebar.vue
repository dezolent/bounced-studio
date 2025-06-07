<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
      @click="closeCart"
    ></div>

    <!-- Sidebar -->
    <div 
      :class="[
        'fixed top-0 right-0 h-full w-full max-w-md bg-dark-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-dark-700">
          <h2 class="text-xl font-semibold text-white">Shopping Cart</h2>
          <button 
            @click="closeCart"
            class="text-dark-400 hover:text-white transition-colors duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="cartStore.isEmpty" class="text-center text-dark-400 mt-8">
            <svg class="w-16 h-16 mx-auto mb-4 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9"></path>
            </svg>
            <p class="text-lg">Your cart is empty</p>
            <p class="text-sm mt-2">Add some products to get started</p>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="item in cartStore.items" 
              :key="item.variantId"
              class="flex items-center space-x-4 bg-dark-700 rounded-lg p-4"
            >
              <img 
                v-if="item.image"
                :src="item.image" 
                :alt="item.title"
                class="w-16 h-16 object-cover rounded-lg"
              >
              <div class="flex-1">
                <h3 class="text-white font-medium">{{ item.title }}</h3>
                <p class="text-dark-300 text-sm">{{ item.variant }}</p>
                <p class="text-primary-400 font-semibold">${{ item.price.toFixed(2) }}</p>
              </div>
              <div class="flex items-center space-x-2">
                <button 
                  @click="cartStore.updateQuantity(item.variantId, item.quantity - 1)"
                  class="w-8 h-8 rounded-full bg-dark-600 text-white flex items-center justify-center hover:bg-dark-500 transition-colors duration-300"
                >
                  -
                </button>
                <span class="text-white w-8 text-center">{{ item.quantity }}</span>
                <button 
                  @click="cartStore.updateQuantity(item.variantId, item.quantity + 1)"
                  class="w-8 h-8 rounded-full bg-dark-600 text-white flex items-center justify-center hover:bg-dark-500 transition-colors duration-300"
                >
                  +
                </button>
              </div>
              <button 
                @click="cartStore.removeItem(item.variantId)"
                class="text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="!cartStore.isEmpty" class="border-t border-dark-700 p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold text-white">Total:</span>
            <span class="text-xl font-bold text-primary-400">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <button 
            @click="handleCheckout"
            :disabled="cartStore.isLoading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="cartStore.isLoading">Processing...</span>
            <span v-else>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore()
const isOpen = ref(false)

const openCart = () => {
  isOpen.value = true
}

const closeCart = () => {
  isOpen.value = false
}

const handleCheckout = async () => {
  await cartStore.checkout()
}

// Listen for cart toggle events
onMounted(() => {
  window.addEventListener('toggle-cart', openCart)
})

onUnmounted(() => {
  window.removeEventListener('toggle-cart', openCart)
})
</script>