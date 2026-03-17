import { cn } from '../../lib/utils';
import { motion, useScroll, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';

interface TypographyProps extends HTMLMotionProps<'div'> {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const HeroTitle = ({ children, className, ...props }: TypographyProps) => {
  return (
    <motion.h1 
      className={cn("text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]", className)}
      {...props as any}
    >
      {children}
    </motion.h1>
  );
};

export const SectionTitle = ({ children, className, ...props }: TypographyProps) => {
  return (
    <motion.h2 
      className={cn("text-3xl md:text-6xl font-black uppercase tracking-tighter text-white", className)}
      {...props as any}
    >
      {children}
    </motion.h2>
  );
};

// New Apple-style Scroll Linked Animated Heading
export const ScrollRevealHeading = ({ text, className, ...props }: { text: string; className?: string } & HTMLMotionProps<"h2">) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"] // Animations map to this scroll window
  });

  const words = text.split(" ");

  return (
    <motion.h2 
      ref={ref}
      className={cn("text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white flex flex-wrap gap-x-0 md:gap-x-4", className)}
      {...props as any}
    >
      {words.map((word, i) => {
        // Calculate staggered progress window for each word
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Map word's progress to opacity and Y position
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [40, 0]);
        // Also add a slight scale and blur effect for that premium feel
        const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
        const filter = useTransform(scrollYProgress, [start, end], ['blur(8px)', 'blur(0px)']);
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity, y, scale, filter }} 
            className="inline-block mt-2 mr-4 md:mr-0"
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export const AccentText = ({ children, className, ...props }: TypographyProps) => {
  return (
    <motion.span 
      className={cn("text-nike-orange font-black", className)}
      {...props as any}
    >
      {children}
    </motion.span>
  );
};

export const SubHeading = ({ children, className, ...props }: TypographyProps) => {
  return (
    <motion.h3 
      className={cn("text-xl md:text-2xl font-bold uppercase tracking-widest text-nike-gray", className)}
      {...props as any}
    >
      {children}
    </motion.h3>
  );
};

export const BodyText = ({ children, className, ...props }: TypographyProps) => {
  return (
    <motion.p 
      className={cn("text-lg md:text-xl font-medium text-gray-300 italic", className)}
      {...props as any}
    >
      {children}
    </motion.p>
  );
};
