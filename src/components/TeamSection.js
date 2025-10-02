import React from 'react';
import { Github, Linkedin, User, Code, Smartphone, Palette, TrendingUp, Rocket } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const iconMap = { User, Code, Smartphone, Palette, TrendingUp, Rocket };

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The creative minds behind LumiSpark Studio
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map(member => (
              <div 
                key={member.id}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Profile Icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 group-hover:animate-pulse">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                        {React.createElement(iconMap[member.icon] || User, { className: `w-10 h-10 ${member.color}` })}
                      </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-4 text-sm">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.skills.slice(0, 2).map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                      {member.skills.length > 2 && <span className="text-xs text-gray-500">+{member.skills.length - 2} more skills</span>}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="p-2 rounded-full bg-slate-800/50 border border-gray-600/50 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200">
                        <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                      </a>
                      <a href={member.social.github} className="p-2 rounded-full bg-slate-800/50 border border-gray-600/50 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-200">
                        <Github className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                      </a>
                    </div>

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

export default TeamSection;
