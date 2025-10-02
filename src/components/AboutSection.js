import React from 'react';
import { Users, Zap, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Team Members", value: "5" },
    { icon: Zap, label: "Projects Completed", value: "0" },
    { icon: Heart, label: "Happy Clients", value: "0" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where creativity meets code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Every big idea starts small — with a spark. At <span className="text-cyan-400 font-semibold">LumiSpark Studio</span>, we’re a team of passionate college students who love turning creativity into reality. Armed with design skills, coding knowledge, and a curiosity for innovation, we bring fresh ideas to life.
                </p>
                <p>
                  From sleek websites to impactful brand identities, we aim to craft digital experiences that connect, inspire, and leave a mark — all while learning, experimenting, and growing together <span className="text-purple-400 font-semibold">as a team</span>.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
                    <p className="text-gray-300">We stay ahead of trends and use cutting-edge technologies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Heart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Client-Centric</h4>
                    <p className="text-gray-300">Your success is our priority. We listen, understand, and deliver.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-cyan-500/20">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Collaborative</h4>
                    <p className="text-gray-300">We work as partners, not just service providers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* MODIFIED: Changed grid-cols-2 lg:grid-cols-4 to grid-cols-3 for better alignment of 3 items */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;