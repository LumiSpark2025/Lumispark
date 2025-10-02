import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import PortfolioSection from '../components/PortfolioSection';
// import TestimonialsSection from '../components/TestimonialsSection'; // temporarily hidden
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />

      {/* <TestimonialsSection /> */} {/* temporarily hidden */}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
