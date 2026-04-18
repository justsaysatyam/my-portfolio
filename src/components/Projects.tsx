'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    name: 'AI TRADING BOT',
    description: 'High-frequency algorithmic trading bot utilizing technical indicators and sentiment analysis for crypto markets.',
    tech: ['Python', 'Binance API', 'Pandas', 'WebSockets'],
    link: '#',
  },
  {
    name: 'SCHOOL MANAGEMENT SYSTEM',
    description: 'Cloud-based platform for educational institutions handling student records, fees, and administrative workflows.',
    tech: ['Django', 'PostgreSQL', 'React', 'AWS'],
    link: '#',
  },
  {
    name: 'JAY BN POULTRY E-COMMERCE',
    description: 'Specialized B2B marketplace for poultry farm products with real-time inventory tracking and order fulfillment.',
    tech: ['Django', 'Tailwind CSS', 'Alpine.js'],
    link: '#',
  },
  {
    name: 'GOLF CHARITY PLATFORM',
    description: 'Event management and donation system for high-profile charity golf tournaments.',
    tech: ['Next.js', 'Prisma', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    name: 'EMPLOYEE DIRECTORY',
    description: 'Secure organizational directory with hierarchical visualization and performance tracking.',
    tech: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    link: '#',
  },
  {
    name: 'BS SINGH TECH PORTFOLIO',
    description: 'Corporate enterprise portfolio showcasing technological solutions and consultancy services.',
    tech: ['React', 'Framer Motion', 'Three.js'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-teal font-share-tech-mono text-sm tracking-widest mb-2"
          >
            {"// ARCHIVE: MISSION_LOG"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold"
          >
            ACTIVE <span className="text-accent-teal">OPERATIONS</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background/40 backdrop-blur-sm border border-gray-800 p-6 rounded-sm relative group overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-accent-teal/0 group-hover:bg-accent-teal/5 transition-colors duration-500" />
              <div className="absolute inset-0 border border-accent-teal/0 group-hover:border-accent-teal/40 transition-all duration-500 pointer-events-none" />
              
              {/* Scanline Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-teal/20 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-1000 linear pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <Terminal size={24} className="text-accent-teal opacity-50" />
                  <a href={project.link} className="text-gray-500 hover:text-accent-teal transition-colors" title="View Project">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-orbitron font-bold mb-3 tracking-tight group-hover:text-accent-teal transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 font-share-tech-mono text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 border border-gray-700 text-gray-400 font-mono tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid corner decoration */}
              <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-b border-r border-accent-teal" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
