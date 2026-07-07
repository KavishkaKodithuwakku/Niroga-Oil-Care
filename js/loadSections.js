(function () {
  'use strict';

  const sectionMap = {
    'home-section': 'sections/home.html',
    'about-section': 'sections/about.html',
    'services-section': 'sections/services.html',
    'faq-section': 'sections/faq.html',
    'contact-section': 'sections/contact.html'
  };

  function getBaseUrl() {
    const url = new URL(window.location.href);
    const pathname = url.pathname.replace(/\/+$/, '');
    const hasFileName = /[^/]+\.[^/]+$/.test(pathname);

    if (hasFileName) {
      url.pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
    } else if (!pathname.endsWith('/')) {
      url.pathname = pathname + '/';
    }

    return url;
  }

  function addSectionBrand(container) {
    if (!container || container.querySelector('.section__brand-badge')) return;

    const badgeMarkup = `
      <div class="section__brand-badge" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="20" fill="rgba(199,165,91,0.15)" stroke="rgba(199,165,91,0.4)" stroke-width="1"/>
          <path d="M22 10 Q28 16 28 22 Q28 28 22 31 Q16 28 16 22 Q16 16 22 10Z" fill="#C7A55B" opacity="0.95"/>
          <path d="M10 19 Q17 21 19 27 Q15 31 10 29 Q7 23 10 19Z" fill="#C7A55B" opacity="0.55"/>
          <path d="M34 19 Q27 21 25 27 Q29 31 34 29 Q37 23 34 19Z" fill="#C7A55B" opacity="0.55"/>
          <path d="M22 7 Q23.5 12 22 15 Q20.5 12 22 7Z" fill="#2ECC8F"/>
          <ellipse cx="22" cy="22" rx="5" ry="6" fill="rgba(23,61,49,0.5)"/>
          <path d="M22 31 Q25 36 22 40 Q19 36 22 31Z" fill="#C7A55B" opacity="0.7"/>
        </svg>
        <span>Niroga Oil Care</span>
      </div>
    `;

    container.insertAdjacentHTML('afterbegin', badgeMarkup);
  }

  function loadSection(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const resolvedPath = new URL(filePath, getBaseUrl()).toString();

    fetch(resolvedPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Failed to load ' + resolvedPath);
        }
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;
        addSectionBrand(container);
        if (typeof window.initPageComponents === 'function') {
          window.initPageComponents();
        }
        if (typeof window.revealHeroElements === 'function') {
          window.revealHeroElements();
        }
      })
      .catch(function (error) {
        console.error(error);
        container.innerHTML = '<p class="section__error">Unable to load section.</p>';
      });
  }

  function initSectionLoader() {
    Object.entries(sectionMap).forEach(function ([containerId, filePath]) {
      loadSection(containerId, filePath);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionLoader);
  } else {
    initSectionLoader();
  }
})();
