'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  id: number;
  year: string;
  type: 'education' | 'certification' | 'milestone' | 'project';
  title: string;
  description: string;
  details?: string[];
}

const events: TimelineEvent[] = [
  {
    id: 1,
    year: '2020',
    type: 'education',
    title: 'BTech Admission',
    description: 'Started Electronics and Communication Engineering',
    details: ['VRSEC Vijayawada', 'Foundation Courses', 'Lab Work'],
  },
  {
    id: 2,
    year: '2021',
    type: 'certification',
    title: 'MS Office & Web Design Certification',
    description: 'Completed professional web design course',
    details: ['HTML/CSS Mastery', 'Responsive Design', 'UI Principles'],
  },
  {
    id: 3,
    year: '2022',
    type: 'project',
    title: 'IoT Home Automation System',
    description: 'Developed smart home automation solution',
    details: ['Arduino Integration', 'Firebase Backend', 'Mobile App'],
  },
  {
    id: 4,
    year: '2023',
    type: 'certification',
    title: 'Python & Django Mastery',
    description: 'Advanced backend development training',
    details: ['Django Framework', 'Database Design', 'API Development'],
  },
  {
    id: 5,
    year: '2023',
    type: 'project',
    title: 'AI Face Recognition System',
    description: 'Built advanced facial recognition AI',
    details: ['OpenCV', 'Deep Learning', '99% Accuracy'],
  },
  {
    id: 6,
    year: '2024',
    type: 'certification',
    title: 'ChatGPT & AI Prompt Engineering',
    description: 'Expertise in AI models and prompt optimization',
    details: ['LLM Understanding', 'Prompt Engineering', 'AI Applications'],
  },
];

export default function TimelineSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Journey Timeline</h2>
          <p className="text-gray-400 mt-4">Education, achievements, and milestones</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-neon via-purple-neon to-cyan-neon opacity-30"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-dark rounded-lg p-6 border border-cyan-neon/30 hover:border-cyan-neon/60 transition-all"
                  >
                    {/* Type Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-3 ${
                        event.type === 'education'
                          ? 'bg-cyan-neon/20 text-cyan-neon'
                          : event.type === 'certification'
                          ? 'bg-purple-neon/20 text-purple-neon'
                          : event.type === 'project'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {event.type.toUpperCase()}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-cyan-neon mb-2 font-mono">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-3">{event.description}</p>

                    {/* Details */}
                    {event.details && (
                      <div className="flex flex-wrap gap-2">
                        {event.details.map((detail, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-cyan-neon/10 text-cyan-neon rounded">
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Center Dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-neon border-2 border-dark-black shadow-lg shadow-cyan-neon"></div>
                </motion.div>

                {/* Year */}
                <div className="hidden md:flex w-1/12 justify-center">
                  <motion.span
                    className="text-2xl font-bold text-transparent bg-gradient-neon bg-clip-text"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {event.year}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
