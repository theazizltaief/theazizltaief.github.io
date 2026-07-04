"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 80);

    // Hide loader when window is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 400);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    // Lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] bg-[#080808] flex flex-col items-center justify-center"
        >
          {/* Background gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

          {/* Grid noise */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-white/10 border-t-white/60"
                style={{ width: 80, height: 80 }}
              />

              {/* Logo A */}
              <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center backdrop-blur-sm">
                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl font-light text-white tracking-widest"
                >
                  A
                </motion.span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-xs tracking-[0.4em] text-white/30 uppercase mb-2">
                Aziz Ltaief
              </div>
              <div className="text-xs tracking-widest text-white/20 uppercase">
                Portfolio · 2026
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-48 flex flex-col items-center gap-3"
            >
              <div className="w-full h-[1px] bg-white/[0.08] overflow-hidden rounded-full">
                <motion.div
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-white/40 to-white"
                />
              </div>
              <div className="text-[10px] tracking-widest text-white/30 font-mono">
                {Math.floor(Math.min(progress, 100))}%
              </div>
            </motion.div>
          </div>

          {/* Bottom corner text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-8 text-[10px] tracking-widest text-white/20 uppercase font-mono"
          >
            Loading experience
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 right-8 text-[10px] tracking-widest text-white/20 uppercase font-mono"
          >
            v1.0
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}