'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Reticle */}
      <motion.div
        className="absolute w-8 h-8 -ml-4 -mt-4 border border-accent-teal/50 rounded-full"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="absolute top-1/2 left-0 w-2 h-[1px] bg-accent-teal shadow-[0_0_5px_#00f5ff]" />
        <div className="absolute top-1/2 right-0 w-2 h-[1px] bg-accent-teal shadow-[0_0_5px_#00f5ff]" />
        <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-accent-teal shadow-[0_0_5px_#00f5ff]" />
        <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-accent-teal shadow-[0_0_5px_#00f5ff]" />
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="absolute w-1 h-1 -ml-0.5 -mt-0.5 bg-accent-teal rounded-full shadow-[0_0_10px_#00f5ff]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isPointer ? 2 : 1 }}
      />
      
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute w-12 h-12 -ml-6 -mt-6 border border-accent-purple/20 rounded-full blur-[2px]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isPointer ? 1.5 : 1 }}
      />
    </div>
  );
}
