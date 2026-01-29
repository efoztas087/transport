const services = [
  {
    title: 'Nationaal Transport',
    description:
      'Snelle en betrouwbare leveringen door heel Nederland, van pallet tot complete lading.',
    bullets: ['Levering binnen 24-48 uur', 'Moderne vrachtwagens', 'Flexibele planning'],
  },
  {
    title: 'Internationaal Transport',
    description:
      'Grensoverschrijdend transport met volledige tracking en douane-afhandeling.',
    bullets: ['Geheel Europa', 'Douane expertise', 'CMR verzekerd'],
  },
  {
    title: 'Spoedtransport',
    description:
      'Voor urgente leveringen binnen Nederland en Europa. Direct beschikbaar.',
    bullets: ['24/7 beschikbaar', 'Same-day levering', 'Dedicated chauffeur'],
  },
  {
    title: 'Distributie',
    description:
      'Efficiënte distributie naar meerdere locaties met slimme routeplanning.',
    bullets: ['Multi-drop leveringen', 'Geoptimaliseerde routes', 'POD bewijs'],
  },
  {
    title: 'Opslag & Warehousing',
    description:
      'Veilige opslag in moderne faciliteiten met flexibele voorraadbeheeroplossingen.',
    bullets: ['Beveiligde locaties', 'Voorraad management', 'Pick & pack service'],
  },
  {
    title: 'Projecttransport',
    description:
      'Complexe transportprojecten met speciale eisen? Wij regelen het van A tot Z.',
    bullets: ['Oversized cargo', 'Speciale vergunningen', 'Projectmanagement'],
  },
];

