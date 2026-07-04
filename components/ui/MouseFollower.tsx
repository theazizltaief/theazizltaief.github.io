"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth follow
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile — don't render on touch devices
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring — follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            x: isHovering ? -8 : 0,
            y: isHovering ? -8 : 0,
            borderColor: isHovering
              ? "rgba(255,255,255,0.8)"
              : "rgba(255,255,255,0.3)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full border"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        />
      </motion.div>

      {/* Inner dot — follows instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </>
  );
}