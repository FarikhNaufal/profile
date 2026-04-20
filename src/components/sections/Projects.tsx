import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Github } from '../ui/BrandIcons';

const projects = [
  {
    title: 'E-Commerce Nexus',
    description: 'A high-performance headless commerce platform built with Next.js, Stripe, and Sanity CMS. Features real-time inventory and global edge caching.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    links: { github: '#', live: '#' }
  },
  {
    title: 'Insight Analytic Engine',
    description: 'B2B SaaS dashboard providing real-time data visualization and predictive analytics for supply chain management. Built with React and Go.',
    tags: ['React', 'Go', 'PostgreSQL', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    links: { github: '#', live: '#' }
  },
  {
    title: 'SecureFlow VPN',
    description: 'A cross-platform desktop application focused on privacy and speed. Implemented custom encryption protocols and global node selection.',
    tags: ['Electron', 'Rust', 'C++', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    links: { github: '#', live: '#' }
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-6 dark:after:content-[''] after:block after:h-1 after:w-20 after:bg-primary after:mt-4"
            >
              Featured Works
            </motion.h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              A selection of my most challenging and rewarding projects, ranging from large-scale enterprise systems to innovative open-source tools.
            </p>
          </div>
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-primary font-headline font-bold hover:gap-3 transition-all duration-300 pb-2 border-b-2 border-primary/20 hover:border-primary"
          >
            All Repositories <Github size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="group bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl perspective-1000"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative aspect-video overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div className="flex gap-4">
          <a href={project.links.github} className="p-2 bg-on-surface text-surface rounded-full hover:scale-110 transition-transform"><Github size={18} /></a>
          <a href={project.links.live} className="p-2 bg-primary text-on-primary rounded-full hover:scale-110 transition-transform"><ExternalLink size={18} /></a>
        </div>
      </div>
    </div>
    
    <div className="p-4 md:p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[8px] md:text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 md:py-1 bg-on-surface/5 text-primary-dim rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-headline text-lg md:text-2xl font-bold text-on-surface mb-2 md:mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="font-body text-on-surface-variant text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6">
        {project.description}
      </p>
      
      <div className="flex items-center gap-2 text-[9px] md:text-xs font-mono text-on-surface-variant opacity-60">
        <Code2 size={12} /> <span className="hidden xs:inline">Hash:</span> {Math.random().toString(16).substring(2, 8)}
      </div>
    </div>
  </motion.div>
  );
};

export default Projects;
