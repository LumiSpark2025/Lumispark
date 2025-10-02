import React from 'react';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' }
    ],
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'App Development', href: '#services' },
      { label: 'Creative Design', href: '#services' },
      { label: 'Digital Branding', href: '#services' },
      { label: 'Custom Solutions', href: '#services' }
    ],
    social: [
      { icon: Github, label: 'GitHub', href: 'https://github.com/LumiSpark2025' },
      { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lumispark-studio-aaa0b7388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/lumispark14?utm_source=qr&igsh=MTNjZDZpZ3NxaDY4ZA==' },
      { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=lumispark2025@gmail.com' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-gray-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    LumiSpark
                  </span>
                  <span className="text-cyan-400 ml-2">Studio</span>
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  Where Creativity Meets Code
                </p>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                We are a creative tech studio of 5 passionate developers and designers, 
                building stunning websites, powerful apps, and impactful brand identities 
                that light up your brand.
              </p>

              {/* Social Links */}
              <div>
                <p className="text-white font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {footerLinks.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 rounded-full bg-slate-800/50 border border-gray-600/50 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-400">
              <span>© {currentYear} LumiSpark Studio. Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 animate-pulse" />
              <span>and lots of ☕</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;