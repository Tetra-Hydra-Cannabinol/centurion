import {
  MessageSquare,
  Database,
  Github,
  Globe,
  Send,
  Server,
  Terminal,
  FolderOpen,
  BookOpen,
  TrendingUp,
  Cloud,
  Layout,
} from 'lucide-react';
import { LaunchLink } from './LaunchLink';

export function LinkGrid() {
  const sections = [
    {
      title: 'Web Apps',
      links: [
        { icon: MessageSquare, label: 'Claude.ai', url: 'https://claude.ai' },
        { icon: Database, label: 'Supabase', url: 'https://supabase.com/dashboard' },
        { icon: Github, label: 'GitHub', url: 'https://github.com/Tetra-Hydra-Cannabinol' },
        { icon: Globe, label: 'WordPress', url: 'https://trajanus.us/wp-admin' },
        { icon: Send, label: 'Telegram', url: 'https://web.telegram.org' },
      ],
    },
    {
      title: 'Development',
      links: [
        { icon: Server, label: 'Rico EC2', url: 'ssh://ubuntu@rico-vps' },
        { icon: Terminal, label: 'Claude Code', url: 'vscode://file/C:/Dev' },
      ],
    },
    {
      title: 'Google Drive',
      links: [
        { icon: FolderOpen, label: 'Core Protocols', url: 'https://drive.google.com/drive/folders/protocols' },
        { icon: BookOpen, label: 'Journals', url: 'https://drive.google.com/drive/folders/journals' },
        { icon: TrendingUp, label: 'Masters', url: 'https://drive.google.com/drive/folders/masters' },
      ],
    },
    {
      title: 'Infrastructure',
      links: [
        { icon: Cloud, label: 'AWS Console', url: 'https://console.aws.amazon.com' },
        { icon: Layout, label: 'Supabase Dashboard', url: 'https://supabase.com/dashboard/projects' },
        { icon: Globe, label: 'DNS (Cloudflare)', url: 'https://dash.cloudflare.com' },
      ],
    },
  ];

  let linkIndex = 0;

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <section key={section.title}>
          <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
            {section.title}
          </h3>
          <div className="grid grid-cols-5 gap-3">
            {section.links.map((link) => (
              <LaunchLink
                key={link.label}
                icon={link.icon}
                label={link.label}
                url={link.url}
                index={linkIndex++}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
