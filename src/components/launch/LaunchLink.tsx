import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface LaunchLinkProps {
  icon: LucideIcon;
  label: string;
  url: string;
  index: number;
}

export function LaunchLink({ icon: Icon, label, url, index }: LaunchLinkProps) {
  const handleClick = async () => {
    const { open } = await import('@tauri-apps/plugin-shell');
    await open(url);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      onClick={handleClick}
      className="bg-card border border-border rounded-lg p-4 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200 hover:scale-105 group"
    >
      <Icon size={20} className="text-gold mb-2 group-hover:scale-110 transition-transform" />
      <div className="text-xs font-medium text-text">{label}</div>
    </motion.button>
  );
}
