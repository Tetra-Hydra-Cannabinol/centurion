import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TitleBar } from './components/TitleBar';
import { TabNav, type TabId } from './components/TabNav';
import { Footer } from './components/Footer';
import { Clock } from './components/Clock';
import { AgentGrid } from './components/operations/AgentGrid';
import { MissionChecklist } from './components/operations/MissionChecklist';
import { InfraPanel } from './components/operations/InfraPanel';
import { SessionTimeline } from './components/operations/SessionTimeline';
import { ChunkDonut } from './components/kb/ChunkDonut';
import { GrowthChart } from './components/kb/GrowthChart';
import { SourcesBar } from './components/kb/SourcesBar';
import { AnimatedStat } from './components/kb/AnimatedStat';
import { YouTubeWatchlist } from './components/kb/YouTubeWatchlist';
import { IngestionLog } from './components/kb/IngestionLog';
import {
  agents,
  missions,
  infrastructure,
  sessionTimeline,
  kbStats,
  categoryChunks,
  growthTimeline,
  topSources,
  youtubeChannels,
  ingestionLog,
} from './data';

// Tab content components
function OperationsTab() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <h2 className="text-2xl font-bold text-gold tracking-wide">OPERATIONS</h2>
        <span className="text-xs text-muted uppercase tracking-widest">
          COMMAND CENTER
        </span>
      </div>

      {/* Agent Status Grid */}
      <section>
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          Agent Status
        </h3>
        <AgentGrid agents={agents} />
      </section>

      <div className="grid grid-cols-2 gap-6">
        {/* Mission Checklist */}
        <section>
          <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
            Active Missions
          </h3>
          <MissionChecklist missions={missions} />
        </section>

        {/* Session Timeline */}
        <section>
          <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
            Session Activity
          </h3>
          <div className="bg-surface border border-border rounded-lg p-4 max-h-[400px] overflow-y-auto">
            <SessionTimeline entries={sessionTimeline} />
          </div>
        </section>
      </div>

      {/* Infrastructure Panel */}
      <section>
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          Infrastructure Health
        </h3>
        <InfraPanel infrastructure={infrastructure} />
      </section>
    </div>
  );
}

function KnowledgeTab() {
  return (
    <div className="p-6 space-y-6">
      {/* Header with Stats */}
      <div>
        <div className="flex items-baseline gap-3 mb-4">
          <h2 className="text-2xl font-bold text-gold tracking-wide">KNOWLEDGE BASE</h2>
          <span className="text-xs text-muted uppercase tracking-widest">
            SEMANTIC SEARCH SYSTEM
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <AnimatedStat value={kbStats.totalChunks} label="Total Chunks" />
          <AnimatedStat value={kbStats.totalSources} label="Sources" />
          <AnimatedStat value={kbStats.categories} label="Categories" />
          <div className="text-center">
            <div className="text-2xl font-medium text-slate font-mono mb-1">
              {kbStats.lastUpdate}
            </div>
            <div className="text-xs text-muted uppercase tracking-widest">Last Update</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Category Distribution */}
        <section className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
            Category Distribution
          </h3>
          <ChunkDonut data={categoryChunks} />
        </section>

        {/* Growth Timeline */}
        <section className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
            KB Growth Timeline
          </h3>
          <GrowthChart data={growthTimeline} />
        </section>
      </div>

      {/* Top Sources */}
      <section className="bg-surface border border-border rounded-lg p-4">
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          Top 10 Sources by Chunk Count
        </h3>
        <SourcesBar data={topSources} />
      </section>

      {/* YouTube Watchlist */}
      <section>
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          YouTube Watchlist
        </h3>
        <YouTubeWatchlist channels={youtubeChannels} />
      </section>

      {/* Recent Ingestion Log */}
      <section>
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          Recent Ingestion Activity
        </h3>
        <IngestionLog entries={ingestionLog} />
      </section>
    </div>
  );
}

function ContentTab() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gold mb-4">Content Pipeline</h2>
      <p className="text-dim">Kanban board, schedule coming soon...</p>
    </div>
  );
}

function LaunchTab() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gold mb-4">Quick Launch</h2>
      <p className="text-dim">Link grid coming soon...</p>
    </div>
  );
}

const tabs = {
  operations: OperationsTab,
  knowledge: KnowledgeTab,
  content: ContentTab,
  launch: LaunchTab,
};

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('operations');
  const TabContent = tabs[activeTab];

  return (
    <div className="h-screen w-screen flex flex-col bg-bg text-text overflow-hidden">
      <TitleBar />

      <div className="flex items-center justify-between px-6 h-12 bg-surface border-b border-border">
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        <Clock />
      </div>

      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-auto"
          >
            <TabContent />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
