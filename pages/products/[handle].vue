<template>
  <div class="min-h-screen pt-24 pb-12">
    <div v-if="pending" class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
        <div class="space-y-4">
          <div class="bg-dark-700 h-96 rounded-lg"></div>
          <div class="grid grid-cols-4 gap-2">
            <div v-for="i in 4" :key="i" class="bg-dark-700 h-20 rounded-lg"></div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-dark-700 h-8 rounded w-3/4"></div>
          <div class="bg-dark-700 h-6 rounded w-1/2"></div>
          <div class="space-y-2">
            <div class="bg-dark-700 h-4 rounded"></div>
            <div class="bg-dark-700 h-4 rounded"></div>
            <div class="bg-dark-700 h-4 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="error" class="container mx-auto px-4 text-center py-12">
      <svg class="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h1 class="text-2xl font-bold text-white mb-2">Product Not Found</h1>
      <p class="text-dark-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
      <NuxtLink to="/products" class="btn-primary">
        Browse All Products
      </NuxtLink>
    </div>

    <div v-else-if="product" class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-dark-400">
          <li><NuxtLink to="/" class="hover:text-primary-400 transition-colors duration-300">Home</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li><NuxtLink to="/products" class="hover:text-primary-400 transition-colors duration-300">Products</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-white">{{ product.title }}</li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="relative overflow-hidden rounded-lg bg-dark-800">
            <img 
              :src="selectedImage?.url || product.images.edges[0]?.node.url"
              :alt="selectedImage?.altText || product.title"
              class="w-full h-96 lg:h-[600px] object-cover"
            >
          </div>
          
          <!-- Thumbnail Images -->
          <div v-if="product.images.edges.length > 1" class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, index) in product.images.edges"
              :key="image.node.id"
              @click="selectedImage = image.node"
              :class="[
                'relative overflow-hidden rounded-lg border-2 transition-all duration-300',
                selectedImage?.id === image.node.id || (!selectedImage && index === 0)
                  ? 'border-primary-500'
                  : 'border-dark-700 hover:border-dark-600'
              ]"
            >
              <img 
                :src="image.node.url"
                :alt="image.node.altText"
                class="w-full h-20 object-cover"
              >
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold text-white mb-2">{{ product.title }}</h1>
            <div class="flex items-center space-x-4">
              <span class="text-2xl font-bold text-primary-400">
                ${{ selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount }}
              </span>
              <span 
                v-if="selectedVariant?.compareAtPrice"
                class="text-lg text-dark-400 line-through"
              >
                ${{ selectedVariant.compareAtPrice.amount }}
              </span>
              <span 
                v-if="selectedVariant?.compareAtPrice"
                class="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold"
              >
                Sale
              </span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="prose prose-invert max-w-none">
            <div v-html="product.descriptionHtml"></div>
          </div>

          <!-- Product Options -->
          <div v-if="product.options.length > 0" class="space-y-4">
            <div v-for="option in product.options" :key="option.id">
              <label class="block text-sm font-medium text-white mb-2">
                {{ option.name }}
              </label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="value in option.values"
                  :key="value"
                  @click="updateSelectedOptions(option.name, value)"
                  :class="[
                    'px-4 py-2 border rounded-lg transition-all duration-300',
                    selectedOptions[option.name] === value
                      ? 'border-primary-500 bg-primary-500 text-white'
                      : 'border-dark-600 bg-dark-800 text-dark-300 hover:border-dark-500 hover:text-white'
                  ]"
                >
                  {{ value }}
                </button>
              </div>
            </div>
          </div>

          <!-- Quantity Selector -->
          <div>
            <label class="block text-sm font-medium text-white mb-2">Quantity</label>
            <div class="flex items-center space-x-4">
              <div class="flex items-center border border-dark-600 rounded-lg">
                <button 
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="px-3 py-2 text-white hover:bg-dark-700 transition-colors duration-300"
                >
                  -
                </button>
                <span class="px-4 py-2 text-white border-x border-dark-600">{{ quantity }}</span>
                <button 
                  @click="quantity++"
                  class="px-3 py-2 text-white hover:bg-dark-700 transition-colors duration-300"
                >
                  +
                </button>
              </div>
              <span v-if="selectedVariant?.quantityAvailable" class="text-sm text-dark-400">
                {{ selectedVariant.quantityAvailable }} available
              </span>
            </div>
          </div>

          <!-- Add to Cart -->
          <div class="space-y-4">
            <button 
              @click="addToCart"
              :disabled="!selectedVariant?.availableForSale || isAddingToCart"
              class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isAddingToCart">Adding to Cart...</span>
              <span v-else-if="!selectedVariant?.availableForSale">Out of Stock</span>
              <span v-else>Add to Cart - ${{ (parseFloat(selectedVariant?.price.amount || 0) * quantity).toFixed(2) }}</span>
            </button>
            
            <button 
              @click="buyNow"
              :disabled="!selectedVariant?.availableForSale || isAddingToCart"
              class="w-full btn-secondary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          <!-- Product Meta -->
          <div class="border-t border-dark-700 pt-6 space-y-2">
            <p class="text-sm text-dark-400">
              <span class="font-medium">SKU:</span> {{ selectedVariant?.id?.split('/').pop() }}
            </p>
            <p class="text-sm text-dark-400">
              <span class="font-medium">Vendor:</span> {{ product.vendor }}
            </p>
            <p class="text-sm text-dark-400">
              <span class="font-medium">Type:</span> {{ product.productType }}
            </p>
            <div v-if="product.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
              <span 
                v-for="tag in product.tags" 
                :key="tag"
                class="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const cartStore = useCartStore()
