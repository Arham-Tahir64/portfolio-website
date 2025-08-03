import Window from "../desktop/Window";

interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export default function Projects({ isOpen, onClose, onMinimize, onFullscreenChange }: ProjectsProps) {
  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} title="My Projects">
      <div className="p-6 text-white">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">🚀 My Projects</h1>
            <p className="text-lg text-gray-200">
              Here are some of the projects I've been working on
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Portfolio Website</h3>
              <p className="text-gray-200 mb-4">
                A desktop-style portfolio built with React, TypeScript, and Tailwind CSS.
                Features a realistic desktop environment with draggable windows and apps.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Tailwind</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3 text-green-300">AI Game Assistant</h3>
              <p className="text-gray-200 mb-4">
               A lightweight, Python-powered tool that layers computer-vision on top of a game. Using YOLOv8 for real-time object detection, it scans the live game feed to spot on-screen threats and triggers context-aware actions (e.g., lowering Spotify volume) so you can react faster without distraction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">YoloV8</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-300">
              Check out my GitHub for more projects and contributions!
            </p>
          </div>
        </div>
      </div>
    </Window>
  );
} 