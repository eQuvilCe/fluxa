import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function Stories() {
  const { lang } = useLanguage();
  const { stories: s } = usePageCopy(lang);

  return (
    <section className="section soft">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">{s.kicker}</div>
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </div>
        <div className="stories">
          <article className="story-main reveal">
            <div className="story-copy">
              <small>{s.mainTag}</small>
              <h3>{s.mainTitle}</h3>
              <div className="story-metrics">
                <span><b>11K+</b>{s.mainM1}</span>
                <span><b>42%</b>{s.mainM2}</span>
              </div>
            </div>
          </article>
          <article className="story-side reveal">
            <div className="story-copy">
              <small>{s.sideTag}</small>
              <h3>{s.sideTitle}</h3>
              <div className="story-metrics"><span><b>3x</b>{s.sideM}</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
