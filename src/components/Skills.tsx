'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Code,
  Settings,
  LineChart,
  Wrench,
  FileCode2,
  Eye,
  Bot,
  Sparkles,
  Globe,
  Server,
  Database,
  Braces,
  Terminal
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: 'mechanical' | 'intelligence' | 'development';
}

const skills: Skill[] = [
  // Mechanical Skills
  { name: 'SolidWorks', level: 85, icon: Settings, category: 'mechanical' },
  { name: 'MATLAB', level: 75, icon: LineChart, category: 'mechanical' },
  { name: 'Maintenance Theory', level: 80, icon: Wrench, category: 'mechanical' },
  { name: 'Surfacing/Assemblies', level: 82, icon: Cpu, category: 'mechanical' },
  
  // Intelligence/AI Skills
  { name: 'Python', level: 90, icon: FileCode2, category: 'intelligence' },
  { name: 'OpenCV', level: 85, icon: Eye, category: 'intelligence' },
  { name: 'MediaPipe', level: 80, icon: Bot, category: 'intelligence' },
  { name: 'OpenAI API', level: 88, icon: Sparkles, category: 'intelligence' },
  
  // Development Skills
  { name: 'React.js', level: 85, icon: Globe, category: 'development' },
  { name: 'Flask', level: 82, icon: Server, category: 'development' },
  { name: 'SQL', level: 78, icon: Database, category: 'development' },
  { name: 'JavaScript', level: 80, icon: Braces, category: 'development' },
];

const categories = [
  { id: 'mechanical', label: 'Mechanical', icon: Cpu },
  { id: 'intelligence', label: 'AI/Intelligence', icon: Brain },
  { id: 'development', label: 'Development', icon: Code },
];

function getLevelBadge(level: number) {
  if (level >= 90) return { label: 'Expert', color: 'text-green-400 bg-green-400/10 border-green-400/30' };
  if (level >= 80) return { label: 'Advanced', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' };
  if (level >= 70) return { label: 'Proficient', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' };
  return { label: 'Intermediate', color: 'text-slate-400 bg-slate-400/10 border-slate-400/30' };
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const badge = getLevelBadge(skill.level);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <skill.icon className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="font-semibold text-white">{skill.name}</h3>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full border ${badge.color}`}>
          {badge.label}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Proficiency</span>
          <span className="text-blue-400 font-medium">{skill.level}%</span>
        </div>
        <div className="relative">
          <Progress 
            value={skill.level} 
            className="h-2 bg-slate-800"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.05 }}
            className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 progress-glow"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('mechanical');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Skills Matrix</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="text-blue-500">Arsenal</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-400">
            A comprehensive overview of my technical competencies across mechanical engineering, 
            artificial intelligence, and software development domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 bg-slate-800/50 border border-slate-700/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto"
                >
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {categories.map((category) => (
            <div key={category.id} className="text-center glass-card rounded-xl p-4">
              <category.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">
                {skills.filter(s => s.category === category.id).length}
              </div>
              <div className="text-xs text-slate-500">{category.label} Skills</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
