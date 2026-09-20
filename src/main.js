import './style.css';
import { createIcons } from 'lucide';

const email = 'wiresandstone@gmail.com';

// Public visual assets. These are open-licensed SVGs, not stock jewelry photography.
const PUBLIC_SVG = {
  gem: 'https://www.svgrepo.com/show/318283/gem-jewelry-gemstone.svg',
  jewel: 'https://www.svgrepo.com/show/318282/gem-jewelry-gemstone-jewel.svg',
  crystal: 'https://www.svgrepo.com/show/373532/crystal.svg',
  crystals: 'https://www.svgrepo.com/show/499101/crystals.svg'
};

const externalSvg = (src, cls = '', alt = '') =>
  `<img class="public-svg ${cls}" src="${src}" alt="${alt}" loading="eager" decoding="async" referrerpolicy="no-referrer" />`;

document.querySelector('#app').innerHTML = `
<div class="site-shell" id="top">
  <div class="paper-wash"></div>
  <header class="site-header">
    <div class="top-strip wrap-wide">
      <span>ALBERTA, CANADA • EST. 2021</span>
      <a href="https://jaeden.pages.dev" target="_blank" rel="noreferrer">DESIGNER - HTTPS://JAEDEN.PAGES.DEV</a>
    </div>

    <div class="nav-wrap wrap-wide">
      <a class="brand" href="#top" aria-label="Wires & Stone home">
        <span class="brand-symbol" aria-hidden="true">
          ${externalSvg(PUBLIC_SVG.gem, 'brand-gem')}
        </span>
        <span>Wires <em>&</em> STONE</span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="#top">HOME</a>
        <a href="#craft">THE CRAFT</a>
        <a href="#catalog">CATALOG STATUS</a>
        <a href="#inquiry">PRIVATE INQUIRY</a>
      </nav>
      <a class="email-pill" href="mailto:wiresandstone@gmail.com">DIRECT EMAIL <i data-lucide="arrow-up-right"></i></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation"><i data-lucide="menu"></i></button>
    </div>

    <div class="mobile-nav" id="mobile-nav">
      <a href="#top">HOME</a>
      <a href="#craft">THE CRAFT</a>
      <a href="#catalog">CATALOG STATUS</a>
      <a href="#inquiry">PRIVATE INQUIRY</a>
      <a href="mailto:wiresandstone@gmail.com">DIRECT EMAIL</a>
    </div>
  </header>

  <main>
    <section class="hero wrap-wide section-pad">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span>RAW MINERAL ART</span><i data-lucide="sparkles"></i></div>
        <h1>Be elegant,<br><i>feel elegant.</i></h1>
        <div class="hero-script">Connect with the wires, and walk with the stones.</div>
        <p>Bespoke, handcrafted mineral wire art by Wires & Stone. Hand-wrapped around natural raw crystals and unheated gems. Tailored by private arrangement.</p>
        <div class="actions">
          <a class="btn btn-dark" href="https://www.instagram.com/wiresandstone" target="_blank" rel="noreferrer">VISIT @WIRESANDSTONE <i data-lucide="arrow-up-right"></i></a>
          <a class="btn btn-light" href="#inquiry">PRIVATE COMMISSION <i data-lucide="plus"></i></a>
        </div>
        <div class="microline"><span>HANDCRAFTED PRECISION</span><b>·</b><span>PRIVATE ARRANGEMENT</span><b>·</b><span>ALBERTA, CANADA</span></div>
      </div>

      <div class="hero-atelier reveal">
        <div class="atelier-frame">
          <div class="atelier-labels">
            <span>01 / 03</span>
            <strong>Wires & Stone</strong>
            <span>RAW MINERAL ART</span>
          </div>
          <div class="wood-panel">
            <div class="pattern-glow pattern-one"></div>
            <div class="pattern-glow pattern-two"></div>
            ${externalSvg(PUBLIC_SVG.crystals, 'hero-public-art crystal-stack')}
            ${externalSvg(PUBLIC_SVG.gem, 'hero-public-art hero-gem')}
            ${externalSvg(PUBLIC_SVG.jewel, 'hero-public-art hero-jewel')}
            <div class="atelier-seal">
              <span class="seal-ring"><i data-lucide="gem"></i></span>
              <strong>W<span>&</span>S</strong>
              <small>ALBERTA • 2021</small>
            </div>
            <div class="atelier-thread thread-a"></div>
            <div class="atelier-thread thread-b"></div>
            <div class="atelier-thread thread-c"></div>
            <div class="asset-caption">OPEN-LICENSED SVG ART / GEMSTONE + CRYSTAL SET</div>
          </div>
        </div>
      </div>
    </section>

    <section class="statement-band">
      <div class="wrap-wide statement-inner">
        <span class="band-number">01</span>
        <div class="band-copy">
          <span class="band-script">Wires & Stone</span>
          <strong>RAW MINERAL ART</strong>
          <p>Artisan hand-woven wire wrapping around natural gemstones and raw mineral points.</p>
        </div>
        <span class="origin">Alberta, Canada • Est. 2021</span>
      </div>
    </section>

    <section class="wrap-wide craft section-pad" id="craft">
      <div class="section-head reveal">
        <span class="script-label">HISTORY</span>
        <h2>Based in Alberta,<br><i>Canada</i></h2>
        <div class="ornamental-rule"><span></span><b></b><span></span></div>
      </div>

      <div class="craft-grid">
        <article class="history-card reveal">
          <div class="card-topline"><span>ESTABLISHED 2021</span><span>W&S / 001</span></div>
          <div class="history-art">
            ${externalSvg(PUBLIC_SVG.crystal, 'history-crystal')}
            <span class="history-monogram">W<span>&</span>S</span>
          </div>
          <p>Founded in 2021, Wires & Stone was created to connect raw mineral beauty with intricate wire wrapping.</p>
          <div class="card-bottomline"><span>HANDCRAFTED</span><span>ALBERTA</span></div>
        </article>

        <div class="craft-info">
          <div class="craft-intro reveal">
            <span class="script-label">Established 2021</span>
            <h3>Handcrafted Precision</h3>
            <strong>Here's Some Information:</strong>
          </div>
          <div class="craft-text reveal">
            <p>At Wires & Stone, each piece begins with hand-selected raw crystals. Through delicate wire wrapping, and precise cold tension techniques, every design highlights the natural beauty of the stone(s), and gem(s) chosen, for your own beautiful piece.</p>
            <p>Specific metallic wire selections, chain styles, and custom gem requests are tailored entirely by private arrangement. Reach out directly to discuss bespoke commissions or special stone wraps.</p>
          </div>

          <div class="spec-list">
            <div class="spec reveal">
              <span class="spec-icon"><i data-lucide="gem"></i></span>
              <span><strong>Raw Crystals</strong><small>Authentic natural mineral points</small></span>
              <i data-lucide="arrow-up-right"></i>
            </div>
            <div class="spec reveal">
              <span class="spec-icon"><i data-lucide="waves"></i></span>
              <span><strong>Custom Wraps</strong><small>Hand-manipulated wire weaving</small></span>
              <i data-lucide="arrow-up-right"></i>
            </div>
            <div class="spec reveal">
              <span class="spec-icon"><i data-lucide="mail"></i></span>
              <span><strong>Private Request</strong><small>Arranged by direct email</small></span>
              <i data-lucide="arrow-up-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="catalog-wrap section-pad" id="catalog">
      <div class="wrap-wide">
        <div class="section-head centered reveal">
          <span class="script-label">Digital Catalog</span>
          <h2>Gallery Status</h2>
          <div class="ornamental-rule"><span></span><b></b><span></span></div>
        </div>

        <article class="catalog-card reveal">
          <div class="catalog-art-panel">
            <div class="public-emblem">
              ${externalSvg(PUBLIC_SVG.jewel, 'catalog-public-art')}
              <span class="emblem-ring"></span>
              <span class="emblem-ring second"></span>
            </div>
            <div class="catalog-stamp"><i data-lucide="circle-dashed"></i><span>GALLERY / 00</span></div>
          </div>
          <div class="catalog-copy">
            <span class="status-pill"><i data-lucide="loader-circle"></i> CURRENTLY BUILDING</span>
            <h3>GALLERY UNDER CONSTRUCTION</h3>
            <div class="script-small">Work in Progress</div>
            <p>The web catalog is currently under construction, while I navigate production of the website. All custom requests and available inventory are managed by private arrangement.</p>
            <p>To view my beautiful pieces, crystal wraps, and past work, please visit my official Instagram account directly at @wiresandstone.</p>
            <a class="btn btn-dark" href="https://www.instagram.com/wiresandstone" target="_blank" rel="noreferrer">VISIT INSTAGRAM @WIRESANDSTONE <i data-lucide="brand-instagram"></i></a>
          </div>
          <span class="vertical-note">PUBLIC SVG ASSETS / NO PRODUCT PHOTOGRAPHY</span>
        </article>
      </div>
    </section>

    <section class="wrap-wide inquiry section-pad" id="inquiry">
      <article class="inquiry-card reveal">
        <div class="inquiry-art">
          <div class="inquiry-emblem">
            ${externalSvg(PUBLIC_SVG.gem, 'inquiry-public-art')}
            <span class="emblem-ring"></span>
            <span class="emblem-ring second"></span>
          </div>
        </div>
        <div class="inquiry-copy">
          <span class="script-label">Inquiries</span>
          <h2>Private Arrangement</h2>
          <p>For custom raw stone wraps, commission details, or private inquiries, please reach out directly via email.</p>
          <div class="actions">
            <a class="btn btn-dark" href="mailto:wiresandstone@gmail.com">OPEN E-MAIL SERVICE <i data-lucide="mail"></i></a>
            <button class="btn btn-light" id="copy" type="button">COPY EMAIL ADDRESS <i data-lucide="copy"></i></button>
          </div>
          <div class="direct">Direct Email: <span>wiresandstone@gmail.com</span></div>
        </div>
      </article>
    </section>
  </main>

  <footer>
    <div class="wrap-wide footer-shell">
      <div class="footer-top">
        <div>
          <small>WIRES & STONE / PRIVATE MINERAL ART</small>
          <h2>Crafted by hand.<br><i>Secured by design.</i></h2>
        </div>
        <span>ALBERTA, CANADA<br>EST. 2021</span>
      </div>

      <div class="security-grid">
        <article class="security green">
          <div class="security-top"><span>[ LEAD ARCHITECT & DEVELOPER ]</span><b>01</b></div>
          <div class="badge">
            <span class="badge-seal"><i data-lucide="code-2"></i></span>
            <div><small>VERIFIED DESIGNER</small><strong>SYSTEM ARCHITECT & LEAD ENGINEER</strong></div>
          </div>
          <p>DESIGNED AND CODED BY MR. JAEDEN VALLÉE</p>
          <div class="statusline"><span>DESIGN SYSTEM / ACTIVE</span><span>BUILD / VERIFIED</span></div>
        </article>
        <article class="security cyan">
          <div class="security-top"><span>[ CYBERSECURITY SERVICES ]</span><b>02</b></div>
          <div class="badge">
            <span class="badge-seal"><i data-lucide="shield-check"></i></span>
            <div><small>GUARANTEED SAFETY</small><strong>SECURITY INFRASTRUCTURE & PROTOCOL</strong></div>
          </div>
          <p>SECURED BY VALLÉE CYBER-DEFENCE</p>
          <div class="statusline"><span>PROTOCOL / ENFORCED</span><span>STATUS / SECURE</span></div>
        </article>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Wires & Stone. All Rights Reserved.</span>
        <a href="https://www.instagram.com/wiresandstone" target="_blank" rel="noreferrer">@wiresandstone</a>
        <a href="mailto:wiresandstone@gmail.com">wiresandstone@gmail.com</a>
      </div>
    </div>
  </footer>
  <button class="back" id="back" type="button" aria-label="Back to top"><i data-lucide="arrow-up"></i></button>
</div>`;

