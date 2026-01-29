"use client";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Aanvraag succesvol verzonden!");
      setFormData({
        company: "",
        contact: "",
        email: "",
        message: "",
      });
    } else {
      alert("Er ging iets mis. Probeer opnieuw.");
    }
  };
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
            <form className="form-card"
            onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <label>
              Bedrijfsnaam
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
              />
            </label>

            <label>
              Contactpersoon
              <input
                type="text"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
              />
            </label>

            <label>
              E-mailadres
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Omschrijving
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="button primary full">
              Verstuur aanvraag
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
          
            <p>Betrouwbaar transport binnen Nederland en Europa.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>info@miyatransport.nl</li>
              <li>Duiveland 3A, Beverwijk</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 Miya Transport.</div>
      </footer>
    </div>
  );
}
