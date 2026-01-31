import React from 'react';
import { PROJECTS_DATA } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" subtitle="Applying AI and Development skills to solve real-world problems" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative glass-card rounded-2xl overflow-hidden flex flex-col hover:border-fuchsia-500/30 hover:shadow-[0_0_30px_rgba(192,38,211,0.15)] transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-fuchsia-600/0 to-cyan-600/0 group-hover:from-violet-600/5 group-hover:via-fuchsia-600/5 group-hover:to-cyan-600/5 transition-all duration-500"></div>

                <div className="p-8 flex-1 relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 text-xs font-semibold bg-black/30 text-fuchsia-300 border border-fuchsia-500/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;