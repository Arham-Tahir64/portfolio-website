import { useState } from "react";
import BootScreen from "./components/bootscreen";
import Desktop from "./components/desktop";

export default function App() {
  const [booted, setBooted] = useState(false);
  return booted ? <Desktop /> : <BootScreen onComplete={() => setBooted(true)} />;
}