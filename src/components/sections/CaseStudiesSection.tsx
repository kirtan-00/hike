import { Section, FadeIn, StaggerContainer, StaggerItem } from '../layout/Section';
import { ScrollRevealHeading } from '../ui/Typography';

export const CaseStudiesSection = () => {
  return (
    <div className="bg-black text-white">
      {/* GT TOUR SECTION */}
      <Section id="gt-tour" className="border-t border-white/10">
        <FadeIn className="flex justify-between items-end mb-16">
          <ScrollRevealHeading text="GT Tour" />
          <span className="text-nike-orange font-bold tracking-widest text-sm hidden md:flex items-center gap-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-nike-orange animate-pulse"></span>
            Active Project
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <StaggerContainer className="space-y-12">
            <StaggerItem>
               <h4 className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-4">Documentaries</h4>
               <p className="text-xl md:text-2xl lg:text-3xl font-black uppercase"><span className="text-white">5</span> Documentaries</p>
               <p className="text-gray-400 font-medium font-serif italic mt-2">Planned and assisted in comprehensive strategy.</p>
            </StaggerItem>
            
            <StaggerItem>
               <h4 className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-4">City Videos</h4>
               <p className="text-xl md:text-2xl lg:text-3xl font-black uppercase"><span className="text-white">3</span> City Videos</p>
               <p className="text-gray-400 font-medium font-serif italic mt-2">Co-directed, conceptualized, set visuals and treatment.</p>
            </StaggerItem>
            
            <StaggerItem>
               <h4 className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-4">Vox Pops</h4>
               <p className="text-xl md:text-2xl lg:text-3xl font-black uppercase"><span className="text-white">3</span> Vox Pops</p>
               <p className="text-gray-400 font-medium font-serif italic mt-2">Personally and independently shot on-ground.</p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.3} className="flex flex-col gap-6">
            <div className="bg-nike-orange text-black p-8 md:p-10 border-l-4 border-black group hover:border-white transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-none">
                100% Planned<br/>Independently
              </h3>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="font-bold text-lg md:text-xl">
                Handled entire travel & logistics across multiple cities without external support.
              </p>
            </div>
            
            <div>
               <h4 className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-4">Roles Worn (5)</h4>
               <div className="flex flex-wrap gap-2">
                 {["DIRECTOR", "LINE PRODUCER", "SHOOTER", "SCRIPTWRITER", "LOGISTICS LEAD"].map((role, i) => (
                   <span key={i} className="bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">{role}</span>
                 ))}
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* PALLADIUM SECTION */}
      <Section id="palladium" className="border-t border-white/10 bg-[#050505]">
        <FadeIn className="flex justify-between items-end mb-16">
          <ScrollRevealHeading text="Palladium Ahmedabad Day" />
          <span className="text-nike-gray font-bold tracking-widest text-sm hidden md:block uppercase">Case Study</span>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-16">
          <StaggerItem className="pb-8 md:pb-0 md:pr-8">
            <span className="text-6xl md:text-7xl font-black text-nike-orange leading-none tracking-tighter block mb-2">3</span>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-2">IPhone Reels Team Managed</h4>
            <p className="text-sm text-gray-500 font-medium">Directing multiple shooters simultaneously</p>
          </StaggerItem>
          
          <StaggerItem className="py-8 md:py-0 md:px-8">
            <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter block mb-2">4</span>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-2">Key Roles Executed</h4>
            <p className="text-sm text-gray-500 font-medium">Director + Producer + Editor Input + Manager</p>
          </StaggerItem>
          
          <StaggerItem className="pt-8 md:pt-0 md:pl-8">
            <span className="text-6xl md:text-7xl font-black text-nike-orange leading-none tracking-tighter block mb-2">1</span>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-2">Overnight Edit Delivery</h4>
            <p className="text-sm text-gray-500 font-medium">Zero slippage on timeline</p>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn className="flex flex-col justify-center">
            <h4 className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-6">Roles Breakdown</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {["CO-DIRECTOR (WITH OHM)", "LINE PRODUCER", "EDITOR INPUT", "TEAM MANAGER"].map((role, i) => (
                <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white">{role}</span>
              ))}
            </div>
            <p className="text-lg font-serif italic text-gray-400">
              "Ensured next-day post-production started immediately by delivering organized sequences overnight."
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <div className="bg-nike-orange text-black p-6 md:p-12 border-l-4 border-black">
               <h3 className="text-xl md:text-3xl font-black uppercase mb-4">Edit Sequence Delivered<br/>Overnight</h3>
               <div className="w-12 h-1 bg-black mb-6"></div>
               <p className="font-bold text-lg">
                 No delays. Seamless handoff to editor. Zero friction between shoot wrapped and edit started.
               </p>
             </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};
