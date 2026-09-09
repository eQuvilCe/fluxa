/** Per-feature unique copy + layout variant. Keys = item.slug */
export const FEATURE_COPY = {
  // ——— Products / Payments ———
  payments: {
    en: {
      headline: 'Accept payments anywhere',
      lead: 'Online cards, wallets, bank debits and local methods — one API, global coverage.',
      benefits: [
        { title: 'Optimized checkout', body: 'Higher conversion with Link, wallets and smart payment routing.' },
        { title: 'Local methods', body: 'iDEAL, SEPA, PIX, UPI and more without extra integrations.' },
        { title: 'Real-time risk', body: 'Radar scores every charge before money moves.' },
        { title: 'Unified reporting', body: 'One dashboard for volume, fees and disputes.' },
      ],
      steps: [
        { n: '01', title: 'Create payment', body: 'Generate a PaymentIntent from your backend.' },
        { n: '02', title: 'Confirm on client', body: 'Collect details with Elements or Checkout.' },
        { n: '03', title: 'Settle & report', body: 'Funds land, webhooks fire, books stay clean.' },
      ],
    },
    ru: {
      headline: 'Принимайте платежи где угодно',
      lead: 'Карты, кошельки, банковские списания и локальные методы — один API, глобальное покрытие.',
      benefits: [
        { title: 'Оптимизированный checkout', body: 'Выше конверсия за счёт Link, кошельков и умного роутинга.' },
        { title: 'Локальные методы', body: 'iDEAL, SEPA, PIX, UPI и другие без лишних интеграций.' },
        { title: 'Риск в реальном времени', body: 'Radar оценивает каждую операцию до движения денег.' },
        { title: 'Единая отчётность', body: 'Один дашборд по объёму, комиссиям и диспутам.' },
      ],
      steps: [
        { n: '01', title: 'Создайте платёж', body: 'Сгенерируйте PaymentIntent на бэкенде.' },
        { n: '02', title: 'Подтвердите на клиенте', body: 'Соберите данные через Elements или Checkout.' },
        { n: '03', title: 'Расчёт и отчёт', body: 'Средства поступают, webhooks срабатывают, учёт в порядке.' },
      ],
    },
    uz: {
      headline: 'To‘lovlarni istalgan joyda qabul qiling',
      lead: 'Kartalar, hamyonlar, bank debetlari va mahalliy usullar — bitta API, global qamrov.',
      benefits: [
        { title: 'Optimallashtirilgan checkout', body: 'Link, hamyonlar va aqlli marshrutlash bilan yuqori konversiya.' },
        { title: 'Mahalliy usullar', body: 'iDEAL, SEPA, PIX, UPI va boshqalar qo‘shimcha integratsiyasiz.' },
        { title: 'Real vaqtda risk', body: 'Radar har bir operatsiyani pul harakatidan oldin baholaydi.' },
        { title: 'Yagona hisobot', body: 'Hajm, komissiya va bahslar uchun bitta dashboard.' },
      ],
      steps: [
        { n: '01', title: 'To‘lov yarating', body: 'Backendda PaymentIntent yarating.' },
        { n: '02', title: 'Klientda tasdiqlang', body: 'Elements yoki Checkout orqali ma’lumot yig‘ing.' },
        { n: '03', title: 'Hisob-kitob', body: 'Mablag‘ keladi, webhook ishlaydi, hisob tartibda.' },
      ],
    },
    layout: 'split',
    anim: 'bars',
  },
  terminal: {
    en: {
      headline: 'In-person payments that feel online',
      lead: 'Smart readers, offline mode and unified inventory for stores, pop-ups and field teams.',
      benefits: [
        { title: 'Tap, chip, swipe', body: 'One device stack for cards and contactless wallets.' },
        { title: 'Offline resilience', body: 'Keep selling when the network drops; sync later.' },
        { title: 'Same backend', body: 'Online and in-person share customers, refunds and reports.' },
        { title: 'Fast setup', body: 'Order readers, pair in minutes, go live the same day.' },
      ],
      steps: [
        { n: '01', title: 'Order hardware', body: 'Choose readers for counters or mobile teams.' },
        { n: '02', title: 'Pair & configure', body: 'Connect to your location and tax settings.' },
        { n: '03', title: 'Sell anywhere', body: 'Accept payments online or on the floor.' },
      ],
    },
    ru: {
      headline: 'Офлайн-платежи с ощущением онлайна',
      lead: 'Умные терминалы, офлайн-режим и единый инвентарь для магазинов, поп-апов и полевых команд.',
      benefits: [
        { title: 'Tap, chip, swipe', body: 'Один стек устройств для карт и бесконтактных кошельков.' },
        { title: 'Работа офлайн', body: 'Продавайте при потере сети — синхронизация позже.' },
        { title: 'Общий бэкенд', body: 'Онлайн и офлайн делят клиентов, возвраты и отчёты.' },
        { title: 'Быстрый старт', body: 'Закажите терминалы, подключите за минуты, запустите в тот же день.' },
      ],
      steps: [
        { n: '01', title: 'Закажите оборудование', body: 'Выберите терминалы для кассы или мобильных команд.' },
        { n: '02', title: 'Подключите и настройте', body: 'Привяжите локацию и налоговые параметры.' },
        { n: '03', title: 'Продавайте везде', body: 'Принимайте оплату онлайн и в зале.' },
      ],
    },
    uz: {
      headline: 'Ofayn to‘lovlar onlayn kabi',
      lead: 'Aqlli terminallar, ofayn rejim va yagona inventar — do‘konlar, pop-up va maydon jamoalari uchun.',
      benefits: [
        { title: 'Tap, chip, swipe', body: 'Kartalar va kontaktsiz hamyonlar uchun bitta qurilma steki.' },
        { title: 'Ofayn bardoshlilik', body: 'Tarmoq uzilganda ham soting; keyin sinxronlang.' },
        { title: 'Bir xil backend', body: 'Onlayn va ofayn mijozlar, qaytarishlar va hisobotlarni ulashadi.' },
        { title: 'Tez sozlash', body: 'Terminallarni buyurtma qiling, daqiqalarda ulang, shu kuni ishga tushiring.' },
      ],
      steps: [
        { n: '01', title: 'Uskuna buyurtma', body: 'Kassa yoki mobil jamoalar uchun terminallarni tanlang.' },
        { n: '02', title: 'Ulang va sozlang', body: 'Lokatsiya va soliq sozlamalarini ulang.' },
        { n: '03', title: 'Har joyda soting', body: 'Onlayn yoki zalda to‘lov qabul qiling.' },
      ],
    },
    layout: 'cards',
    anim: 'pulse',
  },
  radar: {
    en: {
      headline: 'Stop fraud before it hits revenue',
      lead: 'ML models, custom rules and 3DS — block bad actors without killing good customers.',
      benefits: [
        { title: 'Adaptive scoring', body: 'Models learn from your traffic and global patterns.' },
        { title: 'Rules you control', body: 'Block, review or allow with precise conditions.' },
        { title: 'Less false declines', body: 'Protect conversion while cutting chargebacks.' },
        { title: 'Full audit trail', body: 'Every decision is explainable for compliance.' },
      ],
      steps: [
        { n: '01', title: 'Enable Radar', body: 'Turn on default protection in one click.' },
        { n: '02', title: 'Tune rules', body: 'Add allow/block lists for your business.' },
        { n: '03', title: 'Review & improve', body: 'Inspect cases and retrain outcomes.' },
      ],
    },
    ru: {
      headline: 'Останавливайте мошенничество до потери выручки',
      lead: 'ML-модели, свои правила и 3DS — блокируйте злоумышленников без отказа хорошим клиентам.',
      benefits: [
        { title: 'Адаптивный скоринг', body: 'Модели учатся на вашем трафике и глобальных паттернах.' },
        { title: 'Правила под ваш контроль', body: 'Блок, ревью или allow с точными условиями.' },
        { title: 'Меньше ложных отказов', body: 'Защищайте конверсию и снижайте chargeback.' },
        { title: 'Полный аудит', body: 'Каждое решение объяснимо для compliance.' },
      ],
      steps: [
        { n: '01', title: 'Включите Radar', body: 'Базовая защита — в один клик.' },
        { n: '02', title: 'Настройте правила', body: 'Добавьте allow/block списки под бизнес.' },
        { n: '03', title: 'Ревью и улучшение', body: 'Разбирайте кейсы и улучшайте модель.' },
      ],
    },
    uz: {
      headline: 'Firibgarlikni daromadga urilishidan oldin to‘xtating',
      lead: 'ML modellar, maxsus qoidalar va 3DS — yomon aktorlarni yaxshi mijozlarni yo‘qotmasdan bloklang.',
      benefits: [
        { title: 'Moslashuvchan scoring', body: 'Modellar trafik va global naqshlardan o‘rganadi.' },
        { title: 'Siz nazorat qiladigan qoidalar', body: 'Aniq shartlar bilan block, review yoki allow.' },
        { title: 'Kam soxta rad etish', body: 'Konversiyani himoya qiling va chargebackni kamaytiring.' },
        { title: 'To‘liq audit', body: 'Har bir qaror compliance uchun tushuntiriladi.' },
      ],
      steps: [
        { n: '01', title: 'Radar yoqing', body: 'Standart himoyani bir bosishda yoqing.' },
        { n: '02', title: 'Qoidalarni sozlang', body: 'Biznesingiz uchun allow/block ro‘yxatlarini qo‘shing.' },
        { n: '03', title: 'Ko‘rib chiqing', body: 'Holatlarni tekshiring va natijalarni yaxshilang.' },
      ],
    },
    layout: 'split',
    anim: 'shield',
  },
  checkout: {
    en: {
      headline: 'Prebuilt payment form that converts',
      lead: 'Hosted or embedded Checkout — localization, tax and wallets included.',
      benefits: [
        { title: 'Drop-in UI', body: 'Ship a polished form without building from scratch.' },
        { title: 'Global by default', body: 'Languages, currencies and local methods built in.' },
        { title: 'Tax & discounts', body: 'Automatic tax calculation and promo codes.' },
        { title: 'Mobile-first', body: 'Responsive layout tuned for thumbs and wallets.' },
      ],
      steps: [
        { n: '01', title: 'Create session', body: 'Generate a Checkout Session with line items.' },
        { n: '02', title: 'Redirect or embed', body: 'Send customers to hosted page or embed.' },
        { n: '03', title: 'Fulfill order', body: 'Webhook confirms payment; ship the goods.' },
      ],
    },
    ru: {
      headline: 'Готовая форма оплаты с высокой конверсией',
      lead: 'Hosted или embedded Checkout — локализация, налоги и кошельки уже внутри.',
      benefits: [
        { title: 'Готовый UI', body: 'Красивая форма без сборки с нуля.' },
        { title: 'Глобально из коробки', body: 'Языки, валюты и локальные методы встроены.' },
        { title: 'Налоги и скидки', body: 'Авторасчёт налогов и промокоды.' },
        { title: 'Mobile-first', body: 'Адаптив под пальцы и кошельки.' },
      ],
      steps: [
        { n: '01', title: 'Создайте сессию', body: 'Checkout Session с позициями заказа.' },
        { n: '02', title: 'Redirect или embed', body: 'Отправьте на hosted или встройте.' },
        { n: '03', title: 'Выполните заказ', body: 'Webhook подтверждает оплату — отправляйте товар.' },
      ],
    },
    uz: {
      headline: 'Yuqori konversiyali tayyor to‘lov shakli',
      lead: 'Hosted yoki embedded Checkout — lokalizatsiya, soliq va hamyonlar ichida.',
      benefits: [
        { title: 'Tayyor UI', body: 'Noldan qurmasdan chiroyli forma.' },
        { title: 'Global standart', body: 'Tillar, valyutalar va mahalliy usullar o‘rnatilgan.' },
        { title: 'Soliq va chegirmalar', body: 'Avtomatik soliq hisobi va promo kodlar.' },
        { title: 'Mobile-first', body: 'Barmoq va hamyonlar uchun mos layout.' },
      ],
      steps: [
        { n: '01', title: 'Sessiya yarating', body: 'Buyurtma pozitsiyalari bilan Checkout Session.' },
        { n: '02', title: 'Redirect yoki embed', body: 'Hosted sahifaga yuboring yoki joylashtiring.' },
        { n: '03', title: 'Buyurtmani bajaring', body: 'Webhook to‘lovni tasdiqlaydi — jo‘nating.' },
      ],
    },
    layout: 'cards',
    anim: 'bars',
  },
  connect: {
    en: {
      headline: 'Payments for platforms & marketplaces',
      lead: 'Onboard sellers, split funds and manage risk across multi-sided businesses.',
      benefits: [
        { title: 'Seller onboarding', body: 'KYC flows and account links in days, not months.' },
        { title: 'Flexible splits', body: 'Destination charges or separate charges & transfers.' },
        { title: 'Risk isolation', body: 'Protect the platform while sellers operate freely.' },
        { title: 'Payout control', body: 'Schedule and route payouts to bank accounts worldwide.' },
      ],
      steps: [
        { n: '01', title: 'Create connected accounts', body: 'Onboard sellers with Express or Custom.' },
        { n: '02', title: 'Route payments', body: 'Charge and split in one API call.' },
        { n: '03', title: 'Pay out', body: 'Move funds to sellers on your schedule.' },
      ],
    },
    ru: {
      headline: 'Платежи для платформ и маркетплейсов',
      lead: 'Онбординг продавцов, сплит средств и управление риском в multi-sided бизнесе.',
      benefits: [
        { title: 'Онбординг продавцов', body: 'KYC и привязка счетов за дни, не месяцы.' },
        { title: 'Гибкий сплит', body: 'Destination charges или separate charges & transfers.' },
        { title: 'Изоляция риска', body: 'Защита платформы при свободе продавцов.' },
        { title: 'Контроль выплат', body: 'Расписание и маршрутизация выплат на счета по миру.' },
      ],
      steps: [
        { n: '01', title: 'Connected accounts', body: 'Онбординг через Express или Custom.' },
        { n: '02', title: 'Маршрутизация', body: 'Списание и сплит одним API-вызовом.' },
        { n: '03', title: 'Выплаты', body: 'Средства продавцам по вашему расписанию.' },
      ],
    },
    uz: {
      headline: 'Platforma va marketplace uchun to‘lovlar',
      lead: 'Sotuvchilarni onboarding, mablag‘larni bo‘lish va multi-sided biznesda riskni boshqarish.',
      benefits: [
        { title: 'Sotuvchi onboarding', body: 'KYC va hisob bog‘lash oylar emas, kunlar ichida.' },
        { title: 'Moslashuvchan split', body: 'Destination charges yoki separate charges & transfers.' },
        { title: 'Risk izolyatsiyasi', body: 'Sotuvchilar erkin ishlaganda platformani himoya qiling.' },
        { title: 'To‘lov nazorati', body: 'Dunyo bo‘ylab bank hisoblariga to‘lovlarni rejalashtiring.' },
      ],
      steps: [
        { n: '01', title: 'Connected accounts', body: 'Express yoki Custom orqali onboarding.' },
        { n: '02', title: 'To‘lov marshruti', body: 'Bitta API chaqiruvida charge va split.' },
        { n: '03', title: 'To‘lovlar', body: 'Sotuvchilarga o‘z jadvalingiz bo‘yicha.' },
      ],
    },
    layout: 'timeline',
    anim: 'orbit',
  },
  treasury: {
    en: {
      headline: 'Banking-as-a-service embedded',
      lead: 'Accounts, cards and money movement inside your product experience.',
      benefits: [
        { title: 'Embedded accounts', body: 'Give users balances without becoming a bank.' },
        { title: 'Issuing ready', body: 'Virtual and physical cards with spend controls.' },
        { title: 'Compliant foundation', body: 'Partner banks and program management included.' },
        { title: 'Real-time ledger', body: 'Every move tracked for ops and finance.' },
      ],
      steps: [
        { n: '01', title: 'Open accounts', body: 'Provision financial accounts for users.' },
        { n: '02', title: 'Move money', body: 'Inbound, outbound and internal transfers.' },
        { n: '03', title: 'Issue cards', body: 'Control spend by merchant, category or limit.' },
      ],
    },
    ru: {
      headline: 'Banking-as-a-service внутри продукта',
      lead: 'Счета, карты и движение денег прямо в вашем UX.',
      benefits: [
        { title: 'Встроенные счета', body: 'Балансы пользователям без статуса банка.' },
        { title: 'Issuing из коробки', body: 'Виртуальные и пластиковые карты с лимитами.' },
        { title: 'Compliance-база', body: 'Банки-партнёры и program management включены.' },
        { title: 'Ledger в реальном времени', body: 'Каждое движение для ops и финансов.' },
      ],
      steps: [
        { n: '01', title: 'Откройте счета', body: 'Финансовые аккаунты для пользователей.' },
        { n: '02', title: 'Двигайте деньги', body: 'Входящие, исходящие и внутренние переводы.' },
        { n: '03', title: 'Выпускайте карты', body: 'Контроль трат по мерчанту, категории или лимиту.' },
      ],
    },
    uz: {
      headline: 'Mahsulot ichida banking-as-a-service',
      lead: 'Hisoblar, kartalar va pul harakati to‘g‘ridan-to‘g‘ri UX ichida.',
      benefits: [
        { title: 'O‘rnatilgan hisoblar', body: 'Bank bo‘lmasdan foydalanuvchilarga balans.' },
        { title: 'Issuing tayyor', body: 'Virtual va plastik kartalar, sarf nazorati bilan.' },
        { title: 'Compliance asosi', body: 'Hamkor banklar va dastur boshqaruvi ichida.' },
        { title: 'Real vaqt ledger', body: 'Har bir harakat ops va moliya uchun.' },
      ],
      steps: [
        { n: '01', title: 'Hisob oching', body: 'Foydalanuvchilar uchun moliyaviy hisoblar.' },
        { n: '02', title: 'Pul harakati', body: 'Kiruvchi, chiquvchi va ichki o‘tkazmalar.' },
        { n: '03', title: 'Karta chiqaring', body: 'Merchant, kategoriya yoki limit bo‘yicha nazorat.' },
      ],
    },
    layout: 'split',
    anim: 'bars',
  },
  payouts: {
    en: {
      headline: 'Send money to sellers worldwide',
      lead: 'Fast, tracked payouts to bank accounts and wallets in local currency.',
      benefits: [
        { title: 'Global reach', body: 'Pay contractors and sellers in dozens of countries.' },
        { title: 'Clear status', body: 'Know when funds left and when they arrived.' },
        { title: 'Batch friendly', body: 'Schedule thousands of payouts without ops pain.' },
        { title: 'Reconcile easily', body: 'Match every payout to an order or invoice.' },
      ],
      steps: [
        { n: '01', title: 'Collect details', body: 'Bank or wallet info via secure onboarding.' },
        { n: '02', title: 'Create payout', body: 'Amount, currency and destination in one call.' },
        { n: '03', title: 'Track delivery', body: 'Webhooks update status until settled.' },
      ],
    },
    ru: {
      headline: 'Отправляйте деньги продавцам по миру',
      lead: 'Быстрые отслеживаемые выплаты на счета и кошельки в локальной валюте.',
      benefits: [
        { title: 'Глобальный охват', body: 'Платите подрядчикам и продавцам в десятках стран.' },
        { title: 'Понятный статус', body: 'Когда ушли и когда дошли средства.' },
        { title: 'Удобные батчи', body: 'Тысячи выплат без операционной боли.' },
        { title: 'Лёгкая сверка', body: 'Каждая выплата к заказу или счёту.' },
      ],
      steps: [
        { n: '01', title: 'Соберите реквизиты', body: 'Банк или кошелёк через безопасный онбординг.' },
        { n: '02', title: 'Создайте выплату', body: 'Сумма, валюта и получатель — один вызов.' },
        { n: '03', title: 'Отслеживайте', body: 'Webhooks обновляют статус до зачисления.' },
      ],
    },
    uz: {
      headline: 'Sotuvchilarga dunyo bo‘ylab pul yuboring',
      lead: 'Mahalliy valyutada bank va hamyonlarga tez, kuzatiladigan to‘lovlar.',
      benefits: [
        { title: 'Global qamrov', body: 'O‘nlab mamlakatlarda pudratchi va sotuvchilarga to‘lang.' },
        { title: 'Aniq holat', body: 'Mablag‘ qachon chiqdi va qachon yetdi.' },
        { title: 'Batch qulay', body: 'Minglab to‘lovlarni ops og‘riqsiz rejalashtiring.' },
        { title: 'Oson solishtirish', body: 'Har bir to‘lovni buyurtma yoki hisobga bog‘lang.' },
      ],
      steps: [
        { n: '01', title: 'Rekvizit yig‘ing', body: 'Xavfsiz onboarding orqali bank yoki hamyon.' },
        { n: '02', title: 'To‘lov yarating', body: 'Summa, valyuta va manzil — bitta chaqiruv.' },
        { n: '03', title: 'Kuzating', body: 'Webhook holatni hisobga tushguncha yangilaydi.' },
      ],
    },
    layout: 'timeline',
    anim: 'pulse',
  },
  capital: {
    en: {
      headline: 'Financing for your customers',
      lead: 'Offer capital based on payment history — grow GMV without taking balance-sheet risk alone.',
      benefits: [
        { title: 'Data-driven offers', body: 'Underwrite from real processing volume.' },
        { title: 'Embedded UX', body: 'Customers apply and get funds inside your product.' },
        { title: 'Shared economics', body: 'Align incentives between platform and capital partner.' },
        { title: 'Risk controls', body: 'Caps, reserves and monitoring built in.' },
      ],
      steps: [
        { n: '01', title: 'Qualify', body: 'Identify eligible sellers from payment data.' },
        { n: '02', title: 'Offer', body: 'Present terms in-dashboard with one click.' },
        { n: '03', title: 'Fund & repay', body: 'Disburse and recover via processing volume.' },
      ],
    },
    ru: {
      headline: 'Финансирование для ваших клиентов',
      lead: 'Капитал на основе истории платежей — растите GMV без всего риска на балансе.',
      benefits: [
        { title: 'Офферы по данным', body: 'Андеррайтинг по реальному обороту.' },
        { title: 'Встроенный UX', body: 'Заявка и получение средств внутри продукта.' },
        { title: 'Общая экономика', body: 'Выравнивание интересов платформы и партнёра.' },
        { title: 'Контроль риска', body: 'Лимиты, резервы и мониторинг внутри.' },
      ],
      steps: [
        { n: '01', title: 'Квалификация', body: 'Подходящие продавцы по платёжным данным.' },
        { n: '02', title: 'Оффер', body: 'Условия в дашборде в один клик.' },
        { n: '03', title: 'Выдача и возврат', body: 'Выплата и погашение через оборот.' },
      ],
    },
    uz: {
      headline: 'Mijozlaringiz uchun moliyalashtirish',
      lead: 'To‘lov tarixiga asoslangan kapital — balans xavfisiz GMV oshiring.',
      benefits: [
        { title: 'Ma’lumotga asoslangan', body: 'Haqiqiy aylanmadan underwriting.' },
        { title: 'O‘rnatilgan UX', body: 'Mijozlar mahsulot ichida ariza beradi va mablag‘ oladi.' },
        { title: 'Umumiy iqtisod', body: 'Platforma va kapital hamkor manfaatlarini moslashtiring.' },
        { title: 'Risk nazorati', body: 'Limitlar, rezervlar va monitoring ichida.' },
      ],
      steps: [
        { n: '01', title: 'Saralash', body: 'To‘lov ma’lumotlaridan mos sotuvchilar.' },
        { n: '02', title: 'Taklif', body: 'Dashboardda bir bosishda shartlar.' },
        { n: '03', title: 'Mablag‘ va qaytarish', body: 'Aylanma orqali berish va undirish.' },
      ],
    },
    layout: 'cards',
    anim: 'bars',
  },
  billing: {
    en: {
      headline: 'Subscriptions that actually retain',
      lead: 'Plans, usage metering, dunning and revenue recovery in one billing engine.',
      benefits: [
        { title: 'Flexible plans', body: 'Flat, tiered, usage and hybrid pricing models.' },
        { title: 'Smart retries', body: 'Recover failed payments without annoying customers.' },
        { title: 'Proration & trials', body: 'Upgrades, downgrades and free trials handled cleanly.' },
        { title: 'Finance-ready', body: 'Invoices, tax and recognition hooks included.' },
      ],
      steps: [
        { n: '01', title: 'Define products', body: 'Create prices and recurring intervals.' },
        { n: '02', title: 'Subscribe customers', body: 'Attach payment methods and start cycles.' },
        { n: '03', title: 'Recover & expand', body: 'Dunning, upgrades and usage overages.' },
      ],
    },
    ru: {
      headline: 'Подписки, которые удерживают',
      lead: 'Тарифы, usage, dunning и recovery выручки в одном движке биллинга.',
      benefits: [
        { title: 'Гибкие планы', body: 'Фикс, tiered, usage и гибридные модели.' },
        { title: 'Умные ретраи', body: 'Возвращайте failed-платежи без раздражения клиентов.' },
        { title: 'Proration и trials', body: 'Апгрейды, даунгрейды и триалы без боли.' },
        { title: 'Готово для финансов', body: 'Счета, налоги и hooks для recognition.' },
      ],
      steps: [
        { n: '01', title: 'Определите продукты', body: 'Цены и recurring-интервалы.' },
        { n: '02', title: 'Подпишите клиентов', body: 'Привяжите методы оплаты и запустите циклы.' },
        { n: '03', title: 'Recovery и рост', body: 'Dunning, апгрейды и usage overage.' },
      ],
    },
    uz: {
      headline: 'Saqlab qoladigan obunalar',
      lead: 'Tariflar, usage, dunning va daromad recovery — bitta billing dvigatelida.',
      benefits: [
        { title: 'Moslashuvchan tariflar', body: 'Flat, tiered, usage va gibrid modellar.' },
        { title: 'Aqlli qayta urinish', body: 'Mijozni bezovta qilmasdan failed to‘lovlarni qaytaring.' },
        { title: 'Proration va trial', body: 'Upgrade, downgrade va bepul sinovlar oson.' },
        { title: 'Moliya uchun tayyor', body: 'Hisoblar, soliq va recognition hooklari.' },
      ],
      steps: [
        { n: '01', title: 'Mahsulot belgilang', body: 'Narx va takroriy intervallar.' },
        { n: '02', title: 'Mijozni obuna qiling', body: 'To‘lov usulini ulang va siklni boshlang.' },
        { n: '03', title: 'Qayta tiklash va o‘sish', body: 'Dunning, upgrade va usage overage.' },
      ],
    },
    layout: 'split',
    anim: 'orbit',
  },
  invoicing: {
    en: {
      headline: 'Online invoices customers actually pay',
      lead: 'Beautiful invoices, payment links and automatic reminders in one flow.',
      benefits: [
        { title: 'One-click pay', body: 'Customers pay from the invoice without accounts.' },
        { title: 'Automated follow-up', body: 'Reminders and overdue states on autopilot.' },
        { title: 'Line-item clarity', body: 'Taxes, discounts and notes that finance trusts.' },
        { title: 'Sync to books', body: 'Export or API into your accounting stack.' },
      ],
      steps: [
        { n: '01', title: 'Draft invoice', body: 'Add customers, items and due dates.' },
        { n: '02', title: 'Send', body: 'Email or share a hosted invoice link.' },
        { n: '03', title: 'Collect', body: 'Payment posts; status updates live.' },
      ],
    },
    ru: {
      headline: 'Онлайн-счета, которые реально оплачивают',
      lead: 'Красивые инвойсы, payment links и автонапоминания в одном флоу.',
      benefits: [
        { title: 'Оплата в один клик', body: 'Клиент платит со счёта без регистрации.' },
        { title: 'Авто-follow-up', body: 'Напоминания и overdue на автопилоте.' },
        { title: 'Прозрачные позиции', body: 'Налоги, скидки и примечания, которым доверяет финансы.' },
        { title: 'Синх с учётом', body: 'Экспорт или API в ваш accounting-стек.' },
      ],
      steps: [
        { n: '01', title: 'Черновик', body: 'Клиент, позиции и срок оплаты.' },
        { n: '02', title: 'Отправка', body: 'Email или hosted-ссылка на счёт.' },
        { n: '03', title: 'Сбор оплаты', body: 'Платёж проходит — статус обновляется.' },
      ],
    },
    uz: {
      headline: 'Haqiqatan to‘lanadigan onlayn hisoblar',
      lead: 'Chiroyli invoice, to‘lov havolalari va avtomatik eslatmalar bitta oqimda.',
      benefits: [
        { title: 'Bir bosishda to‘lov', body: 'Mijoz hisobdan ro‘yxatsiz to‘laydi.' },
        { title: 'Avto follow-up', body: 'Eslatma va overdue avtopilotda.' },
        { title: 'Aniq pozitsiyalar', body: 'Soliq, chegirma va izohlar — moliya ishonadi.' },
        { title: 'Hisobga sinx', body: 'Eksport yoki API orqali accounting stekiga.' },
      ],
      steps: [
        { n: '01', title: 'Qoralama', body: 'Mijoz, pozitsiyalar va muddat.' },
        { n: '02', title: 'Yuborish', body: 'Email yoki hosted invoice havolasi.' },
        { n: '03', title: 'Yig‘ish', body: 'To‘lov o‘tadi — holat yangilanadi.' },
      ],
    },
    layout: 'cards',
    anim: 'pulse',
  },
  'revenue-recognition': {
    en: {
      headline: 'Accrual accounting without the spreadsheet hell',
      lead: 'Recognize revenue correctly across subscriptions, usage and multi-element deals.',
      benefits: [
        { title: 'ASC 606 ready', body: 'Performance obligations and deferred revenue tracked.' },
        { title: 'Audit-friendly', body: 'Every journal entry tied to source data.' },
        { title: 'Close faster', body: 'Month-end without manual reclass entries.' },
        { title: 'Finance + product', body: 'Same truth for RevOps and the ledger.' },
      ],
      steps: [
        { n: '01', title: 'Map products', body: 'Define recognition rules per SKU.' },
        { n: '02', title: 'Ingest events', body: 'Invoices and usage stream into the engine.' },
        { n: '03', title: 'Close books', body: 'Export schedules and journal entries.' },
      ],
    },
    ru: {
      headline: 'Учёт выручки без ада в таблицах',
      lead: 'Корректное признание по подпискам, usage и multi-element сделкам.',
      benefits: [
        { title: 'Готово к ASC 606', body: 'Обязательства и deferred revenue на учёте.' },
        { title: 'Удобно для аудита', body: 'Каждая проводка к исходным данным.' },
        { title: 'Быстрее close', body: 'Конец месяца без ручных reclass.' },
        { title: 'Finance + product', body: 'Одна правда для RevOps и ledger.' },
      ],
      steps: [
        { n: '01', title: 'Карта продуктов', body: 'Правила recognition по SKU.' },
        { n: '02', title: 'События', body: 'Инвойсы и usage в движок.' },
        { n: '03', title: 'Закрытие', body: 'Экспорт schedules и проводок.' },
      ],
    },
    uz: {
      headline: 'Jadval do‘zaxisiz accrual hisobi',
      lead: 'Obuna, usage va multi-element bitimlar bo‘yicha to‘g‘ri tan olish.',
      benefits: [
        { title: 'ASC 606 tayyor', body: 'Majburiyatlar va deferred revenue kuzatiladi.' },
        { title: 'Audit uchun qulay', body: 'Har bir yozuv manbaga bog‘langan.' },
        { title: 'Tezroq yopish', body: 'Oy oxiri qo‘lda reclasssiz.' },
        { title: 'Finance + product', body: 'RevOps va ledger uchun bitta haqiqat.' },
      ],
      steps: [
        { n: '01', title: 'Mahsulot xaritasi', body: 'SKU bo‘yicha recognition qoidalari.' },
        { n: '02', title: 'Hodisalar', body: 'Invoice va usage dvigatelga.' },
        { n: '03', title: 'Yopish', body: 'Jadval va jurnal yozuvlarini eksport.' },
      ],
    },
    layout: 'timeline',
    anim: 'bars',
  },
  tax: {
    en: {
      headline: 'Sales tax & VAT on autopilot',
      lead: 'Calculate, collect and file in the jurisdictions where you sell.',
      benefits: [
        { title: 'Accurate rates', body: 'Product tax codes and nexus rules applied live.' },
        { title: 'Checkout integrated', body: 'Tax line items appear before the customer pays.' },
        { title: 'Filing support', body: 'Reports structured for your tax team or partner.' },
        { title: 'Global coverage', body: 'US sales tax, EU VAT, and expanding markets.' },
      ],
      steps: [
        { n: '01', title: 'Set nexus', body: 'Tell us where you have tax obligations.' },
        { n: '02', title: 'Tax at checkout', body: 'Rates calculated on every eligible charge.' },
        { n: '03', title: 'Report & file', body: 'Export summaries for each period.' },
      ],
    },
    ru: {
      headline: 'Налог с продаж и НДС на автопилоте',
      lead: 'Считайте, собирайте и отчитывайтесь в юрисдикциях, где продаёте.',
      benefits: [
        { title: 'Точные ставки', body: 'Коды налога и nexus применяются live.' },
        { title: 'Встроено в checkout', body: 'Строка налога до оплаты клиентом.' },
        { title: 'Помощь с filing', body: 'Отчёты для налоговой команды или партнёра.' },
        { title: 'Глобальное покрытие', body: 'US sales tax, EU VAT и новые рынки.' },
      ],
      steps: [
        { n: '01', title: 'Задайте nexus', body: 'Где у вас налоговые обязательства.' },
        { n: '02', title: 'Налог в checkout', body: 'Ставки на каждом подходящем платеже.' },
        { n: '03', title: 'Отчёт и filing', body: 'Сводки за период на экспорт.' },
      ],
    },
    uz: {
      headline: 'Savdo solig‘i va QQS avtopilotda',
      lead: 'Sotadigan yurisdiksiyalarda hisoblang, yig‘ing va hisobot bering.',
      benefits: [
        { title: 'Aniq stavkalar', body: 'Mahsulot soliq kodlari va nexus live qo‘llanadi.' },
        { title: 'Checkoutga integratsiya', body: 'Soliq qatori mijoz to‘lashidan oldin.' },
        { title: 'Filing yordami', body: 'Soliq jamoasi yoki hamkor uchun hisobotlar.' },
        { title: 'Global qamrov', body: 'US sales tax, EU VAT va yangi bozorlar.' },
      ],
      steps: [
        { n: '01', title: 'Nexus belgilang', body: 'Qayerda soliq majburiyatingiz bor.' },
        { n: '02', title: 'Checkoutda soliq', body: 'Har bir mos to‘lovda stavka.' },
        { n: '03', title: 'Hisobot', body: 'Davr bo‘yicha xulosalarni eksport.' },
      ],
    },
    layout: 'split',
    anim: 'shield',
  },
};

