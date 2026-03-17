import { Section, FadeIn, StaggerContainer, StaggerItem } from '../layout/Section';
import { ScrollRevealHeading } from '../ui/Typography';
import { motion } from 'framer-motion';
import { Calendar, PenTool, Workflow } from 'lucide-react';

export const WhatsNextSection = () => {
  return (
    <Section id="whats-next" className="bg-[#0a0a0a] border-t border-white/10">
      <FadeIn className="flex justify-between items-end mb-16">
        <ScrollRevealHeading text="What's Next" />
        <span className="text-nike-gray font-bold tracking-widest text-sm hidden md:block uppercase">Forward Trajectory</span>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Operations & Pipeline */}
        <StaggerItem className="bg-white/5 border border-white/10 p-8 md:p-10 hover:border-nike-orange/50 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Workflow className="w-32 h-32 text-nike-orange" />
          </div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-nike-orange/20 p-3 rounded-none">
              <Calendar className="w-6 h-6 text-nike-orange" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider text-white">Automated Pipelines</h3>
          </div>
          
          <div className="relative z-10 space-y-4">
            <p className="text-gray-300 font-medium text-lg">
              I have already integrated the <span className="text-white font-bold uppercase">GT Production Pipeline</span> in Notion and Google Calendar to monitor project progress with total ease.
            </p>
            <p className="text-gray-400">
              Moving forward, I will build out these automated workflows for the required teams to ensure execution scales without friction.
            </p>
          </div>
        </StaggerItem>

        {/* Passion & Blogs */}
        <StaggerItem className="bg-white/5 border border-white/10 p-8 md:p-10 hover:border-nike-orange/50 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <PenTool className="w-32 h-32 text-nike-orange" />
          </div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-nike-orange/20 p-3 rounded-none">
              <PenTool className="w-6 h-6 text-nike-orange" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider text-white">Painting Every Canvas</h3>
          </div>
          
          <div className="relative z-10 space-y-4">
            <p className="text-gray-300 font-medium text-lg">
              Beyond production, I've written a few blogs for the <span className="text-white font-bold italic">Making Advertising Great Again</span> publication. 
            </p>
            <div className="border-l-2 border-nike-orange pl-4 py-2 mt-4 bg-black/20">
              <p className="text-gray-400 font-serif italic text-lg">
                "It's a passion, and I look forward to writing more. Just like you, I share the passion to paint in every feasible canvas."
              </p>
            </div>
          </div>
        </StaggerItem>

        {/* Future Vlogs & Viral Content */}
        <StaggerItem className="bg-white/5 border border-white/10 p-8 md:p-10 hover:border-nike-orange/50 transition-colors group relative overflow-hidden md:col-span-2">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Workflow className="w-48 h-48 text-nike-orange" />
            </motion.div>
          </div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-nike-orange/20 p-3 rounded-none">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-wider text-white">BTS Vlogs & Viral Production</h3>
          </div>
          
          <div className="relative z-10 space-y-4 max-w-4xl">
            <p className="text-gray-300 font-medium text-lg md:text-xl">
              I will be producing more videos at this relentless pace. Furthermore, I am planting the seed for 
              <span className="text-white font-black italic"> 5-MINUTE BTS VLOGS</span>.
            </p>
            <p className="text-gray-400 text-lg">
              The goal is to spark people's interest about on-set reality and life behind the lens.
            </p>
            <div className="border-l-4 border-nike-orange pl-6 py-4 mt-6 bg-gradient-to-r from-nike-orange/10 to-transparent">
              <p className="text-white font-bold text-xl uppercase tracking-wider">
                The Condition:
              </p>
              <p className="text-gray-300 font-medium mt-2">
                I am planning to create and produce viral videos based upon creative core ideas. <span className="text-nike-orange font-bold">I will have to find time for that.</span>
              </p>
            </div>
          </div>
        </StaggerItem>

      </StaggerContainer>
    </Section>
  );
};
