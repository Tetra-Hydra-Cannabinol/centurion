import { X, Minus, Square } from 'lucide-react';

export function TitleBar() {
  const handleMinimize = async () => {
    const { Window } = await import('@tauri-apps/api/window');
    Window.getCurrent().minimize();
  };

  const handleMaximize = async () => {
    const { Window } = await import('@tauri-apps/api/window');
    Window.getCurrent().toggleMaximize();
  };

  const handleClose = async () => {
    const { Window } = await import('@tauri-apps/api/window');
    Window.getCurrent().close();
  };

  return (
    <div
      data-tauri-drag-region
      className="h-8 bg-surface border-b border-border flex items-center justify-between px-4 select-none"
    >
      {/* Left: Wordmark */}
      <div className="flex items-center gap-3">
        <span className="text-gold font-mono text-xs font-semibold tracking-wider">
          CENTURION
        </span>
        <span className="text-muted text-[10px] tracking-widest">
          TRAJANUS OPERATIONS CENTER
        </span>
      </div>

      {/* Right: Window Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={handleMinimize}
          className="h-6 w-6 flex items-center justify-center hover:bg-card transition-colors rounded"
          aria-label="Minimize"
        >
          <Minus size={14} className="text-dim" />
        </button>
        <button
          onClick={handleMaximize}
          className="h-6 w-6 flex items-center justify-center hover:bg-card transition-colors rounded"
          aria-label="Maximize"
        >
          <Square size={12} className="text-dim" />
        </button>
        <button
          onClick={handleClose}
          className="h-6 w-6 flex items-center justify-center hover:bg-red transition-colors rounded"
          aria-label="Close"
        >
          <X size={14} className="text-dim hover:text-white" />
        </button>
      </div>
    </div>
  );
}
