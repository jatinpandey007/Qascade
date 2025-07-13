import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg이다-qascade-bg dark:bg-gray-900 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl md:text-4xl text-whitefont-bold text-qascade-primary dark:text-white text-center mb-8">
          About Qascade
        </h2>
        <p className="text-lg text-white dark:text-gray-300 text-center max-w-3xl mx-auto transition mt-10">
          We are a fabless photonic chip company designing custom photonic integrated circuits (PICs) for a wide range of real-world use cases, including quantum technologies, telecom, AI inference, data centers, optical networks, and biomedical sensing. We handle all design and validation in-house while partnering with trusted foundries for scalable manufacturing. Our development process is tightly integrated with advanced simulation tools, enabling faster design cycles, reduced costs, and greater agility. With a strong focus on innovation, we are developing a portfolio of patent-ready PIC components to deliver scalable, high-performance photonic solutions that power the next generation of technologies.
        </p>
      </div>
    </section>
  );
};

export default About;