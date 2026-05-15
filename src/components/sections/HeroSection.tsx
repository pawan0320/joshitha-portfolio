'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { RESUME_URL } from '@/utils/links';

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-gradient-dark" />,
});

const ROLES = [
  'Electronics Engineer',
  'AI Innovator',
  'Embedded Systems Developer',
  'Future Tech Builder',
  'Problem Solver',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          {/* Name */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono"
            animate={{
              textShadow: ['0 0 20px #00d9ff', '0 0 40px #b200ff', '0 0 20px #00d9ff'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Joshitha Dantam
            </span>
          </motion.h1>

          {/* Role Switcher */}
          <div className="h-12 md:h-16 mb-8">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl text-cyan-neon font-mono tracking-wider"
            >
              &gt; {ROLES[roleIndex]}
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting the future through innovative electronics, AI integration, and cutting-edge software solutions.
            Turning ideas into intelligent systems that push the boundaries of technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00d9ff' }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon"
            >
              Explore Portfolio
            </motion.button>

            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #b200ff' }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon border-purple-neon text-purple-neon"
            >
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-cyan-neon text-cyan-neon hover:bg-cyan-neon hover:text-black transition-all font-mono"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-cyan-neon text-xs font-mono">SCROLL TO EXPLORE</p>
              <svg className="w-6 h-6 text-cyan-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 grid-bg pointer-events-none z-5"></div>
    </section>
  );
}
