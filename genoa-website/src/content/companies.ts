import type { Product } from './types';
import { aiFeatures } from './companies-ai';

/**
 * Genoa (for companies): product overview, feature pages and FAQ page.
 * Facts follow CONTENT-GUIDE.md section 1. Every inference beyond those facts
 * is listed in notes/claims-companies.md for the product team to confirm.
 */
export const companies: Product = {
  id: 'companies',
  brand: 'Genoa',

  overview: {
    ar: {
      title: "نظام محاسبي للشركات العراقية مع إدارة المخازن | Genoa",
      description:
        "برنامج Genoa نظام محاسبي للشركات العراقية بدليل حسابات النظام المحاسبي الموحد وقوائم مالية وفق IFRS، يضم الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين.",
      h1: "Genoa: نظام محاسبي للشركات العراقية مع إدارة المخازن",
      productName: "Genoa",
      answer:
        "Genoa برنامج محاسبي عراقي للشركات التي تشتري المواد وتخزنها وتبيعها، ويعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS). يضم البرنامج الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الذمم. ويوفر ميزتين اختياريتين هما تعدد العملات (الدولار الأمريكي إلى جانب الدينار العراقي) والكلفة الواصلة (إضافة الشحن والكمارك إلى كلفة المادة). والميزتان معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة حسب حاجتها. وفي Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها.",
      whatIs: {
        heading: "ما هو Genoa؟",
        body: [
          "برنامج Genoa نظام محاسبي مخصص للشركات، يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS). يجمع في برنامج واحد الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الذمم. والغاية منه أن تدير الشركة التجارية العراقية حساباتها ومخزنها وديونها من نظام واحد، بدلاً من دفاتر وجداول متفرقة.",
          "ويضم Genoa ميزتين اختياريتين للشركات التي تحتاج إليهما: تعدد العملات لمن يتعامل بالدولار الأمريكي إلى جانب الدينار العراقي، والكلفة الواصلة لمن يستورد ويريد إضافة الشحن والكمارك إلى كلفة المادة. والميزتان معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة حسب حاجتها.",
          "وفي Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها. والميزتان تعينان المستخدم، وتبقى مراجعة العمل واعتماده للمحاسب.",
          "أما أقسام الحسابات في الدوائر الحكومية العراقية فلها منتج منفصل هو Genoa Gov. وهذه الصفحة تخص Genoa للشركات فقط.",
        ],
      },
      whoFor: {
        heading: "لمن صُمّم برنامج Genoa؟",
        body: [
          "صُمّم Genoa للشركات العراقية التي تشتري المواد وتخزنها وتبيعها، وتحتاج إلى متابعة حساباتها ومخزنها وديون زبائنها ومجهزيها في نظام واحد.",
        ],
        bullets: [
          "شركات تجارة الجملة والتوزيع التي تبيع للمحلات والزبائن بالآجل.",
          "الشركات المستوردة التي تدفع الشحن والرسوم الكمركية على بضاعتها.",
          "المحلات والمعارض التي تحتفظ بمخزون من المواد.",
          "مجهزو المواد الإنشائية والأدوات الاحتياطية والأجهزة الكهربائية وما يشبهها.",
          "الشركات التي تشتري بالدولار الأمريكي وتبيع بالدينار العراقي.",
          "الشركات التي يتابع فيها قسم الحسابات ذمم الزبائن والمجهزين وأعمار الديون.",
        ],
      },
      modulesHeading: "ما هي وحدات برنامج Genoa؟",
      modulesIntro:
        "يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، ويتكون من أربع وحدات أساسية وميزتين اختياريتين. الوحدات الأساسية هي الحسابات، والمخازن، والمبيعات والمشتريات، وذمم الزبائن والمجهزين مع أعمار الذمم. أما الميزتان الاختياريتان فهما تعدد العملات والكلفة الواصلة، وهما معطّلتان افتراضياً وتُفعَّلان لكل شركة على حدة حسب حاجتها. وفي Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها.",
      sections: [
        {
          heading: "كيف ترتبط وحدات Genoa ببعضها؟",
          body: [
            "وحدات Genoa أجزاء من برنامج واحد، وليست برامج منفصلة. فعملية البيع أو الشراء تُسجَّل مرة واحدة، وتنعكس على المخزن وعلى ذمة الزبون أو المجهز وعلى الحسابات.",
            "والنتيجة صورة واحدة متسقة لما في المخزن، وما للشركة عند الزبائن، وما عليها للمجهزين.",
          ],
        },
        {
          heading: "كيف تعمل الميزات الاختيارية في Genoa؟",
          body: [
            "في Genoa ميزتان اختياريتان هما تعدد العملات والكلفة الواصلة. كل منهما ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
            "الشركة التي تتعامل بالدينار العراقي فقط وتشتري من السوق المحلية لا تحتاج إليهما، فتبقيان معطّلتين عندها. أما الشركة التي تشتري بالدولار أو تستورد بضاعتها فهي المعنية بهاتين الميزتين.",
          ],
          bullets: [
            "تعدد العملات: الدولار الأمريكي إلى جانب الدينار العراقي.",
            "الكلفة الواصلة: إضافة الشحن والنقل والرسوم الكمركية إلى كلفة المادة.",
          ],
        },
        {
          heading: "كيف أرى برنامج Genoa قبل أن أقرر؟",
          body: [
            "الطريقة العملية لتقييم Genoa هي حجز عرض توضيحي. ويمكن حجزه من صفحة التواصل أو عبر واتساب.",
            "أحضر إلى العرض أمثلة من عملك اليومي، مثل فاتورة شراء وفاتورة بيع وقائمة قصيرة بالمواد وكشف حساب لزبون، واسأل كيف يُسجَّل كل منها في Genoa.",
          ],
        },
      ],
      keyFacts: [
        { label: "نوع البرنامج", value: "برنامج محاسبة ومخازن للشركات" },
        { label: "مخصص لـ", value: "الشركات العراقية التي تشتري المواد وتخزنها وتبيعها" },
        { label: "دليل الحسابات والقوائم المالية", value: "دليل حسابات النظام المحاسبي الموحد، وقوائم مالية وفق معايير IFRS" },
        {
          label: "الوحدات الأساسية",
          value: "الحسابات، المخازن، المبيعات والمشتريات، ذمم الزبائن والمجهزين مع أعمار الذمم",
        },
        {
          label: "الميزات الاختيارية",
          value: "تعدد العملات والكلفة الواصلة، معطّلة افتراضياً وتُفعَّل لكل شركة على حدة",
        },
        { label: "ميزات الذكاء الاصطناعي", value: "مساعد ذكي يساعد المستخدم، وإضافة فاتورة من صورة" },
        { label: "للدوائر الحكومية", value: "منتج منفصل باسم Genoa Gov" },
      ],
      screenshotAlt:
        "صورة توضيحية مؤقتة لشاشة برنامج Genoa للشركات — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
      screenshotCaption:
        "صورة توضيحية مؤقتة، ستُستبدل بلقطة شاشة حقيقية من برنامج Genoa ببيانات تجريبية.",
      faqTeaserHeading: "أسئلة شائعة عن برنامج Genoa",
    },
    en: {
      title: "Accounting and Inventory Software for Iraq | Genoa",
      description:
        "Genoa is accounting software for Iraqi companies: the Unified Accounting System chart of accounts, IFRS-based statements, inventory, sales, purchasing and ledgers.",
      h1: "Genoa: accounting and inventory software for Iraqi companies",
      productName: "Genoa",
      answer:
        "Genoa is accounting software for Iraqi companies that buy, stock and sell goods, and it uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS). It covers accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing. Two optional features are available: multi-currency (the US dollar alongside the Iraqi dinar) and landed cost (freight and customs added on top of item cost). Both are off by default and are switched on per organisation. Genoa also has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it.",
      whatIs: {
        heading: "What is Genoa?",
        body: [
          "Genoa is accounting software built for companies, and it uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS). It brings accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing together in one product. The aim is to let an Iraqi trading company run its books, stock and debts from one system instead of separate notebooks and spreadsheets.",
          "Genoa also offers two optional features for companies that need them: multi-currency, for businesses that deal in US dollars alongside Iraqi dinars, and landed cost, for importers who want freight and customs added to the cost of their goods. Both are off by default and are switched on per organisation, according to each company's needs.",
          "Genoa also has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it. Both support the user; reviewing and approving the work stays with the accountant.",
          "Accounting offices in Iraqi government departments have a separate product, Genoa Gov. This page is about Genoa for companies only.",
        ],
      },
      whoFor: {
        heading: "Who is Genoa for?",
        body: [
          "Genoa is built for Iraqi companies that buy, stock and sell goods and need to keep their accounts, stock and customer and supplier debts in one system.",
        ],
        bullets: [
          "Wholesalers and distributors that sell to shops and customers on credit.",
          "Importers that pay freight and customs on the goods they bring in.",
          "Shops and showrooms that hold stock.",
          "Suppliers of building materials, spare parts, electrical goods and similar products.",
          "Companies that buy in US dollars and sell in Iraqi dinars.",
          "Businesses whose accounts team follows up customer and supplier balances and debt ageing.",
        ],
      },
      modulesHeading: "What modules does Genoa include?",
      modulesIntro:
        "Genoa uses the Unified Accounting System chart of accounts, can prepare IFRS-based financial statements, and is made up of four core modules and two optional features. The core modules are accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing. The optional features are multi-currency and landed cost, which are off by default and switched on per organisation as needed. Genoa also has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it.",
      sections: [
        {
          heading: "How do Genoa's modules connect?",
          body: [
            "Genoa's modules are parts of one product, not separate programs. A sale or purchase is recorded once and is reflected in stock, in the customer or supplier ledger, and in the accounts.",
            "The result is one consistent view of what is in stock, what customers owe the company and what the company owes its suppliers.",
          ],
        },
        {
          heading: "How do optional features work in Genoa?",
          body: [
            "Genoa has two optional features: multi-currency and landed cost. Each one is off by default and is switched on per organisation, according to what that company needs.",
            "A company that deals only in Iraqi dinars and buys locally does not need them, so they stay off. They are meant for companies that buy in dollars or import their goods.",
          ],
          bullets: [
            "Multi-currency: the US dollar alongside the Iraqi dinar.",
            "Landed cost: freight and customs added on top of item cost.",
          ],
        },
        {
          heading: "How can I see Genoa before deciding?",
          body: [
            "The practical way to evaluate Genoa is to book a demo. You can book one through the contact page or on WhatsApp.",
            "Bring examples from your daily work, such as a purchase invoice, a sales invoice, a short list of items and a customer statement, and ask how each one would be handled in Genoa.",
          ],
        },
      ],
      keyFacts: [
        { label: "Product type", value: "Accounting and inventory software for companies" },
        { label: "Built for", value: "Iraqi companies that buy, stock and sell goods" },
        { label: "Chart of accounts and statements", value: "Unified Accounting System chart of accounts; IFRS-based financial statements" },
        {
          label: "Core modules",
          value: "Accounting, inventory, sales and purchasing, customer and supplier ledgers with ageing",
        },
        {
          label: "Optional features",
          value: "Multi-currency and landed cost, off by default and switched on per organisation",
        },
        { label: "AI features", value: "An AI assistant that helps the user, and invoice from image" },
        { label: "For government offices", value: "A separate product, Genoa Gov" },
      ],
      screenshotAlt:
        "Placeholder illustration of the Genoa for companies screen, to be replaced with a real screenshot using test data",
      screenshotCaption:
        "Placeholder image. It will be replaced with a real Genoa screenshot that uses test data.",
      faqTeaserHeading: "Common questions about Genoa",
    },
  },

  features: [
    // 0. Unified Accounting System (IFRS)
    {
      slug: 'unified-accounting-system',
      icon: 'standard',
      guide: 'unified-accounting-system',
      related: ['accounting', 'sales-purchasing', 'customer-supplier-ledgers'],
      content: {
        ar: {
          title: "نظام محاسبي بدليل النظام المحاسبي الموحد وقوائم IFRS | Genoa",
          description:
            "Genoa نظام محاسبي للشركات العراقية يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، مع المخازن والمبيعات والذمم.",
          h1: "النظام المحاسبي الموحد وقوائم IFRS المالية في برنامج Genoa",
          navLabel: "النظام المحاسبي الموحد وقوائم IFRS",
          cardSummary: "يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS).",
          answer:
            "يعتمد برنامج Genoa للشركات دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)؛ وهما إطاران منفصلان. فيعمل المحاسب في Genoa بدليل الحسابات الذي يعرفه في العراق، ويُستخدم دليل الحسابات نفسه في البرنامج الذي يضم الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين.",
          keyFacts: [
            { label: "دليل الحسابات", value: "دليل حسابات النظام المحاسبي الموحد بصيغته المتوافقة مع IFRS، مضمَّن في البرنامج" },
            { label: "القوائم المالية", value: "وفق المعايير الدولية لإعداد التقارير المالية (IFRS)" },
            { label: "البرنامج", value: "Genoa للشركات" },
            { label: "يعمل مع", value: "الحسابات والمخازن والمبيعات والمشتريات والذمم" },
          ],
          sections: [
            {
              heading: "ما هو النظام المحاسبي الموحد؟",
              body: [
                "النظام المحاسبي الموحد إطار محاسبي معتمد في العراق لتنظيم حسابات الشركات. يقوم على دليل حسابات موحّد ومرمَّز، وقواعد للتسجيل المحاسبي، ونماذج للقوائم والتقارير المالية.",
                "ولأن المحاسبين ومراقبي الحسابات في العراق يعرفون هذا النظام ويعملون به، فإن اعتماد دليل حساباته في البرنامج يجعل الحسابات مفهومة لهم من دون إعادة ترتيب.",
              ],
            },
            {
              heading: "ما هي معايير IFRS؟",
              body: [
                "المعايير الدولية لإعداد التقارير المالية (IFRS) يصدرها مجلس معايير المحاسبة الدولية (IASB)، وتحدد قواعد الاعتراف بالبنود وقياسها والإفصاح عنها في القوائم المالية.",
                "يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق هذه المعايير؛ فيعمل محاسبو الشركة بدليل الحسابات الذي يعرفونه، ويمكنهم إعداد قوائم مالية وفق المعايير الدولية التي تزداد أهميتها في التعامل مع المصارف والمستثمرين.",
              ],
            },
            {
              heading: "كيف يظهر ذلك في عمل الشركة اليومي؟",
              body: [
                "يسجّل قسم الحسابات القيود والفواتير وحركة المواد في Genoa، وتُنظَّم الحسابات على دليل حسابات النظام المحاسبي الموحد.",
                "وبما أن الحسابات والمخازن والمبيعات والمشتريات والذمم في برنامج واحد، تستخدم كل هذه الوحدات دليل الحسابات نفسه.",
              ],
            },
            {
              heading: "لمن يهمّ النظام المحاسبي الموحد مع قوائم مالية وفق IFRS؟",
              body: ["يهمّ ذلك بشكل خاص:"],
              bullets: [
                "الشركات التي تخضع حساباتها لتدقيق مراقب حسابات.",
                "الشركات التي تتعامل مع المصارف وتحتاج إلى قوائم مالية واضحة وفق المعايير الدولية.",
                "المحاسبين الذين يعملون أصلاً بالنظام المحاسبي الموحد ولا يريدون تعلّم دليل حسابات جديد.",
                "الشركات التي تريد إطاراً واحداً واضحاً لحساباتها بدلاً من دليل حسابات مرتجل.",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة دليل الحسابات وفق النظام المحاسبي الموحد في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption: "صورة توضيحية مؤقتة لدليل الحسابات، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل يوجد نظام محاسبي للشركات العراقية بدليل حسابات النظام المحاسبي الموحد؟",
              a: [
                "نعم. Genoa نظام محاسبي للشركات العراقية يطبّق النظام المحاسبي الموحد، ودليل حساباته بصيغته المتوافقة مع معايير IFRS مضمَّن في البرنامج جاهزاً، فيعمل المحاسب بدليل الحسابات الذي يعرفه.",
                "ويمكنه أيضاً إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS).",
              ],
            },
            {
              q: "ما الفرق بين النظام المحاسبي الموحد ومعايير IFRS؟",
              a: [
                "النظام المحاسبي الموحد إطار محاسبي عراقي ينظّم دليل الحسابات والتسجيل والقوائم المالية، أما IFRS فمعايير دولية تحدد قواعد الاعتراف بالبنود وقياسها والإفصاح عنها.",
                "ويعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS.",
              ],
            },
            {
              q: "هل يمكنني رؤية دليل الحسابات وفق النظام المحاسبي الموحد في Genoa قبل الشراء؟",
              a: [
                "نعم. احجز عرضاً توضيحياً عبر صفحة التواصل أو واتساب، واطلب أن نعرض لك دليل الحسابات وطريقة تسجيل القيود عليه.",
              ],
            },
          ],
        },
        en: {
          title: "Unified Accounting System and IFRS Statements | Genoa",
          description:
            "Genoa uses the Iraqi Unified Accounting System chart of accounts and can prepare IFRS-based financial statements, alongside inventory, sales and ledgers.",
          h1: "The Unified Accounting System and IFRS Statements in Genoa",
          navLabel: "Unified Accounting System and IFRS statements",
          cardSummary:
            "Genoa uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS).",
          answer:
            "Genoa for companies uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS); these are two separate frameworks. Accountants work in Genoa with the chart of accounts they already know in Iraq, and the same chart of accounts is used throughout the product, which covers accounting, inventory, sales and purchasing, and customer and supplier ledgers.",
          keyFacts: [
            { label: "Chart of accounts", value: "The Unified Accounting System chart, in its IFRS-aligned version, included in the software" },
            { label: "Financial statements", value: "Based on International Financial Reporting Standards (IFRS)" },
            { label: "Product", value: "Genoa for companies" },
            { label: "Works with", value: "Accounting, inventory, sales and purchasing, and ledgers" },
          ],
          sections: [
            {
              heading: "What is the Unified Accounting System?",
              body: [
                "The Unified Accounting System is the accounting framework used in Iraq to organise company accounts. It is built on a standard, coded chart of accounts, rules for recording transactions, and formats for financial statements and reports.",
                "Because accountants and auditors in Iraq know and use this system, software that uses its chart of accounts keeps the books readable to them without rearranging anything.",
              ],
            },
            {
              heading: "What is IFRS?",
              body: [
                "International Financial Reporting Standards (IFRS) are issued by the International Accounting Standards Board (IASB) and set the rules for recognising, measuring and disclosing items in financial statements.",
                "Genoa uses the Unified Accounting System chart of accounts and can prepare financial statements under these standards. A company's accountants keep the chart of accounts they know, and can prepare statements under the international standards that matter more and more when dealing with banks and investors.",
              ],
            },
            {
              heading: "What does this mean day to day?",
              body: [
                "The accounts team records journal entries, invoices and stock movements in Genoa, and the accounts are organised on the Unified Accounting System chart of accounts.",
                "Because accounting, inventory, sales and purchasing, and the ledgers are in one product, all of these modules use the same chart of accounts.",
              ],
            },
            {
              heading: "Who benefits most from the Unified Accounting System with IFRS statements?",
              body: ["It matters especially for:"],
              bullets: [
                "Companies whose accounts are reviewed by an external auditor.",
                "Companies that deal with banks and need clear financial statements under international standards.",
                "Accountants who already work with the Unified Accounting System and do not want to learn a new chart of accounts.",
                "Companies that want one clear framework for their books instead of an improvised chart of accounts.",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the chart of accounts under the Unified Accounting System in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the chart of accounts. It will be replaced with a real screenshot that uses test data.",
          faqs: [
            {
              q: "Is there accounting software for Iraqi companies built on the Unified Accounting System chart of accounts?",
              a: [
                "Yes. Genoa is accounting software for Iraqi companies that applies the Iraqi Unified Accounting System, and its IFRS-aligned chart of accounts is included in the software, ready to use, so accountants work with the chart of accounts they already know.",
                "It can also prepare financial statements based on International Financial Reporting Standards (IFRS).",
              ],
            },
            {
              q: "What is the difference between the Unified Accounting System and IFRS?",
              a: [
                "The Unified Accounting System is an Iraqi framework that organises the chart of accounts, how transactions are recorded and the financial statements; IFRS are international standards that set the rules for recognising, measuring and disclosing items.",
                "Genoa uses the Unified Accounting System chart of accounts and can prepare IFRS-based financial statements.",
              ],
            },
            {
              q: "Can I see the chart of accounts under the Unified Accounting System in Genoa before buying?",
              a: [
                "Yes. Book a demo through the contact page or on WhatsApp and ask us to show you the chart of accounts and how entries are recorded on it.",
              ],
            },
          ],
        },
      },
    },

    // 1. Accounting
    {
      slug: 'accounting',
      icon: 'ledger',
      related: ['unified-accounting-system', 'sales-purchasing', 'customer-supplier-ledgers'],
      content: {
        ar: {
          title: "برنامج الحسابات للشركات التجارية في العراق | Genoa",
          description:
            "الحسابات في برنامج Genoa للشركات العراقية: مسك الدفاتر بالدينار العراقي في البرنامج نفسه الذي يضم المخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين.",
          h1: "الحسابات في برنامج Genoa للشركات العراقية",
          navLabel: "الحسابات",
          cardSummary:
            "مسك الدفاتر بالدينار العراقي في البرنامج نفسه الذي يضم المخازن والمبيعات والمشتريات والذمم.",
          answer:
            "الحسابات في برنامج Genoa هي الوحدة التي تمسك فيها الشركة دفاترها المحاسبية. وهي جزء من البرنامج نفسه الذي يضم المخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الذمم. وقد صُمّمت لشركات عراقية تعمل بالدينار العراقي، ويمكن إضافة الدولار الأمريكي عبر ميزة تعدد العملات، وهي اختيارية ومعطّلة افتراضياً وتُفعَّل لكل شركة على حدة.",
          keyFacts: [
            { label: "الغرض", value: "مسك الدفاتر المحاسبية للشركة" },
            {
              label: "العملة",
              value: "الدينار العراقي، مع فواتير بالدولار الأمريكي عند تفعيل تعدد العملات",
            },
            {
              label: "تعمل إلى جانب",
              value: "المخازن، المبيعات والمشتريات، ذمم الزبائن والمجهزين",
            },
            { label: "مناسبة لـ", value: "الشركات التجارية العراقية" },
          ],
          sections: [
            {
              heading: "ماذا تشمل الحسابات في الشركة التجارية؟",
              body: [
                "في أي شركة، تعني الحسابات تسجيل كل معاملة مالية: ما تبيعه الشركة، وما تشتريه، وما تقبضه، وما تدفعه. وتُسجَّل هذه المعاملات قيوداً على دليل الحسابات، ويُستعمل ميزان المراجعة للتأكد من توازن الحسابات.",
                "وفي الشركة التجارية العراقية ترتبط الحسابات ارتباطاً مباشراً بالمخزن وبديون الزبائن والمجهزين. لذلك يفيد أن تكون كلها في نظام واحد.",
              ],
            },
            {
              heading: "كيف تعمل الحسابات في Genoa؟",
              body: [
                "تقوم الحسابات في Genoa على قيود يومية ودليل حسابات النظام المحاسبي الموحد، ويمكن إعداد القوائم المالية وفق معايير IFRS.",
                "وبما أن الحسابات جزء من البرنامج نفسه الذي يضم المخازن والمبيعات والمشتريات والذمم، فإن عمليات البيع والشراء المسجلة في تلك الوحدات تنعكس على الحسابات.",
              ],
            },
            {
              heading: "هل يمكن التعامل بالدولار في Genoa؟",
              body: [
                "نعم، عند تفعيل ميزة تعدد العملات: تُسعَّر فواتير المبيعات والمشتريات بالدولار الأمريكي بسعر صرف يُدخَل مع الفاتورة، ويُحسب معادلها بالدينار العراقي، ويبقى القيد المحاسبي والدفاتر بالدينار.",
                "تعدد العملات ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. والشركة التي تعمل بالدينار فقط لا تحتاج إلى تفعيلها.",
              ],
            },
            {
              heading: "ماذا تسأل عن الحسابات في العرض التوضيحي؟",
              body: [
                "العرض التوضيحي فرصة لتتأكد أن طريقة عمل الحسابات في Genoa تناسب شركتك. هذه أسئلة عملية يمكنك طرحها:",
              ],
              bullets: [
                "كيف سيُبنى دليل الحسابات لشركتنا؟",
                "كيف تظهر فاتورة البيع أو الشراء في الحسابات؟",
                "كيف أراجع رصيد حساب معيّن خلال فترة محددة؟",
                "هل نحتاج إلى تفعيل تعدد العملات، أم يكفينا الدينار العراقي؟",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة الحسابات في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة الحسابات، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل يمكن أن يحل برنامج Genoa محل الدفاتر اليدوية والجداول المتفرقة في الحسابات؟",
              a: [
                "هذا هو الغرض من Genoa: أن تُمسك الحسابات والمخزن والمبيعات والمشتريات وذمم الزبائن والمجهزين في برنامج واحد بدلاً من دفاتر وجداول متفرقة.",
                "ويُفضَّل أن تبدأ بعرض توضيحي لترى كيف ستُسجَّل معاملاتك المعتادة في البرنامج.",
              ],
            },
            {
              q: "هل أحتاج إلى تفعيل الدولار لأستخدم الحسابات في Genoa؟",
              a: [
                "لا. الحسابات في Genoa تعمل بالدينار العراقي دون الحاجة إلى أي ميزة إضافية.",
                "تعدد العملات ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. ولا تلزم إلا إذا كانت الشركة تتعامل بالدولار الأمريكي.",
              ],
            },
          ],
        },
        en: {
          title: "Accounting for Iraqi Trading Companies | Genoa",
          description:
            "Accounting in Genoa for Iraqi companies: keep the books in Iraqi dinars in the same product as inventory, sales and purchasing, and the ledgers.",
          h1: "Accounting in Genoa for Iraqi companies",
          navLabel: "Accounting",
          cardSummary:
            "Keep the books in Iraqi dinars in the same product as inventory, sales and purchasing, and the ledgers.",
          answer:
            "Accounting in Genoa is the module where a company keeps its books. It is part of the same product as inventory, sales and purchasing, and customer and supplier ledgers with ageing. It is built for Iraqi companies working in Iraqi dinars, and the US dollar can be added through multi-currency, an optional feature that is off by default and switched on per organisation.",
          keyFacts: [
            { label: "Purpose", value: "Keeping the company's books" },
            {
              label: "Currency",
              value: "Iraqi dinar, with US-dollar invoices when multi-currency is enabled",
            },
            {
              label: "Works alongside",
              value: "Inventory, sales and purchasing, customer and supplier ledgers",
            },
            { label: "Suited to", value: "Iraqi trading companies" },
          ],
          sections: [
            {
              heading: "What does accounting cover in a trading company?",
              body: [
                "In any company, accounting means recording every financial transaction: what it sells, what it buys, what it receives and what it pays. These transactions are recorded as journal entries against a chart of accounts, and a trial balance is used to check that the books balance.",
                "In an Iraqi trading company, the accounts are closely tied to stock and to customer and supplier debts. That is why it helps to keep all of them in one system.",
              ],
            },
            {
              heading: "How does accounting work in Genoa?",
              body: [
                "Accounting in Genoa is built on journal entries and the Unified Accounting System chart of accounts, and it can prepare IFRS-based financial statements.",
                "Because accounting sits in the same product as inventory, sales and purchasing, and the ledgers, sales and purchases recorded in those modules are reflected in the accounts.",
              ],
            },
            {
              heading: "Can I work in US dollars in Genoa?",
              body: [
                "Yes, once multi-currency is enabled: sales and purchase invoices can be priced in US dollars at an exchange rate entered with the invoice, the Iraqi dinar equivalent is calculated, and the journal entry and the books stay in dinars.",
                "Multi-currency is optional: it is off by default and switched on per organisation, according to each company's needs. A company that works only in dinars does not need to enable it.",
              ],
            },
            {
              heading: "What should you ask about accounting in a demo?",
              body: [
                "A demo is the place to check that Genoa's accounting fits the way your company works. Useful questions to ask:",
              ],
              bullets: [
                "How would our chart of accounts be set up?",
                "How does a sales or purchase invoice show up in the accounts?",
                "How do I check an account's balance for a given period?",
                "Do we need multi-currency, or is the Iraqi dinar enough for us?",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the accounting screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the accounting screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Can Genoa replace manual ledgers and spreadsheets for our accounts?",
              a: [
                "That is the purpose of Genoa: keeping accounts, stock, sales and purchasing, and customer and supplier ledgers in one product instead of separate notebooks and spreadsheets.",
                "A demo is a good first step to see how your usual transactions would be recorded in Genoa.",
              ],
            },
            {
              q: "Do I need to enable the dollar to use accounting in Genoa?",
              a: [
                "No. Accounting in Genoa works in Iraqi dinars without any extra feature.",
                "Multi-currency is optional, off by default and switched on per organisation. It is only needed if the company deals in US dollars.",
              ],
            },
          ],
        },
      },
    },

    // 2. Inventory
    {
      slug: 'inventory',
      icon: 'box',
      related: ['sales-purchasing', 'landed-cost', 'accounting'],
      content: {
        ar: {
          title: "برنامج مخازن لمتابعة المواد والمخزون | Genoa",
          description:
            "وحدة المخازن في برنامج Genoa تتابع المواد التي تشتريها الشركة العراقية وتخزنها وتبيعها، وتعمل مع المبيعات والمشتريات والحسابات في برنامج واحد.",
          h1: "برنامج إدارة المخازن في Genoa: متابعة المواد والمخزون",
          navLabel: "المخازن",
          cardSummary:
            "متابعة المواد التي تشتريها الشركة وتخزنها وتبيعها، في البرنامج نفسه مع المبيعات والحسابات.",
          answer:
            "المخازن في برنامج Genoa هي الوحدة التي تتابع فيها الشركة المواد التي تحتفظ بها في مخزنها. وتعمل إلى جانب المبيعات والمشتريات والحسابات ضمن البرنامج نفسه. وللشركات المستوردة يمكن تفعيل ميزة الكلفة الواصلة لإضافة الشحن والكمارك إلى كلفة المادة، وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
          keyFacts: [
            { label: "الغرض", value: "متابعة المواد المخزونة" },
            { label: "تعمل إلى جانب", value: "المبيعات والمشتريات، الحسابات" },
            {
              label: "كلفة المادة",
              value: "يمكن إضافة الشحن والكمارك عبر الكلفة الواصلة (اختيارية، معطّلة افتراضياً، تُفعَّل لكل شركة على حدة)",
            },
            { label: "مناسبة لـ", value: "تجار الجملة والموزعين والمستوردين والمحلات" },
          ],
          sections: [
            {
              heading: "لماذا تحتاج الشركة التجارية إلى متابعة المخزن؟",
              body: [
                "المخزن في الشركة التجارية مال محبوس على الرفوف. ومعرفة ما في المخزن وكلفته تساعد الشركة على الشراء في الوقت المناسب، وتجنّب نفاد المواد أو تكدّسها.",
                "ومن دون نظام واضح تصبح أرقام المخزن تقديرية، ويصعب معرفة الربح الحقيقي من كل مادة.",
              ],
            },
            {
              heading: "كيف ترتبط المخازن بالمشتريات والمبيعات في Genoa؟",
              body: [
                "المخازن والمبيعات والمشتريات وحدات في البرنامج نفسه. فالمشتريات تُدخل المواد إلى المخزن، والمبيعات تُخرجها منه.",
                "وبما أن الحسابات جزء من البرنامج نفسه، فإن حركة المواد تنعكس أيضاً على الحسابات.",
              ],
            },
            {
              heading: "ما هي كلفة المادة في المخزن؟",
              body: [
                "كلفة المادة هي ما دفعته الشركة لشرائها. لكن البضاعة المستوردة تتحمل غالباً مصاريف إضافية مثل الشحن والنقل والرسوم الكمركية.",
                "لهذا يوفر Genoa ميزة الكلفة الواصلة، التي تضيف الشحن والكمارك إلى كلفة المادة. وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
              ],
            },
            {
              heading: "ماذا تسأل عن المخازن في العرض التوضيحي؟",
              body: [
                "أحضر إلى العرض التوضيحي قائمة قصيرة بموادك وفاتورة شراء حديثة، واطرح أسئلة مثل:",
              ],
              bullets: [
                "كيف تُعرَّف المواد في البرنامج؟",
                "كيف أرى الكمية المتوفرة من مادة معيّنة؟",
                "كيف تُحسب كلفة المادة إذا تغيّر سعر الشراء بين شحنة وأخرى؟",
                "هل تحتاج شركتنا إلى ميزة الكلفة الواصلة؟",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة المخزون في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة المخازن، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل أحتاج إلى ميزة الكلفة الواصلة لأستخدم المخازن في Genoa؟",
              a: [
                "لا. المخازن وحدة أساسية في Genoa وتعمل دون ميزة الكلفة الواصلة.",
                "الكلفة الواصلة ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة. وهي مفيدة للشركات التي تدفع الشحن والكمارك على بضاعتها المستوردة.",
              ],
            },
            {
              q: "هل المخازن في Genoa منفصلة عن الحسابات؟",
              a: [
                "لا. المخازن والحسابات وحدتان في البرنامج نفسه، وليستا برنامجين منفصلين.",
                "وحركة المواد الناتجة عن البيع والشراء تنعكس على الحسابات، فلا حاجة إلى إدخال العملية نفسها مرتين.",
              ],
            },
          ],
        },
        en: {
          title: "Inventory Software for Iraqi Companies | Genoa",
          description:
            "Inventory in Genoa tracks the items an Iraqi company buys, stores and sells, working alongside sales and purchasing and accounting in one product.",
          h1: "Inventory in Genoa: keeping track of your stock",
          navLabel: "Inventory",
          cardSummary:
            "Keep track of the items your company buys, stores and sells, alongside sales and the accounts.",
          answer:
            "Inventory in Genoa is the module a company uses to keep track of the items it holds in stock. It works alongside sales and purchasing and accounting in the same product. Importers can also use landed cost to add freight and customs on top of item cost; it is an optional feature that is off by default and switched on per organisation.",
          keyFacts: [
            { label: "Purpose", value: "Keeping track of items held in stock" },
            { label: "Works alongside", value: "Sales and purchasing, accounting" },
            {
              label: "Item cost",
              value: "Freight and customs can be added through landed cost (optional, off by default, switched on per organisation)",
            },
            { label: "Suited to", value: "Wholesalers, distributors, importers and shops" },
          ],
          sections: [
            {
              heading: "Why does a trading company need to track its stock?",
              body: [
                "In a trading company, stock is cash sitting on shelves. Knowing what is in stock and what it cost helps the company buy at the right time and avoid running out or overstocking.",
                "Without a clear system, stock figures become guesswork, and it is hard to know the real profit on each item.",
              ],
            },
            {
              heading: "How is inventory linked to purchasing and sales in Genoa?",
              body: [
                "Inventory, sales and purchasing are modules of the same product. Purchases bring items into stock, and sales take them out.",
                "Because accounting is part of the same product, stock movements are also reflected in the accounts.",
              ],
            },
            {
              heading: "What is the cost of an item in stock?",
              body: [
                "An item's cost is what the company paid to buy it. Imported goods, however, usually carry extra charges such as freight, transport and customs duties.",
                "For this, Genoa offers landed cost, which adds freight and customs on top of item cost. It is an optional feature: off by default and switched on per organisation, according to each company's needs.",
              ],
            },
            {
              heading: "What should you ask about inventory in a demo?",
              body: [
                "Bring a short list of your items and a recent purchase invoice to the demo, and ask questions like these:",
              ],
              bullets: [
                "How are items set up in Genoa?",
                "How do I see the quantity on hand for a given item?",
                "How is item cost worked out when the purchase price changes from one shipment to the next?",
                "Does our company need the landed cost feature?",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the inventory screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the inventory screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Do I need landed cost to use inventory in Genoa?",
              a: [
                "No. Inventory is a core module of Genoa and works without the landed cost feature.",
                "Landed cost is optional, off by default and switched on per organisation. It is useful for companies that pay freight and customs on imported goods.",
              ],
            },
            {
              q: "Is inventory separate from accounting in Genoa?",
              a: [
                "No. Inventory and accounting are modules of the same product, not two separate programs.",
                "Stock movements from sales and purchases are reflected in the accounts, so the same transaction does not need to be entered twice.",
              ],
            },
          ],
        },
      },
    },

    // 3. Sales and purchasing
    {
      slug: 'sales-purchasing',
      icon: 'cart',
      related: ['inventory', 'customer-supplier-ledgers', 'invoice-from-image'],
      content: {
        ar: {
          title: "برنامج المبيعات والمشتريات للشركات العراقية | Genoa",
          description:
            "المبيعات والمشتريات في برنامج Genoa: سجّل ما تبيعه شركتك لزبائنها وما تشتريه من مجهزيها، إلى جانب المخازن والحسابات وذمم الزبائن والمجهزين.",
          h1: "المبيعات والمشتريات في برنامج Genoa",
          navLabel: "المبيعات والمشتريات",
          cardSummary:
            "تسجيل ما تبيعه الشركة لزبائنها وما تشتريه من مجهزيها، في البرنامج نفسه مع المخزن والذمم.",
          answer:
            "المبيعات والمشتريات في برنامج Genoa هي الوحدة التي تسجّل فيها الشركة ما تبيعه لزبائنها وما تشتريه من مجهزيها. وتعمل إلى جانب المخازن والحسابات وذمم الزبائن والمجهزين ضمن البرنامج نفسه. وهي مصممة للشركات العراقية التي تشتري المواد وتبيعها.",
          keyFacts: [
            { label: "تشمل", value: "المبيعات للزبائن والمشتريات من المجهزين" },
            {
              label: "تعمل إلى جانب",
              value: "المخازن، الحسابات، ذمم الزبائن والمجهزين",
            },
            {
              label: "للبضاعة المستوردة",
              value: "الكلفة الواصلة (اختيارية، معطّلة افتراضياً، تُفعَّل لكل شركة على حدة)",
            },
            { label: "مناسبة لـ", value: "تجار الجملة والموزعين والمستوردين" },
          ],
          sections: [
            {
              heading: "ماذا تشمل المبيعات والمشتريات؟",
              body: [
                "المبيعات هي كل ما تبيعه الشركة لزبائنها، والمشتريات هي كل ما تشتريه من مجهزيها (الموردين). وفي Genoa تجمع وحدة واحدة الجانبين معاً.",
                "وتُسجَّل المبيعات والمشتريات في Genoa على شكل فواتير: فاتورة بيع للزبون، وفاتورة شراء من المجهز.",
              ],
            },
            {
              heading: "كيف تؤثر الفاتورة على المخزن وذمم الزبائن والمجهزين؟",
              body: [
                "فاتورة البيع تُخرج المواد من المخزن، وتُضاف قيمتها إلى ذمة الزبون إذا كان البيع بالآجل. وفاتورة الشراء تُدخل المواد إلى المخزن، وتُضاف قيمتها إلى ذمة المجهز إذا كان الشراء بالآجل.",
                "وتنعكس الفواتير كذلك على الحسابات، لأن الوحدات كلها جزء من البرنامج نفسه.",
              ],
            },
            {
              heading: "ماذا عن الشراء من الخارج بالدولار؟",
              body: [
                "من الشائع أن تستورد الشركات العراقية بضاعتها وتدفع ثمنها بالدولار الأمريكي، ثم تبيعها محلياً بالدينار العراقي. ولهذه الحالات يوفر Genoa ميزتين اختياريتين.",
                "كل من الميزتين اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
              ],
              bullets: [
                "تعدد العملات: يضيف الدولار الأمريكي إلى جانب الدينار العراقي.",
                "الكلفة الواصلة: تضيف الشحن والكمارك إلى كلفة المادة المشتراة.",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة المبيعات والمشتريات في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة المبيعات والمشتريات، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل المبيعات والمشتريات وحدة واحدة في Genoa أم وحدتان؟",
              a: [
                "هي وحدة واحدة في Genoa تجمع جانب البيع للزبائن وجانب الشراء من المجهزين.",
                "وتعمل هذه الوحدة إلى جانب المخازن والحسابات وذمم الزبائن والمجهزين ضمن البرنامج نفسه.",
              ],
            },
            {
              q: "هل يظهر البيع بالآجل في حساب الزبون في Genoa؟",
              a: [
                "نعم. فاتورة البيع بالآجل تنعكس على ذمة الزبون في Genoa، فيظهر المبلغ ضمن ما يدين به الزبون للشركة.",
                "ومن هناك يمكن متابعة عمر هذا الدين ضمن أعمار الذمم.",
              ],
            },
          ],
        },
        en: {
          title: "Sales and Purchasing Software for Iraqi Traders | Genoa",
          description:
            "Sales and purchasing in Genoa: record what your Iraqi company sells to customers and buys from suppliers, alongside inventory, ledgers and the accounts.",
          h1: "Sales and purchasing in Genoa",
          navLabel: "Sales and purchasing",
          cardSummary:
            "Record what the company sells to customers and buys from suppliers, alongside stock and the ledgers.",
          answer:
            "Sales and purchasing in Genoa is the module where a company records what it sells to customers and what it buys from suppliers. It works alongside inventory, accounting, and customer and supplier ledgers in the same product. It is built for Iraqi companies that buy and sell goods.",
          keyFacts: [
            { label: "Covers", value: "Sales to customers and purchases from suppliers" },
            {
              label: "Works alongside",
              value: "Inventory, accounting, customer and supplier ledgers",
            },
            {
              label: "For imported goods",
              value: "Landed cost (optional, off by default, switched on per organisation)",
            },
            { label: "Suited to", value: "Wholesalers, distributors and importers" },
          ],
          sections: [
            {
              heading: "What does sales and purchasing cover?",
              body: [
                "Sales are everything a company sells to its customers, and purchasing is everything it buys from its suppliers. In Genoa, one module covers both sides.",
                "Sales and purchases are recorded in Genoa as invoices: a sales invoice to a customer and a purchase invoice from a supplier.",
              ],
            },
            {
              heading: "How does an invoice affect stock and customer and supplier balances?",
              body: [
                "A sales invoice takes items out of stock and, for a sale on credit, adds to the customer's balance. A purchase invoice brings items into stock and, for a purchase on credit, adds to the supplier's balance.",
                "Invoices are also reflected in the accounts, because all the modules are part of the same product.",
              ],
            },
            {
              heading: "What about buying from abroad in dollars?",
              body: [
                "It is common for Iraqi companies to import goods, pay for them in US dollars and sell them locally in Iraqi dinars. For these cases, Genoa offers two optional features.",
                "Both are off by default and are switched on per organisation, according to each company's needs.",
              ],
              bullets: [
                "Multi-currency: adds the US dollar alongside the Iraqi dinar.",
                "Landed cost: adds freight and customs on top of the cost of purchased items.",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the sales and purchasing screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the sales and purchasing screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Are sales and purchasing one module in Genoa or two?",
              a: [
                "They are one module in Genoa, covering both selling to customers and buying from suppliers.",
                "This module works alongside inventory, accounting, and customer and supplier ledgers in the same product.",
              ],
            },
            {
              q: "Does a credit sale show up on the customer's account in Genoa?",
              a: [
                "Yes. A sales invoice on credit is reflected in the customer's ledger in Genoa, so the amount appears in what the customer owes the company.",
                "From there, the age of that debt can be followed through ageing.",
              ],
            },
          ],
        },
      },
    },

    // 4. Customer and supplier ledgers
    {
      slug: 'customer-supplier-ledgers',
      icon: 'users',
      related: ['sales-purchasing', 'accounting', 'multi-currency'],
      content: {
        ar: {
          title: "ذمم الزبائن والمجهزين وأعمار الديون | Genoa",
          description:
            "تابع ما لشركتك عند الزبائن وما عليها للمجهزين في برنامج Genoa، مع أعمار الذمم التي تبيّن منذ متى بقي كل رصيد دون تسديد.",
          h1: "ذمم الزبائن والمجهزين وأعمار الذمم في برنامج Genoa",
          navLabel: "ذمم الزبائن والمجهزين",
          cardSummary:
            "متابعة ديون الزبائن ومستحقات المجهزين، مع أعمار الذمم لمعرفة منذ متى بقي كل رصيد دون تسديد.",
          answer:
            "ذمم الزبائن والمجهزين في برنامج Genoa تبيّن ما يدين به كل زبون للشركة وما تدين به الشركة لكل مجهز. ويتضمن Genoa أعمار الذمم للزبائن والمجهزين، وهي تبيّن منذ متى بقي كل رصيد دون تسديد. وتساعد أعمار الذمم الشركة على متابعة الديون القديمة وتنظيم دفعاتها للمجهزين.",
          keyFacts: [
            {
              label: "تشمل",
              value: "ذمم الزبائن (ما للشركة) وذمم المجهزين (ما على الشركة)",
            },
            { label: "أعمار الذمم", value: "متوفرة للزبائن والمجهزين" },
            { label: "تعمل إلى جانب", value: "المبيعات والمشتريات، الحسابات" },
            { label: "مناسبة لـ", value: "الشركات التي تبيع أو تشتري بالآجل" },
          ],
          sections: [
            {
              heading: "ما هي ذمم الزبائن وذمم المجهزين؟",
              body: [
                "ذمم الزبائن هي المبالغ التي للشركة عند زبائنها، وتنشأ غالباً من البيع بالآجل. وذمم المجهزين هي المبالغ التي على الشركة لمجهزيها، وتنشأ غالباً من الشراء بالآجل.",
                "ويشيع البيع والشراء بالآجل في السوق العراقية، لذلك تحتاج الشركة إلى معرفة رصيد كل زبون وكل مجهز بدقة.",
              ],
            },
            {
              heading: "ما هي أعمار الذمم ولماذا تهم؟",
              body: [
                "أعمار الذمم، أو أعمار الديون، تبيّن منذ متى بقي كل رصيد دون تسديد. فالدين الذي مضى عليه أسبوع يختلف عن دين مضت عليه أشهر.",
                "بأعمار ذمم الزبائن تعرف الشركة أي الديون أقدم وتحتاج إلى متابعة. وبأعمار ذمم المجهزين تعرف أي المستحقات أقدم، فتخطط لدفعها.",
              ],
            },
            {
              heading: "كيف تبقى الذمم محدّثة في Genoa؟",
              body: [
                "ذمم الزبائن والمجهزين جزء من البرنامج نفسه الذي يضم المبيعات والمشتريات والحسابات. ففاتورة البيع بالآجل تنعكس على ذمة الزبون، وفاتورة الشراء بالآجل تنعكس على ذمة المجهز.",
                "وبذلك تبقى الذمم متسقة مع ما سُجّل في المبيعات والمشتريات والحسابات.",
              ],
            },
            {
              heading: "ماذا لو تعاملت بالدولار مع الزبائن أو المجهزين؟",
              body: [
                "من الشائع أن تتعامل الشركات العراقية مع زبائن أو مجهزين بالدولار الأمريكي. ولهذه الحالات يوفر Genoa ميزة تعدد العملات: تُسعَّر الفاتورة بالدولار بسعر صرف، وتُسجَّل الذمة في الدفاتر بمعادلها بالدينار العراقي.",
                "تعدد العملات ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة ذمم الزبائن والمجهزين في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة الذمم وأعمار الديون، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما الفرق بين ذمم الزبائن وذمم المجهزين؟",
              a: [
                "ذمم الزبائن هي ما للشركة عند زبائنها، أما ذمم المجهزين فهي ما على الشركة لمجهزيها.",
                "ويتابع Genoa النوعين معاً، ويتضمن أعمار الذمم لكل منهما.",
              ],
            },
            {
              q: "هل أعمار الذمم في Genoa للزبائن فقط أم للمجهزين أيضاً؟",
              a: [
                "أعمار الذمم في Genoa تشمل الزبائن والمجهزين معاً.",
                "بأعمار ذمم الزبائن تتابع الشركة التحصيل، وبأعمار ذمم المجهزين تخطط لدفعاتها.",
              ],
            },
          ],
        },
        en: {
          title: "Customer and Supplier Ledgers with Ageing | Genoa",
          description:
            "Track what customers owe you and what you owe suppliers in Genoa, with ageing that shows how long each balance has been outstanding.",
          h1: "Customer and supplier ledgers with ageing in Genoa",
          navLabel: "Customer and supplier ledgers",
          cardSummary:
            "Follow customer debts and supplier balances, with ageing that shows how long each balance has been open.",
          answer:
            "Customer and supplier ledgers in Genoa show what each customer owes the company and what the company owes each supplier. Genoa includes ageing for both customers and suppliers, which shows how long each balance has been outstanding. Ageing helps a company follow up old debts and plan its payments to suppliers.",
          keyFacts: [
            {
              label: "Covers",
              value: "Customer balances (owed to the company) and supplier balances (owed by the company)",
            },
            { label: "Ageing", value: "Available for both customers and suppliers" },
            { label: "Works alongside", value: "Sales and purchasing, accounting" },
            { label: "Suited to", value: "Companies that sell or buy on credit" },
          ],
          sections: [
            {
              heading: "What are customer and supplier ledgers?",
              body: [
                "Customer balances are amounts customers owe the company, usually from sales on credit. Supplier balances are amounts the company owes its suppliers, usually from purchases on credit.",
                "Buying and selling on credit is common in the Iraqi market, so a company needs to know exactly where it stands with each customer and each supplier.",
              ],
            },
            {
              heading: "What is debt ageing and why does it matter?",
              body: [
                "Ageing shows how long each balance has been outstanding. A debt that is a week old is a different matter from one that has been open for months.",
                "Customer ageing shows which debts have been outstanding longest and need following up. Supplier ageing shows which amounts owed are oldest, so payments can be planned.",
              ],
            },
            {
              heading: "How are the ledgers kept up to date in Genoa?",
              body: [
                "Customer and supplier ledgers are part of the same product as sales and purchasing and accounting. A sales invoice on credit is reflected in the customer's ledger, and a purchase invoice on credit in the supplier's ledger.",
                "This keeps the ledgers consistent with what has been recorded in sales, purchasing and the accounts.",
              ],
            },
            {
              heading: "What if you deal with customers or suppliers in dollars?",
              body: [
                "It is common for Iraqi companies to deal with customers or suppliers in US dollars. For these cases, Genoa offers multi-currency: the invoice is priced in dollars at an exchange rate, and the balance is recorded in the books at its Iraqi dinar equivalent.",
                "Multi-currency is optional: it is off by default and switched on per organisation, according to each company's needs.",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the customer and supplier ledgers screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the ledgers and ageing screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is the difference between customer and supplier ledgers?",
              a: [
                "Customer ledgers show what customers owe the company, while supplier ledgers show what the company owes its suppliers.",
                "Genoa keeps both, and includes ageing for each.",
              ],
            },
            {
              q: "Does ageing in Genoa cover suppliers as well as customers?",
              a: [
                "Yes. Ageing in Genoa covers both customer and supplier balances.",
                "Customer ageing helps with collections, and supplier ageing helps with planning payments.",
              ],
            },
          ],
        },
      },
    },

    // 5. Multi-currency (optional)
    {
      slug: 'multi-currency',
      icon: 'currency',
      optional: true,
      related: ['accounting', 'customer-supplier-ledgers', 'landed-cost'],
      content: {
        ar: {
          title: "تعدد العملات: الدولار مع الدينار العراقي | Genoa",
          description:
            "ميزة تعدد العملات في Genoa تضيف الدولار الأمريكي إلى جانب الدينار العراقي، وهي اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
          h1: "تعدد العملات في Genoa: الدولار الأمريكي إلى جانب الدينار العراقي",
          navLabel: "تعدد العملات",
          cardSummary:
            "العمل بالدولار الأمريكي إلى جانب الدينار العراقي. ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
          answer:
            "تعدد العملات في برنامج Genoa ميزة تتيح تسعير الفواتير بالدولار الأمريكي بسعر صرف، مع حساب معادلها بالدينار العراقي الذي تبقى به الدفاتر. وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. وهي موجّهة للشركات العراقية التي تشتري أو تبيع أو تتعامل مع زبائنها ومجهزيها بالدولار.",
          keyFacts: [
            { label: "العملات", value: "الدينار العراقي والدولار الأمريكي" },
            { label: "التوفر", value: "ميزة اختيارية، معطّلة افتراضياً" },
            { label: "التفعيل", value: "لكل شركة على حدة حسب حاجتها" },
            {
              label: "ذات صلة بـ",
              value: "الحسابات، ذمم الزبائن والمجهزين، الكلفة الواصلة",
            },
          ],
          sections: [
            {
              heading: "لماذا تحتاج الشركات العراقية إلى الدينار والدولار معاً؟",
              body: [
                "في العراق، من الشائع أن تشتري الشركات بضاعتها بالدولار الأمريكي وتبيعها محلياً بالدينار العراقي. وقد يتعامل بعض الزبائن والمجهزين بالدولار مباشرة.",
                "وحين تُسجَّل هذه المعاملات بعملة واحدة فقط، يصعب معرفة الرصيد الحقيقي بكل عملة وأثر تغيّر سعر الصرف.",
              ],
            },
            {
              heading: "كيف تُفعَّل ميزة تعدد العملات؟",
              body: [
                "تعدد العملات ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. أي أن تفعيلها لشركة لا يغيّر شيئاً عند شركة أخرى.",
                "والشركة التي تعمل بالدينار العراقي فقط تبقى الميزة معطّلة عندها. ولمعرفة ما إذا كانت شركتك تحتاج إليها، احجز عرضاً توضيحياً وناقش طريقة تعاملك بالعملتين.",
              ],
            },
            {
              heading: "ما دور سعر الصرف؟",
              body: [
                "سعر الصرف هو ما يحوّل مبلغاً بالدولار إلى ما يقابله بالدينار. وبما أن سعر صرف الدولار مقابل الدينار يتغيّر، فإن قيمة الدين نفسه بالدينار قد تختلف من يوم إلى آخر.",
                "لهذا من المهم أن تسأل في العرض التوضيحي عن طريقة التعامل مع سعر الصرف في Genoa.",
              ],
            },
            {
              heading: "ما علاقة تعدد العملات بالوحدات الأخرى؟",
              body: [
                "عند تفعيل تعدد العملات يمكن تسعير فواتير المبيعات والمشتريات بالدولار الأمريكي، ويُحسب معادلها بالدينار العراقي بسعر الصرف، فيبقى القيد في الحسابات وفي ذمم الزبائن والمجهزين بالدينار.",
                "وللشركات المستوردة يمكن الجمع بين تعدد العملات وميزة الكلفة الواصلة، وهي أيضاً ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة تعدد العملات في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة تعدد العملات، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل الدولار مفعّل في برنامج Genoa من البداية؟",
              a: [
                "لا. تعدد العملات معطّل افتراضياً في Genoa.",
                "وهو ميزة اختيارية تُفعَّل لكل شركة على حدة حسب حاجتها، فتبقى الشركة التي تعمل بالدينار العراقي فقط دون تغيير.",
              ],
            },
            {
              q: "هل يدعم Genoa عملات أخرى غير الدينار والدولار؟",
              a: [
                "ميزة تعدد العملات في Genoa مخصصة للدولار الأمريكي إلى جانب الدينار العراقي.",
                "إذا كانت شركتك تتعامل بعملات أخرى، فاطرح ذلك في العرض التوضيحي لتحصل على جواب يخص حالتك.",
              ],
            },
          ],
        },
        en: {
          title: "Multi-Currency: US Dollar and Iraqi Dinar | Genoa",
          description:
            "Multi-currency in Genoa adds the US dollar alongside the Iraqi dinar. It is optional, off by default and switched on per organisation as needed.",
          h1: "Multi-currency in Genoa: US dollars alongside Iraqi dinars",
          navLabel: "Multi-currency",
          cardSummary:
            "Work in US dollars alongside Iraqi dinars. Optional, off by default and switched on per organisation.",
          answer:
            "Multi-currency in Genoa lets invoices be priced in US dollars at an exchange rate, with their Iraqi dinar equivalent calculated for the books, which stay in dinars. It is an optional feature: off by default and switched on per organisation, only for companies that need it. It is meant for Iraqi companies that buy, sell or deal with customers and suppliers in dollars.",
          keyFacts: [
            { label: "Currencies", value: "Iraqi dinar and US dollar" },
            { label: "Availability", value: "Optional, off by default" },
            { label: "Enabled", value: "Per organisation, as needed" },
            {
              label: "Related to",
              value: "Accounting, customer and supplier ledgers, landed cost",
            },
          ],
          sections: [
            {
              heading: "Why do Iraqi companies need both dinars and dollars?",
              body: [
                "In Iraq, it is common for companies to buy goods in US dollars and sell them locally in Iraqi dinars. Some customers and suppliers also deal directly in dollars.",
                "When all of this is recorded in a single currency, it is hard to see the real balance in each currency or the effect of changes in the exchange rate.",
              ],
            },
            {
              heading: "How is multi-currency switched on?",
              body: [
                "Multi-currency is optional: it is off by default and switched on per organisation, according to each company's needs. Turning it on for one company changes nothing for another.",
                "A company that works only in Iraqi dinars simply keeps it off. To find out whether your company needs it, book a demo and talk through how you deal in the two currencies.",
              ],
            },
            {
              heading: "What role does the exchange rate play?",
              body: [
                "The exchange rate converts an amount in dollars into its value in dinars. Because the dollar-to-dinar rate changes, the same debt can be worth a different amount in dinars from one day to the next.",
                "That is why it is worth asking in a demo how Genoa handles the exchange rate.",
              ],
            },
            {
              heading: "How does multi-currency relate to the other modules?",
              body: [
                "When multi-currency is enabled, sales and purchase invoices can be priced in US dollars, and their Iraqi dinar equivalent is calculated at the exchange rate, so the entry in the accounts and in customer and supplier ledgers stays in dinars.",
                "Importers can combine it with landed cost, which is also optional, off by default and switched on per organisation.",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the multi-currency screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the multi-currency screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Is the US dollar switched on in Genoa from the start?",
              a: [
                "No. Multi-currency is off by default in Genoa.",
                "It is an optional feature that is switched on per organisation as needed, so a company that works only in Iraqi dinars sees no change.",
              ],
            },
            {
              q: "Does Genoa support currencies other than the dinar and the dollar?",
              a: [
                "Multi-currency in Genoa is built for the US dollar alongside the Iraqi dinar.",
                "If your company deals in other currencies, raise it during a demo to get an answer for your case.",
              ],
            },
          ],
        },
      },
    },

    // 6. Landed cost (optional)
    {
      slug: 'landed-cost',
      icon: 'ship',
      optional: true,
      related: ['inventory', 'sales-purchasing', 'multi-currency'],
      content: {
        ar: {
          title: "الكلفة الواصلة: الشحن والكمارك على كلفة المادة | Genoa",
          description:
            "ميزة الكلفة الواصلة في Genoa تضيف الشحن والكمارك إلى كلفة المادة المستوردة، وهي اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
          h1: "الكلفة الواصلة في Genoa: إضافة الشحن والكمارك إلى كلفة المادة",
          navLabel: "الكلفة الواصلة",
          cardSummary:
            "إضافة الشحن والكمارك إلى كلفة المادة المستوردة. ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
          answer:
            "الكلفة الواصلة في برنامج Genoa ميزة تضيف الشحن والكمارك إلى كلفة المادة، لتعكس كلفة البضاعة المستوردة ما كلّفته فعلاً حتى وصولها. وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. وهي موجّهة للشركات العراقية التي تستورد المواد التي تبيعها.",
          keyFacts: [
            { label: "ماذا تضيف", value: "الشحن والكمارك إلى كلفة المادة" },
            { label: "التوفر", value: "ميزة اختيارية، معطّلة افتراضياً" },
            { label: "التفعيل", value: "لكل شركة على حدة حسب حاجتها" },
            { label: "مناسبة لـ", value: "الشركات المستوردة" },
          ],
          sections: [
            {
              heading: "ما هي الكلفة الواصلة؟",
              body: [
                "الكلفة الواصلة، أو التكلفة الواصلة كما تُكتب أحياناً، هي كلفة المادة مضافاً إليها الشحن والنقل والرسوم الكمركية. أي أنها كل ما دفعته الشركة على البضاعة حتى وصلت إلى مخزنها.",
                "مثال: إذا اشترت شركة بضاعة بمبلغ 10,000,000 دينار، ودفعت 1,000,000 دينار للشحن والنقل و500,000 دينار رسوماً كمركية، فإن الكلفة الواصلة لهذه البضاعة 11,500,000 دينار.",
              ],
            },
            {
              heading: "لماذا تهم الكلفة الواصلة في تسعير البضاعة المستوردة؟",
              body: [
                "إذا حُسبت كلفة المادة بسعر المجهز وحده، ظهر الربح أعلى من حقيقته، لأن الشحن والكمارك بقيت خارج الكلفة.",
                "وحين تُضاف هذه المصاريف إلى كلفة المادة، تعرف الشركة كلفتها الحقيقية، فتبني أسعارها وحساب أرباحها على أساس صحيح.",
              ],
            },
            {
              heading: "كيف تعمل الكلفة الواصلة في Genoa؟",
              body: [
                "تضيف الكلفة الواصلة في Genoa الشحن والكمارك إلى كلفة المادة، فتصبح كلفة المادة في المخزن شاملة لهذه المصاريف.",
                "الكلفة الواصلة ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. والشركة التي تشتري من السوق المحلية دون شحن أو كمارك لا تحتاج إليها عادةً.",
              ],
            },
            {
              heading: "هل يمكن تفعيل الكلفة الواصلة مع تعدد العملات؟",
              body: [
                "تُفعَّل الكلفة الواصلة وتعدد العملات كلٌّ على حدة، فيمكن للشركة أن تفعّل إحداهما أو كلتيهما حسب حاجتها.",
                "والشركة التي تستورد بالدولار وتبيع بالدينار قد تحتاج إلى الميزتين معاً. وتعدد العملات أيضاً ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
              ],
            },
          ],
          screenshotAlt:
            "صورة توضيحية مؤقتة لشاشة الكلفة الواصلة في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية",
          screenshotCaption:
            "صورة مؤقتة لشاشة الكلفة الواصلة، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما الفرق بين كلفة المادة والكلفة الواصلة؟",
              a: [
                "كلفة المادة هي سعر شرائها من المجهز، أما الكلفة الواصلة فهي كلفة المادة مضافاً إليها الشحن والكمارك.",
                "وفي Genoa يُضاف الشحن والكمارك إلى كلفة المادة عند تفعيل ميزة الكلفة الواصلة، وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة.",
              ],
            },
            {
              q: "هل تفيد الكلفة الواصلة شركة تشتري من السوق المحلية؟",
              a: [
                "في الغالب لا. فالكلفة الواصلة مفيدة أساساً حين تدفع الشركة شحناً وكمارك فوق سعر الشراء، كما في البضاعة المستوردة.",
                "ولأنها ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة، فإنها تبقى معطّلة عند الشركات التي لا تحتاج إليها.",
              ],
            },
          ],
        },
        en: {
          title: "Landed Cost: Freight and Customs on Item Cost | Genoa",
          description:
            "Landed cost in Genoa adds freight and customs on top of item cost for imported goods. It is optional, off by default and switched on per organisation.",
          h1: "Landed cost in Genoa: freight and customs added to item cost",
          navLabel: "Landed cost",
          cardSummary:
            "Add freight and customs on top of the cost of imported items. Optional, off by default and switched on per organisation.",
          answer:
            "Landed cost in Genoa adds freight and customs on top of an item's cost, so the cost of imported goods reflects what it actually took to bring them in. It is an optional feature: off by default and switched on per organisation, only for companies that need it. It is meant for Iraqi companies that import the goods they sell.",
          keyFacts: [
            { label: "What it adds", value: "Freight and customs on top of item cost" },
            { label: "Availability", value: "Optional, off by default" },
            { label: "Enabled", value: "Per organisation, as needed" },
            { label: "Suited to", value: "Companies that import goods" },
          ],
          sections: [
            {
              heading: "What is landed cost?",
              body: [
                "Landed cost is an item's cost plus freight, transport and customs duties. In other words, it is everything the company paid on the goods until they reached its warehouse.",
                "For example, if a company buys goods for 10,000,000 dinars, then pays 1,000,000 dinars for freight and transport and 500,000 dinars in customs duties, the landed cost of those goods is 11,500,000 dinars.",
              ],
            },
            {
              heading: "Why does landed cost matter when pricing imported goods?",
              body: [
                "If an item's cost is based on the supplier's price alone, profit looks higher than it really is, because freight and customs are left out.",
                "When those charges are added to item cost, the company knows its true cost and can set prices and measure profit on a sound basis.",
              ],
            },
            {
              heading: "How does landed cost work in Genoa?",
              body: [
                "Landed cost in Genoa adds freight and customs on top of item cost, so the item's cost in inventory includes those charges.",
                "Landed cost is optional: it is off by default and switched on per organisation, according to each company's needs. A company that buys locally without freight or customs usually does not need it.",
              ],
            },
            {
              heading: "Can landed cost be used together with multi-currency?",
              body: [
                "Landed cost and multi-currency are switched on separately, so a company can enable one, both or neither, as it needs.",
                "An importer that buys in dollars and sells in dinars may need both. Multi-currency is also optional, off by default and switched on per organisation.",
              ],
            },
          ],
          screenshotAlt:
            "Placeholder illustration of the landed cost screen in Genoa, to be replaced with a real screenshot using test data",
          screenshotCaption:
            "Placeholder image of the landed cost screen. It will be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is the difference between item cost and landed cost?",
              a: [
                "Item cost is what the company pays the supplier for the goods, while landed cost is item cost plus freight and customs.",
                "In Genoa, freight and customs are added on top of item cost when the landed cost feature is enabled; it is optional, off by default and switched on per organisation.",
              ],
            },
            {
              q: "Is landed cost useful for a company that buys locally?",
              a: [
                "Usually not. Landed cost is mainly useful when a company pays freight and customs on top of the purchase price, as with imported goods.",
                "Because it is optional, off by default and switched on per organisation, it simply stays off for companies that do not need it.",
              ],
            },
          ],
        },
      },
    },
    ...aiFeatures,
  ],

  faq: {
    ar: {
      title: "أسئلة شائعة عن برنامج المحاسبة للشركات العراقية | Genoa",
      description:
        "إجابات مباشرة عن برنامج Genoa للشركات العراقية: الوحدات، والدينار والدولار، والكلفة الواصلة والكمارك، وأعمار الذمم، والفرق عن Genoa Gov، والسعر والعرض التوضيحي.",
      h1: "الأسئلة الشائعة عن برنامج Genoa للشركات",
      answer:
        "تجيب هذه الصفحة عن أسئلة يطرحها أصحاب الشركات والمحاسبون في العراق عند اختيار برنامج محاسبة. برنامج Genoa نظام محاسبي للشركات يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، ويضم الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الذمم. ويوفر أيضاً ميزتين اختياريتين هما تعدد العملات والكلفة الواصلة، وهما معطّلتان افتراضياً وتُفعَّلان لكل شركة على حدة حسب حاجتها.",
      groups: [
        {
          heading: "عن برنامج Genoa واختيار برنامج المحاسبة",
          faqs: [
            {
              q: "ما هو أفضل برنامج محاسبي للشركات في العراق؟",
              a: [
                "أفضل برنامج محاسبي لشركتك هو الذي يغطي طريقة عملها الفعلية، ولا يوجد برنامج واحد يناسب كل الشركات.",
                "عند المقارنة بين البرامج، تحقق من أن البرنامج يعتمد دليل حسابات النظام المحاسبي الموحد ويُعدّ القوائم المالية وفق معايير IFRS، وأنه يجمع الحسابات والمخزن والمبيعات والمشتريات في نظام واحد، وأنه يتابع ذمم الزبائن والمجهزين مع أعمار الديون، وأنه يتعامل مع الدينار العراقي والدولار الأمريكي إذا كانت شركتك تحتاج إلى ذلك، وأنه يضيف الشحن والكمارك إلى كلفة المادة إذا كنت تستورد. واطلب دائماً عرضاً توضيحياً قبل أن تقرر.",
                "برنامج Genoa يغطي هذه النقاط. فهو يعتمد دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفق معايير IFRS، ويضم الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين مع أعمار الذمم، ويوفر تعدد العملات (الدولار إلى جانب الدينار) والكلفة الواصلة كميزتين اختياريتين، معطّلتين افتراضياً، وتُفعَّلان لكل شركة على حدة. ويمكنك حجز عرض توضيحي لتحكم بنفسك.",
              ],
            },
            {
              q: "ما هو برنامج Genoa ولمن هو؟",
              a: [
                "Genoa برنامج محاسبي عراقي للشركات التي تشتري المواد وتخزنها وتبيعها.",
                "وهو موجّه لتجار الجملة والموزعين والمستوردين والمحلات والمعارض التي تحتفظ بمخزون، وللشركات التي تتعامل بالدينار والدولار معاً.",
              ],
            },
            {
              q: "ما هي الوحدات الموجودة في برنامج Genoa؟",
              a: [
                "يضم برنامج Genoa أربع وحدات أساسية: الحسابات، والمخازن، والمبيعات والمشتريات، وذمم الزبائن والمجهزين مع أعمار الذمم.",
                "ويوفر أيضاً ميزتين اختياريتين: تعدد العملات (الدولار الأمريكي إلى جانب الدينار العراقي) والكلفة الواصلة (إضافة الشحن والكمارك إلى كلفة المادة). والميزتان معطّلتان افتراضياً، وتُفعَّلان لكل شركة على حدة حسب حاجتها.",
                "وفي Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها.",
              ],
            },
            {
              q: "هل يعمل برنامج Genoa بالنظام المحاسبي الموحد ومعايير IFRS؟",
              a: [
                "يعتمد Genoa دليل حسابات النظام المحاسبي الموحد، ويمكنه إعداد القوائم المالية وفقاً للمعايير الدولية لإعداد التقارير المالية (IFRS)؛ وهما إطاران منفصلان.",
                "ويُستخدم دليل الحسابات نفسه في الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين، لأنها كلها في برنامج واحد. وتجد التفاصيل في صفحة النظام المحاسبي الموحد وقوائم IFRS.",
              ],
            },
            {
              q: "هل في برنامج Genoa ذكاء اصطناعي؟",
              a: [
                "نعم. في برنامج Genoa ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم أثناء عمله داخل البرنامج، وإضافة فاتورة مباشرة من صورتها بدلاً من إدخالها يدوياً.",
                "والميزتان تعينان المستخدم ولا تغنيان عن المحاسب، فمراجعة العمل واعتماده تبقى له. اطلب في العرض التوضيحي أن ترى الميزتين على أمثلة من عملك.",
              ],
            },
            {
              q: "ما الفرق بين Genoa و Genoa Gov؟",
              a: [
                "برنامج Genoa مخصص للشركات، أما Genoa Gov فهو منتج منفصل مخصص لأقسام الحسابات في الدوائر الحكومية العراقية.",
                "يركّز Genoa على عمل الشركات التجارية: الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين. أما Genoa Gov فيركّز على العمل المحاسبي الحكومي، مثل المستندات مع سلسلة المصادقات، والموازنة والتحقق من كفاية التخصيص، والصكوك، والغلق الشهري وغلق السنة المالية، ومكتبة القوانين والأنظمة والتعليمات.",
                "إذا كنت تعمل في دائرة حكومية، فابدأ بصفحات Genoa Gov.",
              ],
            },
          ],
        },
        {
          heading: "المخازن والعملات والكمارك والديون",
          faqs: [
            {
              q: "هل يوجد في برنامج Genoa نظام لإدارة المخازن؟",
              a: [
                "نعم. المخازن إحدى الوحدات الأساسية في Genoa، وهي لمتابعة المواد التي تشتريها الشركة وتخزنها وتبيعها.",
                "وتعمل المخازن إلى جانب المبيعات والمشتريات والحسابات في البرنامج نفسه، فالمشتريات تُدخل المواد إلى المخزن والمبيعات تُخرجها منه.",
              ],
            },
            {
              q: "هل يدعم برنامج Genoa الدينار العراقي والدولار الأمريكي معاً؟",
              a: [
                "نعم، عبر ميزة تعدد العملات التي تضيف الدولار الأمريكي إلى جانب الدينار العراقي.",
                "هذه الميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها. والشركة التي تعمل بالدينار فقط لا تحتاج إلى تفعيلها.",
              ],
            },
            {
              q: "كيف أحسب كلفة البضاعة المستوردة مع الشحن والكمارك؟",
              a: [
                "كلفة البضاعة المستوردة هي سعر شرائها مضافاً إليه الشحن والنقل والرسوم الكمركية (الجمارك)، ويُسمّى المجموع الكلفة الواصلة.",
                "وفي برنامج Genoa تتولى ذلك ميزة الكلفة الواصلة، التي تضيف الشحن والكمارك إلى كلفة المادة. وهي ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.",
              ],
            },
            {
              q: "كيف أتابع ديون الزبائن وأعمار الذمم؟",
              a: [
                "في Genoa تُتابَع ديون الزبائن من خلال ذمم الزبائن، مع أعمار الذمم التي تبيّن منذ متى بقي كل رصيد دون تسديد.",
                "وبهذا تعرف الشركة أي الديون أقدم وتحتاج إلى متابعة وتحصيل.",
              ],
            },
            {
              q: "كيف أعرف المبالغ المستحقة على شركتي للمجهزين؟",
              a: [
                "من خلال ذمم المجهزين في Genoa، التي تبيّن ما تدين به الشركة لكل مجهز.",
                "ومع أعمار الذمم ترى الشركة أي المستحقات أقدم، فتخطط لدفعاتها على هذا الأساس.",
              ],
            },
          ],
        },
        {
          heading: "السعر والعرض التوضيحي وأمان البيانات",
          faqs: [
            {
              q: "كم سعر برنامج Genoa؟",
              a: [
                "أسعار Genoa غير منشورة على الموقع.",
                "للحصول على عرض سعر يناسب شركتك، تواصل مع فريق Genoa من صفحة التواصل أو احجز عرضاً توضيحياً.",
              ],
            },
            {
              q: "هل يمكنني مشاهدة عرض توضيحي لبرنامج Genoa؟",
              a: [
                "نعم. يمكنك حجز عرض توضيحي لبرنامج Genoa من صفحة التواصل أو عبر واتساب.",
                "ويُفضَّل أن تحضّر أمثلة من عملك اليومي، مثل فاتورة شراء وفاتورة بيع وقائمة ببعض المواد، لترى كيف ستُسجَّل في البرنامج.",
              ],
            },
            {
              q: "هل بيانات شركتي آمنة في Genoa؟ وهل توجد نسخ احتياطية؟",
              a: [
                "حماية بيانات الشركات والنسخ الاحتياطي جزء من طريقة تشغيل Genoa، وتفاصيلها موضحة في صفحة الأمان والنسخ الاحتياطي.",
                "وإن كانت لديك أسئلة تخص شركتك، فاطرحها خلال العرض التوضيحي أو تواصل مع فريق Genoa.",
              ],
            },
          ],
        },
        {
          // TODO(owner): the answers. A question with no answer (a: []) is left out of the page, its FAQPage
          // JSON-LD and llms-full.txt (src/content/index.ts), so these appear as soon as they are answered.
          heading: "التشغيل والدعم ونقل البيانات",
          faqs: [
            { q: "هل البرنامج سحابي أم يُنصَّب على أجهزتنا؟", a: [] },
            { q: "هل يحتاج إلى إنترنت؟", a: [] },
            { q: "كم مستخدماً أو فرعاً يدعم؟", a: [] },
            { q: "هل يوجد تدريب ودعم فني؟", a: [] },
            { q: "هل يمكن نقل بياناتنا من برنامج محاسبي آخر؟", a: [] },
            { q: "هل تُطبع الفواتير والتقارير بالعربية؟", a: [] },
          ],
        },
      ],
    },
    en: {
      title: "Accounting Software FAQ for Iraqi Companies | Genoa",
      description:
        "Straight answers about Genoa for Iraqi companies: modules, dinar and dollar, landed cost and customs, debt ageing, Genoa vs Genoa Gov, pricing and demos.",
      h1: "Frequently asked questions about Genoa",
      answer:
        "This page answers questions that business owners and accountants in Iraq ask when choosing accounting software. Genoa is accounting software for companies that uses the Unified Accounting System chart of accounts and can prepare IFRS-based financial statements, covering accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing. It also offers two optional features, multi-currency and landed cost, which are off by default and switched on per organisation.",
      groups: [
        {
          heading: "About Genoa and choosing accounting software",
          faqs: [
            {
              q: "What is the best accounting software for companies in Iraq?",
              a: [
                "The best accounting software for your company is the one that fits how it actually works; no single program suits every business.",
                "When comparing options, check that the software uses the Unified Accounting System chart of accounts and can prepare IFRS-based financial statements; that it keeps accounting, inventory, sales and purchasing in one system; that it tracks customer and supplier balances with ageing; that it handles both Iraqi dinars and US dollars if your company needs that; and that it can add freight and customs to item cost if you import. Always ask for a demo before you decide.",
                "Genoa covers these points. It uses the Unified Accounting System chart of accounts, can prepare IFRS-based financial statements, and includes accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing, plus multi-currency (the US dollar alongside the Iraqi dinar) and landed cost as optional features that are off by default and switched on per organisation. You can book a demo and judge for yourself.",
              ],
            },
            {
              q: "What is Genoa and who is it for?",
              a: [
                "Genoa is accounting software for Iraqi companies that buy, stock and sell goods.",
                "It is aimed at wholesalers, distributors, importers, and shops and showrooms that hold stock, as well as companies that deal in both dinars and dollars.",
              ],
            },
            {
              q: "What modules does Genoa have?",
              a: [
                "Genoa has four core modules: accounting, inventory, sales and purchasing, and customer and supplier ledgers with ageing.",
                "It also offers two optional features: multi-currency (the US dollar alongside the Iraqi dinar) and landed cost (freight and customs added on top of item cost). Both are off by default and switched on per organisation, according to each company's needs.",
                "Genoa also has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it.",
              ],
            },
            {
              q: "Does Genoa work with the Unified Accounting System and IFRS?",
              a: [
                "Genoa uses the chart of accounts of the Iraqi Unified Accounting System and can prepare financial statements based on International Financial Reporting Standards (IFRS); these are two separate frameworks.",
                "The same chart of accounts is used across accounting, inventory, sales and purchasing, and customer and supplier ledgers, because they are all in one product. The Unified Accounting System and IFRS statements page has the details.",
              ],
            },
            {
              q: "Does Genoa use AI?",
              a: [
                "Yes. Genoa has two AI-powered features: an AI assistant that helps the user while they work inside the software, and adding an invoice directly from an image of it instead of typing it in.",
                "Both features support the user and do not replace the accountant, who still reviews and approves the work. In a demo, ask to see both on examples from your own business.",
              ],
            },
            {
              q: "What is the difference between Genoa and Genoa Gov?",
              a: [
                "Genoa is for companies, while Genoa Gov is a separate product for accounting offices in Iraqi government departments.",
                "Genoa focuses on how trading companies work: accounting, inventory, sales and purchasing, and customer and supplier ledgers. Genoa Gov focuses on government accounting, with vouchers and a multi-user approval workflow, budgets and budget checks, cheques, month and year closing, and a legislation library.",
                "If you work in a government department, start with the Genoa Gov pages.",
              ],
            },
          ],
        },
        {
          heading: "Inventory, currency, customs and debts",
          faqs: [
            {
              q: "Does Genoa include inventory management?",
              a: [
                "Yes. Inventory is one of Genoa's core modules, used to keep track of the items a company buys, stores and sells.",
                "It works alongside sales and purchasing and accounting in the same product: purchases bring items into stock and sales take them out.",
              ],
            },
            {
              q: "Does Genoa support both Iraqi dinars and US dollars?",
              a: [
                "Yes, through the multi-currency feature, which adds the US dollar alongside the Iraqi dinar.",
                "The feature is optional, off by default and switched on per organisation, according to each company's needs. A company that works only in dinars does not need it.",
              ],
            },
            {
              q: "How do I calculate the cost of imported goods including freight and customs?",
              a: [
                "The cost of imported goods is their purchase price plus freight, transport and customs duties; the total is called landed cost.",
                "In Genoa this is handled by the landed cost feature, which adds freight and customs on top of item cost. It is optional, off by default and switched on per organisation, according to each company's needs.",
              ],
            },
            {
              q: "How can I track customer debts and how old they are?",
              a: [
                "In Genoa, customer debts are tracked in the customer ledgers, with ageing that shows how long each balance has been outstanding.",
                "This tells the company which debts are oldest and need following up and collecting.",
              ],
            },
            {
              q: "How do I keep track of what my company owes its suppliers?",
              a: [
                "Through the supplier ledgers in Genoa, which show what the company owes each supplier.",
                "With ageing, the company can see which amounts have been outstanding longest and plan its payments accordingly.",
              ],
            },
          ],
        },
        {
          heading: "Pricing, demos and data",
          faqs: [
            {
              q: "How much does Genoa cost?",
              a: [
                "Genoa's prices are not published on this website.",
                "To get a quote for your company, contact the Genoa team through the contact page or book a demo.",
              ],
            },
            {
              q: "Can I see a demo of Genoa?",
              a: [
                "Yes. You can book a Genoa demo through the contact page or on WhatsApp.",
                "It helps to bring examples from your daily work, such as a purchase invoice, a sales invoice and a short list of items, so you can see how they would be recorded.",
              ],
            },
            {
              q: "Is my company's data safe in Genoa, and are there backups?",
              a: [
                "Protecting company data and keeping backups are part of how Genoa is run, and the Security and backups page explains the details.",
                "If you have questions specific to your company, raise them during your demo or contact the Genoa team.",
              ],
            },
          ],
        },
        {
          // TODO(owner): the answers. A question with no answer (a: []) is left out of the page, its FAQPage
          // JSON-LD and llms-full.txt (src/content/index.ts), so these appear as soon as they are answered.
          heading: "Setup, support and moving your data",
          faqs: [
            { q: "Is the software cloud-based, or installed on our own computers?", a: [] },
            { q: "Does it need an internet connection?", a: [] },
            { q: "How many users or branches does it support?", a: [] },
            { q: "Is there training and technical support?", a: [] },
            { q: "Can we move our data from another accounting program?", a: [] },
            { q: "Are invoices and reports printed in Arabic?", a: [] },
          ],
        },
      ],
    },
  },
};
