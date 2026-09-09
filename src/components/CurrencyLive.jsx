import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  UZS: 12750,
  RUB: 92,
  JPY: 151,
};

const LABELS = {
  en: { kicker: 'Live FX', title: 'Currencies in real time', body: 'Switch the base amount and watch converted values update instantly.' },
  ru: { kicker: 'Live FX', title: 'Валюты в реальном времени', body: 'Меняй сумму — конвертация обновляется сразу.' },
  uz: { kicker: 'Live FX', title: 'Valyutalar real vaqtda', body: 'Summani o‘zgartiring — konvertatsiya darhol yangilanadi.' },
};

export default function CurrencyLive() {
  const { lang } = useLanguage();
  const c = LABELS[lang] || LABELS.en;
  const [base, setBase] = useState(100);
  const [from, setFrom] = useState('USD');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  // tiny simulated drift
  const drift = (code) => {
    const wobble = Math.sin(tick + code.charCodeAt(0)) * 0.004;
    return RATES[code] * (1 + wobble);
  };

  const baseInUsd = base / drift(from);

  return (
    <section className="currency-live reveal">
      <div className="wrap">
        <div className="currency-live-head">
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className="currency-live-controls">
          <label>
            Amount
            <input
              type="number"
              min="1"
              value={base}
              onChange={(e) => setBase(Number(e.target.value) || 0)}
            />
          </label>
          <label>
            From
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {Object.keys(RATES).map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="currency-live-grid">
          {Object.keys(RATES).filter((code) => code !== from).map((code) => {
            const val = baseInUsd * drift(code);
            return (
              <div className="currency-chip" key={code}>
                <span className="currency-code">{code}</span>
                <strong>
                  {code === 'UZS' || code === 'JPY' || code === 'RUB'
                    ? val.toLocaleString(undefined, { maximumFractionDigits: 0 })
                    : val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </strong>
                <i className="currency-pulse" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
