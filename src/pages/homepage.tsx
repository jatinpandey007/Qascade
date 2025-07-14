import { Link } from 'react-router-dom';
// import { Plus } from "lucide-react"
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';
import VisionSection from '../components/VisionSection';
import OfferingsSection from '../components/OfferingsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background img */}
        <div className="absolute inset-0">
          <img
            src="./src/assets/hero.png"
            alt="Quantum computing hardware background"
            // fill
            className="object-cover h-[100%] w-full"
            // priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Fabless Photonic Chip Solutions for Next-Generation Applications
            </h1>

            <Link
              to="/blueprint"
              className="inline-block border-2 border-white text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              OUR BLUEPRINT
            </Link>
          </div>
        </div>
      </section>

      {/* Omega Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-xs font-medium tracking-wider text-gray-400 mb-6 uppercase">INTRODUCING</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
                Omega: A manufacturable chipset for photonic quantum computing
              </h2>
              <Link
                to="/omega"
                className="inline-block border-2 border-white text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
              >
                READ MORE
              </Link>
            </div>

            {/* Right img */}
            <div className="relative">
              <img
                src="/src/assets/image.jpg?height=400&width=600"
                alt="Quantum computing wafer"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* First Principles Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-xs font-medium tracking-wider text-gray-400 mb-6 uppercase">FIRST PRINCIPLES</p>
            <h3 className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              PsiQuantum is a quantum computing company on a mission to build and deploy the world's first useful
              quantum computers.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our approach to building a utility-scale, fault-tolerant quantum computer involves photonics-based
              architecture and it leverages existing infrastructure to build and scale these systems as fast as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Offerings Section */}
      <OfferingsSection />
      <Footer/>
    </div>
  )
}
