import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { MissionItem } from '../../data';

interface MissionChecklistProps {
  missions: MissionItem[];
}

const priorityStyles = {
  P0: 'bg-red/20 text-red border-red/40 animate-pulse',
  P1: 'bg-amber/20 text-amber border-amber/40',
  P2: 'bg-muted/20 text-muted border-muted/40',
};

export function MissionChecklist({ missions }: MissionChecklistProps) {
  return (
    <div className="space-y-2">
      {missions.map((mission, index) => (
        <motion.div
          key={mission.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-card border border-border rounded-lg p-3 hover:border-gold/30 transition-colors"
        >
          <div className="flex items-start gap-3">
            {/* Animated Checkbox */}
            <div className="flex-shrink-0 mt-0.5">
              {mission.completed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 bg-green rounded flex items-center justify-center"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Check size={14} className="text-bg" />
                  </motion.div>
                </motion.div>
              ) : (
                <div className="w-5 h-5 border-2 border-border rounded" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-2">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                    priorityStyles[mission.priority]
                  }`}
                >
                  {mission.priority}
                </span>
                <h4
                  className={`text-sm flex-1 ${
                    mission.completed ? 'text-dim line-through' : 'text-text'
                  }`}
                >
                  {mission.title}
                </h4>
              </div>

              {/* Progress Bar */}
              {!mission.completed && (
                <div className="relative h-1.5 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${mission.progress}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate to-slateBright rounded-full"
                  />
                  <span className="absolute right-1 top-0 bottom-0 flex items-center text-[9px] font-mono text-dim">
                    {mission.progress}%
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
