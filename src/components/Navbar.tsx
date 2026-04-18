'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// For simplicity, I'll use simple anchor links for now and maybe GSAP for smooth scroll later.

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'MISSION', href: '#projects' },
  { name: 'EXP', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-accent-teal/30 py-3 shadow-[0_0_20px_rgba(0,245,255,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent-teal font-orbitron text-xl font-bold tracking-tighter"
        >
          SKJ<span className="text-white">.OS</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-share-tech-mono hover:text-accent-teal transition-colors tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-teal transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden text-accent-teal"
        >
          {/* Mobile menu trigger could go here */}
          <div className="w-6 h-1 bg-accent-teal mb-1" />
          <div className="w-6 h-1 bg-accent-teal" />
        </motion.div>
      </div>
    </nav>
  );
}
