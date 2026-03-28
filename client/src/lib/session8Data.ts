/*
 * SÉANCE 8 — Mobilité Colonne & Épaules — ~35 min — Tous Niveaux
 * Coach Mimi — Abidjan
 * Focus : Mobilité thoracique, cervicale, lombaire, épaules
 * AUCUN POIDS — Tapis uniquement
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // PHASE 1 — ÉCHAUFFEMENT (~5 min)
  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Costale Assise", duration: 45, startTime: "00:00",
    position: "Assis en tailleur, mains sur les côtes.",
    movement: "Inspirez en ouvrant les côtes latéralement. Expirez en les refermant. Épaules basses et détendues.",
    coaching: "Respiration costale. Les côtes s'ouvrent comme un accordéon. Les épaules restent basses et détendues.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Intercostaux, diaphragme" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez assis.", coaching: "Cercles de tête.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Cercles de Tête", duration: 45, startTime: "01:00",
    position: "Assis, dos droit.",
    movement: "Faites de lents demi-cercles avec la tête : oreille droite vers l'épaule, menton vers la poitrine, oreille gauche vers l'épaule. 5 dans chaque sens.",
    coaching: "Demi-cercles lents ! Ne renversez pas la tête en arrière. Oreille-menton-oreille. Libérez les tensions cervicales.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Cervicales, trapèzes supérieurs" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Restez assis.", coaching: "Cercles d'épaules.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Cercles d'Épaules Amples", duration: 45, startTime: "02:00",
    position: "Assis, bras le long du corps.",
    movement: "Grands cercles avec les épaules. Montez, reculez, descendez, avancez. 10 dans chaque sens.",
    coaching: "Grands cercles ! Libérez les trapèzes et les rhomboïdes. Sentez les omoplates glisser sur les côtes.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Trapèzes, rhomboïdes, deltoïdes" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cat-Cow.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cat-Cow Segmentaire", duration: 45, startTime: "03:00",
    position: "À quatre pattes.",
    movement: "Cat-Cow ultra lent en décomposant : commencez par le bassin, puis les lombaires, le thorax, les cervicales. Inversez à la remontée.",
    coaching: "Segmentaire ! Chaque section de la colonne bouge séparément. Bassin → lombaires → thoracique → cervicales. Puis inversez.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale complète" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Thread the Needle.", imageUrl: TRANS, targetMuscles: "" },

  // PHASE 2 — MOBILITÉ COLONNE & ÉPAULES (~24 min)
  { id: 9, phase: "workout", isTransition: false, name: "Thread the Needle (Droite)", duration: 45, startTime: "04:00",
    position: "À quatre pattes.",
    movement: "Passez le bras droit sous le corps, épaule et tempe au sol. Puis ouvrez vers le plafond. Alternez fermeture et ouverture.",
    coaching: "Rotation thoracique ! Sentez la colonne thoracique tourner. L'épaule s'ouvre vers le plafond puis se ferme sous le corps.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 10, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Changez de côté.", coaching: "Thread the Needle gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 11, phase: "workout", isTransition: false, name: "Thread the Needle (Gauche)", duration: 45, startTime: "05:00",
    position: "À quatre pattes.",
    movement: "Bras gauche sous le corps puis vers le plafond. Rotation fluide.",
    coaching: "Même qualité ! Observez quel côté est plus raide. C'est celui qui a le plus besoin de travail.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Sphinx.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Sphinx", duration: 45, startTime: "06:00",
    position: "Sur le ventre, appui sur les avant-bras, coudes sous les épaules.",
    movement: "Poussez la poitrine vers l'avant et le haut. Allongez la colonne. Sentez l'extension douce du thorax. Épaules basses.",
    coaching: "Extension douce ! La poitrine s'ouvre fièrement. Les épaules descendent loin des oreilles. Sentez l'espace entre les vertèbres.",
    imageUrl: "IMG_SWAN", targetMuscles: "Colonne thoracique, érecteurs" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez en Sphinx.", coaching: "Sphinx avec rotation.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Sphinx avec Rotation (Droite)", duration: 45, startTime: "07:00",
    position: "En Sphinx.",
    movement: "Tournez le torse vers la droite en regardant par-dessus l'épaule droite. Revenez au centre. Répétez lentement.",
    coaching: "Rotation en extension ! Double mobilité : extension + rotation thoracique. C'est le combo ultime pour la colonne.",
    imageUrl: "IMG_SWAN", targetMuscles: "Colonne thoracique, obliques" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Revenez au centre.", coaching: "Rotation gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Sphinx avec Rotation (Gauche)", duration: 45, startTime: "08:00",
    position: "En Sphinx.",
    movement: "Tournez vers la gauche. Regardez par-dessus l'épaule gauche. Revenez lentement.",
    coaching: "Même amplitude ! La rotation vient du thorax, pas de la tête. Le bassin reste au sol.",
    imageUrl: "IMG_SWAN", targetMuscles: "Colonne thoracique, obliques" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Poussez en posture de l'enfant.", coaching: "Contre-pose.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Posture de l'Enfant avec Bras Latéral", duration: 45, startTime: "09:00",
    position: "En posture de l'enfant, bras tendus vers la droite.",
    movement: "Étirez les deux bras vers la droite pour sentir l'étirement du flanc gauche. Tenez 20s puis changez de côté.",
    coaching: "Étirement latéral ! Sentez tout le flanc s'étirer. Les intercostaux, le grand dorsal, les obliques. Respirez dans l'étirement.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Grand dorsal, obliques, intercostaux" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Asseyez-vous.", coaching: "Spine Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Spine Stretch Forward", duration: 45, startTime: "10:00",
    position: "Assis, jambes écartées, pieds flex, bras devant.",
    movement: "Expirez et enroulez vers l'avant vertèbre par vertèbre. Inspirez et remontez en empilant les vertèbres.",
    coaching: "Enroulement et déroulement ! La colonne se plie comme un C à la descente et s'empile comme des blocs à la remontée.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Érecteurs, ischio-jambiers" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Restez assis.", coaching: "Spine Twist.", imageUrl: TRANS, targetMuscles: "" },

  { id: 23, phase: "workout", isTransition: false, name: "Spine Twist Assis", duration: 45, startTime: "11:00",
    position: "Assis, jambes tendues, bras en croix.",
    movement: "Tournez le torse vers la droite avec 2 pulsations. Revenez au centre. Tournez à gauche. Le bassin reste ancré.",
    coaching: "Rotation pure ! Le bassin ne bouge pas. Grandissez-vous avant de tourner. Les bras restent dans le champ de vision.",
    imageUrl: "IMG_SPINE_TWIST", targetMuscles: "Obliques, colonne thoracique" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Restez assis.", coaching: "Saw.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Saw (La Scie)", duration: 45, startTime: "12:00",
    position: "Assis, jambes écartées, bras en croix.",
    movement: "Tournez vers la droite puis penchez-vous pour toucher le petit orteil droit avec la main gauche. Revenez. Alternez.",
    coaching: "Rotation + flexion ! Essorez-vous comme une serviette. Expirez à fond en descendant.",
    imageUrl: "IMG_SAW", targetMuscles: "Obliques, ischio-jambiers, colonne" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Série épaules au sol.", imageUrl: TRANS, targetMuscles: "" },

  // ── Série Mobilité Épaules ──
  { id: 27, phase: "workout", isTransition: false, name: "Anges de Neige au Sol", duration: 45, startTime: "13:00",
    position: "Allongé sur le dos, bras le long du corps, paumes vers le plafond.",
    movement: "Glissez les bras sur le sol en arc de cercle au-dessus de la tête (comme un ange de neige). Gardez les bras au sol tout le long.",
    coaching: "Anges de neige ! Les bras restent en contact avec le sol. Si ça bloque, c'est que les épaules manquent de mobilité. Allez-y doucement.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Deltoïdes, pectoraux, grand dorsal" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Restez allongé.", coaching: "Bras en croix.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Open Book (Droite)", duration: 45, startTime: "14:00",
    position: "Couché sur le côté gauche, genoux pliés, bras tendus devant.",
    movement: "Ouvrez le bras droit vers l'arrière comme un livre qui s'ouvre. Suivez la main du regard. Sentez la poitrine s'ouvrir.",
    coaching: "Le livre s'ouvre ! Rotation thoracique avec ouverture de la poitrine. Le regard suit la main. Respirez dans l'ouverture.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne thoracique, pectoraux" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Changez de côté.", coaching: "Open Book gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 31, phase: "workout", isTransition: false, name: "Open Book (Gauche)", duration: 45, startTime: "15:00",
    position: "Couché sur le côté droit, genoux pliés.",
    movement: "Ouvrez le bras gauche vers l'arrière. Suivez du regard. Sentez l'ouverture.",
    coaching: "Même amplitude ! Comparez les deux côtés. Le côté le plus raide est celui qui a le plus besoin de travail.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne thoracique, pectoraux" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Allongez-vous sur le ventre.", coaching: "Prone I-Y-T.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Prone I-Y-T", duration: 45, startTime: "16:00",
    position: "Sur le ventre, front au sol.",
    movement: "Levez les bras en I (devant), tenez 5s. Puis en Y, tenez 5s. Puis en T (côtés), tenez 5s. Répétez le cycle.",
    coaching: "I-Y-T ! Trois positions pour mobiliser les épaules dans différents angles. Sentez les omoplates se rapprocher.",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Trapèzes, rhomboïdes, rotateurs externes" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Swimming lent.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Swimming Lent (Mobilité)", duration: 45, startTime: "17:00",
    position: "Sur le ventre, bras et jambes décollés.",
    movement: "Battements alternés très lents. 3 secondes par mouvement. Amplitude maximale. Focus sur l'extension des bras.",
    coaching: "Ultra lent ! 3 secondes par battement. Sentez chaque muscle du dos travailler. Les bras s'étirent loin devant.",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Chaîne postérieure, épaules" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Poussez en posture de l'enfant.", coaching: "Contre-pose.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Posture de l'Enfant Active", duration: 45, startTime: "18:00",
    position: "En posture de l'enfant, bras tendus loin devant.",
    movement: "Poussez les mains dans le sol. Étirez-vous le plus loin possible. Sentez les lats et les épaules s'étirer.",
    coaching: "Étirement actif ! Poussez les mains loin tout en gardant les fesses sur les talons. Les grands dorsaux s'étirent.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Grand dorsal, épaules" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cercles d'épaules à 4 pattes.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Scapular Push-Ups", duration: 45, startTime: "19:00",
    position: "En planche haute ou à 4 pattes.",
    movement: "Sans plier les coudes, laissez le torse descendre entre les omoplates puis poussez pour les écarter. Mouvement des omoplates uniquement.",
    coaching: "Mobilité scapulaire ! Les coudes ne plient pas. Ce sont les omoplates qui bougent. Rapprochez puis écartez. Essentiel pour la santé des épaules.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Serratus anterior, rhomboïdes" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Retour au calme.", imageUrl: TRANS, targetMuscles: "" },

  // PHASE 3 — RETOUR AU CALME (~8 min)
  { id: 41, phase: "cooldown", isTransition: false, name: "Torsion Spinale (Droite)", duration: 45, startTime: "20:00",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Genoux à droite, tête à gauche. Respirez profondément. Laissez la gravité étirer la colonne.",
    coaching: "Torsion douce. La colonne se détord après tout ce travail de mobilité. Respirez et relâchez.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques" },
  { id: 42, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Changez de côté.", coaching: "Torsion gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "cooldown", isTransition: false, name: "Torsion Spinale (Gauche)", duration: 45, startTime: "21:00",
    position: "Allongé, genoux à gauche, tête à droite.",
    movement: "Respirez. Laissez la gravité faire le travail.",
    coaching: "Même durée. Sentez la colonne se relâcher complètement.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques" },
  { id: 44, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Revenez au centre.", coaching: "Étirement épaules.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "cooldown", isTransition: false, name: "Étirement Épaules au Sol", duration: 45, startTime: "22:00",
    position: "Allongé, bras en croix, paumes vers le plafond.",
    movement: "Laissez la gravité ouvrir la poitrine et étirer les épaules. Respirez profondément.",
    coaching: "Ouverture passive. La gravité fait le travail. Vos épaules et votre colonne sont plus mobiles maintenant.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Pectoraux, deltoïdes antérieurs" },
  { id: 46, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Étendez-vous.", coaching: "Relaxation.", imageUrl: TRANS, targetMuscles: "" },

  { id: 47, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation", duration: 60, startTime: "23:00",
    position: "Allongé sur le dos, bras le long du corps, yeux fermés.",
    movement: "Relâchez tout. Scannez la colonne et les épaules. Sentez la nouvelle mobilité.",
    coaching: "Félicitations ! Votre colonne et vos épaules sont plus mobiles et plus libres. Une meilleure posture commence ici. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session8: SessionConfig = {
  id: "mobilite-colonne",
  title: "Mobilité Colonne & Épaules",
  subtitle: "Posture & Fluidité",
  description: "Séance dédiée à la mobilité de la colonne vertébrale et des épaules : rotations thoraciques, Sphinx, Open Book, anges de neige, Scapular Push-Ups. Améliorez votre posture.",
  level: "Tous niveaux",
  duration: "~24 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Échauffement Articulaire", workout: "Mobilité Colonne & Épaules", cooldown: "Étirements & Relaxation" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "amber",
  finishMessage: "Bravo ! Votre colonne et vos épaules sont plus mobiles et plus libres. Thread the Needle, Open Book, Sphinx — votre posture est améliorée. À très bientôt avec Coach Mimi !",
};
