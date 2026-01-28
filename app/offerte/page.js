export default function Offerte() {
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
          <p className="eyebrow">Offerte aanvragen</p>
          <h1>Vraag direct een vrijblijvende offerte aan</h1>
          <p>
            Vertel ons over uw transportvraag. Wij reageren binnen 2 uur met een persoonlijk
            voorstel.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div className="page-content">
            <h2>Wat kunt u verwachten?</h2>
            <ul>
              <li>Snelle reactie binnen 2 uur</li>
              <li>Duidelijke tarieven en planning</li>
              <li>Persoonlijk advies van een specialist</li>
            </ul>
            <div className="highlight-grid">
              <div className="highlight-card">
                <h3>24/7 bereikbaar</h3>
                <p>Ook buiten kantooruren voor spoedzendingen.</p>
              </div>
              <div className="highlight-card">
                <h3>Transparante prijsafspraken</h3>
                <p>Geen verborgen kosten, wel duidelijke communicatie.</p>
              </div>
            </div>
          </div>
          <form className="form-section">
            <h3>Offerteformulier</h3>
            <label>
              Bedrijfsnaam
              <input type="text" placeholder="Uw bedrijfsnaam" />
            </label>
            <label>
              Contactpersoon
              <input type="text" placeholder="Naam" />
            </label>
            <label>
              Telefoonnummer
              <input type="tel" placeholder="+31 6 1234 5678" />
            </label>
            <label>
              E-mailadres
              <input type="email" placeholder="naam@bedrijf.nl" />
            </label>
            <label>
              Transportvraag
              <textarea rows="5" placeholder="Beschrijving van de zending" />
            </label>
            <button type="button" className="button primary full">
              Verstuur aanvraag
            </button>
          </form>
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
