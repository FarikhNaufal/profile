import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import meImg from '../../assets/me.png';

const Hero: React.FC = () => {
  const [isTouch, setIsTouch] = React.useState(false);
  
  React.useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden bg-surface">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none transition-opacity duration-500"></div>
      
      {/* Static background glow for a cleaner look */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-container)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 ${isTouch ? 'opacity-10' : 'opacity-10 dark:opacity-20'}`}></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        
        {/* Photo Content - Hero V2 Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: isTouch ? 1 : 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            type: isTouch ? "tween" : "spring", 
            ease: "easeOut",
            duration: isTouch ? 0.4 : 0.8, 
            delay: 0.2 
          }}
          style={{ willChange: "transform, opacity" }}
          className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Enhanced Glow Effect behind photo */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 -z-10"></div>

          {/* Glassmorphic Image Container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden glass border-outline-variant/20 dark:border-white/5 group transition-all duration-700 shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <img 
              src={meImg} 
              alt="Muhammad Farikh Naufal Tajuddin" 
              className={`w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100 ${isTouch ? 'opacity-100' : 'opacity-90 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal'}`} 
            />
            
            {/* Status Badge (Desktop only) */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden sm:block backdrop-blur-2xl">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                 <p className="text-[11px] font-mono text-on-surface">Available for new opportunities</p>
               </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-6 -right-6 w-20 h-20 lg:w-32 lg:h-32 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 lg:w-40 lg:h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Text Content - Hero V2 Layout */}
        <motion.div 
          initial={{ opacity: 0, x: isTouch ? 0 : -30, y: isTouch ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            type: isTouch ? "tween" : "spring",
            ease: "easeOut",
            duration: isTouch ? 0.4 : 0.7 
          }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col justify-center gap-8 lg:gap-10 order-2 lg:order-1 text-left items-start"
        >
          <div className="space-y-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold">
                System.out.println("HELLO WORLD!");
              </span>
            </motion.div>

            <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-on-surface">
              Muhammad <br/>
              <span className="text-gradient">Farikh</span><br/>
              
            </h1>
          </div>
          
          <p className="text-on-surface-variant font-body text-lg sm:text-xl max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6">
            Fullstack Developer architecting scalable, high-performance web applications. Bridging the gap between elegant design and robust backend systems.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 w-full sm:w-auto">
            <MagneticButton 
              href="#projects" 
              isTouch={isTouch}
              className="group bg-primary text-on-primary font-headline font-bold py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(129,233,255,0.2)] active:scale-[0.98] w-full sm:w-auto"
            >
              Explore My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton 
              href="#contact" 
              isTouch={isTouch}
              className="px-8 py-4 text-on-surface font-headline font-bold text-center hover:text-primary transition-colors hover:bg-on-surface/5 rounded-2xl"
            >
              Let's Talk
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MagneticButton: React.FC<{ children: React.ReactNode, className: string, href: string, isTouch?: boolean }> = ({ children, className, href, isTouch }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouch) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default Hero;
