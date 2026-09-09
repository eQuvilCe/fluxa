import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

const EVENTS = [
  { city: 'São Paulo', amount: 'R$ 248.00', method: 'Pix', tone: 'green' },
  { city: 'Berlin', amount: '€64.20', method: 'SEPA', tone: 'blue' },
  { city: 'Tokyo', amount: '¥12,400', method: 'Card', tone: 'pink' },
  { city: 'Lagos', amount: '₦18,500', method: 'Bank', tone: 'orange' },
  { city: 'Sydney', amount: 'A$ 89.00', method: 'Card', tone: 'cyan' },
  { city: 'Toronto', amount: 'C$ 120.00', method: 'Interac', tone: 'blue' },
  { city: 'Mumbai', amount: '₹2,499', method: 'UPI', tone: 'green' },
  { city: 'Paris', amount: '€36.50', method: 'Card', tone: 'pink' },
];

export default function LiveActivity() {
  const { lang } = useLanguage();
  const { live } = usePageCopy(lang);
  const loop = [...EVENTS, ...EVENTS];

  return (
    <section className="live-activity reveal">
      <div className="wrap">
        <div className="live-activity-head">
          <div className="kicker">
            <span className="live-pulse" aria-hidden="true" />
            {live.kicker}
          </div>
          <h2>{live.title}</h2>
          <p>{live.body}</p>
        </div>
      </div>
      <div className="live-activity-marquee" aria-hidden="true">
        <div className="live-activity-track">
          {loop.map((e, i) => (
            <div className={`live-chip tone-${e.tone}`} key={`${e.city}-${i}`}>
              <span className="live-chip-dot" />
              <span className="live-chip-city">{e.city}</span>
              <span className="live-chip-amt">{e.amount}</span>
              <span className="live-chip-method">{e.method}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
