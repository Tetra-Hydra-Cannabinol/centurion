import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import type { YouTubeChannel } from '../../data';

interface YouTubeWatchlistProps {
  channels: YouTubeChannel[];
}

const statusColors = {
  ACTIVE: 'bg-green/20 text-green border-green/40',
  PENDING: 'bg-amber/20 text-amber border-amber/40',
  NEW: 'bg-slate/20 text-slate border-slate/40',
};

export function YouTubeWatchlist({ channels }: YouTubeWatchlistProps) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {channels.map((channel, index) => (
        <motion.div
          key={channel.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="bg-card border border-border rounded-lg p-3 hover:border-gold/30 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <Youtube size={14} className="text-red flex-shrink-0" />
            <span
              className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-semibold border ${
                statusColors[channel.status]
              }`}
            >
              {channel.status}
            </span>
          </div>

          <h4 className="text-xs font-medium text-text mb-1 truncate">
            {channel.name}
          </h4>

          <div className="text-[10px] text-dim font-mono">
            {channel.videos} videos
          </div>
        </motion.div>
      ))}
    </div>
  );
}
