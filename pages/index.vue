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
      <div class="relative z-10 px-8 mx-8 w-full">
        <div class="text-center md:text-left">
          <div class="mb-6 animate-fade-in">
            <img 
              src="/bounced-text-blue-750px-width.png" 
              alt="Bounced" 
              class="h-12 md:h-24 w-auto mx-auto md:mx-0"
            />
          </div>
          <p class="text-lg md:text-2xl text-gray-100 mb-6 md:mb-8 animate-slide-up text-shadow">
            Premium streetwear designed for music producers
          </p>
          <p class="text-base md:text-lg text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 animate-slide-up text-shadow">
            Elevate your style with our exclusive collection. From studio sessions to street style, 
            we've got you covered with premium quality apparel that speaks your language.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up">
            <NuxtLink to="/products" class="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Shop Collection
            </NuxtLink>
            <NuxtLink to="/about" class="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Learn More
            </NuxtLink>
          </div>
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
    <FeaturedProducts />

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
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Premium Quality</h3>
            <p class="text-gray-400">
              High-quality materials and construction ensure your gear lasts through countless studio sessions.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Producer Inspired</h3>
            <p class="text-gray-400">
              Designs inspired by the music production community, for producers by producers.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
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
import { useHead } from '#app'
import FeaturedProducts from '~/components/FeaturedProducts.vue'

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
</script>