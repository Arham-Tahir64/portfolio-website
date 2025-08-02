import { useState } from "react";
import BootScreen from "./components/desktop/BootScreen";
import Desktop from "./components/desktop/Desktop";

export default function App() {
  const [booted, setBooted] = useState(false);
  return booted ? <Desktop /> : <BootScreen onComplete={() => setBooted(true)} />;
}