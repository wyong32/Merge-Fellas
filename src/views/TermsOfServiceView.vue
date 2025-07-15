<template>
  <div class="page-container">
    <Header />
    <div class="container">
      <div class="legal-page">
        <h1 class="page-title">Terms of Service</h1>

        <div class="last-updated">
          <p><strong>Last Updated:</strong> January 14, 2025</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Merge Fellas! By accessing and using our website and game services, you
              agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Modified terms will take
              effect immediately upon posting. Your continued use of our services constitutes
              acceptance of the updated terms.
            </p>
          </div>

          <div class="section">
            <h2>2. Description of Service</h2>
            <p>
              Merge Fellas provides free online puzzle and merge games accessible through web
              browsers. Our services include:
            </p>
            <ul>
              <li>Browser-based puzzle and merge games</li>
              <li>Game tutorials and guides</li>
              <li>Community features and content</li>
              <li>Game-related news and updates</li>
            </ul>
            <p>
              Our services are provided "as is" and we reserve the right to modify, suspend, or
              discontinue any aspect of our services at any time.
            </p>
          </div>

          <div class="section">
            <h2>3. User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Use our services only for lawful purposes</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not attempt to hack, disrupt, or damage our services</li>
              <li>Not use automated tools to access our services without permission</li>
              <li>Provide accurate information when required</li>
              <li>Maintain the security of your account (if applicable)</li>
            </ul>
          </div>

          <div class="section">
            <h2>4. Prohibited Activities</h2>
            <p>You are prohibited from:</p>
            <ul>
              <li>Posting illegal, harmful, threatening, abusive, or defamatory content</li>
              <li>Impersonating others or providing false information</li>
              <li>Distributing spam, viruses, or malicious code</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using our services to harm minors in any way</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Interfering with other users' enjoyment of our services</li>
            </ul>
          </div>

          <div class="section">
            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content on our website, including games, graphics, text, logos, and software, is
              the property of Merge Fellas or our licensors and is protected by copyright and other
              intellectual property laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use our trademarks or logos without authorization</li>
              <li>Create derivative works based on our games</li>
            </ul>
          </div>

          <div class="section">
            <h2>6. Privacy and Data Use</h2>
            <p>
              Our data collection and use practices are detailed in our
              <router-link to="/privacy-policy">Privacy Policy</router-link>. By using our services,
              you agree to our processing of your information according to the Privacy Policy.
            </p>
          </div>

          <div class="section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not
              responsible for the content, privacy policies, or practices of these third parties.
              You access third-party websites at your own risk.
            </p>
          </div>

          <div class="section">
            <h2>8. Disclaimers</h2>
            <p>
              Our services are provided "as is" without warranties of any kind. We disclaim all
              warranties, including but not limited to:
            </p>
            <ul>
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that our services will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of content</li>
              <li>Warranties that our services will meet your specific requirements</li>
            </ul>
          </div>

          <div class="section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Merge Fellas shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not
              limited to:
            </p>
            <ul>
              <li>Loss of profits, data, or use</li>
              <li>Business interruption</li>
              <li>Personal injury or property damage</li>
              <li>Loss of privacy</li>
            </ul>
            <p>
              Our total liability to you for any claim shall not exceed the amount you paid to use
              our services (which is currently $0).
            </p>
          </div>

          <div class="section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Merge Fellas and its affiliates from any
              claims, damages, or expenses arising from your use of our services or violation of
              these terms.
            </p>
          </div>

          <div class="section">
            <h2>11. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, with or without
              cause, and with or without notice.
            </p>
            <p>If you violate these terms, we may:</p>
            <ul>
              <li>Issue warnings or temporary restrictions</li>
              <li>Suspend your access to specific features</li>
              <li>Permanently ban you from our services</li>
              <li>Take legal action if necessary</li>
            </ul>
          </div>

          <div class="section">
            <h2>12. Governing Law</h2>
            <p>
              These terms are governed by applicable law. Any disputes should be resolved through
              friendly negotiation, and if negotiation fails, should be submitted to a court of
              competent jurisdiction.
            </p>
          </div>

          <div class="section">
            <h2>13. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid or unenforceable, the remaining
              provisions shall continue to be valid and enforceable.
            </p>
          </div>

          <div class="section">
            <h2>14. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> jennifermontai77@gmail.com</li>
              <li><strong>Website:</strong> Merge Fellas Contact Form</li>
            </ul>
            <p>We will respond to your inquiries within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useHead } from '@vueuse/head'
import { getCanonicalUrl, getArticleSeoMeta } from '@/config/site.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const canonicalUrl = getCanonicalUrl(route)

useHead({
  title: 'Terms of Service - Merge Fellas | User Agreement & Service Rules',
  meta: getArticleSeoMeta(canonicalUrl, {
    title: 'Terms of Service - Merge Fellas | User Agreement & Service Rules',
    description:
      'Read our terms of service to understand the rules and guidelines for using Merge Fellas games and services.',
    keywords:
      'terms of service, user agreement, service rules, legal terms, Merge Fellas, user responsibilities',
  }),
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>

<style scoped>
.legal-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-bg-light);
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text-dark);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  background: var(--color-bg-muted);
  border-left: 4px solid var(--color-primary);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
}

.content {
  line-height: 1.8;
  color: var(--color-text-dark);
}

.section {
  margin-bottom: 2.5rem;
}

.section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-dark);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1.5rem 0 0.8rem 0;
  color: var(--color-text-muted);
}

.section p {
  margin-bottom: 1rem;
  color: var(--color-text-dark);
}

.section ul,
.section ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.section li {
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.section li strong {
  color: var(--color-primary);
  font-weight: 600;
}

.section a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.section a:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .legal-page {
    padding: 1.5rem;
    margin: 1rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .section h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .legal-page {
    padding: 1rem;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .section ul,
  .section ol {
    padding-left: 1.5rem;
  }
}
</style> 