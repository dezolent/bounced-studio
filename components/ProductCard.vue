<template>
  <div class="card group cursor-pointer" @click="navigateToProduct">
    <div class="relative overflow-hidden rounded-lg mb-4">
      <img 
        :src="product.images.edges[0]?.node.url || '/placeholder-product.jpg'"
        :alt="product.title"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      <div class="absolute top-4 right-4">
        <span v-if="isOnSale" class="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          Sale
        </span>
      </div>
    </div>
    
    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
        {{ product.title }}
      </h3>
      
      <p class="text-dark-300 text-sm line-clamp-2">
        {{ product.description }}
      </p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-xl font-bold text-primary-400">
            ${{ minPrice }}
          </span>
          <span v-if="maxPrice !== minPrice" class="text-dark-400">
            - ${{ maxPrice }}
          </span>
        </div>
        
        <button 
          @click.stop="quickAdd"
          class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
        >
          Quick Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const router = useRouter()

const minPrice = computed(() => {
  return parseFloat(props.product.priceRange.minVariantPrice.amount).toFixed(2)
})

const maxPrice = computed(() => {
  return parseFloat(props.product.priceRange.maxVariantPrice.amount).toFixed(2)
})

const isOnSale = computed(() => {
  return props.product.variants.edges.some(variant => 
    variant.node.compareAtPrice && 
    parseFloat(variant.node.compareAtPrice.amount) > parseFloat(variant.node.price.amount)
  )
})

const navigateToProduct = () => {
  router.push(`/products/${props.product.handle}`)
}

const quickAdd = () => {
  const firstVariant = props.product.variants.edges[0]?.node
  if (firstVariant && firstVariant.availableForSale) {
    cartStore.addItem({
      variantId: firstVariant.id,
      productId: props.product.id,
      title: props.product.title,
      price: parseFloat(firstVariant.price.amount),
      image: props.product.images.edges[0]?.node.url,
      variant: firstVariant.title
    })
    
    // Show cart
    const event = new CustomEvent('toggle-cart')
    window.dispatchEvent(event)
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>