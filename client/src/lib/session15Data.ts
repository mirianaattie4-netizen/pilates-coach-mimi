/*
 * SÉANCE 15 — HIIT Tabata — Format 20s effort / 10s repos
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * 8 blocs Tabata de 4 minutes chacun (8 rounds x 30s)
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
  ex("warmup", "Marche Dynamique", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place en montant les genoux. Balancez les bras. Augmentez le rythme.", "On réveille le corps ! Le Tabata est intense, on prépare bien.", "IMG_HUNDRED", "Cardio"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On continue.", TRANS, "", true),
  ex("warmup", "Jumping Jacks", 45, "01:00", "Debout, pieds joints.", "Jumping jacks à rythme modéré. Bras au-dessus de la tête.", "Ouvrez grand ! Le cœur monte.", "IMG_HUNDRED", "Cardio, deltoïdes"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On enchaîne.", TRANS, "", true),
  ex("warmup", "Squats Dynamiques", 45, "02:00", "Debout, pieds largeur épaules.", "Squats à rythme soutenu. Bras devant pour l'équilibre.", "Cuisses parallèles ! On prépare les jambes.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "On prépare le haut du corps.", TRANS, "", true),
  ex("warmup", "Inchworm", 45, "03:00", "Debout.", "Penchez-vous, marchez les mains en planche, revenez. Enchaînez.", "Jambes tendues ! On active tout le corps.", "IMG_PUSHUP", "Épaules, ischio-jambiers"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "Dernier exercice d'échauffement.", TRANS, "", true),
  ex("warmup", "High Knees Modérés", 45, "04:00", "Debout.", "Courez sur place, genoux hauts. Rythme modéré.", "Genoux hauts ! Le corps est presque prêt pour le Tabata.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("warmup", "Transition", 15, "04:45", "", "Préparez-vous.", "TABATA BLOC 1 dans 15 secondes ! Format : 20s MAX / 10s repos x 8 rounds !", TRANS, "", true),

  // PHASE 2 — TABATA BLOC 1 : SQUATS SAUTÉS (4 min)
  ex("workout", "Squat Sauté — Round 1", 20, "05:00", "Debout, pieds largeur épaules.", "Squat profond + saut explosif. 20 secondes à fond !", "ROUND 1 ! EXPLOSEZ ! 20 secondes c'est court, donnez TOUT.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "05:20", "", "Respirez.", "10 secondes. Soufflez.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 2", 20, "05:30", "Debout.", "Squat sauté. Même intensité. 20 secondes.", "ROUND 2 ! Même intensité. ALLEZ.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "05:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 3", 20, "06:00", "Debout.", "Squat sauté. Poussez !", "ROUND 3 ! Mi-bloc. Tenez le rythme.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "06:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 4", 20, "06:30", "Debout.", "Squat sauté. Ne lâchez pas !", "ROUND 4 ! Mi-chemin. Gardez l'explosivité.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "06:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 5", 20, "07:00", "Debout.", "Squat sauté. Ça brûle, c'est normal !", "ROUND 5 ! Les cuisses brûlent. C'est le signe que ça marche.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "07:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 6", 20, "07:30", "Debout.", "Squat sauté. Encore 3 rounds !", "ROUND 6 ! Plus que 3. Tenez bon.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "07:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 7", 20, "08:00", "Debout.", "Squat sauté. Avant-dernier !", "ROUND 7 ! Avant-dernier. POUSSEZ.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "08:20", "", "Respirez.", "10 secondes. Dernier round !", TRANS, "", true),
  ex("workout", "Squat Sauté — Round 8", 20, "08:30", "Debout.", "DERNIER ROUND ! Squat sauté maximal.", "DERNIER ! TOUT DONNER ! 20 secondes et c'est fini.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("workout", "Récupération Bloc 1", 30, "08:50", "", "Marchez. Respirez.", "BLOC 1 TERMINÉ ! 30 secondes de récup. Bloc 2 : Burpees.", TRANS, "", true),

  // TABATA BLOC 2 : BURPEES (4 min)
  ex("workout", "Burpee — Round 1", 20, "09:20", "Debout.", "Burpee complet. 20 secondes à fond.", "BLOC 2 : BURPEES ! Round 1. EXPLOSEZ.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "09:40", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 2", 20, "09:50", "Debout.", "Burpee. Même intensité.", "ROUND 2 ! Ne ralentissez pas.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "10:10", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 3", 20, "10:20", "Debout.", "Burpee. Poussez !", "ROUND 3 ! Chaque burpee compte.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "10:40", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 4", 20, "10:50", "Debout.", "Burpee. Mi-bloc !", "ROUND 4 ! Mi-chemin du bloc.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "11:10", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 5", 20, "11:20", "Debout.", "Burpee. Tenez !", "ROUND 5 ! Plus que 3.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "11:40", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 6", 20, "11:50", "Debout.", "Burpee. Encore 3 !", "ROUND 6 ! Courage.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "12:10", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee — Round 7", 20, "12:20", "Debout.", "Burpee. Avant-dernier !", "ROUND 7 ! Avant-dernier. ALLEZ.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "12:40", "", "Respirez.", "Dernier round !", TRANS, "", true),
  ex("workout", "Burpee — Round 8", 20, "12:50", "Debout.", "DERNIER ! Burpee maximal.", "DERNIER BURPEE ! TOUT DONNER !", "IMG_PUSHUP", "Full body"),
  ex("workout", "Récupération Bloc 2", 30, "13:10", "", "Marchez. Respirez.", "BLOC 2 TERMINÉ ! Bloc 3 : Mountain Climbers.", TRANS, "", true),

  // TABATA BLOC 3 : MOUNTAIN CLIMBERS (4 min)
  ex("workout", "Mountain Climbers — Round 1", 20, "13:40", "Planche haute.", "Mountain climbers sprint. 20 secondes.", "BLOC 3 ! Mountain Climbers. SPRINT.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "14:00", "", "Tenez la planche.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 2", 20, "14:10", "Planche haute.", "Sprint ! Genoux vers la poitrine.", "ROUND 2 ! Hanches basses, vitesse max.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "14:30", "", "Tenez la planche.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 3", 20, "14:40", "Planche haute.", "Sprint !", "ROUND 3 ! Le core brûle.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "15:00", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 4", 20, "15:10", "Planche haute.", "Sprint ! Mi-bloc.", "ROUND 4 ! Mi-chemin.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "15:30", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 5", 20, "15:40", "Planche haute.", "Sprint !", "ROUND 5 ! Plus que 3.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "16:00", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 6", 20, "16:10", "Planche haute.", "Sprint !", "ROUND 6 ! Courage.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "16:30", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 7", 20, "16:40", "Planche haute.", "Sprint ! Avant-dernier.", "ROUND 7 ! POUSSEZ.", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Repos", 10, "17:00", "", "Tenez.", "Dernier round !", TRANS, "", true),
  ex("workout", "Mountain Climbers — Round 8", 20, "17:10", "Planche haute.", "DERNIER ! Sprint maximal.", "DERNIER ! SPRINT FINAL !", "IMG_PLANK", "Core, cardio"),
  ex("workout", "Récupération Bloc 3", 30, "17:30", "", "Marchez.", "BLOC 3 TERMINÉ ! Bloc 4 : High Knees.", TRANS, "", true),

  // TABATA BLOC 4 : HIGH KNEES (4 min)
  ex("workout", "High Knees — Round 1", 20, "18:00", "Debout.", "Sprint sur place, genoux hauts. 20 secondes.", "BLOC 4 ! High Knees. SPRINT.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "18:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 2", 20, "18:30", "Debout.", "Sprint ! Genoux hauts.", "ROUND 2 ! Plus haut, plus vite.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "18:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 3", 20, "19:00", "Debout.", "Sprint !", "ROUND 3 !", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "19:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 4", 20, "19:30", "Debout.", "Sprint ! Mi-bloc.", "ROUND 4 ! Mi-chemin.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "19:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 5", 20, "20:00", "Debout.", "Sprint !", "ROUND 5 !", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "20:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 6", 20, "20:30", "Debout.", "Sprint !", "ROUND 6 !", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "20:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "High Knees — Round 7", 20, "21:00", "Debout.", "Sprint ! Avant-dernier.", "ROUND 7 ! POUSSEZ.", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Repos", 10, "21:20", "", "Respirez.", "Dernier round !", TRANS, "", true),
  ex("workout", "High Knees — Round 8", 20, "21:30", "Debout.", "DERNIER ! Sprint maximal.", "DERNIER ! TOUT DONNER !", "IMG_HUNDRED", "Psoas, cardio"),
  ex("workout", "Récupération Bloc 4", 30, "21:50", "", "Marchez.", "BLOC 4 TERMINÉ ! Mi-séance. Bloc 5 : Pompes.", TRANS, "", true),

  // TABATA BLOC 5 : POMPES (4 min)
  ex("workout", "Pompes — Round 1", 20, "22:20", "Planche haute.", "Pompes le plus vite possible. 20 secondes.", "BLOC 5 : POMPES ! Force et vitesse.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "22:40", "", "Tenez la planche.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 2", 20, "22:50", "Planche haute.", "Pompes ! Même rythme.", "ROUND 2 ! Gardez la forme.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "23:10", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 3", 20, "23:20", "Planche haute.", "Pompes !", "ROUND 3 !", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "23:40", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 4", 20, "23:50", "Planche haute.", "Pompes ! Mi-bloc.", "ROUND 4 ! Genoux au sol si besoin.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "24:10", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 5", 20, "24:20", "Planche haute.", "Pompes !", "ROUND 5 !", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "24:40", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 6", 20, "24:50", "Planche haute.", "Pompes !", "ROUND 6 !", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "25:10", "", "Tenez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Pompes — Round 7", 20, "25:20", "Planche haute.", "Pompes ! Avant-dernier.", "ROUND 7 ! POUSSEZ.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Repos", 10, "25:40", "", "Tenez.", "Dernier round !", TRANS, "", true),
  ex("workout", "Pompes — Round 8", 20, "25:50", "Planche haute.", "DERNIER ! Pompes maximales.", "DERNIER ! EXPLOSEZ.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("workout", "Récupération Bloc 5", 30, "26:10", "", "Marchez.", "BLOC 5 TERMINÉ ! Bloc 6 : Fentes Sautées.", TRANS, "", true),

  // TABATA BLOC 6 : FENTES SAUTÉES (4 min — condensé)
  ex("workout", "Fentes Sautées — Rounds 1-4", 20, "26:40", "Position de fente.", "Fentes sautées. Changez en l'air. 20 secondes.", "BLOC 6 : FENTES ! Explosivité.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "27:00", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 2", 20, "27:10", "Fente.", "Fentes sautées !", "ROUND 2 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "27:30", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 3", 20, "27:40", "Fente.", "Fentes sautées !", "ROUND 3 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "28:00", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 4", 20, "28:10", "Fente.", "Fentes sautées ! Mi-bloc.", "ROUND 4 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "28:30", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 5", 20, "28:40", "Fente.", "Fentes sautées !", "ROUND 5 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "29:00", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 6", 20, "29:10", "Fente.", "Fentes sautées !", "ROUND 6 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "29:30", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 7", 20, "29:40", "Fente.", "Fentes sautées ! Avant-dernier.", "ROUND 7 !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Repos", 10, "30:00", "", "Respirez.", "Dernier !", TRANS, "", true),
  ex("workout", "Fentes Sautées — Round 8", 20, "30:10", "Fente.", "DERNIER !", "DERNIER ! EXPLOSEZ.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Récupération Bloc 6", 30, "30:30", "", "Marchez.", "BLOC 6 TERMINÉ ! Dernier bloc : Burpee + Tuck Jump.", TRANS, "", true),

  // TABATA BLOC 7 — FINISHER : BURPEE + TUCK JUMP
  ex("workout", "Burpee + Tuck — Round 1", 20, "31:00", "Debout.", "Burpee puis tuck jump. Le combo ultime.", "BLOC FINAL ! Burpee + Tuck Jump. TOUT DONNER.", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Repos", 10, "31:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 2", 20, "31:30", "Debout.", "Burpee + tuck jump !", "ROUND 2 !", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "31:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 3", 20, "32:00", "Debout.", "Burpee + tuck jump !", "ROUND 3 !", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "32:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 4", 20, "32:30", "Debout.", "Burpee + tuck jump ! Mi-bloc.", "ROUND 4 ! Mi-chemin du dernier bloc.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "32:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 5", 20, "33:00", "Debout.", "Burpee + tuck jump !", "ROUND 5 ! Plus que 3.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "33:20", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 6", 20, "33:30", "Debout.", "Burpee + tuck jump !", "ROUND 6 ! Courage.", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "33:50", "", "Respirez.", "10 secondes.", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 7", 20, "34:00", "Debout.", "Burpee + tuck jump ! Avant-dernier.", "ROUND 7 ! AVANT-DERNIER !", "IMG_PUSHUP", "Full body"),
  ex("workout", "Repos", 10, "34:20", "", "Respirez.", "DERNIER ROUND DE TOUTE LA SÉANCE !", TRANS, "", true),
  ex("workout", "Burpee + Tuck — Round 8 FINAL", 20, "34:30", "Debout.", "DERNIER ROUND ! Burpee + tuck jump. TOUT CE QU'IL VOUS RESTE.", "C'EST LE DERNIER DE TOUTE LA SÉANCE ! DONNEZ ABSOLUMENT TOUT !", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "34:50", "", "Marchez.", "TABATA TERMINÉ ! INCROYABLE ! Retour au calme.", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~5 min)
  ex("cooldown", "Marche Récupération", 60, "35:10", "Marchez lentement.", "Marchez, respirez profondément. Le cœur redescend.", "Bravo ! 7 blocs Tabata. Vous êtes des machines.", "IMG_RESPIRATION", "Récupération"),
  ex("cooldown", "Transition", 15, "36:10", "", "Restez debout.", "On étire.", TRANS, "", true),
  ex("cooldown", "Étirement Quadriceps", 45, "36:25", "Debout, attrapez le pied.", "20s chaque côté.", "Étirez en douceur.", "IMG_REVERSE_LUNGE", "Quadriceps"),
  ex("cooldown", "Transition", 15, "37:10", "", "Au sol.", "On continue.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "37:25", "À genoux, bras devant, front au sol.", "Respirez profondément. Étirez le dos.", "Le corps récupère. Respirez.", "IMG_CHILD_POSE", "Dos, relaxation"),
  ex("cooldown", "Transition", 15, "38:25", "", "Allongez-vous.", "Dernière posture.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "38:40", "Allongé sur le dos.", "Fermez les yeux. Relâchez tout.", "Vous l'avez fait ! 7 blocs Tabata. Votre métabolisme est boosté pour 48h. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation"),
];

export const session15: SessionConfig = {
  id: "hiit-tabata",
  title: "HIIT Tabata",
  subtitle: "20s Effort / 10s Repos",
  description: "Tabata classique : 7 blocs de 8 rounds (20s effort max / 10s repos). Squats sautés, burpees, mountain climbers, high knees, pompes, fentes sautées, burpee+tuck jump. Le format le plus intense.",
  level: "Avancé",
  duration: "~40 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement", workout: "Tabata", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "purple",
  finishMessage: "LÉGENDAIRE ! 7 blocs Tabata terminés ! C'est le format le plus intense qui existe. Votre métabolisme est boosté pour les 48 prochaines heures. Hydratez-vous, mangez bien, reposez-vous. Vous êtes des champions ! À très bientôt avec Coach Mimi !",
};
