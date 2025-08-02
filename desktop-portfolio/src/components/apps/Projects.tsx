interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Projects({ isOpen, onClose }: ProjectsProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
      <div className="rounded-lg bg-white/10 backdrop-blur-md p-8 border border-white/20 max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">🚀 My Projects</h2>
            <p className="text-sm text-gray-200">
              Here are some of the projects I've been working on. More coming soon!
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-white/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Desktop Portfolio</h3>
              <p className="text-sm text-gray-200 mb-2">
                A desktop-inspired portfolio built with React, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Tailwind</span>
              </div>
            </div>

            <div className="border border-white/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-gray-200">
                I'm working on some exciting new projects. Check back soon!
              </p>
            </div>
          </div>
        </div>
        <button className="mt-6 underline hover:text-blue-300 transition-colors" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
} 