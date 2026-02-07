import { motion } from 'framer-motion';
import { GitCommit, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import type { SessionEntry } from '../../data';

interface SessionTimelineProps {
  entries: SessionEntry[];
}

const typeIcons = {
  commit: GitCommit,
  deployment: Zap,
  task: CheckCircle,
  error: AlertCircle,
};

const typeColors = {
  commit: 'text-slate',
  deployment: 'text-gold',
  task: 'text-green',
  error: 'text-red',
};

export function SessionTimeline({ entries }: SessionTimelineProps) {
  return (
    <div className="space-y-3">
      {entries.map((entry, index) => {
        const Icon = typeIcons[entry.type];
        const color = typeColors[entry.type];

        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.06 }}
            className="flex gap-3"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full border-2 border-current ${color} bg-bg flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={12} />
              </div>
              {index < entries.length - 1 && (
                <div className="w-0.5 flex-1 bg-border mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-mono text-gold">
                  {entry.timestamp}
                </span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider ${
                    color.replace('text', 'bg')
                  }/20 ${color} border border-current/30`}
                >
                  {entry.type}
                </span>
              </div>
              <p className="text-sm text-dim">{entry.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
