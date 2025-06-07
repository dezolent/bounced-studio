<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          About <span class="gradient-text">Bounced</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Born from the music production community, designed for creators who live and breathe beats.
        </p>
      </div>

      <!-- Story Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-100">Our Story</h2>
          <p class="text-gray-400 leading-relaxed">
            Bounced was founded by music producers who understood the unique style and culture of the beat-making community. 
            We noticed that while there was plenty of generic streetwear out there, nothing truly spoke to the aesthetic 
            and lifestyle of music producers.
          </p>
          <p class="text-gray-400 leading-relaxed">
            From late-night studio sessions to collaborating with artists, we wanted to create apparel that not only 
            looked great but also represented the passion and dedication that goes into making music. Every piece in 
            our collection is designed with the producer mindset in mind.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Whether you're laying down tracks in your home studio or performing at a venue, Bounced gear is made to 
            move with you and represent your commitment to the craft.
          </p>
        </div>
        <div class="relative">
          <img 
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
            alt="Music producer in studio"
            class="w-full h-96 object-cover rounded-lg"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent rounded-lg"></div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-gray-100 text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Music First</h3>
            <p class="text-gray-400">
              Everything we do is inspired by music culture and the producer community. We're not just a clothing brand - we're part of the scene.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Quality Craftsmanship</h3>
            <p class="text-gray-400">
              Just like a perfectly mixed track, our products are crafted with attention to every detail. Premium materials, superior construction.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-100 mb-4">Community Driven</h3>
            <p class="text-gray-400">
              We listen to our community of producers and creators. Your feedback shapes our designs and helps us create what you actually want to wear.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-gray-100 text-center mb-12">The Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card text-center">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Team member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-gray-100 mb-2">Alex Chen</h3>
            <p class="text-primary-400 mb-2">Founder & Creative Director</p>
            <p class="text-gray-400 text-sm">
              Producer turned designer with 10+ years in the music industry. Passionate about bridging music and fashion.
            </p>
          </div>

          <div class="card text-center">
            <img 
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              alt="Team member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-gray-100 mb-2">Maya Rodriguez</h3>
            <p class="text-primary-400 mb-2">Head of Design</p>
            <p class="text-gray-400 text-sm">
              Fashion designer with a background in streetwear and a deep love for hip-hop culture and production.
            </p>
          </div>

          <div class="card text-center">
            <img 
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
              alt="Team member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-gray-100 mb-2">Jordan Smith</h3>
            <p class="text-primary-400 mb-2">Community Manager</p>
            <p class="text-gray-400 text-sm">
              Beat maker and community builder who keeps us connected with producers worldwide.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-100 mb-6">Join the Movement</h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Ready to elevate your style? Browse our collection and find pieces that speak to your creative spirit.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/products" class="btn-primary text-lg px-8 py-4">
            Shop Collection
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - Bounced',
  meta: [
    { name: 'description', content: 'Learn about Bounced - premium streetwear designed by and for music producers. Discover our story, values, and commitment to the music production community.' },
    { property: 'og:title', content: 'About Us - Bounced' },
    { property: 'og:description', content: 'Learn about Bounced - premium streetwear designed by and for music producers. Discover our story, values, and commitment to the music production community.' }
  ]
})
</script>