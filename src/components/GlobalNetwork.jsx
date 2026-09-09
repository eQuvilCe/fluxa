import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

const NODES = [
  { x: 12, y: 38, label: 'SF' },
  { x: 28, y: 32, label: 'NY' },
  { x: 48, y: 28, label: 'LDN' },
  { x: 58, y: 42, label: 'AMS' },
  { x: 72, y: 36, label: 'SGP' },
  { x: 82, y: 55, label: 'TYO' },
  { x: 38, y: 58, label: 'SÃO' },
  { x: 65, y: 62, label: 'DXB' },
];

const LINES = [
  [0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [1, 6], [3, 7], [4, 7], [0, 2],
];

export default function GlobalNetwork() {
  const { lang } = useLanguage();
  const { global: g } = usePageCopy(lang);

  return (
    <section className="global-network reveal">
      <div className="wrap">
        <div className="global-network-head">
          <div className="kicker">{g.kicker}</div>
          <h2>{g.title}</h2>
          <p>{g.body}</p>
        </div>

        <div className="global-network-stage" aria-hidden="true">
          <svg className="global-network-svg" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gn-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#635bff" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ff5a9e" stopOpacity="0.15" />
              </linearGradient>
              <radialGradient id="gn-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#635bff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="42" rx="42" ry="26" fill="url(#gn-glow)" />
            {LINES.map(([a, b], i) => {
              const n1 = NODES[a];
              const n2 = NODES[b];
              return (
                <line key={`l-${i}`} className="gn-line" x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="url(#gn-line)" strokeWidth="0.35" style={{ animationDelay: `${i * 0.12}s` }} />
              );
            })}
            {NODES.map((n, i) => (
              <g key={n.label} className="gn-node" style={{ animationDelay: `${i * 0.1}s` }}>
                <circle className="gn-pulse" cx={n.x} cy={n.y} r="2.2" />
                <circle className="gn-dot" cx={n.x} cy={n.y} r="1.1" />
                <text x={n.x} y={n.y - 3.2} textAnchor="middle" className="gn-label">{n.label}</text>
              </g>
            ))}
            <circle className="gn-packet gn-packet-a" r="0.7" fill="#00d4ff" />
            <circle className="gn-packet gn-packet-b" r="0.7" fill="#ff5a9e" />
            <circle className="gn-packet gn-packet-c" r="0.7" fill="#635bff" />
          </svg>
          <div className="global-network-chips">
            {g.chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
