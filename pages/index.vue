<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="/basic-shapes-banner-image.jpg"
          alt="Bounced Hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div class="mb-6 animate-fade-in">
          <img 
            src="/bounced-text-blue-750px-width.png" 
            alt="Bounced" 
            class="h-16 md:h-24 w-auto mx-auto"
          />
        </div>
        <p class="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up text-shadow">
          Premium streetwear designed for music producers
        </p>
        <p class="text-lg text-gray-200 mb-12 max-w-2xl mx-auto animate-slide-up text-shadow">
          Elevate your style with our exclusive collection. From studio sessions to street style, 
          we've got you covered with premium quality apparel that speaks your language.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <NuxtLink to="/products" class="btn-primary text-lg px-8 py-4">
            Shop Collection
          </NuxtLink>
          <NuxtLink to="/about" class="btn-secondary text-lg px-8 py-4">
            Learn More
          </NuxtLink>
        </div>
      </div>
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg class="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Featured Products Section -->
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

        <!-- 1) Loading State -->
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="i in 4" :key="i" class="card animate-pulse">
            <div class="bg-dark-700 h-64 rounded-lg mb-4"></div>
            <div class="space-y-2">
              <div class="bg-dark-700 h-6 rounded w-3/4"></div>
              <div class="bg-dark-700 h-4 rounded w-full"></div>
              <div class="bg-dark-700 h-4 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <!-- 2) Error State -->
        <div v-else-if="error" class="text-center text-red-400 py-12">
          <p class="mb-4">Failed to load products. Please try again later.</p>
          <button @click="refresh" class="btn-primary">Try Again</button>
        </div>

        <!-- 3) Product Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ProductCard 
            v-for="edge in allProducts" 
            :key="edge.node.id" 
            :product="edge.node" 
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/products" class="btn-primary text-lg px-8 py-4">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Bounced -->
    <section class="py-20 bg-dark-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Why Choose <span class="gradient-text">Bounced</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <!-- icon -->
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Premium Quality</h3>
            <p class="text-gray-400">
              High-quality materials and construction ensure your gear lasts through countless studio sessions.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <!-- icon -->
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Producer Inspired</h3>
            <p class="text-gray-400">
              Designs inspired by the music production community, for producers by producers.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <!-- icon -->
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Fast Shipping</h3>
            <p class="text-gray-400">
              Quick and reliable shipping so you can rock your new gear as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-dark-950">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Stay in the <span class="gradient-text">Loop</span>
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Get notified about new drops, exclusive releases, and producer community updates.
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button class="btn-primary px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useShopify } from '~/composables/useShopify'
import { useHead }     from '#app'
import ProductCard     from '~/components/ProductCard.vue'

// SEO meta
useHead({
  title: 'Bounced - Premium Streetwear for Music Producers',
  meta: [
    { name: 'description', content: 'Premium streetwear designed for music producers. Elevate your style with our exclusive collection of high-quality apparel.' },
    { property: 'og:title', content: 'Bounced - Premium Streetwear for Music Producers' },
    { property: 'og:description', content: 'Premium streetwear designed for music producers. Elevate your style with our exclusive collection of high-quality apparel.' },
    { property: 'og:image', content: '/basic-shapes-banner-image.jpg' },
    { property: 'og:type', content: 'website' }
  ]
})

// Fetch 4 featured products on both server and client
const { getProducts } = useShopify()
const allProducts     = ref<{ node: any }[]>([])
const pageInfo        = ref<{ hasNextPage: boolean; endCursor: string } | null>(null)

const { data: productsData, pending, error, refresh } = await useAsyncData(
  'featured-products',
  () => getProducts(4)
)

watch(productsData, (d) => {
  if (d?.products) {
    allProducts.value = d.products.edges
    pageInfo.value    = d.products.pageInfo
  }
}, { immediate: true })
</script>
