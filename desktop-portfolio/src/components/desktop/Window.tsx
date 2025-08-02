import React, { useState } from "react";

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Window({ isOpen, onClose, title, children }: WindowProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setIsMinimized(false);
    setIsFullscreen(false);
    onClose();
  };

  if (isMinimized) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isFullscreen ? '' : 'p-8'}`}>
      <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl ${isFullscreen ? 'h-full w-full' : 'max-w-4xl max-h-[80vh]'}`}>
        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"
                title="Close"
              />
              <button
                onClick={handleMinimize}
                className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
                title="Minimize"
              />
              <button
                onClick={handleFullscreen}
                className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              />
            </div>
            
            <h2 className="text-white font-semibold ml-4">{title}</h2>
          </div>
        </div>

        <div className={`overflow-auto ${isFullscreen ? 'h-full' : 'max-h-[calc(80vh-80px)]'}`}>
          {children}
        </div>
      </div>
    </div>
  );
} 