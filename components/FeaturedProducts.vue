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
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div v-else-if="error" class="text-center text-red-400">
        <p>Failed to load products. Please try again later.</p>
        <button @click="refresh()" class="btn-primary mt-4">
          Try Again
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else-if="featuredProducts && featuredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          v-for="product in featuredProducts" 
          :key="product.node.id"
          :product="product.node"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-gray-500">
        <p>No products available at the moment.</p>
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

// Fetch featured products with better error handling
const { data: productsData, pending, error, refresh } = await useLazyAsyncData('featured-products', async () => {
  try {
    const result = await getProducts(6)
    return result
  } catch (err) {
    console.error('Failed to fetch featured products:', err)
    throw err
  }
})

const featuredProducts = computed(() => {
  if (!productsData.value?.products?.edges) {
    return []
  }
  return productsData.value.products.edges
})
</script>