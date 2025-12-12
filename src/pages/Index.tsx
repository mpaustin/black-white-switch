import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`flex min-h-screen items-center justify-center transition-colors duration-500 ${isDark ? "dark-mode" : ""}`}>
      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle between black and white"
      />
    </div>
  );
};

export default Index;
