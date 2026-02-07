import { motion } from 'framer-motion';
import type { AgentStatus } from '../../data';
import { StatusPulse } from './StatusPulse';

interface AgentGridProps {
  agents: AgentStatus[];
}

export function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {agents.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-text font-semibold text-sm">{agent.name}</h3>
              <p className="text-dim text-xs">{agent.role}</p>
            </div>
            <StatusPulse status={agent.status} />
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-[10px] text-muted uppercase tracking-wider">
                Current Task
              </span>
              <p className="text-xs text-dim mt-0.5">{agent.currentTask}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-[10px] text-muted uppercase tracking-wider">
                Uptime
              </span>
              <span className="text-xs font-mono text-gold">{agent.uptime}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
