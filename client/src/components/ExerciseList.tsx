/*
 * Design: "Néon Fitness Flow" — Liste compacte des exercices
 * Affiche les exercices passés (compressés), actif (surligné), et à venir
 */

import { motion } from "framer-motion";
import { exercises, type Phase } from "@/lib/exerciseData";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

interface ExerciseListProps {
  currentIndex: number;
}

const PHASE_DOT: Record<Phase, string> = {
  warmup: "bg-green-400",
  workout: "bg-red-400",
  cooldown: "bg-blue-400",
};

const PHASE_TEXT_ACTIVE: Record<Phase, string> = {
  warmup: "text-green-400",
  workout: "text-red-400",
  cooldown: "text-blue-400",
};

export default function ExerciseList({ currentIndex }: ExerciseListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  // Only show main exercises (not transitions)
  const mainExercises = exercises.filter((e) => !e.isTransition);

  // Find which main exercise corresponds to current index
  const currentExercise = exercises[currentIndex];
  const currentMainId = currentExercise.isTransition
    ? exercises
        .slice(0, currentIndex)
        .filter((e) => !e.isTransition)
        .pop()?.id
    : currentExercise.id;

  useEffect(() => {
    if (activeRef.current && listRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentMainId]);

  return (
    <div
      ref={listRef}
      className="overflow-y-auto max-h-[calc(100vh-16rem)] scrollbar-thin pr-1"
    >
      <div className="space-y-1">
        {mainExercises.map((ex, idx) => {
          const isPast = currentMainId ? ex.id < currentMainId : false;
          const isActive = ex.id === currentMainId;
          const num = idx + 1;

          return (
            <motion.div
              key={ex.id}
              ref={isActive ? activeRef : undefined}
              initial={false}
              animate={{
                opacity: isPast ? 0.4 : 1,
                scale: isActive ? 1 : 0.98,
              }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-white/5 border border-white/10"
                  : "hover:bg-white/3"
              }`}
            >
              {/* Number / Check */}
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                {isPast ? (
                  <Check className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-display font-bold ${
                      isActive
                        ? `${PHASE_DOT[ex.phase]} text-background`
                        : "bg-white/8 text-muted-foreground"
                    }`}
                  >
                    {num}
                  </div>
                )}
              </div>

              {/* Name */}
              <span
                className={`text-sm font-medium truncate ${
                  isActive
                    ? `${PHASE_TEXT_ACTIVE[ex.phase]} font-display`
                    : isPast
                      ? "text-muted-foreground line-through"
                      : "text-foreground/70"
                }`}
              >
                {ex.name}
              </span>

              {/* Duration */}
              <span className="ml-auto text-[10px] text-muted-foreground font-display tracking-wider shrink-0">
                {ex.startTime}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
