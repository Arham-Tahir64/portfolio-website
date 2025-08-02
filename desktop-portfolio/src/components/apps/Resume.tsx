import { useState, useEffect } from "react";

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Resume({ isOpen, onClose }: ResumeProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
      <div className="rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/20 w-[90vw] h-[85vh] flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Resume - Arham Tahir</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 bg-white rounded overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Arham Tahir Resume"
            style={{ border: 'none' }}
          />
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-300">
          <p>If the PDF doesn't display properly, you can download it:</p>
          <a 
            href="/resume.pdf" 
            download
            className="text-blue-300 hover:text-blue-200 underline mt-1 inline-block"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
} 