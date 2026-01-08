// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-10 h-10 rounded-lg 
                 bg-surface border border-border-light
                 hover:bg-slate-200 dark:hover:bg-white/20
                 active:scale-90 transition-all duration-200 focus:outline-none"
    >
      {/* Show Sun if theme is Light, Show Moon if theme is Dark */}
      <img 
        src={theme === 'dark' ? '/Sun_fill.svg' : '/Moon_fill.svg'} 
        alt="Theme Icon"
        className="w-6 h-6 select-none transition-transform duration-300 dark:invert" 
      />
    </button>
  );
};

export default ThemeToggle;