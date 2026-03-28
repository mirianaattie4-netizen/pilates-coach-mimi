/*
 * Séance Pilates au Sol + Mobilité — 1 Heure — Niveau Débutant
 * Coach Mimi — Abidjan
 * AUCUN POIDS — Tapis uniquement
 * Phases: warmup/mobilité (vert ~10 min), workout Pilates mat (corail ~42 min), cooldown (bleu ~8 min)
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";

export type Phase = "warmup" | "workout" | "cooldown";

export interface Exercise {
  id: number;
  phase: Phase;
  isTransition: boolean;
  name: string;
  duration: number;
  startTime: string;
  position: string;
  movement: string;
  coaching: string;
  imageUrl: string;
  targetMuscles: string;
}

export const PHASE_LABELS: Record<Phase, string> = {
  warmup: "Mobilité & Échauffement",
  workout: "Pilates au Sol",
  cooldown: "Retour au calme",
};

const TRANS = "";

export const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — MOBILITÉ & ÉCHAUFFEMENT (~10 min)
  // ═══════════════════════════════════════════════════════════════

  // --- Exercice 1 : Respiration Pilates ---
  {
    id: 1,
    phase: "warmup",
    isTransition: false,
    name: "Respiration Pilates",
    duration: 45,
    startTime: "00:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat au sol, bras le long du corps.",
    movement: "Inspirez profondément par le nez en gonflant les côtes latéralement. Expirez lentement par la bouche en rentrant le nombril vers la colonne. Sentez le plancher pelvien s'activer à chaque expiration.",
    coaching: "On commence en douceur. Fermez les yeux. Connectez-vous à votre respiration. C'est la base du Pilates : chaque mouvement sera guidé par le souffle.",
    imageUrl: "IMG_RESPIRATION",
    targetMuscles: "Transverse, diaphragme, plancher pelvien",
  },
  {
    id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez allongé.", coaching: "On garde la connexion au centre.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 2 : Bascule du bassin ---
  {
    id: 3,
    phase: "warmup",
    isTransition: false,
    name: "Bascule du Bassin (Pelvic Tilt)",
    duration: 45,
    startTime: "01:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez en basculant le bassin vers le plafond, aplatissez le bas du dos contre le sol. Inspirez pour revenir en position neutre. Alternez lentement.",
    coaching: "Mouvement subtil mais essentiel. Imaginez que vous imprimez votre colonne dans le tapis. Activez les abdominaux profonds à chaque expiration.",
    imageUrl: "IMG_PELVIC_TILT",
    targetMuscles: "Transverse, lombaires, bassin",
  },
  {
    id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Gardez la position.", coaching: "On passe à la mobilité de la colonne.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 3 : Pont articulé (Spine Articulation) ---
  {
    id: 5,
    phase: "warmup",
    isTransition: false,
    name: "Pont Articulé (Spine Articulation)",
    duration: 45,
    startTime: "02:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez et décollez le bassin vertèbre par vertèbre : coccyx, sacrum, lombaires, dorsales. Montez jusqu'aux omoplates. Inspirez en haut. Expirez et redescendez vertèbre par vertèbre.",
    coaching: "Déroulez la colonne comme un collier de perles. Chaque vertèbre se décolle une par une. Contrôle total, pas de précipitation.",
    imageUrl: "IMG_BRIDGE_PILATES",
    targetMuscles: "Fessiers, ischio-jambiers, colonne vertébrale",
  },
  {
    id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Reposez le dos au sol.", coaching: "On passe à 4 pattes.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 4 : Cat-Cow ---
  {
    id: 7,
    phase: "warmup",
    isTransition: false,
    name: "Cat-Cow (Chat-Vache)",
    duration: 45,
    startTime: "03:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Inspirez : creusez le dos, levez la tête et le coccyx vers le plafond (vache). Expirez : arrondissez le dos, rentrez le menton vers la poitrine, poussez le sol (chat). Alternez fluidement.",
    coaching: "Mobilisez chaque segment de la colonne. Le mouvement part du bassin et se propage jusqu'à la tête. Respirez amplement.",
    imageUrl: "IMG_CAT_COW",
    targetMuscles: "Colonne vertébrale, abdominaux, dos",
  },
  {
    id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "On ajoute une rotation.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 5 : Thread the Needle ---
  {
    id: 9,
    phase: "warmup",
    isTransition: false,
    name: "Thread the Needle (Droite)",
    duration: 45,
    startTime: "04:00",
    position: "À quatre pattes, mains sous les épaules.",
    movement: "Inspirez et ouvrez le bras droit vers le plafond. Expirez et glissez le bras droit sous le corps, épaule droite vers le sol. Revenez et répétez.",
    coaching: "Rotation thoracique magnifique. Regardez votre main qui monte vers le plafond. Sentez l'ouverture de la cage thoracique.",
    imageUrl: "IMG_THREAD_NEEDLE",
    targetMuscles: "Colonne thoracique, obliques, épaules",
  },
  {
    id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 6 : Thread the Needle Gauche ---
  {
    id: 11,
    phase: "warmup",
    isTransition: false,
    name: "Thread the Needle (Gauche)",
    duration: 45,
    startTime: "05:00",
    position: "À quatre pattes, mains sous les épaules.",
    movement: "Inspirez et ouvrez le bras gauche vers le plafond. Expirez et glissez le bras gauche sous le corps, épaule gauche vers le sol. Revenez et répétez.",
    coaching: "Même fluidité de l'autre côté. Gardez les hanches stables, seul le haut du corps tourne.",
    imageUrl: "IMG_THREAD_NEEDLE",
    targetMuscles: "Colonne thoracique, obliques, épaules",
  },
  {
    id: 12, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Revenez à 4 pattes.", coaching: "On mobilise les hanches.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 7 : Cercles de hanches ---
  {
    id: 13,
    phase: "warmup",
    isTransition: false,
    name: "Cercles de Hanches à 4 pattes",
    duration: 45,
    startTime: "06:00",
    position: "À quatre pattes, position neutre.",
    movement: "Faites de grands cercles avec le genou droit : amenez-le vers l'avant, sur le côté, vers l'arrière, puis revenez. Changez de sens à mi-temps.",
    coaching: "Lubrifiez l'articulation de la hanche. Les cercles sont amples et contrôlés. Le reste du corps ne bouge pas.",
    imageUrl: "IMG_HIP_CIRCLES",
    targetMuscles: "Hanches, fessiers, stabilisateurs",
  },
  {
    id: 14, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 8 : Cercles de hanches Gauche ---
  {
    id: 15,
    phase: "warmup",
    isTransition: false,
    name: "Cercles de Hanches (Gauche)",
    duration: 45,
    startTime: "07:00",
    position: "À quatre pattes, position neutre.",
    movement: "Faites de grands cercles avec le genou gauche : amenez-le vers l'avant, sur le côté, vers l'arrière, puis revenez. Changez de sens à mi-temps.",
    coaching: "Gardez le bassin stable. Seule la jambe bouge dans l'articulation de la hanche. Respirez naturellement.",
    imageUrl: "IMG_HIP_CIRCLES",
    targetMuscles: "Hanches, fessiers, stabilisateurs",
  },
  {
    id: 16, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Asseyez-vous au sol.", coaching: "On mobilise la colonne assise.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 9 : Spine Stretch Forward ---
  {
    id: 17,
    phase: "warmup",
    isTransition: false,
    name: "Spine Stretch Forward",
    duration: 45,
    startTime: "08:00",
    position: "Assis, jambes tendues devant vous, écartées largeur des épaules, bras tendus devant.",
    movement: "Inspirez pour grandir. Expirez et arrondissez la colonne vers l'avant en commençant par la tête, comme si vous passiez par-dessus un ballon. Inspirez pour remonter vertèbre par vertèbre.",
    coaching: "Rentrez le ventre en vous penchant. Ce n'est pas un étirement des ischio-jambiers, c'est un déroulé de la colonne. Grandissez à chaque remontée.",
    imageUrl: "IMG_SPINE_STRETCH",
    targetMuscles: "Colonne vertébrale, abdominaux, ischio-jambiers",
  },
  {
    id: 18, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Restez assis.", coaching: "Dernière mobilisation.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 10 : Rotation assise ---
  {
    id: 19,
    phase: "warmup",
    isTransition: false,
    name: "Rotation Assise (Saw)",
    duration: 45,
    startTime: "09:00",
    position: "Assis, jambes écartées, bras ouverts en croix.",
    movement: "Inspirez pour tourner le buste vers la droite. Expirez et penchez-vous vers le pied droit, main gauche vers le petit orteil droit. Inspirez pour remonter au centre. Alternez.",
    coaching: "Tordez-vous comme une serviette qu'on essore. Les fesses restent collées au sol. Expirez à fond en descendant.",
    imageUrl: "IMG_SAW",
    targetMuscles: "Obliques, colonne, ischio-jambiers",
  },
  {
    id: 20, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "L'échauffement est terminé. On passe au Pilates au sol !", imageUrl: TRANS, targetMuscles: "",
  },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — PILATES AU SOL (~42 min)
  // ═══════════════════════════════════════════════════════════════

  // ─── BLOC 1 : Série Abdominale Classique (~8 min) ───

  // --- Exercice 11 : The Hundred ---
  {
    id: 21,
    phase: "workout",
    isTransition: false,
    name: "The Hundred (Le Cent)",
    duration: 45,
    startTime: "10:00",
    position: "Allongé sur le dos, jambes en table (genoux pliés à 90°), tête et épaules décollées, bras tendus le long du corps.",
    movement: "Pompez les bras de haut en bas rapidement : 5 pompages sur l'inspiration, 5 pompages sur l'expiration. Gardez le ventre rentré et les épaules décollées.",
    coaching: "C'est LE classique du Pilates ! Pompez les bras avec énergie. Le ventre est bétonné, le regard vers le nombril. Si c'est trop dur, gardez les pieds au sol.",
    imageUrl: "IMG_HUNDRED",
    targetMuscles: "Transverse, grand droit, stabilisateurs",
  },
  {
    id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Reposez la tête.", coaching: "Soufflez. On enchaîne.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 12 : Roll-Up ---
  {
    id: 23,
    phase: "workout",
    isTransition: false,
    name: "Roll-Up",
    duration: 45,
    startTime: "11:00",
    position: "Allongé sur le dos, jambes tendues, bras tendus au-dessus de la tête.",
    movement: "Inspirez et levez les bras vers le plafond. Expirez et enroulez le buste vers l'avant, vertèbre par vertèbre, jusqu'à toucher les orteils. Inspirez en haut. Expirez et déroulez lentement vers le sol.",
    coaching: "Contrôle total ! Pas d'élan. Si vous n'arrivez pas à monter, pliez légèrement les genoux. Chaque vertèbre touche le sol une par une en descendant.",
    imageUrl: "IMG_ROLLUP",
    targetMuscles: "Grand droit, transverse, fléchisseurs de hanche",
  },
  {
    id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Allongez-vous.", coaching: "On passe aux jambes.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 13 : Single Leg Stretch ---
  {
    id: 25,
    phase: "workout",
    isTransition: false,
    name: "Single Leg Stretch",
    duration: 45,
    startTime: "12:00",
    position: "Allongé sur le dos, tête et épaules décollées, un genou ramené vers la poitrine, l'autre jambe tendue à 45°.",
    movement: "Mains sur le genou plié. Alternez les jambes en ciseaux : ramenez un genou, tendez l'autre. Changez de main à chaque fois. Gardez le buste stable.",
    coaching: "Le centre ne bouge pas ! Seules les jambes alternent. Le regard reste vers le nombril. Expirez à chaque changement.",
    imageUrl: "IMG_SINGLE_LEG_STRETCH",
    targetMuscles: "Transverse, grand droit, fléchisseurs de hanche",
  },
  {
    id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Ramenez les deux genoux.", coaching: "On continue.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 14 : Double Leg Stretch ---
  {
    id: 27,
    phase: "workout",
    isTransition: false,
    name: "Double Leg Stretch",
    duration: 45,
    startTime: "13:00",
    position: "Allongé sur le dos, tête et épaules décollées, genoux ramenés vers la poitrine, mains sur les chevilles.",
    movement: "Inspirez : tendez bras et jambes simultanément (bras vers les oreilles, jambes à 45°). Expirez : ramenez tout en boule, mains sur les chevilles.",
    coaching: "Grand mouvement ! Étirez-vous comme une étoile puis refermez-vous. Le bas du dos reste collé au sol. Si c'est trop dur, tendez les jambes plus haut.",
    imageUrl: "IMG_DOUBLE_LEG_STRETCH",
    targetMuscles: "Transverse, grand droit, coordination",
  },
  {
    id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On ajoute la rotation.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 15 : Criss-Cross ---
  {
    id: 29,
    phase: "workout",
    isTransition: false,
    name: "Criss-Cross",
    duration: 45,
    startTime: "14:00",
    position: "Allongé sur le dos, mains derrière la tête, coudes ouverts, genoux en table.",
    movement: "Expirez et amenez le coude droit vers le genou gauche en tendant la jambe droite. Inspirez au centre. Expirez de l'autre côté. Alternez avec contrôle.",
    coaching: "Rotation du buste, pas juste du coude ! Tournez toute la cage thoracique. Gardez les deux coudes ouverts. Lent et contrôlé.",
    imageUrl: "IMG_CRISS_CROSS",
    targetMuscles: "Obliques, transverse, grand droit",
  },
  {
    id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Reposez la tête.", coaching: "Bravo pour la série abdominale ! On passe aux jambes.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 2 : Travail des Jambes au Sol (~6 min) ───

  // --- Exercice 16 : Single Leg Circle Droite ---
  {
    id: 31,
    phase: "workout",
    isTransition: false,
    name: "Single Leg Circle (Droite)",
    duration: 45,
    startTime: "15:00",
    position: "Allongé sur le dos, jambe droite tendue vers le plafond, jambe gauche tendue au sol, bras le long du corps.",
    movement: "Faites des cercles avec la jambe droite : croisez vers la gauche, descendez, ouvrez vers la droite, remontez. 5 cercles dans un sens, puis inversez.",
    coaching: "Le bassin ne bouge pas ! Les cercles sont contrôlés, pas trop grands. Appuyez les paumes dans le sol pour stabiliser.",
    imageUrl: "IMG_LEG_CIRCLE",
    targetMuscles: "Fléchisseurs de hanche, adducteurs, stabilisateurs",
  },
  {
    id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 17 : Single Leg Circle Gauche ---
  {
    id: 33,
    phase: "workout",
    isTransition: false,
    name: "Single Leg Circle (Gauche)",
    duration: 45,
    startTime: "16:00",
    position: "Allongé sur le dos, jambe gauche tendue vers le plafond, jambe droite tendue au sol.",
    movement: "Faites des cercles avec la jambe gauche : croisez vers la droite, descendez, ouvrez vers la gauche, remontez. 5 cercles dans un sens, puis inversez.",
    coaching: "Même contrôle de l'autre côté. Le bassin est ancré dans le sol. Respirez naturellement.",
    imageUrl: "IMG_LEG_CIRCLE",
    targetMuscles: "Fléchisseurs de hanche, adducteurs, stabilisateurs",
  },
  {
    id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On passe au pont fessier.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 18 : Shoulder Bridge ---
  {
    id: 35,
    phase: "workout",
    isTransition: false,
    name: "Shoulder Bridge (Pont Épaules)",
    duration: 45,
    startTime: "17:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez et montez le bassin en pont. Maintenez la position haute. Tendez la jambe droite vers le plafond, abaissez-la puis remontez-la 5 fois. Changez de jambe.",
    coaching: "Le bassin reste haut et stable ! Serrez les fessiers. La jambe monte et descend comme un piston. Gardez les hanches parallèles.",
    imageUrl: "IMG_SHOULDER_BRIDGE",
    targetMuscles: "Fessiers, ischio-jambiers, stabilisateurs",
  },
  {
    id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Redescendez le bassin.", coaching: "On passe sur le côté.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 19 : Side Leg Lift Droite ---
  {
    id: 37,
    phase: "workout",
    isTransition: false,
    name: "Side Leg Lift (Droite)",
    duration: 45,
    startTime: "18:00",
    position: "Allongé sur le côté gauche, tête posée sur le bras gauche, jambes tendues et légèrement avancées.",
    movement: "Levez la jambe droite à hauteur de hanche. Abaissez lentement sans toucher l'autre jambe. Répétez. Gardez le pied en flex (orteils vers vous).",
    coaching: "Travail des abducteurs ! Le corps est aligné comme un mur. Ne basculez pas en arrière. Mouvement lent et contrôlé.",
    imageUrl: "IMG_SIDE_LEG",
    targetMuscles: "Moyen fessier, abducteurs, obliques",
  },
  {
    id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Gardez la position.", coaching: "On ajoute les cercles.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 20 : Side Leg Circles Droite ---
  {
    id: 39,
    phase: "workout",
    isTransition: false,
    name: "Cercles Latéraux (Droite)",
    duration: 45,
    startTime: "19:00",
    position: "Allongé sur le côté gauche, jambe droite levée à hauteur de hanche.",
    movement: "Faites de petits cercles avec la jambe droite : 20 secondes dans un sens, puis inversez. Gardez le tronc parfaitement stable.",
    coaching: "Les cercles sont petits et précis. Sentez le fessier qui brûle ! Le reste du corps est immobile comme une statue.",
    imageUrl: "IMG_SIDE_CIRCLES",
    targetMuscles: "Moyen fessier, petit fessier, stabilisateurs",
  },
  {
    id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Retournez-vous de l'autre côté.", coaching: "On fait la même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 21 : Side Leg Lift Gauche ---
  {
    id: 41,
    phase: "workout",
    isTransition: false,
    name: "Side Leg Lift (Gauche)",
    duration: 45,
    startTime: "20:00",
    position: "Allongé sur le côté droit, tête posée sur le bras droit, jambes tendues.",
    movement: "Levez la jambe gauche à hauteur de hanche. Abaissez lentement sans toucher l'autre jambe. Répétez. Pied en flex.",
    coaching: "Même travail de l'autre côté. Symétrie ! Le corps reste aligné. Respirez naturellement.",
    imageUrl: "IMG_SIDE_LEG",
    targetMuscles: "Moyen fessier, abducteurs, obliques",
  },
  {
    id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Gardez la position.", coaching: "Cercles à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 22 : Side Leg Circles Gauche ---
  {
    id: 43,
    phase: "workout",
    isTransition: false,
    name: "Cercles Latéraux (Gauche)",
    duration: 45,
    startTime: "21:00",
    position: "Allongé sur le côté droit, jambe gauche levée à hauteur de hanche.",
    movement: "Faites de petits cercles avec la jambe gauche : 20 secondes dans un sens, puis inversez.",
    coaching: "Derniers cercles ! Sentez la brûlure. Le contrôle est plus important que l'amplitude.",
    imageUrl: "IMG_SIDE_CIRCLES",
    targetMuscles: "Moyen fessier, petit fessier, stabilisateurs",
  },
  {
    id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Retour sur le dos pour la série suivante.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 3 : Série Abdominale Avancée (~6 min) ───

  // --- Exercice 23 : Scissors ---
  {
    id: 45,
    phase: "workout",
    isTransition: false,
    name: "Scissors (Ciseaux)",
    duration: 45,
    startTime: "22:00",
    position: "Allongé sur le dos, tête et épaules décollées, les deux jambes tendues vers le plafond.",
    movement: "Abaissez une jambe vers le sol pendant que l'autre reste vers le plafond. Attrapez la cheville de la jambe haute avec les deux mains. Alternez en ciseaux.",
    coaching: "Les jambes sont comme des ciseaux ! Tirez doucement deux fois sur la cheville. Le bas du dos reste collé au sol. Expirez à chaque changement.",
    imageUrl: "IMG_SCISSORS",
    targetMuscles: "Grand droit, fléchisseurs de hanche, ischio-jambiers",
  },
  {
    id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Ramenez les deux jambes.", coaching: "On continue.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 24 : Lower & Lift ---
  {
    id: 47,
    phase: "workout",
    isTransition: false,
    name: "Lower & Lift (Descente de jambes)",
    duration: 45,
    startTime: "23:00",
    position: "Allongé sur le dos, mains sous les fesses ou le long du corps, les deux jambes tendues vers le plafond.",
    movement: "Expirez et descendez lentement les deux jambes vers le sol (sans toucher). Inspirez et remontez. Gardez le bas du dos plaqué au sol.",
    coaching: "Contrôle absolu ! Si le bas du dos se décolle, ne descendez pas plus bas. La qualité prime sur l'amplitude. Serrez le ventre.",
    imageUrl: "IMG_LOWER_LIFT",
    targetMuscles: "Transverse, grand droit, fléchisseurs de hanche",
  },
  {
    id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On passe au Teaser.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 25 : Teaser Modifié ---
  {
    id: 49,
    phase: "workout",
    isTransition: false,
    name: "Teaser Modifié",
    duration: 45,
    startTime: "24:00",
    position: "Allongé sur le dos, genoux pliés, pieds au sol, bras tendus au-dessus de la tête.",
    movement: "Expirez et enroulez le buste vers l'avant en tendant les bras vers les genoux. Trouvez l'équilibre sur les ischions en forme de V. Maintenez 3 secondes. Redescendez lentement.",
    coaching: "Le Teaser est le roi du Pilates ! Version modifiée avec genoux pliés. Rentrez le ventre, arrondissez le dos. Contrôle en descendant !",
    imageUrl: "IMG_TEASER",
    targetMuscles: "Grand droit, transverse, fléchisseurs de hanche",
  },
  {
    id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Allongez-vous.", coaching: "Bravo ! On passe sur le ventre.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 4 : Travail sur le Ventre (~6 min) ───

  // --- Exercice 26 : Swan Prep ---
  {
    id: 51,
    phase: "workout",
    isTransition: false,
    name: "Swan Prep (Préparation au Cygne)",
    duration: 45,
    startTime: "25:00",
    position: "Allongé sur le ventre, mains sous les épaules, coudes collés au corps, front au sol.",
    movement: "Inspirez et décollez la tête, puis la poitrine du sol en poussant légèrement dans les mains. Gardez le pubis au sol. Expirez et redescendez lentement.",
    coaching: "Extension de la colonne ! Ne poussez pas trop haut, juste jusqu'au sternum. Allongez la nuque, regard vers l'avant. Les épaules descendent loin des oreilles.",
    imageUrl: "IMG_SWAN",
    targetMuscles: "Extenseurs du dos, trapèzes, fessiers",
  },
  {
    id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Restez sur le ventre.", coaching: "On continue le travail du dos.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 27 : Swimming ---
  {
    id: 53,
    phase: "workout",
    isTransition: false,
    name: "Swimming (Nage)",
    duration: 45,
    startTime: "26:00",
    position: "Allongé sur le ventre, bras tendus devant, jambes tendues derrière, tout le corps décollé du sol.",
    movement: "Battez bras et jambes en alternance comme si vous nagiez : bras droit + jambe gauche en haut, puis inversez. Rapide et contrôlé.",
    coaching: "Nagez dans les airs ! Gardez le ventre décollé du sol. Le regard est vers le sol pour protéger la nuque. Respirez : 5 battements inspiration, 5 battements expiration.",
    imageUrl: "IMG_SWIMMING",
    targetMuscles: "Extenseurs du dos, fessiers, épaules, coordination",
  },
  {
    id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Reposez-vous sur le ventre.", coaching: "On enchaîne.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 28 : Single Leg Kick ---
  {
    id: 55,
    phase: "workout",
    isTransition: false,
    name: "Single Leg Kick",
    duration: 45,
    startTime: "27:00",
    position: "Allongé sur le ventre, appuyé sur les avant-bras, coudes sous les épaules, poitrine levée.",
    movement: "Pliez le genou droit et donnez deux coups de talon vers la fesse (kick-kick). Tendez la jambe. Alternez : droite kick-kick, gauche kick-kick.",
    coaching: "Rythme dynamique ! Kick-kick, changez. Les hanches restent au sol. Serrez les fessiers. Le buste reste fier et stable.",
    imageUrl: "IMG_SINGLE_LEG_KICK",
    targetMuscles: "Ischio-jambiers, fessiers, extenseurs du dos",
  },
  {
    id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Dernier exercice sur le ventre.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 29 : Double Leg Kick ---
  {
    id: 57,
    phase: "workout",
    isTransition: false,
    name: "Double Leg Kick",
    duration: 45,
    startTime: "28:00",
    position: "Allongé sur le ventre, mains jointes dans le dos, tête tournée sur un côté.",
    movement: "Pliez les deux genoux et donnez 3 coups de talons vers les fesses. Puis tendez les jambes et les bras en arrière en soulevant la poitrine. Tournez la tête de l'autre côté et recommencez.",
    coaching: "3 kicks puis extension ! Ouvrez la poitrine en montant. Les mains jointes dans le dos tirent vers les pieds. Magnifique ouverture des épaules.",
    imageUrl: "IMG_DOUBLE_LEG_KICK",
    targetMuscles: "Ischio-jambiers, extenseurs du dos, épaules",
  },
  {
    id: 58, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Poussez-vous en posture de l'enfant 5 secondes, puis revenez à 4 pattes.", coaching: "Petite pause. On passe aux planches.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 5 : Planches & Stabilité (~6 min) ───

  // --- Exercice 30 : Planche sur avant-bras ---
  {
    id: 59,
    phase: "workout",
    isTransition: false,
    name: "Planche sur Avant-bras",
    duration: 45,
    startTime: "29:00",
    position: "En appui sur les avant-bras et les orteils, corps aligné de la tête aux talons.",
    movement: "Maintenez la position. Rentrez le ventre, serrez les fessiers. Poussez les coudes dans le sol. Respirez régulièrement sans bloquer.",
    coaching: "Le corps est une planche rigide ! Pas de fesses en l'air, pas de dos creusé. Si c'est trop dur, posez les genoux. Tenez, respirez, tenez !",
    imageUrl: "IMG_PLANK",
    targetMuscles: "Transverse, grand droit, épaules, fessiers",
  },
  {
    id: 60, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Restez en planche.", coaching: "On ajoute du mouvement.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 31 : Planche avec Hip Dips ---
  {
    id: 61,
    phase: "workout",
    isTransition: false,
    name: "Planche Hip Dips",
    duration: 45,
    startTime: "30:00",
    position: "En planche sur les avant-bras.",
    movement: "Basculez les hanches vers la droite en direction du sol, puis vers la gauche. Alternez de façon fluide sans poser les hanches.",
    coaching: "Les hanches oscillent comme un pendule. Le mouvement vient de la taille, pas des épaules. Sentez les obliques travailler à chaque rotation.",
    imageUrl: "IMG_HIP_DIPS",
    targetMuscles: "Obliques, transverse, épaules",
  },
  {
    id: 62, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Tournez-vous sur le côté droit.", coaching: "Planche latérale !", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 32 : Side Plank Droite ---
  {
    id: 63,
    phase: "workout",
    isTransition: false,
    name: "Planche Latérale (Droite)",
    duration: 45,
    startTime: "31:00",
    position: "En appui sur l'avant-bras droit, pieds empilés ou décalés, corps aligné, bras gauche vers le plafond.",
    movement: "Maintenez la position. Soulevez les hanches bien haut. Option : abaissez et remontez la hanche 10 fois pour plus d'intensité.",
    coaching: "Poussez le sol avec l'avant-bras. Le corps est droit comme une flèche. Si c'est trop dur, posez le genou du bas. Respirez !",
    imageUrl: "IMG_SIDE_PLANK",
    targetMuscles: "Obliques, moyen fessier, épaules",
  },
  {
    id: 64, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 33 : Side Plank Gauche ---
  {
    id: 65,
    phase: "workout",
    isTransition: false,
    name: "Planche Latérale (Gauche)",
    duration: 45,
    startTime: "32:00",
    position: "En appui sur l'avant-bras gauche, pieds empilés ou décalés, bras droit vers le plafond.",
    movement: "Maintenez la position. Soulevez les hanches bien haut. Option : abaissez et remontez la hanche 10 fois.",
    coaching: "Symétrie ! Même engagement de l'autre côté. Poussez le sol, hanches hautes. Vous êtes forts !",
    imageUrl: "IMG_SIDE_PLANK",
    targetMuscles: "Obliques, moyen fessier, épaules",
  },
  {
    id: 66, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "32:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Retour sur le dos pour la suite.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 6 : Série Classique Suite (~8 min) ───

  // --- Exercice 34 : Rolling Like a Ball ---
  {
    id: 67,
    phase: "workout",
    isTransition: false,
    name: "Rolling Like a Ball",
    duration: 45,
    startTime: "33:00",
    position: "Assis en équilibre sur les ischions, genoux ramenés vers la poitrine, mains sur les chevilles, pieds décollés du sol.",
    movement: "Inspirez et roulez en arrière jusqu'aux omoplates (pas la nuque !). Expirez et remontez en équilibre. Gardez la forme de boule constante.",
    coaching: "Exercice ludique ! Roulez comme un ballon. La forme ne change jamais : même distance entre menton et genoux. C'est le ventre qui contrôle, pas l'élan.",
    imageUrl: "IMG_ROLLING_BALL",
    targetMuscles: "Transverse, grand droit, massage colonne",
  },
  {
    id: 68, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "33:45",
    position: "", movement: "Allongez-vous.", coaching: "On continue la série classique.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 35 : Spine Twist ---
  {
    id: 69,
    phase: "workout",
    isTransition: false,
    name: "Spine Twist",
    duration: 45,
    startTime: "34:00",
    position: "Assis, jambes tendues et serrées devant vous, bras ouverts en croix, dos droit.",
    movement: "Expirez et tournez le buste vers la droite avec deux petites pulsations. Inspirez pour revenir au centre. Expirez vers la gauche. Alternez.",
    coaching: "Grandissez à chaque rotation ! Les fesses ne bougent pas du sol. Imaginez que vous êtes entre deux murs : pas de bascule avant/arrière.",
    imageUrl: "IMG_SPINE_TWIST",
    targetMuscles: "Obliques, colonne thoracique, transverse",
  },
  {
    id: 70, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "34:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "On passe au travail des fessiers.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 36 : Pont Fessier Classique ---
  {
    id: 71,
    phase: "workout",
    isTransition: false,
    name: "Pont Fessier (Glute Bridge)",
    duration: 45,
    startTime: "35:00",
    position: "Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
    movement: "Expirez et montez le bassin en serrant fort les fessiers en haut. Maintenez 2 secondes. Redescendez lentement. Répétez.",
    coaching: "Serrez les fessiers comme si vous teniez une pièce entre eux ! Montez haut, descendez lentement. Le poids est dans les talons.",
    imageUrl: "IMG_GLUTE_BRIDGE",
    targetMuscles: "Grand fessier, ischio-jambiers, transverse",
  },
  {
    id: 72, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "35:45",
    position: "", movement: "Restez en pont.", coaching: "On ajoute une jambe.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 37 : Single Leg Bridge Droite ---
  {
    id: 73,
    phase: "workout",
    isTransition: false,
    name: "Pont 1 Jambe (Droite)",
    duration: 45,
    startTime: "36:00",
    position: "En pont, bassin levé, tendez la jambe droite vers le plafond.",
    movement: "Maintenez la jambe droite tendue vers le plafond. Descendez le bassin presque au sol, puis remontez en serrant le fessier gauche. Répétez.",
    coaching: "Défi d'équilibre ! Le bassin reste parallèle au sol, pas de bascule. Tout le poids sur le pied gauche. Serrez fort en haut !",
    imageUrl: "IMG_SINGLE_BRIDGE",
    targetMuscles: "Grand fessier, ischio-jambiers, stabilisateurs",
  },
  {
    id: 74, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "36:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 38 : Single Leg Bridge Gauche ---
  {
    id: 75,
    phase: "workout",
    isTransition: false,
    name: "Pont 1 Jambe (Gauche)",
    duration: 45,
    startTime: "37:00",
    position: "En pont, bassin levé, tendez la jambe gauche vers le plafond.",
    movement: "Descendez le bassin presque au sol, puis remontez en serrant le fessier droit. Répétez.",
    coaching: "Même travail de l'autre côté. Gardez le bassin stable et parallèle. Respirez, serrez, montez !",
    imageUrl: "IMG_SINGLE_BRIDGE",
    targetMuscles: "Grand fessier, ischio-jambiers, stabilisateurs",
  },
  {
    id: 76, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "37:45",
    position: "", movement: "Reposez le bassin.", coaching: "On passe à 4 pattes.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 7 : Quadrupédie & Fessiers (~6 min) ───

  // --- Exercice 39 : Bird Dog Droite ---
  {
    id: 77,
    phase: "workout",
    isTransition: false,
    name: "Bird Dog (Droite)",
    duration: 45,
    startTime: "38:00",
    position: "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
    movement: "Tendez simultanément le bras droit devant et la jambe gauche derrière. Maintenez 3 secondes. Ramenez coude et genou sous le ventre. Répétez.",
    coaching: "Équilibre et stabilité ! Le dos reste plat comme une table. Ne laissez pas le bassin tourner. Allongez-vous du bout des doigts au bout des orteils.",
    imageUrl: "IMG_BIRD_DOG",
    targetMuscles: "Transverse, extenseurs du dos, fessiers",
  },
  {
    id: 78, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "38:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose de l'autre côté.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 40 : Bird Dog Gauche ---
  {
    id: 79,
    phase: "workout",
    isTransition: false,
    name: "Bird Dog (Gauche)",
    duration: 45,
    startTime: "39:00",
    position: "À quatre pattes.",
    movement: "Tendez le bras gauche devant et la jambe droite derrière. Maintenez 3 secondes. Ramenez coude et genou. Répétez.",
    coaching: "Même précision ! Le nombril est aspiré vers la colonne. Allongez-vous au maximum. Stabilité avant tout.",
    imageUrl: "IMG_BIRD_DOG",
    targetMuscles: "Transverse, extenseurs du dos, fessiers",
  },
  {
    id: 80, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "39:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "On travaille les fessiers.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 41 : Donkey Kick Droite ---
  {
    id: 81,
    phase: "workout",
    isTransition: false,
    name: "Donkey Kick (Droite)",
    duration: 45,
    startTime: "40:00",
    position: "À quatre pattes, genou droit plié à 90°.",
    movement: "Poussez le pied droit vers le plafond en gardant le genou plié. Le pied pousse comme s'il voulait laisser une empreinte au plafond. Redescendez sans toucher le sol.",
    coaching: "Sentez le fessier droit se contracter en haut ! Le dos ne bouge pas, pas de cambrure. Mouvement contrôlé, pas de balancement.",
    imageUrl: "IMG_DONKEY_KICK",
    targetMuscles: "Grand fessier, ischio-jambiers",
  },
  {
    id: 82, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "40:45",
    position: "", movement: "Changez de jambe.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 42 : Donkey Kick Gauche ---
  {
    id: 83,
    phase: "workout",
    isTransition: false,
    name: "Donkey Kick (Gauche)",
    duration: 45,
    startTime: "41:00",
    position: "À quatre pattes, genou gauche plié à 90°.",
    movement: "Poussez le pied gauche vers le plafond. Redescendez sans toucher le sol. Répétez.",
    coaching: "Même engagement ! Serrez le fessier en haut. Le ventre est rentré pour protéger le dos.",
    imageUrl: "IMG_DONKEY_KICK",
    targetMuscles: "Grand fessier, ischio-jambiers",
  },
  {
    id: 84, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "41:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Fire hydrant !", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 43 : Fire Hydrant Droite ---
  {
    id: 85,
    phase: "workout",
    isTransition: false,
    name: "Fire Hydrant (Droite)",
    duration: 45,
    startTime: "42:00",
    position: "À quatre pattes, genou droit plié à 90°.",
    movement: "Ouvrez le genou droit sur le côté à hauteur de hanche, comme un chien qui lève la patte. Redescendez sans toucher le sol. Répétez.",
    coaching: "Abduction de hanche ! Le genou monte sur le côté, le bassin reste stable. Sentez le moyen fessier brûler. Contrôle !",
    imageUrl: "IMG_FIRE_HYDRANT",
    targetMuscles: "Moyen fessier, abducteurs, stabilisateurs",
  },
  {
    id: 86, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "42:45",
    position: "", movement: "Changez de côté.", coaching: "Dernier exercice fessier.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 44 : Fire Hydrant Gauche ---
  {
    id: 87,
    phase: "workout",
    isTransition: false,
    name: "Fire Hydrant (Gauche)",
    duration: 45,
    startTime: "43:00",
    position: "À quatre pattes, genou gauche plié à 90°.",
    movement: "Ouvrez le genou gauche sur le côté. Redescendez sans toucher le sol. Répétez.",
    coaching: "Symétrie ! Même travail de l'autre côté. Le dos est plat, le ventre rentré. Dernières répétitions !",
    imageUrl: "IMG_FIRE_HYDRANT",
    targetMuscles: "Moyen fessier, abducteurs, stabilisateurs",
  },
  {
    id: 88, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "43:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Retour sur le dos pour le dernier bloc.", imageUrl: TRANS, targetMuscles: "",
  },

  // ─── BLOC 8 : Finisher Pilates (~8 min) ───

  // --- Exercice 45 : Toe Taps ---
  {
    id: 89,
    phase: "workout",
    isTransition: false,
    name: "Toe Taps",
    duration: 45,
    startTime: "44:00",
    position: "Allongé sur le dos, jambes en table (genoux pliés à 90°), bras le long du corps.",
    movement: "Abaissez un pied vers le sol en gardant le genou plié à 90°. Tapez le sol avec les orteils puis remontez. Alternez les jambes.",
    coaching: "Le bas du dos ne décolle jamais ! Si ça tire dans le dos, ne descendez pas jusqu'au sol. Le transverse travaille pour stabiliser le bassin.",
    imageUrl: "IMG_TOE_TAPS",
    targetMuscles: "Transverse, fléchisseurs de hanche",
  },
  {
    id: 90, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "44:45",
    position: "", movement: "Gardez les jambes en table.", coaching: "On enchaîne.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 46 : Dead Bug ---
  {
    id: 91,
    phase: "workout",
    isTransition: false,
    name: "Dead Bug",
    duration: 45,
    startTime: "45:00",
    position: "Allongé sur le dos, bras tendus vers le plafond, jambes en table.",
    movement: "Tendez simultanément le bras droit derrière la tête et la jambe gauche vers le sol. Revenez. Alternez avec le bras gauche et la jambe droite.",
    coaching: "Coordination croisée ! Le dos reste plaqué au sol. Expirez en tendant, inspirez en revenant. Mouvement lent et contrôlé.",
    imageUrl: "IMG_DEAD_BUG",
    targetMuscles: "Transverse, coordination, stabilisateurs",
  },
  {
    id: 92, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "45:45",
    position: "", movement: "Ramenez les genoux.", coaching: "On passe au Seal.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 47 : Seal ---
  {
    id: 93,
    phase: "workout",
    isTransition: false,
    name: "Seal (Le Phoque)",
    duration: 45,
    startTime: "46:00",
    position: "Assis en équilibre, pieds décollés, bras passés à l'intérieur des jambes, mains tenant les chevilles par l'extérieur.",
    movement: "Claquez les pieds 3 fois comme un phoque. Roulez en arrière jusqu'aux omoplates. Claquez 3 fois en haut. Roulez vers l'avant en équilibre.",
    coaching: "Exercice fun pour finir ! Clap-clap-clap, roulez ! Même principe que Rolling Like a Ball mais avec les applaudissements des pieds. Amusez-vous !",
    imageUrl: "IMG_SEAL",
    targetMuscles: "Transverse, massage colonne, coordination",
  },
  {
    id: 94, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "46:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "On continue.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 48 : Bicycle au sol ---
  {
    id: 95,
    phase: "workout",
    isTransition: false,
    name: "Bicycle (Vélo au sol)",
    duration: 45,
    startTime: "47:00",
    position: "Allongé sur le dos, mains derrière la tête, épaules décollées.",
    movement: "Pédalez avec les jambes en amenant le coude opposé vers le genou. Mouvement fluide et continu comme si vous pédaliez.",
    coaching: "Pédalez ! Rotation complète du buste, pas juste le coude. Gardez les deux coudes ouverts. Le ventre est rentré. Dernière ligne droite !",
    imageUrl: "IMG_BICYCLE",
    targetMuscles: "Obliques, grand droit, fléchisseurs de hanche",
  },
  {
    id: 96, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "47:45",
    position: "", movement: "Reposez la tête.", coaching: "On passe à la planche finale.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 49 : Planche Push-Up Position ---
  {
    id: 97,
    phase: "workout",
    isTransition: false,
    name: "Planche Haute (Push-Up Hold)",
    duration: 45,
    startTime: "48:00",
    position: "En appui sur les mains et les orteils, bras tendus, corps aligné.",
    movement: "Maintenez la position de planche haute. Poussez le sol, rentrez le ventre, serrez les fessiers. Option : alternez lever un bras ou une jambe.",
    coaching: "Dernière planche de la séance ! Tenez bon ! Le corps est une ligne droite. Respirez régulièrement. Vous êtes presque à la fin du workout !",
    imageUrl: "IMG_HIGH_PLANK",
    targetMuscles: "Transverse, épaules, pectoraux, fessiers",
  },
  {
    id: 98, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "48:45",
    position: "", movement: "Descendez en posture de l'enfant.", coaching: "On passe au Pilates Push-Up.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 50 : Pilates Push-Up ---
  {
    id: 99,
    phase: "workout",
    isTransition: false,
    name: "Pilates Push-Up",
    duration: 45,
    startTime: "49:00",
    position: "Debout, pieds joints.",
    movement: "Enroulez vers le sol vertèbre par vertèbre. Marchez les mains vers l'avant jusqu'en planche. Faites 1 pompe (genoux au sol si besoin). Marchez les mains vers les pieds. Déroulez pour vous relever. Répétez.",
    coaching: "Le Pilates Push-Up combine tout : mobilité, force, contrôle ! Déroulez lentement, marchez les mains, une pompe, revenez. C'est le dernier exercice du workout !",
    imageUrl: "IMG_PILATES_PUSHUP",
    targetMuscles: "Full body : épaules, pectoraux, abdominaux, colonne",
  },
  {
    id: 100, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "49:45",
    position: "", movement: "Allongez-vous doucement sur le dos.", coaching: "Bravo ! Le workout est terminé. On passe au retour au calme.", imageUrl: TRANS, targetMuscles: "",
  },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~10 min)
  // ═══════════════════════════════════════════════════════════════

  // --- Exercice 51 : Genoux à la poitrine ---
  {
    id: 101,
    phase: "cooldown",
    isTransition: false,
    name: "Genoux à la Poitrine",
    duration: 45,
    startTime: "50:00",
    position: "Allongé sur le dos, ramenez les deux genoux vers la poitrine.",
    movement: "Entourez vos genoux avec les bras. Balancez doucement de droite à gauche pour masser le bas du dos. Respirez profondément.",
    coaching: "Massage du bas du dos. Relâchez la nuque, les épaules, la mâchoire. Laissez le poids des jambes étirer le bas du dos. Respirez.",
    imageUrl: "IMG_KNEES_CHEST",
    targetMuscles: "Lombaires, bas du dos, relaxation",
  },
  {
    id: 102, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "50:45",
    position: "", movement: "Gardez la position.", coaching: "On passe à la torsion.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 52 : Torsion allongée Droite ---
  {
    id: 103,
    phase: "cooldown",
    isTransition: false,
    name: "Torsion Allongée (Droite)",
    duration: 45,
    startTime: "51:00",
    position: "Allongé sur le dos, bras en croix, paumes vers le plafond.",
    movement: "Ramenez le genou droit vers la poitrine, puis laissez-le tomber vers la gauche. Tournez la tête vers la droite. Maintenez et respirez.",
    coaching: "Étirement profond de la colonne et des hanches. Les deux épaules restent au sol. Laissez la gravité faire le travail. Respirez dans l'étirement.",
    imageUrl: "IMG_SPINAL_TWIST",
    targetMuscles: "Lombaires, obliques, hanches, colonne",
  },
  {
    id: 104, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "51:45",
    position: "", movement: "Revenez au centre.", coaching: "Même chose de l'autre côté.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 53 : Torsion allongée Gauche ---
  {
    id: 105,
    phase: "cooldown",
    isTransition: false,
    name: "Torsion Allongée (Gauche)",
    duration: 45,
    startTime: "52:00",
    position: "Allongé sur le dos, bras en croix.",
    movement: "Ramenez le genou gauche vers la poitrine, puis laissez-le tomber vers la droite. Tournez la tête vers la gauche. Maintenez.",
    coaching: "Même étirement de l'autre côté. Relâchez tout. Laissez le poids du genou étirer naturellement. Respirez profondément.",
    imageUrl: "IMG_SPINAL_TWIST",
    targetMuscles: "Lombaires, obliques, hanches, colonne",
  },
  {
    id: 106, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "52:45",
    position: "", movement: "Retournez-vous sur le ventre.", coaching: "Posture de l'enfant.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 54 : Posture de l'enfant ---
  {
    id: 107,
    phase: "cooldown",
    isTransition: false,
    name: "Posture de l'Enfant (Child's Pose)",
    duration: 45,
    startTime: "53:00",
    position: "À genoux, fesses sur les talons, bras tendus devant, front au sol.",
    movement: "Étirez les bras le plus loin possible devant vous. Respirez dans le dos en sentant les côtes s'ouvrir à chaque inspiration. Relâchez tout.",
    coaching: "Position de repos. Sentez l'étirement dans les épaules, le dos, les hanches. Si les fesses ne touchent pas les talons, mettez un coussin entre les deux.",
    imageUrl: "IMG_CHILD_POSE",
    targetMuscles: "Dos, épaules, hanches, relaxation",
  },
  {
    id: 108, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "53:45",
    position: "", movement: "Restez à genoux.", coaching: "On étire les hanches.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 55 : Étirement du pigeon (Droite) ---
  {
    id: 109,
    phase: "cooldown",
    isTransition: false,
    name: "Pigeon (Droite)",
    duration: 45,
    startTime: "54:00",
    position: "Genou droit devant plié, jambe gauche tendue derrière. Bassin face au sol.",
    movement: "Descendez le buste vers le sol en vous appuyant sur les avant-bras ou en posant le front au sol. Respirez dans la hanche droite.",
    coaching: "Étirement profond du fessier et du piriforme. Si c'est trop intense, rapprochez le pied droit du bassin. Respirez et relâchez.",
    imageUrl: "IMG_PIGEON",
    targetMuscles: "Fessiers, piriforme, fléchisseurs de hanche",
  },
  {
    id: 110, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "54:45",
    position: "", movement: "Changez de côté.", coaching: "Même chose à gauche.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 56 : Étirement du pigeon (Gauche) ---
  {
    id: 111,
    phase: "cooldown",
    isTransition: false,
    name: "Pigeon (Gauche)",
    duration: 45,
    startTime: "55:00",
    position: "Genou gauche devant plié, jambe droite tendue derrière.",
    movement: "Descendez le buste vers le sol. Respirez dans la hanche gauche.",
    coaching: "Même étirement de l'autre côté. Laissez la gravité vous aider. Chaque expiration vous permet de descendre un peu plus.",
    imageUrl: "IMG_PIGEON",
    targetMuscles: "Fessiers, piriforme, fléchisseurs de hanche",
  },
  {
    id: 112, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "55:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Étirement final.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 57 : Figure 4 Stretch Droite ---
  {
    id: 113,
    phase: "cooldown",
    isTransition: false,
    name: "Figure 4 Stretch (Droite)",
    duration: 45,
    startTime: "56:00",
    position: "Allongé sur le dos, cheville droite posée sur le genou gauche, genou gauche plié.",
    movement: "Attrapez la cuisse gauche avec les deux mains et tirez doucement vers la poitrine. Sentez l'étirement dans le fessier droit.",
    coaching: "Étirement du piriforme allongé. Poussez le genou droit vers l'extérieur avec le coude. Respirez profondément dans l'étirement.",
    imageUrl: "IMG_FIGURE4",
    targetMuscles: "Fessiers, piriforme, rotateurs externes",
  },
  {
    id: 114, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "56:45",
    position: "", movement: "Changez de côté.", coaching: "Dernier étirement.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 58 : Figure 4 Stretch Gauche ---
  {
    id: 115,
    phase: "cooldown",
    isTransition: false,
    name: "Figure 4 Stretch (Gauche)",
    duration: 45,
    startTime: "57:00",
    position: "Allongé sur le dos, cheville gauche posée sur le genou droit.",
    movement: "Attrapez la cuisse droite et tirez vers la poitrine. Sentez l'étirement dans le fessier gauche.",
    coaching: "Dernier étirement. Relâchez toute tension. Respirez profondément. Vous avez presque terminé.",
    imageUrl: "IMG_FIGURE4",
    targetMuscles: "Fessiers, piriforme, rotateurs externes",
  },
  {
    id: 116, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "57:45",
    position: "", movement: "Tendez les jambes.", coaching: "Position finale.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 59 : Full Body Stretch ---
  {
    id: 117,
    phase: "cooldown",
    isTransition: false,
    name: "Étirement Total (Full Body Stretch)",
    duration: 45,
    startTime: "58:00",
    position: "Allongé sur le dos, bras tendus au-dessus de la tête, jambes tendues.",
    movement: "Étirez-vous au maximum : poussez les doigts vers le mur derrière vous et les orteils vers le mur devant. Grandissez-vous. Puis relâchez tout.",
    coaching: "Étirez-vous comme au réveil ! Sentez chaque muscle s'allonger. Puis relâchez complètement. Laissez le corps s'enfoncer dans le tapis.",
    imageUrl: "IMG_FULL_STRETCH",
    targetMuscles: "Full body, décompression colonne",
  },
  {
    id: 118, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "58:45",
    position: "", movement: "Relâchez tout.", coaching: "Savasana.", imageUrl: TRANS, targetMuscles: "",
  },

  // --- Exercice 60 : Savasana ---
  {
    id: 119,
    phase: "cooldown",
    isTransition: false,
    name: "Savasana (Relaxation Finale)",
    duration: 60,
    startTime: "59:00",
    position: "Allongé sur le dos, bras le long du corps paumes vers le ciel, jambes relâchées, pieds tombant naturellement sur les côtés.",
    movement: "Ne bougez plus. Fermez les yeux. Laissez votre corps s'enfoncer dans le tapis. Relâchez chaque muscle un par un : visage, mâchoire, épaules, bras, ventre, jambes, pieds.",
    coaching: "Bravo à tous pour cette magnifique séance de Pilates au sol d'une heure ! Vous avez travaillé la mobilité, la force profonde, l'équilibre et la souplesse. Prenez un moment pour vous féliciter. Pensez à bien vous hydrater. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA",
    targetMuscles: "Relaxation totale, récupération",
  },
];

// Apply real image URLs to all exercises
exercises.forEach((ex) => {
  if (ex.imageUrl && !ex.imageUrl.startsWith("http")) {
    ex.imageUrl = resolveImageUrl(ex.imageUrl);
  }
});

export const TOTAL_DURATION = exercises.reduce((sum, ex) => sum + ex.duration, 0);

export function getExerciseNumber(exercise: Exercise): number {
  const mainExercises = exercises.filter((e) => !e.isTransition);
  const idx = mainExercises.findIndex((e) => e.id === exercise.id);
  return idx + 1;
}

export function getTotalMainExercises(): number {
  return exercises.filter((e) => !e.isTransition).length;
}
