(function () {
  'use strict';

  const sectionMap = {
    'home-section': 'sections/home.html',
    'about-section': 'sections/about.html',
    'services-section': 'sections/services.html',
    'faq-section': 'sections/faq.html',
    'contact-section': 'sections/contact.html'
  };

  const sectionVersion = '4';

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

  function loadSection(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const resolvedPath = new URL(filePath, getBaseUrl());
    resolvedPath.searchParams.set('v', sectionVersion);

    fetch(resolvedPath, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Failed to load ' + resolvedPath.toString());
        }
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;
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
