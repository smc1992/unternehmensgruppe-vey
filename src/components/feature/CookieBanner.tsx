import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    saveCookiePreferences(allAccepted);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(necessaryOnly);
    saveCookiePreferences(necessaryOnly);
    setShowBanner(false);
  };

  const saveCustomPreferences = () => {
    saveCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString()
    }));

    // Hier können Sie Google Analytics oder andere Tracking-Tools aktivieren/deaktivieren
    if (prefs.analytics) {
      // Google Analytics aktivieren
      console.log('Analytics aktiviert');
    }

    if (prefs.marketing) {
      // Marketing-Cookies aktivieren
      console.log('Marketing-Cookies aktiviert');
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Notwendige Cookies können nicht deaktiviert werden
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-orange-600 shadow-2xl z-50 p-4 sm:p-6">
        <div className="container mx-auto max-w-6xl">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-shield-check-line text-white text-lg"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Cookie-Einstellungen</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                  Notwendige Cookies sind für die Grundfunktionen der Website erforderlich.
                </p>
                <p className="text-gray-600 text-xs">
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-orange-600 hover:text-orange-700 underline">
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors whitespace-nowrap text-sm"
                >
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap text-sm"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap text-sm"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-settings-3-line text-white text-lg"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Cookie-Einstellungen anpassen</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="grid gap-4">
                {/* Notwendige Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-bar-chart-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Benutzererfahrung zu verbessern.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-megaphone-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">Marketing-Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">
                    Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors whitespace-nowrap text-sm"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap text-sm flex-1"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap text-sm"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setShowSettings(false)}></div>
      )}
    </>
  );
}