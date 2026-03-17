import { Section, FadeIn, StaggerContainer, StaggerItem } from '../layout/Section';
import { ScrollRevealHeading } from '../ui/Typography';
import { Layers, Zap, Moon, Clock } from 'lucide-react';

const Card = ({ title, icon: Icon, items, scope, glowColor }: any) => (
  <StaggerItem className="relative group">
    <div className={`absolute inset-0 bg-gradient-to-b ${glowColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
    <div className="relative h-full bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-6 h-6 text-nike-orange" />
        <h3 className="text-2xl font-black uppercase tracking-wider text-white">{title}</h3>
      </div>
      
      <ul className="flex-1 space-y-4 mb-12">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-nike-orange font-bold mt-1">•</span>
            <span className="text-gray-300 font-bold text-lg">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-white/10 pt-6">
        <p className="text-xs font-bold text-nike-gray tracking-widest uppercase mb-2">Scope</p>
        <p className="text-sm text-gray-400 font-medium">{scope}</p>
      </div>
    </div>
  </StaggerItem>
);

export const WhatIDidSection = () => {
  return (
    <Section id="what-i-did" className="bg-[#050505]">
      <FadeIn className="flex justify-between items-end mb-16">
        <ScrollRevealHeading text="What I Did" />
        <span className="text-nike-gray font-bold tracking-widest text-sm hidden md:block uppercase">Last 107 Days</span>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          title="Heavy Production"
          icon={Layers}
          items={[
            "GT Tour",
            "Palladium Ahmedabad Day",
            "Palladium Women's Day",
            "Shivalik Valentine"
          ]}
          scope="Multi-role execution: Director + Line Producer + Logistics + Creative"
          glowColor="from-white/20 to-transparent"
        />
        <Card 
          title="Trending Reels"
          icon={Zap}
          items={[
            "Zepto",
            "Woomra",
            "Crav Social",
            "GT Kite Festival",
            "GT ICC Match"
          ]}
          scope="High volume, quick turnaround, viral focus, on-screen & off-screen roles"
          glowColor="from-nike-orange/20 to-transparent"
        />
      </StaggerContainer>

      <FadeIn delay={0.4} className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="bg-white/5 border border-white/10 px-8 py-4 flex items-center gap-4">
          <Moon className="w-5 h-5 text-nike-orange" />
          <span className="font-bold tracking-widest uppercase text-sm">3 Overnight Deliveries</span>
        </div>
        <div className="bg-white text-black px-8 py-4 flex items-center gap-4">
          <Clock className="w-5 h-5 text-nike-orange" />
          <span className="font-bold tracking-widest uppercase text-sm">30-Min Emergency Edit (KVR Sports Day)</span>
        </div>
      </FadeIn>
    </Section>
  );
};
