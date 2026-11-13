import type { Product } from './types';

/**
 * Genoa Gov: government accounting software for Iraqi government accounting offices.
 * Arabic first, then English. Plain text only.
 * Inferences beyond CONTENT-GUIDE.md section 1 are listed in notes/claims-government.md.
 */
export const government: Product = {
  id: 'government',
  brand: 'Genoa Gov',

  overview: {
    ar: {
      title: "نظام محاسبي حكومي للدوائر العراقية | Genoa Gov",
      description:
        "Genoa Gov نظام محاسبي حكومي (برنامج محاسبة حكومية) لأقسام الحسابات في الدوائر العراقية: مصادقة متعددة المستخدمين، سجل تعديلات، تخصيصات، صكوك، وغلق شهري وسنوي.",
      h1: "Genoa Gov: نظام محاسبي حكومي للدوائر العراقية",
      productName: "Genoa Gov",
      answer:
        "Genoa Gov نظام محاسبي حكومي، أي برنامج محاسبة حكومية، لأقسام الحسابات في الدوائر الحكومية العراقية. يضم مستندات القبض والقيد ومستندات الصرف (سندات الصرف)، مع سير عمل للتدقيق والمصادقة يشترك فيه أكثر من مستخدم، وتعديل المستندات المرحّلة مع سجل تعديلات كامل، والموازنة والتحقق من كفاية التخصيص، والصكوك، والغلق الشهري وغلق السنة المالية، ومكتبة للتشريعات. وتعمل كل دائرة في Genoa Gov بقاعدة بيانات منفصلة خاصة بها.",
      whatIs: {
        heading: "ما هو Genoa Gov؟",
        body: [
          "Genoa Gov برنامج محاسبي مخصص للمحاسبة الحكومية في العراق. صُمّم لمكاتب المحاسبة الحكومية، أي أقسام الحسابات في الدوائر التي تُعدّ المستندات وتدققها وتصادق عليها، وتتابع الموازنة والتخصيصات، وتصرف المبالغ بالصكوك، وتغلق حساباتها كل شهر وفي نهاية السنة المالية.",
          "يجمع Genoa Gov هذه الأعمال في برنامج واحد: المستندات وسلسلة المصادقات، وتعديل المستندات المرحّلة مع سجل تعديلات كامل، والموازنة والتحقق من كفاية التخصيص، والصكوك، والغلق الشهري وغلق السنة المالية، ومكتبة التشريعات. ولكل دائرة قاعدة بيانات منفصلة.",
          "Genoa Gov منتج منفصل عن Genoa، البرنامج المخصص للشركات. فـ Genoa Gov مبني على طبيعة العمل المحاسبي الحكومي، من سلسلة المصادقات إلى التخصيصات والصكوك والغلق.",
        ],
      },
      whoFor: {
        heading: "لمن صُمّم Genoa Gov؟",
        body: [
          "صُمّم Genoa Gov لمكاتب المحاسبة في الدوائر الحكومية العراقية، ولكل من يشارك في دورة المستند داخلها: من إعداده إلى تدقيقه والمصادقة عليه وصرفه، ثم غلق الفترة.",
        ],
        bullets: [
          "أقسام الحسابات في دوائر الوزارات وتشكيلاتها",
          "الدوائر التي تُعدّ مستندات الصرف وتصرف المبالغ بالصكوك",
          "الموظفون المسؤولون عن تدقيق المستندات والمصادقة عليها",
          "مديرو الحسابات والمسؤولون الماليون الذين يتابعون الموازنة والتخصيصات",
          "الدوائر التي تحتاج إلى سجل واضح لكل تعديل على المستندات المرحّلة",
        ],
      },
      modulesHeading: "وحدات Genoa Gov",
      modulesIntro:
        "يتكون Genoa Gov من سبع وحدات تغطي دورة العمل المحاسبي في الدائرة الحكومية. لكل وحدة صفحة تشرح ما تقوم به وكيف ترتبط ببقية البرنامج.",
      sections: [
        {
          heading: "كيف تترابط وحدات Genoa Gov من المستند إلى الغلق؟",
          body: [
            "تبدأ عملية الصرف في الدائرة الحكومية عادةً بمستند صرف يُعدّه قسم الحسابات. يمر المستند بالتدقيق والمصادقة من أكثر من مستخدم، ويُتحقق من كفاية التخصيص في الموازنة، ثم يُصرف المبلغ بصك. وفي نهاية الشهر يُغلق الشهر، وفي نهاية السنة تُغلق السنة المالية.",
            "إذا ظهر خطأ في مستند بعد ترحيله، يتيح Genoa Gov تعديله، ويُحفظ التعديل في سجل تعديلات كامل. وتبقى مكتبة التشريعات مرجعاً للقوانين والأنظمة والتعليمات والتعاميم طوال هذه الدورة، وكل ذلك ضمن قاعدة البيانات المنفصلة لكل دائرة.",
          ],
          bullets: [
            "المستند: مستند صرف أو وصل قبض أو مستند قيد",
            "التدقيق والمصادقة: سير عمل يشترك فيه أكثر من مستخدم",
            "الموازنة: التحقق من كفاية التخصيص قبل الصرف",
            "الصكوك: صرف المبالغ المصادق عليها",
            "الغلق: الغلق الشهري وغلق السنة المالية",
          ],
        },
        {
          heading: "كيف يدعم Genoa Gov المساءلة والتدقيق؟",
          body: [
            "تخضع حسابات الدوائر الحكومية في العراق للتدقيق الداخلي ولرقابة ديوان الرقابة المالية الاتحادي. لذلك يحتاج قسم الحسابات إلى أن يكون لكل مستند ولكل تعديل أثر واضح يمكن الرجوع إليه.",
            "في Genoa Gov يشترك أكثر من مستخدم في تدقيق المستند والمصادقة عليه، فلا يعتمد المستند على موظف واحد. وكل تعديل على مستند مرحّل يُحفظ في سجل تعديلات كامل، بدل أن يحل الرقم الجديد محل القديم دون أثر.",
            "لا يغني Genoa Gov عن التدقيق والرقابة، لكنه يحفظ أثر العمل المحاسبي بطريقة منظمة يمكن الرجوع إليها.",
          ],
        },
        {
          heading: "كيف يمكن الاطلاع على Genoa Gov؟",
          body: [
            "يمكن حجز عرض توضيحي لبرنامج Genoa Gov عن طريق صفحة التواصل أو عبر واتساب، ويمكن خلاله مناقشة طريقة عمل قسم الحسابات في دائرتك.",
            "أسعار Genoa Gov غير منشورة على الموقع؛ للحصول على عرض سعر تواصل مع فريق Genoa.",
          ],
        },
      ],
      keyFacts: [
        { label: "نوع البرنامج", value: "برنامج محاسبة حكومية" },
        { label: "مخصص لـ", value: "أقسام الحسابات في الدوائر الحكومية العراقية" },
        {
          label: "الوحدات",
          value:
            "المستندات والمصادقة، تعديل المستندات المرحّلة، الموازنة والتخصيصات، الصكوك، الغلق الشهري والسنوي، مكتبة التشريعات",
        },
        { label: "بيانات الدوائر", value: "قاعدة بيانات منفصلة لكل دائرة" },
        { label: "للشركات", value: "برنامج Genoa (منتج منفصل)" },
      ],
      screenshotAlt: "صورة توضيحية مؤقتة لواجهة برنامج Genoa Gov",
      screenshotCaption:
        "صورة توضيحية مؤقتة — ستُستبدل بلقطة شاشة حقيقية من Genoa Gov ببيانات تجريبية.",
      faqTeaserHeading: "أسئلة شائعة عن Genoa Gov",
    },
    en: {
      title: "Government Accounting Software for Iraq | Genoa Gov",
      description:
        "Genoa Gov is accounting software for Iraqi government departments: multi-user voucher approval, audit trail, allocation checks, cheques and closing.",
      h1: "Genoa Gov: accounting software for Iraqi government departments",
      productName: "Genoa Gov",
      answer:
        "Genoa Gov is government accounting software for the accounts sections of Iraqi government departments. It covers payment, receipt and journal vouchers with a multi-user audit and approval workflow, amendment of posted vouchers with a full audit trail, budgets with allocation checks before spending, cheques, month-end and year-end closing, and a legislation library. Each office in Genoa Gov works in its own separate database.",
      whatIs: {
        heading: "What is Genoa Gov?",
        body: [
          "Genoa Gov is accounting software built for government accounting in Iraq. It is designed for government accounting offices: the accounts sections that prepare, audit and approve vouchers, keep track of the budget and allocations, pay by cheque, and close their books each month and at the end of the fiscal year.",
          "Genoa Gov brings this work together in one system: vouchers and the approval workflow, amendment of posted vouchers with a full audit trail, budgets and allocation checks, cheques, month and year closing, and a legislation library. Every office has its own separate database.",
          "Genoa Gov is a separate product from Genoa, which is built for companies. Genoa Gov is shaped around how government accounts work, from the approval chain to allocations, cheques and closing.",
        ],
      },
      whoFor: {
        heading: "Who is Genoa Gov for?",
        body: [
          "Genoa Gov is built for the accounting offices of Iraqi government departments, and for everyone who takes part in a voucher's life there: preparing it, auditing and approving it, paying it, and then closing the period.",
        ],
        bullets: [
          "Accounts sections in ministry departments and their formations",
          "Offices that prepare payment vouchers and pay by cheque",
          "Staff responsible for auditing and approving vouchers",
          "Heads of accounts and finance managers who follow the budget and allocations",
          "Departments that need a clear record of every amendment to a posted voucher",
        ],
      },
      modulesHeading: "Genoa Gov modules",
      modulesIntro:
        "Genoa Gov is made up of seven modules that together cover the accounting cycle of a government department. Each module has its own page explaining what it does and how it connects to the rest of the system.",
      sections: [
        {
          heading: "How do the Genoa Gov modules fit together, from voucher to closing?",
          body: [
            "In a government department, a payment usually starts with a payment voucher prepared by the accounts section. The voucher is audited and approved by more than one user, the allocation is checked against the budget, and the amount is paid by cheque. At the end of each month the month is closed, and at the end of the year the fiscal year is closed.",
            "If an error turns up in a voucher after it has been posted, Genoa Gov allows the voucher to be amended, and the amendment is kept in a full audit trail. Throughout this cycle the legislation library is there as a reference for laws, regulations, instructions and circulars, and all of it happens inside each office's own database.",
          ],
          bullets: [
            "Voucher: a payment voucher, receipt voucher or journal voucher",
            "Audit and approval: a workflow involving more than one user",
            "Budget: a check that the allocation covers the amount before spending",
            "Cheques: payment of approved amounts",
            "Closing: month-end and fiscal year-end closing",
          ],
        },
        {
          heading: "How does Genoa Gov support accountability and audit?",
          body: [
            "The accounts of Iraqi government departments are subject to internal audit and to oversight by the Federal Board of Supreme Audit. An accounts section therefore needs every voucher and every amendment to leave a clear record that can be checked later.",
            "In Genoa Gov, more than one user takes part in auditing and approving a voucher, so a voucher does not rest on a single member of staff. Every amendment to a posted voucher is kept in a full audit trail, rather than a new figure quietly replacing the old one.",
            "Genoa Gov does not replace audit or oversight. It keeps a record of the accounting work in an orderly way that can be referred back to.",
          ],
        },
        {
          heading: "How can I see Genoa Gov?",
          body: [
            "You can book a demo of Genoa Gov through the contact page or on WhatsApp. The demo is also a chance to talk through how the accounts section in your department works.",
            "Genoa Gov prices are not published on the website. For a quote, contact the Genoa team.",
          ],
        },
      ],
      keyFacts: [
        { label: "Type", value: "Government accounting software" },
        { label: "Built for", value: "Accounts sections of Iraqi government departments" },
        {
          label: "Modules",
          value:
            "Vouchers and approval, voucher amendments, budgets and allocations, cheques, month and year closing, legislation library",
        },
        { label: "Office data", value: "A separate database for each office" },
        { label: "For companies", value: "Genoa (a separate product)" },
      ],
      screenshotAlt: "Placeholder illustration of the Genoa Gov interface",
      screenshotCaption:
        "Placeholder image — to be replaced with a real Genoa Gov screenshot using test data.",
      faqTeaserHeading: "Common questions about Genoa Gov",
    },
  },

  features: [
    // 1. Vouchers and the approval workflow
    {
      slug: 'vouchers-approval',
      icon: 'stamp',
      related: ['voucher-amendments', 'budgets', 'cheques'],
      content: {
        ar: {
          title: "مستندات الصرف (سندات الصرف) والمصادقة | Genoa Gov",
          description:
            "في Genoa Gov تمر مستندات الصرف والقبض والقيد بسير عمل للتدقيق والمصادقة يشترك فيه أكثر من مستخدم داخل قسم الحسابات في الدائرة الحكومية.",
          h1: "المستندات وسلسلة التدقيق والمصادقة في Genoa Gov",
          navLabel: "المستندات والمصادقة",
          cardSummary: "مستندات صرف وقبض وقيد يدققها ويصادق عليها أكثر من مستخدم.",
          answer:
            "المستندات في Genoa Gov هي مستندات الصرف (وتُسمّى أيضاً سندات الصرف) ووصولات القبض ومستندات القيد التي يُعدّها قسم الحسابات في الدائرة الحكومية العراقية. يمر كل مستند بسير عمل للتدقيق والمصادقة يشترك فيه أكثر من مستخدم. بذلك يمكن توزيع إعداد المستند وتدقيقه والمصادقة عليه بين موظفين مختلفين، بدل أن تكون كلها بيد شخص واحد.",
          keyFacts: [
            { label: "أنواع المستندات", value: "مستند صرف، وصل قبض، مستند قيد" },
            { label: "سير العمل", value: "تدقيق ومصادقة يشترك فيهما أكثر من مستخدم" },
            { label: "بعد الترحيل", value: "يُحفظ أي تعديل في سجل تعديلات كامل" },
            { label: "وحدات مرتبطة", value: "الموازنة والتخصيصات، الصكوك" },
          ],
          sections: [
            {
              heading: "ما هي المستندات التي يتعامل معها Genoa Gov؟",
              body: [
                "المستند هو الأساس الذي تقوم عليه كل عملية مالية في الدائرة الحكومية. ويتعامل Genoa Gov مع ثلاثة أنواع من المستندات المعروفة في المحاسبة الحكومية العراقية.",
              ],
              bullets: [
                "مستند الصرف: لكل مبلغ تدفعه الدائرة.",
                "وصل القبض (مستند القبض): لكل مبلغ تستلمه الدائرة.",
                "مستند القيد: للقيود التي لا يرافقها صرف أو قبض، مثل التسويات والتصحيحات.",
              ],
            },
            {
              heading: "كيف تعمل سلسلة التدقيق والمصادقة في Genoa Gov؟",
              body: [
                "سير العمل في Genoa Gov متعدد المستخدمين: يمر المستند بأكثر من مستخدم قبل المصادقة عليه. على سبيل المثال، قد يُعدّ المحاسب مستند الصرف، ثم يدققه المدقق، ثم يصادق عليه المسؤول المخوّل بالمصادقة.",
                "الأدوار المذكورة هنا مثال للتوضيح فقط. ويمكن مناقشة سلسلة المصادقات المعمول بها في دائرتك مع فريق Genoa خلال العرض التوضيحي.",
              ],
            },
            {
              heading: "لماذا تحتاج الدائرة الحكومية إلى مصادقة يشترك فيها أكثر من مستخدم؟",
              body: [
                "الفصل بين من يُعدّ المستند ومن يدققه ومن يصادق عليه من أساسيات الرقابة الداخلية في العمل المالي الحكومي. فحين يشترك أكثر من شخص في المستند، يقل احتمال أن يمر خطأ أو تجاوز دون أن يلاحظه أحد.",
                "يبني Genoa Gov هذا المبدأ في طريقة العمل نفسها، فتكون المصادقة جزءاً من البرنامج لا خطوة ورقية منفصلة عنه.",
              ],
            },
            {
              heading: "كيف ترتبط المستندات ببقية وحدات Genoa Gov؟",
              body: [
                "المستندات هي نقطة البداية لبقية العمل في Genoa Gov. فمستند الصرف يرتبط بالتحقق من كفاية التخصيص في الموازنة وبالصك الذي يُصرف به المبلغ. والمستند المرحّل الذي يحتاج إلى تصحيح يُعدَّل مع حفظ التعديل في سجل التعديلات، ثم تدخل المستندات في الغلق الشهري وغلق السنة المالية.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة المستندات والمصادقة في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة المستندات — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما الفرق بين مستند الصرف ووصل القبض ومستند القيد؟",
              a: [
                "مستند الصرف يوثّق مبلغاً تدفعه الدائرة، ووصل القبض يوثّق مبلغاً تستلمه، ومستند القيد يوثّق قيداً محاسبياً لا يرافقه صرف أو قبض نقدي، مثل التسويات.",
                "في Genoa Gov تمر هذه المستندات بسير عمل للتدقيق والمصادقة يشترك فيه أكثر من مستخدم.",
              ],
            },
            {
              q: "هل تكفي مصادقة موظف واحد على مستند الصرف؟",
              a: [
                "سير العمل في Genoa Gov مبني على مصادقة متعددة المستخدمين، أي أن المستند يمر بأكثر من مستخدم قبل المصادقة عليه.",
                "وهذا يخدم مبدأ الفصل بين الإعداد والتدقيق والمصادقة، وهو من أساسيات الرقابة الداخلية في الدوائر الحكومية.",
              ],
            },
          ],
        },
        en: {
          title: "Payment Vouchers and Approval Workflow | Genoa Gov",
          description:
            "In Genoa Gov, payment, receipt and journal vouchers go through an audit and approval workflow with more than one user in a department's accounts section.",
          h1: "Vouchers and the approval workflow in Genoa Gov",
          navLabel: "Vouchers and approval",
          cardSummary: "Payment, receipt and journal vouchers audited and approved by more than one user.",
          answer:
            "Vouchers in Genoa Gov are the payment vouchers, receipt vouchers and journal vouchers that the accounts section of an Iraqi government department prepares. Every voucher goes through an audit and approval workflow involving more than one user. This means preparing, auditing and approving a voucher can be split between different members of staff instead of resting with one person.",
          keyFacts: [
            { label: "Voucher types", value: "Payment voucher, receipt voucher, journal voucher" },
            { label: "Workflow", value: "Audit and approval by more than one user" },
            { label: "After posting", value: "Any amendment is kept in a full audit trail" },
            { label: "Related modules", value: "Budgets and allocations, cheques" },
          ],
          sections: [
            {
              heading: "Which vouchers does Genoa Gov handle?",
              body: [
                "The voucher is the basis of every financial transaction in a government department. Genoa Gov handles the three kinds of voucher used in Iraqi government accounting.",
              ],
              bullets: [
                "Payment voucher: for every amount the department pays out.",
                "Receipt voucher: for every amount the department receives.",
                "Journal voucher: for entries with no payment or receipt attached, such as adjustments and corrections.",
              ],
            },
            {
              heading: "How does the audit and approval chain work in Genoa Gov?",
              body: [
                "The workflow in Genoa Gov is multi-user: a voucher passes through more than one user before it is approved. For example, an accountant might prepare a payment voucher, an auditor might review it, and an authorised official might approve it.",
                "These roles are only an example. You can go through your own department's approval chain with the Genoa team during a demo.",
              ],
            },
            {
              heading: "Why should more than one person approve a voucher?",
              body: [
                "Separating the person who prepares a voucher from the people who audit and approve it is a basic principle of internal control in government finance. When several people handle a voucher, an error or irregularity is less likely to go unnoticed.",
                "Genoa Gov builds this principle into the way work is done, so approval is part of the system rather than a separate paper step.",
              ],
            },
            {
              heading: "How do vouchers connect to the rest of Genoa Gov?",
              body: [
                "Vouchers are the starting point for the rest of the work in Genoa Gov. A payment voucher is linked to the allocation check in the budget and to the cheque used to pay it. A posted voucher that needs correcting is amended with the change kept in the audit trail, and vouchers then feed into month-end and year-end closing.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the vouchers and approval screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the vouchers screen — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is the difference between a payment voucher, a receipt voucher and a journal voucher?",
              a: [
                "A payment voucher records money the department pays out, a receipt voucher records money it receives, and a journal voucher records an accounting entry with no cash payment or receipt, such as an adjustment.",
                "In Genoa Gov, these vouchers go through an audit and approval workflow involving more than one user.",
              ],
            },
            {
              q: "Is one person's approval enough for a payment voucher?",
              a: [
                "Genoa Gov is built around multi-user approval, which means a voucher passes through more than one user before it is approved.",
                "This supports separating preparation, audit and approval, a basic principle of internal control in government departments.",
              ],
            },
          ],
        },
      },
    },

    // 2. Amendment of posted vouchers with a full audit trail
    {
      slug: 'voucher-amendments',
      icon: 'history',
      related: ['vouchers-approval', 'period-closing', 'office-databases'],
      content: {
        ar: {
          title: "تعديل المستندات المرحّلة وسجل التعديلات | Genoa Gov",
          description:
            "يتيح Genoa Gov تعديل المستند بعد ترحيله ويحفظ كل تعديل في سجل تعديلات كامل، ليبقى لكل تصحيح أثر واضح أمام التدقيق الداخلي والرقابة.",
          h1: "تعديل المستندات المرحّلة مع سجل تعديلات كامل",
          navLabel: "تعديل المستندات",
          cardSummary: "تعديل المستند بعد ترحيله مع حفظ كل تعديل في سجل كامل.",
          answer:
            "يتيح Genoa Gov تعديل المستندات بعد ترحيلها، ويحفظ كل تعديل في سجل تعديلات كامل. بذلك يستطيع قسم الحسابات في الدائرة الحكومية تصحيح المستند المرحّل دون أن يضيع أثر التصحيح. ويبقى سجل التعديلات مرجعاً عند المراجعة الداخلية وعند تدقيق الحسابات.",
          keyFacts: [
            { label: "ما يمكن تعديله", value: "المستندات بعد ترحيلها" },
            { label: "التوثيق", value: "سجل تعديلات كامل لكل تعديل" },
            { label: "الفائدة", value: "أثر واضح لكل تصحيح عند المراجعة والتدقيق" },
          ],
          sections: [
            {
              heading: "لماذا يحتاج قسم الحسابات إلى تعديل مستند بعد ترحيله؟",
              body: [
                "الأخطاء جزء من أي عمل محاسبي. فقد يتبيّن بعد ترحيل المستند أن المبلغ أو الحساب أو البيان غير صحيح، أثناء المطابقة أو التدقيق أو عند إعداد الكشوفات.",
                "يتيح Genoa Gov تعديل المستند المرحّل نفسه مع حفظ التعديل في سجل كامل، حتى يصبح المستند صحيحاً ويبقى تاريخه واضحاً.",
              ],
            },
            {
              heading: "ماذا يُسجَّل عند تعديل مستند مرحّل في Genoa Gov؟",
              body: [
                "يحفظ Genoa Gov كل تعديل على المستند المرحّل في سجل تعديلات كامل. والغرض من هذا السجل أن يُظهر من أجرى التعديل، ومتى أجراه، وما الذي تغيّر في المستند.",
                "يمكن مشاهدة سجل التعديلات وطريقة عرضه خلال عرض توضيحي لبرنامج Genoa Gov.",
              ],
            },
            {
              heading: "كيف يخدم سجل التعديلات المساءلة والتدقيق؟",
              body: [
                "تخضع حسابات الدوائر الحكومية للتدقيق الداخلي ولرقابة ديوان الرقابة المالية الاتحادي، وكثيراً ما يسأل المدققون عن سبب تغيّر رقم أو مستند.",
                "مع سجل تعديلات كامل يكون لكل تغيير على مستند مرحّل أثر يمكن الرجوع إليه، بدل أن يحل الرقم الجديد محل القديم دون أن يبقى ما يدل عليه.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة سجل التعديلات في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة سجل التعديلات — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما هو سجل التدقيق في البرامج المحاسبية؟",
              a: [
                "سجل التدقيق (ويُسمى أيضاً سجل التعديلات) هو سجل يحفظ أثر التغييرات التي تُجرى على البيانات المحاسبية: ما الذي تغيّر، ومتى، ومن أجرى التغيير.",
                "في Genoa Gov يُحفظ كل تعديل على مستند مرحّل في سجل تعديلات كامل.",
              ],
            },
            {
              q: "هل يجب عكس القيد وإعادة إدخاله لتصحيح مستند مرحّل؟",
              a: [
                "ليس بالضرورة، فـ Genoa Gov يتيح تعديل المستند المرحّل مع حفظ التعديل في سجل تعديلات كامل.",
                "أما اختيار التصحيح بتعديل المستند أو بمستند قيد مستقل، فهو قرار يعود إلى قسم الحسابات وإلى التعليمات المعمول بها في الدائرة.",
              ],
            },
          ],
        },
        en: {
          title: "Amending Posted Vouchers with Audit Trail | Genoa Gov",
          description:
            "Genoa Gov lets the accounts section amend a voucher after posting and keeps every amendment in a full audit trail, so each correction leaves a clear record.",
          h1: "Amending posted vouchers with a full audit trail",
          navLabel: "Voucher amendments",
          cardSummary: "Amend a voucher after posting, with every change kept in a full audit trail.",
          answer:
            "Genoa Gov allows vouchers to be amended after they have been posted, and keeps every amendment in a full audit trail. The accounts section of a government department can therefore correct a posted voucher without losing the record of the correction. The audit trail remains a reference for internal review and for audits of the accounts.",
          keyFacts: [
            { label: "What can be amended", value: "Vouchers after posting" },
            { label: "Record", value: "A full audit trail of every amendment" },
            { label: "Benefit", value: "A clear record behind each correction during review and audit" },
          ],
          sections: [
            {
              heading: "Why would an accounts section need to amend a posted voucher?",
              body: [
                "Mistakes happen in any accounting work. After a voucher has been posted, it may turn out that the amount, the account or the description is wrong, whether during reconciliation, during an audit or while preparing statements.",
                "Genoa Gov allows the posted voucher itself to be amended, with the amendment kept in a full audit trail, so the voucher ends up correct and its history stays visible.",
              ],
            },
            {
              heading: "What does Genoa Gov record when a posted voucher is amended?",
              body: [
                "Genoa Gov keeps every amendment to a posted voucher in a full audit trail. The purpose of the audit trail is to show who made the amendment, when it was made, and what changed in the voucher.",
                "You can see the audit trail and how it is displayed during a demo of Genoa Gov.",
              ],
            },
            {
              heading: "How does the audit trail support accountability?",
              body: [
                "The accounts of government departments are subject to internal audit and to oversight by the Federal Board of Supreme Audit, and auditors often ask why a figure or a voucher has changed.",
                "With a full audit trail, every change to a posted voucher has a record that can be referred back to, rather than a new figure replacing the old one with nothing left to show for it.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the audit trail screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the audit trail screen — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is an audit trail in accounting software?",
              a: [
                "An audit trail is a record of the changes made to accounting data: what changed, when, and who made the change.",
                "In Genoa Gov, every amendment to a posted voucher is kept in a full audit trail.",
              ],
            },
            {
              q: "Do we have to reverse a posted voucher and re-enter it to correct it?",
              a: [
                "Not necessarily: Genoa Gov supports amending a posted voucher, and keeps the amendment in a full audit trail.",
                "Whether a particular correction should be made by amendment or by a separate journal voucher is a decision for the accounts section and the instructions it follows.",
              ],
            },
          ],
        },
      },
    },

    // 3. Budgets and budget checks
    {
      slug: 'budgets',
      icon: 'budget',
      related: ['vouchers-approval', 'cheques', 'period-closing'],
      content: {
        ar: {
          title: "الموازنة والتحقق من كفاية التخصيص | Genoa Gov",
          description:
            "يضم Genoa Gov موازنة الدائرة وتخصيصاتها والتحقق من كفاية التخصيص قبل الصرف، ليكون التخصيص جزءاً من عمل قسم الحسابات اليومي لا جدولاً منفصلاً.",
          h1: "الموازنة والتخصيصات في Genoa Gov",
          navLabel: "الموازنة والتخصيصات",
          cardSummary: "موازنة الدائرة وتخصيصاتها مع التحقق من كفاية التخصيص قبل الصرف.",
          answer:
            "الموازنة في Genoa Gov هي الوحدة الخاصة بموازنة الدائرة الحكومية وتخصيصاتها. ويتضمن Genoa Gov التحقق من الموازنة، أي التحقق من كفاية التخصيص قبل الصرف. بذلك يكون التخصيص جزءاً من العمل اليومي لقسم الحسابات، لا جدولاً منفصلاً يُراجَع بعد الصرف.",
          keyFacts: [
            { label: "ما تشمله", value: "الموازنة والتخصيصات" },
            { label: "التحقق", value: "كفاية التخصيص قبل الصرف" },
            { label: "وحدات مرتبطة", value: "المستندات والمصادقة، الصكوك" },
            { label: "النطاق", value: "موازنة كل دائرة ضمن قاعدة بياناتها المنفصلة" },
          ],
          sections: [
            {
              heading: "ما الفرق بين الموازنة والتخصيصات؟",
              body: [
                "الموازنة هي الإطار المالي السنوي الذي تعمل ضمنه الدائرة الحكومية. أما التخصيصات فهي المبالغ المرصودة للدائرة للصرف منها على أبواب الموازنة وبنودها.",
                "يتعامل قسم الحسابات مع التخصيصات يومياً، فكل مبلغ يُصرف يجب أن يكون له تخصيص يغطيه.",
              ],
            },
            {
              heading: "كيف يتحقق Genoa Gov من كفاية التخصيص قبل الصرف؟",
              body: [
                "يتضمن Genoa Gov التحقق من الموازنة، وهو التحقق من أن التخصيص يكفي للمبلغ المطلوب صرفه قبل أن يُصرف.",
                "ولأن التحقق جزء من Genoa Gov، فهو يجري في البرنامج نفسه الذي تُدار فيه المستندات والصكوك.",
              ],
            },
            {
              heading: "لماذا يُجرى التحقق من التخصيص قبل الصرف لا بعده؟",
              body: [
                "المبلغ الذي يُصرف دون تخصيص كافٍ يصعب تداركه بعد صرفه، وقد يتحول إلى ملاحظة في تقارير التدقيق.",
                "التحقق قبل الصرف يجعل كفاية التخصيص معروفة في الوقت الذي ما زال فيه القرار ممكناً.",
              ],
            },
            {
              heading: "كيف ترتبط الموازنة بالمستندات والصكوك والغلق؟",
              body: [
                "كل مستند صرف يُصرف من تخصيص، لذلك ترتبط الموازنة في Genoa Gov بمستندات الصرف وسلسلة المصادقة عليها، وبالصكوك التي تُصرف بها المبالغ. وتبقى الموازنة والتخصيصات حاضرة حتى الغلق الشهري وغلق السنة المالية.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة الموازنة والتخصيصات في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة الموازنة — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما هو التخصيص في المحاسبة الحكومية العراقية؟",
              a: [
                "التخصيص هو المبلغ المرصود للدائرة الحكومية للصرف منه على باب أو بند معيّن من أبواب الموازنة.",
                "في Genoa Gov تُتابع الموازنة والتخصيصات ضمن البرنامج، مع التحقق من كفاية التخصيص قبل الصرف.",
              ],
            },
            {
              q: "هل يتم التحقق من كفاية التخصيص يدوياً أم داخل البرنامج؟",
              a: [
                "التحقق من كفاية التخصيص جزء من Genoa Gov نفسه، ضمن وحدة الموازنة.",
                "ويمكن مشاهدة طريقة التحقق خلال عرض توضيحي.",
              ],
            },
          ],
        },
        en: {
          title: "Budgets and Allocation Checks | Genoa Gov",
          description:
            "Genoa Gov holds a department's budget and allocations and checks that an allocation is sufficient before spending, as part of the accounts section's daily work.",
          h1: "Budgets and allocations in Genoa Gov",
          navLabel: "Budgets and allocations",
          cardSummary: "The department's budget and allocations, with a check that the allocation covers spending.",
          answer:
            "Budgets in Genoa Gov is the module for a government department's budget and allocations. Genoa Gov includes budget checks, meaning it checks that the allocation is sufficient before money is spent. The allocation becomes part of the accounts section's daily work, rather than a separate spreadsheet reviewed after the money has gone.",
          keyFacts: [
            { label: "Covers", value: "Budget and allocations" },
            { label: "Check", value: "Allocation sufficiency before spending" },
            { label: "Related modules", value: "Vouchers and approval, cheques" },
            { label: "Scope", value: "Each office's budget in its own separate database" },
          ],
          sections: [
            {
              heading: "What is the difference between the budget and allocations?",
              body: [
                "The budget is the annual financial framework a government department works within. Allocations are the amounts set aside for the department to spend under the budget's chapters and items.",
                "An accounts section works with allocations every day, because every amount spent needs an allocation to cover it.",
              ],
            },
            {
              heading: "How does Genoa Gov check allocations before spending?",
              body: [
                "Genoa Gov includes budget checks: it checks that the allocation is enough to cover the amount to be spent before the money is paid out.",
                "Because the check is part of Genoa Gov, it takes place in the same system where vouchers and cheques are handled.",
              ],
            },
            {
              heading: "Why check the allocation before spending, not after?",
              body: [
                "Money spent without a sufficient allocation is hard to put right after the fact, and it can end up as a finding in an audit report.",
                "Checking first means the accounts section knows whether the allocation covers the payment while a decision can still be made.",
              ],
            },
            {
              heading: "How do budgets connect to vouchers, cheques and closing?",
              body: [
                "Every payment voucher draws on an allocation, so the budget in Genoa Gov is linked to payment vouchers and their approval, and to the cheques used to make payments. The budget and allocations remain part of the picture through month-end and year-end closing.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the budget and allocations screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the budget screen — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is an allocation in Iraqi government accounting?",
              a: [
                "An allocation is the amount set aside for a government department to spend under a specific chapter or item of the budget.",
                "In Genoa Gov, the budget and allocations are kept in the system, with a check that the allocation is sufficient before spending.",
              ],
            },
            {
              q: "Is the allocation check done by hand or inside the software?",
              a: [
                "The allocation check is built into Genoa Gov, as part of the budgets module.",
                "You can see how the check works during a demo.",
              ],
            },
          ],
        },
      },
    },

    // 4. Cheques
    {
      slug: 'cheques',
      icon: 'cheque',
      related: ['vouchers-approval', 'budgets', 'period-closing'],
      content: {
        ar: {
          title: "إدارة الصكوك للدوائر الحكومية العراقية | Genoa Gov",
          description:
            "الصكوك في Genoa Gov وحدة ضمن البرنامج نفسه الذي تُعدّ فيه مستندات الصرف ويُتحقق فيه من التخصيصات، بدل متابعة الصكوك في سجل منفصل.",
          h1: "الصكوك في Genoa Gov",
          navLabel: "إدارة الصكوك",
          cardSummary: "الصكوك في البرنامج نفسه مع المستندات والموازنة.",
          answer:
            "الصكوك في Genoa Gov هي الوحدة التي يتعامل فيها قسم الحسابات في الدائرة الحكومية مع الصكوك (الشيكات). ولأنها جزء من Genoa Gov، تُدار الصكوك في النظام نفسه الذي تمر فيه مستندات الصرف بالتدقيق والمصادقة ويُتحقق فيه من كفاية التخصيص.",
          keyFacts: [
            { label: "الوحدة", value: "الصكوك" },
            { label: "المستخدمون", value: "قسم الحسابات في الدائرة الحكومية" },
            { label: "وحدات مرتبطة", value: "المستندات والمصادقة، الموازنة، الغلق الشهري والسنوي" },
          ],
          sections: [
            {
              heading: "ما دور الصكوك في المحاسبة الحكومية؟",
              body: [
                "تُصرف كثير من مبالغ الدوائر الحكومية العراقية بصكوك. والصك هو الخطوة التي يخرج بها المبلغ فعلاً من حساب الدائرة، بعد إعداد مستند الصرف وتدقيقه والمصادقة عليه.",
                "لذلك تحتاج أقسام الحسابات إلى أن تكون الصكوك واضحة ومرتبطة بالمستندات التي صدرت من أجلها.",
              ],
            },
            {
              heading: "لماذا تكون الصكوك في البرنامج نفسه مع المستندات والموازنة؟",
              body: [
                "حين تُتابع الصكوك في برنامج منفصل أو في سجل ورقي، يصبح الربط بين الصك ومستند الصرف والتخصيص عملاً يدوياً.",
                "في Genoa Gov الصكوك جزء من البرنامج نفسه، وهذا يسهّل الرجوع من الصك إلى مستند الصرف الذي يخصّه وإلى التخصيص الذي صُرف منه.",
              ],
            },
            {
              heading: "كيف ترتبط الصكوك ببقية وحدات Genoa Gov؟",
              body: ["ترتبط الصكوك في Genoa Gov بثلاث وحدات أخرى:"],
              bullets: [
                "المستندات والمصادقة: الصك يأتي بعد مستند الصرف وسلسلة المصادقة عليه.",
                "الموازنة والتخصيصات: المبلغ المصروف بالصك يقع ضمن تخصيص.",
                "الغلق الشهري والسنوي: الصكوك جزء من حسابات الفترة التي تُغلق.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة الصكوك في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة الصكوك — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "هل نحتاج إلى برنامج منفصل لمتابعة الصكوك؟",
              a: [
                "لا، فالصكوك وحدة من وحدات Genoa Gov، وتُدار في البرنامج نفسه الذي تُعدّ فيه مستندات الصرف وتُتابع فيه الموازنة.",
              ],
            },
            {
              q: "هل يطبع Genoa Gov الصكوك؟",
              a: [
                "طباعة الصكوك ليست من التفاصيل المنشورة على هذا الموقع.",
                "يمكن لفريق Genoa أن يوضح لك خلال عرض توضيحي كيف تُعدّ الصكوك وتُسجَّل في Genoa Gov.",
              ],
            },
          ],
        },
        en: {
          title: "Cheque Management for Iraqi Departments | Genoa Gov",
          description:
            "Cheques in Genoa Gov are a module of the same system used to prepare payment vouchers and check allocations, instead of a separate cheque register.",
          h1: "Cheques in Genoa Gov",
          navLabel: "Cheque handling",
          cardSummary: "Cheques handled in the same system as vouchers and the budget.",
          answer:
            "Cheques in Genoa Gov is the module where the accounts section of a government department handles cheques. Because it is part of Genoa Gov, cheques are handled in the same system where payment vouchers go through audit and approval and where allocations are checked.",
          keyFacts: [
            { label: "Module", value: "Cheques" },
            { label: "Used by", value: "The accounts section of a government department" },
            { label: "Related modules", value: "Vouchers and approval, budgets, month and year closing" },
          ],
          sections: [
            {
              heading: "What role do cheques play in government accounting?",
              body: [
                "Many payments by Iraqi government departments are made by cheque. The cheque is the step where money actually leaves the department's account, after the payment voucher has been prepared, audited and approved.",
                "Accounts sections therefore need cheques to be clear and tied to the vouchers they were issued for.",
              ],
            },
            {
              heading: "Why keep cheques in the same system as vouchers and the budget?",
              body: [
                "When cheques are tracked in separate software or a paper register, matching a cheque to its payment voucher and allocation becomes manual work.",
                "In Genoa Gov, cheques are part of the same system, which makes it easier to trace a cheque back to its payment voucher and to the allocation it was paid from.",
              ],
            },
            {
              heading: "How do cheques connect to the rest of Genoa Gov?",
              body: ["Cheques in Genoa Gov connect to three other modules:"],
              bullets: [
                "Vouchers and approval: the cheque follows the payment voucher and its approval.",
                "Budgets and allocations: the amount paid by cheque falls within an allocation.",
                "Month and year closing: cheques are part of the accounts of the period being closed.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the cheques screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the cheques screen — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Do we need separate software to keep track of cheques?",
              a: [
                "No. Cheques are a module of Genoa Gov, so they are handled in the same system where payment vouchers are prepared and the budget is followed.",
              ],
            },
            {
              q: "Does Genoa Gov print cheques?",
              a: [
                "Cheque printing is not among the details published on this website.",
                "The Genoa team can show you during a demo how cheques are prepared and recorded in Genoa Gov.",
              ],
            },
          ],
        },
      },
    },

    // 5. Month closing and year closing
    {
      slug: 'period-closing',
      icon: 'calendar',
      related: ['voucher-amendments', 'budgets', 'office-databases'],
      content: {
        ar: {
          title: "الغلق الشهري وغلق السنة المالية | Genoa Gov",
          description:
            "يتضمن Genoa Gov الغلق الشهري وغلق السنة المالية، لينهي قسم الحسابات في الدائرة الحكومية كل شهر وكل سنة مالية بخطوة واضحة داخل البرنامج.",
          h1: "الغلق الشهري وغلق السنة المالية في Genoa Gov",
          navLabel: "الغلق الشهري والسنوي",
          cardSummary: "غلق كل شهر وغلق السنة المالية كخطوتين واضحتين في البرنامج.",
          answer:
            "يتضمن Genoa Gov الغلق الشهري وغلق السنة المالية لأقسام الحسابات في الدوائر الحكومية العراقية. الغلق الشهري ينهي أعمال الشهر المحاسبي، وغلق السنة المالية ينهي أعمال السنة. ويجري الغلق داخل Genoa Gov نفسه، ضمن قاعدة البيانات الخاصة بكل دائرة.",
          keyFacts: [
            { label: "أنواع الغلق", value: "الغلق الشهري، غلق السنة المالية" },
            { label: "النطاق", value: "كل دائرة ضمن قاعدة بياناتها المنفصلة" },
            { label: "وحدات مرتبطة", value: "تعديل المستندات، الموازنة، بيانات كل دائرة" },
          ],
          sections: [
            {
              heading: "ما هو الغلق الشهري في المحاسبة الحكومية؟",
              body: [
                "الغلق الشهري هو الخطوة التي ينهي بها قسم الحسابات أعمال الشهر. وقبله يتأكد القسم عادةً من أن مستندات الشهر قد دُققت وصودق عليها ورُحّلت، وأن الصكوك والتصحيحات قد أُنجزت.",
                "في Genoa Gov يكون الغلق الشهري جزءاً من البرنامج، فينتهي كل شهر بخطوة محددة بدل أن يبقى مفتوحاً دون حدّ واضح.",
              ],
            },
            {
              heading: "ما هو غلق السنة المالية؟",
              body: [
                "غلق السنة المالية هو الخطوة التي تنهي بها الدائرة أعمال سنتها المالية، بعد إكمال أعمال أشهرها وإعداد حساباتها الختامية.",
                "يتضمن Genoa Gov غلق السنة المالية إلى جانب الغلق الشهري، فيكون للدائرة في البرنامج نفسه غلق لكل شهر وغلق للسنة.",
              ],
            },
            {
              heading: "ماذا يعني الغلق للفترة التي أُغلقت؟",
              body: [
                "الغرض من الغلق أن تستقر أرقام الفترة بعد إغلاقها، فلا تُضاف إليها مستندات جديدة بعد الغلق.",
                "أما طريقة التعامل مع أي تصحيح يخص فترة مغلقة، فيمكن مناقشتها مع فريق Genoa خلال العرض التوضيحي.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة الغلق الشهري والسنوي في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة الغلق — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "لماذا يجب غلق كل شهر بدل الانتظار حتى نهاية السنة؟",
              a: [
                "الغلق الشهري المنتظم يساعد على إنجاز مراجعة كل شهر في وقتها، فلا تتراكم المراجعة والتصحيحات حتى نهاية السنة المالية.",
                "ويتضمن Genoa Gov الغلق الشهري إلى جانب غلق السنة المالية.",
              ],
            },
            {
              q: "ما الذي ينبغي إنجازه قبل غلق الشهر؟",
              a: [
                "قبل غلق الشهر ينبغي عادةً التأكد من أن مستندات الشهر قد دُققت وصودق عليها ورُحّلت، وأن التصحيحات المطلوبة قد أُجريت.",
                "هذه خطوات عامة في العمل المحاسبي الحكومي، وقد تختلف تفاصيلها بحسب تعليمات كل دائرة.",
              ],
            },
          ],
        },
        en: {
          title: "Month-End and Year-End Closing | Genoa Gov",
          description:
            "Genoa Gov includes month closing and fiscal year closing, so a government accounts section can finish each month and each year with a clear step in the system.",
          h1: "Month-end and year-end closing in Genoa Gov",
          navLabel: "Month and year closing",
          cardSummary: "Close each month and close the fiscal year as two clear steps in the system.",
          answer:
            "Genoa Gov includes month closing and year closing for the accounts sections of Iraqi government departments. Month closing completes the accounting work for a month, and year closing completes the work for the fiscal year. Closing takes place inside Genoa Gov itself, within each office's own database.",
          keyFacts: [
            { label: "Closing types", value: "Month closing, fiscal year closing" },
            { label: "Scope", value: "Each office within its own separate database" },
            { label: "Related modules", value: "Voucher amendments, budgets, office databases" },
          ],
          sections: [
            {
              heading: "What is month-end closing in government accounting?",
              body: [
                "Month-end closing is the step where the accounts section finishes the month's work. Before it, the section usually makes sure that the month's vouchers have been audited, approved and posted, and that cheques and corrections have been dealt with.",
                "In Genoa Gov, month closing is part of the system, so each month ends with a defined step instead of being left open with no clear end.",
              ],
            },
            {
              heading: "What is year-end closing?",
              body: [
                "Year closing is the step where a department finishes the work of its fiscal year, after completing the work of each month and preparing its final accounts.",
                "Genoa Gov includes year closing alongside month closing, so the department has a closing for each month and a closing for the year in the same system.",
              ],
            },
            {
              heading: "What does closing mean for a period that has been closed?",
              body: [
                "The purpose of closing is that a period's figures settle once it is closed, so new vouchers are not added to it afterwards.",
                "How corrections relating to a closed period are handled is something you can discuss with the Genoa team during a demo.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the month and year closing screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the closing screen — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "Why close every month instead of waiting for the year end?",
              a: [
                "Closing regularly each month helps get each month reviewed on time, so checks and corrections do not pile up until the end of the fiscal year.",
                "Genoa Gov includes month closing as well as year closing.",
              ],
            },
            {
              q: "What should be done before closing a month?",
              a: [
                "Before closing a month, an accounts section usually checks that the month's vouchers have been audited, approved and posted, and that any needed corrections have been made.",
                "These are general steps in government accounting, and the details can vary with each department's instructions.",
              ],
            },
          ],
        },
      },
    },

    // 6. Legislation library
    {
      slug: 'legislation-library',
      icon: 'book',
      related: ['vouchers-approval', 'budgets', 'voucher-amendments'],
      content: {
        ar: {
          title: "مكتبة التشريعات للمحاسبة الحكومية | Genoa Gov",
          description:
            "مكتبة التشريعات في Genoa Gov مكان داخل البرنامج للقوانين والأنظمة والتعليمات والتعاميم التي يرجع إليها قسم الحسابات في عمله اليومي.",
          h1: "مكتبة التشريعات في Genoa Gov",
          navLabel: "مكتبة التشريعات",
          cardSummary: "القوانين والأنظمة والتعليمات والتعاميم في مكان واحد داخل البرنامج.",
          answer:
            "مكتبة التشريعات في Genoa Gov قسم داخل البرنامج مخصص للقوانين والأنظمة والتعليمات والتعاميم التي يرجع إليها قسم الحسابات في الدائرة الحكومية العراقية. ووجود المكتبة داخل Genoa Gov يجعل المرجع التشريعي قريباً من العمل المحاسبي نفسه، من إعداد المستندات إلى تدقيقها والمصادقة عليها.",
          keyFacts: [
            { label: "المحتوى", value: "القوانين والأنظمة والتعليمات والتعاميم" },
            { label: "المكان", value: "داخل Genoa Gov" },
            { label: "تفيد", value: "من يُعدّ المستندات ومن يدققها ويصادق عليها" },
          ],
          sections: [
            {
              heading: "لماذا تحتاج أقسام الحسابات الحكومية إلى مكتبة تشريعات؟",
              body: [
                "يقوم العمل المحاسبي الحكومي في العراق على القوانين والأنظمة والتعليمات، وتصدر التعاميم باستمرار لتوضيح إجراء أو تعديله.",
                "وحين تكون هذه الوثائق موزعة بين ملفات ورقية ومجموعات رسائل وحواسيب شخصية، يصعب على الموظف أن يجد النص الذي يحتاجه في الوقت الذي يحتاجه فيه.",
              ],
            },
            {
              heading: "ماذا تضم مكتبة التشريعات في Genoa Gov؟",
              body: [
                "مكتبة التشريعات مخصصة للقوانين والأنظمة والتعليمات والتعاميم التي يعمل بها قسم الحسابات.",
                "أما الوثائق المتوفرة في المكتبة لدائرتك وطريقة تحديثها، فيمكن التأكد منها مع فريق Genoa خلال العرض التوضيحي.",
              ],
              bullets: [
                "القوانين: الصادرة عن السلطة التشريعية.",
                "الأنظمة: الصادرة لتنفيذ القوانين.",
                "التعليمات: التي تصدرها الجهات المختصة لتطبيق القوانين والأنظمة.",
                "التعاميم: الكتب التي تبلّغ الدوائر بإجراء أو توضيح.",
              ],
            },
            {
              heading: "كيف تخدم مكتبة التشريعات التدقيق والمصادقة؟",
              body: [
                "عند تدقيق مستند أو المصادقة عليه، قد يحتاج الموظف إلى التأكد من النص الذي يستند إليه الصرف. ووجود مكتبة التشريعات داخل Genoa Gov يتيح الرجوع إلى هذه النصوص من البرنامج نفسه الذي يجري فيه التدقيق والمصادقة.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لشاشة مكتبة التشريعات في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة لشاشة مكتبة التشريعات — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية.",
          faqs: [
            {
              q: "ما الفرق بين القانون والنظام والتعليمات والتعميم؟",
              a: [
                "القانون يصدر عن السلطة التشريعية، والنظام يصدر لتنفيذ قانون، والتعليمات تصدرها الجهة المختصة لتطبيق القانون أو النظام، أما التعميم فكتاب يبلّغ الدوائر بإجراء أو توضيح.",
                "ومكتبة التشريعات في Genoa Gov مخصصة لهذه الأنواع الأربعة من الوثائق.",
              ],
            },
            {
              q: "من يستفيد من مكتبة التشريعات داخل الدائرة؟",
              a: [
                "يستفيد منها كل من يعمل على المستندات في قسم الحسابات: من يُعدّها ومن يدققها ومن يصادق عليها.",
                "فوجود المرجع التشريعي في البرنامج نفسه يقرّب النص من القرار المحاسبي.",
              ],
            },
          ],
        },
        en: {
          title: "Legislation Library for Government Accounts | Genoa Gov",
          description:
            "The legislation library in Genoa Gov is a place in the system for the laws, regulations, instructions and circulars an accounts section works with every day.",
          h1: "The legislation library in Genoa Gov",
          navLabel: "Legislation library",
          cardSummary: "Laws, regulations, instructions and circulars in one place inside the system.",
          answer:
            "The legislation library in Genoa Gov is a section of the system for the laws, regulations, instructions and circulars that the accounts section of an Iraqi government department relies on. Having the library inside Genoa Gov keeps the legal reference close to the accounting work itself, from preparing vouchers to auditing and approving them.",
          keyFacts: [
            { label: "Contents", value: "Laws, regulations, instructions and circulars" },
            { label: "Location", value: "Inside Genoa Gov" },
            { label: "Useful for", value: "Staff who prepare, audit and approve vouchers" },
          ],
          sections: [
            {
              heading: "Why does a government accounts section need a legislation library?",
              body: [
                "Government accounting in Iraq rests on laws, regulations and instructions, and circulars are issued regularly to clarify or change a procedure.",
                "When these documents are scattered across paper files, messaging groups and personal computers, it is hard for staff to find the text they need at the moment they need it.",
              ],
            },
            {
              heading: "What does the legislation library in Genoa Gov hold?",
              body: [
                "The legislation library is meant for the laws, regulations, instructions and circulars that the accounts section works with.",
                "Which documents are in the library for your department, and how it is kept up to date, is something to confirm with the Genoa team during a demo.",
              ],
              bullets: [
                "Laws: passed by the legislature.",
                "Regulations: issued to implement laws.",
                "Instructions: issued by the competent authority to apply laws and regulations.",
                "Circulars: letters informing departments of a procedure or a clarification.",
              ],
            },
            {
              heading: "How does the legislation library help with audit and approval?",
              body: [
                "When auditing or approving a voucher, staff may need to check the text that the payment is based on. Having the legislation library inside Genoa Gov means these texts can be consulted from the same system where audit and approval take place.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of the legislation library screen in Genoa Gov",
          screenshotCaption:
            "Placeholder image of the legislation library — to be replaced with a real screenshot using test data.",
          faqs: [
            {
              q: "What is the difference between a law, a regulation, instructions and a circular?",
              a: [
                "A law is passed by the legislature, a regulation is issued to implement a law, instructions are issued by the competent authority to apply a law or regulation, and a circular is a letter informing departments of a procedure or clarification.",
                "The legislation library in Genoa Gov is meant for these four kinds of document.",
              ],
            },
            {
              q: "Who in a department benefits from the legislation library?",
              a: [
                "It is useful for anyone working on vouchers in the accounts section: the people who prepare them, audit them and approve them.",
                "Having the legal reference in the same system brings the text closer to the accounting decision.",
              ],
            },
          ],
        },
      },
    },

    // 7. A separate database per office
    {
      slug: 'office-databases',
      icon: 'database',
      related: ['voucher-amendments', 'period-closing', 'vouchers-approval'],
      content: {
        ar: {
          title: "قاعدة بيانات منفصلة لكل دائرة | Genoa Gov",
          description:
            "يحفظ Genoa Gov بيانات كل دائرة في قاعدة بيانات منفصلة، فتبقى مستنداتها وتخصيصاتها وصكوكها وسجل تعديلاتها في قاعدة بياناتها لا في قاعدة مشتركة.",
          h1: "قاعدة بيانات منفصلة لكل دائرة في Genoa Gov",
          navLabel: "بيانات كل دائرة",
          cardSummary: "لكل دائرة قاعدة بيانات منفصلة خاصة بها.",
          answer:
            "في Genoa Gov تعمل كل دائرة في قاعدة بيانات منفصلة خاصة بها. فمستندات الدائرة وموازنتها وتخصيصاتها وصكوكها وسجل تعديلاتها وغلقها الشهري والسنوي تُحفظ في قاعدة بياناتها هي، لا في قاعدة بيانات مشتركة مع دوائر أخرى.",
          keyFacts: [
            { label: "التصميم", value: "قاعدة بيانات منفصلة لكل دائرة" },
            { label: "ما تضمه", value: "مستندات الدائرة وموازنتها وصكوكها وسجل تعديلاتها" },
            { label: "الغلق", value: "يجري لكل دائرة ضمن بياناتها" },
          ],
          sections: [
            {
              heading: "ماذا يعني أن لكل دائرة قاعدة بيانات منفصلة؟",
              body: [
                "يعني ذلك أن بيانات كل دائرة تستخدم Genoa Gov محفوظة في قاعدة بيانات خاصة بها. فما تُدخله الدائرة من مستندات وتخصيصات وصكوك يبقى في قاعدة بياناتها، ولا يختلط ببيانات دائرة أخرى.",
              ],
            },
            {
              heading: "لماذا يناسب الفصل بين قواعد البيانات العمل الحكومي؟",
              body: [
                "لكل دائرة حكومية موازنتها وتخصيصاتها وقسم حساباتها وغلقها الشهري والسنوي. والفصل بين قواعد البيانات يطابق هذا الواقع، فكل دائرة تعمل على حساباتها هي.",
                "ويعني ذلك أيضاً أن سجل التعديلات وسلسلة المصادقات في كل دائرة يخصان مستندات تلك الدائرة وحدها.",
              ],
            },
            {
              heading: "كيف يناسب ذلك الوزارات التي لديها عدة دوائر وتشكيلات؟",
              body: [
                "في الوزارة التي لديها عدة دوائر وتشكيلات، تعمل كل دائرة تستخدم Genoa Gov في قاعدة بياناتها المنفصلة.",
                "ولمناقشة طريقة تطبيق ذلك على هيكل وزارتك أو جهتك، يمكن حجز عرض توضيحي مع فريق Genoa.",
              ],
            },
          ],
          screenshotAlt: "صورة توضيحية مؤقتة لاختيار قاعدة بيانات الدائرة في Genoa Gov",
          screenshotCaption:
            "صورة توضيحية مؤقتة — ستُستبدل بلقطة شاشة حقيقية من Genoa Gov ببيانات تجريبية لدائرة افتراضية.",
          faqs: [
            {
              q: "هل يناسب Genoa Gov وزارة لديها عدة دوائر وتشكيلات؟",
              a: [
                "نعم، فـ Genoa Gov مبني على أن لكل دائرة قاعدة بيانات منفصلة، فتعمل كل دائرة أو تشكيل يستخدمه على بياناته الخاصة.",
                "ويمكن مناقشة طريقة تطبيق ذلك على هيكل وزارتك خلال عرض توضيحي.",
              ],
            },
            {
              q: "هل يؤثر غلق الشهر في دائرة على دائرة أخرى؟",
              a: [
                "لا، فلكل دائرة في Genoa Gov قاعدة بيانات منفصلة، والغلق الشهري يجري ضمن بيانات الدائرة التي تغلق شهرها.",
              ],
            },
          ],
        },
        en: {
          title: "A Separate Database for Each Office | Genoa Gov",
          description:
            "Genoa Gov keeps each office's data in its own separate database, so its vouchers, allocations, cheques and audit trail stay there rather than in a shared one.",
          h1: "A separate database for each office in Genoa Gov",
          navLabel: "Office databases",
          cardSummary: "Every office works in its own separate database.",
          answer:
            "In Genoa Gov, each office works in its own separate database. A department's vouchers, budget and allocations, cheques, audit trail, and month and year closing are kept in that department's own database, not in a database shared with other departments.",
          keyFacts: [
            { label: "Design", value: "A separate database for each office" },
            { label: "Contents", value: "The office's vouchers, budget, cheques and audit trail" },
            { label: "Closing", value: "Done for each office within its own data" },
          ],
          sections: [
            {
              heading: "What does a separate database for each office mean?",
              body: [
                "It means that the data of each office using Genoa Gov is kept in a database of its own. The vouchers, allocations and cheques an office enters stay in its own database and do not mix with another office's data.",
              ],
            },
            {
              heading: "Why do separate databases suit government work?",
              body: [
                "Every government department has its own budget, allocations, accounts section, and month and year closing. Separate databases match that reality: each office works on its own accounts.",
                "It also means that each office's audit trail and approval chain relate only to that office's own vouchers.",
              ],
            },
            {
              heading: "How does this work for a ministry with several departments and formations?",
              body: [
                "In a ministry with several departments and formations, each department that uses Genoa Gov works in its own separate database.",
                "To talk through how this applies to the structure of your ministry or organisation, you can book a demo with the Genoa team.",
              ],
            },
          ],
          screenshotAlt: "Placeholder illustration of choosing an office database in Genoa Gov",
          screenshotCaption:
            "Placeholder image — to be replaced with a real Genoa Gov screenshot using test data for a fictional office.",
          faqs: [
            {
              q: "Is Genoa Gov suitable for a ministry with several departments and formations?",
              a: [
                "Yes. Genoa Gov is built so that each office has its own separate database, which means every department or formation using it works on its own data.",
                "You can discuss how this would apply to your ministry's structure during a demo.",
              ],
            },
            {
              q: "Does closing a month in one office affect another office?",
              a: [
                "No. Each office in Genoa Gov has its own separate database, and month closing takes place within the data of the office that is closing its month.",
              ],
            },
          ],
        },
      },
    },
  ],

  faq: {
    ar: {
      title: "أسئلة شائعة عن برنامج المحاسبة الحكومية | Genoa Gov",
      description:
        "إجابات مباشرة عن Genoa Gov: المصادقة على مستندات الصرف، تعديل المستند المرحّل، التخصيصات، الصكوك، الغلق، السعر، وطريقة حجز عرض توضيحي.",
      h1: "الأسئلة الشائعة عن Genoa Gov",
      answer:
        "تجمع هذه الصفحة أسئلة يطرحها موظفو أقسام الحسابات في الدوائر الحكومية العراقية عن Genoa Gov، مع إجابات مباشرة. Genoa Gov برنامج محاسبة حكومية يضم المستندات وسلسلة المصادقات، وتعديل المستندات المرحّلة مع سجل تعديلات كامل، والموازنة والتحقق من كفاية التخصيص، والصكوك، والغلق الشهري والسنوي، ومكتبة التشريعات، مع قاعدة بيانات منفصلة لكل دائرة.",
      groups: [
        {
          heading: "عن Genoa Gov",
          faqs: [
            {
              q: "ما هو أفضل برنامج محاسبي للدوائر الحكومية العراقية؟",
              a: [
                "لا يوجد برنامج واحد يصح وصفه بالأفضل لكل دائرة؛ البرنامج المناسب هو الذي يغطي طريقة عمل قسم الحسابات في دائرتك. لذلك يُنصح قبل الاختيار بالتحقق من: سلسلة تدقيق ومصادقة يشترك فيها أكثر من مستخدم، وسجل كامل لأي تعديل على المستندات المرحّلة، والتحقق من كفاية التخصيص قبل الصرف، والتعامل مع الصكوك، والغلق الشهري وغلق السنة المالية، وفصل بيانات كل دائرة عن غيرها.",
                "Genoa Gov برنامج محاسبة حكومية يغطي هذه النقاط: مستندات بسير عمل للمصادقة متعدد المستخدمين، وتعديل المستندات المرحّلة مع سجل تعديلات كامل، والموازنة والتحقق من التخصيصات، والصكوك، والغلق الشهري والسنوي، ومكتبة للتشريعات، وقاعدة بيانات منفصلة لكل دائرة.",
                "والطريقة الأوضح للحكم هي مشاهدة البرنامج في عرض توضيحي على أمثلة من دورة العمل في دائرتك.",
              ],
            },
            {
              q: "ما الفرق بين Genoa Gov وبرنامج Genoa؟",
              a: [
                "Genoa Gov مخصص لأقسام الحسابات في الدوائر الحكومية العراقية، أما Genoa فهو برنامج منفصل مخصص للشركات.",
                "يركّز Genoa Gov على المستندات وسلسلة المصادقات، وتعديل المستندات المرحّلة مع سجل التعديلات، والموازنة والتخصيصات، والصكوك، والغلق، ومكتبة التشريعات. أما Genoa فيغطي المحاسبة والمخزون والمبيعات والمشتريات وذمم الزبائن والمجهزين.",
              ],
            },
            {
              q: "هل Genoa Gov مناسب لقسم الحسابات في دائرة تابعة لوزارة؟",
              a: [
                "نعم، صُمّم Genoa Gov لمكاتب المحاسبة الحكومية في العراق، ومنها أقسام الحسابات في دوائر الوزارات وتشكيلاتها.",
                "ولكل دائرة تستخدمه قاعدة بيانات منفصلة خاصة بها.",
              ],
            },
            {
              q: "هل بيانات كل دائرة منفصلة عن بيانات الدوائر الأخرى في Genoa Gov؟",
              a: [
                "نعم، لكل دائرة في Genoa Gov قاعدة بيانات منفصلة خاصة بها.",
                "فمستندات الدائرة وتخصيصاتها وصكوكها وسجل تعديلاتها تبقى في قاعدة بياناتها هي.",
              ],
            },
          ],
        },
        {
          heading: "المستندات والموازنة والصكوك والغلق",
          faqs: [
            {
              q: "كيف تتم المصادقة على مستند الصرف في Genoa Gov؟",
              a: [
                "في Genoa Gov يمر مستند الصرف بسير عمل للتدقيق والمصادقة يشترك فيه أكثر من مستخدم قبل المصادقة عليه.",
                "على سبيل المثال، قد يُعدّ المحاسب المستند ثم يدققه المدقق ثم يصادق عليه المسؤول المخوّل. هذه الأدوار مثال فقط، ويمكن مناقشة سلسلة المصادقات في دائرتك خلال عرض توضيحي.",
              ],
            },
            {
              q: "هل يمكن تعديل مستند بعد ترحيله؟ وماذا يُسجَّل عند التعديل؟",
              a: [
                "نعم، يتيح Genoa Gov تعديل المستند بعد ترحيله، ويحفظ كل تعديل في سجل تعديلات كامل.",
                "والغرض من سجل التعديلات أن يُظهر من أجرى التعديل، ومتى أجراه، وما الذي تغيّر، ليبقى لكل تصحيح أثر يمكن الرجوع إليه عند المراجعة والتدقيق.",
              ],
            },
            {
              q: "كيف أتحقق من كفاية التخصيص قبل الصرف؟",
              a: [
                "في Genoa Gov يجري التحقق من كفاية التخصيص قبل الصرف داخل البرنامج نفسه، ضمن وحدة الموازنة.",
                "فالموازنة والتخصيصات جزء من Genoa Gov، إلى جانب مستندات الصرف والصكوك.",
              ],
            },
            {
              q: "هل يدعم Genoa Gov إصدار الصكوك؟",
              a: [
                "نعم، الصكوك وحدة من وحدات Genoa Gov، فيتعامل قسم الحسابات مع الصكوك في البرنامج نفسه الذي تُعدّ فيه مستندات الصرف وتُتابع فيه التخصيصات.",
                "ويمكن مشاهدة طريقة إعداد الصكوك في Genoa Gov خلال عرض توضيحي.",
              ],
            },
            {
              q: "كيف يتم الغلق الشهري وغلق السنة المالية في Genoa Gov؟",
              a: [
                "يتضمن Genoa Gov الغلق الشهري وغلق السنة المالية كخطوتين ضمن البرنامج، يجريهما قسم الحسابات في كل دائرة ضمن قاعدة بياناتها.",
                "الغلق الشهري ينهي أعمال الشهر، وغلق السنة المالية ينهي أعمال السنة بعد إكمال أشهرها.",
              ],
            },
            {
              q: "ما هي مكتبة التشريعات في Genoa Gov؟ وهل تحتوي على القوانين والتعليمات؟",
              a: [
                "مكتبة التشريعات قسم داخل Genoa Gov مخصص للقوانين والأنظمة والتعليمات والتعاميم التي يرجع إليها قسم الحسابات.",
                "أما الوثائق المحددة المتوفرة في المكتبة لدائرتك وطريقة تحديثها، فيمكن التأكد منها مع فريق Genoa خلال العرض التوضيحي.",
              ],
            },
          ],
        },
        {
          heading: "السعر والعرض التوضيحي وأمان البيانات",
          faqs: [
            {
              q: "كم سعر برنامج Genoa Gov؟",
              a: [
                "أسعار Genoa Gov غير منشورة على الموقع.",
                "للحصول على عرض سعر يناسب دائرتك، تواصل مع فريق Genoa عبر صفحة التواصل أو احجز عرضاً توضيحياً.",
              ],
            },
            {
              q: "هل بيانات الدائرة آمنة في Genoa Gov؟ وهل تؤخذ نسخ احتياطية؟",
              a: [
                "يحفظ Genoa Gov بيانات كل دائرة في قاعدة بيانات منفصلة، وتفاصيل حماية البيانات والنسخ الاحتياطي موضحة في صفحة الأمان والنسخ الاحتياطي.",
                "ولأي سؤال خاص بدائرتك يمكن التواصل مع فريق Genoa.",
              ],
            },
            {
              q: "كيف أشاهد عرضاً توضيحياً لبرنامج Genoa Gov؟",
              a: [
                "يمكنك حجز عرض توضيحي لبرنامج Genoa Gov عبر صفحة التواصل أو عبر واتساب.",
                "وخلال العرض يمكن مناقشة طريقة عمل قسم الحسابات في دائرتك وسلسلة المصادقات المعمول بها فيها.",
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
            { q: "هل تُطبع المستندات والتقارير بالعربية؟", a: [] },
          ],
        },
      ],
    },
    en: {
      title: "Government Accounting Software FAQ | Genoa Gov",
      description:
        "Straight answers about Genoa Gov: payment voucher approval, amending posted vouchers, allocation checks, cheques, closing, pricing and how to book a demo.",
      h1: "Genoa Gov frequently asked questions",
      answer:
        "This page collects questions that accounts staff in Iraqi government departments ask about Genoa Gov, with direct answers. Genoa Gov is government accounting software covering vouchers and the approval workflow, amendment of posted vouchers with a full audit trail, budgets and allocation checks, cheques, month and year closing, a legislation library, and a separate database for each office.",
      groups: [
        {
          heading: "About Genoa Gov",
          faqs: [
            {
              q: "What is the best accounting software for Iraqi government departments?",
              a: [
                "No single program is the best for every department; the right software is the one that fits how your accounts section actually works. Before choosing, check for a multi-user audit and approval chain, a full record of any amendment to posted vouchers, allocation checks before spending, cheque handling, month-end and year-end closing, and separate data for each office.",
                "Genoa Gov is government accounting software that covers these points: vouchers with a multi-user approval workflow, amendment of posted vouchers with a full audit trail, budgets and allocation checks, cheques, month and year closing, a legislation library, and a separate database for each office.",
                "The clearest way to judge is to see the software in a demo, using examples from your own department's workflow.",
              ],
            },
            {
              q: "What is the difference between Genoa Gov and Genoa?",
              a: [
                "Genoa Gov is built for the accounts sections of Iraqi government departments, while Genoa is a separate product built for companies.",
                "Genoa Gov focuses on vouchers and the approval workflow, amendment of posted vouchers with an audit trail, budgets and allocations, cheques, closing and a legislation library. Genoa covers accounting, inventory, sales and purchasing, and customer and supplier ledgers.",
              ],
            },
            {
              q: "Is Genoa Gov suitable for the accounts section of a department under a ministry?",
              a: [
                "Yes. Genoa Gov is designed for government accounting offices in Iraq, including the accounts sections of ministry departments and their formations.",
                "Each department that uses it has its own separate database.",
              ],
            },
            {
              q: "Is each office's data kept separate from other offices in Genoa Gov?",
              a: [
                "Yes. Each office in Genoa Gov has its own separate database.",
                "A department's vouchers, allocations, cheques and audit trail stay in that department's own database.",
              ],
            },
          ],
        },
        {
          heading: "Vouchers, budgets, cheques and closing",
          faqs: [
            {
              q: "How does the approval chain for payment vouchers work in Genoa Gov?",
              a: [
                "In Genoa Gov, a payment voucher goes through an audit and approval workflow involving more than one user before it is approved.",
                "For example, an accountant might prepare the voucher, an auditor might review it, and an authorised official might approve it. These roles are only an example, and you can go through your own department's approval chain during a demo.",
              ],
            },
            {
              q: "Can a voucher be amended after it has been posted, and what gets recorded?",
              a: [
                "Yes. Genoa Gov allows a voucher to be amended after posting, and keeps every amendment in a full audit trail.",
                "The purpose of the audit trail is to show who made the amendment, when, and what changed, so each correction leaves a record that can be checked during review and audit.",
              ],
            },
            {
              q: "How can we check that an allocation is sufficient before spending?",
              a: [
                "In Genoa Gov, the check that an allocation is sufficient before spending takes place inside the system itself, as part of the budgets module.",
                "The budget and allocations are part of Genoa Gov, alongside payment vouchers and cheques.",
              ],
            },
            {
              q: "Can Genoa Gov handle issuing cheques?",
              a: [
                "Yes. Cheques are one of the modules of Genoa Gov, so the accounts section deals with cheques in the same system where payment vouchers are prepared and allocations are followed.",
                "You can see how cheques are prepared in Genoa Gov during a demo.",
              ],
            },
            {
              q: "How do month-end and year-end closing work in Genoa Gov?",
              a: [
                "Genoa Gov includes month closing and fiscal year closing as two steps in the system, carried out by the accounts section of each office within its own database.",
                "Month closing completes the work of the month, and year closing completes the work of the fiscal year once its months are done.",
              ],
            },
            {
              q: "What is the legislation library in Genoa Gov, and does it include laws and instructions?",
              a: [
                "The legislation library is a section of Genoa Gov meant for the laws, regulations, instructions and circulars that the accounts section relies on.",
                "Which specific documents are available in the library for your department, and how it is kept up to date, is something to confirm with the Genoa team during a demo.",
              ],
            },
          ],
        },
        {
          heading: "Pricing, demos and data safety",
          faqs: [
            {
              q: "How much does Genoa Gov cost?",
              a: [
                "Genoa Gov prices are not published on the website.",
                "For a quote for your department, contact the Genoa team through the contact page or book a demo.",
              ],
            },
            {
              q: "Is our department's data safe in Genoa Gov, and is it backed up?",
              a: [
                "Genoa Gov keeps each office's data in its own separate database, and the details of data protection and backups are set out on the Security and backups page.",
                "For questions specific to your department, contact the Genoa team.",
              ],
            },
            {
              q: "How can I see a demo of Genoa Gov?",
              a: [
                "You can book a demo of Genoa Gov through the contact page or on WhatsApp.",
                "During the demo you can talk through how your accounts section works and the approval chain it follows.",
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
            { q: "Are vouchers and reports printed in Arabic?", a: [] },
          ],
        },
      ],
    },
  },
};
