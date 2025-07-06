
import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4 text-yellow-500" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-600"
      />
      <Moon className="w-4 h-4 text-blue-500" />
    </div>
  );
};

export default ThemeToggle;
