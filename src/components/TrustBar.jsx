import { useLanguage } from '../context/LanguageContext.jsx';

const COPY = {
  en: {
    kicker: 'Enterprise trust',
    title: 'Security and reliability by design',
    body: 'Bank-grade controls, continuous monitoring and compliance posture built for teams that move real money.',
    items: [
      { t: 'SOC 2 Type II', d: 'Audited controls' },
      { t: 'PCI DSS', d: 'Level 1 ready' },
      { t: '256-bit TLS', d: 'Data in transit' },
      { t: '99.99% SLA', d: 'Core APIs' },
    ],
  },
  ru: {
    kicker: 'Доверие enterprise',
    title: 'Безопасность и надёжность по умолчанию',
    body: 'Банковский уровень контроля, непрерывный мониторинг и compliance для команд, которые двигают реальные деньги.',
    items: [
      { t: 'SOC 2 Type II', d: 'Аудит контролей' },
      { t: 'PCI DSS', d: 'Level 1 ready' },
      { t: '256-bit TLS', d: 'Данные в транзите' },
      { t: '99.99% SLA', d: 'Ключевые API' },
    ],
  },
  uz: {
    kicker: 'Enterprise ishonch',
    title: 'Xavfsizlik va ishonchlilik dizayn bo‘yicha',
    body: 'Bank darajasidagi nazorat, uzluksiz monitoring va real pul harakatlantiradigan jamoalar uchun compliance.',
    items: [
      { t: 'SOC 2 Type II', d: 'Audit nazorati' },
      { t: 'PCI DSS', d: 'Level 1 ready' },
      { t: '256-bit TLS', d: 'Tranzitdagi ma’lumot' },
      { t: '99.99% SLA', d: 'Asosiy API' },
    ],
  },
};

export default function TrustBar() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;

  return (
    <section className="trust-bar reveal">
      <div className="wrap">
        <div className="trust-bar-head">
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className="trust-grid">
          {c.items.map((item, i) => (
            <article className="trust-card" style={{ '--i': i }} key={item.t}>
              <div className="trust-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <strong>{item.t}</strong>
              <span>{item.d}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