const projects = [
  {
    title: 'Retail distributie Benelux',
    text: 'Dagelijkse leveringen naar 120 winkels met realtime track & trace.',
  },
  {
    title: 'High-value pharma zending',
    text: 'Gekoeld transport met dubbele beveiliging en tijdkritische levering.',
  },
  {
    title: 'Internationale projectlading',
    text: 'Oversized cargo van Rotterdam naar Hamburg inclusief vergunningen.',
  },
];
export default function Home() {
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

      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow"></p>
            <h1>
              Betrouwbaar Transport <span>Door Heel Europa</span>
            </h1>
            <p>
              Snelle en professionele transportoplossingen voor nationaal en internationaal
              goederenvervoer. Punctueel, veilig en transparant.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/offerte">
                Vraag Direct Offerte Aan
              </a>
              <a className="button ghost" href="/contact">
                Contact Opnemen
              </a>
            </div>
            <div className="hero-highlights">
              <div>
                <h3>24/7 Beschikbaar</h3>
                <p>Altijd bereikbaar voor spoedtransport</p>
              </div>
              <div>
                <h3>100% Verzekerd</h3>
                <p>Volledige dekking voor uw goederen</p>
              </div>
              <div>
                <h3>Live Tracking</h3>
                <p>Volg uw zending in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light" id="diensten">
        <div className="container">
          <div className="section-title">
            <h2>
              Onze <span>Transport Diensten</span>
            </h2>
            <p>Professionele transportoplossingen afgestemd op uw specifieke behoeften.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="center">
            <a className="button primary" href="/diensten">
              Bekijk Alle Diensten
            </a>
          </div>
        </div>
      </section>

      <section className="section soft" id="over-ons">
        <div className="container split">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Professionele chauffeur"
            />
            <div className="experience-badge">
              <strong>15+</strong>
              <span>Jaar ervaring</span>
            </div>
          </div>
          <div>
            <div className="section-title">
              <h2>
                Waarom Kiezen Voor <span>Miya Transport</span>?
              </h2>
              <p>
                Wij onderscheiden ons door kwaliteit, betrouwbaarheid en persoonlijke service.
              </p>
            </div>
            <div className="feature-list">
              <div>
                <h4>Betrouwbaar & Punctueel</h4>
                <p>Wij leveren op tijd en houden afspraken altijd na.</p>
              </div>
              <div>
                <h4>Modern Wagenpark</h4>
                <p>Onze vloot is uitgerust met de nieuwste tracking systemen.</p>
              </div>
              <div>
                <h4>Ervaren Team</h4>
                <p>Professionele chauffeurs met jarenlange ervaring.</p>
              </div>
              <div>
                <h4>Transparante Communicatie</h4>
                <p>Realtime updates en duidelijke prijsafspraken.</p>
              </div>
              <div>
                <h4>Volledig Verzekerd</h4>
                <p>Alle transporten zijn verzekerd conform CMR-verdrag.</p>
              </div>
              <div>
                <h4>Duurzaam Transport</h4>
                <p>We investeren continu in milieuvriendelijke voertuigen.</p>
              </div>
            </div>
            <a className="button primary" href="/over-ons">
              Lees Meer Over Ons
            </a>
          </div>
        </div>
      </section>

      <section className="section dark" id="projecten">
        <div className="container">
          <div className="section-title">
            <h2>
              Projecten & <span>Referenties</span>
            </h2>
            <p>Een greep uit recente projecten voor bedrijven in Nederland en Europa.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    
      <section className="section image-cta" id="offerte">
        <div className="overlay" />
        <div className="container cta-card">
          <p className="eyebrow">Klaar om te starten?</p>
          <h2>Klaar Om Te Starten?</h2>
          <p>
            Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe Miya Transport uw
            logistieke partner kan zijn.
          </p>
          <div className="cta-highlights">
            <div>
              <h4>Snelle reactie</h4>
              <p>Binnen 2 uur antwoord</p>
            </div>
            <div>
              <h4>Gratis offerte</h4>
              <p>Geen verplichtingen</p>
            </div>
            <div>
              <h4>Persoonlijk advies</h4>
              <p>Maatwerk oplossingen</p>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="/offerte">
              Vraag Offerte Aan
            </a>
          </div>
        </div>
      </section>

      <section className="section light" id="proces">
        <div className="container">
          <div className="section-title">
            <h2>
              Ons <span>Transport Proces</span>
            </h2>
            <p>Van aanvraag tot levering - zo werken wij.</p>
          </div>
          <div className="process">
            {[
              {
                step: '1',
                title: 'Offerte aanvraag',
                text: 'Vraag online of telefonisch een offerte aan.',
              },
              {
                step: '2',
                title: 'Persoonlijk advies',
                text: 'Binnen 2 uur ontvangt u een scherpe offerte en advies.',
              },
              {
                step: '3',
                title: 'Planning & ophalen',
                text: 'Wij plannen het transport en halen uw goederen op.',
              },
              {
                step: '4',
                title: 'Tijdige levering',
                text: 'Uw goederen worden veilig en op tijd geleverd.',
              },
            ].map((item) => (
              <div className="process-step" key={item.step}>
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <a className="button primary" href="/contact">
              Neem Contact Op
            </a>
          </div>
        </div>
      </section>

      <section className="section light" id="contact">
        <div className="container split">
          <div>
            <div className="section-title">
              <h2>
                Contact <span>& Locatie</span>
              </h2>
              <p>Neem direct contact op of bezoek ons kantoor in Amsterdam.</p>
            </div>
            <div className="contact-cards">
              <div>
                <h4>Adres</h4>
                <p>Duiveland 3A</p>
                <p>1948 RB Beverwijk</p>
              </div>
              <div>
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
          <form className="form-card">
            <h3>Offerte aanvragen</h3>
            <label>
              Bedrijfsnaam
              <input type="text" placeholder="Uw bedrijfsnaam" />
            </label>
            <label>
              Contactpersoon
              <input type="text" placeholder="Naam" />
            </label>
            <label>
              E-mailadres
              <input type="email" placeholder="naam@bedrijf.nl" />
            </label>
            <label>
              Omschrijving
              <textarea rows="4" placeholder="Vertel ons over uw transportvraag" />
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
     
            <p>
              Uw betrouwbare partner voor professioneel transport binnen Nederland en Europa.
              Snel, veilig en transparant.
            </p>
            <div>
            </div>
          </div>
          <div>
            <h4>Snelle Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/over-ons">Over Ons</a>
              </li>
              <li>
                <a href="/diensten">Diensten</a>
              </li>
              <li>
                <a href="/projecten">Projecten & Referenties</a>
              </li>
              <li>
                <a href="/nieuws">Nieuws & Updates</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Onze Diensten</h4>
            <ul>
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li></li>
              <li>Duiveland 3A</li>
              <li>1948 RB Beverwijk</li>
              <li>info@miyatransport.nl</li>
              <li>24/7 bereikbaar</li>
            </ul>
            <a className="button primary" href="/offerte">
              Vraag Offerte
            </a>
          </div>
        </div>
        <div className="footer-bottom">© 2024 Miya Transport. Alle rechten voorbehouden.</div>
      </footer>
    </div>
  );
}
