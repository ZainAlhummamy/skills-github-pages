import type { Faq, IconKey, KeyFact, L, Lang, PageMeta } from './types';
import { companyIntro } from '../config/site';

/**
 * Academic Accountant (المحاسب الأكاديمي): the accounting, consulting and training office whose accounting and
 * technology expertise Genoa and Genoa Gov were built on. Routes: /<lang>/academic-accountant/ (hub) and
 * /<lang>/academic-accountant/services/; also in the header, on the home page (aaOnHome) and beside the products.
 *
 * Sources: the office's own Facebook and Instagram pages (CONTENT-GUIDE.md, "Academic Accountant"), and the owner's
 * statement of 16 Nov 2026 on Genoa and Genoa Gov (aaRelationship, aaAlongside below). Those are the only facts on
 * these pages: no clients, testimonials, certifications, staff names, counts, prices or course content.
 * "More than 15 years of experience in accounting" is the only number that may be used.
 *
 * TODO(Zain): the legal relationship between the office and Genoa Systems (same owner? parent / subsidiary?). The
 *   pages say what the owner stated (the two systems are the office's product, built on its expertise; Genoa Systems
 *   develops them). Do not write same owner, parent company or subsidiary, and do not add parentOrganization /
 *   subOrganization to the JSON-LD (src/lib/seo.ts, academicAccountantNode), until it is confirmed.
 * TODO(Zain): whether the Facebook and Instagram profiles below are also official Genoa Systems profiles. Until then
 *   they are the office's only: they go in the office's sameAs, never in Genoa Systems' (src/config/site.ts, sameAs).
 */

/** The office's facts, the same on every page and in the JSON-LD. */
export const aaOffice = {
  /** The name used everywhere in English. */
  name: 'Academic Accountant',
  nameAr: 'المحاسب الأكاديمي',
  /** Other names it goes by: Arabic, Facebook's "Academy accountant", Instagram's "AA". */
  alternateName: ['المحاسب الأكاديمي', 'Academy accountant', 'AA'],
  /**
   * Accounting consulting and services: the phone numbers published on the office's profiles (also the numbers on the
   * free-consultation call buttons). The e-mail address on its Facebook page is deliberately not published here.
   */
  phones: [
    { e164: '+9647827777420', local: '07827777420', intl: '+964 782 777 7420' },
    { e164: '+9647712594596', local: '07712594596', intl: '+964 771 259 4596' },
  ],
  /** Technical consulting and IT services (owner, 16 Nov 2026). */
  itPhones: [{ e164: '+9647714487455', local: '07714487455', intl: '+964 771 448 7455' }],
  /**
   * WhatsApp number, digits only (9647…), for a wa.me link on the hub's contact section.
   * TODO(Zain): confirm which of the numbers (if any) is on WhatsApp. Empty: no WhatsApp link is shown.
   */
  whatsapp: '',
  /** The office's own profiles (its sameAs). Not Genoa Systems' profiles: see the TODO at the top. */
  profiles: {
    facebook: 'https://www.facebook.com/profile.php?id=61588939000014',
    instagram: 'https://www.instagram.com/academic.accountant',
  },
  address: {
    ar: {
      street: 'المنصور، بناية بزنس أفنيو، قرب جامع أبو جعفر المنصور',
      full: 'بغداد – المنصور – بناية بزنس أفنيو، قرب جامع أبو جعفر المنصور',
    },
    en: {
      // TODO(Zain): confirm the English spelling of the building's name ("Business Avenue").
      street: 'Business Avenue Building, Al-Mansour (near Abu Jaafar Al-Mansour Mosque)',
      full: 'Business Avenue Building, Al-Mansour, Baghdad, Iraq (near Abu Jaafar Al-Mansour Mosque)',
    },
  } satisfies L<{ street: string; full: string }>,
} as const;

/** One phone number: E.164 for tel: links and JSON-LD, local and international forms for display. */
export interface AaPhone {
  e164: string;
  local: string;
  intl: string;
}

/** A phone number as shown on a page: local form in Arabic (as the office publishes it), international in English. */
export const aaPhoneText = (phone: AaPhone, lang: Lang) => (lang === 'ar' ? phone.local : phone.intl);

/**
 * The office's numbers by purpose, in the order pages list them (labels: aaContactBlock[lang].phoneGroups), each with
 * the icon shown beside its label: a ledger for accounting, a headset for technical consulting and IT services.
 */
export type AaPhoneGroupId = 'accounting' | 'it';
export const aaPhoneGroups: { id: AaPhoneGroupId; icon: IconKey; phones: readonly AaPhone[] }[] = [
  { id: 'accounting', icon: 'ledger', phones: aaOffice.phones },
  { id: 'it', icon: 'support', phones: aaOffice.itPhones },
];

