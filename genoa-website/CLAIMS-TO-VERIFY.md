# Claims to verify before launch

The site states as fact only what is in the brief (see `CONTENT-GUIDE.md` §1).
Every sentence below goes a little beyond that brief — usually a natural inference
such as "a credit sale shows up in the customer's ledger". **The product team should
confirm each one or delete it** (edit the location shown; every location applies to both
the Arabic and English versions, and the Arabic says the same thing).

Highest-priority items are marked ⚠️ — they describe processes or policies, not features.

## Shared pages (`src/content/pages.ts`)

- ⚠️ `security.answer` and `security.sections[4]`: "For backups in both Genoa and Genoa Gov, we agree a plan with each organisation at setup: what is backed up, how often, where copies are kept, and how restores are tested." / "When an organisation starts using Genoa or Genoa Gov, we agree a written backup plan with them." — Replace with your actual backup arrangement (who runs backups, frequency, retention, off-site copy, restore testing).
- `security.sections[1]`: "The person who prepares a voucher is not the only person who approves it." (inferred from the multi-user approval workflow)
- `security.sections[2]`: "An amendment does not erase what came before it." (inferred from "full audit trail")
- `security.sections[3]`: "Closing fixes a period's figures once they have been reviewed, so reports and final accounts are built on figures that do not change without the accounts section knowing." (inferred from month/year closing)
- `security.sections[5]`: "The website uses no tracking tools or advertising." — true of this build. Update it if analytics are added.
- ⚠️ `contact.privacy`: "This website does not store your details or share them with anyone." — true while `FORM_ENDPOINT` is empty (the form only opens WhatsApp). If you set a form service (Formspree etc.), reword it to name that service.
- ⚠️ `contact.nextSteps[1]`: "We show you the software with test data, focusing on the modules you care about." — confirm demos use test data.
- `contact.nextSteps[2]`: "We … explain what is needed to get started in your organisation."
- `about.sections[4]`: "Genoa Systems serves companies and government departments in Iraq." — add a city/address if you want it public (it would also go into `Organization.address` in JSON-LD).
- Branding: the logo mark (`public/favicon.svg`, `src/components/Logo.astro`) is a temporary design. Replace with the real logo, then run `npm run og`.

## Illustrative numbers

- `companies.features[landed-cost].sections[0]` contains a worked example ("goods for 10,000,000 dinars + 1,000,000 freight + 500,000 customs = 11,500,000 landed cost"). It is arithmetic to explain the concept, not a client figure. Keep or delete.

## Genoa for companies (`src/content/companies.ts`)


### Modules are connected (one transaction updates stock, ledgers and accounts)
- overview.sections[0]: "A sale or purchase is recorded once and is reflected in stock, in the customer or supplier ledger, and in the accounts. The result is one consistent view of what is in stock, what customers owe the company and what the company owes its suppliers."
- features[accounting].sections[1]: "Because accounting sits in the same product as inventory, sales and purchasing, and the ledgers, sales and purchases recorded in those modules are reflected in the accounts."
- features[inventory].sections[1]: "Purchases bring items into stock, and sales take them out. Because accounting is part of the same product, stock movements are also reflected in the accounts."
- features[inventory].faqs[1]: "Stock movements from sales and purchases are reflected in the accounts, so the same transaction does not need to be entered twice."
- features[sales-purchasing].sections[1]: "A sales invoice takes items out of stock and, for a sale on credit, adds to the customer's balance. A purchase invoice brings items into stock and, for a purchase on credit, adds to the supplier's balance. Invoices are also reflected in the accounts, because all the modules are part of the same product."
- features[sales-purchasing].faqs[1]: "Yes. A sales invoice on credit is reflected in the customer's ledger in Genoa, so the amount appears in what the customer owes the company."
- features[customer-supplier-ledgers].sections[2]: "A sales invoice on credit is reflected in the customer's ledger, and a purchase invoice on credit in the supplier's ledger. This keeps the ledgers consistent with what has been recorded in sales, purchasing and the accounts."
- faq.groups[1].faqs[0]: "It works alongside sales and purchasing and accounting in the same product: purchases bring items into stock and sales take them out."

### Accounting mechanics
- features[accounting].sections[1]: "Accounting in Genoa is built on a chart of accounts and journal entries, as in standard bookkeeping."

### Sales and purchases are recorded as invoices
- features[sales-purchasing].sections[0]: "Sales and purchases are recorded in Genoa as invoices: a sales invoice to a customer and a purchase invoice from a supplier."

### Iraqi dinar is the default working currency
- features[accounting].answer, .description, .cardSummary, .keyFacts[1] and .faqs[1]: "It is built for Iraqi companies working in Iraqi dinars" / "Accounting in Genoa works in Iraqi dinars without any extra feature."

### US dollar amounts can be used in accounting and ledgers when multi-currency is on
- features[accounting].sections[2]: "Can the books be kept in both dinars and dollars? Yes, once multi-currency is enabled."
- features[customer-supplier-ledgers].sections[3]: "What if debts are in dollars? ... For these cases, Genoa offers multi-currency, which adds the US dollar alongside the Iraqi dinar."
- features[multi-currency].sections[3]: "When multi-currency is enabled, amounts in US dollars can be recorded in accounting and in customer and supplier ledgers."

### The two optional features are enabled independently and can be combined
- features[multi-currency].sections[3]: "Importers can combine it with landed cost, which is also optional, off by default and switched on per organisation."
- features[landed-cost].sections[3]: "Landed cost and multi-currency are switched on separately, so a company can enable one, both or neither, as it needs."

### Landed cost feeds the item cost held in inventory
- features[landed-cost].sections[2]: "Landed cost in Genoa adds freight and customs on top of item cost, so the item's cost in inventory includes those charges."

