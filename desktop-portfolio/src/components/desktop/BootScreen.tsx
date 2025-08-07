import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const timeout = setTimeout(() => {
      onComplete();
      clearInterval(interval);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isLoggedIn, onComplete]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black font-mono text-2xl text-green-400">
        <div className="text-center">
          <h1 className="text-4xl mb-8">Desktop Portfolio</h1>
          <button
            onClick={handleLogin}
            className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors duration-200"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black font-mono text-2xl text-green-400">
      <p>Booting Desktop Portfolio{dots}</p>
    </div>
  );
} 