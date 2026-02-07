import { motion } from 'framer-motion';
import { Globe, Package, Palette, Database } from 'lucide-react';

interface WordPressStatusProps {
  status: {
    status: 'operational' | 'degraded' | 'down';
    uptime: string;
    lastBackup: string;
    plugins: number;
    activeTheme: string;
  };
}

const statusColors = {
  operational: 'text-green',
  degraded: 'text-amber',
  down: 'text-red',
};

export function WordPressStatus({ status }: WordPressStatusProps) {
  const color = statusColors[status.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface border border-border rounded-lg p-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Globe size={16} className={color} />
        <h3 className="text-sm font-semibold text-text">WordPress Status</h3>
        <div className={`ml-auto w-2 h-2 rounded-full ${color.replace('text', 'bg')} animate-pulse`} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Database size={12} className="text-dim" />
            <span className="text-[10px] text-muted uppercase tracking-wider">Uptime</span>
          </div>
          <div className="text-sm font-mono text-text">{status.uptime}</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Database size={12} className="text-dim" />
            <span className="text-[10px] text-muted uppercase tracking-wider">Last Backup</span>
          </div>
          <div className="text-sm font-mono text-text">{status.lastBackup}</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Package size={12} className="text-dim" />
            <span className="text-[10px] text-muted uppercase tracking-wider">Plugins</span>
          </div>
          <div className="text-sm font-mono text-text">{status.plugins} active</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Palette size={12} className="text-dim" />
            <span className="text-[10px] text-muted uppercase tracking-wider">Theme</span>
          </div>
          <div className="text-sm font-mono text-text">{status.activeTheme}</div>
        </div>
      </div>
    </motion.div>
  );
}
