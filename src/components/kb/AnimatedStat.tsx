import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedStatProps {
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedStat({ value, label, suffix = '' }: AnimatedStatProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });

    return animation.stop;
  }, [value, count]);

  useEffect(() => {
    return rounded.on('change', (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold text-gold font-mono mb-1"
      >
        {displayValue.toLocaleString()}
        {suffix}
      </motion.div>
      <div className="text-xs text-muted uppercase tracking-widest">{label}</div>
    </div>
  );
}
