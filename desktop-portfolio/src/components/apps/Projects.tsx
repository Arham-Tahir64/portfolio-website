import Window from "../desktop/Window";
import { useState } from "react";

interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

interface FileItem {
  id: string;
  name: string;
  type: "folder" | "file";
  icon: string;
  description?: string;
  url?: string;
  tags?: string[];
  lastModified: string;
}

export default function Projects({ isOpen, onClose, onMinimize, onFullscreenChange }: ProjectsProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "details">("details");

  const fileItems: FileItem[] = [
    {
      id: "portfolio",
      name: "Portfolio Website",
      type: "folder",
      icon: "📁",
      description: "My personal portfolio built as a desktop environment",
      url: "github.com/Arham-Tahir64/portfolio-website",
      tags: ["React", "TypeScript", "Tailwind"],
      lastModified: "2 weeks ago",
    },
    {
      id: "game-assistant",
      name: "Game Assistant Tool",
      type: "folder",
      icon: "🎮",
      description: "Python script that uses computer vision to detect in-game events",
      url: "github.com/Arham-Tahir64/ai-game-control",
      tags: ["Python", "OpenCV", "YOLOv8"],
      lastModified: "1 week ago",
    },
    {
      id: "crypto-tracker",
      name: "Crypto Tracker",
      type: "folder",
      icon: "📝",
      description: "Full stack crypto tracker with real-time data and portfolio management using google auth ",
      url: "github.com/Arham-Tahir64/Crypto-Tracker",
      tags: ["React", "Python", "Postgres", "Google Auth"],
      lastModified: "3 months ago",
    },
    {
      id: "bounty-fun",
      name: "Bounty Fun",
      type: "folder",
      icon: "🌤️",
      description: "Bounty fun is a web app that allows you to create and manage your own bounty board on solana",
      url: "github.com/Arham-Tahir64/bounty-fun",
      tags: ["React", "Rust"],
      lastModified: "4 months ago",
    },
  ];

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const handleDoubleClick = (item: FileItem) => {
    if (item.url) {
      window.open(`https://${item.url}`, '_blank');
    }
  };

  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} title="My Projects">
      <div className="h-full flex flex-col bg-gray-100">
        <div className="bg-gray-200 border-b border-gray-300 p-2 flex items-center space-x-2">
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 text-xs rounded ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            List
          </button>
          <button
            onClick={() => setViewMode("details")}
            className={`px-3 py-1 text-xs rounded ${viewMode === "details" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Details
          </button>
          <div className="flex-1"></div>
          <span className="text-xs text-gray-600">
            {fileItems.length} object(s)
          </span>
        </div>

        <div className="bg-white border-b border-gray-300 p-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Address:</span>
            <span className="text-sm font-mono bg-white border border-gray-300 px-2 py-1 rounded flex-1">
              C:\Portfolio\Projects
            </span>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="flex-1 bg-white">
            {viewMode === "details" ? (
              <div className="w-full">
                <div className="bg-gray-100 border-b border-gray-300 grid grid-cols-12 text-xs font-bold text-gray-700 p-2">
                  <div className="col-span-6">Name</div>
                  <div className="col-span-3">Type</div>
                  <div className="col-span-3">Date Modified</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {fileItems.map((item) => (
                    <div
                      key={item.id}
                      className={`grid grid-cols-12 p-2 hover:bg-blue-50 cursor-pointer ${
                        selectedItem === item.id ? "bg-blue-100" : ""
                      }`}
                      onClick={() => handleItemClick(item.id)}
                      onDoubleClick={() => handleDoubleClick(item)}
                    >
                      <div className="col-span-6 flex items-center space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm text-gray-800">{item.name}</span>
                      </div>
                      <div className="col-span-3 text-xs text-gray-600">
                        {item.type === "folder" ? "File Folder" : "Text Document"}
                      </div>
                      <div className="col-span-3 text-xs text-gray-600">{item.lastModified}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 grid grid-cols-6 gap-4">
                {fileItems.map((item) => (
                  <div
                    key={item.id}
                    className={`text-center p-2 rounded hover:bg-blue-50 cursor-pointer ${
                      selectedItem === item.id ? "bg-blue-100" : ""
                    }`}
                    onClick={() => handleItemClick(item.id)}
                    onDoubleClick={() => handleDoubleClick(item)}
                  >
                    <div className="text-3xl mb-1">{item.icon}</div>
                    <div className="text-xs text-gray-800 truncate">{item.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-64 bg-gray-50 border-l border-gray-300 p-4">
            {selectedItem ? (
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Details</h3>
                {(() => {
                  const item = fileItems.find(f => f.id === selectedItem);
                  if (!item) return null;
                  
                  return (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-gray-800">{item.name}</span>
                      </div>
                      
                      {item.description && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Description</div>
                          <div className="text-sm text-gray-700">{item.description}</div>
                        </div>
                      )}
                      
                      {item.url && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">GitHub</div>
                          <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                            {item.url}
                          </div>
                        </div>
                      )}
                      
                      {item.tags && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Technologies</div>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Date Modified</div>
                        <div className="text-sm text-gray-700">{item.lastModified}</div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="text-gray-500 text-sm">
                Select an item to view details
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-200 border-t border-gray-300 p-1 text-xs text-gray-600">
          {selectedItem ? `Selected: ${fileItems.find(f => f.id === selectedItem)?.name}` : "Ready"}
        </div>
      </div>
    </Window>
  );
} 