/**
 * How the office relates to Genoa and Genoa Gov (the owner, 16 Nov 2026): the two systems are the office's product,
 * built on its accounting and technology expertise. One sentence without a full stop, used as written everywhere.
 */
export const aaRelationship: L = {
  ar: 'نظاما Genoa للشركات وGenoa Gov للدوائر الحكومية من نتاج المحاسب الأكاديمي، بُنيا وفق خبراته المحاسبية والتقنية',
  en: 'Genoa for companies and Genoa Gov for government departments are products of Academic Accountant, built on its accounting and technology expertise',
};

/** What the office offers alongside the two systems (the owner, 16 Nov 2026). One sentence without a full stop. */
export const aaAlongside: L = {
  ar: 'ويقدّم المكتب معهما خدمات محاسبية وتقنية، وخدمات ذكاء اصطناعي خاصة بالأعمال المحاسبية والمالية',
  en: 'Alongside them, the office offers accounting and technology services, and AI services for accounting and financial work',
};

/* ---------- Services ---------- */

/** The four groups the services page is divided into; each is an H2 with this id (linked from the hub's cards). */
export type AaGroupId = 'bookkeeping' | 'audit-reporting' | 'analysis' | 'systems';
export const aaGroupOrder: AaGroupId[] = ['bookkeeping', 'audit-reporting', 'analysis', 'systems'];

export interface AaService {
  id: string;
  group: AaGroupId;
  /**
   * name: the service as the office lists it (2 May 2026 post). body: one or two plain sentences saying what it is for
   * a business owner. The bodies explain; they promise nothing (CLAIMS-TO-VERIFY.md, "Academic Accountant").
   */
  content: L<{ name: string; body: string }>;
}

/**
 * The eleven services from the office's 2 May 2026 post, in the post's order, then the two the owner added on
 * 16 Nov 2026 (technical consulting and IT services; AI services for accounting and financial work).
 */
