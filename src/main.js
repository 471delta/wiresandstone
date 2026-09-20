import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site">
    <header class="site-header" id="top">
      <div class="header-shell">
        <a class="brand" href="#top" aria-label="Wires & Stone">
          <span class="brand-symbol" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M7 10.5h18l-3 8.5-6 5-6-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
              <path d="M10.5 10.5 16 6l5.5 4.5M10 14.5h12M12 17.2l4 3.5 4-3.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="brand-text">
            <span class="brand-script">Wires &amp;</span>
            <span class="brand-serif">STONE</span>
          </span>
        </a>

        <nav class="main-nav" id="mainNav">
          <a href="#top">HOME</a>
          <a href="#craft">THE CRAFT</a>
          <a href="#catalog">CATALOG STATUS</a>
          <a href="#inquiry">PRIVATE INQUIRY</a>
        </nav>

        <a class="header-email" href="mailto:wiresandstone@gmail.com">
          <span class="mail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>
          </span>
          DIRECT EMAIL
        </a>

        <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="Open navigation">
          <span></span><span></span>
        </button>
      </div>
    </header>

    <div class="top-meta">
      <div class="meta-pill">
        <span class="pin-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 20s6-5.4 6-10A6 6 0 0 0 6 10c0 4.6 6 10 6 10Z" fill="currentColor"/>
            <circle cx="12" cy="10" r="2.1" fill="white"/>
          </svg>
        </span>
        ALBERTA, CANADA • EST. 2021
      </div>
      <a class="designer-pill" href="https://jaeden.pages.dev" target="_blank" rel="noopener">DESIGNER - HTTPS://JAEDEN.PAGES.DEV</a>
    </div>

    <main>
      <section class="hero" id="home">
        <div class="hero-copy">
          <h1>Be elegant, feel elegant.</h1>
          <div class="hero-script">Connect with the wires,<br />and walk with the stones.</div>
          <p class="hero-description">Bespoke, handcrafted mineral wire art by <strong>Wires &amp; Stone</strong>. Hand-wrapped around natural raw crystals and unheated gems. Tailored by private arrangement.</p>

          <div class="hero-actions">
            <a class="pill-button rose-button" href="https://instagram.com/wiresandstone" target="_blank" rel="noopener">
              <span class="ig-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor"/>
                </svg>
              </span>
              VISIT @WIRESANDSTONE
              <span class="external-icon" aria-hidden="true">↗</span>
            </a>

            <a class="pill-button outline-button" href="mailto:wiresandstone@gmail.com">
              <span class="mail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                </svg>
              </span>
              PRIVATE COMMISSION
            </a>
          </div>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="arch">
            <div class="arch-inner">
              <div class="hero-gem">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gemGrad" x1="12" y1="8" x2="86" y2="94" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#ffe8a6"/>
                      <stop offset=".55" stop-color="#e6aaa7"/>
                      <stop offset="1" stop-color="#bf7d77"/>
                    </linearGradient>
                  </defs>
                  <path d="M18 33 50 16l32 17-7 35-25 16-25-16z" fill="url(#gemGrad)" stroke="#f9bf39" stroke-width="1.6"/>
                  <path d="m18 33 32 26 32-26M50 16v43M25 68l25-9 25 9M31 28l19 31 19-31" fill="none" stroke="#fff9e8" stroke-opacity=".75" stroke-width="1.5"/>
                </svg>
              </div>
              <div class="arch-brand">Wires &amp; Stone</div>
              <div class="arch-title">RAW MINERAL ART</div>
              <p>Artisan hand-woven wire wrapping around natural gemstones and raw mineral points.</p>
              <div class="arch-rule"></div>
              <div class="arch-location">
                <span class="pin-small" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 20s6-5.4 6-10A6 6 0 0 0 6 10c0 4.6 6 10 6 10Z" fill="#b94c5d"/>
                    <circle cx="12" cy="10" r="2" fill="#fff"/>
                  </svg>
                </span>
                Alberta, Canada • Est. 2021
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="craft section" id="craft">
        <div class="craft-history-card">
          <div class="image-placeholder-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M6 23 12 16l4.5 4 4-5 5.5 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="21.5" cy="10" r="2.4" fill="currentColor"/>
            </svg>
          </div>
          <div class="history-label">HISTORY</div>
          <h2>Based in Alberta, Canada</h2>
          <p>Founded in 2021, Wires &amp; Stone was created to connect raw mineral beauty with intricate wire wrapping.</p>
          <div class="history-rule"></div>
          <div class="established">Established 2021</div>
        </div>

        <div class="craft-info">
          <div class="script-label">Handcrafted Precision</div>
          <h2>Here's Some Information:</h2>
          <p>At <strong>Wires &amp; Stone</strong>, each piece begins with hand-selected raw crystals. Through delicate wire wrapping, and precise cold tension techniques, every design highlights the natural beauty of the stone(s), and gem(s) chosen, for your own beautiful piece.</p>
          <p>Specific metallic wire selections, chain styles, and custom gem requests are tailored entirely by private arrangement. Reach out directly to discuss bespoke commissions or special stone wraps.</p>

          <div class="craft-cards">
            <article>
              <div class="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="m5 12 11-7 11 7-2.4 11-8.6 5-8.6-5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                  <path d="m5 12 11 8 11-8M16 5v15M8 22l8-2 8 2" fill="none" stroke="currentColor" stroke-width="1.4"/>
                </svg>
              </div>
              <h3>Raw Crystals</h3>
              <small>Authentic natural mineral points</small>
            </article>

            <article>
              <div class="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M10 22c7-1 12-6 13-14-8 1-13 6-14 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                  <path d="M10 22 21 11M13 19l4-1M12 15l4-1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </div>
              <h3>Custom Wraps</h3>
              <small>Hand-manipulated wire weaving</small>
            </article>

            <article>
              <div class="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M7 16.5c1-2.1 3-2.2 5-.7l4 3.2 4.5-5.3c1.6-1.8 4.6-.3 3.5 1.9l-3.7 6.9c-.9 1.7-2.7 2.8-4.6 2.8H11L7 21zM9.5 12.5l3.5-3a2 2 0 0 1 2.6 3l-1.5 1.2M15.5 12.5l3.1-3a2 2 0 0 1 2.6 3l-2.3 2.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Private Request</h3>
              <small>Arranged by direct email</small>
            </article>
          </div>
        </div>
      </section>

      <section class="catalog section" id="catalog">
        <div class="catalog-heading">
          <div class="script-label">Digital Catalog</div>
          <h2>Gallery Status</h2>
          <div class="heading-rule"></div>
        </div>

        <div class="catalog-panel">
          <div class="catalog-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M9 13h14M16 7v4m-7.5 14 2.7-6.2L15 16l4.2 3.2 3.3-5.1L26 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="15.5" r="9.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
            </svg>
          </div>

          <div class="status-badge"><span class="clock-dot">◷</span> GALLERY UNDER CONSTRUCTION</div>
          <h3>Work in Progress</h3>
          <p>The web catalog is currently under construction, while I navigate production of the website. All custom requests and available inventory are managed by private arrangement.</p>

          <div class="catalog-note">To view my beautiful pieces, crystal wraps, and past work, please visit my official Instagram account directly at <strong>@wiresandstone</strong>.</div>

          <a class="pill-button rose-button catalog-button" href="https://instagram.com/wiresandstone" target="_blank" rel="noopener">
            <span class="ig-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor"/>
              </svg>
            </span>
            VISIT INSTAGRAM @WIRESANDSTONE
            <span class="external-icon" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section class="inquiry section" id="inquiry">
        <div class="inquiry-panel">
          <div class="inquiry-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="m6 15 19-9-6.8 19-4.3-8.2z" fill="currentColor"/>
              <path d="m13.9 16.8 8.2-8" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="script-label">Inquiries</div>
          <h2>Private Arrangement</h2>
          <p>For custom raw stone wraps, commission details, or private inquiries, please reach out directly via email.</p>

          <div class="inquiry-actions">
            <a class="pill-button rose-button" href="mailto:wiresandstone@gmail.com">
              <span class="mail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                </svg>
              </span>
              OPEN E-MAIL SERVICE
            </a>

            <button class="pill-button outline-button" id="copyEmailBtn" type="button">
              <span class="copy-icon" aria-hidden="true">▣</span>
              COPY EMAIL ADDRESS
            </button>
          </div>

          <div class="direct-email">Direct Email: <a href="mailto:wiresandstone@gmail.com">wiresandstone@gmail.com</a></div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-card">
          <div class="footer-card-top">
            <span>[ LEAD ARCHITECT &amp; DEVELOPER ]</span>
            <span>VERIFIED DESIGNER</span>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-main">
            <div class="footer-icon">
              <svg viewBox="0 0 32 32">
                <circle cx="11" cy="10" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/>
                <path d="M4.5 23c.7-4.2 3.1-6.3 6.6-6.3 2.2 0 4.1.8 5.4 2.5M19 18l2 1.2 2-.8 1.8 1.5-.5 2.2 1 1.9-1.5 1.7-2-.5-1.8 1-1.9-1.4.3-2.2-1-1.7z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="footer-kicker">SYSTEM ARCHITECT &amp; LEAD ENGINEER</div>
              <div class="footer-title">DESIGNED AND CODED BY</div>
              <div class="footer-accent">MR. JAEDEN VALLÉE</div>
            </div>
          </div>
        </div>

        <div class="footer-card">
          <div class="footer-card-top">
            <span>[ CYBERSECURITY SERVICES ]</span>
            <span>GUARANTEED SAFETY</span>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-main">
            <div class="footer-icon">
              <svg viewBox="0 0 32 32">
                <path d="m16 4 9 3.6v6.7c0 6-3.5 10.7-9 13.7-5.5-3-9-7.7-9-13.7V7.6z" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <path d="M12.5 16.5 15 19l5-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="footer-kicker">SECURITY INFRASTRUCTURE &amp; PROTOCOL</div>
              <div class="footer-title">SECURED BY</div>
              <div class="footer-accent">VALLÉE CYBER-DEFENCE</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-copyright"><i></i> © 2026 Wires &amp; Stone. All Rights Reserved.</span>
        <span class="footer-links">
          <a href="https://instagram.com/wiresandstone" target="_blank" rel="noopener">@wiresandstone</a>
          <b>|</b>
          <a href="mailto:wiresandstone@gmail.com">wiresandstone@gmail.com</a>
        </span>
      </div>
    </footer>
  </div>
`;

const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const copyEmailBtn = document.querySelector('#copyEmailBtn');

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mainNav.classList.toggle('is-open', !open);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
  });
});

copyEmailBtn?.addEventListener('click', async () => {
  const email = 'wiresandstone@gmail.com';

  try {
    await navigator.clipboard.writeText(email);
    copyEmailBtn.innerHTML = '<span class="copy-icon" aria-hidden="true">✓</span> COPIED — wiresandstone@gmail.com';

    setTimeout(() => {
      copyEmailBtn.innerHTML = '<span class="copy-icon" aria-hidden="true">▣</span> COPY EMAIL ADDRESS';
    }, 2200);
  } catch {
    window.location.href = \`mailto:\${email}\`;
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const selector = link.getAttribute('href');
    const target = document.querySelector(selector);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
