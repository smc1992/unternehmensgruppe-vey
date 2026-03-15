import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../../components/feature/MobileMenu';

export default function BarrierefreiheitPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
                href="tel:+4917671085234" 
                className="hidden sm:flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>Jetzt anrufen</span>
              </a>
              
              <button aria-label="Menü öffnen" 
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
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Erklärung zur Barrierefreiheit</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Die <strong>Vey Unternehmensgruppe</strong> ist bemüht, ihre Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates sowie dem Barrierefreiheitsstärkungsgesetz (BFSG) barrierefrei zugänglich zu machen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stand der Vereinbarkeit mit den Anforderungen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website ist mit den grundlegenden Anforderungen der Barrierefreiheit (WCAG 2.1 AA) weitmöglichst vereinbar. Wir arbeiten kontinuierlich an der Verbesserung der Nutzererfahrung für alle Besucher und wenden die entsprechenden Standards für die Zugänglichkeit an.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nicht barrierefreie Inhalte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die nachstehend aufgeführten Inhalte sind derzeit aufgrund von Ausnahmen oder laufenden Anpassungen möglicherweise nicht vollständig barrierefrei:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Einige verlinkte PDF-Dokumente könnten noch nicht vollständig den Kriterien der Barrierefreiheit entsprechen.</li>
              <li>Alternative Texte für Bilder und Grafiken werden fortlaufend überprüft und ergänzt.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Erstellung dieser Erklärung</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Erklärung wurde zuletzt aktualisiert im Jahr 2026.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback und Kontaktangaben</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ihnen sind Mängel beim barrierefreien Zugang zu Inhalten von unserer Website aufgefallen? Oder Sie haben Fragen zum Thema Barrierefreiheit? Dann können Sie sich gerne bei uns melden:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Vey Unternehmensgruppe</strong><br />
              Thorsten Vey<br />
              Frankfurter Straße 3<br />
              36419 Buttlar<br />
              E-Mail: <a href="mailto:info@unternehmensgruppe-vey.de" className="text-orange-600 hover:text-orange-700">info@unternehmensgruppe-vey.de</a><br />
              Telefon: +49 176 71085234
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durchsetzungsverfahren</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sollten Sie der Ansicht sein, dass Sie durch eine nicht ausreichende barrierefreie Gestaltung unserer Website benachteiligt sind, und wir Ihre Anfrage nicht zu Ihrer Zufriedenheit beantwortet haben, können Sie sich an die zuständige Durchsetzungsstelle für Barrierefreiheit wenden. 
              Ziel der Durchsetzungsstelle ist es, Streitigkeiten zwischen Menschen mit Behinderungen und öffentlichen oder privaten Stellen außergerichtlich beizulegen.
            </p>
          </section>
        </div>
      </main>

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
                <a href="tel:+4917671085234" aria-label="Telefonnummer anrufen" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                  <i className="ri-phone-line"></i>
                </a>
                <a href="mailto:info@unternehmensgruppe-vey.de" aria-label="E-Mail senden" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
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
                <a href="mailto:info@unternehmensgruppe-vey.de" className="hover:text-white transition-colors block">info@unternehmensgruppe-vey.de</a>
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
              <Link to="/barrierefreiheit" className="text-gray-300 hover:text-white transition-colors">Barrierefreiheit</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
