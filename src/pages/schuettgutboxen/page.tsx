import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SchuettgutboxenPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Lagerboxen & Schüttgutboxen Buttlar | Vey Unternehmensgruppe | Container mieten";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lagerboxen und Schüttgutboxen in Buttlar mieten. Flexible Container für Bau, Garten und Umzug. Verschiedene Größen verfügbar. Jetzt unverbindlich anfragen!');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Lagerboxen, Schüttgutboxen, Container mieten, Baucontainer, Buttlar, Vey Unternehmensgruppe');
    }
  }, []);

  const boxTypes = [
    {
      title: "Holz-Lagerbox Klein",
      size: "1,5 m³",
      dimensions: "150 x 100 x 100 cm",
      price: "ab 45€/Monat",
      features: [
        "Ideal für Brennholz",
        "Wetterfest und stabil",
        "Einfache Beladung",
        "Stapelbar"
      ],
      image: "/images/box-klein.jpg"
    },
    {
      title: "Holz-Lagerbox Mittel",
      size: "3 m³",
      dimensions: "200 x 150 x 100 cm",
      price: "ab 65€/Monat",
      features: [
        "Perfekt für Haushalte",
        "Große Kapazität",
        "Robuste Konstruktion",
        "Lange Lebensdauer"
      ],
      image: "/images/box-mittel.jpg"
    },
    {
      title: "Holz-Lagerbox Groß",
      size: "5 m³",
      dimensions: "250 x 200 x 100 cm",
      price: "ab 85€/Monat",
      features: [
        "Für große Mengen",
        "Gewerbliche Nutzung",
        "Maximale Stabilität",
        "Gabelstapler-geeignet"
      ],
      image: "/images/box-gross.jpg"
    },
    {
      title: "Universal-Schüttgutbox",
      size: "2-4 m³",
      dimensions: "Variabel",
      price: "ab 55€/Monat",
      features: [
        "Vielseitig einsetzbar",
        "Für verschiedene Materialien",
        "Flexible Größen",
        "Kippmechanismus optional"
      ],
      image: "/images/box-universal.jpg"
    }
  ];

  const applications = [
    {
      title: "Brennholz-Lagerung",
      description: "Perfekt für die trockene und übersichtliche Lagerung von Brennholz. Schützt vor Feuchtigkeit und Witterung.",
      icon: "ri-fire-line"
    },
    {
      title: "Baumaterial",
      description: "Ideal für die Aufbewahrung von Baumaterialien wie Kies, Sand oder Schotter auf Baustellen.",
      icon: "ri-building-line"
    },
    {
      title: "Gartenabfälle",
      description: "Praktisch für die Sammlung von Grünschnitt, Ästen und anderen Gartenabfällen.",
      icon: "ri-leaf-line"
    },
    {
      title: "Recycling-Material",
      description: "Geeignet für die getrennte Lagerung von Recycling-Materialien und Wertstoffen.",
      icon: "ri-recycle-line"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/company-logo.png"
                alt="Vey Unternehmensgruppe Logo"
                className="h-12 w-auto"
              />
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Startseite
              </Link>
              <a href="/#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Dienstleistungen
              </a>
              <a href="/#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Über uns
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Kontakt
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <a 
                href="tel:+49123456789" 
                className="hidden sm:flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>Jetzt anrufen</span>
              </a>
              
              <button 
                className="lg:hidden flex flex-col space-y-1 cursor-pointer p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-orange-600 font-medium">
                Startseite
              </Link>
              <a href="/#services" className="block text-gray-700 hover:text-orange-600 font-medium">
                Dienstleistungen
              </a>
              <a href="/#about" className="block text-gray-700 hover:text-orange-600 font-medium">
                Über uns
              </a>
              <a href="/#contact" className="block text-gray-700 hover:text-orange-600 font-medium">
                Kontakt
              </a>
              <a 
                href="tel:+49123456789" 
                className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors w-fit"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>Jetzt anrufen</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/hero-schuettgut.jpg')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Lager- und <span className="text-orange-500">Schüttgutboxen</span> zur Miete
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
              Robuste und wetterfeste Boxen für Brennholz, Baumaterialien und mehr. 
              Flexible Mietdauer und verschiedene Größen verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#boxen" 
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl whitespace-nowrap"
              >
                Verfügbare Boxen
              </a>
              <Link 
                to="/service-inquiry?service=Lagerboxen" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Vorteile unserer <span className="text-orange-600">Schüttgutboxen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Praktische und langlebige Lösungen für Ihre Lagerbedürfnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wetterfest</h3>
              <p className="text-gray-600">
                Robuste Konstruktion schützt Ihr Lagergut vor Regen, Schnee und Feuchtigkeit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Mietdauer</h3>
              <p className="text-gray-600">
                Mieten Sie für Tage, Wochen oder Monate – ganz nach Ihrem Bedarf.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lieferung inklusive</h3>
              <p className="text-gray-600">
                Wir liefern die Box direkt zu Ihnen und holen sie wieder ab.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robust &amp; Stabil</h3>
              <p className="text-gray-600">
                Hochwertige Materialien garantieren lange Lebensdauer und Stabilität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boxen Übersicht */}
      <section id="boxen" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unsere <span className="text-orange-600">Lagerboxen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verschiedene Größen für jeden Bedarf – von privat bis gewerblich
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boxTypes.map((box, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${box.image}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{box.title}</h3>
                  <div className="text-orange-600 font-bold text-2xl mb-2">{box.price}</div>
                  <div className="text-gray-600 mb-4">
                    <div className="flex items-center mb-1">
                      <i className="ri-ruler-line mr-2"></i>
                      <span className="text-sm">Volumen: {box.size}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-layout-line mr-2"></i>
                      <span className="text-sm">{box.dimensions}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {box.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/service-inquiry?service=Lagerboxen"
                    className="block w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center whitespace-nowrap"
                  >
                    Jetzt mieten
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungsbereiche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Vielseitige <span className="text-orange-600">Einsatzmöglichkeiten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Schüttgutboxen eignen sich für verschiedenste Materialien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${app.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              So einfach <span className="text-orange-600">funktioniert's</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In nur 4 Schritten zu Ihrer Lagerbox
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anfrage stellen</h3>
              <p className="text-gray-600">
                Kontaktieren Sie uns telefonisch oder über unser Kontaktformular.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beratung</h3>
              <p className="text-gray-600">
                Wir beraten Sie zur passenden Boxgröße und Mietdauer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lieferung</h3>
              <p className="text-gray-600">
                Wir liefern die Box zum vereinbarten Termin zu Ihnen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Abholung</h3>
              <p className="text-gray-600">
                Nach der Mietdauer holen wir die Box wieder ab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Benötigen Sie eine Lagerbox?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. 
            Wir beraten Sie gerne zur passenden Lösung für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/service-inquiry?service=Lagerboxen"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Jetzt anfragen
            </Link>
            <a 
              href="tel:+49123456789" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              +49 176 71085234
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <i className="ri-hammer-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">VEY Unternehmensgruppe</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Ihr zuverlässiger Partner für vielseitige Dienstleistungen. 
                Qualität und Kundenzufriedenheit seit über 15 Jahren.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+4917671085234" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                  <i className="ri-phone-line"></i>
                </a>
                <a href="mailto:info@vey-unternehmensgruppe.de" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                  <i className="ri-mail-line"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-500">Dienstleistungen</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/brennholz" className="hover:text-white transition-colors">Brennholz</Link></li>
                <li><Link to="/baumfaellarbeiten" className="hover:text-white transition-colors">Baumfällarbeiten</Link></li>
                <li><Link to="/mulcharbeiten" className="hover:text-white transition-colors">Mulcharbeiten</Link></li>
                <li><Link to="/abbrucharbeiten" className="hover:text-white transition-colors">Abbrucharbeiten</Link></li>
                <li><Link to="/malerarbeiten" className="hover:text-white transition-colors">Malerarbeiten</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-500">&nbsp;</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/dachdeckerarbeiten" className="hover:text-white transition-colors">Dachdeckerarbeiten</Link></li>
                <li><Link to="/schuettgutboxen" className="hover:text-white transition-colors">Lagerboxen</Link></li>
                <li><Link to="/umzuege" className="hover:text-white transition-colors">Umzüge</Link></li>
                <li><Link to="/transporte" className="hover:text-white transition-colors">Transporte</Link></li>
              </ul>
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-orange-400 mb-2">Öffnungszeiten</h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Mo-Fr: 8:00-18:00 Uhr</p>
                  <p>Sa: 09:00-14:00 Uhr</p>
                  <p>So: Nach Vereinbarung</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-500">Kontakt</h4>
              <div className="text-gray-300 space-y-2">
                <p>Thorsten Vey</p>
                <p>Frankfurter Straße 3</p>
                <p>36419 Buttlar</p>
                <p>Deutschland</p>
                <p>+49 176 71085234</p>
                <p>info@vey-unternehmensgruppe.de</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Vey Unternehmensgruppe. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-gray-300 hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
