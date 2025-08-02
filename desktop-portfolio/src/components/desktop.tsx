import { useState } from "react";

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
}

function Window({ title, isOpen, onClose, children, initialPosition = { x: 100, y: 100 } }: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl min-w-[400px] min-h-[300px]"
        style={{
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'default'
        }}
      >
        {/* Window Header */}
        <div
          className="flex items-center justify-between p-3 bg-white/20 border-b border-white/20 rounded-t-lg cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-white font-medium">{title}</span>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Window Content */}
        <div className="p-6 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
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
        className="absolute left-8 top-8 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => setShowAlert(true)}
      >
        <span className="text-4xl mb-2">📁</span>
        <span className="text-sm text-center">My Projects</span>
      </button>

      <button
        className="absolute left-8 top-32 flex flex-col items-center text-white drop-shadow-lg hover:scale-105 transition-transform duration-200 w-20"
        onClick={() => setShowAboutMe(true)}
      >
        <span className="text-4xl mb-2">👤</span>
        <span className="text-sm text-center">About Me</span>
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

      <Window
        title="About Me"
        isOpen={showAboutMe}
        onClose={() => setShowAboutMe(false)}
        initialPosition={{ x: 150, y: 100 }}
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">👋 Hi! I'm a passionate developer</h2>
            <p>
                Hi — I’m <strong>Arham Tahir</strong>, a Computer Science student at the University of
                Calgary who loves turning ideas into polished web apps.
            </p>
            <p>
                I build full-stack projects with <em>React / Next.js, TypeScript, Rust, Docker, and Tailwind</em>,
                and I’m exploring blockchain & Machine Learning projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">💻 Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-300 mb-2">Languages</h4>
                <ul className="space-y-1 text-gray-200">
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• C++</li>
                  <li>• Rust</li>
                  <li>• HTML/CSS</li>
                  <li>• SQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-300 mb-2">Frameworks & Tools</h4>
                <ul className="space-y-1 text-gray-200">
                  <li>• React/Next.js</li>
                  <li>• Node.js/Express</li>
                  <li>• Tailwind CSS</li>
                  <li>• Git/GitHub</li>
                  <li>• Docker</li>
                  <li>• myPHPadmin</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🎯 What I Do</h3>
            <p className="text-sm text-gray-200">
              I specialize in building responsive web applications, creating intuitive user interfaces, 
              and developing scalable backend solutions. I believe in clean code, great UX, and continuous learning.
            </p>
          </div>
        </div>
      </Window>
    </div>
  );
}