import { motion } from 'framer-motion';
import type { PublishDay } from '../../data';

interface LinkedInScheduleProps {
  schedule: PublishDay[];
}

export function LinkedInSchedule({ schedule }: LinkedInScheduleProps) {
  return (
    <div className="flex gap-2">
      {schedule.map((day, index) => (
        <motion.div
          key={day.date}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className={`flex-1 rounded-lg border-2 p-3 transition-colors ${
            day.hasPost
              ? 'bg-gold/10 border-gold hover:bg-gold/20'
              : 'bg-surface border-border hover:border-border/50'
          }`}
        >
          <div className="text-center">
            <div className={`text-xs font-semibold mb-1 ${day.hasPost ? 'text-gold' : 'text-dim'}`}>
              {day.day}
            </div>
            <div className={`text-[10px] font-mono ${day.hasPost ? 'text-gold' : 'text-muted'}`}>
              {day.date.slice(5)}
            </div>
            {day.hasPost && (
              <div className="mt-2 w-2 h-2 bg-gold rounded-full mx-auto animate-pulse" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
