'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RESUME_URL } from '@/utils/links';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-navy/80 backdrop-blur-lg border-b border-cyan-neon/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent"
        >
          JD
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                whileHover={{ color: '#00d9ff', textShadow: '0 0 10px #00d9ff' }}
                className="text-gray-300 hover:text-cyan-neon transition cursor-pointer font-mono text-sm"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block btn-neon"
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-neon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark-navy/95 backdrop-blur-lg border-b border-cyan-neon/20"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ color: '#00d9ff' }}
                  className="block text-gray-300 hover:text-cyan-neon transition cursor-pointer font-mono text-sm py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon w-full mt-4"
              onClick={() => setIsMobileOpen(false)}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