// Solutions & other categories — shorter unique blurbs
const SHORT = {
  'e-commerce': {
    en: { headline: 'Sell online without friction', lead: 'Checkout, fraud and tax tuned for digital storefronts.' },
    ru: { headline: 'Продавайте онлайн без трения', lead: 'Checkout, антифрод и налоги под цифровые витрины.' },
    uz: { headline: 'Ishqalanishsiz onlayn soting', lead: 'Raqamli vitrinalar uchun checkout, firibgarlik va soliq.' },
  },
  marketplaces: {
    en: { headline: 'Power multi-sided commerce', lead: 'Onboard sellers, split payments and scale the network.' },
    ru: { headline: 'Мультисторонний commerce', lead: 'Онбординг продавцов, сплит платежей и рост сети.' },
    uz: { headline: 'Ko‘p tomonlama tijorat', lead: 'Sotuvchi onboarding, to‘lov split va tarmoq o‘sishi.' },
  },
  saas: {
    en: { headline: 'Billing built for SaaS', lead: 'Subscriptions, usage and expansion revenue in one stack.' },
    ru: { headline: 'Биллинг для SaaS', lead: 'Подписки, usage и expansion-выручка в одном стеке.' },
    uz: { headline: 'SaaS uchun billing', lead: 'Obuna, usage va expansion daromad bitta stekda.' },
  },
  'embedded-finance': {
    en: { headline: 'Financial products inside your app', lead: 'Accounts, cards and payouts without leaving your UX.' },
    ru: { headline: 'Финансовые продукты внутри приложения', lead: 'Счета, карты и выплаты без выхода из UX.' },
    uz: { headline: 'Ilova ichidagi moliyaviy mahsulotlar', lead: 'UX dan chiqmasdan hisob, karta va to‘lovlar.' },
  },
  enterprises: {
    en: { headline: 'Infrastructure for global scale', lead: 'Compliance, multi-entity and enterprise support.' },
    ru: { headline: 'Инфраструктура глобального масштаба', lead: 'Compliance, multi-entity и enterprise-поддержка.' },
    uz: { headline: 'Global miqyos infratuzilmasi', lead: 'Compliance, multi-entity va enterprise yordam.' },
  },
  startups: {
    en: { headline: 'Launch fast, stay flexible', lead: 'Start with payments, add billing and treasury as you grow.' },
    ru: { headline: 'Быстрый запуск, гибкость на росте', lead: 'Начните с платежей, добавьте биллинг и treasury по мере роста.' },
    uz: { headline: 'Tez ishga tushirish, o‘sishda moslashuv', lead: 'To‘lovlardan boshlang, o‘sish bilan billing va treasury qo‘shing.' },
  },
  platforms: {
    en: { headline: 'Onboard sellers at scale', lead: 'Connect-powered platforms for marketplaces and SaaS.' },
    ru: { headline: 'Онбординг продавцов в масштабе', lead: 'Connect-платформы для маркетплейсов и SaaS.' },
    uz: { headline: 'Masshtabda sotuvchi onboarding', lead: 'Marketplace va SaaS uchun Connect platformalar.' },
  },
  nonprofits: {
    en: { headline: 'Accept donations with less friction', lead: 'Recurring gifts, tax receipts and campaign tracking.' },
    ru: { headline: 'Пожертвования с меньшим трением', lead: 'Регулярные взносы, чеки и трекинг кампаний.' },
    uz: { headline: 'Kam ishqalanish bilan xayriya', lead: 'Takroriy hadyalar, soliq cheklari va kampaniya kuzatuvi.' },
  },
  documentation: {
    en: { headline: 'Start building today', lead: 'Guides, quickstarts and copy-paste examples for every API.' },
    ru: { headline: 'Начните разработку сегодня', lead: 'Гайды, quickstart и примеры для каждого API.' },
    uz: { headline: 'Bugun qurishni boshlang', lead: 'Har bir API uchun qo‘llanma, quickstart va misollar.' },
  },
  'api-reference': {
    en: { headline: 'Full API surface, clearly documented', lead: 'Endpoints, webhooks and error codes in one place.' },
    ru: { headline: 'Полный API, понятная документация', lead: 'Эндпоинты, webhooks и коды ошибок в одном месте.' },
    uz: { headline: 'To‘liq API, aniq hujjat', lead: 'Endpoint, webhook va xato kodlari bir joyda.' },
  },
  'sdks-libraries': {
    en: { headline: 'Official clients for every stack', lead: 'Node, Python, Go, Java, .NET, mobile and more.' },
    ru: { headline: 'Официальные клиенты для любого стека', lead: 'Node, Python, Go, Java, .NET, mobile и другие.' },
    uz: { headline: 'Har qanday stek uchun rasmiy klientlar', lead: 'Node, Python, Go, Java, .NET, mobile va boshqalar.' },
  },
  webhooks: {
    en: { headline: 'Event-driven integrations', lead: 'Reliable delivery, retries and signed payloads.' },
    ru: { headline: 'Интеграции на событиях', lead: 'Надёжная доставка, ретраи и подписанные payload.' },
    uz: { headline: 'Hodisaga asoslangan integratsiya', lead: 'Ishonchli yetkazish, qayta urinish va imzolangan payload.' },
  },
  'api-status': {
    en: { headline: 'Live system status', lead: 'Incidents, latency and component health in real time.' },
    ru: { headline: 'Живой статус системы', lead: 'Инциденты, latency и здоровье компонентов в реальном времени.' },
    uz: { headline: 'Jonli tizim holati', lead: 'Real vaqtda incident, latency va komponent salomatligi.' },
  },
  changelog: {
    en: { headline: "What's new", lead: 'Product updates, API changes and deprecations.' },
    ru: { headline: 'Что нового', lead: 'Обновления продукта, изменения API и deprecation.' },
    uz: { headline: 'Yangiliklar', lead: 'Mahsulot yangilanishlari, API o‘zgarishlari va deprecation.' },
  },
  sandbox: {
    en: { headline: 'Test without risk', lead: 'Simulate charges, disputes and edge cases safely.' },
    ru: { headline: 'Тестируйте без риска', lead: 'Симулируйте платежи, диспуты и edge-кейсы безопасно.' },
    uz: { headline: 'Xavfsiz test', lead: 'To‘lov, bahs va edge holatlarni xavfsiz simulyatsiya.' },
  },
  cli: {
    en: { headline: 'Command-line productivity', lead: 'Trigger webhooks, inspect objects and ship faster.' },
    ru: { headline: 'Продуктивность в терминале', lead: 'Триггер webhooks, инспекция объектов и быстрый ship.' },
    uz: { headline: 'Terminal unumdorligi', lead: 'Webhook ishga tushirish, obyekt tekshirish va tezroq ship.' },
  },
  guides: {
    en: { headline: 'Step-by-step help', lead: 'From first charge to advanced platform patterns.' },
    ru: { headline: 'Пошаговая помощь', lead: 'От первого платежа до сложных платформенных паттернов.' },
    uz: { headline: 'Bosqichma-bosqich yordam', lead: 'Birinchi to‘lovdan murakkab platforma naqshlarigacha.' },
  },
  blog: {
    en: { headline: 'News & insights', lead: 'Product stories, engineering posts and industry takes.' },
    ru: { headline: 'Новости и аналитика', lead: 'Истории продукта, инженерные посты и взгляд на индустрию.' },
    uz: { headline: 'Yangiliklar va tahlillar', lead: 'Mahsulot hikoyalari, muhandislik postlari va sanoat qarashlari.' },
  },
  'customer-stories': {
    en: { headline: 'Success stories', lead: 'How teams use Fluxa to grow revenue and ship faster.' },
    ru: { headline: 'Истории успеха', lead: 'Как команды используют Fluxa для роста выручки.' },
    uz: { headline: 'Muvaffaqiyat hikoyalari', lead: 'Jamoalar Fluxa bilan daromadni qanday oshiradi.' },
  },
  'events-webinars': {
    en: { headline: 'Live sessions', lead: 'Workshops, launches and community meetups.' },
    ru: { headline: 'Живые сессии', lead: 'Воркшопы, запуски и встречи сообщества.' },
    uz: { headline: 'Jonli sessiyalar', lead: 'Vorkshop, ishga tushirish va jamiyat uchrashuvlari.' },
  },
  'support-center': {
    en: { headline: 'Get help fast', lead: 'Articles, troubleshooting and account guidance.' },
    ru: { headline: 'Быстрая помощь', lead: 'Статьи, troubleshooting и гайды по аккаунту.' },
    uz: { headline: 'Tez yordam', lead: 'Maqolalar, troubleshooting va hisob bo‘yicha yo‘riqnoma.' },
  },
  'contact-support': {
    en: { headline: 'Talk to a human', lead: 'Priority support for technical and account issues.' },
    ru: { headline: 'Поговорить с человеком', lead: 'Приоритетная поддержка по технике и аккаунту.' },
    uz: { headline: 'Inson bilan gaplashish', lead: 'Texnik va hisob masalalari bo‘yicha ustuvor yordam.' },
  },
  issuing: {
    en: { headline: 'Card issuing for modern platforms', lead: 'Launch virtual and physical cards with spend controls, compliance and real-time tracking.' },
    ru: { headline: 'Выпуск карт для современных платформ', lead: 'Виртуальные и физические карты с контролем трат, compliance и трекингом в реальном времени.' },
    uz: { headline: 'Zamonaviy platformalar uchun karta chiqarish', lead: 'Virtual va jismoniy kartalar, sarf nazorati va real-time kuzatuv.' },
  },
  partners: {
    en: { headline: 'Find a partner', lead: 'Agencies and tech partners who build on Fluxa.' },
    ru: { headline: 'Найти партнёра', lead: 'Агентства и tech-партнёры на базе Fluxa.' },
    uz: { headline: 'Hamkor topish', lead: 'Fluxa asosida quradigan agentlik va tech hamkorlar.' },
  },
  community: {
    en: { headline: 'Join the discussion', lead: 'Forums, Discord and open-source contributors.' },
    ru: { headline: 'Присоединиться к обсуждению', lead: 'Форумы, Discord и open-source контрибьюторы.' },
    uz: { headline: 'Muhokamaga qo‘shiling', lead: 'Forum, Discord va open-source ishtirokchilar.' },
  },
};

