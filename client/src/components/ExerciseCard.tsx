/*
 * Design: "Néon Fitness Flow" — Carte d'exercice avec bordure colorée et coaching
 * Affiche position, mouvement et coaching pour l'exercice actif
 */

import { motion, AnimatePresence } from "framer-motion";
import type { Exercise, Phase } from "@/lib/exerciseData";
import { getExerciseNumber, getTotalMainExercises } from "@/lib/exerciseData";
import { MapPin, Dumbbell, MessageCircle } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
  isActive: boolean;
}

const PHASE_BORDER: Record<Phase, string> = {
  warmup: "border-l-green-400",
  workout: "border-l-red-400",
  cooldown: "border-l-blue-400",
};

const PHASE_BG: Record<Phase, string> = {
  warmup: "from-green-500/5 to-transparent",
  workout: "from-red-500/5 to-transparent",
  cooldown: "from-blue-500/5 to-transparent",
};

const PHASE_BADGE_BG: Record<Phase, string> = {
  warmup: "bg-green-500/15 text-green-400",
  workout: "bg-red-500/15 text-red-400",
  cooldown: "bg-blue-500/15 text-blue-400",
};

export default function ExerciseCard({ exercise, isActive }: ExerciseCardProps) {
  if (exercise.isTransition) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full"
        >
          <div className="rounded-xl bg-card/50 border border-border/50 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="font-display text-sm uppercase tracking-[0.15em] text-purple-400">
                Transition
              </span>
            </div>
            <p className="text-lg text-foreground/80 font-medium">
              {exercise.movement}
            </p>
            <div className="mt-4 flex items-start gap-2 bg-purple-500/8 rounded-lg p-4">
              <MessageCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              <p className="text-purple-300/90 italic text-sm leading-relaxed">
                "{exercise.coaching}"
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  const exerciseNum = getExerciseNumber(exercise);
  const totalExercises = getTotalMainExercises();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={exercise.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <div
          className={`rounded-xl bg-gradient-to-r ${PHASE_BG[exercise.phase]} bg-card border border-border/50 border-l-4 ${PHASE_BORDER[exercise.phase]} overflow-hidden`}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-display uppercase tracking-[0.15em] px-3 py-1 rounded-full ${PHASE_BADGE_BG[exercise.phase]}`}
              >
                {exercise.phase === "warmup"
                  ? "Echauffement"
                  : exercise.phase === "workout"
                    ? "Workout"
                    : "Cool-down"}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-display tracking-wider">
              {exerciseNum} / {totalExercises}
            </span>
          </div>

          {/* Exercise name */}
          <div className="px-6 pb-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {exercise.name}
            </h2>
          </div>

          {/* Details */}
          <div className="px-6 pb-5 space-y-4">
            {/* Position */}
            {exercise.position && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    Position
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {exercise.position}
                  </p>
                </div>
              </div>
            )}

            {/* Movement */}
            <div className="flex items-start gap-3">
              <Dumbbell className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                  Mouvement
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {exercise.movement}
                </p>
              </div>
            </div>

            {/* Coaching */}
            <div
              className={`rounded-lg p-4 ${
                exercise.phase === "warmup"
                  ? "bg-green-500/8"
                  : exercise.phase === "workout"
                    ? "bg-red-500/8"
                    : "bg-blue-500/8"
              }`}
            >
              <div className="flex items-start gap-2">
                <MessageCircle
                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                    exercise.phase === "warmup"
                      ? "text-green-400"
                      : exercise.phase === "workout"
                        ? "text-red-400"
                        : "text-blue-400"
                  }`}
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    Coaching
                  </span>
                  <p
                    className={`text-base italic leading-relaxed font-medium ${
                      exercise.phase === "warmup"
                        ? "text-green-300/90"
                        : exercise.phase === "workout"
                          ? "text-red-300/90"
                          : "text-blue-300/90"
                    }`}
                  >
                    "{exercise.coaching}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
