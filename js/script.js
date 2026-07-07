/**
 * Niroga Oil Care - Premium Website Scripts
 * Vanilla JavaScript - No dependencies
 */

(function () {
  'use strict';

  /* ============================================
     TRANSLATIONS (Sinhala / English)
     ============================================ */
  const translations = {
    si: {
      loaderName: 'නිරෝගා ඔයිල් කෙයාර්',
      logoShort: 'නිරෝගා ඔයිල් කෙයාර්',
      navHome: 'මුල් පිටුව',
      navAbout: 'අප ගැන',
      navServices: 'සේවාවන්',
      navBenefits: 'ප්‍රයෝජන',
      navFaq: 'නිති අසන ප්‍රශ්න',
      navContact: 'සම්බන්ධ වන්න',
      callNow: 'ඇමතුම් කරන්න',
      heroBadge: '2025 සිට · ශ්‍රී ලංකාවේ ප්‍රමුඛ සුවසනැගි මධ්‍යස්ථානය',
      heroTitle: 'නිරෝගී දිවියට සෞඛ්‍යමත් ස්පර්ශයක්',
      heroSubtitle: 'ශ්‍රී ලංකාවේ සම්ප්‍රදායික ඔයිල් මසාජ්, ආයුර්වේදී ප්‍රතිකාර සහ ස්වභාවික සුවය සඳහා විශ්වාසදායක මධ්‍යස්ථානයක්.',
      heroCtaContact: 'සම්බන්ධ වන්න',
      heroCtaExplore: 'සේවාවන් බලන්න',
      aboutLabel: 'අප ගැන',
      aboutTitle: 'නිරෝගා  ඔයිල් කෙයාර්',
      aboutDesc: 'ශ්‍රී ලංකාවේ සම්ප්‍රදායික ඔයිල් මසාජ් සහ සුවසනැගි මධ්‍යස්ථානයක් ලෙස, අපි ආයුර්වේදී ප්‍රතිකාර, ශාක ඖෂධ තෙල් ප්‍රතිකාර සහ ස්වභාවික සුව සේවා ලබා දෙමු.',
      aboutFounded: 'පිහිටුවන ලදී',
      aboutStoryTitle: 'අපගේ කතාව',
      aboutStory: 'නිරෝගා  ඔයිල් කෙයාර් (පුද්) සමාගම 2025 දී පිහිටුවන ලද premium wellness මධ්‍යස්ථානයකි. ශ්‍රී ලංකාවේ පරම්පරාගත ඔයිල් මසාජ් ශිල්පය නවීන සුවසනැගි ප්‍රමිතීන් සමඟ සම්බන්ධ කර, සෑම පාරිභෝගිකයෙකුටම සත්‍ය සුව අත්දැකීමක් ලබා දෙමු.',
      aboutMissionTitle: 'මෙහෙවර',
      aboutMission: '100% ශාක ඖෂධ තෙල් සහ සම්ප්‍රදායික ආයුර්වේදී ක්‍රම මගින් ස්වභාවික සුවය ප්‍රවර්ධනය කිරීම.',
      aboutVisionTitle: 'දර්ශනය',
      aboutVision: 'ශ්‍රී ලංකාවේ විශ්වාසදායක සම්ප්‍රදායික ඔයිල් මසාජ් සහ wellness සන්නාමය බවට පත්වීම.',
      founderMessage: '"සෑම පුද්ගලයෙකුටම ස්වභාවික wellness හරහා සමතුලිත, වේදනාවක් රහිත ජීවිතයක් ලබා ගත හැකි බව අපි විශ්වාස කරමු. අපගේ therapists පරම්පරාගත දැනුම සහ නවීන සුවසනැගි ප්‍රමිතීන් එකට මුසු කරමු."',
      founderName: '— කළමනාකාර අධ්‍යක්ෂක, නිරෝගා ',
      whyLabel: 'ඇයි අප?',
      whyTitle: 'අපව තෝරා ගත යුත්තේ ඇයි',
      why2Title: '100% Herbal Oils',
      why2Desc: 'Pure, natural oils sourced from authentic Sri Lankan herbs.',
      why3Title: 'Traditional Ayurvedic Methods',
      why3Desc: 'Time-honored techniques passed down through generations.',
      why4Title: 'Comfortable Environment',
      why4Desc: 'Serene, hygienic spaces designed for complete relaxation.',
      why5Title: 'Affordable Prices',
      why5Desc: 'Premium quality treatments at accessible, fair pricing.',
      why6Title: 'Trusted Service',
      why6Desc: 'Hundreds of satisfied clients and glowing reviews.',
      servicesLabel: 'සේවාවන්',
      servicesTitle: 'විශේෂ සුවසනැගි සේවාවන්',
      servicesDesc: 'සම්ප්‍රදායික ඔයිල් මසාජ් සිට විශේෂිත වේදනා නිවාරණ ප්‍රතිකාර දක්වා — සෑම treatment එකක්ම පෞද්ගලික care සමඟ.',
      svc1Title: 'Traditional Oil Massage',
      svc1Desc: 'Authentic Sri Lankan oil massage using warm herbal oils for deep relaxation.',
      svc2Title: 'Head Massage',
      svc2Desc: 'Relieve tension, headaches, and stress with specialized scalp therapy.',
      svc3Title: 'Foot Therapy',
      svc3Desc: 'Reflexology-based foot massage for improved circulation and relief.',
      svc4Title: 'Neck & Shoulder Therapy',
      svc4Desc: 'Targeted treatment for office stress, stiffness, and muscle tension.',
      svc5Title: 'Full Body Relaxation',
      svc5Desc: 'Complete body treatment for total mind and body rejuvenation.',
      svc6Title: 'Sports Massage',
      svc6Desc: 'Athletic recovery massage to enhance performance and prevent injury.',
      svc7Title: 'Pain Relief Therapy',
      svc7Desc: 'Specialized treatment for chronic pain, arthritis, and joint issues.',
      svc8Title: 'Herbal Oil Treatment',
      svc8Desc: 'Custom-blended herbal oils for skin nourishment and deep healing.',
      svcContact: 'Learn More →',
      processLabel: 'Treatment Process',
      processTitle: 'Your Journey to Wellness',
      step1Title: 'Consultation',
      step1Desc: 'Discuss your health needs and wellness goals.',
      step2Title: 'Health Assessment',
      step2Desc: 'Professional evaluation of your condition.',
      step3Title: 'Oil Selection',
      step3Desc: 'Custom herbal oil blend chosen for you.',
      step4Title: 'Treatment Session',
      step4Desc: 'Expert massage therapy in a serene setting.',
      step5Title: 'Relaxation',
      step5Desc: 'Post-treatment rest for maximum benefit.',
      step6Title: 'After Care Advice',
      step6Desc: 'Personalized tips for lasting wellness.',
      benefitsLabel: 'ප්‍රයෝජන',
      benefitsTitle: 'Wellness Benefits',
      ben1Title: 'Pain Relief',
      ben1Desc: 'Alleviates muscle and joint pain naturally.',
      ben2Title: 'Stress Reduction',
      ben2Desc: 'Calms the mind and reduces anxiety.',
      ben3Title: 'Better Sleep',
      ben3Desc: 'Promotes deeper, more restful sleep.',
      ben4Title: 'Healthy Blood Circulation',
      ben4Desc: 'Improves blood flow and oxygen delivery.',
      ben5Title: 'Muscle Recovery',
      ben5Desc: 'Accelerates recovery after physical activity.',
      ben6Title: 'Natural Healing',
      ben6Desc: "Supports the body's innate healing ability.",
      counter1: 'Happy Clients',
      counter2: 'Treatments Completed',
      counter3: 'Wellness Services',
      counter4: 'Client Satisfaction',
      faqLabel: 'නිති අසන ප්‍රශ්න',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'What types of oil massage do you offer?',
      faq1A: 'We offer traditional Sri Lankan oil massage, head massage, foot therapy, neck & shoulder therapy, full body relaxation, sports massage, pain relief therapy, and custom herbal oil treatments.',
      faq2Q: 'Are your oils 100% natural?',
      faq2A: 'Yes, we use only 100% herbal and natural oils sourced from authentic Sri Lankan herbs. No synthetic additives or chemicals are used in our treatments.',
      faq3Q: 'How long does a typical session last?',
      faq3A: 'Sessions typically range from 45 minutes to 90 minutes depending on the treatment type. We recommend allowing extra time for consultation and post-treatment relaxation.',
      faq4Q: 'How can I reach you for inquiries?',
      faq4A: 'You can call us directly, message us on WhatsApp, or visit our center during business hours. Our team will gladly assist you with treatment information and availability.',
      faq5Q: 'What should I wear for a massage session?',
      faq5A: 'Comfortable, loose clothing is recommended. We provide clean towels and drapes for your privacy and comfort during the treatment.',
      ctaLabel: 'Get Started',
      ctaTitle: 'Begin Your Wellness Journey Today',
      ctaDesc: 'Reach out by phone or WhatsApp — our team is ready to guide you toward natural healing and relaxation.',
      ctaWhatsapp: 'WhatsApp Us',
      contactLabel: 'සම්බන්ධ වන්න',
      contactTitle: 'Get In Touch',
      contactPhone: 'Phone',
      contactWhatsapp: 'WhatsApp',
      contactEmail: 'Facebook',
      contactHours: 'Business Hours',
      contactHoursVal: '24 Hours Open',
      contactAddress: 'Address',
      contactAddressVal: 'No/96,මහවැලි නිවාස, පල්ලෙකැලේ, කුණ්ඩසාලේ, මහනුවර',
      footerBrand: 'නිරෝගා ඔයිල් කෙයාර්',
      footerDesc: 'Premium Sri Lankan traditional oil massage and wellness center. Your journey to natural healing starts here.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerCopyright: 'නිරෝගා ඔයිල් කෙයාර් (පුද්) සමාගම. සියලුම අයිතිවාසිකම් ඇවිරිණි.',
      footerPrivacy: 'Privacy Policy'
    },
    en: {
      loaderName: 'Niroga Oil Care',
      logoShort: 'Niroga Oil Care',
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navBenefits: 'Benefits',
      navFaq: 'FAQ',
      navContact: 'Contact',
      callNow: 'Call Now',
      heroBadge: 'Since 2025 · Sri Lanka\'s Premier Wellness Center',
      heroTitle: 'A Healthy Touch for a Healthy Life',
      heroSubtitle: 'A trusted wellness center offering traditional Sri Lankan oil massage, Ayurvedic treatments, and natural healing therapies.',
      heroCtaContact: 'Contact Us',
      heroCtaExplore: 'Explore Services',
      aboutLabel: 'About Us',
      aboutTitle: 'Niroga  Oil Care',
      aboutDesc: 'As a premium Sri Lankan traditional oil massage and wellness center, we provide Ayurvedic treatments, herbal oil therapies, and natural healing services.',
      aboutFounded: 'Founded',
      aboutStoryTitle: 'Our Story',
      aboutStory: 'Niroga Oil Care (Pvt) Ltd was established in 2025 as a premium wellness center. We blend Sri Lanka\'s traditional oil massage artistry with modern wellness standards to deliver an authentic healing experience for every client.',
      aboutMissionTitle: 'Mission',
      aboutMission: 'To promote natural healing through 100% herbal oils and traditional Ayurvedic methods.',
      aboutVisionTitle: 'Vision',
      aboutVision: 'To become Sri Lanka\'s most trusted traditional oil massage and wellness brand.',
      founderMessage: '"We believe everyone deserves a balanced, pain-free life through natural wellness. Our therapists combine generational knowledge with modern care standards."',
      founderName: '— Managing Director, Niroga Vishwajaya',
      whyLabel: 'Why Us',
      whyTitle: 'Why Choose Us',
      why1Title: 'Experienced Therapists',
      why1Desc: 'Certified professionals with years of traditional massage expertise.',
      why2Title: '100% Herbal Oils',
      why2Desc: 'Pure, natural oils sourced from authentic Sri Lankan herbs.',
      why3Title: 'Traditional Ayurvedic Methods',
      why3Desc: 'Time-honored techniques passed down through generations.',
      why4Title: 'Comfortable Environment',
      why4Desc: 'Serene, hygienic spaces designed for complete relaxation.',
      why5Title: 'Affordable Prices',
      why5Desc: 'Premium quality treatments at accessible, fair pricing.',
      why6Title: 'Trusted Service',
      why6Desc: 'Hundreds of satisfied clients and glowing reviews.',
      servicesLabel: 'Services',
      servicesTitle: 'Premium Wellness Treatments',
      servicesDesc: 'From traditional oil massage to specialized pain relief therapies — every treatment comes with personalized care.',
      svc1Title: 'Traditional Oil Massage',
      svc1Desc: 'Authentic Sri Lankan oil massage using warm herbal oils for deep relaxation.',
      svc2Title: 'Head Massage',
      svc2Desc: 'Relieve tension, headaches, and stress with specialized scalp therapy.',
      svc3Title: 'Foot Therapy',
      svc3Desc: 'Reflexology-based foot massage for improved circulation and relief.',
      svc4Title: 'Neck & Shoulder Therapy',
      svc4Desc: 'Targeted treatment for office stress, stiffness, and muscle tension.',
      svc5Title: 'Full Body Relaxation',
      svc5Desc: 'Complete body treatment for total mind and body rejuvenation.',
      svc6Title: 'Sports Massage',
      svc6Desc: 'Athletic recovery massage to enhance performance and prevent injury.',
      svc7Title: 'Pain Relief Therapy',
      svc7Desc: 'Specialized treatment for chronic pain, arthritis, and joint issues.',
      svc8Title: 'Herbal Oil Treatment',
      svc8Desc: 'Custom-blended herbal oils for skin nourishment and deep healing.',
      svcContact: 'Learn More →',
      processLabel: 'Treatment Process',
      processTitle: 'Your Journey to Wellness',
      step1Title: 'Consultation',
      step1Desc: 'Discuss your health needs and wellness goals.',
      step2Title: 'Health Assessment',
      step2Desc: 'Professional evaluation of your condition.',
      step3Title: 'Oil Selection',
      step3Desc: 'Custom herbal oil blend chosen for you.',
      step4Title: 'Treatment Session',
      step4Desc: 'Expert massage therapy in a serene setting.',
      step5Title: 'Relaxation',
      step5Desc: 'Post-treatment rest for maximum benefit.',
      step6Title: 'After Care Advice',
      step6Desc: 'Personalized tips for lasting wellness.',
      benefitsLabel: 'Benefits',
      benefitsTitle: 'Wellness Benefits',
      ben1Title: 'Pain Relief',
      ben1Desc: 'Alleviates muscle and joint pain naturally.',
      ben2Title: 'Stress Reduction',
      ben2Desc: 'Calms the mind and reduces anxiety.',
      ben3Title: 'Better Sleep',
      ben3Desc: 'Promotes deeper, more restful sleep.',
      ben4Title: 'Healthy Blood Circulation',
      ben4Desc: 'Improves blood flow and oxygen delivery.',
      ben5Title: 'Muscle Recovery',
      ben5Desc: 'Accelerates recovery after physical activity.',
      ben6Title: 'Natural Healing',
      ben6Desc: "Supports the body's innate healing ability.",
      counter1: 'Happy Clients',
      counter2: 'Treatments Completed',
      counter3: 'Wellness Services',
      counter4: 'Client Satisfaction',
      faqLabel: 'FAQ',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'What types of oil massage do you offer?',
      faq1A: 'We offer traditional Sri Lankan oil massage, head massage, foot therapy, neck & shoulder therapy, full body relaxation, sports massage, pain relief therapy, and custom herbal oil treatments.',
      faq2Q: 'Are your oils 100% natural?',
      faq2A: 'Yes, we use only 100% herbal and natural oils sourced from authentic Sri Lankan herbs. No synthetic additives or chemicals are used in our treatments.',
      faq3Q: 'How long does a typical session last?',
      faq3A: 'Sessions typically range from 45 minutes to 90 minutes depending on the treatment type. We recommend allowing extra time for consultation and post-treatment relaxation.',
      faq4Q: 'How can I reach you for inquiries?',
      faq4A: 'You can call us directly, message us on WhatsApp, or visit our center during business hours. Our team will gladly assist you with treatment information and availability.',
      faq5Q: 'What should I wear for a massage session?',
      faq5A: 'Comfortable, loose clothing is recommended. We provide clean towels and drapes for your privacy and comfort during the treatment.',
      ctaLabel: 'Get Started',
      ctaTitle: 'Begin Your Wellness Journey Today',
      ctaDesc: 'Reach out by phone or WhatsApp — our team is ready to guide you toward natural healing and relaxation.',
      ctaWhatsapp: 'WhatsApp Us',
      contactLabel: 'Contact',
      contactTitle: 'Get In Touch',
      contactPhone: 'Phone',
      contactWhatsapp: 'WhatsApp',
      contactEmail: 'Email',
      contactHours: 'Business Hours',
      contactHoursVal: '24 Hours Open',
      contactAddress: 'Address',
      contactAddressVal: 'No/96, Mahaweli Niwasa, Pallekale, Kundasale, Kandy',
      footerBrand: 'Niroga Traditional Oil Care',
      footerDesc: 'Premium Sri Lankan traditional oil massage and wellness center. Your journey to natural healing starts here.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerCopyright: 'Niroga Traditional Oil Care (Pvt) Ltd. All rights reserved.',
      footerPrivacy: 'Privacy Policy'
    }
  };

  let currentLang = localStorage.getItem('niroga-lang') || 'si';

  /* ============================================
     DOM ELEMENTS
     ============================================ */
  const loader = document.getElementById('loader');
  const scrollProgress = document.getElementById('scrollProgress');
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const backToTop = document.getElementById('backToTop');

  let loaderInitialized = false;
  let scrollProgressInitialized = false;
  let headerInitialized = false;
  let mobileNavInitialized = false;
  let parallaxInitialized = false;
  let countersInitialized = false;
  let backToTopInitialized = false;

  /* ============================================
     LOADING SCREEN
     ============================================ */
  function initLoader() {
    if (loaderInitialized) return;
    loaderInitialized = true;
    document.body.classList.add('loading');

    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        revealHeroElements();
      }, 1800);
    });

    setTimeout(function () {
      if (!loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        revealHeroElements();
      }
    }, 4000);
  }

  function revealHeroElements() {
    document.querySelectorAll('.hero .fade-up').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ============================================
     SCROLL PROGRESS BAR
     ============================================ */
  function initScrollProgress() {
    if (scrollProgressInitialized) return;
    scrollProgressInitialized = true;
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
      scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
    }, { passive: true });
  }

  /* ============================================
     HEADER SCROLL EFFECT
     ============================================ */
  function initHeader() {
    if (headerInitialized) return;
    headerInitialized = true;
    header.classList.add('header--transparent');

    function updateHeader() {
      if (window.scrollY > 60) {
        header.classList.add('header--scrolled');
        header.classList.remove('header--transparent');
      } else {
        header.classList.remove('header--scrolled');
        header.classList.add('header--transparent');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ============================================
     MOBILE NAVIGATION
     ============================================ */
  function initMobileNav() {
    if (mobileNavInitialized) return;
    mobileNavInitialized = true;
    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================
     SMOOTH SCROLL & ACTIVE NAV
     ============================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      if (anchor.getAttribute('data-smooth-scroll-initialized') === 'true') return;
      anchor.setAttribute('data-smooth-scroll-initialized', 'true');
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = header.offsetHeight;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - header.offsetHeight - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  /* ============================================
     SCROLL REVEAL ANIMATIONS
     ============================================ */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
      if (el.getAttribute('data-reveal-initialized') === 'true') return;
      el.setAttribute('data-reveal-initialized', 'true');
      if (!el.closest('.hero')) {
        observer.observe(el);
      }
    });
  }

  /* ============================================
     PARALLAX EFFECT
     ============================================ */
  function initParallax() {
    if (parallaxInitialized) return;
    parallaxInitialized = true;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      parallaxElements.forEach(function (el) {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
        const img = el.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1.1) translateY(' + (scrollY * speed * 0.3) + 'px)';
        }
      });
    }, { passive: true });
  }

  /* ============================================
     ANIMATED COUNTERS
     ============================================ */
  function initCounters() {
    if (countersInitialized) return;
    countersInitialized = true;
    const counters = document.querySelectorAll('.counter-item__num');
    let animated = false;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(function (counter) {
            animateCounter(counter);
          });
        }
      });
    }, { threshold: 0.5 });

    const counterSection = document.querySelector('.counters');
    if (counterSection) observer.observe(counterSection);
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  /* ============================================
     FAQ ACCORDION
     ============================================ */
  function initFAQ() {
    document.querySelectorAll('.faq__item').forEach(function (item) {
      if (item.getAttribute('data-faq-initialized') === 'true') return;
      item.setAttribute('data-faq-initialized', 'true');
      const question = item.querySelector('.faq__question');

      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq__item.active').forEach(function (openItem) {
          openItem.classList.remove('active');
          openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ============================================
     BACK TO TOP
     ============================================ */
  function initBackToTop() {
    if (backToTopInitialized) return;
    backToTopInitialized = true;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================
     LANGUAGE SWITCHER
     ============================================ */
  function initLanguageSwitcher() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      if (btn.getAttribute('data-lang-switcher-initialized') === 'true') return;
      btn.setAttribute('data-lang-switcher-initialized', 'true');
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    setLanguage(currentLang, false);
  }

  function setLanguage(lang, save) {
    if (!translations[lang]) return;
    currentLang = lang;

    if (save !== false) {
      localStorage.setItem('niroga-lang', lang);
    }

    document.documentElement.lang = lang === 'si' ? 'si' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (translations[lang][key].includes('<br>')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
  }

  /* ============================================
     INITIALIZE ALL
     ============================================ */
  function init() {
    initLoader();
    initScrollProgress();
    initHeader();
    initMobileNav();
    initSmoothScroll();
    initScrollReveal();
    initParallax();
    initCounters();
    initFAQ();
    initBackToTop();
    initLanguageSwitcher();
  }

  window.initPageComponents = init;
  window.revealHeroElements = revealHeroElements;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
