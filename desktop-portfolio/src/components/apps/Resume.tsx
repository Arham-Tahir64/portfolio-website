import Window from "../desktop/Window";

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Resume({ isOpen, onClose }: ResumeProps) {
  return (
    <Window isOpen={isOpen} onClose={onClose} title="Resume">
      <div className="h-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-0"
          title="Resume PDF"
        />
      </div>
    </Window>
  );
} 