createIcons({
  attrs: {
    'stroke-width': 1.4,
    'aria-hidden': 'true'
  }
});

document.querySelectorAll('.public-svg').forEach((img) => {
  img.addEventListener('error', () => img.classList.add('asset-failed'));
});

document.querySelector('#copy')?.addEventListener('click', async () => {
  const button = document.querySelector('#copy');
  try {
    await navigator.clipboard.writeText(email);
    button.innerHTML = 'COPIED — wiresandstone@gmail.com <i data-lucide="check"></i>';
    createIcons({ attrs: { 'stroke-width': 1.4, 'aria-hidden': 'true' } });
    setTimeout(() => {
      button.innerHTML = 'COPY EMAIL ADDRESS <i data-lucide="copy"></i>';
      createIcons({ attrs: { 'stroke-width': 1.4, 'aria-hidden': 'true' } });
    }, 2200);
  } catch {
    window.location.href = 'mailto:' + email;
  }
});

const mobileButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
mobileButton?.addEventListener('click', () => {
  const open = mobileButton.getAttribute('aria-expanded') === 'true';
  mobileButton.setAttribute('aria-expanded', String(!open));
  mobileNav.classList.toggle('open', !open);
});
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileButton?.setAttribute('aria-expanded', 'false');
  mobileNav?.classList.remove('open');
}));

const back = document.querySelector('#back');
window.addEventListener('scroll', () => back.classList.toggle('show', scrollY > 700));
back?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((node) => io.observe(node));
