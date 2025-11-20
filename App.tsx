import React from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Vey Unternehmensgruppe
          </h1>
          <p className="text-xl text-gray-600">
            Professionelle Dienstleistungen in Buttlar
          </p>
        </header>
        
        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🪵 Brennholz
            </h2>
            <p className="text-gray-600">
              Premium Brennholz für optimale Wärmeleistung
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🌳 Baumfällarbeiten
            </h2>
            <p className="text-gray-600">
              Sichere und professionelle Baumfällung
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🍃 Mulcharbeiten
            </h2>
            <p className="text-gray-600">
              Effektive Mulcharbeiten für Bodenpflege
            </p>
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-600">
          <p>&copy; 2024 Vey Unternehmensgruppe. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
