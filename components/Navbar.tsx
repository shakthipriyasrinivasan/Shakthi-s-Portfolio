import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050511]/70 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-white group">
          <div className="bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white p-1.5 rounded-lg shadow-lg shadow-violet-500/20 group-hover:shadow-fuchsia-500/40 transition-all">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="tracking-wide">Shakthipriya</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a16] border-b border-white/10 shadow-2xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="py-3 px-4 text-slate-300 hover:bg-white/5 hover:text-fuchsia-400 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;