<template>
  <section class="py-20 bg-dark-950">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Featured <span class="gradient-text">Products</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover our latest drops designed specifically for the music production community
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="card animate-pulse">
          <div class="bg-dark-800 h-64 rounded-lg mb-4"></div>
          <div class="space-y-2">
            <div class="bg-dark-800 h-6 rounded w-3/4"></div>
            <div class="bg-dark-800 h-4 rounded w-full"></div>
            <div class="bg-dark-800 h-4 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="hasError" class="text-center text-red-400">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-lg mb-4">Failed to load products. Please try again later.</p>
        <button @click="loadProducts" class="btn-primary">
          Try Again
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else-if="products && products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          v-for="product in products" 
          :key="product.node.id"
          :product="product.node"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-gray-500">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <p class="text-lg">No products available at the moment.</p>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/products" class="btn-primary text-lg px-8 py-4">
          View All Products
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getProducts } = useShopify()

// Reactive state
const products = ref([])
const isLoading = ref(true)
const hasError = ref(false)

// Load products function
const loadProducts = async () => {
  isLoading.value = true
  hasError.value = false
  
  try {
    const result = await getProducts(6)
    if (result?.products?.edges) {
      products.value = result.products.edges
    } else {
      products.value = []
    }
  } catch (err) {
    console.error('Failed to fetch featured products:', err)
    hasError.value = true
    products.value = []
  } finally {
    isLoading.value = false
  }
}

// Load products on mount
onMounted(() => {
  loadProducts()
})
</script>