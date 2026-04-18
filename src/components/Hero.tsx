'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import HolographicGlobe from './HolographicGlobe';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Globe Container - Hidden on Mobile */}
      <div className="absolute inset-0 z-0 opacity-60 hidden md:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <HolographicGlobe />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-teal font-share-tech-mono tracking-[0.3em] mb-4 text-sm md:text-base">
            SYSTEM INITIALIZED // USER: ROOT
          </p>
          <h1 className="text-5xl md:text-8xl font-bold font-orbitron mb-6 leading-tight">
            SATYAM <br className="md:hidden" />
            <span className="text-accent-teal glow-teal">KUMAR JHA</span>
          </h1>
          <div className="h-8 mb-12">
            <h2 className="text-lg md:text-2xl text-gray-300">
              <Typewriter text="Python Developer · Django Engineer · Full Stack Builder" delay={1000} />
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-accent-teal text-accent-teal font-orbitron tracking-widest hover:bg-accent-teal/10 transition-all relative group"
            >
              <span className="relative z-10">EXPLORE WORK</span>
              <div className="absolute inset-0 bg-accent-teal/0 group-hover:bg-accent-teal/5 transition-all" />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-teal" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-teal" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-accent-purple text-accent-purple font-orbitron tracking-widest hover:bg-accent-purple/10 transition-all relative group"
            >
              <span className="relative z-10">INITIATE CONTACT</span>
              <div className="absolute inset-0 bg-accent-purple/0 group-hover:bg-accent-purple/5 transition-all" />
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-purple" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-purple" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom HUD Element */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center gap-4 font-share-tech-mono text-xs opacity-40">
          <div className="w-12 h-[1px] bg-accent-teal" />
          <p>COORDINATES: 25.5941° N, 85.1376° E</p>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <div className="flex items-center gap-4 font-share-tech-mono text-xs opacity-40 justify-end">
          <p>STATUS: OPTIMAL</p>
          <div className="w-12 h-[1px] bg-accent-teal" />
        </div>
      </div>
    </section>
  );
}
