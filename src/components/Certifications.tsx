'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Engineering',
    issuer: 'Professional Certification',
    date: 'August 2025',
    description: 'Comprehensive training in full-stack web development covering frontend frameworks, backend technologies, database management, and deployment strategies.',
    skills: ['React.js', 'Node.js', 'Database Design', 'API Development', 'DevOps'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Development',
    issuer: 'Professional Certification',
    date: 'August 2025',
    description: 'Specialized certification in building intelligent conversational AI systems, including natural language processing, intent recognition, and integration with modern AI APIs.',
    skills: ['OpenAI API', 'NLP', 'Python', 'Prompt Engineering', 'Chatbot Architecture'],
  },
];

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="relative glass-card rounded-2xl overflow-hidden border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
        {/* Header with Award Icon */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              {cert.date}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
          <p className="text-sm text-blue-400">{cert.issuer}</p>
        </div>
        
        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>
          
          {/* Skills Covered */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50"
                >
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-6 pb-6 pt-2 border-t border-slate-700/30">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-slate-400 hover:text-white hover:bg-slate-800/50"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Credential
          </Button>
        </div>
        
        {/* Decorative Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Certifications</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-blue-500">Credentials</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-400">
            Recognized certifications demonstrating expertise in full-stack development 
            and artificial intelligence.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
