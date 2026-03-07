'use client';

import { motion } from 'framer-motion';
import { Settings, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                <Settings className="w-6 h-6 text-white animate-spin-slow" style={{ animationDuration: '8s' }} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight text-white">ADEM</span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase">Ghelous</span>
              </div>
            </motion.div>
            
            <p className="text-slate-500 text-sm max-w-xs">
              Building the intersection of moving mechanical parts and intelligent code. 
              A portfolio showcasing mechatronics engineering and AI development.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>in Sétif, Algeria</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-500 hover:text-blue-400 text-sm text-left transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-500">
              <p>
                <span className="text-slate-400">Email:</span>{' '}
                <a href="mailto:adameghalous@gmail.com" className="hover:text-blue-400 transition-colors">
                  adameghalous@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-400">Phone:</span>{' '}
                <a href="tel:+213673745781" className="hover:text-blue-400 transition-colors">
                  0673745781
                </a>
              </p>
              <p>
                <span className="text-slate-400">Location:</span> Sétif, Algeria
              </p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <motion.a
                href="https://github.com/ADAMEDZ"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adem-gh-a98282325/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:adameghalous@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Adem Ghelous. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
