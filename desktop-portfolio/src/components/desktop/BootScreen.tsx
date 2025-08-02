import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const timeout = setTimeout(() => {
      onComplete();
      clearInterval(interval);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black font-mono text-2xl text-green-400">
      <p>Booting Desktop Portfolio{dots}</p>
    </div>
  );
} 