const { getProduct } = useShopify()

// Reactive data
const selectedImage = ref(null)
const selectedOptions = ref({})
const quantity = ref(1)
const isAddingToCart = ref(false)

// Fetch product data
const { data: productData, pending, error } = await useLazyAsyncData(`product-${route.params.handle}`, () => 
  getProduct(route.params.handle)
)

const product = computed(() => productData.value?.product)

// Initialize selected options with first available variant
watch(product, (newProduct) => {
  if (newProduct && newProduct.options.length > 0) {
    const firstVariant = newProduct.variants.edges[0]?.node
    if (firstVariant) {
      firstVariant.selectedOptions.forEach(option => {
        selectedOptions.value[option.name] = option.value
      })
    }
  }
}, { immediate: true })

// Find selected variant based on selected options
const selectedVariant = computed(() => {
  if (!product.value) return null
  
  return product.value.variants.edges.find(variant => {
    return variant.node.selectedOptions.every(option => 
      selectedOptions.value[option.name] === option.value
    )
  })?.node
})

// Methods
const updateSelectedOptions = (optionName, value) => {
  selectedOptions.value[optionName] = value
}

const addToCart = async () => {
  if (!selectedVariant.value || !selectedVariant.value.availableForSale) return
  
  isAddingToCart.value = true
  
  try {
    cartStore.addItem({
      variantId: selectedVariant.value.id,
      productId: product.value.id,
      title: product.value.title,
      price: parseFloat(selectedVariant.value.price.amount),
      quantity: quantity.value,
      image: selectedVariant.value.image?.url || product.value.images.edges[0]?.node.url,
      variant: selectedVariant.value.title
    })
    
    // Show cart
    const event = new CustomEvent('toggle-cart')
    window.dispatchEvent(event)
  } catch (error) {
    console.error('Failed to add to cart:', error)
  } finally {
    isAddingToCart.value = false
  }
}

const buyNow = async () => {
  await addToCart()
  if (cartStore.checkoutUrl) {
    window.open(cartStore.checkoutUrl, '_blank')
  }
}

// SEO
useHead(() => ({
  title: product.value ? `${product.value.title} - Bounced` : 'Product - Bounced',
  meta: [
    { name: 'description', content: product.value?.description || 'Premium streetwear for music producers' },
    { property: 'og:title', content: product.value ? `${product.value.title} - Bounced` : 'Product - Bounced' },
    { property: 'og:description', content: product.value?.description || 'Premium streetwear for music producers' },
    { property: 'og:image', content: product.value?.images.edges[0]?.node.url || '/basic-shapes-banner-image.jpg' },
    { property: 'og:type', content: 'product' }
  ]
}))
</script>