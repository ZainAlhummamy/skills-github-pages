import type { Feature } from './types';

/**
 * Genoa (for companies): the AI features.
 *
 * Confirmed by the owner (13 Nov 2026), in these words only: Genoa has AI that helps the user, and an invoice can
 * be added directly from an image. Nothing else about them is confirmed (which invoice types, which languages,
 * what the assistant can be asked, where data is processed), so these pages say nothing about those points and
 * turn them into questions for the demo. Every sentence that goes further is listed in CLAIMS-TO-VERIFY.md.
 */
export const aiFeatures: Feature[] = [
  {
    slug: 'ai-assistant',
    icon: 'spark',
    ai: true,
    related: ['invoice-from-image', 'accounting', 'sales-purchasing'],
    content: {
      ar: {
        title: 'المساعد الذكي: ذكاء اصطناعي في برنامج المحاسبة | Genoa',
        description:
          'المساعد الذكي في Genoa مساعد يعمل بالذكاء الاصطناعي، يساعد المستخدم أثناء عمله داخل برنامج المحاسبة والمخازن للشركات العراقية، ويبقى القرار للمحاسب.',
        h1: 'المساعد الذكي في Genoa: ذكاء اصطناعي يساعد المستخدم داخل البرنامج',
        navLabel: 'المساعد الذكي',
        cardSummary: 'مساعد يعمل بالذكاء الاصطناعي، يساعد المستخدم أثناء عمله داخل برنامج Genoa.',
        answer:
          'المساعد الذكي في برنامج Genoa مساعد يعمل بالذكاء الاصطناعي، يساعد المستخدم أثناء عمله داخل البرنامج. وهو جزء من Genoa، برنامج المحاسبة والمخازن للشركات العراقية، وليس برنامجاً منفصلاً. والمساعد أداة تعين المستخدم، أما مراجعة العمل واعتماده فتبقى للمحاسب.',
        keyFacts: [
          { label: 'ما هو', value: 'مساعد يعمل بالذكاء الاصطناعي داخل برنامج Genoa' },
          { label: 'الغرض', value: 'مساعدة المستخدم أثناء عمله في البرنامج' },
          { label: 'ضمن برنامج', value: 'Genoa للشركات' },
          { label: 'ميزة ذكاء اصطناعي أخرى', value: 'إضافة فاتورة من صورة' },
        ],
        sections: [
          {
            heading: 'ما هو المساعد الذكي في Genoa؟',
            body: [
              'المساعد الذكي مساعد يعمل بالذكاء الاصطناعي داخل برنامج Genoa، والغاية منه مساعدة المستخدم أثناء عمله في البرنامج.',
              'وهو جزء من Genoa نفسه، إلى جانب الحسابات والمخازن والمبيعات والمشتريات وذمم الزبائن والمجهزين.',
            ],
          },
          {
            heading: 'بماذا يفيد الذكاء الاصطناعي في برنامج محاسبي؟',
            body: [
              'العمل المحاسبي اليومي فيه خطوات كثيرة متكررة، والمستخدم الجديد يحتاج وقتاً حتى يعرف أين يجد كل شيء في البرنامج.',
              'والمساعد الذي يعمل بالذكاء الاصطناعي يختصر هذا الوقت، لأن المستخدم يجد المساعدة داخل البرنامج نفسه وهو يعمل.',
            ],
          },
          {
            heading: 'هل يغني المساعد الذكي عن المحاسب؟',
            body: [
              'لا. المساعد الذكي أداة تساعد المستخدم، وليس بديلاً عن المحاسب.',
              'والذكاء الاصطناعي قد يخطئ، لذلك تبقى مراجعة الأرقام والقيود واعتمادها من مسؤولية المحاسب، كما في أي عمل محاسبي.',
            ],
          },
          {
            heading: 'ماذا تسأل عن المساعد الذكي في العرض التوضيحي؟',
            body: ['اطلب في العرض التوضيحي أن ترى المساعد الذكي وهو يعمل على أمثلة من عملك، واطرح أسئلة مثل:'],
            bullets: [
              'ما الذي يمكن أن أطلبه من المساعد الذكي؟',
              'هل يفهم المساعد السؤال بالعربية؟',
              'ما البيانات التي يطّلع عليها المساعد من حسابات شركتي؟',
              'أين تُعالَج البيانات التي يتعامل معها المساعد؟',
            ],
          },
        ],
        screenshotAlt:
          'صورة توضيحية مؤقتة لشاشة المساعد الذكي في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية',
        screenshotCaption: 'صورة مؤقتة لشاشة المساعد الذكي، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.',
        faqs: [
          {
            q: 'هل يوجد برنامج محاسبي عراقي فيه ذكاء اصطناعي؟',
            a: [
              'نعم. برنامج Genoa للشركات العراقية فيه ميزتان تعملان بالذكاء الاصطناعي: مساعد ذكي يساعد المستخدم داخل البرنامج، وإضافة فاتورة مباشرة من صورتها.',
              'وGenoa برنامج محاسبة ومخازن من Genoa Systems، وهي شركة عراقية لبرمجيات المحاسبة.',
            ],
          },
          {
            q: 'ما الفرق بين المساعد الذكي وإضافة فاتورة من صورة في Genoa؟',
            a: [
              'المساعد الذكي يساعد المستخدم أثناء عمله في البرنامج، أما إضافة فاتورة من صورة فميزة تقرأ صورة الفاتورة وتضيف الفاتورة منها مباشرة.',
              'والميزتان تعملان بالذكاء الاصطناعي، وكلتاهما جزء من برنامج Genoa.',
            ],
          },
        ],
      },
      en: {
        title: 'AI Assistant in Accounting Software for Iraq | Genoa',
        description:
          'The AI assistant in Genoa helps the user while they work inside the accounting and inventory software for Iraqi companies. The accountant stays in charge.',
        h1: 'The AI assistant in Genoa: help for the user inside the software',
        navLabel: 'AI assistant',
        cardSummary: 'An AI assistant that helps the user while they work inside Genoa.',
        answer:
          'The AI assistant in Genoa is an assistant, powered by artificial intelligence, that helps the user while they work inside the software. It is part of Genoa, the accounting and inventory software for Iraqi companies, not a separate program. The assistant is a tool that supports the user; reviewing and approving the work stays with the accountant.',
        keyFacts: [
          { label: 'What it is', value: 'An AI-powered assistant inside Genoa' },
          { label: 'Purpose', value: 'Helping the user while they work in the software' },
          { label: 'Part of', value: 'Genoa for companies' },
          { label: 'Other AI feature', value: 'Invoice from image' },
        ],
        sections: [
          {
            heading: 'What is the AI assistant in Genoa?',
            body: [
              'The AI assistant is an assistant powered by artificial intelligence inside Genoa. Its purpose is to help the user while they work in the software.',
              'It is part of Genoa itself, alongside accounting, inventory, sales and purchasing, and customer and supplier ledgers.',
            ],
          },
          {
            heading: 'How does AI help in accounting software?',
            body: [
              'Day-to-day accounting work has many repeated steps, and a new user needs time to learn where everything is in the software.',
              'An AI assistant shortens that time, because the user gets help inside the software itself, while they work.',
            ],
          },
          {
            heading: 'Does the AI assistant replace the accountant?',
            body: [
              'No. The AI assistant is a tool that helps the user, not a replacement for the accountant.',
              'AI can make mistakes, so reviewing and approving figures and entries remains the accountant\'s responsibility, as in any accounting work.',
            ],
          },
          {
            heading: 'What should you ask about the AI assistant in a demo?',
            body: ['In the demo, ask to see the AI assistant working on examples from your own business, and ask questions such as:'],
            bullets: [
              'What can I ask the AI assistant to do?',
              'Does the assistant understand questions in Arabic?',
              'Which of my company\'s accounting data does the assistant see?',
              'Where is the data the assistant works with processed?',
            ],
          },
        ],
        screenshotAlt:
          'Placeholder illustration of the AI assistant screen in Genoa, to be replaced with a real screenshot using test data',
        screenshotCaption:
          'Placeholder image of the AI assistant screen. It will be replaced with a real screenshot using test data.',
        faqs: [
          {
            q: 'Is there Iraqi accounting software with AI?',
            a: [
              'Yes. Genoa, for Iraqi companies, has two AI-powered features: an AI assistant that helps the user inside the software, and adding an invoice directly from an image of it.',
              'Genoa is accounting and inventory software from Genoa Systems, an Iraqi accounting-software company.',
            ],
          },
          {
            q: 'What is the difference between the AI assistant and invoice from image in Genoa?',
            a: [
              'The AI assistant helps the user while they work in the software, while invoice from image reads an image of an invoice and adds the invoice from it directly.',
              'Both features are powered by AI, and both are part of Genoa.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'invoice-from-image',
    icon: 'scan',
    ai: true,
    related: ['ai-assistant', 'sales-purchasing', 'inventory'],
    content: {
      ar: {
        title: 'إضافة فاتورة من صورة بالذكاء الاصطناعي | Genoa',
        description:
          'في برنامج Genoa تُضاف الفاتورة مباشرة من صورتها: يقرأ الذكاء الاصطناعي صورة الفاتورة ويضيفها إلى البرنامج، بدلاً من إدخال بياناتها يدوياً سطراً سطراً.',
        h1: 'إضافة فاتورة من صورة في Genoa بالذكاء الاصطناعي',
        navLabel: 'فاتورة من صورة',
        cardSummary: 'إضافة الفاتورة مباشرة من صورتها بالذكاء الاصطناعي، بدلاً من إدخالها يدوياً.',
        answer:
          'إضافة فاتورة من صورة ميزة في برنامج Genoa تعمل بالذكاء الاصطناعي: يقدّم المستخدم صورة الفاتورة، فيقرأها البرنامج ويضيف الفاتورة منها مباشرة، بدلاً من إدخال بياناتها يدوياً. وهي جزء من Genoa، برنامج المحاسبة والمخازن للشركات العراقية. وننصح بمراجعة الفاتورة ومطابقتها مع الأصل قبل اعتمادها.',
        keyFacts: [
          { label: 'ماذا تفعل', value: 'تضيف الفاتورة مباشرة من صورتها' },
          { label: 'تعمل بـ', value: 'الذكاء الاصطناعي' },
          { label: 'بدلاً من', value: 'إدخال بيانات الفاتورة يدوياً' },
          { label: 'ضمن برنامج', value: 'Genoa للشركات' },
        ],
        sections: [
          {
            heading: 'ما هي ميزة إضافة فاتورة من صورة؟',
            body: [
              'هي ميزة في برنامج Genoa تضيف الفاتورة مباشرة من صورتها. يقدّم المستخدم صورة الفاتورة، فيقرأها الذكاء الاصطناعي ويضيف الفاتورة منها إلى البرنامج.',
              'والغاية منها أن لا يضطر المستخدم إلى كتابة بيانات الفاتورة يدوياً من الورقة.',
            ],
          },
          {
            heading: 'لماذا تُدخَل الفاتورة من صورتها بدلاً من كتابتها؟',
            body: [
              'إدخال الفواتير يدوياً يأخذ وقتاً، خصوصاً حين تكثر الفواتير أو تطول قوائم المواد فيها.',
              'والنقل اليدوي من الورقة إلى البرنامج من أكثر المواضع التي يقع فيها الخطأ، مثل رقم ناقص أو كمية في غير موضعها. وقراءة الفاتورة من صورتها تختصر هذا العمل.',
            ],
          },
          {
            heading: 'كيف تُضاف الفاتورة من صورة في Genoa؟',
            body: ['الخطوات من جهة المستخدم بسيطة:'],
            bullets: [
              'يقدّم المستخدم صورة الفاتورة إلى برنامج Genoa.',
              'يقرأ الذكاء الاصطناعي الصورة ويضيف الفاتورة منها.',
              'يراجع المستخدم الفاتورة ويطابقها مع الأصل.',
            ],
          },
          {
            heading: 'هل تحتاج الفاتورة المضافة من صورة إلى مراجعة؟',
            body: [
              'نعم، ننصح بمراجعتها. قراءة الصور بالذكاء الاصطناعي قد تخطئ، خصوصاً إذا كانت الصورة غير واضحة أو الفاتورة مكتوبة بخط اليد.',
              'لذلك طابق المواد والكميات والمبالغ مع الفاتورة الأصلية قبل اعتمادها، كما تراجع أي فاتورة أُدخلت يدوياً.',
            ],
          },
          {
            heading: 'ماذا تسأل عن هذه الميزة في العرض التوضيحي؟',
            body: ['أحضر إلى العرض التوضيحي صوراً لفواتير حقيقية من عملك، بعد حجب ما لا تريد إظهاره، واطرح أسئلة مثل:'],
            bullets: [
              'ما أنواع الفواتير التي تُضاف من صورة: الشراء أم البيع أم كلاهما؟',
              'هل تُقرأ الفواتير المكتوبة بالعربية والإنكليزية؟',
              'ماذا يحدث إذا كانت الصورة غير واضحة أو الفاتورة بخط اليد؟',
              'كيف أراجع الفاتورة وأصحّحها قبل اعتمادها؟',
            ],
          },
        ],
        screenshotAlt:
          'صورة توضيحية مؤقتة لشاشة إضافة فاتورة من صورة في Genoa — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية',
        screenshotCaption: 'صورة مؤقتة لشاشة إضافة فاتورة من صورة، ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.',
        faqs: [
          {
            q: 'هل يمكن إدخال الفاتورة في برنامج محاسبي من صورتها؟',
            a: [
              'نعم، في برنامج Genoa تُضاف الفاتورة مباشرة من صورتها. يقرأ الذكاء الاصطناعي صورة الفاتورة ويضيفها إلى البرنامج، بدلاً من إدخال بياناتها يدوياً.',
              'وننصح بمطابقة الفاتورة مع الأصل قبل اعتمادها.',
            ],
          },
          {
            q: 'هل إضافة الفاتورة من صورة تغني عن الإدخال اليدوي في Genoa؟',
            a: [
              'لا تلغيه. إضافة الفاتورة من صورة طريقة أسرع لإدخال الفاتورة، والإدخال اليدوي للفواتير في وحدة المبيعات والمشتريات يبقى كما هو.',
              'فيختار المستخدم الطريقة التي تناسب الفاتورة التي بين يديه.',
            ],
          },
        ],
      },
      en: {
        title: 'Add an Invoice from an Image with AI | Genoa',
        description:
          'In Genoa an invoice can be added directly from an image: AI reads the picture of the invoice and adds it to the software, instead of typing it in line by line.',
        h1: 'Invoice from image in Genoa: add an invoice from a picture with AI',
        navLabel: 'Invoice from image',
        cardSummary: 'Add an invoice directly from an image of it with AI, instead of typing it in.',
        answer:
          'Invoice from image is an AI-powered feature in Genoa: the user provides an image of an invoice, and the software reads it and adds the invoice from it directly, instead of the details being typed in by hand. It is part of Genoa, the accounting and inventory software for Iraqi companies. We recommend checking the invoice against the original before approving it.',
        keyFacts: [
          { label: 'What it does', value: 'Adds an invoice directly from an image of it' },
          { label: 'Powered by', value: 'Artificial intelligence' },
          { label: 'Instead of', value: 'Typing the invoice details in by hand' },
          { label: 'Part of', value: 'Genoa for companies' },
        ],
        sections: [
          {
            heading: 'What is invoice from image?',
            body: [
              'It is a feature in Genoa that adds an invoice directly from an image of it. The user provides a picture of the invoice, and AI reads it and adds the invoice to the software.',
              'The aim is that the user does not have to type the invoice details in by hand from the paper.',
            ],
          },
          {
            heading: 'Why add an invoice from an image instead of typing it?',
            body: [
              'Entering invoices by hand takes time, especially when there are many invoices or long lists of items on them.',
              'Copying from paper into software is also where mistakes tend to happen, such as a missing digit or a quantity on the wrong line. Reading the invoice from its image shortens that work.',
            ],
          },
          {
            heading: 'How is an invoice added from an image in Genoa?',
            body: ['From the user\'s side the steps are simple:'],
            bullets: [
              'The user gives Genoa an image of the invoice.',
              'AI reads the image and adds the invoice from it.',
              'The user reviews the invoice and checks it against the original.',
            ],
          },
          {
            heading: 'Does an invoice added from an image need checking?',
            body: [
              'Yes, we recommend checking it. AI can misread an image, especially when the picture is unclear or the invoice is handwritten.',
              'So check the items, quantities and amounts against the original invoice before approving it, just as you would review an invoice entered by hand.',
            ],
          },
          {
            heading: 'What should you ask about this feature in a demo?',
            body: ['Bring pictures of real invoices from your business to the demo, with anything you prefer not to show covered, and ask questions such as:'],
            bullets: [
              'Which invoices can be added from an image: purchase, sales or both?',
              'Are invoices written in Arabic and in English both read?',
              'What happens when the picture is unclear or the invoice is handwritten?',
              'How do I review and correct the invoice before approving it?',
            ],
          },
        ],
        screenshotAlt:
          'Placeholder illustration of the invoice from image screen in Genoa, to be replaced with a real screenshot using test data',
        screenshotCaption:
          'Placeholder image of the invoice from image screen. It will be replaced with a real screenshot using test data.',
        faqs: [
          {
            q: 'Can accounting software enter an invoice from a picture of it?',
            a: [
              'Yes: in Genoa an invoice can be added directly from an image of it. AI reads the picture of the invoice and adds it to the software, instead of the details being typed in by hand.',
              'We recommend checking the invoice against the original before approving it.',
            ],
          },
          {
            q: 'Does invoice from image replace manual entry in Genoa?',
            a: [
              'It does not remove it. Invoice from image is a faster way to enter an invoice, and entering invoices by hand in sales and purchasing stays as it is.',
              'The user picks whichever way suits the invoice in front of them.',
            ],
          },
        ],
      },
    },
  },
];
