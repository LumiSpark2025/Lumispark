import React from 'react';
import { Code, Smartphone, Palette, Rocket, Sparkles } from 'lucide-react';
import { services } from '../data/mockData';

const ServicesSection = () => {
  const iconMap = {
    Code,
    Smartphone,
    Palette,
    Rocket,
    Sparkles
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div 
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Ready to bring your project to life?
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;