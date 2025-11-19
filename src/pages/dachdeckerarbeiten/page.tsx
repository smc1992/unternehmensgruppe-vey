import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DachdeckerarbeitenPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Dachdeckerarbeiten Buttlar | Dachsanierung Neueindeckung | Vey Unternehmensgruppe";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Dachdeckerarbeiten in Buttlar. Dachsanierung, Neueindeckung, Dachreparaturen, Dachrinnen. Erfahrene Dachdecker-Meister mit 24/7 Notdienst.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Dachdeckerarbeiten Buttlar, Dachsanierung, Neueindeckung, Dachreparatur, Dachrinnen, Dachdecker, Notdienst');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/dachdeckerarbeiten`);
    }

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dachdeckerarbeiten",
      "description": "Professionelle Dachsanierung, Neueindeckung und Dachreparaturen",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Vey Unternehmensgruppe",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Frankfurter Straße 3",
          "addressLocality": "Buttlar",
          "postalCode": "36419",
          "addressCountry": "DE"
        },
        "telephone": "+4917671085234"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 50.8167,
          "longitude": 10.0167
        },
        "geoRadius": "50000"
      },
      "serviceType": "Dachdeckerarbeiten"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "Dachsanierung",
      description: "Komplette Sanierung alter Dächer mit modernen Materialien und Techniken.",
      icon: "ri-hammer-line",
      features: ["Dachstuhl-Inspektion", "Dämmung erneuern", "Neue Eindeckung", "Entwässerung"]
    },
    {
      title: "Neueindeckung",
      description: "Professionelle Neueindeckung mit hochwertigen Dachziegeln und Materialien.",
      icon: "ri-building-line",
      features: ["Ziegel & Schiefer", "Blechdächer", "Flachdächer", "Gründächer"]
    },
    {
      title: "Dachreparaturen",
      description: "Schnelle und zuverlässige Reparaturen bei Sturmschäden und Undichtigkeiten.",
      icon: "ri-tools-line",
      features: ["Notdienst 24/7", "Leckage-Ortung", "Ziegel austauschen", "Rinnen reparieren"]
    },
    {
      title: "Dachrinnen & Fallrohre",
      description: "Installation und Wartung von Entwässerungssystemen für optimalen Regenschutz.",
      icon: "ri-drop-line",
      features: ["Kupfer & Zink", "Kunststoff-Rinnen", "Laubschutz", "Regenwassernutzung"]
    }
  ];

  const materials = [
    {
      name: "Dachziegel",
      description: "Hochwertige Tonziegel in verschiedenen Farben und Formen",
      image: "/images/ziegel-material.jpg"
    },
    {
      name: "Schiefer",
      description: "Natürlicher Schiefer für langlebige und elegante Dächer",
      image: "/images/schiefer-material.jpg"
    },
    {
      name: "Metalldächer",
      description: "Moderne Blechdächer aus Kupfer, Zink und Aluminium",
      image: "/images/metall-material.jpg"
    }
  ];

  const workProcess = [
    {
      step: "1",
      title: "Kostenlose Begutachtung",
      description: "Ausführliche Inspektion Ihres Daches mit detailliertem Zustandsbericht"
    },
    {
      step: "2", 
      title: "Angebot & Planung",
      description: "Transparentes Angebot mit Materialauswahl und Terminplanung"
    },
    {
      step: "3",
      title: "Professionelle Ausführung", 
      description: "Fachgerechte Durchführung durch erfahrene Dachdecker-Meister"
    },
    {
      step: "4",
      title: "Qualitätskontrolle",
      description: "Abschlusskontrolle und Gewährleistung für Ihre Sicherheit"
    }
  ];

  const projects = [
    {
      title: "Einfamilienhaus Sanierung",
      description: "Komplette Dachsanierung mit neuer Dämmung und Ziegeleindeckung",
      image: "/images/projekt1-dach.jpg"
    },
    {
      title: "Schieferdach Restaurierung",
      description: "Restaurierung eines historischen Schieferdaches mit originalgetreuen Materialien",
      image: "/images/projekt2-dach.jpg"
    },
    {
      title: "Flachdach Neubau",
      description: "Moderne Flachdach-Konstruktion mit Gründach-Elementen",
      image: "/images/projekt3-dach.jpg"
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
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors cursor-pointer">
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-all"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-orange-600 font-medium cursor-pointer">
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
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/dach-hero.jpg')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Professionelle <span className="text-orange-500">Dachdeckerarbeiten</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
              Von der Dachsanierung bis zur Neueindeckung – 
              Ihr Dach in den besten Händen erfahrener Dachdecker-Meister
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="/service-funnel?service=dachdeckerarbeiten" 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl whitespace-nowrap cursor-pointer"
              >
                Unverbindliches Angebot anfordern
              </motion.a>
              <motion.a 
                href="tel:+4917671085234" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Direkt anrufen
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unsere <span className="text-orange-600">Dachdeckerarbeiten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vom kleinen Reparaturauftrag bis zur kompletten Dachsanierung – 
              wir bieten Ihnen alle Leistungen rund um Ihr Dach aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <i className="ri-check-line text-orange-600 mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Hochwertige <span className="text-orange-600">Materialien</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verwenden nur erstklassige Materialien von renommierten Herstellern 
              für langlebige und witterungsbeständige Dächer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('${material.image}')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{material.name}</h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Unser <span className="text-orange-500">Arbeitsprozess</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Von der ersten Begutachtung bis zur finalen Abnahme – 
              so läuft Ihr Dachprojekt bei uns ab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-black text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unsere <span className="text-orange-600">Referenzprojekte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Überzeugen Sie sich von der Qualität unserer Arbeit anhand 
              ausgewählter Dachdeckerprojekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-cover bg-center" style={{
                  backgroundImage: `url('${project.image}')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Ihr Dach braucht Aufmerksamkeit?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Lassen Sie Ihr Dach kostenlos von unseren Experten begutachten. 
              Wir erstellen Ihnen ein transparentes Angebot ohne versteckte Kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="/service-funnel?service=dachdeckerarbeiten" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
              >
                Jetzt Angebot anfordern
              </motion.a>
              <a 
                href="tel:+49123456789" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap"
              >
                Sofort anrufen
              </a>
            </div>
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
