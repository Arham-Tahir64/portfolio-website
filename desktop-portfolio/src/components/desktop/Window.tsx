import React, { useState, useRef, useEffect } from "react";

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Window({ isOpen, onClose, onMinimize, title, children }: WindowProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMinimize = () => {
    onMinimize();
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setIsFullscreen(false);
    setPosition({ x: 0, y: 0 });
    onClose();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isFullscreen) return;
    
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isFullscreen) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Keep window within screen bounds
    const maxX = window.innerWidth - (windowRef.current?.offsetWidth || 0);
    const maxY = window.innerHeight - (windowRef.current?.offsetHeight || 0);

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 ${isFullscreen ? '' : 'p-8'}`}
      style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
    >
      <div 
        ref={windowRef}
        className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl ${
          isFullscreen ? 'h-full w-full' : 'max-w-4xl max-h-[80vh]'
        } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          transform: isFullscreen ? 'none' : `translate(${position.x}px, ${position.y}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        <div 
          className="flex items-center justify-between p-4 border-b border-white/20 bg-white/5 cursor-grab"
          onMouseDown={handleMouseDown}
        >
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
            
            <h2 className="text-white font-semibold ml-4 select-none">{title}</h2>
          </div>
        </div>

        <div className={`overflow-auto ${isFullscreen ? 'h-full' : 'max-h-[calc(80vh-80px)]'}`}>
          {children}
        </div>
      </div>
    </div>
  );
} 