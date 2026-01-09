export default function Home() {
  return (
    <div className="main">
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <div className="logo-badge">MT</div>
            <div>
              <div>Miya Transport</div>
              <small style={{ color: 'var(--muted)' }}>Allround logistiek</small>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#diensten">Diensten</a>
            <a href="#sectoren">Sectoren</a>
            <a href="#proces">Proces</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">
              Betrouwbaar transport voor <span>alle soorten zendingen</span>.
            </h1>
            <p className="hero-subtitle">
              Van palletdistributie tot spoedritten, Miya Transport regelt het volledige
              traject. We combineren een modern wagenpark met persoonlijke service en realtime
              inzicht in elke rit.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:Miyatransportt@gmail.com">
                Vraag een offerte aan
              </a>
              <a className="button secondary" href="#diensten">
                Bekijk onze diensten
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Altijd onderweg, altijd verbonden</h3>
            <p className="hero-subtitle">
              We plannen routes slim, communiceren proactief en leveren 24/7 support voor
              nationale en internationale transporten.
            </p>
            <div className="stat-grid">
              <div className="stat">
                <h3>24/7</h3>
                <p>Support & tracking</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Op tijd geleverd</p>
              </div>
              <div className="stat">
                <h3>EU+</h3>
                <p>Dekkingsgebied</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Ritten per maand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diensten" className="container">
        <h2 className="section-title">Onze diensten</h2>
        <p className="section-subtitle">
          Miya Transport verzorgt elk type transport. We combineren snelheid met veiligheid en
          bieden flexibele oplossingen voor bedrijven van elke omvang.
        </p>
        <div className="card-grid">
          {[
            {
              title: 'Wegtransport & distributie',
              text: 'Nationaal en internationaal transport van pallets, groupage en volle ladingen.',
            },
            {
              title: 'Spoed- & expressritten',
              text: 'Directe leveringen met prioriteit, inclusief nacht- en weekendtransport.',
            },
            {
              title: 'Gekoeld vervoer',
              text: 'Constante temperatuurcontrole voor food, farmacie en bederfelijke goederen.',
            },
            {
              title: 'Speciale ladingen',
              text: 'Beveiligde en maatwerk oplossingen voor waardevolle of afwijkende goederen.',
            },
            {
              title: 'Last-mile & e-commerce',
              text: 'Fijndistributie in steden, tijdvakleveringen en retourlogistiek.',
            },
            {
              title: 'Opslag & cross-dock',
              text: 'Korte opslag, overstap en bundeling van zendingen in onze hub.',
            },
          ].map((service) => (
            <article className="card" key={service.title}>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sectoren" className="container">
        <h2 className="section-title">Sectoren die wij bedienen</h2>
        <p className="section-subtitle">
          Dankzij onze flexibele inzet zijn wij inzetbaar binnen uiteenlopende sectoren. Van
          industriële productie tot retail en evenementenlogistiek.
        </p>
        <div className="card-grid">
          {[
            'Bouw & infrastructuur',
            'Retail & e-commerce',
            'Food & gekoelde keten',
            'High-tech & elektronica',
            'Events & projectlogistiek',
            'Farmacie & zorg',
          ].map((sector) => (
            <div className="card" key={sector}>
              <h4>{sector}</h4>
              <p>Dedicated planning, duidelijke KPI’s en vaste contactpersonen.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proces" className="container">
        <h2 className="section-title">Ons transportproces</h2>
        <p className="section-subtitle">
          We geloven in transparantie. Daarom ontvang je vanaf de aanvraag tot aflevering
          duidelijke updates en realtime inzicht.
        </p>
        <div className="pipeline">
          {[
            {
              step: '01',
              title: 'Analyse & advies',
              text: 'We bepalen samen de beste route, het juiste voertuig en de planning.',
            },
            {
              step: '02',
              title: 'Planning & voorbereiding',
              text: 'Digitale documenten, laadplanning en beveiligde communicatie.',
            },
            {
              step: '03',
              title: 'Transport & tracking',
              text: 'Live updates, ETA’s en een chauffeur die altijd bereikbaar is.',
            },
            {
              step: '04',
              title: 'Oplevering & rapportage',
              text: 'Bewijs van aflevering en duidelijke rapportage voor je administratie.',
            },
          ].map((item) => (
            <div className="pipeline-step" key={item.step}>
              <span>{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <h2>Direct transport nodig?</h2>
          <p>
            Met één contactpersoon en heldere afspraken zorgen wij dat jouw zending veilig en
            op tijd aankomt.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+31600000000">
              Bel direct
            </a>
            <a className="button secondary" href="mailto:Miyatransportt@gmail.com">
              Stuur een e-mail
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <h2 className="section-title">Contact & locatie</h2>
        <p className="section-subtitle">
          Bezoek ons kantoor in Beverwijk of neem direct contact op voor een vrijblijvende
          offerte.
        </p>
        <div className="contact-grid">
          <div className="card">
            <h4>E-mail</h4>
            <p>Miyatransportt@gmail.com</p>
          </div>
          <div className="card">
            <h4>Adres</h4>
            <p>Duiveland 1</p>
            <p>1948 RB Beverwijk</p>
          </div>
          <div className="card">
            <h4>Beschikbaarheid</h4>
            <p>24/7 telefonisch bereikbaar</p>
            <p>Realtime updates per zending</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Miya Transport. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
