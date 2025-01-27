import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-orange-400">Register</span>Karo
        </Link>
        <button className="block md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative bg-blue-800 w-full md:w-auto top-full left-0 md:top-auto md:left-auto`}>
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 items-center">
            <li>
              <Link to="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
                <a href="#services" className="hover:text-yellow-300">Services</a>
            </li>
            <li>
                <a href="#about" className="hover:text-yellow-300">About</a>
            </li>
            <li>
                <a href="#testimonials" className="hover:text-yellow-300">Testimonials</a>
            </li>
            <li>
                <a href="#contact" className="hover:text-yellow-300">Contact</a>
            </li>
            <li>
                <button className="bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-gray-700">Talk An Expert</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
