
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const ServiceFunnelPage = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [projectType, setProjectType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Kostenlose Beratung | Vey Unternehmensgruppe | Buttlar";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kostenlose Beratung für Ihre Projekte in Buttlar. Baumfällarbeiten, Abbrucharbeiten, Malerarbeiten, Dachdeckerarbeiten und mehr. Jetzt unverbindlich anfragen!');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Kostenlose Beratung, Projektplanung, Baumfällarbeiten, Abbrucharbeiten, Malerarbeiten, Dachdeckerarbeiten, Buttlar');
    }
  }, []);

  const services = [
    {
      id: 'baumfaellarbeiten',
      name: 'Baumfällarbeiten',
      icon: 'ri-plant-line',
      description: 'Professionelle Baumfällung und Baumpflege'
    },
    {
      id: 'abbrucharbeiten',
      name: 'Abbrucharbeiten',
      icon: 'ri-hammer-line',
      description: 'Sichere und fachgerechte Abbrucharbeiten'
    },
    {
      id: 'malerarbeiten',
      name: 'Malerarbeiten',
      icon: 'ri-brush-line',
      description: 'Innen- und Außenmalerarbeiten'
    },
    {
      id: 'dachdeckerarbeiten',
      name: 'Dachdeckerarbeiten',
      icon: 'ri-home-line',
      description: 'Dachsanierung und Reparaturen'
    },
    {
      id: 'mulcharbeiten',
      name: 'Mulcharbeiten',
      icon: 'ri-leaf-line',
      description: 'Gartenpflege und Mulcharbeiten'
    },
    {
      id: 'schuettgutboxen',
      name: 'Lagerboxen',
      icon: 'ri-archive-line',
      description: 'Flexible Lagerboxen zur Miete'
    },
    {
      id: 'umzuege',
      name: 'Umzüge',
      icon: 'ri-truck-line',
      description: 'Professionelle Umzugsdienstleistungen'
    },
    {
      id: 'transporte',
      name: 'Transporte',
      icon: 'ri-roadster-line',
      description: 'Zuverlässige Transportlösungen'
    }
  ];

  const projectTypes = {
    'baumfaellarbeiten': ['Einzelbaum fällen', 'Mehrere Bäume', 'Baumpflege', 'Notfällung'],
    'abbrucharbeiten': ['Gebäudeabbruch', 'Teilabbruch', 'Innenabbruch', 'Gartenhaus/Schuppen'],
    'malerarbeiten': ['Innenräume streichen', 'Fassade streichen', 'Renovierung', 'Neubau'],
    'dachdeckerarbeiten': ['Dachsanierung', 'Dachreparatur', 'Neueindeckung', 'Dachrinnen'],
    'mulcharbeiten': ['Gartenpflege', 'Mulchen', 'Heckenschnitt', 'Grünflächenpflege'],
    'schuettgutboxen': ['Kurzzeit-Lagerung', 'Langzeit-Lagerung', 'Baumaterial', 'Umzug'],
    'umzuege': ['Privatumzug', 'Firmenumzug', 'Fernumzug', 'Teilumzug'],
    'transporte': ['Möbeltransport', 'Schwertransport', 'Kurierdienst', 'Bautransport']
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const formData = {
        service: selectedService,
        projectType,
        urgency,
        budget,
        location,
        ...contactInfo
      };

      const response = await fetch('https://readdy.ai/api/form/d4b1v1crg8gnguu9580g', {
        method: 'POST',
        body: new URLSearchParams(formData as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setCurrentStep(6);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Welche Dienstleistung benötigen Sie?';
      case 2: return 'Was für ein Projekt haben Sie?';
      case 3: return 'Wie dringend ist Ihr Projekt?';
      case 4: return 'Was ist Ihr ungefähres Budget?';
      case 5: return 'Ihre Kontaktdaten';
      case 6: return 'Vielen Dank!';
      default: return '';
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedService !== '';
      case 2: return projectType !== '';
      case 3: return urgency !== '';
      case 4: return budget !== '';
      case 5: return contactInfo.name && contactInfo.email && contactInfo.phone;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/company-logo.png"
                alt="Vey Unternehmensgruppe Logo"
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Schritt {currentStep} von 5</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / 5) * 100)}% abgeschlossen</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Wählen Sie die Dienstleistung aus, für die Sie eine kostenlose Beratung wünschen
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedService === service.id
                        ? 'border-orange-600 bg-orange-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      selectedService === service.id ? 'bg-orange-600' : 'bg-gray-100'
                    }`}>
                      <i className={`${service.icon} text-xl ${
                        selectedService === service.id ? 'text-white' : 'text-gray-600'
                      }`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Type */}
          {currentStep === 2 && selectedService && (
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Beschreiben Sie Ihr {services.find(s => s.id === selectedService)?.name}-Projekt genauer
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {projectTypes[selectedService as keyof typeof projectTypes]?.map((type) => (
                  <div
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      projectType === type
                        ? 'border-orange-600 bg-orange-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Urgency */}
          {currentStep === 3 && (
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Wann soll das Projekt idealerweise durchgeführt werden?
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {[
                  { id: 'sofort', label: 'So schnell wie möglich', desc: 'Innerhalb der nächsten Woche' },
                  { id: 'bald', label: 'In den nächsten Wochen', desc: '2-4 Wochen' },
                  { id: 'geplant', label: 'Geplant für später', desc: '1-3 Monate' },
                  { id: 'flexibel', label: 'Zeitlich flexibel', desc: 'Kein fester Termin' }
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setUrgency(option.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      urgency === option.id
                        ? 'border-orange-600 bg-orange-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.label}</h3>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Diese Information hilft uns, Ihnen das passende Angebot zu erstellen
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {[
                  { id: 'bis-1000', label: 'Bis 1.000 €', desc: 'Kleinere Arbeiten' },
                  { id: 'bis-5000', label: '1.000 - 5.000 €', desc: 'Mittlere Projekte' },
                  { id: 'bis-15000', label: '5.000 - 15.000 €', desc: 'Größere Projekte' },
                  { id: 'ueber-15000', label: 'Über 15.000 €', desc: 'Umfangreiche Arbeiten' },
                  { id: 'unsicher', label: 'Bin mir unsicher', desc: 'Beratung gewünscht' },
                  { id: 'erstmal-schauen', label: 'Erstmal informieren', desc: 'Unverbindliche Anfrage' }
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setBudget(option.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      budget === option.id
                        ? 'border-orange-600 bg-orange-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.label}</h3>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Contact Information */}
          {currentStep === 5 && (
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Wie können wir Sie für die kostenlose Beratung erreichen?
              </p>
              
              <form data-readdy-form id="service-funnel" className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Standort/PLZ
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="PLZ oder Ort"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Zusätzliche Informationen
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactInfo.message}
                    onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-vertical"
                    placeholder="Beschreiben Sie Ihr Projekt genauer..."
                  />
                  <p className="text-xs text-gray-500 mt-1 text-left">
                    {contactInfo.message.length}/500 Zeichen
                  </p>
                </div>

                {/* Hidden fields for form data */}
                <input type="hidden" name="service" value={selectedService} />
                <input type="hidden" name="projectType" value={projectType} />
                <input type="hidden" name="urgency" value={urgency} />
                <input type="hidden" name="budget" value={budget} />
              </form>
            </div>
          )}

          {/* Step 6: Success */}
          {currentStep === 6 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-3xl text-green-600"></i>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Vielen Dank für Ihre Anfrage!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Ihre Anfrage im Überblick:</h3>
                <div className="space-y-2 text-left">
                  <p><strong>Dienstleistung:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                  <p><strong>Projekttyp:</strong> {projectType}</p>
                  <p><strong>Dringlichkeit:</strong> {urgency}</p>
                  <p><strong>Budget:</strong> {budget}</p>
                  <p><strong>Kontakt:</strong> {contactInfo.name} ({contactInfo.email})</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Zurück zur Startseite
                </Link>
                <a
                  href="tel:+4917671085234"
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Direkt anrufen
                </a>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 6 && (
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
                }`}
              >
                ← Zurück
              </button>

              {currentStep === 5 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                    canProceed() && !isSubmitting
                      ? 'bg-orange-600 text-white hover:bg-orange-700 cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Wird gesendet...
                    </span>
                  ) : (
                    'Anfrage senden'
                  )}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                    canProceed()
                      ? 'bg-orange-600 text-white hover:bg-orange-700 cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Weiter →
                </button>
              )}
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <i className="ri-error-warning-fill text-red-600 text-xl mr-3"></i>
                <div>
                  <h3 className="text-red-800 font-semibold">Fehler beim Senden</h3>
                  <p className="text-red-700">Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ServiceFunnelPage;
