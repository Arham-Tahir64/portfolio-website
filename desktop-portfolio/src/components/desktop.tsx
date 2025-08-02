import { useState } from "react";

export default function Desktop() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: "url('/wallpaper.jpg')" }}
    >
      <button
        className="absolute left-4 top-4 flex flex-col items-center text-sm text-white drop-shadow-lg"
        onClick={() => setShowAlert(true)}
      >
        📁
        <span>My Projects</span>
      </button>

      {showAlert && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
          <div className="rounded bg-gray-800 p-6">
            Coming soon!
            <button className="ml-4 underline" onClick={() => setShowAlert(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}