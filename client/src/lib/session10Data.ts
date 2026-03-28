/*
 * SÉANCE 10 — HIIT Full Body Circuit — 1 Heure
 * Coach Mimi — Abidjan
 * AUCUN MATÉRIEL — Poids du corps uniquement
 * Format: 40s effort / 20s repos — 4 rounds de 8 exercices + échauffement + retour au calme
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";
let id = 0;
const ex = (phase: "warmup" | "workout" | "cooldown", name: string, dur: number, start: string, pos: string, mov: string, coach: string, img: string, muscles: string, isTrans = false): Exercise => ({
  id: ++id, phase, isTransition: isTrans, name, duration: dur, startTime: start, position: pos, movement: mov, coaching: coach, imageUrl: isTrans ? "" : img, targetMuscles: muscles,
});

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT DYNAMIQUE (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("warmup", "Marche sur Place", 45, "00:00", "Debout, pieds largeur hanches, bras le long du corps.", "Marchez sur place en montant les genoux à hauteur de hanches. Balancez les bras naturellement. Augmentez progressivement le rythme.", "On réveille le corps ! Montez bien les genoux, respirez profondément. On prépare le cœur pour l'effort.", "IMG_HUNDRED", "Quadriceps, psoas, cardio"),
  ex("warmup", "Transition", 15, "00:45", "", "Restez debout.", "On enchaîne !", TRANS, "", true),

  ex("warmup", "Jumping Jacks Légers", 45, "01:00", "Debout, pieds joints, bras le long du corps.", "Sautez en écartant les pieds et en levant les bras au-dessus de la tête. Revenez pieds joints, bras le long du corps. Rythme modéré.", "Souplesse dans les genoux ! On ouvre la cage thoracique, on respire. Le cardio monte doucement.", "IMG_HUNDRED", "Deltoïdes, mollets, cardio"),
  ex("warmup", "Transition", 15, "01:45", "", "Restez debout.", "On continue l'échauffement.", TRANS, "", true),

  ex("warmup", "Squats Dynamiques", 45, "02:00", "Debout, pieds largeur épaules, pointes légèrement ouvertes.", "Descendez en squat, cuisses parallèles au sol, bras devant. Remontez dynamiquement en poussant dans les talons. Enchaînez sans pause.", "Poitrine haute, genoux au-dessus des orteils ! Poussez fort dans les talons. On active les fessiers et les cuisses.", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, ischio-jambiers"),
  ex("warmup", "Transition", 15, "02:45", "", "Restez debout.", "Préparez-vous pour les fentes.", TRANS, "", true),

  ex("warmup", "Fentes Alternées", 45, "03:00", "Debout, pieds joints, mains sur les hanches.", "Faites un grand pas en avant, genou arrière vers le sol. Poussez pour revenir. Alternez droite-gauche sans pause.", "Grand pas, genou à 90° ! Gardez le buste droit. On réchauffe les hanches et les cuisses.", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, psoas"),
  ex("warmup", "Transition", 15, "03:45", "", "Restez debout.", "On passe aux rotations.", TRANS, "", true),

  ex("warmup", "Rotations de Tronc", 45, "04:00", "Debout, pieds largeur épaules, bras tendus devant.", "Tournez le tronc à droite puis à gauche en gardant les hanches fixes. Les bras suivent le mouvement. Rythme fluide.", "Hanches fixes, seul le haut du corps tourne ! On mobilise la colonne thoracique.", "IMG_PLANK_ROTATION", "Obliques, transverse, colonne thoracique"),
  ex("warmup", "Transition", 15, "04:45", "", "Restez debout.", "Derniers exercices d'échauffement.", TRANS, "", true),

  ex("warmup", "High Knees Modérés", 45, "05:00", "Debout, pieds largeur hanches.", "Courez sur place en montant les genoux le plus haut possible. Bras en opposition. Rythme soutenu mais contrôlé.", "Genoux hauts ! Gainez le ventre à chaque montée de genou. Le cœur accélère, c'est normal.", "IMG_HUNDRED", "Psoas, quadriceps, cardio"),
  ex("warmup", "Transition", 15, "05:45", "", "Restez debout.", "On prépare le corps pour le HIIT.", TRANS, "", true),

  ex("warmup", "Inchworm", 45, "06:00", "Debout, pieds joints.", "Penchez-vous, posez les mains au sol, marchez les mains vers l'avant jusqu'à la planche. Faites une pompe. Marchez les mains vers les pieds, remontez debout.", "Jambes aussi tendues que possible ! On étire les ischio-jambiers et on active tout le corps.", "IMG_PUSHUP", "Ischio-jambiers, épaules, core"),
  ex("warmup", "Transition", 15, "06:45", "", "Restez debout.", "Dernier exercice d'échauffement.", TRANS, "", true),

  ex("warmup", "Mountain Climbers Lents", 45, "07:00", "Position de planche haute, mains sous les épaules.", "Amenez un genou vers la poitrine, puis l'autre. Rythme lent et contrôlé. Gardez les hanches basses et le dos droit.", "Contrôle total ! Pas de rebond dans les hanches. On prépare le core pour les rounds HIIT.", "IMG_PLANK", "Core, psoas, épaules"),
  ex("warmup", "Transition", 15, "07:45", "", "Debout, secouez les bras.", "L'échauffement est terminé ! ROUND 1 dans 15 secondes !", TRANS, "", true),

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — HIIT CIRCUIT — ROUND 1 (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("workout", "Burpees Modifiés", 40, "08:00", "Debout, pieds largeur épaules.", "Descendez en squat, posez les mains au sol, sautez les pieds en arrière en planche. Revenez en squat, sautez en l'air bras au ciel.", "EXPLOSIVITÉ ! Chaque burpee compte. Gainez en planche, explosez en saut. Vous êtes des guerriers !", "IMG_PUSHUP", "Full body, cardio"),
  ex("workout", "Transition", 20, "08:40", "", "Récupérez debout.", "20 secondes de repos. Respirez ! Prochain : Squats Sautés.", TRANS, "", true),

  ex("workout", "Squats Sautés", 40, "09:00", "Debout, pieds largeur épaules.", "Descendez en squat profond, puis explosez en saut. Atterrissez en douceur, absorbez avec les genoux. Enchaînez immédiatement.", "EXPLOSEZ vers le haut ! Atterrissage souple, genoux souples. Poussez dans les talons !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, mollets, cardio"),
  ex("workout", "Transition", 20, "09:40", "", "Récupérez debout.", "Respirez ! Prochain : Mountain Climbers.", TRANS, "", true),

  ex("workout", "Mountain Climbers Rapides", 40, "10:00", "Position de planche haute.", "Amenez les genoux vers la poitrine en alternance le plus vite possible. Gardez les hanches basses. Rythme maximal !", "VITESSE MAXIMALE ! Les hanches restent basses, le dos droit. Chaque genou touche presque le coude !", "IMG_PLANK", "Core, psoas, épaules, cardio"),
  ex("workout", "Transition", 20, "10:40", "", "Restez en planche.", "Soufflez ! Prochain : Pompes.", TRANS, "", true),

  ex("workout", "Pompes Dynamiques", 40, "11:00", "Position de planche haute, mains largeur épaules.", "Descendez la poitrine vers le sol, poussez explosif pour décoller les mains. Variante : sur les genoux. Enchaînez sans pause.", "Poitrine au sol, explosion vers le haut ! Si c'est trop dur, genoux au sol mais gardez l'explosivité !", "IMG_PUSHUP", "Pectoraux, triceps, épaules, core"),
  ex("workout", "Transition", 20, "11:40", "", "Récupérez debout.", "Mi-round ! Encore 4 exercices. Respirez !", TRANS, "", true),

  ex("workout", "Fentes Sautées", 40, "12:00", "Debout, position de fente.", "En position de fente, sautez et changez de jambe en l'air. Atterrissez en fente de l'autre côté. Alternez sans pause.", "EXPLOSEZ ! Genou à 90°, atterrissage souple. Gardez le buste droit, les bras en balancier !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, mollets, cardio"),
  ex("workout", "Transition", 20, "12:40", "", "Récupérez debout.", "Respirez ! Prochain : Planche avec Touche Épaule.", TRANS, "", true),

  ex("workout", "Planche Touche Épaule", 40, "13:00", "Position de planche haute, pieds écartés.", "Touchez l'épaule droite avec la main gauche, puis l'épaule gauche avec la main droite. Alternez en gardant les hanches stables.", "ZÉRO rotation des hanches ! Écartez les pieds pour plus de stabilité. Core en béton !", "IMG_PLANK_ROTATION", "Core, épaules, stabilisateurs"),
  ex("workout", "Transition", 20, "13:40", "", "Récupérez debout.", "Prochain : High Knees Sprint !", TRANS, "", true),

  ex("workout", "High Knees Sprint", 40, "14:00", "Debout, pieds largeur hanches.", "Sprint sur place ! Montez les genoux le plus haut et le plus vite possible. Bras en opposition, gainez le ventre.", "SPRINT SPRINT SPRINT ! Donnez tout ! Les genoux montent, les bras pompent. C'est le cardio max !", "IMG_HUNDRED", "Psoas, quadriceps, cardio max"),
  ex("workout", "Transition", 20, "14:40", "", "Récupérez debout.", "Dernier exercice du Round 1 !", TRANS, "", true),

  ex("workout", "Planche Commando", 40, "15:00", "Position de planche sur les avant-bras.", "Montez sur les mains une à une (planche haute), puis redescendez sur les avant-bras. Alternez le bras qui commence.", "PUISSANCE des bras ! Gardez les hanches stables. Alternez le bras de départ à chaque rep.", "IMG_PLANK", "Triceps, épaules, core"),
  ex("workout", "Transition", 20, "15:40", "", "Récupérez debout. Marchez.", "ROUND 1 TERMINÉ ! 1 minute de récupération active.", TRANS, "", true),

  // Récupération entre rounds
  ex("workout", "Récupération Active", 45, "16:00", "Debout, marchez sur place.", "Marchez sur place, secouez les bras et les jambes. Respirez profondément par le nez, expirez par la bouche. Hydratez-vous.", "Récupération active ! Ne vous asseyez pas. Marchez, respirez. Le Round 2 arrive dans 15 secondes.", "IMG_RESPIRATION", "Récupération cardio"),
  ex("workout", "Transition", 15, "16:45", "", "Préparez-vous.", "ROUND 2 ! C'est reparti !", TRANS, "", true),

  // ═══════════════════════════════════════════════════════════════
  // ROUND 2 (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("workout", "Squat + Coup de Pied", 40, "17:00", "Debout, pieds largeur épaules, garde de boxe.", "Descendez en squat, remontez et envoyez un coup de pied frontal. Alternez les jambes à chaque squat.", "SQUAT profond puis KICK puissant ! Gainez le ventre au moment du coup de pied. Équilibre et puissance !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, psoas, cardio"),
  ex("workout", "Transition", 20, "17:40", "", "Récupérez debout.", "Respirez ! Prochain : Pompes Diamant.", TRANS, "", true),

  ex("workout", "Pompes Diamant", 40, "18:00", "Position de planche, mains rapprochées en diamant sous la poitrine.", "Descendez la poitrine vers les mains, poussez. Variante : sur les genoux. Gardez les coudes près du corps.", "Coudes serrés ! On cible les triceps. Si c'est trop dur, genoux au sol mais gardez la forme parfaite.", "IMG_PUSHUP", "Triceps, pectoraux, core"),
  ex("workout", "Transition", 20, "18:40", "", "Récupérez.", "Prochain : Patineurs.", TRANS, "", true),

  ex("workout", "Patineurs (Skaters)", 40, "19:00", "Debout, pieds joints.", "Sautez latéralement d'un pied à l'autre, comme un patineur de vitesse. Touchez le sol avec la main opposée à chaque saut.", "LATÉRAL et EXPLOSIF ! Grand saut, touchez le sol. On travaille l'agilité et le cardio !", "IMG_REVERSE_LUNGE", "Fessiers, adducteurs, mollets, cardio"),
  ex("workout", "Transition", 20, "19:40", "", "Récupérez debout.", "Prochain : V-Up.", TRANS, "", true),

  ex("workout", "V-Up", 40, "20:00", "Allongé sur le dos, bras tendus au-dessus de la tête.", "Levez simultanément les bras et les jambes tendues pour former un V. Touchez les orteils. Redescendez contrôlé.", "EXPLOSIF vers le haut ! Bras et jambes se rejoignent. Expirez en montant, inspirez en descendant.", "IMG_DEADBUG", "Grand droit, transverse, psoas"),
  ex("workout", "Transition", 20, "20:40", "", "Restez allongé.", "Prochain : Bicycle Crunch.", TRANS, "", true),

  ex("workout", "Bicycle Crunch Rapide", 40, "21:00", "Allongé sur le dos, mains derrière la tête.", "Amenez le coude droit vers le genou gauche, puis le coude gauche vers le genou droit. Rythme rapide, épaules décollées.", "ROTATION complète ! Le coude touche le genou opposé. Épaules toujours décollées du sol !", "IMG_DEADBUG", "Obliques, grand droit, psoas"),
  ex("workout", "Transition", 20, "21:40", "", "Récupérez allongé.", "Prochain : Planche Latérale.", TRANS, "", true),

  ex("workout", "Planche Latérale Dynamique", 40, "22:00", "Position de planche latérale sur l'avant-bras droit.", "Descendez la hanche vers le sol puis remontez au-dessus de la ligne. Enchaînez les hip dips. 20s chaque côté.", "Hanche haute ! Ne laissez pas le bassin s'effondrer. On sculpte les obliques et la taille.", "IMG_PLANK_ROTATION", "Obliques, transverse, épaules"),
  ex("workout", "Transition", 20, "22:40", "", "Changez de côté.", "Prochain : Tuck Jumps.", TRANS, "", true),

  ex("workout", "Tuck Jumps", 40, "23:00", "Debout, pieds largeur hanches.", "Sautez en ramenant les genoux vers la poitrine en l'air. Atterrissez en douceur, genoux souples. Enchaînez.", "GENOUX À LA POITRINE ! Saut maximal, atterrissage souple. C'est l'exercice le plus explosif !", "IMG_HUNDRED", "Quadriceps, psoas, mollets, cardio max"),
  ex("workout", "Transition", 20, "23:40", "", "Récupérez debout.", "ROUND 2 TERMINÉ ! Récupération active.", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "24:00", "Debout, marchez sur place.", "Marchez, respirez profondément. Secouez les jambes. Hydratez-vous si besoin.", "Vous êtes à mi-chemin ! 2 rounds faits, 2 à venir. Respirez, récupérez. Vous êtes incroyables !", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "24:45", "", "Préparez-vous.", "ROUND 3 ! On repart !", TRANS, "", true),

  // ═══════════════════════════════════════════════════════════════
  // ROUND 3 (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("workout", "Sumo Squat Pulse", 40, "25:00", "Debout, pieds très écartés, pointes ouvertes à 45°.", "Descendez en squat sumo profond. Faites 3 petits pulses en bas puis remontez. Enchaînez sans pause.", "RESTEZ BAS ! 3 pulses puis on remonte. Les cuisses brûlent, c'est le signe que ça travaille !", "IMG_GOBLET_SQUAT", "Adducteurs, quadriceps, fessiers"),
  ex("workout", "Transition", 20, "25:40", "", "Récupérez debout.", "Prochain : Bear Crawl.", TRANS, "", true),

  ex("workout", "Bear Crawl", 40, "26:00", "À quatre pattes, genoux décollés du sol de 2 cm.", "Avancez main droite + pied gauche, puis main gauche + pied droit. 4 pas en avant, 4 pas en arrière. Genoux bas.", "Genoux à 2 cm du sol ! C'est un exercice de coordination et de gainage total. Lent et contrôlé.", "IMG_CAT_COW", "Core, épaules, quadriceps, coordination"),
  ex("workout", "Transition", 20, "26:40", "", "Récupérez debout.", "Prochain : Pop Squats.", TRANS, "", true),

  ex("workout", "Pop Squats", 40, "27:00", "Debout, pieds joints.", "Sautez en écartant les pieds en position squat, touchez le sol d'une main. Sautez pour revenir pieds joints. Alternez les mains.", "EXPLOSIF ! Saut large, touchez le sol, revenez. C'est du cardio pur avec du travail de jambes !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, cardio"),
  ex("workout", "Transition", 20, "27:40", "", "Récupérez.", "Prochain : Pompes Spiderman.", TRANS, "", true),

  ex("workout", "Pompes Spiderman", 40, "28:00", "Position de planche haute.", "En descendant en pompe, amenez le genou droit vers le coude droit. Remontez, alternez. Genou gauche vers coude gauche.", "Le genou touche le coude ! On combine pompe et gainage oblique. Exercice complet !", "IMG_PUSHUP", "Pectoraux, obliques, psoas, triceps"),
  ex("workout", "Transition", 20, "28:40", "", "Récupérez.", "Prochain : Sprints Genoux Hauts.", TRANS, "", true),

  ex("workout", "Sprints Genoux Hauts", 40, "29:00", "Debout, pieds largeur hanches.", "Sprint sur place maximal ! Genoux le plus haut possible, bras en opposition. Donnez TOUT pendant 40 secondes.", "C'EST LE MOMENT DE TOUT DONNER ! Sprint maximal ! Les genoux montent, les bras pompent !", "IMG_HUNDRED", "Psoas, quadriceps, cardio max"),
  ex("workout", "Transition", 20, "29:40", "", "Récupérez.", "Prochain : Superman.", TRANS, "", true),

  ex("workout", "Superman Dynamique", 40, "30:00", "Allongé sur le ventre, bras tendus devant.", "Levez simultanément les bras et les jambes du sol. Tenez 2 secondes, redescendez. Enchaînez sans pause.", "Serrez les fessiers ! Bras et jambes décollés, regard vers le sol. On renforce tout le dos.", "IMG_SWIMMING", "Érecteurs du rachis, fessiers, rhomboïdes"),
  ex("workout", "Transition", 20, "30:40", "", "Récupérez.", "Prochain : Planche avec Genou au Coude.", TRANS, "", true),

  ex("workout", "Planche Genou-Coude", 40, "31:00", "Position de planche haute.", "Amenez le genou droit vers le coude droit (extérieur), revenez. Puis genou gauche vers coude gauche. Alternez.", "OBLIQUES en feu ! Le genou va vers l'extérieur du coude. Hanches stables, core engagé.", "IMG_PLANK", "Obliques, core, épaules"),
  ex("workout", "Transition", 20, "31:40", "", "Récupérez debout.", "ROUND 3 TERMINÉ ! Dernier round à venir !", TRANS, "", true),

  // Récupération
  ex("workout", "Récupération Active", 45, "32:00", "Debout, marchez sur place.", "Marchez, étirez les bras au-dessus de la tête. Respirez profondément. Dernier round, donnez tout !", "DERNIER ROUND ! Vous avez fait 3 rounds incroyables. Le 4ème est le dernier. Tout donner !", "IMG_RESPIRATION", "Récupération"),
  ex("workout", "Transition", 15, "32:45", "", "Préparez-vous.", "ROUND 4 FINAL ! DERNIÈRE LIGNE DROITE !", TRANS, "", true),

  // ═══════════════════════════════════════════════════════════════
  // ROUND 4 — FINISHER (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("workout", "Burpees Complets", 40, "33:00", "Debout, pieds largeur épaules.", "Burpee complet : squat, planche, pompe, squat, saut. Enchaînez le plus vite possible. C'est le dernier round !", "TOUT DONNER ! Chaque burpee est un pas vers la victoire. Pompe en bas, saut en haut. ALLEZ !", "IMG_PUSHUP", "Full body, cardio max"),
  ex("workout", "Transition", 20, "33:40", "", "Récupérez.", "Prochain : Squat Hold + Pulse.", TRANS, "", true),

  ex("workout", "Squat Hold + Pulse", 40, "34:00", "Debout, pieds largeur épaules.", "Descendez en squat et RESTEZ en bas. Faites des petits pulses. Ne remontez pas pendant 40 secondes. Cuisses parallèles.", "RESTEZ EN BAS ! Ça brûle, c'est normal. Les cuisses travaillent en isométrique. Tenez bon !", "IMG_GOBLET_SQUAT", "Quadriceps, fessiers, isométrique"),
  ex("workout", "Transition", 20, "34:40", "", "Remontez doucement.", "Prochain : Mountain Climbers Croisés.", TRANS, "", true),

  ex("workout", "Mountain Climbers Croisés", 40, "35:00", "Position de planche haute.", "Amenez le genou droit vers le coude gauche, puis le genou gauche vers le coude droit. Rythme maximal, croisé.", "CROISEZ ! Genou droit vers coude gauche. C'est le twist qui fait travailler les obliques à fond !", "IMG_PLANK", "Obliques, core, cardio"),
  ex("workout", "Transition", 20, "35:40", "", "Récupérez.", "Prochain : Pompes Explosives.", TRANS, "", true),

  ex("workout", "Pompes Explosives", 40, "36:00", "Position de planche haute.", "Pompes avec phase explosive : poussez fort pour décoller les mains du sol. Clap optionnel. Variante genoux OK.", "EXPLOSIVITÉ MAXIMALE ! Décollez les mains. Si c'est trop dur, genoux au sol mais gardez l'explosion !", "IMG_PUSHUP", "Pectoraux, triceps, puissance"),
  ex("workout", "Transition", 20, "36:40", "", "Récupérez.", "Prochain : Jumping Lunges.", TRANS, "", true),

  ex("workout", "Jumping Lunges", 40, "37:00", "Position de fente, genou arrière proche du sol.", "Sautez et changez de jambe en l'air. Atterrissez en fente opposée. Enchaînez sans pause. Buste droit.", "CHANGEZ en l'air ! Atterrissage souple, genou à 90°. C'est l'avant-dernier exercice, DONNEZ TOUT !", "IMG_REVERSE_LUNGE", "Quadriceps, fessiers, mollets, cardio"),
  ex("workout", "Transition", 20, "37:40", "", "Récupérez.", "Prochain : Planche Commando Rapide.", TRANS, "", true),

  ex("workout", "Planche Commando Rapide", 40, "38:00", "Position de planche sur les avant-bras.", "Montez sur les mains, redescendez sur les avant-bras. Le plus vite possible. Alternez le bras de départ.", "VITESSE ! Montez, descendez. Les bras brûlent, le core tient. C'est l'avant-dernier !", "IMG_PLANK", "Triceps, épaules, core"),
  ex("workout", "Transition", 20, "38:40", "", "Récupérez.", "DERNIER EXERCICE ! Donnez TOUT !", TRANS, "", true),

  ex("workout", "Burpee + Tuck Jump", 40, "39:00", "Debout, pieds largeur épaules.", "Burpee complet puis au lieu du saut normal, faites un tuck jump (genoux à la poitrine). C'est le FINISHER !", "C'EST LE DERNIER ! BURPEE + TUCK JUMP ! Tout ce qu'il vous reste, mettez-le ici ! ALLEZ !", "IMG_PUSHUP", "Full body, cardio max, puissance"),
  ex("workout", "Transition", 20, "39:40", "", "Marchez sur place.", "CIRCUIT TERMINÉ ! Incroyable travail ! On passe au retour au calme.", TRANS, "", true),

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════
  ex("cooldown", "Marche Récupération", 60, "40:00", "Debout, marchez lentement sur place.", "Marchez doucement, laissez le rythme cardiaque redescendre. Respirez profondément par le nez, expirez par la bouche.", "Bravo ! Marchez doucement. Le cœur redescend. Vous avez été incroyables.", "IMG_RESPIRATION", "Récupération cardio"),
  ex("cooldown", "Transition", 15, "41:00", "", "Restez debout.", "On étire.", TRANS, "", true),

  ex("cooldown", "Étirement Quadriceps", 45, "41:15", "Debout sur une jambe, attrapez le pied derrière.", "Tirez le talon vers la fesse, genou pointé vers le sol. Tenez 20s chaque côté. Gardez le buste droit.", "Étirez en douceur. Pas de douleur, juste une tension agréable. Respirez dans l'étirement.", "IMG_REVERSE_LUNGE", "Quadriceps"),
  ex("cooldown", "Transition", 15, "42:00", "", "Changez de jambe.", "Autre côté.", TRANS, "", true),

  ex("cooldown", "Étirement Ischio-Jambiers", 45, "42:15", "Debout, un pied devant, jambe tendue, penchez le buste.", "Penchez-vous vers la jambe tendue, mains vers le pied. Sentez l'étirement derrière la cuisse. 20s chaque côté.", "Dos droit, penchez depuis les hanches. Respirez dans l'étirement.", "IMG_RDL", "Ischio-jambiers"),
  ex("cooldown", "Transition", 15, "43:00", "", "Changez de jambe.", "Autre côté.", TRANS, "", true),

  ex("cooldown", "Étirement Fessiers (Pigeon)", 45, "43:15", "Au sol, position du pigeon. Jambe avant pliée, jambe arrière tendue.", "Penchez-vous vers l'avant sur la jambe pliée. Sentez l'étirement profond dans le fessier. 20s chaque côté.", "Respirez profondément. Laissez le corps se relâcher. Les fessiers ont beaucoup travaillé.", "IMG_CHILD_POSE", "Fessiers, piriforme"),
  ex("cooldown", "Transition", 15, "44:00", "", "Changez de côté.", "Autre côté.", TRANS, "", true),

  ex("cooldown", "Étirement Épaules & Triceps", 45, "44:15", "Debout ou assis, bras droit croisé devant la poitrine.", "Tirez le bras avec la main opposée. Tenez 15s. Puis bras derrière la tête, coude vers le plafond, tirez. 15s chaque bras.", "Les épaules et les bras ont beaucoup travaillé. Étirez en douceur, respirez.", "IMG_SHOULDER_PRESS", "Deltoïdes, triceps"),
  ex("cooldown", "Transition", 15, "45:00", "", "Changez de bras.", "Autre côté.", TRANS, "", true),

  ex("cooldown", "Posture de l'Enfant", 60, "45:15", "À genoux, asseyez-vous sur les talons, bras tendus devant.", "Étirez les bras loin devant, front au sol. Respirez profondément. Sentez le dos s'allonger et se relâcher.", "Moment de calme. Le corps récupère. Respirez lentement. Vous avez accompli quelque chose d'incroyable.", "IMG_CHILD_POSE", "Dos, épaules, relaxation"),
  ex("cooldown", "Transition", 15, "46:15", "", "Allongez-vous sur le dos.", "Dernière posture.", TRANS, "", true),

  ex("cooldown", "Savasana — Relaxation Finale", 60, "46:30", "Allongé sur le dos, bras le long du corps, paumes vers le ciel.", "Fermez les yeux. Relâchez chaque muscle. Respirez naturellement. Savourez ce moment de calme après l'effort.", "Vous l'avez fait ! 4 rounds de HIIT Full Body. Soyez fiers de vous. Reposez-vous, vous le méritez. À bientôt avec Coach Mimi !", "IMG_SAVASANA", "Relaxation complète"),
];

export const session10: SessionConfig = {
  id: "hiit-fullbody",
  title: "HIIT Full Body",
  subtitle: "Circuit Complet",
  description: "Circuit HIIT complet tout le corps : 4 rounds de 8 exercices (40s effort / 20s repos). Burpees, squats sautés, mountain climbers, pompes explosives. Cardio et renforcement maximal.",
  level: "Intermédiaire",
  duration: "~48 min",
  equipment: "Aucun matériel",
  phaseLabels: { warmup: "Échauffement Dynamique", workout: "HIIT Circuit", cooldown: "Retour au Calme" },
  exercises,
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "red",
  finishMessage: "INCROYABLE ! Vous avez terminé 4 rounds de HIIT Full Body ! Votre corps a travaillé à fond : cardio, force, explosivité. Hydratez-vous bien et reposez-vous. Vous êtes des champions ! À très bientôt avec Coach Mimi !",
};
