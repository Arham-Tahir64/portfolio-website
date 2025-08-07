import Window from "../desktop/Window";

interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onFocus?: () => void;
  isFocused?: boolean;
  zIndex?: number;
}

export default function AboutMe({ isOpen, onClose, onMinimize, onFullscreenChange, onFocus, isFocused, zIndex }: AboutMeProps) {
  return (
    <Window isOpen={isOpen} onClose={onClose} onMinimize={onMinimize} onFullscreenChange={onFullscreenChange} onFocus={onFocus} isFocused={isFocused} zIndex={zIndex} title="About Me">
      <div className="p-6 text-white">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">👋 Hi, I'm Arham Tahir</h1>
            <p className="text-lg text-gray-200">
              A passionate software developer and computer science student
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300">Languages</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>JavaScript/TypeScript</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>Python</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>Java</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>C++</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>Rust</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>HTML/CSS</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>SQL</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-300">Frameworks & Tools</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>React/Next.js</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>Node.js/Express</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>Git/GitHub</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>Docker</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <p>phpMyAdmin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 space-y-3">
            <p className="text-gray-300">
              I love building innovative solutions and learning new technologies!
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="mailto:arhamtahir64@gmail.com"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Email Arham"
              >
                ✉️ Email Me
              </a>
              <a
                href="https://github.com/Arham-Tahir64"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Open GitHub profile"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
} 