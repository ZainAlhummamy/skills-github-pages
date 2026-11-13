import type { L, PageMeta, Section } from './types';
import { companyIntro } from '../config/site';

/* Copy for the shared pages: home, security and backups, about, contact, 404.
 * Rules: see CONTENT-GUIDE.md. Sentences that go beyond the confirmed product
 * facts are listed in CLAIMS-TO-VERIFY.md. */

export interface HomeContent extends PageMeta {
  answer: string;
  /** Short chips under the hero CTAs. Confirmed facts only. */
  highlights: string[];
  products: {
    companies: { heading: string; body: string; cta: string };
    government: { heading: string; body: string; cta: string };
  };
  compare: {
    heading: string;
    intro: string;
    rowLabels: { for: string; modules: string; distinctive: string; more: string };
    genoa: { for: string; modules: string; distinctive: string };
    gov: { for: string; modules: string; distinctive: string };
  };
  /** The AI section: the two AI features of Genoa (their names and summaries come from the feature pages). */
  ai: { eyebrow: string; heading: string; intro: string; note: string };
  principles: { heading: string; items: { title: string; body: string }[] };
  security: { heading: string; body: string; link: string };
  faq: { heading: string; body: string };
}

export const home: L<HomeContent> = {
  ar: {
    title: 'نظام محاسبي عراقي للشركات والدوائر الحكومية | Genoa Systems',
    description:
      'نظام محاسبي عراقي للشركات والدوائر الحكومية: Genoa نظام محاسبي للشركات بدليل حسابات النظام المحاسبي الموحد وقوائم IFRS، وGenoa Gov نظام محاسبي حكومي لأقسام الحسابات.',
    h1: 'نظام محاسبي عراقي للشركات وللدوائر الحكومية',
    answer: `${companyIntro('ar')}، ولها نظامان محاسبيان منفصلان. Genoa نظام محاسبي عراقي للشركات، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، ويجمع الحسابات وإدارة المخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمارها. وفيه مساعد ذكي يعمل بالذكاء الاصطناعي وإضافة فاتورة مباشرة من صورتها. وGenoa Gov نظام محاسبي حكومي لأقسام الحسابات في الدوائر الحكومية العراقية، يغطي المستندات ومنها مستند الصرف (سند الصرف)، وسلسلة المصادقة والموازنة والصكوك والغلق الشهري والسنوي.`,
    highlights: [
      'النظام المحاسبي الموحد وقوائم IFRS',
      'سلسلة مصادقة متعددة المستخدمين',
      'سجل تدقيق كامل للتعديلات',
      'قاعدة بيانات مستقلة لكل دائرة',
      'الدينار والدولار (اختياري)',
      'مساعد ذكي وفاتورة من صورة',
    ],
    products: {
      companies: {
        heading: 'ما هو Genoa؟',
        body: 'Genoa برنامج محاسبة ومخازن للشركات العراقية، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS). يجمع في برنامج واحد الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الديون. تعدد العملات (الدولار الأمريكي إلى جانب الدينار العراقي) والكلفة الواصلة (الشحن والكمارك فوق كلفة المادة) ميزتان اختياريتان، معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة. وفي Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها.',
        cta: 'تعرّف على Genoa للشركات',
      },
      government: {
        heading: 'ما هو Genoa Gov؟',
        body: 'Genoa Gov برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية العراقية. تمر المستندات فيه بسلسلة مصادقة يشارك فيها أكثر من مستخدم، ويُحفظ كل تعديل على مستند مرحَّل في سجل تدقيق كامل. ويتضمن الموازنة والتحقق من التخصيصات، والصكوك، والغلق الشهري والسنوي، ومكتبة للتشريعات، وقاعدة بيانات مستقلة لكل دائرة.',
        cta: 'تعرّف على Genoa Gov',
      },
    },
    compare: {
      heading: 'أيّ البرنامجين يناسب جهتك؟',
      intro: 'Genoa وGenoa Gov برنامجان منفصلان، ولكل منهما وحداته. يلخّص الجدول التالي الفرق بينهما.',
      rowLabels: {
        for: 'مصمَّم لـ',
        modules: 'الوحدات الأساسية',
        distinctive: 'ما يميّزه',
        more: 'التفاصيل',
      },
      genoa: {
        for: 'الشركات العراقية التي تبيع وتشتري وتدير مخزوناً',
        modules: 'الحسابات، المخازن، المبيعات والمشتريات، ذمم الزبائن والمجهزين وأعمارها',
        distinctive: 'دليل حسابات النظام المحاسبي الموحد وقوائم مالية وفق معايير IFRS، وتعدد العملات والكلفة الواصلة ميزتان اختياريتان، معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة؛ ومساعد ذكي وإضافة فاتورة من صورة بالذكاء الاصطناعي',
      },
      gov: {
        for: 'أقسام الحسابات في الدوائر الحكومية العراقية وتشكيلاتها',
        modules: 'المستندات وسلسلة المصادقة، تعديل المستندات المرحّلة، الموازنة والتخصيصات، الصكوك، الغلق الشهري والسنوي، مكتبة التشريعات',
        distinctive: 'سجل تدقيق كامل لكل تعديل على مستند مرحَّل، وقاعدة بيانات مستقلة لكل دائرة',
      },
    },
    ai: {
      eyebrow: 'الذكاء الاصطناعي في Genoa',
      heading: 'مساعد ذكي، وفاتورة تُضاف من صورتها',
      intro: 'في برنامج Genoa للشركات ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم أثناء عمله داخل البرنامج، وإضافة فاتورة مباشرة من صورتها بدلاً من إدخالها يدوياً.',
      note: 'الميزتان تعينان المستخدم، وتبقى مراجعة العمل واعتماده للمحاسب.',
    },
    principles: {
      heading: 'مبادئ واضحة في البرنامجين',
      items: [
        {
          title: 'النظام المحاسبي الموحد وقوائم IFRS',
          body: 'يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)، فيعمل المحاسب بدليل الحسابات الذي يعرفه.',
        },
        {
          title: 'ما لا تحتاجه يبقى معطّلاً',
          body: 'الميزات الاختيارية في Genoa، مثل تعدد العملات والكلفة الواصلة، معطّلة افتراضياً وتُفعَّل لكل شركة على حدة حسب حاجتها.',
        },
        {
          title: 'أكثر من مستخدم على كل مستند',
          body: 'تمر المستندات في Genoa Gov بسلسلة مصادقة متعددة المستخدمين قبل اعتمادها.',
        },
        {
          title: 'كل تعديل يترك أثراً',
          body: 'تعديل مستند بعد ترحيله في Genoa Gov يُسجَّل في سجل تدقيق كامل يمكن الرجوع إليه.',
        },
      ],
    },
    security: {
      heading: 'بياناتك المحاسبية: الفصل والتتبّع والنسخ الاحتياطي',
      body: 'اقرأ كيف يتعامل Genoa وGenoa Gov مع فصل البيانات وسجل التعديلات والنسخ الاحتياطي، والأسئلة التي ننصحك بطرحها على أي مزوّد برنامج محاسبي.',
      link: 'صفحة الأمان والنسخ الاحتياطي',
    },
    faq: {
      heading: 'أسئلة المشترين، بإجابات مباشرة',
      body: 'جمعنا الأسئلة التي يطرحها المحاسبون ومدراء الحسابات قبل اختيار برنامج، وأجبنا عنها لكل برنامج في صفحة مستقلة.',
    },
  },
  en: {
    title: 'Accounting Software for Iraq | Genoa Systems',
    description:
      'Iraqi accounting software for companies and government: Genoa for accounts and inventory (Unified Accounting System chart of accounts, IFRS statements) and Genoa Gov.',
    h1: 'Accounting software for Iraqi companies and government departments',
    answer: `${companyIntro('en')}, with two separate accounting products for the Iraqi market. Genoa is for companies: it uses the Unified Accounting System chart of accounts, can prepare IFRS-based financial statements, and brings together accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing. It also has an AI assistant and can add an invoice directly from an image. Genoa Gov is for the accounts sections of Iraqi government departments and covers vouchers, including payment vouchers, with multi-user approval, budgets and allocation checks, cheques, and month-end and year-end closing.`,
    highlights: [
      'Unified Accounting System and IFRS statements',
      'Multi-user approval workflow',
      'Full audit trail for amendments',
      'A separate database per office',
      'Dinar and dollar (optional)',
      'AI assistant and invoice from image',
    ],
    products: {
      companies: {
        heading: 'What is Genoa?',
        body: 'Genoa is accounting and inventory software for Iraqi companies that uses the Unified Accounting System chart of accounts and can prepare financial statements based on International Financial Reporting Standards (IFRS). It brings accounting, inventory, sales and purchasing, and customer and supplier ledgers with debt ageing into one product. Multi-currency (US dollars alongside Iraqi dinars) and landed cost (freight and customs added on top of item cost) are optional features: they are off by default and are switched on per organisation. Genoa also has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it.',
        cta: 'Explore Genoa for companies',
      },
      government: {
        heading: 'What is Genoa Gov?',
        body: 'Genoa Gov is government accounting software for the accounts sections of Iraqi government departments. Vouchers go through an approval workflow involving more than one user, and every amendment to a posted voucher is kept in a full audit trail. It also covers budgets and allocation checks, cheques, month-end and year-end closing, a legislation library, and a separate database for each office.',
        cta: 'Explore Genoa Gov',
      },
    },
    compare: {
      heading: 'Which product fits your organisation?',
      intro: 'Genoa and Genoa Gov are separate products, each with its own modules. The table below summarises the difference.',
      rowLabels: {
        for: 'Built for',
        modules: 'Core modules',
        distinctive: 'What sets it apart',
        more: 'Details',
      },
      genoa: {
        for: 'Iraqi companies that buy, sell and hold stock',
        modules: 'Accounting, inventory, sales and purchasing, customer and supplier ledgers with ageing',
        distinctive: 'The Unified Accounting System chart of accounts and IFRS-based statements; multi-currency and landed cost are optional, off by default and switched on per organisation; an AI assistant and invoice from image',
      },
      gov: {
        for: 'Accounts sections of Iraqi government departments and their sub-units',
        modules: 'Vouchers and approval workflow, amendment of posted vouchers, budgets and allocations, cheques, month and year closing, legislation library',
        distinctive: 'A full audit trail for every amendment to a posted voucher, and a separate database for each office',
      },
    },
    ai: {
      eyebrow: 'AI in Genoa',
      heading: 'An AI assistant, and invoices added from a picture',
      intro: 'Genoa for companies has two AI-powered features: an AI assistant that helps the user while they work inside the software, and adding an invoice directly from an image of it instead of typing it in.',
      note: 'Both features support the user; reviewing and approving the work stays with the accountant.',
    },
    principles: {
      heading: 'Clear principles in both products',
      items: [
        {
          title: 'Unified Accounting System and IFRS statements',
          body: 'Genoa uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS), so accountants work with a chart of accounts they know.',
        },
        {
          title: 'What you do not need stays off',
          body: 'Optional features in Genoa, such as multi-currency and landed cost, are off by default and are switched on per organisation as needed.',
        },
        {
          title: 'More than one person on every voucher',
          body: 'Vouchers in Genoa Gov go through a multi-user approval workflow before they are approved.',
        },
        {
          title: 'Every amendment leaves a trace',
          body: 'Amending a posted voucher in Genoa Gov is recorded in a full audit trail that can be reviewed later.',
        },
      ],
    },
    security: {
      heading: 'Your accounting data: separation, traceability and backups',
      body: 'Read how Genoa and Genoa Gov handle data separation, the amendment audit trail and backups, plus the questions we suggest asking any accounting software vendor.',
      link: 'Security and backups',
    },
    faq: {
      heading: 'Buyer questions, answered directly',
      body: 'We collected the questions accountants and finance managers ask before choosing software, and answered them for each product on its own page.',
    },
  },
};

