import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Cloud, 
  Container, 
  Code, 
  Layers, 
  Terminal,
  Globe
} from 'lucide-react';

const techItems = [
  { name: 'JavaScript', icon: Code, color: 'text-primary', category: 'Frontend' },
  { name: 'TypeScript', icon: Globe, color: 'text-secondary', category: 'Languages' },
  { name: 'React', icon: Layers, color: 'text-primary', category: 'Frontend' },
  { name: 'Node.js', icon: Cpu, color: 'text-secondary', category: 'Backend' },
  { name: 'Python', icon: Terminal, color: 'text-primary-dim', category: 'Languages' },
  { name: 'PostgreSQL', icon: Database, color: 'text-secondary-dim', category: 'Database' },
  { name: 'AWS', icon: Cloud, color: 'text-primary', category: 'Cloud' },
  { name: 'Docker', icon: Container, color: 'text-secondary', category: 'DevOps' },
];

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-32 px-8 bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="mt-6 text-on-surface-variant max-w-lg font-body">
            A curated list of tools and technologies I use to bring complex digital visions to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {techItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center p-8 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-all border border-outline-variant/10 hover:border-primary/20 group cursor-default shadow-sm hover:shadow-xl"
            >
              <div className="mb-4 p-4 rounded-xl bg-on-surface/5 group-hover:bg-primary/10 transition-colors duration-500">
                <item.icon size={32} className={item.color} />
              </div>
              <span className="font-mono text-sm text-on-surface group-hover:text-primary transition-colors">{item.name}</span>
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
