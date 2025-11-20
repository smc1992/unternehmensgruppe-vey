import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from '../../components/feature/MobileMenu';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../../components/base/ScrollAnimations';
import AnimatedBackground from '../../components/base/AnimatedBackground';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Buttlar Brennholz Baumfällarbeiten Vey Unternehmensgruppe | Professionelle Dienstleistungen";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Vey Unternehmensgruppe Buttlar bietet professionelle Dienstleistungen: Premium Brennholz, Baumfällarbeiten, Mulcharbeiten, Abbrucharbeiten, Malerarbeiten, Dachdeckerarbeiten und Lagerboxen. Qualität und Zuverlässigkeit seit über 15 Jahren in der Region.');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`);
    }

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vey Unternehmensgruppe",
      "image": "/images/company-logo.png",
      "description": "Professionelle Dienstleistungen: Brennholz, Baumfällarbeiten, Mulcharbeiten, Abbrucharbeiten, Malerarbeiten, Dachdeckerarbeiten und Lagerboxen in Buttlar und Umgebung.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
      "telephone": "+4917671085234",
      "email": "info@vey-unternehmensgruppe.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Frankfurter Straße 3",
        "addressLocality": "Buttlar",
        "postalCode": "36419",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.8167,
        "longitude": 10.0167
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-14:00"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification", 
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "€€",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 50.8167,
          "longitude": 10.0167
        },
        "geoRadius": "50000"
      },
      "serviceType": [
        "Brennholz",
        "Baumfällarbeiten", 
        "Mulcharbeiten",
        "Abbrucharbeiten",
        "Malerarbeiten",
        "Dachdeckerarbeiten",
        "Lagerboxen",
        "Umzüge",
        "Transporte"
      ],
      "founder": {
        "@type": "Person",
        "name": "Thorsten Vey"
      },
      "sameAs": [
        `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      ]
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
              <h1>
                <img 
                  src="/images/company-logo.png"
                  alt="Vey Unternehmensgruppe Logo"
                  className="h-12 w-auto"
                />
              </h1>
            </motion.div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#home", label: "Startseite" },
                { href: "#services", label: "Dienstleistungen" },
                { href: "#about", label: "Über uns" },
                { href: "#contact", label: "Kontakt" }
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
                href="tel:+49123456789" 
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
        id="home" 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/hero-background.jpg')`
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
              Ihre <motion.span 
                className="text-orange-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >Experten</motion.span> für vielseitige Dienstleistungen
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed"
            >
              Von Brennholz über Baumfällarbeiten bis hin zu Dachdeckerarbeiten – 
              wir sind Ihr zuverlässiger Partner für alle Projekte
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl whitespace-nowrap"
              >
                Unsere Dienstleistungen
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                Unverbindliches Angebot anfordern
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Unsere <span className="text-orange-600">Dienstleistungen</span>
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professionelle Lösungen für alle Ihre Projekte. 
              Von der Planung bis zur Ausführung – alles aus einer Hand.
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brennholz */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/brennholz1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brennholz</h3>
                  <p className="text-gray-600 mb-4">
                    Hochwertiges, trockenes Brennholz verschiedener Holzarten. Perfekt für Kamin, Ofen und Feuerstelle.
                  </p>
                  <Link 
                    to="/brennholz"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Baumfällarbeiten */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/baumfaellung1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Baumfällarbeiten</h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Baumfällung und Baumpflege durch erfahrene Fachkräfte mit modernster Ausrüstung.
                  </p>
                  <Link 
                    to="/baumfaellarbeiten"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Mulcharbeiten */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/mulch1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mulcharbeiten</h3>
                  <p className="text-gray-600 mb-4">
                    Gartenpflege und Mulcharbeiten für einen gepflegten und gesunden Garten das ganze Jahr über.
                  </p>
                  <Link 
                    to="/mulcharbeiten"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Abbrucharbeiten */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/abbruch1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Abbrucharbeiten</h3>
                  <p className="text-gray-600 mb-4">
                    Sichere und fachgerechte Abbrucharbeiten für Gebäude und Bauwerke aller Art.
                  </p>
                  <Link 
                    to="/abbrucharbeiten"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Malerarbeiten */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/maler1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Malerarbeiten</h3>
                  <p className="text-gray-600 mb-4">
                    Innen- und Außenmalerarbeiten in höchster Qualität für Wohn- und Geschäftsräume.
                  </p>
                  <Link 
                    to="/malerarbeiten"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Dachdeckerarbeiten */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/dach1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dachdeckerarbeiten</h3>
                  <p className="text-gray-600 mb-4">
                    Dachsanierung, Reparaturen und Neueindeckungen durch erfahrene Dachdecker.
                  </p>
                  <Link 
                    to="/dachdeckerarbeiten"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Lagerboxen */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/lager1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lagerboxen, Schüttgutboxen</h3>
                  <p className="text-gray-600 mb-4">
                    Flexible Lagerboxen und Schüttgutboxen zur Miete für Ihre temporären Lagerbedürfnisse.
                  </p>
                  <Link 
                    to="/schuettgutboxen"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Umzüge */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/umzuege1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Umzüge</h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Umzugsdienstleistungen für Privat und Gewerbe. Stressfrei und zuverlässig.
                  </p>
                  <Link 
                    to="/umzuege"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Transporte */}
            <StaggerItem>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url('/images/transport1.jpg')`
                }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transporte</h3>
                  <p className="text-gray-600 mb-4">
                    Professionelle Transportlösungen für alle Ihre Bedürfnisse. Von Möbeltransport bis Schwertransport.
                  </p>
                  <Link 
                    to="/transporte"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Mehr erfahren</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                Über die <span className="text-orange-600">Vey Unternehmensgruppe</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Seit Jahren sind wir Ihr vertrauensvoller Partner für vielseitige Dienstleistungen. 
                Unser erfahrenes Team bietet Ihnen professionelle Lösungen in den Bereichen 
                Brennholz, Baumfällarbeiten, Mulcharbeiten, Abbrucharbeiten, Malerarbeiten, 
                Dachdeckerarbeiten sowie Lager- und Schüttgutboxen.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle. 
                Wir setzen auf moderne Technik, qualifizierte Mitarbeiter und nachhaltige Arbeitsweise.
              </p>
              
              <StaggerContainer className="grid grid-cols-2 gap-6 mb-8">
                <StaggerItem className="text-center">
                  <motion.div 
                    className="text-3xl font-black text-orange-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  >
                    500+
                  </motion.div>
                  <div className="text-gray-600 font-medium">Zufriedene Kunden</div>
                </StaggerItem>
                <StaggerItem className="text-center">
                  <motion.div 
                    className="text-3xl font-black text-orange-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                  >
                    15+
                  </motion.div>
                  <div className="text-gray-600 font-medium">Jahre Erfahrung</div>
                </StaggerItem>
              </StaggerContainer>

              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors inline-block whitespace-nowrap"
              >
                Jetzt Kontakt aufnehmen
              </motion.a>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" className="relative">
              <img 
                src="/images/company-image.webp"
                alt="Vey Unternehmensgruppe Team"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-96"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              >
                <div className="text-2xl font-black mb-1">100%</div>
                <div className="text-sm font-medium">Kundenzufriedenheit</div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Warum <span className="text-orange-500">Vey Unternehmensgruppe</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unsere Stärken machen den Unterschied
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "ri-award-line",
                title: "Höchste Qualität",
                description: "Professionelle Ausführung mit modernster Ausrüstung und qualifizierten Fachkräften."
              },
              {
                icon: "ri-time-line",
                title: "Termingerecht",
                description: "Zuverlässige Einhaltung von Terminen und Zusagen für Ihre Planungssicherheit."
              },
              {
                icon: "ri-leaf-line",
                title: "Nachhaltig",
                description: "Umweltbewusste Arbeitsweise und nachhaltige Lösungen für die Zukunft."
              },
              {
                icon: "ri-customer-service-line",
                title: "Persönlicher Service",
                description: "Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Anforderungen."
              }
            ].map((feature, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full"
                >
                  <motion.div 
                    className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Kontakt <span className="text-orange-600">aufnehmen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Haben Sie Fragen oder benötigen Sie ein Angebot? 
              Wir sind gerne für Sie da und beraten Sie kostenlos.
            </p>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "ri-phone-line",
                    title: "Telefon",
                    description: "Rufen Sie uns an für eine kostenlose Beratung",
                    contact: "+49 176 71085234",
                    href: "tel:+4917671085234"
                  },
                  {
                    icon: "ri-mail-line",
                    title: "E-Mail",
                    description: "Schreiben Sie uns Ihre Anfrage",
                    contact: "info@vey-unternehmensgruppe.de",
                    href: "mailto:info@vey-unternehmensgruppe.de"
                  },
                  {
                    icon: "ri-map-pin-line",
                    title: "Adresse",
                    description: "Frankfurter Straße 3\n36419 Buttlar\nDeutschland",
                    contact: null,
                    href: null
                  },
                  {
                    icon: "ri-time-line",
                    title: "Öffnungszeiten",
                    description: "Montag - Freitag: 8:00 - 18:00 Uhr\nSamstag: 9:00 - 14:00 Uhr\nSonntag: Nach Vereinbarung",
                    contact: null,
                    href: null
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <i className={`${item.icon} text-white text-xl`}></i>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2 whitespace-pre-line">{item.description}</p>
                      {item.contact && (
                        <a 
                          href={item.href || '#'} 
                          className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                        >
                          {item.contact}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <ScrollAnimation direction="up" delay={0}>
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
                <motion.a 
                  href="tel:+4917671085234" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <i className="ri-phone-line"></i>
                </motion.a>
                <motion.a 
                  href="mailto:info@vey-unternehmensgruppe.de" 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <i className="ri-mail-line"></i>
                </motion.a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.1}>
              <h4 className="text-lg font-bold mb-4 text-orange-500">Dienstleistungen</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/brennholz" className="hover:text-white transition-colors">Brennholz</Link></li>
                <li><Link to="/baumfaellarbeiten" className="hover:text-white transition-colors">Baumfällarbeiten</Link></li>
                <li><Link to="/mulcharbeiten" className="hover:text-white transition-colors">Mulcharbeiten</Link></li>
                <li><Link to="/abbrucharbeiten" className="hover:text-white transition-colors">Abbrucharbeiten</Link></li>
                <li><Link to="/malerarbeiten" className="hover:text-white transition-colors">Malerarbeiten</Link></li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
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
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <h4 className="text-lg font-bold mb-4 text-orange-500">Kontakt</h4>
              <div className="text-gray-300 space-y-2">
                <p>Thorsten Vey</p>
                <p>Frankfurter Straße 3</p>
                <p>36419 Buttlar</p>
                <p>Deutschland</p>
                <p>+49 176 71085234</p>
                <p>info@vey-unternehmensgruppe.de</p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation direction="up" delay={0.4}>
            <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 sm:mb-0">
                © {new Date().getFullYear()} Vey Unternehmensgruppe. Alle Rechte vorbehalten.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</a>
                <a href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">Datenschutz</a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}
