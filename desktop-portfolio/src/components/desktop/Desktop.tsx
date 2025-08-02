import { useState } from "react";
import AboutMe from "../apps/AboutMe";
import Projects from "../apps/Projects";
import Resume from "../apps/Resume";
import GitHub from "../apps/GitHub";
import Taskbar from "./Taskbar";

export default function Desktop() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openApps, setOpenApps] = useState<{ [key: string]: boolean }>({});
  const [minimizedApps, setMinimizedApps] = useState<{ [key: string]: boolean }>({});

  const lightGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const darkGradient = "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";

  const openApp = (appName: string) => {
    setOpenApps(prev => ({ ...prev, [appName]: true }));
    setMinimizedApps(prev => ({ ...prev, [appName]: false }));
  };

  const closeApp = (appName: string) => {
    setOpenApps(prev => ({ ...prev, [appName]: false }));
    setMinimizedApps(prev => ({ ...prev, [appName]: false }));
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
  };

  const runningApps = Object.keys({ ...openApps, ...minimizedApps }).filter(
    app => openApps[app] || minimizedApps[app]
  );

  return (
    <div
      className="h-screen w-screen transition-all duration-500"
      style={{ 
        background: isDarkMode ? darkGradient : lightGradient,
        backgroundSize: "cover"
      }}
    >
      <button
        className="absolute left-8 top-8 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => openApp("projects")}
      >
        <span className="text-4xl mb-2">📁</span>
        <span className="text-sm text-center">My Projects</span>
      </button>

      <button
        className="absolute left-8 top-32 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => openApp("about")}
      >
        <span className="text-4xl mb-2">👤</span>
        <span className="text-sm text-center">About Me</span>
      </button>

      <button
        className="absolute left-8 top-56 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => openApp("resume")}
      >
        <span className="text-4xl mb-2">📄</span>
        <span className="text-sm text-center">Resume</span>
      </button>

      <button
        className="absolute left-8 top-80 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => openApp("github")}
      >
        <img src="/github.png" alt="GitHub" className="w-16 h-16 mb-2" />
        <span className="text-sm text-center">GitHub</span>
      </button>

      <Projects 
        isOpen={openApps.projects || false} 
        onClose={() => closeApp("projects")}
        onMinimize={() => minimizeApp("projects")}
      />
      
      <AboutMe 
        isOpen={openApps.about || false} 
        onClose={() => closeApp("about")}
        onMinimize={() => minimizeApp("about")}
      />

      <Resume 
        isOpen={openApps.resume || false} 
        onClose={() => closeApp("resume")}
        onMinimize={() => minimizeApp("resume")}
      />

      <GitHub 
        isOpen={openApps.github || false} 
        onClose={() => closeApp("github")}
        onMinimize={() => minimizeApp("github")}
      />

      <Taskbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        runningApps={runningApps}
        onAppClick={handleTaskbarClick}
      />
    </div>
  );
} 