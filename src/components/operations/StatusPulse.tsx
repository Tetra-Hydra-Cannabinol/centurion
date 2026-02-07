import { motion } from 'framer-motion';

interface StatusPulseProps {
  status: 'active' | 'idle' | 'offline';
}

export function StatusPulse({ status }: StatusPulseProps) {
  const colors = {
    active: '#48BB78',
    idle: '#ED8936',
    offline: '#FC8181',
  };

  return (
    <div className="relative flex items-center justify-center w-3 h-3">
      {status === 'active' && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: colors[status] }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      <div
        className="w-2 h-2 rounded-full relative z-10"
        style={{ backgroundColor: colors[status] }}
      />
    </div>
  );
}
