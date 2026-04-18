'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Send, Terminal } from 'lucide-react';

const GithubSVG = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log('Transmitting message:', data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('MESSAGE TRANSMITTED SUCCESSFULLY. SYSTEM STANDING BY.');
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <p className="text-accent-orange font-share-tech-mono text-sm tracking-widest mb-2 uppercase">
                {"// CONNECT: UPLINK_PATH"}
              </p>
              <h2 className="text-4xl font-orbitron font-bold mb-6">INITIATE <span className="text-accent-orange">COMMS</span></h2>
              <p className="text-gray-400 font-share-tech-mono leading-relaxed mb-8">
                Ready for deployment on your next project. 
                Satellite communication protocols are active. 
                Signal strength optimal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded border border-accent-orange/30 flex items-center justify-center group-hover:bg-accent-orange/10 transition-colors">
                  <Mail size={20} className="text-accent-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">Primary Terminal</p>
                  <a href="mailto:justsaysatyam@gmail.com" className="text-white hover:text-accent-orange transition-colors font-share-tech-mono">
                    justsaysatyam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded border border-accent-orange/30 flex items-center justify-center group-hover:bg-accent-orange/10 transition-colors">
                  <div className="text-accent-orange">
                    <GithubSVG />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">Source Code Archive</p>
                  <a href="https://github.com/satya-kumar-jha" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-orange transition-colors font-share-tech-mono">
                    github.com/satyam-kumar-jha
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-zinc-800 bg-zinc-900/30 rounded-sm">
               <div className="flex items-center gap-2 mb-2 text-accent-orange opacity-60">
                 <Terminal size={14} />
                 <span className="text-[10px] font-mono tracking-widest">SYSTEM_STATUS.SH</span>
               </div>
               <div className="font-share-tech-mono text-xs text-gray-500 space-y-1">
                 <p className="text-green-500/60">&gt; ENCRYPTION: AES-256-GCM [ACTIVE]</p>
                 <p>&gt; LATENCY: 12ms</p>
                 <p>&gt; LOCATION: PATNA, INDIA (GMT+5:30)</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent-orange/5 blur-3xl rounded-full opacity-20 pointer-events-none" />
            <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6 bg-background/40 backdrop-blur-md p-8 border border-zinc-800 rounded">
              <div className="space-y-2">
                <label className="text-xs font-orbitron tracking-widest text-gray-400 uppercase">Input.Name()</label>
                <input
                  {...register('name', { required: true })}
                  suppressHydrationWarning
                  className="w-full bg-black border border-zinc-700 p-3 text-white font-share-tech-mono focus:border-accent-orange outline-none transition-colors"
                  placeholder="IDENTIFY YOURSELF..."
                />
                {errors.name && <span className="text-[10px] text-accent-orange uppercase">Required Field</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-orbitron tracking-widest text-gray-400 uppercase">Input.Email()</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  suppressHydrationWarning
                  className="w-full bg-black border border-zinc-700 p-3 text-white font-share-tech-mono focus:border-accent-orange outline-none transition-colors"
                  placeholder="RETURN_ADDRESS@NETWORK.COM"
                />
                {errors.email && <span className="text-[10px] text-accent-orange uppercase">Valid Email Required</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-orbitron tracking-widest text-gray-400 uppercase">Input.Message()</label>
                <textarea
                  {...register('message', { required: true })}
                  suppressHydrationWarning
                  rows={5}
                  className="w-full bg-black border border-zinc-700 p-3 text-white font-share-tech-mono focus:border-accent-orange outline-none transition-colors resize-none"
                  placeholder="ENTER DATA STREAM..."
                />
                {errors.message && <span className="text-[10px] text-accent-orange uppercase">Message Payload Required</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning
                className="w-full py-4 bg-transparent border border-accent-orange text-accent-orange font-orbitron tracking-[0.3em] hover:bg-accent-orange/10 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>TRANSMIT MESSAGE</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
