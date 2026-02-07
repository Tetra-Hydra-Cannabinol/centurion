import { Activity, Database, FileText, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export type TabId = 'operations' | 'knowledge' | 'content' | 'launch';

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs = [
  { id: 'operations' as TabId, label: 'Operations', icon: Activity },
  { id: 'knowledge' as TabId, label: 'Knowledge Base', icon: Database },
  { id: 'content' as TabId, label: 'Content', icon: FileText },
  { id: 'launch' as TabId, label: 'Quick Launch', icon: Zap },
];

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <div className="h-12 bg-surface border-b border-border flex items-center px-6 gap-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative px-4 h-10 flex items-center gap-2 text-sm font-medium transition-colors rounded"
          >
            <Icon size={16} className={isActive ? 'text-gold' : 'text-dim'} />
            <span className={isActive ? 'text-text' : 'text-dim'}>
              {tab.label}
            </span>

            {/* Animated indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
