const updates = [
  {
    title: 'Nieuwe elektrische bestelwagens toegevoegd',
    date: '12 maart 2024',
    text: 'Onze vloot groeit met duurzame voertuigen voor emissievrije stadsdistributie.',
  },
  {
    title: 'Miya Transport behaalt ISO-certificering',
    date: '28 februari 2024',
    text: 'Een extra bevestiging van onze focus op kwaliteit, veiligheid en procesbeheersing.',
  },
  {
    title: 'Extra distributieroute naar Zuid-Duitsland',
    date: '10 februari 2024',
    text: 'Wekelijkse vaste planning voor snelle leveringen richting München en omgeving.',
  },
];

export default function Nieuws() {
  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <a className="logo" href="/">
            <img src="/miya-logo.svg" alt="Miya Transport logo" />
          </a>
          <nav className="nav-links">
            <a href="/over-ons">Over Ons</a>
            <a href="/diensten">Diensten</a>
            <a href="/projecten">Projecten & Referenties</a>
            <a href="/nieuws">Nieuws & Updates</a>
            <a className="nav-cta" href="/offerte">
              Vraag Offerte Aan
            </a>
          </nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Nieuws & updates</p>
          <h1>Blijf op de hoogte</h1>
          <p>De laatste ontwikkelingen en uitbreidingen binnen Miya Transport.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="news-grid">
            {updates.map((item) => (
              <article className="news-card" key={item.title}>
                <p className="news-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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
