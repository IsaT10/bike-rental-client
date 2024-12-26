/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function FromTop({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ y: -50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        y: { type: 'spring', stiffness: 60 },
        ease: 'easeIn',
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
