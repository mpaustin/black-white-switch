import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background transition-colors duration-500">
      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle between black and white"
      />
    </div>
  );
};

export default Index;
