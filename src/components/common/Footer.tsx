import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { Github, Twitter, Linkedin } from '../ui/BrandIcons';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tighter font-headline text-on-surface mb-6">
              MFNT.
            </div>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-sm mb-8">
              Engineering digital excellence through modern tech stacks and clean architectural patterns. Let's build something exceptional.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 font-body text-on-surface-variant">
              <li><a href="#about" className="hover:text-primary transition-colors">The Layer</a></li>
              <li><a href="#stack" className="hover:text-primary transition-colors">Arsenal</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Showcase</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Legal / Secondary */}
          <div>
            <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-sm mb-8">Utilities</h4>
            <ul className="flex flex-col gap-4 font-body text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Source Code</a></li>
              <li className="flex items-center gap-2 text-primary font-mono text-xs mt-4">
                <Terminal size={14} /> Ready to compile
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-outline-variant/10 gap-8">
          <div className="text-on-surface-variant font-mono text-xs uppercase tracking-[0.2em]">
            © 2024 Syntactic Layer. Engineered with Precision.
          </div>
          
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-on-surface/5 hover:bg-primary/10 px-6 py-3 rounded-full transition-all border border-outline-variant/10"
          >
            <span className="font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Back to Origin</span>
            <ArrowUp size={18} className="text-on-surface-variant group-hover:text-primary transition-all" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href}
    className="p-3 bg-on-surface/5 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
  >
    {icon}
  </a>
);

export default Footer;