const DEFAULT_BENEFITS = {
  en: [
    { title: 'Launch faster', body: 'Prebuilt flows so your team ships without reinventing the stack.' },
    { title: 'Built to scale', body: 'Peak traffic, multi-currency and compliance out of the box.' },
    { title: 'Unified data', body: 'One source of truth across payments, billing and risk.' },
    { title: 'Developer-first', body: 'Clean APIs, webhooks and sandboxes for engineers.' },
  ],
  ru: [
    { title: 'Быстрее в прод', body: 'Готовые флоу — без изобретения стека с нуля.' },
    { title: 'Готово к масштабу', body: 'Пики, мультивалютность и compliance из коробки.' },
    { title: 'Единые данные', body: 'Один источник правды по платежам, биллингу и рискам.' },
    { title: 'Для разработчиков', body: 'Чистые API, webhooks и sandbox.' },
  ],
  uz: [
    { title: 'Tezroq ishga tushirish', body: 'Tayyor oqimlar — stekni qayta ixtiro qilmasdan.' },
    { title: 'Masshtabga tayyor', body: 'Yuqori yuklama, ko‘p valyuta va compliance.' },
    { title: 'Yagona ma’lumot', body: 'To‘lov, billing va risk bo‘yicha bitta haqiqat.' },
    { title: 'Dasturchilar uchun', body: 'Toza API, webhook va sandbox.' },
  ],
};

