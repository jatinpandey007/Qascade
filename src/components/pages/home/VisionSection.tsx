import { Database, Zap, Link, DollarSign, Minimize2, Battery } from "lucide-react"

export default function VisionSection() {
  const benefits = [
    {
      icon: Database,
      label: "MORE DATA",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      label: "INCREASED SPEED",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Link,
      label: "IMPROVED RELIABILITY",
      color: "from-pink-500 to-red-600",
    },
    {
      icon: DollarSign,
      label: "LOWER COST",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Minimize2,
      label: "SMALLER FORM FACTOR",
      color: "from-orange-600 to-red-500",
    },
    {
      icon: Battery,
      label: "LESS POWER CONSUMPTION",
      color: "from-red-500 to-pink-600",
    },
  ]

  return (
    <section className="bg-slate-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-white mb-2 tracking-wider uppercase font-extrabold text-5xl">
            Vision
          </h2>
          <p className="text-sm text-gray-400 mb-4">(Bhavya photo)</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            To accelerate the global adoption of photonic technologies by designing scalable, high-performance PICs that
            power next-generation systems.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">The next generation chips</h3>

          <div className="text-gray-300 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Photonics uses photons (light) to transfer and process information. Photonic chips, also called photonic
              integrated circuits (PICs), integrate photonic functions into microchips to create smaller, faster and
              more energy-efficient devices. SMART Photonics manufactures Indium Phosphide (InP) based chips; the only
              material suitable for high performance at low system cost.
            </p>
          </div>
        </div>

        {/* Benefits Icons */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide leading-tight">
                    {benefit.label}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Connecting Line */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="flex justify-center">
              <div className="bg-slate-900 px-4">
                <div className="w-4 h-4 border-2 border-gray-600 bg-slate-900 rotate-45 transform"></div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-lg font-semibold text-white mb-2">Performance improvements enable a large number</p>
            <p className="text-lg font-semibold text-white">of commercial applications</p>
          </div>
        </div>
      </div>
    </section>
  )
}