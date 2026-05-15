'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  certificateUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Python And Django Framework For Beginners',
    issuer: 'Udemy',
    date: '2023',
    description: 'Complete guide to Python programming and Django web framework development.',
    skills: ['Python', 'Django', 'Web Development', 'Backend Development'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-1ba496e2-5616-417d-a51e-805473de5304/',
  },
  {
    id: 2,
    title: 'Complete MS Office and Web Design Development',
    issuer: 'Professional Institute',
    date: '2022',
    description: 'Comprehensive course covering MS Office suite and modern web design principles.',
    skills: ['Web Design', 'UI/UX', 'HTML/CSS', 'Office Suite'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-34e01ffc-b1cb-41ee-bc30-a0b6c39f8ce9/',
  },
  {
    id: 3,
    title: 'ChatGPT Masterclass: AI & Prompt Engineering',
    issuer: 'Tech Academy',
    date: '2024',
    description: 'Advanced training in AI models, prompt engineering, and practical AI applications.',
    skills: ['AI/ML', 'Prompt Engineering', 'Natural Language', 'AI Applications'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-4591ef7e-c951-4fc9-8144-f2d96493d64b/',
  },
  {
    id: 4,
    title: 'Programming Through C',
    issuer: 'CodeTantra',
    date: '2024',
    description: 'Foundational programming course covering C language concepts and problem solving.',
    skills: ['C Programming', 'Problem Solving', 'Programming Fundamentals'],
    certificateUrl: 'https://vrsiddhartha.codetantra.com/cert/certificate.jsp?certId=CT671-uQZ2C5P-c0J',
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-dark-black overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="text-gray-400 mt-4">Professional qualifications and verified expertise</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-dark rounded-lg p-6 h-full border border-cyan-neon/30 hover:border-cyan-neon/60 transition-all relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 to-purple-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                  >
                    <FaCheck aria-hidden="true" className="text-lg" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-cyan-neon mb-2 font-mono line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="mb-4">
                    <p className="text-purple-neon text-sm font-mono">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-cyan-neon/10 text-cyan-neon rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verify Button */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.open(cert.certificateUrl, '_blank', 'noopener,noreferrer')}
                    className="mt-6 w-full py-2 border border-purple-neon/50 text-purple-neon hover:bg-purple-neon hover:text-white rounded transition-all font-mono text-xs"
                  >
                    Verify Credential
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
