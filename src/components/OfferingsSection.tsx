import { Settings, Monitor, Network, Search } from "lucide-react"

export default function OfferingsSection() {
  const offerings = [
    {
      title: "Consultancy & Engineering",
      description: "You tell us the goal, we define how to build it.",
      icon: Settings,
      bgColor: "bg-yellow-400",
      textColor: "text-gray-900",
    },
    {
      title: "Design & Simulation",
      description: "Design, simulate, and optimize photonic circuits with our cloud-based EDA platform.",
      icon: Monitor,
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      title: "Fabless Manufacturing",
      description: "Seamless handoff from design to fabrication with foundry-ready outputs.",
      icon: Network,
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      title: "Testing & Validation",
      description: "Post-fab testing, performance checks, and design refinement support.",
      icon: Search,
      bgColor: "bg-pink-500",
      textColor: "text-white",
    },
  ]

  return (
    <section className="bg-slate-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">OUR OFFERINGS</h2>
          <div className="text-cyan-400 font-bold text-xl tracking-wider">QASCADE</div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon
            return (
              <div
                key={index}
                className={`${offering.bgColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className={`w-12 h-12 ${offering.textColor}`} />
                </div>

                {/* Divider Line */}
                <div
                  className={`w-full h-px ${offering.textColor === "text-gray-900" ? "bg-gray-900" : "bg-white"} mb-6 opacity-30`}
                ></div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${offering.textColor} mb-4 leading-tight`}>{offering.title}</h3>

                {/* Description */}
                <p className={`${offering.textColor} text-sm leading-relaxed opacity-90`}>{offering.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
