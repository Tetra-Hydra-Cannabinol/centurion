# Centurion v2.0

**Trajanus Operations Center Desktop Application**

A high-performance desktop operations dashboard built with Tauri v2, React 18, and TypeScript. Real-time monitoring of agent status, knowledge base metrics, content pipeline, and quick-launch utilities.

---

## ⚡ Features

### Operations Dashboard
- **Agent Status Grid** - Real-time monitoring of CP (Planner), CC (Executor), and Rico (Infrastructure)
- **Mission Checklist** - Priority-based task tracking with animated progress bars
- **Infrastructure Health** - AWS, Supabase, GitHub, and website uptime monitoring
- **Session Timeline** - Live activity log with commit, deployment, and error tracking

### Knowledge Base Analytics
- **Category Distribution** - Interactive donut chart showing chunk allocation
- **Growth Timeline** - Area chart tracking KB expansion over time
- **Top Sources** - Horizontal bar chart of most-ingested content sources
- **YouTube Watchlist** - Channel monitoring grid with status badges
- **Ingestion Log** - Real-time KB updates with chunk counts

### Content Pipeline
- **Kanban Board** - 4-column editorial workflow (Draft → Review → Ready → Published)
- **LinkedIn Schedule** - Weekly publishing calendar with gold indicators
- **WordPress Status** - Site health dashboard with backup/plugin metrics

### Quick Launch
- Categorized link grid for instant access to web apps, development tools, Google Drive, and infrastructure

---

## 🛠️ Tech Stack

- **Tauri v2** - Rust-powered desktop framework
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with Trajanus custom theme
- **Framer Motion** - Smooth 60fps animations
- **Recharts** - Data visualization library
- **Lucide React** - Icon system

---

## 🎨 Design System

**Trajanus Branding**
- **Gold Accent** - `#D4AF37` (hero elements, indicators, hover states)
- **Imperial Slate** - `#2C5282` (structural elements, charts, borders)
- **Dark Background** - `#0B0F14` (base layer)
- **Surface** - `#141B24` (cards, panels)

**Typography**
- **UI Font** - DM Sans (400-800 weights)
- **Mono Font** - JetBrains Mono (data, metrics, timestamps)

---

## 🚀 Development

### Prerequisites
- Node.js 18+
- Rust (latest stable)
- npm or pnpm

### Setup
```bash
# Clone repository
git clone https://github.com/Tetra-Hydra-Cannabinol/centurion.git
cd centurion

# Install dependencies
npm install

# Run development server
npm run tauri dev
```

### Build for Production
```bash
# Build optimized production bundle
npm run tauri build

# Output: src-tauri/target/release/
```

---

## 📁 Project Structure

```
centurion/
├── src/
│   ├── components/
│   │   ├── operations/     # Agent grid, missions, timeline
│   │   ├── kb/             # Charts, stats, watchlist
│   │   ├── content/        # Kanban, schedule, WordPress
│   │   └── launch/         # Link grid
│   ├── data.ts             # Mock data and type definitions
│   ├── theme.ts            # Trajanus color palette
│   ├── App.tsx             # Main application shell
│   └── index.css           # Global styles + Tailwind
├── src-tauri/
│   ├── src/                # Rust backend
│   ├── tauri.conf.json     # Tauri configuration
│   └── Cargo.toml          # Rust dependencies
└── package.json
```

---

## 🎯 Key Animations

- **Breathing Pulse** - Agent status indicators (green/amber/red)
- **Staggered Entrance** - Cards fade in with sequential delays
- **Animated Counters** - Stats count up from zero with easing
- **Progress Bars** - Smooth fill animations with percentage labels
- **Tab Transitions** - Slide + fade with Framer Motion layoutId
- **Hover Glow** - Gold border shadow on interactive elements

---

## 🔒 Security

- All external links open in default browser (not in-app WebView)
- No telemetry or analytics tracking
- Local data only (no cloud sync)
- Tauri security features enabled (CSP, localhost-only)

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details

---

## 🏛️ About Trajanus

**ENGINEERED INTELLIGENCE™**

Centurion is the operational command center for Trajanus USA, a strategic AI consulting firm specializing in agent orchestration, knowledge base architecture, and production AI systems.

**Built with Claude Code** - Autonomous development powered by Anthropic Claude

---

**Version:** 2.0.0
**Last Updated:** February 7, 2026
**Repository:** https://github.com/Tetra-Hydra-Cannabinol/centurion
