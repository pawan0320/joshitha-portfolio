'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  status: 'active' | 'archived' | 'planned';
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Smart Assistant',
    description: 'Intelligent voice-controlled assistant powered by NLP and machine learning algorithms.',
    tech: ['Python', 'TensorFlow', 'React.js', 'Node.js'],
    features: ['Voice Recognition', 'Natural Language Processing', 'Real-time Response', 'Learning Capability'],
    github: '#',
    live: '#',
    status: 'active',
  },
  {
    id: 2,
    title: 'IoT Home Automation',
    description: 'Smart home system with real-time monitoring and automated control of devices.',
    tech: ['Arduino', 'Python', 'React', 'Firebase'],
    features: ['Device Control', 'Energy Monitoring', 'Automation Rules', 'Mobile App'],
    github: '#',
    live: '#',
    status: 'active',
  },
  {
    id: 3,
    title: 'Gesture Controlled Device',
    description: 'Hand gesture recognition system for contactless device interaction.',
    tech: ['OpenCV', 'Python', 'TensorFlow', 'Embedded Systems'],
    features: ['Real-time Detection', '15+ Gestures', 'Accuracy 95%+', 'Low Latency'],
    github: '#',
    live: '#',
    status: 'archived',
  },
  {
    id: 4,
    title: 'Face Recognition System',
    description: 'Advanced facial recognition system for security and authentication.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'Flask'],
    features: ['Face Detection', '99% Accuracy', 'Real-time Processing', 'Database Integration'],
    github: '#',
    live: '#',
    status: 'active',
  },
  {
    id: 5,
    title: 'AI Chatbot Platform',
    description: 'Multi-purpose conversational AI with context awareness and personalization.',
    tech: ['Python', 'NLP', 'React.js', 'API Integration'],
    features: ['Context Awareness', 'Multi-language', 'Integration Ready', 'Analytics'],
    github: '#',
    live: '#',
    status: 'active',
  },
  {
    id: 6,
    title: 'Smart Electronics Dashboard',
    description: 'Real-time monitoring dashboard for IoT sensors and electronic devices.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    features: ['Live Analytics', 'Data Visualization', 'Alerts', 'Export Reports'],
    github: '#',
    live: '#',
    status: 'active',
  },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'archived' | 'planned'>('all');

  const filteredProjects = projects.filter(
    (p) => selectedFilter === 'all' || p.status === selectedFilter
  );

  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-400 mt-4">Innovative solutions showcasing technical expertise</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {(['all', 'active', 'archived', 'planned'] as const).map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-lg font-mono text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-cyan-neon text-black'
                  : 'bg-transparent border border-cyan-neon/50 text-cyan-neon hover:border-cyan-neon'
              }`}
            >
              {filter.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={isHovered ? { rotateX: 5, rotateY: 5 } : { rotateX: 0, rotateY: 0 }}
        className="holographic rounded-lg overflow-hidden p-6 h-full flex flex-col cursor-pointer"
        style={{
          perspective: '1000px',
        }}
      >
        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono ${
              project.status === 'active'
                ? 'bg-cyan-neon/20 text-cyan-neon'
                : project.status === 'archived'
                ? 'bg-purple-neon/20 text-purple-neon'
                : 'bg-blue-500/20 text-blue-400'
            }`}
          >
            {project.status.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-cyan-neon mb-3 font-mono">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">KEY FEATURES:</p>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-cyan-neon/10 text-cyan-neon rounded">
                • {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">TECH STACK:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 border border-purple-neon/50 text-purple-neon rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-cyan-neon/20">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={project.github}
            className="flex-1 text-center py-2 bg-cyan-neon/10 hover:bg-cyan-neon hover:text-black text-cyan-neon rounded transition-all font-mono text-xs"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={project.live}
            className="flex-1 text-center py-2 border border-purple-neon/50 text-purple-neon hover:bg-purple-neon hover:text-white rounded transition-all font-mono text-xs"
          >
            Live
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
