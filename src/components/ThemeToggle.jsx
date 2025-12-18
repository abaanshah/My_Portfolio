import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = async (e) => {
    const willBeDark = !isDark; // Calculate next state ahead of time

    // 1. Define the update function
    const switchTheme = () => {
      if (willBeDark) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        setIsDark(false);
      }
    };

    // 2. Fallback for browsers without View Transitions
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    // 3. Get click coordinates
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 4. Start the transition
    const transition = document.startViewTransition(async () => {
      switchTheme();
    });

    await transition.ready;

    // 5. ALWAYS animate the NEW view growing (simple & blink-free)
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        // Always animate the new view (the one we just switched to)
        // This ensures it sits ON TOP and grows, covering the old one.
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors border border-gray-200 dark:border-white/10 group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-full h-full text-yellow-500 transform transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isDark ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`} 
        />
        <Moon 
          className={`absolute inset-0 w-full h-full text-blue-400 transform transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;