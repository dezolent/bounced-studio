<!-- /components/FeaturedProducts.vue -->
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useShopify } from '~/composables/useShopify'

const { getProducts } = useShopify()
const allProducts  = ref([])
const pageInfo     = ref(null)

// IMPORTANT: useAsyncData so it SSRs
const { data, pending, error, refresh } = await useAsyncData(
  'featured-products',
  () => getProducts(6)
)

watch(data, (d) => {
  if (d?.products) {
    allProducts.value = d.products.edges
    pageInfo.value    = d.products.pageInfo
  }
}, { immediate: true })

const hasNextPage = computed(() => pageInfo.value?.hasNextPage)
</script>

<template>
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
  <div v-else class="grid …">
    <ProductCard
      v-for="p in allProducts"
      :key="p.node.id"
      :product="p.node"
    />
  </div>
</template>
