import Window from "../desktop/Window";

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onFocus?: () => void;
  isFocused?: boolean;
  zIndex?: number;
}

export default function Resume({ isOpen, onClose, onMinimize, onFullscreenChange, onFocus, isFocused, zIndex }: ResumeProps) {
  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} onFocus={onFocus} isFocused={isFocused} zIndex={zIndex} title="Resume">
      <div className="h-full flex flex-col">
        <div className="p-2 bg-white/10 border-b border-white/20 flex items-center justify-end gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Open in new tab
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Download
          </a>
        </div>
        <div className="flex-1">
          <iframe
            src="/resume.pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
        <div className="p-2 text-center text-xs text-gray-200">
          If the PDF doesn't load, use the buttons above.
        </div>
      </div>
    </Window>
  );
} 