export const aaServices: AaService[] = [
  {
    id: 'accounts',
    group: 'bookkeeping',
    content: {
      ar: {
        name: 'تنظيم وإدارة الحسابات للشركات والمشاريع والمحلات',
        body: 'تسجيل العمليات المالية اليومية للشركة أو المشروع أو المحل في قيود محاسبية منتظمة، ومتابعة أرصدة الحسابات أولاً بأول.',
      },
      en: {
        name: 'Keeping and managing the accounts of companies, projects and shops',
        body: 'Recording the day-to-day financial transactions of a company, project or shop as proper journal entries, and keeping account balances up to date.',
      },
    },
  },
  {
    id: 'records',
    group: 'bookkeeping',
    content: {
      ar: {
        name: 'تنظيم السجلات المحاسبية (اليومية، الأستاذ، السجلات المساعدة)',
        body: 'تنظيم دفتر اليومية الذي تُسجَّل فيه القيود بتسلسلها الزمني، ودفتر الأستاذ الذي تُجمع فيه حركة كل حساب، والسجلات المساعدة التي تفصّل بعض الحسابات.',
      },
      en: {
        name: 'Organising accounting records (journal, general ledger, subsidiary records)',
        body: 'Setting up the journal, where entries are recorded in date order, the general ledger, where each account’s movements are gathered, and the subsidiary records that give the detail behind some accounts.',
      },
    },
  },
  {
    id: 'audit',
    group: 'audit-reporting',
    content: {
      ar: {
        name: 'تدقيق البيانات والعمليات المالية والتأكد من دقتها',
        body: 'مراجعة البيانات والعمليات المالية المسجّلة ومطابقتها مع مستنداتها، للتأكد من دقتها قبل الاعتماد عليها في التقارير والقرارات.',
      },
      en: {
        name: 'Auditing financial data and transactions for accuracy',
        body: 'Checking recorded financial data and transactions against their supporting documents, to make sure they are accurate before they are used in reports or decisions.',
      },
    },
  },
  {
    id: 'reports',
    group: 'audit-reporting',
    content: {
      ar: {
        name: 'إعداد التقارير الدورية لأصحاب المشاريع',
        body: 'تقارير مالية تُعدّ بصورة دورية، تعرض لصاحب المشروع وضع أعماله خلال الفترة، مثل الإيرادات والمصروفات والأرصدة.',
      },
      en: {
        name: 'Regular reports for business owners',
        body: 'Financial reports prepared at regular intervals that show the owner how the business stood over the period, such as income, expenses and balances.',
      },
    },
  },
  {
    id: 'analysis-budgets',
    group: 'analysis',
    content: {
      ar: {
        name: 'التحليل المالي وإعداد الموازنات التخطيطية',
        body: 'تحليل الأرقام المالية للمشروع لفهم أدائه، وإعداد موازنة تخطيطية تقدّر الإيرادات والمصروفات للفترة القادمة.',
      },
      en: {
        name: 'Financial analysis and planning budgets',
        body: 'Analysing the business’s financial figures to understand how it is performing, and preparing a planning budget that estimates income and expenses for the coming period.',
      },
    },
  },
  {
    id: 'tax',
    group: 'analysis',
    content: {
      ar: {
        name: 'الاحتسابات الضريبية ومتعلقاتها',
        body: 'احتساب الضريبة المترتبة على نشاط المشروع، وما يتعلق بها من أعمال محاسبية.',
      },
      en: {
        name: 'Tax calculations and related work',
        body: 'Calculating the tax due on the business’s activity, and the accounting work that goes with it.',
      },
    },
  },
  {
    id: 'advice',
    group: 'analysis',
    content: {
      ar: {
        name: 'الاستشارات المالية والكلفوية',
        body: 'استشارات في الشؤون المالية وفي احتساب الكلفة، يرجع إليها صاحب المشروع عند اتخاذ قراراته.',
      },
      en: {
        name: 'Financial and cost advice',
        body: 'Advice on financial matters and on costing, for owners weighing up a business decision.',
      },
    },
  },
  {
    id: 'cost-centres',
    group: 'analysis',
    content: {
      ar: {
        name: 'تنظيم مراكز الكلفة للمشاريع الصناعية والإنتاجية',
        body: 'تقسيم المشروع الصناعي أو الإنتاجي إلى مراكز كلفة، وتحميل كل مركز بما يخصّه من الكلف، لمعرفة كلفة الإنتاج.',
      },
      en: {
        name: 'Cost centres for industrial and production projects',
        body: 'Dividing an industrial or production business into cost centres and assigning each its share of costs, so that the cost of production can be worked out.',
      },
    },
  },
  {
    id: 'system-design',
    group: 'systems',
    content: {
      ar: {
        name: 'تصميم وبناء الأنظمة المحاسبية الخاصة بالشركات',
        body: 'تصميم نظام محاسبي يناسب طبيعة عمل الشركة: دليل الحسابات، والمستندات، والدورة المستندية، والتقارير.',
      },
      en: {
        name: 'Designing and building accounting systems for companies',
        body: 'Designing an accounting system that fits the way a company works: its chart of accounts, documents, document flow and reports.',
      },
    },
  },
  {
    // §0 default: no third-party product names. TODO(Zain): name the systems supported, if you want them named.
    id: 'system-support',
    group: 'systems',
    content: {
      ar: {
        name: 'الدعم الفني للأنظمة المحاسبية',
        body: 'دعم فني للأنظمة المحاسبية المستخدمة لدى العميل، للمساعدة في استخدامها وحل ما يواجهه المستخدمون فيها.',
      },
      en: {
        name: 'Technical support for accounting systems',
        body: 'Technical support for the accounting systems a client already uses, to help staff use them and sort out the problems they run into.',
      },
    },
  },
  {
    id: 'profits-debts-collection',
    group: 'audit-reporting',
    content: {
      ar: {
        name: 'تقارير الأرباح والتوزيعات، ومعالجة الديون وجدولة سدادها، وتنظيم خطط التحصيل',
        body: 'إعداد تقارير الأرباح وتوزيعاتها، ومعالجة الديون وجدولة سدادها، وتنظيم خطط لتحصيل المبالغ المستحقة.',
      },
      en: {
        name: 'Profit and distribution reports, debt handling and repayment schedules, and collection plans',
        body: 'Reports on profits and their distribution, dealing with debts and scheduling their repayment, and organising plans to collect the amounts owed.',
      },
    },
  },
  {
    // The owner, 16 Nov 2026. Its phone number is the "technical consulting and IT services" one (aaOffice.itPhones).
    id: 'it-services',
    group: 'systems',
    content: {
      ar: {
        name: 'الاستشارات التقنية وخدمات تقنية المعلومات',
        body: 'استشارات تقنية وخدمات تقنية معلومات يقدّمها المكتب مع نظامي Genoa وGenoa Gov، ولها رقم هاتف خاص بها في معلومات التواصل.',
      },
      en: {
        name: 'Technical consulting and IT services',
        body: 'Technical consulting and IT services that the office offers alongside Genoa and Genoa Gov, with their own phone number in the contact details.',
      },
    },
  },
  {
    // The owner, 16 Nov 2026. What the AI services are is not detailed yet: say only that they exist and what for.
    id: 'ai',
    group: 'systems',
    content: {
      ar: {
        name: 'خدمات الذكاء الاصطناعي للأعمال المحاسبية والمالية',
        body: 'خدمات ذكاء اصطناعي خاصة بالأعمال المحاسبية والمالية، يقدّمها المكتب مع نظامي Genoa وGenoa Gov.',
      },
      en: {
        name: 'AI services for accounting and financial work',
        body: 'AI services for accounting and financial work, which the office offers alongside Genoa and Genoa Gov.',
      },
    },
  },
];

