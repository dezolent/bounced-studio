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
              <p class="text-dark-300">
                Bounced is owned and operated by Dezolent, LLC, a Florida-registered limited liability company ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and share your information when you sign in with Spotify or Google on https://app.bounced.studio (the "Site").
              </p>
              <p class="text-dark-300 mt-4">
                Bounced ("we," "our," or "us") operates https://app.bounced.studio (the "Site"), a music analytics dashboard that allows artists to sign in via Spotify or Google so they can view aggregated streaming metrics, estimated royalties, and related insights. We are committed to protecting your privacy and handling your personal data in a transparent and secure manner. This Privacy Policy explains:
              </p>
              <ol class="list-decimal list-inside text-dark-300 mt-4">
                <li>What information we collect</li>
                <li>How we use that information</li>
                <li>With whom we share it</li>
                <li>How long we keep it</li>
                <li>Your choices and rights regarding your data</li>
                <li>How we protect your information</li>
                <li>Children's privacy</li>
                <li>Updates to the policy</li>
                <li>How to contact us</li>
              </ol>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <h3 class="text-xl font-semibold text-white mb-2">1.1 Information You Provide Via Spotify or Google OAuth</h3>
              <p class="text-dark-300 mb-4">
                When you click "Sign in with Spotify" or "Sign in with Google," we rely on OAuth protocols to authenticate you. As part of that process, Spotify and Google each share certain information with us, including:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mb-4">
                <li>
                  <span class="font-medium">Basic Profile Information</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>User ID (a unique identifier assigned by Spotify or Google)</li>
                    <li>Display name (e.g. "John Doe")</li>
                    <li>Email address</li>
                    <li>Profile picture URL (if available)</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">OAuth Access Token (and Refresh Token)</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We receive a short‐lived access token (and refresh token) that allows us to call the Spotify or Google API on your behalf to fetch additional data.</li>
                    <li>We never store your raw Google or Spotify password.</li>
                  </ul>
                </li>
              </ul>
              <p class="text-dark-300">
                <span class="font-medium">Why we collect this:</span> We need your Spotify or Google user ID and access token to securely fetch your streaming metrics (play counts, monthly listeners, playlist features, etc.) from Spotify's Web API and any other Google‐integrated services. We also store your email address to identify you uniquely in our system and to correspond with you (e.g., passwordless login tokens, notifications, etc.).
              </p>

              <h3 class="text-xl font-semibold text-white mb-2 mt-6">1.2 Information Pulled from Spotify or Google APIs</h3>
              <p class="text-dark-300 mb-4">
                With your explicit consent, we periodically retrieve the following data from Spotify (and, where applicable, from other streaming APIs you authorize) using your OAuth access token:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mb-4">
                <li>
                  <span class="font-medium">Streaming Metrics</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Track‐level play counts over time</li>
                    <li>Monthly listener counts, follower counts, playlist placements, etc.</li>
                    <li>Estimated royalty earnings (calculated based on public royalty rates and your play counts)</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Playlist & Feature Data</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Which official editorial or user‐curated playlists include your tracks</li>
                    <li>The number of followers or subscribers on those playlists</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Basic Account Info (if permitted)</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Public track titles, album names, release dates</li>
                    <li>Artist biography, if you add it via Spotify for Artists</li>
                  </ul>
                </li>
              </ul>
              <p class="text-dark-300">
                <span class="font-medium">Why we collect this:</span> To populate your dashboard with up‐to‐date streaming statistics, trend charts, and royalty estimates.
              </p>

              <h3 class="text-xl font-semibold text-white mb-2 mt-6">1.3 Information We Collect Directly on the Site</h3>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mb-4">
                <li>
                  <span class="font-medium">Account Information</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Your Supabase user ID (automatically generated when you first sign in)</li>
                    <li>Your email (from Spotify or Google)</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Usage Data & Analytics</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Pages you visit, sections of the dashboard you view, and basic interaction data (e.g., button clicks, time spent on a chart).</li>
                    <li>IP address (used to derive your country/region for analytics and security).</li>
                    <li>Browser and device type (to help us optimize the Site for different screen sizes and performance).</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Cookies & Tracking Technologies</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We use cookies to keep you logged in (session cookies set by Supabase) and to remember your preferences (e.g., dark mode).</li>
                    <li>We may use third‐party analytics (e.g., Google Analytics) in aggregate/anonymous form to improve the Site's design and performance.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p class="text-dark-300 mb-4">
                We use the information above for the following purposes:
              </p>
              <ol class="list-decimal list-inside text-dark-300 space-y-2">
                <li>
                  <span class="font-medium">Authentication & Account Management</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To sign you in via Spotify or Google OAuth, create your Supabase user record, and maintain your session (so you do not have to log in on every page load).</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Dashboard Functionality</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To call Spotify's Web API and any other authorized APIs on your behalf, fetch your streaming metrics and playlist data, and display them in an easy‐to‐read dashboard.</li>
                    <li>To calculate and display estimated royalty earnings based on your play counts and publicly available rate information.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Personalization & Preference Storage</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To save your dashboard settings (e.g., date range filters, chart preferences).</li>
                    <li>To remember whether you prefer a light or dark theme.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Communications & Notifications</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To send you administrative emails (e.g., confirmation of sign‐up, passwordless login links if we implement email login, and notifications about major updates or outages).</li>
                    <li>To send you non‐transactional emails only if you opt in (e.g., a monthly summary of your streaming overview or a newsletter). We will always give you a way to unsubscribe.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Improvement & Analytics</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To track aggregate usage (for example, how many artists log in per day, which dashboard features are most popular) so we can continuously improve performance and usability.</li>
                    <li>To monitor for abuse, spike in traffic (possible DDoS), or suspicious login attempts (account security).</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Legal & Security</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>To detect, prevent, or investigate fraud, claims, or other illegal activity.</li>
                    <li>To comply with any applicable law, regulation, legal process, or enforceable governmental request.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">3. With Whom We Share Your Information</h2>
              <p class="text-dark-300 mb-4">
                We do not sell, rent, or trade your personal information. We only share data in the following limited circumstances:
              </p>
              <h3 class="text-xl font-semibold text-white mb-2">3.1 Third‐Party Service Providers</h3>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mb-4">
                <li>
                  <span class="font-medium">Spotify & Google</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We send them your OAuth credentials (indirectly, via the OAuth handshake) so we can retrieve your streaming data.</li>
                    <li>We do not share additional personal data with them beyond what is required for OAuth and API access.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Supabase (our backend & database host)</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Supabase stores your email, user ID, and session cookies securely.</li>
                    <li>Supabase also stores any additional data we collect (e.g., cached metric snapshots, preferences, hashed tokens) in PostgreSQL.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Email/Notification Providers (e.g., SendGrid, Mailgun)</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We may use a transactional email service to send confirmation emails and important site notices. We only share the minimum necessary (your email address and the template of the email we send).</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Analytics & Monitoring Tools (e.g., Google Analytics, Sentry)</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We may send aggregate or anonymized usage data (e.g., page view counts, error logs) to help us understand how the Site is used and quickly identify bugs.</li>
                    <li>We do not share any personally identifiable information (PII) in our analytics dashboards.</li>
                  </ul>
                </li>
              </ul>
              <h3 class="text-xl font-semibold text-white mb-2">3.2 Legal Obligations</h3>
              <p class="text-dark-300 mb-4">
                We may disclose your information if required by law (e.g., in response to a valid subpoena or other legal process), or if we believe disclosure is reasonably necessary to protect the rights, property, or safety of Bounced, our users, or the public.
              </p>
              <h3 class="text-xl font-semibold text-white mb-2">3.3 Business Transfers</h3>
              <p class="text-dark-300">
                In the event that Bounced is acquired by or merged with another company, we may share your information with the acquirer. You will be notified via email or a prominent notice on our Site prior to any transfer, and the acquirer will be required to honor this Privacy Policy.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>
                  <span class="font-medium">Account & Profile Data</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We retain your email, user ID, and profile picture URL for as long as your account remains active.</li>
                    <li>If you never sign in or you delete your account, we erase your profile data within 30 days of your last login or account‐deletion request.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Streaming Metrics & Analytics</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We cache metric snapshots (play counts, listener counts) for reporting and trend analysis. These records are retained for at least one year (so you can view historical trends).</li>
                    <li>If you delete your account, we remove all metric data linked to your user ID within 30 days.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Cookies & Session Data</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Supabase session cookies are valid for 30 days. If you do not sign in again for 30 days, you will have to re‐authenticate.</li>
                    <li>We do not persist refresh tokens beyond what Supabase stores. When you sign out, your session tokens are invalidated immediately.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">5. Your Choices & Rights</h2>
              <h3 class="text-xl font-semibold text-white mb-2">5.1 Access, Correction, or Deletion</h3>
              <p class="text-dark-300 mb-4">
                You have the right to:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mb-4">
                <li>Access the personal data we hold about you.</li>
                <li>Correct any inaccurate or incomplete information.</li>
                <li>Delete your account and associated data (including your streaming metric history and dashboard preferences).</li>
              </ul>
              <p class="text-dark-300 mb-4">
                To exercise these rights, email us at contact@dezolent.com or use the "Delete Account" feature in your user settings.
              </p>
              <h3 class="text-xl font-semibold text-white mb-2">5.2 Opting Out of Non‐Essential Communications</h3>
              <p class="text-dark-300 mb-4">
                We will only send you marketing or non‐transactional emails if you explicitly opt in.
                Each marketing email we send includes an "Unsubscribe" link. You can also reply to any email with "UNSUBSCRIBE" in the subject line.
              </p>
              <h3 class="text-xl font-semibold text-white mb-2">5.3 Cookie & Tracking Opt‐Out</h3>
              <p class="text-dark-300 mb-4">
                You can disable cookies or block third-party tracking via your browser settings.
                Please note that if you block Supabase's cookies, you will be logged out and cannot remain authenticated.
              </p>
              <h3 class="text-xl font-semibold text-white mb-2">5.4 Revoking OAuth Permissions</h3>
              <p class="text-dark-300">
                You can revoke Bounced's access to your Spotify or Google account at any time by managing your connected apps:
              </p>
              <ul class="list-disc list-inside text-dark-300 space-y-2 mt-2">
                <li>Spotify: Go to Spotify Account → Apps → find "Bounced" → click Remove Access.</li>
                <li>Google: Go to Google Account → Security → Third‐party apps with account access → find "Bounced" → click Remove Access.</li>
              </ul>
              <p class="text-dark-300 mt-4">
                Once revoked, Bounced will no longer be able to pull new data from your Spotify or Google account. You will need to re-authenticate if you want to restore that connection.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">6. How We Protect Your Information</h2>
              <ul class="list-disc list-inside text-dark-300 space-y-2">
                <li>
                  <span class="font-medium">Encryption in Transit & At‐Rest</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We use HTTPS (TLS 1.2 or higher) for all data transmissions between your browser and our servers.</li>
                    <li>Supabase automatically encrypts your database at rest.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Secure OAuth Flows</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We never see or store your Spotify or Google password. All authentication occurs through their OAuth endpoints.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Access Controls & Least Privilege</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Only authorized personnel at Bounced can access our Supabase dashboard or logs.</li>
                    <li>We use Role-Based Security (RLS) in Supabase so that each user can only see their own metric records.</li>
                  </ul>
                </li>
                <li>
                  <span class="font-medium">Regular Audits & Updates</span>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>We perform periodic security reviews of our codebase and dependencies.</li>
                    <li>We keep third-party libraries (e.g., Supabase client libraries, Next.js, Tailwind) up to date to avoid known vulnerabilities.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
              <p class="text-dark-300">
                Bounced is not directed at children under 13. We do not knowingly collect personal information from anyone under 13. If you believe we have inadvertently collected data on a minor, please contact us at contact@dezolent.com, and we will promptly delete any such information.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p class="text-dark-300">
                We may update this Privacy Policy from time to time—especially if we add new features, switch third-party providers, or have to comply with changes in privacy laws. When we do, we will:
              </p>
              <ol class="list-decimal list-inside text-dark-300 space-y-2 mt-2">
                <li>Post the new Privacy Policy on this page and update the "Last updated" date at the top.</li>
                <li>Send a notice to the email address associated with your account 14 days before the changes take effect (if the changes are material).</li>
              </ol>
              <p class="text-dark-300 mt-4">
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section class="card">
              <h2 class="text-2xl font-bold text-white mb-4">9. How to Contact Us</h2>
              <p class="text-dark-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact:
              </p>
              <div class="text-dark-300">
                <p>Bounced Privacy Team<br>
                Email: contact@dezolent.com<br>
                Address: 123 Music Blvd, Suite 100, Nashville, TN 37203 (United States)</p>
              </div>
              <p class="text-dark-300 mt-4">
                By using https://app.bounced.studio, you acknowledge that you have read and understood this Privacy Policy and agree to our collection and use of your information as described above.
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
  title: 'Privacy Policy - Bounced',
  meta: [
    { name: 'description', content: 'Read our privacy policy to understand how Bounced collects, uses, and protects your personal information.' },
    { property: 'og:title', content: 'Privacy Policy - Bounced' },
    { property: 'og:description', content: 'Read our privacy policy to understand how Bounced collects, uses, and protects your personal information.' }
  ]
})
</script>