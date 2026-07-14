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
      loaderName: 'නීරෝගා ට්‍රැඩීශනල් ඔයිල් කෙයාර් (PVT) LTD.',
      logoShort: 'නිරෝගා ට්‍රැඩීශනල්',

      navHome: 'මුල් පිටුව',
      navAbout: 'අප ගැන',
      navServices: 'සේවාවන්',
      navBenefits: 'ප්‍රයෝජන',
      navFaq: 'නිති අසන ප්‍රශ්න',
      navContact: 'සම්බන්ධ වන්න',

      callNow: 'ඇමතුම් කරන්න',

      heroBadge: '2025 සිට · ශ්‍රී ලංකාවෙ තෛලමය සත්කාර මධ්‍යස්ථානය',

      heroTitle: ' නීරෝගී දිවියකට තෛලමය සත්කාර',
      heroSubtitle: 'නීරෝගී දිවි පෙවෙතක් සඳහා සාම්ප්‍රදායික තෛලමය සත්කාර ක්‍රම භාවිතා කරමින් සියලුම ශරීර සම්භාහන කටයුතු වල යෙදේ.',
      heroCtaContact: 'සම්බන්ධ වන්න',
      heroCtaExplore: 'සේවාවන් බලන්න',

      aboutLabel: 'අප ගැන',
      aboutTitle: 'නිරෝගා ට්‍රැඩීශනල් ඔයිල් කෙයාර්',
      aboutDesc: 'ස්පා සංකල්පයෙන් මිදී දෙස් විදෙස් පාරිභෝගිකයන් සඳහා ගුණාත්මක දේශීය සම්ප්‍රදායික තෛලමය සත්කාර ක්‍රමවේදයක් ප්‍රචලිත කිරීම.',
      aboutFounded: 'පිහිටුවන ලදී',
      aboutStoryTitle: 'අපගේ කතාව',
      aboutStory: 'නිරෝගා  ඔයිල් කෙයාර් (පුද්) සමාගම 2025 දී පිහිටුවන ලද ඖශධමය තෛලමය සත්කාර සිදුකරන මධ්‍යස්ථානයකි. ශ්‍රී ලංකාවේ පරම්පරාගත ඔයිල් සත්කාර ශිල්පය නවීන සුවසනැගි ප්‍රමිතීන් සමඟ සම්බන්ධ කර, සෑම පාරිභෝගිකයෙකුටම සත්‍ය සුව අත්දැකීමක් ලබා දෙමු.',
      aboutMissionTitle: 'මෙහෙවර',
      aboutMission: 'වෘත්තීයමය තෛලමය සත්කාර ශිල්පියා රැකගනිමින් ගුණාත්මක හා විද්‍යානුකූල ක්‍රමවේද ඔස්සේ සාම්ප්‍රදායික තෛලම සත්කාර සේවාවන් ලබා දීම.',
      aboutVisionTitle: 'දර්ශනය',
      aboutVision: 'ඖශධ භාවිතය අවම කර නීරෝගී පරපුරක් නිර්මාණය කිරීම.',

      founderMessage: '"පරම්පරාගත ආයුර්වේද දැනුම සහ ස්වභාවික තෙල් ප්‍රතිකාරයන් සමඟින් ඔබේ ශරීරයට සහ මනසට සුවයක් ලබා දීම අපගේ අරමුණයි. අපගේ ප්‍රවීණ therapists නවීන සුවතා ප්‍රමිතීන් සමඟ එකතු කරමින් සන්සුන්, සෞඛ්‍ය සම්පන්න සහ සමතුලිත ජීවන රටාවක් ගොඩනැගීමට ඔබට උපකාර කරයි."',
      founderName: '— කළමනාකාර අධ්‍යක්ෂක, නීරෝගා ට්‍රැඩීශනල් ඔයිල් කෙයාර් (PVT) LTD. ',

      whyLabel: 'ඇයි අප',
      whyTitle: 'අපව තෝරා ගැනීමට හේතු',
      why2Title: '100% ස්වභාවික ඖෂධීය තෙල්',
      why2Desc: 'ශ්‍රී ලංකාවේ ස්වභාවික ඖෂධීය ශාක වලින් ලබාගත් පිරිසිදු සහ ගුණාත්මක තෙල් භාවිතා කරයි.',
      why3Title: 'පාරම්පරික ආයුර්වේද ක්‍රම',
      why3Desc: 'පරම්පරාවෙන් පරම්පරාවට පැවත එන සාම්ප්‍රදායික ආයුර්වේද ප්‍රතිකාර ක්‍රම භාවිතා කරයි.',
      why4Title: 'සුවපහසු පරිසරයක්',
      why4Desc: 'සම්පූර්ණ සුවය සහ විවේකය ලබාගැනීමට සුදුසු පිරිසිදු සහ නිස්කලංක පරිසරයක්.',
      why5Title: 'සාධාරණ මිල ගණන්',
      why5Desc: 'උසස් තත්ත්වයේ ප්‍රතිකාර පහසු සහ සාධාරණ මිල ගණන් යටතේ ලබා දෙයි.',
      why6Title: 'විශ්වාසනීය සේවාව',
      why6Desc: 'සතුටුදායක ප්‍රතිඵල ලැබූ බොහෝ පාරිභෝගිකයින්ගේ විශ්වාසය දිනාගත් සේවාවක්.',    

      servicesLabel: 'සේවාවන්',
      servicesTitle: 'විශේෂ සුවතා සේවාවන්',
      servicesDesc: 'පාරම්පරික තෛලමය ප්‍රතිකාර සහ නවීන සුවතා ක්‍රමවේදයන් සමඟ ඔබගේ ශරීරයට සහ මනසට සුවයක් ලබා දෙන වෘත්තීය සේවාවන්.',

      svc1Title: 'Full Body Massage',
      svc1Duration: '60 Minutes',
      svc1Desc: 'සම්පූර්ණ ශරීරයම (හිසේ සිට දෙපතුළ දක්වා) ඖශධීය තෙල් වර්ග ගල්වා සම්භාහනය කිරීම.',
      svc1Benefit1: 'මාංශපේශි ලිහිල්වීම නිසා ශරීරය සැහැල්ලු වීම.',
      svc1Benefit2: 'රුධිර සංසරණය වැඩිදියුණු කරයි',
      svc1Benefit3: 'ශරීරයේ සන්ධි වේදනා දුරු වී නීරෝගී වීම.',
      svc1Price: 'Starting from Rs. 3,500',

      svc2Title: 'Head Massage',
      svc2Duration: '30 Minutes',
      svc2Desc: 'හිසට තෙල් ගල්වා හොඳින් සම්භාහනය කිරීම',
      svc2Benefit1: 'මානසික ආතතිය දුරු වීම.',
      svc2Benefit2: 'හිසකෙස් වලට හොඳින් පෝශණයක්  ලැබීම.',
      svc2Benefit3: 'අධික හිසරදය සුවකර ගැනීම',
      svc2Price: 'Starting from Rs. 3,500',

      svc3Title: 'Foot Therapy',
      svc3Duration: '30 Minutes',
      svc3Desc: 'ඖශධීය තෙල් යොදා සම්පූර්ණ පාද දෙකම හොඳින් සම්භාහනය කිරීම.',
      svc3Benefit1: 'දනහිස් වේදනා දුරු වීම.',
      svc3Benefit2: 'පාදවල හිරිවැටීම් දුරු කරගැනීම.',
      svc3Benefit3: 'විලුඹ හා යටිපතුල් වේදනා දුරුකර ගැනීම.',
      svc3Price: 'Starting from Rs. 3,500',

      svc4Title: 'Steam Bath',
      svc4Duration: '20 Minutes',
      svc4Desc: 'ඖශධීය තෙල් වර්ග සහිත ජලවාශ්ප ශරීරයට වැදීමට සලස්වා මුළු ශරීරයම දහඩිය ගැන්වීම.',
      svc4Benefit1: 'මැරුණු සම් කොටස් ඉවත් වී සම පිරිසිදු වීම.',
      svc4Benefit2: 'ශරීරයේ තැම්පත් වී ඇති මේදය ඉවත් වීම.',
      svc4Benefit3: 'අධික තරබාරු බව අඩුකර ගැනීම.',
      svc4Price: 'Starting from Rs. 3,500',

      svcContact: 'Learn More →',

      processLabel: 'ප්‍රතිකාර ක්‍රියාවලිය',
      processTitle: 'ඔබේ සුවතාවය කරා යන ගමන',
      step1Title: 'උපදේශනය',
      step1Desc: 'ඔබගේ සෞඛ්‍ය අවශ්‍යතා සහ සුවතා අරමුණු පිළිබඳව සාකච්ඡා කරයි.',
      step2Title: 'සෞඛ්‍ය පරීක්ෂාව',
      step2Desc: 'ඔබගේ ශාරීරික තත්ත්වය පිළිබඳව වෘත්තීයමය ඇගයීමක් සිදු කරයි.',
      step3Title: 'තෙල් තේරීම',
      step3Desc: 'ඔබගේ අවශ්‍යතාවයට ගැලපෙන ස්වභාවික ඖෂධීය තෙල් මිශ්‍රණය තෝරා ගනී.',
      step4Title: 'ප්‍රතිකාර සැසිය',
      step4Desc: 'නිස්කලංක සහ සුවපහසු පරිසරයක පළපුරුදු චිකිත්සකයින් විසින් ප්‍රතිකාර ලබා දෙයි.',
      step5Title: 'විවේකය සහ සුවය',
      step5Desc: 'ප්‍රතිකාරයෙන් පසු උපරිම ප්‍රතිලාභ ලබා ගැනීම සඳහා අවශ්‍ය විවේකය ලබා දෙයි.',
      step6Title: 'පසු සත්කාර උපදෙස්',
      step6Desc: 'දිගුකාලීන සුවතාවය සඳහා ඔබට ගැලපෙන පුද්ගලික උපදෙස් ලබා දෙයි.',

      benefitsLabel: 'ප්‍රතිලාභ',
      benefitsTitle: 'ස්වභාවික සුවතාවයේ ප්‍රතිලාභ',
      ben1Title: 'වේදනා සහනය',
      ben1Desc: 'මාංශ පේශී සහ සන්ධිවල ඇති අපහසුතා හා වේදනාව ස්වභාවිකව සමනය කිරීමට උපකාරී වේ.',
      ben2Title: 'මානසික සන්සුන්භාවය',
      ben2Desc: 'දෛනික ආතතිය අඩු කර මනසට සන්සුන් බව සහ සැහැල්ලු බව ලබා දෙයි.',
      ben3Title: 'සුවදායක නින්ද',
      ben3Desc: 'ගැඹුරු, සුවපහසු සහ සන්සුන් නින්දක් ලබා ගැනීමට උපකාරී වේ.',
      ben4Title: 'නිරෝගී රුධිර සංසරණය',
      ben4Desc: 'ශරීරය පුරා රුධිර සංසරණය වැඩිදියුණු කර සෞඛ්‍ය සම්පන්න ක්‍රියාකාරීත්වයට සහාය වේ.',
      ben5Title: 'මාංශ පේශී නැවත සුවපත් කිරීම',
      ben5Desc: 'ශාරීරික වෙහෙස සහ ක්‍රියාකාරකම්වලින් පසු ශරීරය නැවත සුවපත් වීමට උපකාරී වේ.',
      ben6Title: 'ස්වභාවික සුව කිරීම',
      ben6Desc: 'ශරීරයේ ස්වභාවික සුවපත් වීමේ ක්‍රියාවලිය ශක්තිමත් කිරීමට සහාය වේ.',

      counter1: 'සතුටුදායක පාරිභෝගිකයින්',
      counter2: 'සම්පූර්ණ කළ ප්‍රතිකාර',
      counter3: 'සුවතා සේවා',
      counter4: 'පාරිභෝගික තෘප්තිය',

      faqLabel: 'නිතර අසන ප්‍රශ්න',
      faqTitle: 'ඔබට දැනගැනීමට අවශ්‍ය දේ',
      faq1Q: 'ඔබ ලබාදෙන තෙල් ප්‍රතිකාර වර්ග මොනවාද?',
      faq1A: 'අප විසින් පාරම්පරික ශ්‍රී ලාංකීය තෙල් සම්බාහන, හිස සම්බාහන, පාද සත්කාර සහ බෙල්ල හා උරහිස් ප්‍රතිකාර වැනි විවිධ සේවාවන් ලබා දෙයි.',
      faq2Q: 'ඔබ භාවිතා කරන තෙල් 100% ස්වභාවිකද?',
      faq2A: 'ඔව්, අප භාවිතා කරන්නේ ශ්‍රී ලංකාවේ ස්වභාවික ඖෂධීය ශාක වලින් ලබාගත් 100% පිරිසිදු ඖෂධීය තෙල් පමණි. කිසිදු කෘතිම ද්‍රව්‍යයක් හෝ රසායනික ද්‍රව්‍යයක් භාවිතා නොකරයි.',
      faq3Q: 'සාමාන්‍ය ප්‍රතිකාර සැසියක් කොපමණ කාලයක් පවතිනවාද?',
      faq3A: 'ප්‍රතිකාර වර්ගය අනුව සාමාන්‍යයෙන් එක් සැසියක් විනාඩි 45 සිට 90 දක්වා කාලයක් පවතී. උපදේශනය සහ ප්‍රතිකාරයෙන් පසු විවේකය සඳහා අමතර කාලයක් වෙන් කිරීම සුදුසුය.',
      faq4Q: 'විමසීම් සඳහා ඔබව සම්බන්ධ කරගන්නේ කෙසේද?',
      faq4A: 'ඔබට අපව දුරකථනයෙන්, WhatsApp හරහා හෝ ව්‍යාපාරික වේලාවන් තුළ අපගේ මධ්‍යස්ථානයට පැමිණ සම්බන්ධ කරගත හැක. අපගේ කණ්ඩායම ප්‍රතිකාර සහ සේවා පිළිබඳ සියලු තොරතුරු ලබා දීමට සූදානම්.',
      faq5Q: 'සම්බාහන ප්‍රතිකාරයකට පැමිණෙන විට ඇඳුම් සම්බන්ධයෙන් සැලකිලිමත් විය යුත්තේ කෙසේද?',
      faq5A: 'සුවපහසු සහ ලිහිල් ඇඳුම් පැළඳීම සුදුසුය. ඔබගේ පෞද්ගලිකත්වය සහ පහසුව සඳහා පිරිසිදු තුවා සහ අවශ්‍ය ආවරණ අප විසින් සපයනු ලැබේ.',
    
      ctaLabel: 'Get Started',
      ctaTitle: 'සෞඛ්‍ය සම්පන්න ජීවිතයක් සඳහා අදම පියවර තබන්න',
      ctaDesc: 'අප හා දුරකථනයෙන් හෝ WhatsApp හරහා සම්බන්ධ වී ඔබට ගැලපෙන ස්වභාවික තෙල් ප්‍රතිකාර සහ සුවතා සේවාවන් පිළිබඳ උපදෙස් ලබා ගන්න.',
      ctaWhatsapp: 'WhatsApp Us',

      contactLabel: 'සම්බන්ධ වන්න',
      contactTitle: 'Get In Touch',
      contactPhone: 'අප අමතන්න',
      contactWhatsapp: 'WhatsApp හරහා සම්බන්ධ වන්න',
      contactEmail: 'Facebook පිටුව',
      contactHours: 'සේවා වේලාවන්',
      contactHoursVal: 'දිනපතා පැය 24 පුරා',
      contactAddress: 'අපගේ ස්ථානය',
      contactAddressVal: 'අංක 96, මහවැලි නිවාස, පල්ලෙකැලේ, කුණ්ඩසාලේ, මහනුවර',

      footerBrand: 'නිරෝගා ට්‍රැඩීශනල් ඔයිල් කෙයාර්',
      footerDesc: 'පාරම්පරික ශ්‍රී ලාංකීය තෙල් ප්‍රතිකාර සහ සුවතා සේවාවන් සමඟ ඔබේ ශරීරයට හා මනසට සුවයක් ලබා දෙන විශ්වාසනීය ස්ථානයක්. ස්වභාවික සුවය කරා යන ඔබේ ගමන අප සමඟින් ආරම්භ කරන්න.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerCopyright: 'නිරෝගා ට්‍රැඩීශනල් ඔයිල් කෙයාර් (පුද්) සමාගම. සියලුම අයිතිවාසිකම් ඇවිරිණි.',
      footerPrivacy: 'Privacy Policy'
    },
    en: {
      loaderName: 'Niroga Traditional Oil Care (PVT) LTD.',
      logoShort: 'Niroga Traditional',

      navHome: 'Home',
      navAbout: 'About Us',
      navServices: 'Services',
      navBenefits: 'Benefits',
      navFaq: 'FAQ',
      navContact: 'Contact Us',

      callNow: 'Call Now',

      heroBadge: 'Since 2025 · Traditional Oil Care Center in Sri Lanka',
      heroTitle: 'Traditional Oil Care for a Healthier Life',
      heroSubtitle: 'Experience authentic traditional oil care treatments designed to support a healthier lifestyle through time-honored Sri Lankan healing practices.',
      heroCtaContact: 'Contact Us',
      heroCtaExplore: 'Explore Services',

      aboutLabel: 'About Us',
      aboutTitle: 'Niroga Traditional Oil Care',
      aboutDesc: 'Moving beyond conventional spa concepts, we aim to promote a high-quality traditional Sri Lankan oil care experience for both local and international clients.',
      aboutFounded: 'Founded',
      aboutStoryTitle: 'Our Story',
      aboutStory: 'Niroga Traditional Oil Care (PVT) LTD. was established in 2025 as a specialized oil care center providing herbal oil treatments. We combine Sri Lanka’s traditional oil care heritage with modern wellness standards to deliver an authentic healing experience for every client.',
      aboutMissionTitle: 'Our Mission',
      aboutMission: 'To preserve professional traditional oil care practices while providing high-quality and scientifically guided wellness treatments through authentic methods.',
      aboutVisionTitle: 'Our Vision',
      aboutVision: 'To create a healthier generation by promoting natural wellness and reducing dependence on unnecessary medication.',
      founderMessage: '"Our goal is to provide healing and relaxation for your body and mind through traditional Ayurvedic knowledge and natural oil therapies. Our experienced therapists combine traditional techniques with modern wellness standards to help you achieve a peaceful, healthy, and balanced lifestyle."',
      founderName: '— Managing Director, Niroga Traditional Oil Care (PVT) LTD.',

      whyLabel: 'Why Us',
      whyTitle: 'Why Choose Us',
      why2Title: '100% Natural Herbal Oils',
      why2Desc: 'We use pure and high-quality herbal oils sourced from authentic Sri Lankan medicinal plants.',
      why3Title: 'Traditional Ayurvedic Methods',
      why3Desc: 'We follow authentic Ayurvedic treatment techniques passed down through generations.',
      why4Title: 'Comfortable Environment',
      why4Desc: 'A clean, peaceful, and relaxing environment designed to provide complete comfort and wellness.',
      why5Title: 'Affordable Pricing',
      why5Desc: 'Premium quality treatments offered at fair and accessible prices.',
      why6Title: 'Trusted Service',
      why6Desc: 'A trusted wellness service with many satisfied clients and positive experiences.',


      servicesLabel: 'Services',
      servicesTitle: 'Specialized Wellness Services',
      servicesDesc: 'Experience premium traditional oil treatments and wellness therapies designed to relax your body, refresh your mind, and improve overall wellbeing.',


      svc1Title: 'Full Body Massage',
      svc1Duration: '60 Minutes',
      svc1Desc: 'A therapeutic full-body massage using herbal oils, covering the entire body from head to toe.',
      svc1Benefit1: 'Relaxes muscles and leaves the body feeling light and refreshed.',
      svc1Benefit2: 'Improves blood circulation.',
      svc1Benefit3: 'Helps relieve joint pain and promotes overall well-being.',
      svc1Price: 'Starting from Rs. 3,500',

      svc2Title: 'Head Massage',
      svc2Duration: '30 Minutes',
      svc2Desc: 'A relaxing head massage performed with nourishing herbal oils.',
      svc2Benefit1: 'Reduces stress and mental fatigue.',
      svc2Benefit2: 'Nourishes and strengthens the hair.',
      svc2Benefit3: 'Helps relieve frequent headaches.',
      svc2Price: 'Starting from Rs. 3,500',

      svc3Title: 'Foot Therapy',
      svc3Duration: '30 Minutes',
      svc3Desc: 'A soothing foot therapy using herbal oils to massage both feet thoroughly.',
      svc3Benefit1: 'Helps relieve knee pain.',
      svc3Benefit2: 'Reduces numbness and tingling in the feet.',
      svc3Benefit3: 'Relieves heel and sole pain.',
      svc3Price: 'Starting from Rs. 3,500',

      svc4Title: 'Steam Bath',
      svc4Duration: '20 Minutes',
      svc4Desc: 'A herbal steam therapy that allows medicinal steam to penetrate the body, promoting healthy sweating.',
      svc4Benefit1: 'Removes dead skin cells and deeply cleanses the skin.',
      svc4Benefit2: 'Helps reduce excess body fat.',
      svc4Benefit3: 'Supports healthy weight management.',
      svc4Price: 'Starting from Rs. 3,500',

      svcContact: 'Learn More →',

      processLabel: 'Treatment Process',
      processTitle: 'Your Journey Towards Wellness',
      step1Title: 'Consultation',
      step1Desc: 'Discuss your health concerns and wellness goals with our experts.',
      step2Title: 'Health Assessment',
      step2Desc: 'Professional evaluation of your physical condition and requirements.',
      step3Title: 'Oil Selection',
      step3Desc: 'A suitable herbal oil blend is selected based on your individual needs.',
      step4Title: 'Treatment Session',
      step4Desc: 'Receive expert treatment in a peaceful and comfortable environment.',
      step5Title: 'Relaxation & Recovery',
      step5Desc: 'Enjoy proper relaxation after treatment to maximize wellness benefits.',
      step6Title: 'After Care Advice',
      step6Desc: 'Receive personalized guidance for maintaining long-term wellness.',


      benefitsLabel: 'Benefits',
      benefitsTitle: 'Benefits of Natural Wellness',
      ben1Title: 'Pain Relief',
      ben1Desc: 'Helps naturally reduce discomfort and pain in muscles and joints.',
      ben2Title: 'Mental Relaxation',
      ben2Desc: 'Reduces daily stress and promotes calmness and relaxation.',
      ben3Title: 'Better Sleep',
      ben3Desc: 'Supports deeper, peaceful, and more restful sleep.',
      ben4Title: 'Healthy Blood Circulation',
      ben4Desc: 'Improves blood circulation and supports overall body wellness.',
      ben5Title: 'Muscle Recovery',
      ben5Desc: 'Helps the body recover after physical activities and daily strain.',
      ben6Title: 'Natural Healing',
      ben6Desc: 'Supports the body’s natural healing and recovery process.',


      counter1: 'Happy Clients',
      counter2: 'Treatments Completed',
      counter3: 'Wellness Services',
      counter4: 'Client Satisfaction',


      faqLabel: 'Frequently Asked Questions',
      faqTitle: 'Everything You Need To Know',
      faq1Q: 'What types of oil treatments do you offer?',
      faq1A: 'We provide traditional Sri Lankan oil massage, head massage, foot therapy, and neck & shoulder treatments.',
      faq2Q: 'Are your oils 100% natural?',
      faq2A: 'Yes. We use only pure herbal oils made from authentic Sri Lankan medicinal plants without synthetic additives or harmful chemicals.',
      faq3Q: 'How long does a treatment session take?',
      faq3A: 'Depending on the treatment type, sessions usually take between 45 to 90 minutes. Additional time is recommended for consultation and relaxation.',
      faq4Q: 'How can I contact you?',
      faq4A: 'You can contact us by phone, WhatsApp, or visit our center during business hours. Our team is ready to assist you.',
      faq5Q: 'What should I wear for a massage session?',
      faq5A: 'Comfortable loose clothing is recommended. Clean towels and necessary coverings are provided for your privacy and comfort.',


      ctaLabel: 'Get Started',
      ctaTitle: 'Take the First Step Towards a Healthier Life Today',
      ctaDesc: 'Contact us through phone or WhatsApp and get guidance on natural oil treatments and wellness services that suit your needs.',
      ctaWhatsapp: 'WhatsApp Us',


      contactLabel: 'Contact Us',
      contactTitle: 'Get In Touch',
      contactPhone: 'Call Us',
      contactWhatsapp: 'Contact via WhatsApp',
      contactEmail: 'Facebook Page',
      contactHours: 'Business Hours',
      contactHoursVal: 'Open 24 Hours Daily',
      contactAddress: 'Our Location',
      contactAddressVal: 'No. 96, Mahaweli Housing, Pallekele, Kundasale, Kandy',


      footerBrand: 'Niroga Traditional Oil Care',
      footerDesc: 'A trusted destination for traditional Sri Lankan oil treatments and wellness services, providing relaxation and healing for your body and mind. Begin your journey towards natural wellness with us.',
      footerQuickLinks: 'Quick Links',
      footerServices: 'Services',
      footerContact: 'Contact',
      footerCopyright: 'Niroga Traditional Oil Care (PVT) LTD. All Rights Reserved.',
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

    function onLoaded() {
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.body.classList.add('page-loaded');
        revealHeroElements();
        initParticles();
        initTiltCards();
      }, 2000);
    }

    window.addEventListener('load', onLoaded);

    // Fallback: force-hide after 5s regardless
    setTimeout(function () {
      if (!loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.body.classList.add('page-loaded');
        revealHeroElements();
        initParticles();
        initTiltCards();
      }
    }, 5000);
  }

  function revealHeroElements() {
    var heroItems = document.querySelectorAll('.hero .fade-up');
    heroItems.forEach(function (el) {
      el.classList.add('revealed');
    });

    var heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.classList.add('is-ready');
    }
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

    // Check canvas 2D support
    var ctx;
    try {
      ctx = canvas.getContext('2d');
      if (!ctx) return;
    } catch (e) {
      return;
    }

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    var particles = [];
    var PARTICLE_COUNT = 50;
    var COLORS = [
      'rgba(199,165,91,',
      'rgba(46,204,143,',
      'rgba(88,123,67,',
      'rgba(212,137,74,',
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
    if (window.innerWidth < 768) return; // Skip on mobile for performance

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      parallaxElements.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
        var img = el.querySelector('img');
        if (img) {
          var offset = scrollY * speed * 0.22;
          img.style.transform = 'scale(1.1) translateY(' + offset + 'px)';
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
