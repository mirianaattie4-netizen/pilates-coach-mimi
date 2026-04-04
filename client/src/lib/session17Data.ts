/*
 * SÉANCE 17 — HIIT EMOM (Every Minute On the Minute) — ~45 min
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * Format: 40s d'effort + 20s de repos chaque minute
 */
import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";
const TRANS = "";
let id = 0;
const ex = (phase: "warmup" | "workout" | "cooldown", name: string, dur: number, start: string, pos: string, mov: string, coach: string, img: string, muscles: string, isTrans = false): Exercise => ({
  id: ++id, phase, isTransition: isTrans, name, duration: dur, startTime: start, position: pos, movement: mov, coaching: coach, imageUrl: isTrans ? "" : img, targetMuscles: muscles,
});
const exercises: Exercise[] = [
  // PHASE 1 — ÉCHAUFFEMENT (~5 min)
  ex("warmup", "Marche Active", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place en montant les genoux. Balancez les bras. Augmentez le rythme.", "On réveille le corps ! Montez les genoux, respirez profondément.", resolveImageUrl("IMG_HUNDRED"), "Cardio, psoas"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Cercles de Bras", 45, "01:00", "Debout, bras tendus sur les côtés.", "Faites des cercles de plus en plus grands avec les bras. Changez de sens à mi-temps.", "Grands cercles ! On ouvre les épaules et la cage thoracique.", resolveImageUrl("IMG_SHOULDER_PRESS"), "Épaules, trapèzes"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Inchworm", 45, "02:00", "Debout, pieds joints.", "Penchez-vous, marchez avec les mains jusqu'en planche, puis revenez debout. Répétez.", "Jambes tendues au départ ! On étire les ischio-jambiers et on active le core.", resolveImageUrl("IMG_PLANK_ROTATION"), "Ischio-jambiers, core, épaules"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Préparez-vous pour l'EMOM !", TRANS, "", true),
  ex("warmup", "High Knees", 45, "03:00", "Debout, pieds largeur hanches.", "Courez sur place en montant les genoux le plus haut possible. Bras en opposition.", "On monte le cardio ! Genoux hauts, rythme rapide !", resolveImageUrl("IMG_HUNDRED"), "Psoas, cardio"),
  ex("warmup", "Transition", 15, "03:45", "", "Soufflez.", "Échauffement terminé ! EMOM dans 15 secondes !", TRANS, "", true),

  // PHASE 2 — EMOM (~34 min) — 5 rounds de 6 exercices
  // Round 1
  ex("workout", "EMOM 1 — Push-Ups", 40, "04:00", "Position planche, mains largeur épaules.", "Pompes complètes ou sur les genoux. Maximum de répétitions en 40 secondes.", "EMOM ! 40 secondes max reps ! Poitrine au sol, bras tendus ! GO !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, épaules"),
  ex("workout", "Repos EMOM", 20, "04:40", "", "Soufflez, préparez le prochain.", "20 secondes de repos. Respirez !", TRANS, "", true),
  ex("workout", "EMOM 2 — Squats", 40, "05:00", "Debout, pieds largeur épaules.", "Squats rapides. Descendez cuisses parallèles, remontez vite. Max reps.", "Squats rapides ! Poitrine haute, poussez dans les talons !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Repos EMOM", 20, "05:40", "", "Soufflez.", "Repos 20s. Prochain : Mountain Climbers.", TRANS, "", true),
  ex("workout", "EMOM 3 — Mountain Climbers", 40, "06:00", "Position planche.", "Genoux vers la poitrine en alternance. Rythme maximum.", "Genoux rapides ! Hanches basses ! On brûle le core !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Repos EMOM", 20, "06:40", "", "Soufflez.", "Repos. Prochain : Lunges.", TRANS, "", true),
  ex("workout", "EMOM 4 — Fentes Sautées", 40, "07:00", "Debout, position fente.", "Sautez et changez de jambe en l'air. Atterrissez en fente opposée. Max reps.", "Explosivité ! Changez de jambe en l'air ! Atterrissage souple !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Repos EMOM", 20, "07:40", "", "Soufflez.", "Repos. Prochain : Planche.", TRANS, "", true),
  ex("workout", "EMOM 5 — Planche Dynamique", 40, "08:00", "Position planche sur les avant-bras.", "Montez sur les mains, redescendez sur les avant-bras. Alternez le bras qui commence.", "Montez, descendez ! Gardez le corps aligné ! Le core travaille !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, épaules, triceps"),
  ex("workout", "Repos EMOM", 20, "08:40", "", "Soufflez.", "Repos. Prochain : Burpees.", TRANS, "", true),
  ex("workout", "EMOM 6 — Burpees", 40, "09:00", "Debout.", "Burpees complets. Descendez, sautez en arrière, pompe, sautez en avant, sautez en l'air.", "BURPEES ! Tout donner ! Chaque rep compte !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Repos EMOM", 20, "09:40", "", "Marchez.", "Round 1 terminé ! Repos 20s puis Round 2.", TRANS, "", true),

  // Round 2
  ex("workout", "EMOM 7 — Diamond Push-Ups", 40, "10:00", "Position planche, mains en diamant.", "Pompes serrées. Coudes le long du corps. Max reps.", "Round 2 ! Pompes diamant ! Triceps en feu !", resolveImageUrl("IMG_PUSHUP"), "Triceps, pectoraux"),
  ex("workout", "Repos EMOM", 20, "10:40", "", "Soufflez.", "Repos 20s.", TRANS, "", true),
  ex("workout", "EMOM 8 — Squat Pulse", 40, "11:00", "Debout, pieds largeur épaules.", "Descendez en squat et faites des micro-mouvements (pulses) sans remonter complètement.", "Restez bas ! Pulsez ! Les cuisses brûlent, c'est le but !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Repos EMOM", 20, "11:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 9 — Planche Épaule", 40, "12:00", "Position planche haute.", "Touchez l'épaule opposée avec chaque main en alternance. Gardez les hanches stables.", "Épaule droite, épaule gauche ! Pas de rotation des hanches !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, épaules"),
  ex("workout", "Repos EMOM", 20, "12:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 10 — Fentes Arrière", 40, "13:00", "Debout, pieds joints.", "Fente arrière alternée. Grand pas en arrière, genou vers le sol. Remontez.", "Grand pas en arrière ! Genou à 90° ! Alternez rapidement !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Repos EMOM", 20, "13:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 11 — V-Ups", 40, "14:00", "Allongé sur le dos, bras au-dessus de la tête.", "Levez simultanément jambes et buste pour toucher les pieds. Redescendez contrôlé.", "V-Ups ! Touchez les pieds ! Core à fond !", resolveImageUrl("IMG_HUNDRED"), "Abdominaux, psoas"),
  ex("workout", "Repos EMOM", 20, "14:40", "", "Soufflez.", "Repos. Dernier exercice du round.", TRANS, "", true),
  ex("workout", "EMOM 12 — Tuck Jumps", 40, "15:00", "Debout.", "Sautez en ramenant les genoux vers la poitrine. Atterrissez en douceur.", "Genoux à la poitrine ! Explosez ! Atterrissage souple !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, core, cardio"),
  ex("workout", "Repos EMOM", 20, "15:40", "", "Marchez.", "Round 2 terminé ! Repos puis Round 3.", TRANS, "", true),

  // Round 3
  ex("workout", "EMOM 13 — Pike Push-Ups", 40, "16:00", "Position V inversé, mains au sol, fessiers en l'air.", "Pliez les coudes pour descendre la tête vers le sol. Poussez pour remonter.", "Pike push-ups ! On cible les épaules ! Descendez la tête !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Épaules, triceps"),
  ex("workout", "Repos EMOM", 20, "16:40", "", "Soufflez.", "Repos 20s.", TRANS, "", true),
  ex("workout", "EMOM 14 — Sumo Squat", 40, "17:00", "Debout, pieds très écartés, pointes ouvertes.", "Descendez en sumo squat profond. Remontez en serrant les fessiers.", "Pieds écartés ! Descendez profond ! Serrez les fessiers en haut !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Adducteurs, fessiers, quadriceps"),
  ex("workout", "Repos EMOM", 20, "17:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 15 — Bear Crawl", 40, "18:00", "Position quadrupédie, genoux décollés du sol.", "Avancez main droite + pied gauche, puis main gauche + pied droit. Allez-retour.", "Bear crawl ! Genoux à 2cm du sol ! Coordination et core !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, épaules, quadriceps"),
  ex("workout", "Repos EMOM", 20, "18:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 16 — Lateral Lunges", 40, "19:00", "Debout, pieds joints.", "Grand pas latéral, pliez le genou, l'autre jambe tendue. Alternez.", "Grand pas sur le côté ! Poussez les fessiers en arrière !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Adducteurs, quadriceps, fessiers"),
  ex("workout", "Repos EMOM", 20, "19:40", "", "Soufflez.", "Repos.", TRANS, "", true),
  ex("workout", "EMOM 17 — Bicycle Crunches", 40, "20:00", "Allongé sur le dos, mains derrière la tête.", "Coude vers genou opposé en alternance. Pédalez ! Rythme rapide.", "Pédalez ! Coude vers genou opposé ! Obliques en feu !", resolveImageUrl("IMG_HUNDRED"), "Obliques, abdominaux"),
  ex("workout", "Repos EMOM", 20, "20:40", "", "Soufflez.", "Repos. Dernier du round.", TRANS, "", true),
  ex("workout", "EMOM 18 — Star Jumps", 40, "21:00", "Debout, pieds joints, bras le long du corps.", "Sautez en écartant bras et jambes en étoile. Revenez position groupée.", "Étoile ! Écartez tout ! Explosivité maximale !", resolveImageUrl("IMG_HUNDRED"), "Full body, cardio"),
  ex("workout", "Repos EMOM", 20, "21:40", "", "Marchez.", "Round 3 terminé ! Bravo !", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Étirement Pectoraux", 45, "22:00", "Debout, bras en croix contre un mur.", "Tournez le corps pour étirer la poitrine. Changez de côté à mi-temps.", "Respirez profondément. Ouvrez la poitrine. Relâchez les tensions.", resolveImageUrl("IMG_SHOULDER_PRESS"), "Pectoraux, épaules"),
  ex("cooldown", "Transition", 15, "22:45", "", "Changez de position.", "On continue.", TRANS, "", true),
  ex("cooldown", "Étirement Psoas", 45, "23:00", "Position fente basse, genou arrière au sol.", "Poussez les hanches vers l'avant. Sentez l'étirement du psoas. Changez de côté.", "Hanches vers l'avant. Respirez dans l'étirement. Relâchez le psoas.", resolveImageUrl("IMG_REVERSE_LUNGE"), "Psoas, quadriceps"),
  ex("cooldown", "Transition", 15, "23:45", "", "Descendez au sol.", "On passe au sol.", TRANS, "", true),
  ex("cooldown", "Figure 4 Stretch", 45, "24:00", "Allongé sur le dos, cheville droite sur genou gauche.", "Tirez le genou gauche vers la poitrine. Sentez l'étirement du fessier. Changez.", "Tirez doucement. Respirez. Relâchez les fessiers qui ont travaillé.", resolveImageUrl("IMG_BRIDGE"), "Fessiers, piriformes"),
  ex("cooldown", "Transition", 15, "24:45", "", "Restez au sol.", "Dernier étirement.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "25:00", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez tout. Respirez naturellement.", "Bravo ! 3 rounds EMOM terminés ! Vous êtes un champion ! Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation complète"),
];

export const session17: SessionConfig = {
  id: "hiit-emom",
  title: "HIIT EMOM",
  subtitle: "Every Minute On the Minute",
  description: "Format EMOM : 40 secondes d'effort maximum + 20 secondes de repos chaque minute. 3 rounds de 6 exercices différents pour un travail complet.",
  duration: "~26 min",
  level: "Intermédiaire",
  equipment: "Aucun — Poids du corps",
  category: "hiit",
  phaseLabels: { warmup: "Échauffement", workout: "EMOM Circuit", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-lime-600 to-green-500",
  finishMessage: "3 rounds EMOM terminés ! Vous êtes un champion !",
};
