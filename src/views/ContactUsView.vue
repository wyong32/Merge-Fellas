<template>
  <div class="page-container">
    <Header />
    <div class="container">
      <div class="legal-page">
        <h1 class="page-title">Contact Us</h1>

        <div class="last-updated">
          <p><strong>Last Updated:</strong> January 14, 2025</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>1. Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions about our games, feedback on
              your experience, suggestions for improvements, or need technical support, we're here
              to help.
            </p>
            <p>
              Our team is passionate about creating great gaming experiences, and your input helps
              us make our games even better.
            </p>
          </div>

          <div class="section">
            <h2>2. Contact Information</h2>
            <p>For all inquiries, please reach out to us via email:</p>
            <p class="contact-email">
              <strong>Email:</strong>
              <a href="mailto:contact@mergefellas.com">contact@mergefellas.com</a>
            </p>
          </div>

          <div class="section">
            <h2>3. What Can We Help You With?</h2>
            <ul>
              <li>
                <strong>Game Support:</strong> Technical issues, gameplay questions, or
                troubleshooting
              </li>
              <li>
                <strong>Feedback & Suggestions:</strong> Ideas for new features or improvements
              </li>
              <li><strong>Bug Reports:</strong> Found a problem? Let us know so we can fix it</li>
              <li>
                <strong>General Inquiries:</strong> Any other questions about our games or services
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>4. Response Times</h2>
            <p>We strive to respond to all messages as quickly as possible:</p>
            <ul>
              <li><strong>Technical Support:</strong> Within 24-48 hours</li>
              <li><strong>General Inquiries:</strong> Within 2-3 business days</li>
              <li><strong>Bug Reports:</strong> Within 24-48 hours</li>
            </ul>
            <p>
              Please note that response times may be longer during weekends and holidays. We
              appreciate your patience!
            </p>
          </div>

          <div class="section">
            <h2>5. When Contacting Us</h2>
            <p>
              To help us assist you more effectively, please include the following information when
              relevant:
            </p>
            <ul>
              <li>Your device type and browser version</li>
              <li>A clear description of the issue or question</li>
              <li>Steps to reproduce any problems you're experiencing</li>
              <li>Screenshots if applicable</li>
            </ul>
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

.contact-email {
  background: var(--color-bg-muted);
  border-left: 4px solid var(--color-primary);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;
}

.contact-email a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.contact-email a:hover {
  color: var(--color-secondary);
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