export interface ArticleContent extends PageMeta {
  answer: string;
  sections: Section[];
}

export const security: L<ArticleContent> = {
  ar: {
    title: 'الأمان والنسخ الاحتياطي لبياناتك المحاسبية | Genoa',
    description:
      'كيف نحمي بياناتك المحاسبية في Genoa للشركات وGenoa Gov للدوائر الحكومية: خطة نسخ احتياطي مكتوبة لكل جهة، وقاعدة بيانات مستقلة لكل دائرة، وسجل تدقيق لكل تعديل.',
    h1: 'الأمان والنسخ الاحتياطي في Genoa وGenoa Gov',
    answer:
      'يحمي Genoa Gov البيانات المحاسبية بثلاث وسائل مبنية في طريقة عمله: قاعدة بيانات مستقلة لكل دائرة، وسلسلة مصادقة يشارك فيها أكثر من مستخدم، وسجل تدقيق كامل لكل تعديل على مستند مرحَّل. أما النسخ الاحتياطي في Genoa وGenoa Gov فنتفق على خطته مع كل جهة عند التشغيل: ما الذي يُنسخ، وكم مرة، وأين تُحفظ النسخ، وكيف تُختبر الاستعادة.',
    sections: [
      {
        heading: 'كيف تُفصل بيانات كل دائرة في Genoa Gov؟',
        body: [
          'لكل دائرة في Genoa Gov قاعدة بيانات مستقلة. بيانات دائرة لا تختلط ببيانات دائرة أخرى، فتبقى مستندات كل دائرة وموازنتها وصكوكها في قاعدتها الخاصة.',
        ],
      },
      {
        heading: 'كيف تدعم سلسلة المصادقة الفصل بين المهام؟',
        body: [
          'تمر المستندات في Genoa Gov بسلسلة مصادقة يشارك فيها أكثر من مستخدم قبل اعتمادها. هذا يدعم مبدأ الفصل بين المهام الذي تعمل به أقسام الحسابات والتدقيق: من ينظّم المستند ليس وحده من يعتمده.',
        ],
      },
      {
        heading: 'ماذا يحدث عند تعديل مستند بعد ترحيله؟',
        body: [
          'يسمح Genoa Gov بتعديل المستندات المرحّلة، ويحفظ كل تعديل في سجل تدقيق كامل. يبقى السجل مرجعاً عند التدقيق الداخلي أو عند تدقيق ديوان الرقابة المالية، لأن التعديل لا يمحو أثر ما كان قبله.',
        ],
      },
      {
        heading: 'كيف يحمي الغلق الشهري والسنوي الأرقام المعتمدة؟',
        body: [
          'يدعم Genoa Gov الغلق الشهري وغلق السنة المالية. الغلق يثبّت أرقام الفترة بعد مراجعتها، فتُبنى التقارير والحسابات الختامية على أرقام لا تتغير دون علم القسم.',
        ],
      },
      {
        heading: 'كيف يتم النسخ الاحتياطي والاستعادة؟',
        body: [
          'النسخة الاحتياطية لا قيمة لها إذا لم تُجرَّب استعادتها. لذلك نتفق مع كل شركة أو دائرة عند تشغيل Genoa أو Genoa Gov على خطة نسخ احتياطي مكتوبة تجيب عن هذه الأسئلة:',
        ],
        bullets: [
          'ما الذي يُنسخ احتياطياً؟',
          'كم مرة تُؤخذ النسخة؟',
          'أين تُحفظ النسخ، وهل توجد نسخة خارج المبنى؟',
          'متى جُرّبت الاستعادة آخر مرة، ومن جرّبها؟',
        ],
      },
      {
        heading: 'هل يحتوي هذا الموقع على بيانات زبائننا؟',
        body: [
          'لا. هذا الموقع صفحات ثابتة لا تتصل بأي قاعدة بيانات، ولا يحتوي على أسماء زبائن أو أرقام عنهم أو شهادات. لقطات الشاشة المعروضة مأخوذة من البرنامج نفسه ببيانات تجريبية بالكامل، وما لم تتوفر له لقطة بعد يظهر كصورة مؤقتة معلَّمة بوضوح.',
          'نموذج طلب العرض التوضيحي لا يحفظ بياناتك على هذا الموقع، بل يرسلها إلينا لنتواصل معك. ولا يستخدم الموقع أدوات تتبّع أو إعلانات.',
        ],
      },
      {
        heading: 'ما الأسئلة التي يجب أن تطرحها على أي مزوّد برنامج محاسبي؟',
        body: [
          'سواء اخترت Genoa أو Genoa Gov أو أي برنامج آخر، نقترح أن تحصل على إجابة واضحة ومكتوبة عن هذه الأسئلة قبل التعاقد:',
        ],
        bullets: [
          'أين تُحفظ بياناتنا، ومن يملكها؟',
          'من يستطيع الاطلاع على البيانات أو تعديلها، وكيف تُدار صلاحيات المستخدمين؟',
          'هل يُسجَّل كل تعديل على القيود والمستندات المرحّلة، ومن يستطيع رؤية السجل؟',
          'كم مرة يُؤخذ النسخ الاحتياطي، وأين يُحفظ؟',
          'كيف ومتى تُختبر استعادة النسخ الاحتياطية؟',
          'كيف نحصل على بياناتنا إذا أنهينا التعاقد؟',
        ],
      },
    ],
  },
  en: {
    title: 'Security and Backups for Your Accounting Data | Genoa',
    description:
      'Data protection in Genoa and Genoa Gov: a written backup plan agreed with each organisation, plus a separate database per office and an amendment audit trail in Genoa Gov.',
    h1: 'Security and backups in Genoa and Genoa Gov',
    answer:
      'Genoa Gov protects accounting data through three things built into how it works: a separate database for each office, an approval workflow involving more than one user, and a full audit trail of every amendment to a posted voucher. For backups in both Genoa and Genoa Gov, we agree a plan with each organisation at setup: what is backed up, how often, where copies are kept, and how restores are tested.',
    sections: [
      {
        heading: 'How is each office’s data kept separate in Genoa Gov?',
        body: [
          'Each office in Genoa Gov has its own database. One office’s data is never mixed with another’s, so each office’s vouchers, budget and cheques stay in its own database.',
        ],
      },
      {
        heading: 'How does the approval workflow support segregation of duties?',
        body: [
          'Vouchers in Genoa Gov go through an approval workflow involving more than one user before they are approved. This supports the segregation of duties that accounts and audit sections already work by: the person who prepares a voucher is not the only person who approves it.',
        ],
      },
      {
        heading: 'What happens when a posted voucher is amended?',
        body: [
          'Genoa Gov allows posted vouchers to be amended, and records every amendment in a full audit trail. The trail remains a reference for internal audit or for an audit by the Federal Board of Supreme Audit, because an amendment does not erase what came before it.',
        ],
      },
      {
        heading: 'How do month-end and year-end closing protect approved figures?',
        body: [
          'Genoa Gov supports month-end closing and year-end closing. Closing fixes a period’s figures once they have been reviewed, so reports and final accounts are built on figures that do not change without the accounts section knowing.',
        ],
      },
      {
        heading: 'How are backups and restores handled?',
        body: [
          'A backup is only worth something if restoring it has been tested. That is why, when an organisation starts using Genoa or Genoa Gov, we agree a written backup plan with them that answers these questions:',
        ],
        bullets: [
          'What is backed up?',
          'How often is a backup taken?',
          'Where are copies kept, and is there a copy off site?',
          'When was a restore last tested, and by whom?',
        ],
      },
      {
        heading: 'Does this website hold any customer data?',
        body: [
          'No. This website is a set of static pages that does not connect to any database, and it contains no customer names, customer figures or testimonials. The screenshots shown are taken from the software itself with entirely fictional demo data, and any slot without one yet shows a clearly marked placeholder.',
          'The demo request form does not store your details on this website; it sends them to us so we can contact you. The website uses no tracking tools or advertising.',
        ],
      },
      {
        heading: 'What should you ask any accounting software vendor?',
        body: [
          'Whether you choose Genoa, Genoa Gov or another product, we suggest getting a clear, written answer to these questions before you sign:',
        ],
        bullets: [
          'Where is our data stored, and who owns it?',
          'Who can view or change the data, and how are user permissions managed?',
          'Is every change to posted entries and vouchers recorded, and who can see that record?',
          'How often are backups taken, and where are they kept?',
          'How and when are restores tested?',
          'How do we get our data back if we end the contract?',
        ],
      },
    ],
  },
};

