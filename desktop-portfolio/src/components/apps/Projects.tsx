import Window from "../desktop/Window";
import { useState } from "react";

interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export default function Projects({ isOpen, onClose, onMinimize, onFullscreenChange }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio built as a desktop environment. Started as a simple React app but got carried away with the desktop theme. Still adding features when I have time.",
      url: "github.com/Arham-Tahir64/portfolio-website",
      tags: ["React", "TypeScript", "Tailwind"],
      type: "Personal Project",
      lastUpdated: "2 weeks ago"
    },
    {
      id: 2,
      title: "Game Assistant Tool",
      description: "A Python script that uses computer vision to detect in-game events. Originally made to auto-pause Spotify when I die in games, but ended up being more useful than expected. Uses YOLOv8 for object detection.",
      url: "github.com/Arham-Tahir64/game-assistant",
      tags: ["Python", "OpenCV", "YOLOv8"],
      type: "Utility Tool",
      lastUpdated: "1 month ago"
    },
  ]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} title="My Projects">
      <div className="p-6 text-white min-h-full">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-300">My Projects</h1>
            <p className="text-gray-300">Stuff I've been working on</p>
            
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search projects..."
                  className="w-full px-4 py-3 text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors text-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {searchResults.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-blue-300 hover:text-blue-200 cursor-pointer">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-gray-600/30 text-gray-300 rounded">
                        {project.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {project.lastUpdated}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-400 hover:underline cursor-pointer text-xs">
                        {project.url}
                      </span>
                      <div className="flex space-x-1">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
} 