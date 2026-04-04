/*
 * Registre central des 21 séances Coach Mimi
 */

import type { SessionConfig } from "./sessionTypes";
import { exercises as session1Exercises, PHASE_LABELS as session1Labels } from "./exerciseData";
import { session2 } from "./session2Data";
import { session3 } from "./session3Data";
import { session4 } from "./session4Data";
import { session5 } from "./session5Data";
import { session6 } from "./session6Data";
import { session7 } from "./session7Data";
import { session8 } from "./session8Data";
import { session9 } from "./session9Data";
import { session10 } from "./session10Data";
import { session11 } from "./session11Data";
import { session12 } from "./session12Data";
import { session13 } from "./session13Data";
import { session14 } from "./session14Data";
import { session15 } from "./session15Data";
import { session16 } from "./session16Data";
import { session17 } from "./session17Data";
import { session18 } from "./session18Data";
import { session19 } from "./session19Data";
import { session20 } from "./session20Data";
import { session21 } from "./session21Data";

export const session1: SessionConfig = {
  id: "classique",
  title: "Pilates Classique",
  subtitle: "Mat Work Débutant",
  description: "Séance complète de Pilates au sol avec les exercices classiques : Hundred, Roll-Up, Criss-Cross, Swimming, Teaser et plus encore. Idéale pour débuter.",
  level: "Débutant",
  duration: "~60 min",
  equipment: "Tapis uniquement",
  category: "pilates",
  phaseLabels: session1Labels,
  exercises: session1Exercises,
  totalDuration: session1Exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "emerald",
  finishMessage: "Bravo pour cette séance de Pilates Classique ! Vous avez travaillé la mobilité, la force profonde, l'équilibre et la souplesse. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !",
};

export const allSessions: SessionConfig[] = [
  session1,
  session2,
  session3,
  session4,
  session5,
  session6,
  session7,
  session8,
  session9,
  session10,
  session11,
  session12,
  session13,
  session14,
  session15,
  session16,
  session17,
  session18,
  session19,
  session20,
  session21,
];

export function getSessionById(id: string): SessionConfig | undefined {
  return allSessions.find((s) => s.id === id);
}
