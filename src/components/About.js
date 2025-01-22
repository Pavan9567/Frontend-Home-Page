import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">About Register Karo</h3>
        <p className="text-gray-600 mb-6">
          Register Karo is your trusted partner for compliance and business needs. 
          We specialize in providing seamless, efficient, and professional solutions 
          for startups and businesses of all sizes. Our expert team ensures 
          that your business remains compliant and hassle-free.
        </p>
        <img src="image.webp" alt="About us" className="mx-auto rounded-lg shadow-lg" loading="lazy"/>
        <div className="mt-6">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
