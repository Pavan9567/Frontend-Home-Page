import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Your Trusted Partner for Compliance Business Needs
        </h2>
        <p className="text-gray-700 mb-6">
          We offer comprehensive solutions for business compliance needs, making the process seamless, fast, and reliable.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Explore Services
          </button>
          <button className="bg-gray-200 text-blue-600 py-2 px-6 rounded hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
