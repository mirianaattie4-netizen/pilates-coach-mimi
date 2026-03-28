/*
 * SÉANCE 5 — Pilates Bas du Corps — 1 Heure — Niveau Intermédiaire
 * Coach Mimi — Abidjan
 * Focus : Fessiers, cuisses, hanches, mollets
 * AUCUN POIDS — Tapis uniquement
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT BAS DU CORPS (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 1, phase: "warmup", isTransition: false, name: "Respiration & Activation Fessiers", duration: 45, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat.",
    movement: "Inspirez par le nez. Expirez en serrant les fessiers sans lever le bassin. Sentez l'activation des fessiers et du plancher pelvien.",
    coaching: "Connexion fessiers-plancher pelvien. Avant de bouger, on active. Serrez comme si vous reteniez une pièce entre les fessiers.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Fessiers, plancher pelvien" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez allongé.", coaching: "Pont articulé.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Pont Articulé Lent", duration: 45, startTime: "01:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez et déroulez la colonne vertèbre par vertèbre en montant le bassin. Serrez les fessiers en haut. Inspirez. Expirez et redescendez lentement.",
    coaching: "Déroulement vertébral ! Chaque vertèbre se décolle une à une. En haut, serrez fort les fessiers 2 secondes avant de redescendre.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Fessiers, ischio-jambiers, colonne" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Restez allongé.", coaching: "Cercles de hanches.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Cercles de Hanches au Sol", duration: 45, startTime: "02:00",
    position: "Allongé, une jambe tendue au plafond.",
    movement: "Faites des cercles avec la jambe droite. 5 dans un sens, 5 dans l'autre. Gardez le bassin stable.",
    coaching: "Mobilité de la hanche ! Les cercles lubrifient l'articulation. Gardez le bassin ancré au sol.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Psoas, adducteurs, rotateurs de hanche" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Changez de jambe.", coaching: "Cercles à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cercles de Hanches (Gauche)", duration: 45, startTime: "03:00",
    position: "Allongé, jambe gauche au plafond.",
    movement: "Cercles avec la jambe gauche. 5 dans chaque sens. Bassin stable.",
    coaching: "Même qualité des deux côtés. Observez si un côté est plus mobile que l'autre.",
    imageUrl: "IMG_LEG_CIRCLE", targetMuscles: "Psoas, adducteurs, rotateurs de hanche" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cat-Cow pour la colonne.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Cat-Cow", duration: 45, startTime: "04:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Inspirez en creusant le dos. Expirez en arrondissant. Fluidité et respiration.",
    coaching: "Mobilisation de la colonne avant le travail intense du bas du corps. Chaque vertèbre bouge.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "On commence le travail des fessiers !", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — PILATES BAS DU CORPS (~44 min)
  // ═══════════════════════════════════════════════════════════════

  // ── Bloc 1 : Fessiers en Quadrupédie ──
  { id: 11, phase: "workout", isTransition: false, name: "Donkey Kick (Droite)", duration: 45, startTime: "05:00",
    position: "À quatre pattes, genou droit plié à 90°.",
    movement: "Poussez le pied droit vers le plafond en gardant le genou plié. Le dos reste plat. Serrez le fessier en haut du mouvement.",
    coaching: "Poussez le talon vers le plafond ! Le dos ne se cambre pas. C'est le fessier qui fait le travail, pas le bas du dos.",
    imageUrl: "IMG_DONKEY_KICK", targetMuscles: "Grand fessier" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Fire Hydrant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Fire Hydrant (Droite)", duration: 45, startTime: "06:00",
    position: "À quatre pattes, genou droit plié.",
    movement: "Ouvrez le genou droit sur le côté comme un chien qui lève la patte. Gardez le genou plié à 90°. Montez jusqu'à la hauteur de la hanche.",
    coaching: "Ouverture de hanche ! Le bassin reste stable et parallèle au sol. Sentez le moyen fessier travailler.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Moyen fessier, rotateurs externes" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Extension jambe droite.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Extension Jambe Tendue (Droite)", duration: 45, startTime: "07:00",
    position: "À quatre pattes.",
    movement: "Étendez la jambe droite derrière vous, pied pointé. Levez et abaissez la jambe tendue. Serrez le fessier à chaque montée.",
    coaching: "Jambe tendue et longue ! Imaginez que vous repoussez un mur avec votre pied. Le fessier contracte à chaque montée.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Changez de côté.", coaching: "Série gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Donkey Kick (Gauche)", duration: 45, startTime: "08:00",
    position: "À quatre pattes, genou gauche plié.",
    movement: "Poussez le pied gauche vers le plafond. Dos plat, fessier contracté en haut.",
    coaching: "Même intensité à gauche ! Comparez les sensations. Un côté est souvent plus faible, c'est normal.",
    imageUrl: "IMG_DONKEY_KICK", targetMuscles: "Grand fessier" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Fire Hydrant gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Fire Hydrant (Gauche)", duration: 45, startTime: "09:00",
    position: "À quatre pattes.",
    movement: "Ouvrez le genou gauche sur le côté. Gardez le bassin stable.",
    coaching: "Stabilité du bassin ! Le moyen fessier sculpte la silhouette et stabilise le bassin à la marche.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Moyen fessier, rotateurs externes" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Extension gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Extension Jambe Tendue (Gauche)", duration: 45, startTime: "10:00",
    position: "À quatre pattes.",
    movement: "Jambe gauche tendue derrière, montées et descentes contrôlées.",
    coaching: "Longue et forte ! Chaque montée est une contraction du fessier. Chaque descente est contrôlée.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Série ponts.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 2 : Ponts & Fessiers au Sol ──
  { id: 23, phase: "workout", isTransition: false, name: "Pont Fessier Pulsé", duration: 45, startTime: "11:00",
    position: "Allongé, genoux pliés, pieds à plat.",
    movement: "Montez en pont et faites de petites pulsations en haut. Ne redescendez pas complètement. Serrez les fessiers à chaque pulsation.",
    coaching: "Pulsations en haut ! Restez en haut et pulsez. Les fessiers brûlent — c'est le signe que ça travaille !",
    imageUrl: "IMG_GLUTE_BRIDGE", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Restez en pont.", coaching: "Pont une jambe.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Pont Une Jambe (Droite)", duration: 45, startTime: "12:00",
    position: "En pont, jambe droite tendue au plafond.",
    movement: "Montez et descendez le bassin avec une seule jambe d'appui. La jambe droite reste tendue vers le plafond.",
    coaching: "Double l'intensité ! Une seule jambe porte tout le poids. Gardez le bassin parallèle au sol, pas de rotation.",
    imageUrl: "IMG_SINGLE_BRIDGE", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Changez de jambe.", coaching: "Pont une jambe gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "Pont Une Jambe (Gauche)", duration: 45, startTime: "13:00",
    position: "En pont, jambe gauche tendue au plafond.",
    movement: "Montées et descentes du bassin sur la jambe droite d'appui.",
    coaching: "Même qualité ! Le bassin reste horizontal. C'est un défi d'équilibre et de force unilatérale.",
    imageUrl: "IMG_SINGLE_BRIDGE", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Reposez le bassin.", coaching: "Pont pieds serrés.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Pont Pieds Serrés (Adducteurs)", duration: 45, startTime: "14:00",
    position: "Allongé, genoux pliés, pieds et genoux serrés ensemble.",
    movement: "Montez en pont en gardant les genoux collés. Serrez un coussin imaginaire entre les genoux. Montez et descendez.",
    coaching: "Genoux collés ! Les adducteurs travaillent en synergie avec les fessiers. C'est la clé d'un bassin stable.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Adducteurs, fessiers" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Tournez-vous sur le côté droit.", coaching: "Série latérale.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 3 : Série Latérale ──
  { id: 31, phase: "workout", isTransition: false, name: "Side Leg Lift (Droite)", duration: 45, startTime: "15:00",
    position: "Couché sur le côté droit, corps aligné, tête sur le bras.",
    movement: "Levez la jambe gauche vers le plafond et redescendez avec contrôle. Pied flex pour plus d'activation.",
    coaching: "Montée contrôlée, descente encore plus lente ! Le moyen fessier travaille. Gardez le corps aligné.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Moyen fessier, tenseur du fascia lata" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Restez sur le côté.", coaching: "Cercles.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Cercles Latéraux (Droite)", duration: 45, startTime: "16:00",
    position: "Couché sur le côté, jambe gauche levée à hauteur de hanche.",
    movement: "Petits cercles avec la jambe. 10 vers l'avant, 10 vers l'arrière.",
    coaching: "Petits cercles, grande brûlure ! Le moyen fessier est en feu. C'est exactement ce qu'on veut.",
    imageUrl: "IMG_SIDE_CIRCLES", targetMuscles: "Moyen fessier" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Restez sur le côté.", coaching: "Clamshell.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Clamshell (Droite)", duration: 45, startTime: "17:00",
    position: "Couché sur le côté, genoux pliés à 90°, pieds joints.",
    movement: "Ouvrez le genou gauche vers le plafond en gardant les pieds collés. Comme une coquille qui s'ouvre. Contrôlez la descente.",
    coaching: "La coquille ! Ouverture lente et contrôlée. Les pieds restent collés. Sentez les rotateurs externes travailler.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Rotateurs externes, moyen fessier" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Restez sur le côté.", coaching: "Inner Thigh.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Inner Thigh Lift (Droite)", duration: 45, startTime: "18:00",
    position: "Couché sur le côté, jambe gauche croisée devant, pied au sol.",
    movement: "Levez la jambe droite (du dessous) vers le plafond. Montée et descente contrôlées.",
    coaching: "La jambe du dessous ! Les adducteurs sont souvent négligés mais essentiels pour la stabilité du bassin et des genoux.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Adducteurs" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Retournez-vous sur le côté gauche.", coaching: "Même série à gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Side Leg Lift (Gauche)", duration: 45, startTime: "19:00",
    position: "Couché sur le côté gauche.",
    movement: "Levez la jambe droite vers le plafond. Pied flex. Contrôle à la descente.",
    coaching: "Même qualité à gauche ! Comparez les sensations entre les deux côtés.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Moyen fessier" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Restez sur le côté.", coaching: "Cercles gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "Cercles Latéraux (Gauche)", duration: 45, startTime: "20:00",
    position: "Couché sur le côté gauche, jambe droite levée.",
    movement: "Petits cercles. 10 vers l'avant, 10 vers l'arrière.",
    coaching: "La brûlure est votre amie ! Chaque cercle sculpte le galbe du fessier.",
    imageUrl: "IMG_SIDE_CIRCLES", targetMuscles: "Moyen fessier" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Restez sur le côté.", coaching: "Clamshell gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Clamshell (Gauche)", duration: 45, startTime: "21:00",
    position: "Couché sur le côté gauche, genoux pliés.",
    movement: "Ouvrez le genou droit vers le plafond, pieds collés. Contrôle à la descente.",
    coaching: "Même ouverture ! Les rotateurs externes stabilisent la hanche. Essentiel pour la marche et la course.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Rotateurs externes, moyen fessier" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Restez sur le côté.", coaching: "Inner Thigh gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Inner Thigh Lift (Gauche)", duration: 45, startTime: "22:00",
    position: "Couché sur le côté gauche, jambe droite croisée devant.",
    movement: "Levez la jambe gauche (du dessous). Montée et descente lentes.",
    coaching: "Adducteurs en action ! Muscle souvent oublié mais clé pour la stabilité du genou.",
    imageUrl: "IMG_SIDE_LEG", targetMuscles: "Adducteurs" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Série abdos-jambes.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 4 : Abdos-Jambes au Sol ──
  { id: 47, phase: "workout", isTransition: false, name: "Toe Taps", duration: 45, startTime: "23:00",
    position: "Allongé, jambes en table (genoux à 90°).",
    movement: "Abaissez un pied vers le sol en gardant le genou plié. Remontez. Alternez. Le bas du dos reste plaqué.",
    coaching: "Contrôle du bas du dos ! Le pied descend vers le sol mais le dos ne se cambre jamais. C'est le transverse qui contrôle.",
    imageUrl: "IMG_TOE_TAPS", targetMuscles: "Transverse, psoas" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Restez allongé.", coaching: "Scissors.", imageUrl: TRANS, targetMuscles: "" },

  { id: 49, phase: "workout", isTransition: false, name: "Scissors (Ciseaux)", duration: 45, startTime: "24:00",
    position: "Allongé, tête et épaules décollées, jambes tendues au plafond.",
    movement: "Abaissez une jambe vers le sol pendant que l'autre reste haute. Alternez en ciseaux. Double pulsation sur chaque jambe.",
    coaching: "Ciseaux fluides ! Les jambes sont longues et tendues. Le torse reste stable. Sentez les ischio-jambiers s'étirer.",
    imageUrl: "IMG_SCISSORS", targetMuscles: "Psoas, ischio-jambiers, abdominaux" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Les deux jambes au plafond.", coaching: "Lower & Lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 51, phase: "workout", isTransition: false, name: "Lower & Lift", duration: 45, startTime: "25:00",
    position: "Allongé, mains derrière la tête, jambes tendues au plafond.",
    movement: "Abaissez les deux jambes ensemble vers le sol. Remontez. Ne descendez que tant que le dos reste plaqué.",
    coaching: "Les deux jambes ensemble ! C'est intense. Le dos reste au sol. Dès qu'il se cambre, c'est trop bas.",
    imageUrl: "IMG_LOWER_LIFT", targetMuscles: "Grand droit inférieur, transverse" },
  { id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Restez allongé.", coaching: "Bicycle.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "workout", isTransition: false, name: "Bicycle (Vélo)", duration: 45, startTime: "26:00",
    position: "Allongé, mains derrière la tête, tête et épaules décollées.",
    movement: "Pédalez avec les jambes en alternant rotation du torse vers le genou plié. Comme un vélo au ralenti.",
    coaching: "Pédalage lent et contrôlé ! La rotation vient du thorax, pas des coudes. Chaque pédale est une rotation complète.",
    imageUrl: "IMG_BICYCLE", targetMuscles: "Obliques, psoas, quadriceps" },
  { id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Retournez-vous sur le ventre.", coaching: "Série dorsale-jambes.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 5 : Sur le Ventre — Fessiers & Ischio ──
  { id: 55, phase: "workout", isTransition: false, name: "Single Leg Kick", duration: 45, startTime: "27:00",
    position: "Sur le ventre, appui sur les avant-bras, poitrine levée.",
    movement: "Pliez le genou droit et donnez 2 coups de talon vers le fessier. Alternez droite-gauche.",
    coaching: "Kick-kick ! Deux pulsations rapides sur chaque jambe. Les ischio-jambiers travaillent. Gardez la poitrine fière.",
    imageUrl: "IMG_SINGLE_LEG_KICK", targetMuscles: "Ischio-jambiers, fessiers" },
  { id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Double Leg Kick.", imageUrl: TRANS, targetMuscles: "" },

  { id: 57, phase: "workout", isTransition: false, name: "Double Leg Kick", duration: 45, startTime: "28:00",
    position: "Sur le ventre, mains croisées dans le dos.",
    movement: "Pliez les deux genoux, 3 kicks vers les fessiers. Puis étendez les jambes et levez le torse en tirant les bras vers l'arrière.",
    coaching: "3 kicks puis extension ! Les fessiers et les ischio travaillent dans les kicks. L'extension ouvre la poitrine.",
    imageUrl: "IMG_DOUBLE_LEG_KICK", targetMuscles: "Ischio-jambiers, fessiers, érecteurs" },
  { id: 58, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Swimming.", imageUrl: TRANS, targetMuscles: "" },

  { id: 59, phase: "workout", isTransition: false, name: "Swimming Focus Jambes", duration: 45, startTime: "29:00",
    position: "Sur le ventre, bras et jambes décollés.",
    movement: "Battements alternés en mettant l'accent sur l'amplitude des jambes. Les jambes montent haut, les bras accompagnent.",
    coaching: "Focus jambes ! Les fessiers propulsent les jambes vers le haut. Sentez la chaîne postérieure complète travailler.",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Fessiers, ischio-jambiers, érecteurs" },
  { id: 60, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Passez en planche.", coaching: "Planches pour les jambes.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 6 : Planches & Finisher ──
  { id: 61, phase: "workout", isTransition: false, name: "Planche avec Knee Drive", duration: 45, startTime: "30:00",
    position: "En planche haute.",
    movement: "Ramenez le genou droit vers la poitrine, puis le gauche. Alternez comme un mountain climber lent et contrôlé.",
    coaching: "Mountain climber Pilates ! Lent et contrôlé, pas rapide. Chaque genou vient toucher la poitrine. Le bassin ne monte pas.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Psoas, quadriceps, core" },
  { id: 62, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Restez en planche.", coaching: "Planche avec leg lift.", imageUrl: TRANS, targetMuscles: "" },

  { id: 63, phase: "workout", isTransition: false, name: "Planche Leg Lift", duration: 45, startTime: "31:00",
    position: "En planche sur les avant-bras.",
    movement: "Levez la jambe droite tendue, reposez. Levez la gauche. Alternez. Le bassin reste stable et ne tourne pas.",
    coaching: "Stabilité ! Le bassin est un plateau qui ne penche pas. Seule la jambe monte. Fessier contracté à chaque montée.",
    imageUrl: "IMG_PLANK", targetMuscles: "Fessiers, core, épaules" },
  { id: 64, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Shoulder Bridge avancé.", imageUrl: TRANS, targetMuscles: "" },

  { id: 65, phase: "workout", isTransition: false, name: "Shoulder Bridge avec Extension", duration: 45, startTime: "32:00",
    position: "En pont, une jambe tendue au plafond.",
    movement: "Abaissez la jambe tendue vers le sol puis remontez au plafond. 5 répétitions puis changez de jambe.",
    coaching: "Pont + extension de jambe ! C'est l'exercice ultime pour les fessiers en Pilates. Gardez les hanches hautes et stables.",
    imageUrl: "IMG_SHOULDER_BRIDGE", targetMuscles: "Fessiers, ischio-jambiers, quadriceps" },
  { id: 66, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "32:45",
    position: "", movement: "Changez de jambe.", coaching: "Autre côté.", imageUrl: TRANS, targetMuscles: "" },

  { id: 67, phase: "workout", isTransition: false, name: "Shoulder Bridge Extension (Gauche)", duration: 45, startTime: "33:00",
    position: "En pont, jambe gauche tendue au plafond.",
    movement: "Abaissez et remontez la jambe gauche. Hanches stables et hautes.",
    coaching: "Même qualité ! Les hanches restent à la même hauteur. C'est le fessier d'appui qui travaille le plus.",
    imageUrl: "IMG_SHOULDER_BRIDGE", targetMuscles: "Fessiers, ischio-jambiers" },
  { id: 68, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "33:45",
    position: "", movement: "Reposez le bassin.", coaching: "Finisher fessiers !", imageUrl: TRANS, targetMuscles: "" },

  { id: 69, phase: "workout", isTransition: false, name: "Pont Isométrique (Hold)", duration: 45, startTime: "34:00",
    position: "Allongé, genoux pliés.",
    movement: "Montez en pont et TENEZ la position. Serrez les fessiers au maximum pendant 45 secondes. Ne redescendez pas.",
    coaching: "On tient ! 45 secondes de contraction maximale des fessiers. Respirez normalement. Les fessiers brûlent — c'est parfait !",
    imageUrl: "IMG_GLUTE_BRIDGE", targetMuscles: "Grand fessier, ischio-jambiers" },
  { id: 70, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "34:45",
    position: "", movement: "Redescendez lentement.", coaching: "Retour au calme.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 71, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "35:00",
    position: "Allongé, genoux ramenés à la poitrine.",
    movement: "Bercez-vous doucement. Massez le bas du dos sur le tapis.",
    coaching: "Bravo pour ce travail intense du bas du corps ! Bercez-vous doucement, votre dos en a besoin.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, détente" },
  { id: 72, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "35:45",
    position: "", movement: "Étendez les jambes.", coaching: "Étirement fessier.", imageUrl: TRANS, targetMuscles: "" },

  { id: 73, phase: "cooldown", isTransition: false, name: "Figure 4 Stretch (Droite)", duration: 45, startTime: "36:00",
    position: "Allongé, cheville droite sur le genou gauche.",
    movement: "Tirez le genou gauche vers la poitrine. Sentez l'étirement profond du fessier et du piriforme droit.",
    coaching: "Étirement essentiel après tout ce travail de fessiers ! Respirez dans l'étirement. Laissez le muscle se relâcher.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers" },
  { id: 74, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "36:45",
    position: "", movement: "Changez de côté.", coaching: "Figure 4 gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 75, phase: "cooldown", isTransition: false, name: "Figure 4 Stretch (Gauche)", duration: 45, startTime: "37:00",
    position: "Allongé, cheville gauche sur le genou droit.",
    movement: "Tirez le genou droit vers la poitrine. Respirez profondément.",
    coaching: "Même durée des deux côtés. Les fessiers ont travaillé dur, ils méritent cet étirement.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers" },
  { id: 76, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "37:45",
    position: "", movement: "Étendez les jambes.", coaching: "Étirement ischio.", imageUrl: TRANS, targetMuscles: "" },

  { id: 77, phase: "cooldown", isTransition: false, name: "Étirement Ischio-Jambiers (Droite)", duration: 45, startTime: "38:00",
    position: "Allongé, jambe droite tendue au plafond, mains derrière la cuisse.",
    movement: "Tirez doucement la jambe vers vous. Gardez la jambe aussi droite que possible. Pied flex.",
    coaching: "Étirement doux et progressif. Ne forcez pas. Laissez la gravité et la respiration faire le travail.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers, mollets" },
  { id: 78, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "38:45",
    position: "", movement: "Changez de jambe.", coaching: "Ischio gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 79, phase: "cooldown", isTransition: false, name: "Étirement Ischio-Jambiers (Gauche)", duration: 45, startTime: "39:00",
    position: "Allongé, jambe gauche au plafond.",
    movement: "Tirez doucement. Respirez dans l'étirement.",
    coaching: "Respirez et relâchez. Chaque expiration permet d'aller un peu plus loin.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers, mollets" },
  { id: 80, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "39:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Torsion spinale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 81, phase: "cooldown", isTransition: false, name: "Torsion Spinale", duration: 45, startTime: "40:00",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Laissez tomber les genoux vers la droite, tête à gauche. Respirez. Puis changez de côté.",
    coaching: "Détente de la colonne. Après tout ce travail du bas du corps, la colonne a besoin de se détordre.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques" },
  { id: 82, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "40:45",
    position: "", movement: "Revenez au centre.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 83, phase: "cooldown", isTransition: false, name: "Posture de l'Enfant", duration: 45, startTime: "41:00",
    position: "À genoux, fesses sur les talons, bras tendus devant.",
    movement: "Respirez profondément. Étirez les bras loin devant. Relâchez tout.",
    coaching: "Repos mérité ! Votre bas du corps a été sculpté aujourd'hui. Savourez ce moment de calme.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Colonne, détente" },
  { id: 84, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "41:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Relaxation finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 85, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation", duration: 60, startTime: "42:00",
    position: "Allongé sur le dos, bras le long du corps, paumes vers le plafond.",
    movement: "Relâchez chaque muscle. Scannez des pieds à la tête. Respirez naturellement.",
    coaching: "Félicitations Coach Mimi ! Vos fessiers, cuisses et hanches ont été sculptés en profondeur. Hydratez-vous bien. À très bientôt !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session5: SessionConfig = {
  id: "bas-du-corps",
  title: "Pilates Bas du Corps",
  subtitle: "Fessiers, Cuisses & Hanches",
  description: "Séance ciblée sur le bas du corps : fessiers (grand, moyen, petit), cuisses, adducteurs, ischio-jambiers et hanches. Ponts, séries latérales, quadrupédie et planches.",
  level: "Intermédiaire",
  duration: "~43 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Échauffement Bas du Corps", workout: "Pilates Bas du Corps", cooldown: "Étirements & Récupération" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "rose",
  finishMessage: "Bravo ! Vos fessiers, cuisses et hanches ont été sculptés en profondeur. Ponts, séries latérales, quadrupédie — un travail complet du bas du corps. Hydratez-vous bien ! À très bientôt avec Coach Mimi !",
};
