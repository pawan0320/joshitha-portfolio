'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative py-20 md:py-32 px-6 bg-dark-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Communication Center</h2>
          <p className="text-gray-400 mt-4">Let&apos;s connect and create something extraordinary</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {[
              {
                Icon: FaEnvelope,
                label: 'Email',
                value: 'dantamjoshitha@gmail.com',
                link: 'mailto:dantamjoshitha@gmail.com',
              },
              {
                Icon: FaLinkedinIn,
                label: 'LinkedIn',
                value: 'Joshitha Dantam',
                link: 'https://linkedin.com',
              },
              {
                Icon: FaGithub,
                label: 'GitHub',
                value: '@joshithadantam',
                link: 'https://github.com',
              },
              {
                Icon: FaPhoneAlt,
                label: 'Phone',
                value: '+91 9292486718',
                link: 'tel:+919292486718',
              },
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="block glass-dark p-6 rounded-lg border border-cyan-neon/30 hover:border-cyan-neon/60 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-cyan-neon">
                    <contact.Icon aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm group-hover:text-cyan-neon transition-colors font-mono">
                      {contact.label}
                    </p>
                    <p className="text-cyan-neon font-mono font-bold">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="holographic rounded-lg p-8 space-y-4">
              {/* Form Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-cyan-neon font-mono mb-2">Send Message</h3>
                <div className="h-1 w-16 bg-gradient-neon"></div>
              </div>

              {/* Name Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-cyan-neon/50 focus:border-cyan-neon text-white placeholder-gray-600 py-3 px-2 outline-none transition-all font-mono"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-cyan-neon/50 focus:border-cyan-neon text-white placeholder-gray-600 py-3 px-2 outline-none transition-all font-mono"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-cyan-neon/50 focus:border-cyan-neon text-white placeholder-gray-600 py-3 px-2 outline-none transition-all font-mono"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-2 border-cyan-neon/50 focus:border-cyan-neon text-white placeholder-gray-600 py-3 px-4 outline-none transition-all font-mono rounded"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00d9ff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitted}
                className="w-full py-3 bg-gradient-neon text-black font-bold font-mono rounded transition-all disabled:opacity-50 mt-6"
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <FaCheck aria-hidden="true" />
                    Message Sent Successfully
                  </motion.span>
                ) : (
                  'SEND MESSAGE'
                )}
              </motion.button>

              {/* Success Animation */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-cyan-neon text-sm font-mono"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Also available on</p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'LinkedIn', url: '#', Icon: FaLinkedinIn },
              { name: 'GitHub', url: '#', Icon: FaGithub },
              { name: 'Twitter', url: '#', Icon: FaTwitter },
              { name: 'Email', url: 'mailto:dantamjoshitha@gmail.com', Icon: SiGmail },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-cyan-neon/50 hover:border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10 transition-all text-xl"
              >
                <social.Icon aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