export const about: L<ArticleContent> = {
  ar: {
    title: 'عن Genoa Systems | برامج محاسبة للسوق العراقي',
    description: `${companyIntro('ar')}، تطوّر Genoa، برنامج محاسبة ومخازن للشركات، وGenoa Gov، برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية.`,
    h1: 'عن Genoa Systems',
    answer: `${companyIntro('ar')}. منتجاها برنامجان محاسبيان منفصلان للسوق العراقي: Genoa للشركات، وGenoa Gov لأقسام الحسابات في الدوائر الحكومية. يركّز البرنامجان على العمل اليومي للمحاسب في العراق: المستندات والقيود، والمخازن والذمم، والموازنة والصكوك، والغلق في نهاية الفترة.`,
    sections: [
      {
        heading: 'ماذا تطوّر Genoa Systems؟',
        body: [
          'Genoa برنامج محاسبة ومخازن للشركات، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)، ويجمع الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمارها، مع ميزتين اختياريتين هما تعدد العملات والكلفة الواصلة.',
          'Genoa Gov برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية العراقية، يغطي المستندات وسلسلة المصادقة، وتعديل المستندات المرحّلة مع سجل تدقيق كامل، والموازنة، والصكوك، والغلق الشهري والسنوي، ومكتبة التشريعات، مع قاعدة بيانات مستقلة لكل دائرة.',
          // AI: the two features the owner confirmed on 13 Nov 2026 (CONTENT-GUIDE.md section 1).
          'وتبني Genoa Systems حلولها المالية والمحاسبية بأحدث التقنيات، مع ذكاء اصطناعي موجّه للأعمال المحاسبية والمالية. ففي Genoa مساعد ذكي يساعد المستخدم داخل البرنامج، وميزة تضيف الفاتورة مباشرة من صورتها.',
        ],
      },
      {
        heading: 'لماذا برنامجان منفصلان؟',
        body: [
          'محاسبة الشركة تختلف عن محاسبة الدائرة الحكومية. الشركة تهتم بالمخزون والمبيعات والذمم وكلفة البضاعة، والدائرة تهتم بالتخصيصات والمصادقات والصكوك وتوثيق كل تعديل. لذلك لكل منهما برنامج بوحداته الخاصة بدلاً من برنامج واحد يحاول أن يناسب الجميع.',
        ],
      },
      {
        heading: 'كيف نتعامل مع الميزات الإضافية؟',
        body: [
          'الميزات التي لا تحتاجها كل شركة، مثل تعدد العملات والكلفة الواصلة في Genoa، تبقى معطّلة افتراضياً وتُفعَّل لكل شركة على حدة عند الحاجة.',
        ],
      },
      {
        heading: 'ما الذي لن تجده في هذا الموقع؟',
        body: [
          'لن تجد أسماء زبائن أو شهادات أو أرقاماً عن عدد المستخدمين. نفضّل أن نعرض البرنامج نفسه في عرض توضيحي على أن ننشر ادعاءات لا تستطيع التحقق منها. لقطات الشاشة في هذا الموقع مأخوذة من البرنامج نفسه ببيانات تجريبية بالكامل.',
        ],
      },
      {
        heading: 'أين تعمل Genoa Systems؟',
        body: [`${companyIntro('ar')}، وتخدم الشركات والدوائر الحكومية في العراق.`],
      },
    ],
  },
  en: {
    title: 'About Genoa Systems | Accounting Software for Iraq',
    description: `${companyIntro('en')} that makes Genoa, accounting and inventory software for companies, and Genoa Gov, government accounting software.`,
    h1: 'About Genoa Systems',
    answer: `${companyIntro('en')}. Its two separate accounting products for the Iraqi market are Genoa, for companies, and Genoa Gov, for the accounts sections of government departments. Both focus on the day-to-day work of accountants in Iraq: vouchers and journal entries, stock and balances, budgets and cheques, and closing at the end of each period.`,
    sections: [
      {
        heading: 'What does Genoa Systems build?',
        body: [
          'Genoa is accounting and inventory software for companies that uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS). It brings together accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing, plus two optional features: multi-currency and landed cost.',
          'Genoa Gov is government accounting software for the accounts sections of Iraqi government departments. It covers vouchers and their approval workflow, amendment of posted vouchers with a full audit trail, budgets, cheques, month-end and year-end closing, and a legislation library, with a separate database for each office.',
          // AI: the two features the owner confirmed on 13 Nov 2026 (CONTENT-GUIDE.md section 1).
          'Genoa Systems builds its financial and accounting solutions with the latest technology, with AI designed for accounting and financial work: Genoa has an AI assistant that helps the user inside the software, and a feature that adds an invoice directly from an image of it.',
        ],
      },
      {
        heading: 'Why two separate products?',
        body: [
          'Company accounting is different from government accounting. A company cares about stock, sales, balances and the cost of goods; a government department cares about allocations, approvals, cheques and a record of every amendment. So each has its own product with its own modules, rather than one product trying to fit everyone.',
        ],
      },
      {
        heading: 'How do we handle extra features?',
        body: [
          'Features that not every company needs, such as multi-currency and landed cost in Genoa, stay off by default and are switched on per organisation when needed.',
        ],
      },
      {
        heading: 'What you will not find on this website',
        body: [
          'You will not find customer names, testimonials or user counts here. We would rather show you the software itself in a demo than publish claims you cannot check. The screenshots on this site are taken from the software itself, with entirely fictional demo data.',
        ],
      },
      {
        heading: 'Where does Genoa Systems work?',
        body: [`${companyIntro('en')}, and serves companies and government departments in Iraq.`],
      },
    ],
  },
};

