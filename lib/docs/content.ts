import type { Doc, CategoryMeta } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Category metadata
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    description: 'Set up your account, create your first shop, and run your first sale.',
    accent: 'indigo',
    iconBg: 'bg-indigo-600/15',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'payments',
    label: 'Payments & M-Pesa',
    description: 'Connect your Safaricom Paybill or Till and understand the payment flow.',
    accent: 'mpesa',
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
  },
  {
    id: 'tax-compliance',
    label: 'Tax & Compliance',
    description: 'Register KRA eTIMS, understand CUIN receipts, and stay compliant.',
    accent: 'red',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
  },
  {
    id: 'team-access',
    label: 'Team & Access',
    description: 'Add cashiers and managers, assign roles, and control who can do what.',
    accent: 'violet',
    iconBg: 'bg-violet-600/15',
    iconColor: 'text-violet-400',
  },
  {
    id: 'inventory',
    label: 'Inventory',
    description: 'Add products, manage stock levels, understand cost and margin.',
    accent: 'amber',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
  },
  {
    id: 'dashboard-reports',
    label: 'Dashboard & Reports',
    description: 'Read your revenue KPIs, live feed, and sales reports.',
    accent: 'emerald',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'multi-shop',
    label: 'Multi-Shop',
    description: 'Add more shops to your account and compare performance across locations.',
    accent: 'indigo',
    iconBg: 'bg-indigo-600/15',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'account-settings',
    label: 'Account & Settings',
    description: 'Configure shop details, currency, and manage your subscription.',
    accent: 'white',
    iconBg: 'bg-white/10',
    iconColor: 'text-white/60',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Doc pages
// ─────────────────────────────────────────────────────────────────────────────

export const DOCS: Doc[] = [

  // ── Getting Started ────────────────────────────────────────────────────────

  {
    slug: 'getting-started',
    title: 'Set up your Dextra account',
    description: 'Create your account, add your first shop, connect M-Pesa, and run your first sale — from start to finish.',
    category: 'getting-started',
    readTime: 8,
    updatedAt: '2026-06-01',
    relatedSlugs: ['mpesa-connect', 'kra-etims-setup', 'adding-team-members'],
    sections: [
      {
        heading: 'What you will have by the end',
        body: 'A fully configured shop on Dextra: connected to M-Pesa, KRA eTIMS compliant, with at least one cashier added, and a successful test sale on the record.',
      },
      {
        heading: '1. Create your account',
        steps: [
          { title: 'Go to app.dextra.co and click Get started free', body: 'You will be asked for your name, email address, and a password. Use an email address you check regularly — this becomes your owner login.' },
          { title: 'Verify your email', body: 'A 6-digit code is sent to your inbox. Enter it on the verification screen. The code expires after 10 minutes.' },
          { title: 'You are logged in as the account owner', body: 'The owner account has full access to everything across all your shops. Keep this login secure.' },
        ],
      },
      {
        heading: '2. Create your first shop',
        steps: [
          { title: 'On the welcome screen, click Create your first shop', body: 'Enter your shop name exactly as you want it to appear on receipts and M-Pesa STK prompts.' },
          { title: 'Select your country', body: 'Choose Kenya, Uganda, or Tanzania. This sets your default currency (KES, UGX, TZS) and determines which tax compliance module is active.' },
          { title: 'Set your address and timezone', body: 'The timezone affects timestamps on receipts and reports. Use Africa/Nairobi for Kenya.' },
          { title: 'Click Save shop', body: 'Your shop is created. You will land on the dashboard.' },
        ],
        note: 'You can add more shops later from Settings → Shops → Add shop. Each shop has its own M-Pesa credentials, inventory, and staff.',
      },
      {
        heading: '3. Add your products',
        body: 'Before your cashiers can sell anything, the products need to exist in the system. Go to Inventory → Products → Add product.',
        steps: [
          { title: 'Enter the product name and SKU', body: 'The SKU (stock-keeping unit) is a unique code for this product. You can use your own system (e.g. PHONE-001) or let Dextra generate one.' },
          { title: 'Set the selling price and cost price', body: 'The selling price is what customers pay. The cost price is what you paid for it. Dextra uses this to calculate your profit margin on every sale. Be accurate — you cannot retroactively change the cost on past sales.' },
          { title: 'Set the opening stock quantity', body: 'How many units do you have right now? This becomes your starting inventory.' },
          { title: 'Click Save product', body: 'The product is live and available in the POS.' },
        ],
        tip: 'If you have many products, you can import a spreadsheet. Go to Inventory → Products → Import and download the template first.',
      },
      {
        heading: '4. Connect M-Pesa',
        body: 'For M-Pesa to work, Dextra needs your Safaricom Daraja API credentials. These are separate from your normal M-Pesa account — they are developer credentials that authorise Dextra to send STK push requests on your behalf.',
        steps: [
          { title: 'Go to Settings → Payments → M-Pesa', body: 'You will see fields for Consumer Key, Consumer Secret, Paybill/Till Number, and Passkey.' },
          { title: 'Log in to the Safaricom Developer Portal', body: 'Visit developer.safaricom.co.ke, register or log in, then go to My Apps to find your credentials.' },
          { title: 'Enter your credentials in Dextra', body: 'Paste the Consumer Key and Consumer Secret. Select whether you use Paybill or Till. Enter your business number. Enter your Lipa Na M-Pesa passkey.' },
          { title: 'Click Save and test', body: 'Dextra will send a test ping to Safaricom. A green confirmation means your credentials are valid.' },
        ],
        note: 'Your credentials are encrypted with AES-256-GCM before being stored. Dextra staff cannot see them.',
      },
      {
        heading: '5. Set up KRA eTIMS (Kenya shops only)',
        body: 'If your shop is in Kenya, KRA compliance is mandatory. Every sale must generate a CUIN (Control Unit Invoice Number). Dextra handles this automatically once you register your OSCU credentials.',
        steps: [
          { title: 'Register your business with KRA eTIMS', body: 'Visit itax.kra.go.ke and log in with your PIN. Navigate to eTIMS → Register for OSCU. Follow the registration process. KRA will approve and issue your OSCU credentials (username, password, and device serial number).' },
          { title: 'Enter your OSCU credentials in Dextra', body: 'Go to Settings → Tax → KRA eTIMS. Enter your OSCU username, password, and serial number. Click Save.' },
          { title: 'Dextra will verify the connection', body: 'A successful test receipt is sent to KRA. You will see a green checkmark once the credentials are working.' },
        ],
        warning: 'KRA eTIMS registration can take 1–3 business days for KRA to approve. You can still process sales during this time, but receipts will be queued and submitted once credentials are active.',
      },
      {
        heading: '6. Add your first cashier',
        steps: [
          { title: 'Go to Settings → Team → Add member', body: 'Enter the cashier\'s name, phone number, and a PIN they will use to log in at the POS. You do not need their email unless they need dashboard access.' },
          { title: 'Select their role', body: 'Choose Cashier. A cashier can process sales, view their own shift summary, and manage the sale screen — nothing else.' },
          { title: 'Click Save', body: 'The cashier is added to this shop. They can now log in at the POS using their PIN.' },
        ],
      },
      {
        heading: '7. Run your first sale',
        steps: [
          { title: 'Open the POS screen', body: 'Click Sales in the sidebar, then New sale. The POS screen opens.' },
          { title: 'Add products to the sale', body: 'Search or scroll to find a product, then click to add it. Adjust quantity if needed.' },
          { title: 'Select the payment method', body: 'Choose Cash or M-Pesa. For M-Pesa, enter the customer\'s phone number and click Send STK push. The customer receives an M-Pesa prompt on their phone.' },
          { title: 'Confirm and complete', body: 'Once the customer enters their PIN, Dextra receives a confirmation from Safaricom within seconds. The sale is marked Complete and a KRA eTIMS receipt is generated automatically.' },
        ],
        tip: 'Run a test sale of KES 1 to yourself before your first real customer. It is the fastest way to confirm everything is working end to end.',
      },
    ],
  },

  // ── Payments ───────────────────────────────────────────────────────────────

  {
    slug: 'mpesa-connect',
    title: 'Connect M-Pesa to your shop',
    description: 'How to get your Safaricom Daraja credentials and configure M-Pesa in Dextra — for both Paybill and Till setups.',
    category: 'payments',
    readTime: 6,
    updatedAt: '2026-06-01',
    relatedSlugs: ['how-mpesa-payments-work', 'failed-payments', 'getting-started'],
    sections: [
      {
        heading: 'What you need before you start',
        body: [
          'Dextra connects to M-Pesa using the official Safaricom Daraja API — a direct link with no middlemen. This means you need a Safaricom Developer Portal account and an active Daraja application before you can enter any credentials in Dextra.',
          'Have the following ready: your registered Safaricom Paybill or Till number, access to developer.safaricom.co.ke, and your Lipa Na M-Pesa Online Passkey (found in the M-Pesa section of the developer portal).',
        ],
      },
      {
        heading: 'Step 1 — Create a Safaricom Daraja app',
        steps: [
          { title: 'Visit developer.safaricom.co.ke', body: 'Register for an account if you do not have one. Use the same email you use for your Safaricom business account.' },
          { title: 'Create a new app', body: 'Click My Apps → Add a new app. Give it any name (e.g. "Westlands Shop Dextra"). Select the Lipa Na M-Pesa Online API as the required API. Click Create app.' },
          { title: 'Note your Consumer Key and Consumer Secret', body: 'These appear on the app detail page under Keys. You will paste both into Dextra. Do not share these with anyone.' },
          { title: 'Get your Passkey', body: 'Still in the developer portal, go to APIs → Lipa Na M-Pesa Online → Lipa Na M-Pesa Online Passkey. Copy the passkey for the production environment.' },
        ],
        note: 'Safaricom has a sandbox environment for testing. Dextra connects to the production environment only — the sandbox uses test phone numbers that do not reflect real money.',
      },
      {
        heading: 'Step 2 — Enter credentials in Dextra',
        steps: [
          { title: 'Go to Settings → Payments → M-Pesa', body: 'You must be logged in as Owner or Manager to access Settings.' },
          { title: 'Select your payment type', body: 'Choose Paybill if customers pay to a business number (e.g. 522522). Choose Buy Goods (Till) if customers pay to a till number.' },
          { title: 'Fill in the form', body: 'Business number: your Paybill or Till number. Account reference: a label that appears on the customer\'s M-Pesa statement (use your shop name). Consumer Key and Consumer Secret: from the Daraja portal. Passkey: from the Daraja portal.' },
          { title: 'Click Save credentials', body: 'Dextra encrypts and stores your credentials. A small test ping is sent to Safaricom to verify they are valid.' },
        ],
        tip: 'If you have multiple shops, each shop has its own M-Pesa credentials. Go to the correct shop first (top-left shop switcher) before entering credentials.',
      },
      {
        heading: 'Step 3 — Test the connection',
        steps: [
          { title: 'Go to Sales → New sale', body: 'Add any product. Select M-Pesa as the payment method.' },
          { title: 'Enter your own phone number', body: 'Use a phone number registered on M-Pesa that belongs to you. Enter KES 1 as the amount (you can refund it or treat it as a test cost).' },
          { title: 'Click Send STK push', body: 'Your phone should vibrate within 5 seconds with an M-Pesa prompt showing your business name and the amount. Enter your PIN to complete the payment.' },
          { title: 'Confirm it appears in Dextra', body: 'The sale should move from Pending to Completed. A KRA receipt is generated. You will see the transaction in Sales → All sales.' },
        ],
        warning: 'If the STK prompt shows "Dextra" instead of your business name, your Paybill number may not match the business name registered with Safaricom. Contact Safaricom Business Support to update your business display name.',
      },
      {
        heading: 'What credentials are stored and how',
        body: 'Your Consumer Key, Consumer Secret, and Passkey are encrypted using AES-256-GCM encryption before being saved to the database. Dextra staff cannot see them in plaintext. They are decrypted only at the moment a payment request is made and held in memory for the duration of that request only.',
      },
    ],
  },

  {
    slug: 'how-mpesa-payments-work',
    title: 'How M-Pesa payments work in Dextra',
    description: 'The complete payment flow from STK push to receipt — what happens at each step and what to expect.',
    category: 'payments',
    readTime: 5,
    updatedAt: '2026-06-01',
    relatedSlugs: ['mpesa-connect', 'failed-payments'],
    sections: [
      {
        heading: 'The payment flow, step by step',
        steps: [
          { title: 'Cashier initiates the sale', body: 'The cashier adds products to a sale, selects M-Pesa, enters the customer\'s phone number, and clicks Send STK push.' },
          { title: 'Dextra contacts Safaricom directly', body: 'Your shop\'s Daraja credentials are used to call the Safaricom Lipa Na M-Pesa Online API. This is a direct call — no aggregator or third party is involved.' },
          { title: 'Customer receives a prompt on their phone', body: 'Within 2–5 seconds, the customer\'s phone displays an M-Pesa STK (SIM Toolkit) prompt showing the amount, your business name, and an account reference. The customer enters their M-Pesa PIN.' },
          { title: 'Safaricom sends a webhook to Dextra', body: 'Once the customer pays, Safaricom calls Dextra\'s callback URL with the result. This typically happens within 5–10 seconds. Dextra verifies the callback is genuinely from Safaricom.' },
          { title: 'Sale is marked Complete', body: 'Dextra matches the callback to the pending sale and marks it Completed. A KRA eTIMS fiscal receipt is generated immediately.' },
          { title: 'Money goes to your account', body: 'The funds move directly into your registered M-Pesa Paybill or Till account. Dextra never holds your money.' },
        ],
      },
      {
        heading: 'The 3-minute window',
        body: [
          'M-Pesa STK push requests expire after 3 minutes. If a customer does not enter their PIN within that window, the request times out. Dextra automatically updates the sale to Failed and releases it.',
          'The cashier can retry the payment immediately — just click Retry STK push on the failed sale. A new prompt is sent to the customer\'s phone.',
        ],
        note: 'If a customer enters their PIN after the 3-minute window, the payment is rejected at the M-Pesa level. Dextra shows this as Failed. The customer is not charged.',
      },
      {
        heading: 'Payment statuses explained',
        table: {
          headers: ['Status', 'What it means', 'What to do'],
          rows: [
            ['Pending', 'STK push sent. Waiting for customer to enter PIN.', 'Wait. The prompt is on the customer\'s phone.'],
            ['Completed', 'Customer paid. Money is in your account.', 'Nothing — the sale is done.'],
            ['Failed', 'Payment timed out or customer cancelled.', 'Retry the STK push or take cash.'],
            ['Cancelled', 'Cashier manually cancelled the sale before payment.', 'Nothing — no money moved.'],
          ],
        },
      },
      {
        heading: 'What customers see on their phone',
        body: 'The customer\'s phone shows a standard Safaricom STK prompt. It will display: your business name (as registered with your Paybill/Till), the amount, and the account reference. They enter their M-Pesa PIN to confirm — it is the same PIN they use for all M-Pesa transactions. There is no app to download.',
      },
    ],
  },

  {
    slug: 'failed-payments',
    title: 'Handling failed and pending M-Pesa payments',
    description: 'What to do when an M-Pesa payment does not complete — including timeouts, PIN errors, and manual confirmation.',
    category: 'payments',
    readTime: 4,
    updatedAt: '2026-06-01',
    relatedSlugs: ['how-mpesa-payments-work', 'mpesa-connect'],
    sections: [
      {
        heading: 'Why payments fail',
        table: {
          headers: ['Reason', 'How to identify it', 'Fix'],
          rows: [
            ['Customer did not enter PIN in time (3-minute timeout)', 'Sale shows Failed after ~3 minutes', 'Retry STK push'],
            ['Customer cancelled the prompt', 'Sale shows Failed quickly (under 1 minute)', 'Ask customer to pay again or take cash'],
            ['Wrong PIN entered (3 times)', 'Customer\'s M-Pesa is locked by Safaricom', 'Customer must call Safaricom to unlock. Take cash.'],
            ['Customer has insufficient M-Pesa balance', 'Sale shows Failed with "Insufficient funds"', 'Customer should top up or pay cash'],
            ['Safaricom network issue', 'Sale stuck on Pending for over 5 minutes', 'Check if M-Pesa is down. Wait and retry.'],
            ['Wrong phone number entered', 'Customer says they did not get a prompt', 'Check the number. Retry with the correct one.'],
          ],
        },
      },
      {
        heading: 'How to retry a failed payment',
        steps: [
          { title: 'Find the failed sale', body: 'Go to Sales → All sales. Failed sales are shown in red. Click on the sale to open it.' },
          { title: 'Click Retry STK push', body: 'This sends a new prompt to the customer\'s phone. You can change the phone number before retrying if the original number was wrong.' },
          { title: 'Alternatively, switch to cash', body: 'On the failed sale, click Accept cash payment. The sale is marked Completed with the payment method changed to Cash.' },
        ],
      },
      {
        heading: 'When a payment is stuck on Pending',
        body: [
          'If a sale has been Pending for more than 5 minutes, Safaricom\'s network may be experiencing issues or the webhook was delayed. Dextra has a 3-minute auto-timeout that should catch most cases, but occasionally Safaricom delays are longer.',
          'Check the M-Pesa status page (safaricom.co.ke) to confirm if there is a known outage. If M-Pesa is up and a payment is stuck, go to the sale and click Cancel payment — this manually marks it Failed so you can retry or take cash.',
        ],
        warning: 'Never manually mark a sale as Complete without confirming the payment arrived in your M-Pesa account. Always check your M-Pesa balance or transaction history first.',
      },
      {
        heading: 'Confirming payment manually (Till accounts)',
        body: 'If you use a Till number instead of Paybill, Safaricom sometimes requires the merchant to manually confirm payment receipt. Dextra shows these as Pending with a Confirm button. Go to Sales → Pending payments, verify the amount in your M-Pesa account, then click Confirm to complete the sale.',
      },
    ],
  },

  // ── Tax & Compliance ───────────────────────────────────────────────────────

  {
    slug: 'kra-etims-setup',
    title: 'Set up KRA eTIMS compliance',
    description: 'Register with KRA for the OSCU (Online Sales Control Unit), connect your credentials to Dextra, and verify your first receipt.',
    category: 'tax-compliance',
    readTime: 7,
    updatedAt: '2026-06-01',
    relatedSlugs: ['understanding-cuin', 'offline-receipts'],
    sections: [
      {
        heading: 'What is KRA eTIMS?',
        body: [
          'eTIMS stands for Electronic Tax Invoice Management System. It is a KRA requirement that every VAT-registered business generate a fiscal receipt for every sale. Each receipt gets a CUIN — a Control Unit Invoice Number — that KRA uses to track your sales and verify your tax filings.',
          'Dextra handles all of this automatically. Once your OSCU credentials are connected, every sale you complete generates and submits a KRA receipt without any manual action from you or your cashiers.',
        ],
        note: 'eTIMS is currently mandatory for VAT-registered businesses in Kenya. If you are not VAT-registered, check with your accountant whether eTIMS applies to your business.',
      },
      {
        heading: 'Step 1 — Register for OSCU on the KRA iTax portal',
        steps: [
          { title: 'Go to itax.kra.go.ke', body: 'Log in using your KRA PIN and password. If you have not registered for eTIMS at all, go to Manage DTs → eTIMS first.' },
          { title: 'Navigate to eTIMS → OSCU Registration', body: 'Select the OSCU (Online) type — this is the software integration option, not the hardware device. Dextra uses the online OSCU.' },
          { title: 'Fill in the registration form', body: 'Business name, PIN, physical address, and contact details. Under "Integration type", select API/Software integration.' },
          { title: 'Submit and wait for approval', body: 'KRA reviews the application and sends you an email with your OSCU credentials: a username, password, and serial number. This takes 1–5 business days.' },
        ],
        warning: 'Do not mix up your eTIMS login credentials with your iTax portal credentials. Your OSCU credentials are a separate set issued specifically for software integrations.',
      },
      {
        heading: 'Step 2 — Enter your OSCU credentials in Dextra',
        steps: [
          { title: 'Go to Settings → Tax → KRA eTIMS', body: 'You must be logged in as the shop Owner to access this section.' },
          { title: 'Enter your OSCU credentials', body: 'Username, password, and device serial number — exactly as KRA issued them. These are case-sensitive.' },
          { title: 'Click Save and verify', body: 'Dextra sends a test request to the KRA OSCU endpoint. If successful, you will see "eTIMS connected" in green. If there is an error, double-check for typos in the credentials.' },
        ],
        tip: 'Credentials are encrypted before storage. You can update them at any time if KRA issues new ones. Updating credentials automatically refreshes the connection.',
      },
      {
        heading: 'Step 3 — Verify your first receipt',
        steps: [
          { title: 'Process a test sale', body: 'Run a KES 1 sale from the POS. Complete it with cash or M-Pesa.' },
          { title: 'Open the completed sale', body: 'Go to Sales → All sales and click on the sale. You should see a CUIN number on the receipt (format: KE-YYYY-XXXXXXX).' },
          { title: 'Verify on the KRA eTIMS portal', body: 'Log into iTax → eTIMS → Invoice Verification and enter your CUIN. The invoice details should match your sale. This confirms the integration is working end to end.' },
        ],
      },
      {
        heading: 'What happens after setup',
        body: 'Every completed sale in Dextra generates a fiscal receipt and submits it to KRA automatically. The CUIN appears on the printed/digital receipt. You never need to manually file individual sales with KRA — Dextra handles it in real time.',
      },
    ],
  },

  {
    slug: 'understanding-cuin',
    title: 'What is a CUIN and why every sale must have one',
    description: 'A plain-English explanation of CUIN receipts, what the 4 receipt states mean, and what to do if a sale is missing a CUIN.',
    category: 'tax-compliance',
    readTime: 4,
    updatedAt: '2026-06-01',
    relatedSlugs: ['kra-etims-setup', 'offline-receipts'],
    sections: [
      {
        heading: 'What CUIN stands for',
        body: 'CUIN stands for Control Unit Invoice Number. It is a unique reference number that KRA assigns to every fiscal receipt when it is submitted to their eTIMS system. Think of it as a receipt serial number that KRA issues and tracks.',
      },
      {
        heading: 'Why every sale must have one',
        body: [
          'KRA requires every VAT-registered business in Kenya to submit a fiscal invoice for each sale. The CUIN is proof that the submission happened. If a customer asks for a KRA-compliant receipt, the CUIN is what makes it legally valid.',
          'Dextra handles this automatically — you do not need to do anything manually. Once your OSCU credentials are connected, every completed sale generates and submits its receipt to KRA and receives a CUIN within seconds.',
        ],
        warning: 'Operating without valid CUIN receipts exposes your business to KRA penalties. If your eTIMS credentials expire or become invalid, Dextra queues the receipts locally and submits them the moment the credentials are working again.',
      },
      {
        heading: 'The four receipt states',
        table: {
          headers: ['State', 'What it means'],
          rows: [
            ['PENDING', 'The sale is being processed. No receipt submitted yet.'],
            ['QUEUED', 'The receipt is ready to submit but Dextra is waiting for a KRA response (e.g. offline or KRA is slow).'],
            ['SUBMITTED', 'The receipt was sent to KRA. Waiting for KRA to return a CUIN.'],
            ['CUIN', 'KRA confirmed receipt. A CUIN number has been assigned. This is the final state.'],
          ],
        },
        note: 'Normal sales go from PENDING to CUIN in under 5 seconds when online. You only see QUEUED or SUBMITTED if there is a connection issue.',
      },
      {
        heading: 'Where to find the CUIN on a receipt',
        body: 'On any completed sale in Dextra, open the sale and click View receipt. The CUIN is shown at the bottom of the receipt in the format KE-2026-XXXXXXX. It is also printed on physical receipts if you use a receipt printer connected to Dextra.',
      },
      {
        heading: 'What to do if a sale shows PENDING or QUEUED for a long time',
        steps: [
          { title: 'Check your internet connection', body: 'Dextra cannot submit to KRA without internet. If you are offline, the receipt will be submitted automatically when connectivity returns.' },
          { title: 'Check your eTIMS credentials', body: 'Go to Settings → Tax → KRA eTIMS. If the status shows an error, your KRA credentials may have expired. Enter the new ones and save.' },
          { title: 'Check KRA system status', body: 'KRA\'s OSCU system occasionally has downtime. Check kra.go.ke for announcements. Dextra will automatically retry queued receipts every few minutes.' },
        ],
      },
    ],
  },

  {
    slug: 'offline-receipts',
    title: 'Offline receipts and the submission queue',
    description: 'How Dextra handles KRA eTIMS submissions when your shop loses internet — and how to confirm everything was submitted.',
    category: 'tax-compliance',
    readTime: 3,
    updatedAt: '2026-06-01',
    relatedSlugs: ['understanding-cuin', 'kra-etims-setup'],
    sections: [
      {
        heading: 'Sales still work when you are offline',
        body: [
          'If your shop loses internet, Dextra can still process cash sales on the POS. The receipts are generated locally and stored in a queue.',
          'M-Pesa sales require internet because the STK push needs to reach Safaricom. If you are offline, take cash only.',
        ],
      },
      {
        heading: 'How the offline queue works',
        steps: [
          { title: 'Sale is completed offline', body: 'A fiscal receipt is created locally with a status of QUEUED. The cashier can still print or send the receipt to the customer.' },
          { title: 'Internet returns', body: 'Dextra detects the connection and starts submitting queued receipts to KRA, oldest first.' },
          { title: 'KRA assigns CUINs', body: 'Each queued receipt gets a CUIN from KRA. The receipt status updates to CUIN.' },
          { title: 'Everything is in order', body: 'KRA allows receipts to be submitted within a reasonable window after the sale. The submission timestamps are preserved.' },
        ],
        note: 'Dextra retries queued receipts automatically every 60 seconds when online. You do not need to do anything manually.',
      },
      {
        heading: 'How to check for unsubmitted receipts',
        steps: [
          { title: 'Go to Reports → Tax compliance', body: 'This screen shows a summary of receipt states: CUIN (submitted), QUEUED (pending), and SUBMITTED (awaiting KRA response).' },
          { title: 'Any QUEUED receipts older than 24 hours need attention', body: 'This likely means your KRA credentials are expired or there is a connectivity issue at your location. See the troubleshooting section in the KRA eTIMS setup guide.' },
        ],
      },
    ],
  },

  // ── Team & Access ──────────────────────────────────────────────────────────

  {
    slug: 'adding-team-members',
    title: 'Add cashiers and managers to your shop',
    description: 'How to invite staff, set their role, and manage who has access to your shop in Dextra.',
    category: 'team-access',
    readTime: 4,
    updatedAt: '2026-06-01',
    relatedSlugs: ['roles-and-permissions', 'getting-started'],
    sections: [
      {
        heading: 'How team access works in Dextra',
        body: 'Each shop has its own staff list. A person can be a Cashier at one shop and a Manager at another — their role is set per shop. To add someone to a shop, you must be the shop Owner or a Manager.',
      },
      {
        heading: 'Adding a new team member',
        steps: [
          { title: 'Go to Settings → Team → Add member', body: 'This is inside the shop you want to add them to. Confirm the active shop in the top-left corner before proceeding.' },
          { title: 'Enter their name and phone number', body: 'The phone number is their login identifier. They will use it along with a PIN to log in at the POS.' },
          { title: 'Set their role', body: 'Choose Cashier, Manager, or Owner. See the Roles and permissions guide for a full breakdown of what each role can do.' },
          { title: 'Set their PIN', body: 'A 4–6 digit PIN is used to log in at the POS. Choose something they can remember but keep private. Managers can reset PINs later.' },
          { title: 'Click Save', body: 'The team member is added immediately. They can log in from any device connected to your shop.' },
        ],
        tip: 'If a cashier works across multiple shops (e.g. they cover different branches), add them separately to each shop. Their role and PIN can be different per shop.',
      },
      {
        heading: 'Managing existing team members',
        steps: [
          { title: 'View all staff', body: 'Go to Settings → Team. You will see all team members for the active shop, their role, and their last login.' },
          { title: 'Change a role', body: 'Click on a team member and select Edit. Change the role and save.' },
          { title: 'Reset a PIN', body: 'Click on a team member → Reset PIN. Enter a new PIN. The old PIN stops working immediately.' },
          { title: 'Remove a team member', body: 'Click on a team member → Remove from shop. This removes their access to this shop only. If they are on other shops, they retain access there.' },
        ],
        warning: 'Removing a team member from the shop does not delete their sales history. All past transactions remain linked to them in reports.',
      },
    ],
  },

  {
    slug: 'roles-and-permissions',
    title: 'Roles and what each can do',
    description: 'A complete breakdown of Cashier, Manager, and Owner permissions in Dextra.',
    category: 'team-access',
    readTime: 5,
    updatedAt: '2026-06-01',
    relatedSlugs: ['adding-team-members'],
    sections: [
      {
        heading: 'The three roles',
        body: 'Every team member on a shop has one of three roles. Roles control what they can see and do in Dextra. The Owner is the account creator and has full access to everything.',
      },
      {
        heading: 'Cashier',
        body: 'The most restricted role. Designed for people whose only job is processing sales at the counter.',
        table: {
          headers: ['Can do', 'Cannot do'],
          rows: [
            ['Process new sales (POS)', 'View other cashiers\' sales'],
            ['Accept M-Pesa and cash', 'Access reports or analytics'],
            ['View their own shift summary', 'Add or remove products'],
            ['Print or send receipts', 'Change prices'],
            ['Pause and resume sales', 'Access Settings'],
            ['', 'View customers\' personal data'],
          ],
        },
      },
      {
        heading: 'Manager',
        body: 'Can do everything a Cashier can, plus day-to-day shop operations.',
        table: {
          headers: ['Can do', 'Cannot do'],
          rows: [
            ['Everything a Cashier can do', 'Add or remove staff'],
            ['View all sales and reports', 'Change subscription or billing'],
            ['Cancel and return sales', 'Update M-Pesa or KRA credentials'],
            ['Add and edit products', 'Delete the shop'],
            ['Adjust stock levels', 'Transfer shop ownership'],
            ['View customer list', ''],
            ['Export reports', ''],
          ],
        },
      },
      {
        heading: 'Owner',
        body: 'Full access to everything. There can only be one Owner per shop.',
        table: {
          headers: ['Can do', 'Cannot do'],
          rows: [
            ['Everything a Manager can do', 'Nothing — full access'],
            ['Add and remove staff', ''],
            ['Update M-Pesa credentials', ''],
            ['Update KRA eTIMS credentials', ''],
            ['Change subscription plan', ''],
            ['Delete the shop', ''],
            ['Transfer ownership to another user', ''],
          ],
        },
        note: 'The Owner is set at account creation and is tied to the login email. To transfer ownership, go to Settings → Shop → Transfer ownership. The new owner must already be a team member.',
      },
    ],
  },

  // ── Inventory ──────────────────────────────────────────────────────────────

  {
    slug: 'adding-products',
    title: 'Add and manage your product catalogue',
    description: 'How to create products, set prices, organise categories, and keep your inventory accurate.',
    category: 'inventory',
    readTime: 6,
    updatedAt: '2026-06-01',
    relatedSlugs: ['wac-costing', 'getting-started'],
    sections: [
      {
        heading: 'Adding a single product',
        steps: [
          { title: 'Go to Inventory → Products → Add product', body: 'You must be logged in as Owner or Manager.' },
          { title: 'Enter the product name', body: 'Use the name as you want it to appear on receipts and the POS screen. Be specific enough that cashiers can identify it quickly (e.g. "Samsung 45W Charger USB-C" not just "Charger").' },
          { title: 'Enter the SKU', body: 'A SKU is your internal product code. It must be unique per shop. If you do not have a coding system, Dextra can generate one for you — click Auto-generate SKU.' },
          { title: 'Set the selling price', body: 'This is what your customers pay. You can change it later, and the change takes effect on all future sales. Past sales always retain the price at the time of sale.' },
          { title: 'Set the cost price', body: 'This is what you paid for the product (your purchase cost). Dextra uses this to calculate your gross margin. Be accurate — see the WAC guide for how cost price affects your margin reports.' },
          { title: 'Set the category', body: 'Categories group products on the POS screen. You can create new categories here (e.g. Phones, Accessories, Drinks). Categories also appear in reports so you can see which product lines are performing.' },
          { title: 'Set the opening stock', body: 'Enter how many units you have right now. This becomes your starting inventory level.' },
          { title: 'Click Save product', body: 'The product is immediately available on the POS for cashiers to add to sales.' },
        ],
      },
      {
        heading: 'Bulk import from a spreadsheet',
        steps: [
          { title: 'Go to Inventory → Products → Import', body: 'Download the Dextra import template (Excel or CSV).' },
          { title: 'Fill in the template', body: 'Required columns: Name, SKU, Selling Price, Cost Price, Opening Stock. Optional: Category, Description, Barcode.' },
          { title: 'Upload the file', body: 'Drag and drop or select the file. Dextra validates it before importing — any rows with errors are shown for you to fix.' },
          { title: 'Confirm the import', body: 'Review the summary (X products to be created), then click Confirm import. Products are created immediately.' },
        ],
        tip: 'Download the template first even if you have your own spreadsheet — the column names must match exactly.',
      },
      {
        heading: 'Editing and deactivating products',
        body: [
          'To edit a product, go to Inventory → Products, click on the product, and click Edit. You can change the name, price, category, or description at any time.',
          'To remove a product from sale without deleting it, click Deactivate. Deactivated products do not appear on the POS but their sales history is preserved. You can reactivate them at any time.',
          'Products with past sales cannot be permanently deleted — they are part of your sales record.',
        ],
      },
      {
        heading: 'Setting low-stock alerts',
        steps: [
          { title: 'Open the product', body: 'Inventory → Products → click the product.' },
          { title: 'Set the restock threshold', body: 'Enter the quantity below which you want to be alerted. For example, if you set 5, you get an alert when stock drops to 5 units.' },
          { title: 'Save', body: 'When stock hits the threshold, you get a push notification on the owner mobile app and an alert appears on the dashboard.' },
        ],
      },
    ],
  },

  {
    slug: 'wac-costing',
    title: 'How Dextra calculates product costs (WAC)',
    description: 'What Weighted Average Cost means, why it matters for your margin, and how Dextra updates it automatically.',
    category: 'inventory',
    readTime: 5,
    updatedAt: '2026-06-01',
    relatedSlugs: ['adding-products'],
    sections: [
      {
        heading: 'What is WAC?',
        body: [
          'WAC stands for Weighted Average Cost. It is the method Dextra uses to track the cost of each unit of a product in your inventory, accounting for the fact that you buy stock at different prices at different times.',
          'For example: you buy 10 Samsung chargers at KES 800 each, then later buy 20 more at KES 750 each. Your WAC is not simply KES 775 (the simple average). It is ((10 × 800) + (20 × 750)) ÷ 30 = KES 766.67. That is the true average cost per unit you now hold.',
        ],
      },
      {
        heading: 'Why WAC matters for your business',
        body: 'Your margin on every sale is calculated as (Selling Price − WAC Cost). If your cost data is wrong, your margin data is wrong. Over time, accurate WAC means your reports reflect actual profitability — which products are genuinely making you money.',
        note: 'The cost price you set when creating a product becomes the initial WAC. Every time you receive new stock at a different price, Dextra recalculates the WAC for all units currently held.',
      },
      {
        heading: 'When the WAC updates',
        body: 'The WAC updates every time you record a stock receipt (a stock-in movement). Go to Inventory → Stock movements → Receive stock. Enter the quantity received and the unit cost of that batch. Dextra recalculates and updates the WAC automatically.',
        steps: [
          { title: 'Go to Inventory → Stock movements → Receive stock', body: 'Select the product. Enter quantity received and the purchase cost per unit for this batch.' },
          { title: 'Confirm the movement', body: 'Dextra adds the units to stock and recalculates the WAC. You will see the updated cost price on the product detail page.' },
        ],
      },
      {
        heading: 'A practical example',
        body: [
          'You start with 10 Infinix Hot 40 phones at a WAC of KES 18,000 each.',
          'You sell 4 phones (WAC stays KES 18,000 — selling does not change cost).',
          'You receive 20 more phones at KES 17,500 each.',
          'New WAC = ((6 × 18,000) + (20 × 17,500)) ÷ 26 = (108,000 + 350,000) ÷ 26 = KES 17,615.38.',
          'Every subsequent sale uses KES 17,615 as the cost, giving you an accurate margin until the next stock receipt.',
        ],
      },
      {
        heading: 'Do not manually edit WAC',
        body: 'Editing a product\'s cost price directly changes the displayed cost but does not recalculate historical WAC correctly. Always use Receive stock to record new inventory — this is the only way to keep WAC accurate. Manual cost edits are audit-logged and flagged for review.',
        warning: 'Changing the cost price of a product does not retroactively update the cost on past sales. Past sales always retain the WAC at the time of sale.',
      },
    ],
  },

  // ── Dashboard & Reports ────────────────────────────────────────────────────

  {
    slug: 'reading-the-dashboard',
    title: 'Reading your Dextra dashboard',
    description: 'What each number on the dashboard means and how to use it to run your shop.',
    category: 'dashboard-reports',
    readTime: 5,
    updatedAt: '2026-06-01',
    relatedSlugs: ['sales-reports', 'adding-a-second-shop'],
    sections: [
      {
        heading: 'The dashboard at a glance',
        body: 'The dashboard is the first screen you see when you log in. It shows a real-time summary of your active shop\'s performance. Everything here is live — it updates the moment a sale completes or a payment comes through.',
      },
      {
        heading: 'Revenue KPI card',
        body: 'The largest number at the top is today\'s total revenue. Below it is the percentage change compared to the same period yesterday (or last week, depending on your selected period). A green percentage means revenue is up. Red means it is down.',
        tip: 'Use the period selector (Today / This Week / This Month) above the KPI cards to change the reporting window for all metrics on the screen.',
      },
      {
        heading: 'KPI row',
        table: {
          headers: ['Metric', 'What it means', 'Why it matters'],
          rows: [
            ['Sales count', 'Total number of completed transactions', 'Volume indicator — how busy is the shop?'],
            ['Average basket', 'Total revenue ÷ number of sales', 'Rising average means customers are buying more per visit'],
            ['Gross margin %', '(Revenue − Cost of goods) ÷ Revenue × 100', 'Are you actually making money on what you sell?'],
            ['Pending payments', 'M-Pesa sales awaiting confirmation', 'Needs attention — tap to confirm or retry'],
          ],
        },
      },
      {
        heading: 'Live sales feed',
        body: 'The live feed shows the last 20 completed sales in real time. Each entry shows the sale amount, payment method (M-Pesa or Cash), which cashier processed it, and how long ago. Click any sale to open the full detail including the KRA receipt.',
      },
      {
        heading: 'Alerts strip',
        body: 'If any of the following are true, an amber or red alert strip appears below the KPI row: products below their restock threshold, pending M-Pesa payments older than 5 minutes, or a KRA eTIMS credential issue. Tap the alert to go directly to the relevant screen.',
      },
      {
        heading: 'Switching the period',
        body: 'All KPI numbers respond to the period selector at the top. Switching to This Month shows month-to-date figures. The comparison always uses the equivalent past period — This Month compares to last month, not yesterday.',
      },
    ],
  },

  // ── Multi-Shop ─────────────────────────────────────────────────────────────

  {
    slug: 'adding-a-second-shop',
    title: 'Adding a second shop to your account',
    description: 'How to create a new shop, set it up independently, and start comparing performance across locations.',
    category: 'multi-shop',
    readTime: 4,
    updatedAt: '2026-06-01',
    relatedSlugs: ['switching-shops', 'mpesa-connect', 'adding-team-members'],
    sections: [
      {
        heading: 'How multi-shop works',
        body: [
          'A single Dextra account can manage multiple shops. Each shop is completely independent: its own inventory, its own staff, its own M-Pesa credentials, and its own KRA eTIMS setup. Reports can show a single shop or all shops combined.',
          'You switch between shops using the shop switcher in the top-left corner of the dashboard. Your active shop determines which data you see and which settings you can edit.',
        ],
        note: 'The number of shops you can add depends on your plan. Starter supports 1 shop. Growth supports up to 3. Enterprise is unlimited. See Pricing for details.',
      },
      {
        heading: 'Creating a new shop',
        steps: [
          { title: 'Click the shop switcher (top-left corner)', body: 'It shows your current active shop name. Click it to open the shop list.' },
          { title: 'Click Add shop', body: 'This opens the shop creation form.' },
          { title: 'Fill in the shop details', body: 'Name, country, address, currency, and timezone. Each shop can be in a different country with a different currency.' },
          { title: 'Click Create shop', body: 'The new shop is created. You are automatically switched to it. It starts empty — no products, no staff, no M-Pesa.' },
        ],
        tip: 'Creating a shop does not copy products or staff from your existing shop. Each shop starts from scratch. If you sell the same products across locations, you will need to add them to each shop (or use the bulk import).',
      },
      {
        heading: 'Setting up the new shop',
        body: 'After creating the shop, complete the same setup as your first shop: connect M-Pesa (each shop uses its own Paybill/Till), set up KRA eTIMS (if in Kenya), add products, and add staff. See the Getting started guide for the full setup flow.',
      },
      {
        heading: 'Comparing shops in reports',
        steps: [
          { title: 'Go to Reports → Multi-shop overview', body: 'This report shows all shops side by side: revenue, sales count, average basket, and margin — for the selected period.' },
          { title: 'Use the period selector', body: 'Compare today, this week, or this month across all locations at once.' },
          { title: 'Drill into a shop', body: 'Click any shop row to open its detailed report.' },
        ],
      },
    ],
  },

  {
    slug: 'switching-shops',
    title: 'Switching between shops',
    description: 'How to change your active shop on the web dashboard and the mobile app.',
    category: 'multi-shop',
    readTime: 2,
    updatedAt: '2026-06-01',
    relatedSlugs: ['adding-a-second-shop'],
    sections: [
      {
        heading: 'What "active shop" means',
        body: 'Everything in Dextra — sales, inventory, reports, settings — is scoped to your active shop. When you switch shops, all data changes to reflect the new shop. Your login session remembers which shop you last had active.',
      },
      {
        heading: 'Switching on the web dashboard',
        steps: [
          { title: 'Click the shop name in the top-left corner', body: 'A dropdown appears showing all shops you have access to.' },
          { title: 'Click the shop you want to switch to', body: 'The page refreshes and all data updates to the new shop. Your session is updated with the new active shop.' },
        ],
      },
      {
        heading: 'Switching on the mobile owner app',
        steps: [
          { title: 'Tap your shop name at the top of the home screen', body: 'A slide-up panel appears listing all your shops.' },
          { title: 'Tap the shop you want', body: 'The app refreshes. All numbers and the live feed update to show the selected shop.' },
        ],
      },
      {
        heading: 'What changes when you switch',
        table: {
          headers: ['Changes with the shop', 'Stays the same'],
          rows: [
            ['Dashboard KPIs', 'Your account login and password'],
            ['Sales and receipts', 'Your profile settings'],
            ['Inventory and products', 'Notification preferences'],
            ['Team members', ''],
            ['M-Pesa and KRA credentials', ''],
            ['Reports', ''],
          ],
        },
      },
    ],
  },

  // ── Account & Settings ─────────────────────────────────────────────────────

  {
    slug: 'shop-settings',
    title: 'Configuring your shop settings',
    description: 'A guide to every setting available for your shop — from display name to receipt footer.',
    category: 'account-settings',
    readTime: 4,
    updatedAt: '2026-06-01',
    relatedSlugs: ['mpesa-connect', 'kra-etims-setup'],
    sections: [
      {
        heading: 'Accessing shop settings',
        body: 'Go to Settings in the sidebar. Settings are scoped to your active shop. Switch to the correct shop before making changes.',
      },
      {
        heading: 'General settings',
        table: {
          headers: ['Setting', 'What it does'],
          rows: [
            ['Shop name', 'Appears on receipts, M-Pesa STK prompts, and your Dextra dashboard header.'],
            ['Country', 'Determines your default currency and which tax compliance module is active.'],
            ['Currency', 'The currency used for all prices, reports, and receipts in this shop.'],
            ['Timezone', 'Affects timestamps on receipts and report date ranges. Use Africa/Nairobi for Kenya.'],
            ['Address', 'Printed on KRA eTIMS fiscal receipts. Use your registered KRA address.'],
            ['Phone number', 'Shown on receipts as the contact number for this shop.'],
          ],
        },
      },
      {
        heading: 'Receipt settings',
        table: {
          headers: ['Setting', 'What it does'],
          rows: [
            ['Receipt header', 'Custom text printed at the top of receipts (e.g. "Thank you for shopping with us").'],
            ['Receipt footer', 'Custom text at the bottom (e.g. return policy, WiFi password, social handle).'],
            ['Logo', 'Upload your shop logo. It appears on digital receipts and printed receipts if your printer supports it.'],
            ['Digital receipts', 'Toggle to send receipts to customers by SMS or WhatsApp (when WhatsApp integration is active).'],
          ],
        },
      },
      {
        heading: 'Payment settings',
        body: 'M-Pesa credentials are configured under Settings → Payments → M-Pesa. See the Connect M-Pesa guide for the full setup. You can also enable or disable specific payment methods (Cash, M-Pesa) from this screen.',
      },
      {
        heading: 'Tax settings',
        body: 'KRA eTIMS credentials are configured under Settings → Tax → KRA eTIMS. See the KRA eTIMS setup guide. VAT settings (rate and whether prices are VAT-inclusive or exclusive) are also set here.',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Lookup helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getDocBySlug(slug: string): Doc | undefined {
  return DOCS.find((d) => d.slug === slug)
}

export function getDocsByCategory(category: string): Doc[] {
  return DOCS.filter((d) => d.category === category)
}

export function getCategoryMeta(id: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id)
}

export function getAllSlugs(): string[] {
  return DOCS.map((d) => d.slug)
}
