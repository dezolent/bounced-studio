<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Shipping <span class="gradient-text">Information</span>
        </h1>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-dark-300 text-lg mb-8">
            Last updated: {{ lastUpdatedDate }}
          </p>

          <div class="space-y-8">
            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Shipping Options</h2>
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead>
                    <tr class="border-b border-dark-600">
                      <th class="text-white py-3 pr-4">Method</th>
                      <th class="text-white py-3 pr-4">Delivery Time</th>
                      <th class="text-white py-3">Cost</th>
                    </tr>
                  </thead>
                  <tbody class="text-dark-300">
                    <tr class="border-b border-dark-700">
                      <td class="py-3 pr-4">Standard Shipping</td>
                      <td class="py-3 pr-4">5-7 business days</td>
                      <td class="py-3">$5.99</td>
                    </tr>
                    <tr class="border-b border-dark-700">
                      <td class="py-3 pr-4">Express Shipping</td>
                      <td class="py-3 pr-4">2-3 business days</td>
                      <td class="py-3">$12.99</td>
                    </tr>
                    <tr class="border-b border-dark-700">
                      <td class="py-3 pr-4">Overnight Shipping</td>
                      <td class="py-3 pr-4">1 business day</td>
                      <td class="py-3">$24.99</td>
                    </tr>
                    <tr>
                      <td class="py-3 pr-4">Free Shipping</td>
                      <td class="py-3 pr-4">5-7 business days</td>
                      <td class="py-3">Free on orders $75+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Processing Time</h2>
              <p class="text-dark-300 mb-4">
                All orders are processed within 1-2 business days. Orders placed on weekends or 
                holidays will be processed the next business day.
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Standard items: 1-2 business days</li>
                <li>Custom/personalized items: 3-5 business days</li>
                <li>Pre-order items: Processing time varies (specified on product page)</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Domestic Shipping (US)</h2>
              <p class="text-dark-300 mb-4">
                We ship to all 50 states, including Alaska and Hawaii. Additional shipping time 
                may apply for Alaska and Hawaii deliveries.
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Free shipping on orders over $75</li>
                <li>Tracking information provided for all orders</li>
                <li>Signature required for orders over $200</li>
                <li>PO Box delivery available for standard shipping only</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">International Shipping</h2>
              <p class="text-dark-300 mb-4">
                We currently ship to the following countries:
              </p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-dark-300 mb-4">
                <span>Canada</span>
                <span>United Kingdom</span>
                <span>Australia</span>
                <span>Germany</span>
                <span>France</span>
                <span>Japan</span>
                <span>Netherlands</span>
                <span>Sweden</span>
                <span>Norway</span>
              </div>
              <p class="text-dark-300 mb-4">
                International shipping rates and delivery times:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Standard International: $15.99 (10-15 business days)</li>
                <li>Express International: $29.99 (5-7 business days)</li>
                <li>Customs fees and duties are the responsibility of the customer</li>
                <li>Delivery times may vary due to customs processing</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Order Tracking</h2>
              <p class="text-dark-300 mb-4">
                Once your order ships, you'll receive:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Email confirmation with tracking number</li>
                <li>SMS updates (if phone number provided)</li>
                <li>Real-time tracking through our website</li>
                <li>Delivery confirmation</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Shipping Restrictions</h2>
              <p class="text-dark-300 mb-4">
                Please note the following restrictions:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>We do not ship to freight forwarders</li>
                <li>Military APO/FPO addresses require standard shipping</li>
                <li>Some items may have shipping restrictions due to size or weight</li>
                <li>Hazardous materials cannot be shipped internationally</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Delivery Issues</h2>
              <p class="text-dark-300 mb-4">
                If you experience any delivery issues:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>Check with neighbors or building management</li>
                <li>Verify the shipping address on your order</li>
                <li>Contact the carrier directly using your tracking number</li>
                <li>Reach out to our customer service team for assistance</li>
              </ul>
              <p class="text-dark-300 mt-4">
                We're not responsible for packages marked as delivered by the carrier, but we'll 
                work with you to resolve any issues.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p class="text-dark-300">
                Questions about shipping? Contact our customer service team:
              </p>
              <div class="mt-4 text-dark-300">
                <p>Email: shipping@bounced.com</p>
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
  title: 'Shipping Information - Bounced',
  meta: [
    { name: 'description', content: 'Learn about our shipping options, delivery times, international shipping, and tracking information for Bounced orders.' },
    { property: 'og:title', content: 'Shipping Information - Bounced' },
    { property: 'og:description', content: 'Learn about our shipping options, delivery times, international shipping, and tracking information for Bounced orders.' }
  ]
})
</script>