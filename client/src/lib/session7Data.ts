/*
 * SÉANCE 7 — Mobilité Hanches & Bassin — ~40 min — Tous Niveaux
 * Coach Mimi — Abidjan
 * Focus : Ouverture des hanches, mobilité du bassin, étirements profonds
 * AUCUN POIDS — Tapis uniquement
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT (~6 min)
  // ═══════════════════════════════════════════════════════════════
  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Diaphragmatique", duration: 45, startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, mains sur le ventre.",
    movement: "Inspirez par le nez en gonflant le ventre. Expirez par la bouche en laissant le ventre descendre. Respiration lente et profonde.",
    coaching: "Connexion au souffle. Chaque inspiration nourrit les muscles. Chaque expiration relâche les tensions dans les hanches.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Diaphragme, transverse" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez allongé.", coaching: "Bascule du bassin.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Bascule du Bassin", duration: 45, startTime: "01:00",
    position: "Allongé, genoux pliés, pieds à plat.",
    movement: "Basculez le bassin en rétroversion (dos plaqué au sol) puis en antéversion (creux dans le bas du dos). Mouvement lent et fluide.",
    coaching: "Mobilisation du bassin ! Trouvez l'amplitude complète entre rétroversion et antéversion. C'est la base de toute mobilité des hanches.",
    imageUrl: "IMG_PELVIC_TILT", targetMuscles: "Psoas, lombaires, transverse" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Restez allongé.", coaching: "Cercles de bassin.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Cercles de Bassin au Sol", duration: 45, startTime: "02:00",
    position: "Allongé, genoux pliés.",
    movement: "Faites de petits cercles avec le bassin sur le sol. Comme si vous dessiniez un cercle avec le coccyx. 10 dans chaque sens.",
    coaching: "Micro-mouvements ! Le bassin dessine des cercles. Sentez chaque direction : avant, côté, arrière, côté. Lubrification articulaire.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Articulation sacro-iliaque, lombaires" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Ramenez un genou.", coaching: "Cercles de hanche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cercles de Hanche (Droite)", duration: 45, startTime: "03:00",
    position: "Allongé, genou droit ramené à la poitrine.",
    movement: "Faites des cercles avec le genou droit. Ouvrez vers l'extérieur, descendez, ramenez. 10 dans chaque sens. Le bassin reste stable.",
    coaching: "Lubrification de la hanche ! Le fémur tourne dans la cavité de la hanche. Sentez l'articulation s'ouvrir.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Articulation coxo-fémorale, rotateurs" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Changez de jambe.", coaching: "Cercles gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Cercles de Hanche (Gauche)", duration: 45, startTime: "04:00",
    position: "Allongé, genou gauche ramené.",
    movement: "Cercles avec le genou gauche. 10 dans chaque sens. Bassin stable.",
    coaching: "Même qualité ! Comparez la mobilité droite et gauche. C'est normal d'avoir des différences.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Articulation coxo-fémorale, rotateurs" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cat-Cow.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — MOBILITÉ HANCHES & BASSIN (~28 min)
  // ═══════════════════════════════════════════════════════════════

  { id: 11, phase: "workout", isTransition: false, name: "Cat-Cow Lent", duration: 45, startTime: "05:00",
    position: "À quatre pattes.",
    movement: "Inspirez en creusant le dos (Cow). Expirez en arrondissant (Cat). Très lent, 5 secondes par mouvement. Sentez chaque vertèbre.",
    coaching: "Ultra lent ! 5 secondes pour creuser, 5 secondes pour arrondir. Chaque vertèbre bouge individuellement.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne vertébrale, bassin" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Cercles de hanches à 4 pattes.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Cercles de Hanches à 4 Pattes", duration: 45, startTime: "06:00",
    position: "À quatre pattes.",
    movement: "Faites de grands cercles avec les hanches. Poussez vers l'arrière (posture enfant), sur le côté, vers l'avant, et l'autre côté. Cercles fluides.",
    coaching: "Grands cercles ! Les hanches explorent toute leur amplitude. C'est comme un massage articulaire en mouvement.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Hanches, colonne lombaire" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Fire Hydrant lent.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Fire Hydrant Lent (Droite)", duration: 45, startTime: "07:00",
    position: "À quatre pattes.",
    movement: "Ouvrez le genou droit sur le côté très lentement (5 sec montée, 5 sec descente). Sentez l'ouverture de la hanche.",
    coaching: "Ultra lent pour la mobilité ! Ce n'est pas un exercice de force mais de mobilité. Sentez l'articulation s'ouvrir.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Rotateurs externes, moyen fessier" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Changez de côté.", coaching: "Fire Hydrant gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Fire Hydrant Lent (Gauche)", duration: 45, startTime: "08:00",
    position: "À quatre pattes.",
    movement: "Genou gauche, ouverture lente. 5 sec montée, 5 sec descente.",
    coaching: "Même lenteur ! La mobilité se gagne dans la lenteur et la conscience du mouvement.",
    imageUrl: "IMG_FIRE_HYDRANT", targetMuscles: "Rotateurs externes, moyen fessier" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "90/90 au sol.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "90/90 Hip Switch", duration: 45, startTime: "09:00",
    position: "Assis au sol, jambe droite devant pliée à 90°, jambe gauche derrière pliée à 90°.",
    movement: "Basculez les deux genoux de l'autre côté (switch). La jambe avant devient arrière et vice versa. Mouvement fluide.",
    coaching: "Le 90/90 ! C'est LE mouvement de mobilité des hanches. Rotation interne et externe en même temps. Gardez le dos droit.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Rotateurs internes et externes, adducteurs" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez en 90/90.", coaching: "90/90 tenue.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "90/90 Hold & Lean (Droite devant)", duration: 45, startTime: "10:00",
    position: "En 90/90, jambe droite devant.",
    movement: "Penchez-vous vers l'avant au-dessus du genou droit. Sentez l'étirement profond dans la hanche droite. Tenez et respirez.",
    coaching: "Penchez-vous en avant ! Gardez le dos droit. Sentez l'ouverture profonde de la hanche. Respirez dans l'étirement.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Basculez de l'autre côté.", coaching: "90/90 gauche devant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 23, phase: "workout", isTransition: false, name: "90/90 Hold & Lean (Gauche devant)", duration: 45, startTime: "11:00",
    position: "En 90/90, jambe gauche devant.",
    movement: "Penchez-vous vers l'avant. Étirement profond de la hanche gauche. Respirez.",
    coaching: "Même profondeur ! Comparez les deux côtés. Le côté le plus raide a le plus besoin de travail.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Happy Baby.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Happy Baby", duration: 45, startTime: "12:00",
    position: "Allongé, genoux ramenés vers les aisselles, mains sur les pieds.",
    movement: "Tenez les pieds et tirez doucement les genoux vers le sol. Bercez-vous de droite à gauche. Sentez l'ouverture des hanches.",
    coaching: "Le bébé heureux ! Ouverture maximale des hanches. Bercez-vous doucement. Laissez la gravité ouvrir les hanches.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Adducteurs, rotateurs internes, hanches" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Restez allongé.", coaching: "Figure 4 dynamique.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "Figure 4 Dynamique (Droite)", duration: 45, startTime: "13:00",
    position: "Allongé, cheville droite sur le genou gauche.",
    movement: "Tirez le genou gauche vers la poitrine. Puis poussez le genou droit avec le coude pour ouvrir la hanche. Alternez tirer et pousser.",
    coaching: "Dynamique ! Tirez puis poussez. Chaque mouvement ouvre un peu plus la hanche. Le piriforme se relâche progressivement.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers, rotateurs" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Changez de côté.", coaching: "Figure 4 gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Figure 4 Dynamique (Gauche)", duration: 45, startTime: "14:00",
    position: "Allongé, cheville gauche sur le genou droit.",
    movement: "Tirez et poussez alternativement. Ouvrez la hanche gauche.",
    coaching: "Même chose ! Respirez dans l'étirement. Chaque expiration permet d'aller plus loin.",
    imageUrl: "IMG_FIGURE4", targetMuscles: "Piriforme, fessiers, rotateurs" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Retournez-vous sur le ventre.", coaching: "Frog Stretch.", imageUrl: TRANS, targetMuscles: "" },

  { id: 31, phase: "workout", isTransition: false, name: "Frog Stretch (Grenouille)", duration: 45, startTime: "15:00",
    position: "À genoux, écartez les genoux le plus possible, pieds tournés vers l'extérieur.",
    movement: "Descendez les hanches vers le sol en gardant les genoux écartés. Poussez doucement vers l'arrière et vers l'avant.",
    coaching: "La grenouille ! Ouverture profonde des adducteurs et des hanches. Allez-y progressivement, ne forcez pas.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Adducteurs, hanches" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Restez en position.", coaching: "Frog avec balancement.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Frog Rock (Balancement)", duration: 45, startTime: "16:00",
    position: "En position grenouille.",
    movement: "Balancez-vous doucement d'avant en arrière. Poussez les hanches vers l'arrière puis revenez vers l'avant. Mouvement fluide.",
    coaching: "Balancement doux ! Chaque aller-retour ouvre un peu plus les hanches. Respirez profondément.",
    imageUrl: "IMG_HIP_CIRCLES", targetMuscles: "Adducteurs, psoas, hanches" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Passez en fente.", coaching: "Fente basse.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Fente Basse (Droite)", duration: 45, startTime: "17:00",
    position: "En fente basse, genou droit devant, genou gauche au sol.",
    movement: "Poussez les hanches vers l'avant. Sentez l'étirement du psoas gauche. Bras au-dessus de la tête pour intensifier.",
    coaching: "Étirement du psoas ! Le psoas est souvent raccourci par la position assise. Poussez les hanches vers l'avant et respirez.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, quadriceps, fléchisseurs de hanche" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Restez en fente.", coaching: "Fente avec rotation.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Fente avec Rotation (Droite)", duration: 45, startTime: "18:00",
    position: "En fente basse, genou droit devant.",
    movement: "Tournez le torse vers la droite, bras droit vers le plafond. Sentez l'étirement combiné du psoas et la rotation thoracique.",
    coaching: "Rotation en fente ! Double bénéfice : étirement du psoas + mobilité thoracique. Respirez dans l'ouverture.",
    imageUrl: "IMG_PLANK_ROTATION", targetMuscles: "Psoas, obliques, colonne thoracique" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Changez de côté.", coaching: "Fente gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 39, phase: "workout", isTransition: false, name: "Fente Basse (Gauche)", duration: 45, startTime: "19:00",
    position: "En fente basse, genou gauche devant, genou droit au sol.",
    movement: "Poussez les hanches vers l'avant. Étirement du psoas droit. Bras au-dessus de la tête.",
    coaching: "Même profondeur ! Le psoas droit s'étire. Respirez et laissez la hanche s'ouvrir.",
    imageUrl: "IMG_REVERSE_LUNGE", targetMuscles: "Psoas, quadriceps, fléchisseurs de hanche" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Restez en fente.", coaching: "Fente avec rotation gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "Fente avec Rotation (Gauche)", duration: 45, startTime: "20:00",
    position: "En fente basse, genou gauche devant.",
    movement: "Rotation du torse vers la gauche, bras gauche au plafond.",
    coaching: "Rotation + étirement ! Sentez l'ouverture complète du côté droit du corps.",
    imageUrl: "IMG_PLANK_ROTATION", targetMuscles: "Psoas, obliques, colonne thoracique" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Asseyez-vous.", coaching: "Pigeon.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Pigeon (Droite)", duration: 45, startTime: "21:00",
    position: "Jambe droite pliée devant, jambe gauche tendue derrière.",
    movement: "Penchez-vous vers l'avant sur la jambe droite. Respirez profondément. Sentez l'étirement profond du fessier et du piriforme droit.",
    coaching: "Le pigeon ! Étirement profond des rotateurs de hanche. Allez-y progressivement. Respirez dans l'étirement.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Changez de côté.", coaching: "Pigeon gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Pigeon (Gauche)", duration: 45, startTime: "22:00",
    position: "Jambe gauche pliée devant, jambe droite tendue derrière.",
    movement: "Penchez-vous vers l'avant. Respirez dans l'étirement de la hanche gauche.",
    coaching: "Même profondeur ! Le pigeon est un étirement essentiel pour la santé des hanches.",
    imageUrl: "IMG_PIGEON", targetMuscles: "Piriforme, fessiers, rotateurs externes" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Pont articulé mobilité.", imageUrl: TRANS, targetMuscles: "" },

  { id: 47, phase: "workout", isTransition: false, name: "Pont Articulé Ultra Lent", duration: 45, startTime: "23:00",
    position: "Allongé, genoux pliés.",
    movement: "Déroulez la colonne vers le haut en 10 secondes. Tenez en haut 5 secondes. Redescendez en 10 secondes. Chaque vertèbre individuellement.",
    coaching: "Ultra lent ! 10 secondes pour monter, 10 pour descendre. Sentez chaque vertèbre se décoller et se reposer. Mobilité segmentaire.",
    imageUrl: "IMG_BRIDGE_PILATES", targetMuscles: "Colonne, fessiers, mobilité segmentaire" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Restez allongé.", coaching: "Genoux au vent.", imageUrl: TRANS, targetMuscles: "" },

  { id: 49, phase: "workout", isTransition: false, name: "Windshield Wipers (Essuie-Glaces)", duration: 45, startTime: "24:00",
    position: "Allongé, bras en croix, genoux pliés, pieds au sol écartés.",
    movement: "Laissez tomber les deux genoux vers la droite, puis vers la gauche. Comme des essuie-glaces. Mouvement fluide et contrôlé.",
    coaching: "Essuie-glaces ! Les genoux basculent de droite à gauche. Mobilité de la colonne lombaire et des hanches. Fluide et doux.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne lombaire, obliques, hanches" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Genoux à la poitrine.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════
  { id: 51, phase: "cooldown", isTransition: false, name: "Genoux à la Poitrine", duration: 45, startTime: "25:00",
    position: "Allongé, genoux ramenés.",
    movement: "Bercez-vous doucement. Massez le bas du dos.",
    coaching: "Vos hanches sont plus ouvertes maintenant ! Bercez-vous et savourez cette nouvelle mobilité.",
    imageUrl: "IMG_KNEES_CHEST", targetMuscles: "Lombaires, détente" },
  { id: 52, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Étendez les jambes.", coaching: "Étirement ischio.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "cooldown", isTransition: false, name: "Étirement Ischio (Droite)", duration: 45, startTime: "26:00",
    position: "Allongé, jambe droite tendue au plafond.",
    movement: "Tirez doucement la jambe vers vous. Pied flex. Respirez dans l'étirement.",
    coaching: "Étirement doux. Les ischio-jambiers limitent souvent la mobilité du bassin. Respirez et relâchez.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers" },
  { id: 54, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Changez de jambe.", coaching: "Ischio gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 55, phase: "cooldown", isTransition: false, name: "Étirement Ischio (Gauche)", duration: 45, startTime: "27:00",
    position: "Allongé, jambe gauche au plafond.",
    movement: "Tirez doucement. Respirez.",
    coaching: "Même durée. Chaque expiration permet d'aller un peu plus loin.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Ischio-jambiers" },
  { id: 56, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Ramenez les genoux.", coaching: "Torsion finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 57, phase: "cooldown", isTransition: false, name: "Torsion Spinale Longue", duration: 60, startTime: "28:00",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Genoux à droite, tête à gauche. Tenez 30 secondes. Puis changez de côté.",
    coaching: "Torsion profonde. Laissez la gravité faire le travail. Respirez dans les espaces qui s'ouvrent.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques, hanches" },
  { id: 58, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "29:00",
    position: "", movement: "Revenez au centre.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "" },

  { id: 59, phase: "cooldown", isTransition: false, name: "Posture de l'Enfant", duration: 45, startTime: "29:15",
    position: "À genoux, fesses sur les talons, bras tendus devant.",
    movement: "Respirez profondément. Relâchez tout.",
    coaching: "Repos. Vos hanches et votre bassin sont plus mobiles et plus libres. Savourez cette sensation.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Détente complète" },
  { id: 60, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "30:00",
    position: "", movement: "Allongez-vous.", coaching: "Relaxation.", imageUrl: TRANS, targetMuscles: "" },

  { id: 61, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation", duration: 60, startTime: "30:15",
    position: "Allongé sur le dos, bras le long du corps, yeux fermés.",
    movement: "Relâchez tout. Scannez les hanches et le bassin. Sentez la nouvelle mobilité.",
    coaching: "Félicitations ! Vos hanches et votre bassin sont plus libres et plus mobiles. Cette mobilité est la clé d'un corps fonctionnel. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session7: SessionConfig = {
  id: "mobilite-hanches",
  title: "Mobilité Hanches & Bassin",
  subtitle: "Ouverture & Liberté",
  description: "Séance dédiée à la mobilité des hanches et du bassin : 90/90, Frog Stretch, Pigeon, fentes basses, cercles de hanches. Idéal pour améliorer la souplesse et réduire les douleurs.",
  level: "Tous niveaux",
  duration: "~31 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Échauffement Articulaire", workout: "Mobilité Hanches & Bassin", cooldown: "Étirements & Relaxation" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "teal",
  finishMessage: "Bravo ! Vos hanches et votre bassin sont plus libres et plus mobiles. 90/90, Pigeon, Frog Stretch — vous avez ouvert toutes les portes de la mobilité. À très bientôt avec Coach Mimi !",
};
