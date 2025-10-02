import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioProjects } from '../data/mockData';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'App Development', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg'
                    : 'text-gray-300 border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.link && (
                          <a 
                            href={project.link}
                            className="p-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-200"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github}
                            className="p-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-400 hover:bg-purple-500/30 transition-all duration-200"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/90 to-purple-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-800/50 border border-gray-600/50 text-xs text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Link */}
                    {project.link && (
                      <a 
                        href={project.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
