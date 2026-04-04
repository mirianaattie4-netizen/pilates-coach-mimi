/*
 * SÉANCE 16 — HIIT Pyramide — ~50 min
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * Format Pyramide: 20s → 30s → 40s → 50s → 40s → 30s → 20s par exercice
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
  ex("warmup", "Marche Dynamique", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place en montant les genoux haut. Balancez les bras. Augmentez le rythme progressivement.", "On réveille le corps ! Montez les genoux, respirez profondément.", resolveImageUrl("IMG_HUNDRED"), "Cardio, psoas"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Rotations de Hanches", 45, "01:00", "Debout, mains sur les hanches.", "Faites de grands cercles avec les hanches dans un sens puis l'autre. Amplifiez le mouvement.", "Ouvrez les hanches ! Grands cercles, on mobilise le bassin.", resolveImageUrl("IMG_CAT_COW"), "Hanches, bassin"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Squats Légers", 45, "02:00", "Debout, pieds largeur épaules.", "Descendez en squat contrôlé, bras devant. Remontez doucement. Rythme modéré.", "Poitrine haute, genoux au-dessus des orteils. On chauffe les cuisses.", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Préparez-vous !", TRANS, "", true),
  ex("warmup", "Jumping Jacks Légers", 45, "03:00", "Debout, pieds joints.", "Sautez en écartant pieds et bras. Revenez position initiale. Rythme modéré.", "On monte le cardio doucement ! Souplesse dans les genoux.", resolveImageUrl("IMG_HUNDRED"), "Cardio, deltoïdes"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "Dernier exercice d'échauffement.", TRANS, "", true),
  ex("warmup", "Fentes Dynamiques", 45, "04:00", "Debout, pieds joints.", "Fente avant alternée droite-gauche. Bras en opposition. Rythme fluide.", "Grand pas, genou à 90°. On active les fessiers et les cuisses.", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers, psoas"),
  ex("warmup", "Transition", 15, "04:45", "", "Restez debout.", "Échauffement terminé ! On attaque la pyramide !", TRANS, "", true),

  // PHASE 2 — HIIT PYRAMIDE (~38 min)
  // Pyramide montante: 20s → 30s → 40s → 50s puis descendante: 40s → 30s → 20s
  // Bloc 1 — Squats
  ex("workout", "Squat Jump — 20s", 20, "05:00", "Debout, pieds largeur épaules.", "Squat puis sautez explosif. Atterrissez en douceur, enchaînez immédiatement.", "20 secondes ! C'est court, donnez TOUT ! Explosez vers le haut !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "05:20", "", "Soufflez.", "Récupérez 15 secondes.", TRANS, "", true),
  ex("workout", "Squat Jump — 30s", 30, "05:35", "Debout, pieds largeur épaules.", "Squat puis sautez explosif. Même mouvement, 10 secondes de plus !", "30 secondes maintenant ! Gardez l'explosivité ! On monte la pyramide !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "06:05", "", "Soufflez.", "Ça monte ! Préparez-vous pour 40s.", TRANS, "", true),
  ex("workout", "Squat Jump — 40s", 40, "06:20", "Debout, pieds largeur épaules.", "Squat jump continu. Gardez la forme même quand ça brûle !", "40 secondes ! La pyramide monte ! Poussez, poussez, poussez !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "07:00", "", "Soufflez.", "Sommet de la pyramide !", TRANS, "", true),
  ex("workout", "Squat Jump — 50s", 50, "07:15", "Debout, pieds largeur épaules.", "Squat jump maximal ! C'est le sommet de la pyramide. Donnez absolument tout !", "50 SECONDES ! C'est le sommet ! Mental d'acier ! Chaque saut compte !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "08:05", "", "Soufflez.", "On redescend maintenant !", TRANS, "", true),
  ex("workout", "Squat Jump — 40s", 40, "08:20", "Debout, pieds largeur épaules.", "On redescend ! 40 secondes. Gardez l'intensité.", "On redescend la pyramide ! 40s, c'est plus facile que 50 !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "09:00", "", "Soufflez.", "Encore 30s puis 20s !", TRANS, "", true),
  ex("workout", "Squat Jump — 30s", 30, "09:15", "Debout, pieds largeur épaules.", "30 secondes ! La fin approche pour ce bloc.", "30s ! On voit la fin ! Explosivité maximale !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 15, "09:45", "", "Soufflez.", "Dernier effort !", TRANS, "", true),
  ex("workout", "Squat Jump — 20s", 20, "10:00", "Debout, pieds largeur épaules.", "20 secondes finales ! Sprint total !", "20s ! SPRINT FINAL ! Donnez TOUT ce qui reste !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 30, "10:20", "", "Marchez sur place.", "Bravo ! Bloc 1 terminé. Récupération 30 secondes.", TRANS, "", true),

  // Bloc 2 — Burpees
  ex("workout", "Burpee — 20s", 20, "10:50", "Debout.", "Descendez, mains au sol, sautez pieds en arrière, pompe, sautez pieds en avant, sautez en l'air.", "20 secondes de burpees ! C'est court, explosez !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "11:10", "", "Soufflez.", "On monte !", TRANS, "", true),
  ex("workout", "Burpee — 30s", 30, "11:25", "Debout.", "Burpees continus. Gardez le rythme.", "30s ! Chaque burpee compte ! Poitrine au sol, saut en l'air !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "11:55", "", "Soufflez.", "40 secondes arrivent !", TRANS, "", true),
  ex("workout", "Burpee — 40s", 40, "12:10", "Debout.", "Burpees 40 secondes. Le mental fait la différence !", "40s de burpees ! Vous êtes des guerriers ! On lâche rien !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "12:50", "", "Soufflez.", "Sommet !", TRANS, "", true),
  ex("workout", "Burpee — 50s", 50, "13:05", "Debout.", "50 secondes ! Sommet de la pyramide burpees. Tout donner !", "SOMMET ! 50 secondes ! C'est ici que vous devenez plus fort !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "13:55", "", "Soufflez.", "On redescend !", TRANS, "", true),
  ex("workout", "Burpee — 40s", 40, "14:10", "Debout.", "Redescente 40s. Gardez la technique.", "On redescend ! 40s c'est gérable après 50 !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "14:50", "", "Soufflez.", "Presque fini !", TRANS, "", true),
  ex("workout", "Burpee — 30s", 30, "15:05", "Debout.", "30 secondes. Sprint !", "30s ! La fin du bloc approche ! Accélérez !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 15, "15:35", "", "Soufflez.", "Dernier effort !", TRANS, "", true),
  ex("workout", "Burpee — 20s", 20, "15:50", "Debout.", "20 secondes finales ! Tout donner !", "20s FINALES ! SPRINT ! ALLEZ ALLEZ ALLEZ !", resolveImageUrl("IMG_PUSHUP"), "Full body"),
  ex("workout", "Transition", 30, "16:10", "", "Marchez.", "Bloc 2 terminé ! Récupération.", TRANS, "", true),

  // Bloc 3 — Mountain Climbers
  ex("workout", "Mountain Climbers — 20s", 20, "16:40", "Position planche, mains sous les épaules.", "Amenez les genoux alternativement vers la poitrine. Rythme rapide.", "20s ! Genoux vers la poitrine, vite vite vite !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "17:00", "", "Restez en planche.", "On monte !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 30s", 30, "17:15", "Position planche.", "Mountain climbers continus. Gardez les hanches basses.", "30s ! Hanches basses, genoux rapides ! On accélère !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "17:45", "", "Soufflez.", "40s arrivent !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 40s", 40, "18:00", "Position planche.", "40 secondes de mountain climbers. Le core brûle, c'est normal !", "40s ! Le core travaille à fond ! Gardez la planche solide !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "18:40", "", "Soufflez.", "Sommet !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 50s", 50, "18:55", "Position planche.", "50 secondes ! Sommet ! Chaque seconde compte !", "SOMMET ! 50s ! Vous êtes indestructibles ! Tenez bon !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "19:45", "", "Soufflez.", "Redescente !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 40s", 40, "20:00", "Position planche.", "Redescente 40s. Technique propre.", "40s en redescente ! C'est plus facile maintenant !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "20:40", "", "Soufflez.", "Presque fini !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 30s", 30, "20:55", "Position planche.", "30 secondes. Accélérez !", "30s ! Sprint final du bloc ! Allez !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 15, "21:25", "", "Soufflez.", "Dernier !", TRANS, "", true),
  ex("workout", "Mountain Climbers — 20s", 20, "21:40", "Position planche.", "20 secondes finales ! Maximum !", "20s ! DERNIER EFFORT ! TOUT DONNER !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas, cardio"),
  ex("workout", "Transition", 30, "22:00", "", "Marchez.", "Bloc 3 terminé ! Bravo !", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Étirement Quadriceps", 45, "22:30", "Debout, attrapez un pied derrière vous.", "Tirez le talon vers le fessier. Gardez le genou pointé vers le sol. Changez de côté à mi-temps.", "Respirez profondément. Relâchez les quadriceps qui ont beaucoup travaillé.", resolveImageUrl("IMG_CHILD_POSE"), "Quadriceps"),
  ex("cooldown", "Transition", 15, "23:15", "", "Changez de position.", "On continue les étirements.", TRANS, "", true),
  ex("cooldown", "Étirement Ischio-jambiers", 45, "23:30", "Debout, un pied devant, pointe relevée.", "Penchez le buste en avant, dos droit. Sentez l'étirement derrière la cuisse. Changez de côté.", "Dos droit, on ne s'arrondit pas. Respirez dans l'étirement.", resolveImageUrl("IMG_RDL"), "Ischio-jambiers"),
  ex("cooldown", "Transition", 15, "24:15", "", "Descendez au sol.", "On passe au sol.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "24:30", "À genoux, fessiers sur les talons.", "Tendez les bras devant, front au sol. Respirez profondément. Relâchez tout le corps.", "Laissez tout le stress partir. Respirez lentement. Vous avez été incroyable.", resolveImageUrl("IMG_CHILD_POSE"), "Dos, épaules"),
  ex("cooldown", "Transition", 15, "25:30", "", "Restez au sol.", "Dernier étirement.", TRANS, "", true),
  ex("cooldown", "Cobra Doux", 45, "25:45", "Allongé sur le ventre, mains sous les épaules.", "Poussez doucement pour lever la poitrine. Gardez les hanches au sol. Respirez.", "Ouvrez la poitrine, regardez devant. Respiration lente et profonde.", resolveImageUrl("IMG_SWIMMING"), "Dos, abdominaux"),
  ex("cooldown", "Transition", 15, "26:30", "", "Allongez-vous sur le dos.", "Relaxation finale.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "26:45", "Allongé sur le dos, bras le long du corps, paumes vers le ciel.", "Fermez les yeux. Relâchez chaque muscle. Respirez naturellement. Savourez ce moment.", "Bravo Coach ! Vous avez conquis la pyramide ! Fierté totale. Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation complète"),
];

export const session16: SessionConfig = {
  id: "hiit-pyramide",
  title: "HIIT Pyramide",
  subtitle: "Montée & Descente en Intensité",
  description: "Format pyramide unique : le temps d'effort augmente puis diminue (20s→30s→40s→50s→40s→30s→20s). Un défi mental et physique progressif.",
  duration: "~28 min",
  level: "Avancé",
  equipment: "Aucun — Poids du corps",
  category: "hiit",
  phaseLabels: { warmup: "Échauffement", workout: "Pyramide HIIT", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-amber-600 to-red-500",
  finishMessage: "Bravo ! Vous avez conquis la pyramide ! Fierté totale !",
};
