<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useShopify } from '~/composables/useShopify'

const { getProducts } = useShopify()
const selectedFilter = ref('all')
const allProducts   = ref([])
const pageInfo      = ref(null)

const { data: productsData, pending, error, refresh } = 
  await useAsyncData('featured-products', () => getProducts(4))

watch(productsData, (d) => {
  if (d?.products) {
    allProducts.value = d.products.edges
    pageInfo.value    = d.products.pageInfo
  }
}, { immediate: true })

// …rest of your computed, methods etc…
</script>
  
<template>
  <!-- render pending / error / grid exactly like on /products -->
</template>
