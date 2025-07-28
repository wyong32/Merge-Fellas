<template>
  <div class="page-container">
    <Header />
    <div class="container">
      <div class="legal-page">
        <h1 class="page-title">Privacy Policy</h1>

        <div class="last-updated">
          <p><strong>Last Updated:</strong> January 14, 2025</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Merge Fellas! We take your privacy seriously. This Privacy Policy explains
              how we collect, use, store, and protect your personal information when you use our
              website and gaming services.
            </p>
            <p>
              By using our website and services, you agree to the collection and use of information
              as described in this Privacy Policy.
            </p>
          </div>

          <div class="section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information,
              including:
            </p>
            <ul>
              <li>Your IP address and general location information</li>
              <li>Browser type and version</li>
              <li>Device information (operating system, screen resolution)</li>
              <li>Website usage data (pages visited, time spent, click patterns)</li>
              <li>Referral source (how you found our website)</li>
            </ul>

            <h3>2.2 Game Data</h3>
            <p>During gameplay, we may collect:</p>
            <ul>
              <li>Game progress and scores</li>
              <li>Game preferences and settings</li>
              <li>Performance metrics for game optimization</li>
            </ul>
          </div>

          <div class="section">
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul>
              <li>
                <strong>Service Provision:</strong> To provide and maintain our gaming services
              </li>
              <li>
                <strong>User Experience:</strong> To improve our website and games based on usage
                patterns
              </li>
              <li>
                <strong>Performance Optimization:</strong> To enhance game performance and fix
                technical issues
              </li>
              <li>
                <strong>Security:</strong> To protect against fraud, abuse, and security threats
              </li>
              <li>
                <strong>Analytics:</strong> To understand user behavior and improve our services
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>4. Data Storage and Security</h2>
            <p>We implement appropriate security measures to protect your personal information:</p>
            <ul>
              <li>Data is stored on secure servers with encryption</li>
              <li>Access to personal data is limited to authorized personnel only</li>
              <li>We regularly update our security protocols</li>
              <li>We use industry-standard security technologies</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div class="section">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>Our website uses cookies and similar tracking technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our services and user experience</li>
              <li>Provide personalized content</li>
            </ul>
            <p>
              You can control cookies through your browser settings, though disabling cookies may
              affect website functionality.
            </p>
          </div>

          <div class="section">
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these third parties. We encourage you to read
              their privacy policies.
            </p>
            <p>We may use third-party services for:</p>
            <ul>
              <li>Website analytics (Google Analytics)</li>
              <li>Game hosting and distribution</li>
              <li>Content delivery networks</li>
            </ul>
          </div>

          <div class="section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If we discover that we have
              collected information from a child under 13, we will delete such information
              immediately.
            </p>
          </div>

          <div class="section">
            <h2>8. Your Rights</h2>
            <p>You have certain rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request information about what personal data we hold about
                you
              </li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to another service
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>9. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to provide our services
              and fulfill the purposes described in this Privacy Policy. When data is no longer
              needed, we securely delete or anonymize it.
            </p>
          </div>

          <div class="section">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. For significant changes, we will
              notify you through our website. We recommend regularly reviewing this page for the
              latest information.
            </p>
          </div>

          <div class="section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
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
// 移除useHead相关导入，让App.vue统一管理SEO
// import { useHead } from '@vueuse/head'
// import { getCanonicalUrl, getArticleSeoMeta } from '@/config/site.js'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const canonicalUrl = getCanonicalUrl(route)

// useHead({
//   title: 'Privacy Policy - Merge Fellas | Data Protection & User Privacy',
//   meta: getArticleSeoMeta(canonicalUrl, {
//     title: 'Privacy Policy - Merge Fellas | Data Protection & User Privacy',
//     description:
//       'Read our comprehensive privacy policy to understand how Merge Fellas protects and handles your personal information and data.',
//     keywords:
//       'privacy policy, data protection, user privacy, personal information, Merge Fellas, GDPR compliance',
//   }),
//   link: [{ rel: 'canonical', href: canonicalUrl }],
// })
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