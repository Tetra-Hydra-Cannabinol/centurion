interface FooterProps {
  sessionDate?: string;
}

export function Footer({ sessionDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}) }: FooterProps) {
  return (
    <div className="h-7 bg-surface border-t border-border flex items-center justify-between px-6 text-[10px] tracking-widest">
      {/* Left: Branding */}
      <div className="flex items-center gap-4">
        <span className="text-muted font-medium">
          ENGINEERED INTELLIGENCE™
        </span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-dim">SYSTEMS</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-dim">KB</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-dim">SYNC</span>
          </div>
        </div>
      </div>

      {/* Right: Session Date */}
      <span className="text-dim font-mono">
        SESSION: {sessionDate.toUpperCase()}
      </span>
    </div>
  );
}
