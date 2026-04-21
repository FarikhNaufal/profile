import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About: React.FC = () => {
  const [isTouch, setIsTouch] = React.useState(false);
  
  React.useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="about" className="py-32 px-8 bg-surface-container-low relative border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sticky Header Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: isTouch ? "tween" : "spring",
              ease: "easeOut",
              duration: isTouch ? 0.4 : 0.8 
            }}
          >
            <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-4">
              The Syntactic Layer
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            
            <p className="mt-8 text-on-surface-variant font-body text-lg leading-relaxed lg:max-w-xs">
              Treating code as an art form. I don't just build functional systems; I design high-performance, maintainable architectures that scale elegantly.
            </p>
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: isTouch ? "tween" : "spring",
              ease: "easeOut",
              duration: isTouch ? 0.4 : 0.8 
            }}
            className="font-body text-2xl text-on-surface-variant leading-relaxed"
          >
            With over 5 years of experience in full-stack development, I specialize in crafting seamless digital experiences that push the boundaries of what's possible on the web.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AboutCard 
              icon={<Layout className="text-primary" size={32} />}
              title="Frontend Mastery"
              description="Crafting responsive, immersive user interfaces with modern frameworks, prioritizing performance and semantic accessibility. Expert in React, Next.js, and complex state management."
              index={0}
            />
            <AboutCard 
              icon={<Database className="text-secondary" size={32} />}
              title="Backend Architecture"
              description="Designing robust APIs, efficient database schemas, and secure, scalable server-side solutions. Specialized in Node.js, PostgreSQL, and microservices architecture."
              index={1}
            />
            <AboutCard 
              icon={<Code2 className="text-primary-dim" size={32} />}
              title="Clean Code Logic"
              description="Adhering to SOLID principles and design patterns to ensure codebase longevity and developer happiness."
              index={2}
            />
            <AboutCard 
              icon={<Server className="text-secondary-dim" size={32} />}
              title="Cloud & DevOps"
              description="Deploying and managing infrastructure on AWS/GCP, utilizing Docker/Kubernetes for containerization and CI/CD pipelines."
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
    
    <div className="mb-6 p-3 bg-on-surface/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="font-headline text-2xl text-on-surface font-bold mb-3">{title}</h3>
    <p className="font-body text-on-surface-variant text-base leading-relaxed">{description}</p>
  </motion.div>
);

export default About;
