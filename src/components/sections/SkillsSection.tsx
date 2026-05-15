'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'system' | 'other';
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'language' },
  { name: 'C#', level: 85, category: 'language' },
  { name: 'JavaScript', level: 88, category: 'language' },
  { name: 'React.js', level: 85, category: 'framework' },
  { name: 'Node.js', level: 80, category: 'framework' },
  { name: 'Embedded Systems', level: 85, category: 'system' },
  { name: 'AI & ML', level: 82, category: 'other' },
  { name: 'Problem Solving', level: 92, category: 'other' },
  { name: 'Web Development', level: 88, category: 'framework' },
  { name: 'IoT', level: 80, category: 'system' },
];

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbitRadius, setOrbitRadius] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setOrbitRadius(Math.min(150, width / 6));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-6 bg-dark-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills Orbital System</h2>
          <p className="text-gray-400 mt-4">Advanced capabilities & expertise</p>
        </motion.div>

        {/* Orbital Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center"
        >
          {/* Central Core */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-32 h-32 rounded-full border-2 border-cyan-neon/30 flex items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full border-2 border-purple-neon/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-cyan-neon font-mono text-sm">AI</p>
                <p className="text-purple-neon font-mono text-xs">Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  x,
                  y,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  scale: { duration: 0.5, delay: index * 0.05 },
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: -index * 0.2,
                  },
                  y: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: -index * 0.2,
                  },
                }}
                className="absolute"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-20 h-20 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                    skill.category === 'language'
                      ? 'bg-cyan-neon/10 border-2 border-cyan-neon/50 hover:border-cyan-neon'
                      : skill.category === 'framework'
                      ? 'bg-purple-neon/10 border-2 border-purple-neon/50 hover:border-purple-neon'
                      : 'bg-blue-500/10 border-2 border-blue-500/50 hover:border-blue-500'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs font-mono font-bold">{skill.name}</p>
                    <p className="text-xs text-gray-400">{skill.level}%</p>
                  </div>

                  {/* Skill Level Ring */}
                  <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.3))' }}>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${(skill.level / 100) * 2 * Math.PI * 45 * 0.45}px ${2 * Math.PI * 45 * 0.45}px`}
                      opacity="0.7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbit Lines */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={`orbit-${ring}`}
              className="absolute rounded-full border border-cyan-neon/10"
              style={{
                width: orbitRadius * 2 * ring,
                height: orbitRadius * 2 * ring,
              }}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 30 + ring * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded border-2 border-cyan-neon"></div>
            <span className="text-gray-400 text-sm">Languages</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded border-2 border-purple-neon"></div>
            <span className="text-gray-400 text-sm">Frameworks</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded border-2 border-blue-500"></div>
            <span className="text-gray-400 text-sm">Systems & Other</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
