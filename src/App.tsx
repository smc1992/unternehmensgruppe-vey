function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Vey Unternehmensgruppe
          </h1>
          <p className="text-xl text-gray-600">
            Professionelle Dienstleistungen aus Buttlar
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🪵 Brennholz</h3>
            <p className="text-gray-600">Premium Brennholz in bester Qualität</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🌳 Baumfällarbeiten</h3>
            <p className="text-gray-600">Sichere und professionelle Baumfällung</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🚜 Mulcharbeiten</h3>
            <p className="text-gray-600">Effizientes Mulchen für Garten und Landschaft</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🔨 Abbrucharbeiten</h3>
            <p className="text-gray-600">Professioneller Rückbau von Gebäuden</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🎨 Malerarbeiten</h3>
            <p className="text-gray-600">Qualitätsvolle Malerarbeiten</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">🏠 Dachdeckerarbeiten</h3>
            <p className="text-gray-600">Professionelle Dacharbeiten</p>
          </div>
        </div>

        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Kontaktieren Sie uns für ein unverbindliches Angebot
          </p>
          <a 
            href="mailto:info@unternehmensgruppe-vey.de" 
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            E-Mail schreiben
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
