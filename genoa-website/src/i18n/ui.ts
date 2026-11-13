import type { L, Lang } from '../content/types';

/** Interface strings (navigation, buttons, labels). Page copy lives in src/content/. */
export const ui = {
  skipToContent: { ar: 'انتقل إلى المحتوى', en: 'Skip to content' },
  mainNav: { ar: 'القائمة الرئيسية', en: 'Main navigation' },
  menu: { ar: 'القائمة', en: 'Menu' },
  home: { ar: 'الرئيسية', en: 'Home' },
  companies: { ar: 'Genoa للشركات', en: 'Genoa for companies' },
  companiesShort: { ar: 'للشركات', en: 'Companies' },
  government: { ar: 'Genoa Gov للدوائر الحكومية', en: 'Genoa Gov for government' },
  governmentShort: { ar: 'للدوائر الحكومية', en: 'Government' },
  security: { ar: 'الأمان والنسخ الاحتياطي', en: 'Security and backups' },
  securityShort: { ar: 'الأمان', en: 'Security' },
  about: { ar: 'من نحن', en: 'About' },
  contact: { ar: 'تواصل معنا', en: 'Contact' },
  faq: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  bookDemo: { ar: 'احجز عرضاً توضيحياً', en: 'Book a demo' },
  whatsapp: { ar: 'راسلنا على واتساب', en: 'Message us on WhatsApp' },
  whatsappPrefill: {
    ar: 'مرحباً، أرغب بمعرفة المزيد عن برامج Genoa.',
    en: 'Hello, I would like to know more about Genoa software.',
  },
  switchLang: { ar: 'English', en: 'العربية' },
  switchLangLabel: { ar: 'Read this page in English', en: 'اقرأ هذه الصفحة بالعربية' },
  breadcrumb: { ar: 'مسار التنقل', en: 'Breadcrumb' },
  inShort: { ar: 'باختصار', en: 'In short' },
  keyFacts: { ar: 'معلومات سريعة', en: 'Key facts' },
  optionalBadge: { ar: 'ميزة اختيارية', en: 'Optional feature' },
  optionalNote: {
    ar: 'هذه ميزة اختيارية: معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة عند الحاجة.',
    en: 'This is an optional feature: it is off by default and is switched on per organisation when needed.',
  },
  aiBadge: { ar: 'ذكاء اصطناعي', en: 'AI' },
  illustration: { ar: 'رسم توضيحي', en: 'Illustration' },
  modules: { ar: 'الوحدات', en: 'Modules' },
  learnMore: { ar: 'اعرف المزيد', en: 'Learn more' },
  relatedFeatures: { ar: 'ميزات مرتبطة', en: 'Related features' },
  questionsAbout: { ar: 'أسئلة عن', en: 'Questions about' },
  allQuestions: { ar: 'كل الأسئلة الشائعة', en: 'All frequently asked questions' },
  productOverview: { ar: 'نظرة عامة على', en: 'Overview of' },
  onThisPage: { ar: 'في هذه الصفحة', en: 'On this page' },
  placeholderTag: { ar: 'صورة مؤقتة', en: 'Placeholder' },
  demoDataTag: { ar: 'بيانات تجريبية', en: 'Demo data' },
  realShotNote: {
    ar: 'لقطة شاشة من البرنامج ببيانات تجريبية.',
    en: 'Screenshot of the software with fictional demo data.',
  },
  openFullSize: { ar: 'فتح الصورة بالحجم الكامل', en: 'Open the screenshot at full size' },
  galleryHeading: { ar: 'شاهد البرنامج', en: 'See the software' },
  galleryIntro: {
    ar: 'لقطات شاشة حقيقية من البرنامج، ببيانات تجريبية بالكامل. اضغط على أي صورة لفتحها بالحجم الكامل.',
    en: 'Real screenshots of the software, with entirely fictional demo data. Select any image to open it at full size.',
  },
  ctaHeading: {
    ar: 'شاهد البرنامج بنفسك',
    en: 'See the software for yourself',
  },
  ctaBody: {
    ar: 'احجز عرضاً توضيحياً نعرض فيه الشاشات التي تهمّك، أو راسلنا على واتساب بسؤالك.',
    en: 'Book a demo and we will walk you through the screens that matter to you, or send us your question on WhatsApp.',
  },
  footerTagline: {
    // Follows the company introduction (companyIntro, src/config/site.ts) in the footer.
    ar: 'تطوّر Genoa للشركات وGenoa Gov للدوائر الحكومية.',
    en: 'It makes Genoa for companies and Genoa Gov for government departments.',
  },
  footerProducts: { ar: 'المنتجات', en: 'Products' },
  footerCompany: { ar: 'الشركة', en: 'Company' },
  footerResources: { ar: 'مصادر', en: 'Resources' },
  footerNote: {
    ar: 'لقطات الشاشة في هذا الموقع ببيانات تجريبية بالكامل، ولا يحتوي الموقع على أي بيانات لزبائننا.',
    en: 'Screenshots on this site use entirely fictional demo data, and the site contains no customer data.',
  },
  sitemap: { ar: 'خريطة الموقع', en: 'Sitemap' },
  forAI: { ar: 'ملخص للمساعدات الذكية (llms.txt)', en: 'Summary for AI assistants (llms.txt)' },
  rights: { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
} satisfies Record<string, L>;

export const t = (key: keyof typeof ui, lang: Lang) => ui[key][lang];

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
export const otherLang = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');
export const ogLocale = (lang: Lang) => (lang === 'ar' ? 'ar_IQ' : 'en_US');
