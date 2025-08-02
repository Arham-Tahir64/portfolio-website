interface GitHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GitHub({ isOpen, onClose }: GitHubProps) {
  if (!isOpen) return null;

  const handleGitHubClick = () => {
    window.open('https://github.com/Arham-Tahir64', '_blank');
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
      <div className="rounded-lg bg-white/10 backdrop-blur-md p-8 border border-white/20 max-w-md">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">GitHub Profile</h2>
            <p className="text-sm text-gray-200">
              Check out my projects and contributions on GitHub!
            </p>
          </div>

          <div className="text-center p-4 bg-white/10 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-300">GitHub Profile</h3>
            <p className="text-xl font-mono text-white">github.com/arhamtahir</p>
          </div>

          <div className="text-center">
            <button
              onClick={handleGitHubClick}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 mx-auto text-lg"
            >
              <span>Open GitHub</span>
            </button>
            <p className="text-xs text-gray-300 mt-3">
              Opens in a new tab
            </p>
          </div>
        </div>
        <button className="mt-6 underline hover:text-blue-300 transition-colors" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
} 