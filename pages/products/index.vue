<script setup lang="ts">
  // → IMPORTS
  import { ref, watch, computed } from 'vue'
  import { useShopify } from '~/composables/useShopify'  

  const { getProducts } = useShopify()
  
  // Reactive data
  const selectedFilter = ref('all')
  const loadingMore = ref(false)
  const allProducts = ref([])
  const pageInfo = ref(null)
  
  const filters = [
    { label: 'All Products', value: 'all' },
    { label: 'Hoodies', value: 'hoodies' },
    { label: 'T-Shirts', value: 't-shirts' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'New Arrivals', value: 'new' }
  ]
  
  // Fetch initial products
  const { data: productsData, pending, error, refresh } = await useAsyncData(
    'all-products',
    () => getProducts(20)
  )
  
  // Watch for data changes
  watch(productsData, (newData) => {
    if (newData?.products) {
      allProducts.value = newData.products.edges
      pageInfo.value = newData.products.pageInfo
    }
  }, { immediate: true })
  
  // Computed properties
  const filteredProducts = computed(() => {
    if (selectedFilter.value === 'all') {
      return allProducts.value
    }
    
    return allProducts.value.filter(product => {
      const tags = product.node.tags.map(tag => tag.toLowerCase())
      const productType = product.node.productType.toLowerCase()
      
      switch (selectedFilter.value) {
        case 'hoodies':
          return tags.includes('hoodie') || productType.includes('hoodie')
        case 't-shirts':
          return tags.includes('t-shirt') || tags.includes('tshirt') || productType.includes('t-shirt')
        case 'accessories':
          return tags.includes('accessory') || productType.includes('accessory')
        case 'new':
          const thirtyDaysAgo = new Date()
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
          return new Date(product.node.createdAt) > thirtyDaysAgo
        default:
          return true
      }
    })
  })
  
  const hasNextPage = computed(() => {
    return pageInfo.value?.hasNextPage || false
  })
  
  // Methods
  const loadMore = async () => {
    if (!hasNextPage.value || loadingMore.value) return
    
    loadingMore.value = true
    
    try {
      const moreData = await getProducts(20, pageInfo.value.endCursor)
      if (moreData?.products) {
        allProducts.value = [...allProducts.value, ...moreData.products.edges]
        pageInfo.value = moreData.products.pageInfo
      }
    } catch (err) {
      console.error('Failed to load more products:', err)
    } finally {
      loadingMore.value = false
    }
  }
  
  // SEO
  useHead({
    title: 'All Products - Bounced',
    meta: [
      { name: 'description', content: 'Browse our complete collection of premium streetwear for music producers. Find hoodies, t-shirts, accessories and more.' },
      { property: 'og:title', content: 'All Products - Bounced' },
      { property: 'og:description', content: 'Browse our complete collection of premium streetwear for music producers. Find hoodies, t-shirts, accessories and more.' }
    ]
  })
</script>

<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          All <span class="gradient-text">Products</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto">
          Discover our complete collection of premium streetwear designed for music producers
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-8 justify-center">
        <button 
          v-for="filter in filters"
          :key="filter.value"
          @click="selectedFilter = filter.value"
          :class="[
            'px-6 py-2 rounded-full transition-all duration-300',
            selectedFilter === filter.value 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="i in 12" :key="i" class="card animate-pulse">
          <div class="bg-dark-700 h-64 rounded-lg mb-4"></div>
          <div class="space-y-2">
            <div class="bg-dark-700 h-6 rounded w-3/4"></div>
            <div class="bg-dark-700 h-4 rounded w-full"></div>
            <div class="bg-dark-700 h-4 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center text-red-400 py-12">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Failed to load products</h3>
        <p class="text-dark-400 mb-4">Please check your connection and try again</p>
        <button @click="refresh()" class="btn-primary">
          Try Again
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.node.id"
          :product="product.node"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-dark-400 py-12">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">No products found</h3>
        <p class="text-dark-400">Try adjusting your filters or check back later for new arrivals</p>
      </div>

      <!-- Load More -->
      <div v-if="hasNextPage && !pending" class="text-center mt-12">
        <button 
          @click="loadMore"
          :disabled="loadingMore"
          class="btn-primary px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loadingMore">Loading...</span>
          <span v-else>Load More Products</span>
        </button>
      </div>
    </div>
  </div>
</template>