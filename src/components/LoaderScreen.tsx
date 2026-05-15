'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LOADING_SEQUENCE = [
  'Initializing Portfolio System...',
  'Loading Engineering Interface...',
  'Activating 3D Engine...',
  'Rendering Holographic Elements...',
  'Syncing Data Streams...',
  'Welcome to the Future.',
];

const LOADER_PARTICLES = [
  { left: '14%', top: '22%', x: 84, y: -64, duration: 2 },
  { left: '78%', top: '18%', x: -92, y: 48, duration: 3 },
  { left: '28%', top: '74%', x: 68, y: 72, duration: 4 },
  { left: '88%', top: '68%', x: -76, y: -58, duration: 5 },
  { left: '52%', top: '42%', x: 42, y: -86, duration: 6 },
];

export default function LoaderScreen() {
  const [loadingText, setLoadingText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const textInterval = setInterval(() => {
      if (textIndex < LOADING_SEQUENCE.length) {
        const currentText = LOADING_SEQUENCE[textIndex];
        if (charIndex < currentText.length) {
          setLoadingText((prev) => prev + currentText[charIndex]);
          charIndex++;
        } else {
          charIndex = 0;
          setLoadingText('');
          textIndex++;
        }
      }
    }, 50);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="loading-screen flex items-center justify-center flex-col gap-8">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        {/* Logo or Core Animation */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-cyan-neon relative flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full border-2 border-purple-neon animate-pulse"></div>
          <div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-cyan-neon border-r-purple-neon animate-spin"></div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-cyan-neon mb-4 font-mono"
          animate={{ textShadow: ['0 0 10px #00d9ff', '0 0 20px #b200ff', '0 0 10px #00d9ff'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {loadingText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-gradient-neon"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        <p className="text-cyan-neon text-sm mt-4">{Math.floor(Math.min(progress, 100))}%</p>
      </motion.div>

      {/* Floating Particles */}
      {LOADER_PARTICLES.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-neon"
          animate={{
            x: [0, particle.x],
            y: [0, particle.y],
            opacity: [1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
