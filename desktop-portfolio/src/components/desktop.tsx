import { useState } from "react";

export default function Desktop() {
  const [showAlert, setShowAlert] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const lightGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const darkGradient = "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";

  return (
    <div
      className="h-screen w-screen transition-all duration-500"
      style={{ 
        background: isDarkMode ? darkGradient : lightGradient,
        backgroundSize: "cover"
      }}
    >
      <button
        className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        onClick={() => setIsDarkMode(!isDarkMode)}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <button
        className="absolute left-4 top-4 flex flex-col items-center text-sm text-white drop-shadow-lg hover:scale-105 transition-transform duration-200"
        onClick={() => setShowAlert(true)}
      >
        📁
        <span>My Projects</span>
      </button>

      {showAlert && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
          <div className="rounded-lg bg-white/10 backdrop-blur-md p-6 border border-white/20">
            Coming soon!
            <button className="ml-4 underline hover:text-blue-300 transition-colors" onClick={() => setShowAlert(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}