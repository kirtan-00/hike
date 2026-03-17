import { Section, FadeIn, StaggerContainer, StaggerItem } from '../layout/Section';
import { ScrollRevealHeading } from '../ui/Typography';
import { motion } from 'framer-motion';

export const ConclusionSection = () => {
  return (
    <Section id="conclusion" className="min-h-[80vh] flex flex-col justify-center border-t border-white/20 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-nike-orange/5 mix-blend-overlay"></div>
      
      <FadeIn className="relative z-10 flex flex-col items-center justify-center">
        <ScrollRevealHeading text="Conclusion" className="mb-8" />
        <span className="text-nike-gray font-bold tracking-widest text-xs mb-12 uppercase block">
          Decision Time
        </span>
        
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="mb-16"
        >
          <div className="text-7xl md:text-9xl font-black text-nike-orange tracking-tighter leading-none mb-4">
            ₹20,000
          </div>
          <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
            Monthly Increment
          </div>
        </motion.div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mx-auto mb-20 text-left md:text-center">
           <StaggerItem className="flex flex-col items-start md:items-center">
             <span className="text-xl md:text-2xl font-black text-white uppercase mb-1">67 Videos</span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Delivered</span>
           </StaggerItem>
           <StaggerItem className="flex flex-col items-start md:items-center">
             <span className="text-xl md:text-2xl font-black text-white uppercase mb-1">5 Roles/Proj</span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average Load</span>
           </StaggerItem>
           <StaggerItem className="flex flex-col items-start md:items-center">
             <span className="text-xl md:text-2xl font-black text-white uppercase mb-1">107 Days</span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Consistent Output</span>
           </StaggerItem>
           <StaggerItem className="flex flex-col items-start md:items-center">
             <span className="text-xl md:text-2xl font-black text-white uppercase mb-1">9 Brands</span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Simultaneously</span>
           </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="border border-white/10 px-8 py-4 inline-block mb-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Last Increment: <span className="text-white">January 2025</span> (14 Months Ago)
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider italic mb-12">
            "Thank you for giving me this stage."
          </h3>
          
          <a href="mailto:kirtan@craywingz.com" className="group flex items-center justify-center gap-3 text-gray-400 hover:text-nike-orange transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className="text-xl md:text-2xl font-bold tracking-widest border-b border-transparent group-hover:border-nike-orange transition-colors">
              kirtan@craywingz.com
            </span>
          </a>
        </FadeIn>

      </FadeIn>
    </Section>
  );
};
