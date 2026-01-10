// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="
        flex items-center justify-center w-10 h-10 rounded-lg
        bg-surface border border-border-light
        hover:bg-slate-200 dark:hover:bg-surface-dark
        active:scale-90 transition-all duration-200
        focus:outline-none
      "
    >
      {/* Show Sun icon for light theme, Moon icon for dark theme */}
      {theme === 'dark' ? (
        <img
          src="/Sun_fill.svg"
          alt="Sun Icon"
          className="w-6 h-6 select-none transition-transform duration-300"
        />
      ) : (
        <img
          src="/Moon_fill.svg"
          alt="Moon Icon"
          className="w-6 h-6 select-none transition-transform duration-300"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
