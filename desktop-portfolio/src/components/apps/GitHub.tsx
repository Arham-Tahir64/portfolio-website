import Window from "../desktop/Window";

interface GitHubProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onFocus?: () => void;
  isFocused?: boolean;
  zIndex?: number;
}

export default function GitHub({ isOpen, onClose, onMinimize, onFullscreenChange, onFocus, isFocused, zIndex }: GitHubProps) {
  const handleGitHubClick = () => {
    window.open('https://github.com/Arham-Tahir64', '_blank');
  };

  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} onFocus={onFocus} isFocused={isFocused} zIndex={zIndex} title="GitHub Profile">
      <div className="p-6 text-white">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">🐙 GitHub Profile</h1>
            <p className="text-lg text-gray-200">
              Check out my projects and contributions on GitHub!
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-green-300">GitHub Profile</h3>
            <p className="text-2xl font-mono text-white mb-4">github.com/Arham-Tahir64</p>
          </div>

          <div className="text-center">
            <button
              onClick={handleGitHubClick}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 mx-auto text-lg"
              aria-label="Open GitHub profile in new tab"
            >
              <span>🐙</span>
              <span>Open GitHub</span>
            </button>
            <p className="text-xs text-gray-300 mt-3">
              Opens in a new tab
            </p>
          </div>
        </div>
      </div>
    </Window>
  );
} 