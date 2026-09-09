import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function AuroraStage() {
  const { lang } = useLanguage();
  const { aurora: a } = usePageCopy(lang);

  return (
    <section className="aurora-stage" aria-label="Animated product showcase">
      <div className="aurora-stage-bg" aria-hidden="true">
        <span className="aurora-blob aurora-blob-a" />
        <span className="aurora-blob aurora-blob-b" />
        <span className="aurora-blob aurora-blob-c" />
        <span className="aurora-grid" />
      </div>
      <div className="wrap aurora-stage-inner">
        <div className="aurora-copy reveal">
          <div className="kicker">{a.kicker}</div>
          <h2>{a.title}</h2>
          <p>{a.body}</p>
        </div>
        <div className="aurora-visual" aria-hidden="true">
          <div className="aurora-core">
            <div className="aurora-core-inner">
              <span className="aurora-core-mark" />
              <strong>fluxa</strong>
              <small>live network</small>
            </div>
          </div>
          <div className="aurora-ring ring-1" />
          <div className="aurora-ring ring-2" />
          <div className="aurora-ring ring-3" />
          <div className="aurora-sat sat-1"><i />Payments</div>
          <div className="aurora-sat sat-2"><i />Billing</div>
          <div className="aurora-sat sat-3"><i />Connect</div>
          <div className="aurora-sat sat-4"><i />Radar</div>
          <div className="aurora-sat sat-5"><i />Treasury</div>
          <span className="aurora-spark spark-1" />
          <span className="aurora-spark spark-2" />
          <span className="aurora-spark spark-3" />
          <span className="aurora-spark spark-4" />
          <span className="aurora-spark spark-5" />
          <span className="aurora-spark spark-6" />
        </div>
      </div>
    </section>
  );
}
