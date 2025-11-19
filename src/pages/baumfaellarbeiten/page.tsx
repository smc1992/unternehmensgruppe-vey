import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../../components/base/ScrollAnimations';
import AnimatedBackground from '../../components/base/AnimatedBackground';
import MobileMenu from '../../components/feature/MobileMenu';

export default function BaumfaellarbeitenPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Baumfällarbeiten Buttlar | Professionelle Baumfällung | Vey Unternehmensgruppe";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Baumfällarbeiten in Buttlar und Umgebung. Sichere Baumfällung mit modernster Ausrüstung. Problembaum-Entfernung, Kronenpflege und Notfall-Service. Jetzt Angebot anfordern!');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Baumfällarbeiten Buttlar, Baumfällung, Baumpflege, Problembaum, Kronenpflege, Baumschnitt, Notfall-Service');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/baumfaellarbeiten`);
    }

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Baumfällarbeiten", 
      "description": "Professionelle Baumfällarbeiten mit modernster Ausrüstung und jahrelanger Erfahrung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Vey Unternehmensgruppe",
        "telephone": "+4917671085234",
        "email": "info@vey-unternehmensgruppe.de",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Frankfurter Straße 3",
          "addressLocality": "Buttlar",
          "postalCode": "36419", 
          "addressCountry": "DE"
        }
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
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/baumfaellarbeiten`,
      "serviceType": "Tree Felling Services",
      "category": "Tree Care Services"
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      
      {/* Header - Same as homepage */}
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
                { href: "/", label: "Startseite" },
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i className="ri-scissors-cut-line mr-2"></i>
                Professionelle Baumfällarbeiten
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.4}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sichere <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Baumfällung</span> in Buttlar
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professionelle Baumfällarbeiten mit modernster Ausrüstung und jahrelanger Erfahrung. 
                Sicher, schnell und umweltschonend.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/service-funnel?service=baumfaellarbeiten" 
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
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  Direkt anrufen
                </motion.a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unsere Baumfäll-Dienstleistungen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von der Problembaum-Entfernung bis zur kompletten Grundstücksräumung - 
                wir bieten alle Leistungen rund um die professionelle Baumfällung.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-scissors-cut-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Problembaum-Fällung</h3>
                  <p className="text-gray-600 mb-6">
                    Sichere Entfernung von kranken, beschädigten oder gefährlichen Bäumen 
                    mit modernster Klettertechnik und Seilzugtechnik.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Kranke und beschädigte Bäume
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Sturmschäden
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Verkehrssicherung
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-home-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Baumfällung im Wohnbereich</h3>
                  <p className="text-gray-600 mb-6">
                    Präzise Baumfällung in beengten Verhältnissen ohne Schäden an 
                    Gebäuden, Zäunen oder anderen Pflanzen.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Enge Platzverhältnisse
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Schutz von Gebäuden
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Präzise Arbeit
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-truck-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Komplette Grundstücksräumung</h3>
                  <p className="text-gray-600 mb-6">
                    Vollständige Räumung von bewaldeten Grundstücken für Neubau, 
                    Gartenneugestaltung oder andere Projekte.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Komplette Rodung
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Wurzelentfernung
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Entsorgung inklusive
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-leaf-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Baumschnitt & Kronenpflege</h3>
                  <p className="text-gray-600 mb-6">
                    Professioneller Baumschnitt zur Gesunderhaltung und 
                    Formgebung Ihrer wertvollen Bäume.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Kronenpflege
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Totholzentfernung
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Formschnitt
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-recycle-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Entsorgung & Verwertung</h3>
                  <p className="text-gray-600 mb-6">
                    Umweltgerechte Entsorgung und Verwertung des Baumaterials - 
                    von Brennholz bis Hackschnitzel.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Brennholz-Aufbereitung
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Hackschnitzel-Produktion
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      Kompostierung
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-shield-check-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Notfall-Service</h3>
                  <p className="text-gray-600">
                    24/7 Notfall-Service bei Sturmschäden oder akuter Gefahr 
                    durch umgestürzte oder beschädigte Bäume.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unser Arbeitsablauf
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von der ersten Besichtigung bis zur finalen Entsorgung - 
                so läuft eine professionelle Baumfällung ab.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggerItem>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Besichtigung & Beratung</h3>
                  <p className="text-gray-600">
                    Kostenlose Vor-Ort-Besichtigung mit detaillierter Analyse 
                    und unverbindlichem Kostenvoranschlag.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Planung & Genehmigung</h3>
                  <p className="text-gray-600">
                    Detaillierte Arbeitsplanung und Unterstützung bei 
                    erforderlichen Genehmigungen und Anmeldungen.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sichere Durchführung</h3>
                  <p className="text-gray-600">
                    Professionelle Baumfällung mit modernster Ausrüstung 
                    und höchsten Sicherheitsstandards.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Aufräumen & Entsorgung</h3>
                  <p className="text-gray-600">
                    Vollständige Reinigung des Arbeitsplatzes und 
                    umweltgerechte Entsorgung aller Materialien.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up">
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Benötigen Sie professionelle Baumfällarbeiten?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Kontaktieren Sie uns für ein unverbindliches Angebot und einen kostenlosen Kostenvoranschlag. 
                Wir sind Ihr zuverlässiger Partner für alle Baumfällarbeiten in Buttlar und Umgebung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/service-funnel?service=baumfaellarbeiten" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Jetzt Angebot anfordern
                </motion.a>
                <a 
                  href="tel:+4917671085234" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  +49 176 71085234
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/images/company-logo.png"
                alt="Vey Unternehmensgruppe Logo"
                className="h-10 w-auto mb-4"
              />
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
              <a href="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
