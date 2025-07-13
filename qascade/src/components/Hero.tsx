import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-qascade-primary dark:bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Innovate the Future with Qascade
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Pioneering quantum computing solutions for a sustainable tomorrow.
        </p>
        <a
          href="/contact"
          className="inline-block bg-qascade-secondary text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 dark:hover:bg-green-500 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;