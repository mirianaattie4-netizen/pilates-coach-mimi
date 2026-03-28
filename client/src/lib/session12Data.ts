/*
 * SÉANCE 12 — HIIT Haut du Corps — Circuit Bras, Épaules, Dos, Poitrine
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
  ex("warmup", "Cercles de Bras", 45, "00:00", "Debout, bras tendus sur les côtés.", "Faites des cercles avec les bras. 15s petits cercles avant, 15s petits cercles arrière, 15s grands cercles.", "On réveille les épaules ! Cercles fluides, de plus en plus grands.", "IMG_SHOULDER_PRESS", "Deltoïdes, coiffe des rotateurs"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On continue.", TRANS, "", true),
  ex("warmup", "Pompes au Mur", 45, "01:00", "Debout face au mur, mains à hauteur d'épaules.", "Fléchissez les bras pour approcher la poitrine du mur. Poussez pour revenir. Rythme modéré.", "On prépare les pectoraux et les triceps. Contrôle et amplitude.", "IMG_PUSHUP", "Pectoraux, triceps"),
  ex("warmup", "Transition", 15, "01:45", "", "Éloignez-vous du mur.", "On enchaîne.", TRANS, "", true),
  ex("warmup", "Rotations d'Épaules", 45, "02:00", "Debout, bras le long du corps.", "Roulez les épaules vers l'arrière 15s, puis vers l'avant 15s. Puis haussez les épaules et relâchez 15s.", "Mobilisez les épaules ! On déverrouille les articulations.", "IMG_SHOULDER_PRESS", "Trapèzes, deltoïdes"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "On prépare le dos.", TRANS, "", true),
  ex("warmup", "Inchworm", 45, "03:00", "Debout, pieds joints.", "Penchez-vous, marchez les mains en planche. Tenez 3s. Marchez les mains vers les pieds. Remontez.", "Jambes tendues ! On étire les ischio et on active les épaules.", "IMG_PUSHUP", "Épaules, ischio-jambiers, core"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "On active le haut du corps.", TRANS, "", true),
  ex("warmup", "Bras en Croix Dynamiques", 45, "04:00", "Debout, bras tendus sur les côtés.", "Croisez les bras devant la poitrine, ouvrez grand. Alternez bras droit dessus puis gauche dessus. Rythme rapide.", "Ouvrez la poitrine ! On active les pectoraux et le dos.", "IMG_SHOULDER_PRESS", "Pectoraux, rhomboïdes"),
  ex("warmup", "Transition", 15, "04:45", "", "Préparez-vous.", "ROUND 1 dans 15 secondes !", TRANS, "", true),

  // PHASE 2 — HIIT HAUT DU CORPS — ROUND 1
  ex("workout", "Pompes Classiques", 40, "05:00", "Position de planche haute, mains largeur épaules.", "Descendez la poitrine vers le sol, poussez. Rythme soutenu. Variante genoux OK.", "POITRINE AU SOL ! Poussez fort. Si genoux au sol, gardez la qualité.", "IMG_PUSHUP", "Pectoraux, triceps, deltoïdes"),
  ex("workout", "Transition", 20, "05:40", "", "Récupérez.", "Prochain : Planche Commando.", TRANS, "", true),
  ex("workout", "Planche Commando", 40, "06:00", "Planche sur les avant-bras.", "Montez sur les mains une à une, redescendez. Alternez le bras de départ.", "MONTEZ DESCENDEZ ! Hanches stables. On cible les triceps et les épaules.", "IMG_PLANK", "Triceps, épaules, core"),
  ex("workout", "Transition", 20, "06:40", "", "Récupérez.", "Prochain : Pike Push-Up.", TRANS, "", true),
  ex("workout", "Pike Push-Up", 40, "07:00", "Position de V inversé, fesses en l'air, mains au sol.", "Fléchissez les bras pour descendre la tête vers le sol. Poussez. C'est une pompe pour les épaules.", "TÊTE VERS LE SOL ! On cible les deltoïdes. C'est comme une presse épaules au poids du corps.", "IMG_PUSHUP", "Deltoïdes, triceps"),
  ex("workout", "Transition", 20, "07:40", "", "Récupérez.", "Prochain : Superman.", TRANS, "", true),
  ex("workout", "Superman Dynamique", 40, "08:00", "Allongé sur le ventre, bras tendus devant.", "Levez bras et jambes du sol. Tenez 2s, redescendez. Enchaînez.", "SERREZ le dos ! Bras et jambes décollés. On renforce toute la chaîne postérieure.", "IMG_SWIMMING", "Érecteurs, rhomboïdes, fessiers"),
  ex("workout", "Transition", 20, "08:40", "", "Récupérez.", "Prochain : Pompes Diamant.", TRANS, "", true),
  ex("workout", "Pompes Diamant", 40, "09:00", "Planche haute, mains en diamant sous la poitrine.", "Descendez, poussez. Coudes serrés le long du corps. Variante genoux OK.", "COUDES SERRÉS ! On cible les triceps. Brûlure garantie.", "IMG_PUSHUP", "Triceps, pectoraux"),
  ex("workout", "Transition", 20, "09:40", "", "Récupérez.", "Prochain : Planche Touche Épaule.", TRANS, "", true),
  ex("workout", "Planche Touche Épaule", 40, "10:00", "Planche haute, pieds écartés.", "Touchez l'épaule droite avec la main gauche, puis inversez. Hanches stables.", "ZÉRO rotation ! Écartez les pieds pour la stabilité. Core en béton.", "IMG_PLANK_ROTATION", "Core, épaules, stabilisateurs"),
  ex("workout", "Transition", 20, "10:40", "", "Récupérez.", "Dernier exercice Round 1 !", TRANS, "", true),
  ex("workout", "Dips au Sol", 40, "11:00", "Assis, mains derrière, doigts vers les pieds, hanches décollées.", "Fléchissez les bras pour descendre les fesses vers le sol. Poussez pour remonter.", "TRICEPS en feu ! Descendez bas, poussez fort. Les bras travaillent à fond.", "IMG_BRIDGE", "Triceps, deltoïdes postérieurs"),
  ex("workout", "Transition", 20, "11:40", "", "Récupérez.", "ROUND 1 TERMINÉ ! Récupération.", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "12:00", "Debout, secouez les bras.", "Secouez les bras, roulez les épaules. Respirez profondément.", "Bien joué ! Les bras récupèrent. Round 2 arrive.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "12:45", "", "Préparez-vous.", "ROUND 2 !", TRANS, "", true),

  // ROUND 2
  ex("workout", "Pompes Larges", 40, "13:00", "Planche haute, mains très écartées.", "Pompes avec les mains plus larges que les épaules. Amplitude maximale.", "LARGE ! On cible les pectoraux externes. Descendez bien bas.", "IMG_PUSHUP", "Pectoraux, deltoïdes"),
  ex("workout", "Transition", 20, "13:40", "", "Récupérez.", "Prochain : Planche Latérale.", TRANS, "", true),
  ex("workout", "Planche Latérale + Rotation", 40, "14:00", "Planche latérale sur l'avant-bras.", "Tournez le buste et passez le bras sous le corps, puis ouvrez vers le plafond. 20s chaque côté.", "ROTATION complète ! Sous le corps puis vers le ciel. Obliques et épaules.", "IMG_PLANK_ROTATION", "Obliques, épaules, core"),
  ex("workout", "Transition", 20, "14:40", "", "Récupérez.", "Prochain : Pompes Spiderman.", TRANS, "", true),
  ex("workout", "Pompes Spiderman", 40, "15:00", "Planche haute.", "En descendant, amenez le genou vers le coude. Alternez.", "GENOU AU COUDE ! Pompe + gainage oblique. Exercice complet.", "IMG_PUSHUP", "Pectoraux, obliques, psoas"),
  ex("workout", "Transition", 20, "15:40", "", "Récupérez.", "Prochain : Swimming.", TRANS, "", true),
  ex("workout", "Swimming Rapide", 40, "16:00", "Sur le ventre, bras et jambes décollés.", "Battements alternés bras/jambes comme en nage. Rythme rapide.", "NAGEZ ! Bras et jambes décollés. Le dos travaille à fond.", "IMG_SWIMMING", "Érecteurs, deltoïdes, fessiers"),
  ex("workout", "Transition", 20, "16:40", "", "Récupérez.", "Prochain : Pompes Déclinées.", TRANS, "", true),
  ex("workout", "Pompes Déclinées", 40, "17:00", "Pieds surélevés sur une marche, mains au sol.", "Pompes avec les pieds plus hauts que les mains. Plus dur pour les épaules. Variante : pieds au sol OK.", "PIEDS EN HAUT ! On cible les deltoïdes et le haut des pectoraux.", "IMG_PUSHUP", "Deltoïdes, pectoraux supérieurs"),
  ex("workout", "Transition", 20, "17:40", "", "Récupérez.", "Prochain : Bear Crawl.", TRANS, "", true),
  ex("workout", "Bear Crawl", 40, "18:00", "À quatre pattes, genoux décollés.", "Avancez 4 pas, reculez 4 pas. Genoux à 2 cm du sol.", "GENOUX BAS ! Coordination et gainage. Les épaules brûlent.", "IMG_CAT_COW", "Épaules, core, coordination"),
  ex("workout", "Transition", 20, "18:40", "", "Récupérez.", "Dernier exercice Round 2 !", TRANS, "", true),
  ex("workout", "Dips au Sol Rapides", 40, "19:00", "Assis, mains derrière, hanches décollées.", "Dips rapides. Descendez, montez. Rythme maximal.", "VITESSE ! Les triceps brûlent. C'est le dernier du round !", "IMG_BRIDGE", "Triceps"),
  ex("workout", "Transition", 20, "19:40", "", "Récupérez.", "ROUND 2 TERMINÉ !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "20:00", "Secouez les bras.", "Respirez, étirez les bras. Mi-parcours !", "Mi-chemin ! Les bras sont en feu. 2 rounds à venir.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "20:45", "", "Préparez-vous.", "ROUND 3 !", TRANS, "", true),

  // ROUND 3
  ex("workout", "Pompes Explosives", 40, "21:00", "Planche haute.", "Pompes avec phase explosive : décollez les mains. Clap optionnel.", "EXPLOSEZ ! Décollez les mains du sol. Puissance maximale.", "IMG_PUSHUP", "Pectoraux, triceps, puissance"),
  ex("workout", "Transition", 20, "21:40", "", "Récupérez.", "Prochain : Planche Commando Rapide.", TRANS, "", true),
  ex("workout", "Planche Commando Rapide", 40, "22:00", "Planche avant-bras.", "Montez/descendez le plus vite possible. Alternez le bras.", "VITESSE MAXIMALE ! Les bras brûlent. Hanches stables.", "IMG_PLANK", "Triceps, épaules"),
  ex("workout", "Transition", 20, "22:40", "", "Récupérez.", "Prochain : Pike Push-Up.", TRANS, "", true),
  ex("workout", "Pike Push-Up Profond", 40, "23:00", "Position V inversé.", "Pike push-ups avec amplitude maximale. Tête vers le sol.", "PROFOND ! Les épaules travaillent à fond. C'est votre presse épaules.", "IMG_PUSHUP", "Deltoïdes, triceps"),
  ex("workout", "Transition", 20, "23:40", "", "Récupérez.", "Prochain : Superman W.", TRANS, "", true),
  ex("workout", "Superman W", 40, "24:00", "Sur le ventre, bras en W (coudes pliés).", "Levez le buste et les bras en W. Serrez les omoplates. Tenez 2s, redescendez.", "SERREZ les omoplates ! Le W active les rhomboïdes et les trapèzes moyens.", "IMG_SWIMMING", "Rhomboïdes, trapèzes, érecteurs"),
  ex("workout", "Transition", 20, "24:40", "", "Récupérez.", "Prochain : Pompes Hindu.", TRANS, "", true),
  ex("workout", "Pompes Hindu", 40, "25:00", "Position V inversé.", "Plongez vers l'avant en rasant le sol, remontez en cobra. Revenez en V. Mouvement fluide.", "PLONGEZ ! Du V au cobra. Mouvement fluide et complet. Épaules, pecs, dos.", "IMG_PUSHUP", "Épaules, pectoraux, érecteurs"),
  ex("workout", "Transition", 20, "25:40", "", "Récupérez.", "Prochain : Planche Dynamique.", TRANS, "", true),
  ex("workout", "Planche Dynamique (Haut-Bas)", 40, "26:00", "Planche haute.", "Descendez sur un avant-bras, puis l'autre. Remontez. Rythme soutenu.", "HAUT-BAS ! Les épaules et les triceps travaillent sans relâche.", "IMG_PLANK", "Triceps, épaules, core"),
  ex("workout", "Transition", 20, "26:40", "", "Récupérez.", "Dernier exercice Round 3 !", TRANS, "", true),
  ex("workout", "Dips Lents (4 secondes)", 40, "27:00", "Assis, mains derrière.", "Descendez en 4 secondes, remontez en 1 seconde. Tempo lent.", "LENT ! 4 secondes en descente. Les triceps travaillent en excentrique.", "IMG_BRIDGE", "Triceps, excentrique"),
  ex("workout", "Transition", 20, "27:40", "", "Récupérez.", "ROUND 3 TERMINÉ ! Dernier round !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "28:00", "Secouez les bras.", "Dernier round. Donnez tout !", "DERNIER ROUND ! Tout donner. Vous êtes des guerriers !", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "28:45", "", "Préparez-vous.", "ROUND 4 FINAL !", TRANS, "", true),

  // ROUND 4 — FINISHER
  ex("workout", "Pompes Non-Stop", 40, "29:00", "Planche haute.", "Pompes sans arrêt pendant 40s. Quand vous ne pouvez plus, genoux au sol.", "NON-STOP ! Chaque pompe compte. Genoux au sol si besoin mais ne vous arrêtez pas.", "IMG_PUSHUP", "Pectoraux, triceps, endurance"),
  ex("workout", "Transition", 20, "29:40", "", "Récupérez.", "Prochain : Planche Hold.", TRANS, "", true),
  ex("workout", "Planche Hold 40s", 40, "30:00", "Planche sur les avant-bras.", "TENEZ la planche. Immobile. 40 secondes. Corps aligné.", "TENEZ BON ! 40 secondes. Le core et les épaules tiennent. C'est mental.", "IMG_PLANK", "Core, épaules, isométrique"),
  ex("workout", "Transition", 20, "30:40", "", "Récupérez.", "Prochain : Pompes Diamant Rapides.", TRANS, "", true),
  ex("workout", "Pompes Diamant Rapides", 40, "31:00", "Mains en diamant.", "Pompes diamant le plus vite possible. Genoux OK.", "VITESSE ! Triceps en feu. Dernière ligne droite.", "IMG_PUSHUP", "Triceps"),
  ex("workout", "Transition", 20, "31:40", "", "Récupérez.", "DERNIER EXERCICE !", TRANS, "", true),
  ex("workout", "Planche Commando Finisher", 40, "32:00", "Planche avant-bras.", "Commando le plus vite possible. 40 secondes. TOUT DONNER.", "C'EST LE DERNIER ! COMMANDO NON-STOP ! ALLEZ !", "IMG_PLANK", "Triceps, épaules, core"),
  ex("workout", "Transition", 20, "32:40", "", "Allongez-vous.", "CIRCUIT TERMINÉ ! Retour au calme.", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Posture de l'Enfant", 60, "33:00", "À genoux, bras tendus devant, front au sol.", "Respirez profondément. Étirez le dos et les épaules.", "Moment de calme. Les bras et les épaules se relâchent.", "IMG_CHILD_POSE", "Dos, épaules"),
  ex("cooldown", "Transition", 15, "34:00", "", "Restez au sol.", "On étire.", TRANS, "", true),
  ex("cooldown", "Étirement Pectoraux", 60, "34:15", "Debout dans un cadre de porte, bras en L sur les montants.", "Avancez le buste pour étirer les pectoraux. Tenez 30s. Variez la hauteur des bras.", "Ouvrez la poitrine. Les pectoraux ont beaucoup travaillé.", "IMG_SHOULDER_PRESS", "Pectoraux"),
  ex("cooldown", "Transition", 15, "35:15", "", "Restez debout.", "On étire les triceps.", TRANS, "", true),
  ex("cooldown", "Étirement Triceps & Épaules", 60, "35:30", "Debout, bras derrière la tête.", "Tirez le coude vers le bas avec la main opposée. 30s chaque bras. Puis bras croisé devant, 15s chaque.", "Étirez en douceur. Les triceps et les épaules récupèrent.", "IMG_SHOULDER_PRESS", "Triceps, deltoïdes"),
  ex("cooldown", "Transition", 15, "36:30", "", "Allongez-vous.", "Dernière posture.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "36:45", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez tout. Respirez.", "Vous l'avez fait ! 4 rounds de HIIT Haut du Corps. Vos bras sont en acier. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation"),
];

export const session12: SessionConfig = {
  id: "hiit-haut-du-corps",
  title: "HIIT Haut du Corps",
  subtitle: "Épaules, Bras & Dos",
  description: "Circuit HIIT ciblé haut du corps : pompes variées, pike push-ups, planche commando, dips, superman. 4 rounds pour sculpter épaules, bras, poitrine et dos.",
  level: "Intermédiaire",
  duration: "~38 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement Haut du Corps", workout: "HIIT Haut du Corps", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "blue",
  finishMessage: "BRAVO ! 4 rounds de HIIT Haut du Corps terminés ! Épaules, bras, poitrine et dos ont été travaillés à fond. Hydratez-vous. À très bientôt avec Coach Mimi !",
};
