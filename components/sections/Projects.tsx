"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Selected
            <br />
            <span className="text-white/30">work.</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative border border-white/[0.06] rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-white/[0.02]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs text-white/80">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-white transition-colors duration-300"
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-white/40 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
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

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/theazizltaief"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            <GitHubIcon size={14} />
            More on GitHub
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}