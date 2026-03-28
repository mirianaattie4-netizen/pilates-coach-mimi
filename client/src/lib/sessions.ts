/*
 * Registre central des 3 séances Coach Mimi
 */

import type { SessionConfig } from "./sessionTypes";
import { exercises as session1Exercises, PHASE_LABELS as session1Labels } from "./exerciseData";
import { session2 } from "./session2Data";
import { session3 } from "./session3Data";

export const session1: SessionConfig = {
  id: "classique",
  title: "Pilates Classique",
  subtitle: "Mat Work Débutant",
  description: "Séance complète de Pilates au sol avec les exercices classiques : Hundred, Roll-Up, Criss-Cross, Swimming, Teaser et plus encore. Idéale pour débuter.",
  level: "Débutant",
  duration: "~60 min",
  equipment: "Tapis uniquement",
  phaseLabels: session1Labels,
  exercises: session1Exercises,
  totalDuration: session1Exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "emerald",
  finishMessage: "Bravo pour cette séance de Pilates Classique ! Vous avez travaillé la mobilité, la force profonde, l'équilibre et la souplesse. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !",
};

export const allSessions: SessionConfig[] = [session1, session2, session3];

export function getSessionById(id: string): SessionConfig | undefined {
  return allSessions.find((s) => s.id === id);
}
