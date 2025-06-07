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
  () => getProducts(4)
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
  <div v-if="pending">… your loading UI …</div>
  <div v-else-if="error">… your error UI …</div>
  <div v-else class="grid …">
    <ProductCard
      v-for="p in allProducts"
      :key="p.node.id"
      :product="p.node"
    />
  </div>
</template>
