interface TaskbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  runningApps: string[];
  onAppClick: (appName: string) => void;
}

export default function Taskbar({ isDarkMode, onToggleTheme, runningApps, onAppClick }: TaskbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/20">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-1 rounded transition-colors">
            <span className="text-lg">🚀</span>
            <span className="text-sm">Start</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {runningApps.map((app) => (
            <button
              key={app}
              onClick={() => onAppClick(app)}
              className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-1 rounded transition-colors"
            >
              <span className="text-sm">{app}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded text-white hover:bg-white/10 transition-colors"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <div className="text-white text-xs">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
} 