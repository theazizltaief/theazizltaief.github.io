"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  return (
<section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
        {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/[0.03] blur-3xl pointer-events-none" />

      {/* Grid noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">


        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-8 leading-[0.95]"
        >
          Aziz
          <br />
          <span className="text-white/25">Ltaief</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-white/40 font-light tracking-wide max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Fullstack Developer · .NET &amp; Rails
          <br />
          shipping production apps that scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            View my work
          </a>
          <a
            href={socialLinks.cv}
            download
            className="group px-8 py-3 border border-white/20 text-white/70 text-sm rounded-full hover:text-white hover:border-white/50 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-300"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-300"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-white/30 hover:text-white transition-colors duration-300"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}