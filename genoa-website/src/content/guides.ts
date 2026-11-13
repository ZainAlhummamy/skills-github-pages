import type { Faq, KeyFact, L, PageMeta, Section } from './types';

/**
 * Guides: explanatory pages about a subject buyers search for, not about a product feature.
 * Route: /<lang>/guides/<slug>/.
 *
 * A guide states general accounting facts, so every fact in it must come from a published source and be checked
 * by an accountant before launch: the list of facts and their sources is in CLAIMS-TO-VERIFY.md ("Guide: the
 * Unified Accounting System"). What Genoa does is said only in the approved wording (CONTENT-GUIDE.md section 1).
 */
export interface GuideContent extends PageMeta {
  /** Short label for the footer, breadcrumbs and links. */
  navLabel: string;
  /** Quotable answer paragraph under the H1. */
  answer: string;
  keyFacts: KeyFact[];
  sections: Section[];
  faqs: Faq[];
  /** Shown under the article: what the page is based on and what it is not. */
  sourceNote: string;
}

export interface Guide {
  slug: string;
  /** Slugs of Genoa (companies) features shown as related cards. */
  related: string[];
  content: L<GuideContent>;
}

export const guides: Guide[] = [
  {
    slug: 'unified-accounting-system',
    related: ['unified-accounting-system', 'accounting', 'inventory'],
    content: {
      ar: {
        title: 'النظام المحاسبي الموحد في العراق: شرح ودليل الحسابات',
        description:
          'شرح النظام المحاسبي الموحد في العراق: ما هو، من أصدره، من يطبّقه، وكيف يُقسَّم دليل الحسابات إلى موجودات ومطلوبات واستخدامات وموارد، وعلاقته بمعايير IFRS.',
        h1: 'النظام المحاسبي الموحد في العراق: ما هو وكيف يُقسَّم دليل حساباته؟',
        navLabel: 'شرح النظام المحاسبي الموحد',
        answer:
          'النظام المحاسبي الموحد نظام محاسبي موحد للوحدات الاقتصادية في العراق، أصدره ديوان الرقابة المالية. يوحّد دليل الحسابات وطريقة تسجيل العمليات وشكل الحسابات الختامية، فتُعدّ الشركات حساباتها بطريقة واحدة يعرفها المحاسب ومراقب الحسابات. ويُقسَّم دليل حساباته إلى أربع مجموعات رئيسية: الموجودات (1)، والمطلوبات (2)، والاستخدامات (3)، والموارد (4)، تليها مراكز الكلفة (5 إلى 9).',
        keyFacts: [
          { label: 'الجهة التي أصدرته', value: 'ديوان الرقابة المالية الاتحادي' },
          { label: 'من يطبّقه', value: 'الوحدات الاقتصادية (الشركات)، عدا المصارف وشركات التأمين' },
          { label: 'المجموعات الرئيسية', value: '1 الموجودات، 2 المطلوبات، 3 الاستخدامات، 4 الموارد' },
          { label: 'مراكز الكلفة', value: 'المجموعات من 5 إلى 9' },
          { label: 'الدوائر الحكومية', value: 'تعمل بالنظام المحاسبي الحكومي، لا بالنظام المحاسبي الموحد' },
        ],
        sections: [
          {
            heading: 'ما هو النظام المحاسبي الموحد؟',
            body: [
              'النظام المحاسبي الموحد إطار محاسبي عراقي ينظّم حسابات الوحدات الاقتصادية، أي الشركات والمنشآت التي تمارس نشاطاً اقتصادياً. يقوم على دليل حسابات موحّد ومرمَّز، وقواعد لتسجيل العمليات، ونماذج للحسابات الختامية والتقارير.',
              'والغاية من التوحيد أن تُسمّى الحسابات وتُرقَّم وتُعرض بالطريقة نفسها في كل الوحدات. فيسهل تدقيقها ومقارنتها، وتُجمَع أرقامها على مستوى القطاع والاقتصاد الوطني.',
              'ويُكتب اسمه أحياناً «نظام محاسبي موحد» أو «النظام المحاسبي الموحّد العراقي»، والمقصود واحد.',
            ],
          },
          {
            heading: 'من أصدر النظام المحاسبي الموحد ومتى بدأ تطبيقه؟',
            body: [
              'أصدر النظام المحاسبي الموحد ديوان الرقابة المالية، وهو اليوم ديوان الرقابة المالية الاتحادي، وهو الجهة التي تصدر تحديثاته.',
              'قبل توحيد النظام كانت جهات عدة في العراق تعمل بأنظمة محاسبية خاصة بها، فاختلفت أسماء الحسابات ومعالجاتها من جهة إلى أخرى. وتذكر المراجع الجامعية العراقية أن لجنة متخصصة شُكّلت في أواخر السبعينيات لوضع نظام واحد، وأن تطبيقه بدأ في وحدات القطاع العام في مطلع الثمانينيات، ثم شمل شركات القطاع الخاص في منتصفها.',
            ],
          },
          {
            heading: 'من يطبّق النظام المحاسبي الموحد في العراق؟',
            body: ['يطبّق النظام المحاسبي الموحد الوحدات الاقتصادية، وتختلف الجهات الأخرى عنها:'],
            bullets: [
              'شركات القطاع العام والمختلط والخاص: تعمل بالنظام المحاسبي الموحد.',
              'المصارف وشركات التأمين: لها نظام محاسبي موحد خاص بها، لاختلاف طبيعة عملها.',
              'دوائر الدولة الممولة من الموازنة العامة: تعمل بالنظام المحاسبي الحكومي، وليس بالنظام المحاسبي الموحد.',
            ],
          },
          {
            heading: 'كيف يُقسَّم دليل الحسابات في النظام المحاسبي الموحد؟',
            body: [
              'يستخدم الدليل ترقيماً عشرياً: الرقم الأول يحدد المجموعة الرئيسية، وكل رقم يُضاف إلى يمينه ينزل بالحساب مستوى أكثر تفصيلاً. فحسابات الميزانية في المجموعتين 1 و2، وحسابات النتيجة في المجموعتين 3 و4.',
            ],
            bullets: [
              '1 الموجودات: ما تملكه الوحدة، مثل الموجودات الثابتة والمخزون والمدينين والنقود.',
              '2 المطلوبات: مصادر التمويل، أي رأس المال والاحتياطيات والقروض والدائنون.',
              '3 الاستخدامات: المصروفات، مثل الرواتب والأجور والمستلزمات السلعية والخدمية.',
              '4 الموارد: الإيرادات، مثل إيرادات النشاط الجاري والإيرادات الأخرى.',
              '5 إلى 9 مراكز الكلفة: مراكز الإنتاج، والخدمات الإنتاجية، والخدمات التسويقية، والخدمات الإدارية، والعمليات الرأسمالية.',
            ],
          },
          {
            heading: 'ما معنى الاستخدامات والموارد؟',
            body: [
              'الاستخدامات والموارد تسميتان خاصتان بالنظام المحاسبي الموحد. الاستخدامات هي ما يسميه المحاسبون في أنظمة أخرى المصروفات، والموارد هي الإيرادات.',
              'فمن ينتقل من دليل حسابات آخر إلى دليل النظام المحاسبي الموحد يجد المفاهيم نفسها بأسماء وأرقام مختلفة.',
            ],
          },
          {
            heading: 'ما الحسابات الختامية في النظام المحاسبي الموحد؟',
            body: [
              'يحدد النظام المحاسبي الموحد نماذج موحدة للحسابات الختامية والكشوفات. ومن أبرزها الميزانية العامة، وحساب العمليات الجارية الذي يُظهر نتيجة نشاط الوحدة خلال السنة، وكشف التدفق النقدي.',
              'وتفاصيل النماذج والكشوفات الملحقة بها موجودة في نص النظام نفسه، وهو المرجع عند إعداد الحسابات الختامية.',
            ],
          },
          {
            heading: 'ما علاقة النظام المحاسبي الموحد بمعايير IFRS؟',
            body: [
              'النظام المحاسبي الموحد والمعايير الدولية لإعداد التقارير المالية (IFRS) إطاران منفصلان. الأول نظام عراقي يوحّد دليل الحسابات والتسجيل والعرض، والثاني معايير دولية يصدرها مجلس معايير المحاسبة الدولية (IASB) للاعتراف بالبنود وقياسها والإفصاح عنها.',
              'وقد حدّث ديوان الرقابة المالية الاتحادي النظام في السنوات الأخيرة لتقريبه من المعايير الدولية، ونشر دليلاً لتطبيق النظام المحاسبي الموحد وفق معايير التقارير المالية الدولية لأول مرة.',
              'ولأن للنظام أكثر من طبعة، قد تختلف أرقام بعض الحسابات التفصيلية بين طبعة وأخرى. لذلك اسأل مراقب حساباتك عن الطبعة المطلوبة من شركتك.',
            ],
          },
          {
            heading: 'كيف يُطبَّق النظام المحاسبي الموحد في برنامج محاسبي؟',
            body: [
              'عملياً يبدأ التطبيق من دليل الحسابات. فإذا كان دليل النظام المحاسبي الموحد جاهزاً في البرنامج، سجّل المحاسب قيوده على الحسابات التي يعرفها بأرقامها، بدلاً من بناء دليل من الصفر.',
              'وعند اختيار نظام محاسبي لشركة عراقية، اسأل: أي دليل حسابات يعتمد؟ وهل تستخدم المخازن والمبيعات والمشتريات الدليل نفسه؟ وأي قوائم مالية يُعدّها؟',
              'برنامج Genoa للشركات يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS).',
            ],
          },
        ],
        faqs: [
          {
            q: 'هل النظام المحاسبي الموحد إلزامي لشركات القطاع الخاص في العراق؟',
            a: [
              'تذكر المراجع الجامعية العراقية أن تطبيق النظام المحاسبي الموحد شمل شركات القطاع الخاص المشمولة بقانون الشركات منذ منتصف الثمانينيات.',
              'وما يُطلب من شركتك اليوم يحدده القانون وتعليمات الجهات المختصة، فاسأل مراقب حساباتك عمّا ينطبق عليها.',
            ],
          },
          {
            q: 'ما الفرق بين النظام المحاسبي الموحد والنظام المحاسبي الحكومي؟',
            a: [
              'النظام المحاسبي الموحد للوحدات الاقتصادية، أي الشركات، أما النظام المحاسبي الحكومي فلدوائر الدولة الممولة من الموازنة العامة.',
              'محاسبة الشركة تتابع الموجودات والمطلوبات ونتيجة النشاط، ومحاسبة الدائرة الحكومية تتابع التخصيصات والصرف منها. ولهذا لدى Genoa Systems برنامجان منفصلان: Genoa للشركات، وGenoa Gov نظام محاسبي حكومي لأقسام الحسابات في الدوائر.',
            ],
          },
          {
            q: 'ما هي المجموعات الرئيسية في دليل حسابات النظام المحاسبي الموحد؟',
            a: [
              'أربع مجموعات رئيسية: 1 الموجودات، و2 المطلوبات، و3 الاستخدامات، و4 الموارد.',
              'وتليها المجموعات من 5 إلى 9 لمراكز الكلفة: الإنتاج، والخدمات الإنتاجية، والخدمات التسويقية، والخدمات الإدارية، والعمليات الرأسمالية.',
            ],
          },
          {
            q: 'هل يوجد برنامج محاسبي يعمل بدليل حسابات النظام المحاسبي الموحد؟',
            a: [
              'نعم. Genoa نظام محاسبي للشركات العراقية يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS).',
              'ويمكنك أن ترى دليل الحسابات فيه في عرض توضيحي قبل أن تقرر.',
            ],
          },
        ],
        sourceNote:
          'هذه الصفحة شرح مبسّط للتعريف بالنظام المحاسبي الموحد، وليست بديلاً عن نص النظام ولا استشارة محاسبية. المرجع المعتمد هو نص النظام المحاسبي الموحد وتحديثاته الصادرة عن ديوان الرقابة المالية الاتحادي.',
      },
      en: {
        title: "Iraq's Unified Accounting System: A Plain Guide",
        description:
          "A plain guide to Iraq's Unified Accounting System: what it is, who issued it, who applies it, how its chart of accounts is divided, and how it relates to IFRS.",
        h1: "Iraq's Unified Accounting System: what it is and how its chart of accounts is organised",
        navLabel: 'Guide to the Unified Accounting System',
        answer:
          "The Unified Accounting System (النظام المحاسبي الموحد) is the uniform accounting system for economic units in Iraq, issued by the Board of Supreme Audit. It standardises the chart of accounts, the way transactions are recorded and the format of the final accounts, so companies keep their books in one way that accountants and auditors know. Its chart of accounts has four main classes: assets (1), liabilities (2), uses (3) and resources (4), followed by cost centres (5 to 9).",
        keyFacts: [
          { label: 'Issued by', value: 'The Federal Board of Supreme Audit of Iraq' },
          { label: 'Applied by', value: 'Economic units (companies), except banks and insurers' },
          { label: 'Main classes', value: '1 assets, 2 liabilities, 3 uses, 4 resources' },
          { label: 'Cost centres', value: 'Classes 5 to 9' },
          { label: 'Government departments', value: 'Use the government accounting system, not this one' },
        ],
        sections: [
          {
            heading: 'What is the Unified Accounting System?',
            body: [
              'The Unified Accounting System is an Iraqi accounting framework for economic units, meaning companies and other entities that carry on an economic activity. It is built on a uniform, coded chart of accounts, rules for recording transactions, and standard formats for the final accounts and reports.',
              'The point of unifying is that accounts are named, numbered and presented the same way in every unit. That makes them easier to audit and compare, and lets their figures be added up for a sector and for the national economy.',
              'In Arabic it is written «النظام المحاسبي الموحد», and sometimes «نظام محاسبي موحد»; both mean the same system.',
            ],
          },
          {
            heading: 'Who issued the Unified Accounting System, and when did it start?',
            body: [
              'The Unified Accounting System was issued by the Board of Supreme Audit, today the Federal Board of Supreme Audit, which also issues its updates.',
              'Before it, several bodies in Iraq used accounting systems of their own, so account names and treatments differed from one to another. Iraqi university references say a specialist committee was formed in the late 1970s to write one system, that it was applied to public-sector units in the early 1980s, and that it was extended to private-sector companies in the middle of that decade.',
            ],
          },
          {
            heading: 'Who applies the Unified Accounting System in Iraq?',
            body: ['Economic units apply the Unified Accounting System; other bodies differ:'],
            bullets: [
              'Public, mixed and private-sector companies: the Unified Accounting System.',
              'Banks and insurance companies: a unified accounting system of their own, because their business is different.',
              'Government departments funded from the state budget: the government accounting system, not the Unified Accounting System.',
            ],
          },
          {
            heading: 'How is the chart of accounts divided?',
            body: [
              'The chart uses decimal coding: the first digit gives the main class, and each digit added after it takes the account one level further into detail. Balance sheet accounts are in classes 1 and 2, and result accounts in classes 3 and 4.',
            ],
            bullets: [
              '1 Assets (الموجودات): what the unit owns, such as fixed assets, inventory, debtors and cash.',
              '2 Liabilities (المطلوبات): sources of finance, meaning capital, reserves, loans and creditors.',
              '3 Uses (الاستخدامات): expenses, such as salaries and wages, and goods and services consumed.',
              '4 Resources (الموارد): revenues, such as revenue from current activity and other revenues.',
              '5 to 9 Cost centres (مراكز الكلفة): production, production services, marketing services, administrative services and capital operations.',
            ],
          },
          {
            heading: 'What do "uses" and "resources" mean?',
            body: [
              'Uses and resources are terms particular to the Unified Accounting System. Uses are what accountants elsewhere call expenses, and resources are revenues.',
              'Someone moving from another chart of accounts finds the same concepts under different names and numbers.',
            ],
          },
          {
            heading: 'What final accounts does the Unified Accounting System require?',
            body: [
              'The Unified Accounting System sets standard formats for the final accounts and statements. The main ones include the balance sheet, the current operations account, which shows the result of the unit\'s activity for the year, and the cash flow statement.',
              'The detailed formats and their supporting schedules are in the text of the system itself, which is the reference when preparing final accounts.',
            ],
          },
          {
            heading: 'How does the Unified Accounting System relate to IFRS?',
            body: [
              'The Unified Accounting System and International Financial Reporting Standards (IFRS) are separate frameworks. The first is an Iraqi system that unifies the chart of accounts, recording and presentation; the second is a set of international standards, issued by the International Accounting Standards Board (IASB), for recognising, measuring and disclosing items.',
              'In recent years the Federal Board of Supreme Audit has updated the system to bring it closer to international standards, and has published a guide to applying the Unified Accounting System under IFRS for the first time.',
              'Because the system has more than one edition, the numbers of some detailed accounts can differ between editions. Ask your auditor which edition your company is expected to use.',
            ],
          },
          {
            heading: 'How is the Unified Accounting System applied in accounting software?',
            body: [
              'In practice it starts with the chart of accounts. If the Unified Accounting System chart is ready in the software, the accountant posts entries to accounts they already know by number, instead of building a chart from nothing.',
              'When choosing accounting software for an Iraqi company, ask: which chart of accounts does it use? Do inventory, sales and purchasing use the same chart? Which financial statements does it prepare?',
              'Genoa, for companies, uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS).',
            ],
          },
        ],
        faqs: [
          {
            q: 'Is the Unified Accounting System mandatory for private companies in Iraq?',
            a: [
              'Iraqi university references say the Unified Accounting System has applied to private-sector companies covered by the Companies Law since the mid-1980s.',
              'What your company must do today is set by the law and by the instructions of the competent authorities, so ask your auditor what applies to it.',
            ],
          },
          {
            q: 'What is the difference between the Unified Accounting System and the government accounting system?',
            a: [
              'The Unified Accounting System is for economic units, meaning companies, while the government accounting system is for state departments funded from the general budget.',
              'Company accounting follows assets, liabilities and the result of activity; a government department\'s accounting follows allocations and spending against them. That is why Genoa Systems has two separate products: Genoa for companies, and Genoa Gov for the accounts sections of government departments.',
            ],
          },
          {
            q: 'What are the main classes in the Unified Accounting System chart of accounts?',
            a: [
              'Four main classes: 1 assets, 2 liabilities, 3 uses and 4 resources.',
              'They are followed by classes 5 to 9 for cost centres: production, production services, marketing services, administrative services and capital operations.',
            ],
          },
          {
            q: 'Is there accounting software that uses the Unified Accounting System chart of accounts?',
            a: [
              'Yes. Genoa is accounting software for Iraqi companies that uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS).',
              'You can see its chart of accounts in a demo before you decide.',
            ],
          },
        ],
        sourceNote:
          'This page is a plain introduction to the Unified Accounting System. It is not a substitute for the text of the system and is not accounting advice. The authoritative reference is the Unified Accounting System and its updates as issued by the Federal Board of Supreme Audit of Iraq.',
      },
    },
  },
];
