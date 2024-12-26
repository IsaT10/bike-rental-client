import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FromBottom({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      transition={{
        delay: 0.2,
        y: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