export interface ContactContent extends PageMeta {
  answer: string;
  formHeading: string;
  fields: {
    name: string;
    organisation: string;
    orgType: string;
    orgTypes: { value: string; label: string }[];
    /** First option of a required list: no choice yet, so the form cannot be sent without one. */
    orgTypeNone: string;
    product: string;
    products: { value: string; label: string }[];
    productNone: string;
    governorate: string;
    governorateNone: string;
    phone: string;
    phoneHint: string;
    email: string;
    message: string;
    optional: string;
  };
  submitEndpoint: string;
  submitWhatsapp: string;
  privacy: string;
  noscript: string;
  statusOpening: string;
  /** Text alternative of the error icon that starts each field's error message. */
  errorLabel: string;
  /** Shown under a field once it has been left empty or wrong (and in the browser's own message). */
  errors: { name: string; organisation: string; orgType: string; product: string; phone: string; email: string };
  waMessageIntro: string;
  directHeading: string;
  directBody: string;
  emailLabel: string;
  nextHeading: string;
  nextSteps: string[];
}

const governoratesAr = [
  'بغداد', 'البصرة', 'نينوى', 'أربيل', 'السليمانية', 'دهوك', 'كركوك', 'الأنبار', 'بابل', 'كربلاء',
  'النجف', 'الديوانية', 'واسط', 'ميسان', 'ذي قار', 'المثنى', 'صلاح الدين', 'ديالى', 'حلبجة',
];
const governoratesEn = [
  'Baghdad', 'Basra', 'Nineveh', 'Erbil', 'Sulaymaniyah', 'Duhok', 'Kirkuk', 'Anbar', 'Babil', 'Karbala',
  'Najaf', 'Diwaniyah', 'Wasit', 'Maysan', 'Dhi Qar', 'Muthanna', 'Salah al-Din', 'Diyala', 'Halabja',
];
export const governorates: L<string[]> = { ar: governoratesAr, en: governoratesEn };

