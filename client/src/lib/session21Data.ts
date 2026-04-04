/*
 * SÉANCE 21 — Musculation Pull & Legs (Dos, Biceps, Jambes) — ~50 min
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
  ex("warmup", "Marche + Tirage Bras", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place. Tirez les coudes en arrière comme si vous ramiez. Serrez les omoplates.", "On réveille le dos ! Tirez les coudes, serrez les omoplates !", resolveImageUrl("IMG_HUNDRED"), "Dos, rhomboïdes"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),
  ex("warmup", "Good Morning", 45, "01:00", "Debout, pieds largeur hanches, mains derrière la tête.", "Penchez le buste en avant en gardant le dos droit. Poussez les fessiers en arrière. Remontez.", "Good morning ! Dos droit ! Sentez l'étirement des ischio-jambiers.", resolveImageUrl("IMG_RDL"), "Ischio-jambiers, lombaires"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue !", TRANS, "", true),
  ex("warmup", "Squat + Bras Tirés", 45, "02:00", "Debout, pieds largeur épaules.", "Squat puis en remontant tirez les coudes en arrière. Serrez les omoplates en haut.", "Squat + tirage ! On active les jambes et le dos ensemble !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, dos"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Échauffement terminé !", TRANS, "", true),

  // PHASE 2 — MUSCULATION PULL & LEGS (~38 min)
  // Bloc 1 — Dos
  ex("workout", "Superman", 45, "03:00", "Allongé sur le ventre, bras devant.", "Levez bras et jambes simultanément. Tenez 3s en haut. Serrez les fessiers et le dos.", "Superman ! Levez tout ! Serrez en haut 3 secondes !", resolveImageUrl("IMG_SWIMMING"), "Dos, lombaires, fessiers"),
  ex("workout", "Transition", 15, "03:45", "", "Restez sur le ventre.", "Suivant !", TRANS, "", true),
  ex("workout", "Superman Bras en Y", 45, "04:00", "Allongé sur le ventre, bras en Y devant.", "Levez la poitrine et les bras en Y. Serrez les omoplates. Tenez 2s.", "Bras en Y ! Serrez les omoplates ! Trapèzes inférieurs !", resolveImageUrl("IMG_SWIMMING"), "Trapèzes, rhomboïdes"),
  ex("workout", "Transition", 15, "04:45", "", "Restez sur le ventre.", "On continue !", TRANS, "", true),
  ex("workout", "Superman Bras en W", 45, "05:00", "Allongé sur le ventre, coudes pliés en W.", "Levez la poitrine, tirez les coudes en arrière en W. Serrez les omoplates.", "Bras en W ! Tirez les coudes ! Dos complet !", resolveImageUrl("IMG_SWIMMING"), "Dos, rhomboïdes, deltoïdes postérieurs"),
  ex("workout", "Transition", 15, "05:45", "", "Passez en planche.", "Rowing !", TRANS, "", true),
  ex("workout", "Planche Rowing", 45, "06:00", "Position planche haute.", "Tirez un coude vers le ciel en serrant l'omoplate. Alternez. Hanches stables.", "Rowing en planche ! Serrez l'omoplate ! Pas de rotation !", resolveImageUrl("IMG_PLANK_ROTATION"), "Grand dorsal, core"),
  ex("workout", "Repos Bloc", 30, "06:45", "", "Marchez.", "Bloc dos terminé ! 30s repos.", TRANS, "", true),

  // Bloc 2 — Biceps & Bras
  ex("workout", "Curl Isométrique au Mur", 45, "07:15", "Debout face au mur, avant-bras contre le mur, coudes à 90°.", "Poussez fort contre le mur avec les avant-bras comme si vous vouliez le tirer vers vous. Tenez.", "Poussez contre le mur ! Biceps contractés ! Tenez la tension !", resolveImageUrl("IMG_SHOULDER_PRESS"), "Biceps"),
  ex("workout", "Transition", 15, "08:00", "", "Restez debout.", "Suivant !", TRANS, "", true),
  ex("workout", "Chin-Up Isométrique Inversé", 45, "08:15", "Allongé sous une table solide, mains sur le bord.", "Tirez la poitrine vers la table. Tenez en haut 3s. Redescendez. Si pas de table, faites des tirages au sol.", "Tirez ! Serrez les omoplates ! Biceps et dos !", resolveImageUrl("IMG_SWIMMING"), "Biceps, dos"),
  ex("workout", "Transition", 15, "09:00", "", "Changez de position.", "On continue !", TRANS, "", true),
  ex("workout", "Pompes Inversées (Bras Tirés)", 45, "09:15", "Allongé sur le ventre, mains au sol à côté de la poitrine.", "Poussez pour lever la poitrine mais gardez les hanches au sol. Tirez les coudes en arrière.", "Tirez les coudes ! Serrez le dos ! Biceps et dorsaux !", resolveImageUrl("IMG_SWIMMING"), "Dos, biceps"),
  ex("workout", "Repos Bloc", 30, "10:00", "", "Secouez les bras.", "Bloc bras terminé ! 30s repos.", TRANS, "", true),

  // Bloc 3 — Quadriceps
  ex("workout", "Squats Profonds", 45, "10:30", "Debout, pieds largeur épaules.", "Squats profonds, cuisses sous le parallèle. Poussez dans les talons.", "Squats profonds ! Descendez bas ! Poitrine haute !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 15, "11:15", "", "Restez debout.", "Suivant !", TRANS, "", true),
  ex("workout", "Squat Bulgare Droit", 45, "11:30", "Debout, pied arrière sur un step ou une chaise.", "Squat sur une jambe. Descendez le genou arrière vers le sol. Côté droit.", "Bulgare droit ! Descendez profond ! Quadriceps en feu !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 15, "12:15", "", "Changez de jambe.", "Côté gauche !", TRANS, "", true),
  ex("workout", "Squat Bulgare Gauche", 45, "12:30", "Debout, pied arrière sur un step, côté gauche.", "Même mouvement côté gauche. Descendez contrôlé.", "Côté gauche ! Même profondeur ! Équilibrez les deux côtés !", resolveImageUrl("IMG_REVERSE_LUNGE"), "Quadriceps, fessiers"),
  ex("workout", "Transition", 15, "13:15", "", "Restez debout.", "Wall sit !", TRANS, "", true),
  ex("workout", "Wall Sit", 45, "13:30", "Dos contre le mur, cuisses parallèles au sol.", "Tenez la position de la chaise. Cuisses à 90°. Ne bougez pas.", "Chaise murale ! 45 secondes ! Les cuisses brûlent !", resolveImageUrl("IMG_GOBLET_SQUAT"), "Quadriceps, isométrique"),
  ex("workout", "Repos Bloc", 30, "14:15", "", "Marchez.", "Bloc quadriceps terminé ! 30s repos.", TRANS, "", true),

  // Bloc 4 — Fessiers & Ischio-jambiers
  ex("workout", "Pont Fessier", 45, "14:45", "Allongé sur le dos, pieds au sol, genoux pliés.", "Montez les hanches. Serrez les fessiers 3s en haut. Redescendez contrôlé.", "Pont ! Serrez fort en haut ! 3 secondes ! Fessiers d'acier !", resolveImageUrl("IMG_BRIDGE"), "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 15, "15:30", "", "Restez au sol.", "Suivant !", TRANS, "", true),
  ex("workout", "Pont Fessier Unipodal Droit", 45, "15:45", "Allongé, pied droit au sol, jambe gauche tendue.", "Pont sur une jambe. Montez les hanches. Serrez en haut.", "Une jambe ! Double l'intensité ! Fessier droit à fond !", resolveImageUrl("IMG_BRIDGE"), "Fessier droit, ischio-jambier"),
  ex("workout", "Transition", 15, "16:30", "", "Changez de jambe.", "Côté gauche !", TRANS, "", true),
  ex("workout", "Pont Fessier Unipodal Gauche", 45, "16:45", "Allongé, pied gauche au sol, jambe droite tendue.", "Pont sur une jambe côté gauche. Même intensité.", "Côté gauche ! Même hauteur ! Équilibrez !", resolveImageUrl("IMG_BRIDGE"), "Fessier gauche, ischio-jambier"),
  ex("workout", "Transition", 15, "17:30", "", "Retournez-vous.", "Dernier !", TRANS, "", true),
  ex("workout", "Good Morning Lent", 45, "17:45", "Debout, mains derrière la tête.", "Penchez le buste en avant très lentement (4s descente). Remontez en serrant les fessiers.", "Good morning lent ! 4 secondes descente ! Ischio-jambiers et fessiers !", resolveImageUrl("IMG_RDL"), "Ischio-jambiers, fessiers, lombaires"),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Transition", 15, "18:30", "", "Descendez au sol.", "Retour au calme.", TRANS, "", true),
  ex("cooldown", "Étirement Ischio-jambiers", 45, "18:45", "Allongé sur le dos, une jambe tendue vers le ciel.", "Tirez doucement la jambe vers vous. Changez de côté à mi-temps.", "Tirez doucement. Respirez dans l'étirement.", resolveImageUrl("IMG_RDL"), "Ischio-jambiers"),
  ex("cooldown", "Transition", 15, "19:30", "", "Restez au sol.", "On continue.", TRANS, "", true),
  ex("cooldown", "Figure 4 Stretch", 45, "19:45", "Allongé, cheville droite sur genou gauche.", "Tirez le genou gauche vers la poitrine. Changez de côté à mi-temps.", "Figure 4 ! Relâchez les fessiers. Respirez.", resolveImageUrl("IMG_BRIDGE"), "Fessiers, piriformes"),
  ex("cooldown", "Transition", 15, "20:30", "", "Restez au sol.", "Dernier étirement.", TRANS, "", true),
  ex("cooldown", "Posture de l'Enfant", 60, "20:45", "À genoux, fessiers sur les talons, bras devant.", "Front au sol. Respirez. Relâchez tout le corps.", "Posture de l'enfant. Relâchez. Vous avez tout donné.", resolveImageUrl("IMG_CHILD_POSE"), "Dos, épaules"),
  ex("cooldown", "Transition", 15, "21:45", "", "Allongez-vous.", "Relaxation.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "22:00", "Allongé sur le dos, paumes vers le ciel.", "Fermez les yeux. Relâchez chaque muscle.", "Pull & Legs terminé ! Dos, biceps et jambes sculptés ! Bravo ! Namaste.", resolveImageUrl("IMG_BRIDGE"), "Relaxation"),
];

export const session21: SessionConfig = {
  id: "muscu-pull-legs",
  title: "Musculation Pull & Legs",
  subtitle: "Dos, Biceps & Jambes",
  description: "Séance Pull & Legs au poids du corps : 4 blocs ciblés (dos, biceps, quadriceps, fessiers/ischio) pour un renforcement complet du dos et des jambes.",
  duration: "~23 min",
  level: "Intermédiaire",
  equipment: "Aucun — Poids du corps",
  category: "musculation",
  phaseLabels: { warmup: "Échauffement", workout: "Pull & Legs Day", cooldown: "Retour au calme" },
  exercises,
  totalDuration: exercises.reduce((sum, e) => sum + e.duration, 0),
  color: "from-emerald-600 to-teal-500",
  finishMessage: "Pull & Legs terminé ! Dos, biceps et jambes sculptés !",
};