/* ---------- Shared blocks (hub, services page) ---------- */

export interface AaConsultation {
  heading: string;
  body: string;
  /** Before a phone number on a call button, e.g. "اتصل على". */
  call: string;
}

export const aaConsultation: L<AaConsultation> = {
  ar: {
    heading: 'استشارة أولية مجانية لأصحاب المشاريع الجديدة',
    body: 'إذا كنت تبدأ مشروعاً جديداً، يقدّم لك المحاسب الأكاديمي استشارة أولية مجانية. اتصل بالمكتب لطلبها.',
    call: 'اتصل على',
  },
  en: {
    heading: 'Free initial consultation for new businesses',
    body: 'If you are starting a new business, Academic Accountant offers you a free initial consultation. Call the office to ask for one.',
    call: 'Call',
  },
};

export interface AaContactBlock {
  heading: string;
  /** Hero button that jumps to this block. */
  jump: string;
  addressLabel: string;
  /** What each group of phone numbers is for (aaPhoneGroups). */
  phoneGroups: Record<AaPhoneGroupId, string>;
  followLabel: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
}

export const aaContactBlock: L<AaContactBlock> = {
  ar: {
    heading: 'موقع المكتب وأرقام التواصل',
    jump: 'العنوان والهاتف',
    addressLabel: 'العنوان',
    phoneGroups: {
      accounting: 'الاستشارات والخدمات المحاسبية',
      it: 'الاستشارات التقنية وخدمات تقنية المعلومات',
    },
    followLabel: 'تابِع المحاسب الأكاديمي',
    facebook: 'المحاسب الأكاديمي على فيسبوك',
    instagram: 'المحاسب الأكاديمي على إنستغرام',
    whatsapp: 'راسل المحاسب الأكاديمي على واتساب',
  },
  en: {
    heading: 'Office location and phone numbers',
    jump: 'Address and phone',
    addressLabel: 'Address',
    phoneGroups: {
      accounting: 'Accounting consulting and services',
      it: 'Technical consulting and IT services',
    },
    followLabel: 'Follow Academic Accountant',
    facebook: 'Academic Accountant on Facebook',
    instagram: 'Academic Accountant on Instagram',
    whatsapp: 'Message Academic Accountant on WhatsApp',
  },
};

/* ---------- Hub: /<lang>/academic-accountant/ ---------- */

export interface AaHubContent extends PageMeta {
  /** Breadcrumbs, nav and links. */
  navLabel: string;
  /** The office's tagline, shown above the H1. */
  eyebrow: string;
  /** The answer: quotable on its own (name, Baghdad Al-Mansour, 15+ years, what it does, Genoa and Genoa Gov). */
  answer: string;
  keyFacts: KeyFact[];
  whatWeDo: {
    heading: string;
    intro: string;
    cards: { group: AaGroupId; icon: IconKey; title: string; body: string }[];
    allServices: string;
  };
  training: { heading: string; body: string[] };
  systems: {
    heading: string;
    intro: string;
    /** One sentence each, from the wording in llms.txt; the link text is the product's label (src/i18n/ui.ts). */
    genoa: string;
    genoaGov: string;
    /** After the two products: what the office offers with them (aaAlongside). */
    alongside: string;
    demoLead: string;
    demoLink: string;
  };
  faqHeading: string;
  faqs: Faq[];
}

