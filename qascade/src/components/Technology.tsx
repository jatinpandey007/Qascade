import React from 'react';

const Technology: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-qascade-primary dark:text-white text-center mb-8">
          Our Technology
        </h2>
        <div className="perm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-qascade-bg dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-qascade-primary dark:text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Leveraging quantum mechanics to solve complex problems faster than classical computers.
            </p>
          </div>
          <div className="p-6 bg-qascade-bg dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-qascade-primary dark:text-white mb-4">AI Integration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Combining quantum computing with AI to enhance predictive analytics and decision-making.
            </p>
          </div>
          <div className="p-6 bg-qascade-bg dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-qascade-primary dark:text-white mb-4">Sustainability</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developing energy-efficient solutions to reduce environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;