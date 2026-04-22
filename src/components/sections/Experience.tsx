import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

const experiences = [
  {
    company: 'PT. Pupuk Indonesia',
    role: 'Web Programmer',
    period: 'October 2024 - Now',
    location: 'Jakarta, ID',
    description: 'Developing and maintaining high-performance web applications for Indonesia\'s largest fertilizer company. Focusing on modern architectural patterns and robust system integration.',
    skills: ['Web Development', 'System Design', 'Enterprise Solutions']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-8 relative overflow-hidden bg-surface">
      {/* Decorative vertical line in background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-4"
          >
            Professional Journey
          </motion.h2>
          <p className="text-on-surface-variant font-body text-lg max-w-2xl">
            My career path as an engineer, focusing on enterprise-grade solutions and innovative web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ exp: typeof experiences[0], index: number }> = ({ exp, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
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
        willChange: "transform"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: isMobile ? "tween" : "spring",
        ease: "easeOut",
        duration: isMobile ? 0.4 : 0.6, 
        delay: index * 0.1 
      }}
      className="relative flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start perspective-1000"
    >
      {/* Date/Period for desktop */}
      <div className="lg:col-span-4 lg:text-right hidden lg:block">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/20">
          <Calendar size={16} className="text-primary" />
          <span className="font-mono text-sm font-bold text-on-surface-variant">{exp.period}</span>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden lg:flex lg:col-span-1 justify-center relative h-full">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(129,233,255,0.5)] z-20"></div>
      </div>

      {/* Content Card */}
      <div style={{ transform: "translateZ(30px)" }} className="lg:col-span-7 w-full">
        <div className="glass p-8 rounded-3xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
          {/* Mobile Period */}
          <div className="flex items-center gap-2 mb-4 lg:hidden">
            <Calendar size={14} className="text-primary" />
            <span className="font-mono text-xs font-bold text-primary uppercase">{exp.period}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-1 flex items-center gap-2">
                <Briefcase size={20} className="text-primary" />
                {exp.role}
              </h3>
              <p className="text-xl font-headline font-medium text-primary">
                {exp.company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-sm bg-on-surface/5 px-3 py-1 rounded-lg w-fit">
              <MapPin size={14} />
              {exp.location}
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed mb-6">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-primary/10 text-primary-dim text-xs font-mono rounded-md border border-primary/10">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
