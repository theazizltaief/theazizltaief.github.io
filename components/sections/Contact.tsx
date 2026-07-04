"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { socialLinks } from "@/lib/data";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-6 block">
            Contact
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Let&apos;s work
            <br />
            <span className="text-white/30">together.</span>
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto mb-12">
            I&apos;m open to new opportunities, collaborations,
            or just a good conversation about tech.
          </p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${socialLinks.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-light text-white border-b border-white/20 pb-2 hover:border-white/60 transition-all duration-300 mb-16 group"
          >
            {socialLinks.email}
            <ArrowUpRight
              size={22}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.a>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-8"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-300"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-300"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-300"
            >
              <Mail size={16} />
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}