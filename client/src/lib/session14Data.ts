/*
 * SÉANCE 14 — HIIT Cardio Brûle-Graisses — Haute Intensité Cardio
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * Format: 40s effort / 20s repos — 4 rounds
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";
let id = 0;
const ex = (phase: "warmup" | "workout" | "cooldown", name: string, dur: number, start: string, pos: string, mov: string, coach: string, img: string, muscles: string, isTrans = false): Exercise => ({
  id: ++id, phase, isTransition: isTrans, name, duration: dur, startTime: start, position: pos, movement: mov, coaching: coach, imageUrl: isTrans ? "" : img, targetMuscles: muscles,
});

const exercises: Exercise[] = [
  // PHASE 1 — ÉCHAUFFEMENT (~6 min)
  ex("warmup", "Marche Rapide sur Place", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez rapidement sur place. Balancez les bras. Augmentez le rythme progressivement.", "On réveille le cardio ! Rythme progressif, respirez.", "IMG_HUNDRED", "Cardio, échauffement"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On continue.", TRANS, "", true),
  ex("warmup", "Jumping Jacks", 45, "01:00", "Debout, pieds joints.", "Sautez en écartant pieds et bras. Revenez. Rythme modéré puis accélérez.", "Ouvrez grand ! Le cœur monte doucement.", "IMG_HUNDRED", "Cardio, deltoïdes"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On enchaîne.", TRANS, "", true),
  ex("warmup", "High Knees Modérés", 45, "02:00", "Debout.", "Courez sur place, genoux hauts. Rythme modéré.", "Genoux hauts ! Le cardio monte.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "On prépare le corps.", TRANS, "", true),
  ex("warmup", "Butt Kicks", 45, "03:00", "Debout.", "Courez sur place en ramenant les talons aux fesses. Rythme soutenu.", "Talons aux fesses ! On réchauffe les ischio-jambiers.", "IMG_HUNDRED", "Ischio-jambiers, cardio"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "Dernier exercice d'échauffement.", TRANS, "", true),
  ex("warmup", "Squat + Saut Léger", 45, "04:00", "Debout, pieds largeur épaules.", "Squat puis petit saut. Atterrissage souple. Rythme modéré.", "On prépare les jambes pour l'explosion. Atterrissage souple.", "IMG_GOBLET_SQUAT", "Quadriceps, cardio"),
  ex("warmup", "Transition", 15, "04:45", "", "Préparez-vous.", "ROUND 1 dans 15 secondes ! C'est CARDIO MAX !", TRANS, "", true),

  // PHASE 2 — HIIT CARDIO — ROUND 1
  ex("workout", "Burpees", 40, "05:00", "Debout.", "Burpee complet : squat, planche, pompe, squat, saut. Le plus vite possible.", "BURPEES ! L'exercice cardio ultime. Chaque rep brûle des calories.", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "05:40", "", "Récupérez.", "Respirez ! Prochain : Sprint sur Place.", TRANS, "", true),
  ex("workout", "Sprint sur Place", 40, "06:00", "Debout.", "Sprint maximal sur place ! Genoux hauts, bras en opposition. Vitesse maximale.", "SPRINT ! Donnez tout ! C'est 40 secondes de sprint pur.", "IMG_HUNDRED", "Cardio max, psoas"),
  ex("workout", "Transition", 20, "06:40", "", "Récupérez.", "Prochain : Jumping Jacks Rapides.", TRANS, "", true),
  ex("workout", "Jumping Jacks Rapides", 40, "07:00", "Debout.", "Jumping jacks le plus vite possible. Bras au-dessus de la tête à chaque saut.", "VITESSE ! Chaque jumping jack compte. Le cœur est à fond.", "IMG_HUNDRED", "Cardio, deltoïdes"),
  ex("workout", "Transition", 20, "07:40", "", "Récupérez.", "Prochain : Squat Sauté.", TRANS, "", true),
  ex("workout", "Squat Sauté", 40, "08:00", "Debout, pieds largeur épaules.", "Squat profond puis explosion en saut maximal. Atterrissage souple.", "EXPLOSEZ ! Le saut le plus haut possible. Atterrissage souple.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, cardio"),
  ex("workout", "Transition", 20, "08:40", "", "Récupérez.", "Prochain : Mountain Climbers.", TRANS, "", true),
  ex("workout", "Mountain Climbers Sprint", 40, "09:00", "Planche haute.", "Genoux vers la poitrine le plus vite possible. Sprint en planche.", "SPRINT EN PLANCHE ! Hanches basses, vitesse maximale.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Transition", 20, "09:40", "", "Récupérez.", "Prochain : Tuck Jumps.", TRANS, "", true),
  ex("workout", "Tuck Jumps", 40, "10:00", "Debout.", "Sautez en ramenant les genoux à la poitrine. Atterrissage souple.", "GENOUX À LA POITRINE ! Saut maximal. Cardio explosif.", "IMG_HUNDRED", "Quadriceps, cardio max"),
  ex("workout", "Transition", 20, "10:40", "", "Récupérez.", "Dernier exercice Round 1 !", TRANS, "", true),
  ex("workout", "Patineurs (Skaters)", 40, "11:00", "Debout.", "Sautez latéralement d'un pied à l'autre. Touchez le sol.", "LATÉRAL ! Grand saut, touchez le sol. Agilité et cardio.", "IMG_REVERSE_LUNGE", "Fessiers, cardio"),
  ex("workout", "Transition", 20, "11:40", "", "Marchez.", "ROUND 1 TERMINÉ ! Récupération.", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "12:00", "Marchez sur place.", "Marchez, respirez profondément. Hydratez-vous.", "Bien joué ! Récupérez. Round 2 arrive.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "12:45", "", "Préparez-vous.", "ROUND 2 !", TRANS, "", true),

  // ROUND 2
  ex("workout", "Burpee + Tuck Jump", 40, "13:00", "Debout.", "Burpee puis tuck jump au lieu du saut normal. Double intensité.", "BURPEE + TUCK ! Le combo ultime. Donnez tout.", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "13:40", "", "Récupérez.", "Prochain : Fentes Sautées.", TRANS, "", true),
  ex("workout", "Fentes Sautées", 40, "14:00", "Position de fente.", "Sautez et changez de jambe en l'air. Alternez.", "CHANGEZ en l'air ! Explosivité et cardio.", "IMG_REVERSE_LUNGE", "Quadriceps, cardio"),
  ex("workout", "Transition", 20, "14:40", "", "Récupérez.", "Prochain : Pop Squats.", TRANS, "", true),
  ex("workout", "Pop Squats", 40, "15:00", "Debout, pieds joints.", "Sautez en écartant les pieds en squat, touchez le sol. Revenez.", "EXPLOSIF ! Saut large, touchez le sol.", "IMG_GOBLET_SQUAT", "Quadriceps, cardio"),
  ex("workout", "Transition", 20, "15:40", "", "Récupérez.", "Prochain : High Knees Sprint.", TRANS, "", true),
  ex("workout", "High Knees Sprint", 40, "16:00", "Debout.", "Sprint sur place maximal. Genoux le plus haut possible.", "SPRINT MAXIMAL ! 40 secondes de pur cardio.", "IMG_HUNDRED", "Cardio max"),
  ex("workout", "Transition", 20, "16:40", "", "Récupérez.", "Prochain : Planche Jacks.", TRANS, "", true),
  ex("workout", "Planche Jacks", 40, "17:00", "Planche haute.", "Sautez les pieds écartés puis joints. Comme des jumping jacks en planche.", "SAUTEZ ! Pieds écartés, pieds joints. Core + cardio.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Transition", 20, "17:40", "", "Récupérez.", "Prochain : Star Jumps.", TRANS, "", true),
  ex("workout", "Star Jumps", 40, "18:00", "Debout, accroupi.", "Sautez en étoile : bras et jambes écartés en l'air. Atterrissez accroupi.", "ÉTOILE ! Sautez le plus haut possible, ouvrez grand.", "IMG_HUNDRED", "Full body, cardio"),
  ex("workout", "Transition", 20, "18:40", "", "Récupérez.", "Dernier exercice Round 2 !", TRANS, "", true),
  ex("workout", "Burpees Sprint", 40, "19:00", "Debout.", "Burpees le plus vite possible. Chaque seconde compte.", "SPRINT DE BURPEES ! Vitesse maximale. Dernière ligne droite du Round 2.", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "19:40", "", "Marchez.", "ROUND 2 TERMINÉ !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "20:00", "Marchez.", "Respirez. Mi-parcours !", "Mi-chemin ! 2 rounds faits. Vous êtes des machines.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "20:45", "", "Préparez-vous.", "ROUND 3 !", TRANS, "", true),

  // ROUND 3
  ex("workout", "Squat + Coup de Poing", 40, "21:00", "Debout, garde de boxe.", "Squat, remontez avec 2 coups de poing (jab-cross). Enchaînez.", "SQUAT + JAB CROSS ! Force et cardio. Frappez fort.", "IMG_GOBLET_SQUAT", "Quadriceps, épaules, cardio"),
  ex("workout", "Transition", 20, "21:40", "", "Récupérez.", "Prochain : Broad Jumps.", TRANS, "", true),
  ex("workout", "Broad Jumps (Saut en Longueur)", 40, "22:00", "Debout.", "Sautez le plus loin possible en avant. Reculez en marchant. Recommencez.", "SAUTEZ LOIN ! Utilisez les bras pour l'élan. Explosivité pure.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, cardio"),
  ex("workout", "Transition", 20, "22:40", "", "Récupérez.", "Prochain : Shuffle Latéral.", TRANS, "", true),
  ex("workout", "Shuffle Latéral", 40, "23:00", "Debout, position athlétique.", "Glissez rapidement 4 pas à droite, touchez le sol. 4 pas à gauche, touchez. Alternez.", "GLISSEZ ! Rapide et bas. Agilité et cardio latéral.", "IMG_REVERSE_LUNGE", "Adducteurs, cardio"),
  ex("workout", "Transition", 20, "23:40", "", "Récupérez.", "Prochain : Burpee Latéral.", TRANS, "", true),
  ex("workout", "Burpee Latéral", 40, "24:00", "Debout.", "Burpee puis sautez latéralement. Burpee de l'autre côté. Alternez.", "BURPEE + SAUT LATÉRAL ! Coordination et cardio max.", "IMG_PUSHUP", "Full body, cardio"),
  ex("workout", "Transition", 20, "24:40", "", "Récupérez.", "Prochain : Sprint + Freeze.", TRANS, "", true),
  ex("workout", "Sprint + Freeze", 40, "25:00", "Debout.", "Sprint 5 secondes puis freeze (immobile) 2 secondes. Recommencez. Le freeze force le contrôle.", "SPRINT puis FREEZE ! Le stop-and-go brûle plus de calories.", "IMG_HUNDRED", "Cardio, contrôle"),
  ex("workout", "Transition", 20, "25:40", "", "Récupérez.", "Prochain : Mountain Climbers Croisés.", TRANS, "", true),
  ex("workout", "Mountain Climbers Croisés Sprint", 40, "26:00", "Planche haute.", "Genou droit vers coude gauche, inversez. Vitesse maximale.", "CROISEZ et SPRINTEZ ! Obliques + cardio max.", "IMG_PLANK", "Obliques, cardio"),
  ex("workout", "Transition", 20, "26:40", "", "Récupérez.", "Dernier exercice Round 3 !", TRANS, "", true),
  ex("workout", "Tuck Jumps Non-Stop", 40, "27:00", "Debout.", "Tuck jumps sans arrêt. Genoux à la poitrine à chaque saut.", "NON-STOP ! Chaque saut compte. Le cardio est au maximum.", "IMG_HUNDRED", "Cardio max"),
  ex("workout", "Transition", 20, "27:40", "", "Marchez.", "ROUND 3 TERMINÉ ! Dernier round !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "28:00", "Marchez.", "Dernier round. Tout donner.", "DERNIER ROUND ! C'est le finisher. TOUT DONNER.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "28:45", "", "Préparez-vous.", "ROUND 4 FINAL !", TRANS, "", true),

  // ROUND 4 — FINISHER
  ex("workout", "Burpees Non-Stop", 40, "29:00", "Debout.", "Burpees sans arrêt. Le plus vite possible. C'est le finisher.", "BURPEES NON-STOP ! C'est le dernier round. TOUT DONNER.", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "29:40", "", "Récupérez.", "Prochain : Sprint Maximal.", TRANS, "", true),
  ex("workout", "Sprint Maximal", 40, "30:00", "Debout.", "Sprint sur place à 100%. Genoux hauts, bras en opposition. MAXIMUM.", "100% ! C'est le sprint de votre vie. 40 secondes. ALLEZ.", "IMG_HUNDRED", "Cardio max"),
  ex("workout", "Transition", 20, "30:40", "", "Récupérez.", "Prochain : Star Jumps.", TRANS, "", true),
  ex("workout", "Star Jumps Finisher", 40, "31:00", "Accroupi.", "Star jumps le plus haut possible. Ouvrez grand en l'air.", "ÉTOILE MAXIMALE ! Le plus haut, le plus grand. C'est le finisher.", "IMG_HUNDRED", "Full body, cardio"),
  ex("workout", "Transition", 20, "31:40", "", "Récupérez.", "DERNIER EXERCICE !", TRANS, "", true),
  ex("workout", "Burpee + Star Jump", 40, "32:00", "Debout.", "Burpee puis star jump. Le combo final. TOUT CE QU'IL VOUS RESTE.", "C'EST LE DERNIER ! BURPEE + STAR JUMP ! DONNEZ ABSOLUMENT TOUT !", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "32:40", "", "Marchez.", "CIRCUIT TERMINÉ ! INCROYABLE !", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Marche Récupération", 60, "33:00", "Marchez lentement.", "Marchez, respirez profondément. Le cœur redescend.", "Bravo ! Marchez doucement. Vous avez brûlé un maximum de calories.", "IMG_RESPIRATION", "Récupération"),
  ex("cooldown", "Transition", 15, "34:00", "", "Restez debout.", "On étire.", TRANS, "", true),
  ex("cooldown", "Étirement Quadriceps", 45, "34:15", "Debout, attrapez le pied.", "Tirez le talon vers la fesse. 20s chaque côté.", "Étirez en douceur. Les jambes ont beaucoup travaillé.", "IMG_REVERSE_LUNGE", "Quadriceps"),
  ex("cooldown", "Transition", 15, "35:00", "", "Au sol.", "On continue.", TRANS, "", true),
  ex("cooldown", "Étirement Ischio-Jambiers", 45, "35:15", "Assis, jambes tendues devant.", "Penchez-vous vers les pieds. Dos droit. Tenez.", "Respirez dans l'étirement. Les ischio récupèrent.", "IMG_RDL", "Ischio-jambiers"),
  ex("cooldown", "Transition", 15, "36:00", "", "Allongez-vous.", "On étire le dos.", TRANS, "", true),
  ex("cooldown", "Genoux à la Poitrine", 45, "36:15", "Allongé, genoux ramenés.", "Bercez-vous doucement. Massez le bas du dos.", "Le dos se relâche. Respirez profondément.", "IMG_KNEES_CHEST", "Bas du dos"),
  ex("cooldown", "Transition", 15, "37:00", "", "Allongez-vous.", "Dernière posture.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "37:15", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez tout. Respirez.", "Vous l'avez fait ! 4 rounds de HIIT Cardio Brûle-Graisses. Vous avez brûlé un maximum. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation"),
];

export const session14: SessionConfig = {
  id: "hiit-cardio",
  title: "HIIT Cardio Brûle-Graisses",
  subtitle: "Haute Intensité Cardio",
  description: "Circuit HIIT cardio pur : burpees, sprints, tuck jumps, star jumps, patineurs. 4 rounds pour brûler un maximum de calories et booster le métabolisme.",
  level: "Avancé",
  duration: "~38 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement Cardio", workout: "HIIT Cardio", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "red",
  finishMessage: "INCROYABLE ! 4 rounds de HIIT Cardio Brûle-Graisses terminés ! Vous avez brûlé un maximum de calories. Votre métabolisme est boosté pour les prochaines heures. Hydratez-vous. À très bientôt avec Coach Mimi !",
};
