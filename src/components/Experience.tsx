'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Independent Contractor',
    period: '2023 - PRESENT',
    description: 'Developing end-to-end web applications with Django and React. Specialized in e-commerce and management systems.',
    points: ['Architected database schemas for complex B2B platforms', 'Implemented secure payment gateways', 'Optimized backend performance for high-traffic apps'],
  },
  {
    role: 'Python/Django Developer',
    company: 'Freelance Projects',
    period: '2022 - 2023',
    description: 'Focused on backend automation and REST API development for various technical startups.',
    points: ['Built automated trading scripts', 'Integrated third-party APIs for real-time data processing', 'Maintained and upgraded legacy Django codebases'],
  },
  {
    role: 'Full Stack Intern',
    company: 'Tech Solutions',
    period: '2021 - 2022',
    description: 'Assisted in building responsive frontend layouts and improving existing backend architectures.',
    points: ['Collaborated on UI/UX redesigns using Tailwind CSS', 'Debugged complex backend issues in production environments'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <p className="text-accent-teal font-share-tech-mono text-sm tracking-widest mb-2 uppercase">
            {"// STATUS: EXPERIENCE_LEVEL"}
          </p>
          <h2 className="text-4xl font-orbitron font-bold">TIMELINE.<span className="text-accent-purple">MAP</span></h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0 relative pl-8"
            >
              {/* Timeline Marker */}
              <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-accent-purple rounded-full shadow-[0_0_10px_#8b5cf6]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-accent-teal font-share-tech-mono text-sm">
                    {exp.company}
                  </p>
                </div>
                <div className="bg-accent-purple/10 border border-accent-purple/30 px-3 py-1 rounded text-accent-purple font-share-tech-mono text-xs w-fit">
                  {exp.period}
                </div>
              </div>

              <div className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-sm hover:border-accent-purple/30 transition-colors group">
                <p className="text-gray-400 font-share-tech-mono text-sm mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-gray-500 font-share-tech-mono">
                      <div className="w-1 h-1 bg-accent-purple/50 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                   <TerminalSquare size={12} className="text-accent-purple" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline helper icon since I need a small logo
function TerminalSquare({ size = 24, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    </svg>
  );
}
