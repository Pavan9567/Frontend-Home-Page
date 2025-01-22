import React from "react";

const services = [
  { title: "Company Foundation", description: "Quick company registration services." },
  { title: "Bookkeeping Services", description: "Maintain your financial records accurately." },
  { title: "Payroll Services", description: "Efficient payroll management." },
  { title: "Virtual Office Address", description: "Get a professional business address." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Explore Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