const DEFAULT_STEPS = {
  en: [
    { n: '01', title: 'Connect', body: 'Link your account and configure the basics.' },
    { n: '02', title: 'Integrate', body: 'SDKs or API — sandbox first, then go live.' },
    { n: '03', title: 'Grow', body: 'Monitor metrics and expand to new markets.' },
  ],
  ru: [
    { n: '01', title: 'Подключите', body: 'Аккаунт и базовые настройки в дашборде.' },
    { n: '02', title: 'Интегрируйте', body: 'SDK или API — сначала sandbox, потом прод.' },
    { n: '03', title: 'Растите', body: 'Метрики и выход на новые рынки.' },
  ],
  uz: [
    { n: '01', title: 'Ulang', body: 'Hisob va asosiy sozlamalar.' },
    { n: '02', title: 'Integratsiya', body: 'SDK yoki API — avval sandbox, keyin prod.' },
    { n: '03', title: 'O‘sing', body: 'Metrikalar va yangi bozorlar.' },
  ],
};

const LAYOUTS = ['split', 'cards', 'timeline'];
const ANIMS = ['bars', 'pulse', 'orbit', 'shield'];

export function getFeatureCopy(slug, lang = 'en') {
  const full = FEATURE_COPY[slug];
  const hash = [...(slug || 'x')].reduce((a, c) => a + c.charCodeAt(0), 0);
  const defaults = {
    benefits: DEFAULT_BENEFITS[lang] || DEFAULT_BENEFITS.en,
    steps: DEFAULT_STEPS[lang] || DEFAULT_STEPS.en,
    layout: LAYOUTS[hash % LAYOUTS.length],
    anim: ANIMS[hash % ANIMS.length],
  };

  if (full) {
    const loc = full[lang] || full.en || {};
    return {
      headline: loc.headline || null,
      lead: loc.lead || null,
      benefits: loc.benefits || defaults.benefits,
      steps: loc.steps || defaults.steps,
      layout: full.layout || defaults.layout,
      anim: full.anim || defaults.anim,
    };
  }

  const short = typeof SHORT !== 'undefined' ? SHORT[slug] : null;
  const s = short ? short[lang] || short.en : null;

  return {
    headline: s?.headline || null,
    lead: s?.lead || null,
    benefits: defaults.benefits,
    steps: defaults.steps,
    layout: defaults.layout,
    anim: defaults.anim,
  };
}

