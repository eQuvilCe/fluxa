export function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Structure only — labels come from translations via key */
export const NAV_LINKS = [
  {
    key: 'products',
    columns: [
      {
        headingKey: 'payments',
        accent: 'blue',
        items: [
          { titleKey: 'paymentsTitle', descKey: 'paymentsDesc', icon: 'card', slug: 'payments' },
          { titleKey: 'terminalTitle', descKey: 'terminalDesc', icon: 'terminal', slug: 'terminal' },
          { titleKey: 'radarTitle', descKey: 'radarDesc', icon: 'shield', slug: 'radar' },
          { titleKey: 'checkoutTitle', descKey: 'checkoutDesc', icon: 'cart', slug: 'checkout' },
        ],
      },
      {
        headingKey: 'moneyMovement',
        accent: 'cyan',
        items: [
          { titleKey: 'connectTitle', descKey: 'connectDesc', icon: 'link', slug: 'connect' },
          { titleKey: 'treasuryTitle', descKey: 'treasuryDesc', icon: 'bank', slug: 'treasury' },
          { titleKey: 'payoutsTitle', descKey: 'payoutsDesc', icon: 'send', slug: 'payouts' },
          { titleKey: 'capitalTitle', descKey: 'capitalDesc', icon: 'trending', slug: 'capital' },
        ],
      },
      {
        headingKey: 'revenueFinance',
        accent: 'green',
        items: [
          { titleKey: 'billingTitle', descKey: 'billingDesc', icon: 'receipt', slug: 'billing' },
          { titleKey: 'invoicingTitle', descKey: 'invoicingDesc', icon: 'fileText', slug: 'invoicing' },
          { titleKey: 'revRecTitle', descKey: 'revRecDesc', icon: 'barChart', slug: 'revenue-recognition' },
          { titleKey: 'taxTitle', descKey: 'taxDesc', icon: 'percent', slug: 'tax' },
        ],
      },
    ],
  },
  {
    key: 'solutions',
    columns: [
      {
        headingKey: 'byUseCase',
        accent: 'pink',
        items: [
          { titleKey: 'ecommerceTitle', descKey: 'ecommerceDesc', icon: 'cart', slug: 'e-commerce' },
          { titleKey: 'marketplacesTitle', descKey: 'marketplacesDesc', icon: 'layers', slug: 'marketplaces' },
          { titleKey: 'saasTitle', descKey: 'saasDesc', icon: 'cloud', slug: 'saas' },
          { titleKey: 'embeddedTitle', descKey: 'embeddedDesc', icon: 'puzzle', slug: 'embedded-finance' },
        ],
      },
      {
        headingKey: 'byBusinessType',
        accent: 'orange',
        items: [
          { titleKey: 'enterprisesTitle', descKey: 'enterprisesDesc', icon: 'building', slug: 'enterprises' },
          { titleKey: 'startupsTitle', descKey: 'startupsDesc', icon: 'rocket', slug: 'startups' },
          { titleKey: 'platformsTitle', descKey: 'platformsDesc', icon: 'grid', slug: 'platforms' },
          { titleKey: 'nonprofitsTitle', descKey: 'nonprofitsDesc', icon: 'heart', slug: 'nonprofits' },
        ],
      },
    ],
  },
  {
    key: 'developers',
    columns: [
      {
        headingKey: 'build',
        accent: 'blue',
        items: [
          { titleKey: 'docsTitle', descKey: 'docsDesc', icon: 'book', slug: 'documentation' },
          { titleKey: 'apiTitle', descKey: 'apiDesc', icon: 'code', slug: 'api-reference' },
          { titleKey: 'sdksTitle', descKey: 'sdksDesc', icon: 'package', slug: 'sdks-libraries' },
          { titleKey: 'webhooksTitle', descKey: 'webhooksDesc', icon: 'zap', slug: 'webhooks' },
        ],
      },
      {
        headingKey: 'tools',
        accent: 'cyan',
        items: [
          { titleKey: 'statusTitle', descKey: 'statusDesc', icon: 'activity', slug: 'api-status' },
          { titleKey: 'changelogTitle', descKey: 'changelogDesc', icon: 'list', slug: 'changelog' },
          { titleKey: 'sandboxTitle', descKey: 'sandboxDesc', icon: 'flask', slug: 'sandbox' },
          { titleKey: 'cliTitle', descKey: 'cliDesc', icon: 'command', slug: 'cli' },
        ],
      },
    ],
  },
  {
    key: 'resources',
    columns: [
      {
        headingKey: 'learn',
        accent: 'green',
        items: [
          { titleKey: 'guidesTitle', descKey: 'guidesDesc', icon: 'compass', slug: 'guides' },
          { titleKey: 'blogTitle', descKey: 'blogDesc', icon: 'edit', slug: 'blog' },
          { titleKey: 'storiesTitle', descKey: 'storiesDesc', icon: 'users', slug: 'customer-stories' },
          { titleKey: 'eventsTitle', descKey: 'eventsDesc', icon: 'calendar', slug: 'events-webinars' },
        ],
      },
      {
        headingKey: 'support',
        accent: 'pink',
        items: [
          { titleKey: 'supportCenterTitle', descKey: 'supportCenterDesc', icon: 'lifeBuoy', slug: 'support-center' },
          { titleKey: 'contactSupportTitle', descKey: 'contactSupportDesc', icon: 'messageCircle', slug: 'contact-support' },
          { titleKey: 'partnersTitle', descKey: 'partnersDesc', icon: 'share', slug: 'partners' },
          { titleKey: 'communityTitle', descKey: 'communityDesc', icon: 'users', slug: 'community' },
        ],
      },
    ],
  },
  {
    key: 'pricing',
    columns: null,
  },
];
