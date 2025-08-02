interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutMe({ isOpen, onClose }: AboutMeProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
      <div className="rounded-lg bg-white/10 backdrop-blur-md p-8 border border-white/20 max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">👋 Hi! I'm a passionate developer</h2>
            <p>
              Hi — I'm <strong>Arham Tahir</strong>, a Computer Science student at the University of
              Calgary who loves turning ideas into polished web apps.
            </p>
            <p>
              I build full-stack projects with <em>React / Next.js, TypeScript, Rust, Docker, and Tailwind</em>,
              and I'm exploring blockchain & Machine Learning projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">💻 Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-300 mb-2">Languages</h4>
                <ul className="space-y-1 text-gray-200">
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• C++</li>
                  <li>• Rust</li>
                  <li>• HTML/CSS</li>
                  <li>• SQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-300 mb-2">Frameworks & Tools</h4>
                <ul className="space-y-1 text-gray-200">
                  <li>• React/Next.js</li>
                  <li>• Node.js/Express</li>
                  <li>• Tailwind CSS</li>
                  <li>• Git/GitHub</li>
                  <li>• Docker</li>
                  <li>• myPHPadmin</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🎯 What I Do</h3>
            <p className="text-sm text-gray-200">
              I specialize in building responsive web applications, creating intuitive user interfaces, 
              and developing scalable backend solutions. I believe in clean code, great UX, and continuous learning.
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