/*
 * Design: "Néon Fitness Flow" — Grand timer circulaire lumineux
 * Arc de progression avec effet glow selon la phase
 */

import { motion } from "framer-motion";
import type { Phase } from "@/lib/sessionTypes";

interface CircularTimerProps {
  timeLeft: number;
  totalDuration: number;
  phase: Phase;
  isTransition: boolean;
}

const PHASE_STROKE_COLORS: Record<Phase, string> = {
  warmup: "#4ade80",
  workout: "#ff6b6b",
  cooldown: "#60a5fa",
};

const PHASE_GLOW_COLORS: Record<Phase, string> = {
  warmup: "rgba(74, 222, 128, 0.4)",
  workout: "rgba(255, 107, 107, 0.4)",
  cooldown: "rgba(96, 165, 250, 0.4)",
};

export default function CircularTimer({
  timeLeft,
  totalDuration,
  phase,
  isTransition,
}: CircularTimerProps) {
  const progress = (timeLeft / totalDuration) * 100;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const strokeColor = isTransition ? "#a78bfa" : PHASE_STROKE_COLORS[phase];
  const glowColor = isTransition ? "rgba(167, 139, 250, 0.4)" : PHASE_GLOW_COLORS[phase];

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="8"
        />
        {/* Progress arc */}
        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            filter: `drop-shadow(0 0 12px ${glowColor})`,
            transition: "stroke-dashoffset 0.3s ease-out, stroke 0.5s ease",
          }}
        />
      </svg>
      {/* Time display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          key={timeLeft}
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-5xl font-bold tracking-tight"
          style={{ color: strokeColor }}
        >
          {timeDisplay}
        </motion.span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
          {isTransition ? "Repos" : "Effort"}
        </span>
      </div>
    </div>
  );
}
