'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        
        {/* Technical Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 0 50 L 25 50 L 30 45 L 70 45 L 75 50 L 100 50"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.5"
              />
              <path
                d="M 50 0 L 50 25 L 45 30 L 45 70 L 50 75 L 50 100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.5"
              />
              <circle cx="50" cy="50" r="3" fill="#3b82f6" />
              <circle cx="30" cy="45" r="2" fill="#3b82f6" />
              <circle cx="70" cy="45" r="2" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="status-badge">
              <Sparkles className="w-4 h-4" />
              <span>Open to opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="relative inline-block">
              <span className="text-white glitch-text">Adem</span>
              <motion.span
                className="absolute inset-0 text-blue-500"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
                animate={{ x: [0, -2, 2, 0] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
              >
                Adem
              </motion.span>
            </span>
            <span className="text-blue-500 glitch-text ml-4">Ghelous</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light">
              Mechanical Manufacturing Student{' '}
              <span className="text-blue-400">&amp;</span>{' '}
              <span className="text-blue-500 font-medium">AI Developer</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg mb-12"
          >
            State Engineer student at University of Sétif 1, Algeria.
            Building the intersection of moving mechanical parts and intelligent code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg pulse-glow"
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/ADAMEDZ', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adem-gh-a98282325/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:adameghalous@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-slate-500 hover:text-blue-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500/30 rounded-full float-animation"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-400/20 rounded-full float-animation"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full float-animation"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}
