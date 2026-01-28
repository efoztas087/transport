const cases = [
  {
    title: 'Retail distributie Benelux',
    text: 'Dagelijkse leveringen naar 120 winkels met realtime track & trace.',
  },
  {
    title: 'Internationaal farmatransport',
    text: 'Gekoelde zendingen met dubbele beveiliging en tijdkritische levering.',
  },
  {
    title: 'Projectlading havenlogistiek',
    text: 'Oversized cargo van Rotterdam naar Hamburg inclusief vergunningen.',
  },
  {
    title: 'E-commerce last-mile',
    text: 'Same-day leveringen voor webshops met tijdvakplanning.',
  },
];

export default function Projecten() {
  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <a className="logo" href="/">
            <img src="/miyazwart.png" alt="Miya Transport logo" />
          </a>
          <nav className="nav-links">
            <a href="/over-ons">Over Ons</a>
            <a href="/diensten">Diensten</a>
            <a href="/projecten">Projecten & Referenties</a>
            <a className="nav-cta" href="/offerte">
              Vraag Offerte Aan
            </a>
          </nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Projecten & referenties</p>
          <h1>Succesvolle transportprojecten</h1>
          <p>
            Van distributie tot projectlogistiek: Miya Transport levert betrouwbare oplossingen
            voor diverse sectoren.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="highlight-grid">
            {cases.map((item) => (
              <div className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <h2>Klaar voor uw volgende project?</h2>
            <p>
              Onze planners denken mee over routeoptimalisatie, laadplanning en risicobeheersing.
            </p>
            <a className="button primary" href="/offerte">
              Offerte aanvragen
            </a>
          </div>
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
              alt="Projectlogistiek"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="/miya-logo.svg" alt="Miya Transport logo" className="footer-logo" />
            <p>Betrouwbaar transport binnen Nederland en Europa.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>+31 6 1234 5678</li>
              <li>info@miyatransport.nl</li>
              <li>Transportweg 123, Amsterdam</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 Miya Transport.</div>
      </footer>
    </div>
  );
}
