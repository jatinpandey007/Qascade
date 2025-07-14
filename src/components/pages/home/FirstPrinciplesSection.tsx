const FirstPrinciplesSection: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-medium tracking-wider text-gray-400 mb-6 uppercase">
            FIRST PRINCIPLES
          </p>
          <h3 className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
            PsiQuantum is a quantum computing company on a mission to build and
            deploy the world's first useful quantum computers.
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our approach to building a utility-scale, fault-tolerant quantum
            computer involves photonics-based architecture and it leverages
            existing infrastructure to build and scale these systems as fast as
            possible.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FirstPrinciplesSection;