### The four non-optional modules are "core" (included for every company)
- overview.modulesIntro (also overview.keyFacts[2], features[inventory].faqs[0], faq.groups[0].faqs[2], faq.groups[1].faqs[0]): "Genoa is made up of four core modules and two optional features."

### Genoa replaces paper books and spreadsheets
- overview.whatIs.body[0]: "The aim is to let an Iraqi trading company run its books, stock and debts from one system instead of separate notebooks and spreadsheets."
- features[accounting].faqs[0]: "That is the purpose of Genoa: keeping accounts, stock, sales and purchasing, and customer and supplier ledgers in one product instead of separate notebooks and spreadsheets."

### Data protection and backups
- faq.groups[2].faqs[2]: "Protecting company data and keeping backups are part of how Genoa is run, and the Security and backups page explains the details."

## Facts taken from the content brief, not from CONTENT-GUIDE.md section 1

- overview.sections[2] and faq.groups[2].faqs[1]: "You can book a Genoa demo through the contact page or on WhatsApp."
- faq.groups[2].faqs[0]: "Genoa's prices are not published on this website. To get a quote for your company, contact the Genoa team through the contact page or book a demo."
- faq.groups[2].faqs[2]: a "Security and backups" page exists and explains the details (Arabic name used: «صفحة الأمان والنسخ الاحتياطي»).

## General market statements (about Iraq, not about the product)

- features[sales-purchasing].sections[2]: "It is common for Iraqi companies to import goods, pay for them in US dollars and sell them locally in Iraqi dinars."
- features[customer-supplier-ledgers].sections[0]: "Buying and selling on credit is common in the Iraqi market, so a company needs to know exactly where it stands with each customer and each supplier."
- features[customer-supplier-ledgers].sections[3]: "It is common for Iraqi companies to deal with customers or suppliers in US dollars."
- features[multi-currency].sections[0]: "In Iraq, it is common for companies to buy goods in US dollars and sell them locally in Iraqi dinars. Some customers and suppliers also deal directly in dollars."

## Genoa Gov (`src/content/government.ts`)

- overview.answer; overview.sections[0].bullets[0]; features[vouchers-approval].description, .cardSummary, .answer, .keyFacts[0], .sections[0], .faqs[0]: "Genoa Gov handles payment vouchers, receipt vouchers and journal vouchers." (Inferred: the brief says only "vouchers". Confirm that Genoa Gov has these three voucher types and that they use these Iraqi names: مستند صرف، وصل قبض، مستند قيد.)
- overview.sections[0].body[0]: "In a government department, a payment usually starts with a payment voucher prepared by the accounts section. The voucher is audited and approved by more than one user, the allocation is checked against the budget, and the amount is paid by cheque."
- overview.sections[0].bullets[3]: "Cheques: payment of approved amounts"
- overview.sections[1].body[1]: "In Genoa Gov, more than one user takes part in auditing and approving a voucher, so a voucher does not rest on a single member of staff."
- features[vouchers-approval].answer: "This means preparing, auditing and approving a voucher can be split between different members of staff instead of resting with one person."
- features[vouchers-approval].sections[3]: "A payment voucher is linked to the allocation check in the budget and to the cheque used to pay it."
- features[budgets].sections[3]: "Every payment voucher draws on an allocation, so the budget in Genoa Gov is linked to payment vouchers and their approval, and to the cheques used to make payments."
- features[cheques].sections[2].bullets: "Vouchers and approval: the cheque follows the payment voucher and its approval." / "Budgets and allocations: the amount paid by cheque falls within an allocation." / "Month and year closing: cheques are part of the accounts of the period being closed."
- features[cheques].sections[1]: "In Genoa Gov, cheques are part of the same system, which makes it easier to trace a cheque back to its payment voucher and to the allocation it was paid from."
- faq.groups[1].faqs[3] (question about issuing cheques); features[cheques].faqs[1].a[1]: "Yes. Cheques are one of the modules of Genoa Gov, so the accounts section deals with cheques in the same system where payment vouchers are prepared and allocations are followed." / "You can see how cheques are prepared in Genoa Gov during a demo." (The "Yes" means that issuing and preparing cheques is supported.)
- features[voucher-amendments].sections[1]; faq.groups[1].faqs[1].a[1]: "The purpose of the audit trail is to show who made the amendment, when it was made, and what changed in the voucher."
- features[voucher-amendments].faqs[0].a[0]: "An audit trail is a record of the changes made to accounting data: what changed, when, and who made the change." (A generic definition, placed next to the statement that Genoa Gov has a full audit trail.)
- features[period-closing].sections[2]: "The purpose of closing is that a period's figures settle once it is closed, so new vouchers are not added to it afterwards."
- features[period-closing].answer, .keyFacts[1]; features[office-databases].keyFacts[2], .faqs[1]; faq.groups[1].faqs[4]: "Closing takes place inside Genoa Gov itself, within each office's own database." / "No. Each office in Genoa Gov has its own separate database, and month closing takes place within the data of the office that is closing its month."
- features[legislation-library].answer, .description, .sections[1], .faqs[0]; faq.groups[1].faqs[5]: "The legislation library is meant for the laws, regulations, instructions and circulars that the accounts section relies on." (From the glossary definition of legislation. No specific document is claimed to be included; readers are told to confirm the contents in a demo.)
- features[legislation-library].answer; features[legislation-library].sections[2]: "Having the legislation library inside Genoa Gov means these texts can be consulted from the same system where audit and approval take place."
- features[office-databases].sections[0]: "The vouchers, allocations and cheques an office enters stay in its own database and do not mix with another office's data."
- features[office-databases].sections[1].body[1]: "It also means that each office's audit trail and approval chain relate only to that office's own vouchers."
