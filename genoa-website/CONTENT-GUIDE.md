# Genoa website — content guide

Rules for anyone (human or AI) writing or editing copy for this site. The typed
contract is `src/content/types.ts`; every page, the JSON-LD, the sitemap and
`llms.txt` are generated from the data modules in `src/content/`.

## 1. Facts we may state

Only what the product team has confirmed. Everything else is either left out or
added to `CLAIMS-TO-VERIFY.md` for the team to confirm before launch.

**Genoa (for companies)**
- Accounting.
- Inventory.
- Sales and purchasing.
- Customer and supplier ledgers, with ageing.
- Multi-currency (US dollar alongside Iraqi dinar) — **optional**.
- Landed cost (freight and customs added on top of item cost) — **optional**.
- Optional features are switched on **per organisation** and are **off by default**.
  Say this every time an optional feature is described.

**Genoa Gov (for Iraqi government accounting offices)**
- Vouchers with a multi-user approval workflow.
- Amendment of posted vouchers, with a full audit trail.
- Budgets and budget checks.
- Cheques.
- Month closing and year closing.
- Legislation library.
- A separate database per office.

## 2. Never write

- Client names, logos, case studies, testimonials, reviews or ratings.
- Numbers about the business: customers, offices, users, years, transactions, uptime.
- Prices, discounts, free trials, licence terms.
- Certifications, ministry approval, "compliant with ..." or "approved by ...".
- Deployment details we have not confirmed: cloud/on-premise, web/desktop/mobile,
  operating systems, hosting location, encryption algorithms, integrations,
  e-invoicing, payroll, POS, barcode, AI features, API.
- Superlatives presented as fact ("the best", "the number one", "the most secure").
  When a buyer question asks "what is the best ...", answer honestly: explain what to
  look for, then say factually what Genoa / Genoa Gov covers.

## 3. Reasonable inferences

Some sentences need a small inference to read naturally (for example "a posted
sales invoice is reflected in the customer's ledger"). Keep such inferences
generic and minimal, and list every one of them in `CLAIMS-TO-VERIFY.md`
with the file and the exact sentence, so the product team can confirm or delete it.

## 4. Style for SEO and GEO

- **Answer first.** The `answer` paragraph under each H1 defines the thing in
  2–4 plain sentences, third person, naming the product:
  "Genoa Gov is government accounting software for ...". It must make sense if an
  AI assistant quotes it alone, with no surrounding context.
- **One idea per sentence.** Short, declarative, factual. No hype adjectives.
- **Question-shaped H2s** where natural ("How does voucher approval work in Genoa Gov?").
- **FAQs are real buyer questions**, phrased the way a person types them into Google
  or asks ChatGPT, e.g. «ما هو أفضل برنامج محاسبي للدوائر الحكومية العراقية؟».
  The first sentence of every answer answers the question by itself.
- **Titles** 30–60 characters, **meta descriptions** 110–160 characters, both unique
  across the whole site and in both languages. Titles end with the brand, e.g.
  `برنامج المخزون للشركات العراقية | Genoa`.
- **Brand names** stay in Latin script in both languages: `Genoa`, `Genoa Gov`,
  `Genoa Systems`. In Arabic text write e.g. «برنامج Genoa».
- Arabic first. The English is a full equivalent, not a summary — but it should read
  as natural English, not a literal translation.

## 5. Iraqi Arabic wording

Use the vocabulary Iraqi accountants and government finance staff actually use.

| Concept | Use | Avoid / secondary |
|---|---|---|
| Cost | كلفة (الكلفة، كلفة المادة) | تكلفة (acceptable once for search) |
| Customs | الكمارك، الرسوم الكمركية | الجمارك (acceptable once for search) |
| Suppliers | المجهزين / المجهز | الموردين (acceptable once for search) |
| Customers | الزبائن | العملاء (secondary) |
| Items in stock | المواد، المخزن، المخازن | الأصناف (secondary) |
| Receivables / payables | الذمم، ذمم الزبائن، ذمم المجهزين | |
| Ageing | أعمار الذمم / أعمار الديون | |
| Statement of account | كشف حساب | |
| Journal entry | قيد، قيد يومية | |
| Chart of accounts | دليل الحسابات | |
| Trial balance | ميزان المراجعة | |
| Iraqi dinar / US dollar | الدينار العراقي / الدولار الأمريكي | |
| Exchange rate | سعر الصرف | |
| Landed cost | الكلفة الواصلة (كلفة المادة + الشحن والنقل + الكمارك) | |
| Government departments | الدوائر الحكومية، الدائرة، التشكيلات | |
| Accounts section | قسم الحسابات، الحسابات | |
| Payment voucher | مستند صرف | |
| Receipt voucher | وصل قبض / مستند قبض | |
| Journal voucher | مستند قيد | |
| Approval chain | التدقيق والمصادقة، سلسلة المصادقات | |
| Posting | ترحيل، مستند مرحَّل | |
| Audit trail | سجل التدقيق / سجل التعديلات | |
| Budget / allocations | الموازنة، التخصيصات | |
| Budget check | التحقق من كفاية التخصيص قبل الصرف | |
| Cheques | الصكوك (صك) | الشيكات (acceptable once for search) |
| Month / year closing | الغلق الشهري، غلق السنة المالية | |
| Legislation | القوانين والأنظمة والتعليمات والتعاميم | |
| Audit body | ديوان الرقابة المالية (mention only as context, never claim endorsement) | |

Per-organisation optional feature wording:
«ميزة اختيارية، معطّلة افتراضياً، وتُفعَّل لكل شركة على حدة حسب حاجتها.»

## 6. Placeholders

Screenshots are generated placeholders until real screenshots with **test data**
are added. Alt text and captions must say so, e.g.
«صورة توضيحية مؤقتة لشاشة المخزون — ستُستبدل بلقطة شاشة حقيقية ببيانات تجريبية».
Never put real client data in a screenshot.