export const aaHub: L<AaHubContent> = {
  ar: {
    title: 'المحاسب الأكاديمي في بغداد | محاسبة وتدقيق واستشارات وتدريب',
    description:
      'المحاسب الأكاديمي مكتب محاسبة في المنصور ببغداد بخبرة أكثر من 15 سنة، ومن نتاجه نظاما Genoa وGenoa Gov: محاسبة وتدقيق وتقنية وذكاء اصطناعي.',
    h1: 'المحاسب الأكاديمي: خدمات محاسبية ومالية وتدريب في بغداد',
    navLabel: 'المحاسب الأكاديمي',
    eyebrow: 'خبراء المحاسبة والمالية',
    answer: `المحاسب الأكاديمي مكتب محاسبة واستشارات مالية في منطقة المنصور ببغداد، بخبرة أكثر من 15 سنة في مجال المحاسبة. ومن نتاجه نظاما Genoa للشركات وGenoa Gov للدوائر الحكومية، وقد بُنيا وفق خبراته المحاسبية والتقنية. ويقدّم تنظيم الحسابات والتدقيق والاستشارات المالية والتدريب، إلى جانب الخدمات التقنية وخدمات الذكاء الاصطناعي الخاصة بالأعمال المحاسبية والمالية.`,
    keyFacts: [
      { label: 'الاسم', value: 'المحاسب الأكاديمي (Academic Accountant)' },
      { label: 'الموقع', value: 'بغداد، المنصور، بناية بزنس أفنيو' },
      { label: 'الخبرة', value: 'أكثر من 15 سنة في مجال المحاسبة' },
      { label: 'المجالات', value: 'تدقيق، استشارة، أنظمة' },
      { label: 'من نتاجه', value: 'نظاما Genoa للشركات وGenoa Gov للدوائر الحكومية' },
      { label: 'الاستشارة الأولى', value: 'مجانية لأصحاب المشاريع الجديدة' },
    ],
    whatWeDo: {
      heading: 'ما الذي يقدّمه المحاسب الأكاديمي؟',
      intro: 'يقدّم المكتب خدمات مالية ومحاسبية للمؤسسات على اختلاف أنواعها وأنظمتها المحاسبية، في المجالات التالية:',
      cards: [
        {
          group: 'bookkeeping',
          icon: 'ledger',
          title: 'تنظيم الحسابات',
          body: 'تنظيم حسابات الشركات والمشاريع والمحلات وإدارتها، وتنظيم دفتر اليومية ودفتر الأستاذ والسجلات المساعدة.',
        },
        {
          group: 'analysis',
          icon: 'chart',
          title: 'التحليل المالي',
          body: 'التحليل المالي وإعداد الموازنات التخطيطية، والاحتسابات الضريبية، والاستشارات المالية والكلفوية، وتنظيم مراكز الكلفة.',
        },
        {
          group: 'audit-reporting',
          icon: 'standard',
          title: 'إعداد التقارير',
          body: 'تدقيق البيانات والعمليات المالية، وإعداد التقارير الدورية لأصحاب المشاريع، وتقارير الأرباح والتوزيعات.',
        },
        {
          group: 'systems',
          icon: 'database',
          title: 'الأنظمة والتقنية والذكاء الاصطناعي',
          body: 'تصميم وبناء الأنظمة المحاسبية، ومن نتاجه نظاما Genoa وGenoa Gov، والدعم الفني والاستشارات التقنية، وخدمات الذكاء الاصطناعي للأعمال المحاسبية والمالية.',
        },
      ],
      allServices: 'كل الخدمات المحاسبية والمالية بالتفصيل',
    },
    training: {
      heading: 'التدريب وبناء القدرات',
      // TODO(Zain): course names, format, duration, schedule and fees. With them, add the training page and its
      // Course JSON-LD (see the brief, §2C); until then training stays this one section.
      body: [
        'يقدّم المحاسب الأكاديمي ورشاً تدريبية في النظام المحاسبي المحدث وفق المعايير الدولية، ويعمل على بناء القدرات والتدريب والتطوير المهني.',
        'للاستفسار عن الورش التدريبية، اتصل بالمكتب على أرقام الاستشارات والخدمات المحاسبية أدناه.',
      ],
    },
    systems: {
      heading: 'Genoa وGenoa Gov: من نتاج المحاسب الأكاديمي',
      intro: `${aaRelationship.ar}. و${companyIntro('ar')}، تطوّر النظامين، وهما منفصلان:`,
      genoa: 'برنامج محاسبة ومخازن للشركات العراقية.',
      genoaGov: 'برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية العراقية.',
      alongside: `${aaAlongside.ar}.`,
      demoLead: 'ولمشاهدة أيّ من النظامين:',
      demoLink: 'احجز عرضاً توضيحياً لـ Genoa أو Genoa Gov',
    },
    faqHeading: 'أسئلة شائعة عن المحاسب الأكاديمي',
    faqs: [
      {
        q: 'أين يقع مكتب المحاسب الأكاديمي؟',
        a: [
          'يقع مكتب المحاسب الأكاديمي في بغداد، منطقة المنصور، بناية بزنس أفنيو، قرب جامع أبو جعفر المنصور. وللاستشارات والخدمات المحاسبية اتصل على 07827777420 أو 07712594596، وللاستشارات التقنية وخدمات تقنية المعلومات على 07714487455.',
        ],
      },
      {
        q: 'ما الخدمات التي يقدّمها المحاسب الأكاديمي؟',
        a: [
          'يقدّم المحاسب الأكاديمي خدمات محاسبية ومالية وتدقيقية للشركات والمشاريع والمحلات، منها: تنظيم الحسابات والسجلات المحاسبية، وتدقيق البيانات المالية، وإعداد التقارير الدورية، والتحليل المالي والموازنات التخطيطية، والاحتسابات الضريبية، والاستشارات المالية والكلفوية، وتصميم الأنظمة المحاسبية ودعمها فنياً، والاستشارات التقنية وخدمات تقنية المعلومات، وخدمات الذكاء الاصطناعي للأعمال المحاسبية والمالية. وتجد وصف كل خدمة في صفحة الخدمات.',
        ],
      },
      {
        q: 'هل الاستشارة الأولى لدى المحاسب الأكاديمي مجانية؟',
        a: ['نعم، يقدّم المحاسب الأكاديمي استشارة أولية مجانية لأصحاب المشاريع الجديدة.'],
      },
      {
        q: 'هل يقدّم المحاسب الأكاديمي تدريباً؟',
        a: [
          'نعم. يقدّم ورشاً تدريبية في النظام المحاسبي المحدث وفق المعايير الدولية، إلى جانب بناء القدرات والتدريب والتطوير المهني. وللاستفسار عن الورش، اتصل بالمكتب.',
        ],
      },
      {
        q: 'ما علاقة المحاسب الأكاديمي بأنظمة Genoa (جينوا)؟',
        a: [`${aaRelationship.ar}، وتطوّرهما Genoa Systems. ${aaAlongside.ar}.`],
      },
    ],
  },
  en: {
    title: 'Academic Accountant in Baghdad | Accounting and Training',
    description:
      'Academic Accountant, the Baghdad accounting office behind Genoa and Genoa Gov: 15+ years in accounting, with audit, technology and AI services.',
    h1: 'Academic Accountant: accounting, finance and training services in Baghdad',
    navLabel: 'Academic Accountant',
    eyebrow: 'Accounting and finance experts',
    answer: `Academic Accountant (المحاسب الأكاديمي) is an accounting and financial consulting office in Al-Mansour, Baghdad, with more than 15 years of experience in accounting. Genoa for companies and Genoa Gov for government departments are its products, built on its accounting and technology expertise. It offers bookkeeping, audit, financial advice and training, as well as technology services and AI services for accounting and financial work.`,
    keyFacts: [
      { label: 'Name', value: 'Academic Accountant (in Arabic: المحاسب الأكاديمي)' },
      { label: 'Location', value: 'Business Avenue Building, Al-Mansour, Baghdad' },
      { label: 'Experience', value: 'More than 15 years in accounting' },
      { label: 'Focus', value: 'Audit, advice, systems' },
      { label: 'Its software', value: 'Genoa for companies and Genoa Gov for government departments' },
      { label: 'First consultation', value: 'Free for owners of new businesses' },
    ],
    whatWeDo: {
      heading: 'What does Academic Accountant do?',
      intro: 'The office provides financial and accounting services to organisations of every kind, whatever accounting system they use, in these areas:',
      cards: [
        {
          group: 'bookkeeping',
          icon: 'ledger',
          title: 'Bookkeeping',
          body: 'Keeping and managing the accounts of companies, projects and shops, and organising the journal, general ledger and subsidiary records.',
        },
        {
          group: 'analysis',
          icon: 'chart',
          title: 'Financial analysis',
          body: 'Financial analysis and planning budgets, tax calculations, financial and cost advice, and cost centres.',
        },
        {
          group: 'audit-reporting',
          icon: 'standard',
          title: 'Reporting',
          body: 'Auditing financial data and transactions, regular reports for business owners, and reports on profits and distributions.',
        },
        {
          group: 'systems',
          icon: 'database',
          title: 'Systems, technology and AI',
          body: 'Designing and building accounting systems (Genoa and Genoa Gov are the office’s own), technical support and IT consulting, and AI services for accounting and financial work.',
        },
      ],
      allServices: 'All accounting and financial services in detail',
    },
    training: {
      heading: 'Training and capacity building',
      body: [
        'Academic Accountant runs training workshops on the updated accounting system in line with international standards, and offers capacity building, training and professional development.',
        'To ask about the workshops, call the office on its accounting consulting and services numbers below.',
      ],
    },
    systems: {
      heading: 'Genoa and Genoa Gov: products of Academic Accountant',
      intro: `${aaRelationship.en}. ${companyIntro('en')} that develops them as two separate products:`,
      genoa: 'accounting and inventory software for companies.',
      genoaGov: 'government accounting software for the accounts sections of Iraqi government departments.',
      alongside: `${aaAlongside.en}.`,
      demoLead: 'To see either product:',
      demoLink: 'book a demo of Genoa or Genoa Gov',
    },
    faqHeading: 'Questions about Academic Accountant',
    faqs: [
      {
        q: 'Where is the Academic Accountant office?',
        a: [
          'The Academic Accountant office is in the Business Avenue Building in Al-Mansour, Baghdad, near Abu Jaafar Al-Mansour Mosque. For accounting consulting and services call +964 782 777 7420 or +964 771 259 4596; for technical consulting and IT services, call +964 771 448 7455.',
        ],
      },
      {
        q: 'What services does Academic Accountant offer?',
        a: [
          'Academic Accountant offers accounting, finance and audit services to companies, projects and shops: bookkeeping and accounting records, auditing financial data, regular reports, financial analysis and planning budgets, tax calculations, financial and cost advice, the design and technical support of accounting systems, technical consulting and IT services, and AI services for accounting and financial work. Each service is described on the services page.',
        ],
      },
      {
        q: 'Is the first consultation with Academic Accountant free?',
        a: ['Yes. Academic Accountant offers a free initial consultation to owners of new businesses.'],
      },
      {
        q: 'Does Academic Accountant offer training?',
        a: [
          'Yes. It runs training workshops on the updated accounting system in line with international standards, and offers capacity building, training and professional development. To ask about the workshops, call the office.',
        ],
      },
      {
        q: 'How is Academic Accountant related to Genoa and Genoa Gov?',
        a: [`${aaRelationship.en}; Genoa Systems develops them. ${aaAlongside.en}.`],
      },
    ],
  },
};

