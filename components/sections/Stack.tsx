"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { favouriteTech } from "@/lib/data";

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-4 block">
            Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            My favourite
            <br />
            <span className="text-white/30">tech.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {favouriteTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative aspect-square flex flex-col items-center justify-center gap-3 p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={56}
                  height={56}
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Name */}
              <span className="relative text-xs md:text-sm text-white/50 group-hover:text-white/90 transition-colors duration-500 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}