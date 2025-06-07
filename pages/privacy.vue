<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy <span class="gradient-text">Policy</span>
        </h1>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-dark-300 text-lg mb-8">
            Last updated: {{ lastUpdatedDate }}
          </p>

          <div class="space-y-8">
            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p class="text-dark-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p class="text-dark-300 mb-4">
                We use the information we collect to:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p class="text-dark-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p class="text-dark-300">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p class="text-dark-300 mb-4">
                You have the right to:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your personal information</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p class="text-dark-300">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. You can control cookie settings 
                through your browser preferences.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p class="text-dark-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div class="mt-4 text-dark-300">
                <p>Email: privacy@bounced.com</p>
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
  title: 'Privacy Policy - Bounced',
  meta: [
    { name: 'description', content: 'Read our privacy policy to understand how Bounced collects, uses, and protects your personal information.' },
    { property: 'og:title', content: 'Privacy Policy - Bounced' },
    { property: 'og:description', content: 'Read our privacy policy to understand how Bounced collects, uses, and protects your personal information.' }
  ]
})
</script>