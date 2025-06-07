<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
          Terms of <span class="gradient-text">Service</span>
        </h1>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-400 text-lg mb-8">
            Last updated: {{ lastUpdatedDate }}
          </p>

          <div class="space-y-8">
            <section class="card">
              <p class="text-gray-400">
                Bounced Studio ("we," "our," or "us") is a music analytics dashboard owned and operated by Dezolent, LLC, a Florida-registered limited liability company. These Terms of Service ("Terms") govern your use of https://app.bounced.studio (the "Site") and any related services (collectively, the "Service"). By accessing or using the Service—whether by clicking "Sign in with Spotify," "Sign in with Google," or otherwise—you agree to these Terms. If you do not agree, do not use the Service.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">1. Eligibility & Account Registration</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">1.1 Eligibility</h3>
              <p class="text-gray-400 mb-4">
                You must be at least 18 years old (or the age of legal majority in your jurisdiction) to use the Service. By registering, you represent and warrant that you meet this requirement.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">1.2 Account Creation</h3>
              <p class="text-gray-400 mb-4">
                To access certain features, you must authenticate using one of the following methods:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Spotify OAuth: Clicking "Sign in with Spotify" will redirect you to Spotify's login/consent flow. You authorize us to access certain Spotify account data (profile, streaming metrics, playlists) as described in our Privacy Policy.</li>
                <li>Google OAuth: Clicking "Sign in with Google" will redirect you to Google's login/consent flow. You authorize us to access your basic Google profile data (email, name, profile picture) as described in our Privacy Policy.</li>
              </ul>
              <p class="text-gray-400 mb-4">
                By completing either OAuth flow, you create a free Bounced Studio account linked to your email address. You are responsible for keeping your account credentials (i.e., your email, OAuth tokens) secure. You agree not to share your account with anyone. If you believe your account has been compromised, notify us immediately via contact@dezolent.com.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">1.3 Account Information</h3>
              <p class="text-gray-400">
                You agree to provide accurate, current, and complete information during registration. You may update or correct your account details by visiting your profile settings. We reserve the right to suspend or terminate accounts that contain false or incomplete information.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">2. Description of Service</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">2.1 Core Functionality</h3>
              <p class="text-gray-400 mb-4">
                Bounced Studio aggregates streaming data (e.g., play counts, listener counts, playlist placements) from Spotify and, where enabled by you, other third-party services. We present:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>A consolidated dashboard showing total plays, listener trends, and estimated royalty earnings</li>
                <li>Platform‐specific breakdowns (Spotify, Apple Music, SoundCloud, etc.)</li>
                <li>Playlist & influencer suggestions, with contact information (where publicly available)</li>
                <li>Historical trend charts and analytics</li>
              </ul>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">2.2 Data Access & Refresh</h3>
              <p class="text-gray-400 mb-4">
                When you sign in via Spotify or Google, you grant us permission to pull your streaming data via API at periodic intervals (e.g., daily). We use OAuth tokens to fetch that data. You can revoke access at any time by managing your connected apps in Spotify or Google (see Section 3.3 of our Privacy Policy).
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">2.3 Use Limitations</h3>
              <ul class="list-disc list-inside text-gray-400 space-y-2">
                <li>You may use the Service only for personal, non‐commercial purposes related to your own music or artistic projects.</li>
                <li>You agree not to resell, redistribute, or create derivative services based on the aggregated data.</li>
                <li>Any attempt to reverse-engineer our platform or scrape data beyond the authorized API calls is strictly prohibited.</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">3. User Conduct & Responsibilities</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">3.1 Lawful Use</h3>
              <p class="text-gray-400 mb-4">
                You agree to use the Service in compliance with all applicable laws and regulations, including copyright and data‐protection laws. You may not use Bounced Studio to infringe on anyone's intellectual property rights.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">3.2 Prohibited Activities</h3>
              <p class="text-gray-400 mb-4">
                You must not:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Attempt to gain unauthorized access to any part of the Service or any user's account</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Reverse-engineer, decompile, or disassemble any portion of the Service</li>
                <li>Impersonate another person or entity</li>
                <li>Use automation (bots, scrapers, crawlers) except those expressly authorized by us (e.g., Pica agents we deploy)</li>
                <li>Upload or transmit viruses, malware, or any malicious code</li>
                <li>Harass, defame, or threaten any person or entity via the Service</li>
              </ul>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">3.3 User Content</h3>
              <p class="text-gray-400 mb-4">
                If you upload, submit, or post any content (e.g., comments, profile information) through the Service, you grant us a worldwide, royalty-free, sublicensable license to use, reproduce, distribute, and display that content solely for the purpose of providing and improving the Service. You represent that you own or have rights to any content you submit and that it does not violate these Terms.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">3.4 Account Termination</h3>
              <p class="text-gray-400">
                We may suspend or terminate your account (with or without notice) if you violate these Terms, infringe another's rights, or pose a security risk. Upon termination, your right to access the Service ends immediately, and we may delete or anonymize your data in accordance with our Data Retention policy (see Privacy Policy).
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">4. Intellectual Property</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">4.1 Our Rights</h3>
              <p class="text-gray-400 mb-4">
                All content, features, and functionality of the Service—excluding third‐party content like Spotify playlists, Google profiles, or user‐generated content—are owned by Dezolent, LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws. "Bounced Studio," its logos, and "Dezolent, LLC" are trademarks of Dezolent, LLC.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">4.2 Your Rights</h3>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>You retain ownership of any data you upload or authorize us to fetch from your Spotify/Google accounts.</li>
                <li>We grant you a limited, revocable, non‐exclusive license to access and use the Service for your personal, non-commercial music analytics activities.</li>
              </ul>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">4.3 Feedback</h3>
              <p class="text-gray-400">
                If you submit feedback, suggestions, or improvements, you grant us an irrevocable, royalty‐free, worldwide license to use, modify, and distribute that feedback for any purpose.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">5. Payments, Fees & Refunds</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">5.1 Free Tier & Future Paid Plans</h3>
              <p class="text-gray-400 mb-4">
                As of June 2025, Bounced Studio is offered free of charge. We reserve the right to introduce paid subscriptions or premium features in the future. Users of any free trial or free tier will be notified at least 30 days in advance of any fee changes.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">5.2 Payment Processing</h3>
              <p class="text-gray-400 mb-4">
                If we introduce paid features, all payments will be processed through a third‐party payment processor (e.g., Stripe). You agree to provide valid payment information and to authorize us to charge your account for any fees owed. We will clearly state the price, billing frequency, and refund policy at the time of purchase.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">5.3 Refunds</h3>
              <p class="text-gray-400">
                Any refund requests will be evaluated on a case-by-case basis. If you believe you are entitled to a refund (e.g., due to a billing error), please contact contact@dezolent.com within 14 days of the charge. Refunds, if issued, will be credited to the original payment method.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">6. Disclaimers & Limitation of Liability</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">6.1 Service "As-Is"</h3>
              <p class="text-gray-400 mb-4">
                The Service is provided on an "as‐is" and "as‐available" basis without any warranties of any kind, whether express or implied. We do not guarantee that the Service will be uninterrupted, error‐free, or free of viruses or other malicious code.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">6.2 No Professional Advice</h3>
              <p class="text-gray-400 mb-4">
                All metrics, charts, and royalty estimates are for informational purposes only. We make no representations or warranties as to the accuracy, completeness, or reliability of any data. You should not rely on the Service for financial, legal, or professional decisions without consulting appropriate professionals.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">6.3 Limitation of Liability</h3>
              <p class="text-gray-400">
                To the fullest extent permitted by law, Dezolent, LLC and its affiliates, officers, directors, employees, agents, or licensors shall not be liable for:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use (or inability to use) the Service</li>
                <li>Any loss of profits, data, goodwill, or other intangible losses</li>
                <li>Damages arising from unauthorized access to or alteration of your data</li>
                <li>Any other damages, whether based in contract, tort (including negligence), strict liability, or otherwise</li>
              </ul>
              <p class="text-gray-400 mt-4">
                Our total liability for all claims arising under these Terms or related to the Service shall not exceed the greater of:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>The total fees you paid to us in the 12 months prior to the event giving rise to liability (if applicable), or</li>
                <li>USD 100</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">7. Indemnification</h2>
              <p class="text-gray-400">
                You agree to indemnify, defend, and hold harmless Dezolent, LLC, its officers, directors, employees, agents, and affiliates from and against all claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>Your breach of these Terms</li>
                <li>Your violation of any law, regulation, or third‐party right (including intellectual property and privacy rights)</li>
                <li>Your misuse of the Service, including any data you upload or third‐party APIs you authorize</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">8. Termination & Suspension</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">8.1 Your Right to Terminate</h3>
              <p class="text-gray-400 mb-4">
                You may delete your account at any time by going to your profile settings and selecting "Delete Account." Upon deletion, your profile data and streaming metrics will be permanently removed within 30 days.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">8.2 Our Right to Terminate or Suspend</h3>
              <p class="text-gray-400 mb-4">
                We reserve the right, without notice and at our sole discretion, to suspend or terminate your access to the Service for any reason, including but not limited to:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Violation of these Terms or the Privacy Policy</li>
                <li>Infringing another party's rights</li>
                <li>Fraudulent, abusive, or unlawful activity</li>
                <li>Extended inactivity (e.g., no login for 12 consecutive months)</li>
              </ul>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">8.3 Effect of Termination</h3>
              <p class="text-gray-400">
                Upon termination:
              </p>
              <ul class="list-disc list-inside text-gray-400 space-y-2 mt-2">
                <li>All rights granted to you under these Terms immediately cease.</li>
                <li>You must stop all use of the Service.</li>
                <li>We may delete or anonymize your personal data and analytics, except where we are required to retain data for legal or legitimate business purposes (as described in our Privacy Policy).</li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">9. Governing Law & Dispute Resolution</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">9.1 Governing Law</h3>
              <p class="text-gray-400 mb-4">
                These Terms, and any disputes arising from or relating to them, shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">9.2 Arbitration</h3>
              <p class="text-gray-400 mb-4">
                Any controversy or claim arising out of or relating to these Terms shall be settled by binding arbitration in Nashville, Tennessee (or another mutually agreed location), administered by the American Arbitration Association under its Commercial Arbitration Rules. Judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction. Each party shall bear its own costs and attorneys' fees, unless the arbitrator decides otherwise.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">9.3 Small Claims & Injunctive Relief</h3>
              <p class="text-gray-400">
                Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent or enjoin unauthorized use of our intellectual property or to enforce the confidentiality obligations herein. You may also pursue claims in small claims court if they qualify.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">10. Changes to These Terms</h2>
              <p class="text-gray-400">
                We may update these Terms periodically (e.g., to reflect new features, legal requirements, or improvements). When we do:
              </p>
              <ol class="list-decimal list-inside text-gray-400 space-y-2 mt-2">
                <li>We will post the revised Terms here with a new "Last updated" date at the top.</li>
                <li>If the changes are material (e.g., new fees, major shifts in data usage), we will notify you via the email address associated with your account at least 14 days before the changes take effect.</li>
                <li>Your continued use of the Service after the updated Terms are effective constitutes your acceptance of the new Terms. If you do not agree with the changes, you must stop using the Service and delete your account.</li>
              </ol>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">11. Severability & Waiver</h2>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">11.1 Severability</h3>
              <p class="text-gray-400 mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed from the Terms, and the remaining provisions shall remain in full force and effect.
              </p>
              <h3 class="text-xl font-semibold text-gray-100 mb-2">11.2 Waiver</h3>
              <p class="text-gray-400">
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition. Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-gray-100 mb-4">12. Contact Us</h2>
              <p class="text-gray-400 mb-4">
                If you have questions or requests regarding these Terms, please contact:
              </p>
              <div class="text-gray-400">
                <p>Dezolent, LLC (d/b/a Bounced)<br>
                Email: contact@dezolent.com<br>
                Address: 18412 Homestead Avenue, Apt. 132, Miami, FL 33157, USA</p>
              </div>
              <p class="text-gray-400 mt-4">
                By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
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
  lastUpdatedDate.value = 'June 2025'
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