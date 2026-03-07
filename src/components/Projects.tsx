'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Eye, 
  Film, 
  Languages, 
  Settings, 
  ExternalLink,
  Cpu,
  Shield,
  Monitor,
  Layers,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  featured?: boolean;
  specs?: string[];
}

const projects: Project[] = [
  {
    id: 'rift',
    title: 'The Rift',
    category: 'Industrial Safety Monitor',
    description: 'An advanced industrial safety monitoring system utilizing EAR (Eye Aspect Ratio) algorithms and MediaPipe for real-time worker fatigue and attention detection. Prevents accidents by alerting supervisors when workers show signs of drowsiness or distraction.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'WebSocket'],
    icon: Shield,
    featured: true,
    specs: [
      'Real-time face detection',
      'EAR algorithm implementation',
      'Multi-camera support',
      'Alert notification system',
      'Safety compliance logging'
    ]
  },
  {
    id: 'moviesearch',
    title: 'MovieSearch V2',
    category: 'Web Application',
    description: 'A modern API-driven movie discovery platform featuring advanced search capabilities, detailed movie information, and personalized recommendations.',
    technologies: ['React.js', 'REST API', 'JavaScript', 'Tailwind CSS'],
    icon: Film,
    specs: [
      'Movie database integration',
      'Advanced search filters',
      'Responsive design',
      'Rating system'
    ]
  },
  {
    id: 'frenchflow',
    title: 'FrenchFlow',
    category: 'Educational HMI',
    description: 'An interactive Human-Machine Interface designed for French language learning, featuring intuitive controls and engaging visual feedback.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    icon: Languages,
    specs: [
      'Interactive lessons',
      'Progress tracking',
      'Gamification elements',
      'Voice recognition'
    ]
  },
  {
    id: 'surfacing',
    title: 'Advanced Surfacing',
    category: 'Mechanical Design',
    description: 'Complex surface modeling projects in SolidWorks, including organic shapes and ergonomic product designs.',
    technologies: ['SolidWorks', 'Surfacing', 'Rendering'],
    icon: Layers,
    specs: [
      'Organic shape modeling',
      'Class-A surfaces',
      'Photorealistic rendering',
      'Design optimization'
    ]
  },
  {
    id: 'tooling',
    title: 'Tooling Configurations',
    category: 'Mechanical Design',
    description: 'Design and optimization of manufacturing tooling configurations for improved production efficiency.',
    technologies: ['SolidWorks', 'CAD/CAM', 'FEA Analysis'],
    icon: Settings,
    specs: [
      'Fixture design',
      'Assembly optimization',
      'Cost analysis',
      'Manufacturability review'
    ]
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative group ${isFeatured ? 'sm:col-span-2' : ''}`}
    >
      <div className={`
        relative h-full glass-card rounded-2xl overflow-hidden
        ${isFeatured ? 'border-blue-500/30' : 'border-slate-700/50'}
        hover:border-blue-500/50 transition-all duration-300
      `}>
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-medium text-blue-400">Featured</span>
            </div>
          </div>
        )}
        
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div className={`
              p-3 rounded-xl 
              ${isFeatured ? 'bg-blue-500/20' : 'bg-slate-800/50'}
            `}>
              <project.icon className={`w-6 h-6 ${isFeatured ? 'text-blue-400' : 'text-slate-400'}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-blue-400">{project.category}</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-6 pb-4">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {/* Technical Specs */}
          {project.specs && (
            <div className="mb-4">
              <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Technical Specifications
              </h4>
              <ul className="grid grid-cols-2 gap-1.5">
                {project.specs.slice(0, isFeatured ? 5 : 3).map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
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
            View Project Details
          </Button>
        </div>
        
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid-dense opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Monitor className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Project Gallery</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-400">
            A showcase of my work spanning industrial safety systems, web applications, 
            and mechanical design projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
