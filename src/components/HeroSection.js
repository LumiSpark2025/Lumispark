import React from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight, Code, Palette } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Igniting Ideas
            </span>
            <br />
            <span className="text-white">with </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Design & Code
            </span>
          </h1>

          {/* Subheadline - Removed content */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {/* Intentionally left empty */}
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-gray-300">
              <Code className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Modern Development</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            <div className="flex items-center gap-3 text-gray-300">
              <Palette className="w-6 h-6 text-purple-400" />
              <span className="text-lg">Creative Design</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <div className="flex items-center gap-3 text-gray-300">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <span className="text-lg">Brand Innovation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => scrollToSection('#portfolio')}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              View Our Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-gradient-to-r from-cyan-400 to-purple-500 text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 group border-cyan-400/50 hover:border-cyan-400"
            >
              Let's Collaborate
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
