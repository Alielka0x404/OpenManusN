
'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-1">
      <Button 
        variant={theme === 'light' ? "default" : "outline"} 
        size="icon" 
        className="h-7 w-7" 
        onClick={() => setTheme('light')}
      >
        <Sun className="h-[0.9rem] w-[0.9rem]" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button 
        variant={theme === 'dark' ? "default" : "outline"} 
        size="icon" 
        className="h-7 w-7" 
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-[0.9rem] w-[0.9rem]" />
        <span className="sr-only">Dark mode</span>
      </Button>
      <Button 
        variant={theme === 'system' ? "default" : "outline"} 
        size="icon" 
        className="h-7 w-7" 
        onClick={() => setTheme('system')}
      >
        <Monitor className="h-[0.9rem] w-[0.9rem]" />
        <span className="sr-only">System mode</span>
      </Button>
    </div>
  );
}
