import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Contact from "../components/Contact";
import About from "../components/About";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedCompanies />
      <Services />
      <About />
      <Testimonials />
      <FAQs />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
