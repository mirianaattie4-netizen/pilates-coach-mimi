/*
 * SÉANCE 19 — Musculation Full Body — ~55 min
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement (Bodyweight)
 * Format: 45s effort / 15s repos — Travail complet de tout le corps
 */
import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";
const TRANS = "";
let id = 0;
const ex = (phase: "warmup" | "workout" | "cooldown", name: string, dur: number, start: string, pos: string, mov: string, coach: string, img: string, muscles: string, isTrans = false): Exercise => ({
  id: ++id, phase, isTransition: isTrans, name, duration: dur, startTime: start, position: pos, movement: mov, coaching: coach, imageUrl: isTrans ? "" : img, targetMuscles: muscles,
});
const exercises: Exercise[] = [
  // PHASE 1 — ÉCHAUFFEMENT (~8 min)
  ex("warmup", "Marche Active + Bras", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place en faisant de grands cercles avec les bras. Augmentez le rythme.", "On réveille tout le corps ! Grands mouvements, respirez profondément.", resolveImageUrl("IMG_HUNDRED"), "Cardio, épaules"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Squats Légers", 45, "01:00", "Debout, pieds largeur épaules.", "Squats contrôlés, bras devant. Descendez lentement, remontez.", "Poitrine haute ! On chauffe les cuisses et les fessiers.", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Pompes sur les Genoux", 45, "02:00", "Position planche sur les genoux.", "Pompes lentes et contrôlées. Poitrine vers le sol, remontez.", "Pompes d'échauffement ! Lentement, on prépare les pectoraux.", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez au sol.", "On continue !", TRANS, "", true),
  ex("warmup", "Cat-Cow", 45, "03:00", "Position quadrupédie, mains sous les épaules.", "Alternez dos rond (chat) et dos creux (vache). Synchronisez avec la respiration.", "Inspirez en creusant, expirez en arrondissant. Mobilisez la colonne.", resolveImageUrl("IMG_CAT_COW"), "Colonne vertébrale"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez en quadrupédie.", "Dernier échauffement !", TRANS, "", true),
  ex("warmup", "Bird Dog", 45, "04:00", "Position quadrupédie.", "Tendez le bras droit et la jambe gauche simultanément. Tenez 3s. Alternez.", "Bras et jambe opposés ! Gardez le dos plat. Équilibre et core.", resolveImageUrl("IMG_SWIMMING"), "Core, fessiers, épaules"),
  ex("warmup", "Transition", 15, "04:45", "", "Levez-vous.", "Échauffement terminé ! Musculation !", TRANS, "", true),

  // PHASE 2 — MUSCULATION FULL BODY (~40 min)
  // Bloc 1 — Poitrine & Triceps
  ex("workout", "Pompes Classiques", 45, "05:00", "Position planche, mains largeur épaules.", "Pompes complètes. Descendez poitrine au sol, poussez fort. Rythme contrôlé.", "Pompes ! Poitrine au sol ! Corps aligné ! Chaque rep compte !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux, triceps, épaules"),
  ex("workout", "Transition", 15, "05:45", "", "Restez en planche.", "On enchaîne !", TRANS, "", true),
  ex("workout", "Pompes Serrées (Diamond)", 45, "06:00", "Position planche, mains en diamant sous la poitrine.", "Pompes serrées. Coudes le long du corps. Descendez lentement.", "Pompes diamant ! Triceps à fond ! Coudes serrés !", resolveImageUrl("IMG_PUSHUP"), "Triceps, pectoraux internes"),
  ex("workout", "Transition", 15, "06:45", "", "Restez au sol.", "Suivant !", TRANS, "", true),
  ex("workout", "Pompes Larges", 45, "07:00", "Position planche, mains très écartées.", "Pompes avec les mains écartées. Descendez la poitrine entre les mains.", "Mains larges ! On cible l'extérieur des pectoraux !", resolveImageUrl("IMG_PUSHUP"), "Pectoraux externes, épaules"),
  ex("workout", "Transition", 15, "07:45", "", "Asseyez-vous.", "Dips !", TRANS, "", true),
  ex("workout", "Dips au Sol", 45, "08:00", "Assis, mains derrière, doigts vers l'avant, pieds au sol.", "Pliez les coudes pour descendre le corps. Poussez pour remonter. Rythme contrôlé.", "Dips ! Coudes en arrière ! Triceps en feu ! Contrôlez la descente !", resolveImageUrl("IMG_PUSHUP"), "Triceps, épaules"),
  ex("workout", "Repos Bloc", 30, "08:45", "", "Marchez, secouez les bras.", "Bloc poitrine terminé ! 30s de repos.", TRANS, "", true),

  // Bloc 2 — Dos & Biceps
  ex("workout", "Superman Hold", 45, "09:15", "Allongé sur le ventre, bras devant.", "Levez bras et jambes. Tenez la position 3 secondes. Redescendez. Répétez.", "Superman ! Serrez les fessiers et le dos ! Tenez en haut !", resolveImageUrl("IMG_SWIMMING"), "Dos, fessiers, lombaires"),
  ex("workout", "Transition", 15, "10:00", "", "Restez sur le ventre.", "On continue !", TRANS, "", true),
  ex("workout", "Superman Alterné", 45, "10:15", "Allongé sur le ventre.", "Levez bras droit + jambe gauche, puis inversez. Alternez sans pause.", "Bras et jambe opposés ! Gardez le regard au sol !", resolveImageUrl("IMG_SWIMMING"), "Dos, fessiers"),
  ex("workout", "Transition", 15, "11:00", "", "Passez en planche.", "Rowing !", TRANS, "", true),
  ex("workout", "Planche Rowing", 45, "11:15", "Position planche haute.", "Tirez un coude vers le ciel en serrant l'omoplate. Alternez. Gardez les hanches stables.", "Rowing en planche ! Serrez l'omoplate ! Pas de rotation !", resolveImageUrl("IMG_PLANK_ROTATION"), "Dos, core, biceps"),
  ex("workout", "Transition", 15, "12:00", "", "Restez en planche.", "Dernier du bloc !", TRANS, "", true),
  ex("workout", "Reverse Snow Angels", 45, "12:15", "Allongé sur le ventre, bras le long du corps.", "Levez la poitrine et faites glisser les bras du corps vers au-dessus de la tête en arc. Redescendez.", "Snow angels inversés ! Serrez les omoplates ! Dos complet !", resolveImageUrl("IMG_SWIMMING"), "Dos, rhomboïdes, trapèzes"),
  ex("workout", "Repos Bloc", 30, "13:00", "", "Marchez.", "Bloc dos terminé ! 30s repos.", TRANS, "", true),

  // Bloc 3 — Épaules
  ex("workout", "Pike Push-Ups", 45, "13:30", "Position V inversé, fessiers en l'air.", "Pliez les coudes, descendez la tête vers le sol. Poussez pour remonter.", "Pike push-ups ! On cible les épaules ! Descendez la tête !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Deltoïdes, triceps"),
  ex("workout", "Transition", 15, "14:15", "", "Restez en position.", "Suivant !", TRANS, "", true),
  ex("workout", "Planche Épaule Tap", 45, "14:30", "Position planche haute.", "Touchez l'épaule opposée avec chaque main. Gardez les hanches immobiles.", "Épaule droite, épaule gauche ! Zéro rotation des hanches !", resolveImageUrl("IMG_PLANK_ROTATION"), "Épaules, core"),
  ex("workout", "Transition", 15, "15:15", "", "Restez en planche.", "On continue !", TRANS, "", true),
  ex("workout", "Planche Latérale + Élévation", 45, "15:30", "Planche latérale sur l'avant-bras.", "Levez le bras libre vers le ciel. Tenez. Changez de côté à mi-temps.", "Planche latérale ! Bras vers le ciel ! Épaule et obliques !", resolveImageUrl("IMG_PLANK_ROTATION"), "Deltoïdes, obliques"),
  ex("workout", "Repos Bloc", 30, "16:15", "", "Marchez.", "Bloc épaules terminé ! 30s repos.", TRANS, "", true),

  // Bloc 4 — Jambes & Fessiers
  ex("workout", "Squats Profonds", 45, "16:45", "Debout, pieds largeur épaules.", "Squats profonds, cuisses sous le parallèle. Remontez en poussant dans les talons.", "Squats profonds ! Descendez bas ! Poitrine haute !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 15, "17:30", "", "Restez debout.", "Suivant !", TRANS, "", true),
  ex("workout", "Fentes Avant Alternées", 45, "17:45", "Debout, pieds joints.", "Grand pas en avant, genou arrière vers le sol. Poussez pour revenir. Alternez.", "Fentes ! Grand pas ! Genou à 90° ! Alternez sans pause !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 15, "18:30", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("workout", "Sumo Squat Pulse", 45, "18:45", "Debout, pieds très écartés, pointes ouvertes.", "Descendez en sumo et faites des pulses en bas. Ne remontez pas complètement.", "Sumo pulse ! Restez bas ! Les adducteurs et fessiers brûlent !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Adducteurs, fessiers"),
  ex("workout", "Transition", 15, "19:30", "", "Descendez au sol.", "Ponts !", TRANS, "", true),
  ex("workout", "Pont Fessier", 45, "19:45", "Allongé sur le dos, pieds au sol, genoux pliés.", "Montez les hanches, serrez les fessiers 2s en haut. Redescendez contrôlé.", "Pont ! Serrez fort en haut ! Fessiers d'acier !", resolveImageUrl("IMG_BRIDGE"), "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 15, "20:30", "", "Restez au sol.", "Suivant !", TRANS, "", true),
  ex("workout", "Pont Fessier Unipodal", 45, "20:45", "Allongé, un pied au sol, l'autre jambe tendue vers le ciel.", "Montez les hanches avec une seule jambe. Serrez en haut. Changez de côté à mi-temps.", "Une jambe ! Double l'intensité ! Serrez le fessier !", resolveImageUrl("IMG_BRIDGE"), "Fessiers, ischio-jambiers"),
  ex("workout", "Repos Bloc", 30, "21:30", "", "Marchez.", "Bloc jambes terminé ! 30s repos.", TRANS, "", true),

  // Bloc 5 — Core & Abdos
  ex("workout", "Planche Avant-Bras", 45, "22:00", "Position planche sur les avant-bras.", "Tenez la position. Corps parfaitement aligné. Serrez le core.", "Planche ! 45 secondes ! Serrez tout ! Respirez !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, transverse"),
  ex("workout", "Transition", 15, "22:45", "", "Restez au sol.", "Suivant !", TRANS, "", true),
  ex("workout", "Crunch Classique", 45, "23:00", "Allongé sur le dos, genoux pliés, mains derrière la tête.", "Montez les épaules du sol en contractant les abdos. Redescendez contrôlé.", "Crunches ! Regard au plafond ! Ne tirez pas sur la nuque !", resolveImageUrl("IMG_HUNDRED"), "Grand droit abdominal"),
  ex("workout", "Transition", 15, "23:45", "", "Restez au sol.", "On continue !", TRANS, "", true),
  ex("workout", "Bicycle Crunch", 45, "24:00", "Allongé sur le dos, mains derrière la tête.", "Coude vers genou opposé en alternance. Pédalez ! Rythme contrôlé.", "Bicycle ! Coude vers genou ! Obliques en feu !", resolveImageUrl("IMG_HUNDRED"), "Obliques, abdominaux"),
  ex("workout", "Transition", 15, "24:45", "", "Restez au sol.", "Dernier !", TRANS, "", true),
  ex("workout", "Leg Raises", 45, "25:00", "Allongé sur le dos, jambes tendues, mains sous les fessiers.", "Montez les jambes à 90° puis redescendez lentement sans toucher le sol.", "Jambes tendues ! Descendez lentement ! Bas des abdos !", resolveImageUrl("IMG_HUNDRED"), "Abdominaux inférieurs"),
  ex("workout", "Transition", 15, "25:45", "", "Restez au sol.", "Mountain climbers !", TRANS, "", true),
  ex("workout", "Mountain Climbers Lents", 45, "26:00", "Position planche haute.", "Amenez un genou vers la poitrine, tenez 2s, changez. Rythme lent et contrôlé.", "Mountain climbers lents ! Contrôle total ! Core engagé !", resolveImageUrl("IMG_PLANK_ROTATION"), "Core, psoas"),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Transition", 15, "26:45", "", "Passez en posture de l'enfant.", "Retour au calme.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "27:00", "À genoux, fessiers sur les talons, bras devant.", "Front au sol. Respirez profondément. Relâchez le dos.", "Posture de l'enfant. Respirez. Relâchez toutes les tensions.", resolveImageUrl("IMG_CHILD_POSE"), "Dos, épaules"),
  ex("cooldown", "Transition", 15, "28:00", "", "Allongez-vous sur le dos.", "Étirements.", TRANS, "", true),
  ex("cooldown", "Étirement Pectoraux au Sol", 45, "28:15", "Allongé sur le dos, bras en croix.", "Laissez les bras s'ouvrir vers le sol. Respirez profondément.", "Ouvrez la poitrine. Laissez la gravité étirer les pectoraux.", resolveImageUrl("IMG_SHOULDER_PRESS"), "Pectoraux"),
  ex("cooldown", "Transition", 15, "29:00", "", "Restez au sol.", "On continue.", TRANS, "", true),
  ex("cooldown", "Genou-Poitrine", 45, "29:15", "Allongé sur le dos.", "Ramenez les deux genoux vers la poitrine. Bercez-vous doucement.", "Genoux vers la poitrine. Bercez-vous. Relâchez le bas du dos.", resolveImageUrl("IMG_BRIDGE"), "Lombaires, fessiers"),
  ex("cooldown", "Transition", 15, "30:00", "", "Restez au sol.", "Relaxation finale.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "30:15", "Allongé sur le dos, bras le long du corps, paumes vers le ciel.", "Fermez les yeux. Relâchez chaque muscle. Respirez naturellement.", "Musculation Full Body terminée ! Vous avez travaillé chaque muscle ! Bravo ! Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation complète"),
];

export const session19: SessionConfig = {
  id: "muscu-fullbody",
  title: "Musculation Full Body",
  subtitle: "Renforcement Complet au Poids du Corps",
  description: "Séance de musculation complète sans matériel. 5 blocs ciblés (poitrine, dos, épaules, jambes, core) pour un renforcement musculaire global.",
  duration: "~31 min",
  level: "Intermédiaire",
  equipment: "Aucun — Poids du corps",
  category: "musculation",
  phaseLabels: { warmup: "Échauffement", workout: "Musculation", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-slate-600 to-zinc-500",
  finishMessage: "Musculation Full Body terminée ! Chaque muscle a travaillé !",
};
