import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Alice", feedback: "Amazing platform!" },
    { name: "Bob", feedback: "Highly recommend." },
    { name: "Charlie", feedback: "Very user-friendly." },
  ];

  return (
    <section id="testimonials" className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600">"{testimonial.feedback}"</p>
              <h4 className="text-gray-700 font-bold mt-4">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
