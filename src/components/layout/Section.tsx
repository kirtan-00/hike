import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn("py-16 md:py-32 w-full border-t border-white/10", className)}
      {...props as any}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};

export const FadeIn = ({ children, className, delay = 0, ...props }: SectionProps & { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props as any}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className, ...props }: SectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        },
        hidden: {}
      }}
      className={className}
      {...props as any}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, ...props }: SectionProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={className}
      {...props as any}
    >
      {children}
    </motion.div>
  );
};
