'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Cpu, Wrench, Code, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'State Engineer Student',
      description: 'University of Sétif 1, Algeria',
    },
    {
      icon: Cpu,
      title: 'Mechatronics Focus',
      description: 'Mechanical Manufacturing',
    },
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Computer Vision & ML',
    },
    {
      icon: Code,
      title: 'Full-Stack Skills',
      description: 'Web & Software Development',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid-dense opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl transform -rotate-3" />
              
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col justify-center">
                {/* Profile Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AG</span>
                </div>
                
                {/* University Badge */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-400">Sétif, Algeria</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-slate-800/50">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-xs text-slate-500">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-800/50">
                    <div className="text-2xl font-bold text-blue-400">10+</div>
                    <div className="text-xs text-slate-500">Technologies</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Wrench className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 glass-card rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-sm text-blue-400 font-medium">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Where Mechanical{' '}
              <span className="text-blue-500">Engineering</span>{' '}
              Meets{' '}
              <span className="text-blue-400">Intelligence</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              I&apos;m a passionate mechatronics engineering student at the University of Sétif 1, 
              Algeria, pursuing my State Engineer degree in Mechanical Manufacturing. 
              My journey lies at the fascinating intersection of precision mechanics 
              and cutting-edge artificial intelligence.
            </p>
            
            <p className="text-slate-500 mb-8 leading-relaxed">
              I believe the future of engineering lies in seamlessly blending moving mechanical 
              parts with intelligent code. From designing complex assemblies in SolidWorks to 
              implementing computer vision solutions with OpenCV, I&apos;m constantly exploring 
              new ways to make machines smarter and more efficient.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-blue-400 mb-2" />
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
