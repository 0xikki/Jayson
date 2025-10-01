'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-live="polite"
      title={`Currently ${theme} mode. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode.`}
    >
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" aria-hidden="true" />
      )}
    </button>
  );
}
