import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-0 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Technical Skills" subtitle="My technical toolkit and areas of expertise" />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS_DATA.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={idx} 
                variants={item}
                className="glass-card p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl text-white shadow-lg shadow-fuchsia-500/20 group-hover:shadow-fuchsia-500/40 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-white tracking-wide">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 bg-white/5 border border-white/5 text-slate-300 text-sm rounded-lg font-medium group-hover:border-fuchsia-500/30 group-hover:bg-fuchsia-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;