import { useLanguage } from '../context/LanguageContext.jsx';

const COPY = {
  en: {
    kicker: 'Core energy',
    title: 'The heartbeat of the platform',
    body: 'A living core — rings, beams and signal nodes in constant motion. Last big animation before you ship.',
  },
  ru: {
    kicker: 'Энергия ядра',
    title: 'Сердцебиение платформы',
    body: 'Живое ядро — кольца, лучи и сигнальные узлы в постоянном движении. Последняя крупная анимация перед деплоем.',
  },
  uz: {
    kicker: 'Yadro energiyasi',
    title: 'Platforma yurak urishi',
    body: 'Tirik yadro — halqalar, nurlari va signal tugunlari. Deploy oldidan oxirgi katta animatsiya.',
  },
};

export default function EnergyCore() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;

  return (
    <section className="energy-core">
      <div className="energy-core-bg" aria-hidden="true">
        <span className="ec-glow ec-g1" />
        <span className="ec-glow ec-g2" />
      </div>

      <div className="wrap energy-core-layout">
        <div className="energy-core-copy reveal">
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>

        <div className="energy-core-stage" aria-hidden="true">
          <div className="ec-beam ec-beam-h" />
          <div className="ec-beam ec-beam-v" />
          <div className="ec-beam ec-beam-d1" />
          <div className="ec-beam ec-beam-d2" />

          <div className="ec-ring ec-r1" />
          <div className="ec-ring ec-r2" />
          <div className="ec-ring ec-r3" />
          <div className="ec-ring ec-r4" />

          <div className="ec-core">
            <div className="ec-core-inner" />
            <div className="ec-core-pulse" />
          </div>

          <span className="ec-node n1" />
          <span className="ec-node n2" />
          <span className="ec-node n3" />
          <span className="ec-node n4" />
          <span className="ec-node n5" />
          <span className="ec-node n6" />
        </div>
      </div>
    </section>
  );
}
