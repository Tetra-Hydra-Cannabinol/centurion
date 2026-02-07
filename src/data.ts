// Data types and mock data for Centurion

export interface AgentStatus {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'offline';
  currentTask: string;
  uptime: string;
}

export interface MissionItem {
  id: string;
  title: string;
  priority: 'P0' | 'P1' | 'P2';
  progress: number;
  completed: boolean;
}

export interface InfraStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: string;
}

export interface SessionEntry {
  id: string;
  timestamp: string;
  type: 'commit' | 'deployment' | 'task' | 'error';
  description: string;
}

// Mock data
export const agents: AgentStatus[] = [
  {
    id: 'cp',
    name: 'CP (Jake)',
    role: 'Strategic Planner',
    status: 'active',
    currentTask: 'Analyzing Phase 4 requirements',
    uptime: '127h 32m',
  },
  {
    id: 'cc',
    name: 'CC',
    role: 'Code Executor',
    status: 'active',
    currentTask: 'Building Centurion v2.0',
    uptime: '2h 14m',
  },
  {
    id: 'rico',
    name: 'Rico VPS',
    role: 'Infrastructure Monitor',
    status: 'idle',
    currentTask: 'Awaiting KB ingestion tasks',
    uptime: '1,247h 18m',
  },
];

export const missions: MissionItem[] = [
  {
    id: 'm1',
    title: 'Complete Centurion v2.0 Operations Tab',
    priority: 'P0',
    progress: 45,
    completed: false,
  },
  {
    id: 'm2',
    title: 'Ingest 18 GitHub AI/ML repositories to KB',
    priority: 'P0',
    progress: 90,
    completed: false,
  },
  {
    id: 'm3',
    title: 'Deploy EOS automation improvements',
    priority: 'P1',
    progress: 100,
    completed: true,
  },
  {
    id: 'm4',
    title: 'Refactor KB search with semantic filters',
    priority: 'P1',
    progress: 30,
    completed: false,
  },
  {
    id: 'm5',
    title: 'Document Claude Code workflow patterns',
    priority: 'P2',
    progress: 65,
    completed: false,
  },
];

export const infrastructure: InfraStatus[] = [
  {
    id: 'aws',
    name: 'AWS EC2 (Rico)',
    status: 'operational',
    uptime: '99.97%',
  },
  {
    id: 'supabase',
    name: 'Supabase KB',
    status: 'operational',
    uptime: '99.99%',
  },
  {
    id: 'github',
    name: 'GitHub Repos',
    status: 'operational',
    uptime: '100%',
  },
  {
    id: 'website',
    name: 'Trajanus.us',
    status: 'degraded',
    uptime: '98.2%',
  },
];

export const sessionTimeline: SessionEntry[] = [
  {
    id: 's1',
    timestamp: '19:38',
    type: 'commit',
    description: 'feat: scaffold Tauri v2 + React + TS',
  },
  {
    id: 's2',
    timestamp: '19:42',
    type: 'task',
    description: 'Fixed Tailwind v4 PostCSS configuration',
  },
  {
    id: 's3',
    timestamp: '19:45',
    type: 'commit',
    description: 'feat: layout shell with titlebar and tabs',
  },
  {
    id: 's4',
    timestamp: '19:51',
    type: 'error',
    description: 'Resolved Tauri v2 Window API import',
  },
  {
    id: 's5',
    timestamp: '19:54',
    type: 'deployment',
    description: 'Phase 2 quality gate passed',
  },
];
