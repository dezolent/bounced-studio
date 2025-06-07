<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span class="gradient-text">Touch</span>
          </h1>
          <p class="text-xl text-dark-300 max-w-2xl mx-auto">
            Have questions about our products? Want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="card">
            <h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-white mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-white mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Sending Message...</span>
                <span v-else>Send Message</span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
              <p class="text-green-400 text-center">
                Thanks for reaching out! We'll get back to you within 24 hours.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="card">
              <h3 class="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-primary-400 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-medium">Email</p>
                    <p class="text-dark-300">contact@dezolent.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-primary-400 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div style="display: none;">
                    <p class="text-white font-medium">Phone</p>
                    <p class="text-dark-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-6 h-6 text-primary-400 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-medium">Address</p>
                    <p class="text-dark-300">
                      18412 Homestead Avenue, Apt. 132<br>
                      Miami, CA 33157<br>
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="card">
              <h3 class="text-xl font-semibold text-white mb-6">Business Hours</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-dark-300">Monday - Friday</span>
                  <span class="text-white">9:00 AM - 6:00 PM PST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-300">Saturday</span>
                  <span class="text-white">10:00 AM - 4:00 PM PST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-300">Sunday</span>
                  <span class="text-white">Closed</span>
                </div>
              </div>
            </div>

            <!-- FAQ Link -->
            <div class="card">
              <h3 class="text-xl font-semibold text-white mb-4">Quick Help</h3>
              <p class="text-dark-300 mb-4">
                Looking for answers to common questions? Check out our FAQ section for quick solutions.
              </p>
              <NuxtLink to="/faq" class="btn-secondary inline-block">
                View FAQ
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contact Us - Bounced',
  meta: [
    { name: 'description', content: 'Get in touch with Bounced. Contact us for product questions, collaborations, wholesale inquiries, or general support.' },
    { property: 'og:title', content: 'Contact Us - Bounced' },
    { property: 'og:description', content: 'Get in touch with Bounced. Contact us for product questions, collaborations, wholesale inquiries, or general support.' }
  ]
})
</script>