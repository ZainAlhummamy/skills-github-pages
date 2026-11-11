import type { L, PageMeta, Section } from './types';

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
  principles: { heading: string; items: { title: string; body: string }[] };
  /** Company positioning: latest technology and AI for accounting and finance. */
  tech: { heading: string; body: string[]; cta: string };
  security: { heading: string; body: string; link: string };
  faq: { heading: string; body: string };
}

export const home: L<HomeContent> = {
  ar: {
    title: 'برامج محاسبة للشركات والدوائر الحكومية | Genoa Systems',
    description:
      'حلول مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي: Genoa للشركات بالنظام المحاسبي الموحد وقوائم IFRS، وGenoa Gov للدوائر الحكومية العراقية.',
    h1: 'برامج محاسبة عراقية للشركات وللدوائر الحكومية',
    answer:
      'Genoa Systems شركة برمجيات تقدّم حلولاً مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي الموجّه للأعمال المحاسبية والمالية، ولها برنامجان محاسبيان منفصلان للسوق العراقي. برنامج Genoa موجّه للشركات، ويعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، ويجمع الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمارها. برنامج Genoa Gov موجّه لأقسام الحسابات في الدوائر الحكومية العراقية، ويغطي المستندات وسلسلة المصادقة والموازنة والصكوك والغلق الشهري والسنوي.',
    highlights: [
      'النظام المحاسبي الموحد وقوائم IFRS',
      'سلسلة مصادقة متعددة المستخدمين',
      'سجل تدقيق كامل للتعديلات',
      'قاعدة بيانات مستقلة لكل دائرة',
      'الدينار والدولار (اختياري)',
    ],
    products: {
      companies: {
        heading: 'ما هو Genoa؟',
        body: 'Genoa برنامج محاسبة ومخازن للشركات العراقية، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS). يجمع في برنامج واحد الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الديون. تعدد العملات (الدولار الأمريكي إلى جانب الدينار العراقي) والكلفة الواصلة (الشحن والكمارك فوق كلفة المادة) ميزتان اختياريتان، معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة.',
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
        distinctive: 'دليل حسابات النظام المحاسبي الموحد وقوائم مالية وفق معايير IFRS، وتعدد العملات والكلفة الواصلة ميزتان اختياريتان، معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة',
      },
      gov: {
        for: 'أقسام الحسابات في الدوائر الحكومية العراقية وتشكيلاتها',
        modules: 'المستندات وسلسلة المصادقة، تعديل المستندات المرحّلة، الموازنة والتخصيصات، الصكوك، الغلق الشهري والسنوي، مكتبة التشريعات',
        distinctive: 'سجل تدقيق كامل لكل تعديل على مستند مرحَّل، وقاعدة بيانات مستقلة لكل دائرة',
      },
    },
    principles: {
      heading: 'مبادئ واضحة في البرنامجين',
      items: [
        {
          title: 'النظام المحاسبي الموحد وقوائم IFRS',
          body: 'يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)، فيعمل المحاسب بالإطار الذي يعرفه.',
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
    tech: {
      heading: 'حلول مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي',
      body: [
        'تقدّم Genoa Systems حلولاً مالية ومحاسبية مبنية بأحدث التقنيات، مع ذكاء اصطناعي موجّه للأعمال المحاسبية والمالية.',
        'لمعرفة ما يتوفر من هذه الحلول لشركتك أو دائرتك، وكيف يناسب طريقة عمل قسم الحسابات لديك، احجز عرضاً توضيحياً.',
      ],
      cta: 'احجز عرضاً توضيحياً',
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
      'Financial and accounting solutions built with the latest technology and AI: Genoa for companies (Unified Accounting System, IFRS) and Genoa Gov for government.',
    h1: 'Accounting software for Iraqi companies and government departments',
    answer:
      'Genoa Systems is a software company that provides financial and accounting solutions built with the latest technology and with AI designed for accounting and financial work. It has two separate accounting products for the Iraqi market. Genoa is for companies, uses the Unified Accounting System chart of accounts, can prepare IFRS-based financial statements, and brings together accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing. Genoa Gov is for the accounts sections of Iraqi government departments and covers vouchers with multi-user approval, budgets and allocation checks, cheques, and month-end and year-end closing.',
    highlights: [
      'Unified Accounting System and IFRS statements',
      'Multi-user approval workflow',
      'Full audit trail for amendments',
      'A separate database per office',
      'Dinar and dollar (optional)',
    ],
    products: {
      companies: {
        heading: 'What is Genoa?',
        body: 'Genoa is accounting and inventory software for Iraqi companies that uses the Unified Accounting System chart of accounts and can prepare financial statements based on International Financial Reporting Standards (IFRS). It brings accounting, inventory, sales and purchasing, and customer and supplier ledgers with debt ageing into one product. Multi-currency (US dollars alongside Iraqi dinars) and landed cost (freight and customs added on top of item cost) are optional features: they are off by default and are switched on per organisation.',
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
        distinctive: 'The Unified Accounting System chart of accounts and IFRS-based statements; multi-currency and landed cost are optional, off by default and switched on per organisation',
      },
      gov: {
        for: 'Accounts sections of Iraqi government departments and their sub-units',
        modules: 'Vouchers and approval workflow, amendment of posted vouchers, budgets and allocations, cheques, month and year closing, legislation library',
        distinctive: 'A full audit trail for every amendment to a posted voucher, and a separate database for each office',
      },
    },
    principles: {
      heading: 'Clear principles in both products',
      items: [
        {
          title: 'Unified Accounting System and IFRS statements',
          body: 'Genoa uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS), so accountants work in a framework they know.',
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
    tech: {
      heading: 'Financial and accounting solutions with the latest technology and AI',
      body: [
        'Genoa Systems provides financial and accounting solutions built with the latest technology, with AI designed for accounting and financial work.',
        'To find out which of these solutions are available for your company or department, and how they fit the way your accounts team works, book a demo.',
      ],
      cta: 'Book a demo',
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
      'كيف يحمي Genoa Gov البيانات المحاسبية: قاعدة بيانات مستقلة لكل دائرة، وسلسلة مصادقة، وسجل تدقيق لكل تعديل، وما يجب أن تسأله عن النسخ الاحتياطي.',
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
          'لا. هذا الموقع صفحات ثابتة لا تتصل بأي قاعدة بيانات، ولا يحتوي على أسماء زبائن أو أرقام عنهم أو شهادات. صور الشاشات الحالية توضيحية مؤقتة، وأي لقطة شاشة حقيقية تُضاف لاحقاً ستستخدم بيانات تجريبية فقط.',
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
      'How Genoa Gov protects accounting data: a separate database per office, a multi-user approval workflow, a full amendment audit trail, and what to ask about backups.',
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
          'No. This website is a set of static pages that does not connect to any database, and it contains no customer names, customer figures or testimonials. The current screenshots are temporary placeholders, and any real screenshot added later will use test data only.',
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
    description:
      'Genoa Systems تقدّم حلولاً مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي، وتطوّر Genoa للشركات وفق النظام المحاسبي الموحد وGenoa Gov للدوائر الحكومية.',
    h1: 'عن Genoa Systems',
    answer:
      'Genoa Systems شركة برمجيات تقدّم حلولاً مالية ومحاسبية بأحدث التقنيات والذكاء الاصطناعي الموجّه للأعمال المحاسبية والمالية، وتطوّر برامج محاسبة للسوق العراقي. منتجاها هما Genoa للشركات وGenoa Gov لأقسام الحسابات في الدوائر الحكومية. يركّز البرنامجان على العمل اليومي للمحاسب في العراق: المستندات والقيود، والمخازن والذمم، والموازنة والصكوك، والغلق في نهاية الفترة.',
    sections: [
      {
        heading: 'ماذا تطوّر Genoa Systems؟',
        body: [
          'Genoa برنامج محاسبة ومخازن للشركات، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)، ويجمع الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمارها، مع ميزتين اختياريتين هما تعدد العملات والكلفة الواصلة.',
          'Genoa Gov برنامج محاسبة حكومية لأقسام الحسابات في الدوائر الحكومية العراقية، يغطي المستندات وسلسلة المصادقة، وتعديل المستندات المرحّلة مع سجل تدقيق كامل، والموازنة، والصكوك، والغلق الشهري والسنوي، ومكتبة التشريعات، مع قاعدة بيانات مستقلة لكل دائرة.',
        ],
      },
      {
        heading: 'كيف توظّف Genoa Systems التقنيات الحديثة والذكاء الاصطناعي؟',
        body: [
          'تقدّم Genoa Systems حلولاً مالية ومحاسبية بأحدث التقنيات، مع ذكاء اصطناعي موجّه للأعمال المحاسبية والمالية. ويمكنك أن ترى ما يتوفر من ذلك لجهتك في عرض توضيحي.',
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
          'لن تجد أسماء زبائن أو شهادات أو أرقاماً عن عدد المستخدمين. نفضّل أن نعرض البرنامج نفسه في عرض توضيحي على أن ننشر ادعاءات لا تستطيع التحقق منها. صور الشاشات الحالية توضيحية مؤقتة، وستُستبدل بلقطات حقيقية ببيانات تجريبية.',
        ],
      },
      {
        heading: 'أين تعمل Genoa Systems؟',
        body: ['تخدم Genoa Systems الشركات والدوائر الحكومية في العراق.'],
      },
    ],
  },
  en: {
    title: 'About Genoa Systems | Accounting Software for Iraq',
    description:
      'Genoa Systems provides financial and accounting solutions with the latest technology and AI, and builds Genoa for companies and Genoa Gov for government.',
    h1: 'About Genoa Systems',
    answer:
      'Genoa Systems is a software company that provides financial and accounting solutions built with the latest technology and with AI designed for accounting and financial work. It builds accounting software for the Iraqi market, and its two products are Genoa, for companies, and Genoa Gov, for the accounts sections of government departments. Both focus on the day-to-day work of accountants in Iraq: vouchers and journal entries, stock and balances, budgets and cheques, and closing at the end of each period.',
    sections: [
      {
        heading: 'What does Genoa Systems build?',
        body: [
          'Genoa is accounting and inventory software for companies that uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS). It brings together accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing, plus two optional features: multi-currency and landed cost.',
          'Genoa Gov is government accounting software for the accounts sections of Iraqi government departments. It covers vouchers and their approval workflow, amendment of posted vouchers with a full audit trail, budgets, cheques, month-end and year-end closing, and a legislation library, with a separate database for each office.',
        ],
      },
      {
        heading: 'How does Genoa Systems use modern technology and AI?',
        body: [
          'Genoa Systems provides financial and accounting solutions built with the latest technology, with AI designed for accounting and financial work. You can see what is available for your organisation in a demo.',
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
          'You will not find customer names, testimonials or user counts here. We would rather show you the software itself in a demo than publish claims you cannot check. The current screenshots are temporary placeholders and will be replaced with real screenshots that use test data.',
        ],
      },
      {
        heading: 'Where does Genoa Systems work?',
        body: ['Genoa Systems serves companies and government departments in Iraq.'],
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
    product: string;
    products: { value: string; label: string }[];
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
  statusMissing: string;
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
    title: 'احجز عرضاً توضيحياً لـ Genoa أو Genoa Gov',
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
      product: 'البرنامج الذي يهمّك',
      products: [
        { value: 'genoa', label: 'Genoa للشركات' },
        { value: 'genoa-gov', label: 'Genoa Gov للدوائر الحكومية' },
        { value: 'unsure', label: 'لست متأكداً بعد' },
      ],
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
    statusMissing: 'يرجى ملء الحقول المطلوبة.',
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
    h1: 'Book a demo',
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
      product: 'Product you are interested in',
      products: [
        { value: 'genoa', label: 'Genoa for companies' },
        { value: 'genoa-gov', label: 'Genoa Gov for government' },
        { value: 'unsure', label: 'Not sure yet' },
      ],
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
    statusMissing: 'Please fill in the required fields.',
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