/* ---------- Services page: /<lang>/academic-accountant/services/ ---------- */

export interface AaServicesContent extends PageMeta {
  navLabel: string;
  /** Intro under the H1: what the office offers and to whom. */
  answer: string;
  groups: Record<AaGroupId, string>;
  /** Under the "systems, technology and AI" group, before the links to Genoa and Genoa Gov. */
  systemsLead: string;
  whoFor: { heading: string; body: string; bullets: string[] };
  backToHub: string;
}

export const aaServicesPage: L<AaServicesContent> = {
  ar: {
    title: 'المحاسب الأكاديمي في بغداد: خدمات المحاسبة والتدقيق',
    description:
      'خدمات المحاسب الأكاديمي في بغداد: تنظيم الحسابات، والتدقيق والتقارير، والتحليل المالي والضريبة والكلفة، والأنظمة والتقنية والذكاء الاصطناعي.',
    h1: 'الخدمات المحاسبية والمالية والتدقيق | المحاسب الأكاديمي',
    navLabel: 'الخدمات',
    answer:
      'يقدّم المحاسب الأكاديمي، مكتب المحاسبة والاستشارات المالية في المنصور ببغداد، خدمات محاسبية ومالية وتدقيقية للشركات والمشاريع والمحلات. وتشمل تنظيم الحسابات والسجلات، والتدقيق وإعداد التقارير، والتحليل المالي والموازنات والضريبة والكلفة، وتصميم الأنظمة المحاسبية ودعمها فنياً، والخدمات التقنية وخدمات الذكاء الاصطناعي للأعمال المحاسبية والمالية.',
    groups: {
      bookkeeping: 'تنظيم الحسابات والسجلات المحاسبية',
      'audit-reporting': 'التدقيق وإعداد التقارير',
      analysis: 'التحليل المالي والموازنات والضريبة والكلفة',
      systems: 'الأنظمة المحاسبية والتقنية والذكاء الاصطناعي',
    },
    systemsLead: 'ومن نتاج خبرات المكتب المحاسبية والتقنية نظاما:',
    whoFor: {
      heading: 'لمن هذه الخدمات؟',
      body: 'يقدّم المحاسب الأكاديمي خدماته للمؤسسات على اختلاف أنواعها وأنظمتها المحاسبية، ومنها:',
      bullets: [
        'الشركات.',
        'المشاريع، ومنها المشاريع الصناعية والإنتاجية التي تحتاج إلى تنظيم مراكز الكلفة.',
        'المحلات.',
        'أصحاب المشاريع الجديدة، ولهم استشارة أولية مجانية.',
      ],
    },
    backToHub: 'تعرّف على مكتب المحاسب الأكاديمي',
  },
  en: {
    title: 'Accounting and Audit in Baghdad | Academic Accountant',
    description:
      "Academic Accountant's services in Baghdad: bookkeeping, audit and reporting, financial analysis, tax and cost, and accounting systems, technology and AI.",
    h1: 'Accounting, Audit and Financial Advisory Services | Academic Accountant',
    navLabel: 'Services',
    answer:
      'Academic Accountant, an accounting and financial consulting office in Al-Mansour, Baghdad, offers accounting, finance and audit services to companies, projects and shops. They cover bookkeeping and records, audit and reporting, financial analysis, budgeting, tax and cost, the design and support of accounting systems, and technology and AI services for accounting and financial work.',
    groups: {
      bookkeeping: 'Bookkeeping and records',
      'audit-reporting': 'Audit and reporting',
      analysis: 'Financial analysis, budgeting, tax and cost',
      systems: 'Accounting systems, technology and AI',
    },
    systemsLead: 'Built on the office’s accounting and technology expertise:',
    whoFor: {
      heading: 'Who are these services for?',
      body: 'Academic Accountant works with organisations of every kind, whatever accounting system they use, including:',
      bullets: [
        'Companies.',
        'Projects, including industrial and production projects that need cost centres.',
        'Shops.',
        'Owners of new businesses, who can have a free initial consultation.',
      ],
    },
    backToHub: 'About the Academic Accountant office',
  },
};

