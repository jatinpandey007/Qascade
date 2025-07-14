import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;