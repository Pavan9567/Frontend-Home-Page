import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What services do you offer?", answer: "We offer company registration, bookkeeping, payroll, and more." },
    { question: "How do I register my business?", answer: "You can register your business by contacting us or using our online platform." },
    { question: "What is the turnaround time for services?", answer: "Most services are completed within 2-3 business days." },
    { question: "Do you offer customer support?", answer: "Yes, we provide 24/7 customer support." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}>
              <h4 className="text-lg font-bold text-blue-600">{faq.question}</h4>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
