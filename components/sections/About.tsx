"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs tracking-widest uppercase text-white/30 mb-4 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
              Building things
              <br />
              <span className="text-white/30">that matter.</span>
            </h2>
            <div className="space-y-4 text-white/50 font-light leading-relaxed">
              <p>
                I&apos;m Aziz, a fullstack developer based in Tunis, Tunisia.
                I build and ship production web applications — from architecture
                to deployment and maintenance.
              </p>
              <p>
                My primary stack is ASP.NET Core and Ruby on Rails 8. I&apos;ve
                delivered two live e-commerce platforms handling 50,000+ monthly
                visits and 200+ orders, and built a complete RAG AI agent
                in production with Ollama, vector DB, and C# chunking services.
              </p>
              <p>
                I thrive on solving real problems with clean code, solid
                architecture, and modern tooling. Always learning, always
                shipping.
              </p>
            </div>
          </motion.div>

          {/* Right — Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Photo card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                <Image
                  src="/profile_2.jpeg"
                  alt="Aziz Ltaief"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                {/* Bottom badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/60 tracking-widest uppercase mb-1">
                      Currently
                    </div>
                    <div className="text-sm text-white font-light">
                      Building for the web
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Tunis
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { number: "3", label: "Live production platforms" },
                { number: "50K+", label: "Monthly visits handled" },
                { number: "200+", label: "Orders shipped" },
                { number: "1+", label: "Year in production" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div className="text-2xl font-light text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/30 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}