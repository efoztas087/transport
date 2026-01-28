const services = [
  {
    title: 'Nationaal Transport',
    description:
      'Snelle en betrouwbare leveringen door heel Nederland, van pallet tot complete lading.',
  },
  {
    title: 'Internationaal Transport',
    description:
      'Grensoverschrijdend transport met volledige tracking en douane-afhandeling.',
  },
  {
    title: 'Spoedtransport',
    description:
      'Urgente leveringen binnen Nederland en Europa met directe beschikbaarheid.',
  },
  {
    title: 'Distributie',
    description: 'Efficiënte distributie naar meerdere locaties met slimme routeplanning.',
  },
  {
    title: 'Opslag & Warehousing',
    description:
      'Veilige opslag in moderne faciliteiten met flexibele voorraadbeheeroplossingen.',
  },
  {
    title: 'Projecttransport',
    description:
      'Complexe transportprojecten met speciale eisen? Wij regelen het van A tot Z.',
  },
];

export default function Diensten() {
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
          <p className="eyebrow">Onze diensten</p>
          <h1>Transportoplossingen op maat</h1>
          <p>
            Miya Transport levert complete logistieke oplossingen voor bedrijven in Nederland en
            Europa. Van spoedtransport tot warehousing.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <h2>Altijd een passend voorstel</h2>
            <p>
              Wij denken mee over planning, routeoptimalisatie en aanvullende services zoals
              verzekering en opslag. Zo ontvangt u een aanbod dat aansluit op uw logistieke
              behoefte.
            </p>
            <a className="button primary" href="/offerte">
              Vraag een offerte aan
            </a>
          </div>
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Logistiek overleg"
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
