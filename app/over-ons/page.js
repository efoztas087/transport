export default function OverOns() {
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
          <p className="eyebrow">Over Miya Transport</p>
          <h1>Betrouwbare logistiek met persoonlijke aandacht</h1>
          <p>
            Miya Transport is een professioneel transportbedrijf gespecialiseerd in nationaal en
            internationaal goederenvervoer. Wij staan voor betrouwbaarheid, punctualiteit en
            duidelijke communicatie.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div className="page-content">
            <h2>Onze missie</h2>
            <p>
              Wij helpen bedrijven in Nederland en Europa met veilige, snelle en transparante
              transportoplossingen. Met moderne voertuigen en ervaren chauffeurs leveren we elke
              zending op tijd.
            </p>
            <h2>Kernwaarden</h2>
            <ul>
              <li>Betrouwbaar</li>
              <li>Snel</li>
              <li>Professioneel</li>
              <li>Veilig</li>
              <li>Transparant</li>
              <li>Klantgericht</li>
            </ul>
          </div>
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Miya Transport team"
            />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-title">
            <h2>
              Wat u van <span>ons</span> mag verwachten
            </h2>
            <p>Wij combineren snelheid met zekerheid en persoonlijke service.</p>
          </div>
          <div className="highlight-grid">
            <div className="highlight-card">
              <h3>Realtime tracking</h3>
              <p>Altijd inzicht in de status van uw zending.</p>
            </div>
            <div className="highlight-card">
              <h3>Modern wagenpark</h3>
              <p>Veilige voertuigen die voldoen aan de hoogste normen.</p>
            </div>
            <div className="highlight-card">
              <h3>Dedicated planner</h3>
              <p>Eén aanspreekpunt voor duidelijke communicatie.</p>
            </div>
            <div className="highlight-card">
              <h3>Internationale dekking</h3>
              <p>Leveringen binnen Nederland en door heel Europa.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            
            <p>
              Uw betrouwbare partner voor professioneel transport binnen Nederland en Europa.
              Snel, veilig en transparant.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Duiveland 3A</li>
              <li>1948 RB Beverwijk</li>
              <li>info@miyatransport.nl</li>
            </ul>
          </div>
          <div>
            <h4>Snelle links</h4>
            <ul>
              <li>
                <a href="/diensten">Diensten</a>
              </li>
              <li>
                <a href="/projecten">Projecten</a>
              </li>
              <li>
              </li>
              <li>
                <a href="/offerte">Offerte aanvragen</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 Miya Transport.</div>
      </footer>
    </div>
  );
}
