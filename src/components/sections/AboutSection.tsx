'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';

export default function AboutSection() {
  const stats = [
    { label: 'Projects', value: '7+' },
    { label: 'Skills', value: '10+' },
    { label: 'Certifications', value: '4' },
    { label: 'Years Learning', value: '4+' },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <motion.div
            className="h-1 w-20 bg-gradient-neon mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-lg border border-cyan-neon/30"
          >
            <h3 className="text-2xl font-bold text-cyan-neon mb-4 font-mono">Electronics & AI Enthusiast</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              An ambitious Electronics and Communication Engineering student from Velagapudi Ramakrishna Siddhartha Engineering College, 
              passionate about artificial intelligence, embedded systems, and innovative software solutions. 
              I bridge the gap between hardware and software to create intelligent systems.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <FaChevronRight aria-hidden="true" className="text-cyan-neon mt-1 shrink-0" />
                <p className="text-gray-300">BTech in Electronics and Communication Engineering</p>
              </div>
              <div className="flex items-start gap-3">
                <FaChevronRight aria-hidden="true" className="text-purple-neon mt-1 shrink-0" />
                <p className="text-gray-300">Passionate about AI, IoT, and Problem Solving</p>
              </div>
              <div className="flex items-start gap-3">
                <FaChevronRight aria-hidden="true" className="text-cyan-neon mt-1 shrink-0" />
                <p className="text-gray-300">Experience in Embedded Systems & Web Development</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00d9ff' }}
                className="holographic p-6 rounded-lg text-center"
              >
                <motion.p
                  className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-400 text-sm font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
