// components/ThemeToggle.tsx
"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleThemeToggle} className="focus:outline-none">
      {theme === "light" ? (
        <Sun className="w-7 h-7 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
