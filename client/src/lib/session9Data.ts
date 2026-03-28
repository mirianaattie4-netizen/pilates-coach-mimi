/*
 * SÉANCE 9 — Stretching Profond — ~35 min — Tous Niveaux
 * Coach Mimi — Abidjan
 * Focus : Étirements profonds, souplesse, relâchement musculaire
 * AUCUN POIDS — Tapis uniquement
 * Format: 45-60s tenue / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // PHASE 1 — ÉCHAUFFEMENT DOUX (~5 min)
  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Profonde", duration: 60, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, mains sur le ventre.",
    movement: "Inspirez 4 temps par le nez, retenez 4 temps, expirez 6 temps par la bouche. Respiration lente et apaisante.",
    coaching: "Respiration 4-4-6. Chaque expiration est plus longue que l'inspiration. Le système nerveux se calme. Le corps se prépare à s'étirer.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Diaphragme, système nerveux" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:00",
    position: "", movement: "Restez allongé.", coaching: "Genoux à la poitrine.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "01:15",
    position: "Allongé, genoux ramenés.",
    movement: "Serrez les genoux contre la poitrine. Bercez-vous doucement de droite à gauche. Massez le bas du dos.",
    coaching: "Bercement doux. Le bas du dos se masse contre le sol. Les lombaires se relâchent. Préparez le corps à s'étirer.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, détente" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:00",
    position: "", movement: "Restez allongé.", coaching: "Bascule du bassin.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Bascule du Bassin Douce", duration: 45, startTime: "02:15",
    position: "Allongé, genoux pliés.",
    movement: "Basculez le bassin doucement : dos plaqué au sol puis creux dans le bas du dos. Très lent et fluide.",
    coaching: "Mobilisation douce du bassin. Trouvez le mouvement naturel entre rétroversion et antéversion. Préparez la colonne.",
    imageUrl: "IMG_PELVIC_TILT", targetMuscles: "Psoas, lombaires" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:00",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cat-Cow.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cat-Cow Doux", duration: 45, startTime: "03:15",
    position: "À quatre pattes.",
    movement: "Inspirez en creusant le dos. Expirez en arrondissant. Très lent, 5 secondes par mouvement.",
    coaching: "Cat-Cow ultra doux. Le corps s'éveille progressivement. Chaque vertèbre participe au mouvement.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:00",
    position: "", movement: "Restez à 4 pattes.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  // PHASE 2 — STRETCHING PROFOND (~24 min)
  { id: 9, phase: "workout", isTransition: false, name: "Posture de l'Enfant Profonde", duration: 60, startTime: "04:15",
    position: "À genoux, fesses sur les talons, bras tendus devant, front au sol.",
    movement: "Poussez les mains loin devant. Respirez profondément. Sentez l'étirement du dos, des épaules et des flancs.",
    coaching: "Étirement profond du dos ! Poussez les mains loin. Chaque expiration permet d'aller un peu plus loin. 60 secondes de tenue.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Grand dorsal, épaules, lombaires" },
  { id: 10, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:15",
    position: "", movement: "Restez à genoux.", coaching: "Étirement latéral.", imageUrl: TRANS, targetMuscles: "" },

  { id: 11, phase: "workout", isTransition: false, name: "Étirement Latéral Assis (Droite)", duration: 45, startTime: "05:30",
    position: "Assis en tailleur.",
    movement: "Main droite au sol, bras gauche au-dessus de la tête. Penchez-vous vers la droite. Sentez tout le flanc gauche s'étirer.",
    coaching: "Étirement du flanc ! Les intercostaux, les obliques, le grand dorsal. Respirez dans le côté qui s'étire.",
    imageUrl: "IMG_MERMAID", targetMuscles: "Obliques, intercostaux, grand dorsal" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:15",
    position: "", movement: "Changez de côté.", coaching: "Latéral gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Étirement Latéral Assis (Gauche)", duration: 45, startTime: "06:30",
    position: "Assis en tailleur.",
    movement: "Main gauche au sol, bras droit au-dessus. Penchez vers la gauche.",
    coaching: "Même profondeur ! Respirez dans l'étirement. Chaque expiration ouvre un peu plus l'espace entre les côtes.",
    imageUrl: "IMG_MERMAID", targetMuscles: "Obliques, intercostaux, grand dorsal" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:15",
    position: "", movement: "Étendez les jambes.", coaching: "Flexion avant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Flexion Avant Assise", duration: 60, startTime: "07:30",
    position: "Assis, jambes tendues devant.",
    movement: "Penchez-vous vers l'avant en gardant le dos le plus droit possible. Attrapez les pieds ou les tibias. Tenez et respirez.",
    coaching: "Flexion profonde ! Les ischio-jambiers s'étirent. Ne forcez pas, laissez la gravité vous tirer vers l'avant. 60 secondes.",
    imageUrl: "IMG_SPINE_STRETCH", targetMuscles: "Ischio-jambiers, lombaires" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:30",
    position: "", movement: "Écartez les jambes.", coaching: "Straddle stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Straddle Stretch (Centre)", duration: 60, startTime: "08:45",
    position: "Assis, jambes écartées en V.",
    movement: "Penchez-vous vers l'avant au centre. Mains au sol devant vous. Descendez progressivement. Respirez.",
    coaching: "Grand écart facial ! Descendez aussi loin que possible. Les adducteurs s'étirent profondément. Patience et respiration.",
    imageUrl: "IMG_SAW", targetMuscles: "Adducteurs, ischio-jambiers" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez en straddle.", coaching: "Straddle droite.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Straddle Stretch (Droite)", duration: 45, startTime: "10:00",
    position: "Assis, jambes écartées.",
    movement: "Penchez-vous vers la jambe droite. Attrapez le pied ou le tibia. Sentez l'étirement de l'ischio-jambier droit et du flanc gauche.",
    coaching: "Vers la jambe droite ! Gardez les deux fesses au sol. Respirez dans l'étirement.",
    imageUrl: "IMG_SAW", targetMuscles: "Ischio-jambiers, obliques" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Changez de côté.", coaching: "Straddle gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Straddle Stretch (Gauche)", duration: 45, startTime: "11:00",
    position: "Assis, jambes écartées.",
    movement: "Penchez vers la jambe gauche. Respirez.",
    coaching: "Même profondeur ! Comparez les deux côtés. Le côté le plus raide a le plus besoin de travail.",
    imageUrl: "IMG_SAW", targetMuscles: "Ischio-jambiers, obliques" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Ramenez les jambes.", coaching: "Papillon.", imageUrl: TRANS, targetMuscles: "" },

  { id: 23, phase: "workout", isTransition: false, name: "Papillon Profond", duration: 60, startTime: "12:00",
    position: "Assis, plantes de pieds ensemble, genoux ouverts.",
    movement: "Penchez-vous vers l'avant en gardant le dos droit. Laissez les genoux descendre vers le sol. Respirez profondément.",
    coaching: "Le papillon ! Ouverture des hanches et des adducteurs. Ne poussez pas les genoux avec les mains. Laissez la gravité faire.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Adducteurs, hanches" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:00",
    position: "", movement: "Allongez-vous.", coaching: "Figure 4.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Figure 4 Profonde (Droite)", duration: 60, startTime: "13:15",
    position: "Allongé, cheville droite sur le genou gauche.",
    movement: "Tirez le genou gauche vers la poitrine. Sentez l'étirement profond du piriforme et du fessier droit. Tenez 60 secondes.",
    coaching: "Étirement du piriforme ! 60 secondes de tenue. Respirez dans l'étirement. Chaque expiration relâche un peu plus le muscle.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:15",
    position: "", movement: "Changez de côté.", coaching: "Figure 4 gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "Figure 4 Profonde (Gauche)", duration: 60, startTime: "14:30",
    position: "Allongé, cheville gauche sur le genou droit.",
    movement: "Tirez vers la poitrine. 60 secondes de tenue.",
    coaching: "Même durée ! Le piriforme gauche se relâche. Respirez profondément.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:30",
    position: "", movement: "Tendez la jambe droite.", coaching: "Ischio-jambier.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Étirement Ischio (Droite)", duration: 60, startTime: "15:45",
    position: "Allongé, jambe droite tendue au plafond.",
    movement: "Tirez doucement la jambe vers vous avec les mains ou une serviette. Pied flex. Genou légèrement plié si nécessaire.",
    coaching: "60 secondes ! L'ischio-jambier droit s'allonge progressivement. Ne forcez pas. Laissez le muscle se relâcher avec la respiration.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Changez de jambe.", coaching: "Ischio gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 31, phase: "workout", isTransition: false, name: "Étirement Ischio (Gauche)", duration: 60, startTime: "17:00",
    position: "Allongé, jambe gauche au plafond.",
    movement: "Tirez doucement. 60 secondes. Respirez.",
    coaching: "Même durée ! Comparez les deux côtés. La souplesse se gagne avec la patience et la régularité.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:00",
    position: "", movement: "Ramenez les genoux.", coaching: "Happy Baby.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Happy Baby", duration: 60, startTime: "18:15",
    position: "Allongé, genoux vers les aisselles, mains sur les pieds.",
    movement: "Tirez les genoux vers le sol. Bercez-vous doucement. Sentez l'ouverture des hanches.",
    coaching: "Le bébé heureux ! Ouverture maximale des hanches. Bercez-vous. Laissez la gravité ouvrir les hanches. 60 secondes.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Adducteurs, hanches" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:15",
    position: "", movement: "Retournez-vous.", coaching: "Pigeon.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Pigeon Profond (Droite)", duration: 60, startTime: "19:30",
    position: "Jambe droite pliée devant, jambe gauche tendue derrière.",
    movement: "Penchez-vous vers l'avant. Descendez sur les avant-bras ou le front au sol. Respirez profondément. 60 secondes.",
    coaching: "Pigeon profond ! L'étirement le plus puissant pour les rotateurs de hanche. Respirez et relâchez. 60 secondes complètes.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, psoas" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:30",
    position: "", movement: "Changez de côté.", coaching: "Pigeon gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Pigeon Profond (Gauche)", duration: 60, startTime: "20:45",
    position: "Jambe gauche pliée devant, jambe droite tendue derrière.",
    movement: "Penchez-vous vers l'avant. 60 secondes de tenue profonde.",
    coaching: "Même profondeur ! Le pigeon est essentiel pour la santé des hanches. Respirez dans l'étirement.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, psoas" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Passez en fente.", coaching: "Fente basse.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Fente Basse Profonde (Droite)", duration: 60, startTime: "22:00",
    position: "En fente basse, genou droit devant, genou gauche au sol.",
    movement: "Poussez les hanches vers l'avant. Bras au-dessus de la tête. Sentez l'étirement profond du psoas gauche.",
    coaching: "Étirement du psoas ! 60 secondes. Le psoas est souvent le muscle le plus raccourci du corps. Libérez-le avec la respiration.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, quadriceps" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:00",
    position: "", movement: "Changez de côté.", coaching: "Fente gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "Fente Basse Profonde (Gauche)", duration: 60, startTime: "23:15",
    position: "En fente basse, genou gauche devant.",
    movement: "Poussez les hanches vers l'avant. Bras au-dessus. 60 secondes.",
    coaching: "Même profondeur ! Le psoas droit se libère. Respirez et laissez la hanche s'ouvrir.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, quadriceps" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:15",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Torsion.", imageUrl: TRANS, targetMuscles: "" },

  // PHASE 3 — RETOUR AU CALME (~6 min)
  { id: 43, phase: "cooldown", isTransition: false, name: "Torsion Spinale Longue", duration: 60, startTime: "24:30",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Genoux à droite, tête à gauche. 30 secondes. Puis changez de côté. Respirez profondément.",
    coaching: "Torsion finale. La colonne se détord et se relâche. Laissez la gravité faire tout le travail.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques" },
  { id: 44, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "25:30",
    position: "", movement: "Revenez au centre.", coaching: "Genoux à la poitrine.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine Final", duration: 45, startTime: "25:45",
    position: "Allongé, genoux ramenés.",
    movement: "Serrez les genoux. Bercez-vous doucement. Savourez la souplesse gagnée.",
    coaching: "Votre corps est plus souple maintenant ! Sentez la différence. Chaque séance de stretching vous rapproche de votre plein potentiel.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Détente" },
  { id: 46, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "26:30",
    position: "", movement: "Étendez-vous.", coaching: "Relaxation finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 47, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation Profonde", duration: 90, startTime: "26:45",
    position: "Allongé sur le dos, bras le long du corps, paumes vers le plafond, yeux fermés.",
    movement: "Relâchez chaque muscle. Scannez le corps des pieds à la tête. Respirez naturellement. Savourez le calme.",
    coaching: "Félicitations ! Votre corps est plus souple, plus libre, plus détendu. Le stretching profond est un cadeau que vous vous faites. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session9: SessionConfig = {
  id: "stretching",
  title: "Stretching Profond",
  subtitle: "Souplesse & Relâchement",
  description: "Séance de stretching profond avec tenues longues (45-90s) : Pigeon, Figure 4, Straddle, Papillon, fentes basses. Idéal pour améliorer la souplesse et relâcher les tensions.",
  level: "Tous niveaux",
  duration: "~28 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Échauffement Doux", workout: "Stretching Profond", cooldown: "Relaxation" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "violet",
  finishMessage: "Bravo ! Votre corps est plus souple, plus libre et plus détendu. Pigeon, Figure 4, Straddle — chaque étirement a libéré vos muscles. À très bientôt avec Coach Mimi !",
};
