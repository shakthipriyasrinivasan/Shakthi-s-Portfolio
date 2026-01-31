import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, Database, Globe, Terminal, Cpu } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Intense Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Image Section */}
          <div className="flex-shrink-0 relative">
            <img
              src="https://github.com/shakthipriyasrinivasan/Shakthi-s-Portfolio/blob/main/components/image.png?raw=true"
              alt="Profile picture of Shakthipriya S D"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-violet-500/50 shadow-[0_0_20px_rgba(192,38,211,0.3)]"
            />

            {/* Floating Skill Icons */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 bg-violet-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-violet-400/30"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Terminal className="w-6 h-6 text-violet-400" />
            </motion.div>

            <motion.div
              className="absolute -top-2 right-0 w-10 h-10 bg-fuchsia-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-fuchsia-400/30"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Code2 className="w-5 h-5 text-fuchsia-400" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-6 w-11 h-11 bg-cyan-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30"
              animate={{
                x: [0, 8, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Globe className="w-5 h-5 text-cyan-400" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 -left-3 w-9 h-9 bg-emerald-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-400/30"
              animate={{
                y: [0, 8, 0],
                rotate: [0, -8, 8, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <Database className="w-4 h-4 text-emerald-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 right-2 w-10 h-10 bg-pink-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-pink-400/30"
              animate={{
                y: [0, -6, 0],
                x: [0, 4, 0],
                rotate: [0, 6, -6, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Cpu className="w-5 h-5 text-pink-400" />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-8">
              <span className="block py-1.5 px-4 rounded-full bg-[#050511] text-slate-200 text-sm font-medium tracking-wide">
                ✨ Open to Work & Collaborations
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Hi, I'm <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(192,38,211,0.3)]">
                {HERO_DATA.name}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light mb-8">
              {HERO_DATA.title}
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_DATA.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Contact Me
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
