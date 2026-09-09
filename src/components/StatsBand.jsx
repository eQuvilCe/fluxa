import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function StatsBand() {
  const { lang } = useLanguage();
  const page = usePageCopy(lang);

  return (
    <section className="stats-band">
      <div className="wrap stats">
        {page.stats.map(([value, label]) => (
          <div className="stat reveal" key={value + label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
