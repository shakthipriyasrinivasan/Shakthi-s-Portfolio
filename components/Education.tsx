import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-0 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education & Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-xl">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-10 border-l border-white/10 ml-5 pl-10 py-2 relative">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[45px] top-1.5 w-6 h-6 bg-[#050511] rounded-full border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-violet-300 font-medium mb-2">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-400">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
             <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-5 group hover:bg-white/5 transition-all"
                >
                  <div className="mt-1 min-w-[24px]">
                    <Award className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-cyan-200 transition-colors">{cert.title}</h4>
                    <p className="text-sm text-slate-400 mt-2">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;