# Centurion Architecture

**Technical Design Document**

---

## System Overview

Centurion is a Tauri v2 desktop application built with React 18, TypeScript, and Tailwind CSS. The architecture follows a component-based design with clear separation of concerns: presentation components, data layer, and Tauri backend.

---

## Component Tree

```
App.tsx (Shell)
├── TitleBar (Custom window controls + drag region)
├── TabNav (4-tab navigation with animated indicator)
├── Clock (24-hour format, updates every second)
├── Tab Content (AnimatePresence wrapper)
│   ├── OperationsTab
│   │   ├── AgentGrid
│   │   │   └── StatusPulse (Breathing animation)
│   │   ├── MissionChecklist
│   │   │   └── Animated checkmarks, progress bars, priority badges
│   │   ├── SessionTimeline
│   │   │   └── Vertical timeline with type icons
│   │   └── InfraPanel
│   │       └── 4 mini cards (AWS, Supabase, GitHub, Website)
│   │
│   ├── KnowledgeTab
│   │   ├── AnimatedStat (Count-up animation)
│   │   ├── ChunkDonut (Recharts pie chart)
│   │   ├── GrowthChart (Recharts area chart)
│   │   ├── SourcesBar (Recharts horizontal bar)
│   │   ├── YouTubeWatchlist (10-channel grid)
│   │   └── IngestionLog (Scrollable activity feed)
│   │
│   ├── ContentTab
│   │   ├── KanbanBoard
│   │   │   └── ArticleCard (4 columns × N cards)
│   │   ├── LinkedInSchedule (Week strip)
│   │   └── WordPressStatus (Health metrics)
│   │
│   └── LaunchTab
│       └── LinkGrid
│           └── LaunchLink (Tauri shell.open integration)
│
└── Footer (Branding, status dots, session date)
```

---

## Data Flow

### Static Data Layer
**File:** `src/data.ts`

All application data is currently **hardcoded mock data** for demonstration purposes. In production, this would be replaced with:

1. **Real-time API calls** - Fetch agent status from backend
2. **Supabase queries** - KB stats from PostgreSQL
3. **WordPress REST API** - Content pipeline status
4. **File system** - Session logs from local storage

**Current Data Structures:**
```typescript
// Operations
AgentStatus[]
MissionItem[]
InfraStatus[]
SessionEntry[]

// Knowledge Base
CategoryChunk[]
GrowthDataPoint[]
SourceStat[]
YouTubeChannel[]
IngestionEntry[]

// Content
Article[]
PublishDay[]
WordPressHealth
```

### State Management
**Current:** React `useState` hooks in App.tsx for tab switching only

**Future Considerations:**
- Add React Context for global state (if needed)
- Consider Zustand/Jotai for more complex state
- WebSocket integration for real-time updates

---

## Animation System

### Framer Motion Patterns

