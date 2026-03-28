/*
 * SÉANCE 13 — HIIT Core / Abdos — Circuit Gainage et Abdominaux
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
  // PHASE 1 — ÉCHAUFFEMENT (~5 min)
  ex("warmup", "Respiration Abdominale", 45, "00:00", "Allongé sur le dos, genoux pliés, mains sur le ventre.", "Inspirez par le nez en gonflant le ventre. Expirez par la bouche en rentrant le nombril vers la colonne. Sentez le transverse s'activer.", "On connecte avec le centre. Le nombril rentre vers la colonne à chaque expiration.", "IMG_RESPIRATION", "Transverse, diaphragme"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez allongé.", "On continue.", TRANS, "", true),
  ex("warmup", "Dead Bug Lent", 45, "01:00", "Allongé, bras au plafond, genoux à 90°.", "Étendez le bras droit et la jambe gauche simultanément. Revenez. Alternez. Dos plaqué au sol.", "DOS AU SOL ! Si le bas du dos se soulève, réduisez l'amplitude. Contrôle total.", "IMG_DEADBUG", "Transverse, psoas, coordination"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez allongé.", "On active les abdos.", TRANS, "", true),
  ex("warmup", "Crunch Lent", 45, "02:00", "Allongé, genoux pliés, mains derrière la tête.", "Décollez les épaules du sol en expirant. Redescendez lentement. Rythme lent et contrôlé.", "Expirez en montant ! Le bas du dos reste au sol. On prépare le grand droit.", "IMG_DEADBUG", "Grand droit"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez allongé.", "On continue l'échauffement.", TRANS, "", true),
  ex("warmup", "Planche Avant-Bras 30s", 45, "03:00", "Position de planche sur les avant-bras.", "Tenez la planche. Corps aligné de la tête aux pieds. Serrez les fessiers et le ventre.", "Corps DROIT ! Pas de fesses en l'air, pas de dos creux. On active tout le core.", "IMG_PLANK", "Core complet"),
  ex("warmup", "Transition", 15, "03:45", "", "Reposez-vous.", "On prépare les obliques.", TRANS, "", true),
  ex("warmup", "Rotation Tronc Allongé", 45, "04:00", "Allongé, bras en croix, genoux pliés ensemble.", "Laissez tomber les genoux à droite, puis à gauche. Épaules au sol. Rythme fluide.", "Épaules au sol ! Les genoux basculent d'un côté à l'autre. On réveille les obliques.", "IMG_DEADBUG", "Obliques, mobilité colonne"),
  ex("warmup", "Transition", 15, "04:45", "", "Préparez-vous.", "ROUND 1 dans 15 secondes !", TRANS, "", true),

  // PHASE 2 — HIIT CORE — ROUND 1
  ex("workout", "Mountain Climbers Rapides", 40, "05:00", "Position de planche haute.", "Genoux vers la poitrine en alternance le plus vite possible. Hanches basses.", "VITESSE MAXIMALE ! Les hanches restent basses. Le core brûle.", "IMG_PLANK", "Core, psoas, cardio"),
  ex("workout", "Transition", 20, "05:40", "", "Récupérez.", "Prochain : V-Up.", TRANS, "", true),
  ex("workout", "V-Up", 40, "06:00", "Allongé, bras au-dessus de la tête.", "Levez bras et jambes simultanément pour former un V. Touchez les orteils. Redescendez.", "EXPLOSIF ! Bras et jambes se rejoignent. Expirez en montant.", "IMG_DEADBUG", "Grand droit, psoas"),
  ex("workout", "Transition", 20, "06:40", "", "Récupérez.", "Prochain : Planche Hip Dips.", TRANS, "", true),
  ex("workout", "Planche Hip Dips", 40, "07:00", "Planche sur les avant-bras.", "Tournez les hanches à droite vers le sol, puis à gauche. Alternez sans pause.", "ROTATION ! Les hanches touchent presque le sol. Les obliques travaillent à fond.", "IMG_PLANK_ROTATION", "Obliques, transverse"),
  ex("workout", "Transition", 20, "07:40", "", "Récupérez.", "Prochain : Bicycle Crunch.", TRANS, "", true),
  ex("workout", "Bicycle Crunch Rapide", 40, "08:00", "Allongé, mains derrière la tête.", "Coude droit vers genou gauche, puis inversez. Rythme rapide. Épaules décollées.", "ROTATION ! Coude touche genou opposé. Épaules toujours décollées.", "IMG_DEADBUG", "Obliques, grand droit"),
  ex("workout", "Transition", 20, "08:40", "", "Récupérez.", "Prochain : Planche Genou-Coude.", TRANS, "", true),
  ex("workout", "Planche Genou-Coude Croisé", 40, "09:00", "Planche haute.", "Genou droit vers coude gauche, puis inversez. Rythme soutenu.", "CROISEZ ! Le genou va vers le coude opposé. Obliques en feu.", "IMG_PLANK", "Obliques, core"),
  ex("workout", "Transition", 20, "09:40", "", "Récupérez.", "Prochain : Flutter Kicks.", TRANS, "", true),
  ex("workout", "Flutter Kicks", 40, "10:00", "Allongé, mains sous les fesses, jambes tendues.", "Battements rapides des jambes en alternance. Jambes à 15 cm du sol. Bas du dos plaqué.", "BAS DU DOS AU SOL ! Battements rapides. Les abdos inférieurs brûlent.", "IMG_DEADBUG", "Grand droit inférieur, psoas"),
  ex("workout", "Transition", 20, "10:40", "", "Récupérez.", "Dernier exercice Round 1 !", TRANS, "", true),
  ex("workout", "Hollow Body Hold", 40, "11:00", "Allongé, bras au-dessus de la tête, jambes tendues.", "Décollez les épaules et les jambes du sol. Tenez la position. Corps en forme de banane.", "TENEZ ! Corps en banane. Bas du dos au sol. C'est l'exercice ultime du core.", "IMG_DEADBUG", "Core complet, isométrique"),
  ex("workout", "Transition", 20, "11:40", "", "Récupérez.", "ROUND 1 TERMINÉ !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "12:00", "Allongé, genoux à la poitrine.", "Bercez-vous doucement. Respirez. Massez le bas du dos.", "Récupérez ! Le core a bien travaillé. Round 2 arrive.", "IMG_KNEES_CHEST", "Récupération"),
  ex("workout", "Transition", 15, "12:45", "", "Préparez-vous.", "ROUND 2 !", TRANS, "", true),

  // ROUND 2
  ex("workout", "Crunch Inversé", 40, "13:00", "Allongé, bras le long du corps.", "Levez les hanches du sol en ramenant les genoux vers la poitrine. Redescendez contrôlé.", "LEVEZ les hanches ! Ce sont les abdos inférieurs qui font le travail, pas l'élan.", "IMG_DEADBUG", "Grand droit inférieur"),
  ex("workout", "Transition", 20, "13:40", "", "Récupérez.", "Prochain : Planche Latérale.", TRANS, "", true),
  ex("workout", "Planche Latérale Droite", 40, "14:00", "Planche latérale sur l'avant-bras droit.", "Tenez la position. Hanche haute. Corps aligné. Bras gauche au plafond.", "HANCHE HAUTE ! Ne laissez pas le bassin s'effondrer. Les obliques tiennent.", "IMG_PLANK_ROTATION", "Obliques droits, core"),
  ex("workout", "Transition", 20, "14:40", "", "Changez de côté.", "Prochain : Planche Latérale Gauche.", TRANS, "", true),
  ex("workout", "Planche Latérale Gauche", 40, "15:00", "Planche latérale sur l'avant-bras gauche.", "Tenez la position. Hanche haute. Corps aligné. Bras droit au plafond.", "HANCHE HAUTE ! Même intensité des deux côtés. Équilibre musculaire.", "IMG_PLANK_ROTATION", "Obliques gauches, core"),
  ex("workout", "Transition", 20, "15:40", "", "Récupérez.", "Prochain : Toe Touches.", TRANS, "", true),
  ex("workout", "Toe Touches", 40, "16:00", "Allongé, jambes tendues au plafond.", "Décollez les épaules et touchez les orteils avec les mains. Redescendez. Enchaînez.", "TOUCHEZ les orteils ! Jambes tendues au plafond. Les abdos supérieurs brûlent.", "IMG_DEADBUG", "Grand droit supérieur"),
  ex("workout", "Transition", 20, "16:40", "", "Récupérez.", "Prochain : Dead Bug Rapide.", TRANS, "", true),
  ex("workout", "Dead Bug Rapide", 40, "17:00", "Allongé, bras au plafond, genoux à 90°.", "Étendez bras et jambe opposés rapidement. Alternez. Dos plaqué au sol.", "RAPIDE mais CONTRÔLÉ ! Le dos ne se soulève jamais. Coordination et core.", "IMG_DEADBUG", "Transverse, coordination"),
  ex("workout", "Transition", 20, "17:40", "", "Récupérez.", "Prochain : Planche avec Marche.", TRANS, "", true),
  ex("workout", "Planche Marche Avant-Arrière", 40, "18:00", "Planche haute.", "Marchez les mains vers l'avant (4 pas) puis vers l'arrière. Gardez le core engagé.", "MARCHEZ ! Plus vous allez loin, plus c'est dur. Le core stabilise tout.", "IMG_PLANK", "Core, épaules"),
  ex("workout", "Transition", 20, "18:40", "", "Récupérez.", "Dernier exercice Round 2 !", TRANS, "", true),
  ex("workout", "Scissors (Ciseaux)", 40, "19:00", "Allongé, jambes tendues, épaules décollées.", "Ciseaux verticaux : une jambe monte, l'autre descend. Alternez rapidement.", "CISEAUX ! Jambes tendues, épaules décollées. Les abdos ne lâchent pas.", "IMG_DEADBUG", "Grand droit, psoas"),
  ex("workout", "Transition", 20, "19:40", "", "Récupérez.", "ROUND 2 TERMINÉ !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "20:00", "Posture de l'enfant.", "Respirez profondément. Le dos s'étire. Le core récupère.", "Mi-parcours ! 2 rounds faits. Respirez dans la posture de l'enfant.", "IMG_CHILD_POSE", "Récupération"),
  ex("workout", "Transition", 15, "20:45", "", "Préparez-vous.", "ROUND 3 !", TRANS, "", true),

  // ROUND 3
  ex("workout", "Crunch + Rotation", 40, "21:00", "Allongé, genoux pliés, mains derrière la tête.", "Montez en crunch et tournez le coude vers le genou opposé. Alternez.", "MONTEZ et TOURNEZ ! Grand droit + obliques. Double travail.", "IMG_DEADBUG", "Grand droit, obliques"),
  ex("workout", "Transition", 20, "21:40", "", "Récupérez.", "Prochain : Planche Up-Down.", TRANS, "", true),
  ex("workout", "Planche Up-Down", 40, "22:00", "Planche avant-bras.", "Montez sur les mains, redescendez. Rythme soutenu.", "MONTEZ DESCENDEZ ! Les bras et le core travaillent ensemble.", "IMG_PLANK", "Core, triceps, épaules"),
  ex("workout", "Transition", 20, "22:40", "", "Récupérez.", "Prochain : Leg Lower.", TRANS, "", true),
  ex("workout", "Leg Lower & Lift", 40, "23:00", "Allongé, jambes tendues au plafond.", "Descendez les jambes lentement vers le sol (sans toucher). Remontez. Bas du dos au sol.", "LENTEMENT ! Plus c'est lent, plus c'est efficace. Le bas du dos ne décolle pas.", "IMG_DEADBUG", "Grand droit inférieur, transverse"),
  ex("workout", "Transition", 20, "23:40", "", "Récupérez.", "Prochain : Russian Twist.", TRANS, "", true),
  ex("workout", "Russian Twist", 40, "24:00", "Assis, genoux pliés, pieds décollés, buste incliné.", "Tournez le tronc à droite puis à gauche. Touchez le sol de chaque côté. Pieds décollés.", "TOURNEZ ! Les pieds restent décollés. Les obliques travaillent à chaque rotation.", "IMG_PLANK_ROTATION", "Obliques, transverse"),
  ex("workout", "Transition", 20, "24:40", "", "Récupérez.", "Prochain : Mountain Climbers Croisés.", TRANS, "", true),
  ex("workout", "Mountain Climbers Croisés", 40, "25:00", "Planche haute.", "Genou droit vers coude gauche, puis inversez. Rythme maximal.", "CROISEZ et SPRINTEZ ! Cardio + obliques. Donnez tout.", "IMG_PLANK", "Obliques, cardio"),
  ex("workout", "Transition", 20, "25:40", "", "Récupérez.", "Prochain : Boat Hold.", TRANS, "", true),
  ex("workout", "Boat Hold (Teaser)", 40, "26:00", "Assis, jambes tendues décollées, bras tendus devant.", "Tenez la position en V. Corps en forme de V. Jambes et buste décollés.", "TENEZ le V ! Les abdos profonds stabilisent. Respirez dans la position.", "IMG_DEADBUG", "Core complet, psoas"),
  ex("workout", "Transition", 20, "26:40", "", "Récupérez.", "Dernier exercice Round 3 !", TRANS, "", true),
  ex("workout", "Planche Étoile", 40, "27:00", "Planche haute.", "Sautez pieds et mains écartés (étoile) puis revenez. Alternez ouvert/fermé.", "ÉTOILE ! Ouvrez, fermez. Le core stabilise à chaque saut.", "IMG_PLANK", "Core, coordination, cardio"),
  ex("workout", "Transition", 20, "27:40", "", "Récupérez.", "ROUND 3 TERMINÉ ! Dernier round !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "28:00", "Genoux à la poitrine.", "Bercez-vous. Respirez. Dernier round.", "DERNIER ROUND ! Vous avez fait 3 rounds incroyables. Le 4ème est le finisher.", "IMG_KNEES_CHEST", "Récupération"),
  ex("workout", "Transition", 15, "28:45", "", "Préparez-vous.", "ROUND 4 FINAL !", TRANS, "", true),

  // ROUND 4 — FINISHER
  ex("workout", "Hollow Body Rock", 40, "29:00", "Position hollow body (banane).", "Balancez-vous d'avant en arrière en gardant la forme. Ne cassez pas la position.", "BALANCEZ ! Gardez la forme de banane. C'est le core qui fait tout le travail.", "IMG_DEADBUG", "Core complet"),
  ex("workout", "Transition", 20, "29:40", "", "Récupérez.", "Prochain : Planche Hold Max.", TRANS, "", true),
  ex("workout", "Planche Hold Max", 40, "30:00", "Planche avant-bras.", "TENEZ. 40 secondes. Immobile. Corps parfaitement aligné.", "TENEZ BON ! 40 secondes. C'est mental. Le core est en acier.", "IMG_PLANK", "Core, isométrique"),
  ex("workout", "Transition", 20, "30:40", "", "Récupérez.", "Prochain : V-Up Rapides.", TRANS, "", true),
  ex("workout", "V-Up Rapides", 40, "31:00", "Allongé.", "V-Up le plus vite possible. Bras et jambes se rejoignent en V.", "VITESSE ! Chaque V-Up compte. Les abdos brûlent. C'est le finisher.", "IMG_DEADBUG", "Grand droit, psoas"),
  ex("workout", "Transition", 20, "31:40", "", "Récupérez.", "DERNIER EXERCICE !", TRANS, "", true),
  ex("workout", "Mountain Climbers Sprint Final", 40, "32:00", "Planche haute.", "Mountain climbers le plus vite possible. 40 secondes. TOUT DONNER.", "C'EST LE DERNIER ! SPRINT FINAL ! DONNEZ TOUT CE QU'IL VOUS RESTE !", "IMG_PLANK", "Core, cardio max"),
  ex("workout", "Transition", 20, "32:40", "", "Allongez-vous.", "CIRCUIT TERMINÉ ! Retour au calme.", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~6 min)
  ex("cooldown", "Genoux à la Poitrine", 60, "33:00", "Allongé, genoux ramenés à la poitrine.", "Bercez-vous doucement. Massez le bas du dos. Respirez profondément.", "Le core récupère. Bercez-vous, massez le dos. Bravo.", "IMG_KNEES_CHEST", "Bas du dos, relaxation"),
  ex("cooldown", "Transition", 15, "34:00", "", "Restez allongé.", "On étire.", TRANS, "", true),
  ex("cooldown", "Torsion Allongée", 60, "34:15", "Allongé, bras en croix, genoux pliés.", "Laissez tomber les genoux à droite, regardez à gauche. 30s. Puis inversez.", "Épaules au sol. Respirez dans la torsion. Les obliques s'étirent.", "IMG_DEADBUG", "Obliques, colonne"),
  ex("cooldown", "Transition", 15, "35:15", "", "Revenez au centre.", "Autre côté.", TRANS, "", true),
  ex("cooldown", "Cobra Stretch", 60, "35:30", "Allongé sur le ventre, mains sous les épaules.", "Poussez pour lever le buste. Bras tendus ou semi-tendus. Étirez les abdominaux.", "Ouvrez la poitrine, étirez les abdos. Respirez profondément.", "IMG_PUSHUP", "Abdominaux, psoas"),
  ex("cooldown", "Transition", 15, "36:30", "", "Passez en posture de l'enfant.", "Dernière posture.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "36:45", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez tout. Respirez.", "Vous l'avez fait ! 4 rounds de HIIT Core. Vos abdos sont en béton. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation"),
];

export const session13: SessionConfig = {
  id: "hiit-core",
  title: "HIIT Core / Abdos",
  subtitle: "Gainage & Abdominaux",
  description: "Circuit HIIT ciblé core : V-Up, mountain climbers, planche dynamique, hollow body, bicycle crunch. 4 rounds pour des abdos en béton armé.",
  level: "Intermédiaire",
  duration: "~38 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement Core", workout: "HIIT Core / Abdos", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "yellow",
  finishMessage: "INCROYABLE ! 4 rounds de HIIT Core terminés ! Vos abdos, obliques et transverse ont été travaillés sous tous les angles. Hydratez-vous. À très bientôt avec Coach Mimi !",
};
