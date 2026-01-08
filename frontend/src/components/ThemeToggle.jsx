// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-10 h-10 rounded-xl 
                 bg-slate-100 dark:bg-white/10 
                 hover:bg-slate-200 dark:hover:bg-white/20
                 active:scale-90 transition-all duration-200 focus:outline-none"
    >
      {/* Show Sun if theme is Light, Show Moon if theme is Dark */}
      <img 
        src={theme === 'light' ? '/Sun_fill.svg' : '/Moon_fill.svg'} 
        alt="Theme Icon"
        className="w-6 h-6 select-none transition-transform duration-300 dark:invert" 
      />
    </button>
  );
};

export default ThemeToggle;