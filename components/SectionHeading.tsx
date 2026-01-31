import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white relative inline-block tracking-tight"
      >
        {title}
        {/* Gradient Underline */}
        <span className="block h-1.5 w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 absolute -bottom-2 left-0 rounded-full"></span>
        <span className="block h-1.5 w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 absolute -bottom-2 left-0 rounded-full blur-md opacity-50"></span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;