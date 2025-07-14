import { Link } from "react-router-dom";

const OmegaSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs font-medium tracking-wider text-gray-400 mb-6 uppercase">
              INTRODUCING
            </p>
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
  );
};

export default OmegaSection;
