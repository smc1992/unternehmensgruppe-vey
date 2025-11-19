import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BrennholzPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [livingSpace, setLivingSpace] = useState(150);
  const [orderAmount, setOrderAmount] = useState(6);
  const [heatingType, setHeatingType] = useState('oel');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Premium Brennholz Buttlar | Kammergetrocknet | Vey Unternehmensgruppe";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium Brennholz aus Buttlar - kammergetrocknet für maximale Heizleistung. Buche Industrieholz, Scheitholz in verschiedenen Größen. Schnelle Lieferung in die Region. Jetzt bestellen!');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Brennholz Buttlar, Kammergetrocknet, Buche Brennholz, Industrieholz, Scheitholz, Brennholz kaufen, Heizholz, Kaminholz');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/brennholz`);
    }

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service", 
      "name": "Premium Brennholz",
      "description": "Hochwertiges kammergetrocknetes Brennholz aus Buche für optimale Heizleistung",
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
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/brennholz`,
      "serviceType": "Brennholz",
      "category": "Heating Fuel",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Brennholz Produkte",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Industrieholz Buche Klasse I",
              "description": "Premium Industrieholz aus Buche der Klasse I"
            },
            "price": "115.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Industrieholz Buche Klasse II",
              "description": "Hochwertiges Industrieholz aus Buche der Klasse II"
            },
            "price": "90.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
              <Link to="/" className="text-gray-800 hover:text-orange-600 font-medium transition-colors">
                Startseite
              </Link>
              <a href="/#services" className="text-gray-800 hover:text-orange-600 font-medium transition-colors">
                Dienstleistungen
              </a>
              <a href="/#about" className="text-gray-800 hover:text-orange-600 font-medium transition-colors">
                Über uns
              </a>
              <a href="/#contact" className="text-gray-800 hover:text-orange-600 font-medium transition-colors">
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
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.55)), url('https://brennholz-koenig.de/images/Kein%20Dreck%20in%20der%20Wohnung.webp')`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-gradient-to-br from-black/65 via-black/55 to-black/45 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl ring-1 ring-white/10">
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4 sm:mb-6 drop-shadow-md leading-tight">
                Premium Brennholz – Trockenes Holz für maximale Wärme
              </h1>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-white mb-4 sm:mb-6">
                <li className="flex items-start">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-sm sm:text-lg"></i>
                  </span>
                  <span className="font-semibold text-base sm:text-lg lg:text-xl leading-tight">Kammergetrocknetes Brennholz mit höchster Heizleistung</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-sm sm:text-lg"></i>
                  </span>
                  <span className="font-semibold text-base sm:text-lg lg:text-xl leading-tight">Schnelle Lieferung in die Region</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-sm sm:text-lg"></i>
                  </span>
                  <span className="font-semibold text-base sm:text-lg lg:text-xl leading-tight">Faire Preise und beste Qualität</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a 
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-extrabold rounded-xl sm:rounded-2xl hover:bg-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl whitespace-nowrap"
                >
                  <i className="ri-shopping-cart-line text-base sm:text-lg"></i>
                  JETZT BESTELLEN
                  <i className="ri-arrow-right-line text-base sm:text-lg opacity-80 transition-transform duration-200 group-hover:translate-x-0.5"></i>
                </a>
                <a 
                  href="tel:+4917671085234"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-500 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-extrabold rounded-xl sm:rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-200 shadow-xl hover:shadow-2xl whitespace-nowrap"
                >
                  <i className="ri-phone-line text-base sm:text-lg"></i>
                  Beratung
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              <span className="text-orange-600">VEY UNTERNEHMENSGRUPPE</span> <span className="text-gray-900">BRENNHOLZ</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">Ein Blick in unsere Produktion und Qualitätssicherung</p>
          </div>
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-black/10 bg-white/95 backdrop-blur-sm shadow-2xl">
            <img 
              src="/images/brennholz-produktion.webp"
              alt="Brennholz Produktion"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 max-w-[560px] mx-auto">
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] rounded-t-xl sm:rounded-t-2xl overflow-hidden">
                  <img 
                    src="https://brennholz-koenig.de/images/Kein%20Dreck%20in%20der%20Wohnung.webp"
                    alt="Familien vertrauen uns" 
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="text-left px-4 sm:px-6 lg:px-7 xl:px-8 py-4 sm:py-6 lg:py-7">
                  <h3 className="text-gray-900 uppercase tracking-wide text-base sm:text-lg lg:text-xl xl:text-2xl font-black mb-2 sm:mb-3 lg:mb-4 leading-tight">
                    FAMILIEN VERTRAUEN UNS
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                    Zahlreiche Familien schaffen mit unserem Premium-Brennholz warme, gemütliche Momente.
                    <span className="text-orange-600 font-semibold"> Sauberes, trockenes Holz </span>
                    bedeutet weniger Arbeit und mehr Zeit für die schönen Dinge im Leben.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 max-w-[560px] mx-auto">
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] rounded-t-xl sm:rounded-t-2xl overflow-hidden">
                  <img 
                    src="https://brennholz-koenig.de/images/Perfektes%20Möbelholz.webp"
                    alt="Geprüfte Qualität" 
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="text-left px-4 sm:px-6 lg:px-7 xl:px-8 py-4 sm:py-6 lg:py-7">
                  <h3 className="text-gray-900 uppercase tracking-wide text-base sm:text-lg lg:text-xl xl:text-2xl font-black mb-2 sm:mb-3 lg:mb-4 leading-tight">
                    GEPRÜFTE QUALITÄT
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                    Jedes Holzstück wird vor der Auslieferung geprüft.
                    <span className="text-orange-600 font-semibold"> Niedrige Restfeuchte garantiert </span>
                    – gemessen mit professionellen Geräten. So brennt Ihr Holz perfekt ab dem ersten Tag.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 max-w-full">
              <div className="flex items-center">
                <div className="w-8 sm:w-10 lg:w-12 xl:w-16 h-8 sm:h-10 lg:h-12 xl:h-16 flex items-center justify-center bg-gray-900 rounded-full mr-2 sm:mr-3 lg:mr-4 xl:mr-6 shadow-lg flex-shrink-0">
                  <i className="ri-fire-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
                </div>
                <div className="text-left min-w-0">
                  <span className="text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-black block leading-tight">
                    HÖCHSTE HEIZLEISTUNG
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold leading-tight">
                    durch perfekte Trocknung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
            <div className="text-center bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6 shadow-lg">
                <i className="ri-truck-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">SCHNELLE LIEFERUNG</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Zuverlässige Lieferung in die Region</p>
              <div className="mt-1 sm:mt-2 lg:mt-3 xl:mt-4 text-orange-600 font-bold text-xs sm:text-sm">✓ Termingerecht</div>
            </div>

            <div className="text-center bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6 shadow-lg">
                <i className="ri-leaf-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">REGIONAL & NACHHALTIG</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">100% aus heimischen Wäldern der Region</p>
              <div className="mt-1 sm:mt-2 lg:mt-3 xl:mt-4 text-orange-600 font-bold text-xs sm:text-sm">✓ Kurze Transportwege</div>
            </div>

            <div className="text-center bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6 shadow-lg">
                <i className="ri-award-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">LANGJÄHRIGE ERFAHRUNG</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Persönlich, leidenschaftlich & zuverlässig</p>
              <div className="mt-1 sm:mt-2 lg:mt-3 xl:mt-4 text-orange-600 font-bold text-xs sm:text-sm">✓ Expertise</div>
            </div>

            <div className="text-center bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6 shadow-lg">
                <i className="ri-shield-check-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">QUALITÄTSGARANTIE</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Premium Brennholz mit höchster Qualität</p>
              <div className="mt-1 sm:mt-2 lg:mt-3 xl:mt-4 text-orange-600 font-bold text-xs sm:text-sm">✓ 100% Zufriedenheit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">Unsere Brennholz-Produkte</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unser hochwertiges Brennholz-Sortiment. Perfekt für gemütliche Abende am Kamin.
            </p>
          </div>

          {/* Produktübersicht */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://brennholz-koenig.de/api/cdn/products/1756333839962-4pzmytgm0sj.png" 
                  alt="Industrieholz Buche Klasse I" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Premium Buche</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Industrieholz Buche Klasse I
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Premium Industrieholz aus Buche der Klasse I. Rechteckige Kantholzstücke mit erstklassiger Qualität, perfekt für alle Öfen und Kamine. Garantiert lange Brenndauer und 70% höherer Heizwert im Vergleich zu Scheitholz.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Rechteckige Kantholzstücke</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">70% höherer Heizwert</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Kammergetrocknet 6%-8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">€115.00</span>
                  </div>
                  <span className="text-sm text-gray-500">pro Schüttraummeter</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                  >
                    Details ansehen
                  </a>
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg font-semibold transition-colors bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                  >
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://brennholz-koenig.de/api/cdn/products/1756679692645-sbgcne0s2nm.webp" 
                  alt="Industrieholz Buche Klasse II" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-3%</div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Standard Buche</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Industrieholz Buche Klasse II
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Hochwertiges Industrieholz aus Buche der Klasse II mit 20% Anmachholz-Anteil. Perfekte Kombination aus Qualität und Preis-Leistung. Ideal für den regelmäßigen Gebrauch in Kamin und Ofen.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">20% Anmachholz-Anteil</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">70% höherer Heizwert</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Kammergetrocknet 6%-8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg text-gray-400 line-through">€93.00</span>
                    <span className="text-2xl font-bold text-orange-600">€90.00</span>
                  </div>
                  <span className="text-sm text-gray-500">pro Schüttraummeter</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                  >
                    Details ansehen
                  </a>
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg font-semibold transition-colors bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                  >
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://brennholz-koenig.de/api/cdn/products/1757544567853-04unx063w47j.webp" 
                  alt="Scheitholz Buche 33 cm" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-16%</div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Scheitholz</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Scheitholz Buche 33 cm
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Premium Buchenscheitholz in klassischer 33 cm Länge mit einer Restfeuchte von 16-18%. Traditionelles Feuererlebnis für größere Öfen und Kamine. Kammergetrocknet, sofort brennbereit.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">33 cm Scheitlänge</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Premium Buchenholz</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Gespalten</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg text-gray-400 line-through">€119.00</span>
                    <span className="text-2xl font-bold text-orange-600">€100.00</span>
                  </div>
                  <span className="text-sm text-gray-500">pro Schüttraummeter</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                  >
                    Details ansehen
                  </a>
                  <a 
                    href="https://brennholz-koenig.de/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg font-semibold transition-colors bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                  >
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability Check Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center bg-orange-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6">
              <span className="whitespace-nowrap">EHRLICHE BERATUNG</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              IST UNSER <span className="text-orange-600">BRENNHOLZ</span> DAS RICHTIGE FÜR SIE?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Wir sind ehrlich zu unseren Kunden. Unser Premium-Brennholz ist nicht für jeden geeignet. 
              Prüfen Sie hier, ob es zu Ihren Bedürfnissen passt.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              {/* Perfect For */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-orange-600 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-xl">
                <div className="text-center mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center bg-orange-600 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                    <i className="ri-check-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-1 sm:mb-2 leading-tight">
                    ✓ PERFEKT GEEIGNET FÜR:
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-600 font-medium px-1 sm:px-2">
                    Diese Kunden profitieren maximal von unserem Brennholz
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6">
                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-orange-600 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-home-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Sauberkeitsfanatiker</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Sie wollen KEIN DRECK IN DER WOHNUNG und schätzen sauberes Holz ohne Rinde und Schmutz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-orange-600 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-fire-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Heizleistungs-Optimierer</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Sie wollen maximale Wärme bei minimalem Holzverbrauch
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-orange-600 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-leaf-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Umweltbewusste</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Sie legen Wert auf regionales, nachhaltiges Holz aus heimischen Wäldern
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-orange-600 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-stack-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Platzsparliebhaber</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Weniger Platzbedarf beim Stapeln durch optimale Holzstücke
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Not Suitable For */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-xl">
                <div className="text-center mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center bg-red-500 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                    <i className="ri-close-line text-white text-base sm:text-lg lg:text-2xl xl:text-3xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-red-800 mb-1 sm:mb-2 leading-tight">
                    ✗ NICHT GEEIGNET FÜR:
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-red-700 font-medium px-1 sm:px-2">
                    Für diese Bedürfnisse empfehlen wir andere Produkte
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6">
                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-red-500 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-money-euro-circle-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-red-800 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Billig-Sucher</h4>
                      <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                        Sie suchen das absolut günstigste Holz ohne Rücksicht auf Qualität
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-red-500 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-time-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-red-800 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Spontan-Käufer</h4>
                      <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                        Sie brauchen Holz sofort heute – wir liefern nach Terminvereinbarung
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-red-500 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-truck-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-red-800 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Selbstabholer</h4>
                      <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                        Sie möchten das Holz selbst abholen – wir bieten nur Lieferservice
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center bg-red-500 rounded-full mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 mt-0.5">
                      <i className="ri-seedling-line text-white text-xs sm:text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-red-800 mb-1 text-xs sm:text-sm lg:text-base leading-tight">Nadelholz-Fans</h4>
                      <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
                        Sie bevorzugen Nadelholz – wir bieten ausschließlich hochwertiges Laubholz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center shadow-2xl mt-4 sm:mt-6 lg:mt-8 xl:mt-12">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black mb-2 sm:mb-3 lg:mb-4 leading-tight">
                NOCH UNSICHER? KOSTENLOSE BERATUNG!
              </h3>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg mb-3 sm:mb-4 lg:mb-6 opacity-90 px-1 sm:px-2">
                Unsere Experten helfen Ihnen bei der richtigen Holzwahl - ehrlich und unverbindlich
              </p>
              <a 
                href="tel:+4917671085234"
                className="inline-flex items-center bg-white text-orange-600 px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer text-xs sm:text-sm lg:text-base"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex items-center justify-center mr-1 sm:mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                <span>Kostenlose Beratung</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">
              <i className="ri-route-line mr-2"></i>
              <span>SO EINFACH GEHT'S</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              <span>IHR WEG ZUM</span> <span className="text-orange-600">PREMIUM-BRENNHOLZ</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Von der Bestellung bis zur gemütlichen Wärme in nur wenigen Schritten. Einfacher geht es nicht!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
              <div className="text-center">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl sm:rounded-2xl shadow-lg mx-auto mb-4 sm:mb-6">
                    <i className="ri-phone-line text-white text-lg sm:text-2xl lg:text-3xl"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm lg:text-base">1</span>
                    <span>ANFRAGEN</span>
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4">
                    Kontaktieren Sie uns telefonisch oder per E-Mail für Ihre Brennholz-Anfrage.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl sm:rounded-2xl shadow-lg mx-auto mb-4 sm:mb-6">
                    <i className="ri-calendar-check-line text-white text-lg sm:text-2xl lg:text-3xl"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm lg:text-base">2</span>
                    <span>BERATUNG</span>
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4">
                    Wir beraten Sie persönlich und finden das passende Brennholz für Ihre Bedürfnisse.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl sm:rounded-2xl shadow-lg mx-auto mb-4 sm:mb-6">
                    <i className="ri-truck-line text-white text-lg sm:text-2xl lg:text-3xl"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm lg:text-base">3</span>
                    <span>LIEFERUNG</span>
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4">
                    Pünktliche Lieferung direkt zu Ihnen nach Hause. Termingerecht und zuverlässig.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl sm:rounded-2xl shadow-lg mx-auto mb-4 sm:mb-6">
                    <i className="ri-fire-line text-white text-lg sm:text-2xl lg:text-3xl"></i>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm lg:text-base">4</span>
                    <span>GENIEßEN</span>
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4">
                    Sofort einsatzbereit! Genießen Sie wohlige Wärme mit unserem Premium-Brennholz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            BEREIT FÜR IHR PREMIUM-BRENNHOLZ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns jetzt für eine kostenlose Beratung und ein unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="tel:+4917671085234"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2 sm:mr-3"></i>
              Jetzt anrufen
            </a>
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2 sm:mr-3"></i>
              Anfrage senden
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
