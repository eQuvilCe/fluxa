const LOGOS = ['Northwind', 'Atlas', 'Prism', 'Horizon', 'Mercury', 'Linear', 'Orbit', 'Nimbus'];

export default function LogoCarousel() {
  return (
    <section className="logos">
      <div className="wrap reveal">
        <div className="logo-marquee">
          <div className="logo-track">
            {LOGOS.map((name) => (
              <span key={`a-${name}`}>{name}</span>
            ))}
            {LOGOS.map((name) => (
              <span key={`b-${name}`}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
