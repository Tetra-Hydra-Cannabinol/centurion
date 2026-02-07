import { motion } from 'framer-motion';
import { Server, Database, Github, Globe } from 'lucide-react';
import type { InfraStatus } from '../../data';

interface InfraPanelProps {
  infrastructure: InfraStatus[];
}

const statusColors = {
  operational: 'text-green',
  degraded: 'text-amber',
  down: 'text-red',
};

const icons = {
  aws: Server,
  supabase: Database,
  github: Github,
  website: Globe,
};

export function InfraPanel({ infrastructure }: InfraPanelProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {infrastructure.map((infra, index) => {
        const Icon = icons[infra.id as keyof typeof icons] || Server;
        const statusColor = statusColors[infra.status];

        return (
          <motion.div
            key={infra.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            className="bg-card border border-border rounded-lg p-3 hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={16} className={statusColor} />
              <div className={`w-1.5 h-1.5 rounded-full ${statusColor.replace('text', 'bg')}`} />
            </div>

            <h4 className="text-xs font-medium text-text mb-1">{infra.name}</h4>

            <div className="flex items-center justify-between">
              <span className="text-[9px] text-muted uppercase tracking-wider">
                Uptime
              </span>
              <span className="text-[10px] font-mono text-dim">{infra.uptime}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
