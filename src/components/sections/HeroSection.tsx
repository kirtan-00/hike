import { useRef, useEffect } from 'react';
import { HeroTitle, BodyText } from '../ui/Typography';
import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { Camera } from 'lucide-react';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the light
  const springConfig = { damping: 25, stiffness: 200 };
  const lightX = useSpring(mouseX, springConfig);
  const lightY = useSpring(mouseY, springConfig);

  // Calculate rotation based on cursor position relative to bottom-left corner
  // The camera lens is positioned exactly at left: 40px, bottom: 40px
  const rotation = useTransform([lightX, lightY], ([x, y]) => {
    if (!containerRef.current) return 45; 
    const rect = containerRef.current.getBoundingClientRect();
    
    // Y runs top-to-bottom. Bottom is rect.height. Camera is 40px from bottom.
    const cameraY = rect.height - 40;
    const cameraX = 40;
    
    const dy = (y as number) - cameraY; 
    const dx = (x as number) - cameraX;
    
    const angleInRadians = Math.atan2(dy, dx);
    const angleInDegrees = (angleInRadians * 180) / Math.PI;
    
    return angleInDegrees + 90;
  });

  // Inject rotation into CSS variable for mask alignment
  useMotionValueEvent(rotation, "change", (latestRotation) => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--angle', `${latestRotation}deg`);
    }
  });

  // Also update X and Y for the mask radial spotlight part
  useMotionValueEvent(lightX, "change", (latestX) => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--x', `${latestX}px`);
    }
  });

  useMotionValueEvent(lightY, "change", (latestY) => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--y', `${latestY}px`);
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Start in a default location slightly up from camera
      mouseX.set(rect.width / 3);
      mouseY.set(rect.height / 2);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden border-b-0 bg-black"
    >
      {/* 
        Dark underlying content for normal state 
        Opacity is 0.02 so it's virtually invisible unless the light shines on it.
      */}
      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center gap-6 opacity-5 select-none pointer-events-none transition-opacity duration-1000">
        <p className="text-nike-gray font-bold tracking-[0.2em] text-sm md:text-base uppercase">
          Kirtan Creative Producer, Craywingz
        </p>
        <HeroTitle className="mt-4 mb-6">
           <span className="block">My Case For A</span>
           <span className="block text-nike-orange">₹20,000 Hike</span>
        </HeroTitle>
        <BodyText className="text-xl md:text-3xl max-w-3xl mx-auto text-gray-500 font-serif">
          "I get things done. I add the pixie dust in projects."
        </BodyText>
      </div>

      {/* 
        The Illuminated dynamic layer
        We use a conic-gradient mask perfectly aligned with the visual light beam,
        making the content completely invisible outside the light cone.
      */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center text-center px-6 py-24"
        style={{
          // --angle is injected via Framer Motion. We subtract ~15deg so the center of the text gradient matches the 30deg visual beam.
          maskImage: "conic-gradient(from calc(var(--angle, 45deg) - 15deg) at 40px calc(100% - 40px), transparent 0deg, black 5deg, black 25deg, transparent 30deg)",
          WebkitMaskImage: "conic-gradient(from calc(var(--angle, 45deg) - 15deg) at 40px calc(100% - 40px), transparent 0deg, black 5deg, black 25deg, transparent 30deg)"
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <p className="text-white font-bold tracking-[0.2em] text-sm md:text-base uppercase shadow-lg">
            Kirtan Creative Producer, Craywingz
          </p>
          <HeroTitle className="mt-4 mb-6" style={{ textShadow: "0px 0px 30px rgba(255,255,255,0.4)" }}>
             <span className="block text-white">My Case For A</span>
             <span className="block text-nike-orange" style={{ textShadow: "0px 0px 30px rgba(255,87,34,0.6)" }}>₹20,000 Hike</span>
          </HeroTitle>
          <BodyText className="text-xl md:text-3xl max-w-3xl mx-auto text-white font-serif drop-shadow-xl">
            "I get things done. I add the pixie dust in projects."
          </BodyText>
        </div>
      </motion.div>

      {/* The visible "Camera" Light Ray Effect */}
      <motion.div 
        className="absolute w-[200vw] h-[200vh] origin-bottom-left pointer-events-none z-10 opacity-60 mix-blend-screen"
        style={{
          background: "conic-gradient(from 0deg at 0% 100%, rgba(255,255,255,0.5) 0deg, rgba(255,87,34,0.4) 15deg, transparent 30deg)",
          transformOrigin: "0% 100%",
          rotate: rotation,
          left: '40px', 
          bottom: '40px'
        }}
      />

      {/* Camera Icon perfectly centered at left:40px, bottom:40px */}
      <div 
        className="absolute z-30 flex items-center justify-center pointer-events-none"
        style={{ left: '40px', bottom: '40px', transform: 'translate(-50%, 50%)' }}
      >
        <Camera className="w-12 h-12 text-nike-orange absolute" />
        <div className="w-4 h-4 rounded-full bg-white absolute animate-pulse shadow-[0_0_20px_#fff]" />
      </div>
    </section>
  );
};
