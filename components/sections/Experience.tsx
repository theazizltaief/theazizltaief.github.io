"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Where I&apos;ve
            <br />
            <span className="text-white/30">worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-white/20 -translate-x-[3.5px]" />

                {/* Card */}
                <div className="p-6 md:p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-medium text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-white/50">
                          {exp.company}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-white/30 font-mono whitespace-nowrap mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-white/30 border border-white/[0.06] px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-8 block">
            Education
          </span>

          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
              >
                <h3 className="text-sm font-medium text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-white/40 mb-2">{edu.school}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/20 font-mono">
                    {edu.period}
                  </span>
                  <span className="text-xs text-white/20">{edu.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}