export const contact: L<ContactContent> = {
  ar: {
    title: 'احجز عرضاً توضيحياً لـ Genoa أو Genoa Gov | Genoa Systems',
    description:
      'اطلب عرضاً توضيحياً لبرنامج Genoa للشركات أو Genoa Gov للدوائر الحكومية. املأ النموذج أو راسلنا مباشرة على واتساب وسنتواصل معك لتحديد موعد.',
    h1: 'احجز عرضاً توضيحياً',
    answer:
      'لحجز عرض توضيحي لبرنامج Genoa أو Genoa Gov، املأ النموذج في هذه الصفحة أو راسلنا على واتساب. سنتواصل معك لتحديد موعد يناسبك، ونركّز في العرض على الوحدات التي تهمّ شركتك أو دائرتك.',
    formHeading: 'نموذج طلب العرض',
    fields: {
      name: 'الاسم الكامل',
      organisation: 'اسم الشركة أو الدائرة',
      orgType: 'نوع الجهة',
      orgTypes: [
        { value: 'company', label: 'شركة' },
        { value: 'government', label: 'دائرة حكومية' },
        { value: 'other', label: 'أخرى' },
      ],
      orgTypeNone: 'اختر نوع الجهة',
      product: 'البرنامج الذي يهمّك',
      products: [
        { value: 'genoa', label: 'Genoa للشركات' },
        { value: 'genoa-gov', label: 'Genoa Gov للدوائر الحكومية' },
        { value: 'unsure', label: 'لست متأكداً بعد' },
      ],
      productNone: 'اختر البرنامج',
      governorate: 'المحافظة',
      governorateNone: 'اختر المحافظة',
      phone: 'رقم الهاتف أو واتساب',
      phoneHint: 'مثال: 07XX XXX XXXX',
      email: 'البريد الإلكتروني',
      message: 'ما الذي تودّ أن تراه في العرض؟',
      optional: '(اختياري)',
    },
    submitEndpoint: 'أرسل الطلب',
    submitWhatsapp: 'أرسل الطلب عبر واتساب',
    privacy:
      'نستخدم هذه المعلومات للتواصل معك بشأن العرض التوضيحي فقط. لا يحفظ هذا الموقع بياناتك ولا يشاركها مع أي جهة.',
    noscript:
      'يحتاج إرسال النموذج إلى تفعيل JavaScript. يمكنك بدلاً من ذلك مراسلتنا مباشرة على واتساب أو البريد الإلكتروني.',
    statusOpening: 'جارٍ فتح واتساب مع رسالة جاهزة. اضغط «إرسال» في واتساب لإكمال الطلب.',
    errorLabel: 'خطأ',
    errors: {
      name: 'اكتب اسمك الكامل.',
      organisation: 'اكتب اسم الشركة أو الدائرة.',
      orgType: 'اختر نوع الجهة.',
      product: 'اختر البرنامج الذي يهمّك.',
      phone: 'اكتب رقم الهاتف أو واتساب، مثل 07XX XXX XXXX.',
      email: 'اكتب بريداً إلكترونياً صحيحاً، مثل name@example.com، أو اترك الحقل فارغاً.',
    },
    waMessageIntro: 'طلب عرض توضيحي من موقع Genoa',
    directHeading: 'تفضّل التواصل المباشر؟',
    directBody: 'راسلنا على واتساب أو البريد الإلكتروني، واذكر اسم جهتك والبرنامج الذي يهمّك.',
    emailLabel: 'البريد الإلكتروني',
    nextHeading: 'ماذا يحدث بعد إرسال الطلب؟',
    nextSteps: [
      'نتواصل معك لتحديد موعد يناسبك.',
      'نعرض لك البرنامج ببيانات تجريبية، ونركّز على الوحدات التي تهمّك.',
      'نجيب عن أسئلتك، ونوضّح ما يلزم لبدء الاستخدام في جهتك.',
    ],
  },
  en: {
    title: 'Book a Demo of Genoa or Genoa Gov | Genoa Systems',
    description:
      'Request a demo of Genoa for companies or Genoa Gov for government departments. Fill in the form or message us on WhatsApp and we will arrange a time.',
    h1: 'Book a demo of Genoa or Genoa Gov',
    answer:
      'To book a demo of Genoa or Genoa Gov, fill in the form on this page or message us on WhatsApp. We will contact you to arrange a convenient time, and the demo will focus on the modules that matter to your company or department.',
    formHeading: 'Demo request form',
    fields: {
      name: 'Full name',
      organisation: 'Company or department name',
      orgType: 'Type of organisation',
      orgTypes: [
        { value: 'company', label: 'Company' },
        { value: 'government', label: 'Government department' },
        { value: 'other', label: 'Other' },
      ],
      orgTypeNone: 'Choose the type of organisation',
      product: 'Product you are interested in',
      products: [
        { value: 'genoa', label: 'Genoa for companies' },
        { value: 'genoa-gov', label: 'Genoa Gov for government' },
        { value: 'unsure', label: 'Not sure yet' },
      ],
      productNone: 'Choose a product',
      governorate: 'Governorate',
      governorateNone: 'Choose a governorate',
      phone: 'Phone or WhatsApp number',
      phoneHint: 'For example: 07XX XXX XXXX',
      email: 'Email',
      message: 'What would you like to see in the demo?',
      optional: '(optional)',
    },
    submitEndpoint: 'Send request',
    submitWhatsapp: 'Send request via WhatsApp',
    privacy:
      'We use these details only to contact you about the demo. This website does not store your details or share them with anyone.',
    noscript:
      'Sending this form needs JavaScript. You can message us directly on WhatsApp or by email instead.',
    statusOpening: 'Opening WhatsApp with a ready-made message. Press “Send” in WhatsApp to complete your request.',
    errorLabel: 'Error',
    errors: {
      name: 'Enter your full name.',
      organisation: 'Enter the name of your company or department.',
      orgType: 'Choose the type of organisation.',
      product: 'Choose the product you are interested in.',
      phone: 'Enter a phone or WhatsApp number, like 07XX XXX XXXX.',
      email: 'Enter a valid email address, like name@example.com, or leave it empty.',
    },
    waMessageIntro: 'Demo request from the Genoa website',
    directHeading: 'Prefer to contact us directly?',
    directBody: 'Message us on WhatsApp or by email and tell us your organisation and the product you are interested in.',
    emailLabel: 'Email',
    nextHeading: 'What happens after you send the request?',
    nextSteps: [
      'We contact you to arrange a convenient time.',
      'We show you the software with test data, focusing on the modules you care about.',
      'We answer your questions and explain what is needed to get started in your organisation.',
    ],
  },
};

export const notFound = {
  ar: {
    title: 'الصفحة غير موجودة | Genoa Systems',
    h1: 'الصفحة غير موجودة',
    body: 'ربما تغيّر عنوان الصفحة. جرّب إحدى الصفحات التالية:',
  },
  en: {
    title: 'Page not found | Genoa Systems',
    h1: 'Page not found',
    body: 'The page may have moved. Try one of these pages:',
  },
};
