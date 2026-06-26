"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  animationType?: "letters" | "words";
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  initialY?: number;
  initialOpacity?: number;
  animateY?: number;
  animateOpacity?: number;
  highlightWords?: Record<string, string>;
}

export default function AnimatedText({
  text,
  className = "text-4xl font-bold",
  animationType = "letters",
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.05,
  initialY = 10,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
  highlightWords = {},
  style,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: initialY,
      opacity: initialOpacity,
    },
    visible: {
      y: animateY,
      opacity: animateOpacity,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };

  const renderLetters = () => {
    const words = text.split(" ");
    let globalIndex = 0;
    return words.map((word, wordIndex) => {
      const chars = word.split("").map((char, charIndex) => {
        const idx = globalIndex++;
        const highlighted = highlightWords[word.toLowerCase()];
        return (
          <motion.span
            key={`letter-${idx}`}
            variants={itemVariants}
            className={`inline-block ${highlighted ? highlighted : ""}`}
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        );
      });
      if (wordIndex < words.length - 1) {
        chars.push(
          <motion.span
            key={`space-${globalIndex++}`}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {" "}
          </motion.span>
        );
      }
      return chars;
    });
  };

  const renderWords = () => {
    return text.split(" ").map((word, index) => {
      const highlighted = highlightWords[word.toLowerCase()];
      return (
        <motion.span
          key={`word-${index}`}
          variants={itemVariants}
          className={`${index > 0 ? "ml-[0.25em]" : ""} inline-block ${highlighted ? highlighted : ""}`}
        >
          {word}
        </motion.span>
      );
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {animationType === "letters" ? renderLetters() : renderWords()}
    </motion.div>
  );
}