/* ---------- Mentions on Genoa Systems' own pages ---------- */

/** The short paragraph on /about/ (relationship + link). */
export const aaOnAbout: L<{ heading: string; body: string; link: string }> = {
  ar: {
    heading: 'Genoa وGenoa Gov من نتاج المحاسب الأكاديمي',
    body: `المحاسب الأكاديمي مكتب محاسبة واستشارات مالية في بغداد، بخبرة أكثر من 15 سنة في مجال المحاسبة. ${aaRelationship.ar}. ${aaAlongside.ar}، إلى جانب التدقيق والتدريب.`,
    link: 'تعرّف على مكتب المحاسب الأكاديمي في بغداد',
  },
  en: {
    heading: 'Genoa and Genoa Gov: products of Academic Accountant',
    body: `Academic Accountant (المحاسب الأكاديمي) is an accounting and financial consulting office in Baghdad, with more than 15 years of experience in accounting. ${aaRelationship.en}. ${aaAlongside.en}, as well as audit and training.`,
    link: 'About the Academic Accountant office in Baghdad',
  },
};

/** The small office box on /contact/ (the demo form there stays for Genoa). */
export const aaOnContact: L<{ heading: string; body: string; link: string }> = {
  ar: {
    heading: 'مكتب المحاسب الأكاديمي في بغداد',
    body: 'لخدمات المحاسبة والتدقيق والاستشارات المالية والتدريب، والخدمات التقنية وخدمات الذكاء الاصطناعي للأعمال المحاسبية والمالية، تواصل مع مكتب المحاسب الأكاديمي، الذي بُني نظاما Genoa وGenoa Gov وفق خبراته المحاسبية والتقنية. أما طلب العرض التوضيحي لبرامج Genoa فيكون عبر النموذج في هذه الصفحة.',
    link: 'تعرّف على المحاسب الأكاديمي وخدماته',
  },
  en: {
    heading: 'Academic Accountant office in Baghdad',
    body: 'For accounting, audit, financial advice and training, technology services and AI for accounting and financial work, contact the Academic Accountant office, whose accounting and technology expertise Genoa and Genoa Gov were built on. To book a demo of Genoa software, use the form on this page.',
    link: 'About Academic Accountant and its services',
  },
};