1. **Staggered Entrance**
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: index * 0.05 }}
   >
   ```

2. **Breathing Pulse** (StatusPulse)
   ```tsx
   animate={{
     scale: [1, 1.5, 1],
     opacity: [0.5, 0, 0.5],
   }}
   transition={{
     duration: 2,
     repeat: Infinity,
     ease: 'easeInOut',
   }}
   ```

3. **Tab Indicator** (layoutId spring)
   ```tsx
   <motion.div
     layoutId="activeTab"
     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
   />
   ```

4. **Count-Up Animation** (AnimatedStat)
   ```tsx
   const count = useMotionValue(0);
   animate(count, value, {
     duration: 1.5,
     ease: [0.16, 1, 0.3, 1],
   });
   ```

5. **Tab Transitions** (AnimatePresence)
   ```tsx
   <AnimatePresence mode="wait">
     <motion.div
       key={activeTab}
       initial={{ opacity: 0, x: 20 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -20 }}
     />
   </AnimatePresence>
   ```

---

## Theming System

### Tailwind Configuration
**File:** `tailwind.config.js`

Custom color tokens extend Tailwind's default palette:

```javascript
{
  bg: '#0B0F14',        // Base background
  surface: '#141B24',   // Card/panel background
  card: '#1A2332',      // Individual card background
  border: '#243044',    // Dividers, outlines
  gold: '#D4AF37',      // Primary accent
  goldDim: '#A8892B',   // Secondary accent
  slate: '#2C5282',     // Structural blue
  slateBright: '#3D6BA8', // Bright structural
  text: '#E2E8F0',      // Primary text
  dim: '#8899AA',       // Secondary text
  muted: '#566778',     // Tertiary text
  green: '#48BB78',     // Success/operational
  amber: '#ED8936',     // Warning/degraded
  red: '#FC8181',       // Error/offline
}
```

### Typography Scale
- **Headings:** 2xl (24px), xl (20px), lg (18px)
- **Body:** base (16px), sm (14px), xs (12px)
- **Labels:** [10px], [9px], [8px] (Tailwind arbitrary values)
- **Mono:** Used for metrics, timestamps, codes

---

## Tauri Integration

### Window Management
**Component:** `TitleBar.tsx`

```typescript
const { Window } = await import('@tauri-apps/api/window');
const appWindow = Window.getCurrent();

appWindow.minimize();
appWindow.toggleMaximize();
appWindow.close();
```

**Configuration:** `src-tauri/tauri.conf.json`
- Window size: 1440×900
- Decorations: false (custom title bar)
- CSP: null (dev mode)

### Shell Integration
**Component:** `LaunchLink.tsx`

```typescript
const { open } = await import('@tauri-apps/plugin-shell');
await open(url); // Opens in default browser
```

**Security:**
- All external links open in system browser
- No in-app WebView navigation
- Prevents XSS/phishing risks

---

## Performance Considerations

### Optimization Strategies
1. **Lazy Loading** - Dynamic imports for Tauri plugins
2. **Animation FPS** - Framer Motion GPU-accelerated transforms
3. **Chart Performance** - Recharts with limited data points (< 20)
4. **Memoization** - React.memo on expensive components (if needed)
5. **Code Splitting** - Vite automatically chunks by route/import

### Build Metrics
```
Production Bundle (Vite):
- index.html: 0.80 kB
- CSS: 15.99 kB
- JS: 748.67 kB (Recharts + Framer Motion heavy)
- Total: ~765 kB

Tauri Binary:
- Windows .exe: ~6-8 MB
- No WebView bloat (uses OS native WebView)
```

---

## Future Enhancements

### Phase 2 Roadmap
1. **Real Data Integration**
   - Connect to Supabase for KB metrics
   - WordPress REST API for content pipeline
   - File system for session logs

2. **Live Updates**
   - WebSocket connection for real-time agent status
   - Polling for infrastructure health checks
   - Auto-refresh on data changes

3. **Settings Panel**
   - Theme customization (dark/light mode)
   - Notification preferences
   - API endpoint configuration

4. **Export Features**
   - Screenshot capture of dashboards
   - CSV export of KB analytics
   - Session log export

5. **Search & Filter**
   - Global search across all tabs
   - Filter missions by priority/status
   - Date range selector for charts

---

## Development Guidelines

### Code Style
- **TypeScript:** Strict mode enabled
- **React:** Functional components with hooks only
- **Naming:** PascalCase for components, camelCase for utilities
- **Imports:** Absolute imports from `src/`

### Animation Standards
- **Duration:** 0.2-0.3s for micro-interactions, 1-2s for entrances
- **Easing:** Cubic bezier `[0.16, 1, 0.3, 1]` for smoothness
- **Delays:** Stagger by 0.03-0.08s per item
- **FPS Target:** 60fps on all animations

### Git Workflow
- **Commits:** Conventional commits (feat:, fix:, polish:, docs:)
- **Branches:** `master` for stable, feature branches for new work
- **Tags:** Semantic versioning (v2.0.0, v2.1.0, etc.)

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Maintainer:** Trajanus USA / Claude Code
