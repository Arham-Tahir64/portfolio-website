import React, { useState, useEffect } from "react";

interface TaskbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  runningApps: string[];
  onAppClick: (appName: string) => void;
  onReorderApps: (newOrder: string[]) => void;
  onSleep?: () => void;
}

export default function Taskbar({ isDarkMode, onToggleTheme, runningApps, onAppClick, onReorderApps, onSleep }: TaskbarProps) {
  const [draggedApp, setDraggedApp] = useState<string | null>(null);
  const [dragOverApp, setDragOverApp] = useState<string | null>(null);
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const getAppIcon = (appName: string) => {
    switch (appName) {
      case "projects":
        return "📁";
      case "about":
        return "👤";
      case "resume":
        return "📄";
      case "github":
        return "🐙";
      default:
        return "📱";
    }
  };

  const getAppName = (appName: string) => {
    switch (appName) {
      case "projects":
        return "Projects";
      case "about":
        return "About Me";
      case "resume":
        return "Resume";
      case "github":
        return "GitHub";
      default:
        return appName;
    }
  };

  const handleDragStart = (e: React.DragEvent, appName: string) => {
    setDraggedApp(appName);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, appName: string) => {
    e.preventDefault();
    if (draggedApp && draggedApp !== appName) {
      setDragOverApp(appName);
    }
  };

  const handleDrop = (e: React.DragEvent, dropAppName: string) => {
    e.preventDefault();
    if (draggedApp && draggedApp !== dropAppName) {
      const newOrder = [...runningApps];
      const draggedIndex = newOrder.indexOf(draggedApp);
      const dropIndex = newOrder.indexOf(dropAppName);
      
      newOrder.splice(draggedIndex, 1);
      newOrder.splice(dropIndex, 0, draggedApp);
      
      onReorderApps(newOrder);
    }
    setDraggedApp(null);
    setDragOverApp(null);
  };

  const handleDragEnd = () => {
    setDraggedApp(null);
    setDragOverApp(null);
  };

  // Close power menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowPowerMenu(false);
    };

    if (showPowerMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showPowerMenu]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-700">
      <div className="flex items-center h-14 px-3">
        <div className="flex items-center mr-3 relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowPowerMenu(!showPowerMenu);
            }}
            className="flex items-center space-x-2 text-white hover:bg-gray-700 px-3 py-2 rounded transition-colors"
            aria-label="Power menu"
            aria-haspopup="menu"
            aria-expanded={showPowerMenu}
          >
            <span className="text-xl">⏻</span>
          </button>
          
           {showPowerMenu && (
             <div 
               className="absolute bottom-full left-0 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg min-w-32"
               onClick={(e) => e.stopPropagation()}
               role="menu"
             >
               <button
                 onClick={() => {
                   onSleep?.();
                   setShowPowerMenu(false);
                 }}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-white hover:bg-gray-700 text-left"
                  role="menuitem"
               >
                 <span className="text-sm">💤</span>
                 <span className="text-sm">Sleep</span>
               </button>
             </div>
           )}
        </div>

        <div className="flex items-center space-x-1 flex-1">
          {runningApps.map((app, index) => (
            <button
              key={app}
              draggable
              onDragStart={(e) => handleDragStart(e, app)}
              onDragOver={(e) => handleDragOver(e, app)}
              onDrop={(e) => handleDrop(e, app)}
              onDragEnd={handleDragEnd}
              onClick={() => onAppClick(app)}
              className={`flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-t-lg transition-colors min-w-0 border-r border-gray-600 ${
                draggedApp === app ? 'opacity-50' : ''
              } ${dragOverApp === app ? 'bg-gray-600' : ''}`}
              title={`${getAppName(app)} - Click to minimize/maximize, drag to reorder`}
              style={{
                marginLeft: index === 0 ? '0' : '-1px',
                zIndex: runningApps.length - index,
                cursor: draggedApp === app ? 'grabbing' : 'grab'
              }}
            >
              <span className="text-base">{getAppIcon(app)}</span>
              <span className="text-sm font-medium truncate max-w-20">{getAppName(app)}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 ml-4">
          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded text-white hover:bg-gray-700 transition-colors"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <div className="text-white text-sm px-3" title={currentTime.toLocaleDateString()}>
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
} 