/** The home page: a line in the hero beside "Genoa Systems", and a section beside the two products. */
export interface AaOnHome {
  /** Hero, beside the eyebrow: links to the hub. */
  byline: string;
  heading: string;
  body: string;
  offers: { icon: IconKey; text: string }[];
  hubLink: string;
  servicesLink: string;
}

export const aaOnHome: L<AaOnHome> = {
  ar: {
    byline: 'من نتاج المحاسب الأكاديمي',
    heading: 'Genoa وGenoa Gov من نتاج المحاسب الأكاديمي',
    body: 'بُني نظاما Genoa للشركات وGenoa Gov للدوائر الحكومية وفق الخبرات المحاسبية والتقنية لمكتب المحاسب الأكاديمي في بغداد، صاحب الخبرة التي تزيد على 15 سنة في مجال المحاسبة. ويقدّم المكتب مع النظامين:',
    offers: [
      { icon: 'ledger', text: 'خدمات محاسبية ومالية وتدقيقية' },
      { icon: 'support', text: 'استشارات تقنية وخدمات تقنية المعلومات' },
      { icon: 'spark', text: 'خدمات ذكاء اصطناعي خاصة بالأعمال المحاسبية والمالية' },
    ],
    hubLink: 'تعرّف على المحاسب الأكاديمي',
    servicesLink: 'خدمات المكتب بالتفصيل',
  },
  en: {
    byline: 'A product of Academic Accountant',
    heading: 'Genoa and Genoa Gov: products of Academic Accountant',
    body: 'Genoa for companies and Genoa Gov for government departments were built on the accounting and technology expertise of Academic Accountant, an accounting office in Baghdad with more than 15 years of experience in accounting. Alongside the two systems, the office offers:',
    offers: [
      { icon: 'ledger', text: 'Accounting, finance and audit services' },
      { icon: 'support', text: 'Technical consulting and IT services' },
      { icon: 'spark', text: 'AI services for accounting and financial work' },
    ],
    hubLink: 'About Academic Accountant',
    servicesLink: 'The office’s services in detail',
  },
};
