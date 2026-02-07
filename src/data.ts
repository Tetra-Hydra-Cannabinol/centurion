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

// Knowledge Base data types
export interface CategoryChunk {
  name: string;
  value: number;
  color: string;
}

export interface GrowthDataPoint {
  date: string;
  chunks: number;
}

export interface SourceStat {
  name: string;
  chunks: number;
}

export interface YouTubeChannel {
  id: string;
  name: string;
  status: 'ACTIVE' | 'PENDING' | 'NEW';
  videos: number;
}

export interface IngestionEntry {
  id: string;
  timestamp: string;
  source: string;
  chunks: number;
  category: string;
}

// KB Mock data
export const kbStats = {
  totalChunks: 32847,
  totalSources: 156,
  categories: 12,
  lastUpdate: '2 hours ago',
};

export const categoryChunks: CategoryChunk[] = [
  { name: 'Agent Frameworks', value: 6842, color: '#D4AF37' },
  { name: 'RAG Techniques', value: 5231, color: '#A8892B' },
  { name: 'ML Fundamentals', value: 4987, color: '#2C5282' },
  { name: 'Prompt Engineering', value: 3654, color: '#3D6BA8' },
  { name: 'Computer Vision', value: 2943, color: '#48BB78' },
  { name: 'NLP Resources', value: 2567, color: '#ED8936' },
  { name: 'LLM Practical', value: 2134, color: '#8899AA' },
  { name: 'Others', value: 4489, color: '#566778' },
];

export const growthTimeline: GrowthDataPoint[] = [
  { date: '2026-01', chunks: 12450 },
  { date: '2026-01-15', chunks: 18230 },
  { date: '2026-02-01', chunks: 25600 },
  { date: '2026-02-06', chunks: 32847 },
];

export const topSources: SourceStat[] = [
  { name: 'Riley Brown AI Agents', chunks: 2847 },
  { name: 'Microsoft ML Course', chunks: 2456 },
  { name: 'Anthropic Docs', chunks: 2134 },
  { name: 'RAG Techniques', chunks: 1987 },
  { name: 'Karpathy NN Course', chunks: 1756 },
  { name: 'LangChain Docs', chunks: 1523 },
  { name: 'Prompt Engineering Guide', chunks: 1387 },
  { name: 'OpenAI Cookbook', chunks: 1245 },
  { name: 'GenAI Agents', chunks: 1098 },
  { name: 'Awesome LLM', chunks: 982 },
];

export const youtubeChannels: YouTubeChannel[] = [
  { id: 'y1', name: 'Riley Brown', status: 'ACTIVE', videos: 42 },
  { id: 'y2', name: 'Anthropic', status: 'ACTIVE', videos: 28 },
  { id: 'y3', name: 'OpenAI', status: 'ACTIVE', videos: 35 },
  { id: 'y4', name: 'Andrej Karpathy', status: 'ACTIVE', videos: 15 },
  { id: 'y5', name: 'DeepLearning.AI', status: 'PENDING', videos: 67 },
  { id: 'y6', name: 'Two Minute Papers', status: 'ACTIVE', videos: 124 },
  { id: 'y7', name: 'Yannic Kilcher', status: 'PENDING', videos: 89 },
  { id: 'y8', name: 'AI Explained', status: 'NEW', videos: 0 },
  { id: 'y9', name: 'Matthew Berman', status: 'ACTIVE', videos: 56 },
  { id: 'y10', name: 'Sam Witteveen', status: 'PENDING', videos: 43 },
];

export const ingestionLog: IngestionEntry[] = [
  { id: 'i1', timestamp: '20:15', source: 'awesome-llm README', chunks: 234, category: 'llm_practical' },
  { id: 'i2', timestamp: '20:10', source: 'made-with-ml docs', chunks: 187, category: 'mlops' },
  { id: 'i3', timestamp: '20:05', source: 'nn-zero-to-hero lessons', chunks: 156, category: 'neural_networks' },
  { id: 'i4', timestamp: '19:58', source: 'awesome-nlp resources', chunks: 203, category: 'nlp_resources' },
  { id: 'i5', timestamp: '19:52', source: 'rag-techniques notebooks', chunks: 178, category: 'rag_techniques' },
];
