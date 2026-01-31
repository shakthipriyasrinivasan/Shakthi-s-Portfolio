import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-white py-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Shakthipriya S D</h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href={CONTACT_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-violet-600 transition-all text-slate-400 hover:text-white border border-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="p-3 bg-white/5 rounded-full hover:bg-slate-800 transition-all text-slate-400 hover:text-white border border-white/10"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shakthipriya S D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;