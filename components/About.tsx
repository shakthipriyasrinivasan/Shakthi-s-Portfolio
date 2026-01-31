import React from 'react';
import { ABOUT_TEXT } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Background Gradient Blob within card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px] -z-10"></div>
            
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-white/5 font-serif text-9xl leading-none select-none">"</div>
            
            <p className="text-xl text-slate-300 leading-relaxed relative z-10 indent-8 font-light tracking-wide">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;