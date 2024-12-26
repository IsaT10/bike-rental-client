/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function FromRight({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: 'easeIn',
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
