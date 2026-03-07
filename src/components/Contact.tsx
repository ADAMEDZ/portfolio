'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Linkedin,
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adameghalous@gmail.com',
    href: 'mailto:adameghalous@gmail.com',
    color: 'blue',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0673745781',
    href: 'tel:+213673745781',
    color: 'green',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sétif, Algeria',
    href: '#',
    color: 'purple',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/ADAMEDZ', label: 'GitHub', username: '@ADAMEDZ' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adem-gh-a98282325/', label: 'LinkedIn', username: 'Adem GH' },
  { icon: Mail, href: 'mailto:adameghalous@gmail.com', label: 'Email', username: 'adameghalous@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid-dense opacity-30" />
      
      {/* Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s <span className="text-blue-500">Connect</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-400">
            Interested in collaboration or have a project in mind? 
            I&apos;d love to hear from you. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 w-fit mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-sm text-slate-500 mb-1">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 mb-8 text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Currently Available</p>
                <p className="text-sm text-slate-400">Open for opportunities</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-500">
              I&apos;m actively looking for internship opportunities and interesting projects 
              to collaborate on. Response time is typically within 24 hours.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="space-y-4 max-w-lg mx-auto"
          >
            <p className="text-center text-sm text-slate-500 mb-4">Connect with me on:</p>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/20 transition-colors">
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{social.label}</p>
                  <p className="text-sm text-slate-500">{social.username}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
