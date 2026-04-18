'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Django', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'GitHub', level: 90 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Bio Panel */}
          <div className="relative group">
            {/* Holographic Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal/50 to-accent-purple/50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-background/60 backdrop-blur-xl border border-accent-teal/30 p-8 rounded-lg shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-accent-teal rounded-full animate-pulse" />
                <h2 className="text-2xl font-orbitron text-accent-teal tracking-wider">BIO_DATA.LOG</h2>
              </div>
              
              <div className="space-y-4 font-share-tech-mono text-gray-300 leading-relaxed">
                <p>
                  <span className="text-accent-teal">&gt; INITIALIZING...</span>
                </p>
                <p>
                  I am Satyam Kumar Jha, a highly motivated Python/Django Backend Developer 
                  and Full-Stack Developer originating from Bihar, India.
                </p>
                <p>
                  My mission is to architect scalable, high-performance backends and 
                  intuitive user interfaces that push the boundaries of digital experiences.
                </p>
                <p>
                  Specializing in the Python ecosystem with deep expertise in Django, 
                  I bridge the gap between complex server-side logic and seamless frontend integration.
                </p>
                <div className="pt-4 flex gap-4 text-xs opacity-50">
                  <span>[LOCATION: BIHAR, IN]</span>
                  <span>[STATUS: AVAILABLE_FOR_MISSIONS]</span>
                </div>
              </div>
            </div>

            {/* Scanning Line Effect */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-[1px] bg-accent-teal/50 z-20 pointer-events-none"
            />
          </div>

          {/* Skills Panel */}
          <div className="space-y-6">
            <h3 className="text-xl font-orbitron text-accent-purple mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent-purple" />
              TECH_STACK.EXE
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between mb-1 font-share-tech-mono text-sm">
                    <span className="text-gray-400 group-hover:text-accent-teal transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-accent-teal opacity-70">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-accent-teal to-accent-purple shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
