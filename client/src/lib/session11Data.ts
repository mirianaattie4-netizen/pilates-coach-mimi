/*
 * SÉANCE 11 — HIIT Bas du Corps — Circuit Cuisses, Fessiers, Mollets
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
  ex("warmup", "Marche Genoux Hauts", 45, "00:00", "Debout, pieds largeur hanches.", "Marchez sur place en montant les genoux. Augmentez progressivement le rythme. Bras en opposition.", "On réveille les jambes ! Genoux hauts, rythme progressif.", "IMG_HUNDRED", "Quadriceps, psoas"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On continue.", TRANS, "", true),
  ex("warmup", "Squats Lents", 45, "01:00", "Debout, pieds largeur épaules.", "Descendez lentement en squat (4 secondes), remontez en 2 secondes. Contrôle total.", "Lent et contrôlé ! On prépare les cuisses et les fessiers pour l'effort.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On enchaîne.", TRANS, "", true),
  ex("warmup", "Fentes Avant Alternées", 45, "02:00", "Debout, pieds joints.", "Grand pas en avant, genou arrière vers le sol. Poussez pour revenir. Alternez.", "Grand pas, buste droit ! On réchauffe les hanches.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, psoas"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "On continue l'échauffement.", TRANS, "", true),
  ex("warmup", "Cercles de Hanches", 45, "03:00", "Debout, mains sur les hanches.", "Faites de grands cercles avec les hanches. 15 secondes dans un sens, 15 dans l'autre. Puis petits cercles rapides.", "Mobilisez les hanches ! Grands cercles fluides. On prépare les articulations.", "IMG_HIP_CIRCLES", "Hanches, mobilité"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "On prépare les mollets.", TRANS, "", true),
  ex("warmup", "Montées sur Pointes", 45, "04:00", "Debout, pieds joints.", "Montez sur la pointe des pieds, tenez 2 secondes, redescendez. Enchaînez. Gardez l'équilibre.", "Montez haut sur les pointes ! On réveille les mollets. Équilibre et contrôle.", "IMG_BRIDGE", "Mollets, stabilisateurs"),
  ex("warmup", "Transition", 15, "04:45", "", "Restez debout.", "Dernier exercice d'échauffement.", TRANS, "", true),
  ex("warmup", "Squat + Montée Genou", 45, "05:00", "Debout, pieds largeur épaules.", "Descendez en squat, remontez et montez un genou vers la poitrine. Alternez les genoux.", "Squat + genou ! On combine force et équilibre. Le corps est prêt !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, psoas"),
  ex("warmup", "Transition", 15, "05:45", "", "Préparez-vous.", "ROUND 1 dans 15 secondes !", TRANS, "", true),

  // PHASE 2 — HIIT BAS DU CORPS — ROUND 1
  ex("workout", "Squats Sautés", 40, "06:00", "Debout, pieds largeur épaules.", "Squat profond puis explosez en saut. Atterrissage souple. Enchaînez sans pause.", "EXPLOSEZ ! Atterrissage souple, genoux souples. Poussez dans les talons !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 20, "06:40", "", "Récupérez.", "Prochain : Fentes Sautées.", TRANS, "", true),
  ex("workout", "Fentes Sautées", 40, "07:00", "Position de fente.", "Sautez et changez de jambe en l'air. Atterrissez en fente opposée. Alternez.", "CHANGEZ en l'air ! Genou à 90°, buste droit. Explosivité maximale !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 20, "07:40", "", "Récupérez.", "Prochain : Sumo Squat Pulse.", TRANS, "", true),
  ex("workout", "Sumo Squat Pulse", 40, "08:00", "Debout, pieds très écartés, pointes à 45°.", "Descendez en sumo squat. Restez en bas et faites des pulses. Ne remontez pas pendant 40s.", "RESTEZ EN BAS ! Ça brûle, c'est le signe que ça marche. Tenez bon !", "IMG_GOBLET_SQUAT", "Adducteurs, quadriceps, fessiers"),
  ex("workout", "Transition", 20, "08:40", "", "Remontez.", "Prochain : Pont Fessier Dynamique.", TRANS, "", true),
  ex("workout", "Pont Fessier Dynamique", 40, "09:00", "Allongé sur le dos, pieds à plat, genoux pliés.", "Montez les hanches vers le plafond en serrant les fessiers. Redescendez sans toucher le sol. Enchaînez vite.", "SERREZ les fessiers en haut ! Ne posez pas les fesses au sol entre les reps.", "IMG_BRIDGE", "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 20, "09:40", "", "Récupérez.", "Prochain : Wall Sit.", TRANS, "", true),
  ex("workout", "Wall Sit (Chaise)", 40, "10:00", "Dos contre le mur, cuisses parallèles au sol.", "Tenez la position de la chaise. Dos plaqué au mur, cuisses à 90°. Ne bougez pas pendant 40 secondes.", "TENEZ ! Le mur est votre ami. Cuisses à 90°, dos plaqué. C'est de l'isométrique pur !", "IMG_GOBLET_SQUAT", "Quadriceps, isométrique"),
  ex("workout", "Transition", 20, "10:40", "", "Décollez du mur.", "Prochain : Step-Up Alternés.", TRANS, "", true),
  ex("workout", "Step-Up Alternés", 40, "11:00", "Debout face à une marche ou un step (ou faites sur place).", "Montez un pied sur la marche, poussez pour monter. Redescendez. Alternez. Sans marche : montée de genou explosive.", "Poussez dans le talon ! Chaque montée est une explosion. Alternez rapidement.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 20, "11:40", "", "Récupérez.", "Dernier exercice du Round 1 !", TRANS, "", true),
  ex("workout", "Calf Raises Explosifs", 40, "12:00", "Debout, pieds joints.", "Montez sur les pointes le plus haut possible, redescendez et rebondissez immédiatement. Rythme rapide.", "REBONDISSEZ ! Montez haut, redescendez vite. Les mollets brûlent, c'est parfait !", "IMG_BRIDGE", "Mollets, soléaire"),
  ex("workout", "Transition", 20, "12:40", "", "Marchez sur place.", "ROUND 1 TERMINÉ ! Récupération.", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "13:00", "Debout, marchez sur place.", "Marchez, secouez les jambes. Respirez profondément.", "Bien joué ! Récupérez. Round 2 arrive.", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "13:45", "", "Préparez-vous.", "ROUND 2 !", TRANS, "", true),

  // ROUND 2
  ex("workout", "Squat + Coup de Pied Latéral", 40, "14:00", "Debout, pieds largeur épaules.", "Squat, remontez et envoyez un coup de pied latéral. Alternez les côtés.", "SQUAT + KICK ! Force et équilibre. Le kick part de la hanche.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, abducteurs"),
  ex("workout", "Transition", 20, "14:40", "", "Récupérez.", "Prochain : Curtsy Lunges.", TRANS, "", true),
  ex("workout", "Curtsy Lunges", 40, "15:00", "Debout, pieds largeur hanches.", "Croisez une jambe derrière l'autre en diagonale, descendez en fente. Alternez.", "Croisez DERRIÈRE ! On cible le moyen fessier. Buste droit, contrôle.", "IMG_REVERSE_LUNGE", "Moyen fessier, quadriceps"),
  ex("workout", "Transition", 20, "15:40", "", "Récupérez.", "Prochain : Single Leg Bridge.", TRANS, "", true),
  ex("workout", "Pont Fessier 1 Jambe", 40, "16:00", "Allongé, un pied au sol, l'autre jambe tendue au plafond.", "Montez les hanches avec une seule jambe. 20s droite, 20s gauche.", "UNE JAMBE ! Double l'intensité. Serrez le fessier en haut.", "IMG_BRIDGE", "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 20, "16:40", "", "Récupérez.", "Prochain : Patineurs.", TRANS, "", true),
  ex("workout", "Patineurs (Skaters)", 40, "17:00", "Debout, pieds joints.", "Sautez latéralement d'un pied à l'autre. Touchez le sol avec la main opposée.", "LATÉRAL ! Grand saut, touchez le sol. Agilité et puissance.", "IMG_REVERSE_LUNGE", "Fessiers, adducteurs, mollets"),
  ex("workout", "Transition", 20, "17:40", "", "Récupérez.", "Prochain : Squat Isométrique.", TRANS, "", true),
  ex("workout", "Squat Isométrique + Pulse", 40, "18:00", "Position squat, cuisses parallèles.", "Tenez le squat en bas. Ajoutez des micro-pulses. Ne remontez pas.", "RESTEZ EN BAS ! Les cuisses brûlent. C'est là que le muscle se construit !", "IMG_GOBLET_SQUAT", "Quadriceps, isométrique"),
  ex("workout", "Transition", 20, "18:40", "", "Remontez.", "Prochain : Donkey Kicks.", TRANS, "", true),
  ex("workout", "Donkey Kicks Rapides", 40, "19:00", "À quatre pattes, genoux sous les hanches.", "Poussez un pied vers le plafond, genou plié à 90°. Rythme rapide. 20s chaque côté.", "POUSSEZ vers le plafond ! Serrez le fessier en haut. Rapide et contrôlé.", "IMG_CAT_COW", "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 20, "19:40", "", "Récupérez.", "Dernier exercice Round 2 !", TRANS, "", true),
  ex("workout", "Pop Squats", 40, "20:00", "Debout, pieds joints.", "Sautez en écartant les pieds en squat, touchez le sol. Revenez pieds joints.", "EXPLOSIF ! Saut large, touchez le sol. Cardio + jambes à fond !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, cardio"),
  ex("workout", "Transition", 20, "20:40", "", "Marchez.", "ROUND 2 TERMINÉ ! Récupération.", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "21:00", "Marchez sur place.", "Respirez, secouez les jambes. Mi-parcours !", "Mi-chemin ! 2 rounds faits, 2 à venir. Vous êtes incroyables !", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "21:45", "", "Préparez-vous.", "ROUND 3 !", TRANS, "", true),

  // ROUND 3
  ex("workout", "Pistol Squat Assisté", 40, "22:00", "Debout sur une jambe, l'autre tendue devant.", "Descendez en squat sur une jambe. Utilisez un mur pour l'équilibre. 20s chaque côté.", "UNE JAMBE ! Descendez aussi bas que possible. Le mur vous aide. Force pure.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, équilibre"),
  ex("workout", "Transition", 20, "22:40", "", "Récupérez.", "Prochain : Fentes Marchées.", TRANS, "", true),
  ex("workout", "Fentes Marchées", 40, "23:00", "Debout, pieds joints.", "Faites une fente avant, poussez pour avancer. Enchaînez fente après fente en avançant (ou sur place).", "AVANCEZ ! Chaque fente est un pas. Genou à 90°, buste droit.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers"),
  ex("workout", "Transition", 20, "23:40", "", "Récupérez.", "Prochain : Fire Hydrants.", TRANS, "", true),
  ex("workout", "Fire Hydrants Rapides", 40, "24:00", "À quatre pattes.", "Ouvrez le genou sur le côté comme un chien. Rythme rapide. 20s chaque côté.", "OUVREZ ! On cible le moyen fessier. Rapide et contrôlé.", "IMG_CAT_COW", "Moyen fessier, abducteurs"),
  ex("workout", "Transition", 20, "24:40", "", "Récupérez.", "Prochain : Jump Squats.", TRANS, "", true),
  ex("workout", "Jump Squats Profonds", 40, "25:00", "Debout, pieds largeur épaules.", "Squat très profond (fesses aux mollets) puis explosez en saut maximal.", "PROFOND puis EXPLOSEZ ! Le squat le plus profond possible, le saut le plus haut.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, mollets"),
  ex("workout", "Transition", 20, "25:40", "", "Récupérez.", "Prochain : Pont Fessier Marche.", TRANS, "", true),
  ex("workout", "Pont Fessier Marche", 40, "26:00", "Allongé, hanches en l'air en pont.", "En position de pont, marchez les pieds vers l'avant puis vers l'arrière. Hanches hautes.", "HANCHES HAUTES ! Marchez les pieds sans laisser les hanches descendre.", "IMG_BRIDGE", "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 20, "26:40", "", "Récupérez.", "Prochain : Sprint Genoux Hauts.", TRANS, "", true),
  ex("workout", "Sprint Genoux Hauts", 40, "27:00", "Debout.", "Sprint sur place maximal ! Genoux le plus haut possible.", "SPRINT MAXIMAL ! Dernière ligne droite du Round 3 !", "IMG_HUNDRED", "Psoas, quadriceps, cardio"),
  ex("workout", "Transition", 20, "27:40", "", "Récupérez.", "Dernier exercice Round 3 !", TRANS, "", true),
  ex("workout", "Squat Hold 40s", 40, "28:00", "Position squat, cuisses parallèles.", "TENEZ la position. Immobile. 40 secondes. Respirez.", "TENEZ BON ! 40 secondes. Les cuisses brûlent. C'est mental maintenant !", "IMG_GOBLET_SQUAT", "Quadriceps, isométrique"),
  ex("workout", "Transition", 20, "28:40", "", "Remontez.", "ROUND 3 TERMINÉ ! Dernier round !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "29:00", "Marchez.", "Respirez. Dernier round. Donnez tout !", "DERNIER ROUND ! Vous avez fait 3 rounds. Le 4ème est le dernier. TOUT DONNER !", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "29:45", "", "Préparez-vous.", "ROUND 4 FINAL !", TRANS, "", true),

  // ROUND 4 — FINISHER
  ex("workout", "Burpees + Squat Jump", 40, "30:00", "Debout.", "Burpee puis squat sauté. Enchaînez sans pause.", "TOUT DONNER ! Burpee + squat jump. C'est le finisher !", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "30:40", "", "Récupérez.", "Prochain : Fentes Sautées Rapides.", TRANS, "", true),
  ex("workout", "Fentes Sautées Rapides", 40, "31:00", "Position de fente.", "Fentes sautées le plus vite possible. Alternez.", "VITESSE MAXIMALE ! Changez en l'air, atterrissage souple.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, cardio"),
  ex("workout", "Transition", 20, "31:40", "", "Récupérez.", "Prochain : Sumo Squat Jump.", TRANS, "", true),
  ex("workout", "Sumo Squat Jump", 40, "32:00", "Pieds très écartés, pointes à 45°.", "Sumo squat profond puis sautez. Atterrissage souple en sumo.", "SUMO + SAUT ! Pieds écartés, explosez vers le haut.", "IMG_GOBLET_SQUAT", "Adducteurs, fessiers, mollets"),
  ex("workout", "Transition", 20, "32:40", "", "Récupérez.", "Prochain : Pont Fessier Explosif.", TRANS, "", true),
  ex("workout", "Pont Fessier Explosif", 40, "33:00", "Allongé, pieds à plat.", "Montez les hanches explosif, redescendez vite. Rythme maximal.", "EXPLOSEZ les hanches vers le haut ! Serrez les fessiers à chaque rep.", "IMG_BRIDGE", "Fessiers, ischio-jambiers"),
  ex("workout", "Transition", 20, "33:40", "", "Récupérez.", "Prochain : Tuck Jumps.", TRANS, "", true),
  ex("workout", "Tuck Jumps", 40, "34:00", "Debout.", "Sautez en ramenant les genoux à la poitrine. Atterrissage souple.", "GENOUX À LA POITRINE ! Saut maximal. C'est l'avant-dernier !", "IMG_HUNDRED", "Quadriceps, psoas, mollets"),
  ex("workout", "Transition", 20, "34:40", "", "Récupérez.", "DERNIER EXERCICE !", TRANS, "", true),
  ex("workout", "Squat Jump Non-Stop", 40, "35:00", "Debout, pieds largeur épaules.", "Squat sauté sans arrêt pendant 40 secondes. Chaque saut compte. DONNEZ TOUT.", "C'EST LE DERNIER ! SQUAT JUMP NON-STOP ! TOUT CE QU'IL VOUS RESTE !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, cardio max"),
  ex("workout", "Transition", 20, "35:40", "", "Marchez.", "CIRCUIT TERMINÉ ! Retour au calme.", TRANS, "", true),

  // PHASE 3 — RETOUR AU CALME (~7 min)
  ex("cooldown", "Marche Récupération", 60, "36:00", "Debout, marchez lentement.", "Marchez doucement. Laissez le cœur redescendre. Respirez profondément.", "Bravo ! Marchez doucement. Vous avez tout donné.", "IMG_RESPIRATION", "Récupération"),
  ex("cooldown", "Transition", 15, "37:00", "", "Restez debout.", "On étire les jambes.", TRANS, "", true),
  ex("cooldown", "Étirement Quadriceps", 60, "37:15", "Debout, attrapez le pied derrière.", "Tirez le talon vers la fesse. 30s chaque côté.", "Étirez en douceur. Les quadriceps ont beaucoup travaillé.", "IMG_REVERSE_LUNGE", "Quadriceps"),
  ex("cooldown", "Transition", 15, "38:15", "", "Au sol.", "On continue les étirements.", TRANS, "", true),
  ex("cooldown", "Étirement Fessiers", 60, "38:30", "Allongé, cheville droite sur genou gauche.", "Tirez le genou gauche vers la poitrine. Sentez l'étirement dans le fessier droit. 30s chaque côté.", "Respirez dans l'étirement. Les fessiers ont beaucoup travaillé.", "IMG_DEADBUG", "Fessiers, piriforme"),
  ex("cooldown", "Transition", 15, "39:30", "", "Changez de côté.", "Autre côté.", TRANS, "", true),
  ex("cooldown", "Fente Basse Étirement", 60, "39:45", "Position de fente basse, genou arrière au sol.", "Poussez les hanches vers l'avant. Sentez l'étirement du psoas. 30s chaque côté.", "Ouvrez les hanches. Le psoas a beaucoup travaillé. Respirez.", "IMG_REVERSE_LUNGE", "Psoas, quadriceps"),
  ex("cooldown", "Transition", 15, "40:45", "", "Allongez-vous.", "Dernière posture.", TRANS, "", true),
  ex("cooldown", "Savasana", 60, "41:00", "Allongé sur le dos, bras le long du corps.", "Fermez les yeux. Relâchez tout. Respirez naturellement. Savourez.", "Vous l'avez fait ! 4 rounds de HIIT Bas du Corps. Vos jambes sont en acier. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation"),
];

export const session11: SessionConfig = {
  id: "hiit-bas-du-corps",
  title: "HIIT Bas du Corps",
  subtitle: "Cuisses, Fessiers & Mollets",
  description: "Circuit HIIT ciblé bas du corps : squats sautés, fentes explosives, ponts fessiers, wall sit. 4 rounds intenses pour sculpter cuisses, fessiers et mollets.",
  level: "Intermédiaire",
  duration: "~42 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement Dynamique", workout: "HIIT Bas du Corps", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "orange",
  finishMessage: "BRAVO ! 4 rounds de HIIT Bas du Corps terminés ! Vos cuisses, fessiers et mollets ont été travaillés à fond. Hydratez-vous et reposez-vous. À très bientôt avec Coach Mimi !",
};
