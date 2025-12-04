export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Sobre Nosotros</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Acerca de MAX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nuestros Valores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Compra</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Envíos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Políticas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2025 MAX Colchón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
