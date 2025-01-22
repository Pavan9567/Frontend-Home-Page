import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#facebook" className="hover:text-yellow-300">Facebook</a>
          <a href="#twitter" className="hover:text-yellow-300">Twitter</a>
          <a href="#linkedin" className="hover:text-yellow-300">LinkedIn</a>
        </div>
        <p className="text-sm mt-2">© 2025 Register Karo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
