import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      alert("Message sent! (This is a demo form)");
      setFormStatus('idle');
    }, 1500);
  };

  return (
    <section id="contact" className="py-0 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to discuss opportunities?" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:scale-110 transition-all">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className="font-medium text-lg break-all">{CONTACT_INFO.email}</span>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-5 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/10 group-hover:scale-110 transition-all">
                    <Phone className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <span className="font-medium text-lg">{CONTACT_INFO.phone}</span>
                </a>
                
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all">
                    <Linkedin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="font-medium text-lg">LinkedIn Profile</span>
                </a>

                <div className="flex items-center gap-5 text-slate-300">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-slate-400" />
                  </div>
                  <span className="font-medium text-lg">Vellore, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-slate-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-violet-600/20"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;