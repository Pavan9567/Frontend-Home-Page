import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Your Message" rows="4" required ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
