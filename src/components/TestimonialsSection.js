import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mockData';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-2xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30">
                  <Quote className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 p-1"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-cyan-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-slate-800/50 border border-gray-600/50 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-slate-800/50 border border-gray-600/50 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentTestimonial === index
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;