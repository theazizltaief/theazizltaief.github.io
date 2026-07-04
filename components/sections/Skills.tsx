"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            What I work
            <br />
            <span className="text-white/30">with.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <h3 className="text-xs tracking-widest uppercase text-white/30 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-white/60 border border-white/[0.08] rounded-full bg-white/[0.03] hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}