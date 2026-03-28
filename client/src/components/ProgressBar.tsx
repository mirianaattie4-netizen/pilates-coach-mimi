/*
 * Design: "Néon Fitness Flow" — Barre de progression horizontale
 * Montre la progression globale de la séance avec les 3 phases colorées
 */

import { motion } from "framer-motion";
import { exercises, TOTAL_DURATION } from "@/lib/exerciseData";

interface ProgressBarProps {
  currentIndex: number;
  timeLeft: number;
}

export default function ProgressBar({ currentIndex, timeLeft }: ProgressBarProps) {
  // Calculate total elapsed time
  let elapsed = 0;
  for (let i = 0; i < currentIndex; i++) {
    elapsed += exercises[i].duration;
  }
  elapsed += exercises[currentIndex].duration - timeLeft;

  const overallProgress = (elapsed / TOTAL_DURATION) * 100;

  // Phase boundaries (percentage)
  const warmupEnd =
    (exercises
      .filter((e) => e.phase === "warmup")
      .reduce((s, e) => s + e.duration, 0) /
      TOTAL_DURATION) *
    100;
  const workoutEnd =
    warmupEnd +
    (exercises
      .filter((e) => e.phase === "workout")
      .reduce((s, e) => s + e.duration, 0) /
      TOTAL_DURATION) *
      100;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-display text-muted-foreground tracking-wider">
          {formatTime(elapsed)}
        </span>
        <span className="text-xs font-display text-muted-foreground tracking-wider">
          {formatTime(TOTAL_DURATION)}
        </span>
      </div>
      <div className="relative h-2 rounded-full overflow-hidden bg-white/5">
        {/* Phase segments background */}
        <div
          className="absolute inset-y-0 left-0 bg-green-500/15"
          style={{ width: `${warmupEnd}%` }}
        />
        <div
          className="absolute inset-y-0 bg-red-500/15"
          style={{ left: `${warmupEnd}%`, width: `${workoutEnd - warmupEnd}%` }}
        />
        <div
          className="absolute inset-y-0 right-0 bg-blue-500/15"
          style={{ left: `${workoutEnd}%` }}
        />

        {/* Active progress */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background:
              overallProgress <= warmupEnd
                ? "linear-gradient(90deg, #4ade80, #22c55e)"
                : overallProgress <= workoutEnd
                  ? "linear-gradient(90deg, #4ade80, #22c55e, #ff6b6b)"
                  : "linear-gradient(90deg, #4ade80, #ff6b6b, #60a5fa)",
          }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Phase dividers */}
        <div
          className="absolute inset-y-0 w-px bg-white/20"
          style={{ left: `${warmupEnd}%` }}
        />
        <div
          className="absolute inset-y-0 w-px bg-white/20"
          style={{ left: `${workoutEnd}%` }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[9px] uppercase tracking-[0.15em] text-green-400/60">
          Echauffement
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-red-400/60">
          Workout
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-blue-400/60">
          Cool-down
        </span>
      </div>
    </div>
  );
}
