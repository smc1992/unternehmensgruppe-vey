import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from '../../components/feature/MobileMenu';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../../components/base/ScrollAnimations';
import AnimatedBackground from '../../components/base/AnimatedBackground';

export default function MalerarbeitenPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Malerarbeiten Buttlar | Innen Außen Fassade | Vey Unternehmensgruppe";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Malerarbeiten in Buttlar. Innenraumgestaltung, Fassadenanstrich, Tapezierarbeiten, Lackierungen. Erfahrene Maler mit hochwertigen Materialien.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Malerarbeiten Buttlar, Innenraumgestaltung, Fassadenanstrich, Tapezierarbeiten, Lackierungen, Maler, Renovierung');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/malerarbeiten`);
    }

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Malerarbeiten",
      "description": "Professionelle Malerarbeiten für Innen- und Außenbereiche",
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
      "serviceType": "Malerarbeiten"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "Innenraumgestaltung",
      description: "Professionelle Gestaltung von Wohnräumen, Büros und Gewerberäumen mit hochwertigen Farben und Techniken.",
      icon: "ri-home-4-line",
      features: ["Wandgestaltung", "Deckenanstrich", "Spezialeffekte"]
    },
    {
      title: "Fassadenanstrich",
      description: "Schutz und Verschönerung Ihrer Fassade mit witterungsbeständigen Farben und professioneller Ausführung.",
      icon: "ri-building-line",
      features: ["Fassadenreinigung", "Grundierung", "Wetterschutzanstrich"]
    },
    {
      title: "Tapezierarbeiten",
      description: "Fachgerechtes Tapezieren mit verschiedenen Tapetenarten für individuelle und ansprechende Raumgestaltung.",
      icon: "ri-palette-line",
      features: ["Raufasertapete", "Vliestapete", "Strukturtapete"]
    },
    {
      title: "Lackierarbeiten",
      description: "Professionelle Lackierung von Türen, Fenstern, Möbeln und anderen Oberflächen für dauerhaften Schutz.",
      icon: "ri-paint-brush-line",
      features: ["Türen & Fenster", "Heizkörper", "Metallteile"]
    },
    {
      title: "Renovierungsarbeiten",
      description: "Komplette Renovierung von Räumen inklusive Vorarbeiten, Spachtelarbeiten und Endanstrich.",
      icon: "ri-tools-line",
      features: ["Untergrundvorbereitung", "Spachtelarbeiten", "Komplettanstrich"]
    },
    {
      title: "Farbberatung",
      description: "Professionelle Beratung bei der Farbauswahl für harmonische und ansprechende Raumgestaltung.",
      icon: "ri-customer-service-line",
      features: ["Farbkonzepte", "Mustererstellung", "Materialberatung"]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
        className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/">
                <img 
                  src="/images/company-logo.png"
                  alt="Vey Unternehmensgruppe Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </motion.div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "/#home", label: "Startseite" },
                { href: "/#services", label: "Dienstleistungen" },
                { href: "/#about", label: "Über uns" },
                { href: "/#contact", label: "Kontakt" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.a 
                href="tel:+4917671085234" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap shadow-lg"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>Jetzt anrufen</span>
              </motion.a>
              
              <motion.button 
                className="lg:hidden flex flex-col space-y-1 cursor-pointer p-2 relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800 transition-all"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                ></motion.span>
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800 transition-all"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                ></motion.span>
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800 transition-all"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                ></motion.span>
              </motion.button>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </motion.header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/maler-hero.jpg')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              Professionelle <motion.span 
                className="text-orange-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >Malerarbeiten</motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed"
            >
              Hochwertige Malerarbeiten für Innen- und Außenbereiche – 
              Präzise Ausführung mit erstklassigen Materialien
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a 
                href="/service-funnel?service=malerarbeiten" 
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unsere <span className="text-orange-600">Malerarbeiten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Von Innenraumgestaltung bis Fassadenanstrich – 
              wir bieten alle Malerarbeiten aus einer Hand.
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-orange-600 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unser <span className="text-orange-600">Arbeitsablauf</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der ersten Beratung bis zum finalen Anstrich – 
              so läuft ein professioneller Malerauftrag ab.
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Beratung & Planung",
                description: "Ausführliche Beratung vor Ort mit Farbberatung und detailliertem Kostenvoranschlag."
              },
              {
                step: "2",
                title: "Vorbereitung",
                description: "Sorgfältige Vorbereitung der Oberflächen und Abdeckung aller Möbel und Böden."
              },
              {
                step: "3",
                title: "Ausführung",
                description: "Professionelle Durchführung aller Malerarbeiten mit hochwertigen Materialien und Werkzeugen."
              },
              {
                step: "4",
                title: "Abnahme & Reinigung",
                description: "Gemeinsame Abnahme der Arbeiten und gründliche Reinigung aller Arbeitsbereiche."
              }
            ].map((process, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 h-full"
                >
                  <motion.div 
                    className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="up">
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Benötigen Sie professionelle Malerarbeiten?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Kontaktieren Sie uns für eine kostenlose Beratung und einen unverbindlichen Kostenvoranschlag. 
                Wir sind Ihr zuverlässiger Partner für alle Malerarbeiten in Buttlar und Umgebung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a 
                  href="/service-funnel?service=malerarbeiten" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Jetzt Angebot anfordern
                </motion.a>
                <a 
                  href="tel:+4917671085234" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap"
                >
                  Sofort anrufen
                </a>
              </div>
            </ScrollAnimation>
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
