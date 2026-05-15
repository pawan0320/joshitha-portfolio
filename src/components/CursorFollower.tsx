'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        className="fixed w-8 h-8 border-2 border-cyan-neon rounded-full pointer-events-none z-50 mix-blend-screen"
      />

      {/* Trailing Glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
        className="fixed w-4 h-4 bg-cyan-neon rounded-full pointer-events-none z-40 blur-md"
      />
    </>
  );
}
