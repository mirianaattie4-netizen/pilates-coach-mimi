/*
 * SÉANCE 20 — Musculation Push (Poitrine, Épaules, Triceps) — ~50 min
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
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
  ex("warmup", "Cercles de Bras", 45, "00:00", "Debout, bras tendus sur les côtés.", "Faites des cercles progressifs avec les bras. Petits puis grands. Changez de sens à mi-temps.", "On ouvre les épaules ! Cercles de plus en plus grands !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Épaules, coiffe des rotateurs"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Pompes Murales", 45, "01:00", "Debout face au mur, mains sur le mur à hauteur d'épaules.", "Pompes contre le mur. Descendez le buste vers le mur, poussez pour revenir.", "Pompes murales ! On prépare les pectoraux en douceur.", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Bras Dynamiques", 45, "02:00", "Debout, bras tendus devant.", "Ouvrez les bras en croix puis refermez. Alternez paumes vers le haut et vers le bas.", "Ouvrez, fermez ! Activez les pectoraux et le dos !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Pectoraux, dos"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Échauffement terminé !", TRANS, "", true),

  // PHASE 2 — MUSCULATION PUSH (~38 min)
  // Bloc 1 — Pectoraux
  ex("workout", "Pompes Classiques", 45, "03:00", "Position planche, mains largeur épaules.", "Pompes complètes. Poitrine au sol, poussez fort. Tempo 2-1-2.", "Pompes classiques ! Tempo contrôlé ! 2 secondes descente, 1 pause, 2 montée !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, deltoïdes"),
  ex("workout", "Transition", 15, "03:45", "", "Restez en planche.", "Suivant !", TRANS, "", true),
  ex("workout", "Pompes Larges", 45, "04:00", "Position planche, mains très écartées.", "Pompes avec mains écartées. Descendez la poitrine entre les mains.", "Mains larges ! Pectoraux externes ! Descendez profond !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux externes"),
  ex("workout", "Transition", 15, "04:45", "", "Restez en planche.", "On continue !", TRANS, "", true),
  ex("workout", "Pompes Déclinées", 45, "05:00", "Position planche, pieds surélevés sur un step ou une chaise.", "Pompes avec les pieds en hauteur. Cible le haut des pectoraux.", "Pieds surélevés ! Haut des pecs ! Descendez le front vers le sol !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux supérieurs, deltoïdes"),
  ex("workout", "Transition", 15, "05:45", "", "Restez en planche.", "Dernier du bloc !", TRANS, "", true),
  ex("workout", "Pompes Isométriques", 45, "06:00", "Position planche, descendez à mi-chemin.", "Tenez la position basse des pompes. Coudes à 90°. Ne bougez pas.", "Isométrique ! Tenez ! Les pectoraux brûlent, c'est le but !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, core"),
  ex("workout", "Repos Bloc", 30, "06:45", "", "Secouez les bras.", "Bloc pectoraux terminé ! 30s repos.", TRANS, "", true),

  // Bloc 2 — Épaules
  ex("workout", "Pike Push-Ups", 45, "07:15", "Position V inversé, fessiers en l'air.", "Pliez les coudes, descendez la tête vers le sol. Poussez pour remonter.", "Pike push-ups ! Épaules à fond ! Descendez la tête !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Deltoïdes antérieurs, triceps"),
  ex("workout", "Transition", 15, "08:00", "", "Restez en position.", "Suivant !", TRANS, "", true),
  ex("workout", "Planche Latérale + Rotation", 45, "08:15", "Planche latérale sur la main.", "Rotation : passez le bras libre sous le corps puis vers le ciel. Changez de côté à mi-temps.", "Rotation ! Sous le corps puis vers le ciel ! Épaules et obliques !", resolveImageUrl("IMG_PLANK_ROTATION"), "Deltoïdes, obliques, core"),
  ex("workout", "Transition", 15, "09:00", "", "Changez de position.", "On continue !", TRANS, "", true),
  ex("workout", "Élévation Latérale Isométrique", 45, "09:15", "Debout, bras tendus sur les côtés à hauteur d'épaules.", "Tenez les bras à l'horizontale. Ne les laissez pas descendre. Serrez les deltoïdes.", "Bras à l'horizontale ! Tenez ! Les épaules brûlent !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Deltoïdes latéraux"),
  ex("workout", "Transition", 15, "10:00", "", "Baissez les bras.", "Dernier du bloc !", TRANS, "", true),
  ex("workout", "Pike Push-Ups Étroites", 45, "10:15", "Position V inversé, mains rapprochées.", "Pike push-ups avec mains serrées. Plus de travail sur les triceps.", "Mains serrées ! Triceps et épaules ! Descendez contrôlé !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Deltoïdes, triceps"),
  ex("workout", "Repos Bloc", 30, "11:00", "", "Secouez les bras.", "Bloc épaules terminé ! 30s repos.", TRANS, "", true),

  // Bloc 3 — Triceps
  ex("workout", "Pompes Diamant", 45, "11:30", "Position planche, mains en diamant.", "Pompes serrées. Coudes le long du corps. Descendez lentement.", "Diamant ! Coudes serrés ! Triceps en feu !", resolveImageUrl("IMG_PUSHUP"), "Triceps, pectoraux internes"),
  ex("workout", "Transition", 15, "12:15", "", "Asseyez-vous.", "Dips !", TRANS, "", true),
  ex("workout", "Dips au Sol", 45, "12:30", "Assis, mains derrière, doigts vers l'avant, pieds au sol.", "Pliez les coudes pour descendre. Poussez pour remonter. Contrôlez.", "Dips ! Coudes en arrière ! Triceps isolés !", resolveImageUrl("IMG_PUSHUP"), "Triceps"),
  ex("workout", "Transition", 15, "13:15", "", "Restez assis.", "Suivant !", TRANS, "", true),
  ex("workout", "Dips Jambes Tendues", 45, "13:30", "Assis, mains derrière, jambes tendues devant.", "Dips avec jambes tendues. Plus difficile ! Descendez profond.", "Jambes tendues ! Plus dur ! Triceps à fond !", resolveImageUrl("IMG_PUSHUP"), "Triceps, épaules"),
  ex("workout", "Transition", 15, "14:15", "", "Retournez en planche.", "Dernier !", TRANS, "", true),
  ex("workout", "Pompes Triceps (Coudes Serrés)", 45, "14:30", "Position planche, mains largeur épaules, coudes collés au corps.", "Pompes avec coudes serrés le long du corps. Descendez lentement.", "Coudes collés au corps ! Triceps purs ! Contrôlez la descente !", resolveImageUrl("IMG_PUSHUP"), "Triceps"),
  ex("workout", "Repos Bloc", 30, "15:15", "", "Secouez les bras.", "Bloc triceps terminé ! 30s repos.", TRANS, "", true),

  // Bloc 4 — Finisher Push
  ex("workout", "Pompes Explosives", 45, "15:45", "Position planche.", "Pompes explosives : poussez assez fort pour que les mains décollent du sol.", "Pompes explosives ! Décollez les mains ! Puissance maximale !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, puissance"),
  ex("workout", "Transition", 15, "16:30", "", "Restez en planche.", "Dernier exercice !", TRANS, "", true),
  ex("workout", "Pompes jusqu'à l'Échec", 45, "16:45", "Position planche.", "Pompes classiques jusqu'à l'échec musculaire. Quand vous ne pouvez plus, passez sur les genoux.", "Dernières pompes ! Jusqu'à l'échec ! Videz le réservoir !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, épaules"),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Transition", 15, "17:30", "", "Descendez au sol.", "Retour au calme.", TRANS, "", true),
  ex("cooldown", "Étirement Pectoraux", 45, "17:45", "Allongé sur le dos, bras en croix.", "Laissez les bras s'ouvrir. Respirez profondément.", "Ouvrez la poitrine. Respirez. Relâchez les pectoraux.", resolveImageUrl("IMG_SHOULDER_PRESS"), "Pectoraux"),
  ex("cooldown", "Transition", 15, "18:30", "", "Restez au sol.", "On continue.", TRANS, "", true),
  ex("cooldown", "Étirement Triceps", 45, "18:45", "Assis ou debout, un bras plié derrière la tête.", "Tirez le coude avec l'autre main. Sentez l'étirement du triceps. Changez de côté.", "Tirez doucement. Respirez dans l'étirement.", resolveImageUrl("IMG_SHOULDER_PRESS"), "Triceps"),
  ex("cooldown", "Transition", 15, "19:30", "", "Changez.", "Dernier étirement.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "19:45", "À genoux, fessiers sur les talons, bras devant.", "Front au sol. Respirez profondément. Relâchez le haut du corps.", "Posture de l'enfant. Relâchez tout. Vous avez tout donné.", resolveImageUrl("IMG_CHILD_POSE"), "Dos, épaules"),
  ex("cooldown", "Transition", 15, "20:45", "", "Allongez-vous.", "Relaxation.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "21:00", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez chaque muscle.", "Push Day terminé ! Pectoraux, épaules et triceps ont tout donné ! Bravo ! Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation"),
];

export const session20: SessionConfig = {
  id: "muscu-push",
  title: "Musculation Push",
  subtitle: "Poitrine, Épaules & Triceps",
  description: "Séance Push au poids du corps : 4 blocs ciblés (pectoraux, épaules, triceps, finisher) pour sculpter le haut du corps sans matériel.",
  duration: "~22 min",
  level: "Intermédiaire",
  equipment: "Aucun — Poids du corps",
  category: "musculation",
  phaseLabels: { warmup: "Échauffement", workout: "Push Day", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-rose-600 to-pink-500",
  finishMessage: "Push Day terminé ! Pectoraux, épaules et triceps sculptés !",
};
