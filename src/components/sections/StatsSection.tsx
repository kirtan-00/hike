import { Section, StaggerContainer, StaggerItem } from '../layout/Section';

const stats = [
  { value: "67", label: "VIDEOS" },
  { value: "107", label: "DAYS" },
  { value: "9", label: "BRANDS" },
  { value: "5", label: "ROLES / PROJECT" },
];

export const StatsSection = () => {
  return (
    <Section className="py-6 md:py-16 !border-y border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-40">
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <StaggerItem key={index} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
            <span className="text-4xl md:text-6xl font-black text-nike-orange leading-none tracking-tighter">
              {stat.value}
            </span>
            <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase mt-2 md:mt-0 max-w-[100px]">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
};
