import Window from "../desktop/Window";

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export default function Resume({ isOpen, onClose, onMinimize, onFullscreenChange }: ResumeProps) {
  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} title="Resume">
      <div className="h-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-0"
          title="Resume PDF"
        />
      </div>
    </Window>
  );
} 