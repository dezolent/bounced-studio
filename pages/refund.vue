<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Refund <span class="gradient-text">Policy</span>
        </h1>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-dark-300 text-lg mb-8">
            Last updated: {{ lastUpdatedDate }}
          </p>

          <div class="space-y-8">
            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">30-Day Return Policy</h2>
              <p class="text-dark-300">
                We offer a 30-day return policy from the date of delivery. Items must be in their 
                original condition, unworn, unwashed, and with all tags attached. Custom or 
                personalized items cannot be returned unless they arrive damaged or defective.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Return Process</h2>
              <p class="text-dark-300 mb-4">
                To initiate a return:
              </p>
              <ol class="list-decimal list-inside text-dark-300 space-y-2">
                <li>Contact our customer service team at returns@bounced.com</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive a return authorization number and shipping label</li>
                <li>Package the item securely and attach the return label</li>
                <li>Drop off the package at any authorized shipping location</li>
              </ol>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Refund Processing</h2>
              <p class="text-dark-300 mb-4">
                Once we receive your returned item:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>We'll inspect the item within 2-3 business days</li>
                <li>If approved, refunds are processed within 5-7 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>You'll receive an email confirmation when the refund is processed</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Exchanges</h2>
              <p class="text-dark-300">
                We're happy to exchange items for a different size or color, subject to availability. 
                The exchange process follows the same steps as returns. If there's a price difference, 
                we'll either refund the difference or send you a payment request.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Damaged or Defective Items</h2>
              <p class="text-dark-300">
                If you receive a damaged or defective item, please contact us immediately at 
                support@bounced.com with photos of the issue. We'll provide a prepaid return 
                label and expedite a replacement or full refund.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Return Shipping</h2>
              <p class="text-dark-300 mb-4">
                Return shipping costs:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Customer is responsible for return shipping costs (unless item is defective)</li>
                <li>We recommend using a trackable shipping service</li>
                <li>Bounced is not responsible for lost return packages</li>
                <li>Original shipping costs are non-refundable (except for defective items)</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Non-Returnable Items</h2>
              <p class="text-dark-300 mb-4">
                The following items cannot be returned:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Custom or personalized items</li>
                <li>Items worn, washed, or damaged by the customer</li>
                <li>Items without original tags</li>
                <li>Sale items marked as "final sale"</li>
                <li>Gift cards</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">International Returns</h2>
              <p class="text-dark-300">
                International customers are responsible for return shipping costs and any customs 
                fees. We recommend using a trackable international shipping service. Processing 
                times may be longer for international returns.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p class="text-dark-300">
                If you have any questions about our refund policy or need assistance with a return:
              </p>
              <div class="mt-4 text-dark-300">
                <p>Email: returns@bounced.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Hours: Monday-Friday, 9 AM - 6 PM PST</p>
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
  title: 'Refund Policy - Bounced',
  meta: [
    { name: 'description', content: 'Learn about our 30-day return policy, refund process, and how to return or exchange items from Bounced.' },
    { property: 'og:title', content: 'Refund Policy - Bounced' },
    { property: 'og:description', content: 'Learn about our 30-day return policy, refund process, and how to return or exchange items from Bounced.' }
  ]
})
</script>