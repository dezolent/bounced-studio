<template>
  <div class="min-h-screen bg-dark-900">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <CartSidebar />
  </div>
</template>

<script setup>
// Global meta tags
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>