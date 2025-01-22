import React from "react";

const Features = () => {
  const features = [
    { title: "Fast", description: "Quick and efficient registration." },
    { title: "Secure", description: "We value your data's security." },
    { title: "Reliable", description: "Trustworthy platform for all users." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
