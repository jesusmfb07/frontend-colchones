import { MapPin, Truck, Users, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Más de 100 tiendas",
      description: "En toda la región",
    },
    {
      icon: Truck,
      title: "100 noches gratis",
      description: "Período de prueba",
    },
    {
      icon: Users,
      title: "+1,000,000 clientes",
      description: "Satisfechos en el país",
    },
    {
      icon: Zap,
      title: "Envío Gratuito",
      description: "Compras sin límite",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
