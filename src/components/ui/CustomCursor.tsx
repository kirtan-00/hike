import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const trailingRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const isHeroRef = useRef(true);
  const [isHeroState, setIsHeroState] = useState(true);

  const mouse = useRef({ x: -100, y: -100 });
  const trails = useRef(Array(5).fill({ x: -100, y: -100 }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleScroll = () => {
      const inHero = window.scrollY < window.innerHeight - 100;
      if (inHero !== isHeroRef.current) {
        isHeroRef.current = inHero;
        setIsHeroState(inHero);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    let animationFrameId: number;
    
    const render = () => {
      if (mainCursorRef.current) {
         mainCursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      if (isHeroRef.current) {
        trails.current.forEach((trail, i) => {
          const target = i === 0 ? mouse.current : trails.current[i - 1];
          const ease = 0.5 - (i * 0.05); 
          
          trail.x += (target.x - trail.x) * ease;
          trail.y += (target.y - trail.y) * ease;
          
          const ref = trailingRefs.current[i];
          if (ref) {
            ref.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[100]">
      {/* The trailing pixie dust */}
      <div 
        className="transition-opacity duration-500"
        style={{ opacity: isHeroState ? 1 : 0 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => { trailingRefs.current[i] = el; }}
            className="absolute top-0 left-0 w-2 h-2 rounded-full mix-blend-screen"
            style={{
               marginLeft: '-4px', 
               marginTop: '-4px',
               backgroundColor: i % 2 === 0 ? '#ff5722' : '#ffffff',
               boxShadow: `0 0 ${10 + i * 2}px ${1 + i}px ${i % 2 === 0 ? '#ff5722' : '#ffffff'}`,
               transform: 'translate3d(-100px, -100px, 0)',
               scale: Math.max(0.3, 1 - i * 0.15),
            }}
          />
        ))}
      </div>

      {/* The main zero-latency cursor */}
      <div 
        ref={mainCursorRef}
        className="absolute top-0 left-0 transition-transform duration-200"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        {isHeroState ? (
          // Lead sparkle
          <div className="w-3 h-3 bg-white rounded-full -ml-1.5 -mt-1.5 shadow-[0_0_15px_rgba(255,255,255,1)] mix-blend-screen" />
        ) : (
          // 50% larger normal cursor circle style
          <div className="w-8 h-8 rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-[2px] -ml-4 -mt-4 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
             <div className="w-2 h-2 bg-nike-orange rounded-full shadow-[0_0_10px_#ff5722]" />
          </div>
        )}
      </div>
    </div>
  );
};
