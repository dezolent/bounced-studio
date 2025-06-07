<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Terms of <span class="gradient-text">Service</span>
        </h1>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-dark-300 text-lg mb-8">
            Last updated: {{ lastUpdatedDate }}
          </p>

          <div class="space-y-8">
            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p class="text-dark-300">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Use License</h2>
              <p class="text-dark-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on Bounced's 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Product Information</h2>
              <p class="text-dark-300">
                We strive to provide accurate product information, including descriptions, prices, 
                and availability. However, we do not warrant that product descriptions or other 
                content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Orders and Payment</h2>
              <p class="text-dark-300 mb-4">
                By placing an order, you agree to:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Pay all charges incurred by you or any users of your account</li>
                <li>Accept responsibility for any additional charges that may apply</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Shipping and Returns</h2>
              <p class="text-dark-300">
                Shipping times and return policies are outlined in our separate Shipping and 
                Return Policy documents. Please review these policies before making a purchase.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p class="text-dark-300">
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Bounced and is protected by copyright 
                and other intellectual property laws.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p class="text-dark-300">
                In no event shall Bounced or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on this website.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p class="text-dark-300">
                These terms and conditions are governed by and construed in accordance with the 
                laws of California, United States, and you irrevocably submit to the exclusive 
                jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p class="text-dark-300">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div class="mt-4 text-dark-300">
                <p>Email: legal@bounced.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Music Street, Studio City, CA 91604</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lastUpdatedDate = ref('Loading...')

onMounted(() => {
  lastUpdatedDate.value = new Date().toLocaleDateString()
})

useHead({
  title: 'Terms of Service - Bounced',
  meta: [
    { name: 'description', content: 'Read our terms of service to understand the rules and regulations for using the Bounced website and services.' },
    { property: 'og:title', content: 'Terms of Service - Bounced' },
    { property: 'og:description', content: 'Read our terms of service to understand the rules and regulations for using the Bounced website and services.' }
  ]
})
</script>