import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import type { IngestionEntry } from '../../data';

interface IngestionLogProps {
  entries: IngestionEntry[];
}

export function IngestionLog({ entries }: IngestionLogProps) {
  return (
    <div className="space-y-2">
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 }}
          className="flex items-center gap-3 bg-card border border-border rounded-lg p-2.5 hover:border-gold/30 transition-colors"
        >
          <Database size={14} className="text-gold flex-shrink-0" />

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="text-xs font-mono text-gold">{entry.timestamp}</span>
              <span className="text-xs text-text truncate">{entry.source}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted uppercase tracking-wider">
                {entry.category}
              </span>
              <span className="text-[10px] text-dim">•</span>
              <span className="text-[10px] font-mono text-green">
                +{entry.chunks} chunks
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
