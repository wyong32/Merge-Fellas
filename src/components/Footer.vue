<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="logo">
            <span class="logo-icon">M</span>
            <h3>Merge Fellas</h3>
          </div>
          <p>
            Experience the ultimate merge gaming adventure that challenges your strategic thinking
            and creates endless possibilities in the world of puzzle games.
          </p>
          <div class="social-links">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <div class="foot-right">
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/games">Games</router-link></li>
              <li><router-link to="/brainrot-characters">Brainrot Characters</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Hot Game</h4>
            <ul>
              <li>
                <router-link to="/games/2048-italian-brainrot">2048 Italian Brainrot</router-link>
              </li>
              <li>
                <router-link to="/games/italian-brainrot-jigsaw"
                  >Italian Brainrot Jigsaw</router-link
                >
              </li>
              <li>
                <router-link to="/games/tralalero-tralala-clicker"
                  >Tralalero Tralala Clicker</router-link
                >
              </li>
              <li>
                <router-link to="/games/italian-brainrot-puzzle-battle"
                  >Italian Brainrot: Puzzle & Battle</router-link
                >
              </li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
              <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
              <li><router-link to="/copyright">Copyright</router-link></li>
              <li><router-link to="/about-us">About Us</router-link></li>
              <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 Merge Fellas. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const socials = ref([
  {
    name: 'Facebook',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>`,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.561-.666 2.477 0 1.61.82 3.027 2.053 3.858-.764-.025-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.2 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.096 7.14 2.096 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.476 2.323-2.41z"/></svg>`,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>`,
  },
  {
    name: 'Discord',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/></svg>`,
  },
])
</script>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;
}

.logo-icon {
  background: linear-gradient(45deg, var(--color-primary-light), var(--color-accent));
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: bold;
}

.footer-container {
  padding: 4rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.08) 100%);
  backdrop-filter: blur(10px);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-about p {
  color: var(--color-text-gray);
  margin: 1rem 0;
  max-width: 350px;
  line-height: 1.6;
}

.foot-right {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--color-text-gray);
  transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
  color: var(--color-orange-light);
  transform: scale(1.2);
}

.social-links :deep(svg) {
  width: 24px;
  height: 24px;
}

.footer-links h4 {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 1rem;
}

.footer-links a {
  color: var(--color-text-gray);
  transition: color 0.3s;
  position: relative;
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--color-orange-light);
  text-decoration: underline;
}

.footer-copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-gray);
}

/* 平板端响应式 */
@media (max-width: 1024px) {
  .footer-container {
    padding: 3rem 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .foot-right {
    gap: 0.8rem;
  }

  .footer-links h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .footer-links li {
    margin-bottom: 0.8rem;
  }

  .logo {
    font-size: 1.3rem;
  }

  .footer-about p {
    font-size: 0.9rem;
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .footer-about {
    text-align: center;
  }

  .footer-about p {
    max-width: 100%;
    margin: 1rem 0;
    font-size: 0.9rem;
  }

  .social-links {
    justify-content: center;
    gap: 1.5rem;
  }

  .social-links :deep(svg) {
    width: 28px;
    height: 28px;
  }

  .foot-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .footer-links:nth-child(1) {
    display: none;
  }

  .footer-links h4 {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }

  .footer-links li {
    margin-bottom: 0.6rem;
  }

  .footer-links a {
    font-size: 0.85rem;
  }

  .logo {
    font-size: 1.2rem;
    justify-content: center;
  }

  .footer-copyright {
    font-size: 0.8rem;
  }
}
</style> 