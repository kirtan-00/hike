import { Section, FadeIn, StaggerContainer, StaggerItem } from '../layout/Section';
import { ScrollRevealHeading } from '../ui/Typography';

const ItemCard = ({ number, title, subtitle }: { number: string; title: string; subtitle: string }) => (
  <StaggerItem className="flex flex-col gap-2">
    <span className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter">
      {number}
    </span>
    <div className="border-t-2 border-white/20 pt-4 mt-2">
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-1">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base font-medium">
        {subtitle}
      </p>
    </div>
  </StaggerItem>
);

const roles = [
  "DIRECTOR", "LINE PRODUCER", "SCRIPTWRITER", "SHOOTER", 
  "EDITOR INPUT", "ASSISTANT DIRECTOR", "ACTOR MANAGER", 
  "LOGISTICS LEAD", "AI VIDEO GEN", "TEAM LEAD"
];

export const TheWorkSection = () => {
  return (
    <Section id="the-work">
      <FadeIn className="flex justify-between items-end mb-16">
        <ScrollRevealHeading text="The Work" />
        <span className="text-nike-gray font-bold tracking-widest text-sm hidden md:block uppercase">Output Analysis</span>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <ItemCard 
          number="67" 
          title="TOTAL VIDEOS" 
          subtitle="Delivered in 107 Days" 
        />
        <ItemCard 
          number="25" 
          title="DECEMBER ALONE" 
          subtitle="0.8 Videos Per Day Avg" 
        />
        <ItemCard 
          number="42" 
          title="JAN TO MAR 17" 
          subtitle="Sustained High Velocity" 
        />
      </StaggerContainer>

      <FadeIn delay={0.2} className="mt-16">
        <h4 className="text-nike-gray font-bold tracking-widest text-sm uppercase mb-6">
          What These Videos Required (Roles Worn):
        </h4>
        <div className="flex flex-wrap gap-3">
          {roles.map((role, i) => (
            <span 
              key={i} 
              className="bg-white/5 border border-white/10 text-white px-4 py-2 font-bold text-xs md:text-sm tracking-wider uppercase"
            >
              {role}
            </span>
          ))}
        </div>
        
        <p className="mt-8 text-lg font-serif italic text-gray-400 border-l-2 border-nike-orange pl-6">
          "These aren't just videos I shot. I conceptualized, produced, directed, handled logistics, and briefed editors, often wearing all these hats on the same project."
        </p>
      </FadeIn>
    </Section>
  );
};
