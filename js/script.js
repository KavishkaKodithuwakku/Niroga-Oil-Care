/**
 * Niroga Oil Care - Premium Website Scripts v3.0
 * Vanilla JavaScript - No dependencies
 * Features: Particle System, 3D Tilt, Stagger Reveal, Enhanced Counters
 */

(function () {
  'use strict';

  /* ============================================
     TRANSLATIONS (Sinhala / English)
     ============================================ */
  const translations = {
    si: {
      loaderName: 'නිරෝගා ඔයිල් කෙයාර්',
      logoShort: 'නිරෝගා',
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
      faq1A: 'We offer traditional Sri Lankan oil massage, head massage, foot therapy, and neck & shoulder therapy treatments.',
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
      logoShort: 'Niroga',
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navBenefits: 'Benefits',
      navFaq: 'FAQ',
      navContact: 'Contact',
      callNow: 'Call Now',
      heroBadge: "Since 2025 · Sri Lanka's Premier Wellness Center",
      heroTitle: 'A Healthy Touch for a Healthy Life',
      heroSubtitle: 'A trusted wellness center offering traditional Sri Lankan oil massage, Ayurvedic treatments, and natural healing therapies.',
      heroCtaContact: 'Contact Us',
      heroCtaExplore: 'Explore Services',
      aboutLabel: 'About Us',
      aboutTitle: 'Niroga  Oil Care',
      aboutDesc: 'As a premium Sri Lankan traditional oil massage and wellness center, we provide Ayurvedic treatments, herbal oil therapies, and natural healing services.',
      aboutFounded: 'Founded',
      aboutStoryTitle: 'Our Story',
      aboutStory: "Niroga Oil Care (Pvt) Ltd was established in 2025 as a premium wellness center. We blend Sri Lanka's traditional oil massage artistry with modern wellness standards to deliver an authentic healing experience for every client.",
      aboutMissionTitle: 'Mission',
      aboutMission: 'To promote natural healing through 100% herbal oils and traditional Ayurvedic methods.',
      aboutVisionTitle: 'Vision',
      aboutVision: "To become Sri Lanka's most trusted traditional oil massage and wellness brand.",
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
      faq1A: 'We offer traditional Sri Lankan oil massage, head massage, foot therapy, and neck & shoulder therapy treatments.',
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
      contactEmail: 'Facebook',
      contactHours: 'Business Hours',
      contactHoursVal: '24 Hours Open',
      contactAddress: 'Address',
      contactAddressVal: 'No/96, Mahaweli Niwasa, Pallekale, Kundasale, Kandy',
      footerBrand: 'Niroga Oil Care',
      footerDesc: 'Premium Sri Lankan traditional oil massage and wellness center. Your journey to natural healing starts here.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerCopyright: 'Niroga Oil Care (Pvt) Ltd. All rights reserved.',
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
  let particlesInitialized = false;
  let tiltInitialized = false;

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
        initParticles();
        initTiltCards();
      }, 2000);
    });

    setTimeout(function () {
      if (!loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        revealHeroElements();
        initParticles();
        initTiltCards();
      }
    }, 5000);
  }

  function revealHeroElements() {
    document.querySelectorAll('.hero .fade-up').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ============================================
     PARTICLE SYSTEM (Hero Canvas)
     ============================================ */
  function initParticles() {
    if (particlesInitialized) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    particlesInitialized = true;

    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    var particles = [];
    var PARTICLE_COUNT = 55;
    var COLORS = [
      'rgba(199,165,91,',
      'rgba(46,204,143,',
      'rgba(88,123,67,',
      'rgba(232,160,69,',
      'rgba(255,255,255,'
    ];

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        r: Math.random() * 2.5 + 0.5,
        speed: Math.random() * 0.6 + 0.25,
        drift: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinkle: Math.random() * Math.PI * 2
      };
    }

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      var p = createParticle();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.y -= p.speed;
        p.x += p.drift;
        p.twinkle += 0.04;
        var tw = Math.abs(Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.7 + tw * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.opacity * tw + 0.05) + ')';
        ctx.fill();

        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          var np = createParticle();
          p.x = np.x;
          p.y = np.y;
          p.r = np.r;
          p.speed = np.speed;
          p.drift = np.drift;
          p.opacity = np.opacity;
          p.color = np.color;
        }
      });
      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ============================================
     3D TILT CARD EFFECT
     ============================================ */
  function initTiltCards() {
    if (tiltInitialized) return;
    tiltInitialized = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Skip on mobile

    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rotateX = ((y - cy) / cy) * -6;
        var rotateY = ((x - cx) / cx) * 6;
        card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px) scale(1.02)';
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      });
    });
  }

  /* ============================================
     SCROLL PROGRESS BAR
     ============================================ */
  function initScrollProgress() {
    if (scrollProgressInitialized) return;
    scrollProgressInitialized = true;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
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
      var isOpen = nav.classList.toggle('open');
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

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
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
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var offset = header.offsetHeight;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', function () {
      var current = '';
      sections.forEach(function (section) {
        var sectionTop = section.offsetTop - header.offsetHeight - 100;
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
    var revealElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in, .flip-in, .slide-up');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      if (el.getAttribute('data-reveal-initialized') === 'true') return;
      el.setAttribute('data-reveal-initialized', 'true');
      if (el.closest('.hero')) return;

      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.2 && rect.bottom > 0) {
        el.classList.add('revealed');
      } else {
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
    var parallaxElements = document.querySelectorAll('[data-parallax]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      parallaxElements.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
        var img = el.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1.1) translateY(' + (scrollY * speed * 0.25) + 'px)';
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
    var counters = document.querySelectorAll('.counter-item__num');
    var animated = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(function (counter, idx) {
            setTimeout(function () {
              animateCounter(counter);
            }, idx * 150);
          });
        }
      });
    }, { threshold: 0.4 });

    var counterSection = document.querySelector('.counters');
    if (counterSection) observer.observe(counterSection);
  }

  function animateCounter(element) {
    var target = parseInt(element.getAttribute('data-target'), 10);
    var duration = 2400;
    var start = performance.now();

    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
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
      var question = item.querySelector('.faq__question');
      if (!question) return;

      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all open items
        document.querySelectorAll('.faq__item.active').forEach(function (openItem) {
          openItem.classList.remove('active');
          var q = openItem.querySelector('.faq__question');
          if (q) q.setAttribute('aria-expanded', 'false');
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
        var lang = btn.getAttribute('data-lang');
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
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (translations[lang][key].includes('<br>')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
  }

  /* ============================================
     RIPPLE EFFECT ON BUTTONS
     ============================================ */
  function initRippleButtons() {
    document.querySelectorAll('.btn--ripple').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var ripple = document.createElement('span');
        var rect = btn.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var x = e.clientX - rect.left - size / 2;
        var y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = 'position:absolute;width:' + size + 'px;height:' + size + 'px;top:' + y + 'px;left:' + x + 'px;background:rgba(255,255,255,0.35);border-radius:50%;transform:scale(0);animation:rippleAnim 0.6s ease-out;pointer-events:none';
        btn.appendChild(ripple);

        setTimeout(function() { ripple.remove(); }, 700);
      });
    });

    // Add ripple keyframe if not present
    if (!document.getElementById('ripple-style')) {
      var style = document.createElement('style');
      style.id = 'ripple-style';
      style.textContent = '@keyframes rippleAnim{to{transform:scale(3);opacity:0}}';
      document.head.appendChild(style);
    }
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
    initRippleButtons();
  }

  window.initPageComponents = init;
  window.revealHeroElements = revealHeroElements;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
