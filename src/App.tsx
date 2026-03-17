import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { TheWorkSection } from './components/sections/TheWorkSection';
import { WhatIDidSection } from './components/sections/WhatIDidSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { WhatsNextSection } from './components/sections/WhatsNextSection';
import { ConclusionSection } from './components/sections/ConclusionSection';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-nike-orange selection:text-black">
      <main>
        <HeroSection />
        <StatsSection />
        <TheWorkSection />
        <WhatIDidSection />
        <CaseStudiesSection />
        <WhatsNextSection />
        <ConclusionSection />
      </main>
    </div>
  );
}

export default App;
