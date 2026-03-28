/*
 * SÉANCE 6 — Pilates Haut du Corps — ~45 min — Niveau Intermédiaire
 * Coach Mimi — Abidjan
 * Focus : Épaules, bras, pectoraux, dos, core
 * AUCUN POIDS — Tapis uniquement
 * Format: 45s effort / 15s transition
 */

import { resolveImageUrl } from "./imageUrls";
import type { Exercise, SessionConfig } from "./sessionTypes";

const TRANS = "";

const exercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1 — ÉCHAUFFEMENT HAUT DU CORPS (~8 min)
  // ═══════════════════════════════════════════════════════════════
  { id: 1, phase: "warmup", isTransition: false, name: "Respiration Costale", duration: 45, startTime: "00:00",
    position: "Assis en tailleur, mains sur les côtes.",
    movement: "Inspirez par le nez en sentant les côtes s'écarter latéralement. Expirez par la bouche en sentant les côtes se refermer. Gardez les épaules basses.",
    coaching: "Respiration costale latérale. Les épaules ne montent pas. Ce sont les côtes qui s'ouvrent comme un accordéon.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Diaphragme, intercostaux" },
  { id: 2, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "00:45",
    position: "", movement: "Restez assis.", coaching: "Cercles d'épaules.", imageUrl: TRANS, targetMuscles: "" },

  { id: 3, phase: "warmup", isTransition: false, name: "Cercles d'Épaules", duration: 45, startTime: "01:00",
    position: "Assis, bras le long du corps.",
    movement: "Faites de grands cercles avec les épaules : montez, reculez, descendez, avancez. 10 dans un sens, 10 dans l'autre.",
    coaching: "Mobilisation des épaules ! Grands cercles fluides. Libérez les tensions accumulées dans les trapèzes.",
    imageUrl: "IMG_RESPIRATION", targetMuscles: "Trapèzes, deltoïdes, rhomboïdes" },
  { id: 4, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "01:45",
    position: "", movement: "Restez assis.", coaching: "Ouverture thoracique.", imageUrl: TRANS, targetMuscles: "" },

  { id: 5, phase: "warmup", isTransition: false, name: "Ouverture Thoracique Assise", duration: 45, startTime: "02:00",
    position: "Assis, bras en croix.",
    movement: "Tournez le torse vers la droite en ouvrant les bras. Revenez au centre. Tournez à gauche. Rotation du thorax uniquement.",
    coaching: "Rotation thoracique ! Le bassin reste fixe. Seul le haut du corps tourne. Sentez l'ouverture de la poitrine.",
    imageUrl: "IMG_SPINE_TWIST", targetMuscles: "Colonne thoracique, obliques" },
  { id: 6, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "02:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Cat-Cow.", imageUrl: TRANS, targetMuscles: "" },

  { id: 7, phase: "warmup", isTransition: false, name: "Cat-Cow Focus Thoracique", duration: 45, startTime: "03:00",
    position: "À quatre pattes.",
    movement: "Inspirez en creusant le dos, ouvrez la poitrine. Expirez en arrondissant, poussez le sol avec les mains. Focus sur le mouvement du haut du dos.",
    coaching: "Focus haut du dos ! Poussez fort dans les mains à l'expiration. Sentez les omoplates s'écarter puis se rapprocher.",
    imageUrl: "IMG_CAT_COW", targetMuscles: "Colonne thoracique, serratus anterior" },
  { id: 8, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "03:45",
    position: "", movement: "Restez à 4 pattes.", coaching: "Thread the Needle.", imageUrl: TRANS, targetMuscles: "" },

  { id: 9, phase: "warmup", isTransition: false, name: "Thread the Needle (Droite)", duration: 45, startTime: "04:00",
    position: "À quatre pattes.",
    movement: "Passez le bras droit sous le corps vers la gauche, épaule et tempe au sol. Puis ouvrez le bras droit vers le plafond. Alternez ouverture et fermeture.",
    coaching: "Rotation thoracique profonde ! Sentez l'étirement dans toute la partie supérieure du dos et l'épaule.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 10, phase: "warmup", isTransition: true, name: "Transition", duration: 15, startTime: "04:45",
    position: "", movement: "Changez de côté.", coaching: "Thread the Needle gauche.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 2 — PILATES HAUT DU CORPS (~32 min)
  // ═══════════════════════════════════════════════════════════════

  // ── Bloc 1 : Planches & Push-Ups ──
  { id: 11, phase: "workout", isTransition: false, name: "Thread the Needle (Gauche)", duration: 45, startTime: "05:00",
    position: "À quatre pattes.",
    movement: "Bras gauche sous le corps puis vers le plafond. Rotation fluide.",
    coaching: "Même qualité ! Observez les différences entre les deux côtés.",
    imageUrl: "IMG_THREAD_NEEDLE", targetMuscles: "Colonne thoracique, épaules" },
  { id: 12, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "05:45",
    position: "", movement: "Passez en planche haute.", coaching: "Série planches.", imageUrl: TRANS, targetMuscles: "" },

  { id: 13, phase: "workout", isTransition: false, name: "Planche Haute Tenue", duration: 45, startTime: "06:00",
    position: "En planche haute, mains sous les épaules, corps en ligne droite.",
    movement: "Tenez la position. Poussez le sol avec les mains. Serrez les abdominaux. Gardez le corps parfaitement aligné.",
    coaching: "Planche solide ! Poussez le sol loin de vous. Les épaules sont actives, pas affaissées. Le corps est une planche de bois.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Deltoïdes, pectoraux, core, triceps" },
  { id: 14, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "06:45",
    position: "", movement: "Restez en planche.", coaching: "Push-Up Pilates.", imageUrl: TRANS, targetMuscles: "" },

  { id: 15, phase: "workout", isTransition: false, name: "Push-Up Pilates (Coudes serrés)", duration: 45, startTime: "07:00",
    position: "En planche haute.",
    movement: "Descendez en pliant les coudes le long du corps (pas écartés). Poitrine vers le sol. Remontez en poussant. Coudes serrés style Pilates.",
    coaching: "Coudes le long du corps ! C'est la version Pilates du push-up. Les triceps travaillent plus que les pectoraux. Descendez lentement.",
    imageUrl: "IMG_PUSHUP", targetMuscles: "Triceps, pectoraux, deltoïdes antérieurs" },
  { id: 16, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "07:45",
    position: "", movement: "Restez en planche.", coaching: "Planche avec shoulder tap.", imageUrl: TRANS, targetMuscles: "" },

  { id: 17, phase: "workout", isTransition: false, name: "Planche Shoulder Taps", duration: 45, startTime: "08:00",
    position: "En planche haute, pieds écartés pour plus de stabilité.",
    movement: "Touchez l'épaule gauche avec la main droite. Reposez. Touchez l'épaule droite avec la main gauche. Alternez sans rotation du bassin.",
    coaching: "Anti-rotation ! Le bassin ne tourne pas. Écartez les pieds pour plus de stabilité. Lent et contrôlé.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Core, deltoïdes, obliques" },
  { id: 18, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "08:45",
    position: "", movement: "Descendez sur les avant-bras.", coaching: "Planche avant-bras.", imageUrl: TRANS, targetMuscles: "" },

  { id: 19, phase: "workout", isTransition: false, name: "Planche Avant-Bras", duration: 45, startTime: "09:00",
    position: "En planche sur les avant-bras, coudes sous les épaules.",
    movement: "Tenez la position. Poussez les coudes dans le sol. Serrez les abdominaux et les fessiers. Corps en ligne droite.",
    coaching: "Poussez les coudes dans le sol ! Activez le serratus anterior. Les épaules sont loin des oreilles.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core, deltoïdes, serratus anterior" },
  { id: 20, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "09:45",
    position: "", movement: "Restez en planche.", coaching: "Up-Down Plank.", imageUrl: TRANS, targetMuscles: "" },

  { id: 21, phase: "workout", isTransition: false, name: "Up-Down Plank", duration: 45, startTime: "10:00",
    position: "En planche avant-bras.",
    movement: "Montez sur la main droite, puis la gauche (planche haute). Redescendez sur l'avant-bras droit, puis gauche. Alternez le bras qui commence.",
    coaching: "Montée-descente ! Alternez le bras qui initie le mouvement. Les épaules travaillent dur. Gardez le bassin stable.",
    imageUrl: "IMG_HIGH_PLANK", targetMuscles: "Triceps, deltoïdes, core" },
  { id: 22, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "10:45",
    position: "", movement: "Passez en planche latérale.", coaching: "Série latérale.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 2 : Planches Latérales ──
  { id: 23, phase: "workout", isTransition: false, name: "Side Plank (Droite)", duration: 45, startTime: "11:00",
    position: "En planche latérale sur l'avant-bras droit, pieds empilés.",
    movement: "Tenez la position. Bras gauche vers le plafond. Hanches hautes. Corps en ligne droite.",
    coaching: "Hanches hautes ! Poussez le sol avec l'avant-bras. L'oblique droit travaille pour maintenir l'alignement.",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, deltoïde, moyen fessier" },
  { id: 24, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "11:45",
    position: "", movement: "Restez sur le côté.", coaching: "Side Plank Hip Dips.", imageUrl: TRANS, targetMuscles: "" },

  { id: 25, phase: "workout", isTransition: false, name: "Side Plank Hip Dips (Droite)", duration: 45, startTime: "12:00",
    position: "En planche latérale sur l'avant-bras droit.",
    movement: "Abaissez la hanche vers le sol puis remontez. Mouvement contrôlé de haut en bas.",
    coaching: "Hip dips ! La hanche descend et remonte. Les obliques travaillent en concentrique et excentrique. Contrôle total.",
    imageUrl: "IMG_HIP_DIPS", targetMuscles: "Obliques, carré des lombes" },
  { id: 26, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "12:45",
    position: "", movement: "Changez de côté.", coaching: "Side Plank gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 27, phase: "workout", isTransition: false, name: "Side Plank (Gauche)", duration: 45, startTime: "13:00",
    position: "En planche latérale sur l'avant-bras gauche.",
    movement: "Tenez la position. Bras droit au plafond. Hanches hautes.",
    coaching: "Même qualité à gauche ! Poussez le sol, hanches hautes, corps aligné.",
    imageUrl: "IMG_SIDE_PLANK", targetMuscles: "Obliques, deltoïde, moyen fessier" },
  { id: 28, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "13:45",
    position: "", movement: "Restez sur le côté.", coaching: "Hip Dips gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 29, phase: "workout", isTransition: false, name: "Side Plank Hip Dips (Gauche)", duration: 45, startTime: "14:00",
    position: "En planche latérale sur l'avant-bras gauche.",
    movement: "Abaissez et remontez la hanche. Contrôle et fluidité.",
    coaching: "Contrôle ! Comparez les deux côtés. Un côté est souvent plus faible — c'est celui qui a le plus besoin de travail.",
    imageUrl: "IMG_HIP_DIPS", targetMuscles: "Obliques, carré des lombes" },
  { id: 30, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "14:45",
    position: "", movement: "Allongez-vous sur le ventre.", coaching: "Série dorsale.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 3 : Série Dorsale ──
  { id: 31, phase: "workout", isTransition: false, name: "Swan Prep", duration: 45, startTime: "15:00",
    position: "Sur le ventre, mains sous les épaules.",
    movement: "Poussez dans les mains pour lever le torse. Gardez les hanches au sol. Ouvrez la poitrine. Redescendez lentement.",
    coaching: "Extension du dos ! Ouvrez la poitrine fièrement. Les épaules descendent loin des oreilles. Le regard va vers l'avant.",
    imageUrl: "IMG_SWAN", targetMuscles: "Érecteurs du rachis, deltoïdes postérieurs" },
  { id: 32, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "15:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Swimming.", imageUrl: TRANS, targetMuscles: "" },

  { id: 33, phase: "workout", isTransition: false, name: "Swimming Focus Bras", duration: 45, startTime: "16:00",
    position: "Sur le ventre, bras et jambes décollés.",
    movement: "Battements alternés en mettant l'accent sur l'amplitude des bras. Les bras montent haut, les jambes accompagnent.",
    coaching: "Focus bras ! Les deltoïdes postérieurs et les rhomboïdes travaillent. Bras longs et forts.",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Deltoïdes postérieurs, rhomboïdes, trapèzes" },
  { id: 34, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "16:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Y-T-W.", imageUrl: TRANS, targetMuscles: "" },

  { id: 35, phase: "workout", isTransition: false, name: "Y-T-W au Sol", duration: 45, startTime: "17:00",
    position: "Sur le ventre, front au sol.",
    movement: "Levez les bras en Y (au-dessus de la tête), tenez 5s. Puis en T (sur les côtés), tenez 5s. Puis en W (coudes pliés), tenez 5s. Répétez.",
    coaching: "Y-T-W ! Trois positions qui ciblent différentes parties du dos. Y = trapèzes supérieurs. T = rhomboïdes. W = rotateurs externes.",
    imageUrl: "IMG_SWIMMING", targetMuscles: "Trapèzes, rhomboïdes, rotateurs externes" },
  { id: 36, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "17:45",
    position: "", movement: "Restez sur le ventre.", coaching: "Double Leg Kick.", imageUrl: TRANS, targetMuscles: "" },

  { id: 37, phase: "workout", isTransition: false, name: "Double Leg Kick", duration: 45, startTime: "18:00",
    position: "Sur le ventre, mains croisées dans le dos.",
    movement: "3 kicks des talons vers les fessiers. Puis extension : levez le torse et tirez les bras vers l'arrière. Alternez le côté de la tête.",
    coaching: "Extension avec ouverture des épaules ! Les mains tirent vers les fessiers pour ouvrir la poitrine. Sentez les pectoraux s'étirer.",
    imageUrl: "IMG_DOUBLE_LEG_KICK", targetMuscles: "Deltoïdes postérieurs, pectoraux, érecteurs" },
  { id: 38, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "18:45",
    position: "", movement: "Poussez en posture de l'enfant.", coaching: "Repos 15 secondes.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 4 : Core & Bras au Sol ──
  { id: 39, phase: "workout", isTransition: false, name: "Posture de l'Enfant Active", duration: 45, startTime: "19:00",
    position: "En posture de l'enfant, bras tendus loin devant.",
    movement: "Poussez les mains dans le sol et étirez-vous le plus loin possible. Sentez l'étirement des lats et des épaules.",
    coaching: "Étirement actif ! Poussez les mains loin devant tout en gardant les fesses sur les talons. Les lats s'étirent.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Grand dorsal, épaules" },
  { id: 40, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "19:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Série abdos-bras.", imageUrl: TRANS, targetMuscles: "" },

  { id: 41, phase: "workout", isTransition: false, name: "The Hundred", duration: 45, startTime: "20:00",
    position: "Allongé, tête et épaules décollées, jambes en table ou tendues.",
    movement: "Bras le long du corps, pompez vigoureusement. 5 temps inspiration, 5 temps expiration. Les bras travaillent activement.",
    coaching: "Les bras pompent avec énergie ! Sentez les triceps et les deltoïdes travailler. Le core stabilise le torse.",
    imageUrl: "IMG_HUNDRED", targetMuscles: "Deltoïdes, triceps, transverse" },
  { id: 42, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "20:45",
    position: "", movement: "Restez allongé.", coaching: "Roll-Up.", imageUrl: TRANS, targetMuscles: "" },

  { id: 43, phase: "workout", isTransition: false, name: "Roll-Up", duration: 45, startTime: "21:00",
    position: "Allongé, bras au-dessus de la tête.",
    movement: "Enroulez la colonne vertèbre par vertèbre. Les bras guident le mouvement vers l'avant. Redescendez lentement.",
    coaching: "Les bras initient le mouvement ! Ils montent au plafond puis tirent vers l'avant. Le core fait le reste.",
    imageUrl: "IMG_ROLLUP", targetMuscles: "Abdominaux, deltoïdes antérieurs" },
  { id: 44, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "21:45",
    position: "", movement: "Passez à 4 pattes.", coaching: "Bird Dog.", imageUrl: TRANS, targetMuscles: "" },

  { id: 45, phase: "workout", isTransition: false, name: "Bird Dog (Droite)", duration: 45, startTime: "22:00",
    position: "À quatre pattes.",
    movement: "Étendez le bras droit et la jambe gauche. Tenez 3 secondes. Ramenez. Répétez. Focus sur l'extension du bras.",
    coaching: "Bras long et fort ! Imaginez que vous touchez le mur devant vous. L'épaule est stable et active.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Deltoïdes, multifides, fessiers" },
  { id: 46, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "22:45",
    position: "", movement: "Changez de côté.", coaching: "Bird Dog gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 47, phase: "workout", isTransition: false, name: "Bird Dog (Gauche)", duration: 45, startTime: "23:00",
    position: "À quatre pattes.",
    movement: "Bras gauche et jambe droite. Extension et retour. Dos plat.",
    coaching: "Même qualité ! Le dos reste plat comme une table. Pas de rotation du bassin.",
    imageUrl: "IMG_BIRD_DOG", targetMuscles: "Deltoïdes, multifides, fessiers" },
  { id: 48, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "23:45",
    position: "", movement: "Passez en planche.", coaching: "Planche avec rotation.", imageUrl: TRANS, targetMuscles: "" },

  // ── Bloc 5 : Finisher ──
  { id: 49, phase: "workout", isTransition: false, name: "Planche avec Rotation (Droite)", duration: 45, startTime: "24:00",
    position: "En planche haute.",
    movement: "Tournez le corps vers la droite en levant le bras droit au plafond (Side Plank). Revenez en planche. Répétez.",
    coaching: "Rotation dynamique ! Planche haute puis Side Plank. Les obliques et les épaules travaillent ensemble.",
    imageUrl: "IMG_PLANK_ROTATION", targetMuscles: "Obliques, deltoïdes, core" },
  { id: 50, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "24:45",
    position: "", movement: "Revenez en planche.", coaching: "Rotation gauche.", imageUrl: TRANS, targetMuscles: "" },

  { id: 51, phase: "workout", isTransition: false, name: "Planche avec Rotation (Gauche)", duration: 45, startTime: "25:00",
    position: "En planche haute.",
    movement: "Tournez vers la gauche, bras gauche au plafond. Revenez. Répétez.",
    coaching: "Fluidité ! La transition entre planche et side plank doit être fluide. Pas de pause au milieu.",
    imageUrl: "IMG_PLANK_ROTATION", targetMuscles: "Obliques, deltoïdes, core" },
  { id: 52, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "25:45",
    position: "", movement: "Restez en planche.", coaching: "Push-Up final.", imageUrl: TRANS, targetMuscles: "" },

  { id: 53, phase: "workout", isTransition: false, name: "Push-Up Lent (3 sec descente)", duration: 45, startTime: "26:00",
    position: "En planche haute.",
    movement: "Descendez en 3 secondes, remontez en 1 seconde. Coudes le long du corps. Tempo lent pour maximiser le travail musculaire.",
    coaching: "3 secondes pour descendre ! Le tempo lent augmente le temps sous tension. Les triceps et pectoraux brûlent.",
    imageUrl: "IMG_PUSHUP", targetMuscles: "Pectoraux, triceps, deltoïdes" },
  { id: 54, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "26:45",
    position: "", movement: "Descendez sur les avant-bras.", coaching: "Planche finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 55, phase: "workout", isTransition: false, name: "Planche Avant-Bras Hold Final", duration: 45, startTime: "27:00",
    position: "En planche sur les avant-bras.",
    movement: "Tenez 45 secondes. Poussez les coudes dans le sol. Serrez tout : abdos, fessiers, cuisses. Respirez.",
    coaching: "Dernière planche ! 45 secondes de pur engagement. Vous êtes fort(e). Respirez et tenez. Chaque seconde compte.",
    imageUrl: "IMG_PLANK", targetMuscles: "Core complet, épaules" },
  { id: 56, phase: "workout", isTransition: true, name: "Transition", duration: 15, startTime: "27:45",
    position: "", movement: "Poussez en posture de l'enfant.", coaching: "Retour au calme.", imageUrl: TRANS, targetMuscles: "" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3 — RETOUR AU CALME (~8 min)
  // ═══════════════════════════════════════════════════════════════
  { id: 57, phase: "cooldown", isTransition: false, name: "Posture de l'Enfant", duration: 45, startTime: "28:00",
    position: "À genoux, fesses sur les talons, bras tendus devant.",
    movement: "Respirez profondément. Étirez les bras loin devant. Relâchez les épaules et le dos.",
    coaching: "Repos mérité ! Les épaules et les bras ont travaillé dur. Laissez tout se relâcher.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Épaules, dos, détente" },
  { id: 58, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "28:45",
    position: "", movement: "Restez à genoux.", coaching: "Étirement triceps.", imageUrl: TRANS, targetMuscles: "" },

  { id: 59, phase: "cooldown", isTransition: false, name: "Étirement Triceps & Épaules", duration: 45, startTime: "29:00",
    position: "Assis sur les talons.",
    movement: "Bras droit au-dessus de la tête, pliez le coude, main droite entre les omoplates. Main gauche tire le coude. Tenez 20s puis changez.",
    coaching: "Étirement des triceps et de l'épaule. Après les push-ups et les planches, vos bras en ont besoin.",
    imageUrl: "IMG_CHILD_POSE", targetMuscles: "Triceps, deltoïdes" },
  { id: 60, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "29:45",
    position: "", movement: "Allongez-vous sur le dos.", coaching: "Étirement pectoral.", imageUrl: TRANS, targetMuscles: "" },

  { id: 61, phase: "cooldown", isTransition: false, name: "Étirement Pectoral au Sol", duration: 45, startTime: "30:00",
    position: "Allongé sur le dos, bras en croix, paumes vers le plafond.",
    movement: "Laissez la gravité ouvrir la poitrine. Respirez profondément. Sentez les pectoraux s'étirer.",
    coaching: "Ouverture de la poitrine ! Après tout ce travail de planches et push-ups, les pectoraux ont besoin de s'ouvrir.",
    imageUrl: "IMG_FULL_STRETCH", targetMuscles: "Pectoraux, deltoïdes antérieurs" },
  { id: 62, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "30:45",
    position: "", movement: "Restez allongé.", coaching: "Torsion spinale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 63, phase: "cooldown", isTransition: false, name: "Torsion Spinale", duration: 45, startTime: "31:00",
    position: "Allongé, bras en croix, genoux pliés.",
    movement: "Genoux à droite, tête à gauche. Respirez. Puis changez de côté à mi-chemin.",
    coaching: "Détente de la colonne. Laissez la gravité faire le travail. Respirez profondément.",
    imageUrl: "IMG_SPINAL_TWIST", targetMuscles: "Colonne, obliques" },
  { id: 64, phase: "cooldown", isTransition: true, name: "Transition", duration: 15, startTime: "31:45",
    position: "", movement: "Étendez-vous.", coaching: "Relaxation finale.", imageUrl: TRANS, targetMuscles: "" },

  { id: 65, phase: "cooldown", isTransition: false, name: "Savasana — Relaxation", duration: 60, startTime: "32:00",
    position: "Allongé sur le dos, bras le long du corps, paumes vers le plafond.",
    movement: "Relâchez chaque muscle. Scannez des pieds à la tête. Respirez naturellement.",
    coaching: "Félicitations ! Vos épaules, bras et dos ont été renforcés en profondeur. Une posture plus forte et plus ouverte. À très bientôt avec Coach Mimi !",
    imageUrl: "IMG_SAVASANA", targetMuscles: "Relaxation complète" },
];

export const session6: SessionConfig = {
  id: "haut-du-corps",
  title: "Pilates Haut du Corps",
  subtitle: "Épaules, Bras & Dos",
  description: "Séance ciblée sur le haut du corps : planches, push-ups Pilates, série dorsale (Swan, Swimming, Y-T-W), rotations thoraciques. Renforcez épaules, bras et dos sans poids.",
  level: "Intermédiaire",
  duration: "~33 min",
  equipment: "Tapis uniquement",
  phaseLabels: { warmup: "Mobilité Haut du Corps", workout: "Pilates Haut du Corps", cooldown: "Étirements & Récupération" },
  exercises: exercises.map((ex) => ({ ...ex, imageUrl: ex.imageUrl ? resolveImageUrl(ex.imageUrl) || ex.imageUrl : "" })),
  totalDuration: exercises.reduce((sum, ex) => sum + ex.duration, 0),
  color: "blue",
  finishMessage: "Bravo ! Vos épaules, bras et dos ont été renforcés en profondeur. Planches, push-ups, série dorsale — un travail complet du haut du corps. Posture améliorée ! À très bientôt avec Coach Mimi !",
};
