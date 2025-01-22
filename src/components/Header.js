import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Register Karo</h1>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <a href="#services" className="hover:text-yellow-300">Services</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#testimonials" className="hover:text-yellow-300">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
        <button className="bg-yellow-400 text-blue-600 py-2 px-4 rounded hover:bg-yellow-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