export const UI_STRINGS = {
  en: {
    back: 'Back to home',
    notFoundKicker: 'Not found',
    notFoundTitle: "This page doesn't exist",
    notFoundBody: "We couldn't find that feature.",
    benefitsTitle: 'Why teams choose this',
    stepsTitle: 'How it works',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '135+', label: 'Currencies' },
      { value: '<50ms', label: 'API latency' },
      { value: '24/7', label: 'Support' },
    ],
    ctaTitle: 'Ready to try it?',
    ctaBody: 'Spin up a test account or talk to sales about rolling this out.',
    startNow: 'Start now',
    contactSales: 'Contact sales',
    live: 'LIVE',
    performance: 'Performance',
    connected: 'Connected',
    growing: 'Growing',
  },
  ru: {
    back: 'На главную',
    notFoundKicker: 'Не найдено',
    notFoundTitle: 'Такой страницы нет',
    notFoundBody: 'Мы не нашли эту функцию.',
    benefitsTitle: 'Почему выбирают это',
    stepsTitle: 'Как это работает',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '135+', label: 'Валют' },
      { value: '<50ms', label: 'Задержка API' },
      { value: '24/7', label: 'Поддержка' },
    ],
    ctaTitle: 'Готовы попробовать?',
    ctaBody: 'Создайте тестовый аккаунт или обсудите внедрение с отделом продаж.',
    startNow: 'Начать',
    contactSales: 'Связаться с отделом продаж',
    live: 'LIVE',
    performance: 'Производительность',
    connected: 'Подключено',
    growing: 'Рост',
  },
  uz: {
    back: 'Bosh sahifaga',
    notFoundKicker: 'Topilmadi',
    notFoundTitle: 'Bunday sahifa yo‘q',
    notFoundBody: 'Bu funksiyani topa olmadik.',
    benefitsTitle: 'Nima uchun tanlashadi',
    stepsTitle: 'Qanday ishlaydi',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '135+', label: 'Valyutalar' },
      { value: '<50ms', label: 'API kechikishi' },
      { value: '24/7', label: 'Yordam' },
    ],
    ctaTitle: 'Sinab ko‘rishga tayyormisiz?',
    ctaBody: 'Test hisob yarating yoki sotuv bilan muhokama qiling.',
    startNow: 'Boshlash',
    contactSales: 'Sotuv bilan bog‘lanish',
    live: 'LIVE',
    performance: 'Ishlash',
    connected: 'Ulangan',
    growing: 'O‘sish',
  },
};
