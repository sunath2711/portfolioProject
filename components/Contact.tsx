"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, MessageCircle, Shield, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    // Replace YOUR_ACCESS_KEY_HERE with the key from your email
    formData.append("access_key", "e9a32e52-fba1-4842-abb4-49de6891289b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    
    const result = await response.json();
    if (result.success) {
      setIsSuccess(true);
      event.target.reset();
      setTimeout(() => setIsSuccess(false), 5000); // Reset button after 5s
    }
    setIsSubmitting(false);
  }

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
          <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-cyan-500/50" />
          <div className="absolute top-0 right-0 h-2 w-32 bg-gradient-to-l from-cyan-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 h-2 w-32 bg-gradient-to-r from-cyan-500/20 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Input - Added "name" attribute */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Shield size={12} /> Subject_Identity
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="ENTER NAME" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans" 
                />
              </div>

              {/* Email Input - Added "name" attribute */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                  Return_Coordinate
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="EMAIL_ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans" 
                />
              </div>
            </div>

            {/* Message Input - Added "name" attribute */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                Encrypted_Message
              </label>
              <textarea 
                name="message"
                required
                rows={4} 
                placeholder="TYPE YOUR MESSAGE HERE..." 
                className="w-full bg-white/[0.02] border border-white/10 p-5 text-lg text-white placeholder:text-white/10 focus:border-cyan-400 outline-none transition-all font-sans resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-4">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:w-auto px-12 py-4 font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 group transition-all
                  ${isSuccess ? 'bg-green-500 text-white' : 'bg-cyan-500 text-black'} 
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>Processing <Loader2 size={16} className="animate-spin" /></>
                ) : isSuccess ? (
                  <>Signal Delivered <CheckCircle2 size={16} /></>
                ) : (
                  <>Transmit Signal <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </motion.button>

              <div className="flex items-center gap-8 border-l border-white/10 pl-8">
                <a href="https://github.com/sunath2711" target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sunath-khadikar/" target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </form>

          <div className="mt-12 flex justify-between items-center text-[10px] text-white/20 font-mono uppercase tracking-widest">
            <p>Connection: {isSubmitting ? 'Uplinking...' : 'Stable'}</p>
            <p>End-to-End Encryption: Active</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}