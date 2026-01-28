export default function Contact() {
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
          <p className="eyebrow">Contact</p>
          <h1>Neem direct contact op</h1>
          <p>Wij staan 24/7 klaar voor vragen, spoedtransport en offertes.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div className="page-content">
            <h2>Contactgegevens</h2>
            <div className="contact-cards">
              <div>
                <h4>Adres</h4>
                <p>Transportweg 123</p>
                <p>1234 AB Amsterdam</p>
              </div>
              <div>
                <h4>Telefoon</h4>
                <p>+31 6 1234 5678</p>
              </div>
              <div>
                <h4>E-mail</h4>
                <p>info@miyatransport.nl</p>
              </div>
              <div>
                <h4>Beschikbaarheid</h4>
                <p>24/7 bereikbaar</p>
              </div>
            </div>
          </div>
          <form className="form-section">
            <h3>Stel uw vraag</h3>
            <label>
              Naam
              <input type="text" placeholder="Uw naam" />
            </label>
            <label>
              E-mailadres
              <input type="email" placeholder="naam@bedrijf.nl" />
            </label>
            <label>
              Bericht
              <textarea rows="5" placeholder="Uw vraag of bericht" />
            </label>
            <button type="button" className="button primary full">
              Verstuur bericht
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
