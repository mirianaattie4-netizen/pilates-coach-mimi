/*
 * SÉANCE 18 — HIIT AMRAP (As Many Rounds As Possible) — ~45 min
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * Format: Circuits de 5 exercices, enchaînez le max de tours en temps limité
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
  ex("warmup", "Marche Rapide", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez rapidement sur place. Montez les genoux. Balancez les bras.", "On réveille le corps ! Rythme soutenu dès le départ !", resolveImageUrl("IMG_HUNDRED"), "Cardio"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Squat + Rotation", 45, "01:00", "Debout, pieds largeur épaules.", "Squat puis rotation du buste avec bras tendu vers le ciel. Alternez les côtés.", "Squat profond, puis ouvrez la poitrine en tournant ! Mobilité + force.", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, obliques"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Jumping Jacks", 45, "02:00", "Debout, pieds joints.", "Jumping jacks classiques. Rythme progressif.", "Ouvrez les bras et les jambes ! On monte le cardio !", resolveImageUrl("IMG_HUNDRED"), "Cardio, deltoïdes"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Préparez-vous pour l'AMRAP !", TRANS, "", true),
  ex("warmup", "Inchworm + Push-Up", 45, "03:00", "Debout.", "Penchez-vous, marchez en planche, faites une pompe, revenez debout.", "Inchworm complet ! On active tout le corps !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("warmup", "Transition", 15, "03:45", "", "Soufflez.", "AMRAP dans 15 secondes !", TRANS, "", true),

  // PHASE 2 — AMRAP (~34 min) — 3 blocs AMRAP de ~10 min
  // AMRAP Bloc 1 — Upper Body Focus
  ex("workout", "AMRAP 1.1 — Push-Ups x10", 40, "04:00", "Position planche.", "10 pompes complètes. Poitrine au sol, bras tendus. Enchaînez vite.", "AMRAP ! 10 pompes puis passez au suivant ! Vite vite vite !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps"),
  ex("workout", "Transition", 10, "04:40", "", "Changez.", "Enchaînez !", TRANS, "", true),
  ex("workout", "AMRAP 1.2 — Dips au Sol x10", 40, "04:50", "Assis, mains derrière, doigts vers l'avant, pieds au sol.", "Pliez les coudes pour descendre, poussez pour remonter. 10 reps.", "Dips ! Coudes en arrière ! Triceps en feu !", resolveImageUrl("IMG_PUSHUP"), "Triceps, épaules"),
  ex("workout", "Transition", 10, "05:30", "", "Changez.", "Suivant !", TRANS, "", true),
  ex("workout", "AMRAP 1.3 — Pike Push-Ups x8", 40, "05:40", "Position V inversé.", "8 pike push-ups. Descendez la tête vers le sol.", "Pike push-ups ! Épaules à fond ! 8 reps !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Épaules, triceps"),
  ex("workout", "Transition", 10, "06:20", "", "Changez.", "On continue !", TRANS, "", true),
  ex("workout", "AMRAP 1.4 — Planche 30s", 30, "06:30", "Position planche sur les avant-bras.", "Tenez 30 secondes. Corps aligné. Serrez le core.", "Planche ! 30 secondes ! Serrez tout ! Pas de relâchement !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core"),
  ex("workout", "Transition", 10, "07:00", "", "Changez.", "Dernier du circuit !", TRANS, "", true),
  ex("workout", "AMRAP 1.5 — Superman x10", 40, "07:10", "Allongé sur le ventre, bras devant.", "Levez bras et jambes simultanément. Tenez 2s en haut. 10 reps.", "Superman ! Levez tout ! Serrez les fessiers en haut !", resolveImageUrl("IMG_SWIMMING"), "Dos, fessiers"),
  ex("workout", "Repos AMRAP", 30, "07:50", "", "Marchez.", "Fin du tour ! Recommencez le circuit ou repos 30s.", TRANS, "", true),
  // AMRAP Bloc 1 — Tour 2
  ex("workout", "AMRAP 1.1 — Push-Ups x10 (T2)", 40, "08:20", "Position planche.", "Tour 2 ! 10 pompes. Gardez la qualité même fatigué.", "Tour 2 ! Même qualité ! Poitrine au sol !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps"),
  ex("workout", "Transition", 10, "09:00", "", "Changez.", "Enchaînez !", TRANS, "", true),
  ex("workout", "AMRAP 1.2 — Dips au Sol x10 (T2)", 40, "09:10", "Assis, mains derrière.", "10 dips. Gardez le rythme.", "Dips tour 2 ! On lâche rien !", resolveImageUrl("IMG_PUSHUP"), "Triceps"),
  ex("workout", "Transition", 10, "09:50", "", "Changez.", "Suivant !", TRANS, "", true),
  ex("workout", "AMRAP 1.3 — Pike Push-Ups x8 (T2)", 40, "10:00", "Position V inversé.", "8 pike push-ups tour 2.", "Pike push-ups ! Les épaules brûlent, c'est normal !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Épaules"),
  ex("workout", "Transition", 10, "10:40", "", "Changez.", "Presque fini !", TRANS, "", true),
  ex("workout", "AMRAP 1.4 — Planche 30s (T2)", 30, "10:50", "Planche avant-bras.", "30 secondes. Tenez bon !", "Planche tour 2 ! Mental d'acier !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core"),
  ex("workout", "Transition", 10, "11:20", "", "Changez.", "Dernier !", TRANS, "", true),
  ex("workout", "AMRAP 1.5 — Superman x10 (T2)", 40, "11:30", "Sur le ventre.", "10 superman. Dernières reps du bloc 1.", "Superman final ! Serrez les fessiers ! Bravo bloc 1 !", resolveImageUrl("IMG_SWIMMING"), "Dos, fessiers"),
  ex("workout", "Repos entre blocs", 45, "12:10", "", "Marchez, hydratez-vous.", "Bloc 1 terminé ! 45 secondes de récupération.", TRANS, "", true),

  // AMRAP Bloc 2 — Lower Body Focus
  ex("workout", "AMRAP 2.1 — Squat Jump x10", 40, "12:55", "Debout, pieds largeur épaules.", "10 squat jumps explosifs. Atterrissage souple.", "Bloc 2 ! Bas du corps ! 10 squat jumps ! Explosez !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 10, "13:35", "", "Changez.", "Suivant !", TRANS, "", true),
  ex("workout", "AMRAP 2.2 — Fentes Sautées x10", 40, "13:45", "Position fente.", "10 fentes sautées alternées. Changez en l'air.", "Fentes sautées ! Explosivité ! Atterrissage contrôlé !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 10, "14:25", "", "Changez.", "On continue !", TRANS, "", true),
  ex("workout", "AMRAP 2.3 — Glute Bridge x15", 40, "14:35", "Allongé sur le dos, pieds au sol.", "15 ponts fessiers. Serrez fort en haut. Redescendez contrôlé.", "Pont fessier ! Serrez 2 secondes en haut ! 15 reps !", resolveImageUrl("IMG_BRIDGE"), "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 10, "15:15", "", "Changez.", "Suivant !", TRANS, "", true),
  ex("workout", "AMRAP 2.4 — Wall Sit 30s", 30, "15:25", "Dos contre le mur, cuisses parallèles.", "Tenez la chaise 30 secondes. Cuisses à 90°.", "Chaise ! 30 secondes ! Les cuisses brûlent, c'est le but !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, isométrique"),
  ex("workout", "Transition", 10, "15:55", "", "Changez.", "Dernier !", TRANS, "", true),
  ex("workout", "AMRAP 2.5 — Calf Raises x20", 40, "16:05", "Debout, pieds largeur hanches.", "20 montées sur pointes. Montez haut, descendez lentement.", "Montées sur pointes ! 20 reps ! Mollets en feu !", resolveImageUrl("IMG_HUNDRED"), "Mollets"),
  ex("workout", "Repos AMRAP", 30, "16:45", "", "Marchez.", "Tour 1 terminé ! On recommence !", TRANS, "", true),
  // Tour 2
  ex("workout", "AMRAP 2.1 — Squat Jump x10 (T2)", 40, "17:15", "Debout.", "Tour 2 ! 10 squat jumps.", "Tour 2 bas du corps ! Même énergie !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 10, "17:55", "", "Changez.", "Enchaînez !", TRANS, "", true),
  ex("workout", "AMRAP 2.2 — Fentes Sautées x10 (T2)", 40, "18:05", "Position fente.", "10 fentes sautées tour 2.", "Fentes ! On garde l'explosivité !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 10, "18:45", "", "Changez.", "Suivant !", TRANS, "", true),
  ex("workout", "AMRAP 2.3 — Glute Bridge x15 (T2)", 40, "18:55", "Sur le dos.", "15 ponts fessiers tour 2.", "Ponts ! Serrez fort en haut !", resolveImageUrl("IMG_BRIDGE"), "Fessiers"),
  ex("workout", "Transition", 10, "19:35", "", "Changez.", "Presque fini !", TRANS, "", true),
  ex("workout", "AMRAP 2.4 — Wall Sit 30s (T2)", 30, "19:45", "Dos au mur.", "Chaise 30s tour 2. Tenez !", "Chaise murale ! Mental ! Tenez bon !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps"),
  ex("workout", "Transition", 10, "20:15", "", "Changez.", "Dernier !", TRANS, "", true),
  ex("workout", "AMRAP 2.5 — Calf Raises x20 (T2)", 40, "20:25", "Debout.", "20 calf raises. Dernier exercice !", "Dernières montées ! Bloc 2 terminé ! Bravo !", resolveImageUrl("IMG_HUNDRED"), "Mollets"),
  ex("workout", "Repos entre blocs", 45, "21:05", "", "Marchez.", "Bloc 2 terminé ! Dernier bloc !", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~5 min)
  ex("cooldown", "Étirement Quadriceps Debout", 45, "21:50", "Debout, attrapez un pied.", "Tirez le talon vers le fessier. Changez de côté à mi-temps.", "Respirez. Relâchez les quadriceps. Douceur.", resolveImageUrl("IMG_CHILD_POSE"), "Quadriceps"),
  ex("cooldown", "Transition", 15, "22:35", "", "Changez.", "On continue.", TRANS, "", true),
  ex("cooldown", "Pigeon au Sol", 45, "22:50", "Au sol, jambe avant pliée, jambe arrière tendue.", "Penchez le buste vers l'avant. Respirez profondément. Changez de côté.", "Pigeon ! Ouvrez les hanches. Respirez dans l'étirement.", resolveImageUrl("IMG_CHILD_POSE"), "Fessiers, hanches"),
  ex("cooldown", "Transition", 15, "23:35", "", "Changez.", "Dernier étirement.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "23:50", "À genoux, fessiers sur les talons, bras devant.", "Front au sol. Respirez profondément. Relâchez tout.", "Posture de l'enfant. Laissez tout partir. Vous avez été incroyable.", resolveImageUrl("IMG_CHILD_POSE"), "Dos, épaules"),
  ex("cooldown", "Transition", 15, "24:50", "", "Allongez-vous.", "Relaxation.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "25:05", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez chaque muscle. Savourez.", "AMRAP terminé ! Vous avez tout donné ! Fierté ! Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation"),
];

export const session18: SessionConfig = {
  id: "hiit-amrap",
  title: "HIIT AMRAP",
  subtitle: "As Many Rounds As Possible",
  description: "Format AMRAP : enchaînez le maximum de tours d'un circuit de 5 exercices. 2 blocs (haut du corps + bas du corps) pour un travail complet et intense.",
  duration: "~26 min",
  level: "Intermédiaire",
  equipment: "Aucun — Poids du corps",
  category: "hiit",
  phaseLabels: { warmup: "Échauffement", workout: "AMRAP Circuit", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-sky-600 to-blue-500",
  finishMessage: "AMRAP terminé ! Vous avez tout donné ! Fierté !",
};
