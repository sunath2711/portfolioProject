"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, MessageCircle, Shield } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] pt-32 pb-0 px-6 scroll-mt-32 overflow-hidden">
      <div className="mx-auto max-w-4xl w-full">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs tracking-[1em] text-cyan-400 uppercase font-mono mb-4"
          >
            SIGNAL_Z01X_WALL-E
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase"
          >
            Establish Contact
          </motion.h3>
        </div>

        {/* CONTACT PANE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-8 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* HUD Decorative Elements */}
          <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-cyan-500/50" />
          <div className="absolute top-0 right-0 h-2 w-32 bg-gradient-to-l from-cyan-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 h-2 w-32 bg-gradient-to-r from-cyan-500/20 to-transparent" />

          <form className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Input */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Shield size={12} /> Subject_Identity
                </label>
                <input 
                  type="text" 
                  placeholder="ENTER NAME" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans" 
                />
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                  Return_Coordinate
                </label>
                <input 
                  type="email" 
                  placeholder="EMAIL_ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans" 
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                Encrypted_Message
              </label>
              <textarea 
                rows={4} 
                placeholder="TYPE YOUR MESSAGE HERE..." 
                className="w-full bg-white/[0.02] border border-white/10 p-5 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans resize-none"
              ></textarea>
            </div>

            {/* Submit & Socials Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-12 py-4 bg-cyan-500 text-black font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 group"
              >
                Transmit Signal 
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              {/* SOCIAL ICONS (Bottom Right Area) */}
              <div className="flex items-center gap-8 border-l border-white/10 pl-8">
                <a href="https://github.com/sunath2711" target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sunath-khadikar/" target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </form>

          {/* System Status Log */}
          <div className="mt-12 flex justify-between items-center text-[10px] text-white/20 font-mono uppercase tracking-widest">
            <p>Connection: Stable</p>
            <p>End-to-End Encryption: Active</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}