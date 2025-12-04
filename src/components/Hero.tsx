export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
              <span className="text-red-600 font-bold text-xs">🏆 2025</span>
              <span className="text-red-600 text-xs">TROFEO DEL HOGAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">BASES TAPIZADAS PARTIDAS</h2>
            <p className="text-gray-600 text-lg">
              Descubre nuestras bases tapizadas con sistemas de partición innovadores para mayor confort.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver Colecciones
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/luxury-mattress-bedroom-setup.jpg"
              alt="Base tapizada"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
