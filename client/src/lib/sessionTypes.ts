/*
 * Types partagés pour le système multi-séances
 * Coach Mimi — Pilates au Sol, Pilates Contemporain, Mobilité Pure
 */

export type Phase = "warmup" | "workout" | "cooldown";

export interface Exercise {
  id: number;
  phase: Phase;
  isTransition: boolean;
  name: string;
  duration: number;
  startTime: string;
  position: string;
  movement: string;
  coaching: string;
  imageUrl: string;
  targetMuscles: string;
}

export interface SessionConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  equipment: string;
  category?: string; // pilates, mobilite, stretching, hiit, musculation
  phaseLabels: Record<Phase, string>;
  exercises: Exercise[];
  totalDuration: number;
  color: string; // accent color for the session card
  finishMessage: string;
}

export function getExerciseNumber(exercises: Exercise[], exercise: Exercise): number {
  const mainExercises = exercises.filter((e) => !e.isTransition);
  const idx = mainExercises.findIndex((e) => e.id === exercise.id);
  return idx + 1;
}

export function getTotalMainExercises(exercises: Exercise[]): number {
  return exercises.filter((e) => !e.isTransition).length;
}

export function computeTotalDuration(exercises: Exercise[]): number {
  return exercises.reduce((sum, ex) => sum + ex.duration, 0);
}
