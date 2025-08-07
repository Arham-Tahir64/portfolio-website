import { useEffect, useState } from "react";
import AboutMe from "../apps/AboutMe";
import Projects from "../apps/Projects";
import Resume from "../apps/Resume";
import GitHub from "../apps/GitHub";
import Taskbar from "./Taskbar";

export default function Desktop() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return saved ? saved === 'dark' : true;
  });
  const [openApps, setOpenApps] = useState<{ [key: string]: boolean }>({});
  const [minimizedApps, setMinimizedApps] = useState<{ [key: string]: boolean }>({});
  const [fullscreenApps, setFullscreenApps] = useState<{ [key: string]: boolean }>({});
  const [appOrder, setAppOrder] = useState<string[]>(["projects", "about", "resume", "github"]);
  const [zCounter, setZCounter] = useState<number>(100);
  const [appZIndices, setAppZIndices] = useState<{ [key: string]: number }>({});
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const lightGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const darkGradient = "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";

  const bringToFront = (appName: string) => {
    setZCounter(prev => {
      const next = prev + 1;
      setAppZIndices(current => ({ ...current, [appName]: next }));
      setActiveApp(appName);
      return next;
    });
  };

  const openApp = (appName: string) => {
    setOpenApps(prev => ({ ...prev, [appName]: true }));
    setMinimizedApps(prev => ({ ...prev, [appName]: false }));
    bringToFront(appName);
  };

  const closeApp = (appName: string) => {
    setOpenApps(prev => ({ ...prev, [appName]: false }));
    setMinimizedApps(prev => ({ ...prev, [appName]: false }));
    setFullscreenApps(prev => ({ ...prev, [appName]: false }));
  };

  const minimizeApp = (appName: string) => {
    setOpenApps(prev => ({ ...prev, [appName]: false }));
    setMinimizedApps(prev => ({ ...prev, [appName]: true }));
  };

  const handleTaskbarClick = (appName: string) => {
    if (openApps[appName]) {
      // If app is open, minimize it
      minimizeApp(appName);
    } else if (minimizedApps[appName]) {
      // If app is minimized, restore it
      openApp(appName);
    } else {
      // If app is closed, open it
      openApp(appName);
    }
    bringToFront(appName);
  };

  const handleReorderApps = (newOrder: string[]) => {
    setAppOrder(newOrder);
  };

  // Removed desktop click to minimize feature

  const runningApps = appOrder.filter(
    app => openApps[app] || minimizedApps[app]
  );

  useEffect(() => {
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {}
  }, [isDarkMode]);

  return (
    <div
      className="h-screen w-screen transition-all duration-500"
      style={{ 
        background: isDarkMode ? darkGradient : lightGradient,
        backgroundSize: "cover"
      }}
    >
      <button
        className="absolute left-8 top-8 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          openApp("projects");
        }}
        aria-label="Open Projects"
        title="Open Projects"
      >
        <span className="text-4xl mb-2">📁</span>
        <span className="text-sm text-center">My Projects</span>
      </button>

      <button
        className="absolute left-8 top-32 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          openApp("about");
        }}
        aria-label="Open About Me"
        title="Open About Me"
      >
        <span className="text-4xl mb-2">👤</span>
        <span className="text-sm text-center">About Me</span>
      </button>

      <button
        className="absolute left-8 top-56 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          openApp("resume");
        }}
        aria-label="Open Resume"
        title="Open Resume"
      >
        <span className="text-4xl mb-2">📄</span>
        <span className="text-sm text-center">Resume</span>
      </button>

      <button
        className="absolute left-8 top-80 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          openApp("github");
        }}
        aria-label="Open GitHub"
        title="Open GitHub"
      >
        <img src="/github.png" alt="GitHub" className="w-16 h-16 mb-2" />
        <span className="text-sm text-center">GitHub</span>
      </button>

      <Projects 
        isOpen={openApps.projects || false} 
        onClose={() => closeApp("projects")}
        onMinimize={() => minimizeApp("projects")}
        onFullscreenChange={(isFullscreen) => setFullscreenApps(prev => ({ ...prev, projects: isFullscreen }))}
        onFocus={() => bringToFront("projects")}
        isFocused={activeApp === "projects"}
        zIndex={appZIndices["projects"]}
      />
      
      <AboutMe 
        isOpen={openApps.about || false} 
        onClose={() => closeApp("about")}
        onMinimize={() => minimizeApp("about")}
        onFullscreenChange={(isFullscreen) => setFullscreenApps(prev => ({ ...prev, about: isFullscreen }))}
        onFocus={() => bringToFront("about")}
        isFocused={activeApp === "about"}
        zIndex={appZIndices["about"]}
      />

      <Resume 
        isOpen={openApps.resume || false} 
        onClose={() => closeApp("resume")}
        onMinimize={() => minimizeApp("resume")}
        onFullscreenChange={(isFullscreen) => setFullscreenApps(prev => ({ ...prev, resume: isFullscreen }))}
        onFocus={() => bringToFront("resume")}
        isFocused={activeApp === "resume"}
        zIndex={appZIndices["resume"]}
      />

      <GitHub 
        isOpen={openApps.github || false} 
        onClose={() => closeApp("github")}
        onMinimize={() => minimizeApp("github")}
        onFullscreenChange={(isFullscreen) => setFullscreenApps(prev => ({ ...prev, github: isFullscreen }))}
        onFocus={() => bringToFront("github")}
        isFocused={activeApp === "github"}
        zIndex={appZIndices["github"]}
      />

      <Taskbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        runningApps={runningApps}
        onAppClick={handleTaskbarClick}
        onReorderApps={handleReorderApps}
        onSleep={() => window.location.reload()}
      />
    </div>
  );
} 