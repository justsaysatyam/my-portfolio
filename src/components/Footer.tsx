'use client';

import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-background/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-share-tech-mono text-sm tracking-[0.2em] text-gray-500">
          <span className="text-accent-teal animate-pulse mr-2">●</span>
          SYSTEM ONLINE · SATYAM KUMAR JHA · {year}
        </div>

        <div className="flex gap-8 font-share-tech-mono text-[10px] text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-accent-teal transition-colors underline-offset-4 hover:underline">Latency: 12ms</a>
          <a href="#" className="hover:text-accent-teal transition-colors underline-offset-4 hover:underline">Hops: 3</a>
          <a href="#" className="hover:text-accent-teal transition-colors underline-offset-4 hover:underline">Build: v2.0.25</a>
        </div>

        <div className="text-[10px] font-mono text-zinc-700">
          PATNA // BIHAR // INDIA
        </div>
      </div>
    </footer